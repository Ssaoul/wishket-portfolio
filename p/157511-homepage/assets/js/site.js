/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"정한정밀","brandSub":"JEONGHAN PRECISION","cats":["모델 선택","작업 화면","경고·순서 관리","설정·배포"],"caseCats":["현장 화면","연동","운영"],"items":[{"name":"모델 선택 화면","cat":"모델 선택","desc":"공정명과 모델 목록을 키오스크형 전체화면으로 표시하고, 모델을 누르면 해당 작업표준으로 바로 진입합니다. 모델이 많으면 페이지 단위로 넘깁니다.","meta":"터치·비터치 겸용","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"연결 상태 표시","cat":"모델 선택","desc":"PLC와 메인 PC의 연결 상태를 화면 상단에 상시 표시해, 작업자가 별도 확인 없이 통신 이상을 알아차릴 수 있습니다.","meta":"상시 표시","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"작업표준 PDF 뷰","cat":"작업 화면","desc":"현재 공정의 작업표준 PDF를 화면 크기에 맞춰 표시하고, 좌측에 전체 공정 목록과 현재 위치를 함께 보여줍니다.","meta":"화면 맞춤 렌더","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"공정 전환 3방식","cat":"작업 화면","desc":"설정 시간이 지나면 넘어가는 자동, 이전·다음 버튼의 수동, PLC 신호 수신의 세 가지 방식으로 공정을 전환합니다.","meta":"자동·수동·PLC","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"공정 순환","cat":"작업 화면","desc":"마지막 공정 다음에는 첫 공정으로 돌아가 동일한 작업을 반복 수행하도록 순환합니다.","meta":"반복 작업 대응","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"순서 이탈 경고","cat":"경고·순서 관리","desc":"순서와 다른 작업이 감지되면 전체화면 경고를 띄우고 화면을 정지하며, 해제 신호를 받을 때까지 상태를 유지합니다.","meta":"해제 신호까지 유지","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"PLC 주소맵 관리","cat":"설정·배포","desc":"주소값이 아닌 역할(Role)이 동작을 결정하는 구조로, 영역(D/W/H/CIO)과 데이터 형식(INT/FLOAT/DOUBLE/STRING/CHAR)을 지원합니다. 공정별 주소맵은 메인 PC에서 관리해 각 공정 PC로 배포합니다.","meta":"Role 기반 매핑","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"설정 자동 수신","cat":"설정·배포","desc":"공정 PC는 메인 PC에 접속하는 순간 공정명, PLC 주소 등 자기 설정을 자동으로 받아옵니다. 현장에서 PC마다 설정을 다시 잡을 필요가 없습니다.","meta":"접속 시 자동","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"콘텐츠 폴더 반영","cat":"설정·배포","desc":"지정 폴더에 PDF를 넣고 빼는 것만으로 표시 내용이 바뀝니다. 공정 순서·표시 시간·공정명은 현업 엔지니어가 직접 편집할 수 있습니다.","meta":"프로그램 수정 불필요","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"조립 1라인 모델 선택","type":"현장 화면","desc":"공정명과 모델 목록을 페이지 단위로 표시하고, PLC·메인 PC 연결 상태를 상단에 함께 노출한 키오스크 화면입니다.","sub":"터치 조작 · 전체화면","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"작업표준 표시 화면","type":"현장 화면","desc":"좌측 공정 목록에서 현재 위치를 강조하고, 우측에 해당 공정의 작업표준 PDF를 화면 크기에 맞춰 표시합니다.","sub":"현재 위치 강조","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"순서 이탈 경고 화면","type":"현장 화면","desc":"순서와 다른 작업이 감지된 순간 전체화면 경고로 전환하고 화면을 정지합니다. 해제 신호를 받기 전까지 다음 공정으로 넘어가지 않습니다.","sub":"화면 정지 · 해제 대기","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"OMRON FINS/UDP 신호 처리","type":"연동","desc":"모델 번호, 다음 페이지(핸드셰이크 응답 포함), 현재 페이지, 경고 표시 정보를 수신해 화면 동작에 반영하고 하트비트를 주기적으로 번갈아 송신합니다.","sub":"핸드셰이크 · 하트비트","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"통신 단절 재접속 처리","type":"연동","desc":"통신이 끊기면 제한된 횟수만 자동 재접속하고 이후에는 사용자 조작으로 재접속합니다. 재시도 트래픽이 라인 네트워크에 누적되지 않도록 처리합니다.","sub":"재시도 상한 · 수동 복구","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"메인 PC 설정 배포","type":"운영","desc":"메인 PC가 자료와 설정을 보관하고 공정 PC가 이를 읽어 표시하는 구조입니다. 공정 순서·표시 시간·모델·PLC 설정을 설정 화면에서 수정해 각 공정 PC로 배포합니다.","sub":"1:N 배포 · 폴더 공유","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157511"};
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
