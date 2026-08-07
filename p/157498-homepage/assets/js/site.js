/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세미크래프트","brandSub":"SEMICRAFT MANUFACTURING","cats":["웨이퍼 가공","패키징","테스트·검사","공정 장비"],"caseCats":["기업 소개","제품·서비스","문의·오시는 길","운영 관리"],"items":[{"name":"실리콘 웨이퍼 연마","cat":"웨이퍼 가공","desc":"표면 평탄도를 관리한 연마 공정으로 후공정 수율 편차를 줄입니다.","meta":"200mm / 300mm · 평탄도 관리","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"박막 증착 공정","cat":"웨이퍼 가공","desc":"절연막·금속막 증착 조건을 제품별로 설정해 두께 편차를 관리합니다.","meta":"CVD / PVD · 두께 리포트 제공","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"BGA 패키지 조립","cat":"패키징","desc":"기판 실장부터 몰딩까지 일괄 진행하며 공정 단계별 이력을 남깁니다.","meta":"BGA / LGA · 로트 단위 이력","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"플립칩 본딩","cat":"패키징","desc":"범프 정렬과 접합 조건을 관리해 미세 피치 제품에 대응합니다.","meta":"미세 피치 대응 · 정렬 검사","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"전기적 특성 테스트","cat":"테스트·검사","desc":"온도 조건별 동작 특성을 측정하고 측정값을 항목별로 정리해 전달합니다.","meta":"상온 / 고온 조건 · 측정 리포트","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"신뢰성 시험","cat":"테스트·검사","desc":"고온·습도·온도 사이클 조건에서 장기 특성 변화를 확인합니다.","meta":"HTOL / THB / TC","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"외관 자동 검사","cat":"테스트·검사","desc":"광학 검사 장비로 표면 결함을 분류하고 결과를 이미지와 함께 보관합니다.","meta":"AOI · 결함 유형 분류","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"클린룸 이송 설비","cat":"공정 장비","desc":"공정 간 웨이퍼 이송을 자동화해 취급 중 오염 요인을 줄입니다.","meta":"클래스 관리 구역 · 자동 이송","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"공정 모니터링 시스템","cat":"공정 장비","desc":"장비별 운전 조건을 수집해 이상 조건을 담당자에게 알립니다.","meta":"조건 수집 · 알림 연동","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"회사 소개 · 인사말","title_placeholder":"","type":"기업 소개","desc":"기업 비전과 대표 인사말을 상단 이미지와 함께 배치한 소개 페이지입니다.","sub":"비전 · 인사말 텍스트 영역","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"연혁 타임라인","type":"기업 소개","desc":"설립부터 현재까지 주요 마일스톤을 연도별 타임라인 형태로 보여줍니다.","sub":"연도별 세로 타임라인","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"조직도 페이지","type":"기업 소개","desc":"부서별 조직 구조를 다이어그램 이미지로 출력하고 확대 보기를 지원합니다.","sub":"부서 구조 다이어그램","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"제품 상세 · 스펙 표","type":"제품·서비스","desc":"제품 이미지와 규격 항목을 표 형태로 정리해 비교하기 쉽게 구성했습니다.","sub":"이미지 + 스펙 표기","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"제조 공정 소개","type":"제품·서비스","desc":"공정 단계를 순서대로 나열하고 단계별 특징 설명을 함께 배치했습니다.","sub":"공정 단계 · 서비스 특징","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"문의 폼 · 오시는 길","type":"문의·오시는 길","desc":"이름·연락처·이메일·문의 내용을 받아 담당자 메일로 전달하고, 주소는 지도와 함께 표시합니다.","sub":"문의 폼 + 지도 연동","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157498"};
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
