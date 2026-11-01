// =====================================================================
//  GMKtec K11 dual-fan case
//  Two 120 mm fans, USB powered, no soldering. Units: mm.
//
//  Collar and fan-pocket dimensions are the values that were fit-tested
//  on a real K11 in github.com/orenaksakal/gmktec-k11-noctua-mod.
//
//  Printed parts (all fit a 180 x 180 mm bed):
//    fan_holder_right, fan_holder_left  1 each (mirrored so the cable hole sits low at the rear)
//    top_plate                          1 (with the two carry handles, one piece)
//    bottom_plate                       1 (with feet)
//  Hardware: 8 x M3x10 countersunk hex socket screws (DIN 7991), no washers,
//            + 8 x M3 hex nuts (DIN 934) pressed into pockets in the fan holders
//            (or 8 x M3 heat-set inserts, see screw_anchor). Fan screws come with the fans.
//  Tools:    2 mm hex key, Phillips screwdriver.
//
//  The K11 body thickness (top and bottom covers removed) is not published.
//  The slotted screw channels in the plates accept any thickness from 32 to 56 mm,
//  so nothing has to be measured.
// =====================================================================

/* [View] */
// What to show
view = "assembly"; // [assembly:Assembly (colour), fan_holder_right:Fan holder right, fan_holder_left:Fan holder left, top_plate:Top plate (with handles), bottom_plate:Bottom plate (feet), print_layout:All printed parts]
// Exploded view distance
explode = 0; // [0:1:80]
// Cut the assembly in half to see inside
section_cut = false;
// Fan colour (preview only)
fan_style = "noctua"; // [noctua:Noctua (beige/brown), arctic:Arctic (black)]
// Case colour (preview only)
case_color = "black"; // [black:Black, space_grey:Space grey, white:White]
// Show the K11 and the fans
show_device = true;

/* [Parts] */
// Two carry handles, printed as part of the top plate
handles = true;
// Fan thickness: standard 120 mm fans are 25 mm, slim fans 15 mm
fan_thickness = 25; // [25:25 mm (standard), 15:15 mm (slim)]
// What the plate screws thread into inside the fan holders
screw_anchor = "nut"; // [nut:M3 hex nut in a hex pocket (no tools), insert:M3 heat-set brass insert (soldering iron), self_tap:Screw cuts its own thread in the plastic (weakest)]

/* [K11] */
// Body thickness with both covers removed. Unknown; the case fits 32-56 mm. Only affects the preview.
k11_thickness = 44; // [32:0.5:56]

/* [Hidden] */
export_part = "";  // used by tools/ (part-by-part export for checks and the web viewer)
lowpoly = false;   // coarse mesh for the README preview (tools/build.py readme); never for printing
$fn = lowpoly ? 8 : 72;
function fq(n) = lowpoly ? max(6, round(n/8)) : n;
T = k11_thickness;

// ---- Fit-tested on a real K11 (reference repository) ----
env_h    = 126;    // K11 height envelope (125 + clearance)  -> Z
env_d    = 133;    // K11 depth envelope  (132 + clearance)  -> Y
env_r    = 5.95;   // K11 corner radius envelope
collar   = 6;      // depth the holders wrap around the K11 corners
fan_pocket = 121;  // 120 mm fan + 1 mm clearance
fan_depth  = fan_thickness + 0.6;   // fan + Noctua corner pads (25 -> 25.6, tested value)
face     = 2.4;    // outer face (grille) thickness
corner   = 44;     // collar exists only at the corners: |y|,|z| >= 44 (as in the reference)

// ---- Enclosure ----
seat     = face + fan_depth;      // 28.0  the K11 side face sits on this plane
holder_d = seat + collar;         // 34.0  total holder depth
wall     = 3;                     // wall beyond the K11 envelope at front/rear
plenum   = 8;                     // air gap between the K11 top/bottom vents and the plates
hy       = env_d/2 + wall;        // 69.5  holder half depth
hz       = env_h/2 + plenum;      // 71    holder half height
outer_r  = 8;                     // outer corner radius
chamfer  = 2;                     // outer face edge chamfer
shell    = 2.4;                   // holder outer wall (6 lines with a 0.4 mm nozzle)
seat_frame = 2.4;                 // frame the K11 rests against
function cavity_top() = seat - 1.2;                         // cavity ends 1.2 mm below the seat at the fan opening
function roof_run() = (2*hz - 2*shell - fan_pocket)/2;      // widest horizontal run of the 45° roof (8.1 mm)

