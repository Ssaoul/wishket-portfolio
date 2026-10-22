/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"로안정밀","brandSub":"Roan Precision · Metal Parts & Assembly","nav":[["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","제품 소개"],["about.html","연락처"]],"cats":["CNC 가공품","판금·인클로저","조립 모듈","표면처리"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"RA-BK210 알루미늄 브래킷","cat":"CNC 가공품","desc":"AL6061 소재, 5축 가공. 장비 프레임 고정용 브래킷으로 도면 기준 공차 ±0.02mm 대응.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"RA-SH085 스테인리스 샤프트","cat":"CNC 가공품","desc":"SUS304 선반 가공품. 외경 Ø8~Ø85 범위, 소량 시제품부터 반복 생산까지 같은 공정으로 진행.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"RE-EN400 제어반 인클로저","cat":"판금·인클로저","desc":"SPCC 1.6t 절곡·용접 후 분체도장. 타공 위치는 고객 도면에 맞춰 변경 가능.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"RE-CV120 센서 커버","cat":"판금·인클로저","desc":"STS 0.8t 레이저 커팅·절곡. 외부 노출 부품이라 헤어라인 마감 옵션 제공.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"RM-LU300 리니어 유닛 서브조립","cat":"조립 모듈","desc":"가공 부품과 구매 부품(가이드·베어링)을 함께 조립해 모듈 단위로 납품하는 방식.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"RM-JG050 검사 지그","cat":"조립 모듈","desc":"생산 라인 검수용 위치 고정 지그. 제품 변경 시 교체 블록만 바꿔 쓰는 구조.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"아노다이징(경질·착색)","cat":"표면처리","desc":"알루미늄 가공품 대상. 협력 처리업체를 거쳐 진행하며, 색상과 두께는 문의 시 협의.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"분체도장","cat":"표면처리","desc":"판금·인클로저 대상. RAL 색상 지정 가능하고, 마스킹 범위는 도면에 표기 요청.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"INQ-2610-0031 · 브래킷 300개 견적 요청","type":"접수 완료","desc":"도면 PDF 1건 첨부. 담당자 메일 발송 성공, 관리자 화면에 '회신 대기'로 표시.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"INQ-2610-0034 · 인클로저 시제품 2대","type":"메일 발송 실패","desc":"관리자가 수신 주소를 바꾸다 오타를 입력해 발송이 반송됨. 접수 내용은 DB에 남아 있어 주소 수정 후 [재발송] 버튼으로 복구.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"INQ-2610-0036 · 3D 모델 첨부 문의","type":"첨부 거절","desc":"STEP 파일 48MB로 업로드 한도(20MB) 초과. 폼에서 즉시 안내하고, 파일은 회신 메일로 따로 받도록 유도.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"INQ-2610-0037 · 링크 다수 포함 메시지","type":"스팸 차단","desc":"본문에 외부 링크 6개가 들어 있어 자동 보류. 관리자가 확인한 뒤 삭제하거나 정상 문의로 전환.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"제품 소개 · 표면처리 페이지","type":"문구 미확정","desc":"소개 문구가 아직 안 들어온 상태. 방문자 화면에는 빈칸 대신 '사양 정리 중 · 문의 주시면 안내' 문구가 표시됨.","id":"C4","img":"assets/img/case-4.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159225"};
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
