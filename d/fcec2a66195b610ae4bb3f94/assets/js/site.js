/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"다시곁","brandSub":"Dasigyeot Rescue Collective — Adopt · Foster · Give","nav":[["index.html","개요"],["catalog.html","입양/임시보호 개체 상세"],["gallery.html","후원 경로"],["about.html","봉사·문의 경로"]],"cats":["모집 중","심사 중","입양 완료","의료 케어 중"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"R-2026-0412 · 보리 (믹스견, 추정 3세, 수컷)","cat":"모집 중","desc":"야산 방치 현장에서 구조. 중성화 완료, 기초 접종 2차까지 진행. 사진 8장·영상 1건 등록, 영문 소개문 반영 완료. '산책 좋아함' '다른 개와 합사 가능' 필터 태그 적용.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"R-2026-0398 · 콩떡 (코리안숏헤어, 추정 1세, 암컷)","cat":"심사 중","desc":"입양 신청서 접수 후 상태를 '심사 중'으로 전환. 상태 이력: 09.21 모집 중 → 10.02 심사 중 (변경자: 운영자B). 메인 랜딩 '새 가족을 찾는 아이들' 목록에서 자동으로 빠짐.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"R-2026-0377 · 누룽지 (진도 믹스, 추정 5세, 수컷)","cat":"모집 중","desc":"예외 사례: 심사 중이던 입양 신청이 철회되어 '심사 중 → 모집 중'으로 되돌림. 되돌림 사유가 이력에 남고, 목록 재노출 시점이 함께 기록됨.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"R-2026-0351 · 단비 (푸들 믹스, 추정 7세, 암컷)","cat":"의료 케어 중","desc":"슬개골 수술 후 회복 관찰 중이라 입양 공고는 비공개. 건강 기록 칸에는 수의사 소견 요약만 적고, 회복 예후를 단정하는 표현은 쓰지 않음.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"R-2026-0344 · 호박 (믹스묘, 추정 4개월, 수컷)","cat":"모집 중","desc":"예외 사례: 영상 업로드 용량 초과로 등록 실패 → 관리자 화면에 '외부 영상 링크로 첨부' 안내 표시. 사진 6장은 정상 게시.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"R-2026-0289 · 마루 (믹스견, 추정 2세, 수컷)","cat":"입양 완료","desc":"10.01 입양 완료로 전환. 개체 상세는 삭제하지 않고 '입양 완료' 배지와 함께 보관하고, 관련 활동 후기 게시물과 양방향으로 연결.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"R-2026-0263 · 솜이 (터키시앙고라 믹스, 추정 6세, 암컷)","cat":"심사 중","desc":"예외 사례: 영문 번역문 미수신 상태. 영문 사이트에는 개체 카드만 노출하고 상세 소개란은 '번역 준비 중'으로 표시해 빈 화면을 막음.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"R-2026-0215 · 감자 (믹스견, 추정 9세, 수컷)","cat":"입양 완료","desc":"노령견 임시보호를 거쳐 입양 완료. 상태 이력: 모집 중 → 심사 중 → 입양 완료 (3건). 임시보호 일지 게시물 4건이 개체 상세 하단에 자동으로 모임.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"구 사이트 URL 이전 — 리디렉션 누락 발견","type":"데이터 이관 예외","desc":"이전 매핑표 대조 중 구 게시판 상세 URL 일부가 새 주소와 연결되지 않은 것을 발견. 누락 목록을 따로 분리해 301 리디렉션을 추가하고, 이전 내역 결과물에 '처리 완료/보류' 컬럼으로 남김.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"플랫폼 정기 업데이트 후 다중 필터 위젯 깨짐","type":"유지보수 · 하자 대응","desc":"업데이트 직후 필터 버튼 정렬이 무너진 상황을 가정. 위젯 점검 체크리스트(필터·상태 이력·양방향 연결 3종)로 원인 위치를 좁히고, 기본 목록은 계속 보이도록 폴백 화면을 둠.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"봉사 신청 폼 → 스프레드시트 연동 실패","type":"외부 연동 예외","desc":"시트 권한 만료로 신청이 기록되지 않는 상황. 신청자에게는 정상 접수 화면을 보여주고, 실패 건은 관리자 알림 목록에 쌓아 재전송할 수 있게 설계.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"입양 상태 동시 변경 충돌","type":"운영 예외","desc":"활동가 두 명이 같은 개체를 각각 '심사 중'과 '입양 완료'로 바꾼 경우. 나중 변경을 적용하기 전에 확인 창을 띄우고, 두 변경 모두 이력에 변경자와 시각으로 남김.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구조 소식 확산으로 방문 급증","type":"트래픽 대응","desc":"이미지는 플랫폼 자체 저장소로 옮기고 목록 화면은 축소 이미지를 먼저 불러오는 구성. 활동가가 원본을 올려도 노출용 크기가 자동으로 적용됨.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"주간 진행 공유 — 협의안과 결과물 대조","type":"진행 관리","desc":"매주 화면 설계서 항목별로 '협의 내용 / 구현 결과 / 차이' 3열 표를 공유하는 방식. 범위가 바뀌면 그 주 표에 변경 요청으로 따로 기록.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158911"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","입양/임시보호 개체 상세"],["gallery.html","후원 경로"],["about.html","봉사·문의 경로"]];
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
