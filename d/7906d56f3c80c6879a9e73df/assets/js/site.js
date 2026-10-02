/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"색결","brandSub":"Color Dictionary & Story Archive","nav":[["index.html","개요"],["catalog.html","사전 검색"],["gallery.html","나의 컬러 찾기"],["about.html","갤러리"]],"cats":["전통색","자연에서 온 색","계절의 색","감정과 색"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"쪽빛","cat":"전통색","desc":"HEX #1F4E79 · 쪽풀로 물들인 짙은 남색입니다. 하단 연관 자료 3건은 외부 링크로 연결되며, 관리자 화면에서 순서를 바꾸고 추가할 수 있습니다.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"치자색","cat":"전통색","desc":"HEX #E8B84A · 치자 열매에서 얻은 따뜻한 노랑입니다. 동의어 '치자빛'으로 검색해도 같은 결과 페이지가 열리도록 별칭을 등록해 두었습니다.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"이끼색","cat":"자연에서 온 색","desc":"HEX #6B7F3A · 비 온 뒤 돌 틈의 녹색입니다. 연관 자료 1건이 외부 링크 점검에서 응답 없음으로 감지되어 '확인 필요' 표시가 붙어 있습니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"새벽안개","cat":"자연에서 온 색","desc":"HEX #C9CED6 · 해 뜨기 전의 회청색입니다. 아직 설명 문안을 검수하고 있어 '임시저장' 상태이며, 공개 검색에는 노출되지 않습니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"벚꽃잎","cat":"계절의 색","desc":"HEX #F2C4CE · 봄 첫 주의 연분홍입니다. 갤러리 '봄' 카테고리 이미지 12장과 태그로 연결되어 있습니다.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"단풍 끝","cat":"계절의 색","desc":"HEX #A8432B · 늦가을 잎의 적갈색입니다. 같은 레이아웃의 결과 페이지를 복사해 만든 항목이라, 이미지·설명·연관 자료만 교체했습니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"고요","cat":"감정과 색","desc":"HEX #8C9DB5 · 감정어를 색으로 옮긴 항목입니다. '나의 컬러 찾기' 결과 C-04와 연결되어 결과 페이지에서 사전 항목으로 이동할 수 있습니다.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"설렘","cat":"감정과 색","desc":"HEX 미지정 · 단어는 등록했지만 컬러 코드가 비어 있습니다. 필수값이 없어 저장 단계에서 '컬러 코드를 입력해 주세요' 경고가 뜨고 발행이 막힌 상태입니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"기존 포스트 복사로 새 글 발행","type":"관리자 편집","desc":"'계절의 색 · 봄' 포스트를 복사한 뒤 레이아웃은 그대로 두고 대표 이미지·영상·본문만 교체해 '계절의 색 · 여름'으로 발행했습니다. 카테고리와 태그는 복사 시점에 그대로 이어받습니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"컬러 찾기 분기 규칙 누락","type":"예외 · 저장 차단","desc":"1단계 선택지를 6개에서 7개로 늘렸지만 새 선택지 '바다'에 연결된 2단계 질문이 없습니다. 관리자 화면이 '연결되지 않은 선택지 1개'를 표시하고, 이 상태로는 공개 저장이 되지 않습니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"사전 검색 결과 없음","type":"예외 · 사용자 화면","desc":"'코발트'를 검색했지만 등록된 항목이 없습니다. 빈 화면 대신 철자가 비슷한 항목과 같은 분류의 항목을 보여 주고, 관리자에게는 '검색됐지만 결과가 없는 단어' 목록으로 쌓입니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"연관 자료 외부 링크 응답 없음","type":"예외 · 운영 점검","desc":"'이끼색' 항목의 연관 자료 링크 1건이 주간 점검에서 응답하지 않았습니다. 사용자 화면에서는 해당 카드를 숨기고, 관리자 목록에는 '확인 필요'로 표시됩니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"갤러리 대용량 원본 업로드","type":"성능","desc":"8MB 원본 이미지를 '가을' 카테고리에 올리면 웹용 크기로 자동 변환되고 원본은 따로 보관됩니다. 로딩이 빨라야 한다는 요구에 맞춰 목록에는 썸네일만 불러옵니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"다른 개발사로 이전 리허설","type":"소유권 이전","desc":"전체 소스, DB 스키마, 배포·운영 매뉴얼만으로 새 서버에 사이트를 다시 띄우는 절차를 점검하는 시나리오입니다. 특정 업체 계정에 묶인 설정이 남지 않도록 확인합니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"핵심 기능","gallery":"활용 사례","item":"기능","case":"사례"},"projectId":"158859"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","사전 검색"],["gallery.html","나의 컬러 찾기"],["about.html","갤러리"]];
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
