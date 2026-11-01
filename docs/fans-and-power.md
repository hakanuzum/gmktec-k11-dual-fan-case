# Fans, power and airflow

[← Back to README](../README.md)

## Which fans fit

| Size | Fits | Setting |
|---|---|---|
| 120 × 120 × 25 mm | Yes | Default (`fan_thickness = 25`) |
| 120 × 120 × 15 mm (slim) | Yes | `fan_thickness = 15`; the case gets 20 mm narrower |
| 140 mm | No | The K11 side face is only 125 × 132 mm |

All standard 120 mm fans share the 105 mm hole spacing the fan screws use. Fans without rubber corner pads can get a strip of 1 mm foam tape on the face side to stop vibration.

## Powering a fan from USB

The K11 has three USB-A 2.0 ports on the back. Each gives 5 V at up to 0.5 A (2.5 W).

| Fan voltage | What you need |
|---|---|
| 5 V USB fan (e.g. Noctua NF-F12 5V PWM) | Nothing; plug it in with its USB cable |
| 12 V fan (e.g. Noctua NF-F12 PWM, Arctic P12) | A USB 5 V→12 V step-up fan cable |

A step-up cable has a small converter that turns USB's 5 V into 12 V. A plain "USB fan cable" without one gives only 5 V: most 12 V fans will not start reliably on it.

Power budget: an NF-F12 PWM draws at most 0.6 W at 12 V. Two of them on one step-up cable through a Y-splitter stay well within one USB 2.0 port.

## Speed and noise

USB provides no PWM speed signal, so a 4-pin PWM fan runs at full speed. For an NF-F12 PWM that is 1500 rpm and 22.4 dB(A). Options for less noise:

- the Low-Noise Adaptor (L.N.A.) that comes with Noctua 12 V fans;
- a step-up cable or USB fan controller with a speed knob.

## Airflow layouts

| Layout | How | Effect |
|---|---|---|
| **Both in** (default) | Both fan arrows point at the K11 | Positive pressure inside. Cool air reaches the CPU blower and the RAM/SSD side; warm air leaves through the K11's rear exhaust, the top-plate slots and the air gap below the K11. |
| CPU in, RAM out | Flip the RAM/SSD-side fan | The layout suggested by the reference project. |

Nothing has to be reprinted to switch. Compare both under the same load if you want numbers.

The K11 exhausts its CPU heat through the rear ([Notebookcheck](https://www.notebookcheck.net/GMK-NucBox-K11-mini-PC-review-Strong-performance-per-dollar-with-AMD-Zen-4.968377.0.html)); keep at least a few centimetres behind the case free.

The [live viewer](https://hakanuzum.github.io/gmktec-k11-dual-fan-case/viewer/) shows both layouts with animated arrows.
