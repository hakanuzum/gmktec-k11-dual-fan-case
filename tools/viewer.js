import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---- dimensions (same as the SCAD) -----------------------------------------
const T0 = 44;            // K11 thickness the meshes were exported at
const ZC = 84;            // K11 centre height
const YZ = 71;            // holder half height
const KAP = 3.0;          // plate thickness
const OTURMA = 28.0;      // outer face to the K11 side face
const fmt = (v, d = 1) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

// ---- parts -----------------------------------------------------------------
const INFO_HOLDER = (side) => ({
  title: `Fan holder · ${side}`,
  rows: [
    ['Qty', '1 (left and right are separate, mirrored files so the cable hole is low on both)'],
    ['File', `<code>stl/fan_holder_${side}.stl</code>`],
    ['Size', '142 × 139 × 34 mm'],
    ['Print', 'Grille face on the bed, no supports'],
  ],
  text: `Presses a 120 mm fan against the open side of the K11. Hollow to save filament: 2.4 mm outer shell, 2.4 mm grille face and a 2.4 mm frame the K11 rests on. The only solid parts are four corner blocks; each has a hex pocket for an M3 nut, pushed in from the fan opening before the fan goes in (the fan frame then keeps the nuts from falling out). The cavity roof under the seat frame slopes at 45°, so the frame prints without supports. The face has a centre cap over the fan hub and a ring of 48 radial fins. The fan is fixed to the face with its own 4 screws. A 6 mm collar exists only at the four corners: it grips the K11 by its corners and never touches the front or rear ports. The fan cable leaves through a 13 × 7.5 mm USB-C-shaped hole low on the rear wall; a 4-pin fan plug fits through it.`,
});
const INFO_FAN = (side) => ({
  title: `Fan · ${side === 'left' ? 'left (CPU side)' : 'right (RAM/SSD side)'}`,
  rows: [
    ['Qty', '1 (2 fans in total)'],
    ['Size', 'Standard 120 × 120 × 25 mm, 105 mm hole spacing'],
    ['Example', 'Noctua NF-F12 PWM (12 V) + USB 5 V→12 V cable'],
    ['Others', 'Arctic P12, be quiet! Pure Wings 2 and similar 25 mm fans'],
    ['Direction', 'Default: intake. The arrow on the fan points at the K11.'],
  ],
  text: 'The 4-pin fan plug goes into a USB 5 V→12 V step-up fan cable; the USB end plugs into a USB 2.0 port on the back of the K11. No soldering. For a 15 mm slim fan set "Fan thickness" to 15 in the SCAD file.',
});
const GROUPS = [
  { id: 'holder_left', name: 'Fan holder · left', tag: 'PRINT ×1', print: true, dot: 'shell', pc: '#3d7bd9', t: -1, ex: [-1, 0, 0],
    meshes: [['holder_left', 'shell']], info: INFO_HOLDER('left') },
  { id: 'holder_right', name: 'Fan holder · right', tag: 'PRINT ×1', print: true, dot: 'shell', pc: '#2aa198', t: 1, ex: [1, 0, 0],
    meshes: [['holder_right', 'shell']], info: INFO_HOLDER('right') },
  { id: 'top', name: 'Top plate + handles', tag: 'PRINT ×1', print: true, dot: 'shell', pc: '#e0a030', ex: [0, 0, 1.2],
    meshes: [['top_plate', 'shell']], info: {
      title: 'Top plate with handles',
      rows: [['Qty', '1 (handles included)'], ['File', '<code>stl/top_plate.stl</code>'], ['Size', '86 × 139 × 31 mm'], ['Handle opening', '70 × 22 mm, for four fingers'], ['Print', 'Flat side on the bed, handles standing up, no supports']],
      text: 'Ties the two holders together at the top. Seven vent slots sit right above the K11 top vents with an 8 mm air gap below; with both fans blowing in, this is one of the main hot-air exits. The four screw channels are slotted, which is why the case closes without knowing the K11 thickness. The two carry handles are part of the plate. Their opening narrows at 45° towards the top with a short 40 mm flat bridge in the middle, so they print upright without supports.',
    } },
  { id: 'bottom', name: 'Bottom plate (feet)', tag: 'PRINT ×1', print: true, dot: 'shell', pc: '#8a63d2', ex: [0, 0, -0.7],
    meshes: [['bottom_plate', 'shell']], info: {
      title: 'Bottom plate',
      rows: [['Qty', '1'], ['File', '<code>stl/bottom_plate.stl</code>'], ['Size', '86 × 140 × 13 mm (with feet)'], ['Print', 'Flat side on the bed, feet up']],
      text: 'Ties the holders together at the bottom and stands the case on 10 mm pedestal feet. The feet flare out at 45°, so they print without supports. The screws go in from below and are hidden.',
    } },
  { id: 'screws', name: 'Screws and nuts', tag: 'BUY', dot: 'screw',
    meshes: [['v_screws_top_right', 'screw', { ex: [0, 0, 1.75], t: 1, label: 'Plate screw M3×10 → threads into an M3 nut in the holder' }], ['v_screws_top_left', 'screw', { ex: [0, 0, 1.75], t: -1, label: 'Plate screw M3×10 → threads into an M3 nut in the holder' }],
             ['v_screws_bottom_right', 'screw', { ex: [0, 0, -1.15], t: 1, label: 'Plate screw M3×10 → threads into an M3 nut in the holder' }], ['v_screws_bottom_left', 'screw', { ex: [0, 0, -1.15], t: -1, label: 'Plate screw M3×10 → threads into an M3 nut in the holder' }],
             ['v_fan_screws_right', 'screwDark', { ex: [1.3, 0, 0], t: 1, label: 'Fan screw → through the face into the fan frame' }], ['v_fan_screws_left', 'screwDark', { ex: [-1.3, 0, 0], t: -1, label: 'Fan screw → through the face into the fan frame' }],
             ['v_anchors_top_right', 'nut', { ex: [1, 0, -0.45], t: 1, label: 'M3 nut → sits in a hex pocket of the holder' }], ['v_anchors_top_left', 'nut', { ex: [-1, 0, -0.45], t: -1, label: 'M3 nut → sits in a hex pocket of the holder' }],
             ['v_anchors_bottom_right', 'nut', { ex: [1, 0, 0.45], t: 1, label: 'M3 nut → sits in a hex pocket of the holder' }], ['v_anchors_bottom_left', 'nut', { ex: [-1, 0, 0.45], t: -1, label: 'M3 nut → sits in a hex pocket of the holder' }]],
    info: {
      title: 'Screws and nuts',
      rows: [['Plates', '8 × M3×10 countersunk hex socket (DIN 7991), black'], ['Nuts', '8 × M3 hex nut (DIN 934)'], ['Washers', 'Not needed'], ['Fans', '8 fan screws, supplied with the fans'], ['Handles', 'Part of the top plate'], ['Tools', '2 mm hex key + Phillips screwdriver']],
      note: 'All bought metal parts, nothing printed. The screw threads into a metal nut, so it can be undone and tightened again as often as you like. Prefer heat-set inserts? Print the holders from stl/heat-set-insert/.',
      text: 'Each fan holder has four hex pockets. Push an M3 nut into each pocket through the fan opening before you fit the fan; the fan frame then stops the nuts from falling out and the hex shape stops them from turning. The slotted channels in the plates are countersunk along their full length, so the screw head sits flush wherever it lands; no washers. Press the holders lightly against the K11 and tighten with a 2 mm hex key.',
    } },
  { id: 'fan_left', name: 'Fan · left (CPU side)', tag: 'BUY', dot: 'fanFrame', t: -1, ex: [-0.55, 0, 0], device: true,
    meshes: [['v_fan_left_frame', 'fanFrame'], ['v_fan_left_rotor', 'fanBlade'], ['v_fan_left_pads', 'fanPad']], info: INFO_FAN('left') },
  { id: 'fan_right', name: 'Fan · right (RAM/SSD side)', tag: 'BUY', dot: 'fanFrame', t: 1, ex: [0.55, 0, 0], device: true,
    meshes: [['v_fan_right_frame', 'fanFrame'], ['v_fan_right_rotor', 'fanBlade'], ['v_fan_right_pads', 'fanPad']], info: INFO_FAN('right') },
  { id: 'k11', name: 'GMKtec K11 (stand-in)', tag: 'DEVICE', dot: 'k11Body', scaleX: true, device: true,
    meshes: [['v_k11_shell', 'k11Body'], ['v_k11_pcb', 'pcb'], ['v_k11_cpu', 'cpu'], ['v_k11_ram', 'ram'],
             ['v_k11_ports', 'port'], ['v_k11_usb', 'usb'], ['v_k11_led', 'led']],
    info: {
      title: 'GMKtec K11',
      rows: [['Side face', '125 × 132 mm'], ['Thickness', 'unknown, try the slider'],
             ['Front', 'OcuLink, USB4, 2 × USB-A, audio, power'], ['Rear', '3 × USB-A 2.0, DP, HDMI, 2 × RJ45, USB4, DC']],
      text: 'Stand-in model. The side face comes from the 126 × 133 mm envelope that the reference project fit-tested on a real K11. The clear top cover and the bottom cover are removed and the fans sit on the open faces. Port positions are approximate; the case never touches the front or rear face.',
    } },
];

