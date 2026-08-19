/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"리갈그리드","brandSub":"LEGALGRID WORKS","cats":["대시보드","자동화","데이터 구조"],"caseCats":["구조 개선","대시보드","자동화"],"items":[{"name":"경영 현황 대시보드","cat":"대시보드","desc":"사건 단계별 진행 건수와 담당자 리소스 배분을 한 화면에서 확인합니다. 기간·담당자·사건 유형으로 필터링됩니다.","meta":"관리자 전용 뷰","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"내 업무 칸반","cat":"대시보드","desc":"담당자에게 할당된 사건을 접수·검토·출원·등록 단계로 끌어 옮기며 상태를 바꿉니다.","meta":"실무자 뷰","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"기한 캘린더","cat":"대시보드","desc":"의견제출 기한, 등록료 납부일 등 법정 기한을 월·주 단위로 펼쳐 봅니다. 임박 건은 색으로 구분됩니다.","meta":"월/주 전환","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"사건 접수 폼","cat":"대시보드","desc":"고객·출원 정보를 입력 순서에 맞춰 받는 맞춤 폼입니다. 필수값이 비면 다음 단계로 넘어가지 않습니다.","meta":"필수값 검증","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"기한 D-Day 리마인드","cat":"자동화","desc":"법정 기한 도래 전 정해진 시점에 담당자와 관리자에게 알림을 보냅니다.","meta":"기한 기준 스케줄","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"상태 변경 담당자 배정","cat":"자동화","desc":"사건 상태가 바뀌면 규칙에 따라 담당자를 배정하고 사내 메신저로 알립니다.","meta":"상태 트리거","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"하위 태스크 자동 생성","cat":"자동화","desc":"출원 완료 등 조건이 충족되면 후속 업무를 템플릿대로 만들어 붙입니다.","meta":"조건 트리거","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"필수값 누락 알림","cat":"자동화","desc":"레코드에 빠진 필수 항목이 있으면 담당자에게 조건부 알림을 보냅니다.","meta":"데이터 무결성","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"고객–사건–담당자 관계망","cat":"데이터 구조","desc":"중복 입력을 없애고 링크·룩업·롤업으로 연결한 테이블 구조를 도식으로 보여줍니다.","meta":"스키마 다이어그램","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"테이블 정규화 전·후","type":"구조 개선","desc":"한 테이블에 몰려 있던 고객·사건 정보를 분리하고 링크 필드로 연결한 결과를 나란히 비교합니다.","sub":"전·후 비교","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"데이터 이관 매핑표","type":"구조 개선","desc":"기존 필드가 새 스키마의 어느 필드로 옮겨가는지 항목별로 대응시킨 표입니다.","sub":"필드 매핑","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"롤업·룩업 설계","type":"구조 개선","desc":"사건 건수, 최근 진행일 같은 파생 값을 계산 필드로 끌어올린 구성입니다.","sub":"파생 필드","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"관리자 통계 화면","type":"대시보드","desc":"진행 단계 분포와 담당자별 부하를 차트로 그린 화면입니다.","sub":"권한 분리 적용","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"자동화 플로우 도식","type":"자동화","desc":"트리거·조건·액션 순서로 정리한 자동화 흐름도입니다. 각 단계의 분기 조건을 함께 표기합니다.","sub":"트리거–액션","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"알림 문안 템플릿","type":"자동화","desc":"기한 리마인드와 배정 알림에 쓰이는 메시지 서식과 변수 목록입니다.","sub":"메신저 연동","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157736"};
  function chrome(active){
    var nav = [['index.html','홈'],['catalog.html',"제품·서비스"],['gallery.html',"시공·구축 사례"],['about.html','회사 소개'],['admin.html','관리자']];
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
      + '<div><b style="color:#fff">메뉴</b><div style="margin-top:8px"><a href="catalog.html">'+D.labels.catalog+'</a> · <a href="gallery.html">'+D.labels.gallery+'</a> · <a href="about.html">회사 소개</a></div></div></div>'
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
