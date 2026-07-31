/* ============================================================
   TagLab 데모 — 공유 셸 + dataLayer 시뮬레이션 엔진
   실제 GA/GTM 미연동. dataLayer.push 를 흉내내 "태그 발화"를 콘솔로 재현.
   ============================================================ */
'use strict';

/* ── 공유 셸 ─────────────────────────────────────────────── */
const NAV = [
  { sec: '측정 환경' },
  { key: 'index',     href: 'index.html',     label: '측정 설계',      ic: 'grid' },
  { key: 'inspector', href: 'inspector.html', label: '라이브 이벤트',   ic: 'pulse' },
  { key: 'plan',      href: 'plan.html',      label: '이벤트 태깅 내역서', ic: 'list' },
  { sec: '안전·구조' },
  { key: 'pii',       href: 'pii.html',       label: 'PII 마스킹',      ic: 'shield' },
  { key: 'gtm',       href: 'gtm.html',       label: 'GTM 컨테이너',    ic: 'box' },
];
const ICON = {
  grid:  '<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>',
  pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  list:  '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  box:   '<path d="M3 8l9-5 9 5-9 5-9-5zM3 8v8l9 5 9-5V8"/>',
};
function svgIc(n){ return `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICON[n]||''}</svg>`; }

function renderShell(active) {
  const demobar = `<div class="demobar">제안용 <b>동작 데모</b> · 7개 브랜드·측정지표는 <b>합성 데이터</b> · 실제 GA4·GTM 은 연결되어 있지 않고 <b>dataLayer 발화를 시뮬레이션</b>합니다</div>`;
  const nav = NAV.map((n) => {
    if (n.sec) return `<div class="sec">${n.sec}</div>`;
    const on = n.key === active ? ' on' : '';
    return `<a class="${on.trim()}" href="${n.href}">${svgIc(n.ic)}<span>${n.label}</span></a>`;
  }).join('');
  const side = `<aside class="side">
    <div class="brand"><div class="logo"></div><div><h1>TagLab</h1><p>측정 설계 · 태깅 검증</p></div></div>
    <nav class="nav">${nav}</nav>
    <div class="sfoot"><b>7 브랜드 워크스페이스</b>어학원 · 출판 · 요리 · F&amp;B</div>
  </aside>`;
  document.body.insertAdjacentHTML('afterbegin', demobar);
  document.querySelector('.app').insertAdjacentHTML('afterbegin', side);
}

/* ── 7개 브랜드(합성) ─────────────────────────────────────── */
const BRANDS = [
  { key:'lang',  nm:'시사 어학원',  dm:'academy.example.kr',  color:'#3d5afe', kpi:'상담 신청',   ev:38, conv:'lead_submit' },
  { key:'lang2', nm:'글로벌 어학원', dm:'global.example.kr',   color:'#6b7cff', kpi:'수강 문의',   ev:26, conv:'lead_submit' },
  { key:'pub',   nm:'책과사람 출판', dm:'books.example.kr',    color:'#10b3a3', kpi:'도서 구매',   ev:19, conv:'purchase' },
  { key:'pub2',  nm:'열린책 출판',  dm:'openbook.example.kr', color:'#14a06b', kpi:'구독 신청',   ev:14, conv:'sign_up' },
  { key:'cook',  nm:'오늘의요리',   dm:'cook.example.kr',     color:'#d9932a', kpi:'클래스 예약', ev:31, conv:'reservation' },
  { key:'fnb',   nm:'미담 F&B',    dm:'midam.example.kr',    color:'#d8446a', kpi:'매장 찾기',   ev:22, conv:'store_locate' },
  { key:'fnb2',  nm:'델리 F&B',    dm:'deli.example.kr',     color:'#7a5af8', kpi:'예약 문의',   ev:17, conv:'reservation' },
];

/* ── dataLayer 시뮬레이션 엔진 ───────────────────────────── */
// 실제 GA/GTM 대신, 이벤트를 push 하면 구독자(콘솔)에게 전달한다. GTM 미리보기·GA4 DebugView 를 흉내.
const TagLab = (function () {
  const dataLayer = [];
  const subs = [];
  let seq = 0;
  function push(event) {
    const stamped = Object.assign({ _seq: ++seq, _t: nowClock() }, event);
    dataLayer.push(stamped);
    subs.forEach((fn) => { try { fn(stamped); } catch (e) { /* noop */ } });
    return stamped;
  }
  function subscribe(fn) { subs.push(fn); }
  function nowClock() {
    // Date 사용 가능(브라우저 런타임). 콘솔 표기용 HH:MM:SS.
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()].map((x) => String(x).padStart(2, '0')).join(':');
  }
  return { dataLayer, push, subscribe };
})();

/* ── 유틸 ─────────────────────────────────────────────────── */
function toast(msg) {
  let h = document.querySelector('.toast-host');
  if (!h) { h = document.createElement('div'); h.className = 'toast-host'; document.body.appendChild(h); }
  const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = msg; h.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 2200);
}
// 전화번호 마스킹 + 간이 해시(SHA 흉내 — 데모용 결정적 해시). 실제는 SHA-256.
function maskPhone(p) { const d = String(p).replace(/\D/g, ''); return d.length < 7 ? '***' : d.slice(0, 3) + '-****-' + d.slice(-4); }
function fauxHash(s) {
  let h = 0x811c9dc5; const str = String(s);
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return 'sha256:' + (h >>> 0).toString(16).padStart(8, '0') + '…(64hex)';
}
function maskName(n) { const s = String(n).trim(); return s.length <= 1 ? s : s[0] + '*'.repeat(s.length - 1); }

window.TL = { renderShell, svgIc, BRANDS, TagLab, toast, maskPhone, maskName, fauxHash };
