/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"루프레터 마케팅","brandSub":"Proof-first One-page for Performance Marketing","nav":[["index.html","개요"],["catalog.html","셀링포인트"],["gallery.html","사례"],["about.html","성과 자료"]],"cats":["셀링포인트","사례 카드","성과 차트","웹빌더 편집 블록"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"셀링포인트 ↔ 입증 사례 연결 바","cat":"셀링포인트","desc":"셀링포인트 3개마다 그것을 입증하는 사례 번호(예: CASE-02, CASE-05)를 붙여, 주장 아래에 바로 근거로 내려가는 앵커 링크를 둡니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"한 줄 주장 + 근거 수 표시","cat":"셀링포인트","desc":"'재구매 동선 설계' 같은 주장 옆에 '입증 사례 2건 · 성과 자료 3종'처럼 근거의 양만 표시하고, 근거가 없는 주장은 시안에 올리지 않습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"4단 사례 카드","cat":"사례 카드","desc":"과제 → 실행 → 변화 → 근거 순서의 고정 카드입니다. 기존 캡처 이미지는 마지막 '근거' 칸에 썸네일로 넣고, 클릭하면 원본이 열립니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"업종·채널 필터 칩","cat":"사례 카드","desc":"식품 커머스, 뷰티 D2C, 지역 서비스업 등 고객사가 자기 업종 사례를 먼저 고를 수 있게 상단에 칩을 둡니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"월별 매출 추이 라인","cat":"성과 차트","desc":"운영 시작 시점을 세로선으로 표시한 월별 추이 차트입니다. 축과 단위는 모든 사례에서 같은 규격을 씁니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"운영 전·후 비교 막대","cat":"성과 차트","desc":"시작 전 3개월 평균과 운영 후 3개월 평균을 나란히 놓습니다. 기간이 3개월이 안 되면 '측정 기간 부족' 라벨을 달고 비교를 생략합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"수치 비공개용 지수화 차트","cat":"성과 차트","desc":"고객사가 실매출 공개를 원하지 않을 때 시작 시점을 100으로 놓은 지수로 그립니다. 금액 축은 숨기고 '지수 표기' 배지를 붙입니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"사례 슬롯 교체 가이드","cat":"웹빌더 편집 블록","desc":"사례 카드 1장 = 웹빌더 섹션 1개입니다. 이미지 3장과 텍스트 4칸만 바꾸면 새 사례가 추가되도록 원본 파일과 규격표를 함께 드립니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"차트 이미지 소스 세트","cat":"웹빌더 편집 블록","desc":"차트를 PNG와 원본 레이어 파일로 함께 넘겨, 숫자가 바뀌면 내부에서 값만 고쳐 다시 내보낼 수 있게 합니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"CASE-01 식품 커머스 · 상세페이지 개편","type":"실수치 공개","desc":"월별 매출 추이와 운영 전·후 비교 막대를 함께 쓰는 기본형입니다. 캡처 4장은 근거 칸 썸네일로 정리했습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"CASE-02 뷰티 D2C · 재구매 캠페인","type":"지수화 표기","desc":"고객사가 매출 금액 비공개를 요청한 경우입니다. 시작 월을 100으로 놓은 지수 차트로 바꾸고 금액 축은 숨겼습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"CASE-03 지역 학원 · 상담 신청 유입","type":"비매출 지표","desc":"매출 자료 없이 상담 신청 건수만 있는 사례입니다. 매출 차트 대신 채널 비중 차트로 바꿔, 셀링포인트 '유입 채널 설계'의 근거로 연결했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"CASE-04 생활용품 · 오픈마켓 입점","type":"측정 기간 부족","desc":"운영 6주 차라 전·후 비교에 필요한 3개월 데이터가 없습니다. 비교 막대를 빼고 '측정 기간 부족' 라벨과 추이만 표시한 예외 처리 예시입니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"CASE-05 반려용품 · 광고 효율 개선","type":"자료 검토 필요","desc":"캡처 이미지의 기간 표기와 성과 자료 엑셀의 기간이 서로 맞지 않는 사례입니다. 시안에는 '자료 확인 중' 상태로 두고, 확인 전까지는 공개 영역에 올리지 않는 흐름을 보여줍니다.","id":"C4","img":"assets/img/case-4.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159291"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","셀링포인트"],["gallery.html","사례"],["about.html","성과 자료"]];
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
