// 어른 트랙 커리큘럼: 3레벨 × 6유닛 = 18유닛
// 유닛 구조: 표현 3개(배우기) → 드릴 6문장(말하기 연습) → 롤플레이(표현 3개 미션) → SRS 복습 등록
const ADULT_CURRICULUM=[
/* ================= LEVEL 1 : 기초 생존 회화 ================= */
{id:'a1u1',lv:1,emo:'👋',title:'자기소개',intro:'처음 만난 사람에게 나를 소개하는 세 가지 필수 표현',
 exprs:[
  {en:'My name is ~',ko:'제 이름은 ~입니다',ex:'My name is Jinhun.',exko:'제 이름은 진훈입니다.',keys:['my name is']},
  {en:'Nice to meet you',ko:'만나서 반갑습니다',ex:'Nice to meet you, Sarah.',exko:'만나서 반가워요, 사라.',keys:['nice to meet you']},
  {en:"I'm from ~",ko:'저는 ~에서 왔어요',ex:"I'm from Seoul, Korea.",exko:'저는 한국 서울에서 왔어요.',keys:["i'm from",'i am from']}],
 drills:[
  {en:'My name is Minji.',ko:'제 이름은 민지입니다.'},
  {en:'Hi, my name is David Kim.',ko:'안녕하세요, 제 이름은 데이비드 김입니다.'},
  {en:'Nice to meet you.',ko:'만나서 반갑습니다.'},
  {en:'Nice to meet you, too.',ko:'저도 만나서 반갑습니다.'},
  {en:"I'm from Korea.",ko:'저는 한국에서 왔어요.'},
  {en:"I'm from Seoul. How about you?",ko:'저는 서울에서 왔어요. 당신은요?'}],
 role:{who:'a friendly new neighbor at a small community welcome party',desc:'You just met the learner for the first time at a neighborhood gathering. Introduce yourself, ask their name and where they are from, and chat lightly.'}},

{id:'a1u2',lv:1,emo:'☕',title:'카페에서 주문하기',intro:'주문의 시작과 끝, 세 표현이면 카페는 충분합니다',
 exprs:[
  {en:'Could I get ~?',ko:'~ 주시겠어요?',ex:'Could I get an iced americano?',exko:'아이스 아메리카노 하나 주시겠어요?',keys:['could i get','can i get']},
  {en:'Do you have ~?',ko:'~ 있나요?',ex:'Do you have decaf?',exko:'디카페인 있나요?',keys:['do you have']},
  {en:'For here / To go',ko:'매장에서 / 포장이요',ex:'To go, please.',exko:'포장해 주세요.',keys:['for here','to go']}],
 drills:[
  {en:'Could I get a latte, please?',ko:'라떼 한 잔 주시겠어요?'},
  {en:'Could I get this without ice?',ko:'이거 얼음 빼고 주시겠어요?'},
  {en:'Do you have decaf coffee?',ko:'디카페인 커피 있나요?'},
  {en:'Do you have any muffins today?',ko:'오늘 머핀 있나요?'},
  {en:'For here, please.',ko:'매장에서 먹을게요.'},
  {en:'To go, please. Thank you!',ko:'포장이요. 감사합니다!'}],
 role:{who:'a cheerful barista at a busy cafe',desc:'Take the learner\'s order: drink, size, options, and for-here-or-to-go. Suggest a pastry once.'}},

{id:'a1u3',lv:1,emo:'🍝',title:'식당에서 식사하기',intro:'주문부터 계산까지, 식당의 처음과 끝',
 exprs:[
  {en:"I'd like ~",ko:'~로 할게요 / ~ 주세요',ex:"I'd like the pasta, please.",exko:'파스타로 할게요.',keys:["i'd like",'i would like']},
  {en:'What do you recommend?',ko:'추천 메뉴가 뭔가요?',ex:'What do you recommend here?',exko:'여기 추천 메뉴가 뭔가요?',keys:['what do you recommend','do you recommend']},
  {en:'Could we get the check?',ko:'계산서 주시겠어요?',ex:'Could we get the check, please?',exko:'계산서 좀 주시겠어요?',keys:['the check','the bill']}],
 drills:[
  {en:"I'd like to order now.",ko:'지금 주문할게요.'},
  {en:"I'd like the steak, medium please.",ko:'스테이크 미디엄으로 주세요.'},
  {en:'What do you recommend?',ko:'추천 메뉴가 뭔가요?'},
  {en:'What do you recommend for dessert?',ko:'디저트는 뭘 추천하시나요?'},
  {en:'Could we get the check, please?',ko:'계산서 좀 주시겠어요?'},
  {en:'Could we get some more water?',ko:'물 좀 더 주시겠어요?'}],
 role:{who:'a friendly waiter at a casual Italian restaurant',desc:'Greet the learner, take their order, recommend a dish when asked, and handle the check at the end.'}},

{id:'a1u4',lv:1,emo:'🛍️',title:'쇼핑하기',intro:'옷가게에서 부담 없이 구경하고 물어보는 법',
 exprs:[
  {en:"I'm just looking",ko:'그냥 둘러보는 중이에요',ex:"I'm just looking, thanks.",exko:'그냥 둘러보는 중이에요, 감사해요.',keys:['just looking']},
  {en:'Do you have this in ~?',ko:'이거 ~로 있나요? (사이즈/색상)',ex:'Do you have this in a medium?',exko:'이거 미디엄으로 있나요?',keys:['do you have this in','have this in']},
  {en:'How much is it?',ko:'얼마예요?',ex:'How much is this jacket?',exko:'이 재킷 얼마예요?',keys:['how much']}],
 drills:[
  {en:"I'm just looking, thank you.",ko:'그냥 둘러보는 중이에요, 감사합니다.'},
  {en:"I'm just looking around for now.",ko:'지금은 그냥 구경 중이에요.'},
  {en:'Do you have this in a large?',ko:'이거 라지 사이즈 있나요?'},
  {en:'Do you have this in black?',ko:'이거 검정색으로 있나요?'},
  {en:'How much is it?',ko:'얼마예요?'},
  {en:'How much is this one over here?',ko:'여기 이건 얼마예요?'}],
 role:{who:'a helpful clerk at a clothing store',desc:'Greet the learner, offer help, answer questions about sizes, colors, and prices. There is a 20% sale on jackets.'}},

{id:'a1u5',lv:1,emo:'🗺️',title:'길 묻기',intro:'여행지에서 길을 잃어도 이 세 마디면 됩니다',
 exprs:[
  {en:'Excuse me',ko:'실례합니다 (말 걸기)',ex:'Excuse me, could you help me?',exko:'실례합니다, 좀 도와주시겠어요?',keys:['excuse me']},
  {en:'How do I get to ~?',ko:'~에 어떻게 가나요?',ex:'How do I get to the station?',exko:'역에 어떻게 가나요?',keys:['how do i get to','how can i get to']},
  {en:'Is it far from here?',ko:'여기서 먼가요?',ex:'Is it far from here?',exko:'여기서 먼가요?',keys:['is it far','how far']}],
 drills:[
  {en:'Excuse me, can I ask you something?',ko:'실례합니다, 뭐 좀 여쭤봐도 될까요?'},
  {en:'Excuse me, I think I\'m lost.',ko:'실례합니다, 길을 잃은 것 같아요.'},
  {en:'How do I get to the museum?',ko:'박물관에 어떻게 가나요?'},
  {en:'How do I get to the nearest subway station?',ko:'가장 가까운 지하철역에 어떻게 가나요?'},
  {en:'Is it far from here?',ko:'여기서 먼가요?'},
  {en:'Is it within walking distance?',ko:'걸어갈 만한 거리인가요?'}],
 role:{who:'a friendly local person on the street',desc:'The learner is a tourist. Give simple directions to places they ask about (the museum is 10 minutes away on foot, turn left at the bank).'}},

{id:'a1u6',lv:1,emo:'🏨',title:'호텔 체크인',intro:'해외여행 첫 관문, 호텔 프런트 필수 표현',
 exprs:[
  {en:'I have a reservation',ko:'예약했습니다',ex:'I have a reservation under Kim.',exko:'김으로 예약했습니다.',keys:['i have a reservation','have a reservation']},
  {en:'What time is checkout?',ko:'체크아웃이 몇 시인가요?',ex:'What time is checkout?',exko:'체크아웃이 몇 시인가요?',keys:['what time is checkout','checkout time']},
  {en:'Could you ~? (요청)',ko:'~해 주시겠어요?',ex:'Could you call a taxi for me?',exko:'택시 좀 불러주시겠어요?',keys:['could you']}],
 drills:[
  {en:'Hi, I have a reservation.',ko:'안녕하세요, 예약했습니다.'},
  {en:'I have a reservation under the name Kim.',ko:'김이라는 이름으로 예약했습니다.'},
  {en:'What time is checkout?',ko:'체크아웃이 몇 시인가요?'},
  {en:'What time is breakfast served?',ko:'조식은 몇 시에 나오나요?'},
  {en:'Could you call a taxi for me?',ko:'택시 좀 불러주시겠어요?'},
  {en:'Could you keep my luggage until three?',ko:'3시까지 짐 좀 보관해 주시겠어요?'}],
 role:{who:'a polite hotel front desk agent',desc:'Check the learner in: confirm their reservation, explain breakfast time (7-10am) and checkout (11am), and handle any requests.'}},

/* ================= LEVEL 2 : 일상 대화 확장 ================= */
{id:'a2u1',lv:2,emo:'🌤️',title:'스몰토크 시작하기',intro:'어색한 침묵을 깨는 가장 자연스러운 세 마디',
 exprs:[
  {en:"How's it going?",ko:'요즘 어때요? (가벼운 안부)',ex:"Hey, how's it going?",exko:'안녕하세요, 요즘 어때요?',keys:["how's it going",'how is it going']},
  {en:'How was your ~?',ko:'~는 어땠어요?',ex:'How was your weekend?',exko:'주말 어땠어요?',keys:['how was your']},
  {en:'The weather is ~ today',ko:'오늘 날씨가 ~하네요',ex:'The weather is really nice today.',exko:'오늘 날씨 정말 좋네요.',keys:['the weather is','weather is']}],
 drills:[
  {en:"Hey, how's it going?",ko:'안녕하세요, 요즘 어때요?'},
  {en:"How's it going? Long time no see!",ko:'잘 지냈어요? 오랜만이에요!'},
  {en:'How was your weekend?',ko:'주말 어땠어요?'},
  {en:'How was your vacation?',ko:'휴가는 어땠어요?'},
  {en:'The weather is really nice today.',ko:'오늘 날씨 정말 좋네요.'},
  {en:'The weather is getting colder these days.',ko:'요즘 날씨가 추워지고 있네요.'}],
 role:{who:'a friendly coworker you run into at the office coffee machine',desc:'Have casual small talk with the learner: weekend, weather, how work is going. Keep it light and natural.'}},

{id:'a2u2',lv:2,emo:'📅',title:'약속 잡기',intro:'만날 날짜와 시간을 정하는 협상의 기술',
 exprs:[
  {en:'Are you free on ~?',ko:'~에 시간 되세요?',ex:'Are you free on Friday?',exko:'금요일에 시간 되세요?',keys:['are you free']},
  {en:'Does ~ work for you?',ko:'~ 괜찮으세요?',ex:'Does 7 pm work for you?',exko:'저녁 7시 괜찮으세요?',keys:['work for you']},
  {en:"Let's meet at ~",ko:'~에서/~시에 만나요',ex:"Let's meet at the station at six.",exko:'6시에 역에서 만나요.',keys:["let's meet",'lets meet']}],
 drills:[
  {en:'Are you free on Friday evening?',ko:'금요일 저녁에 시간 되세요?'},
  {en:'Are you free sometime this week?',ko:'이번 주에 시간 되세요?'},
  {en:'Does seven work for you?',ko:'7시 괜찮으세요?'},
  {en:'Does next Tuesday work for you?',ko:'다음 주 화요일 괜찮으세요?'},
  {en:"Let's meet at the cafe near the station.",ko:'역 근처 카페에서 만나요.'},
  {en:"Let's meet at noon, then.",ko:'그럼 정오에 만나요.'}],
 role:{who:'a friend who wants to have dinner with the learner this week',desc:'Try to find a day, time, and place that works for both of you. You are busy on Wednesday and prefer somewhere near the station.'}},

{id:'a2u3',lv:2,emo:'📞',title:'전화 영어 기초',intro:'얼굴이 안 보여서 더 어려운 전화, 이 세 표현으로 버팁니다',
 exprs:[
  {en:'May I speak to ~?',ko:'~와 통화할 수 있을까요?',ex:'May I speak to Mr. Park?',exko:'박 선생님과 통화할 수 있을까요?',keys:['may i speak to','can i speak to']},
  {en:"I'm calling about ~",ko:'~ 때문에 전화드렸어요',ex:"I'm calling about my order.",exko:'제 주문 건으로 전화드렸어요.',keys:["i'm calling about",'calling about']},
  {en:'Could you say that again?',ko:'다시 말씀해 주시겠어요?',ex:'Sorry, could you say that again?',exko:'죄송하지만 다시 말씀해 주시겠어요?',keys:['say that again','could you repeat']}],
 drills:[
  {en:'Hello, may I speak to Ms. Lee?',ko:'여보세요, 이 선생님과 통화할 수 있을까요?'},
  {en:'May I speak to someone in customer service?',ko:'고객 서비스 담당자와 통화할 수 있을까요?'},
  {en:"I'm calling about my reservation.",ko:'예약 건으로 전화드렸어요.'},
  {en:"I'm calling about the package I ordered.",ko:'주문한 택배 때문에 전화드렸어요.'},
  {en:'Sorry, could you say that again?',ko:'죄송하지만 다시 한번 말씀해 주시겠어요?'},
  {en:'Could you speak a little more slowly?',ko:'조금만 천천히 말씀해 주시겠어요?'}],
 role:{who:'a customer service representative at an online shopping mall',desc:'The learner is calling about a delayed package. Ask for their order number (any number is fine), explain it will arrive in two days, and offer a small coupon.'}},

{id:'a2u4',lv:2,emo:'💊',title:'약국에서',intro:'아플 때일수록 정확하게 말해야 합니다',
 exprs:[
  {en:'I have a ~',ko:'~가 있어요 (증상)',ex:'I have a headache.',exko:'두통이 있어요.',keys:['i have a headache','i have a cold','i have a fever','i have a sore']},
  {en:'Do you have anything for ~?',ko:'~에 듣는 약 있나요?',ex:'Do you have anything for a cold?',exko:'감기에 듣는 약 있나요?',keys:['anything for']},
  {en:'How often should I take it?',ko:'얼마나 자주 먹어야 하나요?',ex:'How often should I take it?',exko:'얼마나 자주 복용해야 하나요?',keys:['how often','should i take']}],
 drills:[
  {en:'I have a headache.',ko:'두통이 있어요.'},
  {en:'I have a sore throat and a cough.',ko:'목이 아프고 기침이 나요.'},
  {en:'Do you have anything for a cold?',ko:'감기약 있나요?'},
  {en:'Do you have anything for an upset stomach?',ko:'배탈에 듣는 약 있나요?'},
  {en:'How often should I take it?',ko:'얼마나 자주 먹어야 하나요?'},
  {en:'Should I take it after meals?',ko:'식후에 먹어야 하나요?'}],
 role:{who:'a kind pharmacist at a local pharmacy',desc:'The learner has cold symptoms. Ask about their symptoms, recommend a medicine, and explain to take it three times a day after meals.'}},

{id:'a2u5',lv:2,emo:'💬',title:'근황 나누기',intro:'"요즘 뭐 하고 지내?"에 제대로 답하는 법',
 exprs:[
  {en:"I've been busy with ~",ko:'요즘 ~하느라 바빴어요',ex:"I've been busy with work lately.",exko:'요즘 일 때문에 바빴어요.',keys:["i've been busy",'been busy with']},
  {en:"I'm looking forward to ~",ko:'~가 기대돼요',ex:"I'm looking forward to the trip.",exko:'여행이 기대돼요.',keys:['looking forward to']},
  {en:'That sounds ~',ko:'그거 ~하겠는데요 (반응)',ex:'That sounds great!',exko:'그거 좋겠는데요!',keys:['that sounds','sounds great','sounds fun']}],
 drills:[
  {en:"I've been busy with work lately.",ko:'요즘 일 때문에 바빴어요.'},
  {en:"I've been busy with my kids these days.",ko:'요즘 애들 때문에 바빴어요.'},
  {en:"I'm looking forward to the weekend.",ko:'주말이 기대돼요.'},
  {en:"I'm really looking forward to my vacation.",ko:'휴가가 정말 기대돼요.'},
  {en:'That sounds great!',ko:'그거 좋겠는데요!'},
  {en:'That sounds like a lot of fun.',ko:'그거 정말 재밌겠는데요.'}],
 role:{who:'an old friend the learner has not seen in a year, meeting at a cafe',desc:'Catch up with the learner: ask what they have been up to, share that you recently changed jobs and are planning a trip to Jeju.'}},

{id:'a2u6',lv:2,emo:'🧳',title:'계획 말하기',intro:'미래의 일을 자연스럽게 말하는 두 가지 온도',
 exprs:[
  {en:"I'm planning to ~",ko:'~할 계획이에요 (확정에 가까움)',ex:"I'm planning to visit Japan in May.",exko:'5월에 일본에 갈 계획이에요.',keys:['planning to']},
  {en:"I'm thinking of ~",ko:'~할까 생각 중이에요 (미정)',ex:"I'm thinking of learning guitar.",exko:'기타를 배워볼까 생각 중이에요.',keys:['thinking of','thinking about']},
  {en:'What about you?',ko:'당신은요? (되묻기)',ex:'What about you? Any plans?',exko:'당신은요? 계획 있어요?',keys:['what about you','how about you']}],
 drills:[
  {en:"I'm planning to travel this summer.",ko:'이번 여름에 여행 갈 계획이에요.'},
  {en:"I'm planning to move next year.",ko:'내년에 이사할 계획이에요.'},
  {en:"I'm thinking of starting a new hobby.",ko:'새 취미를 시작해볼까 생각 중이에요.'},
  {en:"I'm thinking of buying a new laptop.",ko:'새 노트북을 살까 생각 중이에요.'},
  {en:'What about you? Any plans?',ko:'당신은요? 무슨 계획 있어요?'},
  {en:'How about you? What are you up to this weekend?',ko:'당신은요? 이번 주말에 뭐 해요?'}],
 role:{who:'a colleague chatting about holiday plans during lunch',desc:'Talk about summer vacation plans with the learner. Share that you are thinking of going camping, and ask about their plans.'}},

/* ================= LEVEL 3 : 업무 영어 ================= */
{id:'a3u1',lv:3,emo:'🎧',title:'화상회의 시작하기',intro:'회의 첫 3분을 장악하는 호스트의 표현',
 exprs:[
  {en:'Thanks for joining',ko:'참석해 주셔서 감사합니다',ex:'Thanks for joining today.',exko:'오늘 참석해 주셔서 감사합니다.',keys:['thanks for joining','thank you for joining']},
  {en:'Shall we get started?',ko:'시작할까요?',ex:'Shall we get started?',exko:'그럼 시작할까요?',keys:['shall we get started','get started']},
  {en:'Can you hear me okay?',ko:'제 소리 잘 들리나요?',ex:'Can you hear me okay?',exko:'제 목소리 잘 들리시나요?',keys:['can you hear me','hear me okay']}],
 drills:[
  {en:'Thanks for joining today, everyone.',ko:'오늘 참석해 주셔서 감사합니다, 여러분.'},
  {en:'Thank you for joining on short notice.',ko:'급한 요청에도 참석해 주셔서 감사합니다.'},
  {en:'Shall we get started?',ko:'그럼 시작할까요?'},
  {en:"It's time, so shall we get started?",ko:'시간이 됐으니 시작할까요?'},
  {en:'Can you hear me okay?',ko:'제 소리 잘 들리나요?'},
  {en:'Can you see my screen?',ko:'제 화면 보이시나요?'}],
 role:{who:'an overseas partner attending an online meeting the learner is hosting',desc:'The learner is the meeting host. Respond naturally as an attendee: confirm you can hear them, exchange brief greetings, and follow their lead.'}},

{id:'a3u2',lv:3,emo:'💡',title:'의견 말하기',intro:'회의에서 조용히 있지 않기 위한 최소한의 무기',
 exprs:[
  {en:'In my opinion, ~',ko:'제 생각에는 ~',ex:'In my opinion, we need more time.',exko:'제 생각에는 시간이 더 필요합니다.',keys:['in my opinion']},
  {en:'I think we should ~',ko:'우리가 ~해야 한다고 생각해요',ex:'I think we should start early.',exko:'일찍 시작해야 한다고 생각해요.',keys:['i think we should','we should']},
  {en:'What do you think?',ko:'어떻게 생각하세요?',ex:'What do you think about this?',exko:'이거 어떻게 생각하세요?',keys:['what do you think']}],
 drills:[
  {en:'In my opinion, this plan is too risky.',ko:'제 생각에 이 계획은 너무 위험해요.'},
  {en:'In my opinion, we need a bigger budget.',ko:'제 생각에는 예산이 더 필요합니다.'},
  {en:'I think we should focus on quality first.',ko:'품질에 먼저 집중해야 한다고 생각해요.'},
  {en:'I think we should ask the client directly.',ko:'클라이언트에게 직접 물어봐야 한다고 생각해요.'},
  {en:'What do you think?',ko:'어떻게 생각하세요?'},
  {en:'What do you think about the new design?',ko:'새 디자인에 대해 어떻게 생각하세요?'}],
 role:{who:'a teammate discussing which of two project directions to take',desc:'Present a simple choice (launch fast with fewer features vs. launch later with more features), give your view briefly, and ask for the learner\'s opinion. Push back gently once.'}},

{id:'a3u3',lv:3,emo:'🤝',title:'동의와 반대',intro:'반대하면서도 관계를 지키는 표현의 기술',
 exprs:[
  {en:'I totally agree',ko:'전적으로 동의해요',ex:'I totally agree with you.',exko:'전적으로 동의합니다.',keys:['i totally agree','i agree']},
  {en:'I see your point, but ~',ko:'말씀은 알겠지만 ~',ex:'I see your point, but it costs too much.',exko:'말씀은 알겠지만 비용이 너무 커요.',keys:['i see your point']},
  {en:'Let me think about it',ko:'생각해 볼게요 (즉답 회피)',ex:'Let me think about it and get back to you.',exko:'생각해 보고 다시 연락드릴게요.',keys:['let me think about it']}],
 drills:[
  {en:'I totally agree with you.',ko:'전적으로 동의합니다.'},
  {en:'I agree with the first part of your plan.',ko:'계획의 앞부분에는 동의합니다.'},
  {en:'I see your point, but I have some concerns.',ko:'말씀은 알겠지만 우려되는 점이 있어요.'},
  {en:'I see your point, but the timeline is too tight.',ko:'말씀은 알겠지만 일정이 너무 빠듯해요.'},
  {en:'Let me think about it.',ko:'생각해 볼게요.'},
  {en:'Let me think about it and get back to you tomorrow.',ko:'생각해 보고 내일 다시 말씀드릴게요.'}],
 role:{who:'a colleague enthusiastically proposing to move the team to a four-day sprint cycle',desc:'Propose your idea with confidence and ask the learner to agree. Accept disagreement gracefully but ask why. Give the learner chances to agree, disagree politely, and defer.'}},

{id:'a3u4',lv:3,emo:'✅',title:'확인하고 되묻기',intro:'놓친 걸 놓쳤다고 말하는 게 프로의 영어입니다',
 exprs:[
  {en:'Just to confirm, ~',ko:'확인차 말씀드리면 ~',ex:'Just to confirm, the deadline is Friday?',exko:'확인차 여쭤보는데, 마감이 금요일이죠?',keys:['just to confirm']},
  {en:'Could you clarify ~?',ko:'~를 명확히 해주시겠어요?',ex:'Could you clarify the budget part?',exko:'예산 부분을 명확히 해주시겠어요?',keys:['could you clarify','clarify']},
  {en:'Let me get back to you',ko:'확인 후 다시 연락드릴게요',ex:'Let me get back to you on that.',exko:'그 부분은 확인 후 답드릴게요.',keys:['get back to you']}],
 drills:[
  {en:'Just to confirm, the meeting is at 3 pm?',ko:'확인차 여쭤보는데, 회의는 3시죠?'},
  {en:'Just to confirm, you need this by Friday?',ko:'확인차, 금요일까지 필요하신 거죠?'},
  {en:'Could you clarify what you mean by that?',ko:'그게 무슨 뜻인지 명확히 해주시겠어요?'},
  {en:'Could you clarify the second requirement?',ko:'두 번째 요구사항을 명확히 해주시겠어요?'},
  {en:'Let me get back to you on that.',ko:'그 부분은 확인 후 다시 연락드릴게요.'},
  {en:"I'll check with my team and get back to you.",ko:'팀과 확인하고 다시 연락드리겠습니다.'}],
 role:{who:'a client on a call giving somewhat vague requirements for a design project',desc:'Give the learner slightly unclear requirements (a "modern feel", deadline "soon", budget "flexible"). Let them practice confirming details and asking you to clarify.'}},

{id:'a3u5',lv:3,emo:'🎤',title:'발표 Q&A 받기',intro:'발표보다 무서운 질문 시간, 품위 있게 버티는 법',
 exprs:[
  {en:"That's a great question",ko:'좋은 질문입니다 (시간 벌기)',ex:"That's a great question.",exko:'아주 좋은 질문이네요.',keys:['great question','good question']},
  {en:'As I mentioned, ~',ko:'말씀드렸듯이 ~',ex:'As I mentioned, the data is from May.',exko:'말씀드렸듯이 데이터는 5월 기준입니다.',keys:['as i mentioned']},
  {en:'Does that answer your question?',ko:'답변이 되었나요?',ex:'Does that answer your question?',exko:'질문에 답이 되었을까요?',keys:['answer your question']}],
 drills:[
  {en:"That's a great question.",ko:'아주 좋은 질문입니다.'},
  {en:"That's a good question. Let me explain.",ko:'좋은 질문이네요. 설명드릴게요.'},
  {en:'As I mentioned, we tested it twice.',ko:'말씀드렸듯이 두 번 테스트했습니다.'},
  {en:'As I mentioned earlier, the budget is fixed.',ko:'앞서 말씀드렸듯이 예산은 고정입니다.'},
  {en:'Does that answer your question?',ko:'질문에 답이 되었나요?'},
  {en:'I hope that answers your question.',ko:'답변이 되었기를 바랍니다.'}],
 role:{who:'an audience member asking questions after the learner\'s short presentation about a new game character design',desc:'Ask 2-3 simple questions about their design presentation (why this color, who is the target audience, how long did it take). React to their answers.'}},

{id:'a3u6',lv:3,emo:'⚖️',title:'간단한 협상',intro:'가격과 일정, 밀고 당기는 실전 표현',
 exprs:[
  {en:'Is there any room for ~?',ko:'~의 여지가 있을까요?',ex:'Is there any room for a discount?',exko:'할인 여지가 있을까요?',keys:['any room for','room for']},
  {en:'How about ~ instead?',ko:'대신 ~는 어때요?',ex:'How about next Friday instead?',exko:'대신 다음 금요일은 어때요?',keys:['how about','instead']},
  {en:'That works for us',ko:'저희는 그걸로 괜찮습니다',ex:'That works for us. Thank you.',exko:'저희는 그걸로 괜찮습니다. 감사합니다.',keys:['that works for us','that works for me','that works']}],
 drills:[
  {en:'Is there any room for a discount?',ko:'할인의 여지가 있을까요?'},
  {en:'Is there any room for negotiation on the price?',ko:'가격 협상의 여지가 있을까요?'},
  {en:'How about a longer deadline instead?',ko:'대신 마감을 늘리는 건 어때요?'},
  {en:'How about fifty units instead of a hundred?',ko:'100개 대신 50개는 어떨까요?'},
  {en:'That works for us.',ko:'저희는 그걸로 괜찮습니다.'},
  {en:'That works for me. Let\'s finalize it.',ko:'저는 좋습니다. 확정하시죠.'}],
 role:{who:'a vendor negotiating the price and delivery date of a design outsourcing contract',desc:'Your first offer: $2,000, delivery in 4 weeks. You can go down to $1,700 or deliver in 3 weeks, but not both. Negotiate with the learner and try to close a deal.'}}
];
