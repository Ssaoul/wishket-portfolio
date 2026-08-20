/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온율 구강악안면외과","brandSub":"ONYUL Oral & Maxillofacial Surgery","cats":["메인 페이지","About 페이지","양악수술 페이지","공통 컴포넌트","반응형·모션"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"히어로 A안 — 정적 대비형","cat":"메인 페이지","desc":"풀블리드 진료실 사진 위 웜그레이 오버레이 24%, 좌측 정렬 국문 카피 2행. 로고는 화이트 단색으로 전환해 밝은 사진에서도 대비 4.5:1을 확보합니다. 모바일에서는 사진 비율을 3:4로 바꿔 인물 시선이 잘리지 않게 크롭 기준점을 얼굴선에 고정합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"히어로 B안 — 시퀀스 전환형","cat":"메인 페이지","desc":"3장의 이미지가 6초 간격으로 크로스페이드되고 카피만 고정됩니다. prefers-reduced-motion 이 켜진 환경에서는 첫 장에서 정지하고 전환을 끕니다. 이미지 소스가 1장뿐일 때는 A안으로 자동 폴백하도록 조건을 적어 두었습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"GNB — 스크롤 상태 3종","cat":"메인 페이지","desc":"투명(히어로 위) → 화이트 반투명 블러(스크롤 80px) → 축약 헤더(560px 이상)의 3단계. 로고는 상태별로 화이트/잉크 두 버전을 씁니다. 메뉴가 7개를 넘어가면 태블릿에서 우측 2개가 '더보기'로 접히는 규칙을 함께 표기했습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"진료 철학 섹션","cat":"메인 페이지","desc":"신규 추가 구간. 좌측 세로 라벨 + 우측 3단락 서술형. 문장 길이가 제각각인 원고를 받아도 무너지지 않도록 단락당 최소 2행·최대 6행의 클램프 기준을 잡았습니다. 6행을 넘으면 '더 읽기'가 붙습니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"하단 CTA 영역","cat":"메인 페이지","desc":"신규 추가 구간. 상담 예약과 진료 안내 두 버튼을 1:1로 두되, 모바일에서는 세로 스택되고 하단 고정바로 전환됩니다. 진료시간 외 접속 시에는 버튼 문구가 '진료시간 안내 보기'로 바뀌는 대체 상태를 함께 설계했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"브랜드 스테이트먼트","cat":"About 페이지","desc":"About 진입 구간. 한 문장을 큰 활자로 두고 아래에 국문 3행·영문 2행을 병기합니다. 영문 원고가 준비되지 않은 페이지에서는 영문 행 자체를 지우고 상하 여백을 재분배하는 규칙을 명시했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"히스토리 타임라인","cat":"About 페이지","desc":"연도-사건 2열 구조. 항목이 4개 미만이면 타임라인 축을 감추고 카드 나열로 바꿉니다. 같은 연도에 사건이 여러 건이면 연도를 한 번만 노출하고 하위 항목을 묶습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"의료진 카드","cat":"About 페이지","desc":"사진·성명·전공·소속 학회 순. 사진 소스가 없는 인원은 이니셜 모노그램 카드로 대체하고, 약력 줄 수가 다른 인원 간 카드 높이를 상단 정렬로 맞춥니다. 이 데모의 인물 사진은 모두 합성 이미지입니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"케이스 탭 — 주걱턱·무턱·비대칭","cat":"양악수술 페이지","desc":"탭 전환형 UI. 각 탭 안에 개요·진행 방식·회복 안내가 같은 순서로 들어갑니다. 자료가 준비되지 않은 탭은 숨기지 않고 '준비 중' 상태로 노출해 탭 개수가 흔들리지 않게 했습니다. 치료 결과는 개인차가 있다는 고지를 탭 하단에 상시 배치했습니다.","id":"I8","img":"assets/img/item-8.svg","pub":1},{"name":"3D 디지털 4 STEP","cat":"양악수술 페이지","desc":"진단·설계·모의수술·수술의 4단계를 가로 진행 바로 표현하고, 태블릿 이하에서는 세로 아코디언으로 접힙니다. 단계 이미지는 실제 영상 캡처가 아니라 도식으로 처리해 실제 케이스로 오해되지 않게 했습니다.","id":"I9","img":"assets/img/item-9.svg","pub":1},{"name":"B&A 케이스 탭","cat":"양악수술 페이지","desc":"비교 슬라이더 형태. 이 데모에서는 규제 고려로 실제 사진 대신 실루엣 도식을 넣고, 촬영 조건·경과 기간 표기 자리를 비워 두었습니다. 사진 게재 여부와 문구는 발주처 정책 문서 확인 후 결정할 항목으로 표시했습니다.","id":"I10","img":"assets/img/item-10.svg","pub":1},{"name":"FAQ 칩 전환","cat":"양악수술 페이지","desc":"상단 칩으로 수술 전·수술 후·비용/일정을 필터링하고 아래 아코디언이 교체됩니다. 검색 결과가 0건인 칩은 비활성 회색으로 두고, 답변 원고가 200자를 넘으면 접힘 기본값으로 시작합니다.","id":"I11","img":"assets/img/item-11.svg","pub":1}],"cases":[{"title":"로고가 밝은 히어로 사진 위에서 안 읽힘","type":"가독성 개선","desc":"기존 퍼블리싱 메인에서 지적된 지점입니다. 사진 상단부 평균 밝기를 측정해 로고를 잉크/화이트 두 버전으로 전환하고, 상단 12%에 6% 그라데이션 스크림을 얹었습니다. 대비 실측은 4.6:1로 올라갔지만, 인물 사진 교체 시마다 재확인이 필요하다는 점을 가이드에 남겼습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"태블릿 1024에서 GNB 메뉴가 두 줄로 깨짐","type":"반응형 예외","desc":"메뉴 항목이 7개를 넘고 국문 항목명이 길어지면 1024 구간에서 줄바꿈이 납니다. 우측 2개를 '더보기'로 접고, 그래도 넘치면 768 미만처럼 햄버거로 내리는 2차 폴백을 정의했습니다. 접힘 순서는 발주처가 지정해야 하는 항목이라 임의로 정하지 않고 비워 두었습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"케이스 탭에 자료가 아직 없는 상태","type":"빈 상태","desc":"'비대칭' 탭에 원고와 도식이 준비되지 않은 경우를 그대로 화면에 넣었습니다. 탭을 감추면 개수가 바뀌어 레이아웃이 흔들리므로, 탭은 유지하고 본문만 '자료 준비 중입니다. 상담으로 문의해 주세요' 안내와 CTA로 대체합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"모션을 켤 수 없는 접속 환경","type":"접근성 대체","desc":"prefers-reduced-motion 및 저사양 단말을 가정했습니다. 히어로 시퀀스는 정지, 스크롤 페이드는 즉시 표시, 4 STEP 진행 애니메이션은 상태만 표시로 축약됩니다. 모션이 없어도 정보 순서가 동일하게 읽히는지 3개 페이지 전부 확인 항목으로 넣었습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"원고가 예상보다 40% 길게 들어온 About 섹션","type":"원고 변동","desc":"핵심가치 4개 중 하나의 설명이 유독 길어 카드 높이가 어긋난 상황입니다. 카드 높이를 맞추는 대신 최소 높이만 고정하고 아래 여백을 흡수하도록 바꿨습니다. 이 경우 데스크톱 2열에서는 자연스럽지만 4열 배치는 포기해야 한다는 트레이드오프를 함께 적었습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자가 바꿀 수 있는 범위가 불명확","type":"편집 범위 정의","desc":"어디까지가 디자인 고정이고 어디부터 운영 중 교체인지 구분이 없으면 리뉴얼 후 화면이 무너집니다. 히어로 이미지·카피·의료진 카드·FAQ 항목·케이스 탭 본문은 교체 가능, GNB 구조·타이포 스케일·컬러 토큰·섹션 순서는 고정으로 표에 명시했습니다. 교체 가능 항목마다 권장 글자수와 이미지 규격을 함께 적었습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157768"};
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
