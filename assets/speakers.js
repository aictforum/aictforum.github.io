// 초청 연사와 세션 구성.
// 출처: 「2026 포럼 일정안 1026.xlsx」의 일정표·연사정보(포스터제작용) 시트, 구글 문서 "2026 AICT포럼 연사 정보 (원본)"
// 연사나 발표 순서를 바꿀 때는 이 파일만 고치면 프로그램의 발표 목록, 연사 카드, 상세 창이 함께 바뀝니다.
// 목록 순서가 곧 세션 안의 발표 순서입니다.
// 사진은 assets/speakers/ 폴더에 360×480(3:4) JPG로 둡니다. 원본은 구글 문서의 연사별 사진(게재 허락 받음).
const SESSIONS = {
  1: "AI 시대, 문화기술의 미래와 발전 방향",
  2: "문화기술이 만드는 경험 혁신",
  3: "AI 기반 콘텐츠 제작과 산업 활용",
};

const SPEAKERS = [
  // Session 1
  {
    session: 1,
    name: "강동주",
    photo: "assets/speakers/kang-dongju.jpg",
    org: "한국문화기술기획평가원(KCTEP)",
    role: "PD",
    title: "Beyond Content: AI가 연결하는 문화기술(CT)의 새로운 가치 생태계",
    summary: "미래 문화기술의 경쟁력은 콘텐츠를 얼마나 지능적으로 생성하는가에만 있지 않으며, 사람의 이동과 체류, 공간과의 상호작용, 에너지 소비, 지역경제의 생산활동 등 콘텐츠와 산업 간의 상호작용을 어떻게 연결하고 변화시키는가에 달려 있으며, AI 기반의 이종 분야 간 연계와 확장적 적용을 통해 새로운 기회를 창출할 수 있을 것으로 기대한다.",
    bio: "정부출연연구소(한국전기연구원), 대학(고려대/부산대), 스타트업, 금융기관, 협회 등 산학연을 두루 거치며 연구자 및 기업가로 활동하였으며, 에너지, ICT, 사이버보안, 제조 등 다양한 산업 분야의 R&D 기획과 수행을 경험하였습니다. 국토부 산하 국토교통과학기술진흥원(KAIA) AI PD를 거쳐, 문체부 산하 한국문화기술기획평가원(KCTEP)에서 R&D PD로 근무하고 있으며, 저작권, 콘텐츠, 관광 분야 연구과제 기획 및 관리를 맡고 있습니다. 서로 다른 산업과 기술을 연결해 온 융합 전문가로 문화기술이 다른 산업 기술들과 연계되어 시너지를 창출하는 데 많은 관심을 가지고 있습니다.",
    career: ["現 한국문화기술기획평가원(KCTEP) R&D PD", "前 국토교통과학기술진흥원(KAIA) AI PD"],
  },
  {
    session: 1,
    name: "안강훈",
    photo: "assets/speakers/ahn-kanghoon.jpg",
    org: "광주과학기술원(GIST)",
    role: "인문사회과학부 조교수",
    title: "예술과 감각 그리고 미디어",
    summary: "예술이란 무엇인가? 예술은 감각과 어떤 관계를 맺는가? 예술에서 신체는 왜 중요한가? 예술과 감각, 그리고 미디어는 어떤 관계를 맺는가?",
    bio: "미국 하버드대학교에서 철학 박사 학위를 취득하였으며, 현재 광주과학기술원(GIST) 인문사회과학부 조교수로 재직하고 있다. 동서양의 철학 전통을 바탕으로 미학과 예술철학, 신체와 감각의 문제 등을 연구하고 있다.",
    career: ["現 광주과학기술원 인문사회과학부 조교수", "미국 하버드대학교 철학박사"],
  },
  {
    session: 1,
    name: "김영민",
    photo: "assets/speakers/kim-youngmin.jpg",
    org: "한국전자기술연구원(KETI)",
    role: "책임연구원",
    title: "멀티모달 생성형 AI 기술의 저작권 이슈 및 현황",
    summary: "멀티모달 생성형 AI 기술의 저작권과 관련한 최근 이슈를 설명한다. 또한 텍스트 데이터셋과 이미지 데이터셋을 활용한 생성형 AI 모델에서 발생될 수 있는 저작권에 관해 최근 연구 동향을 소개하고, 현재 수행하고 있는 과제에서 개발되고 있는 내용을 소개한다.",
    bio: "",
    career: ["現 한국전자기술연구원 책임연구원", "前 서울대학교 BK연수연구원", "서울대학교 전기컴퓨터공학 박사", "서울대학교 전기공학 학사"],
  },
  {
    session: 1,
    name: "이기형",
    photo: "assets/speakers/lee-kihyung.jpg",
    org: "국립아시아문화전당재단",
    role: "융합미디어사업단장 · 어린이사업본부장",
    title: "인공감정 구현을 위한 잠재공간의 귀납적 편향(Inductive Bias) 아키텍처 설계: 물리적 문화기술(Physical CT) 시대의 가치정렬(Value Alignment) 전략",
    summary: "AI의 추론 능력이 빠르게 고도화되면서 개인·공동체·국가와 AI 사이의 주권(Sovereignty) 문제가 새로운 화두로 떠오르고 있다. 거대언어모델 기업들은 RLHF, Constitutional AI 등의 기법으로 가치 정렬을 시도하고 있으나, 이러한 방식은 주로 학습된 모델의 출력 행동을 사후적으로 조정하는 데 초점을 둔다. 본 세션에서는 신경망의 출력층 통제를 넘어, 잠재공간에 인공감정의 구조를 사전 설계하는 '귀납적 편향(Inductive Bias) 아키텍처'를 제안한다. 이를 통해 AI-CT 연구의 새로운 방향과 인문예술–과학기술 융합 연구의 가능성을 공유하고자 한다.",
    bio: "한국예술종합학교 영상원에서 예술전문사 학위를 취득하였으며, 아시아문화원 창제작센터 융복합콘텐츠개발팀장 및 센터장 직무대리를 역임하였다. 현재 국립아시아문화전당재단 융합미디어사업 단장 및 어린이사업 본부장으로 재직 중이며, 문화예술과 첨단기술을 접목한 다양한 사업을 이끌고 있다. 문화체육관광부와 한국콘텐츠진흥원의 문화기술 연구개발사업을 비롯해 인공지능 기반 공연 콘텐츠 개발, 실감콘텐츠 및 융복합 예술 콘텐츠 기획·제작 등 다양한 프로젝트를 수행해 왔다.",
    career: ["現 국립아시아문화전당재단 융합미디어사업단장 및 어린이사업본부장", "前 국립아시아문화전당재단 미디어사업TF팀장", "前 아시아문화원 창제작센터 융복합콘텐츠개발팀장", "前 한국예술종합학교 미래교육준비단(통섭원) U-AT랩 선임연구원"],
  },

  // Session 2
  {
    session: 2,
    name: "김승준",
    photo: "assets/speakers/kim-seungjun.jpg",
    org: "광주과학기술원(GIST)",
    role: "AI학과 교수",
    title: "피지컬 AI 시대의 인간 중심 인터랙션: HCI·XR 기술과 융합 연구의 미래",
    summary: "피지컬 AI 시대에 인간 중심 상호작용 기술이 갖는 중요성을 살펴보고, 이를 배경으로 설립된 GIST–MIT 피지컬 AI 연구센터(PAIR-HCI)의 비전과 주요 연구 방향을 소개한다. 특히 인간-컴퓨터 상호작용(HCI), 확장현실(XR), 멀티모달 인터랙션 기술을 중심으로 진행 중인 연구와 국내외 공동연구 활동 및 주요 성과를 공유한다. 나아가 이러한 기술들이 AI와 문화기술(CT)의 융합을 통해 더욱 몰입감 있고 포용적인 사용자 경험을 구현하는 데 기여할 수 있는 가능성을 살펴본다.",
    bio: "광주과학기술원(GIST) AI융합학과 정교수이자 PAIR-HCI(Physical AI Research for Human-Centered Interaction) 센터장으로 재직 중이다. KAIST에서 전기전자공학 학사, GIST에서 메카트로닉스 석사 및 박사학위를 취득하였다. 2006년부터 2017년까지 미국 카네기멜런대학교(Carnegie Mellon University) 인간-컴퓨터 상호작용 연구소(HCII)에서 박사후연구원 및 시스템 과학자로 활동하였다. 2017년부터 GIST에 재직하며 인간-컴퓨터 상호작용(HCI), 확장현실(XR), 인간 중심 피지컬 AI 및 지능형 인터랙션 분야를 연구하고 있다.",
    career: ["現 광주과학기술원 AI학과 교수, HCIS Lab(인간중심 지능형 시스템 연구실) Director", "現 광주과학기술원 GIST-MIT PAIR-HCI(인간중심 피지컬 AI 상호작용) 연구센터장"],
  },
  {
    session: 2,
    name: "지희정",
    photo: "assets/speakers/ji-heejung.jpg",
    org: "디스트릭트(d’strict)",
    role: "미디어서비스그룹 그룹장",
    title: "창작 조력자이자 큐레이터, AI가 바꾸는 미디어아트",
    summary: "AI는 이제 미디어아트를 만드는 과정과 경험하는 방식 모두에 스며들고 있다. 본 강연에서는 전 세계에서 몰입형 미디어아트를 선보여 온 디스트릭트가 AI를 창작의 조력자이자 큐레이터로 만들어 가는 여정을 소개하고, 그 안에서 마주한 선택과 고민을 나눈다. 이를 통해 AI와 함께 달라질 미디어아트의 미래를 그려보고자 한다.",
    bio: "",
    career: ["現 디스트릭트(d’strict) 미디어서비스그룹 그룹장 및 d’I LAB 랩장"],
  },
  {
    session: 2,
    name: "손병희",
    photo: "assets/speakers/son-byunghee.jpg",
    org: "마음AI",
    role: "국방AI·로보틱스 부문 대표",
    title: "휴머노이드 10년, 피지컬 AI가 여는 문화기술(CT)의 미래: 지능형 로봇과 문화·콘텐츠 산업의 새로운 융합",
    summary: "향후 10년은 인공지능이 디지털 공간을 넘어 현실 세계에서 인지하고 판단하며 행동하는 피지컬 AI(Physical AI)의 시대가 될 것이다. 특히 휴머노이드와 지능형 로봇의 발전은 제조·물류 중심의 산업적 활용을 넘어 공연·전시·엔터테인먼트·문화서비스 등 문화기술(CT) 분야로 확장되며, 인간과 기술이 상호작용하는 새로운 경험을 만들어갈 것으로 전망된다. 본 강연에서는 월드모델(World Model), 시각·언어·행동 모델(VLA), 멀티모달 AI, 온디바이스 AI 등 핵심 기술을 중심으로 휴머노이드의 진화와 문화기술의 융합 가능성을 살펴본다. 나아가 가상과 현실을 연결하는 지능형 콘텐츠, 인간과 로봇의 상호작용, 문화공간의 지능화 등 미래 응용 사례를 통해 향후 10년 문화기술 산업의 변화와 새로운 연구·사업 기회를 제시한다.",
    bio: "연세대학교 전기전자공학 박사(제어 전공). 전 국민대학교 교수이자 현 한성대학교 특임교수로, 현재 마음AI 국방AI·로보틱스 부문 대표와 한국피지컬AI협회 표준협의회 의장 및 전문인재개발원장을 맡고 있다. 피지컬 AI, 지능형 로봇, 온디바이스 AI 및 자율제어 분야의 전문가로서 인공지능과 로봇 기술의 산업현장 적용 및 상용화를 추진하고 있다. 저서로는 『Physical AI』(2025) 등이 있다.",
    career: ["現 마음AI 국방AI·로보틱스 부문 대표", "現 한국피지컬AI협회 표준협의회 의장 및 전문인재개발원장", "現 한성대학교 특임교수", "前 국민대학교 교수"],
  },
  {
    session: 2,
    name: "윤정원",
    photo: "assets/speakers/yoon-jungwon.jpg",
    org: "광주과학기술원(GIST)",
    role: "한국문화기술연구소 소장",
    title: "역사 문화 전시를 위한 디지털 휴먼 기반 로보틱 AI 도슨트 기술 개발",
    summary: "역사적 인물을 디지털 휴먼으로 구현하고, 관람객과 실감형 상호작용을 제공하기 위한 주요 기술을 소개한다. 체계적인 역사적 사료 수집·분류·가공을 통해 신뢰성 높은 데이터를 구축하고, 음성인식형 RAG-LLM 페르소나를 활용하여 관람객의 질문에 문맥에 맞는 답변을 생성하는 기술을 살펴본다. 역사적 인물의 외형과 자연스러운 표정·몸짓을 재현하는 디지털 휴먼 기술과 몰입형 로보틱 디스플레이를 통해 생동감 있는 시각적·물리적 상호작용을 구현하는 방안을 소개한다.",
    bio: "",
    career: ["現 GIST 한국문화기술연구소 소장", "現 GIST AI학과 교수", "前 국립경상대학교 교수", "前 미국립보건원(NIH) 박사후연구원", "前 한국전자통신연구원 선임연구원"],
  },

  // Session 3
  {
    session: 3,
    name: "김미경",
    photo: "assets/speakers/kim-mikyung.jpg",
    org: "CLO Virtual Fashion",
    role: "Research Scientist",
    title: "그림 속 옷과 몸에 맞는 옷: 패션에서 게임·영화·가상세계까지, AI 시대의 3D 의상 데이터",
    summary: "옷은 패션 산업의 제품이면서, 게임과 영화, 가상세계 속 캐릭터를 완성하는 중요한 요소이기도 하다. 요즘은 생성형 AI로 옷을 입은 캐릭터 이미지를 쉽게 만들 수 있다. 하지만 그 옷이 몸에 맞는지, 움직일 때 원단이 어떻게 반응하는지, 다른 장면에서도 같은 옷으로 보이는지는 이미지만으로는 알기 어렵다. 이런 문제를 풀려면 실제 패턴과 원단 물성을 담은 3D 의상 데이터가 필요하다. 이번 강연에서는 CLO와 Marvelous Designer의 사례를 통해 3D 의상 데이터가 패션과 콘텐츠 제작을 어떻게 연결하는지 소개한다. 또한 AI를 활용해 3D 의상 데이터를 더 빠르고 정확하게 만들기 위한 CLO의 연구 방향도 함께 이야기한다.",
    bio: "KAIST 문화기술대학원에서 박사학위를 받았으며, 현재 CLO Virtual Fashion에서 Research Scientist로 3D 아바타와 의상 시뮬레이션 기술을 연구하고 있다. 물리 기반 시뮬레이션, 캐릭터 리깅 및 변형, 애니메이션 분야를 연구해 왔으며, 인체 연조직 애니메이션 연구로 SIGGRAPH에 논문을 발표했다. KAIST 문화기술연구소 박사후연구원과 대구대학교 조교수를 거쳤으며, 현재 CLO와 Marvelous Designer의 콘텐츠 제작 효율화를 위한 연구개발을 이끌고 있다.",
    career: ["現 CLO Virtual Fashion, Research Scientist", "前 대구대학교 조교수", "前 KAIST 문화기술연구소 박사후연구원", "KAIST 문화기술대학원 박사", "KAIST 수리과학과 석사"],
  },
  {
    session: 3,
    name: "김민선",
    photo: "assets/speakers/kim-minsun.jpg",
    org: "TwelveLabs",
    role: "Research Engineer, Video Agent",
    title: "영상 이해 AI 에이전트: 콘텐츠 제작의 새로운 가능성",
    summary: "영화·방송·공연 등 문화콘텐츠를 만들 때는 방대한 영상 자료에서 필요한 장면을 찾고, 내용을 분석하고, 이를 새로운 콘텐츠로 활용하는 과정을 거친다. 본 강연에서는 영상 속 장면과 맥락을 이해하는 TwelveLabs의 영상 이해(Video Understanding) 기술을 소개하고, 이 기술을 바탕으로 AI 에이전트가 영상을 탐색하고 활용하는 방식을 어떻게 바꾸고 있는지 살펴본다. 특히 영상 AI 에이전트 Jockey를 중심으로, 자연어로 영상 속 원하는 순간을 찾고 다양한 영상 작업을 수행하는 새로운 워크플로우를 소개한다. 나아가 반복적인 영상 탐색과 분석 작업은 AI에 맡기고 창작자는 더 창의적인 작업에 집중할 수 있는 콘텐츠 제작 환경의 가능성과 발전 방향을 논의한다.",
    bio: "KAIST 문화기술대학원에서 석사 학위를 받았다. 영상 이해 모델을 기반으로 하이라이트 생성 등 영상 편집 자동화 기술을 연구해 왔으며, 관련 연구를 CHI 2025와 2026에서 제1저자로 발표했다. Adobe Research 인턴을 거쳐 현재 TwelveLabs에서 에이전트 기반 영상 편집 시스템을 개발하고 있다.",
    career: ["現 TwelveLabs Research Engineer", "KAIST 문화기술대학원 석사"],
  },
  {
    session: 3,
    name: "이상광",
    photo: "assets/speakers/lee-sangkwang.jpg",
    org: "한국전자통신연구원(ETRI)",
    role: "책임연구원",
    title: "AI 기반 e스포츠 서비스 자동화 기술 및 적용 사례",
    summary: "문화체육관광부 문화기술개발과제로 수행 중인 AI 기반 e스포츠 서비스 자동화 기술의 개발 내용과 적용 사례를 소개한다. 본 과제는 e스포츠의 공식 스포츠화와 지역 경기장의 인력·비용 부담에 대응하여 멀티모달 내레이션 생성, 주요 플레이 분석, 자동 관전, LLM 기반 대화형 코칭 등의 기술을 개발하고, 이를 방송 플랫폼과 연동하고 있다. 아울러 호남대학교 e스포츠산업학과 코칭 실증과 T1 홈그라운드 방송 실증 등 실제 현장 적용 사례를 함께 공유한다.",
    bio: "광주과학기술원에서 정보통신공학 박사(2004) 학위를 받았습니다. 2004년부터 한국전자통신연구원(ETRI) 공간콘텐츠연구본부 책임연구원으로 재직하며 게임 분석과 게임 인공지능을 연구하고 있습니다. 문화체육관광부 국책과제로 AI 기반 실시간 게임 분석(2021), 생성형 AI 기반 e스포츠 서비스 자동화 플랫폼(2024), 관객 맞춤형 e스포츠 중계를 위한 실시간 콘텐츠 제작·제공 기술 개발(2026) 과제의 책임자를 맡아 왔으며, 지역 e스포츠 상설 경기장을 대상으로 다수의 실증 서비스를 수행하고 기술을 상용화했습니다.",
    career: ["現 한국전자통신연구원(ETRI) 공간콘텐츠연구본부 책임연구원", "GIST 정보통신공학 박사"],
  },
  {
    session: 3,
    name: "남주한",
    photo: "assets/speakers/nam-juhan.jpg",
    org: "한국과학기술원(KAIST)",
    role: "문화기술대학원 교수",
    title: "음악 연주를 위한 AI",
    summary: "인공지능은 음악을 생성하는 것을 넘어, 인간의 연주를 듣고 이해하며 함께 연주하는 기술로 발전하고 있다. 본 강연에서는 실시간 음악 인식, AI 자동 반주, 인간-AI 합주 등 음악 연주를 위한 핵심 AI 기술과 실제 연구 사례를 소개한다. 나아가 이러한 기술이 음악 공연, 교육, 창작 분야에서 인간의 음악적 표현과 가능성을 어떻게 확장할 수 있는지 살펴본다.",
    bio: "",
    career: ["現 KAIST 문화기술대학원 학과장", "現 KAIST 조수미공연예술연구센터 센터장", "現 한국음악정보학회 회장"],
  },
];

