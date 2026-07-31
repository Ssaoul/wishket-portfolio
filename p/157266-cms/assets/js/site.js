/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"먹선스튜디오","brandSub":"MEOKSEON STUDIO","cats":["WEBTOON","PUBLICATION","JOIN US"],"caseCats":["작품 소식","출간 소식","공모·채용"],"items":[{"name":"밤의 화실","cat":"WEBTOON","desc":"그림을 그만둔 화가가 밤마다 낯선 손님의 초상을 그리게 되는 이야기. 작품 안내와 제작 과정을 상세 페이지에서 볼 수 있습니다.","meta":"키비주얼 480 × 623 · 최신순 노출","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"파랑 신호","cat":"WEBTOON","desc":"도시의 신호등만 볼 수 있는 소년이 사라진 친구의 흔적을 좇는 청춘 미스터리. 메인 WORKS 4건 중 하나로 노출 중입니다.","meta":"키비주얼 480 × 623 · 메인 고정","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"열두 번째 겨울","cat":"WEBTOON","desc":"열두 해째 같은 겨울을 반복하는 소녀의 성장담. 제작 과정 스케치와 콘티를 자유형 본문으로 구성했습니다.","meta":"키비주얼 480 × 623 · 상세 페이지 있음","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"모래시계 정류장","cat":"WEBTOON","desc":"마지막 버스를 놓친 사람들이 모이는 정류장에서 벌어지는 옴니버스 드라마.","meta":"키비주얼 480 × 623 · 최신순 노출","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"밤의 화실 1권","cat":"PUBLICATION","desc":"연재분 1~24화를 묶은 첫 단행본. 미공개 후기 만화를 함께 실었습니다.","meta":"표지 145 : 200 · 가나다순","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"먹선 아트북","cat":"PUBLICATION","desc":"주요 작품의 키비주얼과 러프 스케치를 모은 아트북. 표지·제목·작가명만 노출되며 상세 페이지는 없습니다.","meta":"표지 145 : 200 · 가나다순","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"파랑 신호 상","cat":"PUBLICATION","desc":"연재 전반부를 담은 상권. 작가 인터뷰가 부록으로 수록되어 있습니다.","meta":"표지 145 : 200 · 메인 8종 노출","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"열두 번째 겨울 합본","cat":"PUBLICATION","desc":"완결까지의 전편을 한 권으로 묶은 합본판.","meta":"표지 145 : 200 · 가나다순","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"제3회 신인 작가 공모전","cat":"JOIN US","desc":"신인 웹툰 작가를 찾습니다. 지원서 양식은 하단 다운로드 버튼에서 받을 수 있습니다.","meta":"진행 중일 때만 메인에 노출","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"「밤의 화실」 단행본 1권 출간 기념 사인회","type":"작품 소식","desc":"작가와 독자가 직접 만나는 사인회를 엽니다. 신청 방법과 당일 안내를 본문에서 확인해 주세요.","sub":"상단 고정 · 링크 버튼「작품 보러가기」","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"「파랑 신호」 상권 예약 판매 시작","type":"출간 소식","desc":"초판 한정 일러스트 엽서가 함께 제공됩니다. 판매처 링크를 본문 하단에 연결했습니다.","sub":"상단 고정 · 링크 버튼「구매하러 가기」","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"제3회 신인 작가 공모전 접수 안내","type":"공모·채용","desc":"공모 부문과 일정, 제출 서류를 정리했습니다. 지원서 양식은 버튼으로 내려받으실 수 있습니다.","sub":"JOIN US 필터 · 「지원서 양식 다운로드」","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"「열두 번째 겨울」 제작 과정 공개","type":"작품 소식","desc":"기획 노트부터 채색 단계까지, 한 화가 완성되는 과정을 이미지와 캡션으로 담았습니다.","sub":"본문 2단 배치 · 이미지 캡션","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"먹선 아트북 재입고 안내","type":"출간 소식","desc":"품절되었던 아트북이 다시 입고되었습니다. 수량이 한정되어 있습니다.","sub":"노출일자 지정 · 목록 썸네일 145 : 200","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"편집·콘텐츠 담당자 채용","type":"공모·채용","desc":"작품 편집과 소식 운영을 함께할 담당자를 찾습니다. 지원 절차는 본문에 안내되어 있습니다.","sub":"JOIN US 필터 · 새 창 열기","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157266"};
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
