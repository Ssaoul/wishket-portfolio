/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"리버스가드","brandSub":"Binary Hardening Diagnostic Report","nav":[["index.html","개요"],["findings.html","발견 항목"],["metrics.html","개선 전후"],["plan.html","실행 계획"]],"cats":["분류 A","분류 B","분류 C"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"제품 1","cat":"분류 A","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"제품 2","cat":"분류 B","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"제품 3","cat":"분류 C","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"제품 4","cat":"분류 A","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"제품 5","cat":"분류 B","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"제품 6","cat":"분류 C","desc":"항목 설명이 들어가는 자리입니다.","meta":"상세 보기","id":"I5","img":"assets/img/item-5.svg","pub":1}],"cases":[{"title":"사례 1","type":"유형 1","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"사례 2","type":"유형 2","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"사례 3","type":"유형 3","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"사례 4","type":"유형 1","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"사례 5","type":"유형 2","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"사례 6","type":"유형 3","desc":"사례 설명이 들어가는 자리입니다.","sub":"개요","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157641"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["findings.html","발견 항목"],["metrics.html","개선 전후"],["plan.html","실행 계획"]];
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
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px">'
      + D.nav.slice(1).map(function(n){ return '<a href="'+n[0]+'">'+n[1]+'</a>' }).join(' · ')
      + '</div></div></div>'
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
