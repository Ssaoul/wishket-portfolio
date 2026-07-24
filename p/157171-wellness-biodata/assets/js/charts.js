/* ==========================================================================
   차트 렌더러 — 외부 차트 라이브러리 없이 SVG 를 직접 그린다.
   (이미지 캡처가 아니라 DOM 으로 실제 렌더되므로 값이 바뀌면 즉시 다시 그려진다)
   제공: gauge(게이지) · radar(레이더) · bars(막대) · legend(범례)
   ========================================================================== */
(function (g) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';

  var COLOR = {
    good: '#3F7D5B', fair: '#B5852B', care: '#AE603C', none: '#B6AE9F',
    goodBg: '#E4EFE7', fairBg: '#F6ECD6', careBg: '#F6E4DB',
    cur: '#2E5741', prev: '#B08151', grid: '#E4DCCF', ink: '#2A2925', muted: '#7D766B'
  };

  function el(tag, attrs, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function svgRoot(w, h, cls) {
    var s = el('svg', {
      viewBox: '0 0 ' + w + ' ' + h, width: '100%', role: 'img',
      preserveAspectRatio: 'xMidYMid meet', class: cls || 'chart'
    });
    s.style.display = 'block';
    s.style.maxWidth = w + 'px';
    s.style.height = 'auto';
    s.style.margin = '0 auto';
    return s;
  }
  function bandOf(v, cut) {
    cut = cut || { good: 80, fair: 60 };
    return v >= cut.good ? 'good' : (v >= cut.fair ? 'fair' : 'care');
  }
  function clear(host) { while (host.firstChild) host.removeChild(host.firstChild); }

  /* ---------- 게이지 (종합 Wellness Score) ---------- */
  function gauge(host, opt) {
    clear(host);
    var v = (opt.value === null || opt.value === undefined) ? null : Math.max(0, Math.min(100, opt.value));
    var cut = opt.cut || { good: 80, fair: 60 };
    var W = 300, H = 208, cx = 150, cy = 158, R = 116, SW = 26;
    var s = svgRoot(W, H, 'chart-gauge');
    s.setAttribute('aria-label', '종합 웰니스 점수 게이지 ' + (v === null ? '미산출' : v + '점'));

    var pt = function (val, r) {
      var a = Math.PI * (1 - val / 100);
      return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
    };
    var arc = function (v1, v2, r, sw, color, opacity) {
      var p1 = pt(v1, r), p2 = pt(v2, r);
      var path = el('path', {
        d: 'M ' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2) + ' A ' + r + ' ' + r + ' 0 0 1 ' + p2[0].toFixed(2) + ' ' + p2[1].toFixed(2),
        fill: 'none', stroke: color, 'stroke-width': sw, 'stroke-linecap': 'butt'
      });
      if (opacity) path.setAttribute('opacity', opacity);
      return path;
    };

    // 3구간 트랙
    s.appendChild(arc(0, cut.fair, R, SW, COLOR.careBg));
    s.appendChild(arc(cut.fair, cut.good, R, SW, COLOR.fairBg));
    s.appendChild(arc(cut.good, 100, R, SW, COLOR.goodBg));

    // 구간 경계 눈금
    [0, cut.fair, cut.good, 100].forEach(function (t) {
      var a = pt(t, R + SW / 2), b = pt(t, R - SW / 2);
      s.appendChild(el('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: '#fff', 'stroke-width': 2 }));
      var l = pt(t, R + SW / 2 + 14);
      s.appendChild(el('text', {
        x: l[0], y: l[1] + 5, 'text-anchor': t === 0 ? 'start' : (t === 100 ? 'end' : 'middle'),
        'font-size': 13, fill: COLOR.muted, 'font-weight': 600
      }, String(t)));
    });

    if (v !== null) {
      var b = bandOf(v, cut);
      // 값 채움
      s.appendChild(arc(0, Math.max(0.4, v), R, SW, COLOR[b]));
      // 이전 회차 마커 (라벨은 눈금과 겹치지 않도록 중앙 아래에 표기)
      if (opt.prev !== null && opt.prev !== undefined) {
        var m1 = pt(opt.prev, R + SW / 2 + 4), m2 = pt(opt.prev, R - SW / 2 - 4);
        s.appendChild(el('line', { x1: m1[0], y1: m1[1], x2: m2[0], y2: m2[1], stroke: COLOR.prev, 'stroke-width': 3.5, 'stroke-linecap': 'round' }));
        s.appendChild(el('text', {
          x: cx, y: cy + 30, 'text-anchor': 'middle', 'font-size': 13.5, fill: COLOR.prev, 'font-weight': 700
        }, '이전 회차 ' + opt.prev.toFixed(1) + '점'));
      }
      // 바늘
      var n = pt(v, R - SW / 2 - 8);
      s.appendChild(el('line', { x1: cx, y1: cy, x2: n[0], y2: n[1], stroke: COLOR.ink, 'stroke-width': 4, 'stroke-linecap': 'round' }));
      s.appendChild(el('circle', { cx: cx, cy: cy, r: 8, fill: COLOR.ink }));
      s.appendChild(el('circle', { cx: cx, cy: cy, r: 3.4, fill: '#fff' }));
      // 값
      s.appendChild(el('text', { x: cx, y: cy - 42, 'text-anchor': 'middle', 'font-size': 46, 'font-weight': 800, fill: COLOR[b], 'letter-spacing': '-1' }, String(v)));
      s.appendChild(el('text', { x: cx, y: cy - 20, 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 700, fill: COLOR.muted }, (opt.bandLabel || '') + ' 구간'));
    } else {
      s.appendChild(el('text', { x: cx, y: cy - 30, 'text-anchor': 'middle', 'font-size': 20, 'font-weight': 700, fill: COLOR.muted }, '측정값 없음'));
    }
    host.appendChild(s);
    return s;
  }

  /* ---------- 레이더 (영역별 점수) ---------- */
  function radar(host, opt) {
    clear(host);
    var axes = opt.axes || [];
    var n = axes.length;
    var W = 420, H = 400, cx = 210, cy = 172, R = 122;
    var s = svgRoot(W, H, 'chart-radar');
    s.setAttribute('aria-label', '영역별 웰니스 점수 레이더 차트');
    if (!n) { host.appendChild(s); return s; }

    var pos = function (i, val) {
      var a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      var r = R * (Math.max(0, Math.min(100, val)) / 100);
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };
    var poly = function (vals, color, fillOp, dash, width) {
      var pts = vals.map(function (v, i) { var p = pos(i, v); return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
      var p = el('polygon', { points: pts, fill: color, 'fill-opacity': fillOp, stroke: color, 'stroke-width': width || 2.5, 'stroke-linejoin': 'round' });
      if (dash) p.setAttribute('stroke-dasharray', dash);
      return p;
    };

    // 배경 링 (구간 감각을 주기 위해 60/80 링을 강조)
    [20, 40, 60, 80, 100].forEach(function (lv) {
      var pts = [];
      for (var i = 0; i < n; i++) { var p = pos(i, lv); pts.push(p[0].toFixed(1) + ',' + p[1].toFixed(1)); }
      s.appendChild(el('polygon', {
        points: pts.join(' '), fill: lv === 100 ? '#FBF8F2' : 'none',
        stroke: (lv === 60 || lv === 80) ? '#D5CBB9' : COLOR.grid,
        'stroke-width': (lv === 60 || lv === 80) ? 1.6 : 1
      }));
    });
    for (var i = 0; i < n; i++) {
      var p = pos(i, 100);
      s.appendChild(el('line', { x1: cx, y1: cy, x2: p[0], y2: p[1], stroke: COLOR.grid, 'stroke-width': 1 }));
    }
    s.appendChild(el('text', { x: cx + 4, y: cy - 4, 'font-size': 11, fill: '#BDB4A4' }, '0'));
    s.appendChild(el('text', { x: cx + 4, y: cy - R + 14, 'font-size': 11, fill: '#BDB4A4' }, '100'));

    // 이전 회차 → 현재 회차 순서로 그린다 (이전 회차는 면을 채우지 않아 색이 섞이지 않게)
    if (opt.prevValues) s.appendChild(poly(opt.prevValues, COLOR.prev, 0, '6 4', 2));
    var cur = axes.map(function (a) { return a.value === null ? 0 : a.value; });
    s.appendChild(poly(cur, COLOR.cur, .2, null, 2.8));

    // 꼭짓점 + 라벨
    axes.forEach(function (a, idx) {
      if (opt.prevValues) {
        var pp = pos(idx, opt.prevValues[idx]);
        s.appendChild(el('circle', { cx: pp[0], cy: pp[1], r: 3.6, fill: '#fff', stroke: COLOR.prev, 'stroke-width': 2 }));
      }
      var pc = pos(idx, a.value === null ? 0 : a.value);
      s.appendChild(el('circle', { cx: pc[0], cy: pc[1], r: 5, fill: COLOR[a.band || bandOf(a.value || 0)], stroke: '#fff', 'stroke-width': 2 }));

      var lp = pos(idx, 100);
      var dx = lp[0] - cx, dy = lp[1] - cy;
      var lx = cx + dx * 1.2, ly = cy + dy * 1.2;
      var anchor = Math.abs(dx) < 6 ? 'middle' : (dx > 0 ? 'start' : 'end');
      s.appendChild(el('text', { x: lx, y: ly + (dy > 6 ? 16 : (dy < -6 ? -6 : 5)), 'text-anchor': anchor, 'font-size': 15, 'font-weight': 700, fill: COLOR.ink }, a.label));
      s.appendChild(el('text', {
        x: lx, y: ly + (dy > 6 ? 34 : (dy < -6 ? 12 : 23)), 'text-anchor': anchor,
        'font-size': 14, 'font-weight': 700, fill: a.value === null ? COLOR.muted : COLOR[a.band || bandOf(a.value)]
      }, a.value === null ? '미산출' : a.value.toFixed(1) + '점'));
    });

    // 범례
    var ly0 = H - 16;
    var lg = [{ c: COLOR.cur, t: opt.curLabel || '현재 회차' }];
    if (opt.prevValues) lg.push({ c: COLOR.prev, t: opt.prevLabel || '이전 회차' });
    var x0 = cx - (lg.length * 96) / 2;
    lg.forEach(function (item, i) {
      var x = x0 + i * 96;
      s.appendChild(el('rect', { x: x, y: ly0 - 11, width: 16, height: 11, rx: 3, fill: item.c, 'fill-opacity': .25, stroke: item.c, 'stroke-width': 2 }));
      s.appendChild(el('text', { x: x + 23, y: ly0, 'font-size': 14, fill: COLOR.ink, 'font-weight': 600 }, item.t));
    });

    host.appendChild(s);
    return s;
  }

  /* ---------- 막대 (영역별/지표별 점수) ---------- */
  function bars(host, opt) {
    clear(host);
    var items = opt.items || [];
    var cut = opt.cut || { good: 80, fair: 60 };
    var rowH = opt.rowH || 52, labelW = opt.labelW || 148, W = 660;
    var x0 = labelW + 8, x1 = W - 62, tw = x1 - x0;
    var H = items.length * rowH + 34;
    var s = svgRoot(W, H, 'chart-bars');
    s.setAttribute('aria-label', '영역별 점수 막대그래프');
    var X = function (v) { return x0 + tw * (Math.max(0, Math.min(100, v)) / 100); };

    // 구간 배경 + 눈금
    items.forEach(function (it, i) {
      var y = i * rowH + 12, bh = 22;
      s.appendChild(el('rect', { x: x0, y: y + 6, width: X(cut.fair) - x0, height: bh, fill: COLOR.careBg, rx: 5 }));
      s.appendChild(el('rect', { x: X(cut.fair), y: y + 6, width: X(cut.good) - X(cut.fair), height: bh, fill: COLOR.fairBg }));
      s.appendChild(el('rect', { x: X(cut.good), y: y + 6, width: x1 - X(cut.good), height: bh, fill: COLOR.goodBg, rx: 5 }));

      s.appendChild(el('text', { x: labelW, y: y + 22, 'text-anchor': 'end', 'font-size': 16, 'font-weight': 700, fill: COLOR.ink }, it.label));
      if (it.sub) s.appendChild(el('text', { x: labelW, y: y + 38, 'text-anchor': 'end', 'font-size': 12.5, fill: COLOR.muted }, it.sub));

      if (it.value === null || it.value === undefined) {
        s.appendChild(el('text', { x: x0 + 10, y: y + 22, 'font-size': 14, fill: COLOR.muted, 'font-weight': 600 }, '측정값 없음 — 산출 제외'));
        return;
      }
      var b = it.band || bandOf(it.value, cut);
      s.appendChild(el('rect', { x: x0, y: y + 6, width: Math.max(3, X(it.value) - x0), height: bh, fill: COLOR[b], rx: 5 }));
      // 이전 회차 마커
      if (it.prev !== null && it.prev !== undefined) {
        var px = X(it.prev);
        s.appendChild(el('line', { x1: px, y1: y + 1, x2: px, y2: y + bh + 11, stroke: COLOR.prev, 'stroke-width': 3, 'stroke-linecap': 'round' }));
        s.appendChild(el('polygon', { points: (px - 4) + ',' + (y + 1) + ' ' + (px + 4) + ',' + (y + 1) + ' ' + px + ',' + (y + 7), fill: COLOR.prev }));
      }
      s.appendChild(el('text', { x: x1 + 8, y: y + 23, 'font-size': 17, 'font-weight': 800, fill: COLOR[b] }, it.value.toFixed(1)));
    });

    // 하단 축
    var ay = items.length * rowH + 14;
    s.appendChild(el('line', { x1: x0, y1: ay, x2: x1, y2: ay, stroke: COLOR.grid, 'stroke-width': 1 }));
    [0, cut.fair, cut.good, 100].forEach(function (t) {
      s.appendChild(el('line', { x1: X(t), y1: ay, x2: X(t), y2: ay + 5, stroke: COLOR.grid, 'stroke-width': 1 }));
      s.appendChild(el('text', { x: X(t), y: ay + 19, 'text-anchor': 'middle', 'font-size': 12.5, fill: COLOR.muted }, String(t)));
    });
    host.appendChild(s);
    return s;
  }

  /* ---------- 범례 (구간 3단계) ---------- */
  function bandLegend(host, cut) {
    cut = cut || { good: 80, fair: 60 };
    host.innerHTML =
      '<span><i style="background:' + COLOR.good + '"></i>양호 ' + cut.good + '점 이상</span>' +
      '<span><i style="background:' + COLOR.fair + '"></i>보통 ' + cut.fair + '~' + (cut.good - 1) + '점</span>' +
      '<span><i style="background:' + COLOR.care + '"></i>관리 필요 ' + cut.fair + '점 미만</span>' +
      '<span><i style="background:' + COLOR.prev + '"></i>이전 회차 위치</span>';
  }

  g.Charts = { gauge: gauge, radar: radar, bars: bars, bandLegend: bandLegend, COLOR: COLOR };
})(window);