const COLORS = {
  shell: { grey: '#5a5d63', white: '#f1f0ec', black: '#2b2d31' },
  fan: { noctua: { fanFrame: '#dcc7a6', fanBlade: '#8b4a39', fanPad: '#7a3e2f' },
         arctic: { fanFrame: '#202124', fanBlade: '#2e3035', fanPad: '#202124' } },
  screw: '#1d1e21', screwDark: '#1d1e21', nut: '#4a4d53', k11Body: '#2c2e33', pcb: '#141518', cpu: '#4a4c52', ram: '#24508f',
  port: '#0b0b0c', usb: '#1f6fd6', led: '#4cff5a',
};
const HW = { screw: '#f5c518', screwDark: '#ff7a1a', nut: '#19c3e6' };   // hardware colours in 'colour by part'
const AIR_TEXT = {
  both: 'Both fans pull cool air in from outside and blow it onto the open faces of the K11. Warm air leaves through the rear of the K11, the slots in the top plate and the front/rear openings of the bottom air gap.',
  mixed: 'Layout from the reference project: the CPU side blows in, the RAM/SSD side blows out. Flip one fan; nothing needs to be reprinted.',
};
const state = { T: T0, explode: 0, shell: 'black', fan: 'noctua', clip: 'off', clipPos: 0, airMode: 'both',
                air: false, device: true, edges: true, byPart: false, xray: false, selected: null, hover: null };

