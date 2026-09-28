/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"스튜디오 여백","brandSub":"Brand & Digital Experience Studio","nav":[["index.html","개요"],["catalog.html","포트폴리오(Work) 페이지"],["gallery.html","인사이트(블로그) 페이지"],["about.html","언어 전환 (영문 다국어)"]],"cats":["브랜드 아이덴티티","공간·전시","디지털 프로덕트","패키지·인쇄"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"WRK-2026-021 무해한 정원 · 브랜드 리뉴얼","cat":"브랜드 아이덴티티","desc":"로고타입·컬러 시스템·응용 서식 12종. 대표 이미지 4장, 본문 이미지 9장. 국문/영문 모두 발행됨.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"WRK-2026-018 나루 라이브러리 사이니지","cat":"공간·전시","desc":"층별 안내 사인 체계와 픽토그램 28종. 영문 번역 대기 중이라 EN 사이트에서는 목록에서 숨김 처리.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"WRK-2026-015 온도 기록계 앱 UI 개편","cat":"디지털 프로덕트","desc":"온보딩 5화면, 설정 구조 재정리. 썸네일이 세로 비율이라 카드 그리드에서 상단 크롭 경고가 떴던 건.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"WRK-2026-012 해변 상점 패키지","cat":"패키지·인쇄","desc":"파우치·박스·라벨 3종 전개. 원본 이미지가 6.4MB여서 업로드 시 자동 리사이즈(1600px)로 저장됨.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"WRK-2026-009 소리결 전시 그래픽","cat":"공간·전시","desc":"전시장 배너와 도록 레이아웃. 메타 설명이 비어 있어 SEO 점검 목록에 미완료로 남아 있음.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"WRK-2026-006 담담 로스터리 아이덴티티","cat":"브랜드 아이덴티티","desc":"워드마크와 포장 적용안. 클라이언트 요청으로 비공개 상태이며 관리자 목록에만 노출.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"WRK-2026-004 수납 가구 브랜드 사이트","cat":"디지털 프로덕트","desc":"제품 상세 템플릿과 문의 흐름 설계. 영문 페이지는 번역본 검수 후 발행 예정.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"WRK-2025-047 계절 편지지 시리즈","cat":"패키지·인쇄","desc":"네 계절 커버 일러스트와 인쇄 사양서. 구 사이트에서 이관하며 태그가 비어 있어 분류 미지정.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"Work 업로드 — 이미지 9장 일괄 등록","type":"정상","desc":"드래그로 9장을 올리고 순서를 바꾼 뒤 발행까지 4단계. 대표 이미지는 첫 장이 자동 지정되고 목록 카드에 바로 반영된다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"원본 이미지 용량 초과","type":"경고","desc":"6.4MB JPG 업로드 시 1600px·품질 82로 자동 변환되고, 원본 보관 여부를 묻는 안내가 뜬다. 변환 전후 용량을 나란히 보여 준다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"영문 번역 누락 상태로 발행 시도","type":"차단","desc":"EN 필드가 비어 있으면 영문 사이트 발행이 막히고 국문만 공개된다. 언어 전환 시 해당 글은 목록에서 빠지며 관리자에 미번역 2건으로 표시.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"메타 설명 미입력","type":"경고","desc":"SEO 점검 목록에 미완료로 남고 발행은 진행된다. 제목·설명 길이 초과 여부를 글자수로 함께 보여 준다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구 사이트 글 이관 중 태그 유실","type":"보류","desc":"외부 블로그에서 옮긴 글 14건 중 6건이 분류 미지정 상태. 일괄 분류 화면에서 카테고리를 지정해야 목록에 노출된다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"비공개 요청 프로젝트","type":"예외","desc":"클라이언트 비공개 요청 건은 관리자 목록에만 남기고 공개 페이지와 사이트맵에서 모두 제외한다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158742"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","포트폴리오(Work) 페이지"],["gallery.html","인사이트(블로그) 페이지"],["about.html","언어 전환 (영문 다국어)"]];
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
