/* 자동 생성 데모 공용 스크립트 — 전역은 DEMO 하나만 만든다(이름 충돌 방지) */
var DEMO = (function(){
  var D = {"brand":"한결정밀","brandSub":"Corporate Website Renewal Demo — WordPress","nav":[["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","회사 연혁"],["about.html","사업 분야"]],"cats":["회사 소개","사업 분야","소식","문의","관리자 편집"],"caseCats":["유형 1","유형 2","유형 3"],"items":[{"name":"회사 소개 (인사말·비전)","cat":"회사 소개","desc":"대표 인사말과 비전을 한 화면으로 통합. 기존 '회사 소개 / CEO 인사말 / 비전' 3페이지를 1페이지로 축소. 본문 텍스트는 관리자 화면에서 담당자가 직접 수정.","id":"I0","img":"assets/img/item-0.svg","pub":1},{"name":"회사 연혁","cat":"회사 소개","desc":"연도별 항목을 관리자 화면에서 추가·수정·삭제. 연도·월·내용 3칸만 입력하면 타임라인에 자동 반영. 개발자 없이 운영 가능한 영역.","id":"I1","img":"assets/img/item-1.svg","pub":1},{"name":"사업 분야","cat":"사업 분야","desc":"정밀 가공·금형·조립 3개 분야를 카드로 배치. 상세 텍스트와 대표 이미지는 파트너 선정 후 발주처가 제공하는 콘텐츠로 교체 예정(현재는 합성 자리표시).","id":"I2","img":"assets/img/item-2.svg","pub":1},{"name":"인증·설비 현황","cat":"사업 분야","desc":"보유 인증과 주요 설비를 표로 정리. 표의 행은 담당자가 관리자 화면에서 편집. 레이아웃 변경은 파트너 유지보수 범위.","id":"I3","img":"assets/img/item-3.svg","pub":1},{"name":"공지사항","cat":"소식","desc":"워드프레스 기본 글 기능을 그대로 사용. 제목·본문·첨부파일 등록이 가능하며 담당자가 가장 자주 쓰는 영역.","id":"I4","img":"assets/img/item-4.svg","pub":1},{"name":"고객 문의 폼","cat":"문의","desc":"회사명·담당자·연락처·문의 내용 4개 항목. 접수 시 담당자 메일로 발송되고 관리자 화면에도 저장. 스팸 방지 체크 포함.","id":"I5","img":"assets/img/item-5.svg","pub":1},{"name":"오시는 길 / 기본 정보","cat":"회사 소개","desc":"주소·대표번호·운영시간을 '사이트 기본 정보' 한 곳에서 수정하면 하단 푸터와 오시는 길 페이지에 동시 반영.","id":"I6","img":"assets/img/item-6.svg","pub":1},{"name":"관리자 대시보드 (담당자용)","cat":"관리자 편집","desc":"비개발자용으로 메뉴를 줄인 관리자 화면. 연혁·공지·기본 정보·문의 내역만 보이고 테마·플러그인 설정은 숨김. 교육 매뉴얼 기준 화면.","id":"I7","img":"assets/img/item-7.svg","pub":1},{"name":"호스팅 구성 비교","cat":"관리자 편집","desc":"공용 웹호스팅과 클라우드 서버의 월 유지 비용·관리 난이도·백업 방식 비교표. 발주처가 직접 선택할 수 있도록 장단점을 나열.","id":"I8","img":"assets/img/item-8.svg","pub":1}],"cases":[{"title":"연혁 추가: 담당자가 직접 등록","type":"정상 처리","desc":"담당자가 관리자 화면에서 '2026.09 신규 설비 도입' 항목을 추가하자 연혁 페이지 타임라인에 즉시 반영. 개발자 개입 없음.","id":"C0","img":"assets/img/case-0.svg","pub":1},{"title":"기존 페이지 주소 변경으로 외부 링크 끊김","type":"예외 처리","desc":"리뉴얼로 '/sub02_1.html' 주소가 사라져 검색 결과와 거래처 링크가 404로 이어짐. 기존 주소 목록을 받아 새 페이지로 301 리다이렉트 설정해 해결. 미팅에서 기존 주소 목록 확인 필요.","id":"C1","img":"assets/img/case-1.svg","pub":1},{"title":"문의 폼 이메일 미도착","type":"예외 처리","desc":"공용 웹호스팅 기본 메일 발송이 수신 측에서 스팸 처리됨. 외부 메일 발송 서비스로 전환하고 SPF 레코드를 추가해 도착률 확인. 관리자 화면에도 접수 내역이 남아 유실은 없었음.","id":"C2","img":"assets/img/case-2.svg","pub":1},{"title":"공지사항 등록 중 이미지 용량 초과","type":"예외 처리","desc":"담당자가 원본 사진을 그대로 올려 업로드 실패. 업로드 시 자동 리사이즈를 적용하고 매뉴얼에 권장 크기를 명시.","id":"C3","img":"assets/img/case-3.svg","pub":1},{"title":"담당자가 테마 설정을 잘못 건드린 경우","type":"권한 경계","desc":"편집자 권한으로는 테마·플러그인 메뉴가 보이지 않도록 제한. 레이아웃 변경은 하자보수 기간 중 파트너에게 요청하는 절차로 정리.","id":"C4","img":"assets/img/case-4.svg","pub":1},{"title":"SSL 인증서 만료 알림","type":"운영 점검","desc":"무료 인증서 자동 갱신이 실패해 만료 14일 전 알림 메일 수신. 갱신 작업을 수행하고 자동 갱신 스케줄을 재설정. 유지보수 범위에 포함.","id":"C5","img":"assets/img/case-5.svg","pub":1}],"labels":{"catalog":"제품·서비스","gallery":"시공·구축 사례","item":"제품","case":"사례"},"projectId":"159029"};
  function chrome(active){
    // ⚠️ 메뉴는 **실제 만들어진 페이지**를 따라간다. 예전엔 브로슈어 5페이지가 하드코딩돼
    //    있어서, integration 시안인데 메뉴가 "제품·서비스 / 시공·구축 사례 / 회사 소개" 였고
    //    그 링크들이 전부 404 로 갔다(2026-08-21 사용자 지적: "데모가 엉망이다").
    var nav = [["index.html","개요"],["catalog.html","회사 소개"],["gallery.html","회사 연혁"],["about.html","사업 분야"]];
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
