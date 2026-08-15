/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"마켓하루","brandSub":"MARKETPLACE COMMERCE","cats":["리빙","푸드","패션","뷰티"],"caseCats":["운영 화면","앱 화면","장애 대응","리포트"],"items":[{"name":"라운드 우드 사이드테이블","cat":"리빙","desc":"원목 상판에 둥근 모서리를 살린 소형 협탁입니다. 소파 옆이나 침대 곁에 두고 씁니다.","meta":"입점사 직접 등록 · 당일 출고","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"코튼 와플 이불 커버","cat":"리빙","desc":"사계절 쓰는 면 커버로, 워싱 가공을 거쳐 결이 부드럽습니다.","meta":"입점사 직접 등록 · 사이즈 3종","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"핸드드립 원두 250g","cat":"푸드","desc":"주문이 들어온 뒤 볶아 보내는 드립용 원두입니다. 분쇄도를 선택할 수 있습니다.","meta":"주문 후 로스팅 · 옵션 선택","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"저온 숙성 통밀 그래놀라","cat":"푸드","desc":"통밀과 견과를 섞어 낮은 온도에서 구운 시리얼입니다. 단맛을 줄였습니다.","meta":"입점사 직접 배송 · 소분 포장","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"워시드 데님 셔츠 재킷","cat":"패션","desc":"셔츠처럼 걸치는 얇은 데님 아우터입니다. 봄가을 간절기에 맞춘 두께입니다.","meta":"입점사 직접 등록 · 컬러 2종","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기모 스트레이트 슬랙스","cat":"패션","desc":"안감에 기모를 덧댄 일자 슬랙스로, 허리 밴딩을 넣어 착용이 편합니다.","meta":"입점사 직접 등록 · 사이즈 5종","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"저자극 세라마이드 크림","cat":"뷰티","desc":"건조한 피부에 쓰는 보습 크림입니다. 향료를 넣지 않았습니다.","meta":"입점사 직접 등록 · 성분표 제공","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"아미노산 약산성 클렌저","cat":"뷰티","desc":"거품이 부드럽게 나는 세안제로, 아침저녁 모두 쓸 수 있습니다.","meta":"입점사 직접 등록 · 리필 별매","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"실리콘 논슬립 주방매트","cat":"리빙","desc":"싱크대 앞에 까는 미끄럼 방지 매트입니다. 물에 젖어도 바로 닦입니다.","meta":"입점사 직접 등록 · 2사이즈","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"입점사 상품 관리","type":"운영 화면","desc":"입점사가 자기 상품만 보고 등록·수정·품절 처리를 합니다. 운영팀은 승인 대기 건을 한 화면에서 확인합니다.","sub":"React 관리자 페이지","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"배너·팝업 교체","type":"운영 화면","desc":"메인 배너와 팝업 이미지를 목록에서 골라 바꾸고, 노출 기간을 지정합니다. 배포 없이 화면에 반영됩니다.","sub":"이미지·텍스트 교체","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"모바일 주문 흐름","type":"앱 화면","desc":"상품 상세에서 장바구니, 결제까지 이어지는 화면입니다. 앱과 모바일 웹이 같은 레이아웃을 씁니다.","sub":"React Native · 모바일 웹","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"앱 호환성 점검","type":"앱 화면","desc":"iOS·Android 마이너 업데이트 후 화면이 깨지는 곳을 목록으로 잡아 두고 하나씩 확인합니다.","sub":"OS 업데이트 대응","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"서버·DB 상태판","type":"장애 대응","desc":"백엔드 응답과 DB 연결 상태를 한 화면에 모았습니다. 지연이나 다운이 보이면 바로 눈에 띕니다.","sub":"Node.js · 클라우드 환경","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"도메인·SSL 만료 확인","type":"리포트","desc":"도메인과 인증서 만료일을 남은 기간과 함께 정리하고, 월간 처리 내역을 한 장으로 뽑습니다.","sub":"월간 유지보수 리포트","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157622"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"상품"],['gallery.html',"스타일 · 후기"],['about.html','회사 소개'],['admin.html','관리자']];
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
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px"><a href="catalog.html">'+D.labels.catalog+'</a> · <a href="gallery.html">'+D.labels.gallery+'</a> · <a href="about.html">회사 소개</a></div></div></div>'
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
