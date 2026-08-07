/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"가온평가원","brandSub":"GAON ASSESSMENT NETWORK","cats":["배정 엔진","연동 API","한도·일자 관리","데이터·마이그레이션"],"caseCats":["배정 시나리오","동시성 검증","연동·이관"],"items":[{"name":"배정 요청 API","cat":"연동 API","desc":"기존 사이트가 신청 접수 시 호출합니다. 규칙에 따라 담당 위원을 지정하고 결과를 즉시 반환합니다.","meta":"POST /assignments · 인증 키 필요","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"1차 동일 지역 배정","cat":"배정 엔진","desc":"신청 기업과 같은 시·도의 평가위원을 후보로 삼고, 당일 배정 수가 적은 위원을 먼저 고릅니다.","meta":"선택 기준은 착수 전 협의로 확정","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"2차 인접 지역 우회","cat":"배정 엔진","desc":"동일 지역 위원이 모두 일일 한도에 닿으면 인접 시·도 위원 중 여유가 있는 위원으로 넘깁니다.","meta":"시·도 단위 인접 관계표 기준","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"3차 수동 배정 대기","cat":"배정 엔진","desc":"인접 지역까지 모두 한도가 차면 신청 건을 대기 상태로 돌려, 기존 수동 배정 화면에서 그대로 조회됩니다.","meta":"상태: 배정 완료 · 대기 · 처리 완료","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"동시 신청 정합성 처리","cat":"한도·일자 관리","desc":"같은 순간에 들어온 여러 신청이 한 위원에게 몰려도 한도를 넘기지 않도록 데이터베이스 수준에서 막습니다.","meta":"트랜잭션·행 잠금 · 카운터 원자 갱신","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"일일 한도 카운터","cat":"한도·일자 관리","desc":"위원별 당일 배정 수를 카운터로 관리하고 일자 경계에서 초기화합니다.","meta":"자정/영업일 기준은 협의 후 설정값","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"당일 배정 현황 조회 API","cat":"연동 API","desc":"위원별 당일 배정 수와 잔여 한도를 실시간으로 돌려줍니다. 기존 관리 화면에 그대로 붙일 수 있습니다.","meta":"GET /commissioners/daily-count","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"스키마 매핑·마이그레이션","cat":"데이터·마이그레이션","desc":"기존 신청·기업·위원 테이블을 파악해 매핑하고, 위원·인접지역·배정·카운터 테이블을 되돌릴 수 있게 추가합니다.","meta":"DB 제품 확정 전에는 표준 SQL 기준","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"인접 지역 관계 데이터","cat":"데이터·마이그레이션","desc":"시·도 단위 인접 관계를 표로 구축해 적재합니다. 시·군·구 세분화가 필요해지면 같은 구조로 확장합니다.","meta":"데이터 파일 + 적재 스크립트 납품","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"동일 지역 정상 배정","type":"배정 시나리오","desc":"신청 접수 → 같은 시·도 위원 후보 조회 → 당일 배정 수가 가장 적은 위원에게 지정 → 결과 반환까지의 흐름을 재현했습니다.","sub":"수용 기준 1","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"한도 소진 후 인접 지역 우회","type":"배정 시나리오","desc":"동일 지역 위원 전원이 한도에 닿은 상태를 만들고, 인접 시·도 위원으로 자동 우회되는지 확인합니다.","sub":"수용 기준 2","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"전원 소진 시 대기 전환","type":"배정 시나리오","desc":"인접 지역까지 여유가 없을 때 신청 건이 수동 배정 대기로 넘어가고 기존 화면에서 조회되는 상태를 확인합니다.","sub":"수용 기준 3","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"피크 시간대 동시 요청 재현","type":"동시성 검증","desc":"하루 60~80건 규모가 특정 시간대에 겹치는 상황을 재현해, 같은 위원에게 한도 초과 배정이 나가는지 반복 측정합니다.","sub":"수용 기준 4","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"카운터 경합 테스트","type":"동시성 검증","desc":"한 위원의 잔여 한도가 1일 때 여러 요청을 같은 순간에 밀어 넣어, 한 건만 배정되고 나머지는 우회 또는 대기로 갈리는지 봅니다.","sub":"잔여 1 경계 조건","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"기존 DB 연동·마이그레이션 리허설","type":"연동·이관","desc":"운영 스키마를 읽어 매핑하고, 추가 테이블 마이그레이션을 적용·롤백해 본 뒤 연동 상태를 검증합니다.","sub":"DB 제품 확정 후 방식 조정","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157444"};
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
