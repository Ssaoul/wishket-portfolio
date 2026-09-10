/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"여백","brandSub":"Yeobaek Leisure Magazine — Editorial Renewal Prototype","nav":[["index.html","개요"],["catalog.html","서브 페이지 (카테고리·아티클 상세)"],["gallery.html","비즈니스(광고주용) 페이지"],["about.html","객원 에디터 소개"]],"cats":["여행·나들이","취미·클래스","미식","공간·리빙","에디터 픽"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"ART-2609-014 · 평일 오후에만 여는 동네 서점 일곱 곳","cat":"공간·리빙","desc":"커버 16:9 · 본문 이미지 8장 · 읽는 시간 6분. 관리자에서 커버·요약문 교체 가능.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"ART-2609-021 · 첫 캠핑, 장비보다 먼저 정할 것","cat":"여행·나들이","desc":"메인 히어로 슬롯 1순위 노출 중. 노출 순서는 관리자 드래그로 변경.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"ART-2608-097 · 도자기 원데이 클래스 후기 3인 3색","cat":"취미·클래스","desc":"객원 에디터 3인 공동 기고. 필자 프로필 카드가 하단에 자동 연결.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"ART-2608-055 · 국숫집 노포 지도, 걸어서 20분","cat":"미식","desc":"본문 내 지도 임베드. 구조화 데이터에 지역 정보 포함.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"ART-2607-112 · 에디터가 두 번 산 주방 도구","cat":"에디터 픽","desc":"제휴 표기 라벨 노출 대상. 광고 고지 문구는 관리자 텍스트 필드로 관리.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"ART-2607-088 · 비 오는 날의 실내 산책 코스","cat":"여행·나들이","desc":"구 URL(/service/view?id=88)에서 301 매핑된 아티클.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"BNR-메인상단-09 · 가을 기획전 배너","cat":"에디터 픽","desc":"관리자 배너 슬롯. 이미지·링크·노출 기간을 비개발자가 직접 교체.","id":"I6","img":"assets/img/item-6.svg","pub":1}],"cases":[{"title":"메인 히어로 문구 교체","type":"관리자 편집 · 성공","desc":"마케팅 담당자가 헤드라인 텍스트 필드를 수정하고 즉시 반영. 개발 배포 없이 처리.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"기획전 배너 이미지 교체","type":"관리자 편집 · 경고","desc":"권장 비율(1600×600)과 다른 이미지가 업로드되어 모바일에서 잘림 경고 표시. 저장은 되지만 미리보기에서 경고를 남긴다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"제휴 문의 폼 접수 → 알림 전송","type":"폼 연동 · 성공","desc":"광고주 문의 1건 접수 후 담당자 채널로 알림 발송. 접수번호 INQ-260910-003 부여.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"제휴 문의 알림 전송 실패","type":"폼 연동 · 실패","desc":"외부 알림 채널 응답 지연으로 전송 실패. 문의 내용은 관리자 목록에 보존되고 미발송 상태로 표시, 재전송 버튼 제공.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구 URL 301 매핑 누락","type":"SEO · 예외","desc":"이관 목록에 없던 태그 페이지 2건이 404로 확인됨. 리다이렉트 점검 화면에서 미매핑 목록으로 분리해 수동 지정.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"Article 구조화 데이터 검증","type":"SEO · 부분 통과","desc":"필수 항목은 통과, 일부 아티클에서 작성자·대표 이미지 누락 경고. 누락 필드는 관리자에서 채우도록 표시.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158399"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","서브 페이지 (카테고리·아티클 상세)"],["gallery.html","비즈니스(광고주용) 페이지"],["about.html","객원 에디터 소개"]];
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
