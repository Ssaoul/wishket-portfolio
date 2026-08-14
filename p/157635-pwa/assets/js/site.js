/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세이지케어","brandSub":"SAGECARE PATIENT MONITORING","cats":["보호자 기록","의료진 모니터링","계정·동의","기술 구성"],"caseCats":["보호자 화면","의료진 화면","공통"],"items":[{"name":"실행기능 체크 기록","cat":"보호자 기록","desc":"실행기능 항목을 1~4점 척도로 체크해 남깁니다. 항목 세트는 관리자가 수정할 수 있게 설계했습니다.","meta":"체크 입력 · 일자별 저장","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"발작 기록","cat":"보호자 기록","desc":"발작 유형·횟수·지속시간은 드롭다운으로 고르고, 발작 전후 경향은 자유 텍스트로 덧붙입니다.","meta":"드롭다운 + 텍스트","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"복약 기록","cat":"보호자 기록","desc":"복용 약제와 용량을 선택 항목으로 남기고, 증량·감량이나 누락은 메모로 함께 기록합니다.","meta":"선택 + 메모","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"Echo·병원 일정","cat":"보호자 기록","desc":"보호자가 검사·외래 일정을 직접 입력하고 관리합니다. 외부 병원 시스템이나 EMR과 연동하지 않습니다.","meta":"보호자 직접 등록","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"환자별 시계열 대시보드","cat":"의료진 모니터링","desc":"발작 횟수, 복약 변경, 실행기능 점수를 같은 시간축에 겹쳐 봅니다. 기간은 3개월·6개월·1년으로 바꿔 조회합니다.","meta":"longitudinal 뷰","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기록 상세 조회","cat":"의료진 모니터링","desc":"차트의 한 지점을 누르면 그날 보호자가 남긴 원본 기록을 그대로 펼쳐 봅니다.","meta":"드릴다운 조회","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"계정 유형 분기","cat":"계정·동의","desc":"보호자 계정과 의료진 계정을 나누어 관리하고, 로그인 직후 각각 다른 진입 화면으로 보냅니다.","meta":"역할 기반 라우팅","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"동의서 4카테고리","cat":"계정·동의","desc":"개인정보·민감정보·연구활용·제3자 제공을 나누어 받고, 동의 시점과 버전을 함께 남깁니다.","meta":"항목별 수집·이력","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"의료정보 DB 분리","cat":"기술 구성","desc":"일반정보·개인정보·의료정보를 별도 저장소로 나누고 연결키만 오가게 했습니다. 보안 요건이 강화되어도 스키마를 바꾸지 않고 대응하도록 설계했습니다.","meta":"3-tier 분리 설계","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"오늘의 기록 홈","type":"보호자 화면","desc":"오늘 남길 항목 네 가지를 카드로 보여주고, 아직 안 쓴 항목만 강조합니다. 한 손으로 끝나게 배치했습니다.","sub":"모바일 세로 · 홈화면 추가","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"발작 입력 시트","type":"보호자 화면","desc":"바텀시트에서 유형·횟수·지속시간을 순서대로 고릅니다. 새벽에도 쓰기 쉽게 큰 터치 영역으로 잡았습니다.","sub":"드롭다운 3단 + 메모","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"실행기능 주간 체크","type":"보호자 화면","desc":"항목별 점수를 한 화면에서 훑어 체크합니다. 지난주 응답을 흐리게 겹쳐 보여줘 변화를 가늠하게 했습니다.","sub":"척도 체크 · 주 1회","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"환자 목록","type":"의료진 화면","desc":"담당 환자를 최근 기록일과 발작 기록 추이로 정렬합니다. 기록이 끊긴 환자를 먼저 보이게 했습니다.","sub":"정렬 · 검색","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"시계열 대시보드","type":"의료진 화면","desc":"발작 빈도 막대 위에 복약 변경 시점을 표시하고, 실행기능 점수를 선으로 겹쳐 봅니다.","sub":"기간 전환 · 겹쳐보기","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"동의 관리","type":"공통","desc":"네 가지 동의를 따로 받고, 현재 상태와 변경 이력을 언제든 다시 확인할 수 있게 했습니다.","sub":"카테고리 4종 · 이력","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157635"};
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
