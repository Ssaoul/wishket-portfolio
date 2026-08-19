/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"레슨노트","brandSub":"LESSON NOTE · ACADEMY OPS","cats":["수강생 관리","수강권 · 결제","레슨 회차","권한 · 통계"],"caseCats":["원장 화면","강사 화면","데이터 · 배포"],"items":[{"name":"수강생 등록 · 검색","cat":"수강생 관리","desc":"이름·연락 메모·담당 강사를 지정해 등록하고, 목록에서 이름으로 바로 찾습니다. 수정과 비활성 처리도 같은 화면에서 합니다.","meta":"등록 / 수정 / 검색","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"담당 강사 지정","cat":"수강생 관리","desc":"학생마다 담당 강사를 지정하면 강사 계정에는 본인 담당 학생만 보입니다. 담당 변경 이력도 함께 남습니다.","meta":"배정 · 변경 이력","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"수강권 등록","cat":"수강권 · 결제","desc":"1개월·3개월·6개월 등 기간권을 등록하고 총 레슨 회차를 함께 지정합니다. 시작일을 넣으면 만료 예정일이 자동으로 잡힙니다.","meta":"1 / 3 / 6개월","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"결제 정보 기록","cat":"수강권 · 결제","desc":"결제일·금액·수단을 수강권에 붙여 기록합니다. 학생 상세에서 지난 결제 내역을 한눈에 확인합니다.","meta":"결제일 · 금액 · 수단","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"'+1회' 수업 완료","cat":"레슨 회차","desc":"모바일 목록에서 담당 학생의 +1회 버튼을 눌러 수업을 차감합니다. 레슨 직후 스마트폰에서 두 번 터치로 끝납니다.","meta":"원터치 차감","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기록 수정 · 취소","cat":"레슨 회차","desc":"잘못 누른 수업 기록을 취소하면 잔여 회차가 원래대로 복구됩니다. 누가 언제 취소했는지 기록이 남습니다.","meta":"잔여 회차 자동 복구","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"홀딩(일시정지)","cat":"레슨 회차","desc":"수강권별로 홀딩 기간을 걸면 만료 예정일이 그 일수만큼 자동 연장됩니다. 홀딩 해제도 같은 화면에서 처리합니다.","meta":"만료일 자동 연장","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"원장 대시보드","cat":"권한 · 통계","desc":"전체 수강생·활성 수강권·만료 임박 명단·강사별 진행 현황을 한 화면에 모아 봅니다. 강사 계정에는 노출되지 않습니다.","meta":"원장 전용","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"엑셀 다운로드","cat":"권한 · 통계","desc":"수강생·결제·레슨 기록을 기간으로 걸러 엑셀로 내려받습니다. 정산과 보관용 장부를 대신합니다.","meta":"기간별 내보내기","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"원장 대시보드","type":"원장 화면","desc":"오늘 수업·활성 수강권·만료 임박 학생을 카드로 정리하고, 강사별 진행 회차를 막대로 비교합니다.","sub":"전체 데이터 조회","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"수강생 상세","type":"원장 화면","desc":"기본 정보, 현재 수강권, 잔여 회차, 결제 내역, 레슨 기록을 한 페이지에 세로로 쌓아 스크롤로 확인합니다.","sub":"수강권 · 결제 · 기록","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"오늘의 레슨 목록","type":"강사 화면","desc":"담당 학생만 보이는 모바일 목록에서 각 행의 +1회 버튼으로 수업을 차감합니다. 차감 즉시 잔여 회차가 갱신됩니다.","sub":"담당 학생 한정","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"회차 취소 · 복구","type":"강사 화면","desc":"최근 기록에서 잘못 누른 항목을 취소하면 잔여 회차가 되돌아옵니다. 취소 사유를 짧게 남길 수 있습니다.","sub":"잔여 회차 복구","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"홀딩 처리 화면","type":"데이터 · 배포","desc":"홀딩 시작일과 종료일을 고르면 변경 후 만료 예정일을 미리 보여준 뒤 적용합니다.","sub":"만료일 재계산 미리보기","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"권한 분리 · 배포 구조","type":"데이터 · 배포","desc":"계정 역할에 따라 조회 범위를 나누는 데이터 규칙과, 스마트폰 브라우저에서 바로 여는 모바일 웹앱 배포 형태를 정리했습니다.","sub":"역할 기반 접근 · 웹앱 배포","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"주요 화면","gallery":"도입 사례","item":"화면","case":"사례"},"projectId":"157748"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"주요 화면"],['gallery.html',"도입 사례"],['about.html','회사 소개'],['admin.html','관리자']];
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
