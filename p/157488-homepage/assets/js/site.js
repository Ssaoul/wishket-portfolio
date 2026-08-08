/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"바이오리브","brandSub":"BIOLIV KIT LAB","cats":["검사 신청","진행 관리","결과 확인","관리자"],"caseCats":["앱 화면","관리자 화면","연동"],"items":[{"name":"키트 등록","cat":"검사 신청","desc":"배송받은 키트의 고유번호를 앱에서 등록합니다. 등록 시 본인인증 절차를 거치며, 기존 회원 로그인 체계를 그대로 사용합니다.","meta":"본인인증 · 키트 고유번호","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"자녀정보 등록","cat":"검사 신청","desc":"수검자인 자녀의 이름·생년월일·성별을 입력합니다. 한 계정에 여러 자녀를 등록해 각각 검사를 진행할 수 있습니다.","meta":"이름 · 생년월일 · 성별","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"문진표 작성","cat":"검사 신청","desc":"출생 형태, 수유 형태 등 결과 해석에 필요한 문항을 앱에서 작성합니다. 작성 내용은 관리자 화면에서 조회됩니다.","meta":"출생 형태 · 수유 형태","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"반송 신청","cat":"진행 관리","desc":"채취를 마친 키트의 반송을 신청하고 운송장번호를 입력합니다. 택배 상태는 접수 내역과 함께 관리됩니다.","meta":"반송 접수 · 운송장번호","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"검사 진행현황","cat":"진행 관리","desc":"키트 등록 · 검사 접수 · 검사 진행 · 결과 분석 · 결과 완료의 단계를 앱에서 확인합니다. 상태가 바뀌면 협력사에도 전달됩니다.","meta":"5단계 상태 표시","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"검사 결과 확인","cat":"결과 확인","desc":"수검자 정보와 검사 결과 요약을 앱에서 열람합니다. 상세 결과지는 업로드된 결과 데이터를 기준으로 구성됩니다.","meta":"수검자 정보 · 결과 요약","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"접수·키트 관리","cat":"관리자","desc":"협력사에서 수신한 고객정보와 배송정보를 조회·검색하고, 키트 등록 여부와 등록일을 확인해 상태를 변경합니다.","meta":"조회 · 검색 · 상태 변경","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"협력사·API 관리","cat":"관리자","desc":"협력사를 등록·수정하고 협력사별 API 키와 연동 이력을 관리합니다. 수신·송신 내역을 건별로 확인할 수 있습니다.","meta":"협력사별 API 관리","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"결과 업로드","cat":"관리자","desc":"검사 결과 데이터를 업로드해 결과지를 생성하고, 접수·검사중·분석중·완료 단계로 상태를 전환합니다.","meta":"결과 데이터 업로드","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"키트 등록 화면","type":"앱 화면","desc":"본인인증 후 키트 고유번호를 입력하는 흐름을 화면으로 구성했습니다. 기존 앱의 하단 탭에 검사 메뉴가 추가된 형태입니다.","sub":"본인인증 · 고유번호 입력","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"문진표 작성 화면","type":"앱 화면","desc":"출생 형태·수유 형태 등 문항을 단계별로 나눠 이탈을 줄인 입력 화면입니다. 작성 중 이어하기를 지원합니다.","sub":"단계형 문항 · 임시저장","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"진행현황 타임라인","type":"앱 화면","desc":"키트 등록부터 결과 완료까지 다섯 단계를 세로 타임라인으로 표시하고, 각 단계의 처리 시점을 함께 보여줍니다.","sub":"5단계 · 처리 시점 표시","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"접수관리 목록","type":"관리자 화면","desc":"협력사에서 수신한 주문 건을 조건별로 검색하고, 키트 등록 여부와 반송 상태를 한 화면에서 확인하는 목록입니다.","sub":"검색 · 일괄 상태 변경","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"결과 업로드·결과지","type":"관리자 화면","desc":"결과 데이터를 업로드하면 결과지 페이지 구성이 미리 확인되고, 완료 처리 시 앱의 결과 확인 메뉴에 노출됩니다.","sub":"업로드 · 결과지 미리보기","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"협력사 연동 로그","type":"연동","desc":"고객·배송정보 수신과 검사 진행상태 송신 내역을 건별로 기록하고, 실패 건은 재전송할 수 있도록 구성했습니다.","sub":"수신·송신 이력 · 재전송","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157488"};
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
