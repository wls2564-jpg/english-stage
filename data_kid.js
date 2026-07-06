// 아이 트랙 커리큘럼: 3레벨 × 6유닛 = 18유닛
// 유닛 구조: 단어 6개(따라 말하기) → 문장 2개(따라 말하기) → 코코와 대화(미션 문장 말하면 성공)
const KID_CURRICULUM=[
/* ================= LEVEL 1 : 첫 단어들 ================= */
{id:'k1u1',lv:1,emo:'👋',title:'인사하기',
 words:[['👋','Hello','안녕(하세요)'],['🙋','Hi','안녕'],['👋','Bye','잘 가'],['🌞','Good morning','좋은 아침'],['🌙','Good night','잘 자'],['🙏','Thank you','고마워']],
 phrases:[{en:'Hello, Coco!',ko:'안녕, 코코!'},{en:'Thank you!',ko:'고마워!'}],
 mission:{ko:'코코에게 "Hello"라고 인사해 보세요',keys:['hello','hi ','hi!','hi,']},
 open:"Woof woof! Hello! I'm Coco!"},

{id:'k1u2',lv:1,emo:'🦁',title:'동물 친구들',
 words:[['🐶','Dog','강아지'],['🐱','Cat','고양이'],['🦁','Lion','사자'],['🐘','Elephant','코끼리'],['🐰','Rabbit','토끼'],['🐧','Penguin','펭귄']],
 phrases:[{en:'I see a lion!',ko:'사자가 보여요!'},{en:'The cat is cute.',ko:'고양이가 귀여워요.'}],
 mission:{ko:'좋아하는 동물 이름을 코코에게 말해 보세요 (예: "Dog!")',keys:['dog','cat','lion','elephant','rabbit','penguin','bear','tiger']},
 open:"Woof! I love animals! What animal do you like?"},

{id:'k1u3',lv:1,emo:'🍕',title:'맛있는 음식',
 words:[['🍕','Pizza','피자'],['🍌','Banana','바나나'],['🍦','Ice cream','아이스크림'],['🍓','Strawberry','딸기'],['🍚','Rice','밥'],['🥛','Milk','우유']],
 phrases:[{en:'I like pizza!',ko:'나는 피자를 좋아해!'},{en:'Yummy!',ko:'맛있어!'}],
 mission:{ko:'좋아하는 음식을 말해 보세요 (예: "Pizza!")',keys:['pizza','banana','ice cream','strawberry','rice','milk','apple','cookie']},
 open:"Woof woof! I'm hungry! What food do you like?"},

{id:'k1u4',lv:1,emo:'🌈',title:'알록달록 색깔',
 words:[['🔴','Red','빨강'],['🔵','Blue','파랑'],['🟡','Yellow','노랑'],['🟢','Green','초록'],['🩷','Pink','분홍'],['⚫','Black','검정']],
 phrases:[{en:'I like blue!',ko:'나는 파란색이 좋아!'},{en:'Look! It\'s red!',ko:'봐! 빨간색이야!'}],
 mission:{ko:'좋아하는 색을 말해 보세요 (예: "Blue!")',keys:['red','blue','yellow','green','pink','black','purple','orange','white']},
 open:"Woof! I see a rainbow! What color do you like?"},

{id:'k1u5',lv:1,emo:'🔢',title:'숫자 세기',
 words:[['1️⃣','One','하나'],['2️⃣','Two','둘'],['3️⃣','Three','셋'],['4️⃣','Four','넷'],['5️⃣','Five','다섯'],['6️⃣','Six','여섯']],
 phrases:[{en:'One, two, three!',ko:'하나, 둘, 셋!'},{en:'I have two hands.',ko:'나는 손이 두 개 있어요.'}],
 mission:{ko:'코코에게 숫자를 하나 말해 보세요 (예: "Three!")',keys:['one','two','three','four','five','six','seven','eight','nine','ten']},
 open:"Woof! Let's count! How old are you?"},

{id:'k1u6',lv:1,emo:'👨‍👩‍👧',title:'우리 가족',
 words:[['👩','Mom','엄마'],['👨','Dad','아빠'],['👧','Sister','언니/누나/여동생'],['👦','Brother','오빠/형/남동생'],['👶','Baby','아기'],['👵','Grandma','할머니']],
 phrases:[{en:'I love my mom.',ko:'나는 엄마를 사랑해요.'},{en:'This is my dad.',ko:'우리 아빠예요.'}],
 mission:{ko:'가족 중 한 명을 영어로 말해 보세요 (예: "Mom!")',keys:['mom','dad','sister','brother','baby','grandma','grandpa','family']},
 open:"Woof woof! Tell me about your family! Who do you love?"},

/* ================= LEVEL 2 : 한 문장 말하기 ================= */
{id:'k2u1',lv:2,emo:'❤️',title:'I like ~ (좋아해요)',
 words:[['🍎','Apples','사과'],['🎨','Drawing','그림 그리기'],['⚽','Soccer','축구'],['🎵','Music','음악'],['📚','Books','책'],['🍭','Candy','사탕']],
 phrases:[{en:'I like apples!',ko:'나는 사과를 좋아해요!'},{en:'I like drawing!',ko:'나는 그림 그리기를 좋아해요!'}],
 mission:{ko:'"I like ~"로 좋아하는 것을 말해 보세요',keys:['i like']},
 open:"Woof! I like balls! What do you like?"},

{id:'k2u2',lv:2,emo:'🙏',title:'I want ~ (원해요)',
 words:[['💧','Water','물'],['🧸','A toy','장난감'],['🍪','A cookie','쿠키'],['🎁','A present','선물'],['🛌','A nap','낮잠'],['🤗','A hug','포옹']],
 phrases:[{en:'I want water, please.',ko:'물 주세요.'},{en:'I want a hug!',ko:'안아 주세요!'}],
 mission:{ko:'"I want ~"로 원하는 것을 말해 보세요',keys:['i want']},
 open:"Woof woof! I want a cookie! What do you want?"},

{id:'k2u3',lv:2,emo:'👉',title:'This is ~ (이거는요)',
 words:[['✏️','A pencil','연필'],['🎒','A bag','가방'],['📱','A phone','전화기'],['🚗','A car','자동차'],['🏠','A house','집'],['⭐','A star','별']],
 phrases:[{en:'This is a pencil.',ko:'이것은 연필이에요.'},{en:'This is my bag!',ko:'이건 내 가방이야!'}],
 mission:{ko:'"This is ~"로 물건 하나를 소개해 보세요',keys:['this is']},
 open:"Woof! Show me something! What is it?"},

{id:'k2u4',lv:2,emo:'💪',title:'I can ~ (할 수 있어요)',
 words:[['🏃','Run','달리다'],['🦘','Jump','점프하다'],['🏊','Swim','수영하다'],['🎤','Sing','노래하다'],['💃','Dance','춤추다'],['✏️','Draw','그리다']],
 phrases:[{en:'I can jump!',ko:'나는 점프할 수 있어요!'},{en:'I can sing!',ko:'나는 노래할 수 있어요!'}],
 mission:{ko:'"I can ~"으로 할 수 있는 것을 자랑해 보세요',keys:['i can']},
 open:"Woof! I can run fast! What can you do?"},

{id:'k2u5',lv:2,emo:'😊',title:"I'm ~ (내 기분은)",
 words:[['😊','Happy','행복한'],['😢','Sad','슬픈'],['😠','Angry','화난'],['😴','Sleepy','졸린'],['🤤','Hungry','배고픈'],['🥶','Cold','추운']],
 phrases:[{en:"I'm happy!",ko:'나는 행복해요!'},{en:"I'm hungry!",ko:'배고파요!'}],
 mission:{ko:'"I\'m ~"으로 지금 기분을 말해 보세요',keys:["i'm ",'i am ']},
 open:"Woof woof! I'm happy today! How are you?"},

{id:'k2u6',lv:2,emo:'🎉',title:"Let's ~ (같이 하자)",
 words:[['🎮','Play','놀다'],['🍽️','Eat','먹다'],['🚶','Go','가다'],['📖','Read','읽다'],['🎨','Draw','그리다'],['🕺','Dance','춤추다']],
 phrases:[{en:"Let's play!",ko:'같이 놀자!'},{en:"Let's go!",ko:'가자!'}],
 mission:{ko:'"Let\'s ~"로 코코에게 같이 하자고 해보세요',keys:["let's ",'lets ']},
 open:"Woof! I'm bored! What should we do together?"},

/* ================= LEVEL 3 : 주고받는 대화 ================= */
{id:'k3u1',lv:3,emo:'❓',title:"What's this? (이게 뭐야?)",
 words:[['🍎','An apple','사과'],['⚽','A ball','공'],['🌸','A flower','꽃'],['🦋','A butterfly','나비'],['🌙','The moon','달'],['🚌','A bus','버스']],
 phrases:[{en:"What's this?",ko:'이게 뭐예요?'},{en:"It's an apple!",ko:'사과예요!'}],
 mission:{ko:'코코에게 "What\'s this?"라고 물어보세요',keys:["what's this",'what is this','what is it']},
 open:"Woof! I have something behind my back! Ask me what it is!"},

{id:'k3u2',lv:3,emo:'🤔',title:'Do you like ~? (좋아해?)',
 words:[['🍕','Pizza','피자'],['🐱','Cats','고양이'],['⚽','Soccer','축구'],['🍦','Ice cream','아이스크림'],['📚','Books','책'],['🎵','Music','음악']],
 phrases:[{en:'Do you like pizza?',ko:'피자 좋아해?'},{en:'Yes, I do!',ko:'응, 좋아해!'}],
 mission:{ko:'코코에게 "Do you like ~?"라고 물어보세요',keys:['do you like']},
 open:"Woof woof! Ask me about things I like! I'll answer!"},

{id:'k3u3',lv:3,emo:'🔟',title:'How many? (몇 개야?)',
 words:[['7️⃣','Seven','일곱'],['8️⃣','Eight','여덟'],['9️⃣','Nine','아홉'],['🔟','Ten','열'],['🍬','Candies','사탕들'],['🎈','Balloons','풍선들']],
 phrases:[{en:'How many candies?',ko:'사탕이 몇 개예요?'},{en:'I have ten!',ko:'열 개 있어요!'}],
 mission:{ko:'코코에게 "How many ~?"라고 물어보세요',keys:['how many']},
 open:"Woof! I have many balls! Ask me how many!"},

{id:'k3u4',lv:3,emo:'📍',title:'Where is ~? (어디 있어?)',
 words:[['📦','In the box','상자 안에'],['🛏️','On the bed','침대 위에'],['🪑','Under the chair','의자 밑에'],['🚪','By the door','문 옆에'],['🎒','In my bag','내 가방 안에'],['🏠','At home','집에']],
 phrases:[{en:'Where is my ball?',ko:'내 공 어디 있어?'},{en:"It's on the bed!",ko:'침대 위에 있어!'}],
 mission:{ko:'코코에게 "Where is ~?"라고 물어보세요',keys:['where is','where are']},
 open:"Woof woof! I hid your toy! Ask me where it is!"},

{id:'k3u5',lv:3,emo:'🙋',title:'Can I ~? (해도 돼요?)',
 words:[['🍪','Have a cookie','쿠키 먹기'],['🎮','Play a game','게임 하기'],['📺','Watch TV','TV 보기'],['🚽','Go to the bathroom','화장실 가기'],['💧','Drink water','물 마시기'],['🛝','Go outside','밖에 나가기']],
 phrases:[{en:'Can I have a cookie?',ko:'쿠키 먹어도 돼요?'},{en:'Can I play a game?',ko:'게임 해도 돼요?'}],
 mission:{ko:'코코에게 "Can I ~?"라고 허락을 구해 보세요',keys:['can i ','may i ']},
 open:"Woof! I'm the boss today! Ask me if you can do something!"},

{id:'k3u6',lv:3,emo:'🌞',title:'나의 하루',
 words:[['⏰','Wake up','일어나다'],['🪥','Brush my teeth','이를 닦다'],['🍳','Eat breakfast','아침을 먹다'],['🏫','Go to school','학교에 가다'],['🛝','Play outside','밖에서 놀다'],['🛌','Go to bed','자러 가다']],
 phrases:[{en:'I wake up at seven.',ko:'나는 7시에 일어나요.'},{en:'I go to school.',ko:'나는 학교에 가요.'}],
 mission:{ko:'오늘 한 일을 하나 말해 보세요 (예: "I go to school")',keys:['i wake up','i go to','i eat','i play','i brush']},
 open:"Woof woof! Tell me about your day! What did you do?"}
];
