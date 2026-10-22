/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"누리온정밀","brandSub":"Nurion Precision — Machined Parts & Assemblies for Industry","nav":[["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","제품 소개"],["about.html","연락처"]],"cats":["정밀 가공 부품","판금·브래킷","사출 금형","조립 모듈"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"NP-SH120 스테인리스 샤프트","cat":"정밀 가공 부품","desc":"CNC 선반으로 가공하는 SUS304 샤프트입니다. 외경 Ø8~Ø40 범위에서 도면 공차대로 맞춥니다. 소량 시제품부터 반복 생산까지 같은 공정으로 받습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"NP-BL45 알루미늄 블록","cat":"정밀 가공 부품","desc":"A6061 소재를 머시닝센터로 가공하는 하우징 블록입니다. 아노다이징 같은 표면처리를 함께 맡길 수 있습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"NB-L200 L형 장착 브래킷","cat":"판금·브래킷","desc":"SPCC 판재를 레이저로 자르고 절곡한 장비 고정용 브래킷입니다. 분체도장 색상은 사양서에서 고릅니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"NB-C310 제어함 커버","cat":"판금·브래킷","desc":"제어함 전면 커버 판금 부품입니다. 타공 위치와 통풍구 패턴은 도면 기준으로 맞춥니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"NM-2C 2캐비티 사출 금형","cat":"사출 금형","desc":"소형 플라스틱 부품용 2캐비티 금형입니다. 시사출 샘플을 확인한 뒤 양산으로 넘어갑니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"NM-R 금형 수리·보수","cat":"사출 금형","desc":"이미 쓰고 있는 금형의 마모 부위 보수와 부분 개조입니다. 금형 상태를 먼저 확인한 뒤 일정을 알려드립니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"NA-CV 컨베이어 가이드 모듈","cat":"조립 모듈","desc":"가공 부품과 판금 부품을 조립해 한 묶음으로 납품하는 가이드 모듈입니다. 조립 도면과 부품 목록(BOM)을 함께 받습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"NA-JG 검사 지그","cat":"조립 모듈","desc":"생산 라인에서 쓰는 위치 고정용 검사 지그입니다. 대상 부품 샘플이나 3D 파일을 받아 설계부터 진행합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"문의 #Q-1022-014 · 샤프트 견적 요청 정상 접수","type":"정상 접수","desc":"구매 담당자가 품번 NP-SH120 기준 수량 500개 견적을 남겼습니다. 접수 메일이 대표 메일함에 바로 도착했고, 방문자 화면에는 '접수 완료' 안내가 떴습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"문의 #Q-1022-017 · 도면 PDF 첨부 접수","type":"도면 첨부","desc":"브래킷 도면 PDF 2건(합계 6MB)을 첨부한 문의입니다. 메일 본문에는 다운로드 링크로, 관리자 화면에는 원본으로 남습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"문의 #Q-1022-019 · 첨부 용량 초과로 반려","type":"예외 · 업로드 실패","desc":"STEP 파일 48MB를 올리려다 제한(20MB)에 걸렸습니다. 문의는 막지 않고 '파일 없이 접수하고 회신 메일로 보내주세요'라고 안내합니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"문의 #Q-1022-021 · 메일 발송 실패 후 재발송","type":"예외 · 발송 실패","desc":"메일 서버 응답이 없어 알림 메일 발송에 실패했습니다. 문의는 관리자 화면에 '미발송'으로 남고, 담당자가 [재발송]을 눌러 처리했습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"문의 #Q-1022-023 · 필수 항목 누락","type":"예외 · 입력 오류","desc":"연락받을 이메일 형식이 잘못돼 제출이 막혔습니다. 다른 입력값은 지우지 않고 문제 항목만 빨간색으로 표시합니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"문의 #Q-1022-025 · 자동 등록 의심으로 보류","type":"예외 · 스팸 차단","desc":"3초 안에 링크 5개가 들어간 문의가 제출됐습니다. 메일은 보내지 않고 관리자 화면 '보류함'에만 남겨, 정상 문의가 섞였는지 사람이 확인할 수 있게 했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159225"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","제품 소개"],["about.html","연락처"]];
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
