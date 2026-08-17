/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"잡캔버스","brandSub":"JOB CANVAS · RECRUIT DESIGN","cats":["정규직 채용","현장·생산","아르바이트·단기","경력·전문직"],"caseCats":["사람인","잡코리아","알바몬","자사 홈페이지"],"items":[{"name":"스탠다드 채용 공고 A형","cat":"정규직 채용","desc":"기업 소개 · 모집 부문 · 우대 사항 · 전형 절차를 한 장에 담은 기본형. 로고와 브랜드 컬러를 상단 키비주얼에 반영합니다.","meta":"공통 폭 860px · AI/PSD 원본 포함","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"부문 확장형 B형","cat":"정규직 채용","desc":"모집 부문이 여러 개일 때 쓰는 카드 반복 구조. 부문 블록만 복제해 늘리거나 줄일 수 있습니다.","meta":"블록 반복 구조 · 텍스트 자체 수정","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"현장직 안내형","cat":"현장·생산","desc":"근무지 · 근무 형태 · 교대 조건처럼 지원자가 먼저 확인하는 정보를 상단에 배치한 레이아웃.","meta":"큰 본문 폰트 · 모바일 가독 우선","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"다지역 모집형","cat":"현장·생산","desc":"여러 사업장을 동시에 모집할 때 지역별 표로 정리하는 형태. 표 행 추가만으로 지역을 늘립니다.","meta":"표 컴포넌트 · 행 추가형","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"단기·주말 알바형","cat":"아르바이트·단기","desc":"시급 · 근무 시간 · 지원 방법을 크게 앞세운 구조. 모바일에서 스크롤 두 번 안에 핵심이 다 보입니다.","meta":"모바일 우선 · 축약 버전 동봉","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"상시 채용 배너형","cat":"아르바이트·단기","desc":"상시 모집 공고에 쓰는 짧은 세로형. 목록 썸네일과 상세 상단에 함께 사용할 수 있습니다.","meta":"세로 축약형 · 썸네일 세트","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"경력직 상세형","cat":"경력·전문직","desc":"담당 업무와 조직 소개를 문단으로 충분히 설명하는 형태. 텍스트가 길어져도 줄바꿈이 깨지지 않도록 폭을 고정합니다.","meta":"장문 대응 · 줄바꿈 가이드 포함","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"직무 소개 카드형","cat":"경력·전문직","desc":"팀 · 직무 · 성장 경로를 카드로 나눠 보여주는 형태. 자사 홈페이지 채용 페이지에 그대로 붙습니다.","meta":"자사 홈페이지 겸용 · 카드 3~6개","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"공통 사이즈 가이드","cat":"정규직 채용","desc":"채널별 등록 규격과 안전 영역, 최소 폰트 크기를 정리한 가이드 문서. 이후 공고를 직접 만들 때 기준이 됩니다.","meta":"가이드 PDF · 안전 영역 표기","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"사람인 상세 등록 화면","title_note":"","type":"사람인","desc":"상세페이지 폭에 맞춰 이미지를 자른 뒤에도 제목과 지원 정보가 잘리지 않도록 안전 영역을 잡았습니다.","sub":"세로 분할 업로드 · 안전 영역 적용","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"잡코리아 공고 상단","type":"잡코리아","desc":"목록에서 넘어온 지원자가 처음 보는 화면. 로고와 브랜드 컬러를 같은 위치에 고정해 채널이 달라도 인상이 유지됩니다.","sub":"키비주얼 고정 · 브랜드 컬러 적용","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"알바몬 모바일 화면","type":"알바몬","desc":"작은 화면에서 본문이 뭉개지지 않도록 최소 폰트 크기를 정하고, 표는 세로 나열로 바꿔 보여줍니다.","sub":"모바일 최적화 · 표 세로 전환","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"자사 홈페이지 채용 페이지","type":"자사 홈페이지","desc":"같은 템플릿을 웹 페이지 폭으로 확장한 버전. 채널용 이미지와 톤을 맞춰 따로 노는 느낌을 없앴습니다.","sub":"와이드 확장 · 톤앤매너 일치","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"사업 분야별 베리에이션","type":"자사 홈페이지","desc":"사업 분야가 달라도 한 회사로 보이도록 공통 뼈대는 유지하고 색과 이미지 영역만 바꾸는 방식으로 5종을 구성했습니다.","sub":"공통 골격 · 분야별 색 운용","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"수정 가능한 원본 파일","type":"잡코리아","desc":"텍스트와 이미지를 직접 바꿀 수 있도록 레이어를 정리하고 이름을 붙인 원본. 다음 공고는 담당자가 바로 수정합니다.","sub":"레이어 정리 · 폰트 목록 동봉","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157578"};
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
