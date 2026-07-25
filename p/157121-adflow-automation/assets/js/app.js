/* ============================================================
   AdFlowKit 데모 — 공유 셸 · 합성 데이터 · 상호작용
   전부 브라우저 안에서만 동작. 서버·실제 API 호출 없음(정직 고지).
   ============================================================ */
'use strict';

/* ── 공유 셸 렌더 (사이드바 + 데모 라벨) ─────────────────── */
const NAV = [
  { sec: '파이프라인' },
  { key: 'index',     href: 'index.html',     label: '대시보드',     ic: 'grid' },
  { key: 'collect',   href: 'collect.html',   label: '레퍼런스 수집', ic: 'inbox', badge: null },
  { key: 'generate',  href: 'generate.html',  label: '소재 생성',     ic: 'spark' },
  { key: 'approve',   href: 'approve.html',   label: '승인 큐',       ic: 'check', badge: '5' },
  { key: 'publish',   href: 'publish.html',   label: '자동 게시',     ic: 'send' },
  { sec: '문서' },
  { key: 'architecture', href: 'architecture.html', label: '아키텍처·데이터플로우', ic: 'flow' },
];

const ICON = {
  grid:  '<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>',
  inbox: '<path d="M3 13l3 0 2 3h8l2-3 3 0M3 13l3-8h12l3 8M3 13v6h18v-6"/>',
  spark: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>',
  check: '<path d="M4 12l5 5L20 6"/>',
  send:  '<path d="M4 12l16-8-6 16-3-6-7-2z"/>',
  flow:  '<path d="M5 4h6v5H5zM13 15h6v5h-6zM8 9v4h8M16 13V9"/>',
};

function svgIc(name) {
  return `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICON[name] || ''}</svg>`;
}

function renderShell(active) {
  const demobar = `<div class="demobar">제안용 <b>동작 데모</b> · 가상 브랜드 <b>NUTRICORE</b> · 모든 소재·수치·레퍼런스는 <b>합성 데이터</b>이며 실제 메타·틱톡·인스타 API 는 연결되어 있지 않습니다</div>`;
  const nav = NAV.map((n) => {
    if (n.sec) return `<div class="nav-sec">${n.sec}</div>`;
    const on = n.key === active ? ' on' : '';
    const badge = n.badge ? `<span class="badge">${n.badge}</span>` : '';
    return `<a class="${on.trim()}" href="${n.href}">${svgIc(n.ic)}<span>${n.label}</span>${badge}</a>`;
  }).join('');
  const side = `
    <aside class="side">
      <div class="side-brand">
        <div class="logo"></div>
        <div><h1>AdFlowKit</h1><p>소재 파이프라인</p></div>
      </div>
      <nav class="nav">${nav}</nav>
      <div class="side-foot">
        <div class="who">
          <div class="ava">마</div>
          <div><b>마케팅 담당자</b><span>NUTRICORE · Admin</span></div>
        </div>
      </div>
    </aside>`;
  document.body.insertAdjacentHTML('afterbegin', demobar);
  const app = document.querySelector('.app');
  app.insertAdjacentHTML('afterbegin', side);
}

/* ── 합성 데이터 ───────────────────────────────────────── */
const IMG = {
  product:  'assets/img/product.jpg',
  refLife:  'assets/img/ref-lifestyle.jpg',
  refFlat:  'assets/img/ref-flatlay.jpg',
  refTok:   'assets/img/ref-tiktok.jpg',
  genA:     'assets/img/gen-banner.jpg',
  genB:     'assets/img/gen-vertical.jpg',
};

// 수집된 레퍼런스 (경쟁사 광고 — 합성)
const REFS = [
  { id: 'R-2041', ch: 'meta',   img: IMG.refLife, cap: '아침 루틴 · "하루 한 알로 시작하는 컨디션 관리"', eng: '참여 4.2%', save: true },
  { id: 'R-2038', ch: 'insta',  img: IMG.refFlat, cap: '성분 클로즈업 · 발효 유산균 소재 배치형', eng: '참여 3.7%', save: true },
  { id: 'R-2035', ch: 'tiktok', img: IMG.refTok,  cap: 'UGC 후기형 · "2주 먹어본 솔직 리뷰"', eng: '참여 6.1%', save: false },
  { id: 'R-2030', ch: 'meta',   img: IMG.refFlat, cap: '플랫레이 · 식이섬유+프로바이오틱 조합 강조', eng: '참여 2.9%', save: false },
  { id: 'R-2027', ch: 'insta',  img: IMG.refLife, cap: '라이프스타일 · 운동 후 섭취 장면', eng: '참여 3.3%', save: true },
  { id: 'R-2021', ch: 'tiktok', img: IMG.refTok,  cap: '숏폼 훅 · 첫 3초 "장 건강 이렇게 챙기세요"', eng: '참여 5.4%', save: false },
];

// 승인 대기 큐 (생성된 소재 — 합성). prov = AI 벤치마킹 근거
const QUEUE = [
  { id: 'A-5521', title: '데일리 프로바이오틱 · 정지형 배너', fmt: '1:1', img: IMG.genA,
    ref: 'R-2041', refCap: '아침 루틴형', prompt: '웜톤 · 좌측 여백 헤드라인 · 제품 우하단 배치',
    ch: ['meta','insta'], status: 'wait' },
  { id: 'A-5519', title: '장 건강 훅 · 숏폼 세로형', fmt: '9:16', img: IMG.genB,
    ref: 'R-2021', refCap: '숏폼 훅형', prompt: '상단 텍스트존 · 민트 배경 · 3초 훅 카피',
    ch: ['tiktok'], status: 'wait' },
  { id: 'A-5517', title: '성분 강조 · 정지형 배너', fmt: '1:1', img: IMG.genA,
    ref: 'R-2038', refCap: '성분 클로즈업형', prompt: '중앙 정렬 · 성분 아이콘존 · 뉴트럴 배경',
    ch: ['meta'], status: 'wait' },
  { id: 'A-5514', title: '운동 후 섭취 · 피드형', fmt: '4:5', img: IMG.genB,
    ref: 'R-2027', refCap: '라이프스타일형', prompt: '인물 우측 · 좌측 카피 · 활동적 톤',
    ch: ['insta'], status: 'wait' },
  { id: 'A-5510', title: '리뷰 인용 · 정지형', fmt: '1:1', img: IMG.genA,
    ref: 'R-2035', refCap: 'UGC 후기형', prompt: '별점 그래픽존 · 후기 인용 · 밝은 배경',
    ch: ['meta','insta'], status: 'wait' },
];

/* ── 유틸 ──────────────────────────────────────────────── */
function toast(msg, kind) {
  let host = document.querySelector('.toast-host');
  if (!host) { host = document.createElement('div'); host.className = 'toast-host'; document.body.appendChild(host); }
  const t = document.createElement('div');
  t.className = 'toast' + (kind ? ' ' + kind : '');
  t.innerHTML = msg;
  host.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 2600);
}
const chLabel = { meta: 'Meta', insta: 'Instagram', tiktok: 'TikTok' };
function chTag(ch) { return `<span class="tag ${ch}">${chLabel[ch]}</span>`; }

/* 페이지가 부를 수 있게 전역 노출 */
window.AF = { renderShell, IMG, REFS, QUEUE, toast, chTag, chLabel, svgIc };
