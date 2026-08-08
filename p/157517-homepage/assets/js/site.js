/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온세이프","brandSub":"SMART HACCP MONITORING","cats":["모니터링","알림","리포트","설정"],"caseCats":["웹 화면","모바일 앱","접근성"],"items":[{"name":"실시간 온도 대시보드","cat":"모니터링","desc":"전체 설비의 현재 온도와 상태를 카드 형태로 한 화면에 배치했습니다. 정상·주의·이탈을 초록·노랑·빨강으로 구분합니다.","meta":"웹 · 태블릿","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"공장 평면도 온도 맵","cat":"모니터링","desc":"평면도 위에 설비 위치를 얹어 구역별 온도를 색으로 표시합니다. 모바일 해상도에서는 구역 단위로 접혀 출력됩니다.","meta":"웹 · 모바일","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"설비 상세 화면","cat":"모니터링","desc":"설비 한 대의 온도 추이 그래프, 최근 이탈 이력, 담당자 메모를 한 화면에서 확인합니다.","meta":"웹 · 모바일","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"온도 이탈 푸시 알림","cat":"알림","desc":"기준을 벗어나면 휴대폰으로 푸시가 발송되고, 알림을 누르면 해당 설비 상세로 바로 이동합니다.","meta":"iOS · Android","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"신호등 점검 체크리스트","cat":"알림","desc":"현장 점검 항목을 한 문항씩 크게 띄우고 세 개의 큰 버튼으로만 응답하도록 구성했습니다.","meta":"모바일","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"식약처 리포트 PDF","cat":"리포트","desc":"기간별 기록을 PDF로 조회하고 기기의 공유 기능으로 외부에 전달합니다.","meta":"조회 · 외부 공유","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"이탈 이력 타임라인","cat":"리포트","desc":"언제 어떤 설비가 기준을 벗어났고 누가 확인했는지 시간순으로 정리합니다.","meta":"웹","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"기준값·알림 설정","cat":"설정","desc":"설비별 상·하한 기준과 알림 받을 담당자를 직접 등록·수정합니다.","meta":"직접 등록·수정","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"언어·글자 크기 설정","cat":"설정","desc":"화면 언어와 글자 크기를 사용자별로 저장해 로그인할 때마다 같은 설정으로 표시합니다.","meta":"접근성","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"대시보드 리뉴얼 시안","type":"웹 화면","desc":"보라색 포인트를 쓴 다크 테마로 대시보드를 재구성했습니다. 상태 카드와 요약 지표를 상단에 모았습니다.","sub":"다크 테마 · 보라 포인트","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"설비 상세 리뉴얼 시안","type":"웹 화면","desc":"그래프 영역을 넓히고 수치는 큰 글씨로 올려 멀리서도 읽히도록 배치했습니다.","sub":"큰 글씨 · 추이 그래프","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"설정 화면 리뉴얼 시안","type":"웹 화면","desc":"항목을 카테고리로 접어 정리하고, 자주 바꾸는 기준값을 맨 위로 올렸습니다.","sub":"최소 조작 동선","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"푸시 알림 수신 화면","type":"모바일 앱","desc":"이탈 알림을 받은 뒤 잠금화면에서 두 번 만에 해당 설비 상태까지 도달하는 흐름입니다.","sub":"알림 → 설비 상세","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"모바일 온도 맵","type":"모바일 앱","desc":"평면도를 세로 화면에 맞춰 구역 카드로 재배치하고, 색만으로도 상태가 구분되게 했습니다.","sub":"세로 해상도 최적화","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"현장 점검 뷰","type":"접근성","desc":"글자 크기 확대, 색과 아이콘·문구를 함께 쓰는 상태 표시, 다국어 라벨을 적용한 점검 화면입니다.","sub":"고령·외국인 근로자 고려","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157517"};
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
