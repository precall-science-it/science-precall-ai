// lib/ragStore.ts
// Retrieval-Augmented Generation (RAG) Engine for Science PreCall 2.0 Knowledge Base

export interface RagChunk {
  id: string;
  pdfName: string;
  chapterName: string;
  pageNumber: string;
  subject: string;
  topic: string;
  keywords: string[];
  contentMarathi: string;
  contentEnglish: string;
  keyFacts: string[];
  examTips: string[];
}

export const INITIAL_RAG_CHUNKS: RagChunk[] = [
  {
    id: "sp2-phy-01",
    pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
    chapterName: "Chapter 6: Light, Reflection and Refraction (प्रकाश: परावर्तन आणि अपवर्तन)",
    pageNumber: "Pages 112–118",
    subject: "Physics",
    topic: "Light, Reflection and Refraction",
    keywords: ["प्रकाशाचे परावर्तन", "reflection", "light", "mirror", "आरसा", "अपवर्तन", "refraction", "laws of reflection", "परावर्तनाचे नियम"],
    contentMarathi: "प्रकाशाचे परावर्तन (Reflection of Light): जेव्हा प्रकाशकिरण एका माध्यमातून प्रवास करत असताना एखाद्या गुळगुळीत व चकचकीत पृष्ठभागावर (उदा. समतल आरसा) आदळतात आणि पुन्हा त्याच माध्यमात परत फिरतात, या नैसर्गिक घटनेला 'प्रकाशाचे परावर्तन' असे म्हणतात. परावर्तनाचे दोन प्रमुख नियम आहेत: (१) आपाती कोन (Angle of Incidence - i) आणि परावर्तित कोन (Angle of Reflection - r) हे नेहमी समान मापाचे असतात (∠i = ∠r). (२) आपाती किरण, आपतन बिंदूवर काढलेला स्तंभिका (Normal) आणि परावर्तित किरण हे तिन्ही एकाच प्रतलात (Same Plane) असतात.",
    contentEnglish: "Reflection of Light is the phenomenon of bouncing back of light rays into the same medium when they strike a smooth, polished surface such as a plane mirror. Laws of Reflection: (1) The Angle of Incidence (∠i) is always equal to the Angle of Reflection (∠r). (2) The incident ray, the normal at the point of incidence, and the reflected ray all lie in the same plane. Regular reflection occurs on smooth surfaces (forming clear images), whereas irregular/diffused reflection occurs on rough surfaces.",
    keyFacts: [
      "Formula: ∠i = ∠r (आपाती कोन = परावर्तित कोन)",
      "Number of images in two plane mirrors inclined at angle θ: n = (360° / θ) - 1",
      "Plane mirror image is always virtual, erect, laterally inverted, and equal in size to the object (समतल आरशातील प्रतिमा आभासी, सुलट, बाजूने उलट आणि वस्तूएवढीच असते).",
      "Minimum height of a plane mirror required to see full image of a person of height H is H/2."
    ],
    examTips: [
      "MPSC Prelims frequently asks numericals on the number of images formed between two inclined plane mirrors (e.g., at 90°, n = 3; at 60°, n = 5).",
      "Periscope works on the principle of reflection by two plane mirrors inclined at 45°; Kaleidoscope uses three plane mirrors inclined at 60°."
    ]
  },
  {
    id: "sp2-phy-02",
    pdfName: "Science_PreCall_2.0_Physics_Masterbook.pdf",
    chapterName: "Chapter 2: Motion, Force and Laws of Motion (गती, बल आणि गतीचे नियम)",
    pageNumber: "Pages 28–39",
    subject: "Physics",
    topic: "Motion, Force and Laws of Motion",
    keywords: ["newton", "laws of motion", "न्यूटन", "गतीचे नियम", "inertia", "जडत्व", "momentum", "संवेग", "force", "बल"],
    contentMarathi: "सर आयझॅक न्यूटन यांनी १६८७ मध्ये त्यांच्या 'प्रिन्सिपिया' (Principia) या ग्रंथात गतीचे तीन मूलभूत नियम मांडले: १. पहिला नियम (जडत्वाचा नियम - Law of Inertia): जोपर्यंत एखाद्या वस्तूवर बाह्य असंतुलित बल प्रयुक्त होत नाही, तोपर्यंत स्थिर वस्तू स्थिरच राहते आणि गतिमान वस्तू त्याच वेगाने सरळ रेषेत गतिमान राहते. २. दुसरा नियम (संवेगाचा नियम - Law of Momentum): संवेग परिवर्तनाचा दर हा प्रयुक्त बलाशी समानुपाती असतो आणि संवेगातील बदल बलाच्या दिशेने होतो (F = m × a). ३. तिसरा नियम (क्रिया-प्रतिक्रिया नियम - Action-Reaction Law): प्रत्येक क्रियेला तेवढ्याच परिमाणाची परंतु विरुद्ध दिशेने प्रतिक्रिया असते.",
    contentEnglish: "Sir Isaac Newton formulated three fundamental Laws of Motion in his book 'Principia' (1687): 1. First Law (Law of Inertia): Every object continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force. It defines Force and Inertia. 2. Second Law (Law of Force & Momentum): The rate of change of momentum is directly proportional to the applied unbalanced force and takes place in the direction of force (F = dp/dt = m·a). It gives the quantitative formula of Force. 3. Third Law (Law of Action and Reaction): To every action, there is always an equal and opposite reaction (F₁₂ = -F₂₁); action and reaction act on two different bodies.",
    keyFacts: [
      "Force Formula: F = m × a | Momentum: p = m × v | Impulse (आवेग): J = F × Δt = Δp",
      "SI Unit of Force: Newton (N) = kg·m/s²; CGS Unit: Dyne (1 N = 10⁵ Dyne).",
      "SI Unit of Momentum: kg·m/s.",
      "Examples: 1st Law – Passengers jerk backward when a bus starts suddenly; 2nd Law – Fielder pulling hands back while catching a fast cricket ball; 3rd Law – Rocket propulsion and recoil of a gun."
    ],
    examTips: [
      "MPSC often tests matching daily-life examples to the exact Newton's Law and converting Newton to Dyne (1 N = 10⁵ dyne).",
      "Remember: Action and reaction forces never cancel each other because they act on two DIFFERENT objects."
    ]
  },
  {
    id: "sp2-bio-01",
    pdfName: "Science_PreCall_2.0_Biology_Compendium.pdf",
    chapterName: "Chapter 5: Cell Biology & Genetics (पेशी विज्ञान आणि आनुवंशिकता)",
    pageNumber: "Pages 144–152",
    subject: "Zoology",
    topic: "Genetics",
    keywords: ["dna", "rna", "genetics", "डीएनए", "आरएनए", "जडणघडण", "nucleic acid", "double helix", "uracil", "thymine"],
    contentMarathi: "DNA (Deoxyribonucleic Acid) आणि RNA (Ribonucleic Acid) हे सजीवांमधील दोन प्रमुख केंद्रकीय आम्ले (Nucleic Acids) आहेत. DNA हा बहुतांश सजीवांमध्ये आनुवंशिक माहिती साठवणारा आणि एका पिढीतून दुसऱ्या पिढीत संक्रमित करणारा मुख्य रेणू आहे. याची द्विसर्पिलाकार (Double Helix) रचना १९५३ मध्ये वॅटसन आणि क्रिक (Watson & Crick) यांनी शोधली. याउलट RNA हा एकसर्पिलाकार (Single-stranded) असून त्याचे मुख्य कार्य प्रथिने संश्लेषण (Protein Synthesis) करणे आणि काही विषाणूंमध्ये (Retroviruses) जनुकीय घटक म्हणून कार्य करणे हे आहे.",
    contentEnglish: "DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid) are the two primary nucleic acids in living organisms. DNA stores and transmits hereditary information across generations and features a Double Helix structure (discovered by James Watson and Francis Crick in 1953). RNA is typically single-stranded and plays a central role in protein synthesis (via mRNA, tRNA, rRNA) and acts as the genetic material in RNA viruses (e.g., HIV, SARS-CoV-2, Influenza).",
    keyFacts: [
      "Sugar difference: DNA contains Deoxyribose sugar (C₅H₁₀O₄); RNA contains Ribose sugar (C₅H₁₀O₅).",
      "Nitrogenous Bases in DNA: Adenine (A), Guanine (G), Cytosine (C), Thymine (T). Pairing: A=T (2 H-bonds), G≡C (3 H-bonds).",
      "Nitrogenous Bases in RNA: Adenine (A), Guanine (G), Cytosine (C), Uracil (U) instead of Thymine.",
      "Location: DNA is found in the Nucleus, Mitochondria, and Chloroplasts (हरितलवक); RNA is found in the Nucleus, Cytoplasm, and Ribosomes."
    ],
    examTips: [
      "MPSC repeatedly asks: Which nitrogen base replaces Thymine in RNA? Answer: Uracil (युरॅसिल).",
      "Also note: Mitochondria and Plastids (Chloroplasts) are semi-autonomous organelles because they possess their own circular DNA and 70S ribosomes."
    ]
  },
  {
    id: "sp2-bio-02",
    pdfName: "Science_PreCall_2.0_Biology_Compendium.pdf",
    chapterName: "Chapter 7: Human Body Systems – Nutrition & Digestion (मानवी पचनसंस्था व ग्रंथी)",
    pageNumber: "Pages 189–195",
    subject: "Zoology",
    topic: "Nutrition and Digestion",
    keywords: ["सर्वात मोठी ग्रंथी", "largest gland", "liver", "यकृत", "gland", "bile", "पित्तरस", "pancreas", "स्वादुपिंड", "thyroid"],
    contentMarathi: "मानवी शरीरातील सर्वात मोठी ग्रंथी (Largest Gland in Human Body) म्हणजे 'यकृत' (Liver) होय. प्रौढ व्यक्तीमध्ये यकृताचे वजन साधारणपणे १.२ ते १.५ किलोग्रॅम (सुमारे १५०० ग्रॅम) असते. यकृत ही बाह्यस्रावी ग्रंथी (Exocrine Gland) असून ती उदरपोकळीच्या उजव्या वरच्या बाजूला मध्यपटलाच्या (Diaphragm) खाली स्थित असते. यकृताचे प्रमुख कार्य म्हणजे 'पित्तरस' (Bile Juice) स्रवणे, जो पित्ताशयात (Gall Bladder) साठवला जातो आणि स्निग्ध पदार्थांचे पायसीकरण (Emulsification of Fats) करण्यास मदत करतो.",
    contentEnglish: "The Liver (यकृत) is the largest internal organ and the largest gland (specifically the largest exocrine gland) in the human body, weighing approximately 1.2 to 1.5 kg in adults. Located in the upper right quadrant of the abdominal cavity beneath the diaphragm, it secretes Bile Juice (stored in the Gall Bladder), which emulsifies fats, converts toxic ammonia into urea (Ornithine Cycle), stores glucose as glycogen (Glycogenesis), and synthesizes blood-clotting proteins like fibrinogen and prothrombin.",
    keyFacts: [
      "Largest Gland / Largest Exocrine Gland: Liver (यकृत) – ~1.5 kg.",
      "Largest Endocrine Gland (अंतःस्रावी ग्रंथी): Thyroid Gland (अवटू ग्रंथी).",
      "Second Largest Gland & Mixed/Heterocrine Gland (मिश्र ग्रंथी): Pancreas (स्वादुपिंड) – secretes both enzymes (Trypsin, Amylase, Lipase) and hormones (Insulin, Glucagon).",
      "Smallest Endocrine Gland (सर्वात लहान अंतःस्रावी ग्रंथी / Master Gland): Pituitary Gland (पीयूषिका ग्रंथी) / Pineal Gland.",
      "Largest Organ of Human Body (बाह्य इंद्रियासह सर्वात मोठा अवयव): Skin (त्वचा)."
    ],
    examTips: [
      "Do not confuse: Largest Gland = Liver (यकृत); Largest Endocrine Gland = Thyroid (थायरॉईड/अवटू); Mixed Gland = Pancreas (स्वादुपिंड).",
      "Bile juice contains NO digestive enzymes (पित्तरसात कोणतेही पाचक विकर नसतात), yet it is essential for fat emulsification via bile salts (Sodium glycocholate & Sodium taurocholate)."
    ]
  },
  {
    id: "sp2-chem-01",
    pdfName: "Science_PreCall_2.0_Chemistry_Handbook.pdf",
    chapterName: "Chapter 2: Periodic Table of Elements (मूलद्रव्यांची आवर्तसारणी)",
    pageNumber: "Pages 42–56",
    subject: "Chemistry",
    topic: "Periodic Table",
    keywords: ["periodic table", "आवर्तसारणी", "mendeleev", "mosley", "moseley", "मेंडेलीव्ह", "मोस्ले", "atomic number", "अणुअंक", "blocks", "s p d f"],
    contentMarathi: "मूलद्रव्यांची आवर्तसारणी (Periodic Table): १८६९ मध्ये रशियन शास्त्रज्ञ दिमित्री मेंडेलीव्ह (Dmitri Mendeleev) यांनी मूलद्रव्यांच्या 'अणुवस्तुमानांकाच्या' (Atomic Mass) चढत्या क्रमाने पहिली यशस्वी आवर्तसारणी मांडली. पुढे १९१३ मध्ये हेन्री मोस्ले (Henry Moseley) यांनी X-Ray अभ्यासाद्वारे सिद्ध केले की मूलद्रव्यांचा मूलभूत गुणधर्म हा अणुवस्तुमानांक नसून 'अणुअंक' (Atomic Number - Z) आहे. त्यानुसार आधुनिक आवर्तसारणीत (Modern Periodic Table) ११८ मूलद्रव्यांची मांडणी अणुअंकाच्या चढत्या क्रमाने ७ आवर्त (Periods - आडव्या ओळी) आणि १८ गणांमध्ये (Groups - उभे स्तंभ) करण्यात आली आहे.",
    contentEnglish: "The Periodic Table organizes all 118 known chemical elements. In 1869, Dmitri Mendeleev arranged 63 then-known elements by increasing Atomic Mass. In 1913, Henry Moseley demonstrated that Atomic Number (Z, number of protons) is the fundamental property of an element, leading to the Modern Periodic Law: 'Properties of elements are a periodic function of their atomic numbers.' The Modern Periodic Table has 7 horizontal rows (Periods) and 18 vertical columns (Groups), divided into four blocks: s-block (Groups 1–2), p-block (Groups 13–18), d-block (Groups 3–12, Transition elements), and f-block (Lanthanides & Actinides, Inner-transition elements).",
    keyFacts: [
      "Total Elements: 118 | Periods (आवर्त): 7 | Groups (गण): 18",
      "Blocks: s-block (Alkali & Alkaline earth metals), p-block (Metals, Metalloids, Non-metals & Noble gases), d-block (Transition metals), f-block (Lanthanides Z=58–71 & Actinides Z=90–103).",
      "Periodic Trends (Left → Right across a Period): Atomic radius decreases, Electronegativity & Ionization energy increase, Metallic character decreases.",
      "Periodic Trends (Top → Bottom down a Group): Atomic radius increases, Number of shells increases, Metallic character increases."
    ],
    examTips: [
      "MPSC loves Mendeleev's predicted elements: Eka-Boron = Scandium (Sc), Eka-Aluminium = Gallium (Ga), Eka-Silicon = Germanium (Ge) — mnemonic: 'BSc AlGa SiGe'.",
      "Halogens are in Group 17; Noble Gases (Zero Group) are in Group 18."
    ]
  }
];

export function searchRagChunks(query: string, chunks: RagChunk[] = INITIAL_RAG_CHUNKS): RagChunk[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const scored = chunks.map((chunk) => {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (q.includes(kw.toLowerCase())) score += 5;
    }
    if (q.includes(chunk.topic.toLowerCase())) score += 4;
    if (q.includes(chunk.subject.toLowerCase())) score += 2;
    const words = q.split(/\s+/).filter((w) => w.length > 2);
    for (const w of words) {
      if (chunk.contentMarathi.toLowerCase().includes(w)) score += 2;
      if (chunk.contentEnglish.toLowerCase().includes(w)) score += 2;
    }
    return { chunk, score };
  });
  return scored
    .filter((item) => item.score >= 4)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((item) => item.chunk);
}
