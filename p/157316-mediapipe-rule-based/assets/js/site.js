/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모션랩","brandSub":"MOTIONLAB MOVEMENT ANALYTICS","cats":["사용자 모바일","분석 엔진","관리자 웹","데이터 설계"],"caseCats":["사용자 화면","관리자 화면","데이터 구조"],"items":[{"name":"영상 촬영·업로드","cat":"사용자 모바일","desc":"휴대폰 카메라로 동작을 촬영하거나 갤러리의 기존 영상을 올립니다. 촬영 가이드 선이 화면에 표시돼 전신이 프레임에 들어오도록 돕습니다.","meta":"모바일 웹(PWA) · 카메라/파일 업로드","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"관절 랜드마크 추출","cat":"분석 엔진","desc":"MediaPipe Pose로 프레임별 33개 관절 랜드마크를 추출하고, 좌표와 신뢰도 값을 함께 보관합니다.","meta":"MediaPipe Pose · 프레임별 좌표","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"관절 각도 산출","cat":"분석 엔진","desc":"세 관절을 잇는 벡터 사이 각을 계산해 무릎·팔꿈치·어깨 각도를 프레임 단위로 남깁니다. 산출식은 화면에서 그대로 확인할 수 있습니다.","meta":"Rule-based · 각도 계산식 노출","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"움직임 범위(ROM)","cat":"분석 엔진","desc":"한 세트 안에서 관절 각도의 최대·최소 구간을 잡아 가동 범위를 정리합니다. 회차별로 값이 남습니다.","meta":"최대/최소 각도 구간","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"반복 횟수 카운트","cat":"분석 엔진","desc":"기준 각도를 넘고 되돌아오는 구간을 한 회로 세어 반복 횟수를 집계합니다. 임계값은 동작별로 설정합니다.","meta":"임계각 교차 방식","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"좌우 차이 비교","cat":"분석 엔진","desc":"좌·우측 같은 관절의 각도와 가동 범위를 나란히 놓아 차이를 표시합니다. 판정이 아니라 측정값 제시입니다.","meta":"좌/우 대칭 지표","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"결과 화면·변화 추이","cat":"사용자 모바일","desc":"이번 회차의 횟수와 가동 범위를 카드로 보여주고, 이전 기록과 나란히 놓아 변화를 선 그래프로 그립니다.","meta":"회차 비교 · 추이 그래프","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"날짜별 운동 이력","cat":"사용자 모바일","desc":"수행한 날짜별로 영상과 지표를 묶어 목록으로 정리합니다. 항목을 열면 그때의 영상과 수치를 다시 볼 수 있습니다.","meta":"캘린더 · 기록 목록","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"관리자 사용자 목록·피드백","cat":"관리자 웹","desc":"PC 웹에서 사용자 목록과 업로드된 영상을 확인하고, 수행 기록에 코멘트를 남깁니다. 남긴 피드백은 사용자 기록 화면에 붙습니다.","meta":"PC 웹 · 코멘트 입력","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"촬영 가이드 화면","type":"사용자 화면","desc":"전신이 프레임에 들어오도록 가이드 실루엣과 거리 안내를 띄우고, 촬영 시작 전 대상 동작을 선택하게 합니다.","sub":"모바일 · 촬영 전 단계","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"랜드마크 오버레이 재생","type":"사용자 화면","desc":"업로드한 영상 위에 추출된 관절 점과 연결선을 겹쳐 재생하고, 슬라이더로 특정 프레임의 각도값을 확인합니다.","sub":"모바일 · 분석 결과 확인","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"회차 결과 요약","type":"사용자 화면","desc":"반복 횟수, 관절별 최대/최소 각도, 좌우 차이를 카드로 정리하고 아래에 이전 회차와의 변화 추이를 그립니다.","sub":"모바일 · 지표 카드 + 그래프","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"날짜별 기록 목록","type":"사용자 화면","desc":"날짜를 기준으로 수행 기록을 묶어 보여주고, 항목마다 영상 썸네일과 그날의 주요 지표를 함께 표시합니다.","sub":"모바일 · 이력 관리","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"관리자 사용자 상세","type":"관리자 화면","desc":"사용자별 업로드 영상과 회차 기록을 표로 보고, 각 회차에 코멘트를 입력해 저장합니다. 입력한 피드백은 목록에서 바로 구분됩니다.","sub":"PC 웹 · 전문가 피드백","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관절 좌표 데이터 구조","type":"데이터 구조","desc":"프레임 인덱스·관절 ID·x/y/z·신뢰도로 구성된 JSON 스키마와 회차 요약 테이블의 관계를 ERD로 정리했습니다. 이후 분석 확장을 염두에 둔 구조입니다.","sub":"ERD · 좌표 JSON 스키마","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157316"};
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
