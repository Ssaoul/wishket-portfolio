/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"이음마루","brandSub":"Social Cooperative Website Platform","nav":[["index.html","개요"],["catalog.html","조합 소개"],["gallery.html","사업 소개"],["about.html","운영진 소개"]],"cats":["조합 소개","교육과정","신청 접수","회원 커뮤니티","관리자"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"조합 개요 및 연혁","cat":"조합 소개","desc":"설립 목적과 연도별 연혁을 타임라인으로. 관리자 화면에서 연혁 항목을 추가·삭제할 수 있습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"운영진 프로필 카드","cat":"조합 소개","desc":"이사장·이사·사무국 프로필을 카드로 배치. 사진과 담당 업무는 관리자가 직접 교체합니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"교육과정 목록·상세","cat":"교육과정","desc":"운영 중인 과정을 목록으로 보여주고 상세에서 대상·시간·커리큘럼을 안내합니다. 1차에서는 수강 신청 버튼 없이 소개까지입니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"컨설팅 신청 폼","cat":"신청 접수","desc":"개인·소규모 단체용. 이름, 연락처, 관심 분야, 문의 내용을 받고 접수번호를 발급합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"사업 신청 폼(B2G·B2B)","cat":"신청 접수","desc":"기관명, 담당자, 희망 교육 인원, 희망 기간, 예산 범위를 받는 별도 양식. 첨부파일 1건까지 허용합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"회원 게시판","cat":"회원 커뮤니티","desc":"회원가입·로그인 후 글과 댓글 작성. 비회원은 목록과 본문 열람까지만 가능합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"Q&A 문의","cat":"회원 커뮤니티","desc":"회원이 문의를 올리면 관리자가 답변합니다. 비공개 문의는 작성자와 관리자에게만 보입니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"신청 내역 관리","cat":"관리자","desc":"컨설팅·사업 신청을 한 목록에서 조회하고 접수·검토중·완료로 상태를 바꿉니다. 엑셀로 내려받을 수 있습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"콘텐츠 편집기","cat":"관리자","desc":"소개·교육과정 본문을 워드 쓰듯 고치고, 저장 전에 실제 화면 모습을 미리 봅니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"접수번호 C-2610-0147 · 컨설팅 신청","title_note":"","type":"정상 접수","desc":"협동조합 설립 상담 문의가 접수되어 담당자 지정까지 완료된 상태입니다. 신청자에게 접수 확인 안내가 발송됐습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"접수번호 B-2610-0032 · 사업 신청","type":"검토중","desc":"기초자치단체 평생학습과의 교육 위탁 문의. 희망 기간이 12월로 지원사업 종료 시점과 겹쳐 내부 확인이 필요한 건으로 표시돼 있습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"접수번호 B-2610-0035 · 사업 신청","type":"반려·재작성 요청","desc":"담당자 연락처가 비어 있고 첨부파일이 열리지 않아 반려됐습니다. 반려 사유를 적어 보내면 신청자가 같은 링크에서 다시 제출합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"접수번호 C-2610-0151 · 컨설팅 신청","type":"중복 접수","desc":"같은 연락처로 10분 안에 두 번 들어온 건. 뒤 건을 앞 건에 묶어 표시하고, 담당자가 한쪽을 닫도록 안내합니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"Q&A #084 · 교육과정 문의","type":"답변 지연","desc":"등록 후 3일간 답변이 없어 관리자 화면 상단에 미답변으로 올라온 문의입니다. 지연 기준일은 관리자가 조정합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"게시글 #212 · 회원 게시판","type":"신고 접수","desc":"홍보성 글로 신고돼 자동으로 숨김 처리된 뒤 관리자 검토 대기 중입니다. 복구와 삭제 모두 이력이 남습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158529"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","조합 소개"],["gallery.html","사업 소개"],["about.html","운영진 소개"]];
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
