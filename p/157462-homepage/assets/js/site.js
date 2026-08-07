/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"애드플로우","brandSub":"ADFLOW WORKSPACE","cats":["광고주·프로젝트","캠페인·성과","제작·일정","정산·권한"],"caseCats":["대시보드","성과 관리","정산","운영·권한"],"items":[{"name":"광고주 카드","cat":"광고주·프로젝트","desc":"기본 정보와 계약 기간·대행 수수료 조건을 한 장에 모으고, 제안서·계약서·소재 파일을 함께 보관합니다.","meta":"등록·조회·수정 / 파일 보관","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"진행 단계 보드","cat":"광고주·프로젝트","desc":"신규 문의부터 계약까지 단계를 옮기며 관리하고, 단계마다 담당자를 배정합니다.","meta":"문의 → 제안 → 협의 → 계약","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"협의 이력 타임라인","cat":"광고주·프로젝트","desc":"요청·협의 사항을 시간순으로 쌓아 담당자가 바뀌어도 이전 맥락을 그대로 이어받습니다.","meta":"시간순 기록 / 담당 승계","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"캠페인 등록","cat":"캠페인·성과","desc":"광고주별로 매체·집행 기간·예산을 등록하고 광고비, 노출, 클릭, 전환, 매출 지표를 함께 관리합니다.","meta":"매체 / 기간 / 예산","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"매체 연동 설정","cat":"캠페인·성과","desc":"네이버 검색광고·Google Ads·Meta Marketing 계정을 연결하고 인증 정보 갱신 상태를 확인합니다.","meta":"3개 매체 / 인증 갱신 관리","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"지표 통일 규칙","cat":"캠페인·성과","desc":"매체마다 다른 지표 명칭과 집계 기준을 하나의 규칙으로 맞추고, 중복 수집분을 걸러냅니다.","meta":"명칭 매핑 / 중복 제거","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"제작 업무 캘린더","cat":"제작·일정","desc":"촬영·디자인·카피·영상 업무를 담당자와 마감일로 등록하고 월·주 단위로 조회합니다.","meta":"담당자별·광고주별 필터","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"결과물·피드백","cat":"제작·일정","desc":"완성 결과물 링크를 업무에 붙이고 광고주 피드백을 같은 자리에 기록합니다.","meta":"링크 등록 / 피드백 누적","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"정산 계산 설정","cat":"정산·권한","desc":"광고주마다 다른 수수료 체계를 설정값으로 두고 청구 금액과 입금 상태를 기록합니다.","meta":"수수료 설정값 / 입금 상태","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"대표용 전체 현황 대시보드","type":"대시보드","desc":"전 광고주·전 프로젝트의 매출과 수익 현황을 월별로 묶어 한 화면에서 봅니다. 별도 도구로 나가지 않고 시스템 안에서 조회합니다.","sub":"월별 · 광고주별 요약","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"담당자 개인 현황 화면","type":"대시보드","desc":"자신이 맡은 광고주의 진행 상태, 이번 주 마감 업무, 미입금 건을 모아 보여줍니다.","sub":"담당 범위 한정 조회","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"기간별 성과 비교","type":"성과 관리","desc":"기간·광고주·매체를 골라 성과를 나란히 놓고 비교하고, 결과를 엑셀 또는 PDF로 내보냅니다.","sub":"비교 조회 · 보고서 내보내기","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"매체 데이터 자동 갱신","type":"성과 관리","desc":"연결된 매체에서 성과 데이터를 정기적으로 받아오고, 갱신 시각과 실패 여부를 화면에 남깁니다.","sub":"정기 수집 · 상태 표시","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"프로젝트 수익 집계","type":"정산","desc":"광고비·대행 수수료·제작비·외주비를 항목별로 담고 프로젝트 단위 매출·비용·수익을 집계합니다.","sub":"비용 항목 · 수익 집계","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"권한과 변경 이력","type":"운영·권한","desc":"대표·관리자·담당자 역할에 따라 조회 범위를 제어하고, 금액과 계약 정보의 변경 이력을 남깁니다.","sub":"역할별 권한 · 이력 기록","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157462"};
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
