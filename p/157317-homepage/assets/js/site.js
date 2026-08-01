/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"짐부산","brandSub":"BAGGAGE DELIVERY & STORAGE","cats":["짐배송","짐보관","공항 연계"],"caseCats":["고객 화면","관리자 화면","제휴점 화면"],"items":[{"name":"숙소 → 숙소 배송","cat":"짐배송","desc":"체크아웃한 숙소에서 다음 숙소로 짐을 옮깁니다. 오전에 맡기고 오후에 받는 흐름입니다.","meta":"당일 · 캐리어 단위","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"공항 → 숙소 배송","cat":"공항 연계","desc":"도착 게이트에서 바로 맡기고 빈손으로 이동합니다. 숙소 프런트로 전달됩니다.","meta":"김해공항 · 당일","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"숙소 → 공항 배송","cat":"공항 연계","desc":"출국일 아침에 맡기면 공항 카운터 앞 거점에서 받습니다. 마지막 날을 온전히 씁니다.","meta":"출발 3시간 전 수령","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"당일 짐보관","cat":"짐보관","desc":"체크인 전·체크아웃 후 비는 시간 동안 거점에서 보관합니다.","meta":"당일 · 개수 단위","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"1박 이상 보관","cat":"짐보관","desc":"근교 여행 동안 큰 짐만 남겨두고 가볍게 다녀옵니다.","meta":"1박~7박","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"대형 수하물 취급","cat":"짐배송","desc":"골프백·유아차·악기 케이스 등 규격 외 짐은 예약 시 별도로 선택합니다.","meta":"사전 확인 필요","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"제휴 숙소 픽업","cat":"짐배송","desc":"제휴 숙소는 프런트에 맡겨두면 담당자가 수거합니다. 대면 대기 없이 진행됩니다.","meta":"제휴 거점 한정","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"단체 예약","cat":"짐보관","desc":"일행 짐을 한 건으로 묶어 접수합니다. 대표 1인이 예약 번호로 전체를 조회합니다.","meta":"4개 이상","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"예약 폼 — 배송·보관 분기","type":"고객 화면","desc":"첫 화면에서 배송인지 보관인지 고르면 이후 입력 항목이 갈라집니다. 주소는 자동완성으로 넣고 가까운 거점까지의 거리를 함께 보여줍니다.","sub":"단계별 진행 표시","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"예약 조회 — 번호로 확인","type":"고객 화면","desc":"로그인 없이 예약 번호와 연락처만으로 상태를 봅니다. 로그인한 이용자는 내 예약 목록에서 지난 건까지 함께 봅니다.","sub":"게스트 · 로그인 병행","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"결제 — 통화별 정액","type":"고객 화면","desc":"이용자가 고른 통화로 표시된 금액을 그대로 결제합니다. 결제창은 예약 화면 안에 들어가 있어 페이지를 벗어나지 않습니다.","sub":"KRW · TWD · JPY · USD","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"오늘 할 일 — 목록과 지도","type":"관리자 화면","desc":"오늘 수거·배송할 건을 목록으로 보고, 지도로 위치를 함께 확인합니다. 스마트폰 화면 기준으로 만들었습니다.","sub":"모바일 우선","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"예약 현황과 상세","type":"관리자 화면","desc":"기간·상태·거점으로 걸러 보고, 한 건을 열면 이력과 메모가 한 화면에 모입니다. 전화로 받은 건은 수기로 등록합니다.","sub":"수기 등록 · 수정","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"거점 현황판","type":"제휴점 화면","desc":"제휴점은 전용 링크만 열면 오늘 들어올 짐과 나갈 짐이 보입니다. 계정 없이 씁니다.","sub":"링크 접속 · 모바일 전용","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157317"};
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