// ---- scene -----------------------------------------------------------------
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.localClippingEnabled = true;
stage.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 1, 5000);
camera.up.set(0, 0, 1);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.09;
controls.target.set(0, 0, 80);

scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 1.15));
const key = new THREE.DirectionalLight(0xffffff, 1.7); key.position.set(260, -320, 420); scene.add(key);
const fill = new THREE.DirectionalLight(0xffffff, 0.55); fill.position.set(-320, 260, 180); scene.add(fill);
const grid = new THREE.GridHelper(420, 42);
grid.rotation.x = Math.PI / 2;
grid.material.transparent = true; grid.material.opacity = 0.5;
scene.add(grid);

const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const allMats = [];
const edgeMat = new THREE.LineBasicMaterial({ color: 0x4b525a, transparent: true, opacity: 0.38 });
allMats.push(edgeMat);
const edgeLines = [];
const pickables = [];

function decode(entry) {
  const bin = (b64) => { const s = atob(b64); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u.buffer; };
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(bin(entry.p)), 3));
  g.setIndex(new THREE.BufferAttribute(entry.w === 2 ? new Uint16Array(bin(entry.i)) : new Uint32Array(bin(entry.i)), 1));
  g.computeBoundingSphere();
  return g;
}
function colorFor(kind, group) {
  if (state.byPart && HW[kind]) return HW[kind];
  if (state.byPart && group && group.pc && kind === 'shell') return group.pc;
  if (kind === 'shell') return COLORS.shell[state.shell];
  if (kind.startsWith('fan')) return COLORS.fan[state.fan][kind];
  return COLORS[kind];
}
function makeMat(kind, group) {
  const metal = kind === 'screw' || kind === 'nut';
  const m = new THREE.MeshStandardMaterial({
    color: colorFor(kind, group), roughness: metal ? 0.35 : kind === 'shell' ? 0.62 : 0.5, metalness: metal ? 0.65 : 0.0,
    flatShading: true, side: THREE.DoubleSide,
  });
  if (kind === 'led') { m.emissive.set('#2bd63a'); m.emissiveIntensity = 0.8; }
  m.userData.kind = kind;
  m.userData.group = group;
  allMats.push(m);
  return m;
}