// fan face: centre cap + radial fins
grille_d = 116;                   // opening diameter (fan blade diameter ~114)
hub_d    = 46;                    // centre cap in front of the fan hub (~40); no airflow there anyway
fin_n    = lowpoly ? 8 : 48;      // number of radial fins
fin_w    = 1.6;                   // fin width (4 lines)
ring_r   = 40;                    // support ring for the fins
fan_hole = 105/2;                 // standard 120 mm fan hole spacing is 105 mm

plate_t  = 3.0;                   // plate thickness
plate_w  = 86;                    // plate width (fixed)
screw_u  = seat - 8.8;            // screw hole: 8.8 mm outside the K11 face
screw_y  = 47;                    // screw hole: front/rear position (+/-)
pilot_d  = 2.6;                   // M3 self-tapping pilot hole
pilot_depth = 8;
block_w  = 10;                    // screw block: height (X in print) and width (Y)
block_d  = 11;
nut_af   = 5.7;                   // M3 nut (DIN 934) is 5.5 mm across flats; +0.2 press fit
nut_t    = 2.4;                   // M3 nut thickness
nut_top  = 3.6;                   // plastic between the nut and the top of the holder
insert_d = 4.0;                   // hole for an M3 heat-set insert (OD 4.2-4.6, length 4-5.7)
insert_depth = 6;
T_min = 32;  T_max = 56;          // supported K11 thickness range
screw_x  = function(t) t/2 + seat - screw_u;   // screw X position (= t/2 + 8.8)
slot_mid = (screw_x(T_min) + screw_x(T_max))/2;
slot_len = screw_x(T_max) - screw_x(T_min);
csk_d    = 6.4;                   // DIN 7991 M3 head 6.0 + 0.4 clearance, 90° countersink
foot_h = 10;  foot_x = 35;  foot_y = 62;

// handles: one piece with the top plate, sized for four fingers, printable without supports
handle_y  = 57.5;                 // front/rear position (centre of the handle)
handle_w  = 70;                   // finger opening width at the base
handle_gap = 22;                  // finger opening height
handle_bridge = 40;               // flat span under the bar; the rest of the opening top is 45° (self-supporting)
handle_wall = 6;                  // post width and bar thickness
handle_t  = 8;                    // handle thickness (front to back)
handle_edge = 1;                  // 45° chamfer on the front/back edges

zc = foot_h + plate_t + hz;       // K11 centre height above the desk

assert(T >= T_min && T <= T_max, "K11 thickness must be 32-56 mm");
if (plate_w/2 > T/2 + seat)
    echo(str("NOTE: with slim fans and a thin K11 the plate overhangs the holder by ", plate_w/2 - T/2 - seat, " mm."));
assert(plate_w/2 >= screw_x(T_max) + csk_d/2 + 2, "keep at least 2 mm material at the slot end");
assert(screw_u > face + 3, "screw hole must stay inside the fan zone");

case_rgb = case_color == "black" ? "#26272b" : case_color == "white" ? "#f3f2ee" : "#55585e";

// ---------------------------------------------------------------------
module rrect(w, d, r) offset(r=r) offset(delta=-r) square([w, d], center=true);
module slot2d(l, d) hull() { translate([-l/2, 0]) circle(d=d); translate([l/2, 0]) circle(d=d); }

// open area of the fan face: inside the opening, minus centre cap, ring and fins
module grille_2d() difference() {
    circle(d=grille_d, $fn=fq(160));
    circle(d=hub_d, $fn=fq(96));
    if (!lowpoly) difference() { circle(r=ring_r + 0.8, $fn=fq(128)); circle(r=ring_r - 0.8, $fn=fq(128)); }
    for (i=[0:fin_n - 1]) rotate(i*360/fin_n) translate([0, -fin_w/2]) square([grille_d/2 + 1, fin_w]);
}

