export const SUBJECTS = [
  {
    id: "sub-1",
    title: "General Knowledge & Current Affairs",
    titleTe: "జనరల్ నాలెడ్జ్ & కరెంట్ అఫైర్స్",
    icon: "Globe",
    color: "bg-blue-100 text-blue-600",
    progress: 45,
    topics: [
      { id: "t-1", title: "Indian Polity", titleTe: "భారత రాజ్యాంగం" },
      { id: "t-2", title: "Economy", titleTe: "ఆర్థిక వ్యవస్థ" },
      { id: "t-3", title: "Geography", titleTe: "భౌగోళిక శాస్త్రం" },
    ]
  },
  {
    id: "sub-2",
    title: "Perspectives in Education",
    titleTe: "విద్యా దృక్పథాలు",
    icon: "BookOpen",
    color: "bg-green-100 text-green-600",
    progress: 30,
    topics: [
      { id: "t-4", title: "History of Education", titleTe: "విద్యా చరిత్ర" },
      { id: "t-5", title: "Teacher Empowerment", titleTe: "ఉపాధ్యాయ సాధికారత" },
    ]
  },
  {
    id: "sub-3",
    title: "Child Development & Pedagogy",
    titleTe: "శిశు వికాసం & పెడగోగి",
    icon: "Users",
    color: "bg-purple-100 text-purple-600",
    progress: 60,
    topics: [
      { id: "t-6", title: "Growth & Development", titleTe: "పెరుగుదల & వికాసం" },
      { id: "t-7", title: "Learning Processes", titleTe: "అభ్యసన ప్రక్రియలు" },
    ]
  },
  {
    id: "sub-4",
    title: "Mathematics (Content & Methodology)",
    titleTe: "గణితం (కంటెంట్ & మెథడాలజీ)",
    icon: "Calculator",
    color: "bg-orange-100 text-orange-600",
    progress: 15,
    topics: [
      { id: "t-8", title: "Number System", titleTe: "సంఖ్యా వ్యవస్థ" },
      { id: "t-9", title: "Geometry", titleTe: "జ్యామితి" },
    ]
  },
  {
    id: "sub-5",
    title: "Science (Content & Methodology)",
    titleTe: "సైన్స్ (కంటెంట్ & మెథడాలజీ)",
    icon: "FlaskConical",
    color: "bg-teal-100 text-teal-600",
    progress: 25,
    topics: [
      { id: "t-10", title: "Physics", titleTe: "భౌతిక శాస్త్రం" },
      { id: "t-11", title: "Biology", titleTe: "జీవ శాస్త్రం" },
    ]
  }
];

export const MOCK_TESTS = [
  {
    id: "mock-1",
    title: "AP DSC Full Length Mock Test 1",
    questions: 160,
    duration: 180, // minutes
    attempts: 1240,
    tags: ["Full Length", "High Yield"],
  },
  {
    id: "mock-2",
    title: "General Knowledge Special",
    questions: 50,
    duration: 60,
    attempts: 850,
    tags: ["Sectional", "GK"],
  },
  {
    id: "mock-3",
    title: "Pedagogy Practice Set A",
    questions: 30,
    duration: 45,
    attempts: 2100,
    tags: ["Topic Wise", "Easy"],
  }
];

export const RECENT_ACTIVITY = [
  {
    id: "act-1",
    action: "Completed Quiz",
    subject: "Indian Polity",
    score: "8/10",
    time: "2 hours ago"
  },
  {
    id: "act-2",
    action: "Read Chapter",
    subject: "Growth & Development",
    score: null,
    time: "Yesterday"
  },
  {
    id: "act-3",
    action: "Attempted Mock",
    subject: "Mock Test 1",
    score: "92/160",
    time: "2 days ago"
  }
];

export const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: "Who is the chairman of the Drafting Committee of the Indian Constitution?",
    questionTe: "భారత రాజ్యాంగ ముసాయిదా కమిటీ అధ్యక్షుడు ఎవరు?",
    options: [
      { id: "a", text: "Jawaharlal Nehru", textTe: "జవహర్‌లాల్ నెహ్రూ" },
      { id: "b", text: "Dr. B.R. Ambedkar", textTe: "డా. బి.ఆర్. అంబేద్కర్" },
      { id: "c", text: "Sardar Patel", textTe: "సర్దార్ పటేల్" },
      { id: "d", text: "Rajendra Prasad", textTe: "రాజేంద్ర ప్రసాద్" }
    ],
    correctAnswer: "b",
    explanation: "Dr. B.R. Ambedkar was the chairman of the Drafting Committee, which was set up on August 29, 1947.",
    explanationTe: "ఆగస్టు 29, 1947న ఏర్పాటైన ముసాయిదా కమిటీకి డాక్టర్ బి.ఆర్. అంబేద్కర్ అధ్యక్షులుగా ఉన్నారు."
  },
  {
    id: 2,
    question: "The Right to Education Act was enacted in which year?",
    questionTe: "విద్యా హక్కు చట్టం ఏ సంవత్సరంలో రూపొందించబడింది?",
    options: [
      { id: "a", text: "2005", textTe: "2005" },
      { id: "b", text: "2009", textTe: "2009" },
      { id: "c", text: "2010", textTe: "2010" },
      { id: "d", text: "2002", textTe: "2002" }
    ],
    correctAnswer: "b",
    explanation: "The Right of Children to Free and Compulsory Education Act or Right to Education Act (RTE), is an Act of the Parliament of India enacted on 4 August 2009.",
    explanationTe: "ఉచిత మరియు నిర్బంధ విద్య కోసం పిల్లల హక్కు చట్టం లేదా విద్యా హక్కు చట్టం (RTE) అనేది 4 ఆగస్టు 2009న రూపొందించబడిన భారత పార్లమెంటు చట్టం."
  }
];
