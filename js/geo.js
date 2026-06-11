/* ============================================================
   SPITI 2026 — shared geo + topo engine
   Geographic waypoints (approx, faithful to the real circuit),
   a projector that fits them to any viewBox, route-path builder,
   and procedural topographic-contour generators.
   Exposes window.SPITI
   ============================================================ */
(function () {
  // name, short label, altitude (m), lat, lon, kind
  const WP = [
    { n: "Chandigarh",   s: "CHD", a: 350,  lat: 30.73, lon: 76.78, k: "start" },
    { n: "Shimla",       s: "SML", a: 2276, lat: 31.10, lon: 77.17, k: "city"  },
    { n: "Narkanda",     s: "NRK", a: 2708, lat: 31.26, lon: 77.46, k: "town"  },
    { n: "Rampur",       s: "RMP", a: 1006, lat: 31.45, lon: 77.63, k: "town"  },
    { n: "Sangla",       s: "SNG", a: 2700, lat: 31.42, lon: 78.26, k: "town"  },
    { n: "Chitkul",      s: "CKL", a: 3450, lat: 31.35, lon: 78.43, k: "village"},
    { n: "Kalpa",        s: "KLP", a: 2960, lat: 31.54, lon: 78.25, k: "village"},
    { n: "Nako",         s: "NKO", a: 3625, lat: 31.88, lon: 78.63, k: "village"},
    { n: "Tabo",         s: "TBO", a: 3280, lat: 32.09, lon: 78.39, k: "monastery"},
    { n: "Dhankar",      s: "DNK", a: 3894, lat: 32.09, lon: 78.21, k: "monastery"},
    { n: "Kaza",         s: "KAZ", a: 3650, lat: 32.23, lon: 78.07, k: "town"  },
    { n: "Kibber",       s: "KBR", a: 4270, lat: 32.33, lon: 78.01, k: "village"},
    { n: "Komic",        s: "KMC", a: 4587, lat: 32.27, lon: 78.13, k: "village"},
    { n: "Kunzum La",    s: "KZM", a: 4551, lat: 32.40, lon: 77.64, k: "pass"   },
    { n: "Chandratal",   s: "CTL", a: 4300, lat: 32.48, lon: 77.62, k: "lake"   },
    { n: "Batal",        s: "BTL", a: 3960, lat: 32.41, lon: 77.58, k: "town"   },
    { n: "Manali",       s: "MNL", a: 2050, lat: 32.24, lon: 77.19, k: "end"    }
  ];

  // ride-order spine used for the route line
  const ORDER = ["Chandigarh","Shimla","Narkanda","Rampur","Sangla","Chitkul",
                 "Kalpa","Nako","Tabo","Dhankar","Kaza","Kibber","Komic","Kunzum La",
                 "Chandratal","Batal","Manali"];

  function bounds(list) {
    let mnx = 1e9, mny = 1e9, mxx = -1e9, mxy = -1e9;
    list.forEach(p => {
      mnx = Math.min(mnx, p.lon); mxx = Math.max(mxx, p.lon);
      mny = Math.min(mny, p.lat); mxy = Math.max(mxy, p.lat);
    });
    return { mnx, mny, mxx, mxy };
  }

  // project lon/lat into a w×h box with padding; y inverted (north=up)
  function makeProjector(w, h, pad, list) {
    const b = bounds(list || WP);
    const sx = (w - 2 * pad) / (b.mxx - b.mnx);
    const sy = (h - 2 * pad) / (b.mxy - b.mny);
    const s = Math.min(sx, sy);
    const ox = pad + ((w - 2 * pad) - s * (b.mxx - b.mnx)) / 2;
    const oy = pad + ((h - 2 * pad) - s * (b.mxy - b.mny)) / 2;
    return (lat, lon) => ({
      x: ox + (lon - b.mnx) * s,
      y: (h - oy) - (lat - b.mny) * s
    });
  }

  function byName(n) { return WP.find(p => p.n === n); }

  // returns {points:[{x,y,wp}], d} for the route spine
  function route(w, h, pad, opts) {
    opts = opts || {};
    const proj = makeProjector(w, h, pad, WP);
    const pts = ORDER.map(n => {
      const wp = byName(n);
      const p = proj(wp.lat, wp.lon);
      return { x: p.x, y: p.y, wp };
    });
    const d = smooth(pts, opts.tension == null ? 0.18 : opts.tension);
    return { points: pts, d, proj };
  }

  // all waypoints projected (for dense label maps)
  function allPoints(w, h, pad) {
    const proj = makeProjector(w, h, pad, WP);
    return WP.map(wp => {
      const p = proj(wp.lat, wp.lon);
      return { x: p.x, y: p.y, wp };
    });
  }

  // catmull-rom -> bezier smoothing
  function smooth(pts, t) {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) * t;
      const c1y = p1.y + (p2.y - p0.y) * t;
      const c2x = p2.x - (p3.x - p1.x) * t;
      const c2y = p2.y - (p3.y - p1.y) * t;
      d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
    }
    return d;
  }

  /* ---------- procedural topographic contours ---------- */
  // deterministic pseudo-noise
  function noise(a, seed) {
    return (
      Math.sin(a * 3 + seed) * 0.55 +
      Math.sin(a * 5 + seed * 1.7) * 0.28 +
      Math.sin(a * 9 + seed * 0.6) * 0.13 +
      Math.sin(a * 2 + seed * 2.3) * 0.20
    );
  }

  // one organic closed ring around (cx,cy) of base radius r
  function ring(cx, cy, r, seed, amp, squash) {
    const N = 90, pts = [];
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * Math.PI * 2;
      const rr = r * (1 + noise(a, seed) * amp);
      pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr * (squash || 1) });
    }
    return smooth(pts, 0.16) + " Z";
  }

  // nested contour set around a center: returns array of path strings (outer->inner)
  function contourField(cx, cy, opts) {
    opts = opts || {};
    const count = opts.count || 9;
    const step = opts.step || 13;
    const r0 = opts.r0 || 10;
    const seed = opts.seed || 1;
    const amp = opts.amp == null ? 0.12 : opts.amp;
    const squash = opts.squash || 1;
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push(ring(cx, cy, r0 + i * step, seed + i * 0.4, amp, squash));
    }
    return out;
  }

  /* ---------- stylized SPITI CIRCUIT MAP (from the reference) ---------- */
  const CIRCUIT = {
    vbW: 600, vbH: 470,
    main: [
      { n: "Chandigarh",   x: 150, y: 372, a: 350,  ic: "petrol",    side: "l" },
      { n: "Shimla",       x: 210, y: 300, a: 2276, ic: "petrol",    side: "l" },
      { n: "Narkanda",     x: 260, y: 250, a: 2708, ic: "petrol",    side: "l" },
      { n: "Rampur",       x: 315, y: 214, a: 1006, ic: "petrol",    side: "b" },
      { n: "Reckong Peo",  x: 404, y: 198, a: 2290, ic: "petrol",    side: "b" },
      { n: "Nako",         x: 544, y: 172, a: 3625, ic: "lake",      side: "r" },
      { n: "Tabo",         x: 516, y: 142, a: 3280, ic: "monastery", side: "r" },
      { n: "Kaza",         x: 452, y: 140, a: 3650, ic: "petrol",    side: "b" },
      { n: "Key Mon.",     x: 432, y: 92,  a: 4112, ic: "monastery", side: "t" },
      { n: "Chicham",      x: 392, y: 108, a: 4140, ic: "dot",       side: "b" },
      { n: "Kunzum Pass",  x: 352, y: 88,  a: 4551, ic: "pass",      side: "t" },
      { n: "Batal",        x: 306, y: 96,  a: 3960, ic: "dot",       side: "b" },
      { n: "Atal Tunnel",  x: 220, y: 94,  a: 3060, ic: "tunnel",    side: "t" },
      { n: "Manali",       x: 212, y: 140, a: 2050, ic: "petrol",    side: "l" },
      { n: "Kullu",        x: 182, y: 182, a: 1280, ic: "dot",       side: "r" },
      { n: "Mandi",        x: 150, y: 226, a: 800,  ic: "petrol",    side: "l" }
    ],
    spurs: [
      { from: "Reckong Peo", via: [
        { n: "Sangla",  x: 482, y: 226, a: 2700, ic: "dot", side: "b" },
        { n: "Chitkul", x: 524, y: 252, a: 3450, ic: "dot", side: "r" } ] },
      { from: "Tabo", via: [ { n: "Dhankar", x: 562, y: 112, a: 3894, ic: "monastery", side: "r" } ] },
      { from: "Kaza", via: [ { n: "Pin Valley", x: 442, y: 184, a: 3600, ic: "dot", side: "b" } ] },
      { from: "Kunzum Pass", via: [ { n: "Chandra Taal", x: 360, y: 46, a: 4300, ic: "lake", side: "t" } ] }
    ],
    delhi: { n: "Delhi", x: 168, y: 452, a: 216 }
  };

  function cNode(name) {
    return CIRCUIT.main.find(p => p.n === name) ||
      CIRCUIT.spurs.flatMap(s => s.via).find(p => p.n === name);
  }

  // small legend glyphs — all currentColor
  function glyph(kind, x, y) {
    switch (kind) {
      case "petrol":
        return `<g><rect x="${x - 3.4}" y="${y - 5}" width="6.4" height="10" rx="1" fill="var(--tee-bg,#fff)" stroke="currentColor" stroke-width="1.3"/><path d="M ${x + 3} ${y - 2.5} q 2.4 0 2.4 2.2 l 0 2.3 q 0 1.4 -1.4 1.4" fill="none" stroke="currentColor" stroke-width="1.1"/><line x1="${x - 1.4}" y1="${y - 2.2}" x2="${x + 0.6}" y2="${y - 2.2}" stroke="currentColor" stroke-width="1.1"/></g>`;
      case "monastery":
        return `<g><path d="M ${x} ${y - 7} L ${x + 5.2} ${y + 3.4} L ${x - 5.2} ${y + 3.4} Z" fill="currentColor"/><line x1="${x}" y1="${y - 11}" x2="${x}" y2="${y - 7}" stroke="currentColor" stroke-width="1.2"/><path d="M ${x} ${y - 11} l 3.4 1.4 l -3.4 1.4 Z" fill="currentColor"/></g>`;
      case "pass":
        return `<path d="M ${x - 5.4} ${y - 5} L ${x + 5.4} ${y - 5} L ${x - 5.4} ${y + 5} L ${x + 5.4} ${y + 5} Z" fill="currentColor"/>`;
      case "lake":
        return `<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M ${x - 6} ${y - 1.5} q 3 -3.6 6 0 q 3 3.6 6 0"/><path d="M ${x - 6} ${y + 2.5} q 3 -3.6 6 0 q 3 3.6 6 0"/></g>`;
      case "tunnel":
        return `<g><path d="M ${x - 5} ${y + 4} L ${x - 5} ${y - 1} a 5 5 0 0 1 10 0 L ${x + 5} ${y + 4}" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="${x}" y1="${y - 5.5} " x2="${x}" y2="${y + 4}" stroke="currentColor" stroke-width="1" stroke-dasharray="1.5 1.5"/></g>`;
      default:
        return `<circle cx="${x}" cy="${y}" r="3" fill="currentColor"/>`;
    }
  }

  function cLabel(p, big) {
    const ns = big ? 13 : 11, as = big ? 7.5 : 6.5;
    let lx = p.x, ly = p.y, anc = "middle", dy1 = -10, dy2 = 0;
    if (p.side === "l") { lx = p.x - 12; anc = "end"; dy1 = -1; dy2 = 9; }
    else if (p.side === "r") { lx = p.x + 12; anc = "start"; dy1 = -1; dy2 = 9; }
    else if (p.side === "t") { ly = p.y - 12; anc = "middle"; dy1 = 0; dy2 = -9; }
    else { ly = p.y + 14; anc = "middle"; dy1 = 9; dy2 = 18; }
    const name = `<text x="${lx}" y="${ly + (p.side==='t'?dy2:dy1)}" text-anchor="${anc}" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="${ns}" fill="currentColor" style="text-transform:uppercase">${p.n}</text>`;
    const alt = `<text x="${lx}" y="${ly + (p.side==='t'?dy1:dy2)}" text-anchor="${anc}" font-family="'IBM Plex Mono',monospace" font-size="${as}" fill="currentColor" opacity=".68">${p.a.toLocaleString()}m</text>`;
    return name + alt;
  }

  // returns {vb, svg}. opts: labels, icons, legend, title, big
  function drawCircuit(opts) {
    opts = opts || {};
    const big = opts.big !== false;
    let g = "";
    // road — main closed loop (casing + line)
    const mainD = smooth(CIRCUIT.main, 0.16) + " Z";
    g += `<path d="${mainD}" fill="none" stroke="currentColor" stroke-width="${opts.thick || 3}" stroke-linecap="round" stroke-linejoin="round"/>`;
    // delhi tail
    const chd = cNode("Chandigarh"), dl = CIRCUIT.delhi;
    g += `<path d="M ${chd.x} ${chd.y} C ${chd.x - 6} ${chd.y + 30}, ${dl.x + 4} ${dl.y - 34}, ${dl.x} ${dl.y}" fill="none" stroke="currentColor" stroke-width="${(opts.thick||3)*0.7}" stroke-dasharray="2 5" stroke-linecap="round" opacity=".75"/>`;
    // spurs
    CIRCUIT.spurs.forEach(sp => {
      const start = cNode(sp.from);
      const pts = [start, ...sp.via];
      g += `<path d="${smooth(pts, 0.18)}" fill="none" stroke="currentColor" stroke-width="${(opts.thick||3)*0.62}" stroke-linecap="round"/>`;
    });
    // nodes
    const drawNode = (p) => {
      if (opts.icons !== false && p.ic && p.ic !== "dot") g += glyph(p.ic, p.x, p.y);
      else g += `<circle cx="${p.x}" cy="${p.y}" r="3.1" fill="currentColor"/><circle cx="${p.x}" cy="${p.y}" r="3.1" fill="none" stroke="var(--tee-bg,#fff)" stroke-width="1"/>`;
      if (opts.labels !== false) g += cLabel(p, big);
    };
    CIRCUIT.main.forEach(drawNode);
    CIRCUIT.spurs.forEach(sp => sp.via.forEach(drawNode));
    g += `<circle cx="${dl.x}" cy="${dl.y}" r="3" fill="currentColor"/>`;
    if (opts.labels !== false) g += `<text x="${dl.x - 11}" y="${dl.y + 4}" text-anchor="end" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="${big?13:11}" fill="currentColor" style="text-transform:uppercase">Delhi</text>`;

    // title block (echoes the reference)
    if (opts.title !== false) {
      g += `<g transform="translate(34,42)">
        <line x1="-6" y1="-22" x2="-6" y2="58" stroke="currentColor" stroke-width="2"/>
        <text x="6" y="0" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="30" letter-spacing="1" fill="currentColor">SPITI</text>
        <text x="6" y="26" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="30" letter-spacing="1" fill="currentColor">CIRCUIT</text>
        <text x="6" y="52" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="30" letter-spacing="1" fill="currentColor">MAP</text>
      </g>`;
    }
    // legend
    if (opts.legend) {
      const lx = 384, ly = 384, items = [["lake","Lake"],["pass","Mountain Pass"],["monastery","Monastery"],["petrol","Petrol Station"]];
      g += `<rect x="${lx-14}" y="${ly-20}" width="200" height="108" fill="none" stroke="currentColor" stroke-width="1" opacity=".55"/>`;
      items.forEach((it, i) => {
        const yy = ly + i * 24;
        g += glyph(it[0], lx, yy);
        g += `<text x="${lx + 20}" y="${yy + 4}" font-family="'IBM Plex Mono',monospace" font-size="11" fill="currentColor">${it[1]}</text>`;
      });
    }
    if (opts.sub !== false) g += `<text x="34" y="462" text-anchor="start" font-family="'IBM Plex Mono',monospace" font-size="9" letter-spacing="2" fill="currentColor" opacity=".8">r/punebikers · SPITI 2026 · ~1,350 KM</text>`;
    return { vb: `0 0 ${CIRCUIT.vbW} ${CIRCUIT.vbH}`, svg: g };
  }

  window.SPITI = {
    WP, ORDER, byName, makeProjector, route, allPoints, smooth,
    ring, contourField, CIRCUIT, cNode, drawCircuit, glyph
  };
})();
