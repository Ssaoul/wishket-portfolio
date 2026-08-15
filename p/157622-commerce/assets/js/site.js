/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"마켓하버","brandSub":"MARKET HARBOR","cats":["리빙","푸드","패션잡화","가전·디지털"],"caseCats":["장애 대응","버그 수정","콘텐츠 운영","인프라 점검"],"items":[{"name":"원목 사이드테이블","cat":"리빙","desc":"입점사 재고 API 연동 · 옵션 3종","meta":"하버리빙 · 재고 동기화 정상","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"라탄 조명 스탠드","cat":"리빙","desc":"배송비 정책 판매자별 개별 적용","meta":"하버리빙 · 노출 중","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"산지직송 사과 5kg","cat":"푸드","desc":"신선식품 예약배송 · 출고일 표기","meta":"들녘상회 · 예약 판매","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"수제 그래놀라 세트","cat":"푸드","desc":"정기구독 옵션 · 회차별 결제","meta":"들녘상회 · 노출 중","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"코튼 오버셔츠","cat":"패션잡화","desc":"사이즈·컬러 조합 재고 분리 관리","meta":"데일리웨어 · 일부 옵션 품절","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"가죽 카드지갑","cat":"패션잡화","desc":"각인 요청 옵션 · 주문서 메모 연동","meta":"데일리웨어 · 노출 중","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"무선 블루투스 이어폰","cat":"가전·디지털","desc":"A/S 안내 탭 · 판매자 문의 연결","meta":"디지털허브 · 노출 중","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"휴대용 미니 가습기","cat":"가전·디지털","desc":"타임세일 배너 연동 · 종료 시 자동 해제","meta":"디지털허브 · 기획전 진행","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"결제 지연 원인 추적","type":"장애 대응","desc":"주문 폭주 시간대에 응답이 느려진 구간을 서버·DB 지표로 되짚어 병목 쿼리를 찾아 정리했습니다.","sub":"Node.js · DB 모니터링","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"앱 상품 목록 깨짐 수정","type":"버그 수정","desc":"React Native 앱의 목록 화면에서 이미지 비율이 어긋나던 문제를 iOS·Android 양쪽에서 확인하고 맞췄습니다.","sub":"React Native","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"관리자 정산 수치 오표기","type":"버그 수정","desc":"관리자 페이지에서 판매자별 정산 금액이 다른 값으로 노출되던 조회 조건을 바로잡았습니다.","sub":"React 관리자","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"기획전 배너·팝업 교체","type":"콘텐츠 운영","desc":"요청받은 배너 이미지와 안내 문구, 첫 화면 팝업을 노출 기간에 맞춰 올리고 종료 시 내렸습니다.","sub":"월 N건 협의 범위","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"도메인·SSL 만료 점검","type":"인프라 점검","desc":"인증서와 도메인 만료일을 목록으로 정리하고, 갱신 시점 전에 미리 알리도록 체크 항목에 넣었습니다.","sub":"클라우드 환경","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"OS 업데이트 호환 확인","type":"인프라 점검","desc":"모바일 OS 마이너 업데이트 후 앱 주요 화면을 돌아보고 어긋난 레이아웃을 정리했습니다.","sub":"iOS · Android","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157622"};
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
