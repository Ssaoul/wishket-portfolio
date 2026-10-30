/* 바디노트 — 바디케어 고객관리 웹앱 제안용 시안 (순수 HTML/CSS/JS, 외부 요청 없음) */
(function () {
  'use strict';
  var KEY = 'bodynote-demo-v1';
  var S = load();

  function load() {
    try { var raw = localStorage.getItem(KEY); if (raw) { var s = JSON.parse(raw); if (s && s.version === 1) return s; } } catch (e) {}
    return window.makeSeed();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ── 유틸 ── */
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function find(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function uid(p) { return p + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36); }
  var today = window.todayYmd;
  function fmtDate(s) { if (!s) return '-'; var p = s.split('-'); return p[0] + '.' + p[1] + '.' + p[2]; }
  function fmtShort(s) { var p = s.split('-'); return (+p[1]) + '월 ' + (+p[2]) + '일'; }
  function daysAgo(s) { var a = new Date(s + 'T12:00:00'), b = new Date(today() + 'T12:00:00'); return Math.round((b - a) / 864e5); }
  function relDay(s) { var n = daysAgo(s); return n === 0 ? '오늘' : n === 1 ? '어제' : n + '일 전'; }
  function age(birth) { return new Date().getFullYear() - birth; }
  function dow(s) { return '일월화수목금토'[new Date(s + 'T12:00:00').getDay()]; }

  var I = {
    check: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    checkC: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    users: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c1.9.7 3.1 2.4 3.5 5.2"/></svg>',
    spark: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></svg>',
    book: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    link: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 6h7M7.5 8l8.7 8.2"/></svg>',
    shield: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>',
    home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    list: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    run: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="4.5" r="2"/><path d="M8 21l3-6 3 2v5M6 12l3-4h5l3 4"/></svg>',
    lock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    eye: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    plus: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    warn: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></svg>',
    play: '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg>',
    arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    edit: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
    trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
    chevR: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    chevL: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    out: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/></svg>'
  };

  /* ── 토스트·모달 ── */
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    t.innerHTML = I.checkC + '<span>' + esc(msg) + '</span>';
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }
  function openModal(title, bodyHtml, footHtml, onMount) {
    var root = $('#modalRoot');
    root.innerHTML = '<div class="modal-back" data-close="1"><div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(title) + '">' +
      '<div class="modal-head"><h3>' + esc(title) + '</h3><button class="btn ghost sm" data-close="1" aria-label="닫기">' + I.x + '</button></div>' +
      '<div class="modal-body">' + bodyHtml + '</div>' + (footHtml ? '<div class="modal-foot">' + footHtml + '</div>' : '') + '</div></div>';
    root.querySelector('.modal-back').addEventListener('click', function (e) {
      if (e.target.getAttribute('data-close') || (e.target.closest && e.target.closest('button[data-close]'))) closeModal();
    });
    if (onMount) onMount(root.querySelector('.modal'));
  }
  var onModalClose = null;
  function closeModal() {
    $('#modalRoot').innerHTML = '';
    clearInterval(playerTimer); playerTimer = null;
    if (onModalClose) { var f = onModalClose; onModalClose = null; f(); }
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  document.addEventListener('click', function (e) {
    var v = e.target.closest && e.target.closest('button[data-video]');
    if (v) { e.preventDefault(); openVideoModal(v.getAttribute('data-video')); }
  });

  /* ── 역할·권한 ── */
  var ROLE_NAME = { admin: '관리자', staff: '관리사', customer: '고객' };
  var ROLE_HOME = { admin: '#/admin/rules', staff: '#/staff/guide', customer: '#/customer/home' };
  function me() { return S.role === 'admin' ? find(S.accounts, 'a1') : S.role === 'staff' ? (find(S.accounts, S.staffAs || 'a2') || find(S.accounts, 'a2')) : null; }
  function can(perm) { var m = me(); if (!m) return false; if (m.role === 'admin') return true; return !!(m.perms && m.perms[perm]); }
  function visibleCustomers() {
    var m = me();
    return S.customers.filter(function (c) { return can('allCustomers') || c.staff === m.id; });
  }
  function setRole(r) { if (ROLE_NAME[r] && S.role !== r) { S.role = r; save(); } }

  /* ── 데이터 조회 ── */
  function custVisits(cid) { return S.visits.filter(function (v) { return v.cust === cid; }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : (a.id < b.id ? -1 : 1); }); }
  function pkgOf(c) { return find(S.packages, c.pkg) || { name: '-', total: 0 }; }
  function usage(c) { var p = pkgOf(c); var used = custVisits(c.id).length; return { used: used, total: p.total, left: Math.max(0, p.total - used), pct: p.total ? Math.min(100, Math.round(used / p.total * 100)) : 0 }; }
  function staffName(id) { var a = find(S.accounts, id); return a ? a.name : '-'; }
  function statusBadge(st) { var cls = { '이용중': 'ok', '체험중': 'primary', '만료 임박': 'warn', '휴면': '' }[st] || ''; return '<span class="badge ' + cls + '">' + esc(st) + '</span>'; }
  function typeBadge(t) { return '<span class="badge ' + (t === '운동' ? 'primary' : t === '수기' ? 'accent' : '') + '">' + esc(t) + '</span>'; }
  function lastVisit(c) { var v = custVisits(c.id); return v.length ? v[v.length - 1] : null; }

  function computeGuide(obsIds) {
    var mus = {}, prog = {};
    obsIds.forEach(function (oid) {
      var o = find(S.observations, oid); if (!o) return;
      o.muscles.forEach(function (m) { (mus[m] = mus[m] || []).push(oid); });
      o.programs.forEach(function (p) { (prog[p] = prog[p] || []).push(oid); });
    });
    function rank(map, list) {
      return Object.keys(map).map(function (k) { return { item: find(list, k), from: map[k] }; })
        .filter(function (r) { return r.item; })
        .sort(function (a, b) { return b.from.length - a.from.length || list.indexOf(a.item) - list.indexOf(b.item); });
    }
    return { muscles: rank(mus, S.muscles), programs: rank(prog, S.programs) };
  }

  /* ── 인체 근육 맵 (인라인 SVG) ── */
  function silhouette(cx) {
    return '<g class="sil">' +
      '<circle cx="' + cx + '" cy="22" r="13"/>' +
      '<rect x="' + (cx - 6) + '" y="32" width="12" height="12" rx="3"/>' +
      '<rect x="' + (cx - 23) + '" y="41" width="46" height="72" rx="14"/>' +
      '<rect x="' + (cx - 21) + '" y="104" width="42" height="26" rx="10"/>' +
      '<rect x="' + (cx - 35) + '" y="45" width="11" height="60" rx="5.5"/>' +
      '<rect x="' + (cx + 24) + '" y="45" width="11" height="60" rx="5.5"/>' +
      '<rect x="' + (cx - 36) + '" y="102" width="10" height="46" rx="5"/>' +
      '<rect x="' + (cx + 26) + '" y="102" width="10" height="46" rx="5"/>' +
      '<rect x="' + (cx - 20) + '" y="124" width="17" height="64" rx="8"/>' +
      '<rect x="' + (cx + 3) + '" y="124" width="17" height="64" rx="8"/>' +
      '<rect x="' + (cx - 19) + '" y="184" width="14" height="58" rx="7"/>' +
      '<rect x="' + (cx + 5) + '" y="184" width="14" height="58" rx="7"/>' +
      '</g>';
  }
  // 앞면은 왼쪽, 뒷면은 오른쪽에 그리고 강조된 근육마다 바깥쪽으로 이름표를 끌어낸다
  var MAP = { F: { cx: 110, tagX: 64, side: -1 }, B: { cx: 230, tagX: 276, side: 1 } };
  function bodyMap(scoreMap, max, showCount) {
    var out = '<svg class="bodymap" viewBox="0 0 340 266" role="img" aria-label="관련 근육 위치 (앞면·뒷면)">';
    out += silhouette(MAP.F.cx) + silhouette(MAP.B.cx);
    var tags = { F: [], B: [] };
    S.muscles.forEach(function (m) {
      if (!m.rx) return; // 위치 정보 없이 추가된 근육은 목록에만
      var g = MAP[m.view] || MAP.B, cx = g.cx;
      var sc = scoreMap[m.id] || 0;
      var op = sc ? (0.45 + 0.5 * sc / (max || 1)) : 0;
      var xs = m.sym ? [cx - m.dx, cx + m.dx] : [cx];
      xs.forEach(function (x) {
        out += '<ellipse class="mus' + (sc ? ' hit' : '') + '" cx="' + x + '" cy="' + m.y + '" rx="' + m.rx + '" ry="' + m.ry + '" style="fill-opacity:' + op.toFixed(2) + '"><title>' + esc(m.name) + '</title></ellipse>';
      });
      if (sc) tags[m.view === 'F' ? 'F' : 'B'].push({ m: m, sc: sc, px: cx + g.side * (m.sym ? m.dx + m.rx * .6 : m.rx * .6), py: m.y });
    });
    ['F', 'B'].forEach(function (v) {
      var g = MAP[v], list = tags[v].sort(function (a, b) { return a.py - b.py; }), prev = -99;
      list.forEach(function (t) { t.ly = Math.max(t.py, prev + 11); prev = t.ly; });
      var over = list.length ? list[list.length - 1].ly - 244 : 0;
      if (over > 0) list.forEach(function (t) { t.ly -= over; });
      list.forEach(function (t) {
        var ex = g.tagX + (g.side < 0 ? 3 : -3);
        out += '<polyline class="lead" points="' + t.px + ',' + t.py + ' ' + (g.cx + g.side * 40) + ',' + t.ly + ' ' + ex + ',' + t.ly + '"/>' +
          '<circle class="lead-dot" cx="' + t.px + '" cy="' + t.py + '" r="1.3"/>' +
          '<text class="tag ' + (g.side < 0 ? 'end' : 'start') + '" x="' + g.tagX + '" y="' + (t.ly + 2.6) + '">' + esc(t.m.name) + (showCount && t.sc > 1 ? ' ×' + t.sc : '') + '</text>';
      });
    });
    out += '<text class="view-l" x="' + MAP.F.cx + '" y="262">앞면</text><text class="view-l" x="' + MAP.B.cx + '" y="262">뒷면</text></svg>';
    return out;
  }

  /* ── 운동 영상 미리보기 (SVG 동작) ── */
  /* 동작마다 시작(A)·끝(B) 자세를 따로 그린다. h=머리, 나머지 키=관절 폴리라인(A·B 점 개수 동일).
     prop=벽·문틀·의자·매트 같은 소품. 실제 운영에선 관리사가 촬영한 영상이 이 자리에서 재생된다. */
  var MAT = '<rect class="prop-fill" x="4" y="80" width="112" height="4" rx="2"/>';
  var POSES = {
    neckTilt: { prop: '<polyline class="prop" points="52,60 78,60 78,84"/><polyline class="prop" points="52,60 52,84"/><polyline class="prop" points="78,60 78,34"/>',
      h: [[64, 22], [57, 25]], body: ['64,30 64,58'], a1: ['64,33 71,46 76,58'], a2: ['64,33 58,46 52,56'], l1: ['64,58 48,60 48,83'], l2: ['64,58 46,62 44,83'] },
    shrug: { h: [[60, 15], [60, 15]], body: ['60,23 60,52'], a1: ['60,29 51,41 49,54', '60,24 51,36 49,49'], a2: ['60,29 69,41 71,54', '60,24 69,36 71,49'], l1: ['60,52 56,67 55,83'], l2: ['60,52 64,67 65,83'] },
    chinTuck: { prop: '<line class="prop" x1="44" y1="4" x2="44" y2="84"/>',
      h: [[56, 16], [51, 17]], body: ['50,24 50,52'], a1: ['50,28 53,40 52,52'], l1: ['50,52 51,67 51,83'], l2: ['50,52 49,67 49,83'] },
    doorway: { prop: '<polyline class="prop" points="76,84 76,6 112,6 112,84"/>',
      h: [[61, 18], [67, 20]], body: ['60,52 61,27', '62,52 66,29'], a1: ['61,28 76,28 76,15', '66,29 76,28 76,15'], a2: ['61,29 74,31 74,19', '66,30 74,31 74,19'], l1: ['60,52 58,67 56,83', '62,52 59,67 56,83'], l2: ['60,52 65,67 68,83', '62,52 68,66 72,83'] },
    wallAngel: { prop: '<rect class="prop-fill" x="30" y="2" width="60" height="82" rx="3"/>',
      h: [[60, 15], [60, 15]], body: ['60,23 60,52'], a1: ['60,28 46,31 44,19', '60,27 50,15 50,4'], a2: ['60,28 74,31 76,19', '60,27 70,15 70,4'], l1: ['60,52 56,67 55,83'], l2: ['60,52 64,67 65,83'] },
    proneYT: { prop: MAT, h: [[22, 72], [22, 70]], body: ['29,76 72,77'], a1: ['31,76 20,79 10,79', '31,75 19,67 9,60'], a2: ['33,77 23,80 13,80', '33,76 23,70 13,64'], l1: ['72,77 90,78 108,78'], l2: ['72,77 90,79 108,80'] },
    sideSleeper: { prop: MAT, h: [[20, 68], [20, 68]], body: ['27,72 66,73'], a1: ['31,75 44,75 44,62', '31,75 44,75 55,73'], a2: ['32,70 40,63 44,64', '32,70 44,66 53,70'], l1: ['66,73 80,64 94,76'], l2: ['66,74 82,67 96,78'] },
    catCow: { prop: MAT, h: [[30, 62], [30, 45]], body: ['38,52 58,43 78,54', '38,52 58,61 78,54'], a1: ['38,52 36,67 34,80'], a2: ['39,53 38,67 37,80'], l1: ['78,54 77,80 96,80'], l2: ['78,55 79,80 98,80'] },
    sideBend: { h: [[60, 15], [69, 18]], body: ['60,52 60,23', '60,52 67,27'], a1: ['60,28 52,41 50,54', '67,30 62,43 59,55'], a2: ['60,28 63,14 62,2', '67,29 77,17 86,9'], l1: ['60,52 56,67 55,83'], l2: ['60,52 64,67 65,83'] },
    lunge: { prop: MAT, h: [[55, 26], [59, 27]], body: ['54,62 54,35', '58,63 58,36'], a1: ['54,38 61,49 57,60', '58,39 65,50 61,61'], l1: ['54,62 72,63 72,80', '58,63 72,63 72,80'], l2: ['54,62 40,80 24,80', '58,63 41,80 24,80'] },
    bridge: { prop: MAT, h: [[15, 74], [15, 74]], body: ['22,77 58,77', '22,77 58,61'], a1: ['24,78 44,79'], l1: ['58,77 74,61 84,80', '58,61 74,57 84,80'], l2: ['58,78 76,63 87,80', '58,62 76,59 87,80'] },
    clam: { prop: MAT, h: [[18, 64], [18, 64]], body: ['26,69 64,72'], a1: ['28,68 20,60 16,62'], a2: ['32,66 48,62 62,68'], l1: ['64,74 84,75 96,80'], l2: ['64,72 84,72 96,79', '64,72 80,57 96,79'] },
    towelHam: { prop: MAT, h: [[14, 74], [14, 74]], body: ['21,77 60,77'], a1: ['24,76 37,67 48,63', '24,76 35,61 44,52'], l2: ['60,77 84,78 104,79'], l1: ['60,77 80,70 99,63', '60,77 72,56 81,37'], towel: ['48,63 99,62', '44,52 81,36'] },
    calfWall: { prop: '<line class="prop" x1="102" y1="4" x2="102" y2="84"/>',
      h: [[84, 22], [90, 24]], body: ['68,52 80,30', '72,52 86,31'], a1: ['80,31 92,33 101,29', '86,32 94,35 101,29'], l1: ['68,52 76,66 80,83', '72,52 84,64 80,83'], l2: ['68,52 56,67 44,83', '72,52 58,67 44,83'] }
  };
  var POSE_OF_EX = { e1: 'neckTilt', e2: 'shrug', e3: 'chinTuck', e4: 'doorway', e5: 'wallAngel', e6: 'proneYT', e7: 'sideSleeper', e8: 'catCow', e9: 'sideBend', e10: 'lunge', e11: 'bridge', e12: 'clam', e13: 'towelHam', e14: 'calfWall' };
  var POSE_OF_ANIM = { neck: 'neckTilt', arms: 'wallAngel', bend: 'catCow', squat: 'lunge', bridge: 'bridge', side: 'clam' };
  function anim(attr, a, b) { if (b == null || a === b) return ''; return '<animate attributeName="' + attr + '" values="' + a + ';' + b + ';' + a + '" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".4 0 .2 1;.4 0 .2 1"/>'; }
  // still=true: 목록 썸네일용 정지 화면(첫 프레임). 움직임은 [재생]을 눌렀을 때 플레이어에서만.
  function figure(ex, still) {
    var p = POSES[(!ex.animChanged && POSE_OF_EX[ex.id]) || POSE_OF_ANIM[ex.anim] || 'neckTilt'];
    var A = still ? function () { return ''; } : anim;
    var out = '<svg class="fig" viewBox="0 0 120 90" aria-hidden="true">' + (p.prop || '') + '<line class="ground" x1="4" y1="84" x2="116" y2="84"/>';
    ['l2', 'a2', 'body', 'l1', 'a1', 'towel'].forEach(function (k) {
      var v = p[k]; if (!v) return;
      var cls = k === 'towel' ? 'towel' : (k === 'l2' || k === 'a2') ? 'limb2' : '';
      out += '<polyline' + (cls ? ' class="' + cls + '"' : '') + ' points="' + v[0] + '">' + A('points', v[0], v[1]) + '</polyline>';
    });
    var h0 = p.h[0], h1 = p.h[1] || h0;
    out += '<circle class="head" r="6.5" cx="' + h0[0] + '" cy="' + h0[1] + '">' + A('cx', h0[0], h1[0]) + A('cy', h0[1], h1[1]) + '</circle></svg>';
    return out;
  }
  function videoBox(ex, big) {
    return '<button type="button" class="video' + (big ? ' lg' : '') + '" data-video="' + ex.id + '" aria-label="' + esc(ex.name) + ' 동작 재생">' + figure(ex, !big) +
      '<span class="vtitle">' + esc(ex.name) + '</span>' +
      '<span class="vlabel">' + I.play + ' 눌러서 동작 보기</span><span class="vdur">' + esc(ex.dur) + '</span></button>';
  }
  function durSec(d) { var p = String(d || '0:40').split(':'); return Math.max(10, (+p[0] || 0) * 60 + (+p[1] || 0)); }
  function mmss(s) { s = Math.round(s); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  var playerTimer = null;
  function openVideoModal(id) {
    var e = find(S.exercises, id); if (!e) return;
    // 고객 화면에서 연 경우: 재생이 끝나면 바로 '수행 체크'로 이어진다
    var c = S.role === 'customer' ? curCustomer() : null;
    var canCheck = c && c.assigned.indexOf(id) >= 0, t = today();
    var doneNow = function () { return canCheck && ((S.checks[c.id] || {})[t] || []).indexOf(id) >= 0; };
    var total = durSec(e.dur);
    openModal(e.name, '<div class="player">' + videoBox(e, true).replace('<button', '<div').replace('</button>', '</div>') +
      '<div class="player-bar"><button class="btn sm" id="pToggle">일시정지</button><div class="track"><i id="pBar"></i></div><span class="t" id="pTime">0:00 / ' + mmss(total) + '</span></div>' +
      (canCheck ? '<div class="player-done" id="pDone"></div>' : '') + '</div>' +
      '<div class="notice info" style="margin-top:12px">' + I.info + '<div>지금 보이는 것은 <b>동작 흐름을 보여 주는 예시 애니메이션</b>입니다. 실제 운영에서는 관리사가 촬영한 30~60초 영상을 [자료 등록·수정]에서 올리면 이 자리에서 재생됩니다.</div></div>' +
      '<div class="label" style="margin-top:14px">동작 순서 <span class="badge" style="margin-left:6px">' + esc(e.dose) + '</span></div><ol class="method" style="margin-top:8px">' + e.steps.map(function (s) { return '<li><span>' + esc(s) + '</span></li>'; }).join('') + '</ol>' +
      (e.caution ? '<div class="notice" style="margin-top:12px">' + I.warn + '<div>' + esc(e.caution) + '</div></div>' : ''),
      '<button class="btn" data-close="1">닫기</button>', function (m) {
        var svg = m.querySelector('.player svg'), bar = m.querySelector('#pBar'), tm = m.querySelector('#pTime'), tg = m.querySelector('#pToggle'), dn = m.querySelector('#pDone');
        // 시연 시간을 줄이려고 4배속으로 진행 표시(40초 영상 → 10초)
        var pos = 0, playing = true, step = 1;
        function paintDone() {
          if (!dn) return;
          var on = doneNow();
          dn.innerHTML = '<button class="done-btn' + (on ? ' on' : '') + '" style="width:100%;justify-content:center;padding:11px">' + (on ? I.checkC + ' 오늘 완료했어요' : pos >= total ? '다 따라 했어요 — 오늘 수행 체크' : '오늘 했어요') + '</button>';
          dn.firstChild.addEventListener('click', function () { var r = toggleCheck(c, id, t); toast(r ? '잘하셨어요! 기록했어요' : '체크를 취소했어요'); paintDone(); onModalClose = render; });
        }
        function tick() {
          pos = Math.min(total, pos + step);
          bar.style.width = (pos / total * 100) + '%'; tm.textContent = mmss(pos) + ' / ' + mmss(total);
          if (pos >= total) { stop(); tg.textContent = '다시 보기'; paintDone(); }
        }
        function stop() { playing = false; clearInterval(playerTimer); playerTimer = null; if (svg && svg.pauseAnimations) svg.pauseAnimations(); }
        function play() { if (pos >= total) pos = 0; playing = true; tg.textContent = '일시정지'; if (svg && svg.unpauseAnimations) svg.unpauseAnimations(); clearInterval(playerTimer); playerTimer = setInterval(function () { if (!document.body.contains(bar)) { clearInterval(playerTimer); return; } tick(); }, 250); }
        tg.addEventListener('click', function () { if (playing) { stop(); tg.textContent = '재생'; } else play(); });
        paintDone(); play();
      });
  }

  /* ── 라우터 ── */
  function parseHash() {
    var h = location.hash.replace(/^#/, '') || '/';
    var qi = h.indexOf('?'), path = qi >= 0 ? h.slice(0, qi) : h, qs = qi >= 0 ? h.slice(qi + 1) : '';
    var q = {};
    qs.split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
    return { parts: path.split('/').filter(Boolean), q: q, path: path };
  }
  function go(h) { if (location.hash === h) render(); else location.hash = h; }

  var ROUTES = [
    { re: /^$/, area: 'any', view: viewHome },
    { re: /^staff\/customers$/, area: 'staff', view: viewCustomers, nav: 'customers' },
    { re: /^staff\/customers\/new$/, area: 'staff', view: function () { return viewCustomerForm(null); }, nav: 'customers' },
    { re: /^staff\/customer\/([\w]+)$/, area: 'staff', view: function (m) { return viewCustomerDetail(m[1]); }, nav: 'customers' },
    { re: /^staff\/customer\/([\w]+)\/edit$/, area: 'staff', view: function (m) { return viewCustomerForm(m[1]); }, nav: 'customers' },
    { re: /^staff\/guide$/, area: 'staff', view: viewGuide, nav: 'guide' },
    { re: /^staff\/programs$/, area: 'staff', view: viewPrograms, nav: 'programs' },
    { re: /^staff\/program\/([\w]+)$/, area: 'staff', view: function (m) { return viewProgramPage(m[1]); }, nav: 'programs' },
    { re: /^admin\/library$/, area: 'admin', view: viewLibrary, nav: 'library' },
    { re: /^admin\/rules$/, area: 'admin', view: viewRules, nav: 'rules' },
    { re: /^admin\/accounts$/, area: 'admin', view: viewAccounts, nav: 'accounts' },
    { re: /^customer\/login$/, area: 'customer', view: viewCLogin, nav: 'login' },
    { re: /^customer\/home$/, area: 'customer', view: viewCHome, nav: 'home' },
    { re: /^customer\/history$/, area: 'customer', view: viewCHistory, nav: 'history' },
    { re: /^customer\/exercise$/, area: 'customer', view: viewCExercise, nav: 'exercise' }
  ];

  var R = { q: {} }; // 현재 라우트 정보
  function render() {
    var ph = parseHash();
    if (ph.q.role) setRole(ph.q.role);
    R = ph;
    $$('.role-tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-role') === S.role); });
    var path = ph.parts.join('/'), route = null, m = null;
    for (var i = 0; i < ROUTES.length; i++) { m = path.match(ROUTES[i].re); if (m) { route = ROUTES[i]; break; } }
    var app = $('#app');
    closeModal();
    if (!route) { app.innerHTML = staffShell('', '<div class="empty"><b>화면을 찾을 수 없어요</b><a href="#/">처음 화면으로</a></div>'); return; }

    // 역할 가드
    var area = route.area, ok = true;
    if (area === 'staff' && !(S.role === 'staff' || S.role === 'admin')) ok = false;
    if (area === 'admin' && S.role !== 'admin') ok = false;
    if (area === 'customer' && S.role !== 'customer') ok = false;
    if (!ok) {
      var need = area === 'staff' ? '관리사 또는 관리자' : ROLE_NAME[area];
      var target = area === 'staff' ? 'staff' : area;
      var body = '<div class="card" style="max-width:520px;margin:40px auto;text-align:center">' +
        '<div class="avatar lg" style="margin:0 auto 12px">' + I.shield.replace(/17/g, '26') + '</div>' +
        '<h2>' + esc(need) + ' 전용 화면입니다</h2><p class="muted" style="margin:8px 0 18px">지금은 <b>' + ROLE_NAME[S.role] + '</b>로 보고 있어요. 권한이 없는 화면은 이렇게 막힙니다.</p>' +
        '<button class="btn primary" data-switch="' + target + '">' + ROLE_NAME[target] + '로 전환해서 보기</button></div>';
      app.innerHTML = S.role === 'customer' ? '<div class="cust-shell">' + body + '</div>' : staffShell('', body);
      bindCommon(app);
      return;
    }
    var html = route.view(m);
    if (area === 'customer') app.innerHTML = custShell(route.nav, html);
    else if (area === 'any') app.innerHTML = '<main class="main" style="margin:0 auto">' + html + '</main>';
    else app.innerHTML = staffShell(route.nav, html);
    bindCommon(app);
    bindSideScroll();
    if (route.after) route.after();
    if (afterRender) { var f = afterRender; afterRender = null; f(); }
  }
  var afterRender = null;

  function staffShell(nav, body) {
    var m = me() || find(S.accounts, 'a2');
    var link = function (key, href, icon, label, extra) { return '<a href="' + href + '" class="' + (nav === key ? 'on' : '') + '">' + icon + '<span>' + label + '</span>' + (extra || '') + '</a>'; };
    var html = '<div class="shell"><div class="side-wrap"><span class="side-more left hide" aria-hidden="true">' + I.chevL + '</span><span class="side-more" aria-hidden="true">' + I.chevR + '</span><aside class="side">' +
      '<div class="side-who"><span class="xs muted">' + (S.role === 'admin' ? '관리자 화면' : '관리사 화면') + '</span><b>' + esc(m.name) + ' <span class="small muted" style="font-weight:400">' + esc(m.title) + '</span></b></div>' +
      '<nav class="nav"><div class="nav-group">관리사 업무</div>' +
      link('guide', '#/staff/guide', I.spark, '맞춤 관리 가이드', '<span class="key">핵심</span>') +
      link('customers', '#/staff/customers', I.users, '고객 관리') +
      link('programs', '#/staff/programs', I.book, '프로그램 자료');
    if (S.role === 'admin') {
      html += '<div class="nav-group">관리자 설정</div>' +
        link('library', '#/admin/library', I.edit, '자료 등록·수정') +
        link('rules', '#/admin/rules', I.link, '연결 기준 관리') +
        link('accounts', '#/admin/accounts', I.shield, '계정·권한');
    }
    html += '<div class="nav-group">안내</div>' + link('', '#/', I.info, '시연 가이드') + '</nav></aside></div><main class="main">' + body + '</main></div>';
    return html;
  }
  function custShell(nav, body) {
    if (nav === 'login') return '<div class="cust-shell no-tab">' + body + '</div>';
    var t = function (key, href, icon, label) { return '<a href="' + href + '" class="' + (nav === key ? 'on' : '') + '">' + icon + label + '</a>'; };
    return '<div class="cust-shell">' + body + '</div><nav class="tabbar">' +
      t('home', '#/customer/home', I.home, '홈') + t('history', '#/customer/history', I.list, '이용 내역') + t('exercise', '#/customer/exercise', I.run, '홈운동') + '</nav>';
  }

  /* 모바일: 가로로 밀리는 관리사 메뉴 — 현재 메뉴를 보이게 하고, 남은 방향에 페이드·화살표 */
  function bindSideScroll() {
    var side = $('.side'); if (!side) return;
    var r = $('.side-more:not(.left)'), l = $('.side-more.left');
    var on = $('.nav a.on', side);
    if (on && side.scrollWidth > side.clientWidth) side.scrollLeft = Math.max(0, on.offsetLeft - 40);
    function sync() {
      var max = side.scrollWidth - side.clientWidth;
      r.classList.toggle('hide', max <= 2 || side.scrollLeft >= max - 2);
      l.classList.toggle('hide', side.scrollLeft <= 2);
    }
    side.addEventListener('scroll', sync, { passive: true });
    sync();
  }

  /* 공통 이벤트 위임 */
  function bindCommon(root) {
    $$('[data-switch]', root).forEach(function (b) {
      b.addEventListener('click', function () { var r = b.getAttribute('data-switch'); setRole(r); go(b.getAttribute('data-go') || ROLE_HOME[r]); });
    });
    $$('tr[data-href]', root).forEach(function (tr) {
      tr.addEventListener('click', function (e) { if (e.target.closest('a,button,input,label')) return; go(tr.getAttribute('data-href')); });
    });
    $$('[data-program]', root).forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); openProgramModal(b.getAttribute('data-program')); });
    });
  }

  /* ════════════════ 첫 화면: 시연 가이드 ════════════════ */
  function viewHome() {
    var reqs = [
      ['고객 등록: 고객 등록, 상담 내용, 선호사항 기록', '#/staff/customers/new?role=staff', '고객 등록'],
      ['관리 이력: 방문 회차별 관리 내용 저장 및 조회', '#/staff/customer/c1?role=staff', '고객 상세 · 관리 이력'],
      ['관찰 항목 체크: 고객의 신체 특성 및 움직임 관찰 항목 복수 선택', '#/staff/guide?c=c1&role=staff', '맞춤 관리 가이드 ①'],
      ['후보 표시: 선택 조건에 따른 관련 근육 및 관리 프로그램 후보 표시 (사전 설정한 연결 기준 기반, AI 미적용)', '#/staff/guide?c=c1&o=o1,o7&role=staff', '맞춤 관리 가이드 ②'],
      ['프로그램 상세 조회: 프로그램별 대상 근육, 수기 관리 방법, 주의사항, 운동 자료 조회', '#/staff/program/p1?role=staff', '프로그램 상세'],
      ['최종 선택 저장: 관리사의 최종 프로그램 선택 및 고객 기록 저장', '#/staff/guide?c=c1&o=o1,o7&role=staff', '맞춤 관리 가이드 ③ 저장'],
      ['노출 범위: 관리자·관리사만 조회 (고객 화면 비노출)', '#/customer/history?role=customer', '고객 이용 내역 (내부 기록 숨김)'],
      ['프로그램 자료 관리: 근육별 관리 방법 및 운동 자료 등록·수정', '#/admin/library?role=admin', '자료 등록·수정'],
      ['연결 기준 관리: 체크 항목과 관리 프로그램 간 연결 기준 관리 (개발 후 직접 추가·수정)', '#/admin/rules?role=admin', '연결 기준 관리'],
      ['계정·권한 관리: 관리자 및 고객 계정 관리, 사용자별 접근 권한 설정 (고객 정보 보호)', '#/admin/accounts?role=admin', '계정·권한'],
      ['로그인: 고객 로그인', '#/customer/login?role=customer', '고객 로그인'],
      ['이용 현황: 본인 패키지 이용 내역 및 방문·관리 이력 확인', '#/customer/history?role=customer', '고객 이용 내역'],
      ['홈운동: 관리사가 배정한 홈운동 프로그램과 영상 확인', '#/customer/exercise?role=customer', '고객 홈운동'],
      ['수행 체크: 홈운동 수행 여부 체크', '#/customer/home?role=customer', '고객 홈 · 오늘의 운동']
    ];
    var h = '<section class="hero"><svg class="deco" width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1"><circle cx="12" cy="5" r="2.5"/><path d="M12 8v7M7 11c2 1.2 8 1.2 10 0M9 21l3-6 3 6"/></svg>' +
      '<span class="badge" style="background:rgba(255,255,255,.18);color:#fff">바디케어 고객관리 웹앱 · MVP 시안</span>' +
      '<h1 style="margin-top:12px">관찰 항목을 체크하면, 풀어야 할 근육과 관리 프로그램 후보가 바로 보입니다</h1>' +
      '<p>관리사 화면(고객 기록·맞춤 가이드), 관리자 화면(자료·연결 기준·권한), 고객 화면(이용 내역·홈운동) 세 가지를 실제로 눌러 볼 수 있게 만들었습니다. 입력한 내용은 이 브라우저에 저장되어 다른 화면에도 그대로 반영됩니다.</p>' +
      '<div class="row" style="margin-top:18px"><button class="btn lg" style="background:#fff;color:var(--primary);border-color:#fff" data-switch="staff" data-go="#/staff/guide?c=c1">핵심 기능부터 보기 ' + I.arrow + '</button></div></section>';

    h += '<div class="split" style="margin-top:16px"><div class="card"><div class="card-head"><h2>시연 가이드 — 이렇게 눌러 보세요</h2></div><div class="steps">' +
      '<div class="step"><div><b>관리사로 보기 → 맞춤 관리 가이드</b><p class="small muted">고객 ‘김지은’을 고르고 <b>고개를 옆으로 돌릴 때 불편함</b>, <b>어깨가 앞으로 말려 있음</b>을 체크해 보세요. 오른쪽에 관련 근육과 프로그램 후보가 즉시 뜹니다.</p></div></div>' +
      '<div class="step"><div><b>후보의 [상세]를 열고 [최종 선택]</b><p class="small muted">수기 방법·주의사항·운동 자료를 확인한 뒤 프로그램을 고르고, 홈운동을 배정해 <b>이번 회차로 저장</b>합니다.</p></div></div>' +
      '<div class="step"><div><b>고객 상세에서 저장된 회차 확인</b><p class="small muted">방금 저장한 기록이 관리 이력 맨 위에 붙고, 패키지 사용 횟수가 1회 늘어납니다.</p></div></div>' +
      '<div class="step"><div><b>고객으로 보기 → 홈운동 체크</b><p class="small muted">고객 화면에는 관리 이력과 새로 배정된 홈운동만 보이고, 관찰 항목·근육 같은 내부 기록은 보이지 않습니다. [오늘 했어요]를 눌러 보세요.</p></div></div>' +
      '<div class="step"><div><b>관리자로 보기 → 연결 기준 관리</b><p class="small muted">체크 항목에 프로그램을 하나 더 연결하면, 가이드 화면의 후보에 바로 반영됩니다. 개발자 없이 직접 고칠 수 있다는 뜻입니다.</p></div></div>' +
      '</div><p class="xs muted" style="margin-top:12px">상단 ‘데모 초기화’를 누르면 처음 데이터로 돌아갑니다.</p></div>';

    h += '<div class="stack"><div class="card"><div class="card-head"><h2>누구로 볼까요?</h2></div><div class="grid">' +
      roleCard('staff', '관리사로 보기', '고객 등록·관리 이력, 관찰 항목 체크 → 근육·프로그램 후보 → 최종 선택 저장', ROLE_HOME.staff) +
      roleCard('admin', '관리자로 보기', '근육·프로그램·운동 자료 등록, 체크 항목 ↔ 프로그램 연결 기준, 계정·권한', ROLE_HOME.admin) +
      roleCard('customer', '고객으로 보기 (모바일)', '내 패키지·방문 이력, 배정된 홈운동 영상, 수행 체크', ROLE_HOME.customer) +
      '</div></div>' +
      '<div class="notice info">' + I.info + '<div>관찰 항목·근육·프로그램 연결은 창업자분이 정리하실 체크리스트를 넣을 자리에 <b>예시 기준</b>을 채워 둔 것입니다. 실제 기준은 관리자 화면에서 직접 바꾸실 수 있습니다.</div></div></div></div>';

    var doneItems = [
      '관리사가 고객을 등록하고 상담 내용·선호사항을 적은 뒤, 다시 열어 그대로 볼 수 있다',
      '관찰 항목을 여러 개 체크하면 관련 근육과 프로그램 후보가 뜨고, 최종 선택이 그 고객의 회차 기록으로 저장된다',
      '관리자가 체크 항목·연결 기준·프로그램 자료를 개발자 없이 추가·수정하고, 결과가 가이드 후보에 바로 반영된다',
      '고객이 스마트폰으로 로그인해 패키지·방문 이력과 배정된 홈운동 영상을 보고 수행 체크를 할 수 있다',
      '고객 화면에는 내부 관찰 기록이 보이지 않고, 관리사별 권한(담당 고객만·상담 비공개)이 실제로 적용된다',
      '실제 주소로 배포되어 PC·스마트폰에서 열리고, 운영 매뉴얼만 보고 창업자분이 직접 쓸 수 있다',
      '11월 23일 시연 전에 테스트 고객 데이터로 처음부터 끝까지 리허설을 마친다'
    ];
    h += '<div class="card" style="margin-top:16px"><div class="card-head"><h2>제안 포함 필수 사항 · 사전 질문에 대한 답</h2><span class="badge">비개발자용 요약</span></div><div class="ans-grid">' +
      '<div class="ans wide"><h3><span class="qn">필수 2</span>무엇이 되면 이 시제품이 ‘완료’인가 — 완료 기준 체크리스트</h3>' +
      '<p class="small" style="color:var(--ink-2);margin-bottom:10px">아래 7가지를 발주처가 직접 눌러 보고 확인하면 완료로 봅니다. 납품 때 이 목록으로 함께 점검합니다.</p>' +
      '<ul class="done-list">' + doneItems.map(function (t) { return '<li>' + I.checkC + '<span>' + esc(t) + '</span></li>'; }).join('') + '</ul></div>' +
      '<div class="ans"><h3><span class="qn">질문 1</span>핵심 기능을 만들 수 있나요?</h3>' +
      '<p class="small" style="color:var(--ink-2)"><b>네, 이 화면이 그 기능입니다.</b> 관찰 항목을 복수 선택 → 등록된 기준에 따라 관련 근육·수기 관리 방법·운동 프로그램 표시 → 관리사가 최종 선택해 고객 기록에 저장까지, 지금 바로 눌러 보실 수 있습니다.</p>' +
      '<div class="row" style="margin-top:10px"><a class="btn sm primary" href="#/staff/guide?c=c1&o=o1,o2,o7&role=staff">맞춤 관리 가이드 열기 ' + I.arrow + '</a></div></div>' +
      '<div class="ans"><h3><span class="qn">필수 1</span>기술 스택과 선택 이유</h3><ul>' +
      '<li><b>화면</b>: PC·태블릿·스마트폰에서 같은 주소로 열리는 반응형 웹 (앱 설치 없음). 지금 보시는 시안이 그대로 실제 화면의 뼈대가 됩니다.</li>' +
      '<li><b>데이터·로그인</b>: 관리형 클라우드 데이터베이스(PostgreSQL)와 내장 로그인 기능. 서버를 직접 관리하지 않아도 되고, 백업이 자동입니다.</li>' +
      '<li><b>왜 이 조합인가</b>: 노코드 툴보다 기능 제약이 적고, 소스코드가 발주사 소유로 남아 나중에 다른 개발자에게 넘기기 쉽습니다.</li></ul></div>' +
      '<div class="ans"><h3><span class="qn">필수 3</span><span class="qn alt">질문 2</span>예산 안에서 되는 범위 · 기간 · 추가 비용</h3>' +
      '<table class="scope-tbl"><tbody>' +
      '<tr><td><span class="badge ok">예산 안</span></td><td>이 시안에 보이는 기능 전체 — 고객 정보·관리 이력(2-1), 맞춤 관리 프로그램 제안(2-2), 관리자 화면(2-3), 고객 모바일 화면(2-4)을 우선순위 순서로 맞춥니다.</td></tr>' +
      '<tr><td><span class="badge primary">기간</span></td><td>계약 후 약 2주 개발 + 1주 시연 준비·수정(총 3주). 11월 23일 제출 일정 이전 완료를 목표로 주 단위로 화면을 공유합니다.</td></tr>' +
      '<tr><td><span class="badge warn">추가 비용</span></td><td>이번 범위 밖인 앱스토어 앱, AI 추천, 다지점 운영, 예약·결제 연동은 필요해지면 기능별로 따로 견적을 드립니다. 범위 안 기능에는 추가 비용을 받지 않습니다.</td></tr>' +
      '</tbody></table><p class="xs muted" style="margin-top:8px">정확한 금액은 기능별 항목으로 나눈 견적서로 드립니다.</p></div>' +
      '<div class="ans"><h3><span class="qn">필수 4</span>월 서버비 · 유지관리 · 데이터 이전</h3><ul>' +
      '<li><b>시제품·테스트 단계</b> (계정 1~3개, 고객 10~20명): 클라우드 무료 구간 안에서 운영 가능한 규모로 설계합니다.</li>' +
      '<li><b>정식 운영 전환 시</b>: 데이터베이스 유료 플랜 기준 월 3~5만 원 수준을 예상합니다 (사용량에 따라 변동).</li>' +
      '<li><b>데이터 이전</b>: 표준 데이터베이스라 고객·이력 전체를 엑셀(CSV)로 내보낼 수 있습니다.</li></ul></div>' +
      '<div class="ans"><h3><span class="qn">필수 5</span>견적서 · 계약서 · 세금계산서</h3><ul>' +
      '<li><b>견적서</b>: 기능별 항목과 금액을 나눈 견적서를 드립니다. 정부지원금 집행 서류로 쓰실 수 있게 항목을 정리합니다.</li>' +
      '<li><b>계약서</b>: 위시켓 계약 절차로 체결하고, 과업 범위(위 완료 기준)를 계약서에 그대로 적습니다.</li>' +
      '<li><b>세금계산서</b>: 지원사업에서 요구하는 발급 주체·방식을 미팅에서 확인하고 그 기준에 맞춰 처리합니다.</li></ul></div>' +
      '<div class="ans"><h3><span class="qn">질문 3-①</span>개발 후 직접 기준을 고칠 수 있나요?</h3><ul>' +
      '<li>네. 체크 항목 추가, 항목 ↔ 근육·프로그램 연결, 수기 방법·운동 자료 수정을 <b>관리자 화면에서 직접</b> 합니다. 개발자를 거치지 않습니다.</li>' +
      '<li>저장하는 즉시 관리사 가이드 화면의 후보에 반영됩니다.</li></ul>' +
      '<div class="row" style="margin-top:10px"><a class="btn sm" href="#/admin/rules?o=o7&role=admin">연결 기준 관리 열기 ' + I.arrow + '</a><a class="btn sm ghost" href="#/admin/library?role=admin">자료 등록·수정</a></div></div>' +
      '<div class="ans wide"><h3><span class="qn">질문 3-②</span>향후 AI 연동이 가능한 구조인가요?</h3>' +
      '<p class="small" style="color:var(--ink-2)">네. 후보를 계산하는 부분을 화면과 분리해 두어, 그 칸만 바꿔 끼우면 됩니다.</p>' +
      '<div class="flow"><div><b>관찰 항목</b>관리사가 체크</div><span>' + I.arrow + '</span><div class="swap"><b>후보 계산</b>지금: 연결 기준표<br>나중에: AI 추천 추가</div><span>' + I.arrow + '</span><div><b>후보 목록</b>관리사가 최종 선택</div></div>' +
      '<ul><li>AI는 창업자분이 쌓은 전문자료(프로그램·근육 자료)와 저장된 관리 이력을 참고하도록 연결할 수 있습니다.</li>' +
      '<li>AI가 붙어도 <b>최종 선택은 관리사</b>가 하는 흐름은 그대로입니다. 이번 범위에는 AI가 포함되지 않습니다.</li>' +
      '<li><b>다지점 확장</b>: 고객·계정·기록에 ‘지점’ 구분을 넣을 수 있게 설계해, 지점별로 나눠 보기가 가능하도록 합니다.</li></ul></div>' +
      '</div></div>';

    h += '<div class="card" style="margin-top:16px"><div class="card-head"><h2>요구사항 ↔ 화면 대응표</h2><span class="badge primary">발주 문구 그대로</span></div>' +
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>발주서 요구사항</th><th>확인할 화면</th><th></th></tr></thead><tbody>' +
      reqs.map(function (r) { return '<tr><td class="first" data-label="요구사항" style="font-weight:500">' + esc(r[0]) + '</td><td data-label="화면">' + esc(r[2]) + '</td><td data-label=""><a class="btn sm" href="' + r[1] + '">열기 ' + I.arrow + '</a></td></tr>'; }).join('') +
      '</tbody></table></div></div>';
    return h;
  }
  function roleCard(role, title, desc, href) {
    return '<button class="role-card" data-switch="' + role + '" data-go="' + href + '"><div class="row"><b>' + title + '</b><span class="spacer"></span>' + I.arrow + '</div><span class="small muted">' + desc + '</span></button>';
  }

  /* ════════════════ 관리사: 고객 목록 ════════════════ */
  function viewCustomers() {
    var list = visibleCustomers();
    var qtxt = R.q.s || '', st = R.q.st || '';
    var filtered = list.filter(function (c) { return (!qtxt || c.name.indexOf(qtxt) >= 0 || (c.consult.main || '').indexOf(qtxt) >= 0) && (!st || c.status === st); });
    var counts = { all: list.length, use: list.filter(function (c) { return c.status === '이용중'; }).length, trial: list.filter(function (c) { return c.status === '체험중'; }).length, exp: list.filter(function (c) { return c.status === '만료 임박'; }).length };
    var weekVisits = S.visits.filter(function (v) { return daysAgo(v.date) <= 6 && list.some(function (c) { return c.id === v.cust; }); }).length;
    var h = '<div class="page-head"><div class="grow"><h1>고객 관리</h1><p class="muted">고객 등록, 상담 내용, 선호사항, 방문 회차별 관리 이력을 한곳에서 봅니다.</p></div>' +
      (can('editCustomers') ? '<a class="btn primary" href="#/staff/customers/new">' + I.plus + ' 고객 등록</a>' : '<button class="btn" disabled title="권한 없음">' + I.lock + ' 고객 등록 (권한 없음)</button>') + '</div>';
    if (!can('allCustomers')) h += '<div class="notice lock" style="margin-bottom:16px">' + I.lock + '<div>현재 계정은 <b>담당 고객만 보기</b> 권한입니다. 관리자가 계정·권한에서 바꿀 수 있습니다.</div></div>';
    h += '<div class="grid g4" style="margin-bottom:16px">' +
      stat(counts.all, '전체 고객') + stat(counts.use, '이용중') + stat(counts.trial + counts.exp, '체험·만료 임박') + stat(weekVisits, '최근 7일 방문') + '</div>';
    h += '<div class="row" style="margin-bottom:12px"><div style="position:relative;flex:1;min-width:200px"><input type="search" id="cSearch" placeholder="이름 또는 주요 불편으로 검색" value="' + esc(qtxt) + '" style="padding-left:36px"><span style="position:absolute;left:12px;top:11px;color:var(--muted)">' + I.search + '</span></div>' +
      '<div class="chips">' + ['', '이용중', '체험중', '만료 임박', '휴면'].map(function (s) { return '<button class="chip' + (st === s ? ' on' : '') + '" data-st="' + s + '">' + (s || '전체') + '</button>'; }).join('') + '</div></div>';
    if (!filtered.length) {
      h += '<div class="empty">' + I.users.replace(/17/g, '28') + '<b>조건에 맞는 고객이 없어요</b>검색어나 상태 필터를 바꿔 보세요.</div>';
    } else {
      // 모바일: 이름·상태·주요 불편·패키지 진행만 남긴 요약 카드
      h += '<div class="c-cards">' + filtered.map(function (c) {
        var u = usage(c), lv = lastVisit(c);
        return '<a class="c-card" href="#/staff/customer/' + c.id + '"><div class="top"><b>' + esc(c.name) + '</b><span class="xs muted">' + c.gender + ' · ' + age(c.birth) + '세</span><span class="spacer"></span>' + statusBadge(c.status) + '</div>' +
          '<div class="main">' + (can('viewConsult') ? esc(c.consult.main) : I.lock + ' 상담 내용 열람 권한 없음') + '</div>' +
          '<div class="pk"><div class="progress" style="flex:1"><i style="width:' + u.pct + '%"></i></div><b style="color:var(--ink)">' + u.used + '/' + u.total + '회</b><span>· ' + (lv ? relDay(lv.date) : '방문 전') + '</span></div></a>';
      }).join('') + '</div>';
      h += '<div class="table-wrap c-table"><table class="tbl"><thead><tr><th>이름</th><th>성별·나이</th><th>주요 불편</th><th>패키지 사용</th><th>최근 방문</th><th>담당</th><th>상태</th></tr></thead><tbody>' +
        filtered.map(function (c) {
          var u = usage(c), lv = lastVisit(c);
          return '<tr class="link" data-href="#/staff/customer/' + c.id + '"><td class="first" data-label="이름"><a href="#/staff/customer/' + c.id + '">' + esc(c.name) + '</a></td>' +
            '<td data-label="성별·나이">' + c.gender + ' · ' + age(c.birth) + '세</td>' +
            '<td data-label="주요 불편" class="small" style="max-width:260px">' + (can('viewConsult') ? esc(c.consult.main) : '<span class="badge lock">' + I.lock + ' 열람 권한 없음</span>') + '</td>' +
            '<td data-label="패키지 사용"><div class="row" style="flex-wrap:nowrap;justify-content:flex-end"><div class="progress" style="width:80px"><i style="width:' + u.pct + '%"></i></div><span class="small">' + u.used + '/' + u.total + '</span></div></td>' +
            '<td data-label="최근 방문" class="small">' + (lv ? relDay(lv.date) : '-') + '</td>' +
            '<td data-label="담당" class="small">' + esc(staffName(c.staff)) + '</td>' +
            '<td data-label="상태">' + statusBadge(c.status) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }
    afterRender = function () {
      var inp = $('#cSearch');
      inp.addEventListener('change', function () { go('#/staff/customers?s=' + encodeURIComponent(inp.value) + (st ? '&st=' + encodeURIComponent(st) : '')); });
      inp.addEventListener('keyup', function (e) { if (e.key === 'Enter') inp.dispatchEvent(new Event('change')); });
      $$('[data-st]').forEach(function (b) { b.addEventListener('click', function () { var s = b.getAttribute('data-st'); go('#/staff/customers' + (s || qtxt ? '?' : '') + (qtxt ? 's=' + encodeURIComponent(qtxt) : '') + (s ? (qtxt ? '&' : '') + 'st=' + encodeURIComponent(s) : '')); }); });
    };
    return h;
  }
  function stat(n, l) { return '<div class="stat"><div class="n">' + n + '</div><div class="l">' + l + '</div></div>'; }

  /* ════════════════ 관리사: 고객 등록·수정 ════════════════ */
  function viewCustomerForm(id) {
    var c = id ? find(S.customers, id) : null;
    if (id && !c) return '<div class="empty"><b>고객을 찾을 수 없어요</b></div>';
    if (!can('editCustomers')) return '<div class="notice lock">' + I.lock + '<div>현재 계정은 고객 등록·수정 권한이 없습니다. 관리자에게 권한을 요청하세요.</div></div>';
    var v = c || { name: '', gender: '여', birth: 1990, job: '', staff: me().role === 'staff' ? me().id : 'a2', pkg: 'k3', loginId: '', status: '이용중', consult: { main: '', life: '', exp: '' }, pref: { pressure: '보통', time: '', avoid: '', note: '' } };
    var staffOpts = S.accounts.filter(function (a) { return a.active; }).map(function (a) { return '<option value="' + a.id + '"' + (v.staff === a.id ? ' selected' : '') + '>' + esc(a.name) + ' (' + esc(a.title) + ')</option>'; }).join('');
    var pkgOpts = S.packages.map(function (p) { return '<option value="' + p.id + '"' + (v.pkg === p.id ? ' selected' : '') + '>' + esc(p.name) + '</option>'; }).join('');
    var radio = function (name, opts, cur) { return '<div class="radio-row">' + opts.map(function (o) { return '<label><input type="radio" name="' + name + '" value="' + o + '"' + (cur === o ? ' checked' : '') + '>' + o + '</label>'; }).join('') + '</div>'; };
    var h = '<div class="page-head"><div class="grow"><div class="crumb"><a href="#/staff/customers">고객 관리</a> › ' + (c ? esc(c.name) + ' 정보 수정' : '신규 등록') + '</div><h1>' + (c ? '고객 정보 수정' : '고객 등록') + '</h1><p class="muted">첫 상담에서 들은 내용과 선호사항을 적어 두면, 관리 때마다 다시 묻지 않아도 됩니다.</p></div></div>';
    h += '<form id="cForm" class="card" novalidate>' +
      '<div class="form-section-title">기본 정보</div><div class="form-grid">' +
      fld('name', '이름', '<input type="text" name="name" value="' + esc(v.name) + '" placeholder="예: 김하늘" maxlength="20">', true) +
      fld('gender', '성별', radio('gender', ['여', '남'], v.gender)) +
      fld('birth', '출생연도', '<input type="number" name="birth" value="' + esc(v.birth) + '" min="1930" max="2015">') +
      fld('job', '직업·생활 패턴', '<input type="text" name="job" value="' + esc(v.job) + '" placeholder="예: 사무직, 하루 8시간 앉아서 근무">') +
      fld('staff', '담당 관리사', '<select name="staff">' + staffOpts + '</select>') +
      fld('pkg', '이용 패키지', '<select name="pkg">' + pkgOpts + '</select>') +
      fld('loginId', '고객 로그인 아이디', '<input type="text" name="loginId" value="' + esc(v.loginId) + '" placeholder="영문·숫자 4자 이상">', true, '고객이 모바일에서 본인 기록을 볼 때 씁니다. 첫 비밀번호는 0000으로 안내됩니다.') +
      fld('status', '상태', '<select name="status">' + ['이용중', '체험중', '만료 임박', '휴면'].map(function (s) { return '<option' + (v.status === s ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select>') +
      '</div><div class="form-section-title">상담 내용 ' + '<span class="badge lock">' + I.lock + ' 관리자·관리사만</span></div><div class="form-grid">' +
      fld('main', '주요 불편 (고객이 한 말 그대로)', '<textarea name="main" placeholder="예: 오후가 되면 어깨가 뻐근하고 고개를 돌릴 때 걸려요">' + esc(v.consult.main) + '</textarea>', true, '', 'full') +
      fld('life', '생활 습관', '<textarea name="life" placeholder="근무 형태, 수면, 자주 하는 자세">' + esc(v.consult.life) + '</textarea>') +
      fld('exp', '운동 경험', '<textarea name="exp" placeholder="해 본 운동, 현재 하는 운동">' + esc(v.consult.exp) + '</textarea>') +
      '</div><div class="form-section-title">선호사항</div><div class="form-grid">' +
      fld('pressure', '선호 압 강도', radio('pressure', ['약하게', '보통', '강하게'], v.pref.pressure)) +
      fld('time', '선호 방문 시간', '<input type="text" name="time" value="' + esc(v.pref.time) + '" placeholder="예: 평일 저녁 7시 이후">') +
      fld('avoid', '피하고 싶은 부위', '<input type="text" name="avoid" value="' + esc(v.pref.avoid) + '" placeholder="예: 복부, 없음">') +
      fld('note', '기타 요청', '<input type="text" name="note" value="' + esc(v.pref.note) + '" placeholder="예: 향이 강한 오일은 피하고 싶음">') +
      '</div><hr class="divider"><div class="row" style="justify-content:flex-end"><a class="btn ghost" href="' + (c ? '#/staff/customer/' + c.id : '#/staff/customers') + '">취소</a><button class="btn primary lg" type="submit">' + (c ? '수정 저장' : '고객 등록') + '</button></div></form>';
    afterRender = function () {
      $('#cForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var f = e.target, val = function (n) { var el = f.elements[n]; return el ? (el.value || '').trim() : ''; };
        $$('.field.err', f).forEach(function (x) { x.classList.remove('err'); var em = x.querySelector('.errmsg'); if (em) em.remove(); });
        var errs = {};
        if (!val('name')) errs.name = '이름을 입력해 주세요.';
        var lid = val('loginId');
        if (!/^[A-Za-z0-9]{4,}$/.test(lid)) errs.loginId = '영문·숫자 4자 이상으로 입력해 주세요.';
        else if (S.customers.some(function (x) { return x.loginId === lid && (!c || x.id !== c.id); })) errs.loginId = '이미 쓰고 있는 아이디예요.';
        if (!val('main')) errs.main = '주요 불편을 한 줄이라도 적어 주세요.';
        var keys = Object.keys(errs);
        if (keys.length) {
          keys.forEach(function (k) { var fe = f.querySelector('[data-f="' + k + '"]'); fe.classList.add('err'); fe.insertAdjacentHTML('beforeend', '<span class="errmsg">' + errs[k] + '</span>'); });
          f.querySelector('[data-f="' + keys[0] + '"] input, [data-f="' + keys[0] + '"] textarea').focus();
          return;
        }
        var data = {
          name: val('name'), gender: f.querySelector('[name=gender]:checked').value, birth: +val('birth') || 1990, job: val('job'), staff: val('staff'), pkg: val('pkg'), loginId: lid, status: val('status'),
          consult: { main: val('main'), life: val('life'), exp: val('exp') },
          pref: { pressure: f.querySelector('[name=pressure]:checked').value, time: val('time'), avoid: val('avoid'), note: val('note') }
        };
        if (c) { Object.assign(c, data); save(); toast(c.name + ' 님 정보를 저장했어요'); go('#/staff/customer/' + c.id); }
        else {
          var nc = Object.assign({ id: uid('c'), pkgStart: today(), loginOn: true, joined: today(), assigned: [] }, data);
          S.customers.unshift(nc); save(); toast(nc.name + ' 님을 등록했어요'); go('#/staff/customer/' + nc.id);
        }
      });
    };
    return h;
  }
  function fld(key, label, input, req, hint, cls) {
    return '<div class="field ' + (cls || '') + '" data-f="' + key + '"><label>' + label + (req ? ' <span style="color:var(--danger)">*</span>' : '') + '</label>' + input + (hint ? '<span class="hint">' + hint + '</span>' : '') + '</div>';
  }

  /* ════════════════ 관리사: 고객 상세 ════════════════ */
  function viewCustomerDetail(id) {
    var c = find(S.customers, id);
    if (!c || visibleCustomers().indexOf(c) < 0) return '<div class="empty"><b>고객을 찾을 수 없거나 열람 권한이 없어요</b><a href="#/staff/customers">고객 목록으로</a></div>';
    var u = usage(c), visits = custVisits(c.id).slice().reverse(), canC = can('viewConsult');
    var h = '<div class="page-head"><div class="grow"><div class="crumb"><a href="#/staff/customers">고객 관리</a> › ' + esc(c.name) + '</div>' +
      '<div class="row"><div class="avatar lg">' + esc(c.name.charAt(0)) + '</div><div><h1>' + esc(c.name) + ' <span class="small muted" style="font-weight:400">' + c.gender + ' · ' + age(c.birth) + '세</span></h1><div class="row" style="margin-top:4px">' + statusBadge(c.status) + '<span class="small muted">담당 ' + esc(staffName(c.staff)) + ' · 등록 ' + fmtDate(c.joined) + '</span></div></div></div></div>' +
      '<div class="row">' + (can('editCustomers') ? '<a class="btn" href="#/staff/customer/' + c.id + '/edit">' + I.edit + ' 정보 수정</a>' : '') + '<a class="btn primary" href="#/staff/guide?c=' + c.id + '">' + I.spark + ' 이번 회차 기록하기</a></div></div>';

    h += '<div class="split"><div class="stack">';
    // 패키지
    h += '<div class="card"><div class="card-head"><h3>패키지 이용</h3><span class="badge">' + esc(pkgOf(c).name) + '</span></div>' +
      '<div class="row" style="flex-wrap:nowrap;gap:14px"><div class="progress" style="flex:1;height:12px"><i style="width:' + u.pct + '%"></i></div><b>' + u.used + ' / ' + u.total + '회</b></div>' +
      '<p class="small muted" style="margin-top:8px">남은 회차 ' + u.left + '회 · 시작일 ' + fmtDate(c.pkgStart) + (u.left <= 1 ? ' · <span style="color:var(--warn);font-weight:600">재등록 상담 시점</span>' : '') + '</p></div>';
    // 상담
    h += '<div class="card"><div class="card-head"><h3>상담 내용 · 선호사항</h3><span class="badge lock">' + I.lock + ' 내부 전용</span></div>';
    if (!canC) h += '<div class="notice lock" style="margin-bottom:12px">' + I.lock + '<div>이 계정은 상담 내용 열람 권한이 없어 가려져 있습니다.</div></div>';
    h += '<dl class="kv' + (canC ? '' : ' masked') + '"><dt>직업·생활</dt><dd>' + esc(canC ? c.job : '열람 권한이 없습니다') + '</dd>' +
      '<dt>주요 불편</dt><dd>' + esc(canC ? c.consult.main : '열람 권한이 없습니다') + '</dd>' +
      '<dt>생활 습관</dt><dd>' + esc(canC ? (c.consult.life || '-') : '열람 권한이 없습니다') + '</dd>' +
      '<dt>운동 경험</dt><dd>' + esc(canC ? (c.consult.exp || '-') : '열람 권한이 없습니다') + '</dd></dl><hr class="divider">' +
      '<dl class="kv' + (canC ? '' : ' masked') + '"><dt>압 강도</dt><dd>' + esc(canC ? c.pref.pressure : '-') + '</dd><dt>선호 시간</dt><dd>' + esc(canC ? (c.pref.time || '-') : '-') + '</dd><dt>피할 부위</dt><dd>' + esc(canC ? (c.pref.avoid || '-') : '-') + '</dd><dt>기타 요청</dt><dd>' + esc(canC ? (c.pref.note || '-') : '-') + '</dd></dl></div>';
    // 홈운동
    h += '<div class="card"><div class="card-head"><h3>배정된 홈운동 · 최근 7일 수행</h3></div>' + assignedSummary(c) + '</div>';
    h += '</div>';
    // 이력
    h += '<div class="card"><div class="card-head"><h3>관리 이력</h3><span class="badge">' + visits.length + '회</span></div>';
    if (!visits.length) h += '<div class="empty"><b>아직 관리 기록이 없어요</b>‘이번 회차 기록하기’로 첫 회차를 남겨 보세요.<div style="margin-top:12px"><a class="btn primary sm" href="#/staff/guide?c=' + c.id + '">이번 회차 기록하기</a></div></div>';
    else h += '<div class="timeline">' + visits.map(function (v, i) { return visitItem(v, visits.length - i, R.q.new === v.id); }).join('') + '</div>';
    h += '</div></div>';
    return h;
  }
  function visitItem(v, no, isNew) {
    var obs = v.obs.map(function (o) { var x = find(S.observations, o); return x ? '<span class="chip static" style="font-size:12px;padding:3px 9px">' + esc(x.label) + '</span>' : ''; }).join('');
    var progs = v.programs.map(function (p) { var x = find(S.programs, p); return x ? '<a href="#" data-program="' + p + '" class="badge accent">' + esc(x.name) + '</a>' : ''; }).join(' ');
    return '<div class="tl-item' + (isNew ? ' new' : '') + '"><div class="tl-box"' + (isNew ? ' style="border-color:var(--accent)"' : '') + '><div class="meta"><b>' + no + '회차</b><span class="small muted">' + fmtDate(v.date) + ' (' + dow(v.date) + ') · ' + esc(staffName(v.staff)) + '</span>' + (isNew ? '<span class="badge accent">방금 저장</span>' : '') + '</div>' +
      (obs ? '<div class="xs muted" style="margin-bottom:4px">관찰 항목</div><div class="chips" style="margin-bottom:8px">' + obs + '</div>' : '') +
      '<div class="xs muted" style="margin-bottom:4px">진행한 프로그램</div><div class="row" style="margin-bottom:8px">' + (progs || '-') + '</div>' +
      (v.internal ? '<p class="small"><span class="badge lock" style="margin-right:6px">' + I.lock + ' 내부</span>' + esc(v.internal) + '</p>' : '') +
      (v.memo ? '<p class="small" style="margin-top:6px"><span class="badge ok" style="margin-right:6px">' + I.eye + ' 고객에게 보임</span>' + esc(v.memo) + '</p>' : '') +
      '</div></div>';
  }
  function assignedSummary(c) {
    if (!c.assigned.length) return '<div class="empty" style="padding:20px"><b>배정된 홈운동이 없어요</b>맞춤 가이드에서 프로그램을 고르면 함께 배정할 수 있어요.</div>';
    var days = []; for (var n = 6; n >= 0; n--) days.push(window.agoYmd(n));
    var ck = S.checks[c.id] || {};
    var h = '<div class="table-wrap"><table class="tbl"><thead><tr><th>운동</th>' + days.map(function (d) { return '<th style="text-align:center">' + dow(d) + '</th>'; }).join('') + '</tr></thead><tbody>';
    c.assigned.forEach(function (eid) {
      var e = find(S.exercises, eid); if (!e) return;
      h += '<tr><td class="first" data-label="">' + esc(e.name) + '<div class="xs muted" style="font-weight:400">' + esc(e.dose) + '</div></td>' + days.map(function (d) {
        var done = (ck[d] || []).indexOf(eid) >= 0;
        return '<td data-label="' + fmtShort(d) + '(' + dow(d) + ')" style="text-align:center">' + (done ? '<span style="color:var(--ok)">' + I.checkC + '</span>' : '<span class="muted">·</span>') + '</td>';
      }).join('') + '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* ════════════════ 관리사: 맞춤 관리 가이드 (핵심) ════════════════ */
  var G = null; // 가이드 작업 상태
  function viewGuide() {
    var list = visibleCustomers();
    var cid = R.q.c || (G && G.cust) || '';
    if (cid && !find(list, cid)) cid = '';
    if (!G || G.cust !== cid || R.q.o) {
      G = { cust: cid, obs: R.q.o ? R.q.o.split(',').filter(function (o) { return find(S.observations, o); }) : [], final: [], ex: null, internal: '', memo: '', pre: false };
      // 관찰 항목을 담은 링크로 들어오면 우선 후보 1개를 미리 담아 둔다 — 바로 저장까지 이어지게
      if (cid && G.obs.length) { var top0 = computeGuide(G.obs).programs[0]; if (top0) { G.final = [top0.item.id]; G.pre = true; } }
    }
    var c = cid ? find(S.customers, cid) : null;
    var h = '<div class="page-head"><div class="grow"><h1>맞춤 관리 가이드</h1><p class="muted">관찰한 항목을 체크하면, 미리 정해 둔 연결 기준에 따라 관련 근육과 관리 프로그램 후보가 표시됩니다. 최종 선택은 관리사가 합니다.</p></div>' +
      '<span class="badge lock">' + I.lock + ' 관리자·관리사 전용 · 고객 화면에 표시되지 않음</span></div>';
    h += '<div class="guide-layout"><div class="stack">';
    // 고객 선택
    h += '<div class="card"><div class="card-head"><h3>1. 고객 선택</h3></div><select id="gCust"><option value="">고객을 선택하세요</option>' +
      list.map(function (x) { return '<option value="' + x.id + '"' + (x.id === cid ? ' selected' : '') + '>' + esc(x.name) + ' · ' + x.gender + ' ' + age(x.birth) + '세 · ' + esc(x.status) + '</option>'; }).join('') + '</select>';
    if (c) {
      var u = usage(c), lv = lastVisit(c);
      h += '<div class="notice info" style="margin-top:12px">' + I.info + '<div><b>' + esc(c.name) + '</b> · 이번이 <b>' + (u.used + 1) + '회차</b> (' + esc(pkgOf(c).name) + ', 남은 ' + u.left + '회)' +
        (can('viewConsult') ? '<br><span class="small">주요 불편: ' + esc(c.consult.main) + ' · 압 ' + esc(c.pref.pressure) + (c.pref.avoid && c.pref.avoid !== '없음' ? ' · 피할 부위 ' + esc(c.pref.avoid) : '') + '</span>' : '') +
        (lv ? '<br><span class="small">지난 회차(' + relDay(lv.date) + '): ' + lv.programs.map(function (p) { var x = find(S.programs, p); return x ? esc(x.name) : ''; }).join(', ') + '</span>' : '') + '</div></div>';
    }
    h += '</div>';
    // 관찰 항목
    var cats = [];
    S.observations.forEach(function (o) { if (cats.indexOf(o.cat) < 0) cats.push(o.cat); });
    h += '<div class="card"><div class="card-head"><h3>2. 관찰 항목 체크</h3><span class="badge primary" id="gCnt">' + G.obs.length + '개 선택</span><button class="btn ghost sm" id="gClear">선택 해제</button></div>' +
      cats.map(function (cat) {
        return '<div class="check-cat">' + esc(cat) + '</div><div class="check-list">' + S.observations.filter(function (o) { return o.cat === cat; }).map(function (o) {
          var on = G.obs.indexOf(o.id) >= 0;
          return '<label class="check' + (on ? ' on' : '') + '" data-obs="' + o.id + '"><input type="checkbox"' + (on ? ' checked' : '') + '><span class="box">' + I.check + '</span><span>' + esc(o.label) + '</span></label>';
        }).join('') + '</div>';
      }).join('') + '</div>';
    h += '</div><div class="guide-right" id="gRight"></div></div>';
    h += '<div id="gSave"></div>';
    afterRender = function () {
      $('#gCust').addEventListener('change', function (e) { G.cust = e.target.value; G.final = []; G.ex = null; history.replaceState(null, '', '#/staff/guide' + (G.cust ? '?c=' + G.cust : '')); var keep = G.obs.slice(); render(); G.obs = keep; renderGuideSide(); syncChecks(); });
      $$('[data-obs]').forEach(function (l) {
        l.addEventListener('click', function (e) {
          e.preventDefault();
          var id = l.getAttribute('data-obs'), i = G.obs.indexOf(id);
          if (i >= 0) G.obs.splice(i, 1); else G.obs.push(id);
          syncChecks(); renderGuideSide();
        });
      });
      $('#gClear').addEventListener('click', function () { G.obs = []; G.final = []; G.ex = null; syncChecks(); renderGuideSide(); });
      renderGuideSide();
    };
    return h;
  }
  function syncChecks() {
    $$('[data-obs]').forEach(function (l) { var on = G.obs.indexOf(l.getAttribute('data-obs')) >= 0; l.classList.toggle('on', on); l.querySelector('input').checked = on; });
    var cnt = $('#gCnt'); if (cnt) cnt.textContent = G.obs.length + '개 선택';
  }
  function renderGuideSide() {
    var box = $('#gRight'); if (!box) return;
    var r = computeGuide(G.obs);
    // 선택 해제된 후보는 최종 선택에서도 제외
    G.final = G.final.filter(function (p) { return r.programs.some(function (x) { return x.item.id === p; }); });
    if (!G.obs.length) {
      box.innerHTML = '<div class="card"><div class="card-head"><h3>3. 관련 근육 · 프로그램 후보</h3></div>' + bodyMap({}, 1) +
        '<div class="empty" style="margin-top:12px">' + I.spark.replace(/17/g, '26') + '<b>왼쪽에서 관찰 항목을 체크해 보세요</b>여러 개를 고를수록 겹치는 근육과 프로그램이 위로 올라옵니다.</div></div>';
      renderSaveBar(); return;
    }
    var max = r.muscles.length ? r.muscles[0].from.length : 1, score = {};
    r.muscles.forEach(function (m) { score[m.item.id] = m.from.length; });
    var h = '<div class="card"><div class="card-head"><h3>3. 관련 근육</h3><span class="badge accent">' + r.muscles.length + '개</span><span class="small muted">선택 항목 ' + G.obs.length + '개 기준</span></div>' +
      bodyMap(score, max, true) +
      '<div class="map-legend"><span><i style="opacity:.5"></i>항목 1개와 관련</span><span><i></i>여러 항목이 겹침 (진할수록 많이 겹침)</span><span>×2 = 겹친 항목 수</span></div>' +
      '<div class="muscle-grid">' +
      r.muscles.map(function (m) {
        return '<div class="muscle-row" title="' + esc(m.item.point) + '"><span><b>' + esc(m.item.name) + '</b><br><span class="xs muted">' + esc(m.item.region) + '</span></span><div class="bar"><i style="width:' + Math.round(m.from.length / max * 100) + '%"></i></div><span class="cnt">' + m.from.length + '개</span></div>';
      }).join('') + '</div></div>';
    h += '<div class="card"><div class="card-head"><h3>4. 관리 프로그램 후보</h3><span class="small muted">겹치는 항목이 많은 순</span></div>' +
      r.programs.map(function (p, i) {
        var sel = G.final.indexOf(p.item.id) >= 0;
        var why = p.from.map(function (o) { return find(S.observations, o).label; });
        return '<div class="cand' + (sel ? ' sel' : '') + '"><div class="cand-top">' + (i === 0 ? '<span class="badge accent">우선 후보</span>' : '') + '<h4>' + esc(p.item.name) + '</h4>' + typeBadge(p.item.type) + '<span class="badge">' + p.item.minutes + '분</span></div>' +
          '<div class="why">관련 항목 ' + p.from.length + '/' + G.obs.length + ' — ' + why.map(esc).join(', ') + '</div>' +
          '<div class="why">대상 근육: ' + p.item.muscles.map(function (m) { var x = find(S.muscles, m); return x ? esc(x.name) : ''; }).join(', ') + '</div>' +
          '<div class="acts"><button class="btn sm" data-program="' + p.item.id + '">상세 보기</button><button class="btn sm ' + (sel ? 'accent' : 'primary') + '" data-pick="' + p.item.id + '">' + (sel ? I.checkC + ' 최종 선택됨' : '최종 선택') + '</button></div></div>';
      }).join('') + '<p class="xs muted" style="margin-top:12px">' + I.info + ' 후보는 관리자 화면 ‘연결 기준 관리’에 등록한 기준으로 계산합니다(AI 미적용).</p></div>';
    box.innerHTML = h;
    bindCommon(box);
    $$('[data-pick]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-pick'), i = G.final.indexOf(id);
        if (i >= 0) G.final.splice(i, 1); else G.final.push(id);
        G.ex = null; G.pre = false; renderGuideSide();
      });
    });
    renderSaveBar();
  }
  function renderSaveBar() {
    var box = $('#gSave'); if (!box) return;
    var c = G.cust ? find(S.customers, G.cust) : null;
    var exIds = [];
    G.final.forEach(function (p) { var x = find(S.programs, p); if (x) x.exercises.forEach(function (e) { if (exIds.indexOf(e) < 0) exIds.push(e); }); });
    if (G.ex === null) G.ex = exIds.slice();
    G.ex = G.ex.filter(function (e) { return exIds.indexOf(e) >= 0; });
    var ready = c && G.final.length;
    var h = '<div class="savebar"><div class="card-head" style="margin-bottom:12px"><h3>5. 이번 회차 저장</h3>' +
      (G.final.length ? '<span class="badge accent">' + G.final.length + '개 프로그램 선택</span>' : '<span class="small muted">후보에서 [최종 선택]을 눌러 주세요</span>') + '</div>';
    if (!G.final.length) {
      // 선택 전: 무엇이 저장될지 자리를 미리 보여 준다
      var top = computeGuide(G.obs).programs[0];
      var topEx = top ? top.item.exercises.map(function (e) { return find(S.exercises, e); }).filter(Boolean) : [];
      h += '<div class="grid g3">' +
        '<div class="slot"><div class="slot-title">최종 선택한 프로그램</div>' +
        (top ? '<div class="slot-item ghost"><span class="slot-num">1</span><span>예: ' + esc(top.item.name) + ' <span class="xs">(우선 후보)</span></span></div>' : '') +
        '<div class="slot-item ghost"><span class="slot-num">' + (top ? 2 : 1) + '</span><span>후보 카드의 [최종 선택]을 누르면 여기에 담겨요</span></div></div>' +
        '<div class="slot"><div class="slot-title">고객 화면 ‘홈운동’ 미리보기 <span class="badge ok">' + I.eye + ' 고객에게 보임</span></div>' +
        (topEx.length ? topEx.map(function (e) { return '<div class="slot-item ghost">' + I.run.replace(/20/g, '15') + '<span>' + esc(e.name) + ' <span class="xs">· ' + esc(e.dose) + '</span></span></div>'; }).join('') + '<p class="xs muted" style="margin-top:6px">선택한 프로그램의 운동이 자동으로 들어오고, 빼고 싶은 운동은 끌 수 있어요.</p>'
          : '<div class="slot-item ghost"><span>관찰 항목을 체크하면 배정될 운동이 여기 보여요</span></div>') + '</div>' +
        '<div class="slot"><div class="slot-title">함께 저장되는 기록</div>' +
        '<div class="slot-item"><span class="badge primary">관찰 항목 ' + G.obs.length + '개</span></div>' +
        '<div class="slot-item ghost"><span class="badge lock">' + I.lock + ' 내부 메모</span><span class="xs">관리사끼리만</span></div>' +
        '<div class="slot-item ghost"><span class="badge ok">' + I.eye + ' 고객 안내</span><span class="xs">고객 이용 내역에 표시</span></div></div>' +
        '</div>';
    }
    if (G.final.length) {
      h += '<div class="slot filled" style="margin-bottom:12px"><div class="slot-title">최종 선택한 프로그램' + (G.pre ? '<span class="xs muted" style="font-weight:400">— 우선 후보를 미리 담아 두었어요. 위 후보 카드에서 바꾸거나 더할 수 있어요</span>' : '') + '</div><div class="grid g2" style="gap:6px">' +
        G.final.map(function (p, i) { var x = find(S.programs, p); return x ? '<div class="slot-item"><span class="slot-num">' + (i + 1) + '</span><span style="flex:1">' + esc(x.name) + '</span>' + typeBadge(x.type) + '</div>' : ''; }).join('') + '</div></div>';
      h += '<div class="label" style="margin-bottom:6px">홈운동 배정 <span class="xs muted" style="font-weight:400">— 체크한 운동이 고객 화면 ‘홈운동’에 표시됩니다</span></div><div class="chips" style="margin-bottom:12px">' +
        exIds.map(function (e) { var x = find(S.exercises, e), on = G.ex.indexOf(e) >= 0; return '<button class="chip' + (on ? ' on' : '') + '" data-ex="' + e + '">' + (on ? I.checkC + ' ' : '') + esc(x.name) + '</button>'; }).join('') + '</div>';
      h += '<div class="form-grid"><div class="field"><label>' + '<span class="badge lock">' + I.lock + ' 내부 메모</span></label><textarea id="gInternal" placeholder="관찰 결과, 압통 부위, 다음 회차 계획">' + esc(G.internal) + '</textarea></div>' +
        '<div class="field"><label><span class="badge ok">' + I.eye + ' 고객에게 보일 안내</span></label><textarea id="gMemo" placeholder="예: 목 옆을 중심으로 풀었어요. 목 옆 늘리기를 하루 3번 해 주세요.">' + esc(G.memo) + '</textarea></div></div>';
    }
    h += '<div class="row" style="margin-top:12px;justify-content:flex-end">' + (!c ? '<span class="small" style="color:var(--danger)">먼저 고객을 선택해 주세요</span>' : !G.final.length ? '<span class="small muted">' + I.info + ' 후보 카드에서 [최종 선택]을 1개 이상 누르면 저장할 수 있어요</span>' : '') +
      '<button class="btn primary lg" id="gSaveBtn"' + (ready ? '' : ' disabled') + '>' + (c ? esc(c.name) + ' 님 ' + (usage(c).used + 1) + '회차로 저장' : '고객 기록에 저장') + '</button></div></div>';
    box.innerHTML = h;
    $$('[data-ex]', box).forEach(function (b) { b.addEventListener('click', function () { var e = b.getAttribute('data-ex'), i = G.ex.indexOf(e); if (i >= 0) G.ex.splice(i, 1); else G.ex.push(e); renderSaveBar(); }); });
    var ti = $('#gInternal'), tm = $('#gMemo');
    if (ti) ti.addEventListener('input', function () { G.internal = ti.value; });
    if (tm) tm.addEventListener('input', function () { G.memo = tm.value; });
    var sb = $('#gSaveBtn');
    if (sb) sb.addEventListener('click', function () {
      if (!ready) return;
      var v = { id: uid('v'), cust: c.id, date: today(), staff: (me() || {}).id || 'a2', obs: G.obs.slice(), programs: G.final.slice(), internal: G.internal.trim(), memo: G.memo.trim() || G.final.map(function (p) { return find(S.programs, p).name; }).join(', ') + ' 관리를 받았어요.' };
      S.visits.push(v);
      if (G.ex.length) c.assigned = G.ex.slice();
      if (c.status === '휴면') c.status = '이용중';
      save();
      G = null;
      toast(c.name + ' 님 기록에 저장했어요' + (v.programs.length ? ' · 홈운동 ' + c.assigned.length + '개 배정' : ''));
      go('#/staff/customer/' + c.id + '?new=' + v.id);
    });
  }

  /* ════════════════ 프로그램 자료 ════════════════ */
  function viewPrograms() {
    var h = '<div class="page-head"><div class="grow"><h1>프로그램 자료</h1><p class="muted">관리 프로그램별 대상 근육, 수기 관리 방법, 주의사항, 운동 자료를 봅니다.' + (S.role === 'admin' ? ' 수정은 ‘자료 등록·수정’에서 합니다.' : '') + '</p></div>' +
      (S.role === 'admin' ? '<a class="btn" href="#/admin/library">' + I.edit + ' 자료 등록·수정</a>' : '') + '</div>';
    h += '<div class="grid g3">' + S.programs.map(function (p) {
      return '<a class="card" href="#/staff/program/' + p.id + '" style="color:inherit;text-decoration:none;display:block;margin:0"><div class="row" style="margin-bottom:8px">' + typeBadge(p.type) + '<span class="badge">' + p.minutes + '분</span></div><h3>' + esc(p.name) + '</h3>' +
        '<p class="small muted" style="margin-top:6px">대상 근육 · ' + p.muscles.map(function (m) { var x = find(S.muscles, m); return x ? esc(x.name) : ''; }).join(', ') + '</p>' +
        '<p class="small muted">운동 자료 ' + p.exercises.length + '개</p></a>';
    }).join('') + '</div>';
    if (!S.programs.length) h += '<div class="empty"><b>등록된 프로그램이 없어요</b>관리자 화면에서 등록할 수 있어요.</div>';
    return h;
  }
  function programDetail(p) {
    var score = {}; p.muscles.forEach(function (m) { score[m] = 1; });
    var linked = S.observations.filter(function (o) { return o.programs.indexOf(p.id) >= 0; });
    var h = '<div class="row" style="margin-bottom:12px">' + typeBadge(p.type) + '<span class="badge">' + p.minutes + '분</span><span class="badge lock">' + I.lock + ' 내부 자료</span></div>' +
      '<div class="grid g2" style="align-items:start"><div>' + bodyMap(score, 1) + '</div><div><div class="label" style="margin-bottom:6px">대상 근육</div>' +
      p.muscles.map(function (m) { var x = find(S.muscles, m); return x ? '<div style="margin-bottom:8px"><b>' + esc(x.name) + '</b> <span class="xs muted">' + esc(x.region) + '</span><p class="small muted">' + esc(x.point) + '</p></div>' : ''; }).join('') + '</div></div>';
    h += '<div class="form-section-title">수기 관리 방법</div><ol class="method">' + p.method.map(function (s) { return '<li><span>' + esc(s) + '</span></li>'; }).join('') + '</ol>';
    h += '<div class="form-section-title">주의사항</div><div class="notice">' + I.warn + '<div>' + esc(p.caution) + '</div></div>';
    h += '<div class="form-section-title">운동 자료</div>' + (p.exercises.length ? '<div class="grid g2">' + p.exercises.map(function (eid) { var e = find(S.exercises, eid); return e ? exCard(e) : ''; }).join('') + '</div>' : '<div class="empty"><b>연결된 운동 자료가 없어요</b></div>');
    h += '<div class="form-section-title">이 프로그램이 후보로 뜨는 관찰 항목</div><div class="chips">' + (linked.length ? linked.map(function (o) { return '<span class="chip static">' + esc(o.label) + '</span>'; }).join('') : '<span class="small muted">연결된 관찰 항목 없음</span>') + '</div>';
    return h;
  }
  function exCard(e) {
    return '<div class="ex-card">' + videoBox(e) + '<div class="body"><div class="ex-head"><b>' + esc(e.name) + '</b><span class="badge">' + esc(e.dose) + '</span></div><ol>' + e.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
      (e.caution ? '<p class="xs" style="margin-top:8px;color:var(--warn)">주의 · ' + esc(e.caution) + '</p>' : '') + '</div></div>';
  }
  function viewProgramPage(id) {
    var p = find(S.programs, id);
    if (!p) return '<div class="empty"><b>프로그램을 찾을 수 없어요</b><a href="#/staff/programs">목록으로</a></div>';
    return '<div class="page-head"><div class="grow"><div class="crumb"><a href="#/staff/programs">프로그램 자료</a> › ' + esc(p.name) + '</div><h1>' + esc(p.name) + '</h1></div>' +
      (S.role === 'admin' ? '<a class="btn" href="#/admin/library?edit=' + p.id + '">' + I.edit + ' 수정</a>' : '') + '</div><div class="card">' + programDetail(p) + '</div>';
  }
  function openProgramModal(id) {
    var p = find(S.programs, id); if (!p) return;
    var inGuide = !!$('#gRight') && G;
    var sel = inGuide && G.final.indexOf(id) >= 0;
    openModal(p.name, programDetail(p), inGuide ? '<button class="btn ghost" data-close="1">닫기</button><button class="btn ' + (sel ? '' : 'primary') + '" id="mPick">' + (sel ? '최종 선택 해제' : '이 프로그램 최종 선택') + '</button>' : '<button class="btn" data-close="1">닫기</button>', function (m) {
      var b = m.querySelector('#mPick');
      if (b) b.addEventListener('click', function () { var i = G.final.indexOf(id); if (i >= 0) G.final.splice(i, 1); else G.final.push(id); G.ex = null; closeModal(); renderGuideSide(); toast(i >= 0 ? '최종 선택을 해제했어요' : p.name + ' — 최종 선택'); });
    });
  }

  /* ════════════════ 관리자: 자료 등록·수정 ════════════════ */
  function viewLibrary() {
    var tab = R.q.tab || 'programs';
    var tabs = [['programs', '관리 프로그램', S.programs.length], ['exercises', '운동 자료', S.exercises.length], ['muscles', '근육별 관리 포인트', S.muscles.length]];
    var h = '<div class="page-head"><div class="grow"><h1>자료 등록·수정</h1><p class="muted">근육별 관리 방법과 운동 자료를 직접 등록하고 고칠 수 있습니다. 저장하면 관리사 화면에 바로 반영됩니다.</p></div>' +
      '<button class="btn primary" id="libAdd">' + I.plus + ' 새 ' + { programs: '프로그램', exercises: '운동 자료', muscles: '근육' }[tab] + '</button></div>';
    h += '<div class="chips" style="margin-bottom:16px">' + tabs.map(function (t) { return '<a class="chip' + (tab === t[0] ? ' on' : '') + '" href="#/admin/library?tab=' + t[0] + '" style="text-decoration:none">' + t[1] + ' ' + t[2] + '</a>'; }).join('') + '</div>';
    if (tab === 'programs') {
      h += '<div class="table-wrap"><table class="tbl"><thead><tr><th>프로그램</th><th>구분</th><th>대상 근육</th><th>운동 자료</th><th>연결된 관찰 항목</th><th></th></tr></thead><tbody>' +
        S.programs.map(function (p) {
          var nObs = S.observations.filter(function (o) { return o.programs.indexOf(p.id) >= 0; }).length;
          return '<tr><td class="first" data-label="프로그램">' + esc(p.name) + '</td><td data-label="구분">' + typeBadge(p.type) + '</td><td data-label="대상 근육" class="small">' + p.muscles.map(function (m) { var x = find(S.muscles, m); return x ? esc(x.name) : ''; }).join(', ') + '</td><td data-label="운동 자료">' + p.exercises.length + '개</td><td data-label="연결 항목">' + nObs + '개</td>' +
            '<td data-label=""><div class="row" style="justify-content:flex-end;flex-wrap:nowrap"><a class="btn sm ghost" href="#/staff/program/' + p.id + '">보기</a><button class="btn sm" data-edit="' + p.id + '">' + I.edit + ' 수정</button></div></td></tr>';
        }).join('') + '</tbody></table></div>';
    } else if (tab === 'exercises') {
      h += '<div class="grid g3 lib-grid">' + S.exercises.map(function (e) {
        var used = S.programs.filter(function (p) { return p.exercises.indexOf(e.id) >= 0; }).length;
        return '<div class="ex-card">' + videoBox(e) + '<div class="body"><div class="ex-head"><b title="' + esc(e.name) + '">' + esc(e.name) + '</b><span class="badge">' + esc(e.dose) + '</span></div><p class="xs muted" style="margin-top:4px">' + used + '개 프로그램에서 사용</p><div class="row acts-bottom"><button class="btn sm" data-edit="' + e.id + '">' + I.edit + ' 수정</button></div></div></div>';
      }).join('') + '</div>';
    } else {
      h += '<div class="table-wrap"><table class="tbl"><thead><tr><th>근육</th><th>부위</th><th>관리 포인트</th><th></th></tr></thead><tbody>' +
        S.muscles.map(function (m) { return '<tr><td class="first" data-label="근육">' + esc(m.name) + '</td><td data-label="부위">' + esc(m.region) + '</td><td data-label="관리 포인트" class="small" style="max-width:420px">' + esc(m.point) + '</td><td data-label=""><button class="btn sm" data-edit="' + m.id + '">' + I.edit + ' 수정</button></td></tr>'; }).join('') + '</tbody></table></div>';
    }
    afterRender = function () {
      $$('[data-edit]').forEach(function (b) { b.addEventListener('click', function () { editLibItem(tab, b.getAttribute('data-edit')); }); });
      $('#libAdd').addEventListener('click', function () { editLibItem(tab, null); });
      if (R.q.edit) editLibItem('programs', R.q.edit);
    };
    return h;
  }
  function chipPicker(name, list, selected) {
    return '<div class="chips" data-picker="' + name + '">' + list.map(function (x) { var on = selected.indexOf(x.id) >= 0; return '<button type="button" class="chip' + (on ? ' on' : '') + '" data-id="' + x.id + '">' + esc(x.name || x.label) + '</button>'; }).join('') + '</div>';
  }
  function bindPickers(root) {
    $$('[data-picker] .chip', root).forEach(function (b) { b.addEventListener('click', function () { b.classList.toggle('on'); }); });
  }
  function pickerVal(root, name) { return $$('[data-picker="' + name + '"] .chip.on', root).map(function (b) { return b.getAttribute('data-id'); }); }

  function editLibItem(tab, id) {
    var body, title, coll = S[tab], item = id ? find(coll, id) : null;
    if (tab === 'programs') {
      var p = item || { name: '', type: '수기', minutes: 15, muscles: [], exercises: [], method: [], caution: '' };
      title = item ? '프로그램 수정' : '새 관리 프로그램';
      body = '<form id="libForm" class="stack">' + fld('name', '프로그램 이름', '<input type="text" name="name" value="' + esc(p.name) + '">', true) +
        '<div class="form-grid">' + fld('type', '구분', '<select name="type">' + ['수기', '수기+스트레칭', '운동'].map(function (t) { return '<option' + (p.type === t ? ' selected' : '') + '>' + t + '</option>'; }).join('') + '</select>') +
        fld('minutes', '소요 시간(분)', '<input type="number" name="minutes" value="' + p.minutes + '" min="5" max="90">') + '</div>' +
        fld('muscles', '대상 근육', chipPicker('muscles', S.muscles, p.muscles)) +
        fld('method', '수기 관리 방법', '<textarea name="method" rows="5" placeholder="한 줄에 한 단계씩 적어 주세요">' + esc(p.method.join('\n')) + '</textarea>', true, '한 줄 = 한 단계로 번호가 붙어 표시됩니다.') +
        fld('caution', '주의사항', '<textarea name="caution">' + esc(p.caution) + '</textarea>') +
        fld('exercises', '운동 자료 연결', chipPicker('exercises', S.exercises, p.exercises)) + '</form>';
    } else if (tab === 'exercises') {
      var e = item || { name: '', anim: 'neck', dose: '', dur: '0:40', steps: [], caution: '' };
      title = item ? '운동 자료 수정' : '새 운동 자료';
      body = '<form id="libForm" class="stack">' + fld('name', '운동 이름', '<input type="text" name="name" value="' + esc(e.name) + '">', true) +
        '<div class="form-grid">' + fld('dose', '횟수·시간', '<input type="text" name="dose" value="' + esc(e.dose) + '" placeholder="예: 10회 × 2세트">') +
        fld('anim', '영상', '<select name="anim">' + [['neck', '앉아서 목 동작 (예시)'], ['arms', '벽에 서서 팔 동작 (예시)'], ['bend', '네발 자세 동작 (예시)'], ['squat', '무릎 꿇고 하는 동작 (예시)'], ['bridge', '누워서 하는 동작 (예시)'], ['side', '옆으로 누운 동작 (예시)']].map(function (a) { return '<option value="' + a[0] + '"' + (e.anim === a[0] ? ' selected' : '') + '>' + a[1] + '</option>'; }).join('') + '</select>', false, '시안에서는 예시 애니메이션이 나옵니다.') + '</div>' +
        '<div class="field"><label>동작 영상 파일</label><div class="empty" style="padding:16px">' + I.play + ' <b style="display:inline">영상 업로드 자리</b><br><span class="xs">실제 운영에서는 관리사가 촬영한 mp4(30~60초)를 여기에 올리면 고객 홈운동 화면에서 재생됩니다.</span></div></div>' +
        fld('steps', '동작 순서', '<textarea name="steps" rows="4" placeholder="한 줄에 한 단계씩">' + esc(e.steps.join('\n')) + '</textarea>', true) +
        fld('caution', '주의사항', '<input type="text" name="caution" value="' + esc(e.caution) + '">') + '</form>';
    } else {
      var m = item || { name: '', region: '', point: '' };
      title = item ? '근육 정보 수정' : '새 근육';
      body = '<form id="libForm" class="stack">' + '<div class="form-grid">' + fld('name', '근육 이름', '<input type="text" name="name" value="' + esc(m.name) + '">', true) +
        fld('region', '부위', '<input type="text" name="region" value="' + esc(m.region) + '" placeholder="예: 목·어깨">') + '</div>' +
        fld('point', '관리 포인트 (근육별 관리 방법)', '<textarea name="point">' + esc(m.point) + '</textarea>') + '</form>';
    }
    var foot = (item ? '<button class="btn danger ghost" id="libDel" style="margin-right:auto">' + I.trash + ' 삭제</button>' : '') + '<button class="btn ghost" data-close="1">취소</button><button class="btn primary" id="libSave">저장</button>';
    openModal(title, body, foot, function (root) {
      bindPickers(root);
      var f = root.querySelector('#libForm');
      root.querySelector('#libSave').addEventListener('click', function () {
        var v = function (n) { return (f.elements[n].value || '').trim(); };
        var lines = function (n) { return v(n).split('\n').map(function (s) { return s.trim(); }).filter(Boolean); };
        $$('.field.err', f).forEach(function (x) { x.classList.remove('err'); });
        var bad = [];
        if (!v('name')) bad.push('name');
        if (tab === 'programs' && !lines('method').length) bad.push('method');
        if (tab === 'exercises' && !lines('steps').length) bad.push('steps');
        if (bad.length) { bad.forEach(function (k) { f.querySelector('[data-f="' + k + '"]').classList.add('err'); }); toast('필수 항목을 채워 주세요'); return; }
        var data;
        if (tab === 'programs') data = { name: v('name'), type: v('type'), minutes: +v('minutes') || 15, muscles: pickerVal(root, 'muscles'), method: lines('method'), caution: v('caution'), exercises: pickerVal(root, 'exercises') };
        else if (tab === 'exercises') { data = { name: v('name'), dose: v('dose'), anim: v('anim'), steps: lines('steps'), caution: v('caution') }; if (item && item.anim !== data.anim) data.animChanged = true; }
        else data = { name: v('name'), region: v('region'), point: v('point') };
        if (item) Object.assign(item, data);
        else {
          var n = Object.assign({ id: uid(tab.charAt(0)) }, data);
          if (tab === 'exercises') n.dur = '0:40';
          if (tab === 'muscles') Object.assign(n, { view: 'B', dx: 0, y: 0, rx: 0, ry: 0, sym: false });
          coll.push(n);
        }
        save(); closeModal(); toast('저장했어요 · 관리사 화면에 바로 반영됩니다');
        history.replaceState(null, '', '#/admin/library?tab=' + tab); render();
      });
      var del = root.querySelector('#libDel');
      if (del) del.addEventListener('click', function () {
        if (!confirm('‘' + (item.name) + '’을(를) 삭제할까요? 연결 기준에서도 빠집니다.')) return;
        coll.splice(coll.indexOf(item), 1);
        if (tab === 'programs') { S.observations.forEach(function (o) { o.programs = o.programs.filter(function (x) { return x !== id; }); }); }
        if (tab === 'muscles') { S.observations.forEach(function (o) { o.muscles = o.muscles.filter(function (x) { return x !== id; }); }); S.programs.forEach(function (p) { p.muscles = p.muscles.filter(function (x) { return x !== id; }); }); }
        if (tab === 'exercises') { S.programs.forEach(function (p) { p.exercises = p.exercises.filter(function (x) { return x !== id; }); }); S.customers.forEach(function (c) { c.assigned = c.assigned.filter(function (x) { return x !== id; }); }); }
        save(); closeModal(); toast('삭제했어요'); history.replaceState(null, '', '#/admin/library?tab=' + tab); render();
      });
    });
  }

  /* ════════════════ 관리자: 연결 기준 관리 ════════════════ */
  function viewRules() {
    var sel = R.q.o && find(S.observations, R.q.o) ? R.q.o : (S.observations[0] && S.observations[0].id);
    var o = sel ? find(S.observations, sel) : null;
    var cats = []; S.observations.forEach(function (x) { if (cats.indexOf(x.cat) < 0) cats.push(x.cat); });
    var h = '<div class="page-head"><div class="grow"><h1>연결 기준 관리</h1><p class="muted">관찰 항목마다 “이 항목이 체크되면 어떤 근육과 프로그램을 후보로 보여줄지”를 정합니다. 개발자 없이 직접 추가·수정할 수 있습니다.</p></div>' +
      '<button class="btn primary" id="obsAdd">' + I.plus + ' 관찰 항목 추가</button></div>';
    h += '<div class="split"><div class="card"><div class="card-head"><h3>관찰 항목 (체크리스트)</h3><span class="badge">' + S.observations.length + '개</span></div>' +
      (S.observations.length ? cats.map(function (cat) {
        return '<div class="check-cat">' + esc(cat) + '</div><div class="stack" style="--g:6px">' + S.observations.filter(function (x) { return x.cat === cat; }).map(function (x) {
          return '<a href="#/admin/rules?o=' + x.id + '" class="cand' + (x.id === sel ? ' sel' : '') + '" style="display:block;color:inherit;text-decoration:none;margin-top:6px"><div class="cand-top"><h4 style="font-size:14px">' + esc(x.label) + '</h4><span class="xs muted">근육 ' + x.muscles.length + ' · 프로그램 ' + x.programs.length + '</span></div></a>';
        }).join('') + '</div>';
      }).join('') : '<div class="empty"><b>관찰 항목이 없어요</b>‘관찰 항목 추가’로 체크리스트를 만들어 보세요.</div>') + '</div>';
    if (o) {
      h += '<div class="card guide-right"><div class="card-head"><h3>연결 기준 편집</h3><button class="btn sm ghost danger" id="obsDel">' + I.trash + ' 항목 삭제</button></div>' +
        '<div class="form-grid" style="margin-bottom:16px">' + fld('label', '항목 이름', '<input type="text" id="oLabel" value="' + esc(o.label) + '">') +
        fld('cat', '분류', '<input type="text" id="oCat" value="' + esc(o.cat) + '" list="catList"><datalist id="catList">' + cats.map(function (c) { return '<option value="' + esc(c) + '">'; }).join('') + '</datalist>') + '</div>' +
        '<div class="label" style="margin-bottom:6px">이 항목이 체크되면 표시할 근육</div>' + chipPicker('muscles', S.muscles, o.muscles) +
        '<div class="label" style="margin:16px 0 6px">이 항목이 체크되면 표시할 관리 프로그램</div>' + chipPicker('programs', S.programs, o.programs) +
        '<hr class="divider"><div class="row"><a class="btn ghost sm" href="#/staff/guide?o=' + o.id + '">' + I.spark + ' 가이드에서 확인</a><span class="spacer"></span><button class="btn primary" id="oSave">기준 저장</button></div></div>';
    }
    h += '</div>';
    afterRender = function () {
      bindPickers(document);
      var sv = $('#oSave');
      if (sv) sv.addEventListener('click', function () {
        var lbl = $('#oLabel').value.trim(); if (!lbl) { toast('항목 이름을 입력해 주세요'); return; }
        o.label = lbl; o.cat = $('#oCat').value.trim() || '기타';
        o.muscles = pickerVal(document, 'muscles'); o.programs = pickerVal(document, 'programs');
        save(); toast('연결 기준을 저장했어요 · 가이드 후보에 바로 반영됩니다'); render();
      });
      var dl = $('#obsDel');
      if (dl) dl.addEventListener('click', function () {
        if (!confirm('‘' + o.label + '’ 항목을 삭제할까요?')) return;
        S.observations.splice(S.observations.indexOf(o), 1); save(); toast('항목을 삭제했어요'); go('#/admin/rules');
      });
      $('#obsAdd').addEventListener('click', function () {
        openModal('관찰 항목 추가', '<form id="oNew" class="stack">' + fld('label', '항목 이름', '<input type="text" name="label" placeholder="예: 팔을 뒤로 돌릴 때 어깨 앞이 당김">', true) +
          fld('cat', '분류', '<select name="cat">' + cats.concat(cats.indexOf('기타') < 0 ? ['기타'] : []).map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('') + '</select>') + '</form>',
          '<button class="btn ghost" data-close="1">취소</button><button class="btn primary" id="oNewSave">추가</button>', function (root) {
            root.querySelector('#oNewSave').addEventListener('click', function () {
              var f = root.querySelector('#oNew'), lbl = f.elements.label.value.trim();
              if (!lbl) { f.querySelector('[data-f="label"]').classList.add('err'); return; }
              var n = { id: uid('o'), cat: f.elements.cat.value, label: lbl, muscles: [], programs: [] };
              S.observations.push(n); save(); toast('항목을 추가했어요 · 연결할 근육과 프로그램을 골라 주세요'); go('#/admin/rules?o=' + n.id);
            });
          });
      });
    };
    return h;
  }

  /* ════════════════ 관리자: 계정·권한 ════════════════ */
  function viewAccounts() {
    var PERMS = [['allCustomers', '전체 고객 보기', '끄면 담당 고객만 보입니다'], ['viewConsult', '상담 내용 열람', '끄면 상담·선호사항이 가려집니다'], ['editCustomers', '고객 등록·수정', '끄면 조회만 가능합니다']];
    var h = '<div class="page-head"><div class="grow"><h1>계정·권한</h1><p class="muted">관리자·관리사 계정과 고객 로그인 계정을 관리하고, 사람마다 볼 수 있는 범위를 정합니다.</p></div><button class="btn primary" id="accAdd">' + I.plus + ' 관리사 계정 추가</button></div>';
    h += '<div class="card"><div class="card-head"><h3>관리자·관리사 계정</h3><span class="small muted">관리자는 모든 권한을 가집니다</span></div><div class="table-wrap"><table class="tbl"><thead><tr><th>이름</th><th>역할</th>' + PERMS.map(function (p) { return '<th title="' + p[2] + '">' + p[1] + '</th>'; }).join('') + '<th>사용</th><th>화면 확인</th></tr></thead><tbody>' +
      S.accounts.map(function (a) {
        var adm = a.role === 'admin';
        return '<tr><td class="first" data-label="이름"><div class="row" style="flex-wrap:nowrap"><div class="avatar' + (adm ? ' acc' : '') + '" style="width:30px;height:30px;font-size:13px">' + esc(a.name.charAt(0)) + '</div>' + esc(a.name) + '</div></td><td data-label="역할">' + (adm ? '<span class="badge accent">관리자</span>' : '<span class="badge primary">관리사</span>') + '</td>' +
          PERMS.map(function (p) { return '<td data-label="' + p[1] + '"><label class="switch"><input type="checkbox" data-perm="' + p[0] + '" data-acc="' + a.id + '"' + (adm || a.perms[p[0]] ? ' checked' : '') + (adm ? ' disabled' : '') + ' aria-label="' + p[1] + '"></label></td>'; }).join('') +
          '<td data-label="사용"><label class="switch"><input type="checkbox" data-active="' + a.id + '"' + (a.active ? ' checked' : '') + (adm ? ' disabled' : '') + ' aria-label="계정 사용"></label></td>' +
          '<td data-label="화면 확인">' + (!adm ? '<button class="btn sm" data-viewas="' + a.id + '">' + I.eye + ' 이 계정으로 보기</button>' : '<span class="badge accent">본인 · 지금 보는 화면</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="notice info" style="margin-top:12px">' + I.info + '<div>예시: <b>이도윤</b> 관리사는 담당 고객만, 상담 내용 비공개로 설정돼 있습니다. [이 계정으로 보기]를 눌러 실제로 어떻게 가려지는지 확인해 보세요.</div></div></div>';
    h += '<div class="card"><div class="card-head"><h3>고객 로그인 계정</h3><span class="small muted">고객은 본인 기록과 홈운동만 볼 수 있습니다</span></div><div class="table-wrap"><table class="tbl"><thead><tr><th>고객</th><th>아이디</th><th>담당</th><th>최근 방문</th><th>로그인 허용</th><th>비밀번호</th></tr></thead><tbody>' +
      S.customers.map(function (c) {
        var lv = lastVisit(c);
        return '<tr><td class="first" data-label="고객">' + esc(c.name) + '</td><td data-label="아이디"><code>' + esc(c.loginId) + '</code></td><td data-label="담당">' + esc(staffName(c.staff)) + '</td><td data-label="최근 방문" class="small">' + (lv ? fmtDate(lv.date) : '-') + '</td>' +
          '<td data-label="로그인 허용"><label class="switch"><input type="checkbox" data-login="' + c.id + '"' + (c.loginOn ? ' checked' : '') + ' aria-label="로그인 허용"></label></td><td data-label="비밀번호"><button class="btn sm" data-pin="' + c.id + '">' + I.lock + ' 초기화</button></td></tr>';
      }).join('') + '</tbody></table></div></div>';
    afterRender = function () {
      $$('[data-perm]').forEach(function (i) { i.addEventListener('change', function () { var a = find(S.accounts, i.getAttribute('data-acc')); a.perms[i.getAttribute('data-perm')] = i.checked; save(); toast(a.name + ' 님 권한을 바꿨어요'); }); });
      $$('[data-active]').forEach(function (i) { i.addEventListener('change', function () { var a = find(S.accounts, i.getAttribute('data-active')); a.active = i.checked; save(); toast(a.name + ' 님 계정을 ' + (i.checked ? '사용' : '중지') + '했어요'); }); });
      $$('[data-login]').forEach(function (i) { i.addEventListener('change', function () { var c = find(S.customers, i.getAttribute('data-login')); c.loginOn = i.checked; save(); toast(c.name + ' 님 로그인을 ' + (i.checked ? '허용' : '차단') + '했어요'); }); });
      $$('[data-pin]').forEach(function (b) { b.addEventListener('click', function () { var c = find(S.customers, b.getAttribute('data-pin')); c.pin = '0000'; save(); toast(c.name + ' 님 비밀번호를 0000으로 초기화했어요'); }); });
      $$('[data-viewas]').forEach(function (b) { b.addEventListener('click', function () { S.staffAs = b.getAttribute('data-viewas'); S.role = 'staff'; save(); toast(find(S.accounts, S.staffAs).name + ' 님 화면으로 전환했어요'); go('#/staff/customers'); }); });
      $('#accAdd').addEventListener('click', function () {
        openModal('관리사 계정 추가', '<form id="aNew" class="stack">' + fld('name', '이름', '<input type="text" name="name" placeholder="예: 최유나">', true) +
          '<div class="label">권한</div>' + PERMS.map(function (p) { return '<label class="switch"><input type="checkbox" name="' + p[0] + '"' + (p[0] === 'editCustomers' ? '' : ' checked') + '>' + p[1] + ' <span class="xs muted">' + p[2] + '</span></label>'; }).join('') + '</form>',
          '<button class="btn ghost" data-close="1">취소</button><button class="btn primary" id="aSave">추가</button>', function (root) {
            root.querySelector('#aSave').addEventListener('click', function () {
              var f = root.querySelector('#aNew'), nm = f.elements.name.value.trim();
              if (!nm) { f.querySelector('[data-f="name"]').classList.add('err'); return; }
              S.accounts.push({ id: uid('a'), name: nm, role: 'staff', title: '관리사', active: true, perms: { allCustomers: f.elements.allCustomers.checked, viewConsult: f.elements.viewConsult.checked, editCustomers: f.elements.editCustomers.checked } });
              save(); closeModal(); toast(nm + ' 님 계정을 추가했어요'); render();
            });
          });
      });
    };
    return h;
  }

  /* ════════════════ 고객 화면 ════════════════ */
  function curCustomer() { var c = S.session && S.session.customerId ? find(S.customers, S.session.customerId) : null; return c && c.loginOn ? c : null; }
  function needLogin() { return '<div class="login-wrap card" style="text-align:center"><h2>로그인이 필요해요</h2><p class="muted" style="margin:8px 0 16px">본인 기록은 로그인 후에 볼 수 있어요.</p><a class="btn primary block" href="#/customer/login">로그인하기</a></div>'; }
  function viewCLogin() {
    var opts = S.customers.filter(function (c) { return c.loginOn; });
    var h = '<div class="login-wrap"><div style="text-align:center;margin-bottom:20px"><span class="brand-mark" style="width:52px;height:52px;border-radius:16px;margin:0 auto 12px;display:grid"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="5" r="2.5"/><path d="M12 8v7M7 11c2 1.2 8 1.2 10 0M9 21l3-6 3 6"/></svg></span><h1>바디노트</h1><p class="muted">내 관리 기록과 홈운동</p></div>' +
      '<form class="card stack" id="loginForm">' + fld('id', '아이디', '<input type="text" name="id" autocomplete="username" value="' + esc((curCustomer() || opts[0] || {}).loginId || '') + '">') +
      fld('pw', '비밀번호', '<input type="password" name="pw" autocomplete="current-password" value="0000">', false, '시연용: 모든 고객 비밀번호는 0000') +
      '<button class="btn primary lg block" type="submit">로그인</button>' +
      '<div><div class="xs muted" style="margin-bottom:6px">시연용 테스트 고객 빠른 선택</div><div class="chips">' + opts.slice(0, 6).map(function (c) { return '<button type="button" class="chip" data-fill="' + esc(c.loginId) + '">' + esc(c.name) + '</button>'; }).join('') + '</div></div></form></div>';
    afterRender = function () {
      var f = $('#loginForm');
      $$('[data-fill]').forEach(function (b) { b.addEventListener('click', function () { f.elements.id.value = b.getAttribute('data-fill'); }); });
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var id = f.elements.id.value.trim(), pw = f.elements.pw.value;
        var c = S.customers.filter(function (x) { return x.loginId === id; })[0];
        $$('.field.err', f).forEach(function (x) { x.classList.remove('err'); var m = x.querySelector('.errmsg'); if (m) m.remove(); });
        var fail = function (k, msg) { var fe = f.querySelector('[data-f="' + k + '"]'); fe.classList.add('err'); fe.insertAdjacentHTML('beforeend', '<span class="errmsg">' + msg + '</span>'); };
        if (!c) return fail('id', '등록되지 않은 아이디예요.');
        if (!c.loginOn) return fail('id', '로그인이 중지된 계정이에요. 매장에 문의해 주세요.');
        if (pw !== (c.pin || '0000')) return fail('pw', '비밀번호가 맞지 않아요.');
        S.session = { customerId: c.id }; save(); toast(c.name + ' 님, 반가워요'); go('#/customer/home');
      });
    };
    return h;
  }
  function custHeader(c, title) {
    return '<div class="cust-head"><div class="avatar">' + esc(c.name.charAt(0)) + '</div><div class="grow"><div class="xs muted">' + esc(title) + '</div><b>' + esc(c.name) + ' 님</b></div><button class="btn sm ghost" id="logout">' + I.out + ' 로그아웃</button></div>';
  }
  function bindLogout() { var b = $('#logout'); if (b) b.addEventListener('click', function () { S.session = { customerId: null }; save(); toast('로그아웃했어요'); go('#/customer/login'); }); }
  function ring(pct) {
    var r = 36, C = 2 * Math.PI * r;
    return '<svg class="ring" viewBox="0 0 86 86"><circle cx="43" cy="43" r="' + r + '" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="8"/><circle cx="43" cy="43" r="' + r + '" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1) + '" transform="rotate(-90 43 43)"/></svg>';
  }
  function toggleCheck(c, eid, day) {
    var m = S.checks[c.id] = S.checks[c.id] || {};
    var arr = m[day] = m[day] || [];
    var i = arr.indexOf(eid);
    if (i >= 0) arr.splice(i, 1); else arr.push(eid);
    save();
    return i < 0;
  }
  function weekStrip(c) {
    var ck = S.checks[c.id] || {}, n = c.assigned.length, out = '<div class="week">';
    for (var k = 6; k >= 0; k--) {
      var d = window.agoYmd(k), cnt = (ck[d] || []).filter(function (e) { return c.assigned.indexOf(e) >= 0; }).length;
      out += '<div><div class="d">' + dow(d) + '</div><div class="dot' + (n && cnt >= n ? ' full' : cnt ? ' part' : '') + (k === 0 ? ' today' : '') + '">' + (+d.slice(8)) + '</div></div>';
    }
    return out + '</div>';
  }
  function weekLegend() {
    return '<div class="week-legend"><span><i class="full"></i>모두 완료</span><span><i class="part"></i>일부 완료</span><span><i></i>안 함</span><span><i class="today"></i>오늘</span></div>';
  }
  function viewCHome() {
    var c = curCustomer(); if (!c) return needLogin();
    var u = usage(c), lv = lastVisit(c), t = today(), done = (S.checks[c.id] || {})[t] || [];
    var h = custHeader(c, '오늘도 가볍게');
    h += '<div class="pkg-card">' + '<div class="ring-wrap" role="img" aria-label="' + u.total + '회 중 ' + u.used + '회 이용">' + ring(u.pct) + '<div class="ring-num"><span><b>' + u.used + '</b><small>/' + u.total + '</small></span></div></div>' +
      '<div><div class="xs muted">이용 중인 패키지</div><b style="font-size:17px">' + esc(pkgOf(c).name) + '</b><div class="small" style="margin-top:4px">남은 회차 <b>' + u.left + '회</b></div>' + (lv ? '<div class="xs muted" style="margin-top:2px">최근 방문 ' + fmtShort(lv.date) + ' (' + relDay(lv.date) + ')</div>' : '') + '</div></div>';
    h += '<div class="card" style="margin-top:16px"><div class="card-head"><h3>오늘의 홈운동</h3><span class="badge ' + (c.assigned.length && done.filter(function (e) { return c.assigned.indexOf(e) >= 0; }).length >= c.assigned.length ? 'ok' : '') + '" id="todayCnt">' + done.filter(function (e) { return c.assigned.indexOf(e) >= 0; }).length + '/' + c.assigned.length + '</span></div>';
    if (!c.assigned.length) h += '<div class="empty" style="padding:20px"><b>아직 배정된 운동이 없어요</b>다음 방문 때 관리사님이 맞춤 운동을 정해 드려요.</div>';
    else h += c.assigned.map(function (eid) {
      var e = find(S.exercises, eid); if (!e) return '';
      var on = done.indexOf(eid) >= 0;
      return '<div class="today-ex"><div class="grow"><b>' + esc(e.name) + '</b><div class="xs muted">' + esc(e.dose) + '</div></div><button class="done-btn' + (on ? ' on' : '') + '" data-done="' + eid + '">' + (on ? I.checkC + ' 완료' : '오늘 했어요') + '</button></div>';
    }).join('') + '<a class="btn block" style="margin-top:12px" href="#/customer/exercise">' + I.play + ' 영상 보며 따라 하기</a>';
    h += '</div>';
    h += '<div class="card" style="margin-top:16px"><div class="card-head"><h3>이번 주 수행 기록</h3></div>' + weekStrip(c) + weekLegend() + '</div>';
    if (lv) h += '<div class="card" style="margin-top:16px"><div class="card-head"><h3>지난 관리 안내</h3><a class="small" href="#/customer/history">전체 보기</a></div><p class="xs muted">' + fmtDate(lv.date) + ' · 담당 ' + esc(staffName(lv.staff)) + '</p><p style="margin-top:6px">' + esc(lv.memo || '관리를 받았어요.') + '</p></div>';
    afterRender = function () {
      bindLogout();
      $$('[data-done]').forEach(function (b) { b.addEventListener('click', function () { var on = toggleCheck(c, b.getAttribute('data-done'), t); toast(on ? '잘하셨어요! 기록했어요' : '체크를 취소했어요'); render(); }); });
    };
    return h;
  }
  function viewCHistory() {
    var c = curCustomer(); if (!c) return needLogin();
    var u = usage(c), visits = custVisits(c.id).slice().reverse();
    var h = custHeader(c, '이용 내역');
    h += '<div class="card"><div class="card-head"><h3>패키지</h3><span class="badge primary">' + esc(pkgOf(c).name) + '</span></div><div class="row" style="flex-wrap:nowrap;gap:12px"><div class="progress" style="flex:1;height:12px"><i style="width:' + u.pct + '%"></i></div><b>' + u.used + '/' + u.total + '회</b></div>' +
      '<div class="grid g3" style="margin-top:14px;grid-template-columns:repeat(3,1fr)">' + stat(u.used, '이용') + stat(u.left, '남음') + stat(fmtShort(c.pkgStart).replace('월 ', '/').replace('일', ''), '시작일') + '</div></div>';
    h += '<div class="card" style="margin-top:16px"><div class="card-head"><h3>방문·관리 이력</h3><span class="badge">' + visits.length + '회</span></div>';
    if (!visits.length) h += '<div class="empty"><b>아직 방문 기록이 없어요</b></div>';
    else h += '<div class="timeline">' + visits.map(function (v, i) {
      return '<div class="tl-item"><div class="tl-box"><div class="meta"><b>' + (visits.length - i) + '회차</b><span class="small muted">' + fmtDate(v.date) + ' (' + dow(v.date) + ')</span><span class="spacer"></span><span class="xs muted">' + esc(staffName(v.staff)) + ' 관리사</span></div><p class="small">' + esc(v.memo || '관리를 받았어요.') + '</p></div></div>';
    }).join('') + '</div>';
    h += '<p class="xs muted" style="margin-top:8px">관리사의 내부 관찰 기록은 이 화면에 표시되지 않아요.</p></div>';
    afterRender = bindLogout;
    return h;
  }
  function viewCExercise() {
    var c = curCustomer(); if (!c) return needLogin();
    var t = today(), done = (S.checks[c.id] || {})[t] || [];
    var h = custHeader(c, '홈운동');
    h += '<div class="card" style="margin-bottom:16px"><div class="card-head"><h3>이번 주</h3></div>' + weekStrip(c) + weekLegend() + '</div>';
    if (!c.assigned.length) h += '<div class="empty"><b>배정된 홈운동이 없어요</b>다음 방문 때 관리사님이 맞춤 운동을 정해 드려요.</div>';
    else h += '<div class="stack">' + c.assigned.map(function (eid) {
      var e = find(S.exercises, eid); if (!e) return '';
      var on = done.indexOf(eid) >= 0;
      return '<div class="ex-card">' + videoBox(e) + '<div class="body"><div class="row"><b style="font-size:16px">' + esc(e.name) + '</b><span class="spacer"></span><span class="badge">' + esc(e.dose) + '</span></div><ol>' + e.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
        (e.caution ? '<p class="xs" style="margin-top:8px;color:var(--warn)">주의 · ' + esc(e.caution) + '</p>' : '') +
        '<button class="done-btn' + (on ? ' on' : '') + '" data-done="' + eid + '" style="width:100%;justify-content:center;margin-top:12px;padding:11px">' + (on ? I.checkC + ' 오늘 완료했어요' : '오늘 했어요') + '</button></div></div>';
    }).join('') + '</div>';
    afterRender = function () {
      bindLogout();
      $$('[data-done]').forEach(function (b) { b.addEventListener('click', function () { var on = toggleCheck(c, b.getAttribute('data-done'), t); toast(on ? '잘하셨어요! 기록했어요' : '체크를 취소했어요'); render(); }); });
    };
    return h;
  }

  /* ── 시작 ── */
  $('#roleTabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-role]'); if (!b) return;
    var r = b.getAttribute('data-role');
    if (r === 'staff') S.staffAs = 'a2';
    setRole(r); save(); go(ROLE_HOME[r]);
  });
  $('#resetBtn').addEventListener('click', function () {
    if (!confirm('모든 변경을 지우고 처음 데이터로 되돌릴까요?')) return;
    var role = S.role;
    S = window.makeSeed(); S.role = role; save(); G = null;
    toast('데모 데이터를 처음 상태로 되돌렸어요');
    render();
  });
  window.addEventListener('hashchange', function () { var y = window.scrollY; render(); if (!/^#\/staff\/guide/.test(location.hash) || y === 0) window.scrollTo(0, 0); });
  render();
})();
