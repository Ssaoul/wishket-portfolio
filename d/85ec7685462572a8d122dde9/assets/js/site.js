/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온숨 ONSUM","brandSub":"Sauna · Rest · Recovery Goods","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["배스 타월","사우나 가운","사우나 모자","브랜드 콘텐츠","공간 소개"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"OS-TW-01 리넨 와플 배스 타월","cat":"배스 타월","desc":"샌드·차콜 2색. 상세 페이지는 소재 클로즈업, 크기 안내, 세탁 방법 순서. 차콜은 입고 예정이라 '재입고 알림' 버튼으로 표시.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"OS-TW-02 핸드 타월 2매 세트","cat":"배스 타월","desc":"단품과 세트 옵션을 나눠 보여 주는 화면. 웹빌더 옵션 조합 한도 안에서 구성.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"OS-RB-01 코튼 거즈 사우나 가운","cat":"사우나 가운","desc":"S/M/L 사이즈. M 사이즈만 품절이라 해당 옵션을 회색으로 비활성 처리하고, 나머지 사이즈는 그대로 구매 가능.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"OS-HT-01 울 펠트 사우나 모자","cat":"사우나 모자","desc":"사우나 안에서 머리를 열로부터 덮는 용도로 소개. 효능 표현 없이 소재와 쓰임새만 적음.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"메인 히어로 · 데우기-식히기-쉬기","cat":"브랜드 콘텐츠","desc":"한 화면에 한 문장씩 넘어가는 비주얼 섹션. 대표님이 문안과 이미지를 직접 바꿀 수 있는 영역.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"저널 · 사우나를 즐기는 순서","cat":"브랜드 콘텐츠","desc":"글과 사진으로 된 콘텐츠 카드. 목록에서 누르면 팝업으로 본문이 열림. 글이 적은 지금은 3편만으로도 비어 보이지 않게 배치.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"공간 · 부산 (준비 중)","cat":"공간 소개","desc":"실제 사진 대신 소재 무드 사진과 '공간 준비 중' 안내로 채운 섹션. 공간이 확정되면 같은 틀에 사진만 바꿔 넣음.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"방문 예약 영역 (비활성)","cat":"공간 소개","desc":"지금은 '오픈 소식 받기'만 보이고, 오픈 후 예약 버튼으로 바꿀 수 있게 자리를 미리 잡아 둔 영역.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 사진 없이 공간 페이지 열기","type":"콘텐츠 부족 대응","desc":"오프라인 공간이 미확정이라 실제 사진이 없는 상태. 소재 무드 사진, 의식 순서, 오픈 안내로 페이지를 구성해 빈 화면이 되지 않게 함.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"가운 M 사이즈 품절","type":"예외 · 재고","desc":"품절된 옵션만 비활성 처리하고 상품 전체는 판매 중으로 유지. 재입고 알림 신청 버튼을 옆에 둠.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"타월 차콜 컬러 입고 지연","type":"예외 · 일정","desc":"상품 목록에서 '입고 예정' 표시. 출시일이 바뀌어도 대표님이 상품 관리 화면에서 문구 하나만 고치면 되게 구성.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"외부 판매 페이지로 나눴을 때 흐름","type":"구조 비교안","desc":"참고 사이트처럼 구매를 외부로 넘기면 장바구니가 둘로 나뉘고 사이트로 돌아오는 길이 끊김. 비교해 본 결과 통합형을 기본안으로 제안.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"웹빌더에서 구현이 어려운 팝업 연출","type":"제약 확인","desc":"스크롤 연동 애니메이션 같은 연출은 웹빌더 기본 기능으로 어려워 '구현 가능/별도 코드 필요'로 나눠 표시. 기본 위젯 팝업으로 대체하는 안을 같이 둠.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 범위 구분","type":"운영","desc":"문안·이미지·상품·배너는 대표님이 직접 수정, 레이아웃·메뉴 구조·예약 기능은 개발자 작업으로 나눠 화면에 표시.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
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
