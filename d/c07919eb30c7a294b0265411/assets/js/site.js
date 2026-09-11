/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"루미에르 보타닉","brandSub":"Botanical Skincare — Rebranding Detail Page Guide","nav":[["index.html","개요"],["catalog.html","제품 상세페이지"],["gallery.html","제품 소개 영역"],["about.html","제품 정보 영역"]],"cats":["메인 비주얼","제품 소개","제품 정보","업로드 서식"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"메인 비주얼 — 리프레싱 세럼","cat":"메인 비주얼","desc":"발주사 제공 촬영컷 1장을 상단 전면에 두고 브랜드 카피 한 줄만 얹는 구성. 세로 1400px, 텍스트는 이미지 위 오버레이가 아니라 여백에 배치해 규격 변경 시 재작업을 줄입니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"메인 비주얼 — 딥모이스처 크림","cat":"메인 비주얼","desc":"질감 클로즈업컷을 쓰는 대안 레이아웃. 같은 브랜드 톤을 쓰되 제품 성격이 달라 여백 비율과 서체 크기를 한 단계 조정한 버전입니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"기획안 카피 → 섹션 매핑표","cat":"제품 소개","desc":"발주사 기획안의 문단 번호를 디자인 섹션 번호에 1:1로 붙인 표. '3번 문단이 어디로 갔나'를 담당자가 직접 확인할 수 있게 만든 장치입니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"사용 전후 설명 블록","cat":"제품 소개","desc":"이미지 2컷 + 설명 텍스트 구성. 효능을 단정하는 표현 대신 사용 방법과 사용감 서술 위주로 잡아 화장품 표시·광고 기준을 넘지 않게 합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"전성분 표기 영역","cat":"제품 정보","desc":"전성분 전체를 작은 본문으로 넣되 행간·글자크기를 모바일 가독 기준으로 고정. 성분 문자열이 길어져도 레이아웃이 무너지지 않도록 자동 줄바꿈 영역으로 설계.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"용량·사용법·주의사항 표","cat":"제품 정보","desc":"용량 50mL / 사용 순서 3단계 / 보관 주의 문구를 한 표에 묶은 블록. 2종이 같은 표 구조를 쓰므로 이후 제품이 늘어도 값만 갈아끼우면 됩니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"업로드 분할 가이드","cat":"업로드 서식","desc":"긴 상세 이미지를 홈페이지 게시 규격에 맞춰 나눈 예시. 분할선이 글자나 얼굴을 가르지 않도록 자르는 위치를 표시해 둡니다. 실제 형식·해상도는 계약 후 협의.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"웹 최적화 결과 비교","cat":"업로드 서식","desc":"원본 대비 압축본의 용량과 화면 차이를 나란히 둔 비교 블록. '가볍게 하면 흐려지지 않나'라는 질문에 숫자로 답하기 위한 자료입니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"폰트·컬러 정리 시트","cat":"업로드 서식","desc":"사용 서체 2종과 컬러 코드, 라이선스 범위를 한 장으로 정리. 납품물에 포함되며 이후 담당자가 다른 페이지를 만들 때 그대로 씁니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"D+2 — 방향 시안 2안 제시","type":"중간 확인","desc":"완성본이 아니라 톤 방향만 보는 단계입니다. 2안 중 하나를 고르거나 '둘 다 아니다'를 말할 수 있는 시점을 일부러 초반에 둡니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"D+5 — 1종 전체 초안 확인","type":"중간 확인","desc":"먼저 1종만 끝까지 만들어 보여드립니다. 여기서 구조가 확정되면 나머지 1종은 같은 틀로 빠르게 갑니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"D+9 — 수정 반영본 확인","type":"중간 확인","desc":"수정 주간의 중간 지점. 남은 회차로 처리 가능한 범위인지 이 시점에 같이 판단합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"기획안 카피가 디자인 분량을 초과","type":"예외","desc":"합성 예시 — 소개 문단이 배치 가능한 분량보다 길어 3줄이 잘리는 상황. 임의로 줄이지 않고 '이 문장까지만 들어갑니다'를 표시해 담당자가 직접 고르도록 되돌립니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"제공 촬영컷 해상도 부족","type":"예외","desc":"합성 예시 — 메인 비주얼용 1컷이 가로 1200px이라 확대 시 흐려지는 경우. 재촬영 요청 대신 크롭 축소안과 원본 유지안을 함께 내고, 재촬영이 필요하면 D+2에 알립니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"확정 후 뒤집힌 방향 변경","type":"예외","desc":"합성 예시 — D+5 확정 뒤 톤을 바꾸자는 요청. 2주 안에서는 전면 변경이 어려우므로 '이번에 반영 가능한 범위'와 '다음 건으로 넘길 범위'를 나눠 적어 드립니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"상품","gallery":"스타일 · 후기","item":"상품","case":"스타일"},"projectId":"158238"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","제품 상세페이지"],["gallery.html","제품 소개 영역"],["about.html","제품 정보 영역"]];
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
