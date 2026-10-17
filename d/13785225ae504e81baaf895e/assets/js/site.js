/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"결담 스톤랩","brandSub":"Flexible Stone Panel · Self-Estimate Showroom","nav":[["index.html","개요"],["catalog.html","제품보기"],["gallery.html","시공사례"],["about.html","셀프견적"]],"cats":["유연석재 패널","디스플레이 패널","솔라 패널","기타자재"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"FS-600 샌드 슬레이트","cat":"유연석재 패널","desc":"규격 600×1200mm · 두께 3mm · 박스당 6장 · 로스율 8%. 곡면 기둥·아치 벽체에 시공 가능. 셀프견적 대상.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"FS-1200 트래버틴 그레이","cat":"유연석재 패널","desc":"규격 1200×2400mm · 두께 4mm · 박스당 2장 · 로스율 12%. 대형 판재라 재단 손실이 커서 로스율을 높게 잡았습니다. 셀프견적 대상.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"FS-300 러프 브릭 베이지","cat":"유연석재 패널","desc":"규격 300×600mm · 두께 3mm · 박스당 12장 · 로스율 6%. 외벽 줄눈 시공용. 단종 예정이라 셀프견적은 막고 상담신청으로 넘깁니다.","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"DP-900 라이트 월 패널","cat":"디스플레이 패널","desc":"규격 900×1800mm · 후면 조명 일체형. 전기 배선 조건이 현장마다 달라 자동 산출 대신 상담신청으로 접수합니다.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"DP-450 쇼케이스 보드","cat":"디스플레이 패널","desc":"규격 450×900mm · 박스당 4장 · 로스율 5%. 매장 집기·카운터 전면용. 셀프견적 대상.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"SP-1000 솔라 루버 패널","cat":"솔라 패널","desc":"규격 1000×1650mm · 외벽·차양 일체형. 규격 데이터가 미등록 상태라 셀프견적 버튼이 비활성화되고 '규격 등록 대기'로 표시됩니다.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"AC-20 실리콘 전용 접착제","cat":"기타자재","desc":"1통 기준 시공면적 약 4㎡ (제조사 가이드 기준값, 현장 상태에 따라 다름). 유연석재 견적에 부자재로 자동 추가.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"TR-30 알루미늄 마감 트림","cat":"기타자재","desc":"길이 2400mm · 모서리·단부 마감용. 입력한 둘레 길이를 기준으로 개수를 산출합니다.","id":"I7","img":"assets/img/item-7.svg","pub":1}],"cases":[{"title":"평촌 카페 외벽 리모델링","type":"상업공간 · 외장","desc":"FS-600 샌드 슬레이트 + AC-20 사용. 사용 자재를 체크해 두어 두 제품 상세의 '이 자재를 쓴 시공사례'에 자동으로 노출됩니다.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"인덕원 치과 대기실 곡면 기둥","type":"상업공간 · 내장","desc":"FS-1200 트래버틴 그레이로 원형 기둥 4개를 감쌌습니다. 같은 자재를 쓴 '평촌 오피스텔 로비'가 연계 사례로 함께 뜹니다.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"범계 편집숍 쇼케이스 전면","type":"상업공간 · 집기","desc":"DP-450 쇼케이스 보드와 TR-30 트림 사용. 관리자 화면에서 시공 설명·사진 6장을 등록한 그대로 공개 화면에 반영됩니다.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"과천 단독주택 현관 벽체","type":"주거공간 · 내장","desc":"사진 검수 대기 상태. 관리자에서 '비공개'로 저장돼 공개 목록에는 아직 나오지 않습니다.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"군포 물류센터 사무동 외벽","type":"산업시설 · 외장","desc":"사용 자재가 아직 지정되지 않아 제품 상세와의 연계 노출이 보류됐습니다. 관리자 목록에 '자재 미지정' 경고가 표시됩니다.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"견적의뢰 RQ-2610-0142","type":"접수 예외","desc":"시공 면적이 '3200 × 2400'으로 입력돼 mm 단위로 의심되는 값을 감지했습니다. 계산 전에 'm 단위가 맞나요?' 재확인 안내를 띄우고, 확인된 값으로만 접수했습니다.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159120"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","제품보기"],["gallery.html","시공사례"],["about.html","셀프견적"]];
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
