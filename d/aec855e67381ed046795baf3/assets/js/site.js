/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온기발자국","brandSub":"Rescue · Foster · Adopt — Independent CMS for Volunteer Teams","nav":[["index.html","개요"],["catalog.html","입양&임시보호 (목록·상세·절차)"],["gallery.html","개체별 상세 페이지"],["about.html","관리자 기능 (등록·수정·임시저장·공개/숨김)"]],"cats":["입양 가능","임시보호 중","입양 심사 중","치료 중","입양 완료"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"보리 · OG-2026-0142","cat":"입양 가능","desc":"믹스견 수컷, 추정 2세, 8.4kg. 야산 방치 현장에서 구조되었습니다. 기초 접종을 마쳤고 중성화 수술을 했습니다. 입양 신청 버튼이 보입니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"콩떡 · OG-2026-0157","cat":"임시보호 중","desc":"코리안숏헤어 암컷, 추정 1세, 3.1kg. 2026.09.21에 '보호소'에서 '임시보호'로 바뀌었고 변경일은 자동으로 기록됩니다. 임보처의 주간 사진은 운영자가 끌어다 놓기로 올립니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"단비 · OG-2026-0119","cat":"입양 심사 중","desc":"진도 믹스 암컷, 추정 4세, 15.2kg. 2026.10.02에 심사 중으로 바뀌면서 상세 페이지의 신청 버튼이 자동으로 숨겨졌습니다. 대신 '현재 심사가 진행 중입니다'라는 안내가 보입니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"호두 · OG-2026-0163","cat":"치료 중","desc":"푸들 믹스 수컷, 추정 7세, 5.6kg. 학대 신고로 구조되었고 피부 질환을 치료하고 있습니다. 건강 기록은 수의사 소견만 요약해서 싣습니다. 치료가 끝날 때까지 목록에 '치료 중'으로 표시됩니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"모카 · OG-2025-0388","cat":"입양 완료","desc":"믹스견 암컷, 추정 3세, 11.0kg. 2026.08.14에 입양되어 완료 배지가 붙었고, 입양 가족의 후기 1건이 연결되어 있습니다. 목록에서는 기본 필터로 제외됩니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"까망 · OG-2026-0171","cat":"입양 가능","desc":"코리안숏헤어 수컷, 추정 6개월, 2.2kg. 운영자가 임시저장만 하고 아직 공개하지 않은 상태입니다. 관리자 화면에서만 보이고 공개 목록과 검색에는 나오지 않습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"누리 · OG-2026-0128","cat":"임시보호 중","desc":"리트리버 믹스 암컷, 추정 5세, 24.8kg. 이동봉사로 임보처까지 옮겼습니다. 구조 영상 1건을 외부 영상 링크로 붙였고, 사이트 서버에는 영상 파일을 올리지 않습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"솜이 · OG-2026-0150","cat":"치료 중","desc":"말티즈 암컷, 추정 9세, 3.4kg. 2026.09.30에 '입양 가능'에서 '치료 중'으로 되돌려졌고, 변경 이력 2건이 남아 있습니다. 이력에는 상태가 앞뒤로 바뀐 경우도 그대로 기록됩니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"사진 12장 끌어놓기 업로드","type":"정상 처리","desc":"운영자가 휴대폰 원본 사진 12장을 한꺼번에 끌어다 놓은 경우입니다. 업로드할 때 목록용·상세용·원본 보관용 세 가지 크기로 나눠 저장하고, 공개 화면은 지연 로딩으로 필요한 크기만 불러옵니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"25MB 단일 이미지 업로드","type":"실패·예외","desc":"업로드 상한을 넘은 파일은 저장하지 않고 거절합니다. '사진 용량이 커서 올리지 못했습니다. 자동으로 줄여서 다시 올릴까요?'라는 안내를 쉬운 말로 보여주고, 코드나 FTP 화면은 나오지 않습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"비공개 공지 주소 직접 접근","type":"실패·예외","desc":"숨김 처리한 공지의 주소를 알고 들어오는 경우입니다. 비로그인 요청은 서버가 페이지를 내려주지 않고 403 안내 화면으로 보냅니다. 링크를 감추는 대신 요청 단계에서 권한을 확인합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"구조 소식 확산으로 방문 급증","type":"부하 대응","desc":"구조 영상이 공유되어 같은 소식 페이지에 접속이 몰리는 시나리오입니다. 정적 페이지와 이미지는 CDN 캐시에서 응답하고, 원 서버는 관리자 쓰기 요청만 받는 구조를 가정했습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"기존 게시판 URL 301 매핑 누락 3건","type":"실패·예외","desc":"시험 이전 단계에서 기존 게시판 주소 중 매핑표에 없는 3건이 404로 확인된 경우입니다. 이전 내역서에 '미매핑'으로 표시하고, 운영진이 확인해 승인한 뒤에 전체 이전으로 넘어갑니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"봉사 신청 폼 스프레드시트 연동 실패","type":"실패·예외","desc":"연동 권한이 만료되어 스프레드시트에 기록하지 못한 경우입니다. 신청 내용은 사이트에 먼저 저장하고, 관리자 화면에 '연동 대기 1건'을 띄워 다시 보내기 버튼으로 처리합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158999"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","입양&임시보호 (목록·상세·절차)"],["gallery.html","개체별 상세 페이지"],["about.html","관리자 기능 (등록·수정·임시저장·공개/숨김)"]];
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
