#!/usr/bin/env python3
"""Geometric acceptance checks for the K11 dual-fan case.

Exports every part from cad/k11_dual_fan_case.scad in its assembled position
and checks, for several K11 thicknesses and both fan thicknesses:

  * no printed part intersects the K11 body, the fans or the front/rear port zones
  * printed parts do not overlap each other (they only touch)
  * every plate screw passes through its slot into the holder
  * nut pockets: the M3 nut fits, cannot turn, has plastic above it and the screw reaches through it
  * insert / self-tap variants: enough plastic around the hole
  * every fan screw passes freely through the face
  * the handle flanges sit on top of the holders
  * every print-ready part is a single watertight solid that fits a 180 mm bed

Usage:  python tools/check_geometry.py            (exit code 1 on any failure)
"""
import os
import sys
import tempfile
from pathlib import Path

import numpy as np
import trimesh
from manifold3d import Manifold, Mesh

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build import SCAD, openscad, export  # noqa: E402

TOL = 0.5  # mm^3 numerical noise allowance
FACE, PLATE_T, HZ, FOOT_H, SCREW_Y = 2.4, 3.0, 71, 10, 47
NUT_AF, NUT_T, NUT_TOP, SCREW_LEN = 5.5, 2.4, 3.6, 10.0
ZC = FOOT_H + PLATE_T + HZ
ASSEMBLY = ["holder_right", "holder_left", "top_plate", "bottom_plate", "handle_front", "handle_rear"]
OBSTACLES = ["k11", "fan_right", "fan_left", "front_zone", "rear_zone"]
PRINT_PARTS = ["fan_holder_right", "fan_holder_left", "top_plate", "bottom_plate", "handle"]

failures = []


def check(ok, msg):
    print(("  ok    " if ok else "  FAIL  ") + msg)
    if not ok:
        failures.append(msg)


def manifold(path):
    t = trimesh.load_mesh(path)
    return Manifold(Mesh(vert_properties=np.asarray(t.vertices, np.float32),
                         tri_verts=np.asarray(t.faces, np.uint32))), t


def cyl(x, y, z0, z1, d):
    return Manifold.cylinder(z1 - z0, d / 2, d / 2, 48).translate((x, y, z0))


