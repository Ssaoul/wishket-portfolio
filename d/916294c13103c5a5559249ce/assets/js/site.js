/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"도움닫기 마케팅","brandSub":"Performance Marketing Partner — Case & Proof One-page","nav":[["index.html","개요"],["catalog.html","원페이지 마케팅 홈페이지"],["gallery.html","사례 표현"],["about.html","성과 자료 표현"]],"cats":["셀링포인트","사례 카드","성과 시각화","웹빌더 편집 범위"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"셀링포인트 ↔ 입증 자료 연결 블록","cat":"셀링포인트","desc":"셀링포인트 문구 하나마다 근거 사례 번호(CASE-xxxx)와 자료 유형을 붙인다. 근거가 없는 문구는 '입증 자료 준비 중'으로 표시해 빈 주장처럼 보이지 않게 한다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"사례 카드 4단 구조","cat":"사례 카드","desc":"과제 → 실행 → 결과 → 근거 순서로 고정한다. 캡처 원본은 '근거' 칸에 축소해 넣고, 누르면 크게 볼 수 있다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"업종·채널 필터 탭","cat":"사례 카드","desc":"고객사가 자기 업종 사례부터 보도록 쇼핑몰·교육·식품·로컬 매장 탭으로 나눈다. 해당 업종 사례가 없으면 가장 가까운 유형을 안내한다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"집행 전후 매출 비교 차트","cat":"성과 시각화","desc":"같은 기간 길이로 전과 후를 나란히 놓는다. 시즌 영향이 큰 사례는 '비교 기간에 성수기 포함'이라고 각주를 단다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"월별 추이 라인 차트","cat":"성과 시각화","desc":"단일 수치 대신 흐름을 보여준다. 초반에 하락한 구간도 지우지 않고 '소재 교체 시점' 표시와 함께 그대로 둔다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"수치 비공개 사례 처리 규칙","cat":"성과 시각화","desc":"고객사가 매출 공개에 동의하지 않은 사례는 절대값을 빼고 지수(집행 전 = 100)로만 표기한다. 축 라벨에 '지수'라고 적는다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"섹션 순서·노출 편집","cat":"웹빌더 편집 범위","desc":"히어로·셀링포인트·사례·성과·진행 방식·문의 6개 섹션은 웹빌더 관리자에서 순서를 바꾸거나 숨길 수 있다. 문구는 텍스트 위젯으로 직접 수정한다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"차트 이미지 교체 가이드","cat":"웹빌더 편집 범위","desc":"차트는 원본 디자인 파일에서 수치만 바꿔 다시 내보내는 방식이다. 웹빌더 안에서 차트를 직접 그리지 않으므로, 교체 순서를 1페이지 가이드로 넘긴다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"사례 카드 추가 템플릿","cat":"웹빌더 편집 범위","desc":"새 사례는 빈 카드 템플릿을 복제해 4칸만 채우면 된다. 근거 이미지 권장 크기와 파일명 규칙(CASE-번호_근거.jpg)을 함께 제공한다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"CASE-0412 · 생활용품 쇼핑몰 검색광고 재구성","type":"매출 성과형","desc":"과제: 광고비는 늘었는데 주문이 따라오지 않았다. 실행: 키워드를 구매 의도별로 다시 묶었다. 결과: 전후 비교 차트와 주문 추이로 제시하고, 원본 광고 리포트 캡처를 근거 칸에 붙였다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"CASE-0427 · 지역 입시학원 상담 신청 전환","type":"전환 개선형","desc":"과제: 유입은 있는데 상담 신청 폼에서 이탈이 많았다. 실행: 랜딩 문구와 신청 단계를 줄였다. 결과: 매출 대신 상담 신청 건수 추이로 보여주는 사례다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"CASE-0433 · 식품 D2C 브랜드 SNS 소재 테스트","type":"부분 성과","desc":"초반 3주는 반응이 떨어져 소재를 전면 교체했다. 추이 차트에서 하락 구간을 지우지 않고 '교체 시점'을 표시해, 실패와 대응 과정을 함께 보여준다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"CASE-0441 · 프랜차이즈 가맹점 지역 광고","type":"정성 사례","desc":"고객사가 매출 공개에 동의하지 않았다. 수치 없이 실행 범위와 운영 방식만 소개하고, 성과 칸은 '비공개 · 지수 표기 불가'로 명확히 표시한다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"CASE-0448 · 뷰티 브랜드 상세페이지 개선","type":"자료 보완 필요","desc":"캡처 자료가 기간 일부만 남아 있어 전후 비교를 할 수 없다. 공개 전 고객사에 보완 자료를 요청해야 하는 항목으로 관리자 메모에 남겨 둔다.","id":"C4","img":"assets/img/case-4.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159291"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","원페이지 마케팅 홈페이지"],["gallery.html","사례 표현"],["about.html","성과 자료 표현"]];
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
