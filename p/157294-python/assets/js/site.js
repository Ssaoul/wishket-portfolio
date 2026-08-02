/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세담","brandSub":"SEDAM TAX ENGINE","cats":["소득·세액 계산","전자신고 파일","판정·검증","파라미터·인터페이스"],"caseCats":["통합 시나리오","계산 근거","운영 화면"],"items":[{"name":"근로소득 세액 계산","cat":"소득·세액 계산","desc":"4대보험 근로소득자의 총급여에서 근로소득공제·인적공제를 거쳐 결정세액까지 단계별로 계산합니다.","meta":"calc_wage_income() · 중간값 반환","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"프리랜서 인적용역 계산","cat":"소득·세액 계산","desc":"사업자등록 없는 3.3% 원천징수 인적용역 수입에 단순·기준경비율을 적용해 소득금액과 기납부세액을 산출합니다.","meta":"calc_freelance_income() · 경비율 자동 선택","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"겸업 합산 계산","cat":"소득·세액 계산","desc":"근로소득과 인적용역 소득을 합산해 종합소득금액을 구하고, 기납부세액을 차감한 납부·환급액을 반환합니다.","meta":"calc_combined() · 기납부세액 차감","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"개인지방소득세 연동","cat":"소득·세액 계산","desc":"산출된 소득세 결정세액을 기준으로 개인지방소득세를 연동 계산해 함께 반환합니다.","meta":"calc_local_tax() · 소득세 연동","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"홈택스 규격 파일 생성","cat":"전자신고 파일","desc":"계산 결과를 홈택스 전자신고 규격 레코드로 변환해 파일로 출력합니다. 레코드 길이·코드값을 규격에 맞춰 채웁니다.","meta":"build_hometax_file() · 규격 레코드","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"위택스 규격 파일 생성","cat":"전자신고 파일","desc":"지방소득세 신고분을 위택스 전자신고 규격 파일로 생성하고, 소득세 파일과의 금액 정합을 함께 확인합니다.","meta":"build_wetax_file() · 금액 정합 확인","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"규격 사전 검증","cat":"판정·검증","desc":"생성된 파일을 제출 전에 규격 기준으로 점검해 위반 항목과 위치를 목록으로 돌려줍니다.","meta":"validate_file() · 위반 항목 리스트","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"자동·수기 판정","cat":"판정·검증","desc":"입력 자료를 읽어 자동 처리 가능 여부를 판정하고, 수기 대상이면 사업자등록 보유·수입금액 기준 초과·금융소득 종합과세·부동산임대·비거주자 등 사유 코드를 반환합니다.","meta":"classify_case() · 사유 코드 반환","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"세법 파라미터 로더","cat":"파라미터·인터페이스","desc":"세율·경비율·공제 기준을 귀속연도별 파라미터 파일로 분리해, 파일 교체만으로 해당 연도 계산에 반영되도록 로딩합니다.","meta":"load_params(year) · 코드 수정 없음","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"단일소득 호출 시나리오","type":"통합 시나리오","desc":"근로소득만 있는 건을 입력 계약대로 넘겨 결정세액·지방소득세·판정 결과를 한 번에 받는 예제입니다.","sub":"입력 계약 → 계산 결과 → 판정 결과","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"겸업 합산 시나리오","type":"통합 시나리오","desc":"근로소득과 인적용역 소득이 함께 있는 건의 합산 처리 흐름을 호출 예제 코드와 함께 보여줍니다.","sub":"두 소득 합산 · 기납부세액 차감","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"수기 분기 시나리오","type":"통합 시나리오","desc":"판정 로직이 수기 대상으로 분류한 건이 자동 계산 경로에서 빠지고 사유와 함께 반환되는 흐름입니다.","sub":"판정 결과 · 수기 사유 코드","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"계산 근거 추적 화면","type":"계산 근거","desc":"총급여부터 결정세액까지 단계별 중간값과 각 단계에 적용된 파라미터 버전을 표로 펼쳐 보여줍니다.","sub":"단계별 중간값 · 적용 파라미터 버전","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"귀속연도 파라미터 비교","type":"계산 근거","desc":"귀속연도가 다른 파라미터 파일을 나란히 놓고 세율·경비율·공제 기준의 차이를 확인합니다.","sub":"연도별 파라미터 · 교체 이력","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"판정·검증 대시보드","type":"운영 화면","desc":"입력 건의 자동·수기 분류 현황과 규격 사전 검증에서 걸린 항목을 한 화면에 모아 담당자가 확인합니다.","sub":"자동·수기 분류 · 규격 위반 항목","id":"C5","img":"assets/img/case-5.svg","pub":1},{"title":"인터페이스 규격 뷰어","type":"운영 화면","desc":"입력 계약·출력 계약·에러 반환 규약을 필드 단위로 열람하고 호출 예제 코드를 복사할 수 있습니다.","sub":"입력·출력·에러 계약","id":"C6","img":"assets/img/case-6.svg","pub":1}],"labels":{"catalog":"주요 화면","gallery":"도입 사례","item":"화면","case":"사례"},"projectId":"157294"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"주요 화면"],['gallery.html',"도입 사례"],['about.html','회사 소개'],['admin.html','관리자']];
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
