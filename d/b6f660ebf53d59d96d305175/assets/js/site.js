/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온숨","brandSub":"Sauna, Rest & Recovery Goods — Busan","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["타월","가운","모자","휴식 루틴","공간 예고"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"ON-T01 와플 사우나 타월","cat":"타월","desc":"두꺼운 와플 조직의 대형 타월. 상세는 팝업으로 열리고, 소재·세탁법·사이즈표를 탭으로 나눴습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"ON-T02 핸드 타월 2매 세트","cat":"타월","desc":"세트 구성 예시입니다. 옵션 선택(색상 2종) 화면을 빌더 기본 옵션 UI에 맞춰 그렸습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"ON-R01 린넨 블렌드 배스 가운","cat":"가운","desc":"사이즈 옵션 중 L은 품절 상태로 표기했습니다. 품절 옵션은 회색 처리하고 재입고 알림 버튼을 둡니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"ON-R02 숏 가운","cat":"가운","desc":"출시 예정 상품입니다. 가격 대신 '출시 예정' 라벨이 붙고, 장바구니 버튼은 비활성입니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"ON-H01 펠트 사우나 모자","cat":"모자","desc":"열기에서 머리를 보호하는 용도라는 쓰임새 설명을 상단에, 사양 정보는 하단에 배치했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"ON-H02 니트 사우나 모자","cat":"모자","desc":"전체 품절 상태의 상품 카드입니다. 목록에서 숨기지 않고 '품절' 라벨과 함께 맨 뒤로 보냅니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"온·냉·쉼 세 번의 순환","cat":"휴식 루틴","desc":"브랜드 콘텐츠 글 예시입니다. 사진 1장과 짧은 문단으로 구성했고, 관련 상품 2개를 하단에 연결합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"부산, 바다 옆의 열기","cat":"공간 예고","desc":"공간이 확정되기 전에 쓰는 예고 섹션입니다. 위치 대신 지역과 방향성만 쓰고, 사진 자리는 텍스처 이미지로 채웁니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 사진이 없을 때의 공간·시설 페이지","type":"예외 · 콘텐츠 미확정","desc":"실제 사진 대신 재질 이미지와 '준비 중인 공간' 문구로 구성합니다. 공간이 확정되면 같은 틀에 사진만 바꿔 넣으면 됩니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"사이즈 일부 품절 가운 주문","type":"예외 · 재고","desc":"L 사이즈를 선택하면 장바구니 버튼 대신 재입고 알림 신청으로 바뀝니다. 주문은 막고 안내만 남깁니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"방문 예약 영역 선반영","type":"확장 · 비활성","desc":"메뉴와 공간 페이지 하단에 예약 자리만 잡아 두었습니다. 지금은 '오픈 시 안내' 상태로 두고, 오픈하면 예약 위젯을 연결합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"모바일에서 시설 상세 팝업","type":"반응형","desc":"PC에서는 팝업으로 뜨는 시설 상세가 모바일에서는 화면 아래에서 올라오는 시트로 바뀝니다. 닫기 버튼은 엄지가 닿는 위치에 둡니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"비회원 장바구니 → 로그인 요구","type":"예외 · 결제 흐름","desc":"비회원이 결제를 누르면 로그인과 비회원 주문 중에서 고르는 화면을 거칩니다. 장바구니 내용은 그대로 유지됩니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"출시 예정 상품 노출","type":"예외 · 판매 상태","desc":"가격과 구매 버튼 없이 '출시 예정' 라벨만 보여줍니다. 브랜드를 먼저 알리고 판매는 나중에 여는 상황을 가정했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]];
    var links = nav.map(function(n){
      var on = n[0].indexOf(active)===0 || (active==='index'&&n[0]==='index.html');
      return '<a href="'+n[0]+'"'+(n[0].slice(0,-5)===active?' class="on"':'')+'>'+n[1]+'</a>';
    }).join('');
    document.body.insertAdjacentHTML('afterbegin',
      '<div class="demobar">이 사이트는 <b>제안용 데모</b>입니다 — 브랜드·이미지·수치·사례는 모두 <b>합성</b>이며 실제 정보가 아닙니다. 문의 전송·결제 등은 화면 동작만 재현합니다.</div>'
      + '<header class="hdr"><div class="hdr-in">'
      + '<a class="brand" href="index.html"><span class="swz"><i style="background:var(--brand)"></i><i style="background:var(--accent)"></i><i style="background:var(--brand-2)"></i></span>'
      + D.brand+' <small>'+D.brandSub+'</small></a>'
      + '<nav class="nav">'+links+'</nav>'
      + '<button class="cta" onclick="location.href=\'about.html#contact\'">문의하기</button>'
      + '</div></header>');
  }
  function footer(){
    document.body.insertAdjacentHTML('beforeend',
      '<footer class="foot"><div class="wrap"><div class="cols"><div><div class="brand2">'+D.brand+'</div>'
      + '<div style="margin-top:8px;max-width:34ch">'+D.brandSub+'</div></div>'
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px">'
      + D.nav.slice(1).map(function(n){ return '<a href="'+n[0]+'">'+n[1]+'</a>' }).join(' · ')
      + '</div></div></div>'
      + '<div class="fine">제안용 데모 사이트 · 가상 브랜드 · 실제 회사·제품·사례가 아닙니다.'+(D.projectId?' (발주 #'+D.projectId+' 제안)':'')+'</div>'
      + '</div></footer><div class="toast-host" id="demoToast"></div>');
  }
  function toast(msg){
    var h=document.getElementById('demoToast'); if(!h) return;
    var d=document.createElement('div'); d.className='toast'; d.textContent=msg; h.appendChild(d);
    setTimeout(function(){ d.remove(); }, 2400);
  }
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  return { D:D, chrome:chrome, footer:footer, toast:toast, esc:esc };
})();
