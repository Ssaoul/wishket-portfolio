/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"세움택스","brandSub":"TAX CALC ENGINE","cats":["소득·세액 계산","자동·수기 판정","전자신고 파일","파라미터·인터페이스"],"caseCats":["통합 시나리오","계산 근거","검증"],"items":[{"name":"근로소득 계산","cat":"소득·세액 계산","desc":"4대보험 근로소득자의 총급여에서 근로소득공제·과세표준·산출세액까지 단계별로 계산하고 중간값을 함께 반환합니다.","meta":"calc_earned_income()","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"프리랜서 인적용역 계산","cat":"소득·세액 계산","desc":"사업자등록 없는 3.3% 원천징수 인적용역 수입에 대해 경비율을 적용해 소득금액과 기납부세액을 계산합니다.","meta":"calc_freelance_income()","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"겸업 합산 계산","cat":"소득·세액 계산","desc":"근로소득과 인적용역 소득을 합산해 종합소득 과세표준을 산출하고, 기납부세액을 차감한 납부·환급 세액을 반환합니다.","meta":"calc_combined()","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"개인지방소득세 연동","cat":"소득·세액 계산","desc":"산출된 소득세 결과를 받아 개인지방소득세를 연동 계산합니다. 소득세 계산 결과를 입력으로 받아 별도 호출로 처리됩니다.","meta":"calc_local_income_tax()","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"자동·수기 판정","cat":"자동·수기 판정","desc":"입력 자료를 기준으로 자동 처리 가능 여부를 판정합니다. 수기 대상이면 처리를 중단하고 사유 코드를 함께 돌려줍니다.","meta":"decide_processing_path()","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"수기 사유 코드","cat":"자동·수기 판정","desc":"사업자등록 보유, 인적용역 수입금액 기준 초과, 금융소득 종합과세, 부동산임대, 비거주자 등 사유를 코드와 설명으로 반환합니다.","meta":"REASON_* 상수","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"홈택스 규격 파일 생성","cat":"전자신고 파일","desc":"계산 결과를 홈택스 전자신고 규격으로 변환합니다. 반환 전 규격 사전 검증을 거쳐 반려 가능 항목을 미리 잡아냅니다.","meta":"build_hometax_file()","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"위택스 규격 파일 생성","cat":"전자신고 파일","desc":"지방소득세 신고분을 위택스 전자신고 규격 파일로 생성하고, 필드 길이·필수값·코드값을 사전 검증합니다.","meta":"build_wetax_file()","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"세법 파라미터 로더","cat":"파라미터·인터페이스","desc":"세율·경비율·공제 기준을 귀속연도별 파라미터 파일로 분리해 적용합니다. 파일만 교체하면 해당 연도 계산부터 새 기준이 반영됩니다.","meta":"load_tax_params(year)","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"단일소득 · 근로소득자","desc":"근로소득만 있는 대상자를 입력 계약대로 넘겼을 때 계산값·판정값·에러 여부가 한 번에 반환되는 호출 예제입니다.","type":"통합 시나리오","sub":"호출 예제 코드 포함","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"겸업 · 근로 + 인적용역","desc":"두 소득이 있는 대상자의 합산 과세표준 산출과 기납부세액 차감 흐름을 단계별 중간값과 함께 보여줍니다.","type":"통합 시나리오","sub":"합산 계산 흐름","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"수기 분기 · 처리 제외","desc":"사업자등록 보유 건이 자동 대상에서 제외되고 수기 사유 코드가 반환되는 경로입니다. 운영 담당자가 놓치지 않도록 사유를 문장으로 함께 돌려줍니다.","type":"통합 시나리오","sub":"사유 코드 반환","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"계산 근거 조회","desc":"총급여부터 결정세액까지 단계별 중간값과 각 단계에 적용된 파라미터 버전을 함께 조회합니다. 세무 검토자가 결과를 되짚을 수 있습니다.","type":"계산 근거","sub":"적용 파라미터 버전 표시","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"파라미터 버전 전환","desc":"귀속연도가 바뀌는 시점에 적용 파라미터가 전환되는 모습입니다. 모듈 코드는 그대로 두고 파라미터 파일만 교체합니다.","type":"계산 근거","sub":"귀속연도별 분리 저장","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"규격 사전 검증 결과","desc":"생성된 전자신고 파일을 반환 전에 규격 검증하고, 어긋난 항목을 필드 단위로 표시합니다. 접수 반려 전에 확인하기 위한 절차입니다.","type":"검증","sub":"필드 단위 오류 표시","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"주요 화면","gallery":"도입 사례","item":"화면","case":"사례"},"projectId":"157294"};
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
