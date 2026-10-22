/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"새길소비자네트워크","brandSub":"Consumer Rights Newsroom","nav":[["index.html","개요"],["catalog.html","보도자료·성명"],["gallery.html","소비자 정보(자료실)"],["about.html","전역 키워드 통합 검색"]],"cats":["보도자료·성명","토론회·포럼","정책 자료","소비자보고서(Brief·칼럼)","공지사항"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"[보도 2026-1207] 생성형 AI 챗봇 환불 안내 누락 실태 성명","cat":"보도자료·성명","desc":"분류: AI · 해시태그 #AI환불분쟁. 사진 캡션 2건, 인용구 1건, 형광펜 강조 3곳. 발행과 동시에 메인 이슈 1번 테마에 노출됩니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"[보도 2026-1205] 이동통신 약정 위약금 고지 방식 개선 촉구","cat":"보도자료·성명","desc":"분류: 통신 · 해시태그 #통신위약금. 기자 구독자에게 자동 발송했으나 2건이 반송됐습니다(수신함 용량 초과). 재발송 대기 중입니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"[보도 2026-1203] 배달 플랫폼 수수료 전가 관련 입장문 (임시저장)","cat":"보도자료·성명","desc":"분류: 플랫폼·문화. 대표 이미지 캡션이 비어 있어 발행 전 검사에 걸렸고, 발행 버튼이 비활성 상태입니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"[포럼 2026-F02] 자동차 리콜 정보 접근성 토론회","cat":"토론회·포럼","desc":"분류: 자동차 · 일시·장소·발제자 카드와 함께 자료집 PDF 32쪽을 연결했습니다. 해시태그 #리콜정보로 메인 카드뉴스와 묶입니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"[보고서 2026-R01] 식품 유통기한 표시 소비자 인식 심층 보고서","cat":"소비자보고서(Brief·칼럼)","desc":"PDF 48쪽 · 브라우저 뷰어로 열람합니다. 모바일에서는 텍스트 레이어를 유지한 채 확대해 글씨가 깨지지 않게 했습니다. 다운로드·로그인은 필요 없습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"[Brief 2026-B03] 구독 서비스 자동결제 해지 동선 점검","cat":"소비자보고서(Brief·칼럼)","desc":"4쪽 분량의 Brief입니다. 본문 인용구 블록과 표 1개를 넣었고, 사회 분류 해시태그 #다크패턴에 연결했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"[정책 2026-P01] 전자상거래 청약철회 제도 비교 자료","cat":"정책 자료","desc":"PDF 업로드 후 변환에 실패했습니다(스캔본이라 텍스트 레이어가 없음). 관리자에게 OCR 재처리 안내가 표시됩니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"[공지 2026-N01] 홈페이지 개설 및 기자 구독 신청 안내","cat":"공지사항","desc":"공지사항 목록은 작성일 기준 최신순으로 고정했습니다. 상단 고정 공지 1건만 예외로 둘 수 있게 했습니다(관리자 설정).","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"해시태그로 메인 테마 교체","type":"이슈 큐레이션","desc":"관리자가 메인 노출 해시태그를 #AI환불분쟁에서 #통신위약금으로 바꾸면, 관련 성명·보도자료·카드뉴스가 최상단 테마 영역에 바로 다시 묶여 노출됩니다. 코드는 수정하지 않습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"지정한 해시태그에 글이 0건일 때","type":"예외 처리","desc":"새로 지정한 해시태그에 연결된 글이 아직 없으면 빈 영역을 띄우지 않습니다. 대신 직전 테마를 유지하고 관리자 화면에 '연결된 글 없음' 경고를 띄웁니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"기자 구독 발송 반송 처리","type":"발송 예외","desc":"신규 보도자료가 등록되면 기자 구독자에게 자동 발송됩니다. 반송된 주소는 소속과 함께 따로 표시되고, 3회 연속 반송되면 발송 대상에서 자동으로 빠집니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"통합 검색 '리콜' 탭 분류","type":"전역 검색","desc":"헤더에서 '리콜'을 검색하면 보도자료 3건, 자료실 1건, 공지 0건, FAQ 1건이 탭으로 나뉘어 나옵니다. 결과가 없는 탭은 비활성으로 표시합니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"보유기한이 지난 구독자 정보 마스킹","type":"개인정보 보호","desc":"수신 동의 보유기한이 지난 구독자는 이메일과 소속이 자동으로 마스킹되고, 발송 대상에서도 빠집니다. 저장된 연락처는 암호화되어 있습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159234"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","보도자료·성명"],["gallery.html","소비자 정보(자료실)"],["about.html","전역 키워드 통합 검색"]];
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
