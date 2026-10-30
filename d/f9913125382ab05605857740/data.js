/* 바디노트 CRM — 제안용 시안 가상 시드 데이터
 * 모든 인물·고객·기록은 가상입니다. 실존 인물·업체와 무관합니다.
 * 날짜는 '오늘' 기준 상대값으로 생성해 언제 열어도 최근 기록처럼 보이게 했습니다. */
(function () {
  function ymd(dt) {
    var m = dt.getMonth() + 1, d = dt.getDate();
    return dt.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
  }
  function ago(n) { var t = new Date(); t.setHours(12, 0, 0, 0); t.setDate(t.getDate() - n); return ymd(t); }

  var muscles = [
    { id: 'm1', name: '상부 승모근', region: '목·어깨', view: 'B', dx: 12, y: 44, rx: 11, ry: 4.5, sym: true, point: '어깨 위 라인. 장시간 앉은 자세에서 쉽게 뭉침. 가볍게 잡아 늘리듯 풀어 준다.' },
    { id: 'm2', name: '견갑거근', region: '목·어깨', view: 'B', dx: 7, y: 39, rx: 3, ry: 6, sym: true, point: '목 옆에서 견갑골 위쪽으로 이어짐. 고개 돌림이 불편할 때 함께 확인.' },
    { id: 'm3', name: '흉쇄유돌근', region: '목 앞', view: 'F', dx: 5, y: 38, rx: 2.5, ry: 6, sym: true, point: '귀 뒤에서 쇄골 쪽으로 사선. 압을 약하게, 짧게.' },
    { id: 'm4', name: '사각근', region: '목 옆', view: 'F', dx: 9, y: 40, rx: 3, ry: 4, sym: true, point: '목 옆 깊은 쪽. 저림을 호소하면 압을 즉시 줄인다.' },
    { id: 'm5', name: '후두하근', region: '뒷머리 아래', view: 'B', dx: 0, y: 31, rx: 7, ry: 3, sym: false, point: '두개골 바로 아래. 누운 자세에서 손끝으로 지그시.' },
    { id: 'm6', name: '심부 목굴곡근', region: '목 앞 깊은 층', view: 'F', dx: 0, y: 39, rx: 3, ry: 4, sym: false, point: '머리를 바로 세우는 근육. 수기보다 턱 당기기 운동으로 깨운다.' },
    { id: 'm7', name: '대흉근', region: '가슴', view: 'F', dx: 11, y: 56, rx: 10, ry: 7, sym: true, point: '어깨가 앞으로 말린 고객에서 짧아져 있는 경우가 많다.' },
    { id: 'm8', name: '소흉근', region: '가슴 위', view: 'F', dx: 14, y: 50, rx: 5, ry: 3.5, sym: true, point: '대흉근 아래 깊은 층. 팔을 올릴 때 걸림과 함께 확인.' },
    { id: 'm9', name: '능형근', region: '날개뼈 사이', view: 'B', dx: 7, y: 60, rx: 5, ry: 8, sym: true, point: '늘어나 약해진 경우가 많아 풀기보다 운동으로 깨우는 쪽.' },
    { id: 'm10', name: '극하근', region: '날개뼈 위', view: 'B', dx: 16, y: 62, rx: 6, ry: 6, sym: true, point: '어깨 뒤 회전 근육. 엎드린 자세에서 엄지로 천천히.' },
    { id: 'm11', name: '전거근', region: '옆구리 위', view: 'F', dx: 19, y: 70, rx: 4, ry: 8, sym: true, point: '날개뼈를 몸통에 붙여 주는 근육. 벽 짚고 밀기 운동과 연결.' },
    { id: 'm12', name: '척추기립근', region: '등·허리', view: 'B', dx: 4, y: 88, rx: 3.5, ry: 18, sym: true, point: '척추 양옆 긴 근육. 손바닥 전체로 길게 쓸어 준다.' },
    { id: 'm13', name: '요방형근', region: '허리 옆', view: 'B', dx: 12, y: 100, rx: 5, ry: 7, sym: true, point: '골반 높이 차이, 한쪽 허리 묵직함과 자주 함께 나타남.' },
    { id: 'm14', name: '장요근', region: '고관절 앞', view: 'F', dx: 9, y: 112, rx: 5, ry: 9, sym: true, point: '오래 앉는 생활에서 짧아지기 쉬움. 복부 깊은 압은 피하고 스트레칭 위주.' },
    { id: 'm15', name: '대둔근', region: '엉덩이', view: 'B', dx: 10, y: 121, rx: 9, ry: 8, sym: true, point: '엉덩이 큰 근육. 브릿지로 활성화.' },
    { id: 'm16', name: '중둔근', region: '엉덩이 옆', view: 'B', dx: 16, y: 110, rx: 6, ry: 4.5, sym: true, point: '한 발 서기 안정성과 연결. 클램쉘로 깨운다.' },
    { id: 'm17', name: '햄스트링', region: '허벅지 뒤', view: 'B', dx: 11, y: 158, rx: 6, ry: 20, sym: true, point: '앞으로 숙일 때 당김. 반동 없이 천천히 늘린다.' },
    { id: 'm18', name: '비복근', region: '종아리', view: 'B', dx: 11.5, y: 206, rx: 5, ry: 13, sym: true, point: '서서 일하는 고객의 붓기·당김과 관련. 아래에서 위로 쓸어 올린다.' }
  ];

  var exercises = [
    { id: 'e1', name: '목 옆 늘리기', anim: 'neck', dose: '좌우 20초 × 3회', dur: '0:40', steps: ['의자에 바르게 앉아 한 손으로 의자 옆을 잡습니다.', '반대쪽으로 고개를 천천히 기울입니다.', '목 옆이 당기는 느낌에서 20초 머뭅니다.'], caution: '팔이 저리거나 어지러우면 바로 멈추세요.' },
    { id: 'e2', name: '어깨 으쓱 후 천천히 내리기', anim: 'arms', dose: '10회 × 2세트', dur: '0:35', steps: ['양어깨를 귀 쪽으로 끌어올립니다.', '3초 머문 뒤 5초에 걸쳐 천천히 내립니다.', '내릴 때 숨을 길게 내쉽니다.'], caution: '어깨에 걸리는 느낌이 있으면 범위를 줄이세요.' },
    { id: 'e3', name: '턱 당기기', anim: 'neck', dose: '10회 × 3세트', dur: '0:30', steps: ['벽에 등과 뒤통수를 붙이고 섭니다.', '턱을 목 쪽으로 살짝 당겨 뒷목을 길게 만듭니다.', '5초 유지 후 힘을 뺍니다.'], caution: '고개를 숙이는 동작이 아닙니다. 시선은 정면.' },
    { id: 'e4', name: '문틀 가슴 늘리기', anim: 'arms', dose: '30초 × 3회', dur: '0:45', steps: ['문틀에 팔꿈치를 어깨 높이로 댑니다.', '한 발 앞으로 내딛으며 가슴을 앞으로 보냅니다.', '가슴 앞이 늘어나는 느낌에서 멈춥니다.'], caution: '어깨 앞이 찌릿하면 팔 높이를 낮추세요.' },
    { id: 'e5', name: '벽 천사', anim: 'arms', dose: '8회 × 2세트', dur: '0:50', steps: ['벽에 등을 대고 팔을 W 모양으로 붙입니다.', '팔이 벽에서 떨어지지 않게 위로 밀어 올립니다.', '천천히 W 자세로 돌아옵니다.'], caution: '허리가 벽에서 뜨지 않게 배에 살짝 힘을 줍니다.' },
    { id: 'e6', name: '엎드려 Y-T 팔 들기', anim: 'arms', dose: 'Y·T 각 8회', dur: '0:55', steps: ['엎드려 이마를 수건 위에 둡니다.', '엄지가 위를 향하게 팔을 Y 모양으로 들어 2초.', '이어서 T 모양으로 들어 2초.'], caution: '목에 힘이 들어가면 높이를 낮추세요.' },
    { id: 'e7', name: '옆으로 누워 어깨 돌리기', anim: 'side', dose: '좌우 10회', dur: '0:40', steps: ['옆으로 누워 아래팔을 앞으로 뻗습니다.', '위쪽 손으로 아래팔을 가볍게 안쪽으로 돌립니다.', '당김이 느껴지면 3초 머뭅니다.'], caution: '강하게 누르지 말고 가볍게.' },
    { id: 'e8', name: '고양이-소 자세', anim: 'bend', dose: '10회 × 2세트', dur: '0:45', steps: ['네발 자세로 손은 어깨 아래, 무릎은 골반 아래.', '숨을 내쉬며 등을 둥글게 말아 올립니다.', '숨을 들이마시며 가슴을 앞으로 내밉니다.'], caution: '허리를 과하게 꺾지 않습니다.' },
    { id: 'e9', name: '옆구리 늘리기', anim: 'arms', dose: '좌우 20초 × 2회', dur: '0:35', steps: ['서서 한 팔을 머리 위로 올립니다.', '반대쪽으로 몸통을 천천히 기울입니다.', '옆구리가 늘어나는 느낌에서 머뭅니다.'], caution: '골반이 옆으로 밀리지 않게 합니다.' },
    { id: 'e10', name: '한쪽 무릎 꿇고 고관절 앞 늘리기', anim: 'squat', dose: '좌우 30초 × 2회', dur: '0:45', steps: ['한쪽 무릎을 꿇고 반대 발을 앞에 둡니다.', '엉덩이에 힘을 주고 골반을 앞으로 밀어 줍니다.', '뒷다리 허벅지 앞쪽이 당기면 멈춥니다.'], caution: '무릎 아래 수건이나 방석을 받치세요.' },
    { id: 'e11', name: '브릿지', anim: 'bridge', dose: '12회 × 2세트', dur: '0:40', steps: ['누워서 무릎을 세우고 발을 골반 너비로 둡니다.', '엉덩이에 힘을 주며 골반을 들어 올립니다.', '어깨-골반-무릎이 일직선에서 2초 머뭅니다.'], caution: '허리가 아니라 엉덩이로 들어 올립니다.' },
    { id: 'e12', name: '클램쉘', anim: 'side', dose: '좌우 15회', dur: '0:40', steps: ['옆으로 누워 무릎을 45도로 굽힙니다.', '발끝을 붙인 채 위쪽 무릎을 조개처럼 엽니다.', '천천히 닫습니다.'], caution: '골반이 뒤로 넘어가지 않게 고정합니다.' },
    { id: 'e13', name: '수건 허벅지 뒤 늘리기', anim: 'bend', dose: '좌우 30초 × 2회', dur: '0:45', steps: ['누워서 한 발에 수건을 겁니다.', '무릎을 편 채 다리를 천천히 들어 올립니다.', '허벅지 뒤가 당기는 지점에서 머뭅니다.'], caution: '반동을 주지 마세요.' },
    { id: 'e14', name: '벽 짚고 종아리 늘리기', anim: 'squat', dose: '좌우 30초 × 2회', dur: '0:35', steps: ['벽을 짚고 한 발을 뒤로 뺍니다.', '뒷발 뒤꿈치를 바닥에 붙인 채 몸을 앞으로.', '종아리가 당기면 머뭅니다.'], caution: '뒤꿈치가 들리지 않게 합니다.' }
  ];

  var programs = [
    { id: 'p1', name: '목 옆라인 이완 관리', type: '수기', minutes: 15, muscles: ['m1', 'm2', 'm4'], exercises: ['e1', 'e2'],
      method: ['엎드린 자세에서 상부 승모근을 손바닥으로 넓게 쓸어 온도를 올린다.', '견갑거근 부착부(날개뼈 위 안쪽)를 엄지로 지그시 눌러 10초씩 3회.', '바로 누운 자세로 바꿔 목을 반대쪽으로 살짝 기울인 상태에서 사각근을 손끝으로 가볍게 쓸어 준다.', '마무리로 어깨를 아래로 내리며 목 옆을 길게 늘인다.'],
      caution: '목 앞·옆 깊은 곳은 압을 약하게. 저림·어지러움 호소 시 즉시 중단하고 기록한다.' },
    { id: 'p2', name: '뒷목·후두하 이완 관리', type: '수기', minutes: 12, muscles: ['m5', 'm3'], exercises: ['e3'],
      method: ['바로 누운 자세에서 두 손을 뒤통수 아래에 받친다.', '손끝을 두개골 바로 아래에 걸고 머리 무게로 1분간 지그시 이완.', '흉쇄유돌근은 엄지와 검지로 가볍게 집어 위에서 아래로 3회.'],
      caution: '경동맥 주변은 누르지 않는다. 두통이 심한 날은 강도를 낮추고 관리 후 상태를 묻는다.' },
    { id: 'p3', name: '가슴 앞 열기 관리', type: '수기+스트레칭', minutes: 15, muscles: ['m7', 'm8'], exercises: ['e4', 'e5'],
      method: ['바로 누운 자세에서 대흉근을 쇄골 아래부터 겨드랑이 방향으로 쓸어 준다.', '팔을 살짝 벌린 상태에서 소흉근 부위를 손끝으로 지그시 30초.', '팔을 머리 위로 천천히 올리며 가슴 앞을 늘인다.'],
      caution: '여성 고객은 사전에 부위를 설명하고 동의를 받는다. 수건으로 덮고 진행.' },
    { id: 'p4', name: '날개뼈 안정화 운동', type: '운동', minutes: 20, muscles: ['m9', 'm11'], exercises: ['e5', 'e6'],
      method: ['벽 천사로 날개뼈 움직임을 확인한다.', '엎드려 Y-T 팔 들기를 관리사가 손으로 날개뼈 위치를 잡아 주며 진행.', '마지막 세트는 고객 혼자 수행하게 하고 자세를 확인한다.'],
      caution: '목에 힘이 들어가면 범위를 줄이고 횟수를 낮춘다.' },
    { id: 'p5', name: '어깨 뒤 회전근 이완', type: '수기', minutes: 12, muscles: ['m10'], exercises: ['e7'],
      method: ['엎드린 자세에서 날개뼈 위 극하근을 엄지로 천천히 눌러 찾는다.', '눌린 상태에서 고객이 팔을 천천히 돌리게 해 함께 이완.', '옆으로 누운 자세로 어깨를 부드럽게 돌려 마무리.'],
      caution: '팔을 올릴 때 날카로운 통증을 호소하면 진행하지 않고 전문 진료를 권한다.' },
    { id: 'p6', name: '허리 옆라인 이완 관리', type: '수기', minutes: 15, muscles: ['m13', 'm12'], exercises: ['e8', 'e9'],
      method: ['옆으로 누운 자세에서 골반과 갈비뼈 사이 요방형근을 손바닥으로 넓게 누른다.', '척추기립근은 엎드린 자세에서 위에서 아래로 길게 쓸어 준다.', '양쪽 높이 차이를 다시 확인하고 기록한다.'],
      caution: '허리 통증이 다리로 퍼지는 경우 관리하지 않고 기록 후 진료를 권한다.' },
    { id: 'p7', name: '고관절 앞 이완 관리', type: '수기+스트레칭', minutes: 15, muscles: ['m14'], exercises: ['e10'],
      method: ['바로 누운 자세에서 무릎을 세워 복부 긴장을 푼다.', '허벅지 앞 윗부분을 손바닥으로 넓게 눌러 이완.', '한쪽 무릎 꿇기 자세에서 고관절 앞 스트레칭을 지도한다.'],
      caution: '복부 깊은 압박은 하지 않는다. 식사 직후 고객은 스트레칭 위주로.' },
    { id: 'p8', name: '엉덩이 근육 깨우기 운동', type: '운동', minutes: 20, muscles: ['m15', 'm16'], exercises: ['e11', 'e12'],
      method: ['브릿지 12회로 엉덩이 근육 사용을 확인한다.', '클램쉘 좌우 15회. 관리사가 골반이 뒤로 넘어가지 않게 잡아 준다.', '한 발 서기 30초로 전후 변화를 비교해 기록한다.'],
      caution: '허리로 들어 올리는 보상 동작이 나오면 횟수를 줄인다.' },
    { id: 'p9', name: '허벅지 뒤 유연성 관리', type: '수기+스트레칭', minutes: 15, muscles: ['m17'], exercises: ['e13'],
      method: ['엎드린 자세에서 햄스트링을 무릎 뒤에서 엉덩이 방향으로 쓸어 올린다.', '바로 누워 수건으로 다리를 들어 천천히 늘린다.', '앞으로 숙이기 테스트로 전후 변화를 기록한다.'],
      caution: '허벅지 뒤 저림이 있으면 범위를 줄인다.' },
    { id: 'p10', name: '종아리 순환 관리', type: '수기', minutes: 12, muscles: ['m18'], exercises: ['e14'],
      method: ['엎드린 자세에서 발목부터 무릎 뒤까지 아래에서 위로 쓸어 올린다.', '종아리 가운데를 양손으로 감싸 가볍게 주무른다.', '발목을 천천히 돌려 마무리.'],
      caution: '정맥이 도드라진 부위는 누르지 않는다.' },
    { id: 'p11', name: '바른 목 자세 운동', type: '운동', minutes: 15, muscles: ['m6'], exercises: ['e3', 'e5'],
      method: ['누운 자세에서 턱 당기기 10회로 감각을 익힌다.', '선 자세에서 벽에 기대 턱 당기기 10회.', '벽 천사와 연결해 자세 유지를 연습한다.'],
      caution: '고개를 숙이는 동작으로 바뀌지 않게 시선을 정면에 둔다.' }
  ];

  var observations = [
    { id: 'o1', cat: '자세 관찰', label: '머리가 어깨보다 앞으로 나와 있음', muscles: ['m5', 'm3', 'm6', 'm1'], programs: ['p2', 'p11', 'p1'] },
    { id: 'o2', cat: '자세 관찰', label: '어깨가 앞으로 말려 있음', muscles: ['m7', 'm8', 'm9', 'm11'], programs: ['p3', 'p4'] },
    { id: 'o3', cat: '자세 관찰', label: '한쪽 어깨가 더 높음', muscles: ['m1', 'm2', 'm13'], programs: ['p1', 'p6'] },
    { id: 'o4', cat: '자세 관찰', label: '등이 둥글게 굽어 있음', muscles: ['m7', 'm9', 'm12'], programs: ['p3', 'p4'] },
    { id: 'o5', cat: '자세 관찰', label: '허리가 과하게 젖혀져 있음', muscles: ['m14', 'm12', 'm15'], programs: ['p7', 'p8'] },
    { id: 'o6', cat: '자세 관찰', label: '좌우 골반 높이가 다름', muscles: ['m13', 'm16'], programs: ['p6', 'p8'] },
    { id: 'o7', cat: '움직임 테스트', label: '고개를 옆으로 돌릴 때 불편함', muscles: ['m2', 'm3', 'm4', 'm1'], programs: ['p1', 'p2'] },
    { id: 'o8', cat: '움직임 테스트', label: '고개를 숙일 때 뒷목이 당김', muscles: ['m5', 'm1'], programs: ['p2', 'p1'] },
    { id: 'o9', cat: '움직임 테스트', label: '팔을 머리 위로 올릴 때 어깨가 걸림', muscles: ['m10', 'm8', 'm11'], programs: ['p5', 'p3', 'p4'] },
    { id: 'o10', cat: '움직임 테스트', label: '앞으로 숙일 때 허벅지 뒤가 당김', muscles: ['m17', 'm12'], programs: ['p9'] },
    { id: 'o11', cat: '움직임 테스트', label: '한 발 서기에서 골반이 흔들림', muscles: ['m16', 'm15'], programs: ['p8'] },
    { id: 'o12', cat: '움직임 테스트', label: '스쿼트할 때 무릎이 안쪽으로 모임', muscles: ['m16', 'm15'], programs: ['p8'] },
    { id: 'o13', cat: '고객이 말한 불편', label: '어깨·목이 자주 뻐근함', muscles: ['m1', 'm2'], programs: ['p1'] },
    { id: 'o14', cat: '고객이 말한 불편', label: '오래 앉아 있으면 허리가 묵직함', muscles: ['m13', 'm14', 'm12'], programs: ['p6', 'p7'] },
    { id: 'o15', cat: '고객이 말한 불편', label: '오후가 되면 종아리가 붓고 당김', muscles: ['m18'], programs: ['p10'] },
    { id: 'o16', cat: '고객이 말한 불편', label: '모니터 작업 후 뒷머리가 묵직함', muscles: ['m5', 'm6'], programs: ['p2', 'p11'] }
  ];

  var packages = [
    { id: 'k1', name: '체험 3회권', total: 3 },
    { id: 'k2', name: '바디케어 5회권', total: 5 },
    { id: 'k3', name: '바디케어 10회권', total: 10 },
    { id: 'k4', name: '바디케어+운동 20회권', total: 20 }
  ];

  var accounts = [
    { id: 'a1', name: '박정민', role: 'admin', title: '대표 · 관리자', active: true, perms: { allCustomers: true, viewConsult: true, editCustomers: true } },
    { id: 'a2', name: '김서연', role: 'staff', title: '관리사', active: true, perms: { allCustomers: true, viewConsult: true, editCustomers: true } },
    { id: 'a3', name: '이도윤', role: 'staff', title: '관리사', active: true, perms: { allCustomers: false, viewConsult: false, editCustomers: false } }
  ];

  var customers = [
    { id: 'c1', name: '김지은', gender: '여', birth: 1991, job: '사무직(하루 8시간 이상 모니터 작업)', staff: 'a2', pkg: 'k3', pkgStart: ago(40), loginId: 'jieun91', loginOn: true, status: '이용중', joined: ago(42),
      consult: { main: '오후가 되면 어깨와 목이 뻐근하고, 고개를 오른쪽으로 돌릴 때 걸리는 느낌.', life: '재택 근무 3년째. 노트북을 소파에서 쓰는 날이 많음.', exp: '필라테스 6개월(2년 전). 현재 운동 없음.' },
      pref: { pressure: '보통', time: '평일 저녁 7시 이후', avoid: '복부', note: '향이 강한 오일은 피하고 싶음.' },
      assigned: ['e1', 'e3', 'e5'] },
    { id: 'c2', name: '박민수', gender: '남', birth: 1986, job: '물류센터 관리(서서 일함)', staff: 'a2', pkg: 'k4', pkgStart: ago(55), loginId: 'minsu86', loginOn: true, status: '이용중', joined: ago(56),
      consult: { main: '퇴근 무렵 허리가 묵직하고 종아리가 붓는 느낌.', life: '하루 1만 5천 보 이상. 주말엔 거의 누워 지냄.', exp: '헬스 1년. 하체 운동은 거의 안 함.' },
      pref: { pressure: '강하게', time: '주말 오전', avoid: '없음', note: '설명을 자세히 듣는 걸 좋아함.' },
      assigned: ['e11', 'e14', 'e8'] },
    { id: 'c3', name: '이수진', gender: '여', birth: 1979, job: '초등학교 교사', staff: 'a3', pkg: 'k3', pkgStart: ago(30), loginId: 'sujin79', loginOn: true, status: '이용중', joined: ago(31),
      consult: { main: '판서할 때 오른팔을 올리면 어깨 앞이 걸림.', life: '수업 중 서 있는 시간이 김. 수면 6시간.', exp: '요가 수업 주 1회.' },
      pref: { pressure: '약하게', time: '평일 오후 5시', avoid: '목 앞', note: '목을 만지는 것에 긴장하는 편.' },
      assigned: ['e4', 'e7'] },
    { id: 'c4', name: '최영호', gender: '남', birth: 1972, job: '택시 운전', staff: 'a3', pkg: 'k2', pkgStart: ago(25), loginId: 'youngho72', loginOn: true, status: '이용중', joined: ago(26),
      consult: { main: '오래 앉아 운전하면 허리가 굳고, 차에서 내릴 때 허리를 바로 펴기 어려움.', life: '하루 10시간 운전. 식사가 불규칙.', exp: '운동 경험 거의 없음.' },
      pref: { pressure: '보통', time: '평일 오전 10시', avoid: '없음', note: '동작 설명은 짧게 해 주길 원함.' },
      assigned: ['e10', 'e11'] },
    { id: 'c5', name: '정하나', gender: '여', birth: 1995, job: '디자이너', staff: 'a2', pkg: 'k1', pkgStart: ago(12), loginId: 'hana95', loginOn: true, status: '체험중', joined: ago(13),
      consult: { main: '모니터 작업 후 뒷머리가 묵직함. 거북목이 신경 쓰임.', life: '마감 주간엔 하루 12시간 앉아 있음.', exp: '홈트 영상 가끔.' },
      pref: { pressure: '보통', time: '토요일 오후', avoid: '없음', note: '사진으로 자세 변화를 보고 싶어함.' },
      assigned: ['e3'] },
    { id: 'c6', name: '윤서연', gender: '여', birth: 1988, job: '간호사(교대 근무)', staff: 'a2', pkg: 'k2', pkgStart: ago(70), loginId: 'seoyeon88', loginOn: true, status: '만료 임박', joined: ago(71),
      consult: { main: '야간 근무 후 종아리 당김, 허리 묵직함.', life: '3교대. 수면 시간이 일정하지 않음.', exp: '러닝 주 2회.' },
      pref: { pressure: '강하게', time: '근무표에 맞춰 유동', avoid: '없음', note: '관리 중 대화보다 조용한 걸 선호.' },
      assigned: ['e14', 'e13'] },
    { id: 'c7', name: '조은비', gender: '여', birth: 2000, job: '대학원생', staff: 'a3', pkg: 'k2', pkgStart: ago(18), loginId: 'eunbi00', loginOn: true, status: '이용중', joined: ago(19),
      consult: { main: '한쪽 어깨가 더 높다는 말을 자주 들음. 가방을 오른쪽으로만 멤.', life: '연구실 책상 작업 위주.', exp: '없음.' },
      pref: { pressure: '약하게', time: '평일 점심', avoid: '없음', note: '' },
      assigned: ['e1', 'e9'] },
    { id: 'c8', name: '임현우', gender: '남', birth: 1983, job: '개발자', staff: 'a2', pkg: 'k4', pkgStart: ago(90), loginId: 'hyunwoo83', loginOn: true, status: '이용중', joined: ago(92),
      consult: { main: '등이 굽고 어깨가 말렸다는 지적을 받음. 팔 올릴 때 뻑뻑함.', life: '재택 + 주 2회 출근. 하루 대부분 앉아 있음.', exp: '수영 3개월.' },
      pref: { pressure: '보통', time: '평일 저녁 8시', avoid: '없음', note: '운동 숙제를 체크리스트로 받는 걸 좋아함.' },
      assigned: ['e4', 'e5', 'e6'] },
    { id: 'c9', name: '오미경', gender: '여', birth: 1968, job: '식당 운영', staff: 'a3', pkg: 'k3', pkgStart: ago(35), loginId: 'mikyung68', loginOn: true, status: '이용중', joined: ago(36),
      consult: { main: '오후에 종아리가 붓고 저녁엔 허리가 무거움.', life: '하루 대부분 서서 주방 일.', exp: '동네 걷기 모임.' },
      pref: { pressure: '보통', time: '월요일(휴무일)', avoid: '무릎', note: '무릎을 굽히는 동작이 불편.' },
      assigned: ['e14', 'e8'] },
    { id: 'c10', name: '신재훈', gender: '남', birth: 1990, job: '헬스 트레이너', staff: 'a2', pkg: 'k2', pkgStart: ago(60), loginId: 'jaehoon90', loginOn: false, status: '휴면', joined: ago(61),
      consult: { main: '스쿼트할 때 무릎이 안쪽으로 모이는 습관.', life: '운동량 많음. 스트레칭 부족.', exp: '웨이트 8년.' },
      pref: { pressure: '강하게', time: '평일 오후 2시', avoid: '없음', note: '근육 이름으로 설명해 주면 좋아함.' },
      assigned: ['e12', 'e11'] },
    { id: 'c11', name: '송민지', gender: '여', birth: 1993, job: '은행 창구', staff: 'a3', pkg: 'k1', pkgStart: ago(6), loginId: 'minji93', loginOn: true, status: '체험중', joined: ago(7),
      consult: { main: '목과 어깨가 자주 뻐근함. 고개 숙이면 뒷목이 당김.', life: '하루 종일 앉아서 고개 숙인 자세.', exp: '없음.' },
      pref: { pressure: '약하게', time: '토요일 오전', avoid: '없음', note: '' },
      assigned: [] },
    { id: 'c12', name: '홍성준', gender: '남', birth: 1977, job: '건설 현장 관리', staff: 'a2', pkg: 'k3', pkgStart: ago(48), loginId: 'sungjun77', loginOn: true, status: '이용중', joined: ago(49),
      consult: { main: '아침에 허리를 숙이면 허벅지 뒤가 심하게 당김.', life: '현장 이동이 많고 차량 이동도 많음.', exp: '조기축구.' },
      pref: { pressure: '강하게', time: '일요일 오전', avoid: '없음', note: '' },
      assigned: ['e13', 'e8'] }
  ];

  // [고객, 며칠 전, 관리사, 관찰항목, 최종 프로그램, 내부 메모, 고객 안내 메모]
  var V = [
    ['c1', 40, 'a2', ['o1', 'o7', 'o13'], ['p1', 'p2'], '오른쪽 회전 시 제한 뚜렷. 견갑거근 부착부 압통.', '목 옆과 뒷목을 중심으로 풀었어요. 노트북 받침대를 써 보세요.'],
    ['c1', 33, 'a2', ['o1', 'o7'], ['p1'], '회전 범위 지난 회차보다 개선. 압은 보통 유지.', '고개 돌리기가 지난번보다 편해졌어요. 목 옆 늘리기를 계속해 주세요.'],
    ['c1', 26, 'a2', ['o1', 'o2'], ['p3', 'p11'], '어깨 말림 확인. 가슴 앞 이완 후 턱 당기기 지도.', '가슴 앞을 열어 주는 관리를 했어요. 턱 당기기를 하루 3세트 해 보세요.'],
    ['c1', 12, 'a2', ['o1', 'o16'], ['p2', 'p11'], '마감 주간이라 뒷머리 묵직함 호소. 후두하 이완 위주.', '뒷머리 아래를 풀어 드렸어요. 작업 50분마다 일어나 주세요.'],
    ['c1', 5, 'a2', ['o2', 'o13'], ['p1', 'p4'], '날개뼈 운동 자세 양호. 다음 회차 벽 천사 횟수 늘리기.', '날개뼈 운동 자세가 좋아요. 벽 천사를 8회 2세트로 해 주세요.'],
    ['c2', 55, 'a2', ['o5', 'o14', 'o15'], ['p7', 'p10'], '골반 앞기울기. 종아리 붓기 뚜렷.', '고관절 앞과 종아리를 풀었어요.'],
    ['c2', 41, 'a2', ['o5', 'o11'], ['p8'], '한 발 서기 좌측 흔들림. 브릿지 보상 동작 있음.', '엉덩이 근육 깨우기 운동을 배웠어요. 브릿지를 꼭 해 주세요.'],
    ['c2', 27, 'a2', ['o14', 'o15'], ['p6', 'p10'], '허리 옆 압통 감소.', '허리 옆과 종아리를 풀었어요. 퇴근 후 종아리 늘리기 추천드려요.'],
    ['c2', 9, 'a2', ['o11'], ['p8'], '한 발 서기 30초 유지 가능.', '한 발 서기가 30초까지 안정적이에요.'],
    ['c3', 30, 'a3', ['o9', 'o2'], ['p5', 'p3'], '오른팔 거상 시 걸림. 극하근 압통.', '어깨 뒤와 가슴 앞을 부드럽게 풀었어요.'],
    ['c3', 16, 'a3', ['o9'], ['p5'], '거상 범위 개선.', '팔 올리기가 한결 편해졌어요.'],
    ['c3', 3, 'a3', ['o9', 'o4'], ['p3', 'p4'], '등 굽음 확인, 날개뼈 운동 시작.', '날개뼈 운동을 시작했어요.'],
    ['c4', 25, 'a3', ['o14', 'o5'], ['p7', 'p6'], '고관절 앞 짧아짐 확연.', '고관절 앞과 허리 옆을 풀었어요. 운전 2시간마다 쉬어 주세요.'],
    ['c4', 11, 'a3', ['o14'], ['p7', 'p8'], '차에서 내릴 때 불편 감소했다고 함.', '엉덩이 운동을 추가했어요.'],
    ['c5', 12, 'a2', ['o1', 'o16'], ['p2', 'p11'], '전방 머리 자세. 사진 기록 원함.', '뒷머리 아래를 풀고 턱 당기기를 배웠어요.'],
    ['c6', 70, 'a2', ['o15', 'o14'], ['p10', 'p6'], '종아리 붓기 뚜렷.', '종아리와 허리 옆을 풀었어요.'],
    ['c6', 50, 'a2', ['o15'], ['p10'], '', '종아리 순환 관리를 했어요.'],
    ['c6', 35, 'a2', ['o10', 'o15'], ['p9', 'p10'], '허벅지 뒤 짧아짐.', '허벅지 뒤 늘리기를 추가했어요.'],
    ['c6', 8, 'a2', ['o15', 'o14'], ['p10', 'p6'], '남은 회차 1회. 재등록 상담 예정.', '남은 회차는 1회예요.'],
    ['c7', 18, 'a3', ['o3', 'o13'], ['p1', 'p6'], '오른쪽 어깨 1cm 높음.', '목 옆과 허리 옆을 풀었어요. 가방을 번갈아 메 주세요.'],
    ['c7', 4, 'a3', ['o3'], ['p1'], '좌우 차이 감소.', '어깨 높이 차이가 줄었어요.'],
    ['c8', 90, 'a2', ['o2', 'o4', 'o9'], ['p3', 'p4'], '라운드숄더 + 등 굽음.', '가슴 앞을 열고 날개뼈 운동을 시작했어요.'],
    ['c8', 70, 'a2', ['o2', 'o9'], ['p3', 'p5'], '', '어깨 뒤를 추가로 풀었어요.'],
    ['c8', 49, 'a2', ['o4'], ['p4'], '날개뼈 운동 자세 안정.', '날개뼈 운동 단계를 올렸어요.'],
    ['c8', 21, 'a2', ['o2'], ['p3', 'p4'], '', '가슴 앞 늘리기를 꾸준히 해 주세요.'],
    ['c8', 7, 'a2', ['o9'], ['p5'], '팔 올림 끝 범위 걸림 거의 없음.', '팔 올리기가 많이 편해졌어요.'],
    ['c9', 35, 'a3', ['o15', 'o14'], ['p10', 'p6'], '무릎 굽힘 동작 불편, 운동 선택 시 주의.', '종아리와 허리 옆을 풀었어요.'],
    ['c9', 14, 'a3', ['o15'], ['p10'], '', '종아리 순환 관리를 했어요.'],
    ['c10', 60, 'a2', ['o12', 'o11'], ['p8'], '스쿼트 시 무릎 모임 습관.', '엉덩이 옆 근육 운동을 배웠어요.'],
    ['c11', 6, 'a3', ['o13', 'o8'], ['p1', 'p2'], '첫 체험. 압 약하게.', '목 옆과 뒷목을 부드럽게 풀었어요.'],
    ['c12', 48, 'a2', ['o10', 'o14'], ['p9', 'p6'], '숙이기 시 손끝-바닥 20cm.', '허벅지 뒤와 허리 옆을 풀었어요.'],
    ['c12', 30, 'a2', ['o10'], ['p9'], '손끝-바닥 12cm.', '숙이기 범위가 늘었어요.'],
    ['c12', 13, 'a2', ['o10', 'o5'], ['p9', 'p7'], '', '고관절 앞 스트레칭을 추가했어요.']
  ];

  window.makeSeed = function () {
    var visits = V.map(function (r, i) {
      return { id: 'v' + (i + 1), cust: r[0], date: ago(r[1]), staff: r[2], obs: r[3], programs: r[4], internal: r[5], memo: r[6] };
    });
    // 최근 10일 홈운동 수행 체크 (결정적 패턴)
    var checks = {};
    customers.forEach(function (c, ci) {
      if (!c.assigned.length || c.status === '휴면') return;
      var m = {};
      for (var n = 1; n <= 10; n++) {
        var done = c.assigned.filter(function (e, ei) { return (n * 7 + ci * 3 + ei * 5) % 10 < 6; });
        if (done.length) m[ago(n)] = done;
      }
      checks[c.id] = m;
    });
    return JSON.parse(JSON.stringify({
      version: 1,
      role: 'staff',
      session: { customerId: 'c1' },
      muscles: muscles, exercises: exercises, programs: programs, observations: observations,
      packages: packages, accounts: accounts, customers: customers, visits: visits, checks: checks
    }));
  };
  window.todayYmd = function () { return ago(0); };
  window.agoYmd = ago;
})();
