/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"폼스캔","brandSub":"FORMSCAN OCR & STATISTICS","cats":["인식·추출","검수","통계 분석","리포트·관리"],"caseCats":["인식·검수 화면","분석 대시보드","운영 관리"],"items":[{"name":"설문지 양식 등록","cat":"인식·추출","desc":"설문 문항 위치와 응답 유형(단일선택·복수선택·척도·주관식)을 양식으로 등록해 두면 같은 양식의 스캔본을 반복 처리합니다.","meta":"양식 템플릿","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"스캔본 일괄 업로드","cat":"인식·추출","desc":"여러 장이 묶인 PDF를 올리면 응답지 단위로 분리하고 기울기·여백을 보정한 뒤 문항별 영역을 잡습니다.","meta":"PDF · 다중 파일","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"체크박스·척도 판독","cat":"인식·추출","desc":"객관식 마킹과 리커트 척도 응답을 문항별 코드값으로 변환하고, 중복 마킹·무응답은 별도 상태로 표시합니다.","meta":"자동 정형화","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"손글씨 항목 인식","cat":"인식·추출","desc":"주관식·숫자 기입란의 손글씨를 텍스트로 변환하고 문항마다 인식 신뢰도를 함께 기록합니다.","meta":"신뢰도 점수 부여","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"검수 워크스페이스","cat":"검수","desc":"원본 스캔 이미지와 인식 결과를 나란히 놓고, 신뢰도가 낮은 항목만 필터링해 담당자가 직접 확인·수정합니다.","meta":"원본 대조 편집","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"검수 이력·승인","cat":"검수","desc":"누가 어떤 값을 언제 고쳤는지 항목 단위로 남기고, 승인 완료된 응답만 분석 데이터셋에 반영합니다.","meta":"변경 이력 기록","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"통계 분석 엔진","cat":"통계 분석","desc":"응답자 수 집계와 항목별 평균·표준편차를 산출하고 정규성 검사, t-검정, 분산분석(ANOVA)을 문항 조합별로 수행합니다.","meta":"t-test · ANOVA · 정규성","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"교차분석·집단 비교","cat":"통계 분석","desc":"연령대·지역 등 배경 문항을 기준으로 집단을 나눠 응답 분포를 비교하고 결과표를 만듭니다.","meta":"집단별 비교표","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"리포트 내보내기","cat":"리포트·관리","desc":"표와 그래프를 담은 분석 리포트를 파일로 내려받고, 정형화된 응답 원자료도 함께 추출합니다.","meta":"리포트 · 원자료","id":"I8","img":"assets/img/item-8.svg","pub":1},{"name":"권한·접근 제어","cat":"리포트·관리","desc":"관리자·분석가·검수자 역할을 나눠 화면과 데이터 접근 범위를 제한하고 접근 기록을 남깁니다.","meta":"역할 기반 권한","id":"I9","img":"assets/img/item-9.svg","pub":1}],"cases":[{"title":"스캔본 업로드·처리 현황","type":"인식·검수 화면","desc":"업로드한 PDF가 응답지 단위로 나뉘어 처리되는 과정을 대기·인식중·검수대기·완료 상태로 보여주는 목록 화면입니다.","sub":"처리 큐 · 상태별 필터","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"인식 결과 검수 화면","type":"인식·검수 화면","desc":"왼쪽에 원본 스캔 이미지, 오른쪽에 인식된 문항 값을 배치해 신뢰도가 낮은 항목부터 담당자가 확인·수정하도록 구성했습니다.","sub":"원본 대조 · 낮은 신뢰도 우선","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"손글씨 항목 확인 뷰","type":"인식·검수 화면","desc":"주관식·숫자 기입 항목만 모아 원본 이미지 조각과 변환 텍스트를 나란히 검토하는 화면입니다.","sub":"이미지 조각 · 텍스트 대조","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"응답 집계 대시보드","type":"분석 대시보드","desc":"응답자 수, 문항별 응답 분포, 무응답 비율을 막대·원형 그래프와 요약 카드로 함께 보여줍니다.","sub":"막대 · 원형 · 요약 카드","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"통계 검정 결과 화면","type":"분석 대시보드","desc":"집단 간 평균 비교에 대한 t-검정과 분산분석 결과를 검정통계량·유의확률 표와 분포 그래프로 제시합니다.","sub":"검정표 · 분포 그래프","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"설문 회차·권한 관리","type":"운영 관리","desc":"설문 회차별 데이터셋을 구분해 관리하고, 사용자 역할에 따라 열람·수정·내보내기 범위를 지정합니다.","sub":"회차 구분 · 역할별 접근","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157260"};
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
