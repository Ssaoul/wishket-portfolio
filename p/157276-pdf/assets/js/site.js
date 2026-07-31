/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"이야기나루","brandSub":"HISTORY TALES STUDIO","cats":["삼국·남북국","고려","조선","근현대"],"caseCats":["관리자","생성 파이프라인","전자책 제작","검수·배포"],"items":[{"name":"바다를 연 사람, 장보고","cat":"삼국·남북국","desc":"청해진을 무대로 바닷길을 열어간 이야기를 아이 눈높이의 장면으로 풀어냅니다.","meta":"초등 중학년 · 24쪽","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"첨성대의 밤","cat":"삼국·남북국","desc":"별을 살피던 사람들의 하루를 따라가며 관측과 기록의 의미를 짚습니다.","meta":"초등 저학년 · 20쪽","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"금속활자, 글자를 심다","cat":"고려","desc":"글자 하나를 주조해 책이 되기까지의 과정을 공방의 시선으로 담았습니다.","meta":"초등 중학년 · 28쪽","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"개경 상단의 하루","cat":"고려","desc":"교역로를 오가는 상인들의 하루를 통해 당시의 물자와 교류를 소개합니다.","meta":"초등 고학년 · 32쪽","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"소리를 담은 글자","cat":"조선","desc":"새 글자가 만들어지고 백성에게 닿기까지를 어린 학동의 눈으로 따라갑니다.","meta":"초등 중학년 · 28쪽","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"측우기가 선 마당","cat":"조선","desc":"비를 재는 도구가 마을에 세워지며 달라진 농사 이야기를 그립니다.","meta":"초등 저학년 · 20쪽","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"수원 화성 돌 하나","cat":"조선","desc":"성을 쌓는 현장에서 도구와 사람이 어떻게 맞물렸는지 보여줍니다.","meta":"초등 고학년 · 32쪽","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"전차가 지나간 거리","cat":"근현대","desc":"달라지는 거리 풍경을 통해 생활이 어떻게 바뀌었는지 살펴봅니다.","meta":"초등 고학년 · 28쪽","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"교과서를 나르던 손","cat":"근현대","desc":"배움이 이어지기 위해 애쓴 사람들의 이야기를 조용한 어조로 담았습니다.","meta":"초등 고학년 · 24쪽","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"콘텐츠 등록 화면","title_":"","type":"관리자","desc":"시대·인물·학년·분량을 입력해 새 동화 항목을 등록하고, 등록된 원고는 목록에서 바로 열어 수정합니다.","sub":"등록 · 수정 · 버전 보관","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"프롬프트 템플릿 관리","type":"관리자","desc":"시대별 어투와 금지 표현을 템플릿으로 저장해 두고, 생성 요청마다 골라 적용합니다.","sub":"템플릿 · 어투 규칙","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"생성 작업 현황판","type":"생성 파이프라인","desc":"대기·생성 중·검수 대기·완료로 나뉜 작업 카드를 한 화면에서 확인하고 재실행합니다.","sub":"상태 추적 · 재실행","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"삽화 생성과 배치","type":"생성 파이프라인","desc":"장면별로 삽화를 생성해 원고 위치에 붙이고, 마음에 들지 않으면 해당 장면만 다시 만듭니다.","sub":"장면 단위 재생성","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"전자책 조판 미리보기","type":"전자책 제작","desc":"본문과 삽화가 실제 페이지에 어떻게 앉는지 좌우 펼침으로 확인한 뒤 PDF로 내보냅니다.","sub":"펼침 보기 · PDF 내보내기","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"검수 체크리스트","type":"검수·배포","desc":"사실 확인·표현 점검·오탈자 항목을 담당자가 하나씩 확인해야 발행 단계로 넘어갑니다.","sub":"단계 잠금 · 이력 기록","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157276"};
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
