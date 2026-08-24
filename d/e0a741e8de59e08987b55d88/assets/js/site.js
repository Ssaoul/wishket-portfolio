/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"큐브뎁스","brandSub":"CUBEDEPTH 3D Vision · Brand Blog Renewal Kit","nav":[["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]],"cats":["기술 원리","산업 적용사례","제품·사양","현장·사람","운영 공지"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"구조광과 ToF, 3D 측정 방식 비교","cat":"기술 원리","desc":"도식 3컷 + 비교표 1개가 고정 슬롯. 담당자는 표의 값과 캡션만 교체한다. 용어는 사내 표기 사전(포인트 클라우드·정합·측정편차)을 따른다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"포인트 클라우드 정합이 틀어지는 3가지 이유","cat":"기술 원리","desc":"실패 원인을 먼저 쓰고 대응을 붙이는 역순 구성. 기술 포스트 중 체류시간이 가장 긴 유형이라 상단 요약 박스를 넣었다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"이차전지 탭 정렬 검사 적용 기록","cat":"산업 적용사례","desc":"적용 라인 · 측정 대상 · 개선 항목 3단 고정. 발주처 고객사는 '이차전지 조립 A사'처럼 업종+알파벳 익명 표기 규칙을 적용한다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"물류 파렛트 적재 부피 측정 도입 기록","cat":"산업 적용사례","desc":"현장 사진 2장이 없을 때를 대비해 도면 기반 일러스트 대체안을 함께 설계. 자료가 최소일 때도 발행이 멈추지 않게 한다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"3D 스캔 센서 사양표(측정거리·정밀도·시야각)","cat":"제품·사양","desc":"사양표 모듈은 모바일에서 가로 스크롤 표로 전환. 단위 표기는 mm·μm·° 로 고정하고 소수점 자리수까지 가이드에 명시.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"설치 환경 체크리스트: 조명·진동·반사면","cat":"제품·사양","desc":"영업 담당자가 상담 때 링크로 던지는 용도. 체크박스 이미지 대신 텍스트 리스트로 만들어 복사·인용이 가능하게 했다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"비전 엔지니어의 하루 — 현장 셋업 기록","cat":"현장·사람","desc":"기술 포스트 사이의 완급 조절용. 인물 사진은 뒷모습·손 위주로 촬영 가이드를 제시해 초상 동의 부담을 줄인다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"블로그 리뉴얼 안내 및 지난 글 정리 공지","cat":"운영 공지","desc":"오픈 시 최상단 고정. 이관하지 않은 지난 글의 처리 방침(비공개 전환)과 문의 경로를 한 화면에 담는다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"대표 이미지 규격 초과 — 업로드 반려","type":"발행 실패","desc":"권장 폭을 넘긴 원본을 그대로 올려 썸네일이 잘렸다. 템플릿에 규격 안내 문구를 넣고, 리사이즈 프리셋 파일을 함께 납품한다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"사양표가 모바일에서 잘림","type":"반응형 예외","desc":"열 6개짜리 표가 좁은 화면에서 오른쪽이 사라졌다. 표 모듈을 가로 스크롤형으로 바꾸고, 열 4개 초과 시 카드형으로 전환하도록 규칙을 정했다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"고객사 실명 노출 요청 → 익명 표기로 반려","type":"검수 반려","desc":"적용사례에 실제 고객사명을 넣어달라는 요청이 들어왔다. 서면 동의 전에는 업종+알파벳 표기를 쓰도록 검수 단계에서 막는다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"위젯 스크립트 제한으로 인터랙션 미지원","type":"플랫폼 제약","desc":"3D 뷰어를 블로그 안에 직접 넣는 방식은 플랫폼 정책상 불가. 회전 이미지 4컷 + 외부 상세 링크로 대체하는 안을 시안에 포함했다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"지난 글 312건 중 이관 대상 96건","type":"이관 범위","desc":"전수 리뉴얼은 기간 안에 불가능하다. 유입 상위·사양 정보 포함 글만 선별해 이관하고, 나머지는 비공개 전환 후 단계적 재작성으로 합의한다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"담당자가 템플릿 밖 색상을 임의 사용","type":"운영 이탈","desc":"본문 강조색이 제각각이 되어 톤이 무너졌다. 편집 가능 슬롯을 14개로 못 박고, 색·타이포는 스킨에 고정해 편집기에서 건드릴 수 없게 했다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157858"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]];
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
