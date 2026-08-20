/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"파슬허브","brandSub":"PARCEL HUB LOGISTICS","cats":["주문·배송","입고·재고","반품·정산","계정·권한"],"caseCats":["대시보드","운영 화면","연동·설정"],"items":[{"name":"주문 목록·상세 조회","cat":"주문·배송","desc":"상태·기간·스토어별 필터로 주문을 찾고, 상품·수량·배송지·결제 정보를 상세 화면에서 확인합니다.","meta":"필터 3종 · 상세 뷰","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"주문 상태 실시간 반영","cat":"주문·배송","desc":"Webhook으로 전달된 상태 변경을 목록과 상세에 즉시 반영해 새로고침 없이 최신 상태를 봅니다.","meta":"Webhook 수신","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"배송 Tracking 연동","cat":"주문·배송","desc":"운송장 번호를 표시하고 배송사 추적 페이지로 바로 연결합니다. 지연 건은 별도 표시와 알림으로 안내합니다.","meta":"운송장 · 지연 알림","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"입고 요청(PO) 등록","cat":"입고·재고","desc":"고객사가 입고 예정 물량을 직접 등록하고, 예정·진행중·완료 상태로 진행 현황을 추적합니다.","meta":"등록 · 상태 3단계","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"입고 히스토리·수량 대조","cat":"입고·재고","desc":"완료된 입고 내역을 기간별로 조회하고 요청 수량과 실제 입고 수량의 불일치를 표시합니다.","meta":"이력 · 차이 표시","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"실시간 재고 현황","cat":"입고·재고","desc":"가용·예약·안전 재고를 구분해 보여주고, 안전 재고 미만 SKU는 부족 알림으로 먼저 알립니다.","meta":"가용/예약/안전","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"재고 변동 이력","cat":"입고·재고","desc":"입고·출고·조정 등 재고가 움직인 사유와 시점을 SKU 단위로 남겨 원인을 되짚을 수 있습니다.","meta":"SKU 단위 로그","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"반품 요청·처리 현황","cat":"반품·정산","desc":"대상 주문과 사유를 선택해 반품을 요청하고 접수부터 완료까지 처리 단계를 확인합니다. 사유별 집계도 함께 제공합니다.","meta":"요청 · 사유 통계","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"Invoice 조회·다운로드","cat":"반품·정산","desc":"기간별 청구 내역과 결제 현황을 확인하고 청구서를 PDF 또는 Excel로 내려받습니다.","meta":"PDF · Excel","id":"I8","img":"assets/img/item-8.svg","pub":1},{"name":"고객사 계정·권한 관리","cat":"계정·권한","desc":"고객사별 계정을 발급하고 데이터 접근 범위를 지정합니다. 관리자와 일반 사용자 권한을 나누고 비밀번호 재설정을 지원합니다.","meta":"관리자/일반","id":"I9","img":"assets/img/item-9.svg","pub":1}],"cases":[{"title":"통합 현황 대시보드","type":"대시보드","desc":"오늘의 주문·출고·미출고·반품 건수를 요약 카드로 보여주고, 처리가 밀린 항목은 바로 해당 목록으로 이동합니다.","sub":"요약 카드 · 바로가기","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"기간별 통계 차트","type":"대시보드","desc":"일·주·월 단위 주문량과 출고 추이를 차트로 그립니다. 기간을 바꾸면 아래 표도 함께 갱신됩니다.","sub":"기간 선택 · 실제 렌더","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"고객사별 맞춤 위젯","type":"대시보드","desc":"고객사가 자주 보는 지표를 위젯으로 골라 배치합니다. 배치는 계정별로 저장됩니다.","sub":"위젯 선택 · 계정별 저장","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"주문 목록 · 상세","type":"운영 화면","desc":"상태·기간·스토어 필터와 검색을 조합해 주문을 좁히고, 행을 열면 배송지와 품목이 상세로 펼쳐집니다.","sub":"필터 · 상세 패널","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"재고 현황 · 부족 알림","type":"운영 화면","desc":"가용·예약·안전 재고를 한 표에서 비교하고, 기준 미만 SKU를 상단에 모아 보여줍니다.","sub":"임계값 · 알림 목록","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"언어 전환 · 반응형","type":"연동·설정","desc":"화면 안에서 한/영/중/일을 전환하며 같은 데이터를 확인합니다. 모바일·태블릿 폭에서도 표가 무너지지 않도록 대응했습니다.","sub":"4개 언어 · 반응형","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157762"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"제품·서비스"],['gallery.html',"시공·구축 사례"],['about.html','회사 소개'],['admin.html','관리자']];
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
