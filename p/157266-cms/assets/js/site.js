/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"스튜디오 온새","brandSub":"WEBTOON STUDIO & PUBLISHING","cats":["WEBTOON","PUBLICATION","JOIN US"],"caseCats":["작품 소식","출간 소식","공모·채용"],"items":[{"name":"밤을 걷는 등불","cat":"WEBTOON","desc":"등불을 든 소녀가 잠들지 못한 도시를 지나며 사라진 이름들을 되찾는 판타지 드라마. 작품 안내와 제작 과정을 상세 페이지에서 소개합니다.","meta":"키비주얼 480 × 623","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"열두 번째 정거장","cat":"WEBTOON","desc":"매번 다른 시간대에 도착하는 막차를 타는 청년들의 이야기. 연출 콘티부터 채색 과정까지 제작 노트를 함께 담았습니다.","meta":"키비주얼 480 × 623","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"파도가 남긴 편지","cat":"WEBTOON","desc":"바닷마을에 떠밀려 온 편지를 읽는 우체국 견습생의 성장담. 메인 WORKS 노출 4건 중 하나로 선택된 작품입니다.","meta":"메인 노출 선택","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"조용한 관측소","cat":"WEBTOON","desc":"산 위 관측소에서 별 대신 사람의 소식을 기록하는 관측자의 연작. 작품 안내와 제작 과정 자유형 본문으로 구성했습니다.","meta":"자유형 상세","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"밤을 걷는 등불 1권","cat":"PUBLICATION","desc":"웹툰 1부를 재구성해 엮은 단행본. 표지·제목·작가명만 노출되며 별도 상세 페이지 없이 목록에서 바로 확인합니다.","meta":"표지 145 : 200","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"열두 번째 정거장 상","cat":"PUBLICATION","desc":"연재분 전반부를 묶은 상권. 작가 후기와 미공개 러프 컷을 부록으로 담았습니다.","meta":"표지 145 : 200","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"파도가 남긴 편지 합본","cat":"PUBLICATION","desc":"전 편을 한 권으로 묶은 합본판. PUBLICATION 전체 목록에서 가나다순으로 고정 정렬됩니다.","meta":"가나다순 정렬","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"온새 아트북","cat":"PUBLICATION","desc":"소속 작가들의 키비주얼과 설정 자료를 모은 아트북. 메인 단행본 노출 8종에 포함되어 표시됩니다.","meta":"메인 노출 선택","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"신인 작가 공모전 안내","cat":"JOIN US","desc":"연재 데뷔를 준비하는 작가를 위한 공모 안내. 진행 중인 글이 있을 때만 메인에 「공모전·채용 소식 보기」 링크가 나타납니다.","meta":"지원서 양식 다운로드","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"「밤을 걷는 등불」 단행본 출간 사인회","type":"작품 소식","desc":"작가와 독자가 만나는 오프라인 사인회 현장을 사진과 캡션으로 기록했습니다. 본문은 텍스트와 이미지를 자유롭게 배치했습니다.","sub":"상단 고정 배너","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"「열두 번째 정거장」 연재 100화 기념 이벤트","type":"작품 소식","desc":"100화를 맞아 진행한 독자 참여 이벤트 안내. 하단에 「작품 보러가기」 링크 버튼을 새 창으로 연결했습니다.","sub":"링크 버튼 1개","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"온새 아트북 예약 판매 시작","type":"출간 소식","desc":"아트북 구성과 부록을 이미지 2단 배치로 소개했습니다. 「구매하러 가기」 버튼을 외부 링크로 연결했습니다.","sub":"2단 이미지 배치","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"「파도가 남긴 편지」 합본판 개정 안내","type":"출간 소식","desc":"판형과 후가공을 변경한 개정판 안내. 입력하지 않은 항목은 화면에서 자동으로 숨겨집니다.","sub":"빈 영역 자동 숨김","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"제3회 신인 작가 공모전 접수","type":"공모·채용","desc":"공모 일정과 제출 규격을 정리했습니다. 「지원서 양식 다운로드」 버튼을 외부 드라이브 링크로 연결했습니다.","sub":"JOIN US 필터","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"편집·프로덕션 인력 채용","type":"공모·채용","desc":"편집과 제작 진행을 담당할 인력을 모집합니다. 진행 중인 글이 없으면 메인 링크는 문의 연결로 전환됩니다.","sub":"조건부 노출","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157266"};
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
