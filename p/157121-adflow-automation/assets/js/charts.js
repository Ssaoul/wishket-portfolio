/* ============================================================
   charts.js — 순수 SVG 차트 (라이브러리 없음). 데모용 합성 데이터.
   ============================================================ */
'use strict';

// 면적+선 스파크 차트
function areaChart(el, data, opts) {
  opts = opts || {};
  const w = opts.w || 640, h = opts.h || 180, pad = 8;
  const max = Math.max.apply(null, data) * 1.15, min = 0;
  const x = (i) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1).toFixed(1)} ${h - pad} L${x(0).toFixed(1)} ${h - pad} Z`;
  const dots = data.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="${i === data.length - 1 ? 3.5 : 0}" fill="var(--brand-2)"/>`).join('');
  const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="${pad}" x2="${w - pad}" y1="${(h * g).toFixed(0)}" y2="${(h * g).toFixed(0)}" stroke="var(--line-2)"/>`).join('');
  el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" width="100%" preserveAspectRatio="none" style="display:block">
    <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="var(--brand)" stop-opacity=".33"/>
      <stop offset="1" stop-color="var(--brand)" stop-opacity="0"/></linearGradient></defs>
    ${grid}
    <path d="${area}" fill="url(#ag)"/>
    <path d="${line}" fill="none" stroke="var(--brand-2)" stroke-width="2" stroke-linejoin="round"/>
    ${dots}
  </svg>`;
}

// 채널별 세로 막대(그룹)
function barChart(el, series, labels, colors) {
  const w = 640, h = 200, pad = 26, gap = 16;
  const all = series.flat();
  const max = Math.max.apply(null, all) * 1.2;
  const groups = labels.length;
  const gw = (w - pad * 2) / groups;
  const bw = (gw - gap) / series.length;
  let bars = '';
  for (let g = 0; g < groups; g++) {
    for (let s = 0; s < series.length; s++) {
      const v = series[s][g];
      const bh = (v / max) * (h - pad * 2);
      const x = pad + g * gw + gap / 2 + s * bw;
      const y = h - pad - bh;
      bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(bw - 3).toFixed(1)}" height="${bh.toFixed(1)}" rx="3" fill="${colors[s]}"/>`;
    }
    const lx = pad + g * gw + gw / 2;
    bars += `<text x="${lx.toFixed(1)}" y="${h - 8}" text-anchor="middle" font-size="11" fill="var(--ink-3)">${labels[g]}</text>`;
  }
  el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" width="100%" style="display:block">${bars}</svg>`;
}

// 도넛 (승인율 등)
function donut(el, pct, color) {
  const r = 46, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
  el.innerHTML = `<svg viewBox="0 0 120 120" width="120" height="120">
    <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="12"/>
    <circle cx="60" cy="60" r="${r}" fill="none" stroke="${color || 'var(--brand)'}" stroke-width="12"
      stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" stroke-linecap="round"
      transform="rotate(-90 60 60)"/>
    <text x="60" y="58" text-anchor="middle" font-size="24" font-weight="750" fill="var(--ink)">${pct}%</text>
    <text x="60" y="76" text-anchor="middle" font-size="11" fill="var(--ink-3)">승인율</text>
  </svg>`;
}

window.Charts = { areaChart, barChart, donut };
