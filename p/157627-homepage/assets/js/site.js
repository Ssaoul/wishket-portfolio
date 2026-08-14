/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"덴티스크","brandSub":"DENTIS DESK CRM","cats":["예약 관리","고객(환자) 관리","수납·미수금","문자·알림톡"],"caseCats":["운영 화면","통계·보고","시스템 관리"],"items":[{"name":"체어별 예약 스케줄러","cat":"예약 관리","desc":"진료실·담당 의사·체어 단위로 열을 나눈 캘린더에서 빈 자리를 바로 확인하고 예약을 배정합니다.","meta":"일·주 단위 보기","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"예약 상태 관리","cat":"예약 관리","desc":"예약대기·확정·내원완료·노쇼·취소 상태를 색으로 구분해 표시하고, 변경 이력을 남깁니다.","meta":"5단계 상태값","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"예약 등록·일정 변경","cat":"예약 관리","desc":"신규 예약 생성, 드래그로 시간 이동, 담당자 재배정까지 데스크에서 바로 처리합니다.","meta":"등록·수정·담당자 배정","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"환자 등록·검색","cat":"고객(환자) 관리","desc":"이름·연락처·생년월일로 신규 환자를 등록하고, 이름이나 연락처 일부만으로 조회합니다.","meta":"조건별 검색","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"환자 상세 카드","cat":"고객(환자) 관리","desc":"기본 정보, 다음 예약, 미수금 여부를 한 장에 모아 전화 응대 중에도 바로 확인합니다.","meta":"환자별 상세 페이지","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"진료·상담 이력","cat":"고객(환자) 관리","desc":"내원일과 진료 항목, 상담 내용을 시간순으로 기록하고 이전 방문 내용을 되짚습니다.","meta":"시간순 타임라인","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"수납 내역 등록","cat":"수납·미수금","desc":"진료 항목별 수납 금액을 수기로 입력해 저장합니다. 외부 결제 연동 없이 데스크 기록 기준으로 관리합니다.","meta":"항목별 수기 입력","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"미수금 목록·처리","cat":"수납·미수금","desc":"미수 발생 건을 목록으로 모아 처리 상태를 표시하고, 대상 환자에게 안내 메시지를 보냅니다.","meta":"발생·안내·완납","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"예약 리마인드·리콜 발송","cat":"문자·알림톡","desc":"예약일이 가까운 환자에게 알림톡을 보내고, 정기 검진 대상자를 추려 리콜 메시지를 발송합니다.","meta":"SMS·카카오 알림톡","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"데스크 대시보드","type":"운영 화면","desc":"오늘 예약 현황, 미도착 환자, 발송 예정 알림을 한 화면에 모아 출근 직후 상황을 파악합니다.","sub":"오늘 기준 요약","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"주간 스케줄 보드","type":"운영 화면","desc":"체어별 열로 나뉜 주간 캘린더에서 빈 시간대와 과밀 시간대를 눈으로 구분합니다.","sub":"체어·담당의별 열","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"환자 상세 화면","type":"운영 화면","desc":"기본 정보와 진료·상담 이력, 수납 내역을 탭으로 나눠 한 페이지에서 넘겨봅니다.","sub":"정보·이력·수납 탭","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"매출 통계","type":"통계·보고","desc":"기간별·진료 항목별 매출을 집계해 표와 그래프로 조회하고 기간을 바꿔 비교합니다.","sub":"기간·항목별 집계","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"예약 지표","type":"통계·보고","desc":"예약 건수와 노쇼 비율을 기간 단위로 집계해 운영 흐름을 확인합니다.","sub":"예약 건수·노쇼율","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"권한·환경설정","type":"시스템 관리","desc":"관리자와 일반 사용자의 접근 범위를 나누고, 지점 정보와 운영 기본값을 설정합니다.","sub":"역할·지점·기본값","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157627"};
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
