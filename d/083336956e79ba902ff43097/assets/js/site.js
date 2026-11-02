/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"서담 어드바이저리","brandSub":"Seodam Advisory — Quiet Counsel for Owners Who Decide","nav":[["index.html","개요"],["catalog.html","컨설팅 소개"],["gallery.html","프로그램 소개"],["about.html","진행 방식"]],"cats":["경영 진단","사업 구조화","조직·인사","성장 전략"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"대표자 1:1 경영 진단","cat":"경영 진단","desc":"매출 구조·비용 흐름·의사결정 체계를 2회 인터뷰로 점검하고 우선순위 과제를 정리합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"재무 흐름 점검 세션","cat":"경영 진단","desc":"월별 현금 흐름과 고정비 비중을 함께 보며 위험 신호를 짚는 단기 프로그램입니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"사업 모델 재정비","cat":"사업 구조화","desc":"주력 상품과 수익원을 다시 나누고, 버릴 것과 키울 것을 대표자와 함께 결정합니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"법인 전환 준비 컨설팅","cat":"사업 구조화","desc":"개인사업자에서 법인으로 넘어갈 때 필요한 절차와 검토 항목을 단계별로 안내합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"조직 구조 설계","cat":"조직·인사","desc":"10~30인 규모 조직의 역할 분담과 보고 체계를 정리해 대표자 의존도를 낮춥니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"평가·보상 기준 수립","cat":"조직·인사","desc":"직무별 평가 항목과 보상 기준 초안을 만들고 내부 공유 방식까지 함께 설계합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"신규 시장 진입 검토","cat":"성장 전략","desc":"진입하려는 시장의 경쟁 구도와 필요 자원을 정리해 진행 여부 판단을 돕습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"연간 실행 계획 워크숍","cat":"성장 전략","desc":"분기별 목표와 담당자를 정하는 반일 워크숍입니다. (관리자 설정: 현재 모집 마감 표시 중)","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"제조업 대표 — 경영 진단 후기","type":"후기 · 공개","desc":"\"막연히 불안했던 부분이 어떤 항목인지 이름이 붙으니 다음 할 일이 보였다.\" 관리자가 고객 동의 확인 후 공개 처리한 합성 후기입니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"프랜차이즈 가맹 본부 — 조직 구조 후기","type":"후기 · 비공개 전환","desc":"고객이 게시 동의를 철회해 관리자 화면에서 비공개로 전환된 상태입니다. 사이트에는 노출되지 않고 목록에만 '비공개' 표시가 남습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"상담 신청 SD-251104-012","type":"문의 접수 · 정상","desc":"이름·연락처·이메일·문의 내용이 모두 입력되어 접수 완료. 관리자 목록에 '신규'로 표시되고 담당자 배정을 기다립니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"상담 신청 SD-251104-013","type":"문의 접수 · 입력 오류","desc":"연락처가 '010-12-345' 형식이라 제출이 막히고 '연락처 형식을 확인해 주세요' 안내가 표시된 사례입니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"상담 신청 SD-251105-002","type":"문의 접수 · 동의 누락","desc":"개인정보 수집·이용 동의를 체크하지 않아 접수되지 않은 사례입니다. 동의 문구는 약관 페이지의 개인정보처리방침으로 연결됩니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"프로그램 문구 수정 이력","type":"관리자 편집","desc":"'연간 실행 계획 워크숍' 소개 문구와 모집 상태를 관리자가 직접 수정한 기록입니다. 개발자 없이 텍스트·이미지·노출 여부를 바꿀 수 있는 범위를 보여줍니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159375"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","컨설팅 소개"],["gallery.html","프로그램 소개"],["about.html","진행 방식"]];
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
