/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"소재마켓 링크","brandSub":"B2B Material Trading Platform — UI Renewal Draft","nav":[["index.html","개요"],["catalog.html","소재 검색·목록"],["gallery.html","소재 상세·샘플 요청"],["about.html","거래 요청 현황"]],"cats":["컬러 토큰","타이포그래피","간격·레이아웃","컴포넌트 상태","아이콘·이미지"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"Primary / Brand-600","cat":"컬러 토큰","desc":"로고 주색과 조화되는 기준 색. CTA 버튼·활성 탭·링크에만 사용하며 본문 배경에는 쓰지 않는다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"Surface / Level 0~2","cat":"컬러 토큰","desc":"페이지 배경·카드·팝오버 3단계 표면 색. 단계 간 명도 차 4% 이상으로 테두리 없이도 층이 읽힌다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"State / Error·Warning·Success","cat":"컬러 토큰","desc":"반려·품절·검수 완료 등 거래 상태 뱃지용. 색만으로 구분하지 않도록 아이콘·텍스트를 항상 병기한다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"Heading 1~3 / Pretendard","cat":"타이포그래피","desc":"32·24·20px, 굵기 700·600·600. 섹션 제목과 카드 제목의 위계를 크기와 굵기 두 축으로 분리.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"Body / Caption","cat":"타이포그래피","desc":"본문 16px 400, 보조 14px 400, 캡션 12px 500. 캡션은 작아지는 대신 굵기를 올려 가독성을 보전.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"8px 간격 스케일","cat":"간격·레이아웃","desc":"4·8·12·16·24·32·48·64 토큰. 섹션 사이 64, 카드 사이 24, 카드 내부 16을 기준값으로 고정.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"Button / 4종 × 5상태","cat":"컴포넌트 상태","desc":"Primary·Secondary·Ghost·Danger 각각 기본·호버·활성·비활성·로딩. 비활성은 명암비 3:1 하한 유지.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"Input / 오류·도움말","cat":"컴포넌트 상태","desc":"포커스 링 2px, 오류 시 테두리+메시지+아이콘 3중 표시. 자리표시자 색은 본문과 구분되되 4.5:1 충족.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"Tag / 소재 속성","cat":"컴포넌트 상태","desc":"재질·인증·납기 태그 3계열. 선택형 태그는 체크 상태를 색 반전 없이 테두리와 아이콘으로 표현.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"MAT-2026-1042 샘플 요청 승인","type":"정상 흐름","desc":"구매사가 소재 상세에서 샘플을 요청하고 판매사가 승인한 표준 경로. 상태 뱃지가 '요청 → 승인 → 발송' 3단계로 전이한다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"MAT-2026-0987 판매사 반려","type":"예외 · 반려","desc":"최소 주문량 미달로 판매사가 반려. Error 토큰 뱃지와 사유 텍스트가 카드 상단에 노출되고 재요청 버튼은 Secondary로 격하된다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"MAT-2026-1105 품절 소재 열람","type":"예외 · 품절","desc":"목록에서 품절 소재는 썸네일 채도를 낮추고 '품절' 태그를 붙인다. 샘플 요청 버튼은 비활성이지만 대체 소재 링크는 활성 상태로 남긴다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"신규 판매사 등록 폼 오류","type":"예외 · 입력 검증","desc":"사업자 정보 입력 중 필수 항목 누락 시 해당 입력창만 오류 상태로 바뀌고 상단 요약 배너가 누락 항목 수를 안내한다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"메인 첫 화면 색 시안 A/B","type":"방향성 확정","desc":"첫 주 산출물. 같은 레이아웃에 Brand-600 비중을 달리한 두 시안을 나란히 두고 대표 승인용 비교표를 붙였다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"다크 배경 로고 명암비 미달","type":"예외 · 접근성","desc":"푸터 다크 표면에 기존 로고를 올렸을 때 명암비 2.8:1로 미달. 로고 변형 없이 표면 색을 한 단계 밝혀 4.6:1로 조정한 기록.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159048"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","소재 검색·목록"],["gallery.html","소재 상세·샘플 요청"],["about.html","거래 요청 현황"]];
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
