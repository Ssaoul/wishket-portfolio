/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"아뜰리에 여백","brandSub":"ART & MIND STUDIO","cats":["개인 프로그램","기업·기관","온라인 강의","전문가 과정"],"caseCats":["공간","프로그램 기록","기업·기관","온라인 강의실"],"items":[{"name":"컬러 다이어리","cat":"개인 프로그램","desc":"색을 고르고 칠하는 과정을 따라가며 지금의 감정 상태를 언어로 옮겨 봅니다. 예약은 네이버 예약 위젯으로 바로 연결됩니다.","meta":"1회 90분 · 개인 · 오프라인 예약","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"질감과 손의 시간","cat":"개인 프로그램","desc":"흙과 종이, 천의 촉감을 다루며 말보다 손이 먼저 반응하는 순간을 관찰합니다. 미술 경험이 없어도 참여할 수 있습니다.","meta":"주 1회 · 6주 과정 · 소그룹","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"조직을 위한 감정 워크숍","cat":"기업·기관","desc":"팀 단위로 진행하는 예술심리 워크숍입니다. 인원과 공간 조건에 맞춰 구성하며, 기업 문의 폼으로 상담 일정을 잡습니다.","meta":"반일·종일 · 출강 가능 · 맞춤 견적","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"기관 연계 정기 프로그램","cat":"기업·기관","desc":"학교·복지기관과 회차를 나눠 운영하는 장기 프로그램입니다. 회차별 기록지와 종료 리포트를 함께 제공합니다.","meta":"8~12회차 · 기관 협약 · 리포트 제공","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"예술심리 입문: 색과 감정","cat":"온라인 강의","desc":"온라인 강의실에서 수강하는 입문 과정입니다. 영상은 이어보기를 지원하고, 진도율은 나의 강의실에서 확인합니다.","meta":"영상 12강 · 이어보기 · 수료증","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"드로잉으로 읽는 마음","cat":"온라인 강의","desc":"그림의 선·크기·배치를 어떻게 살펴보는지 사례 중심으로 다룹니다. 커리큘럼과 미리보기는 상세 페이지에서 볼 수 있습니다.","meta":"영상 16강 · 자료 PDF · 수료증","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"기록과 회복 워크북 과정","cat":"온라인 강의","desc":"매 주차 워크북을 채워 나가는 온라인 과정입니다. 결제 후 바로 수강이 시작되며 결제 내역은 마이페이지에 남습니다.","meta":"8주 · 워크북 포함 · 카드·가상계좌","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"현장 실습 심화 과정","cat":"전문가 과정","desc":"프로그램을 직접 설계하고 운영해 보는 실습 중심 과정입니다. 온라인 강의 수강 후 오프라인 실습으로 이어집니다.","meta":"온라인+오프라인 · 정원 제한 · 사전 신청","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"슈퍼비전 세션","cat":"전문가 과정","desc":"진행 중인 사례를 함께 검토하는 정기 세션입니다. 신청과 일정 확인은 외부 예약 서비스로 연결됩니다.","meta":"월 1회 · 소그룹 · 예약 연동","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"작업실 1층, 빛과 여백","type":"공간","desc":"흰 벽과 목재 작업대만 남긴 1층 작업실입니다. 상담실보다 아틀리에에 가깝게 구성했습니다.","sub":"서울 · 상시 개방","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"개인 세션룸","type":"공간","desc":"창을 등지고 앉도록 배치한 1:1 세션 공간입니다. 재료는 손 닿는 높이에만 둡니다.","sub":"1:1 · 방음 구성","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"색을 고르는 90분","type":"프로그램 기록","desc":"컬러 다이어리 1회차 기록입니다. 고른 색과 그날의 문장을 나란히 남깁니다.","sub":"개인 프로그램 · 1회차","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"6주간의 손의 기록","type":"프로그램 기록","desc":"질감 프로그램 6주 과정에서 나온 결과물을 회차 순으로 정리했습니다.","sub":"소그룹 · 6주","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"팀 워크숍 현장","type":"기업·기관","desc":"사내 회의실에서 진행한 반일 워크숍입니다. 준비물과 동선을 공간 조건에 맞춰 조정했습니다.","sub":"기업 출강 · 반일","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"나의 강의실 화면","type":"온라인 강의실","desc":"수강 중인 강의와 진도율, 결제 내역을 한 화면에서 확인합니다. 브랜드 톤에 맞춰 커스터마이징한 화면입니다.","sub":"LMS · 반응형","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157680"};
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
