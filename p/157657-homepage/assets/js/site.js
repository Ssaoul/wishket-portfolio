/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"피어노트","brandSub":"PIANOTE MUSIC LEARNING","cats":["학생 학습","교사 백오피스","디자인 시스템"],"caseCats":["학생 화면","교사 화면","시스템"],"items":[{"name":"학습 대시보드","cat":"학생 학습","desc":"오늘 배울 곡, 이어듣기, 획득한 배지를 큰 카드로 정리해 초등학생이 한눈에 다음 할 일을 찾습니다.","meta":"메인 화면 · 태블릿 우선","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"인터랙티브 악보 뷰어","cat":"학생 학습","desc":"재생 위치를 따라 마디가 밝아지고, 마디 반복·속도 조절을 큰 버튼으로 다룹니다.","meta":"플레이어 연동","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"진도율 트래커","cat":"학생 학습","desc":"단원별 완료 상태를 원형 게이지와 스탬프로 보여 주어 남은 학습량을 스스로 가늠하게 합니다.","meta":"게이미피케이션","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"배지·보상 보관함","cat":"학생 학습","desc":"연습 일수, 완주한 곡, 도전 과제로 얻은 배지를 모아 두는 공간입니다.","meta":"동기 부여 요소","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"학급 통계 대시보드","cat":"교사 백오피스","desc":"학급 평균 진도와 미완료 학생을 차트와 리스트로 나란히 두어 다음 수업 준비를 돕습니다.","meta":"데이터 시각화","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"콘텐츠 등록 폼","cat":"교사 백오피스","desc":"음원 파일과 악보를 올리고 단원·난이도·태그를 지정하는 다단계 입력 폼입니다.","meta":"폼 UI · 유효성 안내","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"학생 계정 관리","cat":"교사 백오피스","desc":"학급별 학생 목록에서 검색·정렬하고, 상세 화면에서 학습 이력과 계정 상태를 확인합니다.","meta":"리스트 · 상세","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"공통 컴포넌트 라이브러리","cat":"디자인 시스템","desc":"버튼, 인풋, 모달, 툴팁을 하나의 규칙으로 묶고 Hover·Active·Disabled·Error 상태를 함께 정의합니다.","meta":"Figma 컴포넌트","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"컬러·타이포·그리드","cat":"디자인 시스템","desc":"브랜드 색과 본문 서체 단계, 화면 폭별 그리드를 문서화해 새 화면도 같은 규칙으로 만듭니다.","meta":"핸드오프 가이드","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"메인 대시보드 재설계","type":"학생 화면","desc":"정보 밀도를 낮추고 큰 카드와 짧은 문장으로 정리해, 처음 접속한 학생도 다음 동작을 바로 찾도록 구성했습니다.","sub":"이탈 구간 개선안","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"악보 뷰어 · 플레이어","type":"학생 화면","desc":"연주 위치 하이라이트, 구간 반복, 속도 조절을 한 손으로 다룰 수 있게 태블릿 터치 영역을 넓혔습니다.","sub":"인터랙션 정의","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"진도·보상 시각화","type":"학생 화면","desc":"진도율 게이지와 배지 획득 순간을 하나의 흐름으로 이어 학습을 계속할 이유를 화면에 남겼습니다.","sub":"게이미피케이션","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"학급 통계 화면","type":"교사 화면","desc":"학급 단위 요약과 학생 단위 상세를 같은 레이아웃 규칙으로 묶어 이동 시 맥락이 끊기지 않게 했습니다.","sub":"차트 · 리스트 조합","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"콘텐츠 관리 폼","type":"교사 화면","desc":"업로드 진행 상태와 입력 오류를 필드 옆에서 바로 알려 주어 되돌아가는 단계를 줄였습니다.","sub":"에러 상태 가이드","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"반응형 · 핸드오프","type":"시스템","desc":"PC와 태블릿 두 해상도의 컴포넌트 변형을 정리하고, 개발자가 값 그대로 옮길 수 있도록 스펙을 붙였습니다.","sub":"Dev Mode 대응","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157657"};
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
