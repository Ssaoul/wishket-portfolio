/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"한서정밀","brandSub":"HANSEO PRECISION","cats":["사업영역","제품","솔루션","고객지원"],"caseCats":["회사 전경","생산 현장","전시·행사","인증·수상"],"items":[{"name":"정밀가공 사업부","cat":"사업영역","desc":"설계부터 후가공까지 공정을 한 흐름으로 관리하는 사업영역 소개 페이지입니다.","meta":"사업영역 상세 · 하위 3개 페이지","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"표면처리 사업부","cat":"사업영역","desc":"공정별 설비와 처리 방식을 표로 정리해 담당자가 직접 항목을 추가할 수 있게 구성했습니다.","meta":"사업영역 상세 · 표 편집 가능","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"산업용 부품 라인","cat":"제품","desc":"제품군을 카테고리로 묶고 규격·용도를 카드로 노출하는 목록 화면입니다.","meta":"제품 목록 · 분류 필터","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"모듈형 조립 유닛","cat":"제품","desc":"제품 상세에서 도면·사양서 첨부파일을 내려받을 수 있습니다.","meta":"제품 상세 · 첨부 다운로드","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"설비 자동화 솔루션","cat":"솔루션","desc":"도입 절차를 단계로 나눠 보여주는 솔루션 소개 페이지입니다.","meta":"솔루션 · 단계형 레이아웃","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"품질관리 시스템","cat":"솔루션","desc":"검사 항목과 인증 현황을 정리한 페이지로, 인증서 이미지를 갤러리와 연동합니다.","meta":"솔루션 · 갤러리 연동","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"자료실","cat":"고객지원","desc":"카탈로그·사양서·인증서를 분류별로 내려받는 게시판입니다. 기존 사이트 첨부파일을 그대로 옮겼습니다.","meta":"게시판 · 첨부파일 다운로드","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"공지사항","cat":"고객지원","desc":"담당자가 관리자 화면에서 글을 쓰고 상단 팝업으로 띄울 수 있습니다.","meta":"게시판 · 팝업 연동","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"오시는 길","cat":"고객지원","desc":"본사·공장 위치를 탭으로 나눠 지도와 함께 안내합니다.","meta":"안내 페이지 · 지도","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"본사 사옥 전경","type":"회사 전경","desc":"기존 갤러리 게시판에 있던 사진을 원본 해상도 그대로 옮겨 정리했습니다.","sub":"이관 완료 · 원본 유지","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"제2공장 준공","type":"회사 전경","desc":"연혁 페이지의 해당 연도와 연결되어 함께 볼 수 있습니다.","sub":"연혁 연동","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"정밀가공 라인","type":"생산 현장","desc":"공정별 사진을 묶어 사업영역 페이지에서도 불러 씁니다.","sub":"사업영역 연동","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"조립·검사 공정","type":"생산 현장","desc":"담당자가 관리자 화면에서 사진을 올리면 목록에 바로 반영됩니다.","sub":"직접 등록 가능","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"산업 전시회 참가","type":"전시·행사","desc":"행사별로 앨범을 나눠 여러 장을 한 글에 묶었습니다.","sub":"앨범형 게시","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"품질경영 인증","type":"인증·수상","desc":"인증서 이미지를 확대해 볼 수 있고 자료실 첨부파일과 연결됩니다.","sub":"자료실 연결","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157754"};
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
