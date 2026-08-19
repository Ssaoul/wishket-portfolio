/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"콜브릿지","brandSub":"CALLBRIDGE SERVICE OPS","cats":["파싱·적재","포털 연동","관리자 화면","인프라"],"caseCats":["관리자 화면","연동 흐름","데이터 설계"],"items":[{"name":"접수 이메일 자동 파싱","cat":"파싱·적재","desc":"콜 접수 일시, 종료 일시, 장비명, 시리얼 넘버, 담당자 정보를 이메일 본문에서 추출해 정해진 항목으로 나눕니다. 양식이 조금씩 다른 메일도 규칙과 예외 처리를 나눠 다룹니다.","meta":"추출 항목 5종 · 규칙 기반","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"데이터베이스 자동 매핑·저장","cat":"파싱·적재","desc":"추출한 값을 설계된 테이블 구조에 맞춰 매핑하고 저장합니다. 중복 접수와 필수값 누락은 저장 단계에서 걸러 별도 상태로 표시합니다.","meta":"ERD 설계 · 중복 검사","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"계약 장비 시리얼 대조","cat":"파싱·적재","desc":"접수된 시리얼 넘버를 계약 장비 데이터베이스와 대조해 유효한 서비스 대상인지 확인합니다. 미등록·계약 만료 장비는 전송 전에 표시합니다.","meta":"유효성 검증 · 사전 차단","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"ServiceNow REST 전송","cat":"포털 연동","desc":"저장된 콜 내역을 연동 명세에 맞춘 REST 포맷으로 변환해 고객사 포털에 전송합니다. 전송 성공·실패 결과를 건별로 남깁니다.","meta":"REST API · 건별 전송 이력","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"처리 상태 수신·갱신","cat":"포털 연동","desc":"포털에서 내려오는 처리 상태값을 받아 시스템 데이터베이스의 해당 콜 상태를 갱신합니다. 관리자 목록의 상태 배지가 함께 바뀝니다.","meta":"상태 동기화 · 이력 누적","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"연동 실패 재전송","cat":"포털 연동","desc":"통신 오류나 포맷 오류로 전송이 실패한 건을 목록에서 골라 다시 보냅니다. 재시도 횟수와 마지막 응답을 함께 보여줍니다.","meta":"재시도 · 응답 원문 확인","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"서비스콜 접수 목록","cat":"관리자 화면","desc":"접수된 콜과 개별 처리 상태를 한 목록에서 조회합니다. 상태·기간·담당자로 걸러 보고, 건을 열면 파싱 원문과 전송 내역을 함께 확인합니다.","meta":"상태 필터 · 상세 뷰","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"파싱 실패 건 수동 입력","cat":"관리자 화면","desc":"자동 추출에 실패한 메일을 원문과 나란히 놓고 항목을 직접 채워 저장한 뒤 재전송합니다. 어느 항목에서 실패했는지 표시합니다.","meta":"원문 대조 입력 · 재전송","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"장비 이력 검색·로그 확인","cat":"관리자 화면","desc":"시리얼 넘버로 해당 장비의 콜 이력을 찾아보고, 연동 에러 내역과 시스템 로그를 별도 창에서 확인합니다.","meta":"시리얼 검색 · 로그 뷰","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"서비스콜 접수 목록","type":"관리자 화면","desc":"접수 일시, 장비명, 시리얼, 담당자, 처리 상태를 한 줄로 보여주는 목록 화면입니다. 상태별 배지와 기간 필터, 실패 건만 보기 전환을 넣었습니다.","sub":"목록 · 필터 · 상태 배지","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"콜 상세와 파싱 원문 대조","type":"관리자 화면","desc":"왼쪽에 수신 메일 원문, 오른쪽에 추출된 항목을 나란히 놓아 어디서 값을 가져왔는지 눈으로 맞춰볼 수 있게 구성했습니다.","sub":"원문·추출값 병렬 배치","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"파싱 실패 건 수동 입력 화면","type":"관리자 화면","desc":"추출에 실패한 항목만 강조해 표시하고, 직접 입력한 뒤 저장·재전송까지 한 화면에서 마치도록 했습니다.","sub":"실패 항목 강조 · 저장 후 재전송","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"계약 장비 데이터베이스 관리","type":"관리자 화면","desc":"신규 장비 추가, 기존 장비 삭제, 계약 정보 수정을 처리하는 화면입니다. 시리얼 중복과 계약 기간을 입력 시점에 확인합니다.","sub":"추가·삭제·계약 정보 수정","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"이메일 → 데이터베이스 → 포털 흐름도","type":"연동 흐름","desc":"메일 수신, 파싱, 저장, 시리얼 검증, REST 전송, 상태 회신까지의 단계를 한 장으로 정리하고 각 단계에서 남는 로그를 표시했습니다.","sub":"6단계 · 단계별 로그 지점","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"데이터 구조와 연동 명세 정리","type":"데이터 설계","desc":"서비스콜, 계약 장비, 전송 이력, 에러 로그 테이블의 관계와 주요 항목을 정리하고, 전송 시 쓰는 필드 대응표를 함께 담았습니다.","sub":"ERD · 필드 대응표","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157757"};
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
