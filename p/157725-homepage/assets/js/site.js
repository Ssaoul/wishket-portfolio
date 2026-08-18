/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"셀트레이스","brandSub":"CELLTRACE R&D DATA PLATFORM","cats":["데이터 수집","LOT 관리","분석·시각화","권한·감사"],"caseCats":["대시보드","이력 추적","연구노트","운영 관리"],"items":[{"name":"장비 PC 수집 에이전트","cat":"데이터 수집","desc":"제작 설비와 측정 장비 PC에 상주하며 출력 파일 생성을 감지해 인트라넷으로 중앙 DB에 전송합니다. 중단·단선 시 알림이 올라갑니다.","meta":"상주 실행 · 설치 패키지 제공","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"장비별 양식 매핑","cat":"데이터 수집","desc":"기종마다 다른 출력 양식을 매핑 정의서로 등록합니다. 병합셀·다중 시트 구조도 규칙으로 풀어 파싱합니다.","meta":"8~10종 · 양식 변경 대응","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"수집 오류·재처리 화면","cat":"데이터 수집","desc":"파싱 실패, 포맷 오류, 중복 수집 건이 목록에 남습니다. 원인을 확인하고 재처리하면 이력이 함께 기록됩니다.","meta":"실패 경로 우선 설계","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"미매칭 LOT 보관함","cat":"데이터 수집","desc":"LOT이 판별되지 않은 측정 건을 별도 보관하고, 담당자가 수동으로 연결합니다. 연결 시점과 수행자가 남습니다.","meta":"수동 연결 · 이력 기록","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"LOT 채번·계통도","cat":"LOT 관리","desc":"규칙 기반 자동·수동 채번을 지원하고, LOT을 검색하면 제작설비-레시피-환경변수-측정결과가 하나의 계통도로 펼쳐집니다.","meta":"검색 1회 · 전 구간 조회","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"레시피 마스터·버전","cat":"LOT 관리","desc":"레시피를 등록하고 개정할 때마다 버전을 남깁니다. 각 LOT은 제작 시점에 적용된 버전을 함께 보관합니다.","meta":"버전 이력 보존","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"계산식 엔진","cat":"분석·시각화","desc":"전기화학 계산식과 미분·적분 연산으로 측정값을 지표로 변환합니다. 산출값에는 사용된 계산식 버전이 기록됩니다.","meta":"10종 내외 · 버전 기록","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"샘플 비교 그래프","cat":"분석·시각화","desc":"X-Y 산점도와 꺾은선을 실시간으로 그리고, 서로 다른 LOT의 곡선을 겹쳐 봅니다. 축 범위와 Log/Linear 스케일은 사용자가 정합니다.","meta":"겹쳐보기 · PDF/Excel 내보내기","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"감사 로그·권한","cat":"권한·감사","desc":"연구원·관리자·최고권한자 역할로 과제·장비·LOT 단위 접근 범위를 나눕니다. 조회·수정·다운로드·삭제가 변경 전후 값과 함께 남습니다.","meta":"관리자도 수정 불가","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"당일 LOT 현황 통합 대시보드","type":"대시보드","desc":"오늘 제작된 샘플과 측정 진행 상태, 장비별 수집 성공·실패 건수를 한 화면에 모았습니다. 실패 건은 바로 재처리 화면으로 이어집니다.","sub":"수집 상태 · 상태값 트래킹","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"변수-성능 추이 비교","type":"대시보드","desc":"변수와 성능 항목을 지정하면 해당 조건의 샘플들만 골라 추이를 그립니다. 이상값 구간은 계산에서 제외하도록 지정할 수 있습니다.","sub":"다차원 필터링 · 이상값 제외","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"LOT 계통도 상세","type":"이력 추적","desc":"샘플 하나를 열면 제작 설비 시리얼과 레시피 버전, 제작 당시 온도·습도·압력, 각 장비의 측정값이 하나의 계통도로 이어집니다.","sub":"제작-측정-계산 전 구간","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"메타데이터 변경 이력","type":"이력 추적","desc":"측정 결과와 메타데이터를 확정한 뒤 수정하면 이전 버전이 보존되고 변경 사유를 입력받습니다. 삭제는 무효화 처리로 남습니다.","sub":"변경자·시점·사유 기록","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"LOT 연계 연구노트","type":"연구노트","desc":"연구원이 남긴 코멘트를 실험 목적·실패 원인·특이 현상 태그로 정리합니다. 비정형 텍스트는 항목·값 형태로 함께 저장됩니다.","sub":"구조화 저장 · 통합 검색","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"장비 마스터·교정 이력","type":"운영 관리","desc":"장비와 측정 항목, 단위를 마스터로 관리하고 교정 이력을 기록합니다. 교정 기한이 지난 장비의 측정 건에는 경고가 붙습니다.","sub":"교정 기한 경고 · 백업 관리","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157725"};
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
