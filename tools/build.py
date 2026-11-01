#!/usr/bin/env python3
"""Build every derived file from cad/k11_dual_fan_case.scad.

  python tools/build.py stl      print-ready STL files            -> stl/
  python tools/build.py viewer   interactive 3D viewer            -> viewer/index.html
  python tools/build.py images   rendered pictures                -> docs/images/
  python tools/build.py readme   low-poly assembly inside README.md and README.tr.md
  python tools/build.py check    geometry acceptance checks (tools/check_geometry.py)
  python tools/build.py all      everything above

Needs OpenSCAD 2024 or newer (manifold backend) and `pip install -r tools/requirements.txt`.
Set OPENSCAD=/path/to/openscad if it is not on PATH.
"""
import base64
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAD = ROOT / "cad" / "k11_dual_fan_case.scad"

PRINT_FILES = {  # view name in the SCAD -> file in stl/
    "fan_holder_right": "fan_holder_right.stl",
    "fan_holder_left": "fan_holder_left.stl",
    "top_plate": "top_plate.stl",
    "bottom_plate": "bottom_plate.stl",
}
VIEWER_PARTS = [
    "holder_right", "holder_left", "top_plate", "bottom_plate",
    "v_k11_shell", "v_k11_pcb", "v_k11_cpu", "v_k11_ram", "v_k11_ports", "v_k11_usb", "v_k11_led",
    "v_fan_right_frame", "v_fan_right_rotor", "v_fan_right_pads",
    "v_fan_left_frame", "v_fan_left_rotor", "v_fan_left_pads",
    "v_screws_top_right", "v_screws_top_left", "v_screws_bottom_right", "v_screws_bottom_left",
    "v_fan_screws_right", "v_fan_screws_left",
    "v_anchors_top_right", "v_anchors_top_left", "v_anchors_bottom_right", "v_anchors_bottom_left",
]
README_PARTS = ["holder_right", "holder_left", "top_plate", "bottom_plate", "k11"]
IMAGES = {  # file -> (OpenSCAD defines, camera "tx,ty,tz,rx,ry,rz,dist", size)
    "hero.png": ({}, "0,0,95,62,0,35,600", "1600,1200"),
    "exploded.png": ({"explode": 50}, "0,0,95,62,0,35,760", "1600,1200"),
    "fan-side.png": ({}, "0,0,95,90,0,90,560", "1400,1200"),
    "rear.png": ({}, "0,0,100,75,0,180,580", "1400,1200"),
    "section.png": ({"section_cut": "true"}, "0,0,90,75,0,330,430", "1600,1200"),
    "holder-inside.png": ({"view": "fan_holder_right"}, "0,0,10,35,0,20,330", "1400,1100"),
    "print-layout.png": ({"view": "print_layout"}, "125,62,0,38,0,0,660", "1600,1000"),
    "top-plate.png": ({"view": "top_plate"}, "0,0,14,58,0,25,260", "1400,1000"),
}


def openscad():
    exe = os.environ.get("OPENSCAD") or shutil.which("openscad") or "/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD"
    if not Path(exe).exists() and not shutil.which(exe):
        sys.exit("OpenSCAD not found. Install OpenSCAD 2024+ or set OPENSCAD=/path/to/openscad")
    return exe


def _defines(**values):
    args = []
    for k, v in values.items():
        v = f'"{v}"' if isinstance(v, str) and v not in ("true", "false") else v
        args += ["-D", f"{k}={v}"]
    return args


def export(out, **values):
    """Run OpenSCAD with -D overrides and write `out` (STL or PNG)."""
    subprocess.run([openscad(), "--backend=manifold", "-q", *_defines(**values), "-o", str(out), str(SCAD)], check=True)


def build_stl():
    (ROOT / "stl").mkdir(exist_ok=True)
    for view, name in PRINT_FILES.items():
        export(ROOT / "stl" / name, view=view)
        print("stl/" + name)
    # variant: fan holders for M3 heat-set inserts (plates and handles are the same)
    (ROOT / "stl" / "heat-set-insert").mkdir(exist_ok=True)
    for view in ("fan_holder_right", "fan_holder_left"):
        export(ROOT / "stl" / "heat-set-insert" / f"{view}.stl", view=view, screw_anchor="insert")
        print(f"stl/heat-set-insert/{view}.stl")


