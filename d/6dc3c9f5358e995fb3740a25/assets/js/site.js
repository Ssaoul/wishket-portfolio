/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온결","brandSub":"Ongyeol — Sauna, Rest & Recovery Goods","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["배스 타월","사우나 가운","사우나 모자","리추얼 세트"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"결 와플 배스 타월","cat":"배스 타월","desc":"두꺼운 와플 조직의 대형 타월입니다. 오트밀·차콜 2색이며, 상세 팝업에서 소재와 관리 방법을 안내합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"결 핸드 타월 2매입","cat":"배스 타월","desc":"얼굴과 손에 쓰는 소형 타월 묶음입니다. 단독으로도 팔고 세트 구성품으로도 들어갑니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"쉼 리넨 사우나 가운","cat":"사우나 가운","desc":"가볍게 걸치는 리넨 혼방 가운입니다. 사이즈 2종 중 L 사이즈가 품절이라 '재입고 알림' 버튼이 대신 보입니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"쉼 거즈 롱 가운","cat":"사우나 가운","desc":"4중 거즈로 만든 긴 가운입니다. 상품 사진을 아직 받지 못해 브랜드 컬러 단색 썸네일로 임시 노출합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"펠트 사우나 햇","cat":"사우나 모자","desc":"열기에서 머리를 보호하는 울 펠트 모자입니다. 착용 사진 자리와 제품 단독 사진 자리를 나눠 두었습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"리넨 버킷 햇","cat":"사우나 모자","desc":"사우나 뒤 휴식 시간에 쓰는 가벼운 모자입니다. 입고 예정 상품이라 가격 대신 '11월 입고 예정'이 표시됩니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"첫 회복 리추얼 세트","cat":"리추얼 세트","desc":"타월·모자·파우치를 묶은 입문 세트입니다. 구성품 하나가 품절되면 세트 전체가 '구성 변경 중'으로 바뀌는 예외 흐름을 넣었습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"선물 포장 옵션","cat":"리추얼 세트","desc":"상품 상세에서 고르는 추가 옵션입니다. 단독 상품으로 사지 못하도록 목록 노출을 막아 두었습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 미확정 상태의 공간·시설 페이지","type":"예외 처리","desc":"실제 사진이 없으면 브랜드가 그리는 휴식 장면과 부산 예정 문구만으로 페이지를 채웁니다. 공간이 확정되면 같은 틀에 사진만 바꿔 넣습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"name":"","title":"예약 영역 비활성 슬롯","type":"확장 대비","desc":"헤더 메뉴와 공간 페이지 하단에 방문 예약 자리를 미리 잡고 숨겨 두었습니다. 나중에 오픈할 때 레이아웃을 다시 짤 필요가 없습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"콘텐츠 상세 팝업 흐름","type":"탐색 흐름","desc":"메인의 장면 카드를 누르면 상세 내용이 팝업으로 열립니다. 팝업 안에서 바로 관련 굿즈로 넘어갈 수 있습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"상품 사진 미전달 시 대체 썸네일","type":"예외 처리","desc":"이미지가 아직 없는 상품은 키 컬러 단색 카드와 상품명 타이포로 보여 줍니다. 목록의 리듬이 깨지지 않게 하려는 장치입니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"품절·입고 예정 표시","type":"커머스 상태","desc":"품절은 재입고 알림, 입고 예정은 날짜 안내로 버튼을 바꿉니다. 결제로 넘어가지 못하는 상태를 화면에서 분명히 보여 줍니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"외부 판매 페이지 분리안 비교","type":"구조 대안","desc":"통합형과 분리형 메뉴 구조를 나란히 그려 두었습니다. 대표님이 두 흐름을 직접 눌러 보고 고를 수 있습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
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
