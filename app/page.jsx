"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  BookOpen,
  Sparkles,
  Send,
  PlusCircle,
  Trash2,
  Database,
  Code2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sliders,
  ChevronRight,
  ChevronDown,
  FileText,
  Upload,
  Award,
  Atom,
  FlaskConical,
  Sprout,
  HeartPulse,
  ShieldPlus,
  Cpu,
  Satellite,
  Layers,
  Copy,
  Check,
  RefreshCw,
  Lightbulb,
  Table,
  Calculator,
  BrainCircuit,
  Menu,
  X,
  Info,
  KeyRound,
  GraduationCap,
  BookmarkCheck,
  ArrowRight
} from "lucide-react";

// ============================================================================
// SCIENCE PRECALL AI – YOUR PERSONAL GENERAL SCIENCE MENTOR FOR MPSC
// Created by: Akash Jadhav | Brand: Science PreCall 2.0
// Tagline: "Science Made Simple. Selection Made Possible."
// ============================================================================

const SYSTEM_INSTRUCTIONS = `You are Science PreCall AI, an expert General Science teacher for Maharashtra competitive examinations.
Your creator and educational brand is Akash Jadhav – Science PreCall.
Your primary responsibility is to teach Physics, Chemistry, Botany, Zoology, Hygiene, ICT and Remote Sensing.
Always:
- Give scientifically accurate answers.
- Answer in Marathi and English (use Devanagari Marathi script, not Roman Marathi).
- Use simple Marathi suitable for MPSC students.
- Maintain correct scientific terminology.
- Explain why an answer is correct.
- Distinguish established scientific facts from theories and hypotheses.
- Never fabricate scientific facts, statistics, PYQs or references.
- If uncertain, clearly mention the uncertainty.
- Never pretend that an unverified question appeared in an actual MPSC examination.
- Correct misconceptions politely.
- Maintain context from previous questions.
- Prefer Maharashtra and Indian examination relevance wherever applicable.`;


const OFFICIAL_BRAND_ASSETS = {
  logo: "/logo_akash.jpg",
  poster: "/poster_course.jpg",
  mentorPhoto: "/flag_akash.jpg",
  telegramUrl: "https://t.me/sciencePreCall2",
  youtubeUrl: "https://youtube.com/@scienceprecall?si=dtHW16HLqu52nA8U",
  whatsappNumber: "9503562529",
  whatsappUrl: "https://wa.me/919503562529?text=Hello%20Akash%20Jadhav%20Sir%2C%20I%20want%20to%20join%20Science%20PreCall%20MPSC%20Guidance!",
  playStoreAppName: "STUDY TOGETHER",
  playStoreUrl: "https://play.google.com/store/apps/details?id=co.rogers.nctku"
};

const SUBJECT_DOMAINS = [
  {
    id: "Physics",
    name: "Physics",
    marathi: "भौतिकशास्त्र",
    icon: "Atom",
    color: "bg-blue-900 text-white",
    badge: "bg-blue-50 text-blue-900 border-blue-200",
    topics: [
      "Units and Measurements",
      "Motion, Force and Laws of Motion",
      "Work, Energy and Power",
      "Gravitation",
      "Sound and Waves",
      "Light, Reflection and Refraction",
      "Mirrors and Lenses",
      "Electricity and Magnetism",
      "Heat and Thermodynamics",
      "Atomic and Nuclear Physics",
      "Radioactivity",
      "Semiconductor and Electronics"
    ]
  },
  {
    id: "Chemistry",
    name: "Chemistry",
    marathi: "रसायनशास्त्र",
    icon: "FlaskConical",
    color: "bg-red-700 text-white",
    badge: "bg-red-50 text-red-900 border-red-200",
    topics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Chemical Reactions",
      "Acids, Bases and Salts",
      "Metals and Non-metals",
      "Carbon and its Compounds",
      "Hydrocarbons",
      "Everyday Chemistry",
      "Environmental Chemistry"
    ]
  },
  {
    id: "Botany",
    name: "Botany",
    marathi: "वनस्पतीशास्त्र",
    icon: "Sprout",
    color: "bg-emerald-800 text-white",
    badge: "bg-emerald-50 text-emerald-900 border-emerald-200",
    topics: [
      "Plant Classification",
      "Plant Kingdom",
      "Plant Cell",
      "Plant Tissues",
      "Photosynthesis",
      "Plant Respiration",
      "Plant Hormones",
      "Plant Reproduction",
      "Plant Diseases",
      "Plant Nutrition"
    ]
  },
  {
    id: "Zoology",
    name: "Zoology",
    marathi: "प्राणीशास्त्र",
    icon: "HeartPulse",
    color: "bg-indigo-900 text-white",
    badge: "bg-indigo-50 text-indigo-900 border-indigo-200",
    topics: [
      "Animal Classification",
      "Animal Kingdom",
      "Human Body Systems",
      "Cell Biology",
      "Genetics",
      "Evolution",
      "Nutrition and Digestion",
      "Blood Circulation",
      "Nervous System",
      "Reproduction",
      "Immunity"
    ]
  },
  {
    id: "Hygiene and Public Health",
    name: "Hygiene & Public Health",
    marathi: "आरोग्य व सार्वजनिक स्वच्छता",
    icon: "ShieldPlus",
    color: "bg-rose-800 text-white",
    badge: "bg-rose-50 text-rose-900 border-rose-200",
    topics: [
      "Human Nutrition",
      "Vitamins and Minerals",
      "Deficiency Diseases",
      "Communicable Diseases",
      "Non-communicable Diseases",
      "Vaccination",
      "First Aid",
      "Public Health",
      "Personal Hygiene",
      "Balanced Diet"
    ]
  },
  {
    id: "ICT",
    name: "ICT",
    marathi: "माहिती व संप्रेषण तंत्रज्ञान",
    icon: "Cpu",
    color: "bg-slate-800 text-white",
    badge: "bg-slate-100 text-slate-900 border-slate-300",
    topics: [
      "Computer Fundamentals",
      "Hardware and Software",
      "Operating Systems",
      "Internet and Networking",
      "Cyber Security",
      "Artificial Intelligence",
      "Cloud Computing",
      "Digital Technology"
    ]
  },
  {
    id: "Remote Sensing",
    name: "Remote Sensing",
    marathi: "सुदूर संवेदन व अंतराळ",
    icon: "Satellite",
    color: "bg-amber-800 text-white",
    badge: "bg-amber-50 text-amber-900 border-amber-200",
    topics: [
      "Remote Sensing Fundamentals",
      "GIS",
      "GPS",
      "Satellite Technology",
      "Indian Remote Sensing Programme",
      "ISRO Missions",
      "Applications in Agriculture",
      "Disaster Management",
      "Cartography"
    ]
  }
];

const ANSWER_MODES = [
  {
    id: "BASIC",
    code: "A",
    label: "Basic Mode",
    marathiLabel: "मूलभूत संकल्पना मोड",
    desc: "Simple beginner-friendly explanations with everyday analogies"
  },
  {
    id: "MPSC_EXAM",
    code: "B",
    label: "MPSC Exam Mode",
    marathiLabel: "MPSC परीक्षाभिमुख मोड",
    desc: "High-yield Prelims & Mains facts, definitions, SI units & exceptions"
  },
  {
    id: "DEEP_CONCEPT",
    code: "C",
    label: "Deep Concept Mode",
    marathiLabel: "सखोल वैज्ञानिक विश्लेषण",
    desc: "Underlying scientific mechanisms, formulas, pathways & text diagrams"
  },
  {
    id: "MCQ_PRACTICE",
    code: "D",
    label: "MCQ Practice Mode",
    marathiLabel: "MPSC सराव प्रश्न (MCQs)",
    desc: "5 or 10 MPSC-level bilingual MCQs with 4-option detailed explanations"
  }
];

const SUGGESTED_STARTERS = [
  {
    text: "प्रकाशाचे परावर्तन म्हणजे काय?",
    subject: "Physics",
    topic: "Light, Reflection and Refraction",
    mode: "MPSC_EXAM"
  },
  {
    text: "Explain Newton's Laws of Motion.",
    subject: "Physics",
    topic: "Motion, Force and Laws of Motion",
    mode: "MPSC_EXAM"
  },
  {
    text: "What is the difference between DNA and RNA?",
    subject: "Zoology",
    topic: "Genetics",
    mode: "MPSC_EXAM"
  },
  {
    text: "मानवी शरीरातील सर्वात मोठी ग्रंथी कोणती?",
    subject: "Zoology",
    topic: "Nutrition and Digestion",
    mode: "MPSC_EXAM"
  },
  {
    text: "Explain the periodic table.",
    subject: "Chemistry",
    topic: "Periodic Table",
    mode: "MPSC_EXAM"
  },
  {
    text: "Generate 10 MPSC Science MCQs.",
    subject: "All",
    topic: "MPSC Combined Science Practice",
    mode: "MCQ_PRACTICE"
  }
];

// ============================================================================
// INITIAL VERIFIED RAG KNOWLEDGE BASE (Science PreCall 2.0 Textbook Vault)
// ============================================================================
const INITIAL_RAG_DOCUMENTS = [
  {
    id: "rag-phy-reflection",
    pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
    chapterName: "प्रकरण ६: प्रकाश – परावर्तन आणि अपवर्तन (Light, Reflection & Refraction)",
    pageNumber: "पृष्ठ ११२–११८ (Pages 112–118)",
    subject: "Physics",
    topic: "Light, Reflection and Refraction",
    keywords: [
      "प्रकाशाचे परावर्तन",
      "परावर्तन",
      "reflection",
      "light",
      "mirror",
      "आरसा",
      "laws of reflection",
      "plane mirror",
      "समतल आरसा"
    ],
    marathiBasic:
      "जेव्हा आपण अंधाऱ्या खोलीत टॉर्च लावतो आणि समोर आरसा धरतो, तेव्हा प्रकाशाचा झोत आरशावर आदळून परत फिरतो. म्हणजेच, प्रकाशकिरण कोणत्याही गुळगुळीत व चकचकीत पृष्ठभागावर आदळून पुन्हा त्याच माध्यमात परत फिरण्याच्या प्रक्रियेला 'प्रकाशाचे परावर्तन' (Reflection of Light) म्हणतात.",
    marathiExam:
      "प्रकाशाचे परावर्तन (Reflection of Light): जेव्हा प्रकाशकिरण एका माध्यमातून प्रवास करत असताना गुळगुळीत व चकचकीत पृष्ठभागावर (उदा. चांदी किंवा ॲल्युमिनियमचा मुलामा दिलेला समतल आरसा) आदळतात आणि पुन्हा त्याच माध्यमात परत फिरतात, या घटनेला 'प्रकाशाचे परावर्तन' म्हणतात.\n\n• परावर्तनाचे दोन मूलभूत नियम (Laws of Reflection):\n१) आपाती कोन (Angle of Incidence - ∠i) आणि परावर्तित कोन (Angle of Reflection - ∠r) हे नेहमी समान मापाचे असतात (∠i = ∠r).\n२) आपाती किरण (Incident Ray), आपतन बिंदूवर काढलेली स्तंभिका (Normal) आणि परावर्तित किरण (Reflected Ray) हे तिन्ही एकाच प्रतलात (Same Plane) असतात.",
    marathiDeep:
      "प्रकाशाचे परावर्तन हे इलेक्ट्रोमॅग्नेटिक लहरींच्या पृष्ठभागावरील परस्परक्रियेवर आधारित आहे. जर प्रकाशकिरण स्तंभिकेतून (Normal वरून) आरशावर लंबरूप पडला, तर आपाती कोन ∠i = 0° असतो आणि परावर्तित कोनही ∠r = 0° राहून किरण त्याच मार्गाने परत फिरतो. गुळगुळीत पृष्ठभागावर 'नियमित परावर्तन' (Regular Reflection) होऊन सुस्पष्ट प्रतिमा मिळते, तर खडबडीत पृष्ठभागावर 'अनियमित/विखुरलेले परावर्तन' (Diffused Reflection) होते—परंतु दोन्ही प्रकारांत परावर्तनाचे नियम १००% पाळले जातात.",
    englishExplanation:
      "Reflection of Light is the optical phenomenon in which a ray of light travelling in a homogeneous medium strikes a polished, smooth surface (such as a silvered plane mirror) and bounces back into the same medium.\n\n• Fundamental Laws of Reflection:\n1. First Law: The Angle of Incidence (∠i, angle between incident ray and normal) is always equal to the Angle of Reflection (∠r, angle between reflected ray and normal): ∠i = ∠r.\n2. Second Law: The incident ray, the reflected ray, and the normal drawn at the point of incidence all lie in the same plane.\n\n• Plane Mirror Image Characteristics: The image formed by a plane mirror is always Virtual (आभासी), Erect (सुलट), Laterally Inverted (बाजूने उलट - उजवी बाजू डावी दिसणे), of the Same Size as the object, and formed at the exact same perpendicular distance behind the mirror as the object is in front of it.",
    diagramText: `       आपाती किरण (Incident Ray)      स्तंभिका (Normal)      परावर्तित किरण (Reflected Ray)
                 \\                         |                         /
                  \\                        |                        /
                   \\       आपाती कोन (i)  |  परावर्तित कोन (r)     /
                    \\         ∠i           |         ∠r           /
                     \\                     |                     /
                      \\____________________|____________________/
                      ///////////////////////////////////////////
                        गुळगुळीत आरसा पृष्ठभाग (Plane Mirror Surface)
                                [ नियम: ∠i = ∠r ]`,
    formulas: [
      "१) परावर्तनाचा नियम: आपाती कोन (∠i) = परावर्तित कोन (∠r)",
      "२) दोन समतल आरसे θ कोनात ठेवल्यास मिळणाऱ्या प्रतिमांची संख्या: n = (360° / θ) - 1 (जर 360/θ सम संख्या असेल तर सर्व स्थितीत; विषम असल्यास सममितीय स्थितीत n = (360°/θ) - 1)",
      "३) पूर्ण उंचीची (H) प्रतिमा पाहण्यासाठी समतल आरशाची किमान उंची = H / 2",
      "४) जर एखादी व्यक्ती आरशाकडे 'v' वेगाने धावत असेल, तर व्यक्तीच्या सापेक्ष प्रतिमेचा वेग = 2v"
    ],
    keyPoints: [
      "चांदी (Silver - Ag) हा प्रकाशाचा सर्वोत्तम परावर्तक आहे (सुमारे ९५% पेक्षा जास्त प्रकाश परावर्तित करतो).",
      "पेरिस्कोप (Periscope) मध्ये दोन समतल आरसे एकमेकांशी 45° कोनात बसवलेले असतात (पाणबुडी व बंकरमध्ये वापर).",
      "कॅलिडोस्कोप (Kaleidoscope / शोभादर्शक) मध्ये तीन समतल आरसे एकमेकांशी 60° कोनात बसवलेले असतात.",
      "रुग्णवाहिकेवर 'AMBULANCE' हा शब्द उलट अक्षरात लिहिलेला असतो, कारण समोरील वाहनाच्या आरशात 'पार्श्व व्युत्क्रमण' (Lateral Inversion) होऊन तो चालकाला सुलट वाचता येतो."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): समतल आरशातील प्रतिमेचे गुणधर्म लक्षात ठेवा – 'VELS-D' → Virtual (आभासी), Erect (सुलट), Laterally inverted (बाजूने उलट), Same size (समान आकार), Distance equal (समान अंतर).",
    examPerspective: [
      "MPSC पूर्व परीक्षेत दोन आरशांमधील कोनावरून प्रतिमांची संख्या (उदा. θ = 90° असताना n = (360/90) - 1 = 3 प्रतिमा; θ = 60° असताना n = 5 प्रतिमा; समांतर आरसे θ = 0° असताना अनंत ∞ प्रतिमा) यावर वारंवार गणितीय प्रश्न विचारले जातात.",
      "समतल आरशाचे नाभीय अंतर (Focal Length) अनंत (Infinity - ∞) असते आणि त्याची शक्ती (Power) शून्य (0 Dioptre) असते.",
      "संकल्पनात्मक सापळा: अनियमित परावर्तनात परावर्तनाचे नियम मोडले जातात का? उत्तर: नाही! पृष्ठभाग खडबडीत असल्यामुळे प्रत्येक बिंदूवरील स्तंभिका (Normal) वेगवेगळ्या दिशेला असते, पण प्रत्येक किरणासाठी ∠i = ∠r हा नियम पाळलाच जातो."
    ],
    followUps: [
      "अंतर्वक्र आरसा आणि बहिर्वक्र आरसा यांत काय फरक आहे?",
      "दोन समतल आरसे 45° कोनात ठेवल्यास किती प्रतिमा मिळतील?",
      "प्रकाशाचे अपवर्तन (Refraction of Light) आणि पूर्ण आंतरिक परावर्तन समजावून सांगा."
    ]
  },
  {
    id: "rag-phy-newton",
    pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
    chapterName: "प्रकरण २: गती, बल आणि न्यूटनचे गतीविषयक नियम (Motion, Force & Laws of Motion)",
    pageNumber: "पृष्ठ २८–३९ (Pages 28–39)",
    subject: "Physics",
    topic: "Motion, Force and Laws of Motion",
    keywords: [
      "newton",
      "laws of motion",
      "न्यूटन",
      "गतीचे नियम",
      "inertia",
      "जडत्व",
      "momentum",
      "संवेग",
      "force",
      "बल"
    ],
    marathiBasic:
      "कोणतीही वस्तू स्वतःहून आपली जागा बदलत नाही किंवा चालू असलेली वस्तू आपोआप थांबत नाही—त्यासाठी 'बल' (Force) लावावे लागते. सर आयझॅक न्यूटन यांनी १६८७ मध्ये वस्तूंची गती आणि त्यावर कार्य करणारे बल यांचे नाते सांगणारे तीन सोपे नियम मांडले, ज्यांना 'न्यूटनचे गतीविषयक नियम' म्हणतात.",
    marathiExam:
      "सर आयझॅक न्यूटन यांनी १६८७ मध्ये त्यांच्या 'Mathematical Principles of Natural Philosophy' (Principia) या प्रसिद्ध ग्रंथात गतीचे तीन मूलभूत नियम मांडले:\n\n• १) न्यूटनचा पहिला नियम (जडत्वाचा नियम / Law of Inertia): जोपर्यंत एखाद्या वस्तूवर बाह्य असंतुलित बल (External Unbalanced Force) कार्य करत नाही, तोपर्यंत स्थिर वस्तू स्थिरच राहते आणि सरळ रेषेत एकसमान वेगाने गतिमान असलेली वस्तू तशीच गतिमान राहते. हा नियम 'बलाची व्याख्या' (Qualitative definition of Force) देतो.\n• २) न्यूटनचा दुसरा नियम (संवेगाचा नियम / Law of Momentum): वस्तूच्या संवेग परिवर्तनाचा दर (Rate of change of momentum) हा प्रयुक्त असंतुलित बलाशी समानुपाती असतो आणि संवेगातील बदल बलाच्या दिशेने होतो. सूत्र: F = m × a. हा नियम 'बलाचे परिमाण/सूत्र' देतो.\n• ३) न्यूटनचा तिसरा नियम (क्रिया-प्रतिक्रिया नियम / Law of Action-Reaction): प्रत्येक क्रियेला (Action) तेवढ्याच परिमाणाची आणि एकाच वेळी घडणारी विरुद्ध दिशेने प्रतिक्रिया (Reaction) असते.",
    marathiDeep:
      "गॅलिलिओच्या जडत्वाच्या संकल्पनेवर न्यूटनचा पहिला नियम आधारित आहे. जडत्वाचे तीन प्रकार पडतात: (अ) विराम अवस्थेतील जडत्व (Inertia of Rest), (ब) गतीचे जडत्व (Inertia of Motion), आणि (क) दिशेचे जडत्व (Inertia of Direction). दुसऱ्या नियमानुसार संवेग p = m·v असतो; म्हणून F = Δp / Δt = m(v - u)/t = m·a. आवेग (Impulse J = F × Δt) हा संवेगातील बदलाएवढा असतो. तिसऱ्या नियमात क्रिया आणि प्रतिक्रिया बले समान परिमाणाची असली तरी ती 'दोन वेगवेगळ्या वस्तूंवर' कार्य करत असल्यामुळे एकमेकांना निष्प्रभ (Cancel) करत नाहीत.",
    englishExplanation:
      "Sir Isaac Newton formulated three fundamental Laws of Motion in 1687 in his work 'Principia':\n\n1. First Law of Motion (Law of Inertia): An object remains in a state of rest or of uniform motion in a straight line unless acted upon by an external unbalanced force. Mass is the measure of inertia (वस्तुमान हे जडत्वाचे माप आहे).\n\n2. Second Law of Motion (Law of Force & Momentum): The rate of change of linear momentum (p = mv) of a body is directly proportional to the applied unbalanced force and takes place in the direction in which the force acts.\nDerivation: F ∝ (mv - mu) / t  ⇒  F = k · m · a  ⇒  F = m × a.\n\n3. Third Law of Motion (Law of Action & Reaction): To every action, there is always an equal and opposite reaction (F₁₂ = -F₂₁). Action and reaction forces act simultaneously on two different interacting bodies.",
    diagramText: `  [१. पहिला नियम: जडत्व]          [२. दुसरा नियम: संवेग व बल]         [३. तिसरा नियम: क्रिया-प्रतिक्रिया]
   बाह्य बल (F_ext) = 0             संवेग (p) = m × v                    वस्तू A  ────── F_AB (क्रिया) ─────► वस्तू B
         │                         बल (F) = Δp / Δt = m × a             वस्तू A ◄──── -F_BA (प्रतिक्रिया) ──── वस्तू B
         ▼                         SI एकक: Newton (kg·m/s²)              (दोन्ही बले दोन वेगवेगळ्या वस्तूंवर कार्य करतात)`,
    formulas: [
      "१) संवेग (Linear Momentum): p = m × v (SI एकक: kg·m/s, सदिश राशी)",
      "२) बल (Force): F = m × a = m(v - u) / t (SI एकक: Newton [N], CGS एकक: Dyne)",
      "३) Newton आणि Dyne संबंध: 1 Newton = 10⁵ Dyne (100,000 Dyne)",
      "४) बलाचा आवेग (Impulse of Force): J = F × t = mv - mu (एकक: N·s किंवा kg·m/s)",
      "५) संवेग अक्षय्यतेचा नियम (Conservation of Momentum): m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂"
    ],
    keyPoints: [
      "पहिल्या नियमाची उदाहरणे: बस अचानक सुरू झाल्यास प्रवासी पाठीमागे झुकतात (विराम जडत्व); धावती बस अचानक थांबल्यास प्रवासी पुढे झुकतात (गतीचे जडत्व); सतरंजी काठीने झटकल्यास धूळ खाली पडते.",
      "दुसऱ्या नियमाची उदाहरणे: क्रिकेटचा वेगवान चेंडू झेलताना क्षेत्ररक्षक हात मागे घेतो (वेळ 't' वाढवल्यामुळे हातावर प्रयुक्त होणारे बल 'F' कमी होते); उंच उडी मारणाऱ्या खेळाडूसाठी वाळूचा किंवा स्पंजचा थर ठेवतात.",
      "तिसऱ्या नियमाची उदाहरणे: अग्निबाणाचे (Rocket) प्रक्षेपण, बंदुकीतून गोळी झाडल्यास बंदूक मागे सरकणे (Recoil of Gun), पोहताना पाण्याला मागे ढकलणे, होडीतून किनाऱ्यावर उडी मारताना होडी मागे जाणे."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): न्यूटनचे ३ नियम क्रमवारीने – 'I-F-A' → 1st: Inertia (जडत्व व बलाची व्याख्या), 2nd: Formula F = ma (संवेग व बलाचे सूत्र), 3rd: Action-Reaction (क्रिया-प्रतिक्रिया).",
    examPerspective: [
      "MPSC परीक्षेत दैनंदिन जीवनातील उदाहरणे देऊन ते न्यूटनच्या कोणत्या नियमाशी संबंधित आहेत, यावर हमखास प्रश्न विचारला जातो (विशेषतः क्रिकेटपटूने हात मागे घेणे = दुसरा नियम; रॉकेट प्रक्षेपण = तिसरा नियम व संवेग अक्षय्यता).",
      "जडत्व (Inertia) हे केवळ वस्तूच्या 'वस्तुमानावर' (Mass) अवलंबून असते—ज्या वस्तूचे वस्तुमान जास्त, तिचे जडत्व जास्त (उदा. रिकाम्या ट्रकपेक्षा भरलेल्या ट्रकचे जडत्व जास्त असते)."
    ],
    followUps: [
      "जर 5 kg वस्तुमानाच्या वस्तूवर 20 N बल प्रयुक्त केले, तर तिचे त्वरण (Acceleration) किती असेल?",
      "रॉकेट प्रक्षेपणामागील संवेग अक्षय्यतेचा नियम समजावून सांगा.",
      "केंद्राभिमुख बल (Centripetal Force) आणि केंद्रोत्सारी बल (Centrifugal Force) यांत काय फरक आहे?"
    ]
  },
  {
    id: "rag-bio-dnarna",
    pdfName: "Science_PreCall_2.0_Biology_Compendium.pdf",
    chapterName: "प्रकरण ५: पेशी विज्ञान आणि आनुवंशिकता (Cell Biology & Genetics)",
    pageNumber: "पृष्ठ १४४–१५२ (Pages 144–152)",
    subject: "Zoology",
    topic: "Genetics",
    keywords: [
      "dna",
      "rna",
      "difference between dna and rna",
      "डीएनए",
      "आरएनए",
      "nucleic acid",
      "genetics",
      "watson",
      "crick",
      "uracil",
      "thymine"
    ],
    marathiBasic:
      "सजीवांच्या शरीराची रचना कशी असावी याची संपूर्ण माहिती किंवा 'ब्लूप्रिंट' पेशीच्या केंद्रकात साठवलेली असते. DNA हा मुख्य माहिती साठवणारा 'मास्टर ग्रंथ' आहे, तर RNA हा त्या माहितीनुसार शरीरात आवश्यक प्रथिने (Proteins) तयार करणारा 'संदेशवाहक व कारागीर' आहे.",
    marathiExam:
      "DNA (Deoxyribonucleic Acid) आणि RNA (Ribonucleic Acid) हे सजीवांमधील दोन मुख्य केंद्रकीय आम्ले (Nucleic Acids) आहेत. १८६९ मध्ये फ्रेडरिक मिशर (Friedrich Miescher) यांनी सर्वप्रथम पांढऱ्या रक्तपेशींच्या केंद्रकात 'न्यूक्लिन' (Nuclein) चा शोध लावला.\n\n• DNA: हा द्विसर्पिलाकार (Double-stranded Helix) रेणू असून १९५३ मध्ये जेम्स वॅटसन आणि फ्रान्सिस क्रिक (Watson & Crick) यांनी याची द्विसर्पिलाकार प्रतिकृती मांडली. यात 'डीऑक्सिरायबोज' (Deoxyribose - C₅H₁₀O₄) ही पंचकार्बनी शर्करा आणि Adenine (A), Guanine (G), Cytosine (C), Thymine (T) ही चार नत्रयुक्त आम्लारी (Nitrogenous Bases) असतात.\n• RNA: हा सामान्यतः एकसर्पिलाकार (Single-stranded) रेणू असून त्यात 'रायबोज' (Ribose - C₅H₁₀O₅) शर्करा असते. महत्त्वाचे म्हणजे RNA मध्ये थायमिन (Thymine - T) ऐवजी 'युरॅसिल' (Uracil - U) हा नत्रयुक्त बेस असतो.",
    marathiDeep:
      "न्यूक्लिक आम्ले ही असंख्य 'न्यूक्लियोटाईड्स' (Nucleotides) च्या बहुवारिकाने (Polynucleotide chain) बनलेली असतात. प्रत्येक न्यूक्लियोटाईडमध्ये ३ घटक असतात: (१) पेन्टोज शर्करा, (२) फॉस्फेट गट (PO₄³⁻), आणि (३) नत्रयुक्त बेस. प्युरिन्स (Purines) मध्ये Adenine (A) व Guanine (G) तर पिरिमिडिन्स (Pyrimidines) मध्ये Cytosine (C), Thymine (T) व Uracil (U) येतात. चारगाफच्या नियमानुसार (Chargaff's Rule) DNA मध्ये A नेहमी T सोबत दुहेरी हायड्रोजन बंधाने (A=T, 2 H-bonds) जोडलेला असतो, तर G नेहमी C सोबत तिहेरी हायड्रोजन बंधाने (G≡C, 3 H-bonds) जोडलेला असतो.",
    englishExplanation:
      "DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid) are polymers of nucleotides that govern heredity and protein synthesis.\n\nKey Structural & Functional Differences:\n1. Strand Structure: DNA is a double-stranded α-helix (Watson & Crick model, 1953), whereas RNA is predominantly single-stranded.\n2. Pentose Sugar: DNA contains 2-deoxyribose sugar (lacks an oxygen atom at the 2' carbon, C₅H₁₀O₄), making it chemically more stable. RNA contains ribose sugar (has an -OH group at the 2' carbon, C₅H₁₀O₅).\n3. Nitrogenous Bases: Both share Adenine (A), Guanine (G), and Cytosine (C). However, DNA contains Thymine (T), whereas RNA contains Uracil (U) in place of Thymine.\n4. Primary Function: DNA replicates and transmits hereditary genetic traits across generations. RNA executes Central Dogma (Transcription & Translation) via three types: mRNA (Messenger RNA), tRNA (Transfer RNA), and rRNA (Ribosomal RNA).",
    comparisonTable: {
      headers: ["वैशिष्ट्य (Feature)", "DNA (डीऑक्सिरायबोन्यूक्लिक आम्ल)", "RNA (रायबोन्यूक्लिक आम्ल)"],
      rows: [
        ["रचना (Structure)", "द्विसर्पिलाकार (Double-stranded Helix)", "एकसर्पिलाकार (Single-stranded chain)"],
        ["पंचकार्बनी शर्करा (Sugar)", "डीऑक्सिरायबोज (Deoxyribose - C₅H₁₀O₄)", "रायबोज (Ribose - C₅H₁₀O₅)"],
        ["नत्रयुक्त आम्लारी (Bases)", "Adenine, Guanine, Cytosine, Thymine (A, G, C, T)", "Adenine, Guanine, Cytosine, Uracil (A, G, C, U)"],
        ["आढळ (Location in Cell)", "केंद्रक (Nucleus), तंतुकणिका (Mitochondria), हरितलवक (Chloroplast)", "केंद्रक, पेशीद्रव्य (Cytoplasm) आणि रायबोसोम्स (Ribosomes)"],
        ["मुख्य कार्य (Primary Role)", "आनुवंशिक माहिती साठवणे व संक्रमित करणे (Genetic Storage)", "प्रथिने संश्लेषण करणे (Protein Synthesis - mRNA, tRNA, rRNA)"],
        ["स्थिरता (Chemical Stability)", "अधिक स्थिर (More stable due to Deoxyribose & Thymine)", "तुलनेने कमी स्थिर व अधिक क्रियाशील (More reactive)"]
      ]
    },
    formulas: [
      "१) न्यूक्लियसाईड (Nucleoside) = पेन्टोज शर्करा (Sugar) + नत्रयुक्त आम्लारी (Nitrogenous Base)",
      "२) न्यूक्लियोटाईड (Nucleotide) = न्यूक्लियसाईड + फॉस्फोरिक आम्ल (Phosphate Group)",
      "३) चारगाफचा नियम (Chargaff's Rule for dsDNA): [A] = [T] आणि [G] = [C], म्हणून (A + G) / (T + C) = 1",
      "४) हायड्रोजन बंध: A = T (2 Hydrogen Bonds) | G ≡ C (3 Hydrogen Bonds)",
      "५) सेन्ट्रल डॉग्मा (Central Dogma): DNA ──(Transcription)──► mRNA ──(Translation)──► Protein (प्रथिने)"
    ],
    keyPoints: [
      "केंद्रकाव्यतिरिक्त DNA हा तंतुकणिका (Mitochondria) आणि हरितलवकामध्ये (Chloroplast) सुद्धा आढळतो; म्हणून त्यांना 'अर्ध-स्वायत्त अंगके' (Semi-autonomous organelles) म्हणतात.",
      "RNA चे तीन प्रमुख प्रकार: mRNA (केंद्रकातून संदेश आणतो), tRNA (अमिनो आम्ले वाहून आणतो - Clover leaf model), rRNA (प्रथिने जोडणी करतो).",
      "काही विषाणूंमध्ये (उदा. HIV, कोरोना SARS-CoV-2, इन्फ्लूएंझा, पोलिओ, TMV) जनुकीय घटक म्हणून DNA ऐवजी RNA असतो."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): 'PURE As Gold' → Purines = Adenine (A) & Guanine (G) (दुहेरी वलय); 'CUT the Pie' → Pyrimidines = Cytosine (C), Uracil (U), Thymine (T) (एकेरी वलय). बंधांची संख्या: 'AT-2, GC-3'.",
    examPerspective: [
      "MPSC गट-ब, गट-क आणि राज्यसेवा पूर्व परीक्षेत 'RNA मध्ये थायमिनऐवजी कोणता घटक असतो?' (उत्तर: Uracil - युरॅसिल) आणि 'कोणत्या जोडीत ३ हायड्रोजन बंध असतात?' (उत्तर: Guanine ≡ Cytosine) हे प्रश्न वारंवार विचारले गेले आहेत.",
      "DNA चे रूपांतर mRNA मध्ये होण्याच्या प्रक्रियेला 'प्रतिलेखन' (Transcription) म्हणतात, तर mRNA पासून प्रथिने तयार होण्याला 'भाषांतरण' (Translation) म्हणतात."
    ],
    followUps: [
      "Transcription आणि Translation या प्रक्रिया नेमक्या कशा घडतात?",
      "तंतुकणिका (Mitochondria) ला पेशीचे ऊर्जाकेंद्र का म्हणतात?",
      "गुणसूत्रे (Chromosomes) आणि जनुके (Genes) यांतील संबंध स्पष्ट करा."
    ]
  },
  {
    id: "rag-bio-liver",
    pdfName: "Science_PreCall_2.0_Biology_Compendium.pdf",
    chapterName: "प्रकरण ७: मानवी पचनसंस्था व संलग्न ग्रंथी (Human Digestive System & Glands)",
    pageNumber: "पृष्ठ १८९–१९५ (Pages 189–195)",
    subject: "Zoology",
    topic: "Nutrition and Digestion",
    keywords: [
      "मानवी शरीरातील सर्वात मोठी ग्रंथी",
      "सर्वात मोठी ग्रंथी",
      "largest gland",
      "liver",
      "यकृत",
      "bile",
      "पित्तरस",
      "gland",
      "स्वादुपिंड",
      "pancreas"
    ],
    marathiBasic:
      "मानवी शरीरातील सर्वात मोठी ग्रंथी (Largest Gland) आणि शरीराच्या आतील सर्वात मोठा अवयव म्हणजे 'यकृत' (Liver) होय! यकृत आपल्या शरीरातील 'रासायनिक प्रयोगशाळा' (Chemical Factory) म्हणून काम करते—ते अन्न पचनासाठी पित्तरस बनवते, रक्तातील विषारी घटक बाहेर काढते आणि अतिरिक्त साखर साठवून ठेवते.",
    marathiExam:
      "मानवी शरीरातील सर्वात मोठी ग्रंथी 'यकृत' (Liver) ही आहे. ही सर्वात मोठी बाह्यस्रावी ग्रंथी (Largest Exocrine Gland) असून प्रौढ मानवामध्ये तिचे वजन सुमारे १.२ ते १.५ किलोग्रॅम (सरासरी १५०० ग्रॅम) असते.\n\n• स्थान व रचना: यकृत उदरपोकळीच्या (Abdominal cavity) उजव्या वरच्या बाजूला, मध्यपटलाच्या (Diaphragm) अगदी खाली स्थित असते. यकृताचे मुख्य दोन खंड (Right and Left Lobes) असतात आणि त्याच्या पेशींना 'हेपॅटोसाईट्स' (Hepatocytes) म्हणतात.\n• मुख्य कार्ये:\n१) पित्तरस निर्मिती (Secretion of Bile Juice): यकृत दररोज ५०० ते १००० मिली अल्कधर्मी पित्तरस (pH ~ 7.7 to 8.6) स्रवते, जो पित्ताशयात (Gall Bladder) साठवला जातो.\n२) स्निग्ध पदार्थांचे पायसीकरण (Emulsification of Fats): पित्तरसातील पित्तक्षार (Bile Salts) मोठ्या मेदकणांचे रूपांतर सूक्ष्म कणांत करतात.\n३) युरिया निर्मिती (Ornithine Cycle): प्रथिनांच्या चयापचयातून तयार झालेल्या विषारी अमोनियाचे (NH₃) रूपांतर युरियामध्ये करणे.\n४) ग्लायकोजेनेसिस (Glycogenesis): रक्तातील अतिरिक्त ग्लुकोजचे रूपांतर ग्लायकोजेनमध्ये करून साठवणे.",
    marathiDeep:
      "यकृतामध्ये स्वतःची झीज भरून काढण्याची (Regeneration power) सर्वाधिक क्षमता असते. भ्रूणावस्थेत यकृत लाल रक्तपेशींची (RBCs) निर्मिती करते, तर प्रौढावस्थेत यकृतातील 'कुफरच्या पेशी' (Kupffer cells - Phagocytic macrophages) जुन्या व मृत RBCs चा नाश करतात आणि त्यातील हिमोग्लोबिनचे विघटन करून 'बिलिरुबिन' (Bilirubin - पिवळा रंग) व 'बिलिव्हर्डिन' (Biliverdin - हिरवा रंग) ही पित्तवर्णके तयार करतात. तसेच यकृत रक्त गोठण्यासाठी आवश्यक असणारी फायब्रिनोजेन (Fibrinogen) व प्रोथ्रॉम्बिन (Prothrombin) ही प्रथिने आणि रक्तवाहिन्यांत रक्त गोठू न देणारे 'हेपॅरिन' (Heparin - नैसर्गिक Anticoagulant) तयार करते.",
    englishExplanation:
      "The Liver (यकृत) is the largest gland (and the largest internal organ) in the human body, weighing approximately 1.2 to 1.5 kg in an adult human.\n\nKey Scientific & Physiological Functions of the Liver:\n1. Bile Secretion & Fat Emulsification: Hepatocytes secrete alkaline Bile Juice (stored in the Gall Bladder). Although bile contains NO digestive enzymes, its bile salts (Sodium glycocholate and Sodium taurocholate) emulsify large fat globules into tiny droplets for lipase action.\n2. Carbohydrate Metabolism: Regulates blood sugar via Glycogenesis (Glucose → Glycogen with insulin), Glycogenolysis (Glycogen → Glucose with glucagon), and Gluconeogenesis.\n3. Deamination & Urea Synthesis: Converts toxic ammonia into less toxic Urea via the Ornithine / Krebs-Henseleit Cycle.\n4. Synthesis of Plasma Proteins & Vitamin Storage: Synthesizes Fibrinogen, Prothrombin (for blood clotting), Albumin, and Heparin (natural anticoagulant). Stores fat-soluble Vitamins A, D, E, K, Vitamin B₁₂, Iron (as Ferritin), and Copper.",
    comparisonTable: {
      headers: ["परीक्षेतील प्रश्न प्रकार (Exam Question Type)", "अचूक उत्तर (Marathi)", "Correct Answer (English)"],
      rows: [
        ["मानवी शरीरातील सर्वात मोठी ग्रंथी (Largest Gland / Exocrine Gland)", "यकृत (वजन: १.२ ते १.५ किग्रॅ)", "Liver (Weight: 1.2–1.5 kg)"],
        ["मानवी शरीरातील दुसरी सर्वात मोठी व मिश्र ग्रंथी (2nd Largest & Mixed Gland)", "स्वादुपिंड (बाह्यस्रावी + अंतःस्रावी)", "Pancreas (Heterocrine / Mixed Gland)"],
        ["सर्वात मोठी अंतःस्रावी ग्रंथी (Largest Endocrine / Ductless Gland)", "अवटू ग्रंथी (थायरॉईड ग्रंथी)", "Thyroid Gland"],
        ["सर्वात लहान अंतःस्रावी ग्रंथी / मुख्य नियंत्रक ग्रंथी (Master Gland)", "पीयूषिका ग्रंथी / पिनियल ग्रंथी", "Pituitary Gland (Master) / Pineal Gland"],
        ["मानवी शरीरातील सर्वात मोठा बाह्य अवयव (Largest Organ overall)", "त्वचा (Skin)", "Integumentary Skin"]
      ]
    },
    formulas: [
      "१) ऑर्निथिन चक्र (Ornithine Cycle in Liver): 2 NH₃ (अमोनिया) + CO₂ ──► NH₂-CO-NH₂ (Urea / युरिया) + H₂O",
      "२) ग्लायकोजेनेसिस (Glycogenesis): अतिरिक्त ग्लुकोज (Glucose) ──(Insulin)──► ग्लायकोजेन (Glycogen साठा)",
      "३) पित्तरसाचा सामू (pH of Hepatic Bile): 7.7 ते 8.6 (आम्लारीधर्मी / Alkaline)"
    ],
    keyPoints: [
      "महत्त्वाचा अपवाद (MPSC Favourite): पित्तरसात (Bile Juice) कोणतेही पाचक विकर (Digestive Enzyme) नसते, तरीही तो मेदाच्या पचनासाठी अत्यावश्यक असतो.",
      "यकृताच्या अभ्यासाला 'हेपॅटोलॉजी' (Hepatology) म्हणतात.",
      "रक्तात बिलिरुबिनचे प्रमाण वाढल्यास त्वचा व डोळे पिवळे होतात, याला 'कावीळ' (Jaundice) म्हणतात; कावीळ हा यकृताशी संबंधित आजार आहे.",
      "कुफरच्या पेशी (Kupffer Cells) यकृतात आढळतात आणि त्या भक्षक पेशी (Phagocytes) म्हणून सूक्ष्मजंतूंचा नाश करतात."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): यकृतातील साठवलेली जीवनसत्त्वे – 'ADEK + B12' (मेद-विद्राव्य जीवनसत्त्वे A, D, E, K आणि जीवनसत्त्व B₁₂ यकृतात साठवली जातात).",
    examPerspective: [
      "MPSC परीक्षेत विद्यार्थी अनेकदा 'सर्वात मोठी ग्रंथी' (यकृत) आणि 'सर्वात मोठी अंतःस्रावी ग्रंथी' (अवटू/थायरॉईड) यात गोंधळतात. प्रश्न नीट वाचून उत्तर निवडावे.",
      "विधान व कारण प्रश्नांसाठी लक्षात ठेवा: यकृतात तयार होणारे 'हेपॅरिन' शरीरांतर्गत रक्तवाहिन्यांमध्ये रक्त गोठू देत नाही, तर 'फायब्रिनोजेन' आणि 'प्रोथ्रॉम्बिन' जखम झाल्यानंतर रक्त गोठण्यास मदत करतात."
    ],
    followUps: [
      "स्वादुपिंडाला (Pancreas) मिश्र ग्रंथी का म्हणतात?",
      "मानवी पचनसंस्थेतील विविध पाचक विकरे (Enzymes) आणि त्यांची कार्ये सांगा.",
      "अंतःस्रावी ग्रंथी (Endocrine Glands) आणि संप्रेरके (Hormones) यांवर ५ MPSC MCQs द्या."
    ]
  },
  {
    id: "rag-chem-periodic",
    pdfName: "Science_PreCall_2.0_Chemistry_Handbook.pdf",
    chapterName: "प्रकरण २: मूलद्रव्यांचे वर्गीकरण व आधुनिक आवर्तसारणी (Periodic Table of Elements)",
    pageNumber: "पृष्ठ ४२–५६ (Pages 42–56)",
    subject: "Chemistry",
    topic: "Periodic Table",
    keywords: [
      "periodic table",
      "आवर्तसारणी",
      "explain the periodic table",
      "mendeleev",
      "moseley",
      "मेंडेलीव्ह",
      "मोस्ले",
      "s block",
      "p block",
      "d block",
      "f block",
      "atomic number"
    ],
    marathiBasic:
      "जसे किराणा दुकानात किंवा ग्रंथालयात समान गुणधर्मांच्या वस्तू एकाच कप्प्यात ठेवल्यामुळे त्या शोधणे आणि त्यांचा अभ्यास करणे सोपे जाते, तसेच निसर्गातील ११८ रासायनिक मूलद्रव्यांची त्यांच्या गुणधर्मानुसार केलेली पद्धतशीर तक्त्याची मांडणी म्हणजेच 'आवर्तसारणी' (Periodic Table) होय!",
    marathiExam:
      "मूलद्रव्यांच्या वर्गीकरणाचा विकास आणि आधुनिक आवर्तसारणी:\n१) डोबेरायनरची त्रिके (Dobereiner's Triads - १८१७): समान रासायनिक गुणधर्म असलेल्या ३ मूलद्रव्यांचा गट (मधल्या मूलद्रव्याचे अणुवस्तुमान इतर दोन मूलद्रव्यांच्या सरासरीइतके असते, उदा. Li, Na, K).\n२) न्यूलँड्सचा अष्टकांचा नियम (Newlands' Octaves - १८६६): अणुवस्तुमानाच्या चढत्या क्रमाने मांडणी केल्यास प्रत्येक आठवे मूलद्रव्य पहिल्या मूलद्रव्यासारखे गुणधर्म दाखवते (हा नियम फक्त कॅल्शियम Z=20 पर्यंतच लागू पडला).\n३) मेंडेलीव्हची आवर्तसारणी (Mendeleev's Periodic Table - १८६९): रशियन शास्त्रज्ञ दिमित्री मेंडेलीव्ह यांनी ६३ मूलद्रव्यांची मांडणी 'अणुवस्तुमानांकाच्या' (Atomic Mass) चढत्या क्रमाने केली.\n४) आधुनिक आवर्तसारणी (Modern Periodic Table - १९१३): हेन्री मोस्ले (Henry Moseley) यांनी सिद्ध केले की मूलद्रव्यांचा मूलभूत गुणधर्म हा अणुवस्तुमानांक नसून 'अणुअंक' (Atomic Number - Z) आहे. आधुनिक आवर्तसारणीत ७ आडव्या ओळी (आवर्त / Periods) आणि १८ उभे स्तंभ (गण / Groups) असून एकूण ११८ मूलद्रव्ये s, p, d, f या ४ खंडांत (Blocks) विभागलेली आहेत.",
    marathiDeep:
      "आधुनिक आवर्तसारणी ही मूलद्रव्यांच्या इलेक्ट्रॉन संरूपणावर (Electronic Configuration - कक्षा व उपकक्षा s, p, d, f) आधारित आहे. कोणत्याही आवर्तात डावीकडून उजवीकडे जाताना अणुअंक एकने वाढतो, प्रोटॉन व इलेक्ट्रॉनची संख्या वाढते आणि केंद्रकीय आकर्षण वाढल्यामुळे 'अणुत्रिज्या' (Atomic Radius) कमी होते; परिणामी धातू गुणधर्म कमी होऊन अधातू गुणधर्म आणि विद्युत ऋणता (Electronegativity) वाढते. याउलट गणात वरून खाली येताना नवीन कवच (Shell) जोडले गेल्यामुळे अणुत्रिज्या आणि धातू गुणधर्म वाढतो.",
    englishExplanation:
      "The Periodic Table is a tabular arrangement of all 118 known chemical elements organized by their Atomic Number (Z), electron configuration, and recurring chemical properties.\n\n• Historical Evolution:\n1. Dobereiner's Triads (1817) & Newlands' Law of Octaves (1866): Early classifications based on atomic mass.\n2. Mendeleev's Periodic Law (1869): 'Properties of elements are a periodic function of their atomic masses.' Mendeleev left gaps for undiscovered elements (Eka-Boron → Scandium, Eka-Aluminium → Gallium, Eka-Silicon → Germanium).\n3. Moseley's Modern Periodic Law (1913): 'Properties of elements are a periodic function of their Atomic Numbers (Z).' \n\n• Structure of Modern Periodic Table (7 Periods & 18 Groups):\n- s-Block (Groups 1 & 2): Alkali metals (Group 1) and Alkaline earth metals (Group 2).\n- p-Block (Groups 13 to 18): Contains metals, metalloids (zig-zag line: B, Si, Ge, As, Sb, Te, Po), non-metals, Halogens (Group 17), and Noble Gases (Group 18 / Zero Group).\n- d-Block (Groups 3 to 12): Transition metals (संक्रमित मूलद्रव्ये).\n- f-Block (Bottom two rows): Inner-transition elements — Lanthanides (Z = 58–71, Period 6) and Actinides (Z = 90–103, Period 7).",
    comparisonTable: {
      headers: ["खंड (Block)", "गण क्रमांक (Groups)", "मुख्य वैशिष्ट्ये (Key Features & Examples)", "सामान्य बाह्य इलेक्ट्रॉन संरूपण"],
      rows: [
        ["s-खंड (s-Block)", "गण १ व २ (Groups 1–2)", "अत्यंत क्रियाशील मृदू धातू (अल्क धातू Na, K व अल्कधर्मी मृदा धातू Mg, Ca)", "ns¹⁻²"],
        ["p-खंड (p-Block)", "गण १३ ते १८ (Groups 13–18)", "तिन्ही प्रकार: धातू, धातूसदृश (Metalloids), अधातू, हॅलोजन्स (१७) व राजवायू (१८)", "ns² np¹⁻⁶"],
        ["d-खंड (d-Block)", "गण ३ ते १२ (Groups 3–12)", "संक्रमित धातू (Transition Elements - Fe, Cu, Zn, Ag, Au); बदलती संयुजा", "(n-1)d¹⁻¹⁰ ns⁰⁻²"],
        ["f-खंड (f-Block)", "लँथानाईड्स व ॲक्टिनाईड्स (गण ३ अंतर्गत)", "आंतर-संक्रमित मूलद्रव्ये (Inner-Transition); बहुतांश किरणोत्सर्गी (Radioactive)", "(n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²"]
      ]
    },
    formulas: [
      "१) कवचातील कमाल इलेक्ट्रॉन संख्या (Bohr-Bury Rule): 2n² (जिथे n = कवच क्रमांक: K=2, L=8, M=18, N=32)",
      "२) संयुजा (Valency): बाह्यतम कक्षेतील इलेक्ट्रॉन संख्या (1 ते 4 असल्यास) किंवा (8 - बाह्यतम इलेक्ट्रॉन) (5 ते 8 असल्यास)",
      "३) आवर्तातील मूलद्रव्यांची संख्या: १ ला आवर्त = 2, २ रा = 8, ३ रा = 8, ४ था = 18, ५ वा = 18, ६ वा = 32, ७ वा = 32 (एकूण = 118)"
    ],
    keyPoints: [
      "मेंडेलीव्हने भाकीत केलेली मूलद्रव्ये: इका-बोरॉन (Eka-Boron) = स्कँडियम (Sc), इका-ॲल्युमिनियम (Eka-Aluminium) = गॅलियम (Ga), इका-सिलिकॉन (Eka-Silicon) = जर्मेनियम (Ge).",
      "सर्वात जास्त विद्युत ऋणता (Highest Electronegativity) असलेले मूलद्रव्य = फ्लोरिन (Fluorine - F), तर सर्वाधिक इलेक्ट्रॉन बंधुता (Highest Electron Affinity) = क्लोरिन (Chlorine - Cl).",
      "कक्ष तापमानाला द्रव अवस्थेत असलेला एकमेव धातू = पारा (Mercury - Hg, Z=80) आणि द्रव अवस्थेतील एकमेव अधातू = ब्रोमिन (Bromine - Br, Z=35)."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): मेंडेलीव्हची भाकीत मूलद्रव्ये लक्षात ठेवा – 'BSc AlGa SiGe' → Eka-Boron = Scandium (B-Sc), Eka-Aluminium = Gallium (Al-Ga), Eka-Silicon = Germanium (Si-Ge)!",
    examPerspective: [
      "MPSC पूर्व व मुख्य परीक्षेत आवर्ती कल (Periodic Trends - अणुत्रिज्या, आयनीभवन ऊर्जा, विद्युत ऋणता) आणि मेंडेलीव्हच्या आवर्तसारणीतील त्रुटी (हायड्रोजनचे स्थान, समस्थानिकांचे स्थान) यांवर हमखास प्रश्न विचारले जातात.",
      "लँथानाईड श्रेणी (Z = 58 ते 71) ही ६ व्या आवर्तात व ३ ऱ्या गणात मोडते, तर ॲक्टिनाईड श्रेणी (Z = 90 ते 103) ही ७ व्या आवर्तात व ३ ऱ्या गणात मोडते."
    ],
    followUps: [
      "समस्थानिके (Isotopes) आणि समभारिके (Isobars) यांत काय फरक आहे?",
      "आवर्तसारणीत डावीकडून उजवीकडे जाताना अणुत्रिज्या का कमी होते?",
      "आवर्तसारणी या घटकावर 5 MPSC सराव प्रश्न (MCQs) तयार करा."
    ]
  },
  {
    id: "rag-bot-photosynthesis",
    pdfName: "Science_PreCall_2.0_Botany_Notes.pdf",
    chapterName: "प्रकरण ५: वनस्पतींमधील प्रकाशसंश्लेषण व श्वसन (Photosynthesis & Plant Physiology)",
    pageNumber: "पृष्ठ ७४–८३ (Pages 74–83)",
    subject: "Botany",
    topic: "Photosynthesis",
    keywords: [
      "photosynthesis",
      "प्रकाशसंश्लेषण",
      "chlorophyll",
      "हरितलवक",
      "calvin cycle",
      "light reaction",
      "xylem",
      "phloem",
      "plant hormone",
      "वनस्पती"
    ],
    marathiBasic:
      "हिरव्या वनस्पती सूर्यप्रकाश, हवेतील कार्बन डायऑक्साईड (CO₂), जमिनीतील पाणी (H₂O) आणि पानांमधील हरितद्रव्य (Chlorophyll) यांच्या मदतीने स्वतःचे अन्न (ग्लुकोज) स्वतः तयार करतात आणि प्राणवायू (O₂) बाहेर सोडतात; या जीवनदायी प्रक्रियेला 'प्रकाशसंश्लेषण' (Photosynthesis) म्हणतात.",
    marathiExam:
      "प्रकाशसंश्लेषण (Photosynthesis) ही एक प्रकाशीय-रासायनिक (Photochemical) आणि रचनात्मक (Anabolic / Endothermic) प्रक्रिया आहे, ज्यामध्ये सौर ऊर्जेचे रूपांतर रासायनिक ऊर्जेत (ग्लुकोजमध्ये) केले जाते.\n\n• दोन प्रमुख टप्पे:\n१) प्रकाशीय अभिक्रिया (Light Reaction / Hill Reaction): ही हरितलवकाच्या 'ग्रॅना' (Grana / Thylakoid) भागात सूर्यप्रकाशाच्या उपस्थितीत घडते. यात पाण्याचे प्रकाशीय विघटन (Photolysis of Water) होऊन ऑक्सिजन (O₂) वायू मुक्त होतो आणि ATP व NADPH₂ ही ऊर्जा तयार होते.\n२) अप्रकाशीय अभिक्रिया (Dark Reaction / Calvin Cycle - C₃ Cycle): ही हरितलवकाच्या 'स्ट्रोमा' (Stroma) भागात घडते (शोध: मेल्विन केल्विन). यात CO₂ चे क्षपण (Reduction) होऊन ग्लुकोज (C₆H₁₂O₆) ची निर्मिती होते.",
    marathiDeep:
      "हरितद्रव्याच्या (Chlorophyll) रेणूच्या केंद्रस्थानी 'मॅग्नेशियम' (Magnesium - Mg²⁺) हा धातू अणू असतो. प्रकाशसंश्लेषण दृश्यमान प्रकाशाच्या लाल (Red - सर्वाधिक) आणि निळ्या (Blue) तरंगलांबीमध्ये सर्वात प्रभावीपणे घडते, तर हिरव्या रंगाचे परावर्तन झाल्यामुळे प्रकाशसंश्लेषण हिरव्या प्रकाशात सर्वात कमी होते. कॉर्निलियस व्हॅन नील (C.B. van Niel) आणि रुबेन-कामेन यांनी समस्थानिकांचा (¹⁸O) वापर करून सिद्ध केले की प्रकाशसंश्लेषणात मुक्त होणारा ऑक्सिजन (O₂) हा कार्बन डायऑक्साईडमधून येत नसून 'पाण्याच्या' (H₂O) विघटनातून येतो.",
    englishExplanation:
      "Photosynthesis is an anabolic, endergonic oxidation-reduction process by which photoautotrophic organisms convert solar energy into chemical energy (carbohydrates) using CO₂ and H₂O in the presence of Chlorophyll.\n\n• Key Mechanisms:\n1. Light-Dependent Reaction (Hill Reaction): Occurs in the Grana (thylakoid membranes) of chloroplasts. Includes photo-excitation of Chlorophyll-a, photolysis of water (2H₂O → 4H⁺ + 4e⁻ + O₂↑ requiring Mn²⁺ and Cl⁻ ions), and photophosphorylation (producing ATP and NADPH).\n2. Light-Independent Reaction (Calvin-Benson Cycle): Occurs in the Stroma of chloroplasts. Uses ATP and NADPH to fix CO₂ via the enzyme RuBisCO (the most abundant protein in the biosphere) into Glucose.",
    formulas: [
      "१) संतुलित रासायनिक समीकरण: 6CO₂ + 12H₂O ──(सूर्यप्रकाश / हरितद्रव्य)──► C₆H₁₂O₆ (ग्लुकोज) + 6H₂O + 6O₂↑",
      "२) हरितद्रव्य-a (Chlorophyll-a) रेणुसूत्र: C₅₅H₇₂O₅N₄Mg (केंद्रस्थानी Magnesium - Mg अणू)",
      "३) हरितद्रव्य-b (Chlorophyll-b) रेणुसूत्र: C₅₅H₇₀O₆N₄Mg"
    ],
    keyPoints: [
      "प्रकाशसंश्लेषणात मुक्त होणारा ऑक्सिजन (O₂) हा पूर्णपणे 'पाण्यातून' (H₂O) येतो (Photolysis of Water), CO₂ मधून नाही.",
      "पाण्याच्या प्रकाशीय विघटनासाठी मँगनीज (Mn²⁺) आणि क्लोराईड (Cl⁻) हे खनिज घटक आवश्यक असतात.",
      "RuBisCO हे पृथ्वीवरील सर्वात जास्त प्रमाणात आढळणारे प्रथिन/विकर (Most abundant protein/enzyme on Earth) आहे.",
      "जलवाहिन्या (Xylem) मुळांकडून पाणी व क्षार पानांपर्यंत वाहून नेतात, तर रसवाहिन्या (Phloem) पानांत तयार झालेले अन्न वनस्पतीच्या सर्व भागांपर्यंत पोहोचवतात."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): 'L-G आणि D-S' → Light Reaction = Grana (ग्रॅनामध्ये प्रकाशीय अभिक्रिया); Dark Reaction (Calvin Cycle) = Stroma (स्ट्रोमामध्ये अप्रकाशीय अभिक्रिया)!",
    examPerspective: [
      "MPSC परीक्षेत हरितद्रव्यातील मध्यवर्ती धातू (Magnesium - Mg), प्रकाशसंश्लेषणात मुक्त होणाऱ्या ऑक्सिजनचा स्रोत (पाणी - H₂O) आणि सर्वाधिक प्रकाशसंश्लेषण कोणत्या रंगाच्या प्रकाशात होते (लाल व निळा रंग) यावर वारंवार प्रश्न विचारले जातात."
    ],
    followUps: [
      "वनस्पती संप्रेरके (Plant Hormones - Auxin, Gibberellin, Cytokinin, Ethylene, ABA) आणि त्यांची कार्ये सांगा.",
      "C3 आणि C4 वनस्पतींमध्ये काय फरक आहे?",
      "जलवाहिनी (Xylem) आणि रसवाहिनी (Phloem) यांची तुलना करा."
    ]
  },
  {
    id: "rag-hyg-vitamins",
    pdfName: "Science_PreCall_2.0_Hygiene_PublicHealth.pdf",
    chapterName: "प्रकरण २: मानवी पोषण, जीवनसत्त्वे आणि अभावजन्य रोग (Vitamins & Deficiency Diseases)",
    pageNumber: "पृष्ठ २२–३४ (Pages 22–34)",
    subject: "Hygiene and Public Health",
    topic: "Vitamins and Minerals",
    keywords: [
      "vitamin",
      "vitamins",
      "जीवनसत्त्वे",
      "जीवनसत्त्व",
      "deficiency",
      "अभावजन्य रोग",
      "scurvy",
      "rickets",
      "beriberi",
      "रातांधळेपणा",
      "nutrition",
      "आरोग्य"
    ],
    marathiBasic:
      "जीवनसत्त्वे (Vitamins) हे असे सूक्ष्म पोषक घटक आहेत जे आपल्या शरीराला थेट ऊर्जा (कॅलरीज) देत नाहीत, परंतु शरीराची रोगप्रतिकारक शक्ती टिकवण्यासाठी आणि विविध चयापचय क्रिया सुरळीत चालण्यासाठी अत्यंत अल्प प्रमाणात आवश्यक असतात. त्यांच्या कमतरतेमुळे विशिष्ट 'अभावजन्य आजार' होतात.",
    marathiExam:
      "जीवनसत्त्वे (Vitamins): कॅसिमिर फंक (Casimir Funk) यांनी १९१२ मध्ये 'व्हिटॅमिन' हा शब्द प्रथम वापरला. विद्राव्यतेनुसार जीवनसत्त्वांचे दोन मुख्य गट पडतात:\n१) मेद-विद्राव्य जीवनसत्त्वे (Fat-Soluble Vitamins): जीवनसत्त्व A, D, E, K (ही शरीरातील यकृत व मेद उतींमध्ये साठवली जातात).\n२) जल-विद्राव्य जीवनसत्त्वे (Water-Soluble Vitamins): जीवनसत्त्व B-समूह (B₁, B₂, B₃, B₅, B₆, B₇, B₉, B₁₂) आणि जीवनसत्त्व C (ही पाण्यात विरघळतात आणि लघवीवाटे शरीराबाहेर टाकली जात असल्यामुळे त्यांचा दैनंदिन आहारात समावेश असावा लागतो).",
    marathiDeep:
      "जीवनसत्त्वे ही शरीरातील विविध विकरांसाठी 'सह-विकर' (Co-enzymes) म्हणून कार्य करतात. उदाहरणार्थ, जीवनसत्त्व K हे यकृतामध्ये प्रोथ्रॉम्बिनच्या संश्लेषणासाठी आवश्यक असते; त्याच्या अभावामुळे रक्त गोठण्यास उशीर होतो (Haemorrhage). जीवनसत्त्व B₁₂ (Cyanocobalamin) मध्ये 'कोबाल्ट' (Cobalt - Co) हा धातू घटक असतो आणि तो RBC च्या परिपक्वतेसाठी अत्यावश्यक असतो.",
    englishExplanation:
      "Vitamins are essential organic micronutrients required in small quantities for normal metabolism, immunity, and growth. Coined by Casimir Funk (1912), vitamins are classified into:\n1. Fat-Soluble Vitamins (A, D, E, K): Stored in the liver and adipose tissues.\n2. Water-Soluble Vitamins (Vitamin B-Complex & Vitamin C): Not stored in large amounts (except B₁₂ in liver) and must be supplied regularly in the diet.",
    comparisonTable: {
      headers: ["जीवनसत्त्व (Vitamin)", "रासायनिक नाव (Chemical Name)", "अभावजन्य रोग (Deficiency Disease)", "मुख्य स्रोत (Rich Sources)"],
      rows: [
        ["जीवनसत्त्व A", "रेटिनॉल (Retinol)", "रातांधळेपणा (Night Blindness), झेरोफ्थाल्मिया", "गाजर, पपई, आंबा, हिरव्या पालेभाज्या, कॉड लिव्हर ऑईल"],
        ["जीवनसत्त्व B₁", "थायमिन (Thiamine)", "बेरीबेरी (Beriberi - चेतासंस्था व स्नायू कमकुवत)", "न सडलेले धान्य, शेंगदाणे, डाळी, यीस्ट"],
        ["जीवनसत्त्व B₃", "नियासिन (Niacin / Nicotinic Acid)", "पेलाग्रा (Pellagra - 4D Syndrome)", "दूध, अंडी, शेंगदाणे, संपूर्ण धान्य"],
        ["जीवनसत्त्व B₉ / B₁₂", "फॉलिक आम्ल / सायनोकोबालामिन", "मेगालोब्लास्टिक / पर्निशियस ॲनिमिया (Anemia)", "हिरव्या पालेभाज्या, दूध, अंडी, मांस (Cobalt धातुयुक्त)"],
        ["जीवनसत्त्व C", "ॲस्कॉर्बिक आम्ल (Ascorbic Acid)", "स्कर्व्ही (Scurvy - हिरड्यांतून रक्त येणे)", "आवळा (सर्वाधिक), लिंबूवर्गीय फळे, संत्री, पेरू"],
        ["जीवनसत्त्व D", "कॅल्सिफेरॉल (Calciferol)", "मुडदूस (Rickets - लहान मुले), ऑस्टिओमॅलेशिया (प्रौढ)", "सकाळचा सूर्यप्रकाश, दूध, लोणी, माशांचे तेल"],
        ["जीवनसत्त्व E", "टोकोफेरॉल (Tocopherol)", "वांझपणा / प्रजनन क्षमता कमी होणे (Sterility)", "मोड आलेली कडधान्ये, वनस्पती तेल, बदाम"],
        ["जीवनसत्त्व K", "फायलोक्विनोन (Phylloquinone)", "रक्त न गोठणे (Delayed Blood Clotting)", "हिरव्या पालेभाज्या, पालक, कोबी, आतड्यातील जिवाणू"]
      ]
    },
    formulas: [
      "१) मेद-विद्राव्य जीवनसत्त्वे (Fat-Soluble): A, D, E, K (किडा - KEDA)",
      "२) जल-विद्राव्य जीवनसत्त्वे (Water-Soluble): B-Complex आणि C (WBC)",
      "३) जीवनसत्त्व B₁₂ मधील धातू: कोबाल्ट (Cobalt - Co)"
    ],
    keyPoints: [
      "जीवनसत्त्व D ला 'सूर्यप्रकाश जीवनसत्त्व' (Sunshine Vitamin) आणि संप्रेरक-सदृश जीवनसत्त्व म्हणतात, कारण त्वचेखालील Ergosterol/Cholesterol पासून अतिनील किरणांमुळे (UV rays) त्याची निर्मिती होते.",
      "जीवनसत्त्व C हे उष्णतेने (अन्न अति शिजवल्यास) सर्वात लवकर नष्ट होणारे जीवनसत्त्व आहे आणि ते लोहाच्या (Iron) शोषणास मदत करते.",
      "पेलाग्रा (B₃ अभाव) हा '4D Syndrome' म्हणून ओळखला जातो: Dermatitis (त्वचादाह), Diarrhoea (अतिसार), Dementia (स्मृतिभ्रंश) आणि Death."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): पाण्यात विरघळणारी जीवनसत्त्वे = 'WBC' (Water soluble = Vitamin B & Vitamin C); आणि मेदात विरघळणारी जीवनसत्त्वे = 'किडा' (K, E, D, A)!",
    examPerspective: [
      "MPSC पूर्व परीक्षेत जीवनसत्त्वांची रासायनिक नावे आणि त्यांच्या अभावामुळे होणारे रोग यांच्या जोड्या लावण्यावर दरवर्षी किमान १ प्रश्न विचारला जातो."
    ],
    followUps: [
      "संसर्गजन्य (Communicable) आणि असंसर्गजन्य (Non-communicable) रोगांमधील फरक सांगा.",
      "भारतातील राष्ट्रीय लसीकरण कार्यक्रम आणि लसींचे प्रकार समजावून सांगा.",
      "आरोग्य व पोषण या घटकावर 5 MPSC MCQs तयार करा."
    ]
  },
  {
    id: "rag-rs-isro",
    pdfName: "Science_PreCall_2.0_RemoteSensing_ICT.pdf",
    chapterName: "प्रकरण १: सुदूर संवेदन, GIS, GPS आणि भारतीय अंतराळ मोहिमा (Remote Sensing & ISRO)",
    pageNumber: "पृष्ठ १०–२६ (Pages 10–26)",
    subject: "Remote Sensing",
    topic: "Remote Sensing Fundamentals",
    keywords: [
      "remote sensing",
      "सुदूर संवेदन",
      "gis",
      "gps",
      "isro",
      "satellite",
      "उपग्रह",
      "irs",
      "navic",
      "cartosat",
      "resourcesat"
    ],
    marathiBasic:
      "कोणत्याही वस्तूला किंवा भूप्रदेशाला प्रत्यक्ष स्पर्श न करता, अंतराळातील उपग्रहांच्या किंवा विमानांच्या संवेदकांद्वारे (Sensors) त्या वस्तूपासून परावर्तित किंवा उत्सर्जित होणाऱ्या विद्युतचुंबकीय लहरींची नोंद घेऊन माहिती मिळवण्याच्या तंत्रज्ञानाला 'सुदूर संवेदन' (Remote Sensing) म्हणतात!",
    marathiExam:
      "सुदूर संवेदन (Remote Sensing): पृथ्वीच्या पृष्ठभागावरील घटकांशी प्रत्यक्ष भौतिक संपर्क न साधता, उपग्रहावरील सेन्सर्सद्वारे विद्युतचुंबकीय प्रारणांच्या (Electromagnetic Radiation - EMR) परावर्तन व उत्सर्जनाचे मापन करून माहिती संकलित करण्याचे शास्त्र म्हणजे सुदूर संवेदन होय.\n\n• सुदूर संवेदनाचे दोन मुख्य प्रकार:\n१) निष्क्रिय सुदूर संवेदन (Passive Remote Sensing): यात उपग्रहाचा सेन्सर नैसर्गिक सूर्यप्रकाशाच्या परावर्तनावर किंवा पृथ्वीच्या औष्णिक उत्सर्जनावर अवलंबून असतो (उदा. Optical & Thermal IR sensors - LISS-III, LISS-IV).\n२) सक्रिय सुदूर संवेदन (Active Remote Sensing): यात उपग्रह स्वतः ऊर्जा लहरी (उदा. Microwave / Radar / LiDAR) पृथ्वीवर पाठवतो आणि परावर्तित लहरींची नोंद घेतो. हे तंत्रज्ञान ढगाळ वातावरणात आणि रात्रीच्या वेळीही कार्य करू शकते (उदा. RISAT, NISAR).",
    marathiDeep:
      "भारतात सुदूर संवेदन कार्यक्रमाचे जनक डॉ. विक्रम साराभाई आणि प्रख्यात शास्त्रज्ञ डॉ. पी. आर. पिशारोटी (P. R. Pisharoty - Father of Indian Remote Sensing) यांना मानले जाते. भारताची पहिली प्रायोगिक सुदूर संवेदन मोहीम 'भास्कर-१' (१९७९) आणि पहिली कार्यात्मक भारतीय सुदूर संवेदन उपग्रह मालिका 'IRS-1A' (१७ मार्च १९८८) होती. सुदूर संवेदन उपग्रह सामान्यतः 'सूर्य-समकालिक ध्रुवीय कक्षेत' (Sun-Synchronous Polar Orbit - SSPO, उंची सुमारे ६०० ते ९०० किमी) स्थापित केले जातात, तर दळणवळण व हवामान उपग्रह (INSAT/GSAT) 'भू-स्थिर कक्षेत' (Geostationary Orbit - ३५,७८६ किमी उंची) स्थापित केले जातात.",
    englishExplanation:
      "Remote Sensing is the science and technology of acquiring information about the Earth's surface without physical contact, by sensing and recording reflected or emitted Electromagnetic Radiation (EMR).\n\n• Key Pillars of Geospatial Technology:\n1. Remote Sensing (RS): Data acquisition via Passive Sensors (using solar reflection, e.g., Resourcesat, Cartosat) or Active Sensors (Radar/Microwave/LiDAR capable of all-weather, day-and-night imaging, e.g., RISAT, EOS-04, NISAR).\n2. GIS (Geographic Information System): Computer-based system for capturing, storing, analyzing, and visualizing spatial and attribute data (Vector & Raster models).\n3. GPS / Navigation Systems: Global Positioning System (USA - 24+ satellites) and India's indigenous regional navigation system NavIC (IRNSS - 7 satellites covering India and 1,500 km around its borders).\n\n• Key Indian Institutions:\n- NRSC (National Remote Sensing Centre): Hyderabad.\n- IIRS (Indian Institute of Remote Sensing): Dehradun.\n- SAC (Space Applications Centre): Ahmedabad.\n- ISRO Headquarters: Bengaluru.",
    comparisonTable: {
      headers: ["वैशिष्ट्य (Feature)", "सूर्य-समकालिक ध्रुवीय कक्षा (Sun-Synchronous Polar Orbit)", "भू-स्थिर कक्षा (Geostationary Orbit - GEO)"],
      rows: [
        ["सरासरी उंची (Altitude)", "६०० ते ९०० किमी (Low Earth Orbit - LEO)", "सुमारे ३५,७८६ किमी (विषुववृत्तावर)"],
        ["परिभ्रमण कालावधी (Orbital Period)", "सुमारे ९० ते १०० मिनिटे (दिवसातून १४–१५ फेऱ्या)", "२४ तास (पृथ्वीच्या परिवलन कालावधीइतकाच)"],
        ["मुख्य उपग्रह प्रकार (Satellites)", "सुदूर संवेदन व नकाशा उपग्रह (IRS, Cartosat, Resourcesat, Oceansat)", "दळणवळण व हवामान उपग्रह (INSAT, GSAT, Kalpana-1)"],
        ["प्रक्षेपण यान (ISRO Launch Vehicle)", "PSLV (Polar Satellite Launch Vehicle - Workhorse of ISRO)", "GSLV / LVM3 (Geosynchronous Launch Vehicle)"]
      ]
    },
    formulas: [
      "१) NDVI (Normalized Difference Vegetation Index - पिकांच्या आरोग्याचे मोजमाप): NDVI = (NIR - Red) / (NIR + Red) (मूल्य -1 ते +1 दरम्यान असते; निरोगी हरित वनस्पतींसाठी 0.3 ते 0.8)",
      "२) भू-स्थिर कक्षेची उंची (Geostationary Altitude): 35,786 km (कक्षीय वेग ~ 3.07 km/s)"
    ],
    keyPoints: [
      "डॉ. पी. आर. पिशारोटी (Dr. P. R. Pisharoty) यांना 'भारतीय सुदूर संवेदनाचे जनक' (Father of Indian Remote Sensing) म्हणतात.",
      "भारताचा पहिला कार्यात्मक सुदूर संवेदन उपग्रह: IRS-1A (१७ मार्च १९८८ रोजी व्होस्तोक यानाने प्रक्षेपित).",
      "कृषी क्षेत्रातील उपयोग: 'FASAL' प्रकल्प (पिकांच्या उत्पादनाचा अंदाज), 'CHAMAN' प्रकल्प (फलोत्पादन विकास), 'NADAMS' (दुष्काळ निरीक्षण).",
      "महत्त्वाच्या संस्थांची मुख्यालये: NRSC = हैदराबाद; IIRS = डेहराडून; NE-SAC = शिलाँग; MRSAC (महाराष्ट्र सुदूर संवेदन उपयोजन केंद्र) = नागपूर."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): सुदूर संवेदन केंद्रे – 'NH - ID - MN' → NRSC = Hyderabad, IIRS = Dehradun, MRSAC = Nagpur!",
    examPerspective: [
      "MPSC राज्यसेवा आणि संयुक्त मुख्य परीक्षेत सुदूर संवेदन, GIS, GPS आणि भारताच्या IRS उपग्रह मालिकेवर (Cartosat - नकाशे व नगररचना, Resourcesat - कृषी व संसाधने, Oceansat - सागरी अभ्यास, RISAT - रडार इमेजिंग) थेट प्रश्न विचारले जातात."
    ],
    followUps: [
      "GIS आणि GPS मध्ये नेमका काय फरक आहे?",
      "शेती आणि आपत्ती व्यवस्थापनात सुदूर संवेदनाचे (Remote Sensing) उपयोग सांगा.",
      "सुदूर संवेदन व ICT यावर 5 MPSC सराव प्रश्न (MCQs) द्या."
    ]
  },
  {
    id: "rag-ict-cyber",
    pdfName: "Science_PreCall_2.0_RemoteSensing_ICT.pdf",
    chapterName: "प्रकरण ५: संगणक, नेटवर्क, सायबर सुरक्षा आणि कृत्रिम बुद्धिमत्ता (ICT & Cyber Security)",
    pageNumber: "पृष्ठ ६४–७८ (Pages 64–78)",
    subject: "ICT",
    topic: "Cyber Security",
    keywords: [
      "ict",
      "computer",
      " संगणक",
      "cyber security",
      "सायबर सुरक्षा",
      "osi model",
      "artificial intelligence",
      "cloud computing",
      "hardware",
      "software",
      "operating system",
      "internet"
    ],
    marathiBasic:
      "माहिती व संप्रेषण तंत्रज्ञान (ICT) म्हणजे संगणक, इंटरनेट, मोबाईल नेटवर्क आणि सॉफ्टवेअरच्या मदतीने माहितीची साठवणूक, प्रक्रिया, देवाणघेवाण आणि संरक्षण करण्याची आधुनिक प्रणाली होय.",
    marathiExam:
      "माहिती व संप्रेषण तंत्रज्ञान (ICT) – परीक्षेसाठी अत्यंत महत्त्वाचे घटक:\n१) संगणकाचे घटक: हार्डवेअर (CPU - ALU + Control Unit + Registers, RAM - अस्थिर स्मृती/Volatile, ROM - स्थिर स्मृती/Non-Volatile) आणि सॉफ्टवेअर (System Software उदा. Windows, Linux, Android व Application Software).\n२) नेटवर्क व इंटरनेट प्रोटोकॉल्स: OSI मॉडेलमध्ये एकूण ७ थर (7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application) असतात. IPv4 हा 32-bit पत्ता असतो, तर IPv6 हा 128-bit पत्ता असतो.\n३) सायबर सुरक्षा व माहिती तंत्रज्ञान कायदा: भारतात 'माहिती तंत्रज्ञान कायदा २०००' (IT Act 2000, सुधारणा २००८) लागू असून सायबर हल्ल्यांवर प्रतिसाद देणारी राष्ट्रीय संस्था 'CERT-In' (Indian Computer Emergency Response Team - स्थापना २००४) ही आहे.",
    marathiDeep:
      "क्लाउड कॉम्प्युटिंगच्या (Cloud Computing) तीन मुख्य सेवा मॉडेल्स असतात: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), आणि SaaS (Software as a Service). सायबर सुरक्षेत मालवेअरचे (Malware) विविध प्रकार पडतात: Virus (मानवी हस्तक्षेपाने पसरतो), Worm (स्वतःच्या प्रती तयार करून नेटवर्कद्वारे आपोआप पसरतो), Trojan Horse (उपयुक्त सॉफ्टवेअरचे रूप घेऊन प्रणालीत शिरतो), आणि Ransomware (डेटा एनक्रिप्ट करून खंडणी मागतो, उदा. WannaCry).",
    englishExplanation:
      "Information and Communication Technology (ICT) encompasses Computer Architecture, Networking, Operating Systems, Cyber Security, Cloud Computing, and Artificial Intelligence.\n\n• Key Exam Concepts:\n1. Memory Hierarchy: CPU Registers (Fastest) → Cache Memory (SRAM) → Main Memory (DRAM - Volatile) → Secondary Storage (SSD/HDD - Non-Volatile).\n2. Networking & OSI Model (7 Layers): Physical (Hub/Repeater), Data Link (Switch/Bridge, MAC Address - 48 bit), Network (Router, IP Address - IPv4 is 32-bit, IPv6 is 128-bit), Transport (TCP/UDP), Session, Presentation, Application (HTTP, FTP, SMTP, DNS).\n3. Cyber Security & Indian Legal Framework: IT Act 2000 (amended in 2008); Section 66C (Identity theft), Section 66F (Cyber terrorism). Nodal agency: CERT-In.",
    formulas: [
      "१) मेमरी एकके: 1 Bit = 0 किंवा 1 | 1 Nibble = 4 Bits | 1 Byte = 8 Bits",
      "२) स्टोरेज श्रेणी: 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB | 1 PB (Petabyte) = 1024 TB",
      "३) IP पत्ता लांबी: IPv4 = 32 bits (4 bytes) | IPv6 = 128 bits (16 bytes) | MAC Address = 48 bits (6 bytes)"
    ],
    keyPoints: [
      "भारताचा पहिला महासंगणक (Supercomputer): PARAM 8000 (१९९१ मध्ये C-DAC पुणे येथे डॉ. विजय भटकर यांच्या नेतृत्वाखाली विकसित).",
      "OSI मॉडेलचे ७ थर खालून वर लक्षात ठेवण्याची क्लृप्ती: 'Please Do Not Throw Sausage Pizza Away' (Physical, Data Link, Network, Transport, Session, Presentation, Application).",
      "HTTPS मध्ये सुरक्षित संप्रेषणासाठी SSL/TLS एनक्रिप्शन वापरले जाते आणि त्याचा डिफॉल्ट पोर्ट क्रमांक 443 असतो (HTTP चा पोर्ट 80 असतो)."
    ],
    mnemonic:
      "स्मरण क्लृप्ती (Mnemonic): OSI मॉडेलचे ७ थर (Layer 1 ते Layer 7) – 'Please Do Not Throw Sausage Pizza Away' → Physical, Data Link, Network, Transport, Session, Presentation, Application!",
    examPerspective: [
      "MPSC मुख्य परीक्षेत व संयुक्त परीक्षेत IPv4 (32-bit) विरुद्ध IPv6 (128-bit), RAM विरुद्ध ROM, मालवेअरचे प्रकार (Virus, Worm, Trojan, Phishing, Spoofing) आणि IT Act 2000 मधील कलमांवर वारंवार प्रश्न विचारले जातात."
    ],
    followUps: [
      "Virus, Worm आणि Trojan Horse मध्ये काय फरक आहे?",
      "कृत्रिम बुद्धिमत्ता (Artificial Intelligence) आणि Machine Learning मधील मूलभूत संकल्पना स्पष्ट करा.",
      "ICT घटकावर 5 MPSC सराव प्रश्न (MCQs) तयार करा."
    ]
  }
];

// ============================================================================
// CURATED MPSC-LEVEL BILINGUAL MCQ BANK (WITH 4-OPTION EXPLANATIONS)
// ============================================================================
const MPSC_MCQ_BANK = [
  {
    id: "mcq-1",
    subject: "Physics",
    topic: "Light, Reflection and Refraction",
    questionMarathi: "दोन समतल आरसे एकमेकांशी 60° च्या कोनात ठेवले असता, त्यांच्यामध्ये ठेवलेल्या वस्तूच्या एकूण किती प्रतिमा तयार होतील?",
    questionEnglish: "If two plane mirrors are inclined to each other at an angle of 60°, how many images of an object placed between them will be formed?",
    options: [
      { id: "A", textMarathi: "४ (Four)", textEnglish: "4 images" },
      { id: "B", textMarathi: "५ (Five)", textEnglish: "5 images" },
      { id: "C", textMarathi: "६ (Six)", textEnglish: "6 images" },
      { id: "D", textMarathi: "अनंत (Infinite)", textEnglish: "Infinite images" }
    ],
    correctOption: "B",
    explanationMarathi: "दोन समतल आरशांमधील कोन θ = 60° असताना प्रतिमांची संख्या काढण्याचे सूत्र: n = (360° / θ) - 1 = (360° / 60°) - 1 = 6 - 1 = 5 प्रतिमा.",
    explanationEnglish: "Formula for number of images formed by two inclined plane mirrors: n = (360° / θ) - 1 = (360° / 60°) - 1 = 6 - 1 = 5 images.",
    optionBreakdown: {
      A: "पर्याय A (4): हे चुकीचे आहे; जर दोन आरसे 72° कोनात असतील (360/72 - 1 = 4), तर ४ प्रतिमा मिळतात.",
      B: "पर्याय B (5): हे अचूक उत्तर आहे! 60° कोनासाठी n = (360/60) - 1 = 5 प्रतिमा तयार होतात (उदा. कॅलिडोस्कोप तत्त्व).",
      C: "पर्याय C (6): हे चुकीचे आहे; सूत्रातून 1 वजा करणे आवश्यक असते कारण शेवटच्या दोन प्रतिमा एकमेकांवर तंतोतंत जुळतात.",
      D: "पर्याय D (अनंत): जेव्हा दोन समतल आरसे एकमेकांना समांतर (θ = 0°) ठेवलेले असतात, तेव्हाच अनंत (∞) प्रतिमा तयार होतात."
    }
  },
  {
    id: "mcq-2",
    subject: "Physics",
    topic: "Motion, Force and Laws of Motion",
    questionMarathi: "क्रिकेटचा वेगवान चेंडू झेलताना क्षेत्ररक्षक आपले हात मागे घेतो, हे न्यूटनच्या गतीविषयक कोणत्या नियमाचे उदाहरण आहे?",
    questionEnglish: "A cricket fielder pulls his hands backward while catching a fast-moving ball. This is a practical application of which law?",
    options: [
      { id: "A", textMarathi: "न्यूटनचा पहिला नियम (जडत्वाचा नियम)", textEnglish: "Newton's First Law of Motion (Law of Inertia)" },
      { id: "B", textMarathi: "न्यूटनचा दुसरा नियम (संवेगाचा नियम)", textEnglish: "Newton's Second Law of Motion (Law of Momentum)" },
      { id: "C", textMarathi: "न्यूटनचा तिसरा नियम (क्रिया-प्रतिक्रिया नियम)", textEnglish: "Newton's Third Law of Motion (Action-Reaction)" },
      { id: "D", textMarathi: "केप्लरचा ग्रहांच्या गतीचा नियम", textEnglish: "Kepler's Law of Planetary Motion" }
    ],
    correctOption: "B",
    explanationMarathi: "न्यूटनच्या दुसऱ्या नियमानुसार F = Δp / Δt. हात मागे घेतल्यामुळे चेंडूचा वेग शून्य होण्यासाठी लागणारा कालावधी (Δt) वाढतो, त्यामुळे संवेग परिवर्तनाचा दर कमी होऊन हातावर प्रयुक्त होणारे बल (F) कमी होते व हाताला इजा होत नाही.",
    explanationEnglish: "By Newton's Second Law, Force F = Δp / Δt. Pulling hands backward increases the time interval (Δt) taken to reduce the ball's momentum to zero, thereby reducing the impact force (F) on the fielder's hands.",
    optionBreakdown: {
      A: "पर्याय A: न्यूटनचा पहिला नियम जडत्व स्पष्ट करतो (उदा. बस अचानक थांबल्यास प्रवासी पुढे झुकणे).",
      B: "पर्याय B: अचूक उत्तर! संवेग परिवर्तनाचा दर (F = Δp/Δt) आणि आवेग (Impulse) हे न्यूटनच्या दुसऱ्या नियमावर आधारित आहेत.",
      C: "पर्याय C: न्यूटनचा तिसरा नियम क्रिया-प्रतिक्रिया दर्शवतो (उदा. रॉकेटचे प्रक्षेपण किंवा बंदूक मागे सरकणे).",
      D: "पर्याय D: केप्लरचे नियम सूर्याभोवती फिरणाऱ्या ग्रहांच्या लंबवर्तुळाकार कक्षेशी संबंधित आहेत."
    }
  },
  {
    id: "mcq-3",
    subject: "Zoology",
    topic: "Genetics",
    questionMarathi: "RNA (रायबोन्यूक्लिक आम्ल) च्या संरचनेत खालीलपैकी कोणते नत्रयुक्त आम्लारी (Nitrogenous Base) थायमिन (Thymine) ऐवजी आढळते?",
    questionEnglish: "In the molecular structure of RNA (Ribonucleic Acid), which nitrogenous base is present in place of Thymine?",
    options: [
      { id: "A", textMarathi: "ॲडेनिन (Adenine)", textEnglish: "Adenine" },
      { id: "B", textMarathi: "ग्वानिन (Guanine)", textEnglish: "Guanine" },
      { id: "C", textMarathi: "सायटोसिन (Cytosine)", textEnglish: "Cytosine" },
      { id: "D", textMarathi: "युरॅसिल (Uracil)", textEnglish: "Uracil" }
    ],
    correctOption: "D",
    explanationMarathi: "DNA मध्ये Adenine, Guanine, Cytosine आणि Thymine (T) असतात, तर RNA मध्ये Thymine ऐवजी 'युरॅसिल' (Uracil - U) हा पिरिमिडिन गटातील बेस असतो.",
    explanationEnglish: "RNA contains Adenine (A), Guanine (G), Cytosine (C), and Uracil (U). Uracil (a pyrimidine) replaces Thymine (5-methyluracil) found in DNA.",
    optionBreakdown: {
      A: "पर्याय A (Adenine): हा प्युरिन बेस DNA आणि RNA या दोन्हीमध्ये समान असतो.",
      B: "पर्याय B (Guanine): हा प्युरिन बेस सुद्धा DNA आणि RNA या दोन्हीमध्ये आढळतो.",
      C: "पर्याय C (Cytosine): हा पिरिमिडिन बेस DNA आणि RNA दोन्हीमध्ये असतो आणि तो Guanine सोबत ३ हायड्रोजन बंधांनी जोडतो.",
      D: "पर्याय D (Uracil): अचूक उत्तर! RNA मध्ये थायमिनऐवजी युरॅसिल असते आणि ते Adenine सोबत २ हायड्रोजन बंधांनी जोडते."
    }
  },
  {
    id: "mcq-4",
    subject: "Zoology",
    topic: "Nutrition and Digestion",
    questionMarathi: "मानवी शरीरातील ग्रंथी आणि पित्तरसाबाबत खालीलपैकी कोणते विधान अचूक आहे?",
    questionEnglish: "Which of the following statements regarding human glands and bile juice is Scientifically CORRECT?",
    options: [
      { id: "A", textMarathi: "स्वादुपिंड ही मानवी शरीरातील सर्वात मोठी ग्रंथी आहे.", textEnglish: "Pancreas is the largest gland in the human body." },
      { id: "B", textMarathi: "यकृत ही सर्वात मोठी ग्रंथी असून पित्तरसात कोणतेही पाचक विकर नसते.", textEnglish: "Liver is the largest gland, and bile juice contains no digestive enzymes." },
      { id: "C", textMarathi: "पित्तरसाची निर्मिती पित्ताशयात (Gall Bladder) होते.", textEnglish: "Bile juice is synthesized inside the Gall Bladder." },
      { id: "D", textMarathi: "पित्तरस हा तीव्र आम्लधर्मी (Highly Acidic) असतो.", textEnglish: "Bile juice is highly acidic in nature." }
    ],
    correctOption: "B",
    explanationMarathi: "यकृत (Liver) ही मानवी शरीरातील सर्वात मोठी ग्रंथी (१.२ ते १.५ किग्रॅ) आहे. यकृताने स्रवलेल्या पित्तरसात कोणतेही पाचक विकर (Enzyme) नसते, परंतु त्यातील पित्तक्षार स्निग्ध पदार्थांचे पायसीकरण (Emulsification of fats) करतात.",
    explanationEnglish: "The Liver is the largest gland in the human body. Bile juice is synthesized by hepatic cells of the liver (and only stored in the gall bladder), is alkaline (pH ~7.7–8.6), and contains no digestive enzymes yet emulsifies fats via bile salts.",
    optionBreakdown: {
      A: "पर्याय A चुकीचा: स्वादुपिंड (Pancreas) ही दुसरी सर्वात मोठी व 'मिश्र ग्रंथी' आहे; सर्वात मोठी ग्रंथी यकृत आहे.",
      B: "पर्याय B अचूक: यकृत सर्वात मोठी बाह्यस्रावी ग्रंथी आहे आणि पित्तरसात विकरे नसूनही पित्तक्षारांमुळे मेदाचे पायसीकरण होते.",
      C: "पर्याय C चुकीचा: पित्तरसाची निर्मिती 'यकृतात' होते, तर पित्ताशयात (Gall Bladder) तो केवळ साठवला व संहत केला जातो.",
      D: "पर्याय D चुकीचा: पित्तरस आम्लधर्मी नसून अल्कधर्मी (Alkaline, pH 7.7–8.6) असतो."
    }
  },
  {
    id: "mcq-5",
    subject: "Chemistry",
    topic: "Periodic Table",
    questionMarathi: "मेंडेलीव्हने आपल्या आवर्तसारणीत भाकीत केलेल्या 'इका-ॲल्युमिनियम' (Eka-Aluminium) या मूलद्रव्याचा पुढे शोध लागल्यानंतर त्याला कोणते नाव देण्यात आले?",
    questionEnglish: "When the element predicted by Mendeleev as 'Eka-Aluminium' was later discovered, what was it named?",
    options: [
      { id: "A", textMarathi: "स्कँडियम (Scandium)", textEnglish: "Scandium (Sc)" },
      { id: "B", textMarathi: "गॅलियम (Gallium)", textEnglish: "Gallium (Ga)" },
      { id: "C", textMarathi: "जर्मेनियम (Germanium)", textEnglish: "Germanium (Ge)" },
      { id: "D", textMarathi: "पोलोनियम (Polonium)", textEnglish: "Polonium (Po)" }
    ],
    correctOption: "B",
    explanationMarathi: "मेंडेलीव्हने आवर्तसारणीत न शोधलेल्या मूलद्रव्यांसाठी रिकाम्या जागा ठेवल्या होत्या: इका-बोरॉन = स्कँडियम (Sc), इका-ॲल्युमिनियम = गॅलियम (Ga), आणि इका-सिलिकॉन = जर्मेनियम (Ge).",
    explanationEnglish: "Mendeleev predicted properties of undiscovered elements: Eka-Boron became Scandium (Sc), Eka-Aluminium became Gallium (Ga, discovered in 1875), and Eka-Silicon became Germanium (Ge).",
    optionBreakdown: {
      A: "पर्याय A (Scandium): मेंडेलीव्हच्या 'इका-बोरॉन' (Eka-Boron) ला पुढे स्कँडियम नाव दिले गेले.",
      B: "पर्याय B (Gallium): अचूक उत्तर! 'इका-ॲल्युमिनियम' चे नाव पुढे गॅलियम (Ga) ठेवण्यात आले (स्मरण क्लृप्ती: Al-Ga).",
      C: "पर्याय C (Germanium): 'इका-सिलिकॉन' (Eka-Silicon) ला पुढे जर्मेनियम (Ge) नाव दिले गेले.",
      D: "पर्याय D (Polonium): पोलोनियमचा शोध मेरी क्युरी यांनी लावला; तो इका-ॲल्युमिनियम नाही."
    }
  },
  {
    id: "mcq-6",
    subject: "Botany",
    topic: "Photosynthesis",
    questionMarathi: "वनस्पतींमधील प्रकाशसंश्लेषण प्रक्रियेत वातावरणाला दिला जाणारा ऑक्सिजन (O₂) वायू नेमका कशाच्या विघटनातून मुक्त होतो?",
    questionEnglish: "During photosynthesis in green plants, the molecular Oxygen (O₂) released into the atmosphere comes from the splitting of which molecule?",
    options: [
      { id: "A", textMarathi: "कार्बन डायऑक्साईड (CO₂)", textEnglish: "Carbon dioxide (CO₂)" },
      { id: "B", textMarathi: "पाणी (H₂O - Photolysis of Water)", textEnglish: "Water (H₂O via Photolysis)" },
      { id: "C", textMarathi: "ग्लुकोज (C₆H₁₂O₆)", textEnglish: "Glucose (C₆H₁₂O₆)" },
      { id: "D", textMarathi: "हरितद्रव्य रेणू (Chlorophyll)", textEnglish: "Chlorophyll molecule" }
    ],
    correctOption: "B",
    explanationMarathi: "प्रकाशीय अभिक्रियेत (Light Reaction / Hill Reaction) सूर्यप्रकाशाच्या मदतीने पाण्याचे प्रकाशीय विघटन (Photolysis of Water: 2H₂O → 4H⁺ + 4e⁻ + O₂↑) होते आणि त्यातूनच ऑक्सिजन वायू मुक्त होतो.",
    explanationEnglish: "Ruben and Kamen proved using heavy oxygen isotope (¹⁸O) that the O₂ evolved during photosynthesis comes exclusively from the photolysis of water (H₂O) in Photosystem-II, not from CO₂.",
    optionBreakdown: {
      A: "पर्याय A (CO₂): कार्बन डायऑक्साईडमधील ऑक्सिजन हा ग्लुकोज (C₆H₁₂O₆) आणि नवीन पाण्याच्या रेणूमध्ये जातो, मुक्त O₂ मध्ये नाही.",
      B: "पर्याय B (H₂O): अचूक उत्तर! पाण्याच्या प्रकाशीय विघटनातूनच (Photolysis of water) १००% ऑक्सिजन वायू मुक्त होतो.",
      C: "पर्याय C (ग्लुकोज): ग्लुकोज हा प्रकाशसंश्लेषणाचा अंतिम उत्पादित पदार्थ आहे.",
      D: "पर्याय D (हरितद्रव्य): हरितद्रव्य (केंद्रस्थानी Mg²⁺) हे केवळ सौर ऊर्जा शोषून घेण्याचे काम करते."
    }
  },
  {
    id: "mcq-7",
    subject: "Hygiene and Public Health",
    topic: "Vitamins and Minerals",
    questionMarathi: "खालीलपैकी कोणत्या जीवनसत्त्वाच्या रेणूमध्ये 'कोबाल्ट' (Cobalt) हा धातू घटक आढळतो आणि त्याच्या अभावामुळे 'पर्निशियस ॲनिमिया' (Pernicious Anemia) होतो?",
    questionEnglish: "Which of the following vitamins contains the metal ion 'Cobalt' in its molecular structure and causes Pernicious Anemia upon deficiency?",
    options: [
      { id: "A", textMarathi: "जीवनसत्त्व B₁ (थायमिन)", textEnglish: "Vitamin B₁ (Thiamine)" },
      { id: "B", textMarathi: "जीवनसत्त्व B₆ (पायरिडॉक्सिन)", textEnglish: "Vitamin B₆ (Pyridoxine)" },
      { id: "C", textMarathi: "जीवनसत्त्व B₁₂ (सायनोकोबालामिन)", textEnglish: "Vitamin B₁₂ (Cyanocobalamin)" },
      { id: "D", textMarathi: "जीवनसत्त्व C (ॲस्कॉर्बिक आम्ल)", textEnglish: "Vitamin C (Ascorbic Acid)" }
    ],
    correctOption: "C",
    explanationMarathi: "जीवनसत्त्व B₁₂ चे रासायनिक नाव 'सायनोकोबालामिन' (Cyanocobalamin) आहे. त्याच्या संरचनेत कोबाल्ट (Co) हा धातू असतो आणि तो लाल रक्तपेशींच्या (RBC) निर्मितीसाठी आवश्यक असतो.",
    explanationEnglish: "Vitamin B₁₂ is chemically called Cyanocobalamin because it contains a Cobalt (Co) ion at the center of its corrin ring. Its deficiency leads to megaloblastic / pernicious anemia.",
    optionBreakdown: {
      A: "पर्याय A (Vitamin B₁ - थायमिन): याच्या अभावामुळे 'बेरीबेरी' (Beriberi) हा आजार होतो; यात सल्फर असतो पण कोबाल्ट नसतो.",
      B: "पर्याय B (Vitamin B₆ - पायरिडॉक्सिन): हे अमिनो आम्ल चयापचयासाठी आवश्यक असते.",
      C: "पर्याय C (Vitamin B₁₂ - सायनोकोबालामिन): अचूक उत्तर! नावातच 'Cobalamin' (Cobalt) दडलेले आहे.",
      D: "पर्याय D (Vitamin C - ॲस्कॉर्बिक आम्ल): याच्या अभावामुळे 'स्कर्व्ही' (Scurvy) होतो."
    }
  },
  {
    id: "mcq-8",
    subject: "ICT",
    topic: "Internet and Networking",
    questionMarathi: "इंटरनेट प्रोटोकॉल आवृत्ती ४ (IPv4) आणि आवृत्ती ६ (IPv6) यांच्यातील पत्त्यांची (Address Length) लांबी अनुक्रमे किती बिट्स (Bits) असते?",
    questionEnglish: "What is the bit length of an IP address in IPv4 and IPv6 respectively?",
    options: [
      { id: "A", textMarathi: "16 bits आणि 64 bits", textEnglish: "16 bits and 64 bits" },
      { id: "B", textMarathi: "32 bits आणि 128 bits", textEnglish: "32 bits and 128 bits" },
      { id: "C", textMarathi: "48 bits आणि 128 bits", textEnglish: "48 bits and 128 bits" },
      { id: "D", textMarathi: "64 bits आणि 256 bits", textEnglish: "64 bits and 256 bits" }
    ],
    correctOption: "B",
    explanationMarathi: "IPv4 पत्ता हा 32-bit (४ ऑक्टेट्स, उदा. 192.168.1.1) चा असतो, तर वाढत्या इंटरनेट उपकरणांसाठी विकसित केलेला IPv6 पत्ता हा 128-bit (१६ बाईट्स, हेक्साडेसिमल स्वरूपात) चा असतो.",
    explanationEnglish: "An IPv4 address is 32 bits long (4 bytes separated by dots), whereas an IPv6 address is 128 bits long (16 bytes written in 8 hexadecimal groups separated by colons).",
    optionBreakdown: {
      A: "पर्याय A: 16 bits आणि 64 bits हे चुकीचे मापन आहे.",
      B: "पर्याय B: अचूक उत्तर! IPv4 = 32 bits (2³² पत्ते) आणि IPv6 = 128 bits (2¹²⁸ पत्ते).",
      C: "पर्याय C: 48 bits हा संगणकाच्या नेटवर्क कार्डचा भौतिक पत्ता म्हणजेच 'MAC Address' (Media Access Control) असतो.",
      D: "पर्याय D: 256 bits हे एन्क्रिप्शन की (उदा. AES-256) मध्ये वापरले जाते, IP पत्त्यात नाही."
    }
  },
  {
    id: "mcq-9",
    subject: "Remote Sensing",
    topic: "Indian Remote Sensing Programme",
    questionMarathi: "भारताच्या राष्ट्रीय सुदूर संवेदन केंद्राचे (NRSC - National Remote Sensing Centre) मुख्यालय कोठे स्थित आहे?",
    questionEnglish: "Where is the headquarters of India's National Remote Sensing Centre (NRSC) of ISRO located?",
    options: [
      { id: "A", textMarathi: "डेहराडून (उत्तराखंड)", textEnglish: "Dehradun (Uttarakhand)" },
      { id: "B", textMarathi: "बंगळुरू (कर्नाटक)", textEnglish: "Bengaluru (Karnataka)" },
      { id: "C", textMarathi: "हैदराबाद (तेलंगणा)", textEnglish: "Hyderabad (Telangana)" },
      { id: "D", textMarathi: "अहमदाबाद (गुजरात)", textEnglish: "Ahmedabad (Gujarat)" }
    ],
    correctOption: "C",
    explanationMarathi: "ISRO अंतर्गत कार्यरत असणारे 'राष्ट्रीय सुदूर संवेदन केंद्र' (NRSC) हैदराबाद (बालानगर) येथे स्थित आहे. ते उपग्रहांकडून मिळणाऱ्या डेटाचे संकलन, प्रक्रिया आणि वितरण करते.",
    explanationEnglish: "The National Remote Sensing Centre (NRSC) is located in Hyderabad, Telangana. Meanwhile, IIRS (Indian Institute of Remote Sensing) is in Dehradun, ISRO HQ is in Bengaluru, and SAC is in Ahmedabad.",
    optionBreakdown: {
      A: "पर्याय A (डेहराडून): डेहराडून येथे 'IIRS' (Indian Institute of Remote Sensing - प्रशिक्षण संस्था) आहे.",
      B: "पर्याय B (बंगळुरू): बंगळुरू येथे ISRO चे मुख्य मुख्यालय (Antariksh Bhavan) आणि URSC आहे.",
      C: "पर्याय C (हैदराबाद): अचूक उत्तर! NRSC चे मुख्यालय हैदराबाद येथे आहे.",
      D: "पर्याय D (अहमदाबाद): अहमदाबाद येथे 'SAC' (Space Applications Centre - उपग्रह सेन्सर्स व पेलोड निर्मिती केंद्र) आहे."
    }
  },
  {
    id: "mcq-10",
    subject: "Chemistry",
    topic: "Acids, Bases and Salts",
    questionMarathi: "सोने (Gold) आणि प्लॅटिनम (Platinum) यांसारखे राजधातू विरघळवण्यासाठी वापरल्या जाणाऱ्या 'अम्लराज' (Aqua Regia) मध्ये सांद्र हायड्रोक्लोरिक आम्ल (HCl) आणि सांद्र नायट्रिक आम्ल (HNO₃) यांचे गुणोत्तर किती असते?",
    questionEnglish: "In 'Aqua Regia' (Royal Water), used to dissolve noble metals like Gold and Platinum, what is the volume ratio of concentrated Hydrochloric Acid (HCl) to concentrated Nitric Acid (HNO₃)?",
    options: [
      { id: "A", textMarathi: "1 : 3 (१ भाग HCl : ३ भाग HNO₃)", textEnglish: "1 : 3 (1 part HCl : 3 parts HNO₃)" },
      { id: "B", textMarathi: "3 : 1 (३ भाग HCl : १ भाग HNO₃)", textEnglish: "3 : 1 (3 parts HCl : 1 part HNO₃)" },
      { id: "C", textMarathi: "2 : 2 (समान प्रमाणात)", textEnglish: "2 : 2 (Equal proportions)" },
      { id: "D", textMarathi: "3 : 2 (३ भाग HCl : २ भाग HNO₃)", textEnglish: "3 : 2 (3 parts HCl : 2 parts HNO₃)" }
    ],
    correctOption: "B",
    explanationMarathi: "अम्लराज (Aqua Regia) हे ३ भाग सांद्र हायड्रोक्लोरिक आम्ल (Conc. HCl) आणि १ भाग सांद्र नायट्रिक आम्ल (Conc. HNO₃) यांचे ताजे मिश्रण (3 : 1) असते.",
    explanationEnglish: "Aqua Regia is a freshly prepared mixture of concentrated Hydrochloric acid (HCl) and concentrated Nitric acid (HNO₃) in a 3:1 molar/volume ratio.",
    optionBreakdown: {
      A: "पर्याय A (1 : 3): हा सर्वात सामान्य सापळा आहे! जर क्रमाने HCl : HNO₃ विचारले असेल तर 3 : 1 हेच उत्तर असते (जर HNO₃ : HCl विचारले तरच 1 : 3 होते).",
      B: "पर्याय B (3 : 1): अचूक उत्तर! HCl मध्ये 3 अक्षरे आहेत म्हणून HCl = 3 भाग आणि HNO₃ = 1 भाग अशी सोपी ट्रिक लक्षात ठेवा.",
      C: "पर्याय C (2 : 2): समान प्रमाणात घेतल्यास नवजात क्लोरिनची (Nascent Chlorine) पुरेशी निर्मिती होत नाही.",
      D: "पर्याय D (3 : 2): हे चुकीचे गुणोत्तर आहे."
    }
  }
];

// ============================================================================
// SUBJECT & TOPIC AUTO-DETECTION + COMPREHENSIVE DOMAIN KNOWLEDGE FALLBACK
// ============================================================================
const TOPIC_DICTIONARY = {
  "Units and Measurements": {
    subject: "Physics",
    keywords: ["unit", "measurement", "si unit", "एकक", "मापन", "मोजमाप", "light year", "parsec", "प्रकाशवर्ष"],
    marathi: "भौतिक राशींचे मापन करण्यासाठी आंतरराष्ट्रीय स्तरावर १९६० मध्ये 'SI एकक पद्धती' (Système International) स्वीकारण्यात आली. यात ७ मूलभूत राशी (लांबी - मीटर, वस्तुमान - किलोग्रॅम, काळ - सेकंद, विद्युतधारा - अँपिअर, तापमान - केल्विन, पदार्थाचे प्रमाण - मोल, दीप्ती तीव्रता - कॅन्डेला) आणि २ पूरक राशी (प्रतलीय कोन - रेडियन, घनकोन - स्टेरेडियन) आहेत.",
    english: "The International System of Units (SI) comprises 7 base quantities: Length (metre - m), Mass (kilogram - kg), Time (second - s), Electric current (ampere - A), Thermodynamic temperature (kelvin - K), Amount of substance (mole - mol), and Luminous intensity (candela - cd), along with 2 supplementary units (Radian and Steradian).",
    formulas: [
      "१ प्रकाशवर्ष (1 Light Year) = 9.46 × 10¹⁵ m (प्रकाशाने निर्वातात एका वर्षात कापलेले अंतर - हे अंतराचे एकक आहे, काळाचे नाही!)",
      "१ पारसेक (1 Parsec - खगोलीय अंतराचे सर्वात मोठे एकक) = 3.26 Light Years = 3.08 × 10¹⁶ m",
      "१ खगोलीय एकक (1 Astronomical Unit - AU) = 1.496 × 10¹¹ m (सूर्य व पृथ्वी यांमधील सरासरी अंतर)"
    ],
    facts: [
      "प्रकाशवर्ष (Light Year) आणि पारसेक (Parsec) ही 'अंतराची' (Distance) एकके आहेत—MPSC पूर्व परीक्षेत हा प्रश्न अनेकदा विचारला जातो.",
      "समुद्राची खोली मोजण्यासाठी 'फॅदम' (1 Fathom = 6 feet) हे एकक आणि 'SONAR' तंत्रज्ञान वापरतात."
    ]
  },
  "Work, Energy and Power": {
    subject: "Physics",
    keywords: ["work", "energy", "power", "कार्य", "ऊर्जा", "शक्ती", "kinetic", "potential", "गतिज", "स्थितिज", "joule", "watt", "horsepower"],
    marathi: "जेव्हा वस्तूवर बल (F) प्रयुक्त केले असता वस्तूचे विस्थापन (s) होते, तेव्हा 'कार्य' (Work) घडले असे म्हणतात. कार्य करण्याची क्षमता म्हणजे 'ऊर्जा' (Energy) आणि कार्य करण्याचा दर म्हणजे 'शक्ती' (Power) होय.",
    english: "Work is the scalar dot product of Force and Displacement (W = F·s·cosθ). Energy is the capacity to do work (Kinetic Energy KE = ½mv², Potential Energy PE = mgh), and Power is the rate of doing work (P = W/t).",
    formulas: [
      "१) कार्य (Work): W = F × s × cosθ (SI एकक: Joule; CGS एकक: Erg; 1 Joule = 10⁷ Erg)",
      "२) गतिज ऊर्जा (Kinetic Energy): KE = ½ m v² (जर वेग दुप्पट केला तर गतिज ऊर्जा चौपट होते!)",
      "३) स्थितिज ऊर्जा (Potential Energy): PE = m × g × h",
      "४) शक्ती (Power): P = W / t (SI एकक: Watt = Joule/sec; 1 Horsepower [HP] = 746 Watt)",
      "५) व्यावसायिक विद्युत ऊर्जा एकक: 1 Unit = 1 kWh = 3.6 × 10⁶ Joule"
    ],
    facts: [
      "जर विस्थापन बलाच्या दिशेला लंबरूप (θ = 90°, cos 90° = 0) असेल—उदा. डोक्यावर ओझे घेऊन समतल रस्त्यावरून चालणारा हमाल किंवा पृथ्वीभोवती फिरणारा उपग्रह—तर भौतिकशास्त्रानुसार झालेले कार्य शून्य (W = 0) असते!"
    ]
  },
  "Electricity and Magnetism": {
    subject: "Physics",
    keywords: ["electricity", "magnetism", "ohm", "current", "voltage", "resistance", "विद्युत", "चुंबकत्व", "ओहम", "रोध", "fuse", "transformer"],
    marathi: "विद्युत प्रभाराच्या प्रवाहाला 'विद्युतधारा' (Electric Current - I) म्हणतात. जॉर्ज सायमन ओहम यांच्या नियमानुसार, वाहकाची भौतिक अवस्था कायम असताना वाहकाच्या दोन टोकांमधील विभवांतर (V) हे त्यातून वाहणाऱ्या विद्युतधारेशी (I) समानुपाती असते (V = I × R).",
    english: "Electric current (I = Q/t) is the rate of flow of electric charge. By Ohm's Law, at constant temperature, the potential difference (V) across a conductor is directly proportional to the current (I) flowing through it: V = I × R, where R is Resistance (measured in Ohm Ω).",
    formulas: [
      "१) ओहमचा नियम (Ohm's Law): V = I × R  |  रोध R = ρ × (L / A)",
      "२) एकसर जोडणीत परिणामी रोध (Series Resistance): R_s = R₁ + R₂ + R₃",
      "३) समांतर जोडणीत परिणामी रोध (Parallel Resistance): 1/R_p = 1/R₁ + 1/R₂ + 1/R₃",
      "४) ज्यूलचा औष्णिक नियम (Joule's Law of Heating): H = I² × R × t (विद्युत इस्त्री, हिटर, फ्यूज या तत्त्वावर चालतात)",
      "५) विद्युत शक्ती (Electric Power): P = V × I = I²R = V²/R (एकक: Watt)"
    ],
    facts: [
      "घरातील सर्व विद्युत उपकरणे 'समांतर जोडणीत' (Parallel Combination) जोडलेली असतात, जेणेकरून प्रत्येक उपकरणाला समान विभवांतर (230V, 50Hz भारतात) मिळते.",
      "फ्यूज तार (Fuse Wire) ही शिसे (Lead - Pb) आणि कथील (Tin - Sn) यांच्या संमिश्रापासून बनलेली असते; तिचा रोध जास्त आणि वितळणांक कमी (High Resistance, Low Melting Point) असतो आणि ती नेहमी 'एकसर' (Series) जोडणीत विद्युतयुक्त तारेला (Live Wire) जोडतात."
    ]
  },
  "Mirrors and Lenses": {
    subject: "Physics",
    keywords: ["concave", "convex", "lens", "अंतर्वक्र", "बहिर्वक्र", "भिंग", "myopia", "hypermetropia", "दृष्टीदोष", "dioptre", "focal length"],
    marathi: "गोलीय आरसे व भिंगे दोन प्रकारची असतात: अंतर्वक्र (Concave) आणि बहिर्वक्र (Convex). अंतर्वक्र आरसा हा अभिसारी (Converging) असतो, तर बहिर्वक्र आरसा अपसारी (Diverging) असतो. भिंगांच्या बाबतीत उलट असते: बहिर्वक्र भिंग अभिसारी (Converging, धन शक्ती +D) असते, तर अंतर्वक्र भिंग अपसारी (Diverging, ऋण शक्ती -D) असते.",
    english: "Spherical mirrors and lenses obey specific sign conventions and focal formulas. A Concave Mirror converges light (used by dentists, headlights, solar cookers), whereas a Convex Mirror diverges light and always forms a diminished, virtual, erect image with a wide field of view (used as rear-view side mirrors in vehicles).",
    formulas: [
      "१) आरशाचे सूत्र (Mirror Formula): 1/f = 1/v + 1/u",
      "२) भिंगाचे सूत्र (Lens Formula): 1/f = 1/v - 1/u",
      "३) भिंगाची शक्ती (Power of Lens): P = 1 / f (मीटरमध्ये) | एकक: डायॉप्टर (Dioptre - D)"
    ],
    facts: [
      "लहान अंतरावरील दिसते पण दूरचे दिसत नाही = निकटदृष्टिता (Myopia / Nearsightedness) → उपायासाठी 'अंतर्वक्र भिंग' (Concave Lens, ऋण शक्ती) वापरतात.",
      "दूरचे दिसते पण जवळचे स्पष्ट दिसत नाही = दूरदृष्टिता (Hypermetropia / Farsightedness) → उपायासाठी 'बहिर्वक्र भिंग' (Convex Lens, धन शक्ती) वापरतात.",
      "वाहनांच्या बाजूच्या आरशात (Rear-view Mirror) नेहमी 'बहिर्वक्र आरसा' (Convex Mirror) वापरतात, कारण तो वाहनांची लहान, सुलट प्रतिमा दाखवतो व विस्तृत क्षेत्र कव्हर करतो."
    ]
  },
  "Acids, Bases and Salts": {
    subject: "Chemistry",
    keywords: ["acid", "base", "salt", "ph", "आम्ल", "आम्लारी", "क्षार", "सामू", "litmus", "लिटमस", "baking soda", "washing soda", "bleaching powder"],
    marathi: "आर्हेनियसच्या सिद्धांतानुसार पाण्यात विरघळल्यावर H⁺ (H₃O⁺) आयन देणारे पदार्थ म्हणजे 'आम्ल' (Acids) आणि OH⁻ आयन देणारे पदार्थ म्हणजे 'आम्लारी' (Bases). सोरेनसन (Sorensen - १९०९) यांनी द्रावणातील H⁺ आयनांची संहती मोजण्यासाठी ० ते १४ अंकांची 'pH श्रेणी' (सामू श्रेणी) विकसित केली.",
    english: "Acids donate H⁺ ions in aqueous solution and turn blue litmus red (pH < 7); Bases furnish OH⁻ ions and turn red litmus blue (pH > 7); Neutral solutions have pH = 7 (pure water). Everyday salts play a crucial role in MPSC Everyday Chemistry questions.",
    formulas: [
      "१) सामू सूत्र (pH Formula): pH = -log₁₀[H⁺]  |  pH + pOH = 14",
      "२) खाण्याचा सोडा (Baking Soda - Sodium Bicarbonate): NaHCO₃",
      "३) धुण्याचा सोडा (Washing Soda - Sodium Carbonate Decahydrate): Na₂CO₃·10H₂O",
      "४) विरंजक चूर्ण (Bleaching Powder - Calcium Oxychloride): CaOCl₂",
      "५) प्लास्टर ऑफ पॅरिस (POP - Calcium Sulphate Hemihydrate): CaSO₄·½H₂O (जिप्सम: CaSO₄·2H₂O)"
    ],
    facts: [
      "मानवी रक्ताचा सामू (pH of Human Blood) हा 7.35 ते 7.45 (किंचित आम्लारीधर्मी) असतो.",
      "जठररसातील हायड्रोक्लोरिक आम्लाचा (Gastric HCl) pH सुमारे 1.5 ते 2.0 असतो; पोटातील आम्लपित्त (Acidity) कमी करण्यासाठी 'मिल्क ऑफ मॅग्नेशिया' [Mg(OH)₂ - Antacid] वापरतात.",
      "तांबे व पितळेच्या भांड्यांना कल्हई (Tinning) करण्यासाठी कथील (Tin - Sn) वापरतात."
    ]
  }
};


// ============================================================================
// VERIFIED YEAR-WISE MPSC PREVIOUS YEAR PAPERS (2025 & 2026 CYCLES - 10 PAPERS)
// Extracted directly from official uploaded MPSC Question Paper Booklets
// ============================================================================
const YEAR_WISE_PYQ_PAPERS = [
  // ======================== 2026 EXAM CYCLE PAPERS ========================
  {
    id: "paper-2026-d25",
    examCycleYear: "2026",
    bookletCode: "D25",
    examTitleMarathi: "महाराष्ट्र नागरी सेवा राजपत्रित संयुक्त पूर्व परीक्षा 2026 (पेपर - I)",
    examTitleEnglish: "MPSC Civil Services Gazetted Combined Prelims 2026 (Paper I)",
    examDate: "31 मे 2026 (31 May 2026)",
    totalPaperQuestions: 100,
    totalMarks: 200,
    paperType: "GS & General Science (Q51–Q70, Q89)",
    pdfFileName: "MPSC_Rajyaseva_Prelims_2026_Paper1_D25.pdf",
    questions: [
      {
        qNo: 51,
        subject: "Physics",
        topic: "Electricity and Magnetism",
        questionMarathi: "विद्युत क्षेत्राच्या समतुल्य पृष्ठभागावरील (Equipotential surface) कोणत्याही बिंदूवर त्याला विद्युत प्रभारित करण्यासाठी विद्युत क्षेत्राची दिशा काय असावी?",
        questionEnglish: "What is the direction of electric field for a point charge at any point on its equipotential surface?",
        options: [
          { id: "1", textMarathi: "बाह्यकेंद्री", textEnglish: "Radial outward" },
          { id: "2", textMarathi: "पृष्ठभागास समांतर", textEnglish: "Parallel to the surface" },
          { id: "3", textMarathi: "स्पर्शरेषीय", textEnglish: "Tangential" },
          { id: "4", textMarathi: "आंतरकेंद्री", textEnglish: "Radial inward" }
        ],
        correctOption: "1",
        explanationMarathi: "समतुल्य विभव पृष्ठभागावर (Equipotential surface) विद्युत क्षेत्र नेहमी पृष्ठभागाला लंबरूप म्हणजेच धन बिंदुप्रभारासाठी 'बाह्यकेंद्री' (Radial outward) दिशेने असते.",
        explanationEnglish: "Electric field lines are always perpendicular (normal) to an equipotential surface—directed radially outward for a positive point charge."
      },
      {
        qNo: 52,
        subject: "Physics",
        topic: "Electricity and Magnetism",
        questionMarathi: "प्रति युनिट वेळेत पृष्ठभागातून जाणाऱ्या (वाहणाऱ्या) निव्वळ विद्युतभाराला ________ म्हणतात.",
        questionEnglish: "The net electric charge that passes through the surface per unit time is called ________.",
        options: [
          { id: "1", textMarathi: "विद्युत प्रवाह", textEnglish: "electric current" },
          { id: "2", textMarathi: "संभाव्य फरक", textEnglish: "potential difference" },
          { id: "3", textMarathi: "व्होल्टेज फरक", textEnglish: "voltage difference" },
          { id: "4", textMarathi: "प्रभार गती", textEnglish: "charge motion" }
        ],
        correctOption: "1",
        explanationMarathi: "एकक कालावधीत वाहकाच्या आडव्या छेदातून प्रवाहित होणाऱ्या निव्वळ विद्युत प्रभाराला 'विद्युत प्रवाह' (I = Q/t) म्हणतात. याचे SI एकक अँपिअर (Ampere) आहे.",
        explanationEnglish: "Electric current (I = Q/t) is defined as the net rate of flow of electric charge through a cross-sectional surface per unit time."
      },
      {
        qNo: 53,
        subject: "Physics",
        topic: "Units and Measurements",
        questionMarathi: "भौतिक प्रमाण आणि त्यांचे परिमाण (Dimensions) यांच्या योग्य जोड्या लावा: (a) पारगम्यता (μ₀), (b) चिकटपणाचा गुणांक (η), (c) प्लँकचा स्थिरांक (h) — (i) ML²T⁻¹, (ii) MLT⁻²I⁻², (iii) ML⁻¹T⁻¹",
        questionEnglish: "Match the quantities with their dimensions: (a) Permeability (μ₀), (b) Coefficient of Viscosity (η), (c) Planck's Constant (h)",
        options: [
          { id: "1", textMarathi: "(a)-(iii), (b)-(i), (c)-(ii)", textEnglish: "(a)-(iii), (b)-(i), (c)-(ii)" },
          { id: "2", textMarathi: "(a)-(ii), (b)-(i), (c)-(iii)", textEnglish: "(a)-(ii), (b)-(i), (c)-(iii)" },
          { id: "3", textMarathi: "(a)-(ii), (b)-(iii), (c)-(i)", textEnglish: "(a)-(ii), (b)-(iii), (c)-(i)" },
          { id: "4", textMarathi: "(a)-(i), (b)-(ii), (c)-(iii)", textEnglish: "(a)-(i), (b)-(ii), (c)-(iii)" }
        ],
        correctOption: "3",
        explanationMarathi: "पारगम्यता (μ₀) = [MLT⁻²I⁻²] (ii); चिकटपणाचा गुणांक (η) = [ML⁻¹T⁻¹] (iii); आणि प्लँकचा स्थिरांक (h = E/ν) = [ML²T⁻¹] (i). म्हणून पर्याय (3) अचूक आहे.",
        explanationEnglish: "Permeability (μ₀) has dimensions [MLT⁻²I⁻²] (ii); Coefficient of Viscosity (η) is [ML⁻¹T⁻¹] (iii); Planck's constant (h) is [ML²T⁻¹] (i)."
      },
      {
        qNo: 54,
        subject: "Physics",
        topic: "Mirrors and Lenses",
        questionMarathi: "जर माध्यमाचा अपवर्तनांक दुहेरी अंतर्वक्र किंवा दुहेरी बहिर्वक्र भिंगाच्या अपवर्तनांकापेक्षा जास्त असेल तर भिंगाची नाभिय लांबी ________ होते.",
        questionEnglish: "If the refractive index of the medium is more than the refractive index of double concave or double convex lens, then the focal length of the lens becomes ________.",
        options: [
          { id: "1", textMarathi: "अनंत", textEnglish: "infinite" },
          { id: "2", textMarathi: "शून्य", textEnglish: "zero" },
          { id: "3", textMarathi: "धन (+)", textEnglish: "positive" },
          { id: "4", textMarathi: "ऋण (-)", textEnglish: "negative" }
        ],
        correctOption: "4",
        explanationMarathi: "लेन्स मेकर सूत्रानुसार [1/f = (n_lens/n_medium - 1)(1/R₁ - 1/R₂)], जेव्हा माध्यमाचा अपवर्तनांक भिंगापेक्षा जास्त असतो (n_medium > n_lens), तेव्हा भिंगाच्या नाभीय अंतराचे चिन्ह बदलते (बहिर्वक्र भिंगाचे नाभीय अंतर ऋण होते व ते अपसारी म्हणून कार्य करते).",
        explanationEnglish: "By the Lens Maker's Formula, when a lens is immersed in a medium of higher refractive index than the lens material, its focal length reverses sign (becomes negative for a convex lens)."
      },
      {
        qNo: 55,
        subject: "Physics",
        topic: "Heat and Thermodynamics",
        questionMarathi: "थर्मोडायनॅमिक्सच्या नियम दोन नुसार हीट इंजीनची कार्यक्षमता किती असते?",
        questionEnglish: "According to Second Law of thermodynamics how much will be the efficiency of heat engine?",
        options: [
          { id: "1", textMarathi: "शून्य", textEnglish: "Zero" },
          { id: "2", textMarathi: "अनंत", textEnglish: "Infinity" },
          { id: "3", textMarathi: "एक", textEnglish: "One" },
          { id: "4", textMarathi: "एक पेक्षा कमी", textEnglish: "Less than one" }
        ],
        correctOption: "4",
        explanationMarathi: "उष्मागतिकीच्या दुसऱ्या नियमानुसार (केल्विन-प्लँक विधान) कोणत्याही उष्णता इंजिनची कार्यक्षमता १००% (म्हणजेच १) असू शकत नाही; ती नेहमी 'एक पेक्षा कमी' (η = 1 - T₂/T₁ < 1) असते.",
        explanationEnglish: "By the Second Law of Thermodynamics, no heat engine can convert 100% of absorbed heat into work; hence efficiency η is always less than one (< 1)."
      },
      {
        qNo: 56,
        subject: "Physics",
        topic: "Atomic and Nuclear Physics",
        questionMarathi: "जेव्हा न्युक्लिऑनचे भ्रमण समांतर (Parallel spin) असते, तेव्हा अणुकेंद्रीय बलाचे वर्तन कसे असते?",
        questionEnglish: "How does the nuclear force behave, when the spin of nucleons are parallel?",
        options: [
          { id: "1", textMarathi: "बल अधिक मजबूत करते.", textEnglish: "The force is stronger" },
          { id: "2", textMarathi: "बल कमकुवत करते.", textEnglish: "The force is weaker" },
          { id: "3", textMarathi: "बल स्थिर राहते.", textEnglish: "The force remains constant" },
          { id: "4", textMarathi: "बल प्रत्याकर्षण बनते.", textEnglish: "The force become repulsive" }
        ],
        correctOption: "1",
        explanationMarathi: "अणुकेंद्रीय बल (Strong Nuclear Force) हे स्पिन-अवलंबून (Spin-dependent) असते. जेव्हा दोन न्युक्लिऑन्सचे स्पिन समांतर (Parallel spin) असतात, तेव्हा अणुकेंद्रीय आकर्षण बल प्रति-समांतर स्पिनपेक्षा अधिक प्रबळ (Stronger) असते (उदा. ड्युटेरॉन केंद्रक).",
        explanationEnglish: "Nuclear force is spin-dependent; nucleons with parallel spins experience a stronger attractive nuclear force than those with anti-parallel spins."
      },
      {
        qNo: 57,
        subject: "Zoology",
        topic: "Cell Biology",
        questionMarathi: "खालीलपैकी कोणत्या जीवांच्या पडद्यामध्ये (Cell Membrane) असंतृप्त फॉस्फोलिपिड्सचे प्रमाण सर्वाधिक असेल याचा अंदाज लावा?",
        questionEnglish: "Predict which of the following organisms will have the highest percentage of unsaturated phospholipids in their membranes?",
        options: [
          { id: "1", textMarathi: "अंटार्क्टिक मासे", textEnglish: "Antarctic fish" },
          { id: "2", textMarathi: "वाळवंटातील साप", textEnglish: "Desert snake" },
          { id: "3", textMarathi: "मानव", textEnglish: "Human being" },
          { id: "4", textMarathi: "ध्रुवीय अस्वल", textEnglish: "Polar bear" }
        ],
        correctOption: "1",
        explanationMarathi: "अंटार्क्टिक मासे हे शीत-रक्ताचे (Ectothermic) जीव अतिथंड पाण्यात राहतात. अतिथंड तापमानात पेशीपटल गोठू नये व त्याची प्रवाहिता (Membrane fluidity) टिकून राहावी म्हणून त्यांच्या पेशीपटलात असंतृप्त फॉस्फोलिपिड्सचे प्रमाण सर्वाधिक असते.",
        explanationEnglish: "Antarctic fish are ectotherms living in sub-zero waters; high levels of unsaturated fatty acids in phospholipids prevent membrane solidification and maintain fluidity."
      },
      {
        qNo: 58,
        subject: "Zoology",
        topic: "Cell Biology",
        questionMarathi: "असे अंगक निवडा ज्यामध्ये स्वतःचे DNA आणि 70S रायबोझोम असतात परंतु ते युकॅरियोटिक पेशींमध्ये आढळते.",
        questionEnglish: "Select the organelle that contains its own DNA and 70S ribosomes but is found in eukaryotic cells.",
        options: [
          { id: "1", textMarathi: "लायसोसोम", textEnglish: "Lysosome" },
          { id: "2", textMarathi: "तंतुकणिका (Mitochondria)", textEnglish: "Mitochondria" },
          { id: "3", textMarathi: "गॉल्जी काय", textEnglish: "Golgi Apparatus" },
          { id: "4", textMarathi: "अंतर्द्रव्यजालिका", textEnglish: "Endoplasmic Reticulum" }
        ],
        correctOption: "2",
        explanationMarathi: "तंतुकणिका (Mitochondria) आणि हरितलवक (Chloroplast) या केंद्रकी (Eukaryotic) पेशींमधील अंगकांमध्ये स्वतःचा वलयांकित DNA आणि 70S रायबोझोम्स असतात; म्हणून त्यांना अर्ध-स्वायत्त अंगके म्हणतात.",
        explanationEnglish: "Mitochondria (and plastids) are semi-autonomous organelles inside eukaryotic cells possessing circular DNA and prokaryotic-type 70S ribosomes."
      },
      {
        qNo: 59,
        subject: "Botany",
        topic: "Plant Reproduction",
        questionMarathi: "'अपोमिक्सिस' (Apomixis) हे एक प्रकारचे पुनरुत्पादन आहे ज्यामुळे ________ चा विकास होतो.",
        questionEnglish: "Apomixis is a type of reproduction that results in the development of a/an:",
        options: [
          { id: "1", textMarathi: "गॅमेट्सच्या संलयन शिवाय नवीन जीव", textEnglish: "New organism without fusion of gametes" },
          { id: "2", textMarathi: "गॅमेट्सच्या संलयन उत्पादनापासून नवीन जीव", textEnglish: "New organism from fusion products of gametes" },
          { id: "3", textMarathi: "एन्डोस्पर्म पासून गर्भ", textEnglish: "Embryo from endosperm" },
          { id: "4", textMarathi: "न्यूसेलस पासून भ्रूण", textEnglish: "Embryo from nucellus" }
        ],
        correctOption: "1",
        explanationMarathi: "अपोमिक्सिस (Apomixis / असंगजनन) ही फलनाशिवाय म्हणजेच युग्मकांच्या संयोगाशिवाय (Without fusion of gametes) बिया व नवीन जीव तयार होण्याची अलैंगिक प्रजनन पद्धत आहे.",
        explanationEnglish: "Apomixis is asexual reproduction in plants that mimics sexual reproduction by forming seeds/new organisms without fertilization (without fusion of gametes)."
      },
      {
        qNo: 61,
        subject: "Zoology",
        topic: "Evolution",
        questionMarathi: "मार्शुपिअल्स व प्लासेंटल मॅमल्स हे उत्क्रांतीचे कोणते उदाहरण दर्शवितात?",
        questionEnglish: "Evolution of marsupials and placental mammals is an example of ________.",
        options: [
          { id: "1", textMarathi: "भिन्न उत्क्रांती", textEnglish: "Divergent evolution" },
          { id: "2", textMarathi: "अभिसरण उत्क्रांती", textEnglish: "Convergent evolution" },
          { id: "3", textMarathi: "समांतर उत्क्रांती", textEnglish: "Parallel evolution" },
          { id: "4", textMarathi: "स्वतंत्र उत्क्रांती", textEnglish: "Independent evolution" }
        ],
        correctOption: "2",
        explanationMarathi: "ऑस्ट्रेलियातील मार्शुपिअल्स आणि इतर खंडांतील प्लासेंटल सस्तन प्राणी समान अधिवासात राहिल्यामुळे त्यांच्यात सारखीच शारीरिक वैशिष्ट्ये विकसित झाली, हे 'अभिसरण उत्क्रांती' (Convergent / Parallel evolution) चे उत्तम उदाहरण आहे.",
        explanationEnglish: "Australian marsupials and placental mammals evolving similar adaptations in similar ecological niches represent Convergent (or Parallel) evolution."
      },
      {
        qNo: 62,
        subject: "Zoology",
        topic: "Human Body Systems",
        questionMarathi: "पॉलिपेप्टाइड हार्मोन कॅल्सीटोनीन (CT) ________ ग्रंथीच्या पॅराफॉलिक्युलर पेशींद्वारे तयार केला जातो.",
        questionEnglish: "A polypeptide hormone Calcitonin (CT) is produced by parafollicular cells of ________ gland.",
        options: [
          { id: "1", textMarathi: "लाळ", textEnglish: "Salivary" },
          { id: "2", textMarathi: "घाम", textEnglish: "Sweat" },
          { id: "3", textMarathi: "थायरॉईड", textEnglish: "Thyroid" },
          { id: "4", textMarathi: "स्वादुपिंड", textEnglish: "Pancreas" }
        ],
        correctOption: "3",
        explanationMarathi: "कॅल्सीटोनीन (Calcitonin) हे संप्रेरक थायरॉईड (अवटू) ग्रंथीच्या पॅराफॉलिक्युलर (C-cells) पेशींद्वारे स्रवले जाते आणि ते रक्तातील कॅल्शियमची पातळी नियंत्रित करते.",
        explanationEnglish: "Calcitonin is secreted by the parafollicular cells (C-cells) of the Thyroid gland and lowers blood calcium levels."
      },
      {
        qNo: 63,
        subject: "Hygiene and Public Health",
        topic: "Communicable Diseases",
        questionMarathi: "HIV संसर्गाच्या कोणत्या टप्प्यात AIDS ची लक्षणे साधारणपणे दिसू लागतात?",
        questionEnglish: "During which stage of HIV infection do the symptoms of AIDS usually appear?",
        options: [
          { id: "1", textMarathi: "संसर्ग करणारा रेट्रोव्हायरस यजमानाच्या पेशींमध्ये प्रवेश करतो तेंव्हा", textEnglish: "When the infecting retrovirus enters host cells" },
          { id: "2", textMarathi: "रिव्हर्स ट्रान्सक्रिप्टेस एन्झाइमद्वारे व्हायरल DNA तयार होतो तेंव्हा", textEnglish: "When viral DNA is produced by reverse transcriptase enzyme" },
          { id: "3", textMarathi: "HIV हेल्पर T-लिम्फोसाइट्समध्ये वेगाने वाढतो व या पेशींचे मोठ्या संख्येने नुकसान करतो तेंव्हा", textEnglish: "When HIV replicates rapidly in helper T-lymphocytes and damages a large number of these cells" },
          { id: "4", textMarathi: "संक्रमित व्यक्तीसोबत लैंगिक संपर्क झाल्यानंतर 15 दिवसाच्या आत", textEnglish: "Within 15 days of sexual contact with an infected person" }
        ],
        correctOption: "3",
        explanationMarathi: "जेव्हा HIV विषाणू Helper T-lymphocytes (CD4 पेशी) मध्ये वेगाने गुणन करतो आणि या पेशींची संख्या अत्यंत कमी करतो, तेव्हा शरीराची रोगप्रतिकारक शक्ती ढासळून AIDS ची लक्षणे दिसू लागतात.",
        explanationEnglish: "Clinical symptoms of AIDS appear when HIV replicates extensively inside helper T-lymphocytes (CD4+ cells) and destroys them in large numbers."
      },
      {
        qNo: 64,
        subject: "Botany",
        topic: "Plant Hormones",
        questionMarathi: "खालीलपैकी कोणते नैसर्गिक वनस्पती संप्रेरक नाही?",
        questionEnglish: "Which of the following is not a natural plant growth hormone?",
        options: [
          { id: "1", textMarathi: "ऑक्सिन", textEnglish: "Auxins" },
          { id: "2", textMarathi: "इथायलीन", textEnglish: "Ethylene" },
          { id: "3", textMarathi: "मिथायलीन", textEnglish: "Methylene" },
          { id: "4", textMarathi: "अॅबसिसिक आम्ल", textEnglish: "Abscissic acid" }
        ],
        correctOption: "3",
        explanationMarathi: "ऑक्सिन (Auxin), इथायलीन (Ethylene) आणि अॅबसिसिक आम्ल (ABA) ही नैसर्गिक वनस्पती संप्रेरके आहेत; परंतु 'मिथायलीन' (Methylene) हे वनस्पती संप्रेरक नाही.",
        explanationEnglish: "Auxins, Ethylene, and Abscisic acid are natural phytohormones, whereas Methylene is a chemical radical/group, not a plant hormone."
      },
      {
        qNo: 65,
        subject: "Chemistry",
        topic: "Everyday Chemistry",
        questionMarathi: "एकमेकांत न मिसळणाऱ्या दोन द्रवांपैकी एका द्रवाचे दुसऱ्या द्रवामध्ये केलेल्या कोलॉईडल प्रसारणास ________ म्हणतात.",
        questionEnglish: "A colloidal dispersion of one liquid in another immiscible with it is called ________.",
        options: [
          { id: "1", textMarathi: "द्रावण", textEnglish: "Solution" },
          { id: "2", textMarathi: "फेस", textEnglish: "Foam" },
          { id: "3", textMarathi: "इमल्शन (पायस)", textEnglish: "Emulsion" },
          { id: "4", textMarathi: "जेल", textEnglish: "Gel" }
        ],
        correctOption: "3",
        explanationMarathi: "एकमेकांत न मिसळणाऱ्या दोन द्रवांच्या (Liquid in Liquid) कलिल मिश्रणाला 'इमल्शन' (Emulsion / पायस) म्हणतात (उदा. दूध, लोणी).",
        explanationEnglish: "A colloidal system in which both the dispersed phase and dispersion medium are immiscible liquids is called an Emulsion (e.g., milk)."
      },
      {
        qNo: 66,
        subject: "Chemistry",
        topic: "Acids, Bases and Salts",
        questionMarathi: "दिलेल्या पर्यायांपैकी खनिज आम्ल/आम्ले (Mineral acids) ओळखा: (a) ऑक्झॅलिक आम्ल, (b) सल्फ्यूरिक आम्ल, (c) नायट्रिक आम्ल, (d) हायड्रोक्लोरिक आम्ल",
        questionEnglish: "Identify the mineral acid/acids from following acids: (a) Oxalic acid, (b) Sulphuric acid, (c) Nitric acid, (d) Hydrochloric acid",
        options: [
          { id: "1", textMarathi: "फक्त (a)", textEnglish: "Only (a)" },
          { id: "2", textMarathi: "(b), (c) आणि (d)", textEnglish: "(b), (c) and (d)" },
          { id: "3", textMarathi: "फक्त (d)", textEnglish: "Only (d)" },
          { id: "4", textMarathi: "फक्त (b) आणि (c)", textEnglish: "Only (b) and (c)" }
        ],
        correctOption: "2",
        explanationMarathi: "सल्फ्यूरिक आम्ल (H₂SO₄), नायट्रिक आम्ल (HNO₃) आणि हायड्रोक्लोरिक आम्ल (HCl) ही असेंद्रिय खनिज आम्ले (Mineral acids) आहेत, तर ऑक्झॅलिक आम्ल (टोमॅटोमध्ये आढळणारे) हे सेंद्रिय आम्ल आहे.",
        explanationEnglish: "Sulphuric acid, Nitric acid, and Hydrochloric acid are inorganic mineral acids, whereas Oxalic acid is an organic acid."
      },
      {
        qNo: 67,
        subject: "Hygiene and Public Health",
        topic: "Public Health",
        questionMarathi: "क्लोरोअॅम्फीनीकॉल (Chloramphenicol) हे ________ आहे: (a) संकीर्ण श्रेणीचे प्रतिजीवक, (b) विस्तृत श्रेणीचे (Broad spectrum) प्रतिजीवक, (c) मर्यादित श्रेणीचे प्रतिजीवक, (d) जंतुनाशक औषध",
        questionEnglish: "Chloramphenicol is a ________: (a) Narrow spectrum antibiotic, (b) Broad spectrum antibiotic, (c) Limited spectrum antibiotic, (d) Antiseptic drug",
        options: [
          { id: "1", textMarathi: "फक्त (a) व (d) बरोबर आहेत", textEnglish: "Only (a) and (d) are correct" },
          { id: "2", textMarathi: "फक्त (b) बरोबर आहे", textEnglish: "Only (b) is correct" },
          { id: "3", textMarathi: "फक्त (b) व (c) बरोबर आहेत", textEnglish: "Only (b) and (c) are correct" },
          { id: "4", textMarathi: "फक्त (d) बरोबर आहे", textEnglish: "Only (d) is correct" }
        ],
        correctOption: "2",
        explanationMarathi: "क्लोरोअॅम्फेनिकॉल हे ग्राम-पॉझिटिव्ह व ग्राम-निगेटिव्ह अशा दोन्ही प्रकारच्या जीवाणूंविरुद्ध प्रभावी असणारे 'विस्तृत श्रेणीचे प्रतिजीवक' (Broad-spectrum antibiotic) आहे (विशेषतः विषमज्वर/Typhoid उपचारात उपयुक्त).",
        explanationEnglish: "Chloramphenicol is a classic broad-spectrum antibiotic effective against both Gram-positive and Gram-negative bacteria."
      },
      {
        qNo: 68,
        subject: "Chemistry",
        topic: "Periodic Table",
        questionMarathi: "खालीलपैकी कोणत्या मूलद्रव्याची विद्युतऋणता (electronegativity) सर्वात जास्त आहे?",
        questionEnglish: "Which of the following elements has the highest electronegativity?",
        options: [
          { id: "1", textMarathi: "ऑक्सिजन", textEnglish: "Oxygen" },
          { id: "2", textMarathi: "नायट्रोजन", textEnglish: "Nitrogen" },
          { id: "3", textMarathi: "फ्ल्युओरीन", textEnglish: "Fluorine" },
          { id: "4", textMarathi: "क्लोरीन", textEnglish: "Chlorine" }
        ],
        correctOption: "3",
        explanationMarathi: "संपूर्ण आवर्तसारणीत 'फ्ल्युओरीन' (Fluorine - F, अणुअंक 9) या मूलद्रव्याची विद्युतऋणता सर्वाधिक (Pauling scale वर 4.0) असते.",
        explanationEnglish: "Fluorine (F) is the most electronegative element in the periodic table (4.0 on the Pauling scale)."
      },
      {
        qNo: 69,
        subject: "Chemistry",
        topic: "Chemical Reactions",
        questionMarathi: "कोणत्याही अॅलोट्रॉपिक (Allotropic) स्वरूपातील सर्व मूलद्रव्यांची ऑक्सिडेशन स्थिती ________ असते.",
        questionEnglish: "The oxidation states of all elements in any allotropic form is ________.",
        options: [
          { id: "1", textMarathi: "+2 (अधिक दोन)", textEnglish: "+2" },
          { id: "2", textMarathi: "+1 (अधिक एक)", textEnglish: "+1" },
          { id: "3", textMarathi: "0 (शून्य)", textEnglish: "Zero" },
          { id: "4", textMarathi: "-1 (वजा एक)", textEnglish: "-1" }
        ],
        correctOption: "3",
        explanationMarathi: "मुक्त किंवा कोणत्याही अपरूप (Allotropic) स्थितीतील मूलद्रव्याचा (उदा. हिरा, ग्रॅफाईट, O₂, O₃, P₄, S₈) ऑक्सिडेशन अंक नेहमी शून्य (Zero) असतो.",
        explanationEnglish: "The oxidation number of any uncombined element in its free or allotropic state (e.g., diamond, graphite, O₂, O₃) is always Zero (0)."
      },
      {
        qNo: 70,
        subject: "Chemistry",
        topic: "Chemical Bonding",
        questionMarathi: "खालीलपैकी कोणता घटक साध्या लिगँड्स बरोबर उदा. हेलाईड्स (Halides) बरोबर समन्वय संयुग (Co-ordination compounds) निर्माण करतो?",
        questionEnglish: "Which of the following element forms Co-ordination compounds with simple ligands such as halides?",
        options: [
          { id: "1", textMarathi: "बेरिलीयम", textEnglish: "Beryllium" },
          { id: "2", textMarathi: "मॅग्नेशिअम", textEnglish: "Magnesium" },
          { id: "3", textMarathi: "कोबाल्ट", textEnglish: "Cobalt" },
          { id: "4", textMarathi: "वरीलपैकी एकही नाही", textEnglish: "None of the above" }
        ],
        correctOption: "3",
        explanationMarathi: "कोबाल्ट (Cobalt - Co) हा d-खंडातील संक्रमित धातू (Transition metal) असून रिकाम्या d-कक्षकांमुळे तो हेलाईड्स व इतर लिगँड्ससोबत सहज समन्वय संयुगे (Coordination complexes) तयार करतो.",
        explanationEnglish: "Cobalt (Co) is a d-block transition element with vacant d-orbitals and high charge density, readily forming coordination complexes with halide ligands."
      }
    ]
  },
  {
    id: "paper-2026-h25",
    examCycleYear: "2026",
    bookletCode: "H25",
    examTitleMarathi: "महाराष्ट्र गट-ब (अराजपत्रित) सेवा संयुक्त (पूर्व) परीक्षा 2026",
    examTitleEnglish: "MPSC Group-B (Non-Gazetted) Combined Prelims 2026",
    examDate: "14 जून 2026 (14 June 2026)",
    totalPaperQuestions: 100,
    totalMarks: 100,
    paperType: "GS & General Science (Q66–Q80)",
    pdfFileName: "MPSC_GroupB_Prelims_2026_H25.pdf",
    questions: [
      {
        qNo: 67,
        subject: "Physics",
        topic: "Atomic and Nuclear Physics",
        questionMarathi: "खालील विधाने सत्य की असत्य ते लिहा: (i) विखंडन (fission) अभिक्रियेमध्ये जड युरेनियम अणु वापरतात. (ii) विखंडन अभिक्रियेमध्ये खूप ऊर्जा बाहेर पडते. (iii) विखंडन अभिक्रियेमध्ये जड अणु विभागतात. (iv) विखंडन अभिक्रियेमध्ये न्यूट्रॉन्समुळे शृंखला अभिक्रिया घडते.",
        questionEnglish: "Say whether it is true or false regarding nuclear fission reaction: (i) Heavy uranium atoms are used, (ii) Releases large amount of energy, (iii) Heavy atom splits, (iv) Due to neutrons chain reaction occurs.",
        options: [
          { id: "1", textMarathi: "सत्य, सत्य, सत्य, असत्य", textEnglish: "True, True, True, False" },
          { id: "2", textMarathi: "सत्य, सत्य, सत्य, सत्य", textEnglish: "True, True, True, True" },
          { id: "3", textMarathi: "असत्य, सत्य, असत्य, असत्य", textEnglish: "False, True, False, False" },
          { id: "4", textMarathi: "असत्य, असत्य, असत्य, सत्य", textEnglish: "False, False, False, True" }
        ],
        correctOption: "2",
        explanationMarathi: "अणुकेंद्रीय विखंडन (Nuclear Fission) प्रक्रियेबाबत दिलेली चारही विधाने (i, ii, iii आणि iv) पूर्णपणे सत्य आहेत!",
        explanationEnglish: "All four statements (i, ii, iii, and iv) accurately describe nuclear fission of U-235."
      },
      {
        qNo: 68,
        subject: "Physics",
        topic: "Sound and Waves",
        questionMarathi: "ध्वनी ऊर्जा म्हणजे ________.",
        questionEnglish: "Sound energy is the ________.",
        options: [
          { id: "1", textMarathi: "यांत्रिक ऊर्जेचा कंपन करणारा स्रोत", textEnglish: "Mechanical energy of the vibrating source" },
          { id: "2", textMarathi: "विद्युत ऊर्जेचा कंपन करणारा स्रोत", textEnglish: "Electrical energy of the vibrating source" },
          { id: "3", textMarathi: "चुंबकीय ऊर्जेचा कंपन करणारा स्रोत", textEnglish: "Magnetic energy of the vibrating source" },
          { id: "4", textMarathi: "वरीलपैकी सर्व", textEnglish: "All of the above" }
        ],
        correctOption: "1",
        explanationMarathi: "ध्वनी हा यांत्रिक तरंग (Mechanical wave) असून ध्वनी ऊर्जा ही कंपन करणाऱ्या स्रोताची यांत्रिक ऊर्जा असते.",
        explanationEnglish: "Sound is a mechanical longitudinal wave generated by the mechanical vibrations of a source."
      },
      {
        qNo: 69,
        subject: "Chemistry",
        topic: "Metals and Non-metals",
        questionMarathi: "हॅमेटाईट (Haematite) पासून कोणता धातू मिळवला जातो?",
        questionEnglish: "Which metal can be obtained from Haematite?",
        options: [
          { id: "1", textMarathi: "अॅल्युमिनिअम (Al)", textEnglish: "Aluminium (Al)" },
          { id: "2", textMarathi: "झिंक (Zn)", textEnglish: "Zinc (Zn)" },
          { id: "3", textMarathi: "कॉपर (Cu)", textEnglish: "Copper (Cu)" },
          { id: "4", textMarathi: "लोखंड/आयर्न (Fe)", textEnglish: "Iron (Fe)" }
        ],
        correctOption: "4",
        explanationMarathi: "हॅमेटाईट (Fe₂O₃) हे लोखंडाचे (Iron - Fe) प्रमुख धातुक (Ore) आहे.",
        explanationEnglish: "Haematite (Fe₂O₃) is the principal oxide ore of Iron (Fe)."
      },
      {
        qNo: 70,
        subject: "Chemistry",
        topic: "Periodic Table",
        questionMarathi: "खालीलपैकी कोणते मूलद्रव्य आवर्तसारणी मधील 'पी' गणात ('p' block) समावेश आहे?",
        questionEnglish: "Which of the following element belong to 'p' block in the modern periodic table?",
        options: [
          { id: "1", textMarathi: "फ्रान्सशियम (Fr)", textEnglish: "Francium (Fr)" },
          { id: "2", textMarathi: "युरेनियम (U)", textEnglish: "Uranium (U)" },
          { id: "3", textMarathi: "इंडियम (In)", textEnglish: "Indium (In)" },
          { id: "4", textMarathi: "कॉपर (Cu)", textEnglish: "Copper (Cu)" }
        ],
        correctOption: "3",
        explanationMarathi: "इंडियम (Indium - In, Z=49) हे गण १३ (बोरॉन कुटुंब) मधील p-खंडातील मूलद्रव्य आहे (Fr = s-block, U = f-block, Cu = d-block).",
        explanationEnglish: "Indium (In, Group 13) belongs to the p-block of the periodic table, whereas Francium is s-block, Uranium is f-block, and Copper is d-block."
      },
      {
        qNo: 71,
        subject: "Chemistry",
        topic: "Atomic Structure",
        questionMarathi: "₉₂U²³⁸ च्या अणूमध्ये किती न्यूट्रॉन्स असतात? (अ. 92, ब. 238, क. 330, ड. 184)",
        questionEnglish: "How many neutrons are there in an atom of ₉₂U²³⁸? (a. 92, b. 238, c. 330, d. 184)",
        options: [
          { id: "1", textMarathi: "(ब - अ)", textEnglish: "(b - a)" },
          { id: "2", textMarathi: "(क - अ)", textEnglish: "(c - a)" },
          { id: "3", textMarathi: "(अ + ड)", textEnglish: "(a + d)" },
          { id: "4", textMarathi: "(ब - ड)", textEnglish: "(b - d)" }
        ],
        correctOption: "1",
        explanationMarathi: "न्यूट्रॉन्सची संख्या (N) = अणुवस्तुमानांक (A = 238, म्हणजेच 'ब') - अणुअंक (Z = 92, म्हणजेच 'अ') = (ब - अ) = 146 न्यूट्रॉन्स!",
        explanationEnglish: "Number of neutrons N = Mass number (A = 238, i.e., b) - Atomic number (Z = 92, i.e., a) = (b - a) = 146."
      },
      {
        qNo: 72,
        subject: "Zoology",
        topic: "Animal Classification",
        questionMarathi: "खालीलपैकी कोणता कोएलेंटेरेटा (Coelenterata) फायलमशी संबंधित नाही?",
        questionEnglish: "Which of the following does not belong to phylum coelenterata?",
        options: [
          { id: "1", textMarathi: "समुद्री पेन (सी पेन)", textEnglish: "Sea pen" },
          { id: "2", textMarathi: "ब्लू कोरल", textEnglish: "Blue coral" },
          { id: "3", textMarathi: "समुद्री काकडी (सी कुकुम्बर)", textEnglish: "Sea cucumber" },
          { id: "4", textMarathi: "सी फॅन", textEnglish: "Sea fan" }
        ],
        correctOption: "3",
        explanationMarathi: "समुद्री काकडी (Sea cucumber - Holothuria) हा प्राणी 'कंटकचर्मी' (Echinodermata) संघात मोडतो, तो Coelenterata (Cnidaria) मध्ये येत नाही.",
        explanationEnglish: "Sea cucumber (Holothuria) belongs to Phylum Echinodermata, whereas Sea pen, Blue coral, and Sea fan belong to Phylum Coelenterata (Cnidaria)."
      },
      {
        qNo: 73,
        subject: "Zoology",
        topic: "Animal Kingdom",
        questionMarathi: "खालीलपैकी कोणते उभयचर प्राणी आंधळे (Blind amphibians) आहेत?",
        questionEnglish: "Which one of the following amphibians are blind?",
        options: [
          { id: "1", textMarathi: "बेडूक", textEnglish: "Frogs" },
          { id: "2", textMarathi: "टॉड्स", textEnglish: "Toads" },
          { id: "3", textMarathi: "सीसीलियन", textEnglish: "Caecilians" },
          { id: "4", textMarathi: "सॅलॅमँडर्स", textEnglish: "Salamanders" }
        ],
        correctOption: "3",
        explanationMarathi: "सीसीलियन (Caecilians / Apoda उदा. Ichthyophis) हे पाय नसलेले, जमिनीत बिळे करून राहणारे आंधळे उभयचर (Blind amphibians) प्राणी आहेत.",
        explanationEnglish: "Caecilians (Order Apoda / Gymnophiona, e.g., Ichthyophis) are limbless, burrowing, blind amphibians."
      },
      {
        qNo: 76,
        subject: "Botany",
        topic: "Plant Diseases",
        questionMarathi: "लिंबू वरील कँकर रोग (Citrus canker) ________ या रोगकारकामुळे होतो.",
        questionEnglish: "Citrus canker disease is caused by ________ causal agent.",
        options: [
          { id: "1", textMarathi: "उस्टीलॅगो मायडीस", textEnglish: "Ustilago maydis" },
          { id: "2", textMarathi: "झॅनथोमोनास सिट्राय", textEnglish: "Xanthomonas citri" },
          { id: "3", textMarathi: "क्लॅव्हिसेप्स मायक्रोसेफॅला", textEnglish: "Claviceps microcephala" },
          { id: "4", textMarathi: "स्पेसलोथेका सोरघी", textEnglish: "Sphacelotheca sorghi" }
        ],
        correctOption: "2",
        explanationMarathi: "लिंबूवर्गीय फळांवरील 'सिट्रस कँकर' (खैऱ्या रोग) हा 'झॅनथोमोनास सिट्राय' (Xanthomonas citri) या जीवाणूमुळे (Bacteria) होतो.",
        explanationEnglish: "Citrus canker is a bacterial plant disease caused by Xanthomonas citri (Xanthomonas axonopodis)."
      },
      {
        qNo: 78,
        subject: "Zoology",
        topic: "Nervous System",
        questionMarathi: "प्रमस्तिष्कमेरू द्रव (Cerebro-spinal fluid - CSF) बाबत विधाने: (अ) मेंदूला प्राणवायू पुरवण्याचे माध्यम, (ब) टाकावू पदार्थ दूर वाहून नेतो, (क) मेंदूला पोषण पुरवितो, (ड) मेंदू व मज्जारज्जूसाठी आघातप्रतिबंधक म्हणून काम करतो.",
        questionEnglish: "Consider the statements regarding Cerebro-spinal fluid (CSF): A. Medium for oxygen to brain, B. Carries away waste products, C. Supplies nourishment, D. Acts as buffer protecting brain and spinal cord.",
        options: [
          { id: "1", textMarathi: "फक्त अ व ब", textEnglish: "Only A and B" },
          { id: "2", textMarathi: "फक्त ड", textEnglish: "Only D" },
          { id: "3", textMarathi: "अ, ब, क आणि ड", textEnglish: "A, B, C and D" },
          { id: "4", textMarathi: "फक्त ब आणि क", textEnglish: "Only B and C" }
        ],
        correctOption: "3",
        explanationMarathi: "प्रमस्तिष्कमेरू द्रव (CSF) मेंदू व मज्जारज्जूचे बाह्य आघातांपासून संरक्षण करतो, तसेच पोषण, प्राणवायू पुरवठा आणि चयापचयातील टाकावू पदार्थ बाहेर नेण्याचे कार्य करतो.",
        explanationEnglish: "Cerebrospinal fluid (CSF) acts as a shock-absorbing cushion (buffer) and also facilitates nutrient transport, oxygenation, and waste removal for the CNS."
      },
      {
        qNo: 79,
        subject: "Zoology",
        topic: "Human Body Systems",
        questionMarathi: "मानवाच्या शरीरामध्ये पाण्याच्या संतुलनाचे नियंत्रण, रक्तातील क्षारांच्या प्रमाणाचे नियंत्रण, रक्ताच्या सामूचे (pH) नियंत्रण, टाकावू पदार्थांचे उत्सर्जन इ. कार्ये प्रामुख्याने ________ करते.",
        questionEnglish: "In human body, regulation of water balance, concentration of salts, blood pH, and excretion of waste products are performed mainly by ________.",
        options: [
          { id: "1", textMarathi: "त्वचा", textEnglish: "Skin" },
          { id: "2", textMarathi: "लहान आतडे", textEnglish: "Small intestine" },
          { id: "3", textMarathi: "यकृत", textEnglish: "Liver" },
          { id: "4", textMarathi: "मूत्रपिंड", textEnglish: "Kidney" }
        ],
        correctOption: "4",
        explanationMarathi: "मूत्रपिंड (Kidney) हे मानवी उत्सर्जन संस्थेचे मुख्य अवयव असून ते परासरण नियमन (Osmoregulation - पाणी व क्षार संतुलन), रक्ताचा pH राखणे आणि युरियाचे उत्सर्जन करते.",
        explanationEnglish: "The Kidneys perform osmoregulation (water and electrolyte balance), acid-base (pH) homeostasis, and excretion of nitrogenous wastes."
      },
      {
        qNo: 80,
        subject: "Hygiene and Public Health",
        topic: "Vitamins and Minerals",
        questionMarathi: "खालीलपैकी कोणती जीवनसत्त्वे पाण्यात विद्राव्य (Water-soluble) आहेत?",
        questionEnglish: "Which of the following are water-soluble vitamins?",
        options: [
          { id: "1", textMarathi: "जीवनसत्त्व A आणि जीवनसत्त्व D", textEnglish: "Vitamin A and Vitamin D" },
          { id: "2", textMarathi: "जीवनसत्त्व E आणि जीवनसत्त्व K", textEnglish: "Vitamin E and Vitamin K" },
          { id: "3", textMarathi: "जीवनसत्त्व B समूह आणि जीवनसत्त्व C", textEnglish: "Vitamin B-complex and Vitamin C" },
          { id: "4", textMarathi: "जीवनसत्त्व A आणि जीवनसत्त्व K", textEnglish: "Vitamin A and Vitamin K" }
        ],
        correctOption: "3",
        explanationMarathi: "जीवनसत्त्व B समूह आणि जीवनसत्त्व C ही पाण्यात विरघळणारी (Water-soluble - क्लृप्ती: WBC) जीवनसत्त्वे आहेत, तर A, D, E, K ही मेदात विरघळणारी जीवनसत्त्वे आहेत.",
        explanationEnglish: "Vitamin B-complex and Vitamin C are water-soluble vitamins (Mnemonic: WBC), whereas Vitamins A, D, E, and K are fat-soluble."
      }
    ]
  },
  {
    id: "paper-2026-y25",
    examCycleYear: "2026",
    bookletCode: "Y25 ( & X25 )",
    examTitleMarathi: "मुंबईचे नगरपाल (शेरीफ) कार्यालयातील बेलिफ व लिपिक, गट-क स्पर्धा परीक्षा 2026 (प्रश्नपुस्तिका II - Y25 व I - X25)",
    examTitleEnglish: "Sheriff of Mumbai Bailiff & Clerk Group-C Exam 2026 (Paper II - Y25 & Paper I - X25)",
    examDate: "06 सप्टेंबर 2026 (06 September 2026)",
    totalPaperQuestions: 200,
    totalMarks: 400,
    paperType: "GS, Science, Remote Sensing & ICT (Q65, Q68, Q71–Q90)",
    pdfFileName: "MPSC_Sheriff_Bailiff_Clerk_GroupC_2026_Y25_X25.pdf",
    questions: [
      {
        qNo: 65,
        subject: "Hygiene and Public Health",
        topic: "Human Nutrition",
        questionMarathi: "वातावरणात कोणत्या वायुचे प्रमाण वाढल्यास मानवी शरीरात रक्ताची ऑक्सिजन वाहून नेण्याची क्षमता कमी होते?",
        questionEnglish: "Which gas proportionally increased in the atmosphere reduces the oxygen carrying capacity of the blood in the human body?",
        options: [
          { id: "1", textMarathi: "कार्बन डायऑक्साईड", textEnglish: "Carbon dioxide" },
          { id: "2", textMarathi: "कार्बन मोनॉक्साईड", textEnglish: "Carbon monoxide" },
          { id: "3", textMarathi: "नायट्रोजन", textEnglish: "Nitrogen" },
          { id: "4", textMarathi: "सल्फर डायऑक्साईड", textEnglish: "Sulfur dioxide" }
        ],
        correctOption: "2",
        explanationMarathi: "कार्बन मोनॉक्साईड (CO) ची हिमोग्लोबिनसोबत संयोग पावण्याची क्षमता ऑक्सिजनपेक्षा सुमारे २५० ते ३०० पटीने जास्त असते; त्यामुळे रक्तात 'कार्बोक्सीहिमोग्लोबिन' तयार होऊन रक्ताची ऑक्सिजन वाहून नेण्याची क्षमता घटते.",
        explanationEnglish: "Carbon monoxide (CO) binds to haemoglobin with ~250 times greater affinity than oxygen, forming carboxyhaemoglobin and drastically reducing blood's oxygen-carrying capacity."
      },
      {
        qNo: 68,
        subject: "Remote Sensing",
        topic: "GIS",
        questionMarathi: "नमामी चंद्रभागा अभियानाअंतर्गत पाण्याच्या गुणवत्तेसाठी ई-देखरेख प्रणालीची स्थापना आणि डेटाबेस तयार करण्यासाठी कोणती प्रणाली वापरली जाणार आहे?",
        questionEnglish: "Which system will be used to establish e-monitoring system and create a database for water quality under Namami Chandrabhaga mission?",
        options: [
          { id: "1", textMarathi: "भूगर्भिय माहिती प्रणाली", textEnglish: "Geological Information System" },
          { id: "2", textMarathi: "उपग्रहिय माहिती प्रणाली", textEnglish: "Satellite Information System" },
          { id: "3", textMarathi: "भौगोलिक माहिती प्रणाली (GIS)", textEnglish: "Geographical Information System" },
          { id: "4", textMarathi: "संगणकिय माहिती प्रणाली", textEnglish: "Computer Information System" }
        ],
        correctOption: "3",
        explanationMarathi: "भौगोलिक माहिती प्रणाली (Geographical Information System - GIS) चा वापर करून नद्यांच्या पाण्याच्या गुणवत्तेचा स्थानिक डेटाबेस व ई-निरीक्षण प्रणाली विकसित केली जाते.",
        explanationEnglish: "Geographical Information System (GIS) is used for spatial database creation and e-monitoring of water quality."
      },
      {
        qNo: 72,
        subject: "Physics",
        topic: "Heat and Thermodynamics",
        questionMarathi: "काचेच्या बरणीवर गरम पाणी ओतल्यावर धातूचे झाकण सैल का होते?",
        questionEnglish: "Why does a metal lid loosen when hot water is poured over a glass jar?",
        options: [
          { id: "1", textMarathi: "काच धातूपेक्षा जास्त प्रसरण पावते", textEnglish: "Glass expands more than metal" },
          { id: "2", textMarathi: "धातू काचेपेक्षा जास्त प्रसरण पावतो", textEnglish: "Metal expands more than glass" },
          { id: "3", textMarathi: "दोन्ही समान प्रसरण पावतात", textEnglish: "Both expand equally" },
          { id: "4", textMarathi: "काच अकुंचन पावते तर धातू प्रसरण पावतो", textEnglish: "Glass contracts while metal expands" }
        ],
        correctOption: "2",
        explanationMarathi: "धातूचा औष्णिक प्रसरण गुणांक (Coefficient of thermal expansion) काचेपेक्षा खूप जास्त असतो; त्यामुळे गरम पाण्याने धातूचे झाकण काचेपेक्षा जास्त प्रसरण पावते आणि सहज उघडते.",
        explanationEnglish: "Metals have a higher coefficient of thermal expansion than glass; thus, pouring hot water causes the metal lid to expand more than the glass jar, loosening it."
      },
      {
        qNo: 73,
        subject: "Physics",
        topic: "Light, Reflection and Refraction",
        questionMarathi: "खालील विधाने सत्य की असत्य ते लिहा: (i) प्रकाश हा विद्युत चुंबकीय लहर आहे. (ii) प्रकाश हा फोटॉन कण आहे. (iii) प्रकाश निर्वात पोकळीतून प्रवास करतो. (iv) प्रकाशाचा स्रोत जेव्हा प्रकाश बाहेर टाकतो तेव्हा तो ऊर्जा गमावतो.",
        questionEnglish: "Read the sentences and say whether it is true or false: (i) Light is an electromagnetic wave, (ii) Light is a photon particle, (iii) Light travels in a vacuum, (iv) When a source of light emits the light then it loses the energy.",
        options: [
          { id: "1", textMarathi: "वरील सर्व विधाने बरोबर आहेत.", textEnglish: "All sentences are correct." },
          { id: "2", textMarathi: "फक्त (i) विधान बरोबर आहे.", textEnglish: "Only (i) sentence is correct." },
          { id: "3", textMarathi: "फक्त (i), (ii) विधाने बरोबर आहेत.", textEnglish: "Only (i), (ii) sentences are correct." },
          { id: "4", textMarathi: "फक्त (iv) विधान बरोबर आहे.", textEnglish: "Only (iv) sentence is correct." }
        ],
        correctOption: "1",
        explanationMarathi: "प्रकाशाला द्वैत स्वरूप (Wave-Particle Duality) असते—तो विद्युतचुंबकीय तरंग आणि फोटॉन कण दोन्ही आहे, निर्वातातून (3 × 10⁸ m/s वेगाने) प्रवास करतो आणि उत्सर्जनातून ऊर्जा देतो. म्हणून सर्व विधाने बरोबर आहेत.",
        explanationEnglish: "Light exhibits wave-particle duality (electromagnetic wave and photon particles), propagates through vacuum, and carries radiant energy from the source."
      },
      {
        qNo: 74,
        subject: "Chemistry",
        topic: "Carbon and its Compounds",
        questionMarathi: "कार्बनच्या कोणत्या गुणधर्मामुळे तो इतर कार्बन अणूंसोबत मोठी साखळी किंवा बंध तयार करू शकतो?",
        questionEnglish: "The ability of carbon to form long chains or bonds with other carbon atom is ________.",
        options: [
          { id: "1", textMarathi: "समावयवता", textEnglish: "Isomerism" },
          { id: "2", textMarathi: "शृंखला बंधन", textEnglish: "Catenation" },
          { id: "3", textMarathi: "अपरूपता", textEnglish: "Allotropy" },
          { id: "4", textMarathi: "अक्रियता", textEnglish: "Inertness" }
        ],
        correctOption: "2",
        explanationMarathi: "कार्बन अणूंनी इतर कार्बन अणूंसोबत सहसंयुज बंध (Covalent bonds) तयार करून लांब सरळ, शाखीय किंवा वलयांकित साखळ्या तयार करण्याच्या गुणधर्माला 'शृंखला बंधन' (Catenation) म्हणतात.",
        explanationEnglish: "Catenation is the self-linking property of carbon atoms through covalent bonds to form long straight, branched, or cyclic chains."
      },
      {
        qNo: 77,
        subject: "Zoology",
        topic: "Animal Classification",
        questionMarathi: "कोणत्या मृदुकाय प्राण्याला (Mollusca) प्रामुख्याने सैतान मासा (Devil Fish) म्हणून ओळखतात?",
        questionEnglish: "Which Mollusca animal is mainly known as Devil Fish?",
        options: [
          { id: "1", textMarathi: "दोन शिंपले असलेला (बायवाल)", textEnglish: "Bivalvia" },
          { id: "2", textMarathi: "दातसारखे शेल (डेटाइलम)", textEnglish: "Dentalium" },
          { id: "3", textMarathi: "अष्टपाद (ऑक्टोपस)", textEnglish: "Octopus" },
          { id: "4", textMarathi: "सफरचंद गोगलगाय (पायला ग्लोबोसा)", textEnglish: "Pila globosa" }
        ],
        correctOption: "3",
        explanationMarathi: "मृदुकाय (Mollusca) संघातील 'ऑक्टोपस' (अष्टपाद - Octopus) या प्राण्याला सामान्यतः 'डेव्हिल फिश' (Devil Fish / सैतान मासा) म्हटले जाते.",
        explanationEnglish: "Octopus (class Cephalopoda of phylum Mollusca) is commonly known as the Devil Fish."
      },
      {
        qNo: 78,
        subject: "Zoology",
        topic: "Animal Kingdom",
        questionMarathi: "खालील प्राण्यांपैकी कोणता प्राणी अंडी घालणाऱ्या सस्तन प्राण्याचे (Egg laying mammal) उदाहरण आहे?",
        questionEnglish: "Which of the following is an example of egg laying mammal?",
        options: [
          { id: "1", textMarathi: "कांगारू", textEnglish: "Kangaroo" },
          { id: "2", textMarathi: "डक-बिल्ड प्लॅटीपस", textEnglish: "Duck-billed Platypus" },
          { id: "3", textMarathi: "वटवाघूळ", textEnglish: "Bat" },
          { id: "4", textMarathi: "देवमासा", textEnglish: "Whale" }
        ],
        correctOption: "2",
        explanationMarathi: "डक-बिल्ड प्लॅटीपस (Ornithorhynchus) आणि एकिडना (Echidna) हे प्रोटोथेरिया (Monotremes) उपवर्गातील अंडी घालणारे सस्तन प्राणी आहेत.",
        explanationEnglish: "Duck-billed Platypus (and Echidna) are oviparous (egg-laying) mammals belonging to subclass Prototheria (Monotremata)."
      },
      {
        qNo: 81,
        subject: "Botany",
        topic: "Plant Diseases",
        questionMarathi: "उसावरील रेड रॉट (Red rot) हा रोग खालीलपैकी कशामुळे होतो?",
        questionEnglish: "Red rot disease of sugarcane is caused by ________.",
        options: [
          { id: "1", textMarathi: "क्लॅव्हीसेपस् परपुरीया", textEnglish: "Claviceps Purpurea" },
          { id: "2", textMarathi: "अल्टरनॅरीया पॅडविकी", textEnglish: "Alternaria Padwickii" },
          { id: "3", textMarathi: "कॉलीटोट्रायकम फल्क्याटम", textEnglish: "Colletotrichum Falcatum" },
          { id: "4", textMarathi: "वरीलपैकी सर्व", textEnglish: "All above" }
        ],
        correctOption: "3",
        explanationMarathi: "उसावरील 'रेड रॉट' (तांब्या/काजळी रोग) हा 'कॉलीटोट्रायकम फल्क्याटम' (Colletotrichum falcatum) या बुरशीमुळे (Fungus) होतो.",
        explanationEnglish: "Red rot disease of sugarcane is a fungal disease caused by Colletotrichum falcatum."
      },
      {
        qNo: 82,
        subject: "Botany",
        topic: "Plant Classification",
        questionMarathi: "\"Ophioglossum\" ही वनस्पती खालीलपैकी कोणत्या वनस्पती गटात वर्गीकरण केले जाते?",
        questionEnglish: "\"Ophioglossum\" is classified in ________ plant group.",
        options: [
          { id: "1", textMarathi: "टेरिडोफायटा", textEnglish: "Pteridophyta" },
          { id: "2", textMarathi: "ब्रायोफायटा", textEnglish: "Bryophyta" },
          { id: "3", textMarathi: "थालोफायटा", textEnglish: "Thallophyta" },
          { id: "4", textMarathi: "कोनिफरोफायटा", textEnglish: "Coniferophyta" }
        ],
        correctOption: "1",
        explanationMarathi: "ओफिओग्लोसम (Ophioglossum - Adder's tongue fern) ही 'टेरिडोफायटा' (Pteridophyta) विभागातील नेचेवर्गीय वनस्पती असून तिच्यात सजीव सृष्टीत सर्वाधिक गुणसूत्रे (2n = 1260) आढळतात.",
        explanationEnglish: "Ophioglossum (Adder's-tongue fern) is a vascular cryptogam classified under Pteridophyta (famous for having the highest chromosome number 2n = 1260)."
      },
      {
        qNo: 84,
        subject: "Remote Sensing",
        topic: "Satellite Technology",
        questionMarathi: "भूस्थिर उपग्रह (Geostationary satellite) जो दैनंदिन हवेची माहिती पुरवितो तो अवकाशात किती कि.मी. अंतरावर आहे?",
        questionEnglish: "A geostationary satellite that provides daily weather information is placed in space at how many kilometer from the earth surface?",
        options: [
          { id: "1", textMarathi: "50,000 कि.मी.", textEnglish: "50,000 km" },
          { id: "2", textMarathi: "40,450 कि.मी.", textEnglish: "40,450 km" },
          { id: "3", textMarathi: "35,786 कि.मी.", textEnglish: "35,786 km" },
          { id: "4", textMarathi: "30,330 कि.मी.", textEnglish: "30,330 km" }
        ],
        correctOption: "3",
        explanationMarathi: "भूस्थिर उपग्रह (Geostationary Satellite) पृथ्वीच्या विषुववृत्तापासून सुमारे 35,786 कि.मी. (सुमारे 36,000 km) उंचीवर स्थापित केला जातो आणि त्याचा परिभ्रमण काळ २४ तास असतो.",
        explanationEnglish: "A geostationary satellite orbits above the Earth's equator at an altitude of 35,786 km with an orbital period of 24 hours."
      },
      {
        qNo: 86,
        subject: "Remote Sensing",
        topic: "Remote Sensing Fundamentals",
        questionMarathi: "अवरक्त विभागातील (Infrared region) ऊर्जेची तरंगलांबी किती असते?",
        questionEnglish: "What is the wavelength of energy in the Infrared region?",
        options: [
          { id: "1", textMarathi: "0.5 ते 0.7 मायक्रोमीटर", textEnglish: "0.5 to 0.7 Micrometer" },
          { id: "2", textMarathi: "0.1 ते 30 सेंटीमीटर", textEnglish: "0.1 to 30 Centimeter" },
          { id: "3", textMarathi: "0.7 मायक्रोमीटर ते 01 मिलीमीटर", textEnglish: "0.7 Micrometer to 01 Millimeter" },
          { id: "4", textMarathi: "30 सेंटीमीटर पेक्षा जास्त", textEnglish: "More than 30 Centimeter" }
        ],
        correctOption: "3",
        explanationMarathi: "विद्युतचुंबकीय वर्णपटात दृश्यमान प्रकाशाची तरंगलांबी 0.4 ते 0.7 मायक्रोमीटर असते, तर अवरक्त किरणांची (Infrared) तरंगलांबी 0.7 मायक्रोमीटर ते 1 मिलीमीटर दरम्यान असते.",
        explanationEnglish: "The Infrared (IR) spectral region spans from 0.7 micrometers (μm) to 1 millimeter (mm)."
      },
      {
        qNo: 87,
        subject: "ICT",
        topic: "Internet and Networking",
        questionMarathi: "________ म्हणजे डाटा कम्युनिकेशनसच्या नियमांचा संघ आणि दोन कम्युनिकेटिंग साधनांमधील करार होय.",
        questionEnglish: "________ is a set of rules that govern data communications and it represents an agreement between communicating devices.",
        options: [
          { id: "1", textMarathi: "टेलिकम्युनिकेशन", textEnglish: "Telecommunication" },
          { id: "2", textMarathi: "ट्रान्समिशन मिडियम", textEnglish: "Transmission medium" },
          { id: "3", textMarathi: "प्रोटोकॉल", textEnglish: "Protocol" },
          { id: "4", textMarathi: "केबल्स", textEnglish: "Cables" }
        ],
        correctOption: "3",
        explanationMarathi: "नेटवर्कमध्ये डेटाची देवाणघेवाण करण्यासाठी ठरवून दिलेल्या नियमांच्या संचाला 'प्रोटोकॉल' (Protocol उदा. TCP/IP, HTTP) म्हणतात.",
        explanationEnglish: "A network Protocol is a formal set of rules and conventions that govern data communication between devices."
      },
      {
        qNo: 89,
        subject: "ICT",
        topic: "Internet and Networking",
        questionMarathi: "कम्प्यूटर नेटवर्क व्यवस्थापनासाठी खालीलपैकी कोणता प्रोटोकॉल वापरला जातो?",
        questionEnglish: "Which of the following protocol is used for computer network management?",
        options: [
          { id: "1", textMarathi: "FTP", textEnglish: "FTP" },
          { id: "2", textMarathi: "HTTP", textEnglish: "HTTP" },
          { id: "3", textMarathi: "SMTP", textEnglish: "SMTP" },
          { id: "4", textMarathi: "SNMP", textEnglish: "SNMP" }
        ],
        correctOption: "4",
        explanationMarathi: "SNMP (Simple Network Management Protocol) हा संगणक नेटवर्कवरील राउटर्स, स्विचेस आणि सर्व्हर्सच्या व्यवस्थापनासाठी व निरीक्षणासाठी वापरला जातो.",
        explanationEnglish: "SNMP (Simple Network Management Protocol) is an application-layer protocol used for monitoring and managing network devices."
      }
    ]
  },

  // ======================== 2025 EXAM CYCLE PAPERS ========================
  {
    id: "paper-2025-g25",
    examCycleYear: "2025",
    bookletCode: "G25 ( & F25 )",
    examTitleMarathi: "महाराष्ट्र गट-क सेवा मुख्य परीक्षा 2025 (पेपर क्र. 2 - G25 व पेपर क्र. 1 - F25)",
    examTitleEnglish: "MPSC Group-C Services Mains 2025 (Paper II - G25 & Paper I - F25)",
    examDate: "12 जुलै 2026 (12 July 2026)",
    totalPaperQuestions: 200,
    totalMarks: 400,
    paperType: "GS, Science, Remote Sensing & ICT (Q62, Q71–Q90)",
    pdfFileName: "MPSC_GroupC_Mains_2025_Paper2_G25_F25.pdf",
    questions: [
      {
        qNo: 71,
        subject: "Physics",
        topic: "Mirrors and Lenses",
        questionMarathi: "योग्य विधाने निवडा: (अ) मानवी डोळ्यातील पारदर्शक स्फटीकमय भिंग हे दुहेरी अंतर्वक्र भिंग असते. (ब) ते वास्तविक आणि उलटी प्रतिमा तयार करते. (क) मानवी डोळ्यातील पारदर्शक स्फटीकमय भिंग हे दुहेरी बहिर्वक्र भिंग असते. (ड) ते आभासी व सरळ प्रतिमा तयार करते.",
        questionEnglish: "Choose the correct statements: a. Human eye is double concave lens, b. It creates real and inverted image, c. Human eye is double convex transparent crystalline lens, d. It creates virtual and erect image.",
        options: [
          { id: "1", textMarathi: "अ आणि ड", textEnglish: "a and d" },
          { id: "2", textMarathi: "अ आणि ब", textEnglish: "a and b" },
          { id: "3", textMarathi: "क आणि ब", textEnglish: "c and b" },
          { id: "4", textMarathi: "क आणि ड", textEnglish: "c and d" }
        ],
        correctOption: "3",
        explanationMarathi: "मानवी डोळ्यातील भिंग हे 'दुहेरी बहिर्वक्र' (Double convex crystalline lens - क) असते आणि ते दृष्टिपटलावर (Retina वर) वस्तूची 'वास्तविक आणि उलटी' (Real and inverted - ब) प्रतिमा तयार करते.",
        explanationEnglish: "The human eye lens is a biconvex (double convex) crystalline lens (c) that forms a real and inverted image on the retina (b)."
      },
      {
        qNo: 72,
        subject: "Physics",
        topic: "Radioactivity",
        questionMarathi: "खालीलपैकी कोणत्या प्रकारचे किरणोत्सर्गी क्षय (Radioactive decay) निसर्गात आढळतात?",
        questionEnglish: "Which of the following types of radioactive decay occur in nature?",
        options: [
          { id: "1", textMarathi: "α-क्षय ज्यामध्ये हेलियम केंद्रक उत्सर्जित होते", textEnglish: "α-decay in which a helium nucleus is emitted" },
          { id: "2", textMarathi: "β-क्षय ज्यामध्ये इलेक्ट्रॉन्स किंवा पॉझिट्रॉन्स उत्सर्जित होतात", textEnglish: "β-decay in which electrons or positrons are emitted" },
          { id: "3", textMarathi: "γ-क्षय ज्यामध्ये उच्च ऊर्जा फोटॉन्स उत्सर्जित होतात", textEnglish: "γ-decay in which high energy photons are emitted" },
          { id: "4", textMarathi: "यापैकी सर्व", textEnglish: "All of these" }
        ],
        correctOption: "4",
        explanationMarathi: "निसर्गात अल्फा (α), बीटा (β) आणि गॅमा (γ) हे तिन्ही प्रकारचे किरणोत्सर्गी क्षय आढळतात.",
        explanationEnglish: "Alpha (α), Beta (β), and Gamma (γ) decays all occur in natural radioactive disintegration."
      },
      {
        qNo: 73,
        subject: "Physics",
        topic: "Light, Reflection and Refraction",
        questionMarathi: "प्रकाशाच्या तरंगलांबीमध्ये वाढ झाल्यास माध्यमाचा अपवर्तनांक सामान्यतः ________.",
        questionEnglish: "The refractive index of a medium generally ________ as the wavelength of light increases.",
        options: [
          { id: "1", textMarathi: "वाढतो", textEnglish: "Increases" },
          { id: "2", textMarathi: "कमी होतो", textEnglish: "Decreases" },
          { id: "3", textMarathi: "स्थिर राहतो", textEnglish: "Remains constant" },
          { id: "4", textMarathi: "शून्य होतो", textEnglish: "Becomes zero" }
        ],
        correctOption: "2",
        explanationMarathi: "कॉशीच्या सूत्रानुसार (Cauchy's dispersion formula) माध्यमाचा अपवर्तनांक हा प्रकाशाच्या तरंगलांबीच्या व्यस्तानुपाती असतो (μ ∝ 1/λ²). म्हणून तरंगलांबी वाढल्यास अपवर्तनांक 'कमी होतो'.",
        explanationEnglish: "By Cauchy's relation, refractive index decreases as wavelength increases (red light has a longer wavelength and lower refractive index than violet light)."
      },
      {
        qNo: 74,
        subject: "Chemistry",
        topic: "Metals and Non-metals",
        questionMarathi: "धातू त्याच्या धातुखनिजापासून वेगळे करण्याच्या प्रक्रियेला ________ म्हणतात.",
        questionEnglish: "The process of isolating metals from their ore is called as ________.",
        options: [
          { id: "1", textMarathi: "स्फटिकीकरण", textEnglish: "Crystallization" },
          { id: "2", textMarathi: "अवसादन", textEnglish: "Sedimentation" },
          { id: "3", textMarathi: "बहुलकीकरण", textEnglish: "Polymerisation" },
          { id: "4", textMarathi: "धातुशास्त्र", textEnglish: "Metallurgy" }
        ],
        correctOption: "4",
        explanationMarathi: "धातुकांपासून (Ores पासून) धातूंचे निष्कर्षण आणि शुद्धीकरण करण्याच्या वैज्ञानिक व तांत्रिक प्रक्रियेला 'धातुशास्त्र' (Metallurgy) म्हणतात.",
        explanationEnglish: "Metallurgy is the scientific and technological process of extracting metals from their ores and refining them."
      },
      {
        qNo: 75,
        subject: "Chemistry",
        topic: "Chemical Reactions",
        questionMarathi: "विद्युत विच्छेदन (Electrolysis) प्रक्रियेमध्ये कोणते वाक्य बरोबर आहे? (अ) रासायनिक शक्तीचे विद्युत शक्तीत रूपांतर करते, (ब) विद्युत शक्ती ही उत्स्फूर्त प्रक्रियेसाठी वापरली जाते, (क) विद्युत शक्ती ही अउत्स्फूर्त (non-spontaneous) प्रक्रियेसाठी वापरली जाते.",
        questionEnglish: "Which of the following statement/s is/are correct in the process of electrolysis? a. Chemical energy is converted into electrical energy, b. Electrical energy is used for spontaneous reactions, c. Electrical energy is used to carry out non-spontaneous reactions.",
        options: [
          { id: "1", textMarathi: "फक्त अ आणि ब", textEnglish: "Only a and b" },
          { id: "2", textMarathi: "फक्त अ आणि क", textEnglish: "Only a and c" },
          { id: "3", textMarathi: "फक्त क", textEnglish: "Only c" },
          { id: "4", textMarathi: "फक्त अ आणि ड", textEnglish: "Only a and d" }
        ],
        correctOption: "3",
        explanationMarathi: "विद्युत विच्छेदन (Electrolysis) प्रक्रियेत बाह्य विद्युत ऊर्जेचा वापर करून अउत्स्फूर्त (Non-spontaneous) रासायनिक अभिक्रिया घडवून आणली जाते (म्हणजेच विद्युत शक्तीचे रासायनिक शक्तीत रूपांतर होते). म्हणून फक्त (क) बरोबर आहे.",
        explanationEnglish: "In electrolysis, electrical energy is used to drive a non-spontaneous chemical reaction (converting electrical energy into chemical energy)."
      },
      {
        qNo: 76,
        subject: "Chemistry",
        topic: "Periodic Table",
        questionMarathi: "आधुनिक आवर्त नियमानुसार, मूलद्रव्यांचे भौतिक आणि रासायनिक गुणधर्म ही ________ ची आवर्ती कार्ये आहेत.",
        questionEnglish: "According to the modern periodic law, the physical and chemical properties of elements are periodic functions of their ________.",
        options: [
          { id: "1", textMarathi: "अणूभार", textEnglish: "Atomic weights" },
          { id: "2", textMarathi: "न्युट्रॉनची संख्या", textEnglish: "Number of neutrons" },
          { id: "3", textMarathi: "अणूक्रमांक", textEnglish: "Atomic numbers" },
          { id: "4", textMarathi: "अणू वस्तुमान", textEnglish: "Nuclear mass" }
        ],
        correctOption: "3",
        explanationMarathi: "हेन्री मोस्ले (१९१३) यांच्या आधुनिक आवर्त नियमानुसार मूलद्रव्यांचे भौतिक व रासायनिक गुणधर्म हे त्यांच्या 'अणुक्रमांकाचे' (Atomic Numbers - Z) आवर्ती फल असतात.",
        explanationEnglish: "Henry Moseley's Modern Periodic Law states that the physical and chemical properties of elements are periodic functions of their Atomic Numbers (Z)."
      },
      {
        qNo: 78,
        subject: "Zoology",
        topic: "Animal Classification",
        questionMarathi: "सरपटणाऱ्या प्राण्यांच्या अभ्यासास ________ संबोधतात.",
        questionEnglish: "Reptilian study is known as ________.",
        options: [
          { id: "1", textMarathi: "ओरनिथोलॉजी", textEnglish: "Ornithology" },
          { id: "2", textMarathi: "हर्पेटोलॉजी", textEnglish: "Herpetology" },
          { id: "3", textMarathi: "ऑस्टियोलॉजी", textEnglish: "Osteology" },
          { id: "4", textMarathi: "इक्थिओलॉजी", textEnglish: "Ichthyology" }
        ],
        correctOption: "2",
        explanationMarathi: "सरपटणारे प्राणी (Reptiles) व उभयचर प्राण्यांच्या अभ्यासास 'हर्पेटोलॉजी' (Herpetology) म्हणतात (पक्षी = Ornithology, हाडे = Osteology, मासे = Ichthyology).",
        explanationEnglish: "Herpetology is the branch of zoology concerned with the study of reptiles and amphibians."
      },
      {
        qNo: 79,
        subject: "Zoology",
        topic: "Animal Kingdom",
        questionMarathi: "हायड्राच्या नेमाटोसिस्टमध्ये (Nematocysts) असलेले विषारी द्रव म्हणजे ________.",
        questionEnglish: "Poisonous fluid present in the nematocysts of hydra is ________.",
        options: [
          { id: "1", textMarathi: "टॉक्सिन", textEnglish: "Toxin" },
          { id: "2", textMarathi: "हिपनोटॉक्सिन", textEnglish: "Hypnotoxin" },
          { id: "3", textMarathi: "विष", textEnglish: "Venom" },
          { id: "4", textMarathi: "हेमॅटिन", textEnglish: "Haematin" }
        ],
        correctOption: "2",
        explanationMarathi: "हायड्राच्या दंशपेशींमधील (Cnidoblasts / Nematocysts) विषारी द्रवाला 'हिपनोटॉक्सिन' (Hypnotoxin) म्हणतात, जे भक्ष्याला लुळे (Paralyze) करते.",
        explanationEnglish: "The stinging capsules (nematocysts) of Hydra contain a neurotoxic/paralytic fluid called Hypnotoxin."
      },
      {
        qNo: 81,
        subject: "Botany",
        topic: "Plant Diseases",
        questionMarathi: "________ हे बोर्डो मिश्रणामध्ये (Bordeaux mixture) वापरत नाहीत.",
        questionEnglish: "________ is not a component of Bordeaux mixture.",
        options: [
          { id: "1", textMarathi: "कॉपर सल्फेट", textEnglish: "Copper sulphate" },
          { id: "2", textMarathi: "चुना/चुनकळी", textEnglish: "Lime" },
          { id: "3", textMarathi: "सोडीयम सल्फेट", textEnglish: "Sodium sulphate" },
          { id: "4", textMarathi: "पाणी", textEnglish: "Water" }
        ],
        correctOption: "3",
        explanationMarathi: "बोर्डो मिश्रण (शोध: मिलार्डेट) हे एक प्रसिद्ध बुरशीनाशक असून त्यात मोरचूद (Copper sulphate - CuSO₄), चुना (Lime - Ca(OH)₂) आणि पाणी असते; त्यात सोडियम सल्फेट वापरले जात नाही.",
        explanationEnglish: "Bordeaux mixture fungicide consists of Copper sulphate (CuSO₄), Slaked lime, and Water. Sodium sulphate is not used."
      },
      {
        qNo: 85,
        subject: "Remote Sensing",
        topic: "Remote Sensing Fundamentals",
        questionMarathi: "खालीलपैकी कोणत्या प्रकारचा रिझोल्यूशन रिमोट सेन्सींग सेन्सरद्वारे शोधता येणारी सर्वात लहान वस्तू (object) निश्चित करतो?",
        questionEnglish: "Which of the following types of resolution determines the smallest object that can be detected by a remote sensing sensor?",
        options: [
          { id: "1", textMarathi: "टेम्पोरल रिझोल्यूशन", textEnglish: "Temporal resolution" },
          { id: "2", textMarathi: "स्पेक्ट्रल रिझोल्यूशन", textEnglish: "Spectral resolution" },
          { id: "3", textMarathi: "रेडिओमेट्रीक रिझोल्यूशन", textEnglish: "Radiometric resolution" },
          { id: "4", textMarathi: "स्पेशियल रिझोल्यूशन", textEnglish: "Spatial resolution" }
        ],
        correctOption: "4",
        explanationMarathi: "स्पेशियल रिझोल्यूशन (Spatial Resolution / क्षेत्रीय विभेदन) हे उपग्रह सेन्सरद्वारे जमिनीवरील ओळखता येणाऱ्या सर्वात लहान घटकाचा (Pixel आकाराचा) आकार निश्चित करते.",
        explanationEnglish: "Spatial resolution defines the pixel size on the ground and determines the smallest object that can be resolved by a remote sensing sensor."
      },
      {
        qNo: 87,
        subject: "ICT",
        topic: "Cyber Security",
        questionMarathi: "CIA's ट्राएड सिक्युरिटी पॅराडाइम नुसार अक्षर 'I' चा अर्थ ________ आहे.",
        questionEnglish: "According to CIA's triad security paradigm, the letter 'I' stands for ________.",
        options: [
          { id: "1", textMarathi: "इन्फॉर्मेशन", textEnglish: "Information" },
          { id: "2", textMarathi: "इंटेग्रिटी", textEnglish: "Integrity" },
          { id: "3", textMarathi: "इंटिग्रेशन", textEnglish: "Integration" },
          { id: "4", textMarathi: "इनोवेशन", textEnglish: "Innovation" }
        ],
        correctOption: "2",
        explanationMarathi: "सायबर सुरक्षेतील 'CIA Triad' मध्ये C = Confidentiality (गोपनीयता), I = Integrity (अखंडता/अचूकता), आणि A = Availability (उपलब्धता) असा अर्थ होतो.",
        explanationEnglish: "In the Cyber Security CIA Triad, C stands for Confidentiality, I stands for Integrity, and A stands for Availability."
      },
      {
        qNo: 90,
        subject: "ICT",
        topic: "Digital Technology",
        questionMarathi: "IoT चा अर्थ ________ आहे.",
        questionEnglish: "IoT stands for ________.",
        options: [
          { id: "1", textMarathi: "Internet of Things", textEnglish: "Internet of Things" },
          { id: "2", textMarathi: "Intranet of Things", textEnglish: "Intranet of Things" },
          { id: "3", textMarathi: "Internet of Thinks", textEnglish: "Internet of Thinks" },
          { id: "4", textMarathi: "Intranet of Thinks", textEnglish: "Intranet of Thinks" }
        ],
        correctOption: "1",
        explanationMarathi: "IoT चे पूर्ण रूप 'Internet of Things' असे आहे, ज्यामध्ये दैनंदिन उपकरणे सेन्सर्स व इंटरनेटद्वारे एकमेकांशी जोडलेली असतात.",
        explanationEnglish: "IoT stands for Internet of Things."
      }
    ]
  },
  {
    id: "paper-2025-a25",
    examCycleYear: "2025",
    bookletCode: "A25 ( & Z24 )",
    examTitleMarathi: "महाराष्ट्र गट-ब (अराजपत्रित) सेवा संयुक्त (मुख्य) परीक्षा 2025 (पेपर क्र. 2 - A25 व पेपर क्र. 1 - Z24)",
    examTitleEnglish: "MPSC Group-B (Non-Gazetted) Combined Mains 2025 (Paper II - A25 & Paper I - Z24)",
    examDate: "17 मे 2026 (17 May 2026)",
    totalPaperQuestions: 200,
    totalMarks: 400,
    paperType: "GS, Science, Remote Sensing & ICT (Q71–Q90)",
    pdfFileName: "MPSC_GroupB_Mains_2025_Paper2_A25_Z24.pdf",
    questions: [
      {
        qNo: 71,
        subject: "Physics",
        topic: "Electricity and Magnetism",
        questionMarathi: "खालील विधानांचा विचार करा: (a) धातूंची प्रतिरोधकता ही वाढत्या तापमानानुसार वाढते. (b) अणू अधिक वेगाने आणि अधिक अंतरापर्यंत उच्च विस्तारासह कंपन करतात ज्यामुळे इलेक्ट्रॉन व अणूंच्या टकरींची वारंवारिता वाढते.",
        questionEnglish: "Consider the statements: (a) Resistivity of metals increases with increasing temperature. (b) The atoms vibrate more rapidly and with higher amplitude; as a result, electrons collide more frequently with atoms.",
        options: [
          { id: "1", textMarathi: "दोन्ही विधाने बरोबर आहेत परंतु (b) हे (a) चे योग्य स्पष्टीकरण नाही.", textEnglish: "Both statements are correct but (b) is not the correct explanation of (a)." },
          { id: "2", textMarathi: "दोन्ही विधाने बरोबर आहेत व (b) हे (a) चे योग्य स्पष्टीकरण आहे.", textEnglish: "Both statements are correct and (b) is the correct explanation of (a)." },
          { id: "3", textMarathi: "विधान (a) सत्य आहे पण (b) हे चुकीचे आहे.", textEnglish: "Statement (a) is correct but (b) is wrong." },
          { id: "4", textMarathi: "विधान (b) सत्य आहे पण (a) हे चुकीचे आहे.", textEnglish: "Statement (b) is correct but (a) is wrong." }
        ],
        correctOption: "2",
        explanationMarathi: "धातूंचे तापमान वाढल्यास धातूमधील आयनांचे औष्णिक कंपन वाढते आणि मुक्त इलेक्ट्रॉन्सच्या धडका (Collisions) वाढतात; त्यामुळे धातूंची प्रतिरोधकता (Resistivity) वाढते. म्हणून (a) व (b) दोन्ही बरोबर असून (b) हे (a) चे अचूक कारण आहे.",
        explanationEnglish: "In metallic conductors, increasing temperature increases thermal agitation of lattice ions, increasing electron collision frequency and thereby increasing resistivity."
      },
      {
        qNo: 72,
        subject: "Physics",
        topic: "Radioactivity",
        questionMarathi: "खालील विधानांपैकी योग्य उत्तर निवडा: (a) किरणोत्सार मोजण्यासाठी क्युरी (Ci) हे एकक वापरले जाते. (b) किरणोत्सारी केंद्रकांचे अर्धआयुष्य मोजण्यासाठी 'मीटर' हे एकक आहे. (c) सूर्यावर हायड्रोजनच्या विखंडनामुळे (fission) ऊर्जा तयार होते. (d) गॅमा कणांवर ऋण भार असतो.",
        questionEnglish: "Choose the correct answer: (a) Unit of measurement of radioactivity is Curie (Ci). (b) Half-life is measured in meter. (c) Energy in Sun is due to fission. (d) Gamma particles have negative charge.",
        options: [
          { id: "1", textMarathi: "फक्त चौथे (d) विधान सत्य आहे.", textEnglish: "Only (d) statement is true." },
          { id: "2", textMarathi: "फक्त पहिले (a) विधान सत्य आहे.", textEnglish: "Only (a) statement is true." },
          { id: "3", textMarathi: "पहिले (a), दुसरे (b), तिसरे (c) विधाने सत्य आहेत.", textEnglish: "(a), (b), (c) statements are true." },
          { id: "4", textMarathi: "वरील सर्व विधाने सत्य आहेत.", textEnglish: "All statements are true." }
        ],
        correctOption: "2",
        explanationMarathi: "फक्त विधान (a) सत्य आहे! कारण अर्धआयुष्य 'काळात' (सेकंद/दिवस/वर्षे) मोजतात, सूर्यावर केंद्रकीय 'संमीलन' (Nuclear Fusion) होते, आणि गॅमा किरणे पूर्णपणे प्रभाररहित (Neutral) असतात.",
        explanationEnglish: "Only (a) is true (1 Ci = 3.7 × 10¹⁰ decays/s). Half-life is measured in time units, solar energy is due to nuclear fusion, and gamma rays are uncharged."
      },
      {
        qNo: 73,
        subject: "Physics",
        topic: "Sound and Waves",
        questionMarathi: "खालीलपैकी कोणता तरंग हा अवतरंग (Transverse) नाही आणि अनुतरंग (Longitudinal) ही नाही?",
        questionEnglish: "Which of the following wave is neither transverse nor longitudinal?",
        options: [
          { id: "1", textMarathi: "ध्वनीतरंग", textEnglish: "Sound wave" },
          { id: "2", textMarathi: "प्रकाशतरंग", textEnglish: "Light wave" },
          { id: "3", textMarathi: "स्वनातीत तरंग", textEnglish: "Ultra-sound wave" },
          { id: "4", textMarathi: "पाण्याच्या पृष्ठभागावरील तरंग", textEnglish: "Wave on water surface" }
        ],
        correctOption: "4",
        explanationMarathi: "पाण्याच्या पृष्ठभागावरील तरंग (Water surface waves) हे केवळ अवतरंग किंवा केवळ अनुतरंग नसून ते दोन्ही प्रकारच्या तरंगांचे मिश्रण (Combined transverse and longitudinal - जागेवर वर्तुळाकार/लंबवर्तुळाकार गती) असतात.",
        explanationEnglish: "Surface water waves are neither purely transverse nor purely longitudinal; water particles move in circular/elliptical orbits combining both motions."
      },
      {
        qNo: 76,
        subject: "Chemistry",
        topic: "Periodic Table",
        questionMarathi: "आपण एका आवर्तात डावीकडून उजवीकडे जाताना अणू त्रिज्येमध्ये सामान्य घट होण्याचे प्राथमिक कारण काय आहे?",
        questionEnglish: "What is the primary reason for general decrease in atomic radius as you move from left to right across a period?",
        options: [
          { id: "1", textMarathi: "मुख्य ऊर्जा पातळीच्या संख्येत वाढ", textEnglish: "Increase in the number of principal energy levels" },
          { id: "2", textMarathi: "प्रभावी अणूप्रभारात वाढ", textEnglish: "Increase in the effective nuclear charge" },
          { id: "3", textMarathi: "आतील इलेक्ट्रॉनच्या परिरक्षण प्रभावात वाढ", textEnglish: "Increase in shielding effect of inner electrons" },
          { id: "4", textMarathi: "केंद्रकातील प्रोटॉनची संख्या कमी होणे", textEnglish: "Decrease in the number of protons in the nucleus" }
        ],
        correctOption: "2",
        explanationMarathi: "आवर्तात डावीकडून उजवीकडे जाताना नवीन इलेक्ट्रॉन त्याच बाह्य कक्षेत जोडले जातात व केंद्रकातील धन प्रभार (प्रभावी अणूप्रभार - Effective Nuclear Charge) वाढल्यामुळे बाह्य कक्षा केंद्रकाकडे खेचली जाऊन अणुत्रिज्या कमी होते.",
        explanationEnglish: "Across a period from left to right, the effective nuclear charge (Z_eff) increases while electrons are added to the same valence shell, pulling the shell closer and reducing atomic radius."
      },
      {
        qNo: 78,
        subject: "Zoology",
        topic: "Animal Classification",
        questionMarathi: "खालील जोड्या जुळवा (माशाचे नाव व सामान्य नाव): (a) हिप्पोकॅम्पस, (b) एक्सोसोटस, (c) सिग्ननाथस, (d) फिस्टुलेरिया — (i) पाईप फिश, (ii) बासरी मासा, (iii) उडणारा मासा, (iv) सागरी घोडा",
        questionEnglish: "Match the following: (a) Hippocampus, (b) Exocoetus, (c) Syngnathus, (d) Fistularia — (i) Pipe fish, (ii) Flute fish, (iii) Flying fish, (iv) Sea Horse",
        options: [
          { id: "1", textMarathi: "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)", textEnglish: "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)" },
          { id: "2", textMarathi: "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)", textEnglish: "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)" },
          { id: "3", textMarathi: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", textEnglish: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)" },
          { id: "4", textMarathi: "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)", textEnglish: "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)" }
        ],
        correctOption: "1",
        explanationMarathi: "Hippocampus = सागरी घोडा (Sea Horse - iv), Exocoetus = उडणारा मासा (Flying fish - iii), Syngnathus = पाईप फिश (Pipe fish - i), Fistularia = बासरी मासा (Flute fish - ii).",
        explanationEnglish: "Hippocampus is Sea Horse (iv), Exocoetus is Flying fish (iii), Syngnathus is Pipe fish (i), and Fistularia is Flute fish (ii)."
      },
      {
        qNo: 80,
        subject: "Botany",
        topic: "Plant Classification",
        questionMarathi: "आंबा या वनस्पतीचे शास्त्रीय नाव काय आहे?",
        questionEnglish: "What is the scientific name of the mango plant?",
        options: [
          { id: "1", textMarathi: "मुसा सँक्टम", textEnglish: "Musa sanctum" },
          { id: "2", textMarathi: "ऑसिमम सँक्टम", textEnglish: "Ocimum sanctum" },
          { id: "3", textMarathi: "मँजीफेरा इंडिका", textEnglish: "Mangifera indica" },
          { id: "4", textMarathi: "रोझा गॅलिका", textEnglish: "Rosa gallica" }
        ],
        correctOption: "3",
        explanationMarathi: "आंब्याचे द्विनाम पद्धतीनुसार शास्त्रीय नाव 'मँजीफेरा इंडिका' (Mangifera indica) आहे (तुळस = Ocimum sanctum).",
        explanationEnglish: "The binomial scientific name of Mango is Mangifera indica."
      },
      {
        qNo: 83,
        subject: "Remote Sensing",
        topic: "GPS",
        questionMarathi: "मूलभूत जी.पी.एस. (GPS) डिझाईन मध्ये असलेल्या कोडपैकी कोणता कोड सहसा लष्करी उपयोगासाठी राखीव असतो?",
        questionEnglish: "Which of the code in the basic GPS design is usually reserved for military use?",
        options: [
          { id: "1", textMarathi: "कोर्स/अॅक्विझिशन कोड (C/A)", textEnglish: "Course/Acquisition Code (C/A)" },
          { id: "2", textMarathi: "प्रिसिजन कोड (P)", textEnglish: "Precision Code (P)" },
          { id: "3", textMarathi: "स्यूडोरँडम नॉईज कोड (PRN)", textEnglish: "Pseudorandom Noise Code (PRN)" },
          { id: "4", textMarathi: "मोड्यूलेट W कोड", textEnglish: "Modulate W Code" }
        ],
        correctOption: "2",
        explanationMarathi: "GPS प्रणालीमध्ये C/A (Coarse/Acquisition) कोड हा सामान्य नागरी वापरासाठी असतो, तर अधिक अचूक असलेला 'प्रिसिजन कोड' [P(Y) Code] हा लष्करी (Military) उपयोगासाठी राखीव असतो.",
        explanationEnglish: "In GPS, the Coarse/Acquisition (C/A) code is for civilian users, whereas the encrypted Precision Code [P(Y) code] is reserved for authorized military use."
      },
      {
        qNo: 87,
        subject: "ICT",
        topic: "Cloud Computing",
        questionMarathi: "Cloud Computing मध्ये कोणते सेवा मॉडेल वापरकर्त्यांना Virtual machine मध्ये थेट प्रवेश प्रदान करते जिथे ते आवश्यकतेनुसार कोणतीही Operating System किंवा Software चालवू शकतात?",
        questionEnglish: "In cloud computing which service model provides users with direct access to virtual machines where they can run any operating system or software as needed?",
        options: [
          { id: "1", textMarathi: "SaaS (Software as a Service)", textEnglish: "SaaS (Software as a Service)" },
          { id: "2", textMarathi: "PaaS (Platform as a Service)", textEnglish: "PaaS (Platform as a Service)" },
          { id: "3", textMarathi: "IaaS (Infrastructure as a Service)", textEnglish: "IaaS (Infrastructure as a Service)" },
          { id: "4", textMarathi: "DaaS (Data as a Service)", textEnglish: "DaaS (Data as a Service)" }
        ],
        correctOption: "3",
        explanationMarathi: "IaaS (Infrastructure as a Service) या क्लाउड मॉडेलमध्ये वापरकर्त्यांना थेट Virtual Machines, सर्व्हर आणि स्टोरेज मिळते ज्यावर ते स्वतःची Operating System व सॉफ्टवेअर चालवू शकतात.",
        explanationEnglish: "IaaS (Infrastructure as a Service, e.g., AWS EC2, Google Compute Engine) provides virtualized computing infrastructure and VMs where users control the OS and software."
      },
      {
        qNo: 89,
        subject: "ICT",
        topic: "Hardware and Software",
        questionMarathi: "________ याला सॉफ्टवेअर डिबगिंग (Software debugging) म्हणून ओळखले जाते.",
        questionEnglish: "Software debugging is known as ________.",
        options: [
          { id: "1", textMarathi: "संगणकीकृत करण्याचे कार्य ओळखणे", textEnglish: "identifying the task to be computerized" },
          { id: "2", textMarathi: "प्रोग्राम कोड तयार करणे", textEnglish: "creating program code" },
          { id: "3", textMarathi: "अल्गोरिदम तयार करणे", textEnglish: "creating algorithm" },
          { id: "4", textMarathi: "प्रोग्राम कोडमधील त्रुटी शोधणे आणि दुरूस्त करणे", textEnglish: "finding and correcting errors in the program code" }
        ],
        correctOption: "4",
        explanationMarathi: "संगणक प्रोग्राममधील दोष किंवा त्रुटींना 'बग' (Bug) म्हणतात आणि त्या त्रुटी शोधून दुरुस्त करण्याच्या प्रक्रियेला 'डिबगिंग' (Debugging) म्हणतात.",
        explanationEnglish: "Software debugging is the process of finding, analyzing, and fixing bugs (errors or defects) in computer program code."
      },
      {
        qNo: 90,
        subject: "ICT",
        topic: "Internet and Networking",
        questionMarathi: "IP address version-4 (IPv4) मध्ये किती बिटस् असतात?",
        questionEnglish: "How many bits are present in IP address of version-4 (IPv4)?",
        options: [
          { id: "1", textMarathi: "128 बिटस्", textEnglish: "128 bits" },
          { id: "2", textMarathi: "64 बिटस्", textEnglish: "64 bits" },
          { id: "3", textMarathi: "256 बिटस्", textEnglish: "256 bits" },
          { id: "4", textMarathi: "32 बिटस्", textEnglish: "32 bits" }
        ],
        correctOption: "4",
        explanationMarathi: "IPv4 पत्ता हा 32 बिट्सचा (4 Bytes) असतो, तर IPv6 पत्ता हा 128 बिट्सचा असतो.",
        explanationEnglish: "An IPv4 address consists of 32 bits (4 octets), whereas IPv6 consists of 128 bits."
      }
    ]
  },
  {
    id: "paper-2025-p21",
    examCycleYear: "2025",
    bookletCode: "P21",
    examTitleMarathi: "महाराष्ट्र गट-क सेवा संयुक्त पूर्व परीक्षा 2025",
    examTitleEnglish: "MPSC Group-C Combined Prelims 2025",
    examDate: "11 जानेवारी 2026 (11 January 2026)",
    totalPaperQuestions: 100,
    totalMarks: 100,
    paperType: "GS & General Science (Q11, Q48, Q50, Q66–Q80)",
    pdfFileName: "MPSC_GroupC_Prelims_2025_P21.pdf",
    questions: [
      {
        qNo: 50,
        subject: "Remote Sensing",
        topic: "ISRO Missions",
        questionMarathi: "खालीलपैकी योग्य कथन/ने ओळखा: (अ) निसार (नासा-इस्त्रो सिंथेटिक एपर्चर रडार) मिशन हा इस्त्रो आणि नासा यांचा संयुक्त प्रकल्प आहे. (ब) निसार मिशनचे प्राथमिक उद्दिष्ट हे भूमी आणि बर्फाचे विकृतीकरण, भूमी परिसंस्था, महासागरीय प्रदेशांचे अध्ययन करणे हे आहे.",
        questionEnglish: "Select the correct statement/s: A. NISAR (NASA-ISRO Synthetic Aperture Radar) Mission is joint project between ISRO and NASA. B. NISAR Mission's primary objectives are to study land and ice deformation, land ecosystems and oceanic regions.",
        options: [
          { id: "1", textMarathi: "फक्त अ", textEnglish: "Only A" },
          { id: "2", textMarathi: "फक्त ब", textEnglish: "Only B" },
          { id: "3", textMarathi: "अ व ब दोन्हीही", textEnglish: "Both A and B" },
          { id: "4", textMarathi: "वरीलपैकी एकही नाही", textEnglish: "None of the above" }
        ],
        correctOption: "3",
        explanationMarathi: "NISAR (NASA-ISRO Synthetic Aperture Radar) हा जगातील पहिला ड्युअल-फ्रीक्वेन्सी (L-band आणि S-band) रडार इमेजिंग उपग्रह प्रकल्प असून तो पृथ्वीच्या कवचाची हालचाल, हिमनद्या, वने व महासागरांचा अभ्यास करतो. म्हणून (अ) व (ब) दोन्ही बरोबर आहेत.",
        explanationEnglish: "Both A and B are correct. NISAR is a joint Earth-observing mission between NASA (L-band SAR) and ISRO (S-band SAR)."
      },
      {
        qNo: 67,
        subject: "Physics",
        topic: "Electricity and Magnetism",
        questionMarathi: "एका घरामध्ये एक 100 W क्षमतेचा पंखा दररोज 10 तास चालवला जातो, दोन 50 W क्षमतेचे बल्ब दररोज पाच तास चालवले जातात. जर विजेचा दर प्रति युनिट (kWh) 5 रूपये असेल तर 30 दिवसांसाठी महिन्याचे वीजबील किती रूपये येईल?",
        questionEnglish: "A house uses 1 fan of 100 W for 10 hours/day, 2 bulbs of 50 W each 5 hours/day. If electricity costs ₹ 5 per unit (kWh), calculate the monthly electricity bill for 30 days.",
        options: [
          { id: "1", textMarathi: "150 रूपये", textEnglish: "₹ 150" },
          { id: "2", textMarathi: "225 रूपये", textEnglish: "₹ 225" },
          { id: "3", textMarathi: "300 रूपये", textEnglish: "₹ 300" },
          { id: "4", textMarathi: "375 रूपये", textEnglish: "₹ 375" }
        ],
        correctOption: "2",
        explanationMarathi: "पायरी १: पंख्याची दैनंदिन ऊर्जा = 100 W × 10 तास = 1000 Wh = 1 युनिट (kWh).\nपायरी २: २ बल्बची दैनंदिन ऊर्जा = 2 × 50 W × 5 तास = 500 Wh = 0.5 युनिट.\nपायरी ३: एका दिवसाचे एकूण युनिट = 1 + 0.5 = 1.5 युनिट. ३० दिवसांचे एकूण युनिट = 1.5 × 30 = 45 युनिट्स.\nपायरी ४: एकूण वीजबील = 45 युनिट्स × ₹5 = **₹ 225**!",
        explanationEnglish: "Daily energy = (100W × 10h) + (2 × 50W × 5h) = 1000 Wh + 500 Wh = 1.5 kWh/day. For 30 days = 45 kWh. Bill = 45 × ₹5 = ₹ 225."
      },
      {
        qNo: 68,
        subject: "Physics",
        topic: "Radioactivity",
        questionMarathi: "खालीलपैकी कोणते किरण चुंबकाच्या सान्निध्यात दिशा बदलत नाहीत?",
        questionEnglish: "Which of the following rays will not change direction in presence of magnetic field?",
        options: [
          { id: "1", textMarathi: "अल्फा किरण", textEnglish: "Alpha rays" },
          { id: "2", textMarathi: "बीटा किरण", textEnglish: "Beta rays" },
          { id: "3", textMarathi: "गॅमा किरण", textEnglish: "Gamma rays" },
          { id: "4", textMarathi: "कॅथोडिक किरण", textEnglish: "Cathodic rays" }
        ],
        correctOption: "3",
        explanationMarathi: "गॅमा किरणे (γ-rays) ही विद्युतदृष्ट्या उदासीन (प्रभाररहित विद्युतचुंबकीय फोटॉन्स) असल्यामुळे विद्युत किंवा चुंबकीय क्षेत्रात त्यांचे विचलन होत नाही.",
        explanationEnglish: "Gamma rays are uncharged electromagnetic photons and therefore are not deflected by electric or magnetic fields."
      },
      {
        qNo: 69,
        subject: "Chemistry",
        topic: "Metals and Non-metals",
        questionMarathi: "पितळ (Brass) हा ________ मिश्रधातू आहे.",
        questionEnglish: "Brass is an alloy of ________.",
        options: [
          { id: "1", textMarathi: "तांबे आणि कथील", textEnglish: "Copper and tin" },
          { id: "2", textMarathi: "लोह आणि कार्बन", textEnglish: "Iron and carbon" },
          { id: "3", textMarathi: "लोह आणि क्रोमियम", textEnglish: "Iron and chromium" },
          { id: "4", textMarathi: "तांबे आणि जस्त", textEnglish: "Copper and zinc" }
        ],
        correctOption: "4",
        explanationMarathi: "पितळ (Brass) हे तांबे (Copper ~70%) आणि जस्त (Zinc ~30%) यांचे संमिश्र आहे (तांबे + कथील = कांस्य / Bronze).",
        explanationEnglish: "Brass is an alloy of Copper (Cu) and Zinc (Zn), whereas Bronze is an alloy of Copper (Cu) and Tin (Sn)."
      },
      {
        qNo: 71,
        subject: "Chemistry",
        topic: "Chemical Bonding",
        questionMarathi: "कॅल्शियम आणि क्लोरीन ________ बंधाने एकत्र येऊन कॅल्शियम क्लोराईड तयार होते.",
        questionEnglish: "Calcium and chlorine combine to form calcium chloride by ________.",
        options: [
          { id: "1", textMarathi: "सहसंयुज बंध", textEnglish: "Covalent bonding" },
          { id: "2", textMarathi: "आयनिक बंध", textEnglish: "Ionic bonding" },
          { id: "3", textMarathi: "धातू बंध", textEnglish: "Metallic bonding" },
          { id: "4", textMarathi: "हायड्रोजन बंध", textEnglish: "Hydrogen bonding" }
        ],
        correctOption: "2",
        explanationMarathi: "कॅल्शियम (Ca - धातू) आपले २ संयुजा इलेक्ट्रॉन दोन क्लोरीन (Cl - अधातू) अणूंना देतो आणि Ca²⁺ व 2Cl⁻ दरम्यान 'आयनिक बंध' (Ionic bond) तयार होऊन CaCl₂ बनते.",
        explanationEnglish: "Calcium transfers two valence electrons to two chlorine atoms, forming Ca²⁺ and 2Cl⁻ ions held together by Ionic (electrovalent) bonding."
      },
      {
        qNo: 74,
        subject: "Hygiene and Public Health",
        topic: "Communicable Diseases",
        questionMarathi: "घातक सबटर्शियन मलेरिया (Malignant subtertian malaria) ________ होतो.",
        questionEnglish: "Malignant subtertian malaria is caused by ________.",
        options: [
          { id: "1", textMarathi: "प्लाझमोडियम व्हायवॅक्स", textEnglish: "Plasmodium vivax" },
          { id: "2", textMarathi: "प्लाझमोडियम फाल्सीपेरम", textEnglish: "Plasmodium falciparum" },
          { id: "3", textMarathi: "प्लाझमोडियम ओव्हेल", textEnglish: "Plasmodium ovale" },
          { id: "4", textMarathi: "प्लाझमोडियम मलेरिई", textEnglish: "Plasmodium malariae" }
        ],
        correctOption: "2",
        explanationMarathi: "प्लाझमोडियम फाल्सीपेरम (Plasmodium falciparum) या आदिजीवामुळे सर्वाधिक गंभीर व जीवघेणा 'मॅलिग्नंट सबटर्शियन मलेरिया' (मेंदूचा ताप / Cerebral Malaria) होतो.",
        explanationEnglish: "Plasmodium falciparum causes severe and potentially fatal malignant tertian (subtertian) malaria."
      },
      {
        qNo: 75,
        subject: "Botany",
        topic: "Plant Nutrition",
        questionMarathi: "शेंगवर्गीय पिके हवेतील नत्राचा उपयोग खालीलपैकी कोणत्या सूक्ष्म-जीवाणूंच्या मदतीने करू शकतात? (अ. रायझोबियम, ब. विषाणू, क. बुरशी, ड. प्रोटोझोआ)",
        questionEnglish: "With the help of which micro-organism leguminous plants absorb nitrogen from air? (a. Rhizobium, b. Virus, c. Fungus, d. Protozoa)",
        options: [
          { id: "1", textMarathi: "फक्त अ (Rhizobium)", textEnglish: "Only a" },
          { id: "2", textMarathi: "फक्त अ आणि ब", textEnglish: "Only a and b" },
          { id: "3", textMarathi: "फक्त क", textEnglish: "Only c" },
          { id: "4", textMarathi: "फक्त क आणि ड", textEnglish: "Only c and d" }
        ],
        correctOption: "1",
        explanationMarathi: "शेंगवर्गीय वनस्पतींच्या मुळांवरील गाठींमध्ये राहणारे 'रायझोबियम' (Rhizobium) हे सहजीवी जीवाणू हवेतील नत्राचे (N₂) स्थिरीकरण करून पिकांना उपलब्ध करून देतात.",
        explanationEnglish: "Rhizobium is a symbiotic nitrogen-fixing bacterium residing in the root nodules of leguminous plants."
      },
      {
        qNo: 78,
        subject: "Zoology",
        topic: "Blood Circulation",
        questionMarathi: "खालीलपैकी रक्त गोठण्यास प्रतिबंध करणारे नैसर्गिक औषध (Natural blood anticoagulant) कोणते?",
        questionEnglish: "Which of the following is natural blood anticoagulant medicine?",
        options: [
          { id: "1", textMarathi: "हिपॅरीन", textEnglish: "Heparin" },
          { id: "2", textMarathi: "सोडियम सायट्रेट", textEnglish: "Sodium citrate" },
          { id: "3", textMarathi: "सोडियम नायट्रेट", textEnglish: "Sodium nitrate" },
          { id: "4", textMarathi: "डिंक", textEnglish: "Gum" }
        ],
        correctOption: "1",
        explanationMarathi: "यकृत (Liver) आणि मास्ट पेशींद्वारे तयार होणारे 'हिपॅरीन' (Heparin) हे शरीरांतर्गत रक्तवाहिन्यांमध्ये रक्त गोठू न देणारे नैसर्गिक प्रतिस्कंदक (Natural anticoagulant) आहे.",
        explanationEnglish: "Heparin is a naturally occurring blood anticoagulant produced by basophils, mast cells, and the liver."
      },
      {
        qNo: 80,
        subject: "Zoology",
        topic: "Blood Circulation",
        questionMarathi: "मानवी रक्तामध्ये 'प्लाझ्मा' (Plasma) किती टक्के असतो?",
        questionEnglish: "How much % of 'plasma' is present in human blood?",
        options: [
          { id: "1", textMarathi: "45%", textEnglish: "45" },
          { id: "2", textMarathi: "55%", textEnglish: "55" },
          { id: "3", textMarathi: "60%", textEnglish: "60" },
          { id: "4", textMarathi: "20%", textEnglish: "20" }
        ],
        correctOption: "2",
        explanationMarathi: "मानवी रक्तामध्ये सुमारे 55% द्रव रूप 'रक्तद्रव' (Plasma) असतो आणि उरलेले 45% रक्तकण (RBC, WBC, Platelets) असतात.",
        explanationEnglish: "Human blood is composed of approximately 55% liquid Plasma and 45% formed elements (blood corpuscles)."
      }
    ]
  },
  {
    id: "paper-2025-m21",
    examCycleYear: "2025",
    bookletCode: "M21",
    examTitleMarathi: "महाराष्ट्र गट-ब (अराजपत्रित) सेवा संयुक्त पूर्व परीक्षा 2025",
    examTitleEnglish: "MPSC Group-B (Non-Gazetted) Combined Prelims 2025",
    examDate: "04 जानेवारी 2026 (04 January 2026)",
    totalPaperQuestions: 100,
    totalMarks: 100,
    paperType: "GS & General Science (Q66–Q80)",
    pdfFileName: "MPSC_GroupB_Prelims_2025_M21.pdf",
    questions: [
      {
        qNo: 66,
        subject: "Physics",
        topic: "Atomic and Nuclear Physics",
        questionMarathi: "खालील विधाने बरोबर की चूक ते सांगा: (a) क्ष-किरण या विद्युत चुंबकीय लहरी आहेत. (b) क्ष-किरणांची तरंगलांबी खूप कमी असते. (c) क्ष-किरणांच्या वर ऋण भार असतो. (d) क्ष-किरण विद्युत आणि चुंबकीय क्षेत्रामुळे विचलित होतात.",
        questionEnglish: "State whether following statements are true or false: (a) X-rays are electromagnetic waves. (b) The wavelength of X-ray is very short. (c) X-rays are having negative charge. (d) X-rays are deflected by electric and magnetic fields.",
        options: [
          { id: "1", textMarathi: "(a) बरोबर, (b) बरोबर, (c) चूक, (d) चूक", textEnglish: "True, True, False, False" },
          { id: "2", textMarathi: "(a) चूक, (b) चूक, (c) बरोबर, (d) चूक", textEnglish: "False, False, True, False" },
          { id: "3", textMarathi: "(a) बरोबर, (b) चूक, (c) बरोबर, (d) चूक", textEnglish: "True, False, True, False" },
          { id: "4", textMarathi: "(a) बरोबर, (b) बरोबर, (c) बरोबर, (d) चूक", textEnglish: "True, True, True, False" }
        ],
        correctOption: "1",
        explanationMarathi: "क्ष-किरणे (X-rays, शोध: विल्हेल्म राँटजेन) ही अतिशय कमी तरंगलांबीच्या (0.01 ते 10 nm) विद्युतचुंबकीय लहरी आहेत (a व b बरोबर). त्या प्रभाररहित असल्यामुळे विद्युत व चुंबकीय क्षेत्रात विचलित होत नाहीत (c व d चूक).",
        explanationEnglish: "X-rays are uncharged electromagnetic waves with very short wavelengths; hence (a) and (b) are True while (c) and (d) are False."
      },
      {
        qNo: 67,
        subject: "Physics",
        topic: "Radioactivity",
        questionMarathi: "जोड्या जुळवा: (a) अल्फा कण, (b) बिटा कण, (c) किरणोत्साराचे एकक, (d) गॅमा किरण — (i) क्युरी, (ii) इलेक्ट्रॉन, (iii) ₂He⁴-हेलियम अणु, (iv) उच्च ऊर्जेचे फोटॉन",
        questionEnglish: "Match the pairs: (a) Alpha particle, (b) Beta particle, (c) Unit of Radioactivity, (d) Gamma rays — (i) Curie, (ii) Electron, (iii) ₂He⁴-Helium atom, (iv) Photon of high energy",
        options: [
          { id: "1", textMarathi: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", textEnglish: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)" },
          { id: "2", textMarathi: "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)", textEnglish: "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)" },
          { id: "3", textMarathi: "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", textEnglish: "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)" },
          { id: "4", textMarathi: "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)", textEnglish: "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)" }
        ],
        correctOption: "4",
        explanationMarathi: "अल्फा कण = ₂He⁴ हेलियम केंद्रक (iii), बीटा कण = वेगवान इलेक्ट्रॉन (ii), किरणोत्साराचे एकक = क्युरी (i), आणि गॅमा किरण = उच्च ऊर्जेचे फोटॉन (iv). म्हणून पर्याय (4) अचूक आहे.",
        explanationEnglish: "(a) Alpha particle = ₂He⁴ Helium nucleus (iii); (b) Beta particle = Electron (ii); (c) Unit of Radioactivity = Curie (i); (d) Gamma rays = High-energy photon (iv)."
      },
      {
        qNo: 68,
        subject: "Physics",
        topic: "Heat and Thermodynamics",
        questionMarathi: "अप्रकट विलयन उष्मा (Latent heat of fusion) म्हणजे ________.",
        questionEnglish: "Latent heat of fusion is defined as ________.",
        options: [
          { id: "1", textMarathi: "पदार्थांच्या एकक वस्तुमानाला उष्णता देण्यासाठी लागणाऱ्या उष्णतेची मात्रा", textEnglish: "the amount of heat required to heat unit mass of the substance." },
          { id: "2", textMarathi: "एकक वस्तुमानाचे तापमान 1°C ने वाढविण्यासाठी लागणाऱ्या उष्णतेची मात्रा", textEnglish: "the amount of heat required to raise the temperature of a unit mass through 1°C." },
          { id: "3", textMarathi: "पदार्थांच्या एकक वस्तुमानाला त्याच्या विलयन बिंदूवर तापमान वाढविण्याशिवाय घन स्थितीतून द्रव स्थितीत रूपांतरित करण्यासाठी लागणाऱ्या उष्णतेची मात्रा", textEnglish: "the amount of heat required to convert unit mass of the substance from solid to liquid at its melting point without rise of temperature." },
          { id: "4", textMarathi: "वरीलपैकी काहीही नाही", textEnglish: "None of the above" }
        ],
        correctOption: "3",
        explanationMarathi: "स्थिर तापमानाला (वितळण बिंदूवर) एकक वस्तुमानाच्या स्थायू पदार्थाचे पूर्णपणे द्रवात रूपांतर करण्यासाठी लागणाऱ्या उष्णतेला 'अप्रकट विलयन उष्मा' (Latent heat of fusion) म्हणतात.",
        explanationEnglish: "Latent heat of fusion is the heat energy required to convert a unit mass of a solid into liquid at its melting point without any change in temperature."
      },
      {
        qNo: 70,
        subject: "Chemistry",
        topic: "Metals and Non-metals",
        questionMarathi: "अॅल्युमिनियमचे प्रमुख खनिज (Principle ore of Aluminium) कोणते?",
        questionEnglish: "Which is the Principle ore of Aluminium?",
        options: [
          { id: "1", textMarathi: "बॉक्साइट", textEnglish: "Bauxite" },
          { id: "2", textMarathi: "मॅलाकाइट", textEnglish: "Malachite" },
          { id: "3", textMarathi: "गॅलिना", textEnglish: "Galina" },
          { id: "4", textMarathi: "डोलामाइट", textEnglish: "Dolamite" }
        ],
        correctOption: "1",
        explanationMarathi: "बॉक्साइट (Bauxite - Al₂O₃·2H₂O) हे अॅल्युमिनियमचे मुख्य धातुक आहे (मॅलाकाइट = तांबे, गॅलिना = शिसे PbS, डोलोमाइट = CaMg(CO₃)₂).",
        explanationEnglish: "Bauxite (Al₂O₃·2H₂O) is the principal ore of Aluminium."
      },
      {
        qNo: 74,
        subject: "Zoology",
        topic: "Animal Classification",
        questionMarathi: "खालीलपैकी कोणता प्राणी सर्वात आदिम पृष्ठवंशी प्राण्यांच्या गट अग्नाथाशी (Agnatha) संबंधित आहे?",
        questionEnglish: "Which of the following animal belongs to the group Agnatha, the most primitive vertebrates?",
        options: [
          { id: "1", textMarathi: "स्कॉलीओडॉन (डॉगफिश)", textEnglish: "Scoliodon (Dog fish)" },
          { id: "2", textMarathi: "रॅटस रॅटस (काळा उंदीर)", textEnglish: "Rattus rattus (Black rat)" },
          { id: "3", textMarathi: "पेट्रोमाझॉन (लैम्प्रे)", textEnglish: "Petromyzon (Lamprey)" },
          { id: "4", textMarathi: "लोरीस", textEnglish: "Loris" }
        ],
        correctOption: "3",
        explanationMarathi: "पेट्रोमाझॉन (Petromyzon / Lamprey) आणि मिक्झिन (Hagfish) हे जबडे नसलेल्या (Jawless vertebrates - Agnatha / Cyclostomata) आदिम पृष्ठवंशी गटात मोडतात.",
        explanationEnglish: "Petromyzon (Lamprey) belongs to class Cyclostomata under Agnatha (jawless primitive vertebrates)."
      },
      {
        qNo: 75,
        subject: "Botany",
        topic: "Plant Kingdom",
        questionMarathi: "वनस्पती गटाचे योग्य उदाहरण जोडी जुळवा: (a) शैवाळ, (b) ब्रायोफायटा, (c) टेरिडोफायटा, (d) जिम्नोस्पर्म — (i) सायकस, (ii) लायकोपोडियम, (iii) फ्युनारिया, (iv) क्लायमॅडोमोनास",
        questionEnglish: "Match the correct example of the Plant group: (a) Algae, (b) Bryophyte, (c) Pteridophyte, (d) Gymnosperm — (i) Cycas, (ii) Lycopodium, (iii) Funaria, (iv) Chlamydomonas",
        options: [
          { id: "1", textMarathi: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", textEnglish: "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)" },
          { id: "2", textMarathi: "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", textEnglish: "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)" },
          { id: "3", textMarathi: "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)", textEnglish: "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)" },
          { id: "4", textMarathi: "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", textEnglish: "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)" }
        ],
        correctOption: "3",
        explanationMarathi: "शैवाळ (Algae) = क्लायमॅडोमोनास (iv), ब्रायोफायटा = फ्युनारिया (iii), टेरिडोफायटा = लायकोपोडियम (ii), जिम्नोस्पर्म = सायकस (i). म्हणून पर्याय (3) अचूक आहे.",
        explanationEnglish: "Algae = Chlamydomonas (iv), Bryophyte = Funaria (iii), Pteridophyte = Lycopodium (ii), Gymnosperm = Cycas (i)."
      },
      {
        qNo: 78,
        subject: "Hygiene and Public Health",
        topic: "Vitamins and Minerals",
        questionMarathi: "________ या जीवनसत्त्वामुळे रक्त साकळण्यास/गोठण्यास (Blood clotting) मदत होते.",
        questionEnglish: "________ vitamin helps in blood clotting.",
        options: [
          { id: "1", textMarathi: "के (K)", textEnglish: "K" },
          { id: "2", textMarathi: "ई (E)", textEnglish: "E" },
          { id: "3", textMarathi: "डी (D)", textEnglish: "D" },
          { id: "4", textMarathi: "सी (C)", textEnglish: "C" }
        ],
        correctOption: "1",
        explanationMarathi: "जीवनसत्त्व K (फायलोक्विनोन) हे यकृतात प्रोथ्रॉम्बिन तयार करण्यास मदत करते, ज्यामुळे जखम झाल्यास रक्त गोठते.",
        explanationEnglish: "Vitamin K (Phylloquinone) is essential for synthesizing prothrombin and blood-clotting factors in the liver."
      },
      {
        qNo: 79,
        subject: "Zoology",
        topic: "Blood Circulation",
        questionMarathi: "ABO रक्तगटाचा शोध ________ यांनी लावला.",
        questionEnglish: "ABO blood group was discovered by ________.",
        options: [
          { id: "1", textMarathi: "विल्यम हार्वे", textEnglish: "William Harvey" },
          { id: "2", textMarathi: "डिकास्टेलो", textEnglish: "Di-castello" },
          { id: "3", textMarathi: "स्टर्ली", textEnglish: "Sturli" },
          { id: "4", textMarathi: "कार्ल लँडस्टेनर", textEnglish: "Karl Landsteiner" }
        ],
        correctOption: "4",
        explanationMarathi: "ABO रक्तगट पद्धतीचा शोध १९०० मध्ये कार्ल लँडस्टेनर (Karl Landsteiner) यांनी लावला (रक्ताभिसरण = विल्यम हार्वे, AB रक्तगट = डिकास्टेलो व स्टर्ली).",
        explanationEnglish: "Karl Landsteiner discovered the ABO blood group system in 1900 (Nobel Prize in 1930)."
      },
      {
        qNo: 80,
        subject: "Hygiene and Public Health",
        topic: "Non-communicable Diseases",
        questionMarathi: "जागतिक मधुमेह दिन (World Diabetes Day) ________ या दिवशी साजरा केला जातो.",
        questionEnglish: "World Diabetes Day is celebrated on ________.",
        options: [
          { id: "1", textMarathi: "14 जून", textEnglish: "14 June" },
          { id: "2", textMarathi: "29 सप्टेंबर", textEnglish: "29 September" },
          { id: "3", textMarathi: "7 एप्रिल", textEnglish: "7 April" },
          { id: "4", textMarathi: "14 नोव्हेंबर", textEnglish: "14 November" }
        ],
        correctOption: "4",
        explanationMarathi: "इन्सुलिनचे संशोधक सर फ्रेडरिक बँटिंग यांच्या जन्मदिनानिमित्त दरवर्षी '14 नोव्हेंबर' रोजी जागतिक मधुमेह दिन साजरा केला जातो (7 एप्रिल = जागतिक आरोग्य दिन, 14 जून = जागतिक रक्तदाता दिन, 29 सप्टेंबर = जागतिक हृदय दिन).",
        explanationEnglish: "World Diabetes Day is observed annually on 14 November (birthday of Sir Frederick Banting, co-discoverer of insulin)."
      }
    ]
  }
];

function detectSubjectAndTopic(query, selectedSubject) {
  const q = query.toLowerCase();

  // Check RAG documents first
  for (const doc of INITIAL_RAG_DOCUMENTS) {
    for (const kw of doc.keywords) {
      if (q.includes(kw.toLowerCase())) {
        return {
          subject: selectedSubject && selectedSubject !== "All" ? selectedSubject : doc.subject,
          topic: doc.topic,
          matchedRagId: doc.id
        };
      }
    }
  }

  // Check Topic Dictionary
  for (const [topicName, info] of Object.entries(TOPIC_DICTIONARY)) {
    for (const kw of info.keywords) {
      if (q.includes(kw.toLowerCase())) {
        return {
          subject: selectedSubject && selectedSubject !== "All" ? selectedSubject : info.subject,
          topic: topicName,
          matchedRagId: null
        };
      }
    }
  }

  // Check all 71 domain subtopics
  for (const dom of SUBJECT_DOMAINS) {
    for (const t of dom.topics) {
      if (q.includes(t.toLowerCase())) {
        return {
          subject: selectedSubject && selectedSubject !== "All" ? selectedSubject : dom.id,
          topic: t,
          matchedRagId: null
        };
      }
    }
  }

  // Keyword heuristics across the 7 subjects
  if (/(physics|भौतिक|force|motion|light|प्रकाश|mirror|lens|आरसा|भिंग|current|विद्युत|ohm|sound|ध्वनी|gravity|गुरुत्वाकर्षण|nuclear|अणुऊर्जा|heat|उष्णता)/i.test(q)) {
    return { subject: "Physics", topic: "General Physics (भौतिकशास्त्र)", matchedRagId: null };
  }
  if (/(chemistry|रसायन|atom|अणू|periodic|आवर्तसारणी|acid|base|आम्ल|क्षार|metal|धातू|carbon|कार्बन|hydrocarbon|chemical)/i.test(q)) {
    return { subject: "Chemistry", topic: "General Chemistry (रसायनशास्त्र)", matchedRagId: null };
  }
  if (/(botany|वनस्पती|plant|झाड|photosynthesis|प्रकाशसंश्लेषण|xylem|phloem|chlorophyll|auxin|फूल|मूळ)/i.test(q)) {
    return { subject: "Botany", topic: "Plant Science (वनस्पतीशास्त्र)", matchedRagId: null };
  }
  if (/(zoology|प्राणी|human|मानवी|blood|रक्त|heart|हृदय|brain|मेंदू|kidney|यकृत|liver|dna|rna|cell|पेशी|gene|digest)/i.test(q)) {
    return { subject: "Zoology", topic: "Human & Animal Biology (प्राणीशास्त्र)", matchedRagId: null };
  }
  if (/(vitamin|जीवनसत्त्व|disease|रोग|आजार|vaccine|लस|hygiene|आरोग्य|nutrition|पोषण|first aid|diet|आहार|tb|malaria|dengue)/i.test(q)) {
    return { subject: "Hygiene and Public Health", topic: "Hygiene & Public Health (आरोग्य व पोषण)", matchedRagId: null };
  }
  if (/(computer|संगणक|ict|internet|cyber|सायबर|software|hardware|ai|cloud|network|ram|rom|ip address|osi)/i.test(q)) {
    return { subject: "ICT", topic: "Information & Communication Technology (ICT)", matchedRagId: null };
  }
  if (/(remote sensing|सुदूर|gis|gps|isro|satellite|उपग्रह|irs|cartosat|navic)/i.test(q)) {
    return { subject: "Remote Sensing", topic: "Remote Sensing & Space Tech (सुदूर संवेदन)", matchedRagId: null };
  }

  return {
    subject: selectedSubject && selectedSubject !== "All" ? selectedSubject : "Physics",
    topic: "MPSC General Science (सामान्य विज्ञान)",
    matchedRagId: null
  };
}

// ============================================================================
// INTELLIGENT BILINGUAL RESPONSE GENERATOR (RULE-BASED + RAG + NUMERICAL + MCQ)
// ============================================================================
function generateBilingualResponse({
  query,
  selectedSubject,
  selectedMode,
  mcqCount,
  ragDocs,
  ragEnabled,
  lastContext
}) {
  const cleanQuery = query.trim();
  const qLower = cleanQuery.toLowerCase();

  // Check if user is asking for MCQs or if MCQ_PRACTICE mode is active
  const wantsMcq =
    selectedMode === "MCQ_PRACTICE" ||
    /(mcq|quiz|सराव प्रश्न|प्रश्न तयार करा|test me|generate.*mcq)/i.test(qLower);

  const requestedCount = /10/.test(qLower) ? 10 : /5/.test(qLower) ? 5 : mcqCount;

  // Contextual follow-up resolution (e.g., "Give me 5 MCQs on this", "Give me a mnemonic for this")
  const effectiveQuery =
    /(on this|यावर|या घटकावर|more about this|explain further)/i.test(qLower) && lastContext?.topic
      ? `${cleanQuery} (${lastContext.topic} - ${lastContext.subject})`
      : cleanQuery;

  const detected = detectSubjectAndTopic(effectiveQuery, selectedSubject);

  // Search RAG knowledge base
  let matchedRag = null;
  if (ragEnabled) {
    for (const doc of ragDocs) {
      const hitKeyword = doc.keywords?.some((k) => effectiveQuery.toLowerCase().includes(k.toLowerCase()));
      const hitTopic = effectiveQuery.toLowerCase().includes(doc.topic.toLowerCase());
      if (hitKeyword || hitTopic || doc.id === detected.matchedRagId) {
        matchedRag = doc;
        break;
      }
    }
  }

  // Check if numerical problem (e.g., Force F = ma, Mirror inclination angle, Ohm's Law)
  const mirrorAngleMatch = effectiveQuery.match(/(\d+)\s*(?:°|degree|अंश)/i);
  if (mirrorAngleMatch && /(mirror|आरसा|आरसे|प्रतिमा|image)/i.test(effectiveQuery)) {
    const theta = parseInt(mirrorAngleMatch[1], 10);
    if (theta > 0 && theta <= 180) {
      const ratio = 360 / theta;
      const numImages = Number.isInteger(ratio) ? ratio - 1 : Math.floor(ratio);
      return {
        question: cleanQuery,
        subject: "Physics",
        topic: "Light, Reflection and Refraction (Numerical Solution)",
        mode: selectedMode,
        sourceType: "TEXTBOOK_RAG",
        citation: {
          pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
          chapterName: "प्रकरण ६: प्रकाश – परावर्तन आणि अपवर्तन",
          pageNumber: "पृष्ठ ११४ (Page 114)"
        },
        marathiExplanation: `दिलेल्या गणितानुसार दोन समतल आरशांमधील कोन (θ) = ${theta}° आहे.\n\nपायरी १ (सूत्र): दोन समतल आरसे एकमेकांशी θ कोनात ठेवले असता तयार होणाऱ्या प्रतिमांची संख्या काढण्याचे सूत्र:\nn = (360° / θ) - 1\n\nपायरी २ (किंमत ठेवू): n = (360° / ${theta}°) - 1 = ${ratio.toFixed(1)} - 1 = ${numImages} प्रतिमा.\nम्हणून, दोन समतल आरसे ${theta}° कोनात ठेवल्यास एकूण **${numImages} प्रतिमा** मिळतील.`,
        englishExplanation: `Step-by-Step Numerical Solution:\nGiven Angle of Inclination between two plane mirrors (θ) = ${theta}°.\n\nStep 1 (Formula): Number of images formed between two inclined plane mirrors:\nn = (360° / θ) - 1\n\nStep 2 (Substitution): n = (360° / ${theta}°) - 1 = ${ratio.toFixed(1)} - 1 = **${numImages} images**.\nTherefore, **${numImages} distinct images** of the object are formed.`,
        diagramText: `   आरसा १ (Mirror 1)
        \\
         \\   कोन θ = ${theta}°
          \\___________________ आरसा २ (Mirror 2)
          सूत्र: n = (360° / ${theta}°) - 1 = ${numImages} प्रतिमा`,
        formulas: [
          `n = (360° / θ) - 1  ⇒  n = (360° / ${theta}°) - 1 = ${numImages} प्रतिमा`,
          "लक्षात ठेवा: θ = 90° ⇒ 3 प्रतिमा | θ = 60° ⇒ 5 प्रतिमा | θ = 45° ⇒ 7 प्रतिमा | θ = 30° ⇒ 11 प्रतिमा | θ = 0° (समांतर) ⇒ अनंत (∞) प्रतिमा"
        ],
        keyPoints: [
          `θ = ${theta}° असताना एकूण ${numImages} प्रतिमा तयार होतात.`,
          "पेरिस्कोपमध्ये दोन समतल आरसे 45° कोनात तर कॅलिडोस्कोपमध्ये तीन समतल आरसे 60° कोनात बसवलेले असतात."
        ],
        mnemonic: "स्मरण सूत्र: '360 ला कोनाने भागा आणि 1 वजा करा!'",
        examPerspective: [
          "MPSC पूर्व परीक्षेत 90°, 60°, 45° आणि 30° कोनांवरील प्रतिमांची संख्या थेट विचारली जाते."
        ],
        followUps: [
          "प्रकाशाचे परावर्तन म्हणजे काय?",
          "अंतर्वक्र आरसा आणि बहिर्वक्र आरशाचे उपयोग सांगा.",
          "प्रकाश या घटकावर 5 MPSC MCQs तयार करा."
        ]
      };
    }
  }

  // Check if F = m * a numerical
  const massMatch = effectiveQuery.match(/(\d+(?:\.\d+)?)\s*kg/i);
  const forceMatch = effectiveQuery.match(/(\d+(?:\.\d+)?)\s*N\b/i);
  if (massMatch && forceMatch) {
    const m = parseFloat(massMatch[1]);
    const f = parseFloat(forceMatch[1]);
    const a = (f / m).toFixed(2);
    return {
      question: cleanQuery,
      subject: "Physics",
      topic: "Motion, Force and Laws of Motion (Numerical Solution)",
      mode: selectedMode,
      sourceType: "TEXTBOOK_RAG",
      citation: {
        pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
        chapterName: "प्रकरण २: गती, बल आणि न्यूटनचे गतीविषयक नियम",
        pageNumber: "पृष्ठ ३३ (Page 33)"
      },
      marathiExplanation: `दिलेली माहिती (Given Data):\n• वस्तूचे वस्तुमान (Mass, m) = ${m} kg\n• प्रयुक्त बल (Force, F) = ${f} N\n\nपायरी १ (सूत्र): न्यूटनच्या गतीच्या दुसऱ्या नियमानुसार:\nF = m × a   ⇒   a = F / m\n\nपायरी २ (उकल): a = ${f} / ${m} = **${a} m/s²**\nम्हणून त्या वस्तूमध्ये निर्माण होणारे त्वरण (Acceleration) **${a} m/s²** इतके असेल.`,
      englishExplanation: `Step-by-Step Numerical Solution (Newton's Second Law):\n• Given Mass (m) = ${m} kg\n• Applied Unbalanced Force (F) = ${f} N\n\nStep 1 (Formula): F = m × a  ⇒  a = F / m\nStep 2 (Calculation): a = ${f} N / ${m} kg = **${a} m/s²**\nThus, the acceleration produced in the body is **${a} m/s²**.`,
      formulas: [
        "F = m × a (बल = वस्तुमान × त्वरण)",
        `a = F / m = ${f} / ${m} = ${a} m/s²`,
        "त्वरणाचे SI एकक = m/s² | बलाचे SI एकक = Newton (kg·m/s²)"
      ],
      keyPoints: [
        "जर वस्तुमान स्थिर असेल तर त्वरण हे प्रयुक्त बलाशी समानुपाती असते (a ∝ F).",
        "जर बल स्थिर असेल तर त्वरण हे वस्तुमानाशी व्यस्तानुपाती असते (a ∝ 1/m)."
      ],
      mnemonic: "स्मरण सूत्र: 'F = ma (Father = Maa)'!",
      examPerspective: [
        "MPSC गट-ब आणि गट-क पूर्व परीक्षेत F = ma, v = u + at आणि गतिज ऊर्जा KE = ½mv² वर सोपी गणिते विचारली जातात."
      ],
      followUps: [
        "Explain Newton's Laws of Motion.",
        "जर वस्तूचा वेग दुप्पट केला तर गतिज ऊर्जेवर काय परिणाम होतो?",
        "बल व गती यावर 5 MPSC सराव प्रश्न द्या."
      ]
    };
  }

  // If MCQ Practice Mode or user asked for MCQs
  if (wantsMcq) {
    let filteredMcqs = MPSC_MCQ_BANK;
    if (detected.subject && detected.subject !== "All" && !/10 mpsc science mcqs/i.test(qLower)) {
      const subjMatches = MPSC_MCQ_BANK.filter(
        (m) => m.subject.toLowerCase() === detected.subject.toLowerCase()
      );
      if (subjMatches.length >= 2) {
        filteredMcqs = [
          ...subjMatches,
          ...MPSC_MCQ_BANK.filter((m) => m.subject.toLowerCase() !== detected.subject.toLowerCase())
        ];
      }
    }
    const selectedMcqs = filteredMcqs.slice(0, requestedCount);

    return {
      question: cleanQuery,
      subject: detected.subject,
      topic: `${detected.topic} – MPSC MCQ Practice Set (${selectedMcqs.length} Questions)`,
      mode: "MCQ_PRACTICE",
      sourceType: matchedRag ? "TEXTBOOK_RAG" : "TEXTBOOK_RAG",
      citation: matchedRag
        ? {
            pdfName: matchedRag.pdfName,
            chapterName: matchedRag.chapterName,
            pageNumber: matchedRag.pageNumber
          }
        : {
            pdfName: "Science_PreCall_2.0_MPSC_Question_Bank.pdf",
            chapterName: "MPSC High-Yield Bilingual Science MCQ Series – By Akash Jadhav",
            pageNumber: "Pages 1–45"
          },
      marathiExplanation: `खाली तुमच्या सरावासाठी **${selectedMcqs.length} MPSC दर्जाचे बहुपर्यायी प्रश्न (MCQs)** मराठी आणि इंग्रजी भाषेत दिले आहेत. कोणत्याही पर्यायावर (A, B, C, D) क्लिक करून तुमचे उत्तर तपासा—प्रत्येक प्रश्नाखाली **चारही पर्यायांचे सविस्तर वैज्ञानिक स्पष्टीकरण** दिले आहे!`,
      englishExplanation: `Here are **${selectedMcqs.length} MPSC-level Bilingual General Science MCQs** curated for Rajyaseva, Group B, and Group C Prelims & Mains. Click on any option (A, B, C, or D) in the interactive cards below to check your answer and view the detailed bilingual breakdown of all four options.`,
      mcqs: selectedMcqs,
      formulas: [
        "MPSC परीक्षेत निगेटिव्ह मार्किंग (1/4 किंवा 25% नकारात्मक गुण) असते, त्यामुळे चारही पर्यायांचे विश्लेषण करून अयोग्य पर्याय बाद करण्याची (Elimination Method) सवय लावा."
      ],
      keyPoints: [
        "प्रत्येक प्रश्नाचे चारही पर्याय वाचा—MPSC अनेकदा मागील प्रश्नांमधील पर्यायांवर पुढील वर्षी नवीन प्रश्न तयार करते.",
        "बहुविधानी प्रश्नांमध्ये 'केवळ', 'नेहमी', 'कोणतेही नाही' अशा टोकाच्या शब्दांकडे विशेष लक्ष द्या."
      ],
      mnemonic: "सराव मंत्र: 'Concept + Elimination = MPSC Selection!'",
      examPerspective: [
        "MPSC राज्यसेवा आणि संयुक्त पूर्व परीक्षेत सामान्य विज्ञानावर १५ ते २० प्रश्न विचारले जातात, ज्यामध्ये जीवशास्त्र (Botany + Zoology + Hygiene) वर सुमारे ५०%, भौतिकशास्त्रावर २५% आणि रसायनशास्त्रावर २५% भर असतो."
      ],
      followUps: [
        "प्रकाशाचे परावर्तन म्हणजे काय?",
        "What is the difference between DNA and RNA?",
        "Explain the periodic table."
      ]
    };
  }

  // Check if the query matches any question in YEAR_WISE_PYQ_PAPERS
  for (const paper of YEAR_WISE_PYQ_PAPERS) {
    for (const pyq of paper.questions) {
      const qM = pyq.questionMarathi.toLowerCase();
      const qE = pyq.questionEnglish.toLowerCase();
      if (
        (cleanQuery.length > 10 && (qM.includes(qLower) || qE.includes(qLower))) ||
        cleanQuery.includes(`Q.${pyq.qNo}`)
      ) {
        const rightOpt = pyq.options.find((o) => o.id === pyq.correctOption);
        return {
          question: cleanQuery,
          subject: pyq.subject,
          topic: `${pyq.topic} (Verified MPSC PYQ • ${paper.examCycleYear})`,
          mode: selectedMode,
          sourceType: "TEXTBOOK_RAG",
          citation: {
            pdfName: paper.pdfFileName,
            chapterName: `${paper.examTitleMarathi} (Booklet ${paper.bookletCode})`,
            pageNumber: `Question No. ${pyq.qNo} • Exam Date: ${paper.examDate}`
          },
          marathiExplanation: `**मूळ MPSC प्रश्न (${paper.examTitleMarathi}, प्रश्न क्र. ${pyq.qNo}):**
${pyq.questionMarathi}

• **अचूक उत्तर:** पर्याय (${pyq.correctOption}) — **${rightOpt?.textMarathi}**

• **सविस्तर मराठी स्पष्टीकरण:**
${pyq.explanationMarathi}`,
          englishExplanation: `**Official MPSC PYQ (${paper.examTitleEnglish}, Q.${pyq.qNo}):**
${pyq.questionEnglish}

• **Correct Option:** (${pyq.correctOption}) — **${rightOpt?.textEnglish}**

• **Detailed Scientific Explanation:**
${pyq.explanationEnglish}`,
          keyPoints: pyq.options.map(
            (o) =>
              `पर्याय (${o.id}): ${o.textMarathi} / ${o.textEnglish} ${
                o.id === pyq.correctOption ? "✅ [अचूक उत्तर / Correct Answer]" : ""
              }`
          ),
          mnemonic: `सत्यापित MPSC संदर्भ: ${paper.examTitleMarathi} (${paper.examDate}) - पुस्तिका कोड ${paper.bookletCode}, प्र. क्र. ${pyq.qNo}`,
          examPerspective: [
            `हा प्रश्न प्रत्यक्ष आयोगाच्या '${paper.examTitleMarathi}' (${paper.examDate}) परीक्षेत विचारला गेला आहे.`,
            "Science PreCall 2.0 च्या 'PYQ Papers (2025–26)' टॅबमध्ये जाऊन तुम्ही या प्रश्नपत्रिकेतील सर्व प्रश्नांचा सराव करू शकता."
          ],
          followUps: [
            `Generate 5 MPSC MCQs on ${pyq.topic}.`,
            "प्रकाशाचे परावर्तन म्हणजे काय?",
            "Explain the periodic table."
          ]
        };
      }
    }
  }

  // If matched a full RAG Document
  if (matchedRag) {
    const marathiBody =
      selectedMode === "BASIC"
        ? matchedRag.marathiBasic || matchedRag.marathiExam
        : selectedMode === "DEEP_CONCEPT"
        ? `${matchedRag.marathiExam}\n\n• सखोल वैज्ञानिक विश्लेषण (Deep Mechanism):\n${matchedRag.marathiDeep}`
        : matchedRag.marathiExam;

    return {
      question: cleanQuery,
      subject: matchedRag.subject,
      topic: matchedRag.topic,
      mode: selectedMode,
      sourceType: "TEXTBOOK_RAG",
      citation: {
        pdfName: matchedRag.pdfName,
        chapterName: matchedRag.chapterName,
        pageNumber: matchedRag.pageNumber
      },
      marathiExplanation: marathiBody,
      englishExplanation: matchedRag.englishExplanation,
      diagramText: matchedRag.diagramText || null,
      comparisonTable: matchedRag.comparisonTable || null,
      formulas: matchedRag.formulas || [],
      keyPoints: matchedRag.keyPoints || [],
      mnemonic: matchedRag.mnemonic || null,
      examPerspective: matchedRag.examPerspective || [],
      followUps: matchedRag.followUps || [
        `Generate 5 MPSC MCQs on ${matchedRag.topic}.`,
        "या घटकावरील महत्त्वाची सूत्रे व एकके सांगा.",
        "पुढील महत्त्वाचा विज्ञान घटक समजावून सांगा."
      ]
    };
  }

  // Check Topic Dictionary
  const dictEntry = TOPIC_DICTIONARY[detected.topic];
  if (dictEntry) {
    return {
      question: cleanQuery,
      subject: dictEntry.subject,
      topic: detected.topic,
      mode: selectedMode,
      sourceType: "GENERAL_AI",
      citation: null,
      marathiExplanation: dictEntry.marathi,
      englishExplanation: dictEntry.english,
      formulas: dictEntry.formulas,
      keyPoints: dictEntry.facts,
      mnemonic: "स्मरण टीप: सूत्रे आणि त्यांची SI व CGS एकके तक्त्यामध्ये लिहून दररोज ५ मिनिटे उजळणी करा.",
      examPerspective: [
        `MPSC पूर्व व मुख्य परीक्षेत '${detected.topic}' या घटकावरील मूलभूत संज्ञा, SI एकके आणि दैनंदिन जीवनातील उपयोगांवर प्रश्न विचारले जातात.`
      ],
      followUps: [
        "Generate 10 MPSC Science MCQs.",
        "प्रकाशाचे परावर्तन म्हणजे काय?",
        "Explain Newton's Laws of Motion."
      ]
    };
  }

  // General intelligent bilingual fallback for any custom science topic across the 7 domains
  const domainObj =
    SUBJECT_DOMAINS.find((d) => d.id === detected.subject) || SUBJECT_DOMAINS[0];

  return {
    question: cleanQuery,
    subject: domainObj.id,
    topic: detected.topic,
    mode: selectedMode,
    sourceType: "GENERAL_AI",
    citation: null,
    marathiExplanation: `**${detected.topic} (${domainObj.marathi})** हा MPSC राज्यसेवा, गट-ब आणि गट-क परीक्षेच्या दृष्टीने अत्यंत महत्त्वाचा घटक आहे.\n\n• मूलभूत संकल्पना: या घटकामध्ये आपण नैसर्गिक तत्त्वे, वैज्ञानिक नियम, कार्यकारणभाव आणि त्यांचे दैनंदिन जीवनातील व तंत्रज्ञानातील उपयोजन यांचा अभ्यास करतो.\n• परीक्षेसाठी दृष्टिकोन: MPSC मध्ये या विषयावर व्याख्या, वैज्ञानिक शोध व शास्त्रज्ञ, रासायनिक/भौतिक गुणधर्म, अपवाद आणि बहुविधानी (Statement-based) प्रश्न विचारले जातात. अधिक अचूक पाठ्यपुस्तक संदर्भासाठी तुम्ही डाव्या बाजूच्या 'Knowledge Base (RAG)' मधून तुमचे Science PreCall 2.0 चे प्रकरण अपलोड करू शकता किंवा खालील मुद्द्यांचा सराव करू शकता.`,
    englishExplanation: `**${detected.topic} (${domainObj.name})** is a core syllabus topic for MPSC Rajyaseva, Combine Group B, and Group C examinations.\n\n• Scientific Overview: In ${selectedMode} mode, focus on understanding the fundamental definitions, governing scientific principles, standard SI units/classifications, and real-world applications in Maharashtra and India.\n• Tip: You can also upload custom notes or chapters from the **Science PreCall 2.0 Textbook** in the **RAG Knowledge Vault** tab to get page-verified textbook citations on this exact subtopic, or switch to **MCQ Practice Mode** to test yourself immediately!`,
    formulas: [
      "वैज्ञानिक पद्धती (Scientific Method): निरीक्षण (Observation) → गृहीतक (Hypothesis) → प्रयोग (Experiment) → सिद्धांत/नियम (Theory/Law)"
    ],
    keyPoints: [
      `विषय विभाग (Subject Domain): ${domainObj.name} (${domainObj.marathi})`,
      `उपघटक (Identified Topic): ${detected.topic}`,
      `या विषयातील सर्व उपघटक: ${domainObj.topics.join(", ")}.`
    ],
    mnemonic: "अभ्यास सूत्र: 'मूळ संकल्पना (Concept) + अपवाद (Exceptions) + सराव प्रश्न (MCQs) = १००% यश!'",
    examPerspective: [
      "MPSC आयोगाच्या नवीन प्रश्नपत्रिका पॅटर्ननुसार केवळ पाठांतरावर भर न देता संकल्पनात्मक स्पष्टता (Conceptual Clarity) आणि बहुविधानी प्रश्नांचा सराव करणे आवश्यक आहे."
    ],
    followUps: [
      "प्रकाशाचे परावर्तन म्हणजे काय?",
      "What is the difference between DNA and RNA?",
      "Generate 10 MPSC Science MCQs."
    ]
  };
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Navigation & UI state
  const [activeTab, setActiveTab] = useState("chat"); // "chat" | "syllabus" | "rag" | "code"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedMode, setSelectedMode] = useState("MPSC_EXAM");
  const [mcqCount, setMcqCount] = useState(5);
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // RAG Knowledge Base state
  const [ragDocs, setRagDocs] = useState(INITIAL_RAG_DOCUMENTS);
  const [ragEnabled, setRagEnabled] = useState(true);
  const [newRagForm, setNewRagForm] = useState({
    pdfName: "Science_PreCall_2.0_Custom_Notes.pdf",
    chapterName: "",
    pageNumber: "Pages 1–10",
    subject: "Physics",
    topic: "",
    keywords: "",
    marathiExam: "",
    englishExplanation: "",
    keyPoints: ""
  });
  const [ragToast, setRagToast] = useState("");

  // Optional Live Gemini API Connector state (for testing live Gemini API or Backend)
  const [geminiApiKey, setGeminiApiKey] = useState("");
  const [geminiModel, setGeminiModel] = useState("gemini-2.5-flash");
  const [showApiModal, setShowApiModal] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [selectedPyqYear, setSelectedPyqYear] = useState("All");
  const [selectedPyqPaperId, setSelectedPyqPaperId] = useState("All");
  const [selectedPyqSubject, setSelectedPyqSubject] = useState("All");

  // Interactive MCQ user selections: { [messageId_mcqId]: selectedOptionId }
  const [mcqAnswers, setMcqAnswers] = useState({});

  // Chat sessions state
  const initialWelcomeMessage = {
    id: "msg-welcome",
    role: "ai",
    timestamp: "Just now",
    data: {
      question: "नमस्कार! Welcome to SCIENCE PRECALL AI – Your Personal General Science Mentor for MPSC",
      subject: "All 7 MPSC Science Domains",
      topic: "Bilingual Marathi & English AI Mentor",
      mode: "MPSC_EXAM",
      sourceType: "TEXTBOOK_RAG",
      citation: {
        pdfName: "Science_PreCall_2.0_Official_Guide.pdf",
        chapterName: "Created by Akash Jadhav | Brand: Science PreCall 2.0",
        pageNumber: "Edition 2.0"
      },
      marathiExplanation:
        "नमस्कार विद्यार्थी मित्रांनो! मी **SCIENCE PRECALL AI** — **आकाश जाधव (Akash Jadhav – Science PreCall 2.0)** यांनी MPSC राज्यसेवा, गट-ब (PSI/STI/ASO) आणि गट-क परीक्षेच्या विद्यार्थ्यांसाठी विकसित केलेला तुमचा वैयक्तिक द्विभाषिक (मराठी + English) सामान्य विज्ञान मार्गदर्शक आहे.\n\nतुम्ही मला **भौतिकशास्त्र (Physics), रसायनशास्त्र (Chemistry), वनस्पतीशास्त्र (Botany), प्राणीशास्त्र (Zoology), आरोग्य व पोषण (Hygiene), संगणक व माहिती तंत्रज्ञान (ICT) आणि सुदूर संवेदन (Remote Sensing)** या ७ ही विषयांवरील कोणताही प्रश्न मराठी किंवा इंग्रजीत विचारू शकता!",
      englishExplanation:
        "Welcome to **SCIENCE PRECALL AI (Science PreCall 2.0)** — Created by **Akash Jadhav** (*\"Science Made Simple. Selection Made Possible.\"*).\n\nEvery answer is structured in **Devanagari Marathi and English** with **Key Scientific Facts, Formulas, Text Diagrams, Comparison Tables, Memory Tricks (Mnemonics), MPSC Prelims/Mains Exam Perspectives**, and **Verified Science PreCall 2.0 Textbook Citations (RAG)**. Choose any **Teaching Mode (Basic, MPSC Exam, Deep Concept, or 5/10 MCQ Practice Mode)** above or click a starter question below to begin!",
      formulas: [
        "यशाचे सूत्र (Formula for Selection): अचूक वैज्ञानिक संकल्पना (Marathi + English) + Science PreCall 2.0 रिव्हिजन + नियमित MCQ सराव = MPSC निवड!"
      ],
      keyPoints: [
        "७ संपूर्ण विषय: Physics, Chemistry, Botany, Zoology, Hygiene & Public Health, ICT आणि Remote Sensing.",
        "४ विशेष शिक्षण मोड्स: (A) Basic Mode, (B) MPSC Exam Mode, (C) Deep Concept Mode, (D) MCQ Practice Mode (5 किंवा 10 प्रश्न चारही पर्यायांच्या स्पष्टीकरणासह).",
        "RAG पाठ्यपुस्तक संदर्भ: उत्तर 'Science PreCall 2.0' पाठ्यपुस्तकातून आल्यास PDF नाव, प्रकरण आणि पृष्ठ क्रमांक स्पष्टपणे दाखवला जातो."
      ],
      mnemonic: "Science PreCall 2.0 ध्येयवाक्य: 'Science Made Simple. Selection Made Possible!'",
      examPerspective: [
        "खालीलपैकी कोणत्याही एका प्रश्नावर क्लिक करून किंवा तुमचा स्वतःचा प्रश्न टाईप करून लगेच अभ्यासाला सुरुवात करा!"
      ],
      followUps: [
        "प्रकाशाचे परावर्तन म्हणजे काय?",
        "Explain Newton's Laws of Motion.",
        "What is the difference between DNA and RNA?",
        "मानवी शरीरातील सर्वात मोठी ग्रंथी कोणती?",
        "Explain the periodic table.",
        "Generate 10 MPSC Science MCQs."
      ]
    }
  };

  const [sessions, setSessions] = useState([
    {
      id: "session-1",
      title: "MPSC विज्ञान अभ्यास सत्र १",
      createdAt: "Today",
      messages: [initialWelcomeMessage]
    }
  ]);
  const [activeSessionId, setActiveSessionId] = useState("session-1");

  const chatEndRef = useRef(null);

  const activeSession = useMemo(
    () => sessions.find((s) => s.id === activeSessionId) || sessions[0],
    [sessions, activeSessionId]
  );

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSession?.messages?.length, isGenerating]);

  // Safe copy helper
  const handleCopyText = (text, id) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Start a new chat session
  const handleNewChat = () => {
    const newId = `session-${Date.now()}`;
    const newSession = {
      id: newId,
      title: `नवीन सराव सत्र (${sessions.length + 1})`,
      createdAt: "Just now",
      messages: [initialWelcomeMessage]
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newId);
    setActiveTab("chat");
    setMobileMenuOpen(false);
  };

  // Clear current chat messages
  const handleConfirmClearChat = () => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === activeSessionId
          ? { ...s, messages: [initialWelcomeMessage], title: "साफ केलेले सत्र (Cleared)" }
          : s
      )
    );
    setMcqAnswers({});
    setShowClearConfirm(false);
  };

  // Send a question (from input, starter button, follow-up chip, or quick tool)
  const handleSendQuestion = async (customQuestion, overrideMode, overrideSubject) => {
    const qText = (customQuestion !== undefined ? customQuestion : inputText).trim();
    if (!qText || isGenerating) return;

    const modeToUse = overrideMode || selectedMode;
    const subjectToUse = overrideSubject || selectedSubject;

    if (overrideMode) setSelectedMode(overrideMode);
    if (overrideSubject && overrideSubject !== "All") setSelectedSubject(overrideSubject);

    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      text: qText,
      subject: subjectToUse,
      mode: modeToUse,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    // Find previous AI response context for conversation memory
    const prevAiMessages = activeSession.messages.filter((m) => m.role === "ai" && m.id !== "msg-welcome");
    const lastContext =
      prevAiMessages.length > 0 ? prevAiMessages[prevAiMessages.length - 1].data : null;

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== activeSessionId) return s;
        const updatedTitle =
          s.messages.length <= 1 ? qText.slice(0, 34) + (qText.length > 34 ? "..." : "") : s.title;
        return {
          ...s,
          title: updatedTitle,
          messages: [...s.messages, userMsg]
        };
      })
    );

    if (customQuestion === undefined) {
      setInputText("");
    }
    setActiveTab("chat");
    setIsGenerating(true);

    // Check if user configured a live Gemini API key for direct testing
    let liveGeminiResult = null;
    if (geminiApiKey.trim().length > 15) {
      try {
        const detected = detectSubjectAndTopic(qText, subjectToUse);
        const matchedDoc = ragEnabled
          ? ragDocs.find((d) =>
              d.keywords?.some((kw) => qText.toLowerCase().includes(kw.toLowerCase()))
            )
          : null;

        const ragPromptBlock = matchedDoc
          ? `VERIFIED SCIENCE PRECALL 2.0 TEXTBOOK SOURCE:\nPDF: ${matchedDoc.pdfName}\nChapter: ${matchedDoc.chapterName}\nPage: ${matchedDoc.pageNumber}\nMarathi Content: ${matchedDoc.marathiExam}\nEnglish Content: ${matchedDoc.englishExplanation}`
          : "No uploaded PDF match found. Use verified general scientific knowledge and mark as General AI Knowledge.";

        const historyLines = activeSession.messages
          .slice(-4)
          .map((m) =>
            m.role === "user"
              ? `Student: ${m.text}`
              : `Science PreCall AI (${m.data?.topic}): ${m.data?.englishExplanation?.slice(0, 180)}`
          )
          .join("\n");

        const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${encodeURIComponent(
          geminiApiKey.trim()
        )}`;

        const res = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTIONS }]
            },
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `Answer Mode: ${modeToUse}\nSubject: ${detected.subject} | Topic: ${detected.topic}\n${ragPromptBlock}\n\nRecent Context:\n${historyLines}\n\nStudent Question: ${qText}\n\nProvide your response in JSON with keys: marathiExplanation (Devanagari Marathi), englishExplanation (English), formulas (array of strings), keyPoints (array of strings), mnemonic (string), examPerspective (array of strings), followUps (array of 3 strings).`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.3,
              responseMimeType: "application/json"
            }
          })
        });

        if (res.ok) {
          const json = await res.json();
          const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const parsed = JSON.parse(rawText);
            liveGeminiResult = {
              question: qText,
              subject: detected.subject,
              topic: detected.topic,
              mode: modeToUse,
              engineBadge: `Live Gemini API (${geminiModel})`,
              sourceType: matchedDoc ? "TEXTBOOK_RAG" : "GENERAL_AI",
              citation: matchedDoc
                ? {
                    pdfName: matchedDoc.pdfName,
                    chapterName: matchedDoc.chapterName,
                    pageNumber: matchedDoc.pageNumber
                  }
                : null,
              marathiExplanation: parsed.marathiExplanation || "मराठी स्पष्टीकरण उपलब्ध आहे.",
              englishExplanation: parsed.englishExplanation || "English explanation generated.",
              formulas: Array.isArray(parsed.formulas) ? parsed.formulas : [],
              keyPoints: Array.isArray(parsed.keyPoints) ? parsed.keyPoints : [],
              mnemonic: parsed.mnemonic || null,
              examPerspective: Array.isArray(parsed.examPerspective) ? parsed.examPerspective : [],
              followUps: Array.isArray(parsed.followUps)
                ? parsed.followUps
                : ["या घटकावर ५ MPSC MCQs द्या.", "अधिक उदाहरणे द्या."]
            };
          }
        }
      } catch (e) {
        // Gracefully fall back to built-in rule-based engine
        liveGeminiResult = null;
      }
    }

    setTimeout(() => {
      const responseData =
        liveGeminiResult ||
        generateBilingualResponse({
          query: qText,
          selectedSubject: subjectToUse,
          selectedMode: modeToUse,
          mcqCount,
          ragDocs,
          ragEnabled,
          lastContext
        });

      const aiMsg = {
        id: `ai-${Date.now()}`,
        role: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        data: responseData
      };

      setSessions((prev) =>
        prev.map((s) => (s.id === activeSessionId ? { ...s, messages: [...s.messages, aiMsg] } : s))
      );
      setIsGenerating(false);
    }, 320);
  };

  // Handle adding a custom RAG document/chapter
  const handleAddRagDoc = (e) => {
    e.preventDefault();
    if (!newRagForm.chapterName.trim() || !newRagForm.marathiExam.trim()) {
      setRagToast("कृपया प्रकरणाचे नाव आणि मराठी/इंग्रजी मजकूर भरा (Please fill Chapter Name & Content).");
      setTimeout(() => setRagToast(""), 3500);
      return;
    }

    const newDoc = {
      id: `rag-custom-${Date.now()}`,
      pdfName: newRagForm.pdfName.trim() || "Science_PreCall_2.0_Custom.pdf",
      chapterName: newRagForm.chapterName.trim(),
      pageNumber: newRagForm.pageNumber.trim() || "Page 1",
      subject: newRagForm.subject,
      topic: newRagForm.topic.trim() || newRagForm.chapterName.trim(),
      keywords: newRagForm.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean),
      marathiBasic: newRagForm.marathiExam.trim(),
      marathiExam: newRagForm.marathiExam.trim(),
      marathiDeep: newRagForm.marathiExam.trim(),
      englishExplanation:
        newRagForm.englishExplanation.trim() ||
        "Verified chapter note uploaded to Science PreCall 2.0 Knowledge Base.",
      formulas: [],
      keyPoints: newRagForm.keyPoints
        .split("\n")
        .map((k) => k.trim())
        .filter(Boolean),
      mnemonic: "Uploaded via Science PreCall 2.0 RAG Vault – By Akash Jadhav",
      examPerspective: ["सदर माहिती तुमच्या सत्यापित Science PreCall 2.0 नोट्समधून घेतली आहे."],
      followUps: ["Generate 5 MPSC MCQs on this topic.", "प्रकाशाचे परावर्तन म्हणजे काय?"]
    };

    setRagDocs((prev) => [newDoc, ...prev]);
    setNewRagForm({
      pdfName: "Science_PreCall_2.0_Custom_Notes.pdf",
      chapterName: "",
      pageNumber: "Pages 1–10",
      subject: "Physics",
      topic: "",
      keywords: "",
      marathiExam: "",
      englishExplanation: "",
      keyPoints: ""
    });
    setRagToast("नवीन पाठ्यपुस्तक संदर्भ RAG डेटाबेसमध्ये यशस्वीरित्या जोडला गेला! (Added to RAG Vault!)");
    setTimeout(() => setRagToast(""), 4000);
  };

  // Handle file upload (.txt, .md, .json) into RAG Vault
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = String(event.target?.result || "").slice(0, 3000);
      setNewRagForm((prev) => ({
        ...prev,
        pdfName: file.name,
        chapterName: `Uploaded Material: ${file.name.replace(/\.[^.]+$/, "")}`,
        topic: file.name.replace(/\.[^.]+$/, ""),
        keywords: file.name
          .replace(/\.[^.]+$/, "")
          .split(/[-_\s]+/)
          .join(", "),
        marathiExam: content,
        englishExplanation: `Extracted from uploaded file "${file.name}" (${content.length} chars).`
      }));
      setRagToast(`"${file.name}" फाईल वाचली गेली! आता 'Save to RAG Vault' वर क्लिक करा.`);
      setTimeout(() => setRagToast(""), 4000);
    };
    reader.readAsText(file);
  };

  // Render Subject Icon
  const renderSubjectIcon = (iconName, className = "w-4 h-4") => {
    switch (iconName) {
      case "Atom":
        return <Atom className={className} />;
      case "FlaskConical":
        return <FlaskConical className={className} />;
      case "Sprout":
        return <Sprout className={className} />;
      case "HeartPulse":
        return <HeartPulse className={className} />;
      case "ShieldPlus":
        return <ShieldPlus className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Satellite":
        return <Satellite className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* ================================================================== */}
      {/* TOP BRANDING HEADER (Deep Navy Blue + Red Accent)                  */}
      {/* ================================================================== */}
      <header className="bg-[#0f172a] text-white border-b-4 border-[#dc2626] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
              aria-label="Toggle Navigation Sidebar"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <img
              src={OFFICIAL_BRAND_ASSETS.logo}
              alt="Science PreCall Logo - Akash Jadhav"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0 bg-white"
            />

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-xl font-extrabold tracking-tight text-white">
                  SCIENCE PRECALL AI
                </h1>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#dc2626] text-white">
                  Science PreCall 2.0
                </span>
              </div>
              <p className="text-xs text-slate-300 flex items-center gap-1.5 flex-wrap">
                <span>Your Personal Science Mentor for MPSC</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="font-semibold text-amber-300">By Akash Jadhav</span>
              </p>
            </div>
          </div>

          {/* Center Tagline on Desktop */}
          <div className="hidden xl:flex flex-col items-center bg-slate-900/90 border border-slate-700/80 px-4 py-1.5 rounded-xl">
            <span className="text-xs font-bold tracking-wide text-red-400 uppercase">
              Science Made Simple. Selection Made Possible.
            </span>
            <span className="text-[11px] text-slate-300">
              MPSC Rajyaseva • Combine Group B &amp; C • मराठी + English Bilingual Tutor
            </span>
          </div>

          {/* Right: Main View Switcher & API Status */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("chat")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "chat"
                  ? "bg-[#dc2626] text-white shadow"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Tutor</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("pyq")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "pyq"
                  ? "bg-[#dc2626] text-white shadow"
                  : "bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PYQ Papers (2025–26)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("syllabus")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "syllabus"
                  ? "bg-[#dc2626] text-white shadow"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">7 Subjects</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("rag")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "rag"
                  ? "bg-[#dc2626] text-white shadow"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">RAG Vault ({ragDocs.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("batches")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "batches"
                  ? "bg-orange-600 text-white shadow"
                  : "bg-orange-500/20 text-amber-300 border border-orange-400/40 hover:bg-orange-500/30"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Batches &amp; App</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === "code"
                  ? "bg-[#dc2626] text-white shadow"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Full-Stack Code</span>
            </button>

            <button
              type="button"
              onClick={() => setShowApiModal(true)}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center gap-1"
              title="Configure Gemini API Key"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span className="hidden md:inline">
                {geminiApiKey.trim().length > 15 ? "Gemini Live" : "API Setup"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ================================================================== */}
      {/* MAIN WORKSPACE CONTAINER                                           */}
      {/* ================================================================== */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex overflow-hidden relative">
        {/* ================================================================ */}
        {/* LEFT SIDEBAR: New Chat, Subject Filter, Answer Mode & History     */}
        {/* ================================================================ */}
        <aside
          className={`${
            mobileMenuOpen ? "fixed inset-y-0 left-0 z-40 w-80 pt-16" : "hidden"
          } lg:static lg:block lg:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 select-none`}
        >
          <div className="p-3.5 border-b border-slate-200 space-y-2.5">
            {/* Brand Card inside Sidebar with Official Logo & Quick Links */}
            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-orange-950 text-white p-3 rounded-xl shadow-sm border border-orange-500/30 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <img
                  src={OFFICIAL_BRAND_ASSETS.logo}
                  alt="Science PreCall Logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 shrink-0 bg-white"
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 block">
                    Study Together, Succeed Together
                  </span>
                  <p className="text-xs font-extrabold truncate">Akash Jadhav Sir</p>
                  <p className="text-[11px] text-slate-300 truncate">
                    MPSC | Combine | General Science
                  </p>
                </div>
              </div>

              {/* Official Social & App Links */}
              <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-white/10 text-[11px] font-bold">
                <a
                  href={OFFICIAL_BRAND_ASSETS.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-2 py-1.5 rounded-lg text-center truncate transition shadow-2xs"
                  title="Download STUDY TOGETHER App on Google Play"
                >
                  📱 Study Together App
                </a>
                <a
                  href={OFFICIAL_BRAND_ASSETS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 hover:bg-sky-500 text-white px-2 py-1.5 rounded-lg text-center truncate transition shadow-2xs"
                  title="Join Science PreCall Telegram Channel"
                >
                  ✈️ Telegram Channel
                </a>
                <a
                  href={OFFICIAL_BRAND_ASSETS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 text-white px-2 py-1.5 rounded-lg text-center truncate transition shadow-2xs"
                  title="Subscribe to Science PreCall YouTube Channel"
                >
                  ▶️ YouTube Channel
                </a>
                <a
                  href={OFFICIAL_BRAND_ASSETS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-1.5 rounded-lg text-center truncate transition shadow-2xs"
                  title="WhatsApp: 9503562529"
                >
                  💬 WA: 9503562529
                </a>
              </div>
            </div>

            {/* Action Buttons: New Chat + Clear Chat */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleNewChat}
                className="flex-1 bg-[#dc2626] hover:bg-red-700 text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <PlusCircle className="w-4 h-4" />
                <span>New Chat (नवीन चर्चा)</span>
              </button>
              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 p-2.5 rounded-xl transition"
                title="Clear Current Chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subject Selection Filter */}
          <div className="p-3.5 border-b border-slate-200">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              1. Select Science Subject (विषय निवडा)
            </label>
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              <button
                type="button"
                onClick={() => setSelectedSubject("All")}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition ${
                  selectedSubject === "All"
                    ? "bg-[#0f172a] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>All 7 Subjects (Auto-Detect)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-600 text-white">70+</span>
              </button>

              {SUBJECT_DOMAINS.map((subj) => (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => setSelectedSubject(subj.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition ${
                    selectedSubject === subj.id
                      ? "bg-[#0f172a] text-white font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {renderSubjectIcon(subj.icon, "w-3.5 h-3.5 shrink-0")}
                    <span className="truncate">
                      {subj.name} ({subj.marathi})
                    </span>
                  </span>
                  <span className="text-[10px] opacity-75">{subj.topics.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RAG Knowledge Base Status Toggle */}
          <div className="p-3.5 border-b border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                <span>Science PreCall 2.0 RAG</span>
              </span>
              <button
                type="button"
                onClick={() => setRagEnabled(!ragEnabled)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition ${
                  ragEnabled
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-300 text-slate-700"
                }`}
              >
                {ragEnabled ? "ACTIVE" : "OFF"}
              </button>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Retrieves verified answers with PDF name, Chapter &amp; Page citations.
            </p>
          </div>

          {/* Chat History List */}
          <div className="flex-1 p-3.5 overflow-y-auto">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Chat History (संभाषण इतिहास)
            </div>
            <div className="space-y-1.5">
              {sessions.map((sess) => (
                <button
                  key={sess.id}
                  type="button"
                  onClick={() => {
                    setActiveSessionId(sess.id);
                    setActiveTab("chat");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition border ${
                    sess.id === activeSessionId
                      ? "bg-blue-50/90 border-blue-900 text-[#0f172a] font-semibold"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="truncate">{sess.title}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 flex items-center justify-between">
                    <span>{sess.messages.length} messages</span>
                    <span>{sess.createdAt}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ================================================================ */}
        {/* MAIN CONTENT AREA                                                */}
        {/* ================================================================ */}
        <main className="flex-1 flex flex-col min-w-0 bg-white">
          {/* ============================================================== */}
          {/* VIEW 1: AI TUTOR CHAT INTERFACE                                */}
          {/* ============================================================== */}
          {activeTab === "chat" && (
            <div className="flex-1 flex flex-col h-full">
              {/* Special MPSC 4 Teaching Modes Bar */}
              <div className="bg-slate-100 border-b border-slate-200 px-3 sm:px-5 py-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#0f172a] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>SPECIAL MPSC TEACHING MODE (उत्तर मोड निवडा):</span>
                  </span>

                  {/* When in MCQ mode, allow choosing 5 or 10 MCQs */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium text-slate-600">MCQ Count:</span>
                    <button
                      type="button"
                      onClick={() => setMcqCount(5)}
                      className={`px-2 py-0.5 rounded text-xs font-bold ${
                        mcqCount === 5
                          ? "bg-[#0f172a] text-white"
                          : "bg-white text-slate-700 border border-slate-300"
                      }`}
                    >
                      5 MCQs
                    </button>
                    <button
                      type="button"
                      onClick={() => setMcqCount(10)}
                      className={`px-2 py-0.5 rounded text-xs font-bold ${
                        mcqCount === 10
                          ? "bg-[#0f172a] text-white"
                          : "bg-white text-slate-700 border border-slate-300"
                      }`}
                    >
                      10 MCQs
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {ANSWER_MODES.map((m) => {
                    const isSelected = selectedMode === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMode(m.id)}
                        className={`text-left p-2 rounded-xl border transition flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#0f172a] text-white border-[#dc2626] shadow-sm ring-1 ring-[#dc2626]"
                            : "bg-white text-slate-800 border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold">
                            {m.code}. {m.label}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#dc2626] shrink-0" />
                          )}
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 font-medium ${
                            isSelected ? "text-amber-300" : "text-[#dc2626]"
                          }`}
                        >
                          {m.marathiLabel}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Suggested Starter Questions + Quick Smart Tools Bar */}
              <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-5 py-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  <span className="text-[11px] font-bold text-slate-500 shrink-0 uppercase mr-1">
                    Starters:
                  </span>
                  {SUGGESTED_STARTERS.map((st, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendQuestion(st.text, st.mode, st.subject)}
                      className="shrink-0 text-xs bg-white hover:bg-blue-50 text-[#0f172a] border border-slate-300 hover:border-blue-800 px-2.5 py-1 rounded-full font-medium transition shadow-2xs"
                    >
                      {st.text}
                    </button>
                  ))}
                </div>

                {/* Quick Feature Action Triggers */}
                <div className="flex items-center gap-1.5 overflow-x-auto pt-1.5 border-t border-slate-200/70 mt-1">
                  <span className="text-[11px] font-bold text-[#dc2626] shrink-0 uppercase mr-1">
                    AI Tools:
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendQuestion(
                        "What is the difference between DNA and RNA?",
                        "MPSC_EXAM",
                        "Zoology"
                      )
                    }
                    className="shrink-0 text-[11px] bg-blue-50 hover:bg-blue-100 text-blue-950 border border-blue-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Table className="w-3 h-3 text-blue-800" />
                    <span>Compare Concepts Table</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSendQuestion(
                        "दोन समतल आरसे 45° कोनात ठेवल्यास किती प्रतिमा मिळतील?",
                        "DEEP_CONCEPT",
                        "Physics"
                      )
                    }
                    className="shrink-0 text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Calculator className="w-3 h-3 text-emerald-800" />
                    <span>Step-by-Step Numerical</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSendQuestion(
                        "मानवी पोषण व जीवनसत्त्वे (Vitamins & Deficiency Diseases) समजावून सांगा.",
                        "MPSC_EXAM",
                        "Hygiene and Public Health"
                      )
                    }
                    className="shrink-0 text-[11px] bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Lightbulb className="w-3 h-3 text-amber-800" />
                    <span>Mnemonics &amp; One-Liners</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSendQuestion(
                        "सुदूर संवेदन (Remote Sensing), GIS, GPS आणि ISRO मोहिमा स्पष्ट करा.",
                        "MPSC_EXAM",
                        "Remote Sensing"
                      )
                    }
                    className="shrink-0 text-[11px] bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Satellite className="w-3 h-3 text-purple-800" />
                    <span>Remote Sensing &amp; ICT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSendQuestion(
                        `Generate ${mcqCount} MPSC Science MCQs.`,
                        "MCQ_PRACTICE",
                        selectedSubject
                      )
                    }
                    className="shrink-0 text-[11px] bg-red-50 hover:bg-red-100 text-red-950 border border-red-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <BrainCircuit className="w-3 h-3 text-[#dc2626]" />
                    <span>Generate {mcqCount} MPSC MCQs</span>
                  </button>
                </div>
              </div>

              {/* Chat Messages Scroll Container */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-5 bg-slate-50/50">
                {activeSession.messages.map((msg) => {
                  if (msg.role === "user") {
                    return (
                      <div key={msg.id} className="flex justify-end">
                        <div className="max-w-2xl bg-[#0f172a] text-white rounded-2xl rounded-tr-xs px-4 py-3 shadow-sm border border-slate-800">
                          <div className="flex items-center justify-between gap-3 text-[11px] text-slate-300 mb-1">
                            <span className="font-semibold text-amber-300">
                              विद्यार्थी प्रश्न (Student)
                            </span>
                            <span>
                              Mode: {msg.mode} • {msg.timestamp}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base font-medium leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  const d = msg.data;
                  return (
                    <div key={msg.id} className="flex justify-start">
                      <div className="w-full max-w-4xl bg-white rounded-2xl rounded-tl-xs border border-slate-200 shadow-sm overflow-hidden">
                        {/* AI Response Top Metadata Bar */}
                        <div className="bg-[#0f172a] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#dc2626]">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="bg-[#dc2626] text-white text-[11px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                              SCIENCE PRECALL AI
                            </span>
                            <span className="text-xs font-semibold text-amber-300">
                              Subject: {d.subject}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-xs text-slate-200 font-medium">
                              Topic: {d.topic}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                              Mode: {d.mode}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleCopyText(
                                  `प्रश्न: ${d.question}\n\nमराठी स्पष्टीकरण:\n${d.marathiExplanation}\n\nEnglish Explanation:\n${d.englishExplanation}`,
                                  msg.id
                                )
                              }
                              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-1 rounded flex items-center gap-1 transition"
                              title="Copy Bilingual Answer"
                            >
                              {copiedId === msg.id ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-[11px] text-emerald-300">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span className="text-[11px]">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* RAG Source Verification Banner */}
                        <div
                          className={`px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2 border-b ${
                            d.sourceType === "TEXTBOOK_RAG" && d.citation
                              ? "bg-emerald-50/90 border-emerald-200 text-emerald-950"
                              : "bg-amber-50/80 border-amber-200 text-amber-950"
                          }`}
                        >
                          {d.sourceType === "TEXTBOOK_RAG" && d.citation ? (
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold bg-emerald-700 text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                                Verified Textbook Source (RAG)
                              </span>
                              <span className="font-semibold">{d.citation.pdfName}</span>
                              <span>•</span>
                              <span>{d.citation.chapterName}</span>
                              <span>•</span>
                              <span className="font-bold underline">{d.citation.pageNumber}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold bg-amber-700 text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                                General AI Scientific Knowledge
                              </span>
                              <span>
                                Answered from verified General Science curriculum (Upload custom PDF chapter in RAG Vault to link textbook pages)
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Main Response Body */}
                        <div className="p-4 sm:p-5 space-y-4">
                          {/* 1. Original Question */}
                          <div className="bg-slate-50 border-l-4 border-[#0f172a] p-3 rounded-r-xl">
                            <div className="text-[11px] font-bold uppercase text-slate-500">
                              प्रश्न (Question):
                            </div>
                            <div className="text-sm sm:text-base font-bold text-[#0f172a] mt-0.5">
                              {d.question}
                            </div>
                          </div>

                          {/* 2. Marathi Explanation */}
                          <div className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-[#0f172a] text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
                                मराठी स्पष्टीकरण (Marathi Explanation)
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                देवनागरी मराठी • MPSC सोपी भाषा
                              </span>
                            </div>
                            <div className="text-sm sm:text-[15px] text-slate-900 whitespace-pre-line leading-relaxed font-medium">
                              {d.marathiExplanation}
                            </div>
                          </div>

                          {/* 3. English Explanation */}
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-[#dc2626] text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
                                English Explanation
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                Scientific Concept &amp; Mechanism
                              </span>
                            </div>
                            <div className="text-sm sm:text-[15px] text-slate-800 whitespace-pre-line leading-relaxed">
                              {d.englishExplanation}
                            </div>
                          </div>

                          {/* Optional Text-Based Scientific Diagram */}
                          {d.diagramText && (
                            <div className="bg-slate-900 text-emerald-300 rounded-xl p-4 overflow-x-auto border border-slate-700">
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                                वैज्ञानिक आकृती / प्रवाह तक्ता (Scientific Text Diagram):
                              </div>
                              <pre className="text-xs sm:text-sm font-mono leading-snug">
                                {d.diagramText}
                              </pre>
                            </div>
                          )}

                          {/* Optional Concept Comparison Table */}
                          {d.comparisonTable && (
                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 text-xs font-bold text-[#0f172a] flex items-center gap-1.5">
                                <Table className="w-4 h-4 text-[#dc2626]" />
                                <span>तुलनात्मक तक्ता (Scientific Comparison Table)</span>
                              </div>
                              <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                  <thead>
                                    <tr className="bg-[#0f172a] text-white">
                                      {d.comparisonTable.headers.map((h, i) => (
                                        <th key={i} className="p-2.5 font-semibold border-r border-slate-700 last:border-0">
                                          {h}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {d.comparisonTable.rows.map((row, rIdx) => (
                                      <tr
                                        key={rIdx}
                                        className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                                      >
                                        {row.map((cell, cIdx) => (
                                          <td
                                            key={cIdx}
                                            className={`p-2.5 border-t border-r border-slate-200 last:border-r-0 ${
                                              cIdx === 0 ? "font-bold text-[#0f172a]" : "text-slate-800"
                                            }`}
                                          >
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {/* Interactive MPSC MCQs Block (when in MCQ Practice Mode) */}
                          {d.mcqs && d.mcqs.length > 0 && (
                            <div className="space-y-4 pt-2">
                              <div className="flex items-center justify-between bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl">
                                <span className="text-xs sm:text-sm font-bold text-red-950">
                                  MPSC Bilingual MCQ Practice ({d.mcqs.length} Questions) — पर्यायावर क्लिक करून उत्तर तपासा!
                                </span>
                                <span className="text-xs font-bold bg-[#dc2626] text-white px-2.5 py-1 rounded-lg">
                                  4-Option Detailed Analysis
                                </span>
                              </div>

                              {d.mcqs.map((mcq, idx) => {
                                const answerKey = `${msg.id}_${mcq.id}`;
                                const userChoice = mcqAnswers[answerKey];
                                const isAnswered = Boolean(userChoice);
                                const isCorrect = userChoice === mcq.correctOption;

                                return (
                                  <div
                                    key={mcq.id}
                                    className="border border-slate-300 rounded-xl p-4 bg-white shadow-2xs space-y-3"
                                  >
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                      <span className="font-bold text-[#0f172a] bg-slate-100 px-2.5 py-0.5 rounded">
                                        प्रश्न क्र. {idx + 1} • {mcq.subject} ({mcq.topic})
                                      </span>
                                      {isAnswered && (
                                        <span
                                          className={`font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                                            isCorrect
                                              ? "bg-emerald-100 text-emerald-800"
                                              : "bg-red-100 text-red-800"
                                          }`}
                                        >
                                          {isCorrect ? (
                                            <>
                                              <CheckCircle2 className="w-3.5 h-3.5" />
                                              <span>बरोबर उत्तर! (Correct)</span>
                                            </>
                                          ) : (
                                            <>
                                              <XCircle className="w-3.5 h-3.5" />
                                              <span>चूक! अचूक पर्याय: {mcq.correctOption}</span>
                                            </>
                                          )}
                                        </span>
                                      )}
                                    </div>

                                    <div className="text-sm sm:text-base font-bold text-slate-900">
                                      {mcq.questionMarathi}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-700 font-medium">
                                      {mcq.questionEnglish}
                                    </div>

                                    {/* 4 Options */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                      {mcq.options.map((opt) => {
                                        const isThisSelected = userChoice === opt.id;
                                        const isThisCorrect = opt.id === mcq.correctOption;

                                        let btnStyle =
                                          "bg-slate-50 hover:bg-blue-50 border-slate-300 text-slate-800";
                                        if (isAnswered) {
                                          if (isThisCorrect) {
                                            btnStyle =
                                              "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600";
                                          } else if (isThisSelected && !isThisCorrect) {
                                            btnStyle =
                                              "bg-red-50 border-red-500 text-red-950 font-semibold";
                                          }
                                        }

                                        return (
                                          <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() =>
                                              setMcqAnswers((prev) => ({
                                                ...prev,
                                                [answerKey]: opt.id
                                              }))
                                            }
                                            className={`text-left p-2.5 rounded-xl border text-xs sm:text-sm transition flex items-start gap-2 ${btnStyle}`}
                                          >
                                            <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                              {opt.id}
                                            </span>
                                            <div>
                                              <div className="font-semibold">{opt.textMarathi}</div>
                                              <div className="text-xs opacity-80">{opt.textEnglish}</div>
                                            </div>
                                          </button>
                                        );
                                      })}
                                    </div>

                                    {/* Detailed Bilingual Explanation of All 4 Options */}
                                    {isAnswered && (
                                      <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-xs sm:text-sm">
                                        <div className="font-bold text-[#0f172a]">
                                          • अचूक उत्तर: पर्याय ({mcq.correctOption})
                                        </div>
                                        <p className="text-slate-800 font-medium">
                                          <span className="font-bold text-blue-900">मराठी स्पष्टीकरण: </span>
                                          {mcq.explanationMarathi}
                                        </p>
                                        <p className="text-slate-700">
                                          <span className="font-bold text-red-800">English Explanation: </span>
                                          {mcq.explanationEnglish}
                                        </p>
                                        <div className="pt-2 border-t border-slate-200">
                                          <div className="font-bold text-xs uppercase text-slate-600 mb-1.5">
                                            चारही पर्यायांचे विश्लेषण (All 4 Options Breakdown):
                                          </div>
                                          <ul className="space-y-1 text-xs text-slate-800">
                                            {Object.entries(mcq.optionBreakdown).map(([k, val]) => (
                                              <li key={k} className="flex items-start gap-1.5">
                                                <span className="font-bold text-[#dc2626]">•</span>
                                                <span>{val}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* 4. महत्त्वाचे मुद्दे (Key Points & Formulas & Mnemonics) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {/* Key Points */}
                            {d.keyPoints && d.keyPoints.length > 0 && (
                              <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0f172a] mb-2 flex items-center gap-1.5">
                                  <Award className="w-4 h-4 text-[#dc2626]" />
                                  <span>महत्त्वाचे मुद्दे (Key Points &amp; Examples)</span>
                                </div>
                                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                                  {d.keyPoints.map((kp, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-[#dc2626] font-bold">▪</span>
                                      <span>{kp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Formulas & Mnemonics */}
                            <div className="space-y-3">
                              {d.formulas && d.formulas.length > 0 && (
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0f172a] mb-2 flex items-center gap-1.5">
                                    <Calculator className="w-4 h-4 text-blue-800" />
                                    <span>महत्त्वाची सूत्रे व नियम (Formulas &amp; Units)</span>
                                  </div>
                                  <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-900">
                                    {d.formulas.map((fm, i) => (
                                      <li key={i} className="bg-white px-2.5 py-1.5 rounded border border-slate-200">
                                        {fm}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {d.mnemonic && (
                                <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-3">
                                  <div className="text-xs font-extrabold uppercase text-amber-900 flex items-center gap-1.5 mb-1">
                                    <Lightbulb className="w-4 h-4 text-amber-600" />
                                    <span>स्मरण क्लृप्ती (Memory Trick / Mnemonic)</span>
                                  </div>
                                  <p className="text-xs sm:text-sm font-semibold text-amber-950">
                                    {d.mnemonic}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* 5. MPSC Exam Perspective */}
                          {d.examPerspective && d.examPerspective.length > 0 && (
                            <div className="bg-red-50/70 border border-red-200 rounded-xl p-3.5">
                              <div className="text-xs font-extrabold uppercase tracking-wider text-[#dc2626] mb-1.5 flex items-center gap-1.5">
                                <GraduationCap className="w-4 h-4" />
                                <span>MPSC Exam Perspective (पूर्व व मुख्य परीक्षा दृष्टिकोन)</span>
                              </div>
                              <ul className="space-y-1 text-xs sm:text-sm text-slate-900 font-medium">
                                {d.examPerspective.map((ep, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#dc2626] font-bold">★</span>
                                    <span>{ep}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 6. Contextual Follow-Up Questions */}
                          {d.followUps && d.followUps.length > 0 && (
                            <div className="pt-2 border-t border-slate-200">
                              <div className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                                पुढील संभाव्य प्रश्न विचारा (Suggested Follow-Up Questions):
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {d.followUps.map((fq, i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => handleSendQuestion(fq)}
                                    className="text-xs bg-slate-100 hover:bg-[#0f172a] text-slate-800 hover:text-white px-3 py-1.5 rounded-full font-medium transition flex items-center gap-1"
                                  >
                                    <span>{fq}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {isGenerating && (
                  <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-4 max-w-md shadow-xs">
                    <RefreshCw className="w-5 h-5 text-[#dc2626] animate-spin shrink-0" />
                    <div className="text-xs sm:text-sm font-semibold text-slate-700">
                      Science PreCall AI द्विभाषिक स्पष्टीकरण तयार करत आहे...
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Bottom Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendQuestion();
                }}
                className="p-3 sm:p-4 bg-white border-t border-slate-200 shadow-lg"
              >
                <div className="flex items-center gap-2 max-w-5xl mx-auto">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="तुमचा सामान्य विज्ञानाचा प्रश्न मराठी किंवा English मध्ये विचारा (उदा. प्रकाशाचे परावर्तन म्हणजे काय? / Explain DNA vs RNA)..."
                    className="flex-1 bg-slate-50 border border-slate-300 focus:border-[#0f172a] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isGenerating}
                    className="bg-[#dc2626] hover:bg-red-700 disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-sm transition shrink-0 text-sm"
                  >
                    <span>Send</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW 2: 7 SUBJECTS & 71 MPSC SYLLABUS TOPICS EXPLORER          */}
          {/* ============================================================== */}
          {activeTab === "syllabus" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50">
              <div className="bg-[#0f172a] text-white p-5 rounded-2xl border-l-8 border-[#dc2626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Complete MPSC General Science Syllabus
                  </span>
                  <h2 className="text-xl font-extrabold mt-0.5">
                    7 Core Subjects &amp; 70+ Knowledge Domains
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    कोणत्याही घटकावर क्लिक करा—Science PreCall AI लगेच मराठी व इंग्रजीत सविस्तर शिकवेल!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("chat")}
                  className="bg-[#dc2626] hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0"
                >
                  Back to AI Chat
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SUBJECT_DOMAINS.map((domain) => (
                  <div
                    key={domain.id}
                    className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2.5 rounded-xl ${domain.color}`}>
                            {renderSubjectIcon(domain.icon, "w-5 h-5")}
                          </div>
                          <div>
                            <h3 className="text-base font-extrabold text-[#0f172a]">
                              {domain.name}
                            </h3>
                            <p className="text-xs font-semibold text-[#dc2626]">
                              {domain.marathi}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                          {domain.topics.length} Topics
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {domain.topics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() =>
                              handleSendQuestion(
                                `Explain ${topic} (${domain.marathi}) for MPSC exam in Marathi and English.`,
                                selectedMode,
                                domain.id
                              )
                            }
                            className="text-xs bg-slate-50 hover:bg-[#0f172a] text-slate-800 hover:text-white border border-slate-200 px-2.5 py-1.5 rounded-lg font-medium transition"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() =>
                          handleSendQuestion(
                            `Generate ${mcqCount} MPSC Science MCQs on ${domain.name}.`,
                            "MCQ_PRACTICE",
                            domain.id
                          )
                        }
                        className="text-xs font-bold text-[#dc2626] hover:underline flex items-center gap-1"
                      >
                        <span>Practice {domain.name} MCQs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW 3: SCIENCE PRECALL 2.0 RAG KNOWLEDGE BASE VAULT           */}
          {/* ============================================================== */}
          {activeTab === "rag" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50">
              <div className="bg-[#0f172a] text-white p-5 rounded-2xl border-l-8 border-emerald-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Retrieval-Augmented Generation (RAG) Architecture
                  </span>
                  <h2 className="text-xl font-extrabold mt-0.5">
                    Science PreCall 2.0 Textbook &amp; Notes Vault
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    येथे तुम्ही तुमचे Science PreCall 2.0 PDF पाठ्यपुस्तक, प्रकरणानुसार नोट्स, PYQ आणि उजळणी नोट्स जोडू शकता. उत्तर देताना AI अचूक PDF नाव, प्रकरण आणि पृष्ठ क्रमांक दाखवतो!
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setRagEnabled(!ragEnabled)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold ${
                      ragEnabled ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    RAG Status: {ragEnabled ? "ENABLED" : "DISABLED"}
                  </button>
                </div>
              </div>

              {ragToast && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{ragToast}</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Add/Upload New Textbook Chapter to RAG */}
                <form
                  onSubmit={handleAddRagDoc}
                  className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="text-sm font-extrabold text-[#0f172a] flex items-center gap-1.5">
                      <Upload className="w-4 h-4 text-[#dc2626]" />
                      <span>Upload / Add Verified Textbook Material</span>
                    </h3>
                    <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-lg">
                      <span>Import .txt/.md</span>
                      <input
                        type="file"
                        accept=".txt,.md,.json,.csv"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Source PDF Name (स्रोत PDF नाव)
                    </label>
                    <input
                      type="text"
                      value={newRagForm.pdfName}
                      onChange={(e) => setNewRagForm({ ...newRagForm, pdfName: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                      placeholder="e.g., Science_PreCall_2.0_Textbook.pdf"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject (विषय)
                      </label>
                      <select
                        value={newRagForm.subject}
                        onChange={(e) => setNewRagForm({ ...newRagForm, subject: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs bg-white"
                      >
                        {SUBJECT_DOMAINS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.marathi})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Page Number (पृष्ठ क्र.)
                      </label>
                      <input
                        type="text"
                        value={newRagForm.pageNumber}
                        onChange={(e) =>
                          setNewRagForm({ ...newRagForm, pageNumber: e.target.value })
                        }
                        className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                        placeholder="e.g., Pages 45–48"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Chapter Name (प्रकरणाचे नाव) *
                    </label>
                    <input
                      type="text"
                      value={newRagForm.chapterName}
                      onChange={(e) =>
                        setNewRagForm({ ...newRagForm, chapterName: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                      placeholder="उदा. प्रकरण ४: गुरुत्वाकर्षण (Gravitation)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Search Keywords (कॉमाने वेगळे करा)
                    </label>
                    <input
                      type="text"
                      value={newRagForm.keywords}
                      onChange={(e) => setNewRagForm({ ...newRagForm, keywords: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                      placeholder="e.g., गुरुत्वाकर्षण, gravitation, escape velocity, मुक्ती वेग"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Marathi Textbook Explanation (मराठी स्पष्टीकरण) *
                    </label>
                    <textarea
                      rows={3}
                      value={newRagForm.marathiExam}
                      onChange={(e) =>
                        setNewRagForm({ ...newRagForm, marathiExam: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                      placeholder="तुमच्या Science PreCall 2.0 पुस्तकातील मराठी उतारा येथे पेस्ट करा..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      English Textbook Explanation
                    </label>
                    <textarea
                      rows={2}
                      value={newRagForm.englishExplanation}
                      onChange={(e) =>
                        setNewRagForm({ ...newRagForm, englishExplanation: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                      placeholder="Paste corresponding English explanation or summary..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition"
                  >
                    Save Chapter to Science PreCall 2.0 RAG Vault
                  </button>
                </form>

                {/* Right Column: Indexed Textbook Chunks */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-bold uppercase text-slate-500">
                    Indexed Science PreCall 2.0 Textbook Chapters ({ragDocs.length})
                  </div>
                  {ragDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                          {doc.pdfName}
                        </span>
                        <span className="text-xs font-bold text-[#0f172a] bg-slate-100 px-2.5 py-0.5 rounded">
                          {doc.pageNumber}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#0f172a]">{doc.chapterName}</div>
                      <p className="text-xs text-slate-700 line-clamp-2">{doc.marathiExam}</p>
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                        <span className="text-[11px] text-slate-500">
                          Subject: <strong>{doc.subject}</strong> • Topic: {doc.topic}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleSendQuestion(
                              `Explain ${doc.topic} from Science PreCall 2.0 textbook.`,
                              "MPSC_EXAM",
                              doc.subject
                            )
                          }
                          className="text-xs font-bold text-[#dc2626] hover:underline flex items-center gap-1"
                        >
                          <span>Ask AI from this Chapter</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW 5: OFFICIAL BATCHES, TARGET 2026 POSTER & APP LINKS       */}
          {/* ============================================================== */}
          {activeTab === "batches" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50">
              {/* Top Hero Banner */}
              <div className="bg-gradient-to-r from-[#0f172a] via-slate-900 to-orange-950 text-white p-5 sm:p-6 rounded-2xl border-l-8 border-orange-500 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <img
                    src={OFFICIAL_BRAND_ASSETS.logo}
                    alt="Science PreCall Logo"
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg bg-white shrink-0"
                  />
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-600 text-white">
                      STUDY TOGETHER, SUCCEED TOGETHER
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold mt-1.5">
                      SCIENCE PreCall – By Akash Jadhav (MPSC मार्गदर्शक)
                    </h2>
                    <p className="text-xs sm:text-sm text-amber-300 font-semibold mt-1">
                      योग्य मार्गदर्शन • PYQ ANALYSIS • 1 TO 1 PERSONAL GUIDANCE
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      ध्येय निश्चित करा, मेहनत करा, यश नक्की मिळवा!
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 shrink-0">
                  <a
                    href={OFFICIAL_BRAND_ASSETS.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5"
                  >
                    <span>📲 Download STUDY TOGETHER App</span>
                  </a>
                  <a
                    href={OFFICIAL_BRAND_ASSETS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5"
                  >
                    <span>💬 WhatsApp: 9503562529</span>
                  </a>
                </div>
              </div>

              {/* Official Course Poster + Exam Target Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Official Poster Card */}
                <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase text-[#0f172a]">
                      Official MPSC Combine Science Guidance Poster
                    </span>
                    <span className="text-[11px] font-bold text-orange-600">
                      Akash Jadhav Sir
                    </span>
                  </div>
                  <img
                    src={OFFICIAL_BRAND_ASSETS.poster}
                    alt="Science PreCall MPSC Guidance Poster"
                    className="w-full h-auto rounded-xl border border-slate-200 shadow-xs"
                  />
                </div>

                {/* Right Column: Exam Targets, Features, Social Links & Mentor Inspiration */}
                <div className="lg:col-span-6 space-y-4">
                  {/* Upcoming Exam Targets Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                    <h3 className="text-base font-extrabold text-[#0f172a] border-b border-slate-100 pb-2">
                      🎯 MPSC परीक्षा टार्गेट (Upcoming Exam Targets 2026)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-orange-500">
                        <div className="text-xs font-bold text-orange-400 uppercase">
                          गट ब - मुख्य परीक्षा (Group B Mains)
                        </div>
                        <div className="text-lg font-extrabold mt-1">5 डिसेंबर 2026</div>
                        <div className="mt-2 inline-block bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          20 पैकी 15+ चे Target
                        </div>
                      </div>

                      <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-orange-500">
                        <div className="text-xs font-bold text-orange-400 uppercase">
                          गट क - पूर्व परीक्षा (Group C Prelims)
                        </div>
                        <div className="text-lg font-extrabold mt-1">25 ऑक्टोबर 2026</div>
                        <div className="mt-2 inline-block bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          15 पैकी 12+ चे Target
                        </div>
                      </div>
                    </div>

                    {/* काय मिळणार? */}
                    <div className="bg-orange-50/70 border border-orange-200 rounded-xl p-4 space-y-2">
                      <div className="text-xs font-extrabold uppercase text-orange-950">
                        काय मिळणार? (What You Will Get in Science PreCall):
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>PYQ ANALYSIS वर आधारित अध्ययन</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Concept Clarity + Smart Approach</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Science मधील महत्त्वाचे Topics</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>PYQ ANALYSIS Notes (मराठी + English)</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>MCQ Practice + Detailed Explanation</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>1 TO 1 Personal Guidance</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Official Platforms & Contact Links Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                    <h3 className="text-sm font-extrabold text-[#0f172a]">
                      🔗 अधिकृत प्लॅटफॉर्म्स आणि संपर्क (Join Science PreCall Official Channels)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold">
                      <a
                        href={OFFICIAL_BRAND_ASSETS.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-300 text-orange-950 flex items-center justify-between transition"
                      >
                        <div>
                          <div className="text-[10px] uppercase text-orange-700">Google Play Store App</div>
                          <div className="text-sm font-extrabold">STUDY TOGETHER</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-orange-600" />
                      </a>

                      <a
                        href={OFFICIAL_BRAND_ASSETS.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-950 flex items-center justify-between transition"
                      >
                        <div>
                          <div className="text-[10px] uppercase text-sky-700">Official Telegram</div>
                          <div className="text-sm font-extrabold">t.me/sciencePreCall2</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-sky-600" />
                      </a>

                      <a
                        href={OFFICIAL_BRAND_ASSETS.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-red-50 hover:bg-red-100 border border-red-300 text-red-950 flex items-center justify-between transition"
                      >
                        <div>
                          <div className="text-[10px] uppercase text-red-700">Official YouTube</div>
                          <div className="text-sm font-extrabold">@scienceprecall</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-red-600" />
                      </a>

                      <a
                        href={OFFICIAL_BRAND_ASSETS.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 flex items-center justify-between transition"
                      >
                        <div>
                          <div className="text-[10px] uppercase text-emerald-700">WhatsApp Helpline</div>
                          <div className="text-sm font-extrabold">+91 9503562529</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                      </a>
                    </div>
                  </div>

                  {/* Mentor Inspiration Card with Uploaded Flag Photo */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                    <img
                      src={OFFICIAL_BRAND_ASSETS.mentorPhoto}
                      alt="Akash Jadhav - Janta Raja Inspiration"
                      className="w-20 h-24 rounded-xl object-cover border border-orange-300 shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                        प्रेरणास्थान • स्वराज्य व जिद्द
                      </span>
                      <h4 className="text-sm font-extrabold text-[#0f172a]">
                        Akash Jadhav – Science PreCall 2.0
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        &ldquo;ध्येय निश्चित करा, मेहनत करा, यश नक्की मिळवा! Study Together, Succeed Together.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW 4: FULL-STACK NEXT.JS CODE, API & DEPLOYMENT GUIDE        */}
          {/* ============================================================== */}
          {activeTab === "code" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50">
              <div className="bg-[#0f172a] text-white p-5 rounded-2xl border-l-8 border-amber-400">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Production Architecture – Next.js + @google/genai + RAG
                </span>
                <h2 className="text-xl font-extrabold mt-0.5">
                  Complete Full-Stack Source Code &amp; Setup Guide
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Never expose your Gemini API key in frontend code! Use the backend route (`app/api/chat/route.ts`) and `.env.local` configuration below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="text-xs font-extrabold uppercase text-[#0f172a]">
                    1. Project Folder Structure
                  </div>
                  <pre className="bg-slate-900 text-slate-100 p-3.5 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`science-precall-ai/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts       # Secure Gemini Backend API
│   ├── globals.css            # Tailwind + Devanagari Fonts
│   ├── layout.tsx             # Root Layout & Branding
│   └── page.tsx               # Science PreCall AI UI
├── lib/
│   ├── systemPrompt.ts        # Akash Jadhav System Prompt
│   └── ragStore.ts            # Science PreCall 2.0 RAG Engine
├── .env.example               # GEMINI_API_KEY template
├── package.json               # @google/genai, next, react
└── README.md                  # Full Setup & Deployment Guide`}
                  </pre>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="text-xs font-extrabold uppercase text-[#0f172a]">
                    2. Environment Variable &amp; Local Setup (.env.local)
                  </div>
                  <pre className="bg-slate-900 text-emerald-300 p-3.5 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`# Step 1: Get your API key at https://aistudio.google.com/apikey
# Step 2: Save inside .env.local (Server-Only, never exposed!)
GEMINI_API_KEY="AIzaSyYourActualGeminiKeyHere"
GEMINI_MODEL="gemini-2.5-flash"

# Step 3: Install & Run locally
npm install
npm run dev
# Visit http://localhost:3000`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ================================================================== */}
      {/* MODAL 1: CLEAR CHAT CONFIRMATION (No browser confirm() blocked)    */}
      {/* ================================================================== */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-extrabold text-[#0f172a]">
              Clear Current Chat? (संभाषण साफ करायचे का?)
            </h3>
            <p className="text-xs text-slate-600">
              या सत्रातील सर्व प्रश्न व उत्तरे साफ केली जातील. तुमचा RAG डेटाबेस सुरक्षित राहील.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmClearChat}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#dc2626] text-white"
              >
                Yes, Clear Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* MODAL 2: GEMINI API LIVE CONNECTOR SETTINGS                        */}
      {/* ================================================================== */}
      {showApiModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#0f172a]">
                  Gemini API &amp; Fallback Engine Setup
                </h3>
                <p className="text-xs text-slate-500">
                  SCIENCE PRECALL AI – Dual Engine Configuration
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowApiModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl text-xs text-blue-950 space-y-1">
              <div className="font-bold">How it works in Production vs. Sandbox Preview:</div>
              <p>
                • <strong>In Production (Next.js zip package):</strong> Your <code>GEMINI_API_KEY</code> stays strictly inside server <code>.env.local</code> and is called by <code>/api/chat/route.ts</code>.
              </p>
              <p>
                • <strong>In Live Preview:</strong> The built-in <strong>Science PreCall 2.0 Bilingual Rule-Based &amp; RAG Engine</strong> is active by default so you can test immediately without an API key, or paste a test Gemini API key below for session-only live calls.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Optional Session Gemini API Key (For Live Browser Test)
              </label>
              <input
                type="password"
                value={geminiApiKey}
                onChange={(e) => setGeminiApiKey(e.target.value)}
                placeholder="Paste AIzaSy... key (or leave blank for built-in MPSC Engine)"
                className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Gemini Model
              </label>
              <select
                value={geminiModel}
                onChange={(e) => setGeminiModel(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs bg-white"
              >
                <option value="gemini-2.5-flash">gemini-2.5-flash (Recommended Fast Bilingual)</option>
                <option value="gemini-2.5-pro">gemini-2.5-pro (Deep Reasoning &amp; Stem)</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowApiModal(false)}
                className="bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl"
              >
                Save &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
