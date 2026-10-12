/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온율회계법인","brandSub":"Onyul Accounting — Audit · Tax · Advisory","nav":[["index.html","개요"],["catalog.html","법인 소개"],["gallery.html","업무 영역"],["about.html","구성원 소개"]],"cats":["회계감사","세무자문","경영자문","가치평가·M&A","가업승계"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"외부감사 및 검토","cat":"회계감사","desc":"법정감사·반기검토·내부회계관리제도 검토. 결산 일정에 맞춘 사전 점검표를 제공합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"법인세·부가세 신고 대행","cat":"세무자문","desc":"신고 일정 관리와 세액공제 검토. 수정신고·경정청구 대응을 포함합니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"세무조사 대응","cat":"세무자문","desc":"조사 통지 접수부터 소명자료 작성, 불복 절차 검토까지 단계별로 지원합니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"스타트업 경리·결산 아웃소싱","cat":"경영자문","desc":"월결산·급여·4대보험을 묶어 운영하고 투자 라운드용 재무자료를 정리합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"내부통제 진단","cat":"경영자문","desc":"구매·자금·인사 프로세스의 통제 공백을 점검하고 개선 과제를 우선순위로 제시합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"기업가치평가","cat":"가치평가·M&A","desc":"비상장주식 평가, 투자유치·합병 비율 산정 보고서. 평가 목적별 방법을 사전에 합의합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"M&A 재무실사","cat":"가치평가·M&A","desc":"인수 대상의 재무·세무 실사 보고서와 거래 구조 검토 의견을 제공합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"가업승계 플랜","cat":"가업승계","desc":"증여·상속 시뮬레이션과 가업상속공제 요건 점검. 연도별 실행 계획을 함께 설계합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"INS-2026-041 「개정 세법 주요 변경점」 발행 보류","type":"발행 보류","desc":"작성자가 검토 요청했으나 메타 설명과 OG 이미지가 비어 발행자 단계에서 반려. 누락 항목이 표시되어 보완 후 재요청.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"POP-0912 연말정산 안내 팝업 기간 만료","type":"자동 종료","desc":"노출 기간 2026-01-05~01-31 설정. 종료일 경과 후 자동 비노출 처리되고 관리자 목록에 '만료' 상태로 남음.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"구성원 MBR-017 프로필 비공개 전환","type":"비공개 처리","desc":"퇴직 구성원을 삭제하지 않고 비공개로 전환. 기존 프로필 주소는 구성원 목록으로 리다이렉트되어 404가 나지 않음.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"연혁 2019년 항목 순서 교정","type":"수정","desc":"연도·월 단위 정렬 오류를 관리자에서 드래그로 교정. 미리보기 확인 뒤 발행, 변경 이력이 남음.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구주소 /notice/view?id=88 접근 404","type":"오류","desc":"이전 사이트 주소가 리다이렉트 목록에 없어 404 발생. 관리자 '리다이렉트 관리'에서 신주소 매핑을 추가해 해결.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"INS-2026-038 외부 공유 링크 미리보기 불일치","type":"오류","desc":"메신저 채널 공유 시 이전 제목이 표시됨. OG 태그 수정 후 외부 캐시 갱신이 필요함을 관리자 안내 문구로 표시.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159010"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","법인 소개"],["gallery.html","업무 영역"],["about.html","구성원 소개"]];
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
