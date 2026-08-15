/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"시트웍스","brandSub":"SHEETWORKS AUTOMATION","cats":["채점 시트","자동 판정","상황 대응","본부 취합"],"caseCats":["시험장 화면","판정 화면","본부 화면"],"items":[{"name":"평가위원 개별 채점 시트","cat":"채점 시트","desc":"위원 1·2·3이 각자 자신의 시트에서만 문항별 점수를 입력합니다. 다른 위원의 점수는 보이지 않도록 시트를 분리하고, 입력 가능한 셀 외에는 잠급니다.","meta":"시트 3종 · 입력 셀 보호","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"태블릿 입력 레이아웃","cat":"채점 시트","desc":"태블릿PC 화면 폭에 맞춘 큰 글씨·큰 입력 셀 구성. 가로 스크롤 없이 문항이 한 화면에 들어오고, 손가락 터치로도 셀 이동이 편하도록 배치했습니다.","meta":"터치 입력 고려 · 확대 배율 고정","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"문항별 점수 검증","cat":"채점 시트","desc":"배점 범위를 벗어난 값, 빈칸, 문자 입력을 즉시 막습니다. 잘못된 값이 들어오면 셀 색과 안내 문구로 바로 알려 채점 중 실수를 줄입니다.","meta":"데이터 유효성 · 조건부 서식","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"총점 합산·평균 산출","cat":"자동 판정","desc":"3인의 문항별 점수를 받아 위원별 총점과 3인 평균을 자동 계산합니다. 수식은 숨김 시트에 두어 채점 화면에서는 결과만 보이게 했습니다.","meta":"수식 자동 계산 · 반올림 규칙 적용","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"필수 조건 미달 판정","cat":"자동 판정","desc":"특정 항목이 기준에 미달하면 총점과 무관하게 판정에 반영합니다. 기준값은 별도 설정 시트에서 바꿀 수 있어 종목이 달라져도 수식을 고치지 않습니다.","meta":"기준값 설정 시트 분리","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"최종 실격 텍스트 표출","cat":"자동 판정","desc":"필수 조건 미달 또는 총점 기준 미달에 해당하면 결과 칸에 실격 사유가 문장으로 표시됩니다. 판정 근거를 함께 남겨 나중에 확인할 수 있습니다.","meta":"사유 문구 자동 생성","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"이상 징후 대응 팝업","cat":"상황 대응","desc":"대응이 필요한 셀을 선택하거나 버튼을 누르면 사전에 등록한 매뉴얼 문구가 팝업으로 뜹니다. 문구는 매뉴얼 시트에서 관리자가 직접 등록·수정합니다.","meta":"VBA 팝업 · 문구 시트 관리","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"중앙본부 취합 시트","cat":"본부 취합","desc":"개별 점수·평균·실격 여부를 취합용 시트에 한 줄씩 정렬해 쌓습니다. 본부에서 열었을 때 수험번호 기준으로 바로 정렬·필터할 수 있는 구조입니다.","meta":"1행 1수험자 · 필터 가능 구조","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"클라우드 동기화 가이드","cat":"본부 취합","desc":"태블릿에서 저장한 파일이 본부 폴더로 올라가는 절차를 화면 캡처와 함께 정리했습니다. 통신이 끊겼을 때의 임시 저장·재동기화 순서도 포함합니다.","meta":"사용 가이드 문서 1종","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"위원 1 채점 입력","type":"시험장 화면","desc":"태블릿을 세워 든 상태에서 문항 목록과 점수 입력 칸이 한 화면에 들어옵니다. 입력이 끝난 문항은 색이 바뀌어 빠진 문항을 눈으로 바로 찾습니다.","sub":"평가위원용 · 개별 시트","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"배점 초과 입력 차단","type":"시험장 화면","desc":"배점보다 큰 값을 넣으면 저장되지 않고 안내 문구가 뜹니다. 채점 도중 잘못 누른 값이 그대로 집계로 넘어가는 것을 막습니다.","sub":"입력 검증 · 안내 문구","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"3인 점수 합산 결과","type":"판정 화면","desc":"세 위원의 총점과 평균이 한 표에 정리됩니다. 위원 간 점수 차가 큰 문항은 따로 표시해 확인이 필요한 지점을 드러냅니다.","sub":"총점 · 평균 · 편차 표시","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"실격 사유 자동 표출","type":"판정 화면","desc":"필수 조건 미달 항목과 총점 미달 여부를 함께 읽어 결과 칸에 사유 문장을 출력합니다. 판정에 쓰인 기준값도 옆에 같이 보여 줍니다.","sub":"사유 문구 · 근거 기준값","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"이상 징후 대응 안내","type":"판정 화면","desc":"대응 버튼을 누르면 등록된 매뉴얼 문구가 팝업으로 뜹니다. 시험장에서 종이 매뉴얼을 찾지 않고 화면에서 바로 확인합니다.","sub":"버튼 클릭 · 매뉴얼 팝업","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"본부 실시간 취합표","type":"본부 화면","desc":"각 시험장에서 올라온 채점 결과가 수험번호 순으로 쌓입니다. 실격 건과 미입력 건이 구분되어 진행 현황을 한눈에 파악합니다.","sub":"취합 시트 · 현황 확인","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157655"};
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
