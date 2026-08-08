/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세움파트너스","brandSub":"SEUM PARTNERS","cats":["회사소개","사업영역","공지사항","블로그"],"caseCats":["사용자 페이지","관리자 페이지","팝업 관리","반응형"],"items":[{"name":"기업 소개 페이지","cat":"회사소개","desc":"회사 개요와 비전을 텍스트와 이미지로 구성해 보여주는 소개 화면입니다. 문구와 이미지는 관리자 페이지에서 교체합니다.","meta":"텍스트 + 이미지 영역","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"오시는 길","cat":"회사소개","desc":"사무실 위치와 약도, 대중교통 안내를 담은 안내 화면입니다. 주소 정보는 관리자에서 수정할 수 있습니다.","meta":"약도 · 교통 안내","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"사업영역 소개","cat":"사업영역","desc":"주요 사업 분야를 카드 형태로 나열하고, 각 항목을 눌러 상세 설명으로 이동합니다.","meta":"카드 목록 → 상세","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"공지사항 목록","cat":"공지사항","desc":"등록된 공지를 최신순으로 보여주는 게시판 목록입니다. 페이지 이동과 제목 검색을 지원합니다.","meta":"목록 · 페이지네이션","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"공지사항 상세","cat":"공지사항","desc":"제목·작성일·본문과 첨부 파일을 확인하는 상세 화면입니다. 이전 글, 다음 글로 넘어갈 수 있습니다.","meta":"본문 · 첨부파일","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"블로그 목록","cat":"블로그","desc":"썸네일과 요약이 함께 보이는 콘텐츠 목록입니다. 카테고리와 태그로 걸러 볼 수 있습니다.","meta":"썸네일 · 카테고리","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"블로그 상세","cat":"블로그","desc":"에디터로 작성한 본문을 이미지와 함께 보여주는 읽기 화면입니다. 관련 글을 아래에 이어 붙입니다.","meta":"에디터 본문 · 관련 글","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"접속 팝업","cat":"회사소개","desc":"사이트 접속 시 뜨는 안내 팝업입니다. 닫기와 '오늘 하루 보지 않기'를 지원합니다.","meta":"닫기 · 오늘 하루 숨김","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"관리자 로그인","cat":"회사소개","desc":"담당자가 관리자 페이지로 들어가는 로그인 화면입니다. 세션이 끊기면 다시 인증합니다.","meta":"계정 인증","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"기업 소개 메인","type":"사용자 페이지","desc":"회사 개요, 사업영역, 최근 소식을 한 화면에 배치한 첫 인상 페이지입니다.","sub":"와이어프레임 기반 구성","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"공지·블로그 게시판","type":"사용자 페이지","desc":"목록에서 상세로 이어지는 읽기 흐름을 공지사항과 블로그 두 갈래로 나눠 구성했습니다.","sub":"목록 → 상세","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"글 작성·수정 화면","type":"관리자 페이지","desc":"제목, 본문, 이미지, 공개 여부를 한 화면에서 입력하고 미리보기로 확인한 뒤 저장합니다.","sub":"작성 · 수정 · 삭제","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"콘텐츠 목록 관리","type":"관리자 페이지","desc":"등록된 공지와 블로그 글을 표로 모아 보고, 검색·정렬·일괄 삭제로 정리합니다.","sub":"검색 · 정렬 · 삭제","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"팝업 등록과 노출 제어","type":"팝업 관리","desc":"팝업 이미지와 링크를 등록하고, 노출 기간과 위치를 정한 뒤 스위치로 켜고 끕니다.","sub":"활성 · 비활성 전환","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"모바일 화면 대응","type":"반응형","desc":"메뉴, 게시판, 팝업이 좁은 화면에서도 겹치지 않도록 배치를 바꿔 보여줍니다.","sub":"PC · 태블릿 · 모바일","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157522"};
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
