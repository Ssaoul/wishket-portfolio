/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"로컬핀","brandSub":"Region-first Service Site with SEO-ready CMS","nav":[["index.html","개요"],["catalog.html","지역별 서브 페이지(랜딩페이지)"],["gallery.html","관리자 페이지 (CMS) 템플릿 에디터"],["about.html","페이지별 SEO 메타태그 커스텀"]],"cats":["서울","경기","부산","검수 필요"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"/seoul/gangnam — 강남구","cat":"서울","desc":"게시됨 · Title 32자 · H1 '강남구 방문 서비스 예약' · LocalBusiness Schema 삽입 · 사이트맵 포함","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"/seoul/mapo — 마포구","cat":"서울","desc":"게시됨 · 템플릿 v2 적용 · 서비스 가능 동 목록 12개 · 최근 수정 2026.10.05 마케팅 담당","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"/gyeonggi/seongnam/bundang — 분당구","cat":"경기","desc":"게시됨 · 상위 지역(성남시) 페이지와 내부 링크 연결 · 이미지 지연 로딩 적용","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"/gyeonggi/suwon — 수원시","cat":"경기","desc":"임시저장 · Description 미입력 → 게시 버튼 비활성, '메타 설명을 입력하세요' 경고 표시","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"/busan/haeundae — 해운대구","cat":"부산","desc":"게시됨 · 서비스 지역 범위 '해운대구 전역(일부 동 제외)' 문구 · FAQ Schema 3문항","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"/busan/suyeong — 수영구","cat":"부산","desc":"예약 게시 2026.10.10 09:00 · 게시 전까지 noindex, 사이트맵 제외","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"/seoul/songpa — 송파구","cat":"검수 필요","desc":"H1이 강남구 페이지와 동일 → 중복 H1 경고. 템플릿 복제 후 지역명을 치환하지 않음","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"/gyeonggi/yongin — 용인시","cat":"검수 필요","desc":"본문 180자로 얇은 콘텐츠 경고. 지역 고유 문단(교통·서비스 가능 동)을 채워야 게시 가능","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"/busan/busanjin — 부산진구","cat":"검수 필요","desc":"Title 71자로 검색 결과에서 잘릴 가능성 높음 · 미리보기에 말줄임 표시","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"슬러그 변경 시 기존 URL 보존","type":"리다이렉트","desc":"'/seoul/kangnam' 오타를 '/seoul/gangnam'으로 고치면 이전 주소는 301로 자동 연결되고, 사이트맵은 새 URL만 남깁니다. 리다이렉트 이력은 관리자에서 확인합니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"봇이 보는 HTML 확인","type":"테크니컬 SEO","desc":"관리자 '크롤러 미리보기'에서 자바스크립트 실행 없이 받은 HTML에 H1·본문·Schema가 들어 있는지 보여줍니다. 비어 있으면 게시 전에 빨간 경고가 뜹니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"예약 접수 실패 건 #R-20261006-0147","type":"예외 처리","desc":"전화번호 형식 오류로 저장되지 않은 접수입니다. 사용자 화면에 입력 오류를 안내하고, 관리자 목록에는 '미완료'로 남겨 마케팅 담당자가 이탈 지점을 볼 수 있게 했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"서비스 불가 지역 문의","type":"예외 처리","desc":"'부산 기장군' 문의는 대상 지역이 아니므로 자동 응답으로 안내하고 '권역 외' 태그를 붙입니다. 쌓인 문의는 다음 지역 페이지 후보 목록으로 넘어갑니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"관리자 로그인 5회 실패 잠금","type":"보안","desc":"비밀번호 연속 오류 시 계정을 15분간 잠그고 접근 기록을 남깁니다. 편집자 권한은 지역 페이지만 수정할 수 있고, 도메인·robots.txt 설정은 관리자만 바꿀 수 있습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"HTTP 접속 강제 전환","type":"인프라","desc":"http:// 와 www 없는 주소로 들어와도 대표 주소 하나(https)로 301 전환해, 같은 페이지가 여러 주소로 색인되는 일을 막습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158901"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","지역별 서브 페이지(랜딩페이지)"],["gallery.html","관리자 페이지 (CMS) 템플릿 에디터"],["about.html","페이지별 SEO 메타태그 커스텀"]];
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
