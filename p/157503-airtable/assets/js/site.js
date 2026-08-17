/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"한결텍스타일","brandSub":"HANGYEOL TEXTILE","cats":["면·혼방","니트","데님·워싱","기능성"],"caseCats":["입고·등록","현장 스캔","바이어 리스트","라벨 출력"],"items":[{"name":"코마사 20수 평직","cat":"면·혼방","desc":"기본 셔츠·워크웨어용 평직 원단. 폭 150cm 기준으로 롤 단위 관리하며 입고 시 아이템 번호가 자동 부여됩니다.","meta":"FB-1042 · 150cm · 재고 있음","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"텐셀 혼방 트윌","cat":"면·혼방","desc":"드레이프가 부드러운 혼방 트윌. 바이어 샘플 요청이 잦아 별도 샘플 리스트로 묶어 관리합니다.","meta":"FB-1078 · 145cm · 샘플 보유","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"30수 싱글 저지","cat":"니트","desc":"티셔츠용 기본 싱글 저지. 컬러별로 하위 아이템 번호를 나눠 라벨에 색상 코드가 함께 인쇄됩니다.","meta":"KN-2013 · 180cm · 컬러 12종","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"양면 인터록","cat":"니트","desc":"안팎 조직이 같은 인터록. 롤 길이 편차가 커서 입고 실측값을 별도 필드로 기록합니다.","meta":"KN-2041 · 175cm · 실측 기록","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"14oz 리지드 데님","cat":"데님·워싱","desc":"논워싱 상태로 입고되는 중량 데님. 워싱 가공 이력을 아이템에 연결해 이력 추적이 가능합니다.","meta":"DN-3007 · 152cm · 가공 이력","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"스톤워싱 데님","cat":"데님·워싱","desc":"가공 로트별로 색차가 있어 로트 번호를 아이템 번호 뒤에 붙여 별도 라벨로 출력합니다.","meta":"DN-3022 · 150cm · 로트 구분","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"발수 나일론 타슬란","cat":"기능성","desc":"아우터용 발수 원단. 가공 사양이 라벨 하단에 함께 인쇄되도록 템플릿을 구성했습니다.","meta":"FN-4005 · 147cm · 발수 가공","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"리사이클 폴리 옥스포드","cat":"기능성","desc":"인증 서류가 따라붙는 자재라 인증 번호 필드를 아이템에 함께 두고 관리합니다.","meta":"FN-4019 · 150cm · 인증 자재","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"기모 플리스","cat":"기능성","desc":"시즌성이 강해 입고 시즌과 잔량을 함께 보며 재고 소진 순서를 정합니다.","meta":"FN-4033 · 160cm · 시즌 자재","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"입고 원단 등록 화면","type":"입고·등록","desc":"신규 원단을 등록하면 아이템 번호가 자동으로 매겨지고, 폭·조직·컬러 같은 기본 정보가 한 화면에서 입력됩니다.","sub":"자동 번호 부여","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"기존 엑셀 데이터 이관","type":"입고·등록","desc":"오래 쓰던 엑셀 대장의 항목을 컬럼별로 맞춰 올린 뒤, 중복과 표기 흔들림을 정리한 결과 화면입니다.","sub":"일괄 업로드·정제","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"현장 스캔 입력 폼","type":"현장 스캔","desc":"작업대에서 스캐너로 바코드를 읽으면 해당 아이템이 바로 목록에 쌓입니다. 버튼은 스캔과 저장 두 개뿐입니다.","sub":"단순 동선","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"스캔 이력 확인","type":"현장 스캔","desc":"언제 어떤 아이템이 스캔됐는지 시간순으로 남습니다. 잘못 읽힌 건은 그 자리에서 지울 수 있습니다.","sub":"이력 조회","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"바이어별 출고 리스트","type":"바이어 리스트","desc":"스캔된 아이템을 바이어별로 묶어 리스트로 저장합니다. 저장된 리스트는 엑셀로 내려받을 수 있습니다.","sub":"분류·다운로드","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"라벨 템플릿 미리보기","type":"라벨 출력","desc":"아이템 번호와 바코드가 들어간 라벨 도안입니다. 단일 아이템과 바이어 리스트 전체 출력을 모두 상정했습니다.","sub":"단일·일괄 출력","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157503"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"제품·서비스"],['gallery.html',"시공·구축 사례"],['about.html','회사 소개'],['admin.html','관리자']];
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
