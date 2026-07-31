/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"여담(旅談)","brandSub":"YEODAM AI STORY LAB","cats":["생성 파이프라인","프롬프트 실험실","전자책 출력"],"caseCats":["텍스트 생성","삽화 생성","PDF 조판"],"items":[{"name":"이름 입력 초대장","cat":"생성 파이프라인","desc":"아이 이름과 나이대를 입력하면 맞춤 인사말이 담긴 초대장 문구를 생성합니다. 이름 호칭과 존댓말 톤을 규칙으로 고정합니다.","meta":"1단계 · 텍스트 생성","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"프롤로그 생성","cat":"생성 파이프라인","desc":"초대장에 이어지는 도입부를 만듭니다. 여행의 배경과 등장인물을 소개하고 이후 동화 본문과 설정이 어긋나지 않도록 컨텍스트를 넘깁니다.","meta":"1단계 · 텍스트 생성","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"방문·미션 시뮬레이터","cat":"생성 파이프라인","desc":"실제 앱 연동 없이 관광지 방문 기록과 미션 수행 결과를 임의로 넣어볼 수 있는 입력 화면입니다. 방문 순서와 미션 성공 여부가 그대로 이야기 전개에 반영됩니다.","meta":"2단계 · 입력 시뮬레이션","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"역사동화 본문 생성","cat":"생성 파이프라인","desc":"방문 데이터를 장면 단위로 나눠 페이지별 동화 텍스트를 만듭니다. 페이지 수와 한 페이지 분량을 지정할 수 있습니다.","meta":"2단계 · 텍스트 생성","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"페이지별 삽화 생성","cat":"생성 파이프라인","desc":"각 페이지 본문에서 장면 묘사를 뽑아 삽화 프롬프트로 변환하고 이미지를 생성합니다. 화풍을 한 벌로 고정해 페이지끼리 튀지 않게 합니다.","meta":"2단계 · 이미지 생성","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"프롬프트 편집기","cat":"프롬프트 실험실","desc":"프롤로그·동화·삽화 프롬프트를 화면에서 고쳐 바로 다시 실행합니다. 수정 전후 결과를 나란히 두고 비교합니다.","meta":"4단계 · 테스트 환경","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"안전 필터 점검","cat":"프롬프트 실험실","desc":"아동에게 부적절한 표현과 이미지가 나오지 않도록 입력·출력 양쪽에 차단 규칙을 두고, 걸린 항목을 검토 목록으로 남깁니다.","meta":"비기능 · 가드레일","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"단계별 소요 시간 기록","cat":"프롬프트 실험실","desc":"호출마다 단계별 걸린 시간을 기록해 어디서 지연이 생기는지 확인합니다. PoC 보고서에 쓸 수 있는 형태로 정리됩니다.","meta":"비기능 · 성능 측정","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"전자책 PDF 자동 제작","cat":"전자책 출력","desc":"생성된 본문과 삽화를 표지·본문·맺음말 형식으로 묶어 PDF를 만들고 내려받습니다. 한글 글꼴 깨짐과 이미지 잘림을 조판 단계에서 잡습니다.","meta":"3단계 · PDF 생성","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"초대장 화면","type":"텍스트 생성","desc":"이름을 넣고 생성 버튼을 누르면 맞춤 초대장과 프롤로그가 화면에 나옵니다. 다시 생성해 다른 결과와 비교할 수 있습니다.","sub":"1단계 결과 출력","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"방문 기록 입력","type":"텍스트 생성","desc":"관광지 세 곳과 미션 결과를 임의로 넣어 이야기가 어떻게 달라지는지 확인하는 화면입니다.","sub":"2단계 입력 시뮬레이션","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"동화 페이지 뷰","type":"텍스트 생성","desc":"생성된 동화를 페이지 단위로 넘겨보며 분량과 문체를 점검합니다. 페이지별로 재생성할 수 있습니다.","sub":"2단계 본문 확인","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"삽화 생성 결과","type":"삽화 생성","desc":"페이지 본문에서 뽑은 장면 프롬프트와 생성된 삽화를 나란히 보여줍니다. 마음에 들지 않으면 해당 페이지만 다시 그립니다.","sub":"2단계 이미지 확인","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"프롬프트 비교","type":"삽화 생성","desc":"프롬프트를 바꿔 생성한 두 결과를 좌우로 놓고 어느 쪽이 나은지 판단합니다. 사용한 프롬프트가 함께 기록됩니다.","sub":"4단계 테스트 환경","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"PDF 미리보기·다운로드","type":"PDF 조판","desc":"표지부터 맺음말까지 조판된 전자책을 미리 보고 PDF로 내려받습니다. 페이지 여백과 글꼴 크기를 바꿔 다시 뽑을 수 있습니다.","sub":"3단계 최종 산출물","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157276"};
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