// =====================================================================
//  FAN HOLDER  (print orientation: outer face on the bed, Z = inwards)
//  X = vertical in the assembly, Y = front(-)/rear(+)
// =====================================================================
module fan_holder(hole_side=-1) {   // hole_side: print-X side of the cable hole (-1 right holder, +1 left holder)
    difference() {
        union() {
            // shell: outer face + side walls + K11 seat frame; hollow inside
            difference() {
                hull() {
                    linear_extrude(0.01) rrect(2*hz - 2*chamfer, 2*hy - 2*chamfer, outer_r - chamfer);
                    translate([0, 0, chamfer]) linear_extrude(seat - chamfer) rrect(2*hz, 2*hy, outer_r);
                }
                // cavity; its top narrows at 45° to the fan opening, so the seat frame
                // is self-supporting in print instead of an 8 mm ledge over empty space
                hull() {
                    translate([0, 0, face]) linear_extrude(cavity_top() - roof_run() - face)
                        rrect(2*hz - 2*shell, 2*hy - 2*shell, outer_r - shell);
                    translate([0, 0, cavity_top() - 0.01]) linear_extrude(0.01) square(fan_pocket, center=true);
                }
            }
            // plate screw blocks (vertical columns in print, no supports)
            for (s=[-1, 1], sy=[-1, 1]) translate([s*(hz - block_w/2), sy*screw_y, face - 0.01])
                linear_extrude(seat - face + 0.01) rrect(block_w, block_d, 1);   // ends exactly on the seat plane
            // collar: only at the four corners (ports and vents stay clear)
            translate([0, 0, seat - 0.01]) linear_extrude(collar + 0.01)
                difference() {
                    rrect(2*hz, 2*hy, outer_r);
                    square([2*corner, 2*hy + 2], center=true);
                    square([2*hz + 2, 2*corner], center=true);
                    rrect(env_h, env_d, env_r);
                }
        }
        // fan opening (through the seat frame to the K11)
        translate([0, 0, face]) linear_extrude(fan_depth + 1) square(fan_pocket, center=true);
        // radial-fin grille + 1.4 mm chamfer on the opening edge
        translate([0, 0, -1]) linear_extrude(face + 2) grille_2d();
        if (!lowpoly) difference() {
            translate([0, 0, -0.01]) rotate(0.7) cylinder(h=1.41, d1=grille_d + 2.4, d2=grille_d - 0.4, $fn=fq(151));
            translate([0, 0, -1]) cylinder(h=4, d=grille_d - 1.6, $fn=fq(160));
        }
        // decorative ring on the centre cap (0.6 mm)
        if (!lowpoly) translate([0, 0, -0.01]) linear_extrude(0.61) difference() { circle(d=34, $fn=fq(96)); circle(d=32, $fn=fq(96)); }
        // fan screw holes on the 105 mm square (screw heads show on the face)
        for (sx=[-1, 1], sy=[-1, 1]) translate([sx*fan_hole, sy*fan_hole, -1]) cylinder(h=face + 2, d=5.2, $fn=fq(32));
        // what the plate screws thread into (top and bottom blocks)
        if (!lowpoly) for (s=[-1, 1], sy=[-1, 1]) translate([0, sy*screw_y, screw_u]) mirror([s > 0 ? 0 : 1, 0, 0]) screw_anchor_cut();
        // fan cable hole: rear wall, low; USB-C-like 13 x 7.5 mm, a 4-pin fan plug passes through
        translate([hole_side*45, fan_pocket/2 - 1.5, 0]) rotate([-90, 0, 0]) linear_extrude(hy - fan_pocket/2 + 2.5)
            translate([0, -(face + seat)/2]) rotate(90) slot2d(5.5, 7.5);
    }
}

