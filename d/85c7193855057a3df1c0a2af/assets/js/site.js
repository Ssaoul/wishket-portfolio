/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온서울의원 리뉴얼 시안","brandSub":"Clinic Site Renewal Demo — Gnuboard + SEO/GEO Blueprint","nav":[["index.html","개요"],["catalog.html","병원 소개"],["gallery.html","진료 안내"],["about.html","공지사항·휴진 안내"]],"cats":["병원 소개","진료 안내","공지·휴진","관리자 편집","SEO·GEO 설정"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"인사말·연혁","cat":"병원 소개","desc":"H1은 병원명+지역, 본문 첫 문단에 진료 분야와 위치를 한 번에 담아 AI 검색이 요약해 가기 쉬운 형태로 씁니다. 원고는 병원 제공분 그대로.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"의료진 소개","cat":"병원 소개","desc":"1인 1페이지 구조. 이름·진료 분야·진료 요일을 Person 구조화 데이터로 함께 내보내 검색 결과에 항목이 따로 잡히게 합니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"진료과목 상세","cat":"진료 안내","desc":"과목당 독립 URL(/clinic/내과). 과목명을 H1, 세부 증상을 H2로 고정해 '양천구 + 증상' 검색 질의에 대응합니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"진료시간·휴진 안내","cat":"진료 안내","desc":"요일별 시간표를 표와 구조화 데이터 양쪽에 동시 반영. 관리자가 시간을 고치면 두 곳이 같이 바뀝니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"공지사항 게시판","cat":"공지·휴진","desc":"그누보드 기본 게시판 기반. 상단 고정 체크 시 메인 화면 휴진 띠배너로 자동 노출됩니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"팝업·메인 배너 관리","cat":"관리자 편집","desc":"이미지 업로드, 노출 기간(시작~종료), PC/모바일 구분, 오늘 하루 닫기 옵션. 기간이 지나면 자동으로 내려갑니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"페이지별 메타 편집","cat":"SEO·GEO 설정","desc":"title·description·OG 이미지를 페이지 편집 화면 아래에서 바로 입력. 비어 있거나 다른 페이지와 겹치면 저장 전에 경고를 띄웁니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"사이트맵·색인 요청","cat":"SEO·GEO 설정","desc":"sitemap.xml 자동 생성, robots.txt 편집, 검색 포털 등록 상태를 한 화면에서 확인. 마지막 제출 시각과 결과를 남깁니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"오시는 길·주차 안내","cat":"병원 소개","desc":"지도, 대중교통 경로, 주차 가능 대수. 주소·전화 정보를 병원 구조화 데이터로 함께 내보냅니다.","id":"I8","img":"assets/img/item-8.svg","pub":1},{"name":"AI 답변용 요약 블록","cat":"SEO·GEO 설정","desc":"페이지마다 3~5문장 요약과 자주 묻는 질문을 별도 필드로 관리. 생성형 AI가 인용하기 쉬운 형태로 본문 상단·FAQ 스키마에 함께 싣습니다.","id":"I9","img":"assets/img/item-9.svg","pub":1}],"cases":[{"title":"진료과목 페이지 8건 메타 일괄 점검","title_note":"","type":"정상","desc":"8개 과목 페이지의 title·description·H1을 점검해 모두 통과. 각 페이지가 서로 다른 검색 질의를 맡도록 문구가 갈라져 있는지까지 확인합니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"소개 페이지 description 누락","type":"경고","desc":"본문만 쓰고 메타 설명을 비운 채 저장을 시도한 상태. 저장은 막지 않되 '검색 결과 요약문이 본문 앞부분으로 대체됩니다' 안내를 띄우고 미작성 목록에 남깁니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"두 페이지 title 중복","type":"실패","desc":"'병원 소개'와 '인사말'이 같은 title을 써서 검색엔진이 한쪽만 고를 수 있는 상태. 중복 쌍을 묶어 보여주고 수정 전까지 경고를 유지합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"휴진 팝업 기간 종료 후 잔존","type":"경고","desc":"추석 휴진 팝업의 종료일이 지났는데 노출 설정이 켜져 있던 사례. 기간 기준으로 자동 비노출 처리하고 관리자 목록에 '기간 만료'로 표시합니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구 URL 색인 제외 대기","type":"진행 중","desc":"개편 전 주소(/sub/intro.php)가 아직 검색 결과에 남아 있는 상태. 301 이동을 걸고 색인 갱신을 요청했으며, 반영까지 시간이 걸린다는 점을 그대로 표시합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"이미지 대체 텍스트 미입력 12건","type":"경고","desc":"갤러리 업로드 이미지 중 12건에 alt가 비어 있음. 업로드 목록에서 해당 건만 필터로 모아 한 번에 채울 수 있게 합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158561"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","병원 소개"],["gallery.html","진료 안내"],["about.html","공지사항·휴진 안내"]];
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
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px">'
      + D.nav.slice(1).map(function(n){ return '<a href="'+n[0]+'">'+n[1]+'</a>' }).join(' · ')
      + '</div></div></div>'
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
