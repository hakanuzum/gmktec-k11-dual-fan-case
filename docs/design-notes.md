# Design notes

[← Back to README](../README.md)

## Sources for the dimensions

| Value | Source |
|---|---|
| K11 side-face envelope 126 × 133 mm, corner radius 5.95 mm | [orenaksakal/gmktec-k11-noctua-mod](https://github.com/orenaksakal/gmktec-k11-noctua-mod), fit-tested on a real K11 |
| 6 mm corner collar, collar only at the corners (\|y\|, \|z\| ≥ 44 mm) | same |
| Fan pocket 121 × 121 mm, 25.6 mm from face to K11 (fan + Noctua pads) | same |
| K11 size 58 × 132 × 125 mm with covers, port list, rear exhaust | [Notebookcheck review](https://www.notebookcheck.net/GMK-NucBox-K11-mini-PC-review-Strong-performance-per-dollar-with-AMD-Zen-4.968377.0.html) |
| K11 body thickness with both covers removed | Not published. Handled by the slotted plates (32–56 mm). |

## How it is put together

- **Two fan holders** press the fans against the two open faces of the K11 and grip its corners with a 6 mm collar. They are hollow shells: 2.4 mm outer wall and grille face, plus four solid blocks for the plate screws. The cavity's roof slopes at 45° up to the seat frame, so the frame the K11 rests on prints without supports.
- **Top and bottom plates** tie the holders together. Each plate has four slotted, countersunk channels. Because the slots are 12 mm long, the screw can land anywhere in a 24 mm range of K11 thickness (32–56 mm).
- **An 8 mm air gap** (plenum) sits between the K11's vented top/bottom sides and each plate. The plates have seven vent slots over it, and the gap is open at the front and back.
- **Screw anchors.** The plate screws thread into metal, not plastic: by default an M3 hex nut pressed into a hex pocket in each corner block (pocket open towards the fan opening, 3.6 mm of plastic above the nut, corners pointing up and down in print so it needs no support). `screw_anchor = "insert"` gives 4.0 mm holes for heat-set inserts; `"self_tap"` gives 2.6 mm pilot holes.
- **Handles** are part of the top plate: a 70 × 22 mm finger opening, 6 mm posts and bar, 8 mm thick with chamfered edges. The top of the opening slopes at 45° on both sides with a 40 mm flat bridge, so they print upright without supports.
- **Fans** are screwed to the grille face with their own screws, so they cannot fall out during assembly and no tight pocket is needed.

## Coordinate system (assembly)

- X: left/right. The K11 is centred on X = 0; its open faces are at ±T/2.
- Y: front (−) / rear (+). The K11 front face is at Y = −66.
- Z: up. The desk is Z = 0; the K11 centre is at Z = 84.

Holder print coordinates: outer face on the bed (Z = 0, pointing inwards), print X = assembly Z, print Y = assembly Y.

## Key numbers

| | mm |
|---|---|
| Outer face to K11 face (`seat`) | 28.0 |
| Holder depth including collar | 34.0 |
| Holder outline | 142 × 139 |
| Case width | T + 56 (100 for T = 44) |
| Height | 158 without handles, 186 with |
| Handle opening | 70 × 22 (40 flat under the bar) |
| K11 above the desk | 21.5 |
| Plate screw position | X = ±(T/2 + 8.8), Y = ±47 |
| Fan screw square | 105 |
| Cable hole | 13 × 7.5, rear wall, 45 below centre |
| Screw block | 10 × 11, nut pocket 5.7 across flats, nut 3.6 below the holder top |
| Screw reach | M3×10 minus 3 mm plate = 7 mm into the holder, through the whole 2.4 mm nut |

## Known limits

- Not yet printed and fitted on a real K11. The checks are geometric checks against a stand-in model, plus straight-line assembly paths and a layer-by-layer overhang analysis.
- The K11 model is approximate. Port positions come from photos. The case does not touch the front or rear faces, so this does not affect the printed parts.
- With 15 mm fans and a very thin K11 body, the plates overhang the holders by a few millimetres.
- Fans on USB run at full speed (no PWM control).
