/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"봄여울 시니어유학","brandSub":"Second Spring Study Abroad for 55+ Learners","nav":[["index.html","개요"],["catalog.html","회사 소개 및 프로그램 안내"],["gallery.html","국가별 상품 리스트"],["about.html","상품 상세 페이지"]],"cats":["뉴질랜드","몰타","비공개(준비 중)"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"NZ-01 오클랜드 4주 생활영어 어학연수","cat":"뉴질랜드","desc":"오전 소규모 수업과 오후 자유 일정으로 구성했습니다. 홈스테이 또는 레지던스 중에서 고를 수 있고, 출국 전 화상 오리엔테이션이 2회 있습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"NZ-02 크라이스트처치 정원·원예 문화 탐방 2주","cat":"뉴질랜드","desc":"현지 정원 견학과 원예 클래스를 함께 듣는 문화 탐방형 프로그램입니다. 걷는 구간을 짧게 잡고 일정마다 쉬는 시간을 넣었습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"NZ-03 웰링턴 8주 한 달 살기 + 어학 과정","cat":"뉴질랜드","desc":"앞의 4주는 어학 수업, 뒤의 4주는 현지 생활 체험으로 진행합니다. 장기 체류를 고민하는 분을 위해 단계별로 설계했습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"MT-01 몰타 발레타 3주 시니어 영어반","cat":"몰타","desc":"50세 이상만 모인 반에서 수업합니다. 반 정원은 8명이며 일상 회화 위주로 배웁니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"MT-02 몰타 지중해 역사·건축 문화 탐방 10일","cat":"몰타","desc":"구시가지와 성채를 해설사와 함께 둘러보는 여행형 프로그램입니다. 이동은 전용 차량으로 해서 걷는 부담을 줄였습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"MT-03 몰타 6주 어학 + 요리 클래스","cat":"몰타","desc":"오전에는 영어 수업을 듣고, 주 2회 현지 가정식 요리 클래스에 참여합니다. 숙소는 학교에서 도보 10분 거리입니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"NZ-04 퀸스타운 사진 여행 2주 (작성 중)","cat":"비공개(준비 중)","desc":"관리자가 임시 저장한 상품입니다. 대표 사진이 아직 없어 공개 버튼이 꺼져 있으며, 사이트에는 노출되지 않습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1}],"cases":[{"title":"직원이 새 상품을 사진·글만으로 등록","type":"관리자 · 정상","desc":"상품명, 국가, 기간, 대표 사진, 소개글을 입력하고 '공개'를 누르면 국가별 리스트에 바로 나타납니다. 코드를 다룰 일이 없습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"상담 링크를 한 곳에서 바꾸면 전 페이지에 반영","type":"관리자 · 정상","desc":"설정 화면에서 오픈채팅 링크 하나만 고치면 모든 상품 상세와 하단 고정 버튼의 상담 링크가 함께 바뀝니다. 페이지마다 따로 고칠 필요가 없습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"오픈채팅 링크 만료 · 상담 버튼 대체 안내","type":"예외 · 링크 오류","desc":"등록된 링크가 만료되거나 잘못 입력되면 관리자 화면에 경고가 뜹니다. 고객 화면에서는 버튼 대신 '상담 연결 준비 중' 안내와 대체 문의 경로를 보여줍니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"사진 용량 초과로 업로드 거부","type":"예외 · 입력 오류","desc":"휴대폰 원본 사진(8MB)을 올리면 '사진이 너무 큽니다' 안내가 뜨고 자동 축소를 제안합니다. 페이지가 느려지는 것을 미리 막습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"필수 항목 누락 시 공개 차단","type":"예외 · 검증","desc":"대표 사진이나 기간이 비어 있으면 공개 버튼이 꺼지고 빠진 항목을 빨간 글씨로 알려줍니다. 작성 중이던 내용은 임시 저장으로 남습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"모집 마감 상품은 삭제 대신 '마감' 표시","type":"운영 · 상태 전환","desc":"모집이 끝난 상품은 삭제하지 않고 '이번 기수 마감' 배지로 바꿉니다. 이미 링크를 받은 고객이 빈 페이지를 보지 않게 하기 위해서입니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158847"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개 및 프로그램 안내"],["gallery.html","국가별 상품 리스트"],["about.html","상품 상세 페이지"]];
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
