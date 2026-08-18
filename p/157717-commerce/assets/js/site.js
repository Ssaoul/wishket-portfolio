/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"제노플로우","brandSub":"RNA BIOMARKER ANALYTICS","cats":["분석 서비스","요금제","리포트","관리자"],"caseCats":["사용자 화면","결제","관리자","시각화"],"items":[{"name":"RNA 발현 프로파일링","cat":"분석 서비스","desc":"시료별 유전자 발현량을 정규화해 산출하고 대조군 대비 변화를 표로 제공합니다.","meta":"건별 결제 · 결과 열람","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"바이오마커 후보 탐색","cat":"분석 서비스","desc":"발현 차이가 두드러지는 후보 마커를 정렬해 화산형 그래프와 목록으로 보여줍니다.","meta":"건별 결제 · 시각화 포함","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"시계열 추적 분석","cat":"분석 서비스","desc":"동일 대상의 반복 시료를 시점별로 이어 붙여 변화 추이를 선형 차트로 확인합니다.","meta":"구독 전용","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"베이직 구독","cat":"요금제","desc":"월 정기 결제로 기본 분석 항목과 결과 대시보드를 이용합니다. 결제 수단은 마이페이지에서 변경할 수 있습니다.","meta":"정기 구독 · 언제든 해지","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"팀 구독","cat":"요금제","desc":"기업 계정에서 구성원을 초대해 분석 요청과 결과 열람 권한을 나눠 부여합니다.","meta":"정기 구독 · 다중 계정","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"건별 이용권","cat":"요금제","desc":"구독 없이 필요한 분석만 결제합니다. 결제 즉시 분석 요청이 대기열에 등록됩니다.","meta":"단건 결제 · 세금계산서 발행","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"결과 요약 리포트","cat":"리포트","desc":"주요 지표와 차트를 한 장으로 정리해 PDF로 내려받습니다.","meta":"완료 건에서 즉시 생성","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"원본 데이터 내보내기","cat":"리포트","desc":"분석에 사용된 수치 데이터를 CSV로 내려받아 자체 도구에서 다시 볼 수 있습니다.","meta":"CSV · 권한 계정만","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"운영 콘솔","cat":"관리자","desc":"가입 계정 조회·수정·차단, 결제 및 환불 요청 처리, 전체 분석 데이터 모니터링을 한 화면에서 처리합니다.","meta":"관리자 전용 · 처리 이력 기록","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"분석 대시보드","type":"사용자 화면","desc":"진행 중·완료·실패 건을 상태별로 묶어 보여주고, 진행률 막대는 폴링 없이 자동으로 갱신됩니다.","sub":"상태 카드 + 진행률 + 최근 결과 목록","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"분석 요청 흐름","type":"사용자 화면","desc":"시료 정보 입력 → 분석 항목 선택 → 결제 → 대기열 등록까지 네 단계로 나눠 이탈 지점을 줄였습니다.","sub":"4단계 스텝 폼 · 임시저장","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"결과 상세 화면","type":"시각화","desc":"발현량 분포, 후보 마커 순위, 시점별 추이를 탭으로 나눠 배치하고 값은 툴팁으로 확인합니다.","sub":"막대·산점·선형 차트 3종","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"구독·결제 화면","type":"결제","desc":"정기 구독과 건별 결제를 한 화면에서 선택하고, 결제 수단 변경과 해지 예약을 지원합니다.","sub":"국내 PG 연동 · 영수증 조회","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"회원 관리 콘솔","type":"관리자","desc":"기업·일반 계정을 구분해 조회하고 정보 수정과 차단을 처리합니다. 조치 이력이 함께 남습니다.","sub":"검색·필터 · 처리 이력","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"결제·환불 처리","type":"관리자","desc":"결제 내역과 구독 상태를 한눈에 보고 환불 요청을 승인·반려합니다. 처리 결과는 사용자 화면에 반영됩니다.","sub":"환불 요청 큐 · 상태 동기화","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157717"};
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
