/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온휴 ONHYU","brandSub":"Sauna, Rest & Recovery Goods — Official Store","nav":[["index.html","개요"],["catalog.html","브랜드 소개 및 콘텐츠 페이지"],["gallery.html","공간·시설 소개 페이지"],["about.html","상품 목록 페이지"]],"cats":["배스 타월","사우나 가운","사우나 햇","리추얼 세트"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"ONH-TW-01 와플 배스 타월 (오트)","cat":"배스 타월","desc":"140×70cm 면 와플 조직. 상세 이미지는 클라이언트 제공 예정이라 지금은 텍스트 스펙만 노출되는 상태로 설계.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"ONH-TW-02 리넨 블렌드 핸드 타월 (차콜)","cat":"배스 타월","desc":"40×80cm. 2장 묶음 옵션. 색상 옵션 선택 시 대표 이미지가 함께 바뀌는 구성.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"ONH-RB-01 라이트 와플 가운 (샌드)","cat":"사우나 가운","desc":"S/M/L 3사이즈. 사이즈 가이드는 상세 하단 팝업 레이어로 열림.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"ONH-RB-02 헤비 파일 가운 (스톤)","cat":"사우나 가운","desc":"M 사이즈 품절 상태 예시. 품절 옵션은 회색 처리하고 재입고 알림 버튼으로 대체.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"ONH-HT-01 울 펠트 사우나 햇 (내추럴)","cat":"사우나 햇","desc":"원사이즈. 사용 방법 안내는 브랜드 콘텐츠 페이지 '열기 다루는 법' 글로 연결.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"ONH-HT-02 리넨 사우나 햇 (모스)","cat":"사우나 햇","desc":"출시 예정 상품. 구매 버튼 대신 '출시 알림 받기'만 노출.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"ONH-ST-01 첫 리추얼 세트 (타월+햇)","cat":"리추얼 세트","desc":"구성품 중 햇 재고가 0이면 세트 전체가 구매 불가로 바뀌는 연동 케이스.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"ONH-ST-02 선물 포장 세트 (가운+타월)","cat":"리추얼 세트","desc":"포장 문구 입력란 30자 제한. 초과 시 입력란 아래 경고 문구 표시.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"공간 사진 0장 — 준비중 단계","type":"예외 · 콘텐츠 부족","desc":"공간·시설 페이지에 실사진이 없을 때, 재료·온도·동선 텍스트와 브랜드 컬러 면만으로 섹션을 채우는 레이아웃. 빈 이미지 박스를 띄우지 않는다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"부산 공간 티저 공개","type":"단계 전환","desc":"후보 지역만 확정된 시점. 지도 대신 '부산 · 오픈 준비중' 라벨과 소식 받기 입력란을 노출하고, 대표가 관리자에서 단계 값만 바꾸면 전환된다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"상세 팝업 레이어 흐름","type":"정상 흐름","desc":"메인의 공간 뷰 이미지를 누르면 페이지 이동 없이 상세가 레이어로 열리고, 레이어 하단에서 관련 굿즈로 바로 이어진다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"가운 M 사이즈 품절","type":"예외 · 재고","desc":"상품 상세에서 품절 옵션을 선택 불가로 처리하고 재입고 알림으로 유도. 장바구니에 이미 담긴 경우 결제 단계에서 안내 문구를 띄운다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"외부 판매 페이지 연결 실패","type":"예외 · 대안 구성","desc":"판매를 외부로 분리하는 안을 택했을 때 링크가 비어 있으면 버튼을 숨기고 '판매 준비중'으로 대체. 통합안과 분리안의 화면 차이를 나란히 비교한다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"방문 예약 영역 비활성","type":"향후 확장","desc":"메뉴와 메인 하단에 예약 자리만 잡아 두고 꺼 둔 상태. 공간이 열리면 같은 자리에 예약 위젯을 넣어 화면 재설계 없이 켤 수 있다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159212"};
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
