/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온숨 ONSUM","brandSub":"Sauna · Rest · Bath Goods — Busan, coming soon","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["배스 타월","가운","사우나 모자","세트·기프트","저널(브랜드 콘텐츠)"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"온숨 와플 배스 타월 · 모래","cat":"배스 타월","desc":"면 100% 와플 조직, 70×140cm. 상세 팝업에서 소재·세탁법·사이즈표를 한 화면에 보여주는 구성. 대표가 웹빌더 상품 편집에서 문안만 바꾸면 반영됩니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"온숨 와플 배스 타월 · 먹","cat":"배스 타월","desc":"같은 제품의 색상 옵션. 옵션별 대표 이미지를 따로 지정하는 예시로 넣었습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"온숨 라운지 가운 · 오프화이트","cat":"가운","desc":"S·M·L 3사이즈. 사이즈표를 이미지가 아닌 표로 두어 모바일에서도 읽히게 했습니다. ※ M 사이즈 품절 상태 표시 예시.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"온숨 라운지 가운 · 숯","cat":"가운","desc":"발매 예정 상품. 가격 대신 '입고 알림 신청' 버튼이 노출되는 상태를 시안에 포함했습니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"온숨 펠트 사우나 모자","cat":"사우나 모자","desc":"울 펠트 원단. 사용 방법은 효능이 아닌 '쓰는 법' 문장으로만 안내합니다(과장 표현 배제).","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"첫 쉼 세트(타월+모자)","cat":"세트·기프트","desc":"선물 포장 옵션 포함. 묶음 상품은 웹빌더 기본 옵션 기능으로 구현 가능한 범위에서만 설계했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"저널 01 · 뜨거운 방과 차가운 물 사이","cat":"저널(브랜드 콘텐츠)","desc":"브랜드가 생각하는 휴식의 순서를 다룬 읽을거리. 공간이 없을 때 브랜드 분위기를 대신 전하는 핵심 섹션입니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"저널 02 · 부산에서 쉼을 준비하며","cat":"저널(브랜드 콘텐츠)","desc":"오프라인 공간 준비 과정을 기록하는 연재 틀. 대표가 게시판형으로 직접 글을 올리는 구조입니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 사진이 아직 없을 때의 공간·시설 페이지","type":"예외 상태","desc":"실사진 대신 도면 스케치·재료 샘플·'2027년 부산 오픈 준비 중' 문구로 구성한 대체 화면. 사진이 들어오면 갤러리 섹션만 교체하도록 자리를 분리했습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"품절·발매 예정 상품이 섞인 목록","type":"예외 상태","desc":"품절은 회색 처리 후 목록 하단으로, 발매 예정은 '입고 알림' 버튼으로 구분. 성공 상태만 있는 시안이 아니라 실제 운영에서 마주칠 상태를 함께 보여줍니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"결제 실패 후 장바구니 복귀","type":"예외 흐름","desc":"결제 단말 오류·카드 승인 거절 시 장바구니가 비지 않고 그대로 돌아오는 안내 문구와 화면. 문구는 웹빌더 기본 결제 흐름 안에서 바꿀 수 있는 범위로 한정했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"방문 예약 영역 — 지금은 비활성","type":"확장 대비","desc":"메뉴와 메인에 예약 자리를 미리 두되 '오픈 소식 받기'로 대체 노출. 공간이 확정되면 같은 자리를 예약 버튼으로 켜는 방식이라 나중에 레이아웃을 다시 짤 필요가 없습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"대표가 직접 고치는 범위 vs 개발자가 고치는 범위","type":"편집 범위","desc":"섹션마다 '문안·이미지 교체 가능(대표)' / '레이아웃 변경 필요(개발)'를 표기. 외주 경험이 없는 발주처가 오픈 후 혼자 운영할 수 있는 선을 미리 보여줍니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"외부 판매 페이지로 분리하는 대안","type":"구성 비교","desc":"같은 메인에서 '구매하기'를 외부 판매 채널로 넘기는 경우의 흐름을 나란히 배치. 통합안과 분리안의 화면 수·관리 부담 차이를 비교할 수 있게 했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]];
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
