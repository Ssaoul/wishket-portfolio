/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"이야기나루","brandSub":"AI STORY PIPELINE","cats":["생성 단계","테스트 도구","산출물"],"caseCats":["텍스트 생성","이미지 생성","PDF 조판","운영 화면"],"items":[{"name":"이름 입력 · AI 초대장","cat":"생성 단계","desc":"아이 이름과 나이를 입력하면 맞춤 초대장 문구와 프롤로그를 생성해 화면에 바로 보여줍니다.","meta":"1단계 · 텍스트 생성","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"방문·미션 시뮬레이터","cat":"생성 단계","desc":"관광지 방문 순서와 미션 수행 결과를 임의로 입력해, 실제 체험 데이터가 들어온 상황을 재현합니다.","meta":"2단계 · 입력 시뮬레이션","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"맞춤 역사동화 생성","cat":"생성 단계","desc":"입력된 방문 기록을 이야기 흐름으로 엮어 페이지 단위 동화 본문을 생성합니다.","meta":"3단계 · 텍스트 생성","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"페이지별 삽화 생성","cat":"생성 단계","desc":"각 페이지 본문에서 장면 묘사를 뽑아 삽화 프롬프트를 만들고, 그림체를 통일해 이미지를 생성합니다.","meta":"4단계 · 이미지 생성","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"PDF 전자책 자동 제작","cat":"산출물","desc":"본문과 삽화를 표지·속지 레이아웃에 배치해 PDF로 묶고, 완성 즉시 내려받을 수 있습니다.","meta":"산출물 · 다운로드","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"프롬프트 편집기","cat":"테스트 도구","desc":"프롤로그·동화·삽화용 프롬프트를 화면에서 고치고 저장해, 바꾼 문구로 다시 생성해 볼 수 있습니다.","meta":"테스트 · 편집","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"생성 결과 비교","cat":"테스트 도구","desc":"프롬프트를 바꿔 돌린 결과를 나란히 놓고 문장 톤과 삽화 분위기 차이를 확인합니다.","meta":"테스트 · 비교","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"단계별 소요 시간 계측","cat":"테스트 도구","desc":"초대장·동화·삽화·PDF 각 단계의 처리 시간을 기록해 어디서 지연되는지 보여줍니다.","meta":"테스트 · 성능","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"유해 표현 필터","cat":"테스트 도구","desc":"아동에게 부적절한 표현과 이미지 요청을 생성 전후로 걸러내고, 걸린 항목을 로그로 남깁니다.","meta":"가드레일 · 검수","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"초대장·프롤로그 화면","type":"텍스트 생성","desc":"이름 입력 한 번으로 초대장 카드와 이야기 도입부가 함께 생성되는 결과 화면입니다.","sub":"1단계 결과 미리보기","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"방문 기록 시뮬레이션","type":"운영 화면","desc":"관광지와 미션을 골라 넣고 그 조합이 동화에 어떻게 반영되는지 확인하는 입력 화면입니다.","sub":"테스트용 데이터 입력","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"페이지별 동화 본문","type":"텍스트 생성","desc":"방문 순서를 따라 장면이 이어지도록 페이지를 나눠 생성한 동화 본문입니다.","sub":"페이지 단위 구성","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"삽화 생성 결과","type":"이미지 생성","desc":"페이지 본문에서 뽑은 장면 묘사로 만든 삽화를, 그림체를 맞춰 나열해 보여줍니다.","sub":"장면별 이미지","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"PDF 전자책 조판","type":"PDF 조판","desc":"표지·본문·삽화를 배치한 PDF 미리보기와 내려받기 화면입니다.","sub":"자동 조판 · 다운로드","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"프롬프트 테스트 콘솔","type":"운영 화면","desc":"프롬프트를 고쳐 저장하고, 변경 전후 결과와 단계별 소요 시간을 함께 확인하는 화면입니다.","sub":"편집 · 재생성 · 계측","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157276"};
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
