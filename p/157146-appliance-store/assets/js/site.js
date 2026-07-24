/* SEUM 자사몰 시안 — 공통 스크립트
   file:// 더블클릭으로도 열리도록 ES module 대신 클래식 스크립트(IIFE + 전역)로 작성.
   외부 라이브러리·CDN·fetch 없음. */
(function () {
  'use strict';

  var d = document;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };

  /* ── 현재 페이지 내비 활성화 ─────────────────────────── */
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  $$('.nav a, .drawer a.big').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href && href === here) a.classList.add('on');
  });

  /* ── 헤더: 스크롤 시 배경 진하게 ─────────────────────── */
  var hdr = $('.hdr');
  if (hdr) {
    var onScroll = function () {
      hdr.style.background = window.scrollY > 12
        ? 'rgba(244,243,240,.94)' : 'rgba(244,243,240,.82)';
      hdr.style.borderBottomColor = window.scrollY > 12
        ? 'rgba(21,22,26,.13)' : 'rgba(21,22,26,.07)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 모바일 드로어 ───────────────────────────────────── */
  var hamb = $('#hamb'), drawer = $('#drawer');
  function setMenu(open) {
    if (!hamb || !drawer) return;
    drawer.classList.toggle('open', open);
    hamb.classList.toggle('on', open);
    hamb.setAttribute('aria-expanded', open ? 'true' : 'false');
    d.body.style.overflow = open ? 'hidden' : '';
  }
  if (hamb && drawer) {
    hamb.addEventListener('click', function () { setMenu(!drawer.classList.contains('open')); });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    // 모바일 목업(mobile.html)에서 iframe src 를 '#menu' 로 지정하면 드로어가 열린 상태로 렌더된다.
    if (location.hash === '#menu') setMenu(true);
  }

  /* ── 뷰포트 진입 감시 ────────────────────────────────
     IntersectionObserver 대신 스크롤 스윕을 쓴다. 앵커 점프나 빠른 휠 스크롤로
     요소를 '건너뛰었을 때' 콜백이 끝내 발생하지 않아 콘텐츠가 영영 안 보이는
     문제를 피하기 위함 — 이미 지나간(top<0) 요소도 즉시 표시한다. */
  var pending = [];
  function watch(el, cb) { pending.push([el, cb]); }
  function sweep() {
    if (!pending.length) return;
    var vh = window.innerHeight || 800;
    for (var i = pending.length - 1; i >= 0; i--) {
      if (pending[i][0].getBoundingClientRect().top < vh * .94) {
        var it = pending.splice(i, 1)[0];
        it[1](it[0]);
      }
    }
  }
  /* 스로틀은 rAF 가 아니라 타이머로 건다.
     헤드리스 브라우저·백그라운드 탭처럼 rAF 가 발생하지 않는 환경에서
     rAF 게이트를 쓰면 플래그가 영구히 잠겨 콘텐츠가 끝내 안 보인다. */
  var lastSweep = 0, trailing = null;
  function onScrollSweep() {
    var now = Date.now();
    if (now - lastSweep >= 60) { lastSweep = now; sweep(); }
    clearTimeout(trailing);
    trailing = setTimeout(function () { lastSweep = Date.now(); sweep(); }, 90);
  }
  window.addEventListener('scroll', onScrollSweep, { passive: true });
  window.addEventListener('resize', onScrollSweep);
  window.addEventListener('load', sweep);

  /* ── 스크롤 리빌 ─────────────────────────────────────── */
  $$('.rv').forEach(function (el) {
    watch(el, function (t) { t.classList.add('in'); });
  });

  /* ── 숫자 카운트업 (data-count) ──────────────────────── */
  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-count'));
    var dec = (el.getAttribute('data-dec') | 0);
    var t0 = Date.now(), dur = 1300;
    var id = setInterval(function () {           // rAF 미발생 환경 대비 (위 주석 참조)
      var p = Math.min(1, (Date.now() - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * e).toLocaleString('ko-KR', {
        minimumFractionDigits: dec, maximumFractionDigits: dec
      });
      if (p >= 1) clearInterval(id);
    }, 16);
  }
  $$('[data-count]').forEach(function (el) { watch(el, countUp); });

  /* ── 차트 뷰포트 진입 시 애니메이션 ──────────────────── */
  window.SEUM = window.SEUM || {};
  window.SEUM.observeChart = function (svg) {
    watch(svg, function (t) { t.classList.add('in'); });
    sweep();
  };
  /* 렌더 검증·스크린샷용: 모든 대기 요소를 즉시 표시 */
  window.SEUM.revealAll = function () {
    while (pending.length) { var it = pending.shift(); it[1](it[0]); }
    $$('.rv').forEach(function (el) { el.classList.add('in'); });
    $$('.chart').forEach(function (el) { el.classList.add('in'); });
  };

  /* ── 토스트 (카페24 기본 기능 자리 — 로직 미연결 안내) ─ */
  var toastEl = null, toastT = null;
  window.SEUM.toast = function (msg) {
    if (!toastEl) {
      toastEl = d.createElement('div');
      toastEl.className = 'toast';
      toastEl.id = 'toast';
      d.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  };

  /* 카페24 기본 기능(로그인·장바구니·결제) 자리: UI 만 유지하고 동작은 연결하지 않는다. */
  $$('[data-cafe24]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.SEUM.toast(el.getAttribute('data-cafe24') + ' — 카페24 기본 기능 영역 (시안에서는 UI만)');
    });
  });

  window.SEUM.$ = $; window.SEUM.$$ = $$;

  sweep(); // 첫 화면(폴드 위) 요소는 load 를 기다리지 않고 바로 표시

  /* ── 해시로 직접 진입(딥링크) 시 위치 보정 ────────────
     진입 시에는 smooth 스크롤을 쓰지 않는다(링크 클릭에만 적용).
     이미지 로드로 레이아웃이 밀릴 수 있어 load 후 한 번 더 맞춘다.
     헤더 높이 보정은 CSS scroll-margin-top 이 담당한다. */
  if (location.hash && location.hash !== '#menu') {
    var target = d.getElementById(location.hash.slice(1));
    if (target) {
      var jumpTo = function () {
        var root = d.documentElement;
        var prev = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        target.scrollIntoView();
        root.style.scrollBehavior = prev;
        sweep();
      };
      jumpTo();
      window.addEventListener('load', function () { setTimeout(jumpTo, 60); });
    }
  }
})();
