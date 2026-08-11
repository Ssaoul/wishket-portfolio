/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"채도 아뜰리에","brandSub":"CHAEDO ART & PSYCHOLOGY","cats":["INDIVIDUALS","ORGANIZATIONS","LEARNING CENTER"],"caseCats":["SPACE","SESSION","EXHIBITION"],"items":[{"name":"개인 미술치료 세션","cat":"INDIVIDUALS","desc":"드로잉과 채색을 매개로 지금의 감정을 시각화하고, 상담사와 함께 그 결을 따라 이야기를 나눕니다.","meta":"50분 · 1:1 · 예약 연동","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"페어 아트 세션","cat":"INDIVIDUALS","desc":"가족·커플이 하나의 화면을 함께 완성하며 서로의 표현 방식을 관찰하는 관계 중심 프로그램입니다.","meta":"80분 · 2인 · 예약 연동","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"클레이 & 텍스처 워크숍","cat":"INDIVIDUALS","desc":"흙과 종이의 질감을 손으로 다루며 감각에 집중하는 시간. 결과물보다 과정에 무게를 둡니다.","meta":"90분 · 소그룹 · 정기 개설","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"조직 구성원 마음돌봄","cat":"ORGANIZATIONS","desc":"팀 단위 아트 세션으로 구성원의 정서적 소진을 살피고, 조직에 맞춘 회차 구성을 협의합니다.","meta":"기업 맞춤 · 문의 폼 접수","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"리더십 리플렉션","cat":"ORGANIZATIONS","desc":"이미지 카드와 콜라주를 활용해 리더 개인의 의사결정 패턴과 관계 방식을 돌아보는 세션입니다.","meta":"반일 과정 · 기관 문의","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기관 협력 아트 프로젝트","cat":"ORGANIZATIONS","desc":"미술관·재단·학교와 함께 전시 또는 공간 연계형 예술심리 프로그램을 설계합니다.","meta":"협력 기획 · 개별 견적","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"예술심리 입문 코스","cat":"LEARNING CENTER","desc":"예술심리의 기본 개념과 매체별 접근을 정리한 온라인 강의. 개설 시 수강 페이지로 연결됩니다.","meta":"온라인 · 오픈 예정","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"실무자 심화 트랙","cat":"LEARNING CENTER","desc":"현장 실무자를 위한 사례 중심 심화 과정. 회차별 자료와 과제 제출 동선을 고려해 설계했습니다.","meta":"온라인 · LMS 연동 예정","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"JOURNAL 아카이브","cat":"LEARNING CENTER","desc":"세션에서 오간 생각과 작업 노트를 에디토리얼 형식으로 기록해 정기적으로 발행합니다.","meta":"CMS 등록·수정","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"화이트 스튜디오","title_note":"","type":"SPACE","desc":"자연광과 여백을 중심에 둔 개인 세션 공간. 재료의 질감이 드러나도록 조도를 낮게 설계했습니다.","sub":"공간 소개 · 3F","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"머티리얼 룸","type":"SPACE","desc":"흙, 파스텔, 천 등 매체를 정리해 둔 작업실. 방문 전 공간을 미리 둘러볼 수 있도록 구성했습니다.","sub":"공간 소개 · 2F","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"라운지 & 상담실","type":"SPACE","desc":"세션 전후 머무는 시간을 위한 조용한 공간. 오시는 길과 함께 안내합니다.","sub":"공간 소개 · 1F","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"드로잉 세션 기록","type":"SESSION","desc":"한 회차에서 어떤 흐름으로 대화와 작업이 오가는지 단계별로 정리한 안내 페이지입니다.","sub":"프로그램 상세","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"조직 워크숍 스케치","type":"SESSION","desc":"기업 대상 단체 세션의 진행 방식과 준비물, 공간 조건을 시각적으로 안내합니다.","sub":"기업 프로그램","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"연말 아카이브 전시","type":"EXHIBITION","desc":"한 해 동안의 작업을 익명으로 모아 구성한 전시 기록. 팝업 공지와 연동해 노출합니다.","sub":"메인 팝업 연동","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157559"};
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