// screw anchor in a +X block (print coordinates, axis along X, top of the holder at X = hz)
module screw_anchor_cut() {
    if (screw_anchor == "nut") {
        // clearance hole from the nut up to the top of the holder
        translate([hz - nut_top - 0.01, 0, 0]) rotate([0, 90, 0]) cylinder(h=nut_top + 1, d=3.4, $fn=fq(24));
        // hex pocket, open towards the fan opening; the nut is pushed in before the fan is fitted
        // and the fan frame then keeps it from falling out. Flats are up/down in print: the roof is a 3.3 mm bridge.
        translate([hz - block_w - 0.5, 0, 0]) rotate([0, 90, 0]) rotate([0, 0, 30]) cylinder(h=block_w - nut_top + 0.5, d=nut_af/cos(30), $fn=6);
    } else if (screw_anchor == "insert") {
        translate([hz - insert_depth, 0, 0]) rotate([0, 90, 0]) cylinder(h=insert_depth + 1, d=insert_d, $fn=fq(32));
        translate([hz - pilot_depth - 1.5, 0, 0]) rotate([0, 90, 0]) cylinder(h=pilot_depth + 2, d=3.0, $fn=fq(24));
    } else {
        translate([hz - pilot_depth, 0, 0]) rotate([0, 90, 0]) cylinder(h=pilot_depth + 1, d=pilot_d, $fn=fq(24));
    }
}

// =====================================================================
//  PLATE  (print orientation: inner face on the bed, countersinks and feet up)
// =====================================================================
module plate(with_feet=false) {
    difference() {
        union() {
            hull() {
                linear_extrude(plate_t - 1) rrect(plate_w, 2*hy, 4);
                linear_extrude(plate_t) rrect(plate_w - 2, 2*hy - 2, 3);
            }
            // pedestal feet: neck + 45° flare + pad (prints without supports)
            if (with_feet)
                for (sx=[-1, 1], sy=[-1, 1]) translate([sx*foot_x, sy*foot_y, plate_t - 0.01]) {
                    cylinder(h=4.02, d=8);
                    translate([0, 0, 4]) cylinder(h=4, d1=8, d2=16);
                    translate([0, 0, 8]) cylinder(h=foot_h - 8, d=16);
                }
            // carry handles, part of the plate
            if (!with_feet && handles)
                for (sy=[-1, 1]) translate([0, sy*handle_y, plate_t]) handle_solid();
        }
        // slotted screw channels, countersunk 90° along their full length
        // (a countersunk head sits flush wherever it lands in the slot)
        for (sx=[-1, 1], sy=[-1, 1]) translate([sx*slot_mid, sy*screw_y, 0]) {
            translate([0, 0, -1]) linear_extrude(plate_t + 2) slot2d(slot_len, 3.4);
            if (!lowpoly) hull() for (dx=[-slot_len/2, slot_len/2]) translate([dx, 0, plate_t - (csk_d - 3.4)/2])
                cylinder(h=(csk_d - 3.4)/2 + 0.01, d1=3.4, d2=csk_d, $fn=fq(32));
        }
        // vent slots (right above the K11 top/bottom vents)
        for (i=[-3:3])
            translate([i*5.5, 0, -1]) linear_extrude(plate_t + 2) rotate(90) slot2d(100, 3);
    }
}

// =====================================================================
//  HANDLE  (part of the top plate; local X across the case, Z up from the plate top,
//           extruded along Y). Prints standing up with the plate on the bed:
//           posts are vertical, the opening top is 45° on both sides with a short
//           flat bridge in the middle, so no supports are needed.
// =====================================================================
module handle_opening_2d() {
    xi = handle_w/2;  b = handle_bridge/2;  zt = handle_gap;  zs = zt - (xi - b);   // 45°: rise = run
    g = 3;   // 45° fillet where the posts meet the plate
    polygon([[-xi + g, -3], [xi - g, -3], [xi, -3 + g], [xi, zs], [b, zt], [-b, zt], [-xi, zs], [-xi, -3 + g]]);
}
module handle_profile_2d() difference() {
    intersection() {
        offset(r=handle_wall, $fn=fq(48)) handle_opening_2d();
        translate([-100, -2]) square([200, 100]);
    }
    handle_opening_2d();
}
module handle_solid() {
    c = handle_edge;
    // octahedron Minkowski: 45° chamfers on the front/back edges (stay printable)
    minkowski() {
        rotate([90, 0, 0]) linear_extrude(handle_t - 2*c, center=true) offset(delta=-c) handle_profile_2d();
        polyhedron([[c,0,0],[-c,0,0],[0,c,0],[0,-c,0],[0,0,c],[0,0,-c]],
                   [[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]]);
    }
}

