/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"메아리랩","brandSub":"MEARI CREATIVE LAB","cats":["브랜드 캠페인","디지털 퍼포먼스","콘텐츠 제작","공간·오프라인"],"caseCats":["브랜드 캠페인","디지털 퍼포먼스","영상 콘텐츠","오프라인 이벤트"],"items":[{"name":"브랜드 캠페인 설계","cat":"브랜드 캠페인","desc":"타깃 정의부터 메시지 하우스, 매체 믹스까지 캠페인 한 편의 뼈대를 함께 세웁니다.","meta":"전략 · 메시지 · 매체","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"TVC·디지털 필름","cat":"브랜드 캠페인","desc":"콘티부터 촬영·편집·납품까지, 온에어 규격과 디지털 규격을 한 번에 준비합니다.","meta":"영상 제작","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"퍼포먼스 광고 운영","cat":"디지털 퍼포먼스","desc":"검색·디스플레이·소셜 채널을 나눠 운영하고 주간 단위로 소재를 교체합니다.","meta":"검색 · 소셜 · 디스플레이","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"랜딩페이지 제작","cat":"디지털 퍼포먼스","desc":"캠페인 목적에 맞춘 단일 목적 페이지를 반응형으로 구성합니다.","meta":"반응형 제작","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"SNS 채널 운영","cat":"콘텐츠 제작","desc":"월 단위 콘텐츠 캘린더를 짜고 카드뉴스·숏폼을 정기 발행합니다.","meta":"월간 운영","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"브랜드 아이덴티티","cat":"콘텐츠 제작","desc":"로고·컬러·타이포 규칙을 정리한 가이드 문서로 톤을 고정합니다.","meta":"BI · 가이드","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"팝업스토어 기획","cat":"공간·오프라인","desc":"공간 콘셉트, 동선, 체험 요소를 설계하고 운영 인력까지 배치합니다.","meta":"공간 기획 · 운영","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"전시·부스 운영","cat":"공간·오프라인","desc":"박람회 부스 디자인과 현장 리드 수집 흐름을 함께 준비합니다.","meta":"현장 운영","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"생활가전 브랜드 리론칭 캠페인","type":"브랜드 캠페인","desc":"메시지를 다시 정리하고 온·오프라인 접점을 하나의 톤으로 묶은 리론칭 프로젝트입니다.","sub":"전략 · KV · 매체 운영","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"식음료 신제품 디지털 필름","type":"영상 콘텐츠","desc":"15초·30초 두 버전으로 제작해 채널별 규격에 맞춰 납품했습니다.","sub":"기획 · 촬영 · 편집","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"교육 서비스 회원 모집 퍼포먼스","type":"디지털 퍼포먼스","desc":"랜딩페이지와 광고 소재를 한 세트로 운영하며 문구를 주 단위로 교체했습니다.","sub":"랜딩 · 소재 · 채널 운영","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"뷰티 브랜드 팝업스토어","type":"오프라인 이벤트","desc":"체험 동선을 중심으로 공간을 구성하고 현장 콘텐츠 촬영까지 함께 진행했습니다.","sub":"공간 기획 · 현장 운영","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"금융 앱 브랜드 필름 시리즈","type":"영상 콘텐츠","desc":"세 편 시리즈로 이어지는 내레이션 구조를 설계해 채널에 순차 공개했습니다.","sub":"시리즈 · 3편","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"패션 브랜드 시즌 SNS 운영","type":"디지털 퍼포먼스","desc":"시즌 콘셉트에 맞춘 콘텐츠 캘린더를 운영하고 숏폼 포맷을 새로 도입했습니다.","sub":"콘텐츠 캘린더 · 숏폼","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157735"};
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