def check_assembly(tmp, k11_t, fan_t, anchor="nut"):
    print(f"\n== K11 thickness {k11_t} mm, fan thickness {fan_t} mm, screw anchor: {anchor} ==")
    seat = FACE + fan_t + 0.6
    defines = {"k11_thickness": k11_t, "fan_thickness": fan_t, "screw_anchor": anchor}
    P = {}
    for name in ASSEMBLY + OBSTACLES:
        out = Path(tmp) / f"{name}_{k11_t}_{fan_t}_{anchor}.stl"
        export(out, export_part=name, **defines)
        P[name] = manifold(out)[0]

    for part in ASSEMBLY:
        for obs in OBSTACLES:
            v = (P[part] ^ P[obs]).volume()
            check(v < TOL, f"{part:13s} x {obs:10s} intersection {v:7.3f} mm3")
    pairs = [("holder_right", "holder_left"), ("holder_right", "top_plate"), ("holder_left", "top_plate"),
             ("holder_right", "bottom_plate"), ("holder_left", "bottom_plate"),
             ("handle_front", "top_plate"), ("handle_rear", "top_plate")]
    pairs += [(h, c) for h in ("handle_front", "handle_rear") for c in ("holder_right", "holder_left")]
    for a, b in pairs:
        v = (P[a] ^ P[b]).volume()
        check(v < TOL, f"{a} x {b} overlap {v:.3f} mm3")

    top, holder = P["top_plate"].bounding_box(), P["holder_right"].bounding_box()
    check(abs(top[2] - holder[5]) < 0.01, f"top plate rests on the holders (z {top[2]:.2f} / {holder[5]:.2f})")
    for h in ("handle_front", "handle_rear"):
        check(abs(P[h].bounding_box()[2] - (ZC + HZ)) < 0.01, f"{h} flange sits on the holder top")

    xs = k11_t / 2 + 8.8
    for sx in (-1, 1):
        cup = P["holder_right"] if sx > 0 else P["holder_left"]
        for sy in (-1, 1):
            rod_top = cyl(sx * xs, sy * SCREW_Y, ZC + HZ - 7.5, ZC + HZ + PLATE_T + 1, 2.4)
            rod_bot = cyl(sx * xs, sy * SCREW_Y, ZC - HZ - PLATE_T - 1, ZC - HZ + 7.5, 2.4)
            v = (rod_top ^ (cup + P["top_plate"])).volume() + (rod_bot ^ (cup + P["bottom_plate"])).volume()
            check(v < TOL, f"plate screw ({sx:+d},{sy:+d}) passes slot and holder hole, contact {v:.3f} mm3")
            for sz in (1, -1):  # top and bottom block
                face_z = ZC + sz * HZ                      # top (or bottom) face of the holder
                inward = -sz                               # direction into the holder
                def zr(a, b):                              # z range measured inwards from that face
                    lo, hi = sorted((face_z + inward * a, face_z + inward * b))
                    return lo, hi
                where = f"({sx:+d},{sy:+d},{'top' if sz > 0 else 'bottom'})"
                if anchor == "nut":
                    lo, hi = zr(NUT_TOP, NUT_TOP + NUT_T)
                    nut = Manifold.cylinder(hi - lo, NUT_AF / 2 / np.cos(np.pi / 6), NUT_AF / 2 / np.cos(np.pi / 6), 6).translate((sx * xs, sy * SCREW_Y, lo))
                    check((nut ^ cup).volume() < TOL, f"nut {where} fits its pocket")
                    turned = Manifold.cylinder(hi - lo, NUT_AF / 2 / np.cos(np.pi / 6), NUT_AF / 2 / np.cos(np.pi / 6), 6).rotate((0, 0, 30)).translate((sx * xs, sy * SCREW_Y, lo))
                    check((turned ^ cup).volume() > 1.0, f"nut {where} cannot turn in its pocket")
                    lo2, hi2 = zr(0.2, NUT_TOP - 0.2)
                    ring = cyl(sx * xs, sy * SCREW_Y, lo2, hi2, 7.0) - cyl(sx * xs, sy * SCREW_Y, lo2 - 1, hi2 + 1, 3.6)
                    check((ring ^ cup).volume() / ring.volume() > 0.99, f"nut {where} has {NUT_TOP} mm plastic above it")
                    check(SCREW_LEN - PLATE_T >= NUT_TOP + NUT_T, f"M3x10 screw {where} reaches through the whole nut")
                elif anchor == "insert":
                    lo2, hi2 = zr(0.5, 5.5)
                    ring = cyl(sx * xs, sy * SCREW_Y, lo2, hi2, 7.0) - cyl(sx * xs, sy * SCREW_Y, lo2 - 1, hi2 + 1, 4.2)
                    check((ring ^ cup).volume() / ring.volume() > 0.99, f"insert {where} has plastic all around")
                else:
                    lo2, hi2 = zr(1, 7)
                    ring = cyl(sx * xs, sy * SCREW_Y, lo2, hi2, 4.0) - cyl(sx * xs, sy * SCREW_Y, lo2 - 1, hi2 + 1, 2.7)
                    check((ring ^ cup).volume() / ring.volume() > 0.99, f"self-tap {where} has material around the pilot")

    for side, cup in ((1, "holder_right"), (-1, "holder_left")):
        xo = side * (k11_t / 2 + seat)
        x0 = xo - 3.5 if side > 0 else xo - 0.5
        for a in (-1, 1):
            for b in (-1, 1):
                rod = Manifold.cylinder(4.0, 1.2, 1.2, 32).rotate((0, 90, 0)).translate((x0, a * 52.5, ZC + b * 52.5))
                v = (rod ^ P[cup]).volume()
                check(v < TOL, f"fan screw {cup} ({a:+d},{b:+d}) passes the face, contact {v:.3f} mm3")

    print(f"  info  outer width {P['holder_right'].bounding_box()[3] * 2:.1f} mm, "
          f"K11 sits {P['k11'].bounding_box()[2]:.1f} mm above the desk")


def check_print_parts(tmp, fan_t, anchor="nut"):
    print(f"\n== print-ready parts, fan thickness {fan_t} mm, screw anchor: {anchor} ==")
    for view in PRINT_PARTS:
        out = Path(tmp) / f"print_{view}_{fan_t}_{anchor}.stl"
        export(out, view=view, fan_thickness=fan_t, screw_anchor=anchor)
        m, t = manifold(out)
        ext = t.extents
        check(t.is_watertight and t.is_winding_consistent and t.volume > 0, f"{view}: watertight solid")
        check(len(m.decompose()) == 1, f"{view}: single body")
        check(max(ext[:2]) <= 180 and ext[2] <= 180, f"{view}: {ext[0]:.1f} x {ext[1]:.1f} x {ext[2]:.1f} mm fits a 180 mm bed")
        check(abs(t.bounds[0][2]) < 1e-3, f"{view}: lies on the bed")
        print(f"  info  {view}: {t.volume / 1000:.1f} cm3 solid volume")


def main():
    openscad()  # fail early if OpenSCAD is missing
    with tempfile.TemporaryDirectory() as tmp:
        for k11_t in (32, 44, 56):
            check_assembly(tmp, k11_t, 25, "nut")
        check_assembly(tmp, 44, 15, "nut")
        check_assembly(tmp, 44, 25, "insert")
        check_assembly(tmp, 44, 25, "self_tap")
        check_print_parts(tmp, 25, "nut")
        check_print_parts(tmp, 15, "nut")
        check_print_parts(tmp, 25, "insert")
    print(f"\nRESULT: {'all checks passed' if not failures else f'{len(failures)} failure(s)'}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