// =====================================================================
//  K11 stand-in model (125 x 132 side face, parametric thickness)
//  Port positions are approximate (from photos); the case never touches
//  the front or rear face.
// =====================================================================
module k11_body() rotate([0, 90, 0]) linear_extrude(T, center=true) rrect(125, 132, 5.5);

module k11_shell() difference() {
    k11_body();
    // open faces with covers removed (8 mm deep)
    for (s=[-1, 1]) translate([s*T/2, 0, 0]) rotate([0, 90, 0])
        linear_extrude(16, center=true) rrect(117, 124, 3);
    // top/bottom vent slits
    for (s=[-1, 1], i=[-11:11]) translate([0, i*5, s*62.5]) cube([T - 14, 2, 3], center=true);
}
// inside: CPU blower + heatsink on the left, RAM/SSD on the right
module k11_pcb() {
    translate([-T/2 + 7.4, 0, 0]) rotate([0, 90, 0]) linear_extrude(0.5) rrect(116, 123, 3);
    translate([T/2 - 7.9, 0, 0]) rotate([0, 90, 0]) linear_extrude(0.5) rrect(116, 123, 3);
}
module k11_cpu() {
    translate([-T/2 + 6, 8, 18]) rotate([0, 90, 0]) cylinder(h=1.4, d=62);
    translate([-T/2 + 6.5, 50, -20]) cube([2, 14, 100], center=true);
}
module k11_ram() {
    for (i=[0:1]) translate([T/2 - 6.7, -40 + i*14, -10]) cube([1.4, 9, 68], center=true);
    translate([T/2 - 6.7, -6, -10]) cube([1.4, 22, 80], center=true);
}
// front ports (y = -66), top to bottom: OcuLink, USB4, USB-A, USB-A, audio; rear ports (y = +66)
front_black = [[48, 4, 12], [31, 3.4, 9], [-22, 5.5, 5.5]];
front_usb   = [[13, 5.6, 13], [-6, 5.6, 13]];
rear_ports  = [[46, 8, 8], [32, 3.4, 9], [16, 14, 16], [-2, 14, 16], [-18, 6, 15], [-32, 5, 15], [-44, 5.6, 13]];
module k11_ports() {
    for (p = front_black) translate([0, -66.2, p[0]]) cube([p[1], 1, p[2]], center=true);
    for (p = rear_ports) translate([0, 66.2, p[0]]) cube([p[1], 1, p[2]], center=true);
}
module k11_usb() for (p = front_usb) translate([0, -66.2, p[0]]) cube([p[1], 1, p[2]], center=true);
module k11_led() translate([0, -66.3, -40]) rotate([90, 0, 0]) cylinder(h=0.6, d=10);

module k11() {
    color("#2c2e33") k11_shell();
    color("#1b1c1f") k11_pcb();
    color("#4a4c52") k11_cpu();
    color("#24508f") k11_ram();
    color("#111") k11_ports();
    color("#1f6fd6") k11_usb();
    color("#4cff5a") k11_led();
}

module fan_frame() {
    difference() {
        linear_extrude(fan_thickness) rrect(120, 120, 4);
        translate([0, 0, -1]) cylinder(h=fan_thickness + 2, d=114);
        for (sx=[-1, 1], sy=[-1, 1]) translate([sx*52.5, sy*52.5, -1]) cylinder(h=fan_thickness + 2, d=4.4);
    }
    for (a=[0:120:359]) rotate(a + 15) translate([0, -1.5, 1]) cube([57, 3, 3]);
}
module fan_rotor() {
    translate([0, 0, 2]) cylinder(h=fan_thickness - 3, d=40);
    for (k=[0:6]) rotate(k*360/7) translate([0, 0, 4])
        linear_extrude(fan_thickness - 7, twist=-38, slices=6)
            polygon([for (t=[0:5:30]) 21*[cos(t), sin(t)], for (t=[34:-5:-4]) 55*[cos(t), sin(t)]]);
}
module fan_pads() for (sx=[-1, 1], sy=[-1, 1]) translate([sx*55, sy*55, fan_thickness/2]) cube([10, 10, fan_depth], center=true);