const EDGE_KINDS = new Set(['shell', 'k11Body', 'fanFrame']);
const MESH = window.__MESH__;
for (const g of GROUPS) {
  g.objs = [];
  for (const [key, kind, opt = {}] of g.meshes) {
    const geo = decode(MESH[key]);
    const mesh = new THREE.Mesh(geo, makeMat(kind, g));
    mesh.userData = { group: g, kind, label: opt.label, ex: opt.ex || g.ex || [0, 0, 0], t: opt.t ?? g.t ?? 0 };
    if (EDGE_KINDS.has(kind)) {
      const lines = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 28), edgeMat);
      lines.raycast = () => {};
      mesh.add(lines); edgeLines.push(lines);
    }
    scene.add(mesh); g.objs.push(mesh); pickables.push(mesh);
  }
}
document.getElementById('loading').remove();

// ---- airflow arrows ----------------------------------------------------
const airGroup = new THREE.Group(); airGroup.visible = false; scene.add(airGroup);
const arrowGeoShaft = new THREE.CylinderGeometry(1.2, 1.2, 15, 12); arrowGeoShaft.translate(0, 7.5, 0);
const arrowGeoHead = new THREE.ConeGeometry(3.6, 9, 18); arrowGeoHead.translate(0, 19.5, 0);
const airMats = { in: new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }),
                  out: new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }) };
const arrows = [];
const Y_UP = new THREE.Vector3(0, 1, 0);
function arrow(type) {
  const mat = airMats[type].clone(); mat.userData.air = true; allMats.push(mat);
  const a = new THREE.Group();
  a.add(new THREE.Mesh(arrowGeoShaft, mat), new THREE.Mesh(arrowGeoHead, mat));
  a.userData = { mat, type, start: new THREE.Vector3(), dir: new THREE.Vector3(), len: 40, phase: Math.random() };
  airGroup.add(a); arrows.push(a); return a;
}
const RING = [[0, 0], [0, 36], [0, -36], [36, 0], [-36, 0]];
const SPEC = [];
RING.forEach(() => SPEC.push(arrow('in')));            // left fan intake
RING.forEach(() => SPEC.push(arrow('out')));           // right fan
[-38, 0, 38].forEach(() => SPEC.push(arrow('out')));   // rear exhaust
[-36, 0, 36].forEach(() => SPEC.push(arrow('out')));   // top plate
[-36, 0, 36].forEach(() => SPEC.push(arrow('in')));    // bottom plate
function layoutArrows() {
  const e = state.explode, L = state.T / 2 + OTURMA + e, both = state.airMode === 'both';
  let k = 0;
  const set = (type, start, dir, len) => {
    const a = SPEC[k++]; a.userData.type = type;
    a.userData.mat.color.copy(airMats[type].color);
    a.userData.start.set(...start); a.userData.dir.set(...dir).normalize(); a.userData.len = len;
    a.quaternion.setFromUnitVectors(Y_UP, a.userData.dir);
  };
  RING.forEach(([y, z]) => set('in', [-L - 66, y, ZC + z], [1, 0, 0], 42));
  RING.forEach(([y, z]) => both ? set('in', [L + 66, y, ZC + z], [-1, 0, 0], 42) : set('out', [L + 6, y, ZC + z], [1, 0, 0], 42));
  [-38, 0, 38].forEach((z) => set('out', [0, 72, ZC + z], [0, 1, 0], 44));
  [-36, 0, 36].forEach((y) => set('out', [0, y, ZC + YZ + KAP + e * 1.2 + 3], [0, 0, 1], 34));
  const zb = ZC - YZ + 4 - e * 0.35;
  if (both) {
    set('out', [0, -64, zb], [0, -1, 0], 34);
    set('out', [0, 64, zb], [0, 1, 0], 34);
    set('out', [0, 0, ZC - YZ - KAP - e * 0.7 - 2], [0, 0, -1], 12);
  } else [-36, 0, 36].forEach((y) => set('in', [0, y, ZC - YZ - KAP - e * 0.7 - 40], [0, 0, 1], 24));
  document.getElementById('airText').textContent = AIR_TEXT[state.airMode];
}

