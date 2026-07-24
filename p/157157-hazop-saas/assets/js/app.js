/* ===========================================================================
   공정안전 위험성평가(HAZOP) SaaS — 제안용 데모 앱
   - 정적 파일만으로 동작한다. 번들러·CDN·fetch 없음 (file:// 직접 실행 가능).
   - ES 모듈을 쓰지 않는 이유: file:// 에서 module 스크립트는 CORS 로 차단된다.
   - 라우팅은 해시 기반. 상태는 메모리에 두고, 화면 간 동일 스토어를 공유한다
     (검토 화면에서 승인하면 워크시트 표에 즉시 반영되는 것을 보여주기 위함).
   =========================================================================== */
(function () {
  'use strict';

  var D = window.DEMO;

  /* ── 유틸 ──────────────────────────────────────────────────────────── */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  /* 데모 시계 — 실제 시각 대신 고정 기준시각에서 1분씩 진행시킨다.
     스크린샷·시연 결과가 실행 시점에 따라 흔들리지 않게 하기 위함. */
  var clockMin = 0;
  function now() {
    var base = new Date(2026, 6, 24, 10, 20, 0);
    base.setMinutes(base.getMinutes() + (++clockMin));
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return base.getFullYear() + '-' + p(base.getMonth() + 1) + '-' + p(base.getDate()) +
      ' ' + p(base.getHours()) + ':' + p(base.getMinutes());
  }

  /* 위험등급: R = S(심각도) × L(발생가능성), 5x5 매트릭스 밴드 */
  function riskOf(r) {
    var v = (r.s || 0) * (r.l || 0);
    var band = v >= 15 ? 4 : v >= 10 ? 3 : v >= 5 ? 2 : 1;
    var label = ['', '낮음', '보통', '높음', '매우높음'][band];
    return { v: v, band: band, label: label };
  }

  var ICON = {
    dash: '<path d="M2 3h5v5H2zM9 3h5v3H9zM9 8h5v5H9zM2 10h5v3H2z"/>',
    grid: '<path d="M2 3h12v10H2z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M2 6.4h12M2 9.7h12M6.4 3v10" stroke="currentColor" stroke-width="1.1" fill="none"/>',
    ai: '<path d="M8 1.8l1.5 3.4 3.7.4-2.8 2.5.8 3.6L8 9.9l-3.2 1.8.8-3.6L2.8 5.6l3.7-.4z"/>',
    doc: '<path d="M4 1.8h5l3 3v9.4H4z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M9 1.8V5h3" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    org: '<circle cx="8" cy="4.4" r="2.2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M3.2 13.4c0-2.6 2.1-4.2 4.8-4.2s4.8 1.6 4.8 4.2" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    win: '<path d="M2 3.6l5.2-.8v5.1H2zM8.4 2.6L14 1.8v6.1H8.4zM2 9.1h5.2v5.1L2 13.4zM8.4 9.1H14v6.1l-5.6-.8z"/>',
    home: '<path d="M8 2l6 5.2h-1.7v6.6H3.7V7.2H2z"/>'
  };
  function icon(k) {
    return '<svg class="ic" width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">' + ICON[k] + '</svg>';
  }

  /* ── 앱 상태 ───────────────────────────────────────────────────────── */
  var S = {
    org: 'ORG-A',
    role: 'reviewer',        // 로그인 시 선택한 역할 — 권한 UI 에 실제로 반영된다
    userName: '박서연',
    route: { name: 'landing', id: null },
    /* 워크시트 뷰 상태 */
    ws: { node: '', status: '', risk: '', q: '', sortKey: 'id', sortDir: 1, sel: {}, active: null, dense: true },
    /* 검토 큐 상태 */
    rv: { filter: 'draft', active: null, dirty: {} },
    /* 자료 화면 상태 */
    dc: { doc: 'DOC-101', ver: 'v2.1', uploaded: [] }
  };

  /* 편집 가능한 작업 스토어 (원본 fixture 를 훼손하지 않는다) */
  var store = { rows: clone(D.rows), projects: clone(D.projects), users: clone(D.users), docs: clone(D.docs) };

  function project(id) {
    for (var i = 0; i < store.projects.length; i++) if (store.projects[i].id === id) return store.projects[i];
    return null;
  }
  function rowsOf(pid) { return store.rows[pid] || []; }
  function findRow(pid, rid) {
    var rs = rowsOf(pid);
    for (var i = 0; i < rs.length; i++) if (rs[i].id === rid) return rs[i];
    return null;
  }
  function orgProjects() {
    return store.projects.filter(function (p) { return p.org === S.org; });
  }
  function curOrg() {
    for (var i = 0; i < D.orgs.length; i++) if (D.orgs[i].id === S.org) return D.orgs[i];
    return D.orgs[0];
  }
  /* 해당 조직에서 워크시트 데이터가 준비된 첫 프로젝트 */
  function defaultProject() {
    var ps = orgProjects();
    for (var i = 0; i < ps.length; i++) if (rowsOf(ps[i].id).length) return ps[i].id;
    return ps.length ? ps[0].id : '';
  }

  /* 역할 기반 권한 — 화면에서 실제로 버튼을 잠근다 */
  var ABILITY = {
    admin:    { edit: 1, approve: 1, manage: 1, upload: 1 },
    analyst:  { edit: 1, approve: 0, manage: 0, upload: 1 },
    reviewer: { edit: 1, approve: 1, manage: 0, upload: 0 }
  };
  function can(a) { return !!(ABILITY[S.role] && ABILITY[S.role][a]); }

  /* ── 토스트 ────────────────────────────────────────────────────────── */
  function toast(msg, kind) {
    var box = qs('#toasts');
    if (!box) { box = document.createElement('div'); box.id = 'toasts'; box.className = 'toasts'; document.body.appendChild(box); }
    var t = document.createElement('div');
    t.className = 'toast ' + (kind === 'no' ? 'no' : 'ok');
    t.innerHTML = '<span class="ic">' + (kind === 'no' ? '✕' : '✓') + '</span><span>' + esc(msg) + '</span>';
    box.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }

  /* ── 모달 ──────────────────────────────────────────────────────────── */
  function modal(opts) {
    var back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true">' +
        '<div class="modal-head"><h3>' + esc(opts.title) + '</h3><div class="spacer"></div>' +
          '<button class="btn ghost sm" data-x>✕</button></div>' +
        '<div class="modal-body">' + opts.body + '</div>' +
        '<div class="modal-foot">' +
          '<button class="btn" data-x>취소</button>' +
          '<button class="btn ' + (opts.danger ? 'danger' : 'primary') + '" data-ok>' + esc(opts.ok || '확인') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(back);
    var close = function () { back.remove(); };
    qsa('[data-x]', back).forEach(function (b) { b.onclick = close; });
    back.onclick = function (e) { if (e.target === back) close(); };
    qs('[data-ok]', back).onclick = function () { if (opts.onOk(back) !== false) close(); };
    if (opts.after) opts.after(back);
    return back;
  }

  /* ── 라우터 ────────────────────────────────────────────────────────── */
  function parseHash() {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);
    if (!parts.length) return { name: 'landing', id: null };
    return { name: parts[0], id: parts[1] || null };
  }
  function go(path) { location.hash = path; }
  window.addEventListener('hashchange', render);

  /* ── 공통 셸 ───────────────────────────────────────────────────────── */
  function banner() {
    return '<div class="demo-banner"><span class="dot"></span>' +
      '<span><b>제안용 데모 · 합성 데이터</b> — 화면 검증용 가상 프로젝트입니다. ' +
      '표시된 공정·설비·태그·수치·인물·조직은 전부 가상이며 실제 위험성평가 결과가 아닙니다.</span></div>';
  }

  function appbar() {
    var o = curOrg();
    var initial = S.userName.charAt(0);
    return '<header class="appbar">' +
      '<a class="brand" href="#/dashboard">' +
        '<span class="brand-mark">HZ</span>' +
        '<span><span class="brand-name">HazopDesk</span><br><span class="brand-sub">공정안전 위험성평가 플랫폼 (데모)</span></span>' +
      '</a>' +
      '<label class="org-switch" title="조직 전환 — 조직별로 데이터가 분리됩니다">' +
        '<span class="tenant-chip">' + esc(o.tenant) + '</span>' +
        '<select id="orgSel">' + D.orgs.map(function (x) {
          return '<option value="' + x.id + '"' + (x.id === S.org ? ' selected' : '') + '>' + esc(x.name) + '</option>';
        }).join('') + '</select>' +
      '</label>' +
      '<div class="appbar-spacer"></div>' +
      '<a class="btn sm" href="#/">랜딩·로그인 화면</a>' +
      '<div class="who">' +
        '<span class="avatar">' + esc(initial) + '</span>' +
        '<span><span class="who-name">' + esc(S.userName) + '</span><br>' +
        '<span class="who-role">' + esc(D.roles[S.role].label) + ' · ' + esc(o.id) + '</span></span>' +
      '</div>' +
    '</header>';
  }

  function sidebar() {
    var pid = S.route.id || defaultProject();
    var draftCnt = 0;
    orgProjects().forEach(function (p) {
      rowsOf(p.id).forEach(function (r) { if (r.st === 'draft') draftCnt++; });
    });
    var n = S.route.name;
    var link = function (href, ic, label, on, cnt) {
      return '<a class="side-link' + (on ? ' on' : '') + '" href="' + href + '">' + icon(ic) +
        '<span>' + label + '</span>' + (cnt ? '<span class="cnt">' + cnt + '</span>' : '') + '</a>';
    };
    return '<aside class="sidebar">' +
      '<div class="side-label">평가 업무</div>' +
      link('#/dashboard', 'dash', '프로젝트 대시보드', n === 'dashboard') +
      link('#/workspace/' + pid, 'grid', 'HAZOP 워크스페이스', n === 'workspace') +
      link('#/review/' + pid, 'ai', 'AI 초안 검토', n === 'review', draftCnt) +
      link('#/documents/' + pid, 'doc', '자료 등록 · 리비전', n === 'documents') +
      '<div class="side-label">설정</div>' +
      link('#/org', 'org', '조직 · 권한', n === 'org') +
      link('#/desktop', 'win', 'Windows 데스크톱', n === 'desktop') +
      '<div class="side-foot">현재 조직 <b>' + esc(curOrg().id) + '</b> 범위의 데이터만 조회됩니다.<br>' +
      '표시 중 프로젝트 ' + orgProjects().length + '건 · 리전 ' + esc(curOrg().region) + '</div>' +
    '</aside>';
  }

  function shell(inner, opts) {
    opts = opts || {};
    return banner() + '<div class="shell">' + appbar() +
      '<div class="layout">' + sidebar() +
      '<main class="main' + (opts.wide ? ' wide' : '') + '">' + inner + '</main></div></div>';
  }

  function crumb(items) {
    return '<div class="crumb">' + items.map(function (it, i) {
      var s = it.href ? '<a href="' + it.href + '">' + esc(it.t) + '</a>' : esc(it.t);
      return (i ? '<span>›</span>' : '') + s;
    }).join('') + '</div>';
  }

  /* ==========================================================================
     1. 랜딩 / 로그인 — 플랜트 실사 히어로
     ========================================================================== */
  function viewLanding() {
    return banner() + '<div class="landing">' +
      '<nav class="lp-nav">' +
        '<span class="brand"><span class="brand-mark">HZ</span>' +
        '<span><span class="brand-name">HazopDesk</span><br><span class="brand-sub">공정안전 위험성평가 플랫폼 (데모)</span></span></span>' +
        '<div class="spacer"></div>' +
        '<a class="btn sm" href="#/desktop">Windows 데스크톱</a>' +
        '<a class="btn sm primary" href="#/dashboard">데모 둘러보기</a>' +
      '</nav>' +
      '<section class="lp-hero">' +
        '<img src="assets/img/plant-1600.jpg" alt="공정 설비를 점검하는 작업자 (이미지 자리표시 · 실제 사업장 아님)">' +
        '<div class="veil"></div>' +
        '<div class="photo-credit">이미지: 생성형 이미지 자리표시 · 실제 사업장·설비가 아님 · 웹 최적화본 1600×900</div>' +
        '<div class="lp-hero-in">' +
          '<div>' +
            '<span class="lp-eyebrow">AI 초안 제안 → 전문가 검토·승인 워크플로우</span>' +
            '<h1>공정안전 위험성평가를<br><em>초안은 AI가</em>, 판단은 전문가가.</h1>' +
            '<p class="sub">공정 자료를 등록하면 AI가 HAZOP 워크시트 초안을 제안합니다. ' +
            '초안은 언제나 <b>초안 배지</b>로 구분되며, 공정안전 전문가의 <b>수정·승인·반려</b>를 거쳐야 확정됩니다. ' +
            '모든 변경은 리비전 이력으로 남습니다.</p>' +
            '<div class="lp-points">' +
              '<div class="lp-point"><b>표 기반 워크시트</b>셀 편집 · 행 추가/삭제/복사 · 정렬 · 필터</div>' +
              '<div class="lp-point"><b>검토 워크플로우</b>초안 → 검토중 → 승인/반려 상태 전이</div>' +
              '<div class="lp-point"><b>조직 데이터 분리</b>조직 · 워크스페이스 · 역할 3단 권한</div>' +
              '<div class="lp-point"><b>동일 코드 데스크톱</b>웹 UI 그대로 Windows 패키징</div>' +
            '</div>' +
          '</div>' +
          '<div class="login-card">' +
            '<h3>데모 로그인</h3>' +
            '<p class="lead">인증 서버가 없는 데모입니다. 아래에서 <b>역할</b>만 고르면 그 권한으로 화면이 열립니다. ' +
            '역할에 따라 승인·관리 버튼이 실제로 잠깁니다.</p>' +
            '<label>조직</label>' +
            '<select class="inp" id="loginOrg">' + D.orgs.map(function (o) {
              return '<option value="' + o.id + '"' + (o.id === S.org ? ' selected' : '') + '>' + esc(o.name) + '</option>';
            }).join('') + '</select>' +
            '<label>역할</label>' +
            '<div class="role-tabs" id="loginRoles">' +
              ['admin', 'analyst', 'reviewer'].map(function (r) {
                return '<button data-r="' + r + '"' + (S.role === r ? ' class="on"' : '') + '>' + esc(D.roles[r].label) + '</button>';
              }).join('') +
            '</div>' +
            '<div class="login-note" id="roleDesc">' + esc(D.roles[S.role].desc) + '</div>' +
            '<button class="btn primary" id="loginGo">선택한 역할로 시작</button>' +
            '<div class="login-note">아이디·비밀번호·이메일을 받지 않습니다. 데모 데이터는 브라우저 메모리에만 존재하며 새로고침 시 초기화됩니다.</div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="lp-sec">' +
        '<h2>AI 초안 → 전문가 확정까지 5단계</h2>' +
        '<p class="sub">AI는 초안만 제안합니다. 확정 권한은 전문가에게만 있습니다.</p>' +
        '<div class="flow">' +
          '<div class="flow-step"><div class="n">1</div><h4>자료 등록</h4><p>P&amp;ID · 절차서 · 설비 목록을 버전 단위로 등록합니다.</p></div>' +
          '<div class="flow-step ai"><div class="n">2</div><h4>AI 초안 제안</h4><p>노드·가이드워드 조합별로 이탈·원인·결과 초안을 생성하고 근거를 함께 남깁니다.</p></div>' +
          '<div class="flow-step"><div class="n">3</div><h4>전문가 검토</h4><p>초안 배지가 붙은 항목을 셀 단위로 수정합니다.</p></div>' +
          '<div class="flow-step"><div class="n">4</div><h4>승인 · 반려</h4><p>검토자가 위험등급을 확정하고 승인하거나 사유와 함께 반려합니다.</p></div>' +
          '<div class="flow-step"><div class="n">5</div><h4>리비전 확정</h4><p>모든 변경이 이력으로 남고 보고서 리비전으로 고정됩니다.</p></div>' +
        '</div>' +
      '</section>' +

      '<section class="lp-sec" style="padding-top:0">' +
        '<div class="feat-grid">' +
          '<div class="feat"><div class="ic">▦</div><h4>정보 밀도 높은 워크시트</h4>' +
          '<p>HAZOP 표준 컬럼(노드·가이드워드·이탈·원인·결과·기존 안전장치·위험등급·개선권고)을 한 화면에서 다룹니다. 셀 편집·행 조작·정렬·필터·검색이 표에서 바로 동작합니다.</p></div>' +
          '<div class="feat"><div class="ic">◑</div><h4>초안과 확정본의 구분</h4>' +
          '<p>AI가 만든 행은 초안 배지와 신뢰도·근거가 함께 표시됩니다. 승인 전에는 확정 데이터로 집계되지 않습니다.</p></div>' +
          '<div class="feat"><div class="ic">⧉</div><h4>웹과 데스크톱 동일 동작</h4>' +
          '<p>같은 화면 코드를 Windows 데스크톱으로 패키징합니다. 폐쇄망·오프라인 현장을 위한 배포 경로를 별도로 둡니다.</p></div>' +
        '</div>' +
        '<div class="lp-cta mt16"><a class="btn primary" href="#/dashboard">프로젝트 대시보드로 이동</a></div>' +
      '</section>' +

      '<footer class="lp-foot">제안용 데모 · 합성 데이터 — 실제 서비스가 아니며 실제 사업장·설비·평가 결과를 담고 있지 않습니다.<br>' +
      '연락처·회사 정보는 데모에 포함하지 않습니다.</footer>' +
    '</div>';
  }

  function bindLanding() {
    qs('#loginOrg').onchange = function () { S.org = this.value; };
    qsa('#loginRoles button').forEach(function (b) {
      b.onclick = function () {
        qsa('#loginRoles button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        S.role = b.dataset.r;
        qs('#roleDesc').textContent = D.roles[S.role].desc;
      };
    });
    qs('#loginGo').onclick = function () {
      var names = { admin: '강현우', analyst: '정민호', reviewer: '박서연' };
      if (S.org === 'ORG-B') names = { admin: '서지원', analyst: '윤태경', reviewer: '노현서' };
      S.userName = names[S.role];
      toast(D.roles[S.role].label + ' 권한으로 데모를 시작합니다');
      go('/dashboard');
    };
  }

  /* ==========================================================================
     2. 프로젝트 대시보드
     ========================================================================== */
  var dash = { q: '', state: '', sort: 'updated', view: 'card' };

  function viewDashboard() {
    return shell(
      '<div class="dash-hero">' +
        '<img src="assets/img/plant-1600.jpg" alt="공정 설비 (이미지 자리표시)">' +
        '<div class="ov">' +
          '<h2>' + esc(curOrg().name) + ' · 위험성평가 현황</h2>' +
          '<p>조직 내 진행 중인 평가 프로젝트와 검토 대기 항목을 한눈에 확인합니다.</p>' +
          '<div class="kpis" id="dashKpis"></div>' +
        '</div>' +
        '<div class="photo-note">이미지 자리표시 · 실제 사업장 아님</div>' +
      '</div>' +
      '<div class="page-head">' +
        '<div><h1 class="page-title">프로젝트 대시보드</h1>' +
        '<div class="page-desc">담당자·검토자, 진행 상태와 검토 상태, 최근 이력을 함께 봅니다.</div></div>' +
        '<div class="spacer"></div>' +
        '<button class="btn" id="btnNewProj">＋ 새 평가 프로젝트</button>' +
      '</div>' +
      '<div class="stat-row" id="statRow"></div>' +
      '<div class="toolbar standalone">' +
        '<div class="search-wrap"><span class="ic">⌕</span>' +
          '<input class="inp" id="dQ" placeholder="프로젝트명 · 코드 · 담당자 검색" value="' + esc(dash.q) + '"></div>' +
        '<div class="field"><label>상태</label>' +
          '<select class="inp" id="dState">' +
            '<option value="">전체</option>' +
            Object.keys(D.projStateLabel).map(function (k) {
              return '<option value="' + k + '"' + (dash.state === k ? ' selected' : '') + '>' + esc(D.projStateLabel[k]) + '</option>';
            }).join('') +
          '</select></div>' +
        '<div class="field"><label>정렬</label>' +
          '<select class="inp" id="dSort">' +
            '<option value="updated"' + (dash.sort === 'updated' ? ' selected' : '') + '>최근 수정순</option>' +
            '<option value="due"' + (dash.sort === 'due' ? ' selected' : '') + '>마감 임박순</option>' +
            '<option value="draft"' + (dash.sort === 'draft' ? ' selected' : '') + '>검토 대기 많은순</option>' +
            '<option value="name"' + (dash.sort === 'name' ? ' selected' : '') + '>이름순</option>' +
          '</select></div>' +
        '<div class="spacer"></div>' +
        '<div class="seg" id="dView">' +
          '<button data-v="card"' + (dash.view === 'card' ? ' class="on"' : '') + '>카드</button>' +
          '<button data-v="list"' + (dash.view === 'list' ? ' class="on"' : '') + '>목록</button>' +
        '</div>' +
      '</div>' +
      '<div id="projArea"></div>'
    );
  }

  function projStats(p) {
    var rs = rowsOf(p.id);
    var c = { draft: 0, review: 0, approved: 0, rejected: 0, high: 0 };
    rs.forEach(function (r) {
      c[r.st]++;
      if (riskOf(r).band >= 3) c.high++;
    });
    c.total = rs.length;
    c.pct = rs.length ? Math.round(c.approved / rs.length * 100) : 0;
    return c;
  }

  function dashFilteredProjects() {
    var list = orgProjects().slice();
    var q = dash.q.trim().toLowerCase();
    if (q) list = list.filter(function (p) {
      return (p.name + ' ' + p.id + ' ' + p.owner + ' ' + p.reviewer + ' ' + p.site).toLowerCase().indexOf(q) >= 0;
    });
    if (dash.state) list = list.filter(function (p) { return p.state === dash.state; });
    list.sort(function (a, b) {
      if (dash.sort === 'name') return a.name.localeCompare(b.name);
      if (dash.sort === 'due') return a.due.localeCompare(b.due);
      if (dash.sort === 'draft') return projStats(b).draft - projStats(a).draft;
      return b.updated.localeCompare(a.updated);
    });
    return list;
  }

  function renderDashArea() {
    var list = dashFilteredProjects();
    var area = qs('#projArea');
    if (!list.length) {
      area.innerHTML = '<div class="card"><div class="card-body" style="text-align:center;color:var(--ink-3);padding:44px">' +
        '조건에 맞는 프로젝트가 없습니다.</div></div>';
      return;
    }
    if (dash.view === 'card') {
      area.innerHTML = '<div class="grid-cards">' + list.map(function (p) {
        var c = projStats(p);
        var last = p.history[0];
        return '<article class="card pcard" data-p="' + p.id + '">' +
          '<div class="pcard-top">' +
            '<div class="row"><span class="pcard-code">' + esc(p.id) + ' · ' + esc(p.method) + '</span>' +
              '<div style="flex:1"></div><span class="badge ' + stateBadgeClass(p.state) + ' plain">' + esc(D.projStateLabel[p.state]) + '</span></div>' +
            '<h3 class="pcard-name">' + esc(p.name) + '</h3>' +
            '<div class="pcard-meta">' +
              '<span>사업장 <b>' + esc(p.site) + '</b></span>' +
              '<span>담당자 <b>' + esc(p.owner) + '</b></span>' +
              '<span>검토자 <b>' + esc(p.reviewer) + '</b></span>' +
              '<span>노드 <b>' + p.nodes + '</b></span>' +
              '<span>마감 <b>' + esc(p.due) + '</b></span>' +
            '</div>' +
            '<div class="pcard-bar"><i style="width:' + c.pct + '%"></i></div>' +
            '<div class="pcard-stat">' +
              (c.total
                ? '<span>승인 ' + c.approved + '/' + c.total + ' (' + c.pct + '%)</span>' +
                  (c.draft ? '<span class="badge draft" style="margin-left:4px">초안 ' + c.draft + '</span>' : '') +
                  (c.review ? '<span class="badge review">검토중 ' + c.review + '</span>' : '') +
                  (c.rejected ? '<span class="badge rejected">반려 ' + c.rejected + '</span>' : '')
                /* 이 데모는 3개 프로젝트에만 워크시트를 채웠다 — 없는 곳은 0% 대신 사실대로 표시 */
                : '<span class="muted">워크시트 데이터 미포함 (데모 범위 밖)</span>') +
            '</div>' +
          '</div>' +
          '<div class="pcard-foot"><span class="hist">최근 · ' + esc(last.t.slice(5)) + ' ' + esc(last.who) + ' — ' + esc(last.act) + '</span></div>' +
        '</article>';
      }).join('') + '</div>';
    } else {
      area.innerHTML = '<div class="table-wrap" style="border-radius:8px;max-height:none">' +
        '<table class="dt"><thead><tr>' +
          '<th class="col-id">코드</th><th>프로젝트</th><th class="tight">사업장</th>' +
          '<th class="tight">담당자</th><th class="tight">검토자</th>' +
          '<th class="tight">진행상태</th><th class="tight">검토상태</th>' +
          '<th class="tight">마감</th><th class="tight">최근 수정</th>' +
        '</tr></thead><tbody>' + list.map(function (p) {
          var c = projStats(p);
          return '<tr data-p="' + p.id + '" style="cursor:pointer">' +
            '<td class="rowid">' + esc(p.id) + '</td>' +
            '<td><b style="color:var(--ink)">' + esc(p.name) + '</b><div class="small muted">' + esc(p.history[0].act) + '</div></td>' +
            '<td class="tight">' + esc(p.site) + '</td>' +
            '<td class="tight">' + esc(p.owner) + '</td>' +
            '<td class="tight">' + esc(p.reviewer) + '</td>' +
            '<td class="tight"><span class="badge ' + stateBadgeClass(p.state) + ' plain">' + esc(D.projStateLabel[p.state]) + '</span></td>' +
            '<td class="tight">' + (c.total ? '승인 ' + c.approved + ' / 초안 ' + c.draft + ' / 검토중 ' + c.review : '<span class="muted">워크시트 준비 중</span>') + '</td>' +
            '<td class="tight num">' + esc(p.due) + '</td>' +
            '<td class="tight num muted">' + esc(p.updated) + '</td>' +
          '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    qsa('[data-p]', area).forEach(function (n) {
      n.onclick = function () {
        var pid = n.dataset.p;
        if (!rowsOf(pid).length) { toast('이 데모에서는 ' + pid + ' 의 워크시트 데이터를 준비하지 않았습니다', 'no'); return; }
        go('/workspace/' + pid);
      };
    });
  }

  function stateBadgeClass(s) {
    return s === 'done' ? 'approved' : s === 'review' ? 'review' : s === 'hold' ? 'rejected' : 'draft';
  }

  function renderDashHeader() {
    var ps = orgProjects();
    var t = { total: ps.length, draft: 0, review: 0, high: 0, approved: 0, rows: 0 };
    ps.forEach(function (p) {
      var c = projStats(p);
      t.draft += c.draft; t.review += c.review; t.high += c.high; t.approved += c.approved; t.rows += c.total;
    });
    qs('#dashKpis').innerHTML =
      '<div class="kpi"><div class="v">' + t.total + '</div><div class="l">평가 프로젝트</div></div>' +
      '<div class="kpi"><div class="v">' + t.draft + '</div><div class="l">AI 초안 대기</div></div>' +
      '<div class="kpi"><div class="v">' + t.review + '</div><div class="l">검토중 항목</div></div>' +
      '<div class="kpi"><div class="v">' + t.high + '</div><div class="l">위험등급 높음 이상</div></div>';
    qs('#statRow').innerHTML =
      '<div class="stat"><div class="l">전체 분석 항목</div><div class="v">' + t.rows + '<em> 행</em></div>' +
        '<div class="d">조직 ' + esc(curOrg().id) + ' 범위</div></div>' +
      '<div class="stat"><div class="l">승인 완료</div><div class="v">' + t.approved + '<em> 행</em></div>' +
        '<div class="d">전체 대비 ' + (t.rows ? Math.round(t.approved / t.rows * 100) : 0) + '%</div></div>' +
      '<div class="stat"><div class="l">검토 대기 (초안+검토중)</div><div class="v">' + (t.draft + t.review) + '<em> 행</em></div>' +
        '<div class="d">초안 ' + t.draft + ' · 검토중 ' + t.review + '</div></div>' +
      '<div class="stat"><div class="l">위험등급 높음 이상</div><div class="v">' + t.high + '<em> 행</em></div>' +
        '<div class="d">R ≥ 10 (5×5 매트릭스)</div></div>';
  }

  function bindDashboard() {
    renderDashHeader();
    renderDashArea();
    qs('#dQ').oninput = function () { dash.q = this.value; renderDashArea(); };
    qs('#dState').onchange = function () { dash.state = this.value; renderDashArea(); };
    qs('#dSort').onchange = function () { dash.sort = this.value; renderDashArea(); };
    qsa('#dView button').forEach(function (b) {
      b.onclick = function () {
        dash.view = b.dataset.v;
        qsa('#dView button').forEach(function (x) { x.classList.toggle('on', x === b); });
        renderDashArea();
      };
    });
    qs('#btnNewProj').onclick = function () {
      if (!can('manage')) { toast('프로젝트 생성은 관리자 권한이 필요합니다', 'no'); return; }
      toast('데모에서는 프로젝트 생성 화면을 제공하지 않습니다');
    };
  }

  /* ==========================================================================
     3. HAZOP 분석 워크스페이스 (핵심 화면)
     ========================================================================== */
  var COLS = [
    { k: 'node',  t: '노드',        cls: 'col-node',  sort: 1, edit: 0 },
    { k: 'guide', t: '가이드워드',   cls: 'col-guide', sort: 1, edit: 0 },
    { k: 'dev',   t: '이탈',        cls: 'col-dev',   sort: 1, edit: 1 },
    { k: 'cause', t: '원인',        cls: '',          sort: 0, edit: 1 },
    { k: 'conseq',t: '결과',        cls: '',          sort: 0, edit: 1 },
    { k: 'safeg', t: '기존 안전장치', cls: '',         sort: 0, edit: 1 },
    { k: 'risk',  t: '위험등급',     cls: 'col-risk',  sort: 1, edit: 0 },
    { k: 'rec',   t: '개선권고',     cls: '',          sort: 0, edit: 1 }
  ];

  function viewWorkspace(pid) {
    var p = project(pid);
    if (!p) return shell('<div class="note">프로젝트를 찾을 수 없습니다.</div>');
    return shell(
      crumb([{ t: '대시보드', href: '#/dashboard' }, { t: p.id + ' 워크스페이스' }]) +
      '<div class="page-head">' +
        '<div><h1 class="page-title">' + esc(p.name) + '</h1>' +
        '<div class="page-desc">' + esc(p.site) + ' · 평가기법 ' + esc(p.method) + ' · 담당자 ' + esc(p.owner) +
        ' · 검토자 ' + esc(p.reviewer) + ' · 노드 ' + p.nodes + '개</div></div>' +
        '<div class="spacer"></div>' +
        '<select class="inp" id="wsProj">' + orgProjects().filter(function (x) { return rowsOf(x.id).length; })
          .map(function (x) { return '<option value="' + x.id + '"' + (x.id === pid ? ' selected' : '') + '>' + esc(x.id + ' · ' + x.name) + '</option>'; }).join('') +
        '</select>' +
        '<a class="btn" href="#/review/' + pid + '">AI 초안 검토 화면</a>' +
      '</div>' +
      '<div class="note syn mb12"><span class="ic">⚠</span><span>이 워크시트의 노드·설비 태그·원인·결과·위험등급은 전부 <b>합성 데이터</b>입니다. ' +
      '실제 공정 자료가 아니며 실제 위험성평가 판단에 사용할 수 없습니다.</span></div>' +
      '<div class="node-strip" id="nodeStrip"></div>' +
      '<div class="ws" id="wsGrid">' +
        '<div>' +
          '<div id="bulkArea"></div>' +
          '<div class="toolbar">' +
            '<div class="search-wrap"><span class="ic">⌕</span>' +
              '<input class="inp" id="wQ" placeholder="이탈·원인·결과·권고 전체 검색" value="' + esc(S.ws.q) + '"></div>' +
            /* 노드 필터는 표 위 칩 스트립이 담당한다 (툴바 폭 절약) */
            '<div class="field"><label>상태</label><select class="inp" id="wStatus">' +
              '<option value="">전체</option>' + Object.keys(D.statusLabel).map(function (k) {
                return '<option value="' + k + '"' + (S.ws.status === k ? ' selected' : '') + '>' + esc(D.statusLabel[k]) + '</option>';
              }).join('') + '</select></div>' +
            '<div class="field"><label>위험등급</label><select class="inp" id="wRisk">' +
              '<option value="">전체</option>' +
              '<option value="4"' + (S.ws.risk === '4' ? ' selected' : '') + '>매우높음 (R≥15)</option>' +
              '<option value="3"' + (S.ws.risk === '3' ? ' selected' : '') + '>높음 (R 10~14)</option>' +
              '<option value="2"' + (S.ws.risk === '2' ? ' selected' : '') + '>보통 (R 5~9)</option>' +
              '<option value="1"' + (S.ws.risk === '1' ? ' selected' : '') + '>낮음 (R≤4)</option>' +
              '</select></div>' +
            '<div class="spacer"></div>' +
            '<button class="btn sm" id="wReset">필터 초기화</button>' +
            '<div class="seg" id="wDense">' +
              '<button data-d="1"' + (S.ws.dense ? ' class="on"' : '') + '>조밀</button>' +
              '<button data-d="0"' + (S.ws.dense ? '' : ' class="on"') + '>넓게</button>' +
            '</div>' +
            '<div class="sep"></div>' +
            '<button class="btn sm" id="wAdd">＋ 행 추가</button>' +
            '<button class="btn sm" id="wCopy">행 복사</button>' +
            '<button class="btn sm danger" id="wDel">행 삭제</button>' +
          '</div>' +
          '<div class="table-wrap" id="wTableWrap"></div>' +
          '<div class="table-foot" id="wFoot"></div>' +
        '</div>' +
        '<div class="ws-side" id="wsSide"></div>' +
      '</div>'
    );
  }

  function wsFiltered(pid) {
    var list = rowsOf(pid).slice();
    var f = S.ws;
    if (f.node) list = list.filter(function (r) { return r.node === f.node; });
    if (f.status) list = list.filter(function (r) { return r.st === f.status; });
    if (f.risk) list = list.filter(function (r) { return String(riskOf(r).band) === f.risk; });
    var q = f.q.trim().toLowerCase();
    if (q) list = list.filter(function (r) {
      return [r.id, r.node, r.guide, r.dev, r.cause, r.conseq, r.safeg, r.rec, r.owner]
        .join(' ').toLowerCase().indexOf(q) >= 0;
    });
    list.sort(function (a, b) {
      var av, bv;
      if (f.sortKey === 'risk') { av = riskOf(a).v; bv = riskOf(b).v; }
      else if (f.sortKey === 'status') { av = ['draft', 'review', 'rejected', 'approved'].indexOf(a.st); bv = ['draft', 'review', 'rejected', 'approved'].indexOf(b.st); }
      else { av = a[f.sortKey] || ''; bv = b[f.sortKey] || ''; }
      if (av < bv) return -1 * f.sortDir;
      if (av > bv) return 1 * f.sortDir;
      return a.id < b.id ? -1 : 1;
    });
    return list;
  }

  function badgeHtml(r) {
    var h = '<span class="badge ' + r.st + '">' + esc(D.statusLabel[r.st]) + '</span>';
    if (r.src === 'ai' && (r.st === 'draft' || r.st === 'rejected')) h += ' <span class="badge ai">AI</span>';
    return h;
  }

  function riskCellHtml(r) {
    var k = riskOf(r);
    return '<div class="risk-cell"><span class="risk r' + k.band + '">' + k.label + ' ' + k.v + '</span>' +
      '<span class="risk-sl">S' + r.s + ' × L' + r.l + '</span></div>';
  }

  function renderWsTable() {
    var pid = S.route.id;
    renderNodeStrip();               // 행 수·활성 노드가 바뀔 수 있으므로 함께 갱신
    var list = wsFiltered(pid);
    var head = '<table class="dt ws-table' + (S.ws.dense ? ' dense' : '') + '"><thead><tr>' +
      '<th class="col-chk"><input type="checkbox" class="rowchk" id="wAll"></th>' +
      '<th class="col-id sortable' + (S.ws.sortKey === 'id' ? ' sorted' : '') + '" data-s="id">항목 ID<span class="arw">' + (S.ws.sortKey === 'id' && S.ws.sortDir < 0 ? '▼' : '▲') + '</span></th>' +
      COLS.map(function (c) {
        var on = S.ws.sortKey === c.k;
        return '<th class="' + c.cls + (c.sort ? ' sortable' : '') + (on ? ' sorted' : '') + '"' + (c.sort ? ' data-s="' + c.k + '"' : '') + '>' +
          esc(c.t) + (c.sort ? '<span class="arw">' + (on && S.ws.sortDir < 0 ? '▼' : '▲') + '</span>' : '') + '</th>';
      }).join('') +
      '<th class="col-status sortable' + (S.ws.sortKey === 'status' ? ' sorted' : '') + '" data-s="status">상태<span class="arw">' + (S.ws.sortKey === 'status' && S.ws.sortDir < 0 ? '▼' : '▲') + '</span></th>' +
      '<th class="col-owner">담당</th>' +
      '<th class="col-rev">리비전</th>' +
    '</tr></thead><tbody>';

    var body = list.length ? list.map(function (r) {
      return '<tr data-r="' + r.id + '" class="' + (S.ws.sel[r.id] ? 'sel ' : '') +
        (r.st === 'draft' ? 'is-draft ' : r.st === 'rejected' ? 'is-rejected ' : '') +
        (S.ws.active === r.id ? 'active' : '') + '">' +
        '<td class="c"><input type="checkbox" class="rowchk" data-chk="' + r.id + '"' + (S.ws.sel[r.id] ? ' checked' : '') + '></td>' +
        '<td class="rowid">' + esc(r.id) + '</td>' +
        COLS.map(function (c) {
          if (c.k === 'risk') return '<td class="' + c.cls + '">' + riskCellHtml(r) + '</td>';
          if (!c.edit) return '<td class="' + c.cls + '">' + esc(c.k === 'node' ? r.node : r[c.k]) + '</td>';
          return '<td class="' + c.cls + '"><span class="cell-edit" contenteditable="true" spellcheck="false" ' +
            'data-r="' + r.id + '" data-f="' + c.k + '">' + esc(r[c.k]) + '</span></td>';
        }).join('') +
        '<td class="col-status" data-cell="st">' + badgeHtml(r) + '</td>' +
        '<td class="col-owner">' + esc(r.owner) + '</td>' +
        '<td class="col-rev c num" data-cell="rev">v' + r.rev + '</td>' +
      '</tr>';
    }).join('') : '<tr class="empty-row"><td colspan="' + (COLS.length + 5) + '">조건에 맞는 분석 항목이 없습니다. 필터를 조정하세요.</td></tr>';

    qs('#wTableWrap').innerHTML = head + body + '</tbody></table>';

    var all = rowsOf(pid);
    var cnt = { draft: 0, review: 0, approved: 0, rejected: 0 };
    all.forEach(function (r) { cnt[r.st]++; });
    var selN = Object.keys(S.ws.sel).filter(function (k) { return S.ws.sel[k]; }).length;
    qs('#wFoot').innerHTML =
      '<span>표시 <b>' + list.length + '</b> / 전체 <b>' + all.length + '</b> 행</span>' +
      '<span class="badge draft">초안 ' + cnt.draft + '</span>' +
      '<span class="badge review">검토중 ' + cnt.review + '</span>' +
      '<span class="badge approved">승인 ' + cnt.approved + '</span>' +
      '<span class="badge rejected">반려 ' + cnt.rejected + '</span>' +
      '<span class="spacer"></span>' +
      '<span>선택 ' + selN + '행</span>' +
      '<span class="muted">셀을 클릭하면 바로 편집됩니다 · 행을 클릭하면 우측에 상세·이력이 열립니다</span>';

    renderBulkbar();
    bindWsTable();

    /* 표를 다시 그린 뒤 전체선택 체크박스 상태를 현재 선택과 다시 맞춘다.
       (재렌더로 요소가 교체되면 checked 가 초기화되므로 여기서 복원) */
    var allBox = qs('#wAll');
    if (allBox) {
      var selVis = list.filter(function (r) { return S.ws.sel[r.id]; }).length;
      allBox.checked = list.length > 0 && selVis === list.length;
      allBox.indeterminate = selVis > 0 && selVis < list.length;
    }
  }

  function renderBulkbar() {
    var sel = Object.keys(S.ws.sel).filter(function (k) { return S.ws.sel[k]; });
    var area = qs('#bulkArea');
    if (!sel.length) { area.innerHTML = ''; return; }
    area.innerHTML = '<div class="bulkbar"><b>' + sel.length + '행 선택됨</b>' +
      '<span class="spacer"></span>' +
      '<button class="btn sm" data-b="approve"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>일괄 승인</button>' +
      '<button class="btn sm" data-b="reject"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>일괄 반려</button>' +
      '<button class="btn sm" data-b="submit">검토 상신</button>' +
      '<button class="btn sm" data-b="clear">선택 해제</button></div>';
    qsa('[data-b]', area).forEach(function (b) {
      b.onclick = function () { bulkAction(b.dataset.b, sel); };
    });
  }

  function bulkAction(kind, ids) {
    var pid = S.route.id;
    if (kind === 'clear') { S.ws.sel = {}; renderWsTable(); return; }
    if (kind === 'reject') { openRejectModal(pid, ids); return; }
    var n = 0;
    ids.forEach(function (id) {
      var r = findRow(pid, id);
      if (!r) return;
      if (kind === 'approve') {
        if (r.st === 'approved') return;
        r.st = 'approved'; r.rev++;
        r.hist.push({ t: now(), who: S.userName, act: '승인', note: '일괄 승인 처리', k: 'ok' });
      } else {
        if (r.st !== 'draft' && r.st !== 'rejected') return;
        r.st = 'review'; r.rev++;
        r.hist.push({ t: now(), who: S.userName, act: '검토 상신', note: '일괄 상신', k: '' });
      }
      n++;
    });
    S.ws.sel = {};
    touchProject(pid, (kind === 'approve' ? '항목 ' + n + '건 일괄 승인' : '항목 ' + n + '건 검토 상신'));
    renderWsTable(); renderWsSide();
    toast(n + '건 ' + (kind === 'approve' ? '승인' : '상신') + ' 처리 — 리비전 이력에 기록되었습니다');
  }

  function openRejectModal(pid, ids) {
    modal({
      title: ids.length > 1 ? ids.length + '건 반려' : ids[0] + ' 반려',
      ok: '반려 처리', danger: true,
      body: '<label>반려 사유 (검토 이력에 그대로 남습니다)</label>' +
        '<div class="reason-chips">' + D.rejectReasons.map(function (r) {
          return '<button type="button" data-rr="' + esc(r) + '">' + esc(r) + '</button>';
        }).join('') + '</div>' +
        '<textarea id="rejNote" placeholder="예: 원인 항목에 대한 근거 자료(도면 리비전)를 등록한 뒤 재상신 바랍니다."></textarea>',
      after: function (back) {
        qsa('[data-rr]', back).forEach(function (b) {
          b.onclick = function () {
            var ta = qs('#rejNote', back);
            ta.value = (ta.value ? ta.value + ' / ' : '') + b.dataset.rr;
            ta.focus();
          };
        });
      },
      onOk: function (back) {
        var note = qs('#rejNote', back).value.trim();
        if (!note) { toast('반려 사유를 입력하세요', 'no'); return false; }
        var n = 0;
        ids.forEach(function (id) {
          var r = findRow(pid, id);
          if (!r) return;
          r.st = 'rejected'; r.rev++;
          r.hist.push({ t: now(), who: S.userName, act: '반려', note: note, k: 'no' });
          n++;
        });
        S.ws.sel = {};
        touchProject(pid, '항목 ' + n + '건 반려');
        if (S.route.name === 'workspace') { renderWsTable(); renderWsSide(); }
        else { renderReviewQueue(); renderReviewPanel(); }
        toast(n + '건 반려 — 사유가 이력에 기록되었습니다', 'no');
      }
    });
  }

  function touchProject(pid, act) {
    var p = project(pid);
    if (!p) return;
    p.updated = now();
    p.history.unshift({ t: p.updated, who: S.userName, act: act });
    if (p.history.length > 6) p.history.pop();
  }

  function bindWsTable() {
    var pid = S.route.id;

    qsa('#wTableWrap th[data-s]').forEach(function (th) {
      th.onclick = function () {
        var k = th.dataset.s;
        if (S.ws.sortKey === k) S.ws.sortDir *= -1; else { S.ws.sortKey = k; S.ws.sortDir = 1; }
        renderWsTable();
      };
    });

    qs('#wAll').onclick = function () {
      var on = this.checked;
      wsFiltered(pid).forEach(function (r) { S.ws.sel[r.id] = on; });
      renderWsTable();
    };
    qsa('#wTableWrap [data-chk]').forEach(function (c) {
      c.onclick = function (e) {
        e.stopPropagation();
        S.ws.sel[c.dataset.chk] = c.checked;
        c.closest('tr').classList.toggle('sel', c.checked);
        renderBulkbar();
        var selN = Object.keys(S.ws.sel).filter(function (k) { return S.ws.sel[k]; }).length;
        var foot = qs('#wFoot');
        if (foot) foot.children[6].textContent = '선택 ' + selN + '행';
      };
    });

    /* 행 선택 → 우측 상세·이력 */
    qsa('#wTableWrap tbody tr[data-r]').forEach(function (tr) {
      tr.onclick = function (e) {
        if (e.target.closest('.cell-edit') || e.target.closest('input')) return;
        S.ws.active = tr.dataset.r;
        qsa('#wTableWrap tbody tr').forEach(function (x) { x.classList.remove('active'); });
        tr.classList.add('active');
        renderWsSide();
      };
    });

    /* 셀 편집: blur 시점에만 커밋한다. 표를 통째로 다시 그리면 다음 클릭 대상이
       사라져 조작이 끊기므로, 변경된 행의 파생 셀만 직접 갱신한다. */
    qsa('#wTableWrap .cell-edit').forEach(function (span) {
      span.addEventListener('focus', function () { span.dataset.prev = span.innerText; });
      span.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { span.innerText = span.dataset.prev; span.blur(); }
        if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
      });
      span.addEventListener('blur', function () {
        var before = span.dataset.prev == null ? '' : span.dataset.prev;
        var after = span.innerText.replace(/\s+$/, '');
        if (before === after) return;
        commitCell(pid, span.dataset.r, span.dataset.f, before, after, span);
      });
    });
  }

  function commitCell(pid, rid, field, before, after, span) {
    var r = findRow(pid, rid);
    if (!r) return;
    r[field] = after;
    r.rev++;
    var wasApproved = r.st === 'approved';
    if (r.st === 'approved') r.st = 'review';       // 승인본 수정 시 재검토 대상으로 되돌린다
    if (r.st === 'draft') r.st = 'review';          // AI 초안을 사람이 손대면 검토중으로 승격
    var label = { dev: '이탈', cause: '원인', conseq: '결과', safeg: '기존 안전장치', rec: '개선권고' }[field] || field;
    r.hist.push({
      t: now(), who: S.userName, act: '셀 수정 · ' + label,
      note: '', k: 'ed', diff: { before: before, after: after }
    });

    var tr = span.closest('tr');
    span.closest('td').classList.add('edited');
    tr.className = tr.className.replace(/is-draft|is-rejected/g, '');
    var stCell = qs('[data-cell="st"]', tr);
    if (stCell) stCell.innerHTML = badgeHtml(r);
    var revCell = qs('[data-cell="rev"]', tr);
    if (revCell) revCell.textContent = 'v' + r.rev;
    span.dataset.prev = after;

    S.ws.active = rid;
    renderWsSide();
    touchProject(pid, rid + ' ' + label + ' 수정');
    toast(rid + ' · ' + label + ' 수정됨 → 리비전 v' + r.rev + (wasApproved ? ' (승인본 수정 → 검토중 전환)' : ''));
  }

  /* 노드 칩 스트립 — 표 위에 상시 노출되는 노드 필터 */
  function renderNodeStrip() {
    var pid = S.route.id;
    var strip = qs('#nodeStrip');
    if (!strip) return;
    var ns = D.nodes[pid] || [];
    var rs = rowsOf(pid);
    strip.innerHTML =
      '<div class="node-chip' + (S.ws.node ? '' : ' on') + '" data-node="">전체 노드' +
      '<span class="n">' + rs.length + '</span></div>' +
      ns.map(function (n) {
        var c = rs.filter(function (r) { return r.node === n.id; }).length;
        return '<div class="node-chip' + (S.ws.node === n.id ? ' on' : '') + '" data-node="' + n.id + '" title="' + esc(n.design) + '">' +
          '<b>' + esc(n.id) + '</b><span>' + esc(n.name) + '</span><span class="n">' + c + '</span></div>';
      }).join('');
    qsa('[data-node]', strip).forEach(function (chip) {
      chip.onclick = function () {
        S.ws.node = chip.dataset.node;
        renderWsTable();   // 표 렌더가 스트립 활성 상태도 함께 갱신한다
      };
    });
  }

  function renderWsSide() {
    var pid = S.route.id;
    var side = qs('#wsSide');
    var grid = qs('#wsGrid');
    if (!side || !grid) return;
    var r = S.ws.active ? findRow(pid, S.ws.active) : null;
    /* 행을 고르기 전에는 표가 전폭을 쓴다(밀도 우선) */
    grid.classList.toggle('solo', !r);
    if (!r) { side.innerHTML = ''; return; }
    var k = riskOf(r);
    side.innerHTML =
      '<div class="card">' +
        '<div class="card-head"><h3>' + esc(r.id) + '</h3><div class="spacer"></div>' + badgeHtml(r) +
          '<button class="btn ghost xs" data-a="close" title="상세 닫기">✕</button></div>' +
        '<div class="card-body">' +
          '<dl class="kv">' +
            '<dt>노드</dt><dd>' + esc(r.node) + ' · ' + esc(nodeName(pid, r.node)) + '</dd>' +
            '<dt>공정변수</dt><dd>' + esc(r.param) + '</dd>' +
            '<dt>가이드워드</dt><dd>' + esc(r.guide) + '</dd>' +
            '<dt>이탈</dt><dd>' + esc(r.dev) + '</dd>' +
            '<dt>담당</dt><dd>' + esc(r.owner) + '</dd>' +
            '<dt>리비전</dt><dd>v' + r.rev + ' · 이력 ' + r.hist.length + '건</dd>' +
          '</dl>' +
          (r.src === 'ai' ? '<hr class="sep"><div class="row" style="gap:6px"><span class="badge ai">AI 제안</span>' +
            '<span class="conf">신뢰도 <i><b style="width:' + Math.round((r.conf || 0) * 100) + '%"></b></i> ' + (r.conf || 0).toFixed(2) + '</span></div>' +
            (r.why ? '<div class="small muted mt8">' + esc(r.why) + '</div>' : '') : '') +
          '<hr class="sep">' +
          '<div class="row mb8"><b class="small">위험등급 (5×5)</b><span class="spacer" style="flex:1"></span>' +
            '<span class="risk r' + k.band + '">' + k.label + ' ' + k.v + '</span></div>' +
          riskMatrix(r) +
          '<div class="matrix-note mt8">셀을 클릭하면 심각도(S)·발생가능성(L)이 변경되고 이력에 기록됩니다.' +
          (can('approve') ? '' : ' 현재 역할(' + esc(D.roles[S.role].label) + ')은 등급 확정 권한이 없습니다.') + '</div>' +
        '</div>' +
        '<div class="rev-actions">' +
          '<button class="btn sm primary" data-a="approve"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>승인</button>' +
          '<button class="btn sm danger" data-a="reject"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>반려</button>' +
          '<span class="spacer"></span>' +
          '<button class="btn sm" data-a="submit">검토 상신</button>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-head"><h3>리비전 이력</h3><div class="spacer"></div><span class="small muted">' + r.hist.length + '건</span></div>' +
        '<div class="card-body"><div class="tl">' + r.hist.slice().reverse().map(function (h) {
          return '<div class="tl-item ' + (h.k || '') + '">' +
            '<div class="tl-act">' + esc(h.act) + '</div>' +
            '<div class="tl-meta">' + esc(h.t) + ' · ' + esc(h.who) + '</div>' +
            (h.note ? '<div class="tl-note">' + esc(h.note) + '</div>' : '') +
            (h.diff ? '<div class="tl-diff"><span class="del">' + esc(cut(h.diff.before)) + '</span><br>' +
              '<span class="add">' + esc(cut(h.diff.after)) + '</span></div>' : '') +
          '</div>';
        }).join('') + '</div></div>' +
      '</div>';

    qsa('[data-a]', side).forEach(function (b) {
      b.onclick = function () {
        if (b.dataset.a === 'close') {
          S.ws.active = null;
          qsa('#wTableWrap tbody tr').forEach(function (x) { x.classList.remove('active'); });
          renderWsSide();
          return;
        }
        singleAction(b.dataset.a, r.id);
      };
    });
    qsa('.rmx .cell', side).forEach(function (c) {
      c.onclick = function () {
        if (!can('approve')) { toast('위험등급 확정은 검토자·관리자 권한이 필요합니다', 'no'); return; }
        var s = +c.dataset.s, l = +c.dataset.l;
        if (s === r.s && l === r.l) return;
        var beforeK = riskOf(r);
        r.s = s; r.l = l; r.rev++;
        var afterK = riskOf(r);
        r.hist.push({
          t: now(), who: S.userName, act: '위험등급 조정', k: 'ed',
          note: 'S' + s + ' × L' + l + ' = ' + afterK.v + ' (' + afterK.label + ')',
          diff: { before: beforeK.label + ' ' + beforeK.v, after: afterK.label + ' ' + afterK.v }
        });
        touchProject(S.route.id, r.id + ' 위험등급 조정');
        renderWsTable(); renderWsSide();
        toast(r.id + ' 위험등급 → ' + afterK.label + ' (R=' + afterK.v + ')');
      };
    });
  }

  function cut(s) { s = String(s || ''); return s.length > 90 ? s.slice(0, 90) + '…' : s; }

  function nodeName(pid, nid) {
    var ns = D.nodes[pid] || [];
    for (var i = 0; i < ns.length; i++) if (ns[i].id === nid) return ns[i].name;
    return '';
  }

  function riskMatrix(r) {
    var h = '<div class="rmx"><div></div>';
    for (var l = 1; l <= 5; l++) h += '<div class="hdr">L' + l + '</div>';
    for (var s = 5; s >= 1; s--) {
      h += '<div class="hdr">S' + s + '</div>';
      for (var l2 = 1; l2 <= 5; l2++) {
        var v = s * l2;
        var band = v >= 15 ? 4 : v >= 10 ? 3 : v >= 5 ? 2 : 1;
        h += '<div class="cell r' + band + (r.s === s && r.l === l2 ? ' on' : '') + '" data-s="' + s + '" data-l="' + l2 + '">' + v + '</div>';
      }
    }
    return h + '</div>';
  }

  function singleAction(kind, rid) {
    var pid = S.route.id;
    var r = findRow(pid, rid);
    if (!r) return;
    if (kind === 'reject') {
      if (!can('approve')) { toast('반려는 검토자·관리자 권한이 필요합니다', 'no'); return; }
      openRejectModal(pid, [rid]); return;
    }
    if (kind === 'approve') {
      if (!can('approve')) { toast('승인은 검토자·관리자 권한이 필요합니다', 'no'); return; }
      if (r.st === 'approved') { toast('이미 승인된 항목입니다', 'no'); return; }
      r.st = 'approved'; r.rev++;
      r.hist.push({ t: now(), who: S.userName, act: '승인', note: '위험등급 ' + riskOf(r).label + ' (R=' + riskOf(r).v + ') 확정', k: 'ok' });
      touchProject(pid, rid + ' 승인');
      toast(rid + ' 승인 — 확정 데이터로 집계됩니다');
    } else {
      if (r.st === 'review') { toast('이미 검토중 상태입니다', 'no'); return; }
      r.st = 'review'; r.rev++;
      r.hist.push({ t: now(), who: S.userName, act: '검토 상신', note: '', k: '' });
      touchProject(pid, rid + ' 검토 상신');
      toast(rid + ' 검토 상신');
    }
    if (S.route.name === 'workspace') { renderWsTable(); renderWsSide(); }
    else { renderReviewQueue(); renderReviewPanel(); }
  }

  function bindWorkspace() {
    renderNodeStrip();
    renderWsTable();
    renderWsSide();
    qs('#wsProj').onchange = function () { S.ws.sel = {}; S.ws.active = null; go('/workspace/' + this.value); };
    qs('#wQ').oninput = function () { S.ws.q = this.value; renderWsTable(); };
    qs('#wStatus').onchange = function () { S.ws.status = this.value; renderWsTable(); };
    qs('#wRisk').onchange = function () { S.ws.risk = this.value; renderWsTable(); };
    qs('#wReset').onclick = function () {
      S.ws.node = ''; S.ws.status = ''; S.ws.risk = ''; S.ws.q = '';
      qs('#wQ').value = ''; qs('#wStatus').value = ''; qs('#wRisk').value = '';
      renderNodeStrip(); renderWsTable();
    };
    qsa('#wDense button').forEach(function (b) {
      b.onclick = function () {
        S.ws.dense = b.dataset.d === '1';
        qsa('#wDense button').forEach(function (x) { x.classList.toggle('on', x === b); });
        renderWsTable();
      };
    });
    qs('#wAdd').onclick = addRow;
    qs('#wCopy').onclick = copyRows;
    qs('#wDel').onclick = deleteRows;
  }

  function nextRowId(pid) {
    var max = 0;
    rowsOf(pid).forEach(function (r) {
      var m = /(\d+)$/.exec(r.id);
      if (m) max = Math.max(max, +m[1]);
    });
    return 'HZ-' + String(max + 1).padStart(4, '0');
  }

  function addRow() {
    var pid = S.route.id;
    if (!can('edit')) { toast('편집 권한이 없습니다', 'no'); return; }
    var node = S.ws.node || (D.nodes[pid] || [{ id: 'N-01' }])[0].id;
    var id = nextRowId(pid);
    var r = {
      id: id, node: node, param: '유량', guide: '없음 (No)', dev: '(이탈 내용을 입력하세요)',
      cause: '', conseq: '', safeg: '', s: 1, l: 1, rec: '', owner: S.userName,
      st: 'review', src: 'human', rev: 1,
      hist: [{ t: now(), who: S.userName, act: '행 추가', note: '노드 ' + node + ' 에 신규 분석 항목 생성', k: '' }]
    };
    rowsOf(pid).push(r);
    S.ws.active = id;
    touchProject(pid, id + ' 행 추가');
    renderWsTable(); renderWsSide();
    var el = qs('#wTableWrap tr[data-r="' + id + '"]');
    if (el) el.scrollIntoView({ block: 'center' });
    toast(id + ' 행이 추가되었습니다 (검토중 상태로 생성)');
  }

  function copyRows() {
    var pid = S.route.id;
    var ids = Object.keys(S.ws.sel).filter(function (k) { return S.ws.sel[k]; });
    if (!ids.length && S.ws.active) ids = [S.ws.active];
    if (!ids.length) { toast('복사할 행을 선택하세요 (체크박스 또는 행 클릭)', 'no'); return; }
    var made = [];
    ids.forEach(function (src) {
      var o = findRow(pid, src);
      if (!o) return;
      var c = clone(o);
      c.id = nextRowId(pid);
      c.st = 'review'; c.src = 'human'; c.rev = 1;
      delete c.conf; delete c.why; delete c.refs;
      c.hist = [{ t: now(), who: S.userName, act: '행 복사', note: src + ' 항목을 복제해 생성', k: '' }];
      rowsOf(pid).push(c);
      made.push(c.id);
    });
    S.ws.sel = {};
    S.ws.active = made[made.length - 1];
    touchProject(pid, '행 ' + made.length + '건 복사');
    renderWsTable(); renderWsSide();
    toast(made.length + '건 복사 — ' + made.join(', '));
  }

  function deleteRows() {
    var pid = S.route.id;
    var ids = Object.keys(S.ws.sel).filter(function (k) { return S.ws.sel[k]; });
    if (!ids.length && S.ws.active) ids = [S.ws.active];
    if (!ids.length) { toast('삭제할 행을 선택하세요', 'no'); return; }
    modal({
      title: '분석 항목 삭제', ok: '삭제', danger: true,
      body: '<p class="small">다음 ' + ids.length + '개 항목을 워크시트에서 삭제합니다.</p>' +
        '<div class="note mt8"><span class="ic">ℹ</span><span>' + esc(ids.join(', ')) + '</span></div>' +
        '<div class="note syn mt8"><span class="ic">⚠</span><span>데모에서는 메모리에서만 제거됩니다. ' +
        '실제 구현에서는 삭제도 리비전 이력으로 남기는 소프트 삭제를 권장합니다.</span></div>',
      onOk: function () {
        store.rows[pid] = rowsOf(pid).filter(function (r) { return ids.indexOf(r.id) < 0; });
        S.ws.sel = {}; S.ws.active = null;
        touchProject(pid, '행 ' + ids.length + '건 삭제');
        renderWsTable(); renderWsSide();
        toast(ids.length + '건 삭제되었습니다', 'no');
      }
    });
  }

  /* ==========================================================================
     4. AI 초안 제안 → 검토·승인 워크플로우
     ========================================================================== */
  function viewReview(pid) {
    var p = project(pid);
    if (!p) return shell('<div class="note">프로젝트를 찾을 수 없습니다.</div>');
    return shell(
      crumb([{ t: '대시보드', href: '#/dashboard' }, { t: p.id, href: '#/workspace/' + pid }, { t: 'AI 초안 검토' }]) +
      '<div class="page-head">' +
        '<div><h1 class="page-title">AI 초안 검토 · 승인</h1>' +
        '<div class="page-desc">AI가 제안한 초안을 전문가가 수정·승인·반려합니다. 처리 결과는 워크시트 표에 즉시 반영됩니다.</div></div>' +
        '<div class="spacer"></div>' +
        '<button class="btn" id="rvGen">AI 초안 생성 요청</button>' +
        '<a class="btn primary" href="#/workspace/' + pid + '">워크시트로 이동</a>' +
      '</div>' +
      '<div class="note syn mb12"><span class="ic">⚠</span><span>이 데모는 <b>LLM을 호출하지 않습니다.</b> ' +
      '“AI 초안”은 미리 준비한 합성 데이터이며, 신뢰도·근거 표시는 실제 구현 시의 화면 구조를 보여주기 위한 것입니다.</span></div>' +
      '<div class="rev-layout">' +
        '<div class="card">' +
          '<div class="card-head"><h3>검토 큐</h3><div class="spacer"></div><span class="small muted" id="rvCount"></span></div>' +
          '<div class="toolbar" style="border:0;border-bottom:1px solid var(--line);border-radius:0;padding:8px 10px">' +
            '<div class="seg" id="rvFilter">' +
              '<button data-f="draft">초안</button><button data-f="review">검토중</button>' +
              '<button data-f="rejected">반려</button><button data-f="">전체</button>' +
            '</div>' +
          '</div>' +
          '<div class="queue" id="rvQueue"></div>' +
        '</div>' +
        '<div id="rvPanel"></div>' +
      '</div>'
    );
  }

  function rvList() {
    var pid = S.route.id;
    var list = rowsOf(pid).slice();
    if (S.rv.filter) list = list.filter(function (r) { return r.st === S.rv.filter; });
    /* AI 초안 우선 · 신뢰도 낮은 항목이 위로 (사람 확인이 더 필요한 순) */
    list.sort(function (a, b) {
      if ((b.src === 'ai') - (a.src === 'ai')) return (b.src === 'ai') - (a.src === 'ai');
      return (a.conf || 1) - (b.conf || 1);
    });
    return list;
  }

  function renderReviewQueue() {
    var list = rvList();
    var q = qs('#rvQueue');
    if (!q) return;
    qsa('#rvFilter button').forEach(function (b) { b.classList.toggle('on', b.dataset.f === S.rv.filter); });
    if (!list.length) {
      q.innerHTML = '<div class="detail-empty">해당 상태의 항목이 없습니다.</div>';
    } else {
      q.innerHTML = list.map(function (r) {
        var k = riskOf(r);
        return '<div class="qitem' + (S.rv.active === r.id ? ' on' : '') + '" data-q="' + r.id + '">' +
          '<div class="row"><span class="qid">' + esc(r.id) + ' · ' + esc(r.node) + '</span>' +
          '<span class="spacer" style="flex:1"></span>' + badgeHtml(r) + '</div>' +
          '<div class="qdev">' + esc(r.dev) + '</div>' +
          '<div class="qmeta"><span class="risk r' + k.band + '">' + k.label + ' ' + k.v + '</span>' +
          (r.src === 'ai' ? '<span class="conf">신뢰도 <i><b style="width:' + Math.round((r.conf || 0) * 100) + '%"></b></i>' +
            (r.conf || 0).toFixed(2) + '</span>' : '<span class="conf">전문가 작성</span>') + '</div>' +
        '</div>';
      }).join('');
    }
    var pid = S.route.id;
    var all = rowsOf(pid);
    qs('#rvCount').textContent = list.length + '건 / 전체 ' + all.length + '건';
    qsa('[data-q]', q).forEach(function (n) {
      n.onclick = function () { S.rv.active = n.dataset.q; S.rv.dirty = {}; renderReviewQueue(); renderReviewPanel(); };
    });
  }

  function renderReviewPanel() {
    var pid = S.route.id;
    var panel = qs('#rvPanel');
    if (!panel) return;
    var list = rvList();
    if (S.rv.active && !findRow(pid, S.rv.active)) S.rv.active = null;
    if (!S.rv.active) S.rv.active = list.length ? list[0].id : null;
    var r = S.rv.active ? findRow(pid, S.rv.active) : null;
    if (!r) {
      panel.innerHTML = '<div class="card"><div class="detail-empty">검토할 항목을 선택하세요.</div></div>';
      return;
    }
    var k = riskOf(r);
    var fields = [
      { k: 'dev', t: '이탈 (Deviation)' }, { k: 'cause', t: '원인 (Cause)' },
      { k: 'conseq', t: '결과 (Consequence)' }, { k: 'safeg', t: '기존 안전장치 (Safeguard)' },
      { k: 'rec', t: '개선권고 (Recommendation)' }
    ];
    panel.innerHTML =
      '<div class="card">' +
        '<div class="card-head">' +
          '<h3>' + esc(r.id) + ' · ' + esc(r.node) + ' ' + esc(nodeName(pid, r.node)) + '</h3>' +
          '<div class="spacer"></div>' + badgeHtml(r) +
        '</div>' +
        '<div class="card-body">' +
          '<div class="rev-grid mb12">' +
            '<div class="rev-field"><label>공정변수 / 가이드워드</label><div class="val">' + esc(r.param) + ' · ' + esc(r.guide) + '</div></div>' +
            '<div class="rev-field"><label>담당 / 현재 리비전</label><div class="val">' + esc(r.owner) + ' · v' + r.rev + '</div></div>' +
          '</div>' +
          fields.map(function (f) {
            return '<div class="rev-field mb8" data-ff="' + f.k + '"><label>' + esc(f.t) + '</label>' +
              '<textarea data-edit="' + f.k + '" rows="' + (f.k === 'dev' ? 1 : 2) + '">' + esc(r[f.k]) + '</textarea></div>';
          }).join('') +
          '<div class="rev-grid mt12">' +
            '<div>' +
              '<div class="row mb8"><b class="small">위험등급 (5×5)</b><span class="spacer" style="flex:1"></span>' +
                '<span class="risk r' + k.band + '">' + k.label + ' ' + k.v + '</span></div>' +
              riskMatrix(r) +
              '<div class="matrix-note mt8">S(심각도) × L(발생가능성). 클릭해 조정하면 이력에 남습니다.</div>' +
            '</div>' +
            '<div>' +
              '<div class="row mb8"><b class="small">AI 판단 근거</b>' +
                (r.src === 'ai' ? '<span class="spacer" style="flex:1"></span><span class="conf">신뢰도 <i><b style="width:' +
                  Math.round((r.conf || 0) * 100) + '%"></b></i>' + (r.conf || 0).toFixed(2) + '</span>' : '') + '</div>' +
              (r.src === 'ai'
                ? '<div class="evidence">' + (r.refs || []).map(function (e) {
                    return '<div class="ev-item"><span class="tag">' + esc(e.tag) + '</span><span>' + esc(e.name) + '</span>' +
                      '<span class="spacer"></span><span class="loc">' + esc(e.loc) + '</span></div>';
                  }).join('') + '</div>' +
                  '<div class="note mt8"><span class="ic">ℹ</span><span>' + esc(r.why || '') + '</span></div>'
                : '<div class="note"><span class="ic">ℹ</span><span>전문가가 직접 작성한 항목입니다. AI 근거가 없습니다.</span></div>') +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="rev-actions">' +
          '<button class="btn sm" id="rvSave">수정 저장</button>' +
          '<span class="small muted" id="rvDirty"></span>' +
          '<span class="spacer"></span>' +
          '<button class="btn sm" id="rvSubmit">검토 상신</button>' +
          '<button class="btn sm danger" id="rvReject"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>반려</button>' +
          '<button class="btn sm primary" id="rvApprove"' + (can('approve') ? '' : ' disabled title="검토자·관리자 권한 필요"') + '>승인하고 다음</button>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-head"><h3>리비전 이력</h3><div class="spacer"></div><span class="small muted">' + r.hist.length + '건</span></div>' +
        '<div class="card-body"><div class="tl">' + r.hist.slice().reverse().map(function (h) {
          return '<div class="tl-item ' + (h.k || '') + '">' +
            '<div class="tl-act">' + esc(h.act) + '</div>' +
            '<div class="tl-meta">' + esc(h.t) + ' · ' + esc(h.who) + '</div>' +
            (h.note ? '<div class="tl-note">' + esc(h.note) + '</div>' : '') +
            (h.diff ? '<div class="tl-diff"><span class="del">' + esc(cut(h.diff.before)) + '</span><br>' +
              '<span class="add">' + esc(cut(h.diff.after)) + '</span></div>' : '') +
          '</div>';
        }).join('') + '</div></div>' +
      '</div>';

    /* 필드 변경 감지 → "수정됨" 표시 */
    qsa('[data-edit]', panel).forEach(function (ta) {
      ta.oninput = function () {
        var f = ta.dataset.edit;
        var changed = ta.value !== r[f];
        S.rv.dirty[f] = changed ? ta.value : undefined;
        ta.closest('.rev-field').classList.toggle('changed', changed);
        var n = Object.keys(S.rv.dirty).filter(function (x) { return S.rv.dirty[x] !== undefined; }).length;
        qs('#rvDirty').textContent = n ? n + '개 항목 수정됨 (저장 전)' : '';
      };
    });

    qsa('.rmx .cell', panel).forEach(function (c) {
      c.onclick = function () {
        if (!can('approve')) { toast('위험등급 확정은 검토자·관리자 권한이 필요합니다', 'no'); return; }
        var s = +c.dataset.s, l = +c.dataset.l;
        if (s === r.s && l === r.l) return;
        var b = riskOf(r); r.s = s; r.l = l; r.rev++;
        var a = riskOf(r);
        r.hist.push({ t: now(), who: S.userName, act: '위험등급 조정', k: 'ed',
          note: 'S' + s + ' × L' + l + ' = ' + a.v, diff: { before: b.label + ' ' + b.v, after: a.label + ' ' + a.v } });
        touchProject(pid, r.id + ' 위험등급 조정');
        renderReviewQueue(); renderReviewPanel();
        toast(r.id + ' 위험등급 → ' + a.label + ' (R=' + a.v + ')');
      };
    });

    qs('#rvSave').onclick = function () { saveReviewEdits(r, false); };
    qs('#rvSubmit').onclick = function () { saveReviewEdits(r, false, true); singleAction('submit', r.id); };
    qs('#rvReject').onclick = function () { openRejectModal(pid, [r.id]); };
    qs('#rvApprove').onclick = function () {
      if (!can('approve')) { toast('승인은 검토자·관리자 권한이 필요합니다', 'no'); return; }
      saveReviewEdits(r, true);
      var before = rvList().map(function (x) { return x.id; });
      var idx = before.indexOf(r.id);
      r.st = 'approved'; r.rev++;
      r.hist.push({ t: now(), who: S.userName, act: '승인', note: '위험등급 ' + riskOf(r).label + ' (R=' + riskOf(r).v + ') 확정 · AI 초안 검토 완료', k: 'ok' });
      touchProject(pid, r.id + ' 승인 (AI 초안 검토)');
      var next = rvList();
      S.rv.active = next.length ? (next[Math.min(idx, next.length - 1)] || next[0]).id : null;
      S.rv.dirty = {};
      renderReviewQueue(); renderReviewPanel();
      toast(r.id + ' 승인 완료 — 워크시트에 확정 반영되었습니다');
    };
  }

  function saveReviewEdits(r, silent, skipRender) {
    var changed = [];
    Object.keys(S.rv.dirty).forEach(function (f) {
      var v = S.rv.dirty[f];
      if (v === undefined || v === r[f]) return;
      var label = { dev: '이탈', cause: '원인', conseq: '결과', safeg: '기존 안전장치', rec: '개선권고' }[f] || f;
      r.hist.push({ t: now(), who: S.userName, act: '초안 수정 · ' + label, k: 'ed', note: '',
        diff: { before: r[f], after: v } });
      r[f] = v;
      changed.push(label);
    });
    if (!changed.length) { if (!silent) toast('변경된 내용이 없습니다', 'no'); return 0; }
    r.rev++;
    if (r.st === 'draft') r.st = 'review';
    S.rv.dirty = {};
    touchProject(S.route.id, r.id + ' 초안 수정 (' + changed.join(', ') + ')');
    if (!skipRender) { renderReviewQueue(); renderReviewPanel(); }
    if (!silent) toast(changed.length + '개 항목 저장 — 리비전 v' + r.rev + ' · 상태 ' + D.statusLabel[r.st]);
    return changed.length;
  }

  function bindReview() {
    renderReviewQueue();
    renderReviewPanel();
    qsa('#rvFilter button').forEach(function (b) {
      b.onclick = function () { S.rv.filter = b.dataset.f; S.rv.active = null; renderReviewQueue(); renderReviewPanel(); };
    });
    qs('#rvGen').onclick = function () {
      if (!can('edit')) { toast('초안 생성 요청 권한이 없습니다', 'no'); return; }
      modal({
        title: 'AI 초안 생성 요청', ok: '요청 (데모)',
        body: '<p class="small">실제 구현에서는 등록된 자료 리비전을 근거로 LLM 이 노드·가이드워드 조합별 초안을 생성합니다.</p>' +
          '<div class="note syn mt8"><span class="ic">⚠</span><span>이 데모에는 LLM 연동이 없습니다. ' +
          '요청 버튼은 화면 흐름만 보여주며 새 초안을 만들지 않습니다.</span></div>',
        onOk: function () { toast('데모에서는 LLM을 호출하지 않습니다 — 화면 흐름만 표시', 'no'); }
      });
    };
  }

  /* ==========================================================================
     5. 조직 · 권한
     ========================================================================== */
  function viewOrg() {
    var o = curOrg();
    return shell(
      '<div class="page-head">' +
        '<div><h1 class="page-title">조직 · 권한</h1>' +
        '<div class="page-desc">조직 / 워크스페이스 구조, 구성원 역할, 조직 간 데이터 분리를 설정합니다.</div></div>' +
      '</div>' +
      '<div class="org-grid">' +
        '<div>' +
          '<div class="card"><div class="card-head"><h3>조직 · 워크스페이스</h3></div>' +
            '<div class="card-body"><div class="tree" id="orgTree">' +
              D.orgs.map(function (x) {
                return '<div><div class="tree-org' + (x.id === S.org ? ' on' : '') + '" data-org="' + x.id + '">' +
                  '<span>' + esc(x.name) + '</span><span class="spacer" style="flex:1"></span>' +
                  '<span class="small muted">' + esc(x.plan) + '</span></div>' +
                  '<div class="tree-ws">' + x.workspaces.map(function (w) {
                    return '<div><span>' + esc(w.name) + '</span><span class="cnt">프로젝트 ' + w.projects + '</span></div>';
                  }).join('') + '</div></div>';
              }).join('') +
            '</div>' +
            '<div class="tenant-note"><span>⛨</span><span><b>조직별 데이터 분리</b><br>' +
            '현재 테넌트 <b>' + esc(o.tenant) + '</b> · 리전 ' + esc(o.region) + '. ' +
            '조직을 전환하면 프로젝트·워크시트·자료가 모두 교체됩니다. 실제 구현에서는 모든 질의에 tenant_id 를 강제하고 ' +
            '행 수준 접근제어로 교차 조회를 차단합니다.</span></div>' +
            '</div></div>' +
          '<div class="card mt12"><div class="card-head"><h3>구성원 초대</h3></div><div class="card-body">' +
            '<div class="invite-row">' +
              '<div style="flex:1;min-width:150px"><label class="small muted">사용자 ID</label>' +
                '<input class="inp" id="invId" placeholder="예: usr-7301" style="width:100%"></div>' +
              '<div><label class="small muted">역할</label><br>' +
                '<select class="inp" id="invRole">' + Object.keys(D.roles).map(function (k) {
                  return '<option value="' + k + '">' + esc(D.roles[k].label) + '</option>';
                }).join('') + '</select></div>' +
              '<button class="btn primary" id="invGo">초대</button>' +
            '</div>' +
            '<div class="note mt8"><span class="ic">ℹ</span><span>데모에서는 이메일·전화번호를 수집하지 않습니다. ' +
            '사내 계정 연동(SSO)을 전제로 <b>사용자 ID</b>로만 초대합니다.</span></div>' +
          '</div></div>' +
        '</div>' +
        '<div>' +
          '<div class="card"><div class="card-head"><h3>구성원</h3><div class="spacer"></div>' +
            '<span class="small muted" id="memCount"></span></div>' +
            '<div class="table-wrap" style="border:0;border-radius:0;max-height:none" id="memWrap"></div>' +
          '</div>' +
          '<div class="card mt12"><div class="card-head"><h3>역할별 권한</h3><div class="spacer"></div>' +
            '<span class="small muted">현재 로그인 역할: <b>' + esc(D.roles[S.role].label) + '</b></span></div>' +
            '<div class="table-wrap" style="border:0;border-radius:0;max-height:none">' +
            '<table class="dt perm-tbl"><thead><tr><th>기능</th>' +
              Object.keys(D.roles).map(function (k) {
                return '<th class="c tight"' + (k === S.role ? ' style="background:var(--accent-soft);color:var(--accent-d)"' : '') + '>' +
                  esc(D.roles[k].label) + '</th>';
              }).join('') + '</tr></thead><tbody>' +
              D.perms.map(function (p) {
                return '<tr><td>' + esc(p.f) + '</td>' + Object.keys(D.roles).map(function (k) {
                  return '<td class="c">' + (p[k] ? '<span class="perm-yes">●</span>' : '<span class="perm-no">–</span>') + '</td>';
                }).join('') + '</tr>';
              }).join('') +
            '</tbody></table></div>' +
            '<div class="card-body" style="border-top:1px solid var(--line)">' +
              '<div class="note"><span class="ic">ℹ</span><span>이 표는 장식이 아닙니다. 랜딩 화면에서 <b>분석자</b>로 로그인하면 ' +
              '워크시트·검토 화면의 승인/반려 버튼이 실제로 비활성화됩니다.</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderMembers() {
    var list = store.users.filter(function (u) { return u.org === S.org; });
    var wsName = {};
    curOrg().workspaces.forEach(function (w) { wsName[w.id] = w.name; });
    qs('#memCount').textContent = list.length + '명 / 좌석 ' + curOrg().seats + '석';
    qs('#memWrap').innerHTML = '<table class="dt"><thead><tr>' +
      '<th class="col-id">사용자 ID</th><th class="tight">이름</th><th>직무</th>' +
      '<th class="tight">워크스페이스</th><th class="tight">역할</th><th class="tight">상태</th><th class="tight">최근 접속</th>' +
      '</tr></thead><tbody>' + list.map(function (u) {
        return '<tr>' +
          '<td class="rowid">' + esc(u.id) + '</td>' +
          '<td class="tight"><b style="color:var(--ink)">' + esc(u.name) + '</b></td>' +
          '<td>' + esc(u.title) + '</td>' +
          '<td class="tight">' + esc(wsName[u.ws] || u.ws) + '</td>' +
          '<td class="tight"><select class="role-pick" data-u="' + u.id + '">' +
            Object.keys(D.roles).map(function (k) {
              return '<option value="' + k + '"' + (u.role === k ? ' selected' : '') + '>' + esc(D.roles[k].label) + '</option>';
            }).join('') + '</select></td>' +
          '<td class="tight"><span class="badge ' + (u.state === 'active' ? 'approved' : 'draft') + '">' +
            (u.state === 'active' ? '활성' : '초대됨') + '</span></td>' +
          '<td class="tight num muted">' + esc(u.last) + '</td>' +
        '</tr>';
      }).join('') + '</tbody></table>';

    qsa('#memWrap [data-u]').forEach(function (sel) {
      sel.onchange = function () {
        if (!can('manage')) {
          toast('역할 변경은 관리자 권한이 필요합니다', 'no');
          renderMembers();
          return;
        }
        var u = store.users.filter(function (x) { return x.id === sel.dataset.u; })[0];
        var old = D.roles[u.role].label;
        u.role = sel.value;
        toast(u.name + ' 역할 변경: ' + old + ' → ' + D.roles[u.role].label);
      };
    });
  }

  function bindOrg() {
    renderMembers();
    qsa('#orgTree [data-org]').forEach(function (n) {
      n.onclick = function () {
        S.org = n.dataset.org;
        toast('조직 전환: ' + curOrg().name + ' — 프로젝트·구성원 데이터가 교체됩니다');
        render();
      };
    });
    qs('#invGo').onclick = function () {
      if (!can('manage')) { toast('구성원 초대는 관리자 권한이 필요합니다', 'no'); return; }
      var id = qs('#invId').value.trim();
      if (!/^usr-\d{3,5}$/.test(id)) { toast('사용자 ID 형식이 올바르지 않습니다 (예: usr-7301)', 'no'); return; }
      if (store.users.some(function (u) { return u.id === id; })) { toast('이미 등록된 사용자 ID 입니다', 'no'); return; }
      store.users.push({
        id: id, org: S.org, name: '초대 대기', ws: curOrg().workspaces[0].id,
        role: qs('#invRole').value, title: '—', last: '—', state: 'invited'
      });
      qs('#invId').value = '';
      renderMembers();
      toast(id + ' 초대 — ' + D.roles[qs('#invRole').value].label + ' 역할로 대기 상태 추가');
    };
  }

  /* ==========================================================================
     6. 자료 등록 · 리비전
     ========================================================================== */
  function viewDocs(pid) {
    var p = project(pid);
    if (!p) return shell('<div class="note">프로젝트를 찾을 수 없습니다.</div>');
    var hasDocs = !!(store.docs[pid] && store.docs[pid].length);
    return shell(
      crumb([{ t: '대시보드', href: '#/dashboard' }, { t: p.id, href: '#/workspace/' + pid }, { t: '자료 등록 · 리비전' }]) +
      '<div class="page-head">' +
        '<div><h1 class="page-title">자료 등록 · 리비전</h1>' +
        '<div class="page-desc">' + esc(p.name) + ' — 공정 자료를 버전 단위로 등록하고, 분석 항목과 연결합니다.</div></div>' +
        '<div class="spacer"></div>' +
        '<a class="btn" href="#/workspace/' + pid + '">워크시트로 이동</a>' +
      '</div>' +
      (hasDocs ? '' : '<div class="note mb12"><span class="ic">ℹ</span><span>이 데모에서는 ' + esc(pid) + ' 의 자료 목록을 준비하지 않았습니다. PRJ-2041 에서 확인하세요.</span></div>') +
      '<div class="doc-grid">' +
        '<div>' +
          '<div class="drop" id="drop">' +
            '<div class="ic">⬆</div>' +
            '<div class="t">공정 자료를 여기에 끌어다 놓거나 클릭해 선택</div>' +
            '<div class="s">P&amp;ID · PFD · 운전절차서 · 설비 목록 · 직전 평가 결과<br>' +
            '<b>데모에서는 업로드하지 않습니다</b> — 선택한 파일의 이름·크기만 화면에 표시하고 서버로 전송하지 않습니다.</div>' +
            '<input type="file" id="fileInput" multiple style="display:none">' +
          '</div>' +
          '<div id="uploadList"></div>' +
          '<div class="card mt12"><div class="card-head"><h3>등록된 자료</h3><div class="spacer"></div>' +
            '<span class="small muted">' + ((store.docs[pid] || []).length) + '건</span></div>' +
            '<div id="docList"></div></div>' +
        '</div>' +
        '<div id="docSide"></div>' +
      '</div>'
    );
  }

  function renderDocList() {
    var pid = S.route.id;
    var list = store.docs[pid] || [];
    var box = qs('#docList');
    if (!list.length) { box.innerHTML = '<div class="detail-empty">등록된 자료가 없습니다.</div>'; return; }
    box.innerHTML = list.map(function (d) {
      var on = S.dc.doc === d.id;
      return '<div>' +
        '<div class="ver' + (on ? ' on' : '') + '" data-doc="' + d.id + '" style="font-weight:600">' +
          '<span class="vtag">' + esc(d.kind) + '</span>' +
          '<span>' + esc(d.name) + '<span class="muted small"> .' + esc(d.ext) + '</span></span>' +
          '<span class="spacer"></span>' +
          '<span class="meta">현행 ' + esc(d.cur) + ' · 버전 ' + d.versions.length + '</span>' +
          '<span class="muted">' + (on ? '▾' : '▸') + '</span>' +
        '</div>' +
        (on ? '<div style="background:var(--surface-2)">' + d.versions.map(function (v) {
          return '<div class="ver' + (v.v === d.cur ? ' cur' : '') + (S.dc.ver === v.v ? ' on' : '') +
            '" data-ver="' + esc(v.v) + '" style="padding-left:34px">' +
            '<span class="vtag">' + esc(v.v) + '</span>' +
            '<span>' + esc(v.note || '(설명 없음)') + '</span>' +
            '<span class="spacer"></span>' +
            (v.applied ? '<span class="badge approved">분석 반영</span>' : '<span class="badge draft">미반영</span>') +
            '<span class="meta">' + esc(v.at) + ' · ' + esc(v.by) + ' · ' + esc(v.size) + '</span>' +
          '</div>';
        }).join('') + '</div>' : '') +
      '</div>';
    }).join('');

    qsa('#docList [data-doc]').forEach(function (n) {
      n.onclick = function () {
        S.dc.doc = (S.dc.doc === n.dataset.doc) ? '' : n.dataset.doc;
        var d = (store.docs[pid] || []).filter(function (x) { return x.id === S.dc.doc; })[0];
        if (d) S.dc.ver = d.cur;
        renderDocList(); renderDocSide();
      };
    });
    qsa('#docList [data-ver]').forEach(function (n) {
      n.onclick = function (e) { e.stopPropagation(); S.dc.ver = n.dataset.ver; renderDocList(); renderDocSide(); };
    });
  }

  function renderDocSide() {
    var pid = S.route.id;
    var side = qs('#docSide');
    var d = (store.docs[pid] || []).filter(function (x) { return x.id === S.dc.doc; })[0];
    if (!d) { side.innerHTML = '<div class="card"><div class="detail-empty">자료를 선택하면<br>버전 상세와 연결된 분석 항목이 표시됩니다.</div></div>'; return; }
    var v = d.versions.filter(function (x) { return x.v === S.dc.ver; })[0] || d.versions[0];
    side.innerHTML =
      '<div class="card">' +
        '<div class="card-head"><h3>' + esc(v.v) + ' 상세</h3><div class="spacer"></div>' +
          (v.applied ? '<span class="badge approved">분석 반영</span>' : '<span class="badge draft">미반영</span>') + '</div>' +
        '<div class="card-body">' +
          '<dl class="kv">' +
            '<dt>자료</dt><dd>' + esc(d.name) + '</dd>' +
            '<dt>종류</dt><dd>' + esc(d.kind) + ' · ' + esc(D.docKinds[d.kind] || '') + '</dd>' +
            '<dt>등록</dt><dd>' + esc(v.at) + '</dd>' +
            '<dt>등록자</dt><dd>' + esc(v.by) + '</dd>' +
            '<dt>크기</dt><dd>' + esc(v.size) + '</dd>' +
            '<dt>변경 내용</dt><dd>' + esc(v.note || '—') + '</dd>' +
          '</dl>' +
          '<hr class="sep">' +
          '<b class="small">이 리비전과 연결된 분석 항목 (' + v.links.length + ')</b>' +
          '<div class="mt8">' + (v.links.length
            ? v.links.map(function (id) { return '<span class="link-chip" data-link="' + esc(id) + '">' + esc(id) + ' ↗</span>'; }).join('')
            : '<span class="small muted">연결된 항목이 없습니다. AI 초안 생성 시 근거로 사용되면 자동 연결됩니다.</span>') + '</div>' +
          '<div class="note mt12"><span class="ic">ℹ</span><span>항목을 클릭하면 워크시트에서 해당 행이 선택된 상태로 열립니다.</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="card mt12"><div class="card-head"><h3>버전 이력</h3></div>' +
        '<div class="card-body"><div class="tl">' + d.versions.map(function (x) {
          return '<div class="tl-item ' + (x.v === d.cur ? 'ok' : '') + '">' +
            '<div class="tl-act">' + esc(x.v) + (x.v === d.cur ? ' · 현행' : '') + '</div>' +
            '<div class="tl-meta">' + esc(x.at) + ' · ' + esc(x.by) + ' · ' + esc(x.size) + '</div>' +
            (x.note ? '<div class="tl-note">' + esc(x.note) + '</div>' : '') +
          '</div>';
        }).join('') + '</div></div></div>';

    qsa('[data-link]', side).forEach(function (c) {
      c.onclick = function () {
        S.ws.active = c.dataset.link;
        S.ws.node = ''; S.ws.status = ''; S.ws.risk = ''; S.ws.q = c.dataset.link;
        go('/workspace/' + pid);
      };
    });
  }

  function renderUploads() {
    var box = qs('#uploadList');
    if (!S.dc.uploaded.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<div class="card mt12"><div class="card-head"><h3>선택한 파일 (업로드 안 함)</h3>' +
      '<div class="spacer"></div><button class="btn xs" id="upClear">비우기</button></div>' +
      '<div>' + S.dc.uploaded.map(function (f) {
        return '<div class="ver"><span class="vtag">NEW</span><span>' + esc(f.name) + '</span>' +
          '<span class="spacer"></span><span class="meta">' + esc(f.size) + '</span>' +
          '<span class="badge draft">전송하지 않음</span></div>';
      }).join('') + '</div>' +
      '<div class="card-body" style="border-top:1px solid var(--line)">' +
      '<div class="note syn"><span class="ic">⚠</span><span>데모에는 서버가 없습니다. 파일은 브라우저 메모리에서 ' +
      '<b>이름·크기만</b> 읽어 표시하며 어디로도 전송·저장되지 않습니다.</span></div></div></div>';
    qs('#upClear').onclick = function () { S.dc.uploaded = []; renderUploads(); };
  }

  function humanSize(n) {
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(0) + ' KB';
    return (n / 1024 / 1024).toFixed(1) + ' MB';
  }

  function bindDocs() {
    renderDocList(); renderDocSide(); renderUploads();
    var drop = qs('#drop'), input = qs('#fileInput');
    var take = function (files) {
      if (!can('upload')) { toast('자료 등록은 관리자·분석자 권한이 필요합니다', 'no'); return; }
      var arr = Array.prototype.slice.call(files);
      if (!arr.length) return;
      arr.forEach(function (f) { S.dc.uploaded.push({ name: f.name, size: humanSize(f.size) }); });
      renderUploads();
      toast(arr.length + '개 파일 선택됨 — 전송하지 않고 목록에만 표시합니다');
    };
    drop.onclick = function () { input.click(); };
    input.onchange = function () { take(input.files); input.value = ''; };
    ['dragenter', 'dragover'].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); });
    });
    ['dragleave', 'drop'].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); });
    });
    drop.addEventListener('drop', function (e) { take(e.dataTransfer.files); });
  }

  /* ==========================================================================
     7. Windows 데스크톱 배포 안내
     ========================================================================== */
  function viewDesktop() {
    return shell(
      '<div class="page-head">' +
        '<div><h1 class="page-title">Windows 데스크톱 배포 경로</h1>' +
        '<div class="page-desc">웹과 데스크톱을 <b>같은 화면 코드</b>로 유지하고, 패키징 계층만 분리합니다.</div></div>' +
      '</div>' +
      '<div class="note syn mb12"><span class="ic">⚠</span><span>이 데모에는 <b>실제 Electron 빌드가 포함되어 있지 않습니다.</b> ' +
      '아래는 구현 시 적용할 구조와 절차를 설명하는 안내 화면입니다.</span></div>' +
      '<div class="arch mb12">' +
        '<div class="arch-col"><h4>웹 (브라우저)</h4>' +
          '<div class="arch-box"><b>배포</b>정적 자산 + API 서버. 사내망·인터넷 모두 접근.</div>' +
          '<div class="arch-box"><b>인증</b>사내 계정 연동(SSO) 세션.</div>' +
          '<div class="arch-box"><b>업데이트</b>새로고침 즉시 반영.</div>' +
        '</div>' +
        '<div class="arch-col"><h4>공통 (동일 코드)</h4>' +
          '<div class="arch-box same"><b>화면·상태·검증 로직</b>워크시트 표, 검토 워크플로우, 권한 판정 UI 를 한 벌만 유지합니다. ' +
          '지금 보고 있는 이 화면들이 그대로 데스크톱에 실립니다.</div>' +
          '<div class="arch-box same"><b>API 계층</b>동일 REST 계약. 호출 주체만 브라우저 ↔ 데스크톱 렌더러로 달라집니다.</div>' +
        '</div>' +
        '<div class="arch-col"><h4>Windows 데스크톱</h4>' +
          '<div class="arch-box"><b>패키징</b>Electron 셸에 동일 번들 탑재. 설치 파일(.exe / MSI) 생성.</div>' +
          '<div class="arch-box"><b>추가로 얻는 것</b>로컬 파일 접근, 대용량 도면 처리, 오프라인 캐시, 자동 업데이트, 프린터·클립보드 연동.</div>' +
          '<div class="arch-box"><b>보안</b>코드 서명, 사내 배포 채널, 저장 데이터 암호화.</div>' +
        '</div>' +
      '</div>' +
      '<div class="rev-grid">' +
        '<div class="card"><div class="card-head"><h3>패키징 절차 (요약)</h3></div><div class="card-body">' +
          '<div class="code">' +
            '<span class="c"># 1) 웹 빌드 — 데스크톱과 동일한 산출물</span>\n' +
            '<span class="k">npm</span> run build          <span class="c"># → dist/ (정적 번들)</span>\n\n' +
            '<span class="c"># 2) Electron 셸에 dist/ 를 로드</span>\n' +
            '<span class="k">win</span>.loadFile(<span style="color:#e8c07d">\'dist/index.html\'</span>)\n\n' +
            '<span class="c"># 3) Windows 설치본 생성 (electron-builder)</span>\n' +
            '<span class="k">npm</span> run dist:win        <span class="c"># → .exe / .msi + 코드 서명</span>\n\n' +
            '<span class="c"># 4) 자동 업데이트 채널 연결</span>\n' +
            '<span class="k">autoUpdater</span>.setFeedURL({ provider: <span style="color:#e8c07d">\'generic\'</span> })' +
          '</div>' +
          '<div class="note mt12"><span class="ic">ℹ</span><span>화면 코드는 손대지 않습니다. 데스크톱 전용 기능(로컬 파일, 프린터)은 ' +
          '얇은 브리지 모듈로 분리해 웹에서는 비활성 처리합니다.</span></div>' +
        '</div></div>' +
        '<div class="card"><div class="card-head"><h3>데스크톱에서 확인할 항목</h3></div><div class="card-body">' +
          '<div class="chk-list">' +
            '<div>웹과 동일한 워크시트 표 조작(셀 편집·행 추가·정렬·필터)</div>' +
            '<div>고해상도 도면 파일을 로컬에서 직접 열어 분석 항목에 연결</div>' +
            '<div>네트워크 단절 시 로컬 캐시로 열람, 복구 시 변경분 동기화</div>' +
            '<div>사내 배포 채널을 통한 버전 고정·자동 업데이트</div>' +
            '<div>설치본 코드 서명 및 실행 정책 대응</div>' +
            '<div>Windows 프린터·PDF 내보내기로 평가 보고서 출력</div>' +
          '</div>' +
          '<hr class="sep">' +
          '<b class="small">기술 스택 대응</b>' +
          '<dl class="kv mt8">' +
            '<dt>클라우드</dt><dd>AWS (앱 서버 · 오브젝트 스토리지 · 큐)</dd>' +
            '<dt>데이터베이스</dt><dd>SQL Server (조직별 tenant_id 강제, 행 수준 접근제어)</dd>' +
            '<dt>AI</dt><dd>LLM API — 초안 생성 전용. 승인 권한은 사람에게만 둡니다.</dd>' +
            '<dt>데스크톱</dt><dd>Electron 패키징 (웹과 동일 번들)</dd>' +
          '</dl>' +
        '</div></div>' +
      '</div>'
    );
  }

  /* ==========================================================================
     렌더 · 부트
     ========================================================================== */
  function render() {
    S.route = parseHash();
    var root = qs('#app');
    var n = S.route.name;

    if (n === 'landing' || n === '') { root.innerHTML = viewLanding(); bindLanding(); scrollTop(); return; }

    /* 프로젝트 스코프 라우트: id 가 없거나 다른 조직 것이면 보정 */
    if (n === 'workspace' || n === 'review' || n === 'documents') {
      var p = S.route.id ? project(S.route.id) : null;
      if (!p || p.org !== S.org) { go('/' + n + '/' + defaultProject()); return; }
    }

    if (n === 'dashboard') { root.innerHTML = viewDashboard(); bindDashboard(); }
    else if (n === 'workspace') { root.innerHTML = viewWorkspace(S.route.id); bindWorkspace(); }
    else if (n === 'review') { root.innerHTML = viewReview(S.route.id); bindReview(); }
    else if (n === 'org') { root.innerHTML = viewOrg(); bindOrg(); }
    else if (n === 'documents') { root.innerHTML = viewDocs(S.route.id); bindDocs(); }
    else if (n === 'desktop') { root.innerHTML = viewDesktop(); }
    else { go('/dashboard'); return; }

    var sel = qs('#orgSel');
    if (sel) sel.onchange = function () {
      S.org = this.value;
      toast('조직 전환: ' + curOrg().name);
      go('/dashboard');
      render();
    };
    scrollTop();
  }

  function scrollTop() { window.scrollTo(0, 0); }

  document.addEventListener('DOMContentLoaded', function () {
    if (!location.hash) location.hash = '#/';
    render();
  });

  /* 검증 스크립트에서 상태를 들여다볼 수 있게 최소한만 노출 */
  window.__demo = { S: S, store: store, riskOf: riskOf, rowsOf: rowsOf };
})();
