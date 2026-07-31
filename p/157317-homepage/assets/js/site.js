/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"짐가벼운하루","brandSub":"LUGGAGE DELIVERY & STORAGE","cats":["짐배송","짐보관","예약·결제","운영관리"],"caseCats":["고객 화면","관리자 화면","제휴점 화면"],"items":[{"name":"공항 ↔ 숙소 짐배송","cat":"짐배송","desc":"도착 공항에서 숙소까지, 체크아웃 후 숙소에서 공항까지 캐리어를 대신 옮겨 드립니다. 주소는 자동완성으로 입력하고 가까운 거점을 지도에서 확인합니다.","meta":"통화별 정액 · KRW/TWD/JPY/USD","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"숙소 ↔ 숙소 짐배송","cat":"짐배송","desc":"부산에서 김해로, 숙소를 옮기는 날 짐만 먼저 보냅니다. 예약 폼에서 배송 분기를 선택하면 픽업·전달 시간대만 고르면 됩니다.","meta":"픽업 시간대 선택","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"당일 짐보관","cat":"짐보관","desc":"체크아웃과 출국 사이의 빈 시간, 거점 제휴점에 짐을 맡기고 손 가볍게 다닙니다. 보관 분기는 배송과 다른 입력 항목만 보여 줍니다.","meta":"거점 지도 · 거리 표시","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"기간 보관","cat":"짐보관","desc":"여러 날 머무는 동안 쓰지 않는 짐을 맡깁니다. 수량과 기간을 고르면 확정 요금표를 따라 금액이 바로 계산됩니다.","meta":"일 단위 요금","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"로그인 없이 예약 조회","cat":"예약·결제","desc":"예약번호와 성함만으로 진행 상태를 확인합니다. 계정을 만들 필요가 없어 짧게 머무는 여행자도 그대로 씁니다.","meta":"게스트 조회","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"PayPal 임베드 결제","cat":"예약·결제","desc":"예약 화면을 벗어나지 않고 결제합니다. 통화별로 정액 가격이 정해져 있어 환율 계산 없이 표시된 금액 그대로 결제됩니다.","meta":"환율 환산 없음","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"LINE·구글 로그인","cat":"예약·결제","desc":"자주 이용하는 분은 소셜 로그인으로 내 예약 목록을 한 곳에서 봅니다. 게스트 예약도 그대로 병행됩니다.","meta":"게스트 병행","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"오늘 할 일 보드","cat":"운영관리","desc":"오늘 픽업·전달·보관 건을 목록과 지도 두 가지로 봅니다. 이동 순서를 짜는 화면이라 스마트폰에서 먼저 쓰기 좋게 만들었습니다.","meta":"목록/지도 전환","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"제휴점 거점 현황판","cat":"운영관리","desc":"제휴점에는 로그인 없는 전용 링크만 전달합니다. 오늘 들어올 짐과 나갈 짐이 큰 글씨로 뜨는 모바일 전용 화면입니다.","meta":"전용 링크 · 모바일","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"예약 폼 — 배송/보관 분기","type":"고객 화면","desc":"첫 화면에서 배송인지 보관인지 고르면 뒤따르는 입력 항목이 바뀝니다. 단계마다 어디서 멈췄는지 남겨 이탈 지점을 확인합니다.","sub":"단계별 이탈 추적","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"주소 자동완성과 거점 지도","type":"고객 화면","desc":"주소를 입력하면 후보가 뜨고, 선택하는 순간 가까운 거점까지의 거리가 지도에 함께 표시됩니다.","sub":"Google Places · 거리 계산","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"예약 조회와 내 예약 목록","type":"고객 화면","desc":"예약번호로 찾는 게스트 조회와, 로그인 후 보는 내 예약 목록을 같은 카드 형태로 맞췄습니다.","sub":"게스트 · 로그인 병행","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"예약 현황과 예약 상세","type":"관리자 화면","desc":"들어온 예약을 상태별로 걸러 보고, 상세에서 담당자 배정과 메모를 남깁니다. 전화로 받은 건은 수기 등록으로 같은 목록에 넣습니다.","sub":"수기 등록·수정 포함","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"거점 관리와 통계","type":"관리자 화면","desc":"거점을 지도 위에서 추가·수정하고, 기간별 예약 흐름과 서비스 구성을 한 화면에서 봅니다.","sub":"지도 편집 · 기간 집계","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"거점 현황판 (모바일)","type":"제휴점 화면","desc":"제휴점 직원이 링크 하나로 여는 화면입니다. 입고·출고 버튼만 크게 두어 계산대 옆에서 바로 누릅니다.","sub":"로그인 없는 전용 링크","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157317"};
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
