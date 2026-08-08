/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"리캡라이브","brandSub":"LIVE COMMERCE REPORT AUTOMATION","cats":["데이터 수집","리포트","운영 감시","관리자"],"caseCats":["회차 리포트","기간 리포트","수집 현황","채팅 분석"],"items":[{"name":"스토어별 순회 수집","cat":"데이터 수집","desc":"스토어마다 독립 브라우저 프로필로 관리툴에 접속해 순차로 돕니다. 세션이 섞이지 않고, 만료되면 재인증한 뒤 이어서 수집합니다.","meta":"독립 프로필 · 순차 실행","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"방송 종료 후 1회 수집","cat":"데이터 수집","desc":"라이브 통계와 라이브 보드를 방송 종료 후 통계 갱신을 확인하고 1회 가져옵니다. 실시간 상주 수집은 하지 않습니다.","meta":"갱신 확인 후 수집","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"원본 보관과 재수집 이력","cat":"데이터 수집","desc":"파싱 전 화면 원본을 함께 저장합니다. 같은 방송을 다시 수집해도 덮어쓰지 않고 이력으로 쌓아 소급 재처리에 씁니다.","meta":"원본 보관 · 이력 저장","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"회차 리포트 자동 생성","cat":"리포트","desc":"전 브랜드 공통 양식으로 회차 리포트를 만듭니다. 직전 회차 대비 비교와 그 회차에 쓰인 소재 정보를 함께 담습니다.","meta":"직전 회차 비교 포함","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"속보판·확정판 발행","cat":"리포트","desc":"방송 직후 속보판을, 구매 확정이 반영된 뒤 재수집해 확정판을 냅니다. 속보판에는 확정 전 수치임을 명시합니다.","meta":"2단계 발행","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"주간·월간 리포트","cat":"리포트","desc":"회차 리포트를 집계해 주·월 단위 리포트를 만들고, 설정한 주기에 맞춰 자동으로 보냅니다.","meta":"기간 집계 · 주기 발송","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"수집 검증과 알림","cat":"운영 감시","desc":"필수 항목 누락과 직전 회차 대비 비정상 편차를 판정합니다. 수집 실패·세션 만료·검증 실패는 이메일로 알립니다.","meta":"누락 · 편차 판정","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"수신자·발송 이력 관리","cat":"관리자","desc":"브랜드별 수신자를 등록·수정하고, 언제 무엇이 나갔는지 발송 이력을 남깁니다. 필요하면 같은 리포트를 다시 보냅니다.","meta":"이력 기록 · 재발송","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"채팅 로그와 질문 분류","cat":"관리자","desc":"라이브 보드의 채팅을 보관하고 시청자 질문과 응답을 구분해 저장합니다. 자주 나온 질문 상위 항목과 유형을 리포트에 넣습니다.","meta":"질문·응답 구분 저장","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"회차 리포트 (속보판)","type":"회차 리포트","desc":"방송 종료 직후 나가는 판. 시청·거래 지표와 직전 회차 대비 증감을 나란히 보여주고, 상단에 확정 전 수치라는 표기가 붙습니다.","sub":"확정 전 수치 표기","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"회차 리포트 (확정판)","type":"회차 리포트","desc":"구매 확정과 취소·환불이 반영된 뒤 재수집해 발행하는 판. 속보판과 달라진 항목을 표시해 어디가 바뀌었는지 바로 보입니다.","sub":"속보판 대비 변경 표시","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"소재·편성 요약","type":"회차 리포트","desc":"영상 예약 화면에서 가져온 시작 시각과 소재 정보를 회차에 붙여, 이번 방송에 무엇을 언제 걸었는지 한 장으로 정리합니다.","sub":"시작 시각 · 소재 정보","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"주간·월간 성과 요약","type":"기간 리포트","desc":"기간 안의 회차를 모아 브랜드별로 집계합니다. 기간 단위로만 제공되는 취소·환불은 회차에 나누지 않고 기간 값으로 표기합니다.","sub":"기간 단위 집계","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"스토어별 수집 현황판","type":"수집 현황","desc":"스토어마다 마지막 수집 시각, 재시도 횟수, 세션 상태, 검증 결과를 한 화면에 둡니다. 발송이 막힌 회차는 대기 상태로 표시됩니다.","sub":"재시도 · 세션 상태","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"자주 나온 질문 상위","type":"채팅 분석","desc":"채팅 로그에서 시청자 질문을 뽑아 유형으로 묶고 상위 항목을 보여줍니다. 소비자 식별정보는 저장하지 않고 비식별 처리합니다.","sub":"유형 분류 · 비식별","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157500"};
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
