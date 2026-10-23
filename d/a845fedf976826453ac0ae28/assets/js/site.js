/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"나른 NAREUN","brandSub":"Sauna, Rest & Bath Goods — Busan","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["타월","가운","사우나 모자","세트","공간 (준비 중)"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"뢰울 와플 타월 70×140","cat":"타월","desc":"SKU NR-TW-0701 · 오트밀/차콜 2색 · 상세 이미지는 클라이언트 제공분으로 교체되는 자리","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"뢰울 핸드 타월 40×80","cat":"타월","desc":"SKU NR-TW-0402 · 차콜 색상 품절 표시 상태 예시 — 품절 옵션은 회색 처리, 재입고 알림 버튼 노출","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"쉼 리넨 가운 FREE","cat":"가운","desc":"SKU NR-RB-1001 · 사이즈 단일 · 착용 컷 미수급 시 원단 클로즈업 1장으로 대체하는 레이아웃","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"쉼 와플 가운 S/M/L","cat":"가운","desc":"SKU NR-RB-1003 · L 사이즈 재고 0 → 옵션 선택 불가 상태와 안내 문구 예시","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"펠트 사우나 모자 · 그레이","cat":"사우나 모자","desc":"SKU NR-HT-2001 · 열 차단용 울 펠트 · 관리법 아코디언(손세탁·건조) 포함","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"펠트 사우나 모자 · 크림","cat":"사우나 모자","desc":"SKU NR-HT-2002 · 판매 예정 상태 — 가격 대신 '출시 알림 받기' 버튼으로 노출","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"첫 휴식 세트 (타월+모자)","cat":"세트","desc":"SKU NR-SET-01 · 구성품 중 1개 품절 시 세트 자동 판매중지 처리되는 예외 케이스","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"부산 휴식 공간 (가칭)","cat":"공간 (준비 중)","desc":"사진 0장 상태 — 무드 텍스트와 스케치 톤 플레이스홀더로 구성, 공개 시 갤러리 섹션으로 전환","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 사진이 아직 없을 때","type":"콘텐츠 공백","desc":"공간·시설 페이지를 '준비 중' 상태로 열고, 오픈 소식 받기 영역만 노출. 사진이 들어오면 같은 섹션 틀에서 갤러리로 교체.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"예약 기능 미오픈","type":"기능 보류","desc":"예약 버튼 자리를 비활성으로 확보해 두고 '오픈 후 예약 가능' 문구 표시. 나중에 추가해도 레이아웃을 다시 짤 필요가 없음.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"옵션 재고 0 (가운 L 사이즈)","type":"커머스 예외","desc":"선택 불가 옵션을 회색 처리하고 재입고 알림 신청으로 연결. 장바구니 담기 버튼은 남은 옵션 선택 시에만 활성.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"결제 실패 후 복귀","type":"결제 예외","desc":"결제 창에서 취소·실패 시 장바구니 상태를 그대로 유지하고 상단에 실패 안내 배너를 띄우는 화면.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"브랜드 아이덴티티 미확정","type":"디자인 의존","desc":"로고·키 컬러·폰트 전달 전에는 임시 토큰으로 구조만 확정. 11월 전달 후 토큰만 바꿔 전 화면에 일괄 반영.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 범위 표시","type":"운영","desc":"메인 배너 문구·상품·공지 띠는 관리자 직접 수정 영역, 섹션 배치·여백·타이포는 디자인 고정 영역으로 구분해 전달.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
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
