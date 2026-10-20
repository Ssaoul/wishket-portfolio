/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"청연메디서플라이","brandSub":"Psychiatric Pharma Supply & Clinic Consulting","nav":[["index.html","개요"],["catalog.html","회사 개요 및 연혁 소개"],["gallery.html","사업 분야 안내"],["about.html","맞춤형 상담 신청 폼"]],"cats":["의약품 전문 공급","개원 컨설팅","마케팅 지원","물류 경쟁력","전문 포털 퀵 링크"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"향정신성의약품 정기 납품","cat":"의약품 전문 공급","desc":"정신건강의학과 처방 빈도가 높은 품목을 중심으로 정기 납품 주기를 병원별로 맞춥니다. 품목 구성은 상담 후 확정합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"긴급 보충 납품 접수","cat":"의약품 전문 공급","desc":"재고가 부족한 품목은 상담 폼에서 '긴급'으로 표시해 접수합니다. 담당자에게 우선 알림이 가고 처리 상태가 따로 표시됩니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"개원 입지·일정 상담","cat":"개원 컨설팅","desc":"개원 예정 지역과 시점을 기준으로 준비 순서를 함께 정리합니다. 인허가와 초도 의약품 구성 일정도 같이 맞춥니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"초도 의약품 구성 안내","cat":"개원 컨설팅","desc":"개원 첫 달에 필요한 품목 목록과 보관 기준을 안내합니다. 향정 품목의 보관·기록 의무도 함께 설명합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"병원 홍보 채널 정비","cat":"마케팅 지원","desc":"병원 소개 페이지와 지도 등록 정보를 정리합니다. 의료광고 심의 기준에 맞는 표현인지도 같이 점검합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"의료광고 표현 점검","cat":"마케팅 지원","desc":"단정적인 효과 표현이나 최상급 문구가 들어가지 않았는지 확인합니다. 심의가 필요한 매체는 따로 구분해 안내합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"KGSP 기준 보관·배송","cat":"물류 경쟁력","desc":"의약품 유통품질관리기준에 따른 온도 관리와 입출고 기록 체계를 설명하는 콘텐츠 영역입니다. 세부 내용은 관리자 화면에서 수정할 수 있습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"향정 관리 노하우","cat":"물류 경쟁력","desc":"마약류 통합관리 시스템 보고, 이중 잠금 보관, 출고 기록 대조 절차를 단계별 카드로 보여줍니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"유관기관 바로가기","cat":"전문 포털 퀵 링크","desc":"의약품 정보 포털, 마약류 통합관리 시스템, 의약품 유통정보 시스템 등으로 가는 링크 모음입니다. 모두 새 창으로 열리고, 관리자가 순서와 주소를 바꿀 수 있습니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"CS-261020-014 · 개원 상담 정상 접수","type":"성공","desc":"인천 서구 개원 예정 원장님이 모바일로 접수했습니다. 알림톡이 바로 발송됐고 상태는 '연락중'으로 바뀌었습니다. 담당자 배정까지 한 화면에서 이어집니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"CS-261020-017 · 알림톡 발송 실패 → SMS 대체","type":"예외 (알림 실패)","desc":"수신 번호가 알림톡 채널을 쓸 수 없어 발송에 실패했습니다. 시스템이 SMS로 다시 보냈고, 관리자 목록에 '대체 발송' 표시가 남습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"CS-261020-019 · 연락처 형식 오류 차단","type":"예외 (유효성 검증)","desc":"연락처가 '010-123-45'로 입력돼 제출 전에 막혔습니다. 해당 칸 아래에 다시 입력해 달라는 안내가 뜨고, 다른 입력값은 그대로 남아 있습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"CS-261020-021 · 개인정보 동의 누락","type":"예외 (필수 동의)","desc":"동의 체크박스를 선택하지 않아 접수 버튼이 눌리지 않았습니다. 약관 팝업을 열어 내용을 확인하고 체크하는 흐름을 보여줍니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"CS-261020-022 · 같은 병원 중복 접수","type":"예외 (중복)","desc":"같은 병원명과 연락처로 10분 안에 두 번 접수됐습니다. 관리자 화면에서 '중복 의심'으로 묶어 표시해 담당자가 두 번 전화하지 않게 합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"10월 상담 내역 엑셀 다운로드","type":"관리자 운영","desc":"기간·지역·처리 상태로 걸러서 엑셀로 내려받습니다. 보류 건에는 사유 칸이 함께 나옵니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159173"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 개요 및 연혁 소개"],["gallery.html","사업 분야 안내"],["about.html","맞춤형 상담 신청 폼"]];
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
