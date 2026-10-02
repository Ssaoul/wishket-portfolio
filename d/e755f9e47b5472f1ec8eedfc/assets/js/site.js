/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"온들파크","brandSub":"Ondeul Park · Screen Park Golf System","nav":[["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","제품 소개"],["about.html","렌탈/판매 안내"]],"cats":["시스템 본체","설치 패키지","렌탈 플랜","부속·소모품"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"온들 S1 스탠다드","cat":"시스템 본체","desc":"프로젝터·스윙 센서·전용 매트 일체형 1레인 구성. 경로당·소형 실내 공간 기준 모델입니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"온들 S2 듀얼레인","cat":"시스템 본체","desc":"2레인을 나란히 운영하는 구성. 동시 이용 인원이 많은 실내 체육시설과 매장용입니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"고정형 설치 패키지","cat":"설치 패키지","desc":"현장 실측 후 천장고·벽면 거리를 확인하고 설치합니다. 실측 전에는 설치 가능 여부를 확정하지 않습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"이동식 체험 패키지","cat":"설치 패키지","desc":"지역 축제·기업 행사용 조립식 부스. 반입 동선과 전원 위치만 확인되면 단기로 설치합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"월 렌탈 플랜","cat":"렌탈 플랜","desc":"약정 기간을 정해 월 단위로 이용하는 방식. 정기 점검 주기와 약정 중도 해지 조건을 조건표로 안내합니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"단기 행사 렌탈","cat":"렌탈 플랜","desc":"1일~2주 단위 대여. 행사 일정이 겹치면 대기 등록으로 접수됩니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"일시 구매","cat":"렌탈 플랜","desc":"본체와 설치를 한 번에 구매하는 방식. 견적은 실측 결과에 따라 문의 회신으로 안내합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"파크골프 볼·클럽 세트","cat":"부속·소모품","desc":"실내 센서 인식에 맞춘 전용 볼과 클럽 세트. 추가 구매 문의로 접수됩니다.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"교체용 스윙 매트","cat":"부속·소모품","desc":"사용량에 따라 교체하는 소모품. 기존 고객의 교체 요청도 같은 문의 폼에서 받습니다.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"문의 PG-1007 · 경로당 월 렌탈","type":"접수 완료","desc":"화성시 경로당 담당자가 S1 월 렌탈을 문의함. 관리자 화면에서 '확인 전' → '담당 배정'으로 상태 변경.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"문의 PG-1011 · 천장고 기준 미달","type":"설치 불가 판정","desc":"현장 실측 결과 천장고가 기준에 못 미쳐 고정형 설치 불가로 회신. 대안으로 이동식 체험 패키지를 안내하고 문의를 종결 대신 '대안 제안'으로 남김.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"문의 PG-1014 · 연락처 형식 오류","type":"접수 반려","desc":"휴대폰 번호 자릿수가 맞지 않아 폼 단계에서 제출이 막힘. 고객 화면에 어느 칸이 틀렸는지 표시하고 입력한 내용은 지우지 않음.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"문의 PG-1019 · 축제 단기 렌탈 일정 중복","type":"대기 등록","desc":"같은 주말에 이미 이동식 패키지 예약이 있어 확정 불가. 대기 순번 1번으로 등록하고 취소가 생기면 연락하는 흐름.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"문의 PG-1022 · 같은 고객 중복 접수","type":"중복 병합","desc":"같은 고객이 구매 문의를 두 번 남김. 관리자가 두 건을 한 건으로 합치고 메모 이력은 유지함.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 편집 · 메인 슬라이드 교체","type":"편집 범위","desc":"신규 사업 런칭 문구가 담긴 슬라이드 4장 중 2번째를 행사 안내 이미지로 교체. 관리자는 슬라이드·제품 카드·렌탈 조건표만 수정하고, 레이아웃은 고정됩니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158892"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","제품 소개"],["about.html","렌탈/판매 안내"]];
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
