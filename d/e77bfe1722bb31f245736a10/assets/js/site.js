/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"모아보드","brandSub":"Customer Dashboard for Growing Teams","nav":[["index.html","개요"],["catalog.html","서비스 소개 랜딩페이지"],["gallery.html","주요 기능 소개"],["about.html","도입 사례"]],"cats":["히어로·소개","기능 소개","문의·전환","부가 페이지","반응형 대응"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"히어로 — 고객 흐름 한 화면","cat":"히어로·소개","desc":"대제목·부제·CTA 문구와 배경 이미지를 관리자가 교체. 디졸브 등장 1회, 모바일에서는 이미지 높이를 줄여 첫 화면에 CTA 노출.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"대시보드 미리보기","cat":"기능 소개","desc":"파이프라인·고객 카드·일정 세 탭을 호버로 전환. 태블릿 이하는 탭 대신 세로 나열. 탭 이름·설명·캡처 이미지만 편집 가능, 레이아웃은 고정.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"기능 카드 6종","cat":"기능 소개","desc":"고객 카드 · 영업 단계 · 메모·알림 · 담당자 배정 · 보고서 · 외부 메신저 연동. 카드 추가·삭제·순서 변경을 관리자에게 허용, 최대 8개.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"도입 사례 3건","cat":"기능 소개","desc":"업종·규모·사용 기능을 적은 카드. 성과 수치 칸은 비워 두고 발주처가 실제 사례를 넣기 전까지 '합성 데이터' 라벨 유지.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"문의 폼","cat":"문의·전환","desc":"회사명·담당자·연락처·팀 규모·문의 내용. 제출 시 서버 함수가 메일 발송, DB 저장 없음. 개인정보 수집 동의 체크 필수.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"접수 완료·실패 화면","cat":"문의·전환","desc":"접수번호 Q-2026-1012-03 형식으로 완료 안내. 메일 발송 실패 시 '다시 시도' 와 입력값 보존, 콘솔이 아닌 화면에 사유 표시.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"개인정보처리방침","cat":"부가 페이지","desc":"본문을 마크다운으로 관리자가 수정. 개정일자 자동 표기. 범위 산정에서 제외되는 부가 페이지로 분류.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"404 · 500 에러페이지","cat":"부가 페이지","desc":"브랜드 톤 유지한 안내문과 홈·문의 링크. 500 은 문의 폼 서버 함수 오류 때도 같은 페이지로 수렴.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"분기점 규칙표","cat":"반응형 대응","desc":"PC 1280 이상 · 태블릿 768~1279 · 모바일 767 이하. Figma 의 PC·MO 두 시안 사이 태블릿은 PC 그리드를 8컬럼으로 축소해 해석.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"Figma 폰트가 웹에 없는 경우","type":"예외","desc":"시안 서체가 웹폰트로 제공되지 않아 대체 서체를 제안하고, 자간·행간 보정값을 가이드에 기록한 뒤 디자이너 확인을 받는 절차를 화면에 표기.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"문의 메일 발송 실패","type":"실패","desc":"메일 서버 응답 지연으로 전송이 끊긴 상황. 입력값을 지우지 않고 재시도 버튼을 제공하며, 3회 실패 시 대표 메일 주소를 직접 안내.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"봇의 반복 제출","type":"예외","desc":"숨김 필드(honeypot)와 10초 내 재제출 제한으로 차단. 정상 사용자는 체감하지 않도록 캡차는 쓰지 않음.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"태블릿에서 기능표 넘침","type":"예외","desc":"6열 비교표가 768px 에서 가로로 넘쳐, 열을 2단으로 접고 좌우 스크롤 힌트를 추가. PC·MO 시안 사이 공백 구간을 미리 합의하는 사례.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"호버 애니메이션의 모바일 대체","type":"성공","desc":"PC 호버로 전환되는 미리보기 탭을 모바일에서는 탭 터치로 바꾸고, 디졸브는 스크롤 진입 1회로 제한해 성능 저하를 피함.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 범위 초과 요청","type":"예외","desc":"운영 중 '카드 12개로 늘리기' 요청이 들어온 상황. 최대 8개 제한을 화면에 안내하고 레이아웃 변경은 개발 범위로 넘기는 경계를 보여 줌.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"핵심 기능","gallery":"활용 사례","item":"기능","case":"사례"},"projectId":"159014"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","서비스 소개 랜딩페이지"],["gallery.html","주요 기능 소개"],["about.html","도입 사례"]];
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
