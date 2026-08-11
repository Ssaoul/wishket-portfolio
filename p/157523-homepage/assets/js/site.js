/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"동네한바퀴","brandSub":"LOCAL COMMUNITY PLATFORM","cats":["생활정보","동네소식","같이해요","질문답변"],"caseCats":["모바일 화면","연동","운영"],"items":[{"name":"회원가입 · 로그인","cat":"생활정보","desc":"휴대폰 인증으로 가입하고, 현재 위치를 확인해 활동 동네를 설정합니다. 로그인 상태는 앱을 껐다 켜도 유지됩니다.","meta":"세션 유지 · 로그아웃","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"게시글 작성","cat":"생활정보","desc":"제목과 본문을 쓰고 사진을 여러 장 첨부합니다. 작성 위치가 활동 동네 안일 때 위치 인증 배지가 함께 붙습니다.","meta":"이미지 첨부 · 위치 인증","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"게시글 목록","cat":"동네소식","desc":"최신순으로 20개씩 불러오고, 화면을 내리면 다음 묶음이 이어서 로딩됩니다. 목록에서도 신뢰도 점수를 미리 확인합니다.","meta":"무한 스크롤 · 페이지네이션","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"신뢰도 점수 표시","cat":"동네소식","desc":"보유하신 AI 검증 API의 응답을 그대로 받아 0~100 점수와 등급으로 보여줍니다. 산출 근거 요약도 함께 펼쳐 볼 수 있습니다.","meta":"외부 API 연동 · 점수 UI","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"댓글","cat":"질문답변","desc":"게시글마다 댓글을 남기고 목록에서 바로 확인합니다. 작성자 표시와 삭제 처리를 포함합니다.","meta":"작성 · 조회","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"동네 인증","cat":"같이해요","desc":"설정한 활동 반경 안에 있을 때만 글쓰기가 열립니다. 위치 확인 실패 시 사유를 안내하고 다시 시도하도록 합니다.","meta":"지오펜싱 연동","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"신고 · 숨김","cat":"질문답변","desc":"부적절한 글과 댓글을 신고하고, 처리 전까지 내 화면에서 숨깁니다. 신고 내역은 운영 화면에서 확인합니다.","meta":"운영 처리","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"운영자 화면","cat":"같이해요","desc":"게시글·댓글·신고를 한 화면에서 조회하고 조치합니다. 발주처 기획자가 직접 등록·수정할 수 있도록 구성합니다.","meta":"직접 등록 · 수정","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"동네 피드","type":"모바일 화면","desc":"활동 동네의 최신 글을 카드로 보여줍니다. 각 카드에 신뢰도 점수와 위치 인증 배지가 붙습니다.","sub":"무한 스크롤","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"게시글 상세","type":"모바일 화면","desc":"본문과 첨부 사진, 신뢰도 점수 패널, 댓글 목록을 한 화면에 세로로 배치했습니다.","sub":"점수 패널 · 댓글","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"글쓰기","type":"모바일 화면","desc":"사진 첨부와 분류 선택, 위치 인증 상태를 작성 화면에서 함께 확인합니다.","sub":"이미지 · 위치","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"신뢰도 점수 연동","type":"연동","desc":"외부 AI 검증 API를 호출하고 응답을 저장해 목록·상세에 반영합니다. 응답 지연·실패 시 대체 표시를 둡니다.","sub":"API 연동 · 실패 처리","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"위치 인증","type":"연동","desc":"단말 위치와 설정 반경을 비교해 인증 여부를 판정하고, 게시글에 인증 값을 함께 저장합니다.","sub":"지오펜싱","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"운영 대시보드","type":"운영","desc":"게시글·댓글·신고 현황을 목록으로 조회하고 조치합니다. 기획자가 직접 다룰 수 있는 구성입니다.","sub":"직접 등록 · 수정","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157523"};
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
