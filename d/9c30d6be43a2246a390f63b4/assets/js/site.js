/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"다시봄 구조연대","brandSub":"Dasibom Animal Rescue · From Rescue to Home","nav":[["index.html","개요"],["catalog.html","입양&임시보호 목록"],["gallery.html","개체별 상세 페이지"],["about.html","관리자 개체 등록·수정"]],"cats":["입양 가능","임시보호 중","입양 심사 중","입양 완료","치료 중"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"RS-2026-0412 보리","cat":"입양 가능","desc":"믹스견 · 수컷(중성화) · 추정 3살 · 11.2kg. 국도변 방치 상태로 구조. 입양 상태 '입양 가능'으로 변경 2026.09.28, 상세 페이지에 [입양 신청] 버튼 노출.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"RS-2026-0398 콩이","cat":"입양 심사 중","desc":"코리안숏헤어 · 암컷 · 추정 1살 · 3.4kg. 입양 신청 2건 접수 후 심사 진행 중. 상태 변경일 2026.10.03 자동 기록, 신청 버튼은 숨김 처리되고 '심사 중' 안내만 표시.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"RS-2026-0377 단비","cat":"임시보호 중","desc":"진도 믹스 · 암컷 · 추정 5살 · 16.8kg. 임시보호처 이동(보호 상태 변경 2026.09.15). 임보 일지 사진 9장 중 2장이 업로드 용량 기준 초과 → 자동 축소 후 게시.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"RS-2026-0351 호두","cat":"입양 완료","desc":"푸들 믹스 · 수컷 · 추정 7살 · 5.1kg. 입양 완료 2026.08.30, 상세 페이지에 완료 배지와 입양 후기 연결. 목록 기본 필터에서는 하단으로 정렬.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"RS-2026-0429 무명(가칭 '새벽')","cat":"치료 중","desc":"믹스견 · 성별 확인 중 · 연령 미상 · 체중 측정 전. 학대 의심 현장에서 구조, 관계기관 확인 중이라 '비공개'로 등록. 링크를 알아도 서버에서 열람 차단.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"RS-2026-0415 라떼","cat":"치료 중","desc":"코리안숏헤어 · 수컷 · 추정 2살 · 4.0kg. 피부 질환 치료 중, 수의사 소견 메모는 관리자 전용. 공개 페이지에는 '치료 진행 중' 문구만 노출.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"RS-2026-0402 밤톨","cat":"입양 가능","desc":"믹스묘 · 암컷 · 추정 6개월 · 2.1kg. 운영자가 사진 6장과 짧은 영상 1개를 끌어놓아 작성 후 '임시저장' 상태. 검수자 확인 전이라 공개 목록에 미노출.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"RS-2026-0366 감자","cat":"임시보호 중","desc":"시바 믹스 · 수컷 · 추정 4살 · 9.7kg. 입양 신청 철회로 '입양 심사 중'에서 '임시보호 중'으로 되돌림. 상태 이력에 두 차례 변경일이 모두 남아 있음.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"사진 12장 한 번에 끌어놓기","type":"어드민 업로드","desc":"운영자가 구조 현장 사진 12장을 드래그로 올림. 원본 중 3장이 기준 용량 초과 → 업로드 시점에 자동 리사이즈·WebP 변환, 썸네일 별도 생성. 1장은 손상 파일로 판정돼 '다시 올려주세요' 안내.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"구조 영상 확산으로 방문 급증","type":"트래픽 대응","desc":"구조 소식이 메신저 채널로 공유되며 개체 상세 페이지 조회가 짧은 시간에 몰린 상황을 가정. 이미지는 CDN 캐시에서 응답하고 원본 서버는 HTML만 처리하는 구성으로 다운 없이 버티는 흐름을 시연.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"비공개 글 URL 직접 접근","type":"보안·권한","desc":"학대 의심 사건 개체의 상세 URL을 외부에서 직접 입력. 링크 숨김이 아니라 서버가 권한을 확인해 접근 거부 화면을 반환하고, 관리자 로그에 접근 시도 기록.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"기존 URL 301 매핑 누락","type":"데이터 이전","desc":"시험 이전 단계에서 옛 게시판 주소 일부가 매핑표에 빠져 404 발생. 누락 목록이 이전 내역서에 자동 집계되어 전체 이전 전에 보완 후 재검증.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"봉사 신청 폼 시트 전송 실패","type":"외부 연동","desc":"이동봉사 신청이 스프레드시트로 전송되던 중 연동 오류 발생. 신청자에게는 정상 접수 안내, 신청 데이터는 재시도 대기열에 보관 후 자동 재전송.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"영문 변환 용어집 미등록 단어","type":"다국어","desc":"영문 버튼 전환 시 '임시보호', '이동봉사'가 용어집에 없어 직역으로 표시됨. 관리자 화면에 미등록 용어 목록이 떠서 운영진이 바로 번역어를 등록.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158999"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","입양&임시보호 목록"],["gallery.html","개체별 상세 페이지"],["about.html","관리자 개체 등록·수정"]];
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
