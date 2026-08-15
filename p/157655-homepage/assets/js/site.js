/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"검정랩","brandSub":"CERTIFICATION EXAM OPS","cats":["채점 입력","자동 산출","상황 대응","취합·연동"],"caseCats":["채점 화면","판정·검증","운영 대응","본부 취합"],"items":[{"name":"평가위원 개별 채점 시트","cat":"채점 입력","desc":"평가위원 3인이 각자 자기 시트에서만 문항별 점수를 입력합니다. 태블릿 터치 환경을 고려해 입력 셀을 크게 잡고, 입력 가능한 셀 외에는 시트를 보호합니다.","meta":"위원 3인 · 시트 분리","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"응시자 명부·수험번호 조회","cat":"채점 입력","desc":"수험번호를 고르면 응시자 정보와 해당 종목의 채점 항목이 자동으로 불러와집니다. 위원이 명부를 옮겨 적을 일이 없습니다.","meta":"목록 선택 입력","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"문항별 배점 기준표","cat":"채점 입력","desc":"원본 채점 기준표를 배점·필수 조건·감점 규칙으로 정리해 별도 시트에 둡니다. 기준이 바뀌면 이 시트만 고치면 채점 화면 전체에 반영됩니다.","meta":"기준표 단일 원천","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"총점 합산·평균 자동 계산","cat":"자동 산출","desc":"3인의 문항별 점수를 받아 위원별 총점과 3인 평균을 자동으로 계산합니다. 위원이 계산기를 쓰거나 합계를 손으로 적지 않습니다.","meta":"수식 자동 계산","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"필수 조건 미달 검증","cat":"자동 산출","desc":"특정 필수 항목의 조건 미달 여부를 문항 단위로 검증해 해당 셀을 표시합니다. 총점 기준 미달도 같은 규칙으로 함께 판정합니다.","meta":"조건·기준 이중 검증","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"최종 실격 처리 표출","cat":"자동 산출","desc":"필수 조건 미달 또는 총점 기준 미달에 해당하면 최종 판정란에 실격 처리 문구가 자동으로 나타납니다. 판정 근거가 된 항목도 함께 표시합니다.","meta":"텍스트 자동 출력","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"이상 징후 대응 팝업","cat":"상황 대응","desc":"해당 셀을 선택하거나 대응 버튼을 누르면 사전에 등록해 둔 이상 징후 대응 안내 문구가 팝업으로 뜹니다. 현장에서 매뉴얼을 찾아 넘길 필요가 없습니다.","meta":"VBA 버튼 · 매뉴얼 연동","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"중앙본부 취합 시트","cat":"취합·연동","desc":"위원별 개별 점수, 3인 평균, 최종 실격 여부가 본부 취합용 시트 한 곳으로 모이도록 파일을 구조화합니다. 본부는 이 시트만 보면 됩니다.","meta":"개별·평균·판정 연동","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"구동·동기화 사용 가이드","cat":"취합·연동","desc":"태블릿에서 파일을 여는 방법, 매크로 허용 절차, 클라우드 동기화 확인 방법을 화면 캡처와 함께 정리한 문서입니다.","meta":"가이드 문서 1종","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"평가위원 채점 입력 화면","type":"채점 화면","desc":"위원 3인이 각자 태블릿에서 문항별 점수를 입력하는 화면입니다. 입력 셀만 열려 있고 계산·판정 영역은 잠겨 있어 실수로 수식이 지워지지 않습니다.","sub":"태블릿 세로 화면 기준","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"총점·평균 자동 산출","type":"판정·검증","desc":"세 위원의 입력이 들어오는 대로 위원별 총점과 3인 평균이 갱신됩니다. 아직 입력되지 않은 위원은 미입력으로 구분해 표시합니다.","sub":"입력 즉시 갱신","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"필수 조건 미달 표시","type":"판정·검증","desc":"필수 항목이 기준에 못 미치면 해당 문항이 강조되고 사유가 옆에 붙습니다. 총점 기준 미달도 같은 자리에서 확인합니다.","sub":"항목별 사유 표기","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"최종 실격 처리 표출","type":"판정·검증","desc":"판정 결과란에 실격 처리 문구와 판정 근거가 자동으로 출력됩니다. 위원이 문구를 직접 적지 않으므로 표기가 서로 달라지지 않습니다.","sub":"문구 자동 통일","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"이상 징후 대응 안내 팝업","type":"운영 대응","desc":"대응 버튼을 누르면 상황별 조치 순서와 보고 대상이 팝업으로 안내됩니다. 안내 문구는 별도 시트에서 관리해 시행 전에 수정할 수 있습니다.","sub":"상황별 문구 관리","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"중앙본부 취합 시트","type":"본부 취합","desc":"현장에서 입력된 개별 점수와 평균, 실격 여부가 본부 취합 시트에 종목·응시자 단위로 정리됩니다. 클라우드 동기화 폴더에 두면 본부에서 진행 현황을 확인합니다.","sub":"종목·응시자 단위 정리","id":"C5","img":"assets/img/case-5.svg","pub":1},{"title":"태블릿 구동 사용 가이드","type":"운영 대응","desc":"파일 열기부터 매크로 허용, 동기화 확인까지의 절차를 화면 순서대로 담았습니다. 시험 당일 위원 안내용으로 그대로 배포할 수 있습니다.","sub":"현장 배포용","id":"C6","img":"assets/img/case-6.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"157655"};
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