// ---- layout -------------------------------------------------------------
function layout() {
  const dx = (state.T - T0) / 2, e = state.explode;
  for (const g of GROUPS) for (const m of g.objs) {
    const { ex, t } = m.userData;
    m.position.set(ex[0] * e + t * dx, ex[1] * e, ex[2] * e);
    if (g.scaleX) m.scale.x = state.T / T0;
  }
  layoutArrows();
  document.getElementById('dimW').textContent = fmt(state.T + 2 * OTURMA);
  document.getElementById('thickOut').textContent = `${fmt(state.T)} mm`;
  document.getElementById('explodeOut').textContent = `${e} mm`;
  document.getElementById('knob').style.left = `${((state.T - 32) / 24) * 100}%`;
}

function applyColors() {
  for (const m of allMats) {
    const k = m.userData.kind; if (!k) continue;
    m.userData.base = new THREE.Color(colorFor(k, m.userData.group));
    // see-through case: printed parts become glass-like so nuts, screws and blocks show
    const glass = state.xray && k === 'shell';
    if (m.transparent !== glass || (glass && m.opacity !== 0.28)) {
      m.transparent = glass; m.opacity = glass ? 0.28 : 1; m.depthWrite = !glass; m.needsUpdate = true;
    }
    m.color.copy(m.userData.base);
  }
  applyHighlight();
  const css = getComputedStyle(document.documentElement);
  airMats.in.color.set(css.getPropertyValue('--intake').trim());
  airMats.out.color.set(css.getPropertyValue('--exhaust').trim());
  for (const a of arrows) a.userData.mat.color.copy(airMats[a.userData.type].color);
  edgeMat.color.set(state.shell === 'white' ? '#4b525a' : '#a3a9b1');
  for (const g of GROUPS) {
    const pads = g.objs.filter((m) => m.userData.kind === 'fanPad');
    pads.forEach((m) => { m.visible = g.visible !== false && state.fan === 'noctua'; });
  }
  renderDots();
}
function applyTheme() {
  const css = getComputedStyle(document.documentElement);
  scene.background = new THREE.Color(css.getPropertyValue('--stage').trim());
  const line = new THREE.Color(css.getPropertyValue('--line').trim());
  grid.material.color = line; grid.material.vertexColors = false; grid.material.needsUpdate = true;
  applyColors();
}

function applyClip() {
  const on = state.clip !== 'off';
  if (state.clip === 'y') clipPlane.set(new THREE.Vector3(0, 1, 0), -state.clipPos);
  if (state.clip === 'x') clipPlane.set(new THREE.Vector3(1, 0, 0), -state.clipPos);
  for (const m of allMats) { if (m.userData.air) continue; m.clippingPlanes = on ? [clipPlane] : []; m.needsUpdate = true; }
  document.getElementById('clipSlider').hidden = !on;
  document.getElementById('clipOut').textContent = `${state.clipPos} mm`;
}

const HL = new THREE.Color('#3d6bff');
function applyHighlight() {
  for (const g of GROUPS) for (const m of g.objs) {
    const base = m.material.userData.base;
    if (m.userData.kind === 'led' || !base) continue;
    const k = state.selected === g ? 0.42 : state.hover === g ? 0.22 : 0;
    m.material.color.copy(base).lerp(HL, k);
  }
  document.querySelectorAll('#parts li').forEach((li) => li.classList.toggle('sel', state.selected?.id === li.dataset.id));
}

function setVisible(g, v) {
  g.visible = v;
  for (const m of g.objs) m.visible = v && !(m.userData.kind === 'fanPad' && state.fan !== 'noctua');
  const cb = document.getElementById(`vis-${g.id}`); if (cb) cb.checked = v;
}

