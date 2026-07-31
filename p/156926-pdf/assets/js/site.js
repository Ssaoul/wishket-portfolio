/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"초록결","brandSub":"GREEN GYEOL UPCYCLE LAB","cats":["교구 KIT","클래스","증빙 서류"],"caseCats":["교사 사이트","관리자","기존 홈페이지"],"items":[{"name":"바다 지갑 KIT","cat":"교구 KIT","desc":"해양 폐플라스틱을 소재로 지갑을 만들며 바다 쓰레기 문제를 다룹니다. 초등 중학년 이상 권장.","meta":"신규 · 단가 기준 관리 대상","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"페이퍼 가챠","cat":"교구 KIT","desc":"폐지를 활용해 가챠 캡슐과 뽑기 기계를 조립합니다. 소그룹 활동에 적합합니다.","meta":"신규 · 인원 구간별 강사비","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"미래 에너지 페이퍼 씨어터","cat":"교구 KIT","desc":"재생에너지를 종이 극장으로 표현하며 발표까지 이어지는 구성입니다.","meta":"신규 · 10월 콘텐츠 순차 반영","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"청바지 업사이클 4종","cat":"교구 KIT","desc":"폐청바지를 파우치·필통·컵받침·가방 고리로 되살립니다. 유치원 대상 구성 추가.","meta":"4종 · 표 디자인 정비","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"병뚜껑 리메이크 2종","cat":"교구 KIT","desc":"플라스틱 병뚜껑을 모아 키링과 코스터로 재가공합니다.","meta":"2종 · 모바일 표 가독성 대응","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"친환경 미래 에너지 클래스","cat":"클래스","desc":"태양광·풍력을 직접 만들어 보며 에너지 전환을 이해하는 신규 클래스입니다.","meta":"신규 페이지 · 전용 문의 폼","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"청바지 클래스 (유치원)","cat":"클래스","desc":"기존 청바지 클래스에 유치원 눈높이의 활동과 교구 내용을 더했습니다.","meta":"기존 클래스 확장","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"견적서","cat":"증빙 서류","desc":"교구 수량과 인원을 입력하면 강사비와 총액이 즉시 계산되고, 직인과 문서번호가 찍힌 PDF로 발행됩니다.","meta":"회차별 보존 · 재다운로드","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"자원기부 확인서","cat":"증빙 서류","desc":"수거·기부한 자원 내역을 확인서로 발급합니다. 마이페이지에서 회차별로 다시 받습니다.","meta":"발급 이력 관리","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"교사 가입 · 고유번호증 제출","type":"교사 사이트","desc":"교사 전용 가입 폼에서 기관 정보를 입력하고 고유번호증을 첨부해 제출하면 승인 대기 상태로 저장됩니다. 네이버 간편 로그인도 함께 제공합니다.","sub":"가입신청 → 승인대기","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"견적 계산 · 1차 PDF 발행","type":"교사 사이트","desc":"교구 수량과 인원을 넣으면 인원 구간별 강사비와 총액이 즉시 표시되고, 발행하면 직인·문서번호가 포함된 PDF가 내려받아지며 가입 이메일로도 발송됩니다.","sub":"서버사이드 PDF · 메일 자동 발송","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"수정 요청 · 2차 재발행","type":"교사 사이트","desc":"수정 요청을 보내면 관리자에게 알림이 가고, 재발행하면 2차 견적서가 생기며 1차도 그대로 남습니다. 덮어쓰지 않습니다.","sub":"1차·2차·3차 전량 보존","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"마이페이지 발급 이력 · 다운로드 센터","type":"교사 사이트","desc":"예전 견적서와 자원기부 확인서를 회차별로 다시 내려받고, 기본 증빙 서류도 한곳에서 받습니다.","sub":"휴대폰에서도 발행까지 완료","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"관리자 회원 승인 · 발급 내역","type":"관리자","desc":"고유번호증을 확인해 승인 또는 반려하면 회원 상태가 바뀌고 지정 템플릿 문자가 발송됩니다. 발급 내역은 수동 재발송이 가능합니다.","sub":"승인 · 반려 · 문자 템플릿","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"주문 관리 · 청구/결제 추적","type":"관리자","desc":"교구 주문은 명단 파일과 배송 주소를 받아 접수로 생성되고, 진행·완료·청구·결제완료를 기록하면 조건별로 조회됩니다.","sub":"접수 → 진행중 → 완료 → 청구 → 결제완료","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"156926"};
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
