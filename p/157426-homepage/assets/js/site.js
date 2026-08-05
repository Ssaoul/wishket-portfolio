/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모아폼","brandSub":"MOAFORM · EVENT SURVEY","cats":["설문 화면","응답 입력","관리자","배포"],"caseCats":["참여 화면","관리자 화면","현장 운영"],"items":[{"name":"QR 스캔 진입","cat":"배포","desc":"X배너 QR을 스캔하면 설문 첫 화면으로 바로 연결됩니다. 가입·인증 단계가 없어 이탈 지점을 만들지 않습니다.","meta":"비회원 진입","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"한 문항씩 전환","cat":"설문 화면","desc":"문항을 한 번에 하나씩 보여주고 슬라이드·페이드 애니메이션으로 넘깁니다. 스크롤 부담 없이 진행됩니다.","meta":"애니메이션 전환","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"진행률 표시","cat":"설문 화면","desc":"상단 게이지로 남은 문항 수를 알려 줍니다. 끝이 보이면 중도 이탈이 줄어듭니다.","meta":"상단 고정 바","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"객관식 · 라디오","cat":"응답 입력","desc":"보기를 큼직한 카드 버튼으로 배치해 한 손 조작에 맞췄습니다. 선택 즉시 다음 문항으로 넘어갑니다.","meta":"단일 선택","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"복수 선택 · 체크","cat":"응답 입력","desc":"여러 개를 고르는 문항은 선택 개수를 표시하고, 확인 버튼으로 다음 단계로 이동합니다.","meta":"다중 선택","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"주관식 텍스트","cat":"응답 입력","desc":"자유 응답 문항은 키보드가 올라와도 입력창이 가리지 않도록 화면을 조정합니다.","meta":"글자 수 표시","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"응답 전송·완료","cat":"응답 입력","desc":"마지막 문항 이후 응답 전체를 한 번에 서버로 전송하고, 완료 화면과 감사 문구를 보여 줍니다.","meta":"일괄 전송","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"엑셀 다운로드","cat":"관리자","desc":"수집된 전체 응답을 문항별 열로 정리해 엑셀 파일로 내려받습니다. 행사 종료 후 자체 분석에 그대로 씁니다.","meta":"xlsx 내보내기","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"인쇄용 QR 발급","cat":"배포","desc":"설문 URL을 담은 QR 이미지를 생성해 내려받습니다. X배너 인쇄에 쓸 수 있는 크기로 제공합니다.","meta":"이미지 저장","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"QR 진입 첫 화면","type":"참여 화면","desc":"행사명과 안내 문구, 시작 버튼만 있는 단일 화면입니다. 스캔 후 무엇을 하면 되는지 한눈에 보입니다.","sub":"모바일 세로","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"문항 전환 애니메이션","type":"참여 화면","desc":"응답을 고르면 현재 문항이 밀려 나가고 다음 문항이 들어옵니다. 진행 중이라는 감각을 유지합니다.","sub":"슬라이드·페이드","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"주관식 입력 화면","type":"참여 화면","desc":"의견을 적는 문항 화면입니다. 키보드가 올라온 상태에서도 입력창과 다음 버튼이 함께 보입니다.","sub":"텍스트박스","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"응답 완료 화면","type":"참여 화면","desc":"전송이 끝나면 완료 표시와 감사 문구를 보여 주고, 중복 제출을 막는 안내를 함께 노출합니다.","sub":"전송 확인","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"응답 목록 · 엑셀 추출","type":"관리자 화면","desc":"수집된 응답을 표로 확인하고 엑셀 파일로 내려받는 화면입니다. 문항 순서 그대로 열이 만들어집니다.","sub":"엑셀 다운로드","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"QR 코드 발급 화면","type":"현장 운영","desc":"설문 URL을 입력하면 인쇄용 QR 이미지를 만들어 줍니다. X배너 시안에 바로 얹을 수 있습니다.","sub":"인쇄용 이미지","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157426"};
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
