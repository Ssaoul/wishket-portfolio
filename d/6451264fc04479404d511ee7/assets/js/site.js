/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"결온병원","brandSub":"Multi-Branch Hospital Web & Reservation Console","nav":[["index.html","개요"],["catalog.html","게이트웨이"],["gallery.html","지점별 홈"],["about.html","진료과 상세"]],"cats":["지점","진료과","예약 관리","게시판","운영 환경"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"평택본점 · 정형외과","cat":"진료과","desc":"의료진 3인, 평일 09:00~18:00, 토 09:00~13:00. 진료과 상세의 의료진 카드와 예약 슬롯이 같은 진료시간 데이터를 씁니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"송탄점 · 소아청소년과","cat":"진료과","desc":"점심시간(12:30~13:30)에는 예약 슬롯을 자동으로 막습니다. 지점 담당자가 점심시간을 바꾸면 예약 화면에 바로 반영됩니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"안중점 · 피부과 (미개설)","cat":"지점","desc":"이 지점에는 개설되지 않은 진료과입니다. 진료과 메뉴에는 '타 지점 안내'가 뜨고, 예약 화면에서는 선택할 수 없습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"고덕점 · 지점 홈","cat":"지점","desc":"게이트웨이에서 지점을 고르면 이동하는 화면입니다. 지점마다 배너·공지·오시는 길을 따로 쓰고, 레이아웃은 같은 컴포넌트를 씁니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"예약 대기열 (송탄점)","cat":"예약 관리","desc":"당일 접수 14건 중 확정 11건, 변경 요청 2건, 미응답 1건. 지점 관리자는 자기 지점 예약만 볼 수 있습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"공지사항 · 언론보도 · FAQ","cat":"게시판","desc":"게시판 하나에 유형 태그와 노출 지점을 지정합니다. '전 지점 공통' 공지는 본원 관리자만 올릴 수 있습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"추석 연휴 휴진 일괄 등록","cat":"예약 관리","desc":"휴진일을 날짜 범위로 등록하면 4개 지점의 해당 슬롯이 일괄로 마감되고, 이미 잡힌 예약은 변경 안내 대상으로 분류됩니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"Staging 검수 대기","cat":"운영 환경","desc":"진료과 상세 원고 수정 3건이 Staging에 반영되었습니다. 검수 승인 전에는 Production에 노출되지 않습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"RSV-SH-261103-0142 · 본인인증 실패","type":"예외","desc":"휴대폰 본인인증 응답 시간이 초과돼 예약이 '임시 접수' 상태로 남았습니다. 10분이 지나면 슬롯을 다시 열고, 관리자 로그에 실패 사유를 남깁니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"name_note":"","title":"RSV-PT-261104-0087 · 중복 예약 차단","type":"예외","desc":"같은 인증 정보로 같은 날 같은 진료과에 두 번째 예약을 시도했습니다. 새로 접수하지 않고 기존 예약 조회 화면으로 안내합니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"RSV-AJ-261105-0021 · 미개설 진료과 요청","type":"예외","desc":"이전 사이트의 링크로 안중점 피부과 예약에 들어왔습니다. 오류 페이지 대신 개설된 지점 목록을 보여줍니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"RSV-GD-261002-0310 · 휴진일 변경","type":"변경","desc":"예약을 확정한 뒤 담당 의료진의 학회 휴진이 등록됐습니다. 이 예약은 '변경 필요'로 분류되고, 관리자 화면에 연락 대상으로 올라갑니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"RSV-PT-261106-0119 · 정상 확정","type":"정상","desc":"평택본점 정형외과 11월 6일 10:30. 본인인증 후 접수되었고, 관리자가 확정하자 예약번호로 조회할 수 있게 됐습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"Staging → Production 반영 보류","type":"운영","desc":"FAQ 개정안에 이미지 대체텍스트가 빠져 접근성 점검에서 걸렸습니다. Production 반영을 보류하고 수정을 요청했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159285"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","게이트웨이"],["gallery.html","지점별 홈"],["about.html","진료과 상세"]];
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
