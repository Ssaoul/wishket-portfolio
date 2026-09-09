/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"이사한칸","brandSub":"Moving Service Renewal Prototype","nav":[["index.html","개요"],["catalog.html","서비스 유형별 상세"],["gallery.html","견적 신청 폼"],["about.html","이용 절차 안내"]],"cats":["가정이사","원룸이사","사무실이사","보관이사","생활서비스(확장)"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"포장이사 종합","cat":"가정이사","desc":"짐 포장부터 배치까지 전 과정 대행. 방문 견적 기준, 가격 기준표는 관리자에서 문안 수정 가능.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"반포장이사","cat":"가정이사","desc":"파손 위험 품목만 업체가 포장. 고객 준비 항목 체크리스트를 상세 화면 하단에 노출.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"원룸 소형이사","cat":"원룸이사","desc":"1톤 차량 기준 단독 배차. 온라인 견적만으로 접수 가능한 유일한 유형으로 표시.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"원룸 합짐이사","cat":"원룸이사","desc":"동일 방면 물량을 묶어 배차. 일정이 지정 불가할 수 있다는 안내를 신청 단계에서 먼저 고지.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"사무실 이전","cat":"사무실이사","desc":"주말·야간 작업 및 집기 재배치 포함. 층수·엘리베이터 유무를 필수 입력으로 받음.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"단기 보관이사","cat":"보관이사","desc":"입주일까지 창고 보관 후 재배송. 보관 일수에 따라 견적이 달라져 자동 산출 대상에서 제외.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"입주청소 연계","cat":"생활서비스(확장)","desc":"확장 예정 서비스 자리. 동일 카드 컴포넌트로 붙이는 예시라 '준비 중' 배지로만 표시.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"인터넷·가전 렌탈 상담","cat":"생활서비스(확장)","desc":"이사 확정 고객에게 후속 안내하는 흐름 예시. 신청 완료 화면에서 선택 동의로 연결.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"EST-260908-014 · 원룸 소형이사","title_note":"","type":"온라인 견적 확정","desc":"입력 4단계를 이탈 없이 통과해 예상 금액이 화면에서 바로 나온 경우. 접수 완료 화면에서 담당자 연락 시각을 안내.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"EST-260908-021 · 포장이사 종합","type":"방문 견적 전환","desc":"짐량이 자동 산출 범위를 넘어 온라인 금액을 내지 않고 방문 일정 잡기로 넘긴 경우. 금액 대신 '확인 후 안내'로 표기.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"EST-260909-003 · 사무실 이전","type":"입력 오류 반려","desc":"이사 예정일이 과거 날짜로 들어와 3단계에서 막힌 경우. 오류 문구를 필드 바로 아래에 두고 앞 단계 입력은 유지.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"EST-260909-007 · 단기 보관이사","type":"서비스 불가 안내","desc":"보관 창고가 없는 지역이라 접수를 받지 않고 인접 가능 지역과 대안 유형을 안내한 경우.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"EST-260909-011 · 원룸 합짐이사","type":"고객 취소","desc":"접수 후 일정 변경으로 고객이 취소한 경우. 취소 사유를 관리자에서 분류해 이탈 지점 파악에 사용.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"EST-260909-015 · 가정이사","type":"중복 접수 병합","desc":"같은 연락처로 두 번 들어온 신청을 하나로 묶은 경우. 중복 판정 기준과 병합 이력을 상세에 남김.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158308"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","서비스 유형별 상세"],["gallery.html","견적 신청 폼"],["about.html","이용 절차 안내"]];
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
