/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"짐온","brandSub":"LUGGAGE DELIVERY & STORAGE","cats":["짐배송","짐보관","공항 연계","단체·특수"],"caseCats":["고객 화면","관리자 화면","제휴점 화면","공통"],"items":[{"name":"숙소 → 숙소 배송","cat":"짐배송","desc":"체크아웃한 숙소에서 다음 숙소로 짐을 보내드립니다. 당일 오전 접수 시 저녁 도착 기준으로 안내합니다.","meta":"캐리어 1개 · ₩18,000","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"숙소 → 공항 배송","cat":"짐배송","desc":"출국 당일 짐 없이 일정을 마치고 공항 카운터에서 수령합니다. 항공편 시각을 기준으로 마감 시간을 계산합니다.","meta":"캐리어 1개 · ₩22,000","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"당일 보관 (기본)","cat":"짐보관","desc":"거점 운영 시간 내 맡기고 찾는 기본 보관입니다. 예약번호와 여권 이름으로 본인 확인합니다.","meta":"1개 · ₩8,000 / 1일","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"연박 보관","cat":"짐보관","desc":"2일 이상 맡기는 장기 보관입니다. 반출 예정일 변경은 예약 조회 화면에서 직접 신청합니다.","meta":"1개 · ₩6,000 / 추가 1일","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"대형 화물 보관","cat":"짐보관","desc":"골프백·유모차·악기 케이스 등 규격 초과 화물입니다. 접수 시 거점별 잔여 공간을 먼저 확인합니다.","meta":"규격 초과 · ₩12,000 / 1일","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"김해공항 픽업 배송","cat":"공항 연계","desc":"도착 게이트 인근 거점에서 짐을 받아 숙소로 보내드립니다. 항공편 지연 시 접수 시간이 자동 조정됩니다.","meta":"캐리어 1개 · ₩20,000","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"부산역 KTX 연계","cat":"공항 연계","desc":"열차 출발 시각에 맞춰 부산역 거점으로 짐을 모아 드립니다. 승차 30분 전 수령을 기준으로 안내합니다.","meta":"캐리어 1개 · ₩16,000","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"단체 일괄 접수","cat":"단체·특수","desc":"10개 이상 화물을 한 건으로 접수합니다. 관리자 화면에서 수기 등록·수정으로 인원 명단을 붙여 관리합니다.","meta":"10개 이상 · 별도 안내","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"제휴 숙소 정기 수거","cat":"단체·특수","desc":"제휴 숙소를 정해진 시간에 순회하며 수거합니다. 제휴점 전용 링크에서 당일 수거 목록을 확인합니다.","meta":"주 3회 이상 · 협의","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"예약 폼 — 배송/보관 분기","type":"고객 화면","desc":"첫 화면에서 배송과 보관을 고르면 이후 입력 항목이 갈라집니다. 주소는 자동완성으로 넣고 가까운 거점까지의 거리를 지도에 함께 보여줍니다.","sub":"주소 자동완성 · 거점 거리 계산","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"예약 조회 — 번호만으로","type":"고객 화면","desc":"로그인 없이 예약번호와 이메일로 상태를 확인합니다. 수거 전이면 시간·거점 변경을 화면에서 바로 신청할 수 있습니다.","sub":"게스트 조회 · 변경 신청","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"결제 — 통화별 정액","type":"고객 화면","desc":"결제 수단을 페이지 안에 임베드해 외부 이동 없이 마칩니다. 표시 통화는 기기 언어를 따라가고 금액은 통화별 정액으로 고정합니다.","sub":"임베드 결제 · 환율 환산 없음","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"오늘 할 일 — 목록과 지도","type":"관리자 화면","desc":"당일 수거·배송·반출 건을 시간순 목록과 지도 두 가지로 봅니다. 현장에서 한 손으로 처리하도록 모바일 화면을 기준으로 짰습니다.","sub":"모바일 우선 · 지도 전환","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"거점 관리와 통계","type":"관리자 화면","desc":"거점 위치·운영 시간·잔여 공간을 지도 위에서 관리합니다. 통계 화면은 예약 폼 단계별 이탈 지점을 함께 보여줍니다.","sub":"거점 지도 · 단계별 이탈","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"거점 현황판 — 전용 링크","type":"제휴점 화면","desc":"제휴점은 로그인 없이 전용 링크로 오늘 들어올 짐과 나갈 짐만 봅니다. 화면 요소를 줄여 매장 스마트폰에서 바로 읽힙니다.","sub":"로그인 없음 · 모바일 전용","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157317"};
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
