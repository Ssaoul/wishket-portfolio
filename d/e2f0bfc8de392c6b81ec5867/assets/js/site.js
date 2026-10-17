/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"베르텍스 글로벌","brandSub":"Global Site Renewal on WordPress — Same Structure, Every Screen","nav":[["index.html","개요"],["catalog.html","포트폴리오"],["gallery.html","게시판"],["about.html","신규 서브 페이지"]],"cats":["회사소개","제품·솔루션","포트폴리오","뉴스·게시판","운영·설정"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"메인 페이지 (TPL-01)","cat":"회사소개","desc":"국내 사이트와 같은 순서로 히어로·솔루션·포트폴리오·뉴스를 배치합니다. 히어로 문구와 배너 이미지는 관리자가 블록 편집기에서 바로 바꿀 수 있습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"About Us · 연혁 (TPL-02)","cat":"회사소개","desc":"연도별 연혁을 반복 입력 필드로 만들어서, 한 줄을 추가해도 코드 수정이 필요 없습니다. 모바일에서는 세로 타임라인으로 바뀝니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"솔루션 상세 (TPL-05)","cat":"제품·솔루션","desc":"제품마다 같은 틀(개요·사양표·적용 분야·문의 버튼)을 씁니다. 사양표는 모바일에서 가로 스크롤로 처리해 숫자가 잘리지 않게 했습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"솔루션 목록 (TPL-04)","cat":"제품·솔루션","desc":"분류 필터와 카드형 목록입니다. 새 제품을 등록하면 목록에 자동으로 추가되고, 노출 순서는 관리자가 드래그로 정합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"포트폴리오 아카이브 (TPL-07)","cat":"포트폴리오","desc":"기존 글로벌 사이트의 포트폴리오 글을 그대로 옮겨옵니다. 국가·산업·연도 태그로 거르고, 기존 글 주소는 유지하거나 301로 연결합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"포트폴리오 상세 (TPL-08)","cat":"포트폴리오","desc":"사진 갤러리, 프로젝트 개요, 관련 솔루션 링크로 구성됩니다. 관리자는 사진과 본문만 넣으면 되고, 레이아웃은 고정입니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"News · Notice 게시판 (TPL-10)","cat":"뉴스·게시판","desc":"국내 사이트 게시판과 같은 분류 체계를 씁니다. 첨부파일(PDF 카탈로그)을 올릴 수 있고, 목록은 10개 단위로 페이지가 나뉩니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"Contact · 문의 폼 (TPL-12)","cat":"뉴스·게시판","desc":"영문 문의 폼에 스팸 방지와 관리자 메일 알림을 설정합니다. 필수 항목을 빼먹으면 해당 칸 아래에 영문 안내가 나옵니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"메뉴·플러그인 설정 (SET-01)","cat":"운영·설정","desc":"퍼블리싱과 별도로 처리하는 항목입니다. GNB를 국내 구조에 맞춰 바꾸고, 쓰지 않는 플러그인을 정리하고, 백업과 캐시를 설정합니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"기존 포트폴리오 URL 이전","type":"보류","desc":"구 사이트의 포트폴리오 글 중 일부가 새 주소 체계와 맞지 않아 301 리다이렉트 목록에서 빠져 있었습니다. 오픈 전에 전체 대조표를 만들어 누락된 주소를 다시 연결합니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"name":"","title":"플러그인 버전 충돌","type":"실패","desc":"스테이징에서 페이지 빌더 플러그인을 업데이트하자 기존 슬라이더 플러그인이 동작하지 않았습니다. 슬라이더를 테마 내장 기능으로 바꾸고 해당 플러그인은 비활성화하기로 했습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"사양표 모바일 넘침","type":"실패","desc":"솔루션 상세의 7열 사양표가 360px 화면에서 잘렸습니다. 표에 가로 스크롤 영역을 넣고 첫 열을 고정해서 수정했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"영문 긴 단어 줄바꿈","type":"수정 완료","desc":"Figma 시안의 짧은 영문 카피와 실제 제품명 길이가 달라 카드 제목이 두 줄을 넘었습니다. 줄 수 제한과 말줄임 규칙을 정해 디자이너와 합의했습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"국내·글로벌 GNB 구조 대조","type":"통과","desc":"국내 사이트의 1·2depth 메뉴와 글로벌 메뉴를 한 표로 맞대어 보고, 글로벌에만 있는 메뉴 2개는 별도로 표시해 승인을 받았습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 범위 테스트","type":"통과","desc":"담당자 계정으로 배너 교체, 포트폴리오 등록, 공지 게시를 직접 해봤습니다. 레이아웃이 깨지지 않는 것을 확인하고 운영 가이드에 단계별로 정리했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159117"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","포트폴리오"],["gallery.html","게시판"],["about.html","신규 서브 페이지"]];
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
