/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"태강정밀","brandSub":"Structural Steel OEM & BLDC Hybrid Heating Systems","nav":[["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","보유 기술/특허"],["about.html","주요 제품 카탈로그"]],"cats":["철구조물 OEM","환경설비","BLDC 신사업","보유 장비","인증·특허"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"플랜트 철골 구조물 (H형강 조립보)","cat":"철구조물 OEM","desc":"도면 지급 방식 OEM. 발주처 승인도 기준 제작·도장·현장 반출까지. 납품 실적 문구는 발주처 확인 후 기재 예정.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"덕트·플랜트 배관 지지 구조물","cat":"철구조물 OEM","desc":"용접 사양서에 따른 제작. 제품 사진 미확보 — 촬영 또는 기존 현장 사진 제공 필요.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"악취제거기 (스크러버형)","cat":"환경설비","desc":"자사 제작 환경설비. 처리 용량·설치 조건은 모델별 표로 정리 예정. 현재 카탈로그 원본 대기 중.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"BLDC Type Hybrid Magnet Boiler","cat":"BLDC 신사업","desc":"시제품 단계. 특허 출원 중이며 내구성·신뢰성·제연성 시험 진행 중. 화면에는 '개발 중' 상태 배지로 표기.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"BLDC Type Motor","cat":"BLDC 신사업","desc":"시제품 제작 완료, 제품 인증 절차 진행 중. 성능 수치는 시험 성적서 수령 후 반영.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"7축 갠트리 용접 로봇","cat":"보유 장비","desc":"장비 목록 페이지에 사진과 함께 게시. 장비별 규격표는 발주처 제공 자료 기준으로 채웁니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"대형 밴딩 프레스","cat":"보유 장비","desc":"보유 장비 총액은 회사 제공 수치를 그대로 표기. 임의 추정하지 않습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"기업부설연구소 인정서","cat":"인증·특허","desc":"인증 배지 + 원문 PDF 다운로드. 유효기간 필드가 있어 만료 시 관리자 화면에서 교체.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"ISO 9001 품질경영시스템","cat":"인증·특허","desc":"인증번호·인증기관·유효기간 3개 필드. 스캔본 이미지가 흐리면 재스캔 요청 대상.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"회사소개 페이지 초안 승인","type":"정상","desc":"연혁·조직·오시는 길까지 채워 승인 완료. 대표 인사말만 원고 대기 중으로 임시 문구 표시.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"특허 7건 중 2건 등록번호 불일치","type":"보류","desc":"제공 목록의 등록번호가 특허정보 검색 결과와 다릅니다. 확인 전까지 해당 2건은 비공개 처리 — 잘못된 특허번호 게시는 위험합니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"제품 사진 해상도 미달","type":"반려","desc":"휴대폰 촬영본 800px. 카탈로그 상세에서 깨집니다. 재촬영 가이드(정면·측면·설치 현장 3컷) 전달.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"견적 문의 스팸 유입","type":"예외처리","desc":"폼 오픈 후 광고성 문의가 섞여 들어옴. 캡차와 발신 도메인 필터를 넣고, 관리자 화면에서 스팸 표시 후 일괄 삭제.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"BLDC 제품 소개 문구 수위 조정","type":"수정","desc":"'세계 최초·최고 효율' 표현 삭제. 인증 전 단계이므로 '개발 중·시험 진행 중'으로 사실만 표기하도록 교체.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"관리자 첫 편집 실패","type":"예외처리","desc":"담당자가 이미지 교체 중 원본 비율이 깨짐. 업로드 시 자동 리사이즈와 '되돌리기' 버튼 추가.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"158398"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","보유 기술/특허"],["about.html","주요 제품 카탈로그"]];
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
