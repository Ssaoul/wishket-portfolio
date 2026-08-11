/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모아보다","brandSub":"MOABODA COMMUNITY","cats":["전체","수집글","회원글","인기"],"caseCats":["사용자 화면","관리자","크롤링","모바일"],"items":[{"name":"이직 준비하며 챙겨둔 서류 목록","cat":"수집글","desc":"타겟 사이트에서 수집한 글입니다. 요약만 노출하고 본문은 원문 링크로 이동합니다.","meta":"수집 · 오늘 09:00 · 원문 링크","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"주말에 혼자 다녀오기 좋았던 곳","cat":"수집글","desc":"이미지 링크와 첫 문단만 저장해 카드로 보여줍니다. 저작권 이슈를 줄이는 노출 방식입니다.","meta":"수집 · 오늘 08:00 · 원문 링크","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"첫 자취방 계약 전에 확인한 것들","cat":"수집글","desc":"수집 시 딜레이를 두어 대상 서버 부하를 줄입니다. 실패 건은 관리자 로그에 남습니다.","meta":"수집 · 어제 22:00 · 원문 링크","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"요즘 읽고 있는 책 같이 이야기해요","cat":"회원글","desc":"회원이 직접 작성한 글입니다. 에디터에서 이미지 첨부와 임시저장을 지원합니다.","meta":"회원글 · 댓글 12 · 좋아요 34","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"운동 3개월 차, 기록 남겨봅니다","cat":"회원글","desc":"좋아요와 댓글이 실시간으로 반영되며, 신고가 들어오면 관리자 화면에 표시됩니다.","meta":"회원글 · 댓글 8 · 좋아요 21","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"자격증 스터디 같이 하실 분","cat":"회원글","desc":"모집 성격의 글은 상단 고정이 가능하고, 마감되면 회원이 직접 상태를 바꿉니다.","meta":"회원글 · 댓글 19 · 좋아요 15","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"이번 주 가장 많이 읽힌 글","cat":"인기","desc":"조회·좋아요·댓글을 합산해 주간 인기 목록을 만듭니다. 수집글과 회원글을 함께 다룹니다.","meta":"인기 · 주간 집계","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"댓글이 가장 많이 달린 글","cat":"인기","desc":"목록은 무한 스크롤과 페이지 방식 중 선택할 수 있게 구성했습니다.","meta":"인기 · 댓글순","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"새로 올라온 글 모아보기","cat":"전체","desc":"수집글과 회원글을 한 타임라인에 섞어 보여주되, 출처 배지로 구분합니다.","meta":"전체 · 최신순","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"게시글 목록","type":"사용자 화면","desc":"수집글과 회원글을 출처 배지로 구분해 한 목록에 보여줍니다. 카테고리·정렬 필터를 붙였습니다.","sub":"반응형 카드 그리드","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"게시글 상세와 댓글","type":"사용자 화면","desc":"본문 아래 좋아요와 댓글이 이어지고, 수집글은 요약과 원문 링크 버튼으로 대체합니다.","sub":"댓글·대댓글·신고","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"글쓰기와 회원가입","type":"사용자 화면","desc":"이메일 가입과 로그인, 글 작성 에디터를 한 흐름으로 구성했습니다.","sub":"세션 인증","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"크롤링 상태판","type":"크롤링","desc":"수집 작업의 성공·실패와 마지막 실행 시각을 표로 보여주고, 에러 로그를 펼쳐 확인합니다.","sub":"스케줄러 모니터링","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"콘텐츠·회원 관리","type":"관리자","desc":"게시글을 숨기거나 삭제하고, 회원 목록에서 차단 처리를 합니다. 처리 이력이 남습니다.","sub":"백오피스","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"모바일 화면","type":"모바일","desc":"같은 화면을 좁은 폭에서 확인했습니다. 목록·상세·글쓰기 모두 한 손으로 쓰도록 정리했습니다.","sub":"375px 기준","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"주요 화면","gallery":"도입 사례","item":"화면","case":"사례"},"projectId":"157565"};
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
