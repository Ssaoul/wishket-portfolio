/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모노레일 스튜디오","brandSub":"Fashion Photography Archive & Studio","nav":[["index.html","개요"],["catalog.html","어바웃"],["gallery.html","포트폴리오"],["about.html","포트폴리오 상세"]],"cats":["룩북","캠페인","에디토리얼","필름"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"ARC-2701 울 니트 룩북 FW26","cat":"룩북","desc":"컷 24장 · 세로 3:4 위주. 업로드 시 주 색상 #B8A48C(오트밀) 추출 완료, 아카이브 1열 상단 고정.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"ARC-2702 데님 캠페인 SS27 티저","cat":"캠페인","desc":"컷 12장 · 가로 3:2와 세로 4:5가 섞여 있음. 세로값은 원본 비율대로, 7열 배열 높이 자동 계산.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"ARC-2703 레더 아우터 에디토리얼","cat":"에디토리얼","desc":"컷 18장 · 주 색상 #2B2420(다크 브라운). 어두운 배경이라 겹치는 구간에서 로고 반전 효과 확인용.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"ARC-2704 리넨 셋업 촬영 비하인드","cat":"필름","desc":"GIF 1개(6.2MB) · 어바웃 Film design 영역 자동재생. 모바일에서는 첫 프레임 정지 이미지 먼저 노출.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"ARC-2705 실크 블라우스 스틸컷","cat":"룩북","desc":"⚠ 업로드 보류 — 원본 23MB, 제한 20MB 초과. 자동 리사이즈(긴 변 2400px) 후 재등록 대기.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"ARC-2706 화이트 셔츠 캠페인","cat":"캠페인","desc":"⚠ 주 색상 추출 실패 — 흰 배경 비중이 90% 이상이라 대표색이 무의미함. 중립 웜그레이 #E6E2DC로 대체, 관리자가 직접 지정 가능.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"ARC-2707 액세서리 클로즈업 시리즈","cat":"에디토리얼","desc":"컷 30장 · 비공개 상태로 저장(촬영 브랜드 공개 승인 전). 아카이브 목록에서 제외, 관리자 화면에만 노출.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"ARC-2708 트렌치코트 무빙 필름","cat":"필름","desc":"GIF 2개 · 정렬 순서 드래그로 3번 → 1번 변경. 저장 즉시 사용자 화면 반영.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"INQ-1019-01 SS27 룩북 촬영 일정 문의","type":"신규 접수","desc":"니트 브랜드 담당자 · 희망 촬영일 11월 둘째 주 · 레퍼런스 이미지 3장 첨부. 관리자 목록 최상단에 '미확인'으로 표시.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"name":"","title":"INQ-1018-04 캠페인 영상·스틸 동시 촬영 견적","type":"회신 완료","desc":"스틸 20컷과 숏필름 1편 요청. 관리자가 메모 '견적서 발송, 10/22 재확인'을 남기고 상태를 회신 완료로 바꿈.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"INQ-1018-02 첨부 파일 누락 문의","type":"예외 · 첨부 실패","desc":"본문에는 '참고 이미지 첨부'라고 썼지만 파일 크기 초과(15MB)로 업로드 실패. 접수는 저장하고 '첨부 실패' 태그를 붙여 관리자에게 알림.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"INQ-1017-07 반복 링크 포함 문의","type":"예외 · 스팸 차단","desc":"같은 IP에서 5분 안에 4건 접수, 본문에 외부 링크 반복. 자동으로 스팸함으로 분리, 삭제 전 관리자 확인 대기.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"INQ-1016-03 에디토리얼 협업 제안","type":"보관","desc":"매거진 화보 협업 제안. 이번 시즌에는 진행하지 않기로 하고 '보관'으로 이동, CSV 내보내기 대상에는 포함.","id":"C4","img":"assets/img/case-4.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159152"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","어바웃"],["gallery.html","포트폴리오"],["about.html","포트폴리오 상세"]];
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
