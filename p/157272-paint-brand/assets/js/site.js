/* ============================================================
   PRISM 페인트 데모 — 공유 셸 + 데이터 + 상호작용
   전부 브라우저 안에서만 동작. 서버·결제·실제 문의 전송 없음(정직 고지).
   모든 심볼은 window.PR 하나로 격리(페이지 인라인과 충돌 방지).
   ============================================================ */
(function () {
  'use strict';

  var NAV = [
    { href: 'index.html', label: '홈', key: 'index' },
    { href: 'products.html', label: '제품', key: 'products' },
    { href: 'projects.html', label: '시공 사례', key: 'projects' },
    { href: 'about.html', label: '회사 소개', key: 'about' },
    { href: 'admin.html', label: '관리자', key: 'admin' }
  ];

  function renderChrome(active) {
    var demobar = '<div class="demobar">제안용 <b>홈페이지 데모</b> · 가상 브랜드 <b>PRISM 페인트</b> · 이미지·제품·시공사례·수치는 전부 <b>합성</b>이며 문의 전송·지도는 화면 동작만 재현합니다</div>';
    var nav = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="on"' : '') + '>' + n.label + '</a>';
    }).join('');
    var hdr = '<header class="hdr"><div class="hdr-in">'
      + '<a href="index.html" class="brand"><span class="swz"><i style="background:var(--brand)"></i><i style="background:var(--terra)"></i><i style="background:var(--cream)"></i></span>PRISM<small>페인트</small></a>'
      + '<nav class="nav">' + nav + '</nav>'
      + '<a href="about.html#contact" class="cta">견적 문의</a>'
      + '<button class="menu-btn btn line" style="border-color:var(--line);color:var(--ink)" onclick="document.querySelector(\'.nav\').style.display=\'flex\'">메뉴</button>'
      + '</div></header>';
    document.body.insertAdjacentHTML('afterbegin', demobar + hdr);
  }

  function renderFooter() {
    var f = '<footer class="foot"><div class="wrap"><div class="cols">'
      + '<div style="flex:1;min-width:200px"><div class="brand2">PRISM 페인트</div><p style="margin:10px 0 0;max-width:34ch">색으로 공간의 인상을 바꾸는 프리미엄 건축용 페인트. 가상 브랜드입니다.</p></div>'
      + '<div><b style="color:#fff">바로가기</b><p style="margin:8px 0 0;line-height:2"><a href="products.html">제품</a><br><a href="projects.html">시공 사례</a><br><a href="about.html">회사 소개</a></p></div>'
      + '<div><b style="color:#fff">문의</b><p style="margin:8px 0 0;line-height:2">평일 09:00–18:00<br>견적 문의는 <a href="about.html#contact">문의 폼</a></p></div>'
      + '</div><div class="fine">© 2026 PRISM Paint (가상 브랜드). 제안용 데모 — 실제 기업·연락처가 아니며 모든 콘텐츠는 합성입니다. 참고 레퍼런스 구조만 반영했습니다.</div></div></footer>';
    document.body.insertAdjacentHTML('beforeend', f);
  }

  /* ── 데이터(합성) ─────────────────────────────────────── */
  var IMG = {
    hero: 'assets/img/hero.jpg', product: 'assets/img/product.jpg',
    bedroom: 'assets/img/case-bedroom.jpg', cafe: 'assets/img/case-cafe.jpg',
    swatch: 'assets/img/swatch.jpg', facade: 'assets/img/case-facade.jpg'
  };

  var PRODUCTS = [
    { id: 'P1', name: '프리즘 매트 인테리어', cat: '실내용', img: IMG.product, desc: '저광 매트 마감의 실내 벽면용 프리미엄 수성 페인트.', tags: ['실내','수성','저VOC'], colors: ['#2f6f5e','#c06a4a','#9caf8a','#ecd9b6'], feature: '냄새 적음·빠른 건조' },
    { id: 'P2', name: '프리즘 듀러블 외부용', cat: '외부용', img: IMG.facade, desc: '자외선·우수에 강한 외벽 전용 내후성 페인트.', tags: ['외부','내후성'], colors: ['#f5f0e6','#2c2c2e','#b08d4c'], feature: '자외선·방수 강화' },
    { id: 'P3', name: '프리즘 소프트 톤 컬렉션', cat: '컬러 컬렉션', img: IMG.swatch, desc: '디자이너가 큐레이션한 뮤트 톤 120색 팔레트.', tags: ['컬러','큐레이션'], colors: ['#9caf8a','#c9b79c','#7a8a94','#d8c3b0'], feature: '120색 조색' },
    { id: 'P4', name: '프리즘 키즈 세이프', cat: '실내용', img: IMG.bedroom, desc: '아이 방을 위한 친환경 인증 저자극 페인트.', tags: ['실내','친환경'], colors: ['#e9d9c3','#bcd0c8','#e7c9c2'], feature: '친환경 인증' },
    { id: 'P5', name: '프리즘 프라이머', cat: '기능성', img: IMG.product, desc: '들뜸·얼룩을 잡아주는 베이스 프라이머.', tags: ['하도','기능성'], colors: ['#f0ebe2','#d8d2c6'], feature: '부착력·은폐력' },
    { id: 'P6', name: '프리즘 세라믹 코트', cat: '기능성', img: IMG.cafe, desc: '주방·상업공간용 오염에 강한 세라믹 코팅 페인트.', tags: ['기능성','상업'], colors: ['#2f6f5e','#3a3a3c','#c7bda9'], feature: '오염·마모 강화' }
  ];

  var CASES = [
    { id: 'C1', title: '한남동 주택 리모델링', type: '주거', img: IMG.hero, product: '프리즘 매트 인테리어', desc: '딥그린 포인트 벽으로 공간에 무게감을 준 거실.' },
    { id: 'C2', title: '연남동 카페 인테리어', type: '상업', img: IMG.cafe, product: '프리즘 세라믹 코트', desc: '그린·크림 조합으로 아늑한 분위기의 카페.' },
    { id: 'C3', title: '판교 아파트 침실', type: '주거', img: IMG.bedroom, product: '프리즘 키즈 세이프', desc: '테라코타 톤으로 따뜻하게 마감한 침실.' },
    { id: 'C4', title: '성수동 오피스 외벽', type: '외부', img: IMG.facade, product: '프리즘 듀러블 외부용', desc: '화이트·차콜 트림으로 정돈한 상업 건물 외벽.' },
    { id: 'C5', title: '컬러 컨설팅 · 쇼룸', type: '컨설팅', img: IMG.swatch, product: '프리즘 소프트 톤', desc: '브랜드에 맞는 팔레트를 제안한 쇼룸 컨설팅.' },
    { id: 'C6', title: '분당 단독주택 전체 도장', type: '주거', img: IMG.hero, product: '프리즘 매트 인테리어', desc: '전실 톤앤매너를 통일한 단독주택 프로젝트.' }
  ];

  /* ── 유틸 ─────────────────────────────────────────────── */
  function toast(msg) {
    var h = document.querySelector('.toast-host');
    if (!h) { h = document.createElement('div'); h.className = 'toast-host'; document.body.appendChild(h); }
    var t = document.createElement('div'); t.className = 'toast'; t.innerHTML = msg; h.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(function () { t.remove(); }, 300); }, 2400);
  }
  function swatchRow(colors) {
    return '<div class="swatches">' + colors.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</div>';
  }

  window.PR = { renderChrome: renderChrome, renderFooter: renderFooter, IMG: IMG, PRODUCTS: PRODUCTS, CASES: CASES, toast: toast, swatchRow: swatchRow };
})();
