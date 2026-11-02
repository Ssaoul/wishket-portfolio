/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"결담 파트너스","brandSub":"Gyeoldam Partners — Business Advisory for Owner-led Companies","nav":[["index.html","개요"],["catalog.html","컨설팅 소개"],["gallery.html","프로그램 소개"],["about.html","진행 방식"]],"cats":["경영 진단","사업 전략","조직·인사","운영 개선"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"대표자 경영 진단 프로그램","cat":"경영 진단","desc":"매출 구조, 비용, 의사결정 흐름을 인터뷰와 자료로 점검합니다. 우선 손봐야 할 과제를 정리한 진단 보고서를 드립니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"재무 흐름 점검 세션","cat":"경영 진단","desc":"월별 현금 흐름과 고정비 구조를 함께 보면서 의사결정에 필요한 지표를 정합니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"신규 사업 타당성 검토","cat":"사업 전략","desc":"새 사업 아이디어의 시장, 경쟁, 수익 구조를 따져 보고 진행·보류·수정 가운데 하나를 판단하도록 돕습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"중기 사업계획 수립","cat":"사업 전략","desc":"3개년 방향과 연간 실행 과제를 문서로 정리합니다. 분기마다 점검할 기준도 함께 세웁니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"조직 구조 재설계","cat":"조직·인사","desc":"역할이 겹치는 부분과 보고 체계를 정리하고, 직무별 책임 범위를 명확히 합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"평가·보상 체계 정비","cat":"조직·인사","desc":"현재 평가 방식의 문제를 진단하고, 회사 규모에 맞는 평가 항목과 보상 기준을 제안합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"업무 프로세스 개선 워크숍","cat":"운영 개선","desc":"반복 업무와 병목 구간을 함께 찾고, 실무진이 바로 쓸 수 있는 개선안을 만듭니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"월 단위 자문 (리테이너)","cat":"운영 개선","desc":"정해진 기간 동안 월 2회 정기 미팅으로 경영 현안을 함께 검토합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"제조 분야 대표 후기 — 진단 보고서로 우선순위 정리","type":"후기 · 게시중","desc":"관리자가 승인한 후기입니다. 고객 동의를 받았고, 업종과 직함만 표시한 익명 형태로 노출됩니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"교육 서비스 대표 후기 — 사업계획 수립 과정","type":"후기 · 게시 보류","desc":"고객의 게시 동의 서명이 아직 확인되지 않아 비공개 상태입니다. 동의가 확인되면 관리자가 게시로 바꿉니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"상담 신청 #CN-1102-07 — 연락처 형식 오류","type":"문의하기 · 접수 실패","desc":"연락처에 숫자가 9자리만 입력돼 제출이 막혔습니다. 폼에 '연락처를 다시 확인해 주세요' 안내가 뜨고, 입력한 내용은 지워지지 않습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"상담 신청 #CN-1102-09 — 개인정보 동의 누락","type":"문의하기 · 접수 실패","desc":"개인정보 수집·이용 동의에 체크하지 않아 신청이 접수되지 않았습니다. 체크박스 옆에 개인정보처리방침 링크가 함께 표시됩니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"상담 신청 #CN-1102-12 — 반복 등록 차단","type":"문의하기 · 스팸 차단","desc":"같은 내용이 1분 안에 5회 등록돼 자동으로 차단됐습니다. 관리자 목록에는 '차단됨'으로 따로 표시됩니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"프로그램 '월 단위 자문' 신규 모집 일시 중단","type":"프로그램 · 관리자 편집","desc":"관리자가 프로그램 상태를 '상담 대기 안내'로 바꾼 사례입니다. 소개 페이지에는 신청 버튼 대신 대기 안내 문구가 나옵니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159375"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","컨설팅 소개"],["gallery.html","프로그램 소개"],["about.html","진행 방식"]];
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
