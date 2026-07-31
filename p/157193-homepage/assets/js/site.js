/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"등기다리","brandSub":"REAL ESTATE DOCUMENT AUTOMATION","cats":["문서 발급","배치·연동","파싱·데이터","운영·보안"],"caseCats":["백엔드 연동","배치 운영","데이터 활용"],"items":[{"name":"등기사항전부증명서 발급","cat":"문서 발급","desc":"주소 또는 부동산 고유번호로 등기 문서를 열람·발급하고 PDF 원본을 그대로 보관합니다. 열람용과 발급용을 용도에 따라 나눠 요청할 수 있습니다.","meta":"열람 / 발급 선택","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"건축물대장 조회·발급","cat":"문서 발급","desc":"표제부·층별개요·전유부를 공식 공개 API로 먼저 조회하고, 원본 문서가 필요한 경우에만 발급 경로로 넘깁니다.","meta":"API 우선 · 발급 선택","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"인증 세션 관리","cat":"문서 발급","desc":"인증 수단과 계정을 한 곳에서 관리하고, 만료가 다가오면 담당자에게 미리 알립니다. 승인이 필요한 단계는 사람에게 넘깁니다.","meta":"만료 알림 · 승인 분기","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"대량 발급 큐","cat":"배치·연동","desc":"주소 목록을 업로드하면 작업 단위로 쪼개 순차·병렬로 처리합니다. 진행률과 남은 건수를 실시간으로 확인합니다.","meta":"업로드 → 큐 → 완료","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"주소 정제·검증","cat":"배치·연동","desc":"지번과 도로명을 서로 변환하고 표기 오류를 사전에 걸러 냅니다. 확정되지 않은 주소는 발급 전에 검토 목록으로 뺍니다.","meta":"지번 ↔ 도로명","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"결과 전송 Webhook","cat":"배치·연동","desc":"작업이 끝나면 지정한 주소로 결과를 밀어 줍니다. 실패 시 재전송 규칙과 서명 검증을 함께 제공합니다.","meta":"콜백 · 재전송","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"문서 텍스트 추출","cat":"파싱·데이터","desc":"발급된 PDF에서 텍스트를 뽑아 항목별로 정리합니다. 표 구조가 흔들리는 구간은 원문을 남겨 두고 확인 대상으로 표시합니다.","meta":"PDF 파서 · OCR 보조","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"핵심 항목 구조화","cat":"파싱·데이터","desc":"소유 현황, 근저당권·가압류 등 권리 관계, 위반건축물 표시 여부를 JSON으로 정리해 내부 시스템에 그대로 넘깁니다.","meta":"JSON 응답","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"운영 콘솔·접근 제어","cat":"운영·보안","desc":"발급 성공·실패 현황과 오류 로그를 조회하고 실패 건을 다시 실행합니다. API 키 발급과 접근 IP 제한을 함께 관리합니다.","meta":"키 · IP 허용 목록","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"주소 1건 요청 → 문서 반환","title_hint":"","type":"백엔드 연동","desc":"내부 시스템이 REST 요청 한 번을 보내면 발급 상태를 폴링하거나 콜백으로 결과를 받습니다. 문서 저장소 경로와 파싱 결과가 함께 돌아옵니다.","sub":"단건 API 흐름","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"엑셀 주소 목록 일괄 발급","type":"배치 운영","desc":"주소가 담긴 파일을 올리면 검증을 거쳐 작업이 생성됩니다. 처리 중·완료·실패가 건별로 나뉘어 보입니다.","sub":"업로드형 배치","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"공공 서버 지연 시 자동 재시도","type":"배치 운영","desc":"응답이 늦거나 끊긴 건은 간격을 두고 다시 시도하고, 정해진 횟수를 넘기면 실패로 확정해 원인과 함께 남깁니다.","sub":"재시도 · 타임아웃","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"발급 경로 이중화","type":"백엔드 연동","desc":"문서발급 브로커 연동을 주 경로로 두고, 중단 시 브라우저 자동화 경로로 넘깁니다. 어느 경로로 처리됐는지 건별로 기록합니다.","sub":"주 경로 · 폴백","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"권리 관계 요약 카드","type":"데이터 활용","desc":"등기 문서에서 뽑아낸 소유·근저당 정보를 한 화면에 정리합니다. 확인이 필요한 항목은 원문 위치를 함께 표시합니다.","sub":"파싱 결과 화면","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"발급 현황과 예치금 관리","type":"데이터 활용","desc":"기간별 성공·실패 추이와 실패 사유 분포를 보여 주고, 발급 실비 잔액이 기준 아래로 내려가면 알립니다.","sub":"운영 대시보드","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157193"};
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
