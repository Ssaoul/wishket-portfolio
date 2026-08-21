/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"에코텍코리아 (가칭) — 그라비타 코리아","brandSub":"Gravita Korea | Crushing & Screening Equipment — Localized Site","nav":[["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]],"cats":["제품","솔루션","서비스·부품","자료실","회사소개"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"트랙형 이동식 스크린 TS-620","cat":"제품","desc":"원문 제품명 'TS-620 Tracked Screen'을 국문명+원문 병기로 표기. 규격표의 t/h·mm·kW 단위와 모델 코드는 번역하지 않고 원문 그대로 유지했습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"콘 크러셔 CX-330","cat":"제품","desc":"제품 상세 레이아웃(히어로 이미지→스펙표→다운로드)을 원본과 동일 순서로 재현. 스펙표는 관리자가 행 단위로 수정 가능한 블록으로 구성했습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"모바일 컨베이어 MC-24","cat":"제품","desc":"원본에 있던 360° 뷰어는 신규 기능이 아니라 원본 요소이므로 동일하게 이관. 단, 대체 정지 이미지를 함께 두어 모바일에서 끊기지 않게 처리했습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"골재 재생 라인 구성","cat":"솔루션","desc":"원본의 산업별 적용 페이지. 본문 중 해외 규격 인용 문장은 국내 표기로 바꾸지 않고 '원문 인용'으로 표시했습니다 — 임의 현지화는 하지 않습니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"폐목재 처리 라인 구성","cat":"솔루션","desc":"영문 원본에 사례 사진 캡션이 없어 국문 캡션을 새로 만들지 않고 비워 두었습니다. 없는 정보를 지어내지 않는 원칙을 적용했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"정품 부품 및 소모품 안내","cat":"서비스·부품","desc":"부품 번호(P/N)는 전 항목 원문 유지. 문의 경로만 딜러 안내로 치환했고, 본사 문의 폼은 원본 구조를 유지한 채 국문 라벨로 교체했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"현장 정비 및 기술 지원","cat":"서비스·부품","desc":"본사 글로벌 지원 조건과 국내 딜러 지원 범위가 다를 수 있어, 원문 조건을 그대로 옮기고 '본사 기준' 표기를 붙였습니다. 국내 조건 문안은 발주처 확인 필요 항목입니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"제품 카탈로그 PDF","cat":"자료실","desc":"영문 PDF 원본을 그대로 게시하고 국문 요약만 병기. PDF 내부 번역은 과업 범위 밖이라 임의로 포함하지 않았습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"회사 연혁 및 인증","cat":"회사소개","desc":"CE·ISO 등 인증 명칭은 원문 표기 유지. 본사 연혁 중 국내 딜러쉽 관련 문단은 발주처 제공 문안이 필요해 자리만 잡아 두었습니다.","id":"I8","img":"assets/img/item-8.svg","pub":1},{"name":"뉴스 및 전시회 소식","cat":"회사소개","desc":"본사가 수시로 갱신하는 영역. 원본 발행일을 함께 표시해 국문 페이지가 언제 기준인지 드러나게 했습니다.","id":"I9","img":"assets/img/item-9.svg","pub":1}],"cases":[{"title":"제품 상세 38페이지 일괄 이관","type":"정상 이관","desc":"원본 템플릿이 동일한 제품 페이지군은 워드프레스 커스텀 필드로 구조를 통일해 옮겼습니다. 새 모델이 추가되면 관리자가 항목만 채우면 됩니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"모델명 오역 — 'Screen'을 '화면'으로 번역","type":"검수 반려","desc":"기계 번역 1차 결과에서 스크린(선별기)이 화면으로 번역된 사례. 용어집에 고정어로 등록해 재발을 막았고, 검수 단계에서 반려 이력을 남깁니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"원본 페이지가 본사에서 삭제됨","type":"예외 — 원본 소실","desc":"이관 도중 원본 사이트에서 해당 제품 페이지가 내려간 경우. 국문 페이지를 임의로 유지하지 않고 '원본 확인 필요' 상태로 잠가 발주처 판단을 기다립니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"본사 개편으로 국문 페이지가 어긋남","type":"예외 — 원본 변경","desc":"원본 히어로 배너와 문구가 교체되어 국문 페이지와 불일치가 생긴 사례. 관리자 화면에 '원본 변경 감지' 표시만 남기고 자동 반영은 하지 않습니다 — 번역 검수 없이 바뀌면 안 되기 때문입니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"영문 원문에만 있는 법적 고지 문단","type":"보류 — 확인 필요","desc":"보증·책임 관련 문단은 국내 표현으로 옮길 때 의미가 달라질 수 있어 임의 번역하지 않고 원문 병기 상태로 보류했습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"모바일에서 규격표가 잘리는 문제","type":"수정 완료","desc":"원본의 넓은 스펙 표가 모바일에서 잘리던 문제를 가로 스크롤 영역으로 처리. 표 구조 자체는 원본과 동일하게 유지했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157830"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]];
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
