/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온결 ONGYEOL","brandSub":"Sauna, Rest & Recovery — Bath Goods from Busan","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["배스 타월","사우나 가운","사우나 햇","휴식 소품","기프트 세트"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"결 타월 — 라지 (리넨 혼방)","cat":"배스 타월","desc":"빠르게 마르는 와플 조직의 대형 타월입니다. 샌드·차콜 2색이며 상세 이미지는 클라이언트 제공 사진 자리로 비워 두었습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"결 타월 — 핸드","cat":"배스 타월","desc":"라지 타월과 같은 원단을 쓴 핸드 사이즈입니다. 상품 목록에서 라지와 묶음 노출되도록 설계했습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"쉼 가운 — 숄칼라","cat":"사우나 가운","desc":"무릎 기장 와플 가운입니다. 옵션은 사이즈 S·M·L이며 L 사이즈 품절 상태를 표시하는 예시를 넣었습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"쉼 가운 — 후드형","cat":"사우나 가운","desc":"입고 예정 상품입니다. 구매 버튼 대신 '입고 알림 신청'이 노출되는 상태를 보여 줍니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"펠트 사우나 햇","cat":"사우나 햇","desc":"울 펠트로 만든 사우나 모자입니다. 착용 사진이 없을 때를 대비해 제품 단독 컷 레이아웃을 함께 제안했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"리넨 사우나 햇","cat":"사우나 햇","desc":"가벼운 리넨 소재 모자입니다. 전 옵션 품절이어서 목록에서는 흐리게, 상세에서는 재입고 안내로 처리했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"편백 향 블록","cat":"휴식 소품","desc":"욕실에 두는 향 블록입니다. 향과 관련해서는 효능 표현 없이 '나무 향' 묘사만 씁니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"첫 쉼 세트 (타월+햇)","cat":"기프트 세트","desc":"선물 포장 옵션이 붙은 세트 구성입니다. 포장 문구 입력 칸은 웹빌더 기본 옵션 범위 안에서 설계했습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 미확정 — '준비 중' 블록","type":"예외 상태","desc":"공간·시설 페이지에 실사진이 없을 때는 무드 이미지와 '부산에서 준비 중입니다' 문안 블록을 노출합니다. 관리자는 사진 교체만으로 정식 시설 소개로 전환합니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"예약 영역 예비 칸","type":"확장 대비","desc":"메인과 공간 페이지에 '방문 예약' 자리를 미리 잡아 두되 지금은 비활성 상태로 숨깁니다. 공간이 열리면 버튼만 켜는 방식이라 재디자인이 필요하지 않습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"시설 상세 팝업 → 모바일 바텀시트","type":"반응형 전환","desc":"PC에서는 시설 카드를 누르면 팝업으로 열립니다. 모바일에서는 화면을 가리는 팝업 대신 아래에서 올라오는 시트로 바꿔 스크롤 흐름이 끊기지 않게 했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"옵션 일부 품절 / 전체 품절","type":"예외 상태","desc":"가운 L 사이즈만 품절인 경우와 사우나 햇 전체 품절인 경우를 구분해 표시합니다. 목록·상세·장바구니에서 같은 규칙을 적용합니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"스토어 통합 vs 외부 판매 연결","type":"구조 비교","desc":"같은 메뉴 구조에서 '스토어' 링크만 내부 목록 또는 외부 판매 페이지로 바꿔 끼울 수 있게 했습니다. 두 안을 나란히 비교할 수 있습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"브랜드 문안 미전달 시","type":"예외 상태","desc":"소개 문안이 아직 오지 않았을 때 쓰는 자리표시 문안의 길이 기준(제목 20자·본문 3문장)을 정해 두어, 실제 문안이 들어와도 레이아웃이 깨지지 않게 했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
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
