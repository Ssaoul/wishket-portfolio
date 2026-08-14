/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"링구아케어","brandSub":"MEDICAL INTERPRETATION SaaS","cats":["크레딧 요금제","자동 충전 정책","예외 처리 정책","알림 정책"],"caseCats":["정상 플로우","실패·재시도","미수·차단","환불·정산"],"items":[{"name":"스타터 크레딧 팩","cat":"크레딧 요금제","desc":"단일 진료과 단위로 시작하는 선불 크레딧. 통역 호출 종료 시점에 사용분만 차감되고 잔액은 대시보드에서 바로 확인합니다.","meta":"선불 · 사용분 차감","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"병원 통합 크레딧","cat":"크레딧 요금제","desc":"여러 진료과의 사용량을 한 계정에서 합산 관리합니다. 결제 주체는 하나로 두고 부서별 사용 내역은 분리해 조회합니다.","meta":"계정 통합 · 부서별 조회","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"자동 충전 임계치","cat":"자동 충전 정책","desc":"잔여 크레딧이 관리자가 지정한 값 아래로 내려가면 등록된 빌링키로 충전을 트리거합니다. 임계치와 충전 단위는 계정별로 설정합니다.","meta":"임계치 · 트리거 조건","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"빌링키 발급·교체","cat":"자동 충전 정책","desc":"토스페이먼츠 빌링키 발급 규격과 카드 교체 절차를 정의합니다. 만료 예정 카드는 사전 안내 후 재등록을 유도합니다.","meta":"빌링키 · 사전 안내","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"웹훅 상태 동기화","cat":"자동 충전 정책","desc":"결제 승인·취소 웹훅을 수신해 내부 상태값을 갱신하고, 미수신 건은 결제 조회 API로 대사해 값이 어긋난 채 남지 않게 합니다.","meta":"웹훅 · 조회 대사","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"결제 실패 재시도","cat":"예외 처리 정책","desc":"실패 사유를 한도 초과·카드 유효성·일시 오류로 나누고, 사유별 재시도 여부와 수동 재결제 유도 시점을 구분합니다.","meta":"사유 분류 · 수동 유도","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"미수금 차단·복구","cat":"예외 처리 정책","desc":"유예 기간이 지나면 신규 통역 호출을 차단하고, 상환이 확인되면 차단 이전과 동일한 계정 상태로 복구합니다.","meta":"유예 기간 · 상태 복구","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"환불·부분 취소","cat":"예외 처리 정책","desc":"관리자 승인 단계를 거친 환불과 그에 따른 크레딧 차감 순서를 규정합니다. 이미 사용한 크레딧과 잔여분을 나눠 계산합니다.","meta":"관리자 승인 · 차감 순서","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"알림 발송 조건","cat":"알림 정책","desc":"충전 성공·실패, 잔액 임박, 차단 예고를 각각 어떤 수신자에게 어떤 채널로 보낼지 조건을 정의합니다.","meta":"수신자 · 채널 분기","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"임계치 도달 → 자동 충전 승인","type":"정상 플로우","desc":"잔여 크레딧이 임계치 아래로 내려간 시점부터 충전 완료까지의 기본 경로. 충전 요청은 계정당 한 건만 진행되도록 잠급니다.","sub":"충전대기 → 결제요청 → 승인 → 크레딧반영","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"빌링키 발급과 결제 수단 등록","type":"정상 플로우","desc":"카드 등록부터 빌링키 저장, 최초 인증 결제까지의 절차. 저장 대상과 저장하지 않는 값의 경계를 함께 표기했습니다.","sub":"카드등록 → 인증 → 빌링키저장 → 자동충전 활성","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"결제 실패 사유별 분기","type":"실패·재시도","desc":"실패 응답 코드를 재시도 가능·불가로 나눈 뒤, 불가 사유는 즉시 알림과 수동 재결제 화면으로 넘깁니다.","sub":"결제실패 → 사유분류 → 재시도 / 수동유도","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"웹훅 미수신 시 결제 조회 대사","type":"실패·재시도","desc":"웹훅이 늦거나 누락된 경우 조회 API 결과를 기준값으로 삼아 내부 상태를 맞추는 경로. 중복 반영은 멱등키로 막습니다.","sub":"미수신 감지 → 결제조회 → 상태정정 → 중복차단","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"미수금 발생 → 차단 → 상환 복구","type":"미수·차단","desc":"자동 충전이 끝내 성립하지 않은 계정의 유예·차단·복구 기준. 차단 중에도 진행 중인 통역은 종료까지 보장합니다.","sub":"미수확정 → 유예 → 이용차단 → 상환확인 → 복구","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"환불 요청 → 관리자 승인 → 차감","type":"환불·정산","desc":"환불과 결제 취소를 관리자가 수동 처리할 때의 확인 항목과 순서. 크레딧 차감이 결제 취소보다 먼저 오도록 고정했습니다.","sub":"요청 → 사용분 확인 → 승인 → 크레딧차감 → 취소","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"157642"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"상품"],['gallery.html',"스타일 · 후기"],['about.html','회사 소개'],['admin.html','관리자']];
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
