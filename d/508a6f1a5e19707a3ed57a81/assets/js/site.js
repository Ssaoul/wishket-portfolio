/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"여백","brandSub":"Yeobaek Leisure & Lifestyle Magazine","nav":[["index.html","개요"],["catalog.html","아티클 상세"],["gallery.html","카테고리·태그 아카이브"],["about.html","비즈니스(광고주용) 페이지"]],"cats":["여행·나들이","취미·클래스","맛집·미식","살림·인테리어","기획 시리즈"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"평일 오후의 근교 온천, 세 곳","cat":"여행·나들이","desc":"메인 히어로 노출. Article 구조화 데이터 적용 완료, 대표 이미지 1200×630 확보.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"퇴근 후 두 시간, 목공 원데이 클래스","cat":"취미·클래스","desc":"에디터 추천 슬롯. 구 URL /service/class/118 → 신 URL 301 매핑 완료.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"혼자 앉기 좋은 카운터석 리스트","cat":"맛집·미식","desc":"모바일 유입 상위. 본문 내 이미지 캡션이 구 에디터 태그라 마크업 정리 대상.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"6평 원룸을 넓게 쓰는 수납 순서","cat":"살림·인테리어","desc":"발행 예약 상태. 대표 이미지 미등록으로 구조화 데이터 image 필드 경고.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"객원 에디터 3인의 9월 취향","cat":"기획 시리즈","desc":"다중 저자 아티클. author 필드가 단일 값 구조라 관리자 필드 추가 협의 필요.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"장마 지나고 다시 걷는 하천길","cat":"여행·나들이","desc":"구 URL 3개가 동일 본문을 가리켜 canonical 정리 후 301 통합.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"주말 아침 빵집 오픈런 기록","cat":"맛집·미식","desc":"임시저장. 광고주 태그(제휴)가 붙어 발행 전 표기 규칙 확인 필요.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"겨울 옷장 정리 체크리스트","cat":"살림·인테리어","desc":"비공개 전환. 검색 색인 제외 처리 및 301 대신 410 응답 케이스.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"메인 히어로 배너 교체","title_note":"","type":"관리자 편집 · 성공","desc":"마케터가 이미지와 문구, 링크를 직접 교체. 개발자 개입 없이 반영, 되돌리기 이력 남음.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"제휴 문의 폼 접수","type":"인바운드 · 성공","desc":"광고주가 비즈니스 페이지에서 제출. 담당자 알림 채널로 접수 내용 전달, 접수번호 발급.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"제휴 문의 알림 미도착","type":"인바운드 · 실패","desc":"외부 알림 채널 응답 지연으로 전송 실패. 접수 데이터는 관리자에 보존되고 재발송 버튼 노출.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"구 URL 301 매핑 누락","type":"SEO · 실패","desc":"이관표에 없던 구 주소로 유입돼 404. 미매핑 목록을 관리자에서 확인하고 즉시 규칙 추가.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구조화 데이터 검증 경고","type":"SEO · 경고","desc":"대표 이미지·발행일 누락 아티클에 경고 표시. 발행 전 체크로 막고 목록에서 일괄 보정.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"배너 이미지 규격 초과","type":"관리자 편집 · 경고","desc":"권장 용량을 넘긴 파일 업로드 시 자동 리사이즈 안내. 원본은 보관, 게시본만 최적화.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158399"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","아티클 상세"],["gallery.html","카테고리·태그 아카이브"],["about.html","비즈니스(광고주용) 페이지"]];
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
