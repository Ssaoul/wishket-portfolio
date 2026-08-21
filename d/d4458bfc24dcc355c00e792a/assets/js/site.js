/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"코어라인 코리아","brandSub":"Korean Site Build for Global Equipment Brands","nav":[["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]],"cats":["제품","솔루션","서비스·지원","회사 소개"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"이동식 스크리닝 장비","cat":"제품","desc":"본사 원문 제품 카테고리를 그대로 유지하고 모델명은 영문 표기를 남깁니다. 스펙 표의 단위(t/h, mm)는 원문 단위를 우선하고 필요 시 괄호로 국내 표기를 병기합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"고정식 플랜트 라인","cat":"제품","desc":"제품 상세는 본사 레이아웃(히어로 → 스펙 표 → 옵션 → 문의)을 동일하게 재현합니다. 이미지·배너는 원본 자산을 그대로 사용하고 대체 텍스트만 국문으로 교체합니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"컨베이어·적재 장비","cat":"제품","desc":"모델 라인업이 표 형태라 한글 폭 증가에 가장 취약한 페이지입니다. 열 폭 고정과 가로 스크롤 규칙을 적용해 모바일에서 표가 무너지지 않게 처리합니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"골재 처리 솔루션","cat":"솔루션","desc":"업종별 적용 사례 페이지. 원문의 사례 카드 구성과 순서를 유지하고 본문만 국문으로 대체합니다. 원본에 없는 국내 사례는 추가하지 않습니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"리사이클링 라인 구성","cat":"솔루션","desc":"공정 다이어그램이 이미지로 되어 있어 텍스트 번역이 불가한 구간입니다. 이미지 하단 캡션으로 국문 설명을 덧붙이는 방식을 제안합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"부품·소모품 안내","cat":"서비스·지원","desc":"부품 코드는 번역하지 않고 원문 그대로 유지합니다. 안내 문구와 버튼 라벨만 국문으로 교체하며, 본사 문의 폼 링크는 원본 동작을 그대로 따릅니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"기술 지원·정비","cat":"서비스·지원","desc":"서비스 절차 안내 페이지. 원문의 4단 스텝 UI를 동일하게 재현하되 각 스텝 제목의 한글 길이를 맞춰 줄바꿈이 생기지 않도록 조정합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"딜러 네트워크","cat":"회사 소개","desc":"원본은 전 세계 딜러 목록입니다. 국내 사이트에서 어느 범위까지 노출할지 협의가 필요한 페이지로, 시안에서는 원본 구조를 유지한 채 보류 표시했습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"브랜드 소개·연혁","cat":"회사 소개","desc":"연혁 타임라인은 연도 축이 고정이라 한글 설명이 길어지면 항목 높이가 어긋납니다. 설명 길이 상한을 정해 원본 리듬을 유지합니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"히어로 카피 두 줄 깨짐","type":"레이아웃 이슈","desc":"영문 한 줄 카피가 국문으로 옮기며 길어져 히어로 영역에서 두 줄로 흐르고 버튼이 아래로 밀렸습니다. 문장을 짧게 다듬고 줄바꿈 지점을 고정해 원본과 같은 높이로 맞췄습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"제품 스펙 단위 표기 충돌","type":"용어 검수 필요","desc":"본사 표기와 국내 업계 관용 표기가 달라 자동 번역이 임의로 바꿔 놓은 구간입니다. 원문 표기 우선 + 괄호 병기 규칙으로 통일하되, 최종 확정은 발주처 확인이 필요합니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"이미지 안에 박힌 영문","type":"번역 불가","desc":"공정 다이어그램과 일부 배너는 텍스트가 이미지에 포함돼 있어 번역할 수 없습니다. 원본 이미지 재사용 + 국문 캡션 추가 또는 원본 소스 파일 요청 중 선택이 필요합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"본사 문의 폼 연동 미정","type":"협의 대기","desc":"원본 사이트의 문의 버튼이 본사 시스템으로 연결됩니다. 국내 사이트에서 동일 동작을 유지할지, 국내 폼으로 대체할지 정해지지 않아 시안에서는 원본 동작을 유지한 상태로 두었습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"모바일에서 스펙 표 잘림","type":"레이아웃 이슈","desc":"열이 6개인 스펙 표가 좁은 화면에서 잘려 나갔습니다. 가로 스크롤 영역으로 감싸고 첫 열(모델명)을 고정해 원본 정보를 빠짐없이 보이게 했습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 범위 초과 요청","type":"운영 정책","desc":"본문 문구는 관리자가 직접 수정할 수 있지만 레이아웃 블록 구조는 잠가 두었습니다. 편집 중 원본 구성이 흐트러지는 것을 막기 위한 선택이며, 구조 변경은 별도 요청 절차로 안내합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157830"};
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
