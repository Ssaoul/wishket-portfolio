/* ==========================================================================
   공통 셸 — 헤더/내비/푸터 렌더 + 화면 공용 유틸
   페이지마다 <body data-page="dashboard"> 로 현재 화면을 표시한다.
   ========================================================================== */
(function (g) {
  'use strict';

  var NAV = [
    { key: 'participants', no: '1', href: 'participants.html', label: '참가자 관리' },
    { key: 'measurements', no: '2', href: 'measurements.html', label: '바이오데이터 입력' },
    { key: 'survey',       no: '3', href: 'survey.html',       label: '생활습관 설문' },
    { key: 'dashboard',    no: '4', href: 'dashboard.html',    label: '분석 결과' },
    { key: 'report',       no: '5', href: 'report.html',       label: '리포트 미리보기' },
    { key: 'admin',        no: '6', href: 'admin.html',        label: '관리자' }
  ];

  var LEAF = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M11 20.5C6 20.5 3.5 17 3.5 12.5 3.5 7 8 3.5 15 3.5c1.9 0 3.6.2 5.5.6.3 6.7-2.2 16.4-9.5 16.4Z"/>' +
    '<path d="M4.5 20.5c2-5.5 6-9.5 11-11.5"/></svg>';

  function h(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderShell() {
    var page = document.body.getAttribute('data-page') || '';
    var flag = h('<div class="demo-flag">제안용 데모 · <b>합성 데이터</b> — 화면의 참가자·측정값은 모두 가상이며 실제 인물·기관의 자료가 아닙니다. 웰니스 참고용이며 의료 진단 서비스가 아닙니다.</div>');
    var head = h(
      '<header class="site-head"><div class="head-inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand-mark">' + LEAF + '</span>' +
          '<span class="brand-txt"><strong>웰니스 바이오데이터 통합관리</strong><span>측정 · 설문 · 규칙 기반 점수화 · 리포트</span></span>' +
        '</a>' +
        '<nav class="site-nav">' + NAV.map(function (n) {
          return '<a href="' + n.href + '" class="' + (n.key === page ? 'is-active' : '') + '">' +
            '<span class="nav-no">' + n.no + '</span>' + n.label + '</a>';
        }).join('') + '</nav>' +
      '</div></header>'
    );
    document.body.insertBefore(head, document.body.firstChild);
    document.body.insertBefore(flag, document.body.firstChild);

    var foot = h(
      '<footer class="site-foot"><div class="foot-inner">' +
        '<div><b>제안용 데모 · 합성 데이터.</b> 참가자 이름·코드·측정값·측정일시는 데모를 위해 생성한 가상 정보이며 실제 개인정보를 포함하지 않습니다.</div>' +
        '<div>본 화면은 <b>일반 웰니스 상태를 참고용으로 안내</b>하는 도구입니다. 질병의 진단·치료·예방을 목적으로 하지 않으며, 측정 결과를 의학적 판단의 근거로 사용하지 않습니다.</div>' +
        '<div>1단계 범위 : 수동 입력 + CSV 업로드 · 규칙 기반 점수화 · 결과 화면 · PDF 리포트 · 관리자 기준표. (장비 실시간 연동, AI 학습 모델, 모바일 앱은 다음 단계)</div>' +
      '</div></footer>'
    );
    document.body.appendChild(foot);
  }

  /* ---------- URL 파라미터 (페이지 간 선택 유지 — file:// 에서도 안전) ---------- */
  function qs(name, def) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : (def === undefined ? null : def);
  }
  function linkTo(page, code, session) {
    var q = [];
    if (code) q.push('code=' + encodeURIComponent(code));
    if (session) q.push('s=' + encodeURIComponent(session));
    return page + (q.length ? '?' + q.join('&') : '');
  }

  /* ---------- 참가자 셀렉트 ---------- */
  function fillParticipantSelect(sel, code) {
    var list = WB.getParticipants();
    sel.innerHTML = list.map(function (p) {
      return '<option value="' + esc(p.code) + '">' + esc(p.code) + ' · ' + esc(p.name) +
        ' (' + (p.sex === 'M' ? '남' : '여') + ' ' + p.age + '세)</option>';
    }).join('');
    if (code && list.some(function (p) { return p.code === code; })) sel.value = code;
    return sel.value;
  }

  /* ---------- 토스트 ---------- */
  var toastTimer = null;
  function toast(msg, kind) {
    var box = document.getElementById('wb-toast');
    if (!box) {
      box = document.createElement('div');
      box.id = 'wb-toast';
      box.className = 'toast';
      document.body.appendChild(box);
    }
    box.className = 'toast show' + (kind ? ' ' + kind : '');
    box.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.className = 'toast'; }, 3200);
  }

  /* ---------- 모달 ---------- */
  function modal(title, bodyHtml, opts) {
    opts = opts || {};
    var m = document.getElementById('wb-modal');
    if (!m) {
      m = h('<div class="modal" id="wb-modal"><div class="modal-bg" data-close></div><div class="modal-box">' +
        '<div class="card-head"><h3 id="wb-modal-title"></h3><button class="btn btn-ghost btn-sm" data-close>닫기</button></div>' +
        '<div id="wb-modal-body"></div></div></div>');
      document.body.appendChild(m);
      m.addEventListener('click', function (e) {
        if (e.target.hasAttribute && e.target.hasAttribute('data-close')) m.classList.remove('open');
      });
    }
    m.querySelector('#wb-modal-title').textContent = title;
    m.querySelector('#wb-modal-body').innerHTML = bodyHtml;
    m.classList.add('open');
    if (opts.onOpen) opts.onOpen(m.querySelector('#wb-modal-body'));
    return m;
  }
  function closeModal() { var m = document.getElementById('wb-modal'); if (m) m.classList.remove('open'); }

  /* ---------- CSV ---------- */
  function csvCell(v) {
    var s = (v === null || v === undefined) ? '' : String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCsv(rows) {
    return rows.map(function (r) { return r.map(csvCell).join(','); }).join('\r\n');
  }
  function parseCsv(text) {
    text = String(text).replace(/^﻿/, '');
    var rows = [], row = [], cur = '', inQ = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else inQ = false; }
        else cur += c;
      } else if (c === '"') inQ = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (c === '\r') { /* skip */ }
      else cur += c;
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  }
  function downloadCsv(filename, rows) {
    var csv = toCsv(rows);
    var ok = false;
    try {
      // Excel 한글 깨짐 방지 BOM
      var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      ok = true;
    } catch (e) { ok = false; }
    return { ok: ok, csv: csv };
  }

  /* ---------- 포맷 ---------- */
  function dateOf(at) { return String(at || '').split(' ')[0] || '–'; }
  function todayStr() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function nowStr() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return todayStr() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function sexLabel(s) { return s === 'M' ? '남' : '여'; }
  function bandClass(b) { return b === 'good' ? 'badge-good' : (b === 'fair' ? 'badge-fair' : (b === 'care' ? 'badge-care' : 'badge-miss')); }
  function bandBadge(b) { return '<span class="badge ' + bandClass(b) + '">' + WB.bandLabel(b) + '</span>'; }
  function latestSession(p) { return p.sessions.length ? p.sessions[p.sessions.length - 1] : null; }

  g.WBUI = {
    NAV: NAV, renderShell: renderShell, esc: esc, h: h,
    qs: qs, linkTo: linkTo, fillParticipantSelect: fillParticipantSelect,
    toast: toast, modal: modal, closeModal: closeModal,
    toCsv: toCsv, parseCsv: parseCsv, downloadCsv: downloadCsv,
    dateOf: dateOf, todayStr: todayStr, nowStr: nowStr, sexLabel: sexLabel,
    bandClass: bandClass, bandBadge: bandBadge, latestSession: latestSession
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (document.body.getAttribute('data-shell') !== 'off') renderShell();
  });
})(window);