// ---- part list and info card -----------------------------------------
const partsEl = document.getElementById('parts');
for (const g of GROUPS) {
  const li = document.createElement('li'); li.dataset.id = g.id;
  li.innerHTML = `<input type="checkbox" id="vis-${g.id}" checked aria-label="Show ${g.name}">
    <span class="dot" data-kind="${g.dot}" data-group="${g.id}"></span>
    <button type="button" class="pick">${g.name}</button>
    <span class="tag${g.print ? ' print' : ''}">${g.tag}</span>`;
  li.querySelector('input').addEventListener('change', (ev) => { setVisible(g, ev.target.checked); syncDeviceToggle(); });
  li.querySelector('.pick').addEventListener('click', () => select(g));
  partsEl.appendChild(li);
}
function renderDots() {
  document.querySelectorAll('#parts .dot').forEach((d) => {
    d.style.background = colorFor(d.dataset.kind, GROUPS.find((g) => g.id === d.dataset.group));
  });
  document.getElementById('hwLegend').hidden = !state.byPart;
}
function syncDeviceToggle() {
  state.device = GROUPS.filter((g) => g.device).every((g) => g.visible !== false);
  document.getElementById('tDevice').checked = state.device;
}
const infoEl = document.getElementById('info');
function select(g) {
  state.selected = g;
  applyHighlight();
  document.getElementById('infoEmpty').hidden = !!g;
  infoEl.hidden = !g;
  if (!g) return;
  const i = g.info;
  infoEl.innerHTML = `<h3>${i.title}</h3>
    <dl>${i.rows.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>
    <p>${i.text}</p>${i.note ? `<p class="note">${i.note}</p>` : ''}
    <div class="actions"><button type="button" id="isolate">Show only this</button><button type="button" id="showAll">Show all</button><button type="button" id="clearSel">Clear selection</button></div>`;
  infoEl.querySelector('#isolate').addEventListener('click', () => { GROUPS.forEach((o) => setVisible(o, o === g)); syncDeviceToggle(); });
  infoEl.querySelector('#showAll').addEventListener('click', () => { GROUPS.forEach((o) => setVisible(o, true)); syncDeviceToggle(); });
  infoEl.querySelector('#clearSel').addEventListener('click', () => select(null));
}

// ---- kamera ---------------------------------------------------------------
const VIEWS = {
  iso: [[250, -330, 250], [0, 0, 80]], fit: [[360, -470, 330], [0, 0, 88]], front: [[0, -470, 84], [0, 0, 80]], rear: [[0, 470, 84], [0, 0, 80]],
  top: [[0, -1, 520], [0, 0, 80]], left: [[-470, 0, 84], [0, 0, 80]], right: [[470, 0, 84], [0, 0, 80]],
};
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let fly = null;
function flyTo(name) {
  const [p, t] = VIEWS[name];
  const to = { p: new THREE.Vector3(...p), t: new THREE.Vector3(...t) };
  if (reduceMotion.matches) { camera.position.copy(to.p); controls.target.copy(to.t); controls.update(); return; }
  fly = { fromP: camera.position.clone(), fromT: controls.target.clone(), to, t0: performance.now(), dur: 650 };
}
camera.position.set(...VIEWS.iso[0]);

