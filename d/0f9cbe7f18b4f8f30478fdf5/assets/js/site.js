/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"갤러리 틈과결","brandSub":"Gallery Teumgyeol — Jongno & Yongsan Exhibition Archive","nav":[["index.html","개요"],["catalog.html","갤러리 소개(종로/용산 공간 안내)"],["gallery.html","전시 아카이브(현재/예정/지난 전시)"],["about.html","작가 소개"]],"cats":["현재 전시","예정 전시","지난 전시","참여 작가"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"EX-2026-11 「물의 결을 따라」","cat":"현재 전시","desc":"종로 공간 · 2026.10.24 ~ 2026.12.06 · 회화 18점. 포스터 1장과 작품 이미지 18장을 담당자가 한 게시물에서 등록, 작품별 캡션(제목·재료·크기·연도) 입력.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"EX-2026-12 「낮은 빛의 방」","cat":"현재 전시","desc":"용산 공간 · 2026.11.07 ~ 2026.12.20 · 설치·사진 11점. 설치 전경 사진은 가로형, 개별 작품은 원본 비율 유지 설정.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"EX-2027-01 「겹쳐 쓴 풍경」","cat":"예정 전시","desc":"종로 공간 · 2027.01.09 오픈 예정. 포스터만 먼저 게시하고 작품 이미지는 오픈 주에 추가하는 단계 등록 예시.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"EX-2026-08 「종이의 온도」","cat":"지난 전시","desc":"용산 공간 · 2026.08.29 ~ 2026.10.12 종료. 종료일이 지나 '지난 전시' 아카이브로 이동, 작품 이미지·전시 서문은 그대로 보존.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"EX-2026-05 「무채의 정원」","cat":"지난 전시","desc":"종로 공간 · 2026.05.16 ~ 2026.07.05 종료. 연도별 아카이브 필터에서 2026년으로 묶여 노출.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"한서윤 (회화)","cat":"참여 작가","desc":"「물의 결을 따라」 참여 작가. 작가 소개 페이지에 약력·작가 노트·대표작 6점, 참여 전시 2건이 자동 연결되는 구조.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"도민결 (설치·사진)","cat":"참여 작가","desc":"「낮은 빛의 방」 참여 작가. 작품 이미지는 장변 2,000px·JPG 기준으로 업로드, 원본은 갤러리 내부 보관.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"유하린 (드로잉)","cat":"참여 작가","desc":"「종이의 온도」 참여 작가. 지난 전시 종료 후에도 작가 페이지와 작품 아카이브는 유지.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"작품 원본 그대로 업로드 시도","type":"업로드 실패","desc":"촬영 원본(장변 7,200px · 장당 약 21MB) 12장을 한 번에 올리다 업로드가 중단된 사례. 운영 가이드에 '장변 2,000px · JPG · 장당 1MB 안팎' 규격과 변환 방법을 정리해 재업로드.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"세로·가로 작품 혼재로 썸네일 잘림","type":"레이아웃 예외","desc":"세로형 회화와 가로형 설치 전경이 섞여 목록 썸네일에서 작품 일부가 잘린 경우. 목록은 고정 비율, 상세는 원본 비율로 보이도록 분리 설정.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"종료된 전시가 '현재 전시'에 남음","type":"운영 실수","desc":"종료일 이후에도 분류를 바꾸지 않아 메인에 지난 전시가 노출된 경우. 담당자 체크리스트에 '전시 종료 시 분류 변경' 항목 추가.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"예정 전시 포스터 선공개","type":"정상 운영","desc":"오픈 3주 전 포스터와 전시 개요만 등록하고, 작품 이미지는 설치 완료 후 추가. 코드 수정 없이 담당자가 단독 처리.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"용산 공간 월요일 휴관 안내 누락","type":"정보 오류","desc":"종로·용산의 운영 시간이 달라 공통 안내문 하나로는 오해가 생긴 경우. 공간별 오시는 길·운영 시간 블록을 따로 두어 담당자가 각각 수정.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"메인 배너 교체","type":"정상 운영","desc":"새 전시 오픈일에 담당자가 관리자 화면에서 메인 배너 이미지와 문구, 연결 링크를 직접 교체. 매뉴얼 3쪽 분량 절차로 처리.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159370"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","갤러리 소개(종로/용산 공간 안내)"],["gallery.html","전시 아카이브(현재/예정/지난 전시)"],["about.html","작가 소개"]];
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
