# Printing

[← Back to README](../README.md)

## Parts

| Part | File | Qty | Size (mm) | Orientation |
|---|---|---|---|---|
| Fan holder, right | `stl/fan_holder_right.stl` | 1 | 142 × 139 × 34 | Grille face on the bed |
| Fan holder, left | `stl/fan_holder_left.stl` | 1 | 142 × 139 × 34 | Grille face on the bed |
| Top plate | `stl/top_plate.stl` | 1 | 86 × 139 × 7 | Flat side on the bed, bosses up |
| Bottom plate | `stl/bottom_plate.stl` | 1 | 86 × 140 × 13 | Flat side on the bed, feet up |
| Handle | `stl/handle.stl` | 2 | 78 × 39 × 8 | Lying flat |

The STL files are already in print orientation. Do not auto-orient them. For heat-set inserts, print the holders from `stl/heat-set-insert/` instead (same names); the plates and handles do not change. Left and right holders are mirror images; they are not interchangeable, because the cable hole has to end up low at the rear on both sides.

## Material

**PETG.** The K11 blows warm air out of its rear and the case sits close to it; PLA starts to soften around 55–60 °C. A matte PETG hides layer lines best. ASA also works if your printer has an enclosure.

Filament use is roughly 250–320 g for all parts, depending on walls and infill.

## Settings for a clean surface

These are written for a 0.4 mm nozzle and work in Bambu Studio, OrcaSlicer, PrusaSlicer and Cura (names differ slightly).

| Setting | Value | Why |
|---|---|---|
| Layer height | 0.12–0.16 mm | Finer layer lines on the vertical walls. The parts are short, so this costs little time. |
| First layer height | 0.2 mm | Reliable first layer; this is the visible grille face of the holders. |
| Walls (perimeters) | 3–4, Arachne wall generator | The 2.4 mm shell prints as solid walls. |
| Top / bottom shell layers | 5–6 / 5 | No infill pattern showing through. |
| Top surface pattern | Monotonic | Even, parallel lines on visible top faces. |
| Ironing | On, top surfaces only | Smooth top of the top plate and handles. |
| Seam position | Back (rear), scarf seam on if available | The STL "back" is the case's rear, so the seam ends up next to the cables. |
| Infill | 15–20 %, gyroid | Only the screw blocks and feet have infill. |
| Supports | Off | Nothing needs them. Bridges in the holder seat frame are 6–8 mm. |
| Outer wall speed | 40–60 mm/s | Slower outer walls give a cleaner, more even surface. |
| Outer wall acceleration | ≤ 3000 mm/s² (Bambu/Orca) | Less ringing next to corners and the cable hole. |
| Travel | Avoid crossing walls on; Z-hop 0.4 mm on travel | PETG tends to drag and scratch top surfaces without it. |
| Elephant-foot compensation | 0.1–0.15 mm | Keeps the first-layer grille fins crisp. |
| Nozzle / bed (PETG) | 235–245 °C / 70–80 °C | Follow your filament's label. |
| Part cooling (PETG) | 30–50 %, 100 % for bridges | Strong enough for the seat-frame bridges without weak layers. |

### Tips

- **Dry the PETG** before printing (about 65 °C for 4–6 hours). Wet PETG strings, bubbles and leaves blobs.
- **Bed surface.** The grille face of each holder is printed on the bed, so the bed decides how it looks. A textured PEI sheet gives an even matte face that hides marks; a smooth PEI sheet gives a glossy face. Clean the sheet first; fingerprints show on PETG.
- **Retraction.** Tune it for your filament to avoid strings across the grille (typically 0.6–1.0 mm on direct drive, 4–6 mm on Bowden).
- **Print one fan holder first** and test it on the K11 before printing the rest.

## After printing

- Remove any strings from the grille and the cable hole.
- Check that an M3 nut slides into each of the 8 hex pockets. If one is too tight, warm the nut with a hair dryer or press it in with the screw from the other side; do not force it with a hammer.
- The countersunk channels in the plates should take a DIN 7991 M3 head flush. If a head sits proud, check for elephant foot or a blob in the channel.
