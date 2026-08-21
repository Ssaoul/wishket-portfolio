/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"스톤포지 머시너리 코리아","brandSub":"Stoneforge Machinery Korea — HQ Site Localization Demo","nav":[["index.html","개요"],["catalog.html","전체 항목"],["gallery.html","사례"],["about.html","소개"]],"cats":["제품","회사소개","서비스·부품","자료실","문의"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"트롬멜 스크린 TS-620 제품 상세","cat":"제품","desc":"PG-PR-012 · 원문 경로 /products/trommel-screens · 스펙표 27행. ft·in / lbs 를 mm·kg 로 환산하고 원문 수치를 괄호 병기. 상태: 국문 검수 완료","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"저속 슈레더 SH-210 제품 상세","cat":"제품","desc":"PG-PR-018 · 스펙 시트 PDF 4종이 본사 서버 직링크. 국내 미디어 라이브러리로 재업로드 필요. 상태: 자산 확보 대기","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"스크리닝 장비 목록","cat":"제품","desc":"PG-PR-002 · GNB 2뎁스 카드 12종. 카드 제목이 2줄로 늘어 원문 3열 그리드에서 높이 불일치 → 카드 최소 높이 고정. 상태: 퍼블리싱 완료","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"스택 컨베이어 CV-80 제품 상세","cat":"제품","desc":"PG-PR-024 · 원문 360° 뷰어 스크립트가 본사 도메인 전용. 정지 이미지 8컷 갤러리로 대체 제안. 상태: 협의 필요","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"회사 소개 · 본사 연혁","cat":"회사소개","desc":"PG-CO-002 · 본사 기준 문단을 국내 딜러십 관점으로 옮길지 원문 그대로 둘지 표현 확인 필요. 상태: 발주처 확인 요청","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"서비스 네트워크 안내","cat":"서비스·부품","desc":"PG-SV-005 · 원문의 글로벌 딜러 지도 위젯은 해외 지사 데이터 기반. 국내 서비스 거점 정적 표기로 대체 제안. 상태: 협의 필요","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"순정 부품·소모품 안내","cat":"서비스·부품","desc":"PG-SV-011 · 부품 번호 체계(예: SP-2140-A)는 번역하지 않고 원문 표기 유지. 설명문만 국문화. 상태: 국문 1차 완료","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"카탈로그·브로슈어 자료실","cat":"자료실","desc":"PG-DL-001 · 다운로드 파일 12종은 영문 원본 유지, 목록에 국문 요약 한 줄 추가. 상태: 파일 수급 대기","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"제품 문의하기","cat":"문의","desc":"PG-CT-001 · 원문은 외부 마케팅 폼 위젯 임베드. 워드프레스 기본 폼 + 국내 개인정보 수집 동의 체크로 재구성. 상태: 검토 중","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"히어로 배너 문구가 국문에서 3줄로 늘어남","type":"레이아웃","desc":"영문 원문 42자 → 국문 번역 후 줄바꿈이 늘어 배경 이미지 위 텍스트가 버튼을 밀어냄. 모바일 375px 에서 CTA 가 잘림. 대응: 배너 텍스트 영역 높이 가변 처리 + 국문 카피 축약안 2개 제시","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"본사 서버 직링크 이미지가 국내에서 로드 실패","type":"자산","desc":"제품 상세 6쪽의 고해상 이미지가 본사 CDN 을 직접 참조. 국내 접속 시 간헐적 로드 실패 확인. 대응: 원본 파일 전달받아 워드프레스 미디어에 재업로드, 실패 시 대체 이미지 노출","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"스펙 단위 표기 규칙 충돌","type":"용어","desc":"원문 혼용(예: 1,200 mm / 47 in). 국문 표기를 mm 단일로 갈지 원문 병기로 갈지에 따라 표 폭이 달라짐. 대응: 용어집에 규칙 고정 후 전 페이지 일괄 적용, 확정 전까지 표는 병기 상태로 보류","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"원문 사이트가 이관 도중 갱신됨","type":"동기화","desc":"작업 3주차에 원문 제품 목록에 신규 모델 1종 추가. 카피 기준 시점을 정하지 않으면 검수 때마다 불일치가 재발. 대응: 스냅샷 기준일 고정 + 이후 변경분은 별도 목록으로 분리 보고","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"외부 폼 위젯이 그대로 이관되지 않음","type":"규정","desc":"원문 문의 폼은 해외 마케팅 도구 임베드라 국내 개인정보 수집·이용 동의 절차가 없음. 그대로 복사하면 국내 운영에 부적합. 대응: 동일 레이아웃 유지하되 폼만 교체하고 동의 체크박스 추가","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 중 원본 레이아웃이 깨짐","type":"운영","desc":"이관 후 담당자가 제품 설명을 길게 수정하자 3열 카드 정렬이 어긋남. 대응: 편집 가능 영역을 텍스트·이미지·표 값·다운로드 링크 4곳으로 제한하고, 나머지 구조는 템플릿으로 잠금","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157830"};
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