(function renderSpeakers() {
  const groups = document.getElementById("speaker-groups");
  const dialog = document.getElementById("speaker-dialog");
  if (!groups || !dialog) return;

  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  };

  const photo = (s, cls) => {
    const img = el("img", cls);
    img.src = s.photo;
    img.alt = `${s.name} 사진`;
    img.loading = "lazy";
    return img;
  };

  // 연사 섹션: 세션 탭을 누르면 그 세션 연사만 보여 준다
  const tabBar = el("div", "speaker-tabs");
  tabBar.setAttribute("role", "tablist");
  tabBar.setAttribute("aria-label", "세션 선택");
  const tabs = [];
  const panels = {};
  for (const [no, name] of Object.entries(SESSIONS)) {
    const tab = el("button", "speaker-tab");
    tab.type = "button";
    tab.id = `speaker-tab-${no}`;
    tab.dataset.session = no;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `speaker-panel-${no}`);
    tab.append(el("span", "speaker-tab-no", `Session ${no}`), el("span", "speaker-tab-name", name));
    tab.addEventListener("click", () => selectSession(no));
    tabBar.append(tab);
    tabs.push(tab);

    const panel = el("div", "speaker-panel");
    panel.id = `speaker-panel-${no}`;
    panel.dataset.session = no;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    // 좁은 화면에서는 탭에 세션 번호만 보이므로 세션 제목을 따로 보여 준다
    panel.append(el("p", "speaker-panel-caption", name));
    panels[no] = panel;
  }
  groups.append(tabBar, ...Object.values(panels));

  // 좌우 화살표로 탭 이동
  tabBar.addEventListener("keydown", (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    const now = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    const next = tabs[(now + step + tabs.length) % tabs.length];
    selectSession(next.dataset.session);
    next.focus();
  });

  function selectSession(no) {
    for (const tab of tabs) {
      const on = tab.dataset.session === String(no);
      tab.setAttribute("aria-selected", on);
      tab.tabIndex = on ? 0 : -1;
    }
    for (const [key, panel] of Object.entries(panels)) panel.hidden = key !== String(no);
  }

  SPEAKERS.forEach((s, i) => {
    // 프로그램 시간표 안의 발표 목록
    const list = document.querySelector(`.talks[data-session="${s.session}"]`);
    if (list) {
      const item = el("li");
      const btn = el("button", "talk");
      btn.type = "button";
      btn.append(el("span", "talk-title", s.title), el("span", "talk-speaker", `${s.name} · ${s.org} ${s.role}`));
      btn.addEventListener("click", () => openSpeaker(i));
      item.append(btn);
      list.append(item);
    }

    // 연사 카드: 왼쪽 작은 사진, 오른쪽 이름·소속·강연 제목
    const card = el("button", "speaker-card");
    card.type = "button";
    const info = el("span", "speaker-info");
    info.append(
      el("span", "speaker-name", s.name),
      el("span", "speaker-org", `${s.org} ${s.role}`),
      el("span", "speaker-title", s.title),
      el("span", "speaker-more", "강연 소개 보기 →"),
    );
    card.append(photo(s, "speaker-photo"), info);
    card.addEventListener("click", () => openSpeaker(i));
    panels[s.session].append(card);
  });

  selectSession(Object.keys(SESSIONS)[0]);

  function openSpeaker(i) {
    const s = SPEAKERS[i];
    const body = dialog.querySelector(".dialog-body");
    body.replaceChildren();
    const head = el("div", "dialog-head");
    const who = el("div");
    who.append(
      el("p", "dialog-session", `Session ${s.session} · ${SESSIONS[s.session]}`),
      el("h3", "dialog-name", s.name),
      el("p", "dialog-org", `${s.org} ${s.role}`),
    );
    head.append(photo(s, "dialog-photo"), who);
    body.append(
      head,
      el("p", "dialog-label", "강연 제목"),
      el("p", "dialog-title", s.title),
      el("p", "dialog-label", "강연 개요"),
      el("p", "dialog-text", s.summary),
    );
    if (s.bio || s.career.length) body.append(el("p", "dialog-label", "연사 소개"));
    if (s.career.length) {
      const ul = el("ul", "dialog-career");
      s.career.forEach((c) => ul.append(el("li", "", c)));
      body.append(ul);
    }
    if (s.bio) body.append(el("p", "dialog-text", s.bio));
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  // 창 바깥(어두운 배경)을 누르면 닫기
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
