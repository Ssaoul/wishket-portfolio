/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세담엔진","brandSub":"TAX CALC & E-FILING MODULE","cats":["소득·세액 계산","전자신고 파일","판정·근거","파라미터·인터페이스"],"caseCats":["통합 시나리오","판정 분기","근거·검증"],"items":[{"name":"근로소득 세액 계산","cat":"소득·세액 계산","desc":"총급여에서 근로소득공제·인적공제·세액공제를 순서대로 적용해 산출세액과 결정세액을 반환합니다.","meta":"calc.employment()","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"인적용역(3.3%) 계산","cat":"소득·세액 계산","desc":"사업자등록 없는 프리랜서의 원천징수 수입을 단순경비율·기준경비율 구조로 계산하고 기납부세액을 차감합니다.","meta":"calc.freelance()","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"겸업 합산 계산","cat":"소득·세액 계산","desc":"근로소득과 인적용역 소득을 종합소득금액으로 합산한 뒤 공제를 재적용해 최종 납부·환급액을 산출합니다.","meta":"calc.combined()","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"개인지방소득세 연동","cat":"소득·세액 계산","desc":"확정된 종합소득 결정세액을 기준으로 지방소득세를 연동 계산해 같은 출력 계약에 담습니다.","meta":"calc.local_tax()","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"홈택스 규격 파일 생성","cat":"전자신고 파일","desc":"계산 결과를 홈택스 전자신고 레코드 규격으로 변환합니다. 레코드 길이·코드값·정렬 규칙을 고정합니다.","meta":"efile.hometax()","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"위택스 규격 파일 생성","cat":"전자신고 파일","desc":"지방소득세 신고분을 위택스 규격으로 변환합니다. 홈택스 산출값과 동일 원천을 사용합니다.","meta":"efile.wetax()","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"규격 사전 검증","cat":"전자신고 파일","desc":"생성 파일을 제출 전에 규격 기준으로 점검하고, 어긋난 항목과 위치를 목록으로 반환합니다.","meta":"efile.validate()","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"자동·수기 판정","cat":"판정·근거","desc":"입력 자료만으로 자동 처리 가능 여부를 판정하고, 수기 대상이면 사유 코드를 함께 반환합니다.","meta":"route.decide()","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"파라미터 버전 로딩","cat":"파라미터·인터페이스","desc":"세율·경비율·공제 기준을 귀속연도별 파일로 분리해 두고, 파일 교체만으로 해당 연도 계산에 반영합니다.","meta":"params.load(year)","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"단일소득 — 근로만","title_note":"","type":"통합 시나리오","desc":"근로소득만 있는 대상자의 입력 계약 예시와 반환 결과를 한 화면에서 대조합니다.","sub":"입력 → 계산 → 지방소득세 → 파일","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"단일소득 — 인적용역만","type":"통합 시나리오","desc":"3.3% 원천징수 수입만 있는 경우의 경비율 적용 경로와 기납부세액 차감 과정을 보여줍니다.","sub":"경비율 적용 · 기납부 차감","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"겸업 — 근로＋인적용역","type":"통합 시나리오","desc":"두 소득을 합산했을 때 공제가 어떻게 재적용되는지 단일소득 결과와 나란히 비교합니다.","sub":"합산 후 공제 재적용","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"수기 분기 — 사유 반환","type":"판정 분기","desc":"사업자등록 보유·수입금액 기준 초과·금융소득 종합과세 등으로 자동 대상에서 제외된 건과 그 사유를 표시합니다.","sub":"제외 사유 코드 목록","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"계산 근거 조회","type":"근거·검증","desc":"단계별 중간값과 적용된 파라미터 버전을 펼쳐 세무 검토자가 산출 경로를 따라갈 수 있게 합니다.","sub":"중간값 · 파라미터 버전","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"파라미터 교체 전후 비교","type":"근거·검증","desc":"귀속연도 파라미터 파일만 바꿨을 때 동일 입력의 결과가 어떻게 달라지는지 대조합니다.","sub":"코드 수정 없이 반영","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"주요 화면","gallery":"도입 사례","item":"화면","case":"사례"},"projectId":"157294"};
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
