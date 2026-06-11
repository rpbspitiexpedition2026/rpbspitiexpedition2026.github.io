/* SPITI 2026 — expedition website renderer.
   Requires: spiti/geo.js, spiti/itinerary-data.js, spiti/manual-data.js */
(function () {
  const S = window.SPITI, IT = window.ITIN, M = window.MANUAL;
  const el = (id) => document.getElementById(id);

  /* ---------- hero circuit map ---------- */
  function heroMap() {
    const art = S.drawCircuit({ labels: true, icons: true, legend: false, title: false, big: true, thick: 3 });
    el("heroMap").innerHTML = `<g style="color:var(--ink);--tee-bg:var(--paper)">${art.svg}</g>`;
  }

  /* ---------- countdown ---------- */
  function countdown() {
    const t0 = new Date("2026-09-19T06:00:00+05:30").getTime();
    const cells = ["cdD", "cdH", "cdM", "cdS"];
    function tick() {
      let d = Math.max(0, t0 - Date.now());
      const vals = [
        Math.floor(d / 864e5),
        Math.floor(d / 36e5) % 24,
        Math.floor(d / 6e4) % 60,
        Math.floor(d / 1e3) % 60
      ];
      cells.forEach((c, i) => { el(c).textContent = String(vals[i]).padStart(2, "0"); });
    }
    tick(); setInterval(tick, 1000);
  }

  /* ---------- elevation profile ---------- */
  function elevation() {
    const W = 1080, H = 240, L = 50, R = W - 30, top = 50, base = H - 46;
    const seq = ["Chandigarh","Narkanda","Rampur","Chitkul","Kalpa","Nako","Tabo","Kaza","Komic","Kunzum La","Chandratal","Batal","Manali"];
    const max = 4700, min = 300;
    const pts = seq.map((nm, i) => {
      const wp = S.byName(nm);
      return { x: L + (i / (seq.length - 1)) * (R - L), y: base - ((wp.a - min) / (max - min)) * (base - top), wp };
    });
    let g = "";
    [1000, 2000, 3000, 4000].forEach(a => {
      const y = base - ((a - min) / (max - min)) * (base - top);
      g += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" stroke="var(--line)" stroke-width="1"/>`;
      g += `<text x="${L - 8}" y="${y + 4}" text-anchor="end" class="svgmono" font-size="11">${a / 1000}k</text>`;
    });
    const area = `M ${L} ${base} ` + pts.map(p => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + ` L ${R} ${base} Z`;
    g += `<path d="${area}" fill="var(--rust)" opacity=".08"/>`;
    g += `<path d="M ${pts.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ")}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>`;
    pts.forEach(p => {
      const hi = ["Chandigarh","Chitkul","Kaza","Komic","Kunzum La","Chandratal","Manali"].includes(p.wp.n);
      g += `<circle cx="${p.x}" cy="${p.y}" r="${hi ? 4 : 2.5}" fill="${hi ? 'var(--rust)' : 'var(--ink)'}"/>`;
      if (hi) {
        g += `<text x="${p.x}" y="${p.y - 14}" text-anchor="middle" class="svgcond" font-size="15">${p.wp.n.toUpperCase()}</text>`;
        g += `<text x="${p.x}" y="${p.y - 30}" text-anchor="middle" class="svgmono" font-size="10">${p.wp.a.toLocaleString()}m</text>`;
      }
    });
    el("elev").innerHTML = g;
  }

  /* ---------- riders ---------- */
  function riders() {
    el("riders").innerHTML = M.luggage.map((c, i) => `
      <article class="rider-card">
        <div class="rc-no">0${i + 1}</div>
        <h3>${c.who}</h3>
        <div class="rc-bike">${c.bike.split("(")[0].trim()}</div>
        <div class="rc-role">${c.role}</div>
        <p class="rc-why">${c.why}</p>
      </article>`).join("");
  }

  /* ---------- itinerary accordion ---------- */
  function itinerary() {
    const tagmap = { note: "NOTE", fuel: "FUEL", eat: "EAT", stay: "STAY", brew: "BREW" };
    el("itin").innerHTML = IT.days.map((dy, i) => {
      const x = M.ext[dy.no];
      const stats = x ? `<span class="it-stat">${x.stats.dist}</span><span class="it-stat">${x.stats.saddle} saddle</span><span class="it-stat">Difficulty ${x.stats.diff}/10</span>` : `<span class="it-stat">${dy.dist}</span>`;
      const rows = dy.rows.map(r => `<div class="it-row"><span class="it-tag t-${r[0]}">${tagmap[r[0]]}</span><span>${r[1]}</span></div>`).join("");
      return `
      <details class="it-day" ${i === 0 ? "open" : ""} data-screen-label="Day ${dy.no}">
        <summary>
          <span class="it-no">${dy.no}</span>
          <span class="it-leg">${dy.from} <span class="arr">→</span> ${dy.to}</span>
          <span class="it-date">${dy.date}</span>
          <span class="it-alt">${dy.alt}</span>
          <span class="it-chev">+</span>
        </summary>
        <div class="it-body">
          <div class="it-stats">${stats}</div>
          ${rows}
        </div>
      </details>`;
    }).join("");
  }

  /* ---------- essentials ---------- */
  function essentials() {
    const items = [
      ["⛽", "One pump in Spiti", "Kaza is the only petrol pump inside the valley. Brim every tank at Reckong Peo & Kaza; 4×5 L spare cans ride with the convoy."],
      ["▲", "Altitude discipline", "Kinnaur-first climb for acclimatization. 3–4 L water/day, oximeter checks, descend on symptoms — no exceptions."],
      ["₹", "Cash country", "ATMs only at Reckong Peo & Kaza, often empty. UPI rarely works past Peo. Carry cash from Chandigarh."],
      ["☎", "Off the grid", "BSNL only beyond Peo; dead zones at Nako, Kunzum & Chandratal. Offline maps downloaded, families briefed."],
      ["❄", "Weather buffers", "Late Sept risks early snow on Kunzum. Two buffer days held (Day 9 Pin Valley · Day 12 Manali)."],
      ["⛟", "Bikes by rail freight", "Machines ship Pune ⇄ Chandigarh via Safexpress. Drain fuel, photograph all sides, keep consignment receipts."]
    ];
    el("essentials").innerHTML = items.map(x => `
      <article class="ess">
        <div class="ess-ic">${x[0]}</div>
        <h3>${x[1]}</h3>
        <p>${x[2]}</p>
      </article>`).join("");
  }

  /* ---------- segments strip ---------- */
  function segments() {
    el("segs").innerHTML = M.segments.map(s => `
      <div class="seg">
        <span class="sg-day">${s[0]}</span>
        <span class="sg-name">${s[1]}</span>
        <span class="sg-km">${s[2]}</span>
        <span class="sg-surface">${s[4]}</span>
      </div>`).join("");
  }

  /* ---------- mobile nav ---------- */
  function mobileNav() {
    const burger = document.querySelector('.nav-burger');
    const navEl = document.querySelector('nav');
    if (!burger || !navEl) return;
    burger.addEventListener('click', () => {
      const isOpen = navEl.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.textContent = isOpen ? '×' : '☰';
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        navEl.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = '☰';
      });
    });
  }

  function run() { heroMap(); countdown(); elevation(); riders(); itinerary(); essentials(); segments(); mobileNav(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
