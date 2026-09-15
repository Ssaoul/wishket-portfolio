/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"루미나 초등관","brandSub":"Lumina Elementary Academy Landing","nav":[["index.html","개요"],["catalog.html","첫 화면(핵심 메시지)"],["gallery.html","초등관 소개 · 왜 우리인가"],["about.html","교육 프로그램 · 학년별 교육 방향"]],"cats":["기획·정보구조","카피라이팅","상담 전환","측정·SEO"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"첫 화면 핵심 메시지 A/B","cat":"카피라이팅","desc":"'초등 6년, 흔들리지 않게' / '학년이 올라갈수록 더 단단해지는 공부' 두 안을 준비. 관리자 화면에서 문구 교체가 가능하도록 텍스트 블록으로 분리했습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"학부모 관심 순서 정보구조","cat":"기획·정보구조","desc":"차별점 → 프로그램 → 관리 시스템 → 신뢰 요소 순. 자료로 받은 항목 중 뒤로 미룰 것(연혁·수상 내역)을 접이식 섹션으로 내리는 안을 함께 표시.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"학년별 교육 방향 표","cat":"기획·정보구조","desc":"1~2학년 습관, 3~4학년 독해·연산 기초, 5~6학년 중등 대비. 학년 칸만 눌러도 해당 프로그램 설명이 펼쳐지는 구조로 정보량을 줄였습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"강사진 소개 카드","cat":"기획·정보구조","desc":"원어민·한국인 강사 구성과 담당 학년을 카드로. 사진·소개 문구는 관리자에서 교체 가능하며, 사진 미등록 시 기본 실루엣으로 대체됩니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"관리 시스템 3단 설명","cat":"기획·정보구조","desc":"평가·테스트 → 학부모 피드백 → 토요특강. '무엇을 얼마나 자주 알려주는가'를 주기 표기(주 1회·월 1회)로 통일했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"상담 신청폼","cat":"상담 전환","desc":"학부모 성함 · 연락처 · 자녀 학년 · 관심 프로그램 · 상담 희망 시간대. 항목은 협의로 추가·삭제 가능하며 관리자에서 필수 여부를 켜고 끕니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"플로팅 상담 바","cat":"상담 전환","desc":"모바일 하단 고정. 전화 연결·메신저 채널·상담폼 이동 3버튼. 스크롤 30% 지점부터 노출되어 첫 화면 가독성을 가리지 않습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"GA4 이벤트 · 포털 전환 매핑","cat":"측정·SEO","desc":"페이지뷰·상담버튼클릭·폼진입·폼제출·전화연결 5종. 각 이벤트를 포털 전환 스크립트 유형에 대응시킨 표를 관리자 문서 탭에 남깁니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"기본 SEO 체크 항목","cat":"측정·SEO","desc":"Title·Meta Description·H1~H3 구조·이미지 Alt. 관리자에서 섹션별로 입력하며, 비어 있으면 저장 시 경고가 뜹니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"포털 검색 유입 → 상담 신청 완료","type":"전환 성공","desc":"첫 화면 핵심 메시지 → 차별점 → 학년별 방향까지 읽고 중간 CTA로 폼 제출. 유입 경로가 검색광고로 기록되어 어떤 광고에서 왔는지 확인됩니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"폼 진입했지만 이탈","type":"전환 이탈","desc":"연락처 입력 단계에서 벗어난 경우. 폼진입 이벤트만 남고 제출 이벤트가 없어 '진입 대비 제출' 구간이 분리 측정됩니다. 항목 수를 줄일 근거가 됩니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"연락처 형식 오류로 제출 실패","type":"입력 오류","desc":"숫자 10자리 미만 입력. 제출 버튼이 막히고 해당 칸 아래 안내가 뜹니다. 실패는 전환으로 집계되지 않습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"야간 전화 연결 시도","type":"응대 불가","desc":"운영시간 외 전화 버튼을 누른 경우. 통화 대신 '상담 가능 시간 안내 + 폼 남기기'로 유도합니다. 이 경우도 별도 이벤트로 남습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"메신저 채널 연결 후 이탈","type":"경로 이탈","desc":"외부 메신저 채널로 넘어간 뒤의 행동은 랜딩 측정 범위 밖입니다. 랜딩 쪽에는 '채널 연결 클릭'까지만 기록되며, 이후는 채널 관리자에서 확인해야 합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자가 문구를 수정하다 SEO 항목을 비움","type":"운영 예외","desc":"섹션 제목을 바꾸면서 Meta Description을 지운 경우. 저장 단계에서 경고를 띄우고, 비워 둔 채 저장하면 관리자 목록에 미입력 표시가 남습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"핵심 기능","gallery":"활용 사례","item":"기능","case":"사례"},"projectId":"158454"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","첫 화면(핵심 메시지)"],["gallery.html","초등관 소개 · 왜 우리인가"],["about.html","교육 프로그램 · 학년별 교육 방향"]];
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
