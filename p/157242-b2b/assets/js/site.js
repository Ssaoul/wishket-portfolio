/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"하버링크","brandSub":"HARBOR LINK B2B DATA PLATFORM","cats":["파트너 데이터","검증 파이프라인","어드민 대시보드","연동·내보내기"],"caseCats":["대시보드","검토·승인","데이터 관리","설계 문서"],"items":[{"name":"통합 파트너 스키마","cat":"파트너 데이터","desc":"회사·창고·항만·포워더·관세법인·회계법인을 공통 필드로 묶고, 유형별 확장 필드를 따로 둡니다. 유형이 늘어도 테이블을 새로 파지 않습니다.","meta":"PostgreSQL · 공통+확장","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"지도 기반 위치 조회","cat":"파트너 데이터","desc":"창고·항만 좌표를 지도에 올려 권역별로 확인합니다. 목록과 지도가 같은 필터를 공유합니다.","meta":"Leaflet · OSM","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"신규 등록 검증 파이프라인","cat":"검증 파이프라인","desc":"계정이 등록되면 웹검색·DNS/HTTP 접속 확인·텍스트 매칭 결과를 수집해 확신도를 자동 산출합니다.","meta":"Edge Function · 비동기","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"확신도 자동 분류","cat":"검증 파이프라인","desc":"신호별 가중치로 확신도를 계산해 검증완료·확인필요·미검증으로 나눕니다. 판정 근거를 함께 남깁니다.","meta":"근거 로그 보존","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"90일 재검증 스케줄","cat":"검증 파이프라인","desc":"기간이 지난 항목을 자동으로 다시 검증하고, 값이 달라진 건만 관리자에게 올립니다.","meta":"주기 배치 · 변경 감지","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"관리자 검토 큐","cat":"어드민 대시보드","desc":"확신도가 기준 아래인 항목만 모아 보여 줍니다. 승인·반려·보류를 한 화면에서 처리합니다.","meta":"우선순위 정렬","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"인라인 편집","cat":"어드민 대시보드","desc":"표에서 셀을 눌러 바로 고칩니다. 누가 언제 무엇을 바꿨는지 이력이 남습니다.","meta":"낙관적 저장 · 변경 이력","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"다중 선택 일괄 처리","cat":"어드민 대시보드","desc":"여러 건을 체크해 한 번에 승인하거나 반려합니다. 결과는 건별로 성공·실패를 구분해 보고합니다.","meta":"부분 실패 표시","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"검색·필터·CSV 내보내기","cat":"연동·내보내기","desc":"기존 읽기 전용 어드민의 조회·검색·필터·내보내기 동작을 그대로 유지한 채 편집 기능을 얹었습니다.","meta":"기존 동작 호환","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"검증 현황 대시보드","type":"대시보드","desc":"검증완료·확인필요·미검증 비중과 최근 유입 추이를 한 화면에 모았습니다. 배지 색이 상태와 1:1로 대응합니다.","sub":"상태 배지 · 유형별 분포","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"관리자 검토 큐","type":"검토·승인","desc":"확신도 낮은 항목이 근거와 함께 쌓입니다. 웹검색 결과·접속 확인 결과를 나란히 놓고 판단합니다.","sub":"근거 대조 뷰","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"일괄 승인·반려","type":"검토·승인","desc":"필터로 추린 여러 건을 선택해 한 번에 처리하고, 반려 사유를 공통으로 붙입니다.","sub":"다중 선택 · 사유 입력","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"파트너 상세·인라인 편집","type":"데이터 관리","desc":"공통 필드와 유형별 확장 필드를 한 화면에서 편집합니다. 수정 이력이 아래에 시간순으로 남습니다.","sub":"확장 필드 · 변경 이력","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"신규 데이터 추가 워크플로우","type":"데이터 관리","desc":"유형을 고르면 그 유형에 필요한 항목만 단계별로 물어봅니다. 저장과 동시에 검증이 걸립니다.","sub":"단계형 입력 · 자동 검증 연계","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"통합 DB 스키마 ERD","type":"설계 문서","desc":"공통 엔터티와 유형별 확장 테이블, 검증 이력 테이블의 관계를 도식으로 정리했습니다.","sub":"ERD · 인덱스 설계 메모","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157242"};
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