module fan120() {
    cf = fan_style == "noctua" ? "#dcc7a6" : "#1f1f21";
    cb = fan_style == "noctua" ? "#8b4a39" : "#2e2f33";
    color(cf) fan_frame();
    color(cb) fan_rotor();
    if (fan_style == "noctua") color(cb) fan_pads();
}

// DIN 7991 M3x10 countersunk hex socket: head top at z=0, overall length 10 mm, 2 mm hex key
module screw_m3() color("#1d1e21") difference() {
    union() { translate([0, 0, -1.7]) cylinder(h=1.7, d1=3, d2=6, $fn=fq(32)); translate([0, 0, -10]) cylinder(h=8.31, d=3, $fn=16); }
    translate([0, 0, -1.2]) cylinder(h=1.3, d=2/cos(30), $fn=6);
}

module nut_m3() color("#3a3c41") difference() {
    cylinder(d=5.5/cos(30), h=nut_t, center=true, $fn=6);
    cylinder(d=3, h=nut_t + 1, center=true, $fn=16);
}
module insert_m3() color("#c9a227") difference() {
    cylinder(d=4.2, h=5, $fn=24);
    translate([0, 0, -1]) cylinder(d=3, h=7, $fn=16);
}
module phillips(d, h) for (a=[0, 90]) rotate(a) cube([d*0.62, d*0.16, 2*h], center=true);
module fan_screw() color("#1d1e21") difference() {
    union() { translate([0, 0, -1.6]) cylinder(h=1.6, d=8, $fn=fq(32)); cylinder(h=10, d=4.2, $fn=16); }
    translate([0, 0, -1.6]) phillips(8, 0.9);
}

// ---- placement in the assembly ----
module holder_right(e=0) translate([T/2 + seat + e, 0, zc]) rotate([0, -90, 0]) fan_holder(-1);
module holder_left(e=0) translate([0, 0, zc]) rotate([0, 180, 0]) translate([T/2 + seat + e, 0, 0]) rotate([0, -90, 0]) fan_holder(1);
module top(e=0) translate([0, 0, zc + hz + e]) plate(false);
module bottom(e=0) translate([0, 0, zc - hz - e]) mirror([0, 0, 1]) plate(true);
module fan_right(e=0) translate([T/2 + seat - face - fan_depth + 0.6 + e, 0, zc]) rotate([0, 90, 0]) fan120();
module fan_left(e=0) mirror([1, 0, 0]) fan_right(e);
// fan screws: from the holder's outer face inwards (right side)
module fan_screws_right(e=0)
    for (sy=[-1, 1], sz=[-1, 1]) translate([T/2 + seat + e, sy*fan_hole, zc + sz*fan_hole]) rotate([0, -90, 0]) fan_screw();
module plate_screws(is_top, sx)
    for (sy=[-1, 1]) translate([sx*screw_x(T), sy*screw_y, is_top ? zc + hz + plate_t - 0.2 : zc - hz - plate_t + 0.2])
        mirror([0, 0, is_top ? 0 : 1]) screw_m3();
// nuts / inserts in the fan holder blocks (assembly position, one side)
module plate_anchors(sx, zs=[-1, 1])
    for (sy=[-1, 1], sz=zs) translate([sx*screw_x(T), sy*screw_y, zc + sz*hz])
        mirror([0, 0, sz > 0 ? 0 : 1]) {
            if (screw_anchor == "nut") translate([0, 0, -nut_top - nut_t/2]) nut_m3();
            if (screw_anchor == "insert") translate([0, 0, -5]) insert_m3();
        }
module assembly() {
    e = explode;
    color(case_rgb) {
        holder_right(e); holder_left(e); top(e*1.2); bottom(e*0.6);
    }
    for (sx=[-1, 1]) translate([0, 0, e*1.2]) plate_screws(true, sx);
    for (sx=[-1, 1]) translate([0, 0, -e*0.6]) plate_screws(false, sx);
    fan_screws_right(e*1.25); mirror([1, 0, 0]) fan_screws_right(e*1.25);
    for (sx=[-1, 1]) translate([sx*e, 0, 0]) plate_anchors(sx);
    if (show_device) {
        translate([0, 0, zc]) k11();
        fan_right(e*0.55); fan_left(e*0.55);
    }
}

