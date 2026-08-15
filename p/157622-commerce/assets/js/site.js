/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"하루마켓","brandSub":"HARU MARKETPLACE","cats":["생활·주방","패션·잡화","식품·간편식","홈·인테리어"],"caseCats":["관리자","모니터링","앱·모바일웹"],"items":[{"name":"무선 핸디 블렌더","cat":"생활·주방","desc":"한 손에 들어오는 크기로 소량 재료도 간편하게 갈아냅니다.","meta":"라온리빙 · 재고 42","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"이중 진공 텀블러 500ml","cat":"생활·주방","desc":"이중 진공 구조로 음료 온도를 오래 유지하는 스테인리스 텀블러.","meta":"온담공방 · 재고 128","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"코튼 크로스백","cat":"패션·잡화","desc":"가벼운 면 소재에 안주머니를 더한 데일리 크로스백.","meta":"그린테일 · 재고 17","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"리넨 오버셔츠","cat":"패션·잡화","desc":"통기성 좋은 리넨 혼방으로 사계절 겹쳐 입기 좋은 셔츠.","meta":"모라비 · 재고 63","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"저온 로스팅 그래놀라 400g","cat":"식품·간편식","desc":"귀리와 견과를 낮은 온도로 구워 바삭함을 살린 그래놀라.","meta":"들담식품 · 재고 91","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"국산 콩 두유 6입","cat":"식품·간편식","desc":"국산 대두만 사용해 담백하게 갈아낸 무가당 두유 6입 세트.","meta":"두레곡물 · 재고 205","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"원목 사이드 테이블","cat":"홈·인테리어","desc":"소파 옆에 두기 좋은 높이의 단단한 원목 사이드 테이블.","meta":"목선공방 · 재고 8","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"린넨 암막 커튼 2폭","cat":"홈·인테리어","desc":"자연스러운 결이 살아 있는 린넨 소재의 암막 커튼 2폭 구성.","meta":"하루패브릭 · 재고 34","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"입점사 상품 등록","type":"관리자","desc":"입점사가 상품 정보·옵션·재고·가격을 직접 등록하고 수정합니다. 승인 상태가 목록에 함께 표시됩니다.","sub":"React 관리자","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"주문·정산 내역","type":"관리자","desc":"입점사별 주문 건과 정산 예정 내역을 기간으로 나눠 확인하는 화면입니다.","sub":"React 관리자","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"배너·팝업 교체","type":"관리자","desc":"메인 배너 이미지와 팝업 문구를 배포 없이 관리자 화면에서 바로 교체합니다.","sub":"콘텐츠 운영","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"서버·DB 상태 보드","type":"모니터링","desc":"백엔드 응답 시간과 DB 연결 상태를 한 화면에 모아 이상 구간을 눈에 띄게 표시합니다.","sub":"Node.js 백엔드","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"도메인·인증서 만료 체크","type":"모니터링","desc":"도메인과 SSL 인증서 만료일을 남은 기간순으로 정렬해 놓치지 않게 합니다.","sub":"인프라 관리","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"모바일 상품 상세","type":"앱·모바일웹","desc":"앱과 모바일 웹에서 같은 레이아웃으로 보이도록 정리한 상품 상세 화면입니다.","sub":"React Native","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157622"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"상품"],['gallery.html',"스타일 · 후기"],['about.html','회사 소개'],['admin.html','관리자']];
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
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px"><a href="catalog.html">'+D.labels.catalog+'</a> · <a href="gallery.html">'+D.labels.gallery+'</a> · <a href="about.html">회사 소개</a></div></div></div>'
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
