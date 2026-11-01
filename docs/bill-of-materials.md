# Bill of materials

[← Back to README](../README.md)

Example shops and prices were checked in November 2026 and will change. Any equivalent part works.

## Fans (2)

Any 120 mm fan with standard 105 mm hole spacing fits. 25 mm thick fans fit as-is; 15 mm slim fans need `fan_thickness = 15` in the SCAD file.

| Fan | Voltage | Power from USB | Notes |
|---|---|---|---|
| Noctua NF-F12 PWM | 12 V | Through a 5 V→12 V step-up cable | The value the design was built around. Max 0.05 A (0.6 W). Box includes 4 fan screws, a Low-Noise Adaptor (L.N.A.) and a Y-cable. Example (Turkey): [PTTAVM, 1,961 TL](https://www.pttavm.com/noctua-nf-f12-pwm-120mm-1500-300rpm-55cfm-max-22-4db-max-krem-bordo-kasa-fani-p-1437883957) |
| Noctua NF-F12 5V PWM | 5 V | Direct, USB cable included | No step-up cable needed. Harder to find in some countries. [Product page](https://noctua.at/en/nf-f12-5v-pwm) |
| Arctic P12 PWM PST | 12 V | Through a step-up cable | Budget option, widely available. |
| be quiet! Pure Wings 2 120 | 12 V | Through a step-up cable | Quiet budget option. |
| Slim: Noctua NF-A12x15 PWM, Arctic P12 Slim PWM PST | 12 V | Through a step-up cable | Set `fan_thickness = 15`; the case gets 20 mm narrower. |

Do not run a 5 V fan from a 12 V source. Do not expect a 12 V fan to spin reliably on plain 5 V USB.

## USB power for 12 V fans

| Item | Qty | Notes |
|---|---|---|
| USB 5 V→12 V step-up fan cable, USB-A → 3/4-pin | 1 or 2 | Example: Akasa AK-CBFA10-60BK (60 cm, 12 V max 0.7 A). The listing must say "5V to 12V", "boost" or "step-up". Search terms in Turkish: *USB 12V fan kablosu yükseltici 4 pin*. |

One cable per fan uses two of the K11's three rear USB 2.0 ports. Two NF-F12 fans can also share one cable through the Y-cable in the Noctua box (2 × 0.6 W at 12 V is within a USB 2.0 port's 2.5 W).

Fans on USB run at full speed because there is no PWM signal. A step-up cable with a speed knob, or the Noctua L.N.A., makes them quieter.

## Screws

| Item | Qty | Notes |
|---|---|---|
| M3×10 countersunk hex socket screw, DIN 7991 (ISO 10642), black | 8 (+2 spare) | The plate channels are countersunk for this head; it sits flush and needs no washer. Example (Turkey): [Tokgözler, 1.30 TL each](https://www.tokgozler.com/m3x10-din-7991-havsa-basli-imbus-109-kalite-celik-civata-siyah). Stainless A2 is fine too. |
| M3 hex nut, DIN 934 (ISO 4032) | 8 (+2 spare) | Pressed into the hex pockets inside the fan holders; the screws thread into them. Black or zinc, either works. Hardware stores sell them per piece. |
| Fan screws | 8 | Supplied with the fans. Replacement: standard "case fan screws". |

Not suitable: button-head (ISO 7380) or cheese-head screws. Their heads stand proud of the countersunk channel and bear on only 1 mm of plastic on each side of the slot.

### Alternative: heat-set inserts

If you own a soldering iron, print the fan holders from `stl/heat-set-insert/` instead and melt in 8 brass M3 heat-set inserts (outer diameter 4.2–4.6 mm, length 4–5.7 mm, for example "M3×5×4.2"; hole is 4.0 mm). The screws and plates stay the same; you do not need the nuts.

### Alternative: no nuts

`screw_anchor = "self_tap"` in the SCAD file makes 2.6 mm pilot holes instead; the screw then cuts its own thread in the plastic. It works, but the thread wears each time you open the case and strips if overtightened. Nuts or inserts are better.

## Tools

- 2 mm hex key (plate screws)
- Phillips screwdriver (fan screws, and opening the K11)

## Optional

- 4 small self-adhesive rubber feet for the pedestal feet
- 1 mm foam tape for fans without corner pads, to stop vibration
- Matte black PETG for the cleanest look (see [printing.md](printing.md))
