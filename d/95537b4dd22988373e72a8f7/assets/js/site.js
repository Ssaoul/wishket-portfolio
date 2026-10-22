/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"소비자온","brandSub":"Consumer Voice Newsroom","nav":[["index.html","개요"],["catalog.html","단체소개"],["gallery.html","보도자료·성명"],["about.html","소비자 정보(자료실)"]],"cats":["AI","통신","플랫폼·문화","자동차","식품·과학","사회"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"[성명] 생성형 AI 서비스 약관의 일방적 학습 동의 조항 개선 촉구","cat":"AI","desc":"보도자료 PR-2026-1104 · 해시태그 #AI약관 · 메인 '이슈 큐레이션' 1번 테마에 노출 중","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"[보도자료] 알뜰폰 요금제 해지 위약금 고지 실태 점검 결과","cat":"통신","desc":"보도자료 PR-2026-1102 · 본문 사진 캡션 2건, 인용구 1건 포함 · 기자 구독자에게 자동 발송 완료","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"[보도자료] 구독형 OTT 자동결제 해지 절차 비교 조사","cat":"플랫폼·문화","desc":"보도자료 PR-2026-1029 · 해시태그 #다크패턴 · 형광펜 강조 3곳","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"[성명] 중고차 성능점검 기록부 허위 기재 피해 대책 요구","cat":"자동차","desc":"보도자료 PR-2026-1027 · 임시저장 상태 — 대표 이미지 미등록으로 발행 버튼 비활성","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"[보도자료] 수입 가공식품 원산지 표시 위반 사례 분석","cat":"식품·과학","desc":"보도자료 PR-2026-1025 · 첨부 PDF 42쪽 소비자보고서와 연결","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"[토론회] 플랫폼 노동과 소비자 보호의 접점 포럼 개최 안내","cat":"사회","desc":"토론회·포럼 EV-2026-03 · 자료집 PDF 업로드 후 변환 실패 → 재업로드 대기","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"[소비자보고서 Brief] 키오스크 접근성 현장 점검 결과","cat":"사회","desc":"자료실 RP-2026-07 · 48쪽 · 브라우저 내 뷰어 열람, 모바일 확대 지원","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"[정책 자료] 온라인 플랫폼 거래 공정화 관련 쟁점 정리","cat":"플랫폼·문화","desc":"자료실 PL-2026-02 · 해시태그 #다크패턴 테마에 함께 묶임","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"해시태그 테마 큐레이션","type":"관리자 편집","desc":"관리자가 #AI약관·#다크패턴·#위약금 3개 해시태그를 지정하면 메인 최상단에 테마별로 성명·보도자료·카드뉴스가 묶여 노출됩니다. 지정한 #전동킥보드 태그에 발행 글이 0건이면 해당 테마를 숨기고 관리자에게 경고를 표시합니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"기자 전용 구독 신청","type":"구독 흐름","desc":"보도자료 게시판 상단 버튼에서 이메일·소속을 입력해 신청합니다. 이메일 형식 오류, 이미 등록된 주소의 중복 신청은 안내 문구와 함께 저장되지 않습니다. 개인정보 보유 기한이 지난 구독자는 목록에서 마스킹 처리됩니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"통합 검색 '위약금'","type":"검색","desc":"헤더 검색창에서 '위약금' 입력 시 보도자료·공지사항·자료실·FAQ 4개 탭으로 결과를 나눠 보여줍니다. FAQ 탭에 결과가 없으면 빈 탭 대신 '검색 결과 없음'과 다른 탭 건수를 함께 안내합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"48쪽 보고서 브라우저 열람","type":"PDF 뷰어","desc":"자료실 보고서를 다운로드·회원가입 없이 페이지 넘김으로 열람합니다. 모바일에서는 확대해도 글자가 깨지지 않는 방식으로 표시하고, 변환에 실패한 파일은 관리자 화면에 '재업로드 필요'로 표시됩니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"기사형 글 작성","type":"에디터","desc":"관리자가 HTML 없이 사진 캡션·본문 인용구·형광펜 강조를 버튼으로 넣고, 모바일 미리보기로 리사이징을 확인한 뒤 발행합니다. 대표 이미지가 없으면 발행 전에 막고 이유를 알려줍니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"하위 게시판 최신순 고정","type":"정렬 원칙","desc":"메인은 이슈 중심으로 구성하되, 보도자료·자료실 등 하위 게시판은 관리자가 순서를 바꿀 수 없도록 작성일 내림차순으로 고정합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159234"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","단체소개"],["gallery.html","보도자료·성명"],["about.html","소비자 정보(자료실)"]];
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
