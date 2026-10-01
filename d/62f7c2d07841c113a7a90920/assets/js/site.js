/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"다시봄 스쿨","brandSub":"Second Spring Study Abroad for Active Seniors","nav":[["index.html","개요"],["catalog.html","회사 소개 및 프로그램 안내 페이지"],["gallery.html","국가별 여행/유학 상품 리스트"],["about.html","상품 상세 페이지"]],"cats":["뉴질랜드","몰타","관리자 편집","상담 연결"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"오클랜드 4주 어학연수 · 홈스테이형","cat":"뉴질랜드","desc":"상품코드 NZ-01. 오전 영어 수업과 오후 현지 문화 체험. 현지 가정 홈스테이, 공항 픽업 포함. 상세 페이지에 하루 일과표와 준비물을 정리했습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"퀸스타운 2주 자연·영어 프로그램","cat":"뉴질랜드","desc":"상품코드 NZ-02. 걷기 난이도를 '낮음/보통'으로 표시해 체력 걱정을 미리 덜어 줍니다. 오전 수업, 오후 호수 산책과 정원 탐방.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"크라이스트처치 8주 장기 연수","cat":"뉴질랜드","desc":"상품코드 NZ-03. 레지던스 숙소에 개인 욕실을 갖췄습니다. 현재 '모집 마감' 상태라 목록에서는 흐리게 보이고, 상세 페이지에는 '다음 일정 상담' 버튼이 나옵니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"몰타 발레타 3주 영어 + 지중해 문화","cat":"몰타","desc":"상품코드 MT-01. 50세 이상 전용 반으로 운영. 오전 수업 뒤 구시가지 해설 투어를 합니다. 출발 가능일을 달력 형태로 안내합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"몰타 슬리에마 2주 단기 체험","cat":"몰타","desc":"상품코드 MT-02. 해안 산책로 근처 호텔형 숙소. 처음 해외연수를 가는 분을 위한 입문 상품이며 비자 없이 다녀올 수 있는 기간으로 구성했습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"몰타 고조섬 6주 한 달 살기형","cat":"몰타","desc":"상품코드 MT-03. 주 3회 수업과 자유 일정을 섞은 체류형 상품. 대표 사진이 아직 등록되지 않아 관리자 화면에 '이미지 필요' 경고가 떠 있는 상태로 보여 줍니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"상품 등록 3단계 편집기","cat":"관리자 편집","desc":"① 사진 올리기 ② 제목·기간·포함사항 입력 ③ 공개/비공개 선택. 코드 화면 없이 입력칸만 보이고, 저장 전 미리보기로 실제 상세 페이지 모습을 확인합니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"오픈채팅 상담 링크 일괄 관리","cat":"상담 연결","desc":"설정 화면 한 곳에서 링크를 바꾸면 전 페이지 상담 버튼에 바로 반영됩니다. 상품별로 다른 상담방을 연결하는 개별 링크 지정도 지원합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"상담 링크 만료 감지","type":"예외 처리","desc":"오픈채팅방을 새로 만들어 기존 링크가 끊긴 상황입니다. 관리자 대시보드에 '상담 링크 확인 필요' 알림이 뜨고, 고객 화면에는 끊긴 링크 대신 대체 상담 안내가 나옵니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"모집 마감 상품 처리","type":"운영 시나리오","desc":"NZ-03을 마감으로 바꾸면 목록 맨 뒤로 내려가고 '마감' 표시가 붙습니다. 삭제하지 않고 남겨 두어 다음 기수 모집 때 날짜만 고쳐 다시 엽니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"대표 사진 없이 공개 시도","type":"입력 검증","desc":"MT-03처럼 사진이 비어 있는 상품을 공개하려 하면 저장이 막히고 '대표 사진 1장이 필요합니다'라는 안내가 나옵니다. 빈 화면이 고객에게 노출되지 않습니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"글자 크기 키우기 버튼","type":"시니어 UX","desc":"모든 페이지 상단의 '글자 크게' 버튼으로 본문을 한 단계 더 키웁니다. 휴대폰 화면에서도 상담 버튼은 화면 아래에 고정되어 손이 잘 닿습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"너무 긴 상품 제목 입력","type":"입력 검증","desc":"제목이 두 줄을 넘기면 목록 카드가 어긋납니다. 입력칸에 글자 수 안내가 나오고, 넘치면 미리보기에서 잘린 모습을 먼저 보여 줘 직원이 직접 고칠 수 있습니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"국가 추가 시 메뉴 자동 생성","type":"확장 시나리오","desc":"세 번째 국가를 등록하면 상단 메뉴와 국가별 목록 페이지가 자동으로 생깁니다. 사업이 늘어나도 개발자를 다시 부르지 않고 직원이 직접 확장합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158847"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개 및 프로그램 안내 페이지"],["gallery.html","국가별 여행/유학 상품 리스트"],["about.html","상품 상세 페이지"]];
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
