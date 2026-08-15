/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"아뜰리에 온","brandSub":"ART PSYCHOLOGY STUDIO","cats":["개인 프로그램","기업·기관","온라인 강의","워크숍"],"caseCats":["공간","프로그램 기록","온라인 강의실","브랜드"],"items":[{"name":"컬러 다이얼로그","cat":"개인 프로그램","desc":"색을 고르는 과정에서 드러나는 감정의 결을 함께 읽습니다. 그림 경험이 없어도 참여할 수 있습니다.","meta":"1:1 · 회차별 예약","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"페이퍼 앤 클레이","cat":"개인 프로그램","desc":"종이와 흙의 물성을 다루며 손의 속도에 맞춰 생각을 정리하는 매체 중심 세션입니다.","meta":"1:1 · 소재 제공","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"조직 정서 워크숍","cat":"기업·기관","desc":"팀 단위로 진행하는 예술 기반 커뮤니케이션 프로그램. 사전 진단과 결과 리포트를 포함합니다.","meta":"기업 맞춤 · 출강 가능","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"리더 리커버리 세션","cat":"기업·기관","desc":"의사결정 피로가 쌓인 관리자를 위한 소그룹 프로그램입니다. 일정과 규모는 협의 후 설계합니다.","meta":"소그룹 · 문의 후 조율","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"미술치료 입문 12강","cat":"온라인 강의","desc":"매체 이해부터 세션 설계까지 순서대로 따라가는 온라인 커리큘럼. 수료 시 수료증이 발급됩니다.","meta":"온라인 · 이어보기 지원","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"상담 기록과 해석","cat":"온라인 강의","desc":"작업물을 어떻게 기록하고 어떤 언어로 옮길지 다룹니다. 예시 자료가 강의 내 제공됩니다.","meta":"온라인 · 진도율 표시","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"컬러 아카이브 클래스","cat":"온라인 강의","desc":"색채 이론을 실제 세션 운영에 연결하는 실무 중심 강의입니다.","meta":"온라인 · 자료 다운로드","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"주말 오픈 스튜디오","cat":"워크숍","desc":"정해진 주제 없이 매체를 자유롭게 사용하는 열린 작업 시간입니다.","meta":"오프라인 · 예약제","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"보호자 동반 워크숍","cat":"워크숍","desc":"아동과 보호자가 같은 작업을 나란히 진행하며 서로의 표현을 관찰합니다.","meta":"오프라인 · 2인 단위","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"스튜디오 A — 개인 세션실","type":"공간","desc":"자연광과 여백을 중심에 둔 1:1 세션 공간. 매체 수납을 벽면으로 정리했습니다.","sub":"공간 소개 페이지","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"스튜디오 B — 그룹 라운지","type":"공간","desc":"기업 워크숍과 오픈 스튜디오가 함께 열리는 가변형 공간입니다.","sub":"공간 소개 페이지","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"조직 정서 워크숍 기록","type":"프로그램 기록","desc":"팀 단위 세션의 진행 순서와 결과물 아카이브를 에디토리얼 레이아웃으로 정리했습니다.","sub":"프로그램 상세","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"나의 강의실 화면","type":"온라인 강의실","desc":"수강 중인 강의, 진도율, 결제 내역을 한 화면에서 확인하는 마이페이지 구성입니다.","sub":"LMS 커스텀 UI","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"커리큘럼 상세 & 플레이어","type":"온라인 강의실","desc":"챕터 목록과 영상 플레이어를 브랜드 톤에 맞춰 재설계했습니다. 이어보기 지점이 표시됩니다.","sub":"LMS 커스텀 UI","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"브랜드 타이포그래피 시스템","type":"브랜드","desc":"제목·본문·라벨의 위계와 여백 규칙을 정의해 전 페이지에 동일하게 적용했습니다.","sub":"디자인 가이드","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157680"};
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
