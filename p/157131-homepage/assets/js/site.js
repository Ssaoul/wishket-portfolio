/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"광맵","brandSub":"GWANGMAP INDUSTRY MAP","cats":["지도 서비스","데이터 관리","연동","관리자"],"caseCats":["사용자 화면","관리자 화면","데이터 처리"],"items":[{"name":"기업 위치 마커","cat":"지도 서비스","desc":"위경도 좌표를 받아 지도 위에 기업 마커를 출력합니다. 화면 이동·확대 시 보이는 영역의 데이터만 그려 반응 속도를 유지합니다.","meta":"지도 API 연동","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"마커 클러스터링","cat":"지도 서비스","desc":"마커가 밀집한 지역을 묶어 개수로 표시하고, 확대할수록 개별 마커로 풀립니다. 수천 건 규모에서도 렌더링 부담을 낮춥니다.","meta":"밀집 구간 그룹화","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"기업 정보 팝업","cat":"지도 서비스","desc":"마커를 클릭하면 상호명·주소·산업분류 코드를 담은 상세 레이어가 열립니다. 지도를 벗어나지 않고 정보를 확인합니다.","meta":"클릭 시 레이어","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"분류 코드 필터","cat":"지도 서비스","desc":"한국표준산업분류 28개 코드를 체크박스로 선택해 해당 분류 기업만 지도에 남깁니다. 선택 즉시 마커가 다시 그려집니다.","meta":"체크박스 단일 필터","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"엑셀 일괄 업로드","cat":"데이터 관리","desc":"관리자 페이지에서 원본 엑셀 파일을 올리면 행 단위로 파싱해 데이터베이스에 적재합니다. 형식 오류 행은 따로 표시합니다.","meta":"관리자 화면","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"주소 좌표 변환","cat":"데이터 관리","desc":"업로드된 텍스트 주소를 지오코딩 API로 보내 위경도로 바꿔 저장합니다. 변환 실패 건은 목록으로 남겨 수기 보정이 가능합니다.","meta":"지오코딩 처리","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"상장사 오픈 API 연동","cat":"연동","desc":"코스피·코스닥·코넥스 상장 기업 데이터를 오픈 API로 받아 기존 기업 정보와 대조해 현행화합니다.","meta":"주기적 갱신","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"노출 대상 선별","cat":"데이터 관리","desc":"적재된 전체 기업 중 지정한 28개 분류 코드에 해당하는 기업만 지도 노출 대상으로 표시합니다.","meta":"분류 기준 선별","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"데이터 직접 수정","cat":"관리자","desc":"업로드 이후에도 관리자가 개별 기업의 상호·주소·분류를 화면에서 직접 등록·수정할 수 있습니다.","meta":"직접 등록·수정","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"지도 메인 화면","type":"사용자 화면","desc":"지도가 전체를 차지하고 좌측에 분류 필터, 우측에 목록이 붙는 구성입니다. 참고하신 지도 서비스의 화면 흐름을 따랐습니다.","sub":"지도 + 필터 + 목록","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"클러스터 확대 흐름","type":"사용자 화면","desc":"전국 단위에서는 지역별 묶음 숫자만 보이고, 확대하면 시·군 단위로 나뉘다가 개별 기업 마커까지 펼쳐집니다.","sub":"줌 레벨별 표시","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"기업 상세 팝업","type":"사용자 화면","desc":"마커 클릭 시 상호명·주소·산업분류 코드가 카드 형태로 열리고, 목록에서 같은 기업을 선택해도 동일하게 연동됩니다.","sub":"상호·주소·분류 코드","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"엑셀 업로드 화면","type":"관리자 화면","desc":"파일을 올리면 총 건수와 처리 진행 상황이 보이고, 누락·형식 오류 행은 사유와 함께 목록으로 나옵니다.","sub":"업로드 결과 확인","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"좌표 변환 결과","type":"데이터 처리","desc":"주소를 좌표로 바꾼 결과를 성공·실패로 나눠 보여줍니다. 실패 건은 주소를 고쳐 다시 변환할 수 있습니다.","sub":"실패 건 재처리","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"기업 데이터 관리","type":"관리자 화면","desc":"적재된 기업을 검색·정렬해 보고, 지도 노출 여부와 분류 코드를 직접 바꿀 수 있는 목록 화면입니다.","sub":"검색·정렬·수정","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157131"};
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
