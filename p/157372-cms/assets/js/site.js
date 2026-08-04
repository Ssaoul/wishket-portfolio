/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"스튜디오 노브","brandSub":"NOVE MANAGEMENT","cats":["여성 모델","남성 모델","아티스트","신인"],"caseCats":["캠페인","필름","에디토리얼","뉴스"],"items":[{"name":"서린","cat":"여성 모델","desc":"뷰티·패션 화보 중심으로 활동합니다. 상세 모달에서 룩북 영상과 컷 이미지를 함께 넘겨 볼 수 있습니다.","meta":"프로필 영상 · 컷 12","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"윤도해","cat":"남성 모델","desc":"광고 필름과 브랜드 캠페인 위주의 프로필입니다. 마우스 오버 시 썸네일이 확대되며 색상이 반전됩니다.","meta":"광고 필름 · 컷 9","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"이하람","cat":"여성 모델","desc":"런웨이와 프레스 촬영 이력을 묶어 정리했습니다. 카테고리 필터로 즉시 추려집니다.","meta":"런웨이 · 컷 15","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"정우연","cat":"아티스트","desc":"뮤직비디오·퍼포먼스 영상 중심 프로필입니다. 모달 안에서 영상이 바로 재생됩니다.","meta":"퍼포먼스 영상 · 컷 7","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"강시온","cat":"남성 모델","desc":"스포츠·아웃도어 브랜드 촬영 컷을 모았습니다. 노출 여부는 관리자에서 토글합니다.","meta":"커머셜 · 컷 11","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"박세아","cat":"신인","desc":"프로필 등록 직후의 신인 페이지 예시입니다. 컷이 늘어나면 그리드가 자동으로 채워집니다.","meta":"신인 등록 · 컷 5","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"민재하","cat":"아티스트","desc":"연출·크리에이티브 협업 이력을 기사 형태로 이어 붙였습니다.","meta":"크리에이티브 · 컷 8","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"한로아","cat":"여성 모델","desc":"에디토리얼 촬영을 중심으로 구성한 프로필입니다. 자간·행간을 미디어용으로 조정했습니다.","meta":"에디토리얼 · 컷 14","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"가을 아우터 캠페인","type":"캠페인","desc":"브랜드 시즌 캠페인 페이지입니다. 스크롤에 따라 카피가 페이드인·페이드아웃되며 컷이 이어집니다.","sub":"스크롤 인터랙션","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"뷰티 브랜드 필름","type":"필름","desc":"메인 배경 영상으로도 쓰이는 30초 필름입니다. 관리자에서 파일 교체 시 용량 제한을 안내합니다.","sub":"배경 영상 교체","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"매거진 화보 셀렉","type":"에디토리얼","desc":"화보 컷을 그리드로 배열하고, 클릭하면 원본 비율 모달로 확대해 보여줍니다.","sub":"모달 뷰어","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"라이프스타일 광고","type":"캠페인","desc":"제품 광고 촬영 기록입니다. 카테고리 버튼으로 캠페인만 골라 볼 수 있습니다.","sub":"비동기 필터","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"신규 아티스트 합류 소식","type":"뉴스","desc":"기사 형태의 포스트 예시입니다. 에디터로 본문·이미지·영상을 함께 등록합니다.","sub":"CMS 에디터","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"브랜드 협업 노트","type":"뉴스","desc":"협업 과정을 정리한 기사입니다. 노출 여부를 토글로 껐다 켤 수 있습니다.","sub":"노출 토글","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157372"};
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