def build_viewer():
    import numpy as np
    import trimesh

    def b64(a):
        return base64.b64encode(np.ascontiguousarray(a).tobytes()).decode()

    data = {}
    with tempfile.TemporaryDirectory() as tmp:
        for part in VIEWER_PARTS:
            out = Path(tmp) / f"{part}.stl"
            export(out, export_part=part, k11_thickness=44)
            m = trimesh.load_mesh(out, process=True)
            v, f = np.asarray(m.vertices, np.float32), np.asarray(m.faces)
            wide = len(v) >= 65536
            data[part] = {"p": b64(v), "i": b64(f.astype(np.uint32 if wide else np.uint16)), "w": 4 if wide else 2}
    template = (ROOT / "tools" / "viewer_template.html").read_text()
    js = (ROOT / "tools" / "viewer.js").read_text()
    page = (template.replace("/*__MESH_DATA__*/", "window.__MESH__=" + json.dumps(data, separators=(",", ":")) + ";")
                    .replace("/*__APP_JS__*/", js))
    head = '<!doctype html>\n<html lang="en">\n<head>\n'
    page = head + page.replace("<style>", "<style>", 1)
    page = page.replace("</style>", "</style>\n</head>\n<body>", 1) + "\n</body>\n</html>\n"
    out = ROOT / "viewer" / "index.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(page)
    print(f"viewer/index.html  {out.stat().st_size / 1e6:.2f} MB")


def build_images():
    (ROOT / "docs" / "images").mkdir(parents=True, exist_ok=True)
    for name, (defs, camera, size) in IMAGES.items():
        out = ROOT / "docs" / "images" / name
        subprocess.run([openscad(), "--backend=manifold", "-q", *_defines(**defs), f"--camera={camera}",
                        f"--imgsize={size}", "--colorscheme=Tomorrow", "-o", str(out), str(SCAD)], check=True)
        print("docs/images/" + name)


def build_readme(max_kb=430):
    """Embed a coarse, monochrome assembly as an ```stl block (GitHub renders it in 3D).

    The geometry comes from the SCAD with lowpoly=true (no hidden details, coarse circles).
    Only the flat plates are decimated if the text would exceed max_kb.
    """
    import trimesh

    parts = {}
    with tempfile.TemporaryDirectory() as tmp:
        for part in README_PARTS:
            out = Path(tmp) / f"{part}.stl"
            export(out, export_part=part, lowpoly="true", k11_thickness=44)
            parts[part] = trimesh.load_mesh(out, process=True)

    def stl_text(mesh):
        q = lambda x: f"{round(x * 2) / 2:g}"   # 0.5 mm grid keeps the README small
        lines = ["solid K11_DUAL_FAN_CASE_PREVIEW"]
        for tri, n in zip(mesh.triangles, mesh.face_normals):
            lines.append("facet normal " + " ".join(f"{round(c, 1):g}" for c in n))
            lines.append("outer loop")
            lines += ["vertex " + " ".join(q(c) for c in p) for p in tri]
            lines += ["endloop", "endfacet"]
        lines.append("endsolid K11_DUAL_FAN_CASE_PREVIEW")
        return "\n".join(lines)

    ratio = 1.0
    while True:
        meshes = []
        for name, m in parts.items():
            if ratio < 1.0 and name in ("top_plate", "bottom_plate"):
                m = m.simplify_quadric_decimation(face_count=int(len(m.faces) * ratio))
            meshes.append(m)
        mesh = trimesh.util.concatenate(meshes)
        text = stl_text(mesh)
        if len(text) / 1e3 <= max_kb or ratio < 0.3:
            break
        ratio -= 0.1
    block = "```stl\n" + text + "\n```"
    for readme in ("README.md", "README.tr.md"):
        path = ROOT / readme
        page = path.read_text()
        start, end = "<!-- model:start -->", "<!-- model:end -->"
        before, rest = page.split(start, 1)
        after = rest.split(end, 1)[1]
        path.write_text(f"{before}{start}\n{block}\n{end}{after}")
    print(f"README model: {len(mesh.faces)} triangles (plates at {ratio:.0%}), {len(block) / 1e3:.0f} kB per README")


def main():
    steps = {"stl": build_stl, "viewer": build_viewer, "images": build_images, "readme": build_readme}
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    if what == "check":
        from check_geometry import main as check
        sys.exit(check())
    for name in (steps if what == "all" else [what]):
        steps[name]()
    if what == "all":
        from check_geometry import main as check
        sys.exit(check())


if __name__ == "__main__":
    main()
