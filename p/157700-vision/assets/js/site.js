/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"레이스픽","brandSub":"RACE PHOTO AI PIPELINE","cats":["Vision AI 파이프라인","분산 배치 인프라","API·서빙","운영·비용"],"caseCats":["관리자 콘솔","참가자 조회","품질 리포트"],"items":[{"name":"배번호 검출 (YOLO)","cat":"Vision AI 파이프라인","desc":"번호표 영역을 BBox로 감지하고, 가려짐·흔들림·역광 프레임은 별도 큐로 분리해 후속 유사도 매칭 대상으로 넘깁니다.","meta":"YOLOv8/v11 · OpenCV","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"배번호 OCR 판독","cat":"Vision AI 파이프라인","desc":"검출된 번호표를 OCR로 읽고 대회별 배번호 정규식으로 필터링해, 광고 문구·기록칩 숫자 같은 오독을 걸러냅니다.","meta":"PaddleOCR / EasyOCR","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"Golden Sample 생성","cat":"Vision AI 파이프라인","desc":"배번호 인식에 성공한 사진군에서 참가자별 대표 얼굴 벡터와 상체 의상 벡터를 자동 추출해 기준값으로 저장합니다.","meta":"InsightFace · HSV/ReID","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"2-Pass 유사도 필터","cat":"Vision AI 파이프라인","desc":"번호표가 가려진 사진을 얼굴 벡터로 1차 매칭한 뒤, 당일 의상 색·패턴이 다른 사진을 2차에서 배제합니다.","meta":"얼굴 1차 → 의상 2차","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"썸네일 사전 처리","cat":"분산 배치 인프라","desc":"S3 업로드를 감지해 추론용 1080p WebP/JPEG를 자동 생성합니다. 원본은 건드리지 않고 다운로드 시점에만 서빙합니다.","meta":"S3 이벤트 · WebP","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"비동기 분산 큐","cat":"분산 배치 인프라","desc":"작업을 샤드로 쪼개 다중 GPU 워커가 병렬 처리합니다. 실패 태스크는 재시도 후 격리 큐에 남겨 유실을 막습니다.","meta":"Celery + Redis","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"매핑 테이블 색인","cat":"분산 배치 인프라","desc":"배치 결과를 배번호–사진 매핑 테이블로 적재하고 조회 인덱스를 구성합니다. 조회 시점에는 추론이 일어나지 않습니다.","meta":"PostgreSQL · bib_photo_matches","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"참가자 조회 API","cat":"API·서빙","desc":"배번호를 받아 색인된 썸네일·원본 URL 목록을 반환하는 REST 엔드포인트. 인하우스 프런트엔드가 그대로 붙일 수 있는 계약입니다.","meta":"FastAPI · 100ms 목표","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"Spot GPU 오케스트레이션","cat":"운영·비용","desc":"배치 시작 시 Spot GPU 인스턴스를 띄우고 큐가 비면 자동 회수합니다. 중단 신호를 받으면 진행 중 태스크를 큐로 되돌립니다.","meta":"EC2 Spot · Docker","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"대량 업로드 트리거","type":"관리자 콘솔","desc":"대회·촬영일 단위로 S3 경로를 지정해 배치를 시작합니다. 대상 장수와 예상 워커 수를 먼저 확인한 뒤 실행합니다.","sub":"대회 선택 → 경로 지정 → 배치 시작","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"배치 진행률 모니터링","type":"관리자 콘솔","desc":"단계별(썸네일·검출·OCR·벡터·매칭) 진행률과 워커 상태를 실시간으로 보여줍니다. 실패 태스크는 사유별로 묶입니다.","sub":"단계별 진행률 · 워커 현황","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"GPU 워커 · 비용 뷰","type":"관리자 콘솔","desc":"가동 중인 Spot 인스턴스와 큐 적체를 함께 표시하고, 배치 종료 후 회수까지의 이력을 남깁니다.","sub":"인스턴스 가동/회수 이력","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"배번호 조회 결과","type":"참가자 조회","desc":"배번호를 입력하면 색인된 사진이 즉시 나열됩니다. 원본 다운로드는 목록에서 바로 이어집니다.","sub":"배번호 입력 → 사진 목록","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"구제된 사진 묶음","type":"참가자 조회","desc":"번호표가 가려졌지만 얼굴·의상 매칭으로 다시 붙은 사진을 별도 묶음으로 보여주고 매칭 근거를 표시합니다.","sub":"얼굴 1차 · 의상 2차 통과","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"오탐 검증 리포트","type":"품질 리포트","desc":"1차 얼굴 매칭을 통과했지만 의상 검증에서 배제된 사진을 모아, 임계값 조정 근거로 쓸 수 있게 정리합니다.","sub":"배제 사유 · 임계값 구간별 분포","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157700"};
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
