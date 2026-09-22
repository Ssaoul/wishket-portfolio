/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"메리디안 캐피털 리서치","brandSub":"Meridian Research — Multilingual Investment Insight Site","nav":[["index.html","개요"],["catalog.html","원페이지 스크롤 메인 화면"],["gallery.html","성과 서브 페이지"],["about.html","고지문 서브 페이지"]],"cats":["메인 섹션","서브 페이지","오버레이·쿠키","관리자 교체 항목"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"히어로 — 팀 소개 한 문장","cat":"메인 섹션","desc":"EN 62자 / KO 38자 / 繁中 24자. 언어별 폰트 크기를 각각 두고 줄바꿈 지점을 고정했습니다. 번체중문은 자간을 넓혀 한 줄을 유지합니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"투자 프로세스 4단계","cat":"메인 섹션","desc":"리서치 → 후보 선별 → 포트폴리오 구성 → 점검. PC는 가로 4열, 모바일은 세로 카드로 접힙니다. 제공된 색상 가이드의 강조색만 사용.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"성과 차트 이미지 영역","cat":"메인 섹션","desc":"제공받은 차트 이미지를 그대로 삽입. 모바일에서는 가로 스크롤 대신 확대 보기 버튼으로 처리해 축소로 인한 가독성 저하를 피합니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"PDF 보고서 다운로드","cat":"메인 섹션","desc":"관리자가 올린 최신 파일로 자동 연결. 파일 교체 시 링크 수정 불필요. 파일 미등록이면 버튼이 비활성 상태로 표시됩니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"외부 프로필 링크","cat":"메인 섹션","desc":"비즈니스 인맥 플랫폼 프로필로 새 창 연결. rel=\"noopener nofollow\" 적용 — 검색엔진 차단 정책과 어긋나지 않게 처리.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"성과 서브 페이지","cat":"서브 페이지","desc":"연도별 차트 이미지 3장과 주석. 주석 문안은 언어별로 길이 차가 커서 이미지 하단 고정이 아니라 별도 블록으로 분리했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"전체 고지문 페이지","cat":"서브 페이지","desc":"제공된 고지 원문 전문. 긴 문단이라 모바일 행간을 1.8로 올리고, 조항 번호를 왼쪽 밖으로 빼 본문 폭을 유지합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"최초 방문 고지 오버레이","cat":"오버레이·쿠키","desc":"Enter / Exit 중 하나를 반드시 눌러야 닫힙니다. 바깥 클릭·Esc·뒤로가기 모두 막았고, Exit 선택 시 빈 안내 페이지로 이동합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"문의 양식","cat":"메인 섹션","desc":"이름·소속 기관·이메일·문의 내용 4개 항목. 스팸 방지 위젯 통과 후에만 전송 버튼이 활성화되고, 수신 메일 주소는 관리자에서 변경합니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"번체중문 전환 — 히어로 제목이 두 줄로 접힘","title_note":"","type":"언어별 레이아웃","desc":"기본 폰트 크기에서 繁中 제목이 모바일 390px 폭에서 두 줄이 됐습니다. 언어별 크기 토큰을 분리해 繁中만 4px 줄여 한 줄로 복구. 해결됨.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"Exit 선택 후 재방문 — 오버레이가 다시 뜸","type":"쿠키 예외","desc":"Exit 은 동의가 아니므로 쿠키를 남기지 않도록 설계했습니다. 30일 쿠키는 Enter 선택에만 기록됩니다. 의도된 동작이며 화면에 근거를 표시했습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"시크릿 모드 방문 — 쿠키 저장 실패","type":"실패 사례","desc":"쿠키 차단 브라우저에서는 매 방문마다 오버레이가 뜹니다. 우회하지 않았습니다 — 동의 없이 통과시키는 것이 더 큰 위험이라 판단했습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"서버 헤더 미적용 — 정적 호스팅 구간","type":"실패 사례","desc":"meta robots 는 적용됐으나 이미지·PDF 직접 URL에는 X-Robots-Tag 가 붙지 않았습니다. 점검 화면에 ⚠ 로 표시되며, 호스팅 방식 선택 시 헤더 설정 가능 여부가 판단 기준이 됩니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"관리자 PDF 교체 — 40MB 업로드 거절","type":"관리자 예외","desc":"용량 상한(20MB) 초과로 저장되지 않았고, 기존 파일은 그대로 유지됐습니다. 교체 도중 링크가 끊기지 않도록 새 파일 검증 후 교체합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"문안 수정 중 언어 하나 누락","type":"관리자 예외","desc":"한국어만 고치고 영문·번체중문을 비워 두면 저장 시 경고가 뜨고, 비어 있는 언어는 이전 문안을 유지합니다. 빈 화면이 공개되지 않게 막는 장치입니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158685"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","원페이지 스크롤 메인 화면"],["gallery.html","성과 서브 페이지"],["about.html","고지문 서브 페이지"]];
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
