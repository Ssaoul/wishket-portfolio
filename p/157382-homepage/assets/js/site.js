/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"예측그리드","brandSub":"CHANNEL REVENUE FORECAST","cats":["데이터 연동","예측 자동화","조회 화면","검증·운영"],"caseCats":["조회 화면","자동화","연동·검증"],"items":[{"name":"Aurora DB 커넥터","cat":"데이터 연동","desc":"사내 Aurora(MySQL)에 읽기 계정으로 접속해 채널별 거래액·수익·미사용 상품권 원천 데이터를 수신합니다. 접속 정보는 코드가 아닌 환경변수로 분리합니다.","meta":"MySQL · 읽기 전용 계정","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"채널별 원천 데이터 수집","cat":"데이터 연동","desc":"채널 A~D의 월 거래액과 정산 수익을 동일한 기준월 단위로 정규화해 적재합니다. 채널이 늘어도 설정만 추가하면 되도록 구성했습니다.","meta":"기준월 단위 정규화","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"미사용 상품권 수익 산출","cat":"예측 자동화","desc":"발행 후 미사용 상태로 남은 상품권에서 발생하는 수익을 유효기간·환불 규칙에 따라 계산합니다. 클라이언트 제공 로직을 그대로 옮기는 것을 원칙으로 합니다.","meta":"유효기간·환불 규칙 반영","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"산출 로직 엔진","cat":"예측 자동화","desc":"엑셀 수식과 예외 처리 규칙을 서버 계산 로직으로 변환합니다. 규칙 하나하나를 함수 단위로 나눠 어느 규칙이 어떤 값을 만들었는지 추적할 수 있게 했습니다.","meta":"규칙 단위 분리","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"월 배치 스케줄러","cat":"예측 자동화","desc":"매월 지정한 날짜에 산출이 자동 실행되고 결과가 데이터베이스에 적재됩니다. 실패하면 재실행 이력이 남고 같은 달을 두 번 적재하지 않습니다.","meta":"멱등 실행 · 재실행 이력","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"월별 결과 목록","cat":"조회 화면","desc":"한 페이지 안에서 채널별 예측 수익을 목록으로 출력합니다. 거래액·수익·미사용 상품권 수익·합계를 한 줄에서 비교할 수 있습니다.","meta":"단일 페이지 그리드","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"연·월 조건 검색","cat":"조회 화면","desc":"연도와 월을 선택하면 해당 시점 산출 결과로 화면이 갱신됩니다. 페이지 이동 없이 조건만 바꿔 여러 달을 이어서 볼 수 있습니다.","meta":"페이지 이동 없음","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"공용 관리자 로그인","cat":"조회 화면","desc":"정해진 하나의 공용 계정으로 접속하는 사내용 인증입니다. 세션 만료와 접속 이력을 남겨 누가 언제 열람했는지 확인할 수 있습니다.","meta":"단일 공용 계정 · 접속 이력","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"엑셀 대조 리포트","cat":"검증·운영","desc":"이관 전 수작업 엑셀 값과 시스템 산출 값을 같은 화면에서 나란히 비교하고 차이가 난 항목만 따로 모아 보여줍니다.","meta":"차이 항목만 추출","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"월별 채널 수익 조회 화면","type":"조회 화면","desc":"연·월 선택 영역과 채널별 결과 그리드를 한 화면에 배치했습니다. 합계 행을 상단에 고정해 스크롤 중에도 총액이 보입니다.","sub":"단일 페이지 · 합계 고정","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"연·월 조건 검색 동작","type":"조회 화면","desc":"연도와 월을 바꾸면 해당 시점 산출 결과만 다시 불러옵니다. 조회한 조건은 주소에 남아 그대로 공유할 수 있습니다.","sub":"조건 공유 가능","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"공용 계정 로그인","type":"조회 화면","desc":"사내 공용 아이디·비밀번호로 접속하는 진입 화면입니다. 로그인 이후에만 산출 결과에 접근할 수 있습니다.","sub":"사내 열람 전용","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"월 배치 실행 이력","type":"자동화","desc":"매월 자동 실행된 산출 작업의 시작·종료 시각과 처리 건수를 기록합니다. 실패한 회차는 사유와 함께 남습니다.","sub":"성공·실패 이력","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"예외 규칙 적용 내역","type":"자동화","desc":"어떤 예외 규칙이 어떤 채널·항목에 적용됐는지 산출 결과 옆에 함께 표시합니다. 값이 이상할 때 원인을 바로 찾기 위한 화면입니다.","sub":"규칙 추적","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"이관 전후 대조 결과","type":"연동·검증","desc":"수작업 엑셀 값과 시스템 산출 값을 항목별로 대조합니다. 일치 여부와 차이 금액을 함께 보여줘 이관 정확성을 확인합니다.","sub":"항목별 차이 표시","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157382"};
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
