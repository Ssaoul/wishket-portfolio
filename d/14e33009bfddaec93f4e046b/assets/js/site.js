/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"갤러리 담연","brandSub":"Gallery Damyeon — Jongno & Yongsan Exhibition Archive","nav":[["index.html","개요"],["catalog.html","갤러리 소개(종로/용산 공간 안내)"],["gallery.html","전시 아카이브(현재/예정/지난 전시)"],["about.html","작가 소개"]],"cats":["현재 전시","예정 전시","지난 전시","작가","소식"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"EX-2611 「물의 결, 종이의 결」","cat":"현재 전시","desc":"종로 공간 1·2층 · 2026.11.06–12.20 · 한지 부조 24점. 메인 배너와 포스터는 담당자가 직접 교체했습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"EX-2612 「느린 정오」","cat":"예정 전시","desc":"용산 공간 · 2026.12.11 개막 예정 · 포스터만 등록한 상태입니다. 작품 이미지는 개막 1주 전에 공개하도록 비공개로 저장해 두었습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"EX-2609 「회색의 온도」","cat":"지난 전시","desc":"용산 공간 · 2026.09.04–10.25 · 회화 18점 아카이브. 전시가 끝나면 날짜 기준으로 지난 전시 목록에 자동으로 정렬됩니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"EX-2606 「선 너머의 방」","cat":"지난 전시","desc":"종로 공간 · 2026.06.12–08.02 · 설치 6점. 작품 사진 3장이 캡션 없이 올라가 있어 '캡션 누락' 경고가 표시됩니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"AR-014 윤서하","cat":"작가","desc":"한지·먹 기반 부조 작업. 참여 전시 EX-2611 · 대표작 이미지 6장 · 작가 약력은 담당자가 텍스트로 직접 수정합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"AR-021 마도윤","cat":"작가","desc":"유화·대형 캔버스 작업. 프로필 이미지가 정사각형이 아니라 목록 카드에서 잘려 보여 재업로드가 필요합니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"NW-1103 연말 휴관 안내","cat":"소식","desc":"12.29–1.2 두 공간 모두 휴관합니다. 텍스트만 있는 공지 게시물이며, 상단 띠배너 노출 기간을 함께 설정했습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"NW-1027 아티스트 토크 신청","cat":"소식","desc":"EX-2611 연계 토크 · 종로 공간 · 정원 30명. 신청은 사이트 문의 폼으로 받습니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"전시 포스터 교체 — 담당자 혼자 3분","type":"관리자 편집 · 성공","desc":"메인 배너 슬롯에서 EX-2609 포스터를 내리고 EX-2611 포스터를 올렸습니다. 레이아웃과 여백은 고정돼 있어 담당자가 바꿀 수 있는 건 이미지·제목·기간 텍스트뿐입니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"원본 TIFF 업로드 반려","type":"대량 업로드 · 실패","desc":"작품 촬영 원본(TIFF, 장당 38MB) 12장을 한꺼번에 올리려다 용량 초과로 반려됐습니다. 가이드에 따라 긴 변 2,400px JPEG(장당 약 600KB)로 변환해 다시 올렸습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"세로형 작품 비율 깨짐","type":"레이아웃 · 예외","desc":"세로가 긴 족자형 작품이 정사각형 썸네일에서 잘려 보였습니다. 작품 게시판 썸네일을 원본 비율 유지 방식으로 바꾸고, 상세 화면에서만 크게 보여주도록 수정했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"캡션 누락 3건 경고","type":"콘텐츠 검수 · 예외","desc":"EX-2606 작품 사진 3장에 작가명·제목·재료·크기가 빠져 있습니다. 공개 전 체크리스트에서 걸러 담당자에게 입력을 요청하도록 했습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"모바일에서 두 공간 안내 분리","type":"반응형 · 성공","desc":"PC에서는 종로·용산을 두 칸으로 나란히 보여주고, 모바일에서는 탭으로 전환합니다. 공간마다 운영시간과 오시는 길을 따로 표시합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"레이아웃 직접 수정 시도 차단","type":"권한 범위 · 예외","desc":"담당자가 메인 여백을 바꾸려 하자 '파트너 고정 영역' 안내가 떴습니다. 디자인이 깨지지 않도록 편집 범위를 콘텐츠로만 제한했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159370"};
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
