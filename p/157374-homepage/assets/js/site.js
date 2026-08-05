/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"벤처링크","brandSub":"VENTURELINK SYSTEMS","cats":["투자실적 관리","보고 업무","데이터 연계","운영·보안"],"caseCats":["구조 진단","코드 품질","데이터베이스","고도화 방향"],"items":[{"name":"조합별 투자실적 등록","cat":"투자실적 관리","desc":"운용 조합 단위로 투자 건을 등록하고 투자일·금액·지분·회수 현황을 항목별로 관리합니다.","meta":"등록 · 수정 · 이력","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"피투자기업 원장","cat":"투자실적 관리","desc":"피투자기업의 기본 정보와 투자 라운드 이력을 한 화면에서 확인하고, 중복 등록을 사전에 걸러냅니다.","meta":"기업 단위 조회","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"회수·평가 현황 집계","cat":"투자실적 관리","desc":"회수 유형과 평가 기준일에 따라 조합별 현황을 집계해 표로 보여줍니다.","meta":"기준일 기준 집계","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"엑셀 일괄 업로드","cat":"데이터 연계","desc":"기존 양식의 엑셀 파일을 올려 다건을 한 번에 반영하고, 형식 오류는 행 단위로 되짚어 알려줍니다.","meta":"양식 검증 · 오류 리포트","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"보고서 서식 자동 채움","cat":"보고 업무","desc":"감독 보고 서식에 맞춰 등록된 데이터를 자동으로 배치하고, 비어 있는 항목을 표시합니다.","meta":"서식 매핑 · 누락 표시","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"제출 기한 점검","cat":"보고 업무","desc":"분기·연간 보고 기한을 기준으로 준비 상태를 점검하고, 담당자별 처리 항목을 정리합니다.","meta":"기한 · 담당자별","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"권한·계정 관리","cat":"운영·보안","desc":"열람과 수정 권한을 역할별로 나누고, 조합 단위로 접근 범위를 제한합니다.","meta":"역할 기반 접근","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"변경 이력 감사 로그","cat":"운영·보안","desc":"누가 언제 어떤 값을 바꿨는지 남겨, 수치가 달라진 경위를 되짚을 수 있게 합니다.","meta":"사용자 · 시각 · 변경 전후","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"기간별 데이터 내보내기","cat":"데이터 연계","desc":"조회 조건 그대로 엑셀·CSV로 내보내 내부 검토와 외부 제출에 활용합니다.","meta":"조회 조건 유지","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"아키텍처 계층 진단","desc":"FastAPI 라우터·서비스·데이터 접근 계층의 경계가 어디서 흐려지는지 짚고, 후속 개발이 얹히기 쉬운 구조인지 검토합니다.","type":"구조 진단","sub":"FastAPI · 계층 분리","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"React 화면 구성 리뷰","desc":"화면 단위 컴포넌트와 상태 관리 방식을 훑어 중복 로직과 재사용 가능한 지점을 정리합니다.","type":"코드 품질","sub":"React · 상태 관리","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"SQLite 스키마 적합성 검토","desc":"현재 테이블 구조가 조합·기업·투자건의 관계를 담아내는지, 동시 접근과 데이터 증가에 어떤 제약이 생기는지 살펴봅니다.","type":"데이터베이스","sub":"SQLite · 스키마","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"인증·권한 처리 점검","desc":"로그인 처리와 API 접근 제어가 화면 권한과 어긋나는 구간이 없는지 확인합니다.","type":"구조 진단","sub":"인증 · 접근 제어","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"엑셀 업로드 확장 검토","desc":"대량 업로드를 붙일 때 필요한 검증 단계와 처리 방식을 현재 구조 기준으로 정리합니다.","type":"고도화 방향","sub":"일괄 처리 · 검증","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"유지·재구축 판단 근거 정리","desc":"기존 구조를 이어갈지 일부를 다시 세울지, 영역별로 나눠 판단 근거와 우선순위를 제시합니다.","type":"고도화 방향","sub":"우선순위 · 리스크","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157374"};
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
