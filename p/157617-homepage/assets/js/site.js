/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"이음지원단","brandSub":"IEUM PARTNER MATCHING","cats":["배정 엔진","주소·좌표","데이터 연계","운영 지원"],"caseCats":["자동 배정","균등 배분","예외 처리","데이터 이관"],"items":[{"name":"거리순 전문가 정렬","cat":"배정 엔진","desc":"기업 좌표를 기준으로 배정 가능한 전문가를 가까운 순으로 정렬해 후보를 뽑습니다.","meta":"신청 접수 시 실행","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"근접 기업 묶음 배정","cat":"배정 엔진","desc":"서로 가까운 기업을 2~3개씩 하나로 묶어 전문가 한 명에게 함께 배정합니다. 묶는 거리 기준은 협의로 확정합니다.","meta":"묶음 단위 확정","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"균등 배분 판정","cat":"배정 엔진","desc":"같은 도에 속한 전문가 사이의 배정 건수 차이를 확인하고, 건수가 비슷하면 진행 중 건이 적은 전문가를 먼저 봅니다.","meta":"허용 편차 설정","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"주소 정제·좌표 변환","cat":"주소·좌표","desc":"도로명과 지번이 섞인 주소, 구주소, 표기 오류를 정리한 뒤 좌표로 바꾸고 결과를 저장해 다시 씁니다.","meta":"변환 결과 재사용","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"변환 실패 주소 확인","cat":"주소·좌표","desc":"좌표로 바뀌지 않은 주소를 따로 모아 어떤 값이 문제인지 확인하고 보정할 수 있게 합니다.","meta":"보정 경로 제공","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기존 시스템 매핑","cat":"데이터 연계","desc":"운영 중인 데이터베이스의 기업·전문가·신청 데이터를 읽어 배정 엔진이 쓰는 항목과 맞춥니다. 운영 테이블 변경은 최소로 둡니다.","meta":"별도 테이블 관리","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"엑셀 배정 실적 이관","cat":"데이터 연계","desc":"지금 엑셀로 관리하는 전문가별 월별 배정 건수와 진행 상황을 시스템으로 옮겨 균등 판정의 기준값으로 씁니다.","meta":"이관 결과 대조","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"미배정 대기 처리","cat":"운영 지원","desc":"조건에 맞는 전문가가 없어 확정되지 않은 건을 대기 상태로 남겨 담당자가 놓치지 않게 합니다.","meta":"대기 목록 확인","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"배정 회수·재배정","cat":"운영 지원","desc":"잘못 배정되었거나 전문가 사정이 바뀐 건을 되돌려 다시 배정 대상으로 보냅니다.","meta":"이력 함께 기록","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"신청 접수 후 배정 확정까지","type":"자동 배정","desc":"신청이 들어오면 담당자 조작 없이 후보 정렬과 묶음 구성을 거쳐 배정이 확정되고 기존 데이터베이스에 기록됩니다.","sub":"담당자 개입 없음","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"전문가 조회 화면 반영","type":"자동 배정","desc":"확정 직후 기존 홈페이지의 조회 화면에서 전문가가 본인에게 배정된 기업을 그대로 확인합니다.","sub":"기존 화면 그대로","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"도 단위 배정 건수 비교","type":"균등 배분","desc":"같은 도에 속한 전문가별 배정 건수와 진행 중 건수를 나란히 놓고 허용 범위 안에 있는지 확인합니다.","sub":"월별·누적 기준 협의","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"거리와 균등이 충돌한 건","type":"균등 배분","desc":"가장 가까운 전문가가 이미 물량이 몰린 경우 어떤 기준으로 다음 후보를 골랐는지 근거를 남깁니다.","sub":"판단 근거 기록","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"배정 가능한 전문가가 없는 건","type":"예외 처리","desc":"조건을 만족하는 전문가를 찾지 못한 신청을 대기로 전환하고, 사유와 함께 확인 목록에 남깁니다.","sub":"대기 상태 유지","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"엑셀 실적 이관 대조","type":"데이터 이관","desc":"엑셀에 있던 전문가별 월별 배정 실적을 옮긴 뒤 원본과 건수를 맞춰 보고 차이가 난 항목을 정리합니다.","sub":"이관 결과 보고","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157617"};
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