module cut() {
    if (section_cut) difference() { children(); translate([-300, 0, -10]) cube([600, 300, 400]); }
    else children();
}

// ---- part-by-part export for tools/check_geometry.py and the web viewer ----
module fan_box() translate([T/2 + seat - face - fan_depth + 0.6, 0, zc]) rotate([0, 90, 0]) linear_extrude(fan_thickness) square(120, center=true);
module export_parts() {
    if (export_part == "holder_right") holder_right();
    if (export_part == "holder_left") holder_left();
    if (export_part == "top_plate") top();
    if (export_part == "bottom_plate") bottom();
    if (export_part == "k11") translate([0, 0, zc]) k11_body();
    if (export_part == "fan_right") fan_box();
    if (export_part == "fan_left") mirror([1, 0, 0]) fan_box();
    // port zones: 60 mm in front of / behind the K11 face (collar corners excluded)
    if (export_part == "front_zone") translate([-(T/2 - collar), -66 - 60, zc - 62.5]) cube([T - 2*collar, 60, 125]);
    if (export_part == "rear_zone")  translate([-(T/2 - collar), 66, zc - 62.5]) cube([T - 2*collar, 60, 125]);
    if (export_part == "v_k11_shell") translate([0, 0, zc]) k11_shell();
    if (export_part == "v_k11_pcb")   translate([0, 0, zc]) k11_pcb();
    if (export_part == "v_k11_cpu")   translate([0, 0, zc]) k11_cpu();
    if (export_part == "v_k11_ram")   translate([0, 0, zc]) k11_ram();
    if (export_part == "v_k11_ports") translate([0, 0, zc]) k11_ports();
    if (export_part == "v_k11_usb")   translate([0, 0, zc]) k11_usb();
    if (export_part == "v_k11_led")   translate([0, 0, zc]) k11_led();
    for (side = ["right", "left"]) {
        m = side == "right" ? 0 : 1;
        sx = side == "right" ? 1 : -1;
        if (export_part == str("v_fan_", side, "_frame")) mirror([m, 0, 0]) translate([T/2 + seat - face - fan_depth + 0.6, 0, zc]) rotate([0, 90, 0]) fan_frame();
        if (export_part == str("v_fan_", side, "_rotor")) mirror([m, 0, 0]) translate([T/2 + seat - face - fan_depth + 0.6, 0, zc]) rotate([0, 90, 0]) fan_rotor();
        if (export_part == str("v_fan_", side, "_pads"))  mirror([m, 0, 0]) translate([T/2 + seat - face - fan_depth + 0.6, 0, zc]) rotate([0, 90, 0]) fan_pads();
        if (export_part == str("v_fan_screws_", side)) mirror([m, 0, 0]) fan_screws_right();
        if (export_part == str("v_screws_top_", side)) plate_screws(true, sx);
        if (export_part == str("v_screws_bottom_", side)) plate_screws(false, sx);
        if (export_part == str("v_anchors_top_", side)) plate_anchors(sx, [1]);
        if (export_part == str("v_anchors_bottom_", side)) plate_anchors(sx, [-1]);
    }
}

// ---------------------------------------------------------------------
if (export_part != "") export_parts();
else if (view == "assembly") cut() assembly();
else if (view == "fan_holder_right") color(case_rgb) fan_holder(-1);
else if (view == "fan_holder_left") color(case_rgb) fan_holder(1);
else if (view == "top_plate") color(case_rgb) plate(false);
else if (view == "bottom_plate") color(case_rgb) plate(true);
else if (view == "print_layout") color(case_rgb) {
    fan_holder(-1);
    translate([0, 2*hy + 10, 0]) fan_holder(1);
    translate([hz + 10 + plate_w/2, 0, 0]) plate(false);
    translate([hz + 20 + plate_w*1.5, 0, 0]) plate(true);
}
