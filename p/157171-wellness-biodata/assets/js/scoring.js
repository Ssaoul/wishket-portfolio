/* ==========================================================================
   규칙 기반 웰니스 점수화 엔진 (WB)
   - AI 학습 모델이 아니라 "기준표 + 가중 평균" 만으로 계산한다(1단계 범위).
   - 모든 임계값·가중치는 관리자 화면에서 편집 가능하며 값만 저장한다(JSON 직렬화).
   - 산출 결과는 웰니스 상태 구간(양호/보통/관리 필요)이며 의학적 판정이 아니다.
   ========================================================================== */
(function (g) {
  'use strict';

  var LS_CONFIG = 'wbd157171:config';
  var LS_DATA = 'wbd157171:data';

  /* ---------- localStorage 안전 래퍼 (file:// · 프라이빗 모드 대비) ---------- */
  var mem = {};
  var LS = {
    get: function (k) {
      try { var v = window.localStorage.getItem(k); return v === null ? (mem[k] || null) : v; }
      catch (e) { return mem[k] || null; }
    },
    set: function (k, v) {
      mem[k] = v;
      try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; }
    },
    del: function (k) {
      delete mem[k];
      try { window.localStorage.removeItem(k); } catch (e) { /* noop */ }
    }
  };

  /* ---------- 지표 레지스트리 ----------
     src: body|cardio|hrv|survey, derived 는 계산 지표.
     ref:true 는 화면 표시만 하고 점수에 반영하지 않는 참고 지표. */
  var METRICS = [
    // 신체구성
    { key: 'bmi',      domain: 'body',   name: 'BMI',            unit: '',      dec: 1, src: 'body',   field: 'bmi' },
    { key: 'fat',      domain: 'body',   name: '체지방률',        unit: '%',     dec: 1, src: 'body',   field: 'fat' },
    { key: 'smmPct',   domain: 'body',   name: '골격근량 비율',    unit: '%',     dec: 1, src: 'derived', calc: 'smmPct', note: '골격근량 ÷ 체중 × 100' },
    { key: 'visceral', domain: 'body',   name: '내장지방 레벨',    unit: 'lv',    dec: 0, src: 'body',   field: 'visceral' },
    { key: 'weight',   domain: 'body',   name: '체중',            unit: 'kg',    dec: 1, src: 'body',   field: 'weight', ref: true },
    { key: 'smm',      domain: 'body',   name: '골격근량',        unit: 'kg',    dec: 1, src: 'body',   field: 'smm',    ref: true },
    { key: 'bmr',      domain: 'body',   name: '기초대사량',      unit: 'kcal',  dec: 0, src: 'body',   field: 'bmr',    ref: true },
    // 심혈관
    { key: 'sbp',      domain: 'cardio', name: '수축기 혈압',      unit: 'mmHg',  dec: 0, src: 'cardio', field: 'sbp' },
    { key: 'dbp',      domain: 'cardio', name: '이완기 혈압',      unit: 'mmHg',  dec: 0, src: 'cardio', field: 'dbp' },
    { key: 'pulse',    domain: 'cardio', name: '맥박',            unit: 'bpm',   dec: 0, src: 'cardio', field: 'pulse' },
    { key: 'spo2',     domain: 'cardio', name: '산소포화도',      unit: '%',     dec: 0, src: 'cardio', field: 'spo2' },
    // 자율신경 (HRV)
    { key: 'sdnn',     domain: 'auto',   name: 'SDNN',           unit: 'ms',    dec: 0, src: 'hrv',    field: 'sdnn' },
    { key: 'rmssd',    domain: 'auto',   name: 'RMSSD',          unit: 'ms',    dec: 0, src: 'hrv',    field: 'rmssd' },
    { key: 'lfhf',     domain: 'auto',   name: 'LF/HF 비율',      unit: '',      dec: 2, src: 'derived', calc: 'lfhf', note: 'LF ÷ HF' },
    { key: 'lf',       domain: 'auto',   name: 'LF',             unit: 'ms²',   dec: 0, src: 'hrv',    field: 'lf',   ref: true },
    { key: 'hf',       domain: 'auto',   name: 'HF',             unit: 'ms²',   dec: 0, src: 'hrv',    field: 'hf',   ref: true },
    // 스트레스·생활습관 (설문)
    { key: 'stress',   domain: 'life',   name: '스트레스 응답',    unit: '점',    dec: 1, src: 'survey', field: 'stress' },
    { key: 'fatigue',  domain: 'life',   name: '피로 응답',       unit: '점',    dec: 1, src: 'survey', field: 'fatigue' },
    { key: 'sleep',    domain: 'life',   name: '수면 응답',       unit: '점',    dec: 1, src: 'survey', field: 'sleep' },
    { key: 'exercise', domain: 'life',   name: '운동 응답',       unit: '점',    dec: 1, src: 'survey', field: 'exercise' },
    { key: 'habit',    domain: 'life',   name: '생활습관 응답',    unit: '점',    dec: 1, src: 'survey', field: 'habit' }
  ];

  var DOMAIN_META = [
    { key: 'body',   name: '신체구성',        short: '신체구성', desc: '체성분분석기 측정값 기반' },
    { key: 'auto',   name: '자율신경',        short: '자율신경', desc: 'HRV(심박변이도) 측정값 기반' },
    { key: 'cardio', name: '심혈관',          short: '심혈관',   desc: '혈압·맥박·산소포화도 기반' },
    { key: 'life',   name: '스트레스·생활습관', short: '생활습관', desc: '생활습관 설문 응답 기반' }
  ];

  /* ---------- 기본 기준표 (관리자 화면에서 편집 가능) ----------
     bands: [양호 하한, 양호 상한, 보통 하한, 보통 상한] — 성별 구분이 필요한 지표만 F/M 분리 */
  function DEFAULT_CONFIG() {
    return {
      version: 1,
      bandCut: { good: 80, fair: 60 },
      domainWeights: { body: 25, auto: 25, cardio: 25, life: 25 },
      metrics: {
        bmi:      { weight: 20, F: [18.5, 24.9, 17.5, 27.9], M: [18.5, 24.9, 17.5, 27.9] },
        fat:      { weight: 30, F: [18, 28, 14, 33],         M: [10, 20, 8, 25] },
        smmPct:   { weight: 30, F: [30, 37, 26, 41],         M: [38, 46, 34, 50] },
        visceral: { weight: 20, F: [1, 9, 1, 14],            M: [1, 9, 1, 14] },
        sbp:      { weight: 30, F: [100, 124, 90, 139],      M: [100, 124, 90, 139] },
        dbp:      { weight: 25, F: [65, 79, 60, 89],         M: [65, 79, 60, 89] },
        pulse:    { weight: 20, F: [55, 79, 50, 94],         M: [55, 79, 50, 94] },
        spo2:     { weight: 25, F: [96, 100, 94, 100],       M: [96, 100, 94, 100] },
        sdnn:     { weight: 35, F: [40, 100, 25, 140],       M: [40, 100, 25, 140] },
        rmssd:    { weight: 35, F: [25, 80, 15, 110],        M: [25, 80, 15, 110] },
        lfhf:     { weight: 30, F: [0.8, 2.2, 0.5, 4.0],     M: [0.8, 2.2, 0.5, 4.0] },
        stress:   { weight: 25, F: [3.6, 5, 2.6, 5],         M: [3.6, 5, 2.6, 5] },
        fatigue:  { weight: 20, F: [3.6, 5, 2.6, 5],         M: [3.6, 5, 2.6, 5] },
        sleep:    { weight: 25, F: [3.6, 5, 2.6, 5],         M: [3.6, 5, 2.6, 5] },
        exercise: { weight: 20, F: [3.4, 5, 2.4, 5],         M: [3.4, 5, 2.4, 5] },
        habit:    { weight: 10, F: [3.5, 5, 2.5, 5],         M: [3.5, 5, 2.5, 5] }
      }
    };
  }

  var _config = null;
  function getConfig() {
    if (_config) return _config;
    var raw = LS.get(LS_CONFIG);
    if (raw) {
      try {
        var saved = JSON.parse(raw);
        var base = DEFAULT_CONFIG();
        if (saved && saved.version === base.version) {
          base.bandCut = saved.bandCut || base.bandCut;
          base.domainWeights = saved.domainWeights || base.domainWeights;
          Object.keys(base.metrics).forEach(function (k) {
            if (saved.metrics && saved.metrics[k]) base.metrics[k] = saved.metrics[k];
          });
          _config = base;
          return _config;
        }
      } catch (e) { /* 손상된 설정은 기본값으로 되돌린다 */ }
    }
    _config = DEFAULT_CONFIG();
    return _config;
  }
  function saveConfig(cfg) { _config = cfg; return LS.set(LS_CONFIG, JSON.stringify(cfg)); }
  function resetConfig() { _config = null; LS.del(LS_CONFIG); return getConfig(); }
  function isConfigCustomized() { return !!LS.get(LS_CONFIG); }

  /* ---------- 참가자 데이터 저장소 (등록/입력/설문 반영분 유지) ---------- */
  var _data = null;
  function getParticipants() {
    if (_data) return _data;
    var raw = LS.get(LS_DATA);
    if (raw) {
      try { _data = JSON.parse(raw); return _data; } catch (e) { /* fallthrough */ }
    }
    _data = JSON.parse(JSON.stringify(g.DEMO_DATA.participants));
    return _data;
  }
  function saveParticipants(list) { _data = list; return LS.set(LS_DATA, JSON.stringify(list)); }
  function resetParticipants() { _data = null; LS.del(LS_DATA); return getParticipants(); }
  function findParticipant(code) {
    var list = getParticipants();
    for (var i = 0; i < list.length; i++) if (list[i].code === code) return list[i];
    return null;
  }

  /* ---------- 값 추출 ---------- */
  function num(v) { return (v === null || v === undefined || v === '' || isNaN(Number(v))) ? null : Number(v); }

  function metricValue(m, session) {
    if (!session) return null;
    if (m.src === 'derived') {
      if (m.calc === 'smmPct') {
        var b = session.body; if (!b) return null;
        var w = num(b.weight), s = num(b.smm);
        return (w && s) ? (s / w) * 100 : null;
      }
      if (m.calc === 'lfhf') {
        var h = session.hrv; if (!h) return null;
        var lf = num(h.lf), hf = num(h.hf);
        return (lf !== null && hf) ? lf / hf : null;
      }
      return null;
    }
    var grp = session[m.src];
    if (!grp) return null;
    return num(grp[m.field]);
  }

  /* ---------- 단일 지표 점수 (0~100) ----------
     양호 구간   → 84~100 (구간 중앙에 가까울수록 높음)
     보통 구간   → 60~78  (양호 구간에서 멀어질수록 낮음)
     구간 밖     → 25~58  (보통 구간 폭의 절반만큼 벗어나면 하한)
     구간 라벨과 점수 구간 임계값(80/60)이 서로 어긋나지 않도록 계수를 맞췄다. */
  function scoreValue(v, band) {
    var gLo = band[0], gHi = band[1], fLo = band[2], fHi = band[3];
    var s;
    if (v >= gLo && v <= gHi) {
      var half = (gHi - gLo) / 2;
      var d = half === 0 ? 0 : Math.abs(v - (gLo + gHi) / 2) / half;
      s = 100 - 16 * d;
    } else if (v >= fLo && v <= fHi) {
      var t;
      if (v < gLo) t = (gLo - fLo) === 0 ? 1 : (gLo - v) / (gLo - fLo);
      else t = (fHi - gHi) === 0 ? 1 : (v - gHi) / (fHi - gHi);
      s = 78 - 18 * Math.min(1, Math.max(0, t));
    } else {
      var span = Math.max(1e-6, (fHi - fLo) * 0.5);
      var o = v < fLo ? (fLo - v) / span : (v - fHi) / span;
      s = 58 - 33 * Math.min(1, Math.max(0, o));
    }
    return Math.round(Math.min(100, Math.max(0, s)) * 10) / 10;
  }

  function bandOf(score, cfg) {
    var c = (cfg || getConfig()).bandCut;
    return score >= c.good ? 'good' : (score >= c.fair ? 'fair' : 'care');
  }
  var BAND_LABEL = { good: '양호', fair: '보통', care: '관리 필요', none: '미측정' };
  function bandLabel(b) { return BAND_LABEL[b] || '-'; }

  function metricsOf(domainKey, includeRef) {
    return METRICS.filter(function (m) {
      return m.domain === domainKey && (includeRef ? true : !m.ref);
    });
  }

  /* ---------- 세션 종합 점수 ---------- */
  function scoreSession(participant, session, cfg) {
    cfg = cfg || getConfig();
    var sex = participant.sex === 'M' ? 'M' : 'F';
    var domains = DOMAIN_META.map(function (d) {
      var rows = [];
      var wSum = 0, wScore = 0, wAvail = 0;
      metricsOf(d.key, true).forEach(function (m) {
        var v = metricValue(m, session);
        var conf = cfg.metrics[m.key];
        var row = {
          key: m.key, name: m.name, unit: m.unit, dec: m.dec, note: m.note || '',
          value: v, ref: !!m.ref, band: null, score: null,
          range: conf ? conf[sex] : null, weight: conf ? conf.weight : 0
        };
        if (!m.ref && conf) {
          wSum += conf.weight;
          if (v !== null) {
            row.score = scoreValue(v, conf[sex]);
            row.band = bandOf(row.score, cfg);
            wScore += row.score * conf.weight;
            wAvail += conf.weight;
          } else {
            row.band = 'none';
          }
        }
        rows.push(row);
      });
      var score = wAvail > 0 ? Math.round((wScore / wAvail) * 10) / 10 : null;
      return {
        key: d.key, name: d.name, short: d.short, desc: d.desc,
        weight: cfg.domainWeights[d.key],
        score: score, band: score === null ? 'none' : bandOf(score, cfg),
        coverage: wSum > 0 ? wAvail / wSum : 0,
        metrics: rows,
        missing: rows.filter(function (r) { return !r.ref && r.value === null; }).map(function (r) { return r.name; })
      };
    });

    var tw = 0, ts = 0;
    domains.forEach(function (d) { if (d.score !== null) { tw += d.weight; ts += d.score * d.weight; } });
    var total = tw > 0 ? Math.round((ts / tw) * 10) / 10 : null;

    var allRows = domains.reduce(function (a, d) { return a.concat(d.metrics); }, []);
    var scored = allRows.filter(function (r) { return !r.ref; });

    return {
      sessionId: session.id, label: session.label, at: session.at,
      total: total, band: total === null ? 'none' : bandOf(total, cfg),
      domains: domains,
      coverage: scored.length ? scored.filter(function (r) { return r.value !== null; }).length / scored.length : 0,
      missingCount: scored.filter(function (r) { return r.value === null; }).length,
      scoredCount: scored.length
    };
  }

  function domainScore(result, key) {
    for (var i = 0; i < result.domains.length; i++) if (result.domains[i].key === key) return result.domains[i].score;
    return null;
  }
  function metricScore(result, key) {
    for (var i = 0; i < result.domains.length; i++) {
      var rows = result.domains[i].metrics;
      for (var j = 0; j < rows.length; j++) if (rows[j].key === key) return rows[j].score;
    }
    return null;
  }

  /* ---------- 프로그램 추천 규칙 ----------
     "점수가 낮은 영역 → 대응 프로그램" 의 단순 규칙 매칭이며, 참가자 선호도가 있으면 가산한다.
     의료적 처방이 아니라 센터 운영 프로그램 안내다. */
  function recommend(participant, result) {
    var cand = [];
    var push = function (pid, base, reason) { cand.push({ id: pid, score: base, reason: reason }); };
    var d = function (k) { var v = domainScore(result, k); return v === null ? 100 : v; };
    var m = function (k) { var v = metricScore(result, k); return v === null ? 100 : v; };
    var cut = getConfig().bandCut;

    if (d('auto') < cut.good) push('breath', 100 - d('auto'), '자율신경 영역 ' + fmt(d('auto'), 1) + '점 — 호흡·이완 중심 세션을 우선 배치');
    if (m('stress') < cut.good) push('meditation', 96 - m('stress'), '스트레스 응답 ' + fmt(m('stress'), 1) + '점 — 주 1회 이완 훈련 권장');
    if (m('sleep') < cut.good) push('sleep', 94 - m('sleep'), '수면 응답 ' + fmt(m('sleep'), 1) + '점 — 취침 루틴 재설계 워크숍');
    if (d('body') < cut.good) push('strength', 92 - d('body'), '신체구성 영역 ' + fmt(d('body'), 1) + '점 — 골격근량 유지 운동 권장');
    if (d('cardio') < cut.good) push('walk', 90 - d('cardio'), '심혈관 영역 ' + fmt(d('cardio'), 1) + '점 — 저강도 유산소 중심 활동');
    if (m('exercise') < cut.good) push('walk', 88 - m('exercise'), '운동 응답 ' + fmt(m('exercise'), 1) + '점 — 활동량 늘리기부터 시작');
    if (m('fat') < cut.fair || m('visceral') < cut.fair) push('nutrition', 86, '체지방·내장지방 지표가 관리 필요 구간 — 식사 균형 코칭 병행');
    if (participant.age >= 65) push('aqua', 70, '65세 이상 — 관절 부담이 적은 저강도 대안 프로그램');
    if (m('fatigue') < cut.good) push('stretch', 66, '피로 응답 ' + fmt(m('fatigue'), 1) + '점 — 회복 스트레칭 병행');
    if (result.total !== null && result.total >= cut.good) push('walk', 60, '전 영역 양호 구간 — 현재 활동량 유지 프로그램');
    if (cand.length === 0) push('stretch', 50, '기본 추천 — 회복 중심 저강도 프로그램');

    var pref = participant.prefer || [];
    var best = {};
    cand.forEach(function (c) {
      var s = c.score + (pref.indexOf(c.id) >= 0 ? 12 : 0);
      if (!best[c.id] || best[c.id].score < s) best[c.id] = { id: c.id, score: s, reason: c.reason, preferred: pref.indexOf(c.id) >= 0 };
    });
    var out = Object.keys(best).map(function (k) { return best[k]; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 3);

    /* 전 영역이 양호해 규칙이 적게 걸린 경우에도 안내는 3건을 채운다.
       (참가자 선호 프로그램 → 기본 유지 프로그램 순) */
    var FALLBACK = ['walk', 'stretch', 'breath', 'strength', 'meditation', 'nutrition', 'sleep', 'aqua'];
    var order = pref.concat(FALLBACK);
    var picked = function (id) { return out.some(function (o) { return o.id === id; }); };
    for (var i = 0; i < order.length && out.length < 3; i++) {
      if (picked(order[i])) continue;
      var isPref = pref.indexOf(order[i]) >= 0;
      out.push({
        id: order[i], score: 0, preferred: isPref,
        reason: '전 영역이 목표 구간에 있어 현재 활동을 유지하는 안내' + (isPref ? ' · 참가자가 선호한 프로그램' : '')
      });
    }

    return out.map(function (c) {
      var p = null;
      g.DEMO_DATA.programs.forEach(function (x) { if (x.id === c.id) p = x; });
      return { id: c.id, name: p ? p.name : c.id, dur: p ? p.dur : '', desc: p ? p.desc : '', reason: c.reason, preferred: c.preferred };
    });
  }

  /* ---------- 표시 헬퍼 ---------- */
  function fmt(v, dec) {
    if (v === null || v === undefined || isNaN(v)) return '–';
    return Number(v).toFixed(dec === undefined ? 1 : dec);
  }
  function rangeText(range, dec) {
    if (!range) return '–';
    return fmt(range[0], dec) + '~' + fmt(range[1], dec);
  }
  function deltaText(cur, prev) {
    if (cur === null || prev === null || cur === undefined || prev === undefined) return null;
    var dv = Math.round((cur - prev) * 10) / 10;
    return { value: dv, dir: dv > 0.05 ? 'up' : (dv < -0.05 ? 'down' : 'flat'), text: (dv > 0 ? '+' : '') + fmt(dv, 1) };
  }

  g.WB = {
    METRICS: METRICS, DOMAIN_META: DOMAIN_META,
    metricsOf: metricsOf,
    DEFAULT_CONFIG: DEFAULT_CONFIG,
    getConfig: getConfig, saveConfig: saveConfig, resetConfig: resetConfig, isConfigCustomized: isConfigCustomized,
    getParticipants: getParticipants, saveParticipants: saveParticipants, resetParticipants: resetParticipants,
    findParticipant: findParticipant,
    metricValue: metricValue, scoreValue: scoreValue, scoreSession: scoreSession,
    domainScore: domainScore, metricScore: metricScore,
    bandOf: bandOf, bandLabel: bandLabel,
    recommend: recommend,
    fmt: fmt, rangeText: rangeText, deltaText: deltaText,
    _ls: LS
  };
})(window);
