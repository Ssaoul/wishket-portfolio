/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"페이퍼사인","brandSub":"PAPERSIGN OCR ANALYTICS","cats":["인식·추출","검수","통계 분석","리포팅"],"caseCats":["공공·기관","보건·복지","교육·연구","현장 조사"],"items":[{"name":"스캔본 일괄 업로드","cat":"인식·추출","desc":"여러 장으로 묶인 설문지 PDF를 한 번에 올리면 응답지 단위로 자동 분할해 처리 대기열에 넣습니다. 진행 상태와 처리 결과를 목록에서 확인합니다.","meta":"PDF · 다중 페이지 분할","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"양식 정의 및 좌표 매핑","cat":"인식·추출","desc":"설문 양식을 한 번 등록해 문항 위치와 응답 유형(객관식·척도·주관식)을 지정해 두면, 같은 양식의 스캔본은 동일한 규칙으로 추출됩니다.","meta":"양식 템플릿 · 문항 매핑","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"손글씨·체크박스 추출","cat":"인식·추출","desc":"주관식 손글씨, 체크·마킹 표시, 숫자 기입란을 문항별로 읽어 표 형태로 정형화합니다. 판독이 애매한 항목은 낮은 신뢰도로 표시해 검수 대상에 올립니다.","meta":"텍스트 · 숫자 · 체크 · 손글씨","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"신뢰도 기반 검수 큐","cat":"검수","desc":"인식 신뢰도가 낮은 항목만 모아 담당자에게 보여 줍니다. 원본 스캔 이미지와 추출 값을 나란히 놓고 화면에서 바로 수정할 수 있습니다.","meta":"원본 대조 · 인라인 수정","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"검수 이력과 확정 처리","cat":"검수","desc":"누가 어떤 값을 언제 고쳤는지 기록으로 남기고, 검수를 마친 응답만 '확정' 상태로 분석 데이터셋에 편입합니다.","meta":"수정 이력 · 확정 상태 관리","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기초 집계","cat":"통계 분석","desc":"응답자 수, 문항별 응답 분포, 평균과 표준편차를 집계합니다. 성별·연령대 등 등록해 둔 구분 항목으로 나눠 볼 수 있습니다.","meta":"빈도 · 평균 · 표준편차","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"집단 비교 검정","cat":"통계 분석","desc":"두 집단 비교는 t-검정, 세 집단 이상은 분산분석(ANOVA)으로 처리하고, 검정 전 정규성 검사 결과를 함께 제시합니다.","meta":"t-test · ANOVA · 정규성","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"실시간 리포팅 대시보드","cat":"리포팅","desc":"확정 데이터가 늘어나면 표와 막대·원형 그래프가 함께 갱신됩니다. 조사 회차별로 지표를 나란히 놓고 비교할 수 있습니다.","meta":"표 · 막대 · 원형 그래프","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"리포트 내려받기","cat":"리포팅","desc":"화면에서 본 집계표와 검정 결과를 문서와 표 파일로 내려받습니다. 원자료도 분석 도구에서 쓸 수 있는 형태로 내보냅니다.","meta":"보고서 · 원자료 내보내기","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"주민 만족도 조사 집계","title_note":"","type":"공공·기관","desc":"지역 단위로 걷은 종이 설문지를 스캔해 올리고, 문항별 응답 분포와 지역 구분별 평균을 한 화면에서 확인하는 구성입니다.","sub":"응답 분포 · 지역별 비교","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"어르신 대상 방문 설문","type":"보건·복지","desc":"디지털 기기 사용이 어려운 응답자에게 종이로 받은 설문을 그대로 활용합니다. 손글씨 응답은 검수 화면에서 담당자가 확인한 뒤 확정합니다.","sub":"손글씨 검수 흐름","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"프로그램 전후 비교 분석","type":"보건·복지","desc":"참여 전후 두 시점의 응답을 짝지어 비교하고, 정규성 검사 결과와 함께 검정 결과를 제시하는 리포트 화면입니다.","sub":"대응표본 t-검정","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"다기관 공동 조사 통합","type":"교육·연구","desc":"여러 기관이 같은 양식으로 수집한 응답지를 하나의 데이터셋으로 통합하고, 기관을 요인으로 두고 분산분석 결과를 확인합니다.","sub":"ANOVA · 기관별 집계","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"수업 평가 문항 분석","type":"교육·연구","desc":"척도 문항의 평균과 분포, 주관식 응답 원문을 함께 열람하는 화면입니다. 주관식은 추출 원문과 스캔 이미지를 대조할 수 있습니다.","sub":"척도 집계 · 주관식 열람","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"현장 회수분 일괄 처리","type":"현장 조사","desc":"현장에서 한꺼번에 회수한 대량 스캔본을 대기열에 넣고, 처리 진행률과 검수 대기 건수를 관리자 화면에서 추적합니다.","sub":"처리 대기열 · 진행 현황","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157260"};
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