// ---- interaction ------------------------------------------------------------
const pressGroup = (containerId, attr, fn) => {
  const box = document.getElementById(containerId);
  box.addEventListener('click', (ev) => {
    const b = ev.target.closest(`button[data-${attr}]`); if (!b) return;
    box.querySelectorAll(`button[data-${attr}]`).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    fn(b.dataset[attr]);
  });
};
pressGroup('views', 'view', flyTo);
pressGroup('clipModes', 'clip', (v) => { state.clip = v; applyClip(); });
pressGroup('shellColors', 'shell', (v) => { state.shell = v; applyColors(); });
pressGroup('airModes', 'air', (v) => { state.airMode = v; layoutArrows(); });
pressGroup('fanColors', 'fan', (v) => { state.fan = v; GROUPS.forEach((g) => setVisible(g, g.visible !== false)); applyColors(); });
controls.addEventListener('start', () => {
  fly = null;
  document.querySelectorAll('#views button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
});

const bindRange = (id, fn) => document.getElementById(id).addEventListener('input', (ev) => fn(parseFloat(ev.target.value)));
bindRange('explode', (v) => { state.explode = v; layout(); });
bindRange('thick', (v) => { state.T = v; layout(); });
bindRange('clipPos', (v) => { state.clipPos = v; applyClip(); });
document.getElementById('tAir').addEventListener('change', (ev) => {
  state.air = ev.target.checked; airGroup.visible = state.air;
  document.getElementById('legend').hidden = !state.air; document.getElementById('airModes').hidden = !state.air;
});
document.getElementById('tDevice').addEventListener('change', (ev) => {
  GROUPS.filter((g) => g.device).forEach((g) => setVisible(g, ev.target.checked));
});
document.getElementById('tEdges').addEventListener('change', (ev) => { edgeLines.forEach((l) => { l.visible = ev.target.checked; }); });
document.getElementById('tByPart').addEventListener('change', (ev) => { state.byPart = ev.target.checked; applyColors(); });
document.getElementById('tXray').addEventListener('change', (ev) => { state.xray = ev.target.checked; applyColors(); });
// one click: explode, colour by part, see-through, device on
document.getElementById('howFits').addEventListener('click', () => {
  const set = (id, v) => { const el = document.getElementById(id); el.checked = v; el.dispatchEvent(new Event('change')); };
  set('tByPart', true); set('tXray', true); set('tDevice', true);
  const ex = document.getElementById('explode'); ex.value = 40; ex.dispatchEvent(new Event('input'));
  flyTo('fit');
  document.querySelectorAll('#views button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
});

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const tip = document.getElementById('tip');
let down = null, pending = null;
function pick(cx, cy) {
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(pickables.filter((m) => m.visible), false);
  for (const h of hits) {
    if (state.clip !== 'off' && clipPlane.distanceToPoint(h.point) < 0) continue;
    return h.object;
  }
  return null;
}
renderer.domElement.addEventListener('pointermove', (ev) => {
  if (ev.pointerType !== 'mouse') return;
  pending = ev;
});
renderer.domElement.addEventListener('pointerleave', () => { state.hover = null; tip.hidden = true; applyHighlight(); });
renderer.domElement.addEventListener('pointerdown', (ev) => { down = [ev.clientX, ev.clientY]; });
renderer.domElement.addEventListener('pointerup', (ev) => {
  if (!down || Math.hypot(ev.clientX - down[0], ev.clientY - down[1]) > 5) return;
  select(pick(ev.clientX, ev.clientY)?.userData.group ?? null);
});
function handleHover() {
  if (!pending) return;
  const ev = pending; pending = null;
  const obj = pick(ev.clientX, ev.clientY);
  const g = obj ? obj.userData.group : null;
  if (g !== state.hover) { state.hover = g; applyHighlight(); }
  if (g) {
    const r = stage.getBoundingClientRect();
    tip.textContent = obj.userData.label || g.name; tip.hidden = false;
    tip.style.left = `${ev.clientX - r.left}px`; tip.style.top = `${ev.clientY - r.top}px`;
  } else tip.hidden = true;
  renderer.domElement.style.cursor = g ? 'pointer' : '';
}

// ---- theme, resize, render loop ---------------------------------------------------
new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
new ResizeObserver(() => {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}).observe(stage);

const ease = (x) => 1 - Math.pow(1 - x, 3);
function tick(now) {
  if (fly) {
    const k = Math.min(1, (now - fly.t0) / fly.dur), q = ease(k);
    camera.position.lerpVectors(fly.fromP, fly.to.p, q);
    controls.target.lerpVectors(fly.fromT, fly.to.t, q);
    if (k >= 1) fly = null;
  }
  controls.update();
  handleHover();
  if (state.air) for (const a of arrows) {
    const u = a.userData;
    const s = reduceMotion.matches ? 0.55 : (now / 1800 + u.phase) % 1;
    a.position.copy(u.start).addScaledVector(u.dir, s * u.len);
    u.mat.opacity = Math.sin(Math.PI * s) * 0.95;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

applyTheme();
applyClip();
layout();
select(null);
requestAnimationFrame(tick);
