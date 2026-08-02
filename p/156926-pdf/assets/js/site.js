/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"초록되감기","brandSub":"UPCYCLE ECO CLASS","cats":["청바지 업사이클","병뚜껑 업사이클","종이 업사이클","미래 에너지"],"caseCats":["교사 전용","관리자","기존 홈페이지"],"items":[{"name":"바다 지갑 KIT","cat":"청바지 업사이클","desc":"자투리 데님으로 방수 지갑을 만들며 해양 폐기물 문제를 다루는 교구입니다. 초등 중학년 이상 권장.","meta":"신규 · 40분 수업 · 개인 제작","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"페이퍼 가챠","cat":"종이 업사이클","desc":"폐지를 압축해 캡슐 뽑기 기계를 조립합니다. 손을 많이 쓰는 활동이라 모둠 수업에 적합합니다.","meta":"신규 · 60분 수업 · 모둠 제작","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"미래 에너지 페이퍼 씨어터","cat":"미래 에너지","desc":"태양광·풍력을 종이 무대 장치로 옮겨 만드는 교구입니다. 미래 에너지 클래스와 함께 구성됩니다.","meta":"신규 · 80분 수업 · 클래스 연계","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"데님 필통 만들기","cat":"청바지 업사이클","desc":"입지 않는 청바지를 잘라 필통으로 되살립니다. 바느질 난도를 유치원·초등으로 나눠 제공합니다.","meta":"유치원 과정 추가 · 40분 수업","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"데님 코스터 세트","cat":"청바지 업사이클","desc":"데님 조각을 겹쳐 컵받침을 만듭니다. 준비물이 적어 학급 인원이 많을 때 운영하기 좋습니다.","meta":"대인원 운영 · 30분 수업","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"병뚜껑 키링","cat":"병뚜껑 업사이클","desc":"수거한 병뚜껑을 녹여 굳힌 조각으로 키링을 만듭니다. 자원 순환 개념을 손으로 확인합니다.","meta":"자원기부 연계 · 40분 수업","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"병뚜껑 모자이크 보드","cat":"병뚜껑 업사이클","desc":"색깔별로 모은 병뚜껑으로 학급 공동 작품을 완성합니다. 학기말 활동으로 자주 선택됩니다.","meta":"자원기부 연계 · 학급 단위","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"친환경 미래 에너지 클래스","cat":"미래 에너지","desc":"에너지 전환을 주제로 한 신규 클래스입니다. 강사 방문 수업과 교구 배송 중 선택할 수 있습니다.","meta":"신규 클래스 · 인원별 강사비 산정","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"종이 씨앗 카드","cat":"종이 업사이클","desc":"씨앗을 넣어 뜬 종이로 카드를 만들고 화분에 심습니다. 저학년 첫 수업으로 권장합니다.","meta":"저학년 권장 · 30분 수업","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"견적 계산 화면","type":"교사 전용","desc":"교구 품목과 수량, 참여 인원을 넣으면 인원 구간별 강사비와 총액이 즉시 계산되어 표시됩니다.","sub":"수량·인원 입력 → 강사비·총액 즉시 반영","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"견적서 PDF 발행","type":"교사 전용","desc":"발행을 누르면 문서번호와 발행일시, 직인이 서버에서 합성된 인쇄용 PDF가 생성되고 가입 이메일로도 발송됩니다.","sub":"직인 서버 합성 · 문서번호 표기 · 메일 자동 발송","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"마이페이지 발급 이력","type":"교사 전용","desc":"1차·2차·3차 견적서와 자원기부 확인서를 회차별로 다시 내려받습니다. 재발행해도 이전 회차는 덮어쓰지 않습니다.","sub":"회차별 전량 보존 · 재다운로드","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"주문·예약 신청","type":"교사 전용","desc":"수업 예약과 교구 주문을 한 흐름에서 신청합니다. 교구 주문은 참여자 명단 파일과 배송 주소를 함께 받습니다.","sub":"명단 파일 첨부 · 배송지 입력 · 접수 상태 생성","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"회원 승인 관리","type":"관리자","desc":"업로드된 고유번호증을 확인하고 승인 또는 반려합니다. 승인 시 회원 상태가 바뀌고 지정 템플릿 문자가 발송됩니다.","sub":"가입신청 → 승인대기 → 승인 / 반려","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"주문·청구·결제 현황","type":"관리자","desc":"진행과 배송 완료, 청구 방법과 일자, 결제 완료일을 한 표에서 기록하고 조건별로 조회합니다.","sub":"접수 · 진행중 · 완료 · 청구 · 결제완료","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"156926"};
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
