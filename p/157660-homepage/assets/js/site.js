/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모임연구소","brandSub":"MEMBERS COMMUNITY PLATFORM","cats":["공지·운영","정보 공유","강의 영상","자료실"],"caseCats":["회원·권한","게시판","관리자","보안"],"items":[{"name":"공지사항","cat":"공지·운영","desc":"운영진이 등록하는 안내 게시판입니다. 상단 고정과 필독 표시를 지원하며 관리자 CMS에서 직접 작성·수정합니다.","meta":"전체 열람 · 운영진 작성","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"자유게시판","cat":"정보 공유","desc":"회원 간 자유로운 대화 공간입니다. 댓글·북마크·조회수가 함께 표시되고, 부적절한 글은 신고 후 블라인드 처리됩니다.","meta":"댓글 · 북마크 · 신고","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"질문과 답변","cat":"정보 공유","desc":"궁금한 점을 남기면 회원들이 답을 답니다. 채택된 답변은 상단에 고정되어 다음 사람이 먼저 봅니다.","meta":"댓글 · 답변 채택","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"강의 영상","cat":"강의 영상","desc":"유튜브 링크를 붙여 넣으면 목록에 썸네일과 재생 화면이 자동으로 붙습니다. 영상 파일을 따로 보관하지 않습니다.","meta":"유튜브 임베드 · 2등급 이상","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"세미나 다시보기","cat":"강의 영상","desc":"지난 모임 녹화를 회차별로 모아 둔 게시판입니다. 회차·주제·발표자로 나눠 찾아볼 수 있습니다.","meta":"회차별 정리 · 3등급 전용","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"활동 갤러리","cat":"정보 공유","desc":"모임 사진을 격자 형태로 모아 봅니다. 이미지 여러 장을 한 글에 올리고 대표 이미지를 고를 수 있습니다.","meta":"다중 이미지 · 댓글","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"자료실","cat":"자료실","desc":"발표 자료와 문서를 첨부해 공유합니다. 열람 화면에는 워터마크가 얹히고 누가 언제 열었는지 기록이 남습니다.","meta":"첨부파일 · 워터마크 · 열람 이력","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"운영 회의록","cat":"공지·운영","desc":"운영진만 열람하는 비공개 게시판입니다. 등급이 맞지 않으면 목록에서도 보이지 않습니다.","meta":"3등급 전용 · 목록 비노출","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"가입 인사","cat":"정보 공유","desc":"승인이 끝난 새 회원이 첫 글을 남기는 곳입니다. 신규 회원 목록과 연결되어 있습니다.","meta":"전체 열람 · 신규 회원","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"가입 승인 대기 화면","type":"회원·권한","desc":"신청서를 낸 회원은 대기 상태로 머물고, 관리자가 승인해야 커뮤니티에 들어옵니다. 반려 시 사유가 함께 전달됩니다.","sub":"승인 대기 · 승인 · 반려 3단계","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"소셜 로그인 진입","type":"회원·권한","desc":"카카오·네이버 계정으로 로그인하고, 처음 들어온 계정은 그대로 승인 대기 목록에 쌓입니다.","sub":"카카오 · 네이버 연동","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"등급별 게시판 목록","type":"게시판","desc":"같은 화면이라도 등급에 따라 보이는 게시판이 달라집니다. 권한이 없는 글은 목록에 나타나지 않습니다.","sub":"1·2·3등급 열람 범위","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"강의 영상 게시판","type":"게시판","desc":"유튜브 주소를 넣으면 목록 카드와 상세 재생 화면이 만들어집니다. 영상 저장소는 따로 두지 않습니다.","sub":"임베드 재생 · 회차 정리","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"관리자 백오피스","type":"관리자","desc":"회원 승인, 공지 작성, 신고 처리, 활동 로그를 한 화면에서 다룹니다. 처리한 사람과 시각이 함께 남습니다.","sub":"회원 · 공지 · 신고 · 로그","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"자료 열람 추적","type":"보안","desc":"자료를 열면 화면에 열람자 표시가 얹히고 열람 기록이 저장됩니다. 개인정보는 서버에서 가려진 채 전달됩니다.","sub":"워터마크 · 열람 이력 · 마스킹","id":"C5","img":"assets/img/case-5.svg","pub":1},{"title":"신고·블라인드 처리","type":"관리자","desc":"회원이 신고한 글은 관리자 대기열로 모이고, 처리하면 본문이 즉시 가려집니다.","sub":"신고 접수 · 블라인드","id":"C6","img":"assets/img/case-6.svg","pub":1},{"title":"접근 제어 정책","type":"보안","desc":"등급과 작성자에 따라 데이터베이스 단계에서 조회 범위를 제한합니다. 화면을 우회해도 권한 밖 자료는 내려오지 않습니다.","sub":"Supabase RLS 기반","id":"C7","img":"assets/img/case-7.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157660"};
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
