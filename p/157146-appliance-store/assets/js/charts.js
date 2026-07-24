/* SEUM 자사몰 시안 — 실험 데이터 시각화 (순수 SVG, 외부 차트 라이브러리 없음)
   표시되는 수치는 전부 시안용 합성(가상) 데이터다.
   무채색 팔레트만 사용하고, 강조가 필요한 1개 계열에만 제품 밴드 색(메탈)을 쓴다. */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var C = { ink: '#15161a', mid: '#9a9da3', pale: '#cbcdd0', metal: '#8a7f6d' };

  function mk(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) { if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]); }
    return e;
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); }
  function txt(el, s) { el.appendChild(document.createTextNode(s)); return el; }

  /* 애니메이션 재생 (모드 전환 시 다시 그리기) */
  function play(svg) {
    var again = svg.classList.contains('in');
    svg.classList.remove('in');
    if (again) {
      // 리플로우 강제 후 다시 in — 전환 애니메이션이 재생된다
      // (rAF 대신 타이머: 헤드리스 등 rAF 미발생 환경에서도 반드시 복구되도록)
      void svg.getBoundingClientRect();
      setTimeout(function () { svg.classList.add('in'); }, 20);
    } else if (window.SEUM && window.SEUM.observeChart) {
      window.SEUM.observeChart(svg);
    } else {
      svg.classList.add('in');
    }
    svg.setAttribute('data-rendered', '1');
  }

  function frame(svg, o) {
    var W = o.w || 640, H = o.h || 300;
    var P = o.pad || { l: 42, r: 18, t: 16, b: 30 };
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('role', 'img');
    clear(svg);
    return {
      W: W, H: H, P: P,
      x0: P.l, x1: W - P.r, yb: H - P.b, yt: P.t,
      sx: function (v) { return P.l + (v - o.x.min) / (o.x.max - o.x.min) * (W - P.r - P.l); },
      sy: function (v) { return (H - P.b) - (v - o.y.min) / (o.y.max - o.y.min) * (H - P.b - P.t); }
    };
  }

  /* y 격자 + 라벨, x 눈금 라벨, 축선 */
  function axes(svg, f, o) {
    (o.y.ticks || []).forEach(function (t) {
      var y = f.sy(t);
      svg.appendChild(mk('line', { x1: f.x0, x2: f.x1, y1: y, y2: y, 'class': 'grid-line' }));
      svg.appendChild(txt(mk('text', { x: f.x0 - 8, y: y + 3.2, 'text-anchor': 'end' }),
        o.y.fmt ? o.y.fmt(t) : String(t)));
    });
    (o.x.ticks || []).forEach(function (t) {
      var x = f.sx(t);
      svg.appendChild(txt(mk('text', { x: x, y: f.yb + 15, 'text-anchor': 'middle' }),
        o.x.fmt ? o.x.fmt(t) : String(t)));
    });
    svg.appendChild(mk('line', { x1: f.x0, x2: f.x1, y1: f.yb, y2: f.yb, 'class': 'ax-line' }));
    if (o.y.label) {
      svg.appendChild(txt(mk('text', { x: f.x0 - 8, y: f.yt - 5, 'text-anchor': 'end' }), o.y.label));
    }
    if (o.x.label) {
      svg.appendChild(txt(mk('text', { x: f.x1, y: f.yb + 15, 'text-anchor': 'end' }), o.x.label));
    }
  }

  function path(pts, f) {
    return pts.map(function (p, i) {
      return (i ? 'L' : 'M') + f.sx(p[0]).toFixed(2) + ' ' + f.sy(p[1]).toFixed(2);
    }).join(' ');
  }

  /* ── 꺾은선 차트 ─────────────────────────────────────────
     o = { w,h,pad, x:{min,max,ticks,label,fmt}, y:{...},
           band:{y0,y1}, series:[{data,color,dim,dot,width}], marks:[{x,y,text,anchor}] } */
  function lineChart(svg, o) {
    var f = frame(svg, o);

    if (o.band) {
      svg.appendChild(mk('rect', {
        x: f.x0, y: f.sy(o.band.y1), width: f.x1 - f.x0,
        height: Math.abs(f.sy(o.band.y0) - f.sy(o.band.y1)), 'class': 'band'
      }));
    }
    axes(svg, f, o);

    o.series.forEach(function (s) {
      if (s.fill) {
        var a = path(s.data, f) + ' L' + f.sx(s.data[s.data.length - 1][0]).toFixed(2) + ' ' + f.yb +
                ' L' + f.sx(s.data[0][0]).toFixed(2) + ' ' + f.yb + ' Z';
        var ar = mk('path', { d: a, 'class': 'area' });
        ar.style.fill = s.fill;
        svg.appendChild(ar);
      }
      var p = mk('path', { d: path(s.data, f), 'class': 'ser' + (s.dim ? ' dim' : '') });
      p.style.stroke = s.color || C.ink;
      if (s.width) p.style.strokeWidth = s.width;
      svg.appendChild(p);
      if (!s.dim) {
        var len = p.getTotalLength ? p.getTotalLength() : 0;
        if (len) { p.setAttribute('data-len', '1'); p.style.setProperty('--len', len.toFixed(1)); }
      }
      if (s.dot) {
        var dp = s.dot === 'last' ? s.data[s.data.length - 1] : s.dot;
        var c = mk('circle', { cx: f.sx(dp[0]), cy: f.sy(dp[1]), r: 3, 'class': 'dot' });
        c.style.fill = s.color || C.ink;
        svg.appendChild(c);
      }
    });

    (o.marks || []).forEach(function (m) {
      if (m.vline) {
        svg.appendChild(mk('line', { x1: f.sx(m.x), x2: f.sx(m.x), y1: f.sy(m.y), y2: f.yb, 'class': 'mark-line' }));
        svg.appendChild(mk('circle', { cx: f.sx(m.x), cy: f.sy(m.y), r: 2.6, 'class': 'dot mark-line' }));
      }
      var t = mk('text', {
        x: f.sx(m.x) + (m.dx || 0), y: f.sy(m.y) + (m.dy || -10),
        'text-anchor': m.anchor || 'middle', 'class': 'mark-tx'
      });
      svg.appendChild(txt(t, m.text));
    });

    play(svg);
  }

  /* ── 세로 막대 ───────────────────────────────────────────
     o = { items:[{label,value,note}], y:{min,max,ticks,fmt}, highlight:idx, fmt } */
  function barsV(svg, o) {
    var n = o.items.length;
    var f = frame(svg, { w: o.w, h: o.h, pad: o.pad, x: { min: 0, max: n }, y: o.y });
    (o.y.ticks || []).forEach(function (t) {
      var y = f.sy(t);
      svg.appendChild(mk('line', { x1: f.x0, x2: f.x1, y1: y, y2: y, 'class': 'grid-line' }));
      svg.appendChild(txt(mk('text', { x: f.x0 - 8, y: y + 3.2, 'text-anchor': 'end' }),
        o.y.fmt ? o.y.fmt(t) : String(t)));
    });
    svg.appendChild(mk('line', { x1: f.x0, x2: f.x1, y1: f.yb, y2: f.yb, 'class': 'ax-line' }));

    var step = (f.x1 - f.x0) / n;
    var bw = Math.min(o.barW || 34, step * 0.56);

    o.items.forEach(function (it, i) {
      var cx = f.x0 + step * (i + .5);
      var y = f.sy(it.value);
      var g = mk('g', { 'class': 'bar-g' });
      g.style.setProperty('--i', i);
      g.style.setProperty('--sy', '.03');
      g.style.transformOrigin = cx.toFixed(1) + 'px ' + f.yb.toFixed(1) + 'px';
      var r = mk('rect', { x: cx - bw / 2, y: y, width: bw, height: Math.max(0, f.yb - y), 'class': 'bar' });
      r.style.fill = (o.highlight === i) ? C.metal : (o.color || C.ink);
      if (o.faded && o.faded.indexOf(i) >= 0) r.style.fill = C.pale;
      g.appendChild(r);
      var vt = txt(mk('text', { x: cx, y: y - 7, 'text-anchor': 'middle' }),
        o.fmt ? o.fmt(it.value) : String(it.value));
      vt.style.fill = C.ink;
      g.appendChild(vt);
      svg.appendChild(g);

      var lt = txt(mk('text', { x: cx, y: f.yb + 16, 'text-anchor': 'middle', 'class': 'cat' }), it.label);
      svg.appendChild(lt);
      if (it.note) {
        svg.appendChild(txt(mk('text', { x: cx, y: f.yb + 28, 'text-anchor': 'middle', 'class': 'cat' }), it.note));
      }
    });
    play(svg);
  }

  /* ── 가로 막대 ───────────────────────────────────────────
     o = { items:[{label,value,note}], max, unit, ref:{value,label}, highlight:idx } */
  function barsH(svg, o) {
    var W = o.w || 640, H = o.h || 260;
    var P = o.pad || { l: 72, r: 54, t: 10, b: 26 };
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    clear(svg);

    var x0 = P.l, x1 = W - P.r, yt = P.t, yb = H - P.b;
    var n = o.items.length, step = (yb - yt) / n, bh = Math.min(o.barH || 20, step * .58);
    var sx = function (v) { return x0 + (v / o.max) * (x1 - x0); };

    if (o.ref) {
      var rx = sx(o.ref.value);
      svg.appendChild(mk('line', { x1: rx, x2: rx, y1: yt - 2, y2: yb + 2, 'class': 'mark-line' }));
      var rt = txt(mk('text', { x: rx, y: yb + 16, 'text-anchor': 'middle', 'class': 'mark-tx' }), o.ref.label);
      svg.appendChild(rt);
    }

    o.items.forEach(function (it, i) {
      var cy = yt + step * (i + .5);
      var g = mk('g', { 'class': 'bar-g' });
      g.style.setProperty('--i', i);
      g.style.setProperty('--sx', '.02');
      g.style.setProperty('--sy', '1');
      g.style.transformOrigin = x0.toFixed(1) + 'px ' + cy.toFixed(1) + 'px';
      var r = mk('rect', { x: x0, y: cy - bh / 2, width: Math.max(1, sx(it.value) - x0), height: bh, 'class': 'bar' });
      r.style.fill = (o.highlight === i) ? C.metal : (o.color || C.ink);
      if (o.faded && o.faded.indexOf(i) >= 0) r.style.fill = C.pale;
      g.appendChild(r);
      var vt = txt(mk('text', { x: sx(it.value) + 8, y: cy + 3.4 }), (o.fmt ? o.fmt(it.value) : it.value) + (o.unit || ''));
      vt.style.fill = C.ink;
      g.appendChild(vt);
      svg.appendChild(g);

      var lt = txt(mk('text', { x: x0 - 10, y: cy + 3.8, 'text-anchor': 'end', 'class': 'cat' }), it.label);
      svg.appendChild(lt);
    });
    play(svg);
  }

  /* ── 스파크라인 (축·라벨 없음, 메인 페이지 요약용) ───── */
  function spark(svg, o) {
    var W = o.w || 260, H = o.h || 64;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'none');
    clear(svg);
    var xs = o.data.map(function (p) { return p[0]; }), ys = o.data.map(function (p) { return p[1]; });
    var xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs);
    var ymin = o.min !== undefined ? o.min : Math.min.apply(null, ys);
    var ymax = o.max !== undefined ? o.max : Math.max.apply(null, ys);
    var f = {
      sx: function (v) { return 1 + (v - xmin) / (xmax - xmin) * (W - 2); },
      sy: function (v) { return (H - 3) - (v - ymin) / (ymax - ymin) * (H - 6); }
    };
    var dstr = path(o.data, f);
    var ar = mk('path', { d: dstr + ' L' + (W - 1) + ' ' + H + ' L1 ' + H + ' Z', 'class': 'area' });
    ar.style.fill = 'rgba(21,22,26,.07)';
    svg.appendChild(ar);
    var p = mk('path', { d: dstr, 'class': 'ser' });
    p.style.stroke = o.color || C.ink;
    p.style.strokeWidth = 1.4;
    svg.appendChild(p);
    var len = p.getTotalLength ? p.getTotalLength() : 0;
    if (len) { p.setAttribute('data-len', '1'); p.style.setProperty('--len', len.toFixed(1)); }
    play(svg);
  }

  window.SEUM = window.SEUM || {};
  window.SEUM.chart = { line: lineChart, barsV: barsV, barsH: barsH, spark: spark, colors: C };
})();
