export type FAQCategory =
  | "All"
  | "Courses"
  | "Classes"
  | "Study Material"
  | "Exams"
  | "Certificates"
  | "Payments"
  | "Batch Size"
  | "Duration";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  directAnswer: string;
  detailedAnswer: string;
}

export const faqCategories: FAQCategory[] = [
  "All",
  "Courses",
  "Classes",
  "Study Material",
  "Exams",
  "Certificates",
  "Payments",
  "Batch Size",
  "Duration",
];

export const faqsData: FAQItem[] = [
  {
    id: "how-many-hours-course",
    category: "Duration",
    question: "How many hours course is this?",
    directAnswer:
      "Above 100 hours of detailed course where we finish the entire A1 Netzwerk Course Book + Exercises from Work book + Added Grammar Practice Material with colourful pictures.",
    detailedAnswer:
      "Our curriculum is designed to give you thorough classroom engagement, active speaking drills, and comprehensive coverage of vocabulary and grammar to ensure long-term retention.",
  },
  {
    id: "why-german-a1-takes-3-months",
    category: "Duration",
    question: "Why is the German A1 course taking 3 months to complete?",
    directAnswer:
      "The A1 course takes approximately 2.5 to 3 months because it covers over 100+ hours of live instruction, including the complete Netzwerk A1 textbook, active speaking drills, and Goethe-Zertifikat A1 exam preparation.",
    detailedAnswer:
      "Rushing through beginner German in 3 to 4 weeks leads to weak grammar retention and speaking hesitation. Our structured 100+ hour curriculum ensures you thoroughly master verb conjugations, article declensions (der/die/das), and everyday spoken German in small interactive batches of 5–7 students.",
  },
  {
    id: "what-if-miss-class",
    category: "Classes",
    question: "What if I miss a class?",
    directAnswer:
      "The video of that particular class will be shared with you for a limited time period.",
    detailedAnswer:
      "Every live session is recorded in HD so you can catch up on explanations, class dialogues, and grammar exercises whenever work or personal emergencies arise.",
  },
  {
    id: "books-or-study-material",
    category: "Study Material",
    question: "Will I get the books or any study material?",
    directAnswer:
      "You’ll be provided with the PDFs of the licensed books + Digital Practice Material.",
    detailedAnswer:
      "All necessary study guides, vocabulary sheets, audio tracks, and Goethe exam preparation drill sheets are provided digitally at no extra cost.",
  },
  {
    id: "why-a1-taking-3-months",
    category: "Duration",
    question: "Why is the German A1 course taking 3 months to complete?",
    directAnswer:
      "The course is taking longer because of the repetition of exercises and repetitive dialogues in the class which will help you remember the words for longer and make the learning deep in the class itself. Repetition helps your learning and memory in the most efficient way.",
    detailedAnswer:
      "Unlike rush courses where concepts are forgotten within weeks, our in-class speaking drills and conversational practice make German intuitive and natural.",
  },
  {
    id: "how-many-classes-in-week",
    category: "Classes",
    question: "How many classes will be held in a week?",
    directAnswer:
      "The minimum number of classes will be 4 and maximum will be 5 classes of 60-90 mins each.",
    detailedAnswer:
      "Regular class frequency ensures continuous momentum, preventing the decay of language concepts between sessions.",
  },
  {
    id: "students-in-a-batch",
    category: "Batch Size",
    question: "How many students will be there in a batch?",
    directAnswer:
      "The batch strength is usually 5-7 students per batch where each student gets personal attention while also keeping in mind the momentum of the course in case there is a person absent for the session.",
    detailedAnswer:
      "Small batches allow Gaurav to listen to every individual student speak, pinpoint pronunciation nuances, and answer every question in real time.",
  },
  {
    id: "certificate-after-course-els",
    category: "Certificates",
    question: "Will I get a certificate after completing the course with ELS?",
    directAnswer:
      "No, Goethe Institute India is the authority that will provide you with the International Certificate, considering you have cleared their A1 Start Deutsch Exam.",
    detailedAnswer:
      "We prepare you comprehensively for this international exam so you can pass with confidence and earn your globally recognized CEFR credentials.",
  },
  {
    id: "prepared-for-a1-goethe-start-exam",
    category: "Exams",
    question: "Will I be prepared for the A1 Goethe Start Exam?",
    directAnswer:
      "Yes, you will be simultaneously prepared for the exam along with mastering the language. We emphasise on all aspects equally such as speaking, reading, listening and writing.",
    detailedAnswer:
      "Mock tests, past examination papers, and simulated speaking modules are embedded directly into the weekly course schedule.",
  },
  {
    id: "can-i-give-a2-directly",
    category: "Exams",
    question: "Can I give A2 German Exam directly?",
    directAnswer: "Yes, you can.",
    detailedAnswer:
      "If you already possess foundational A1 knowledge and grammar, you can take a diagnostic evaluation with Gaurav to join an A2 batch directly.",
  },
  {
    id: "how-many-levels-fluent",
    category: "Courses",
    question: "How many levels does it take to be fluent in the language?",
    directAnswer:
      "You will be speaking in German from Day 1 with ELS, however in order to add complicated topics to your language skills, one requires minimum B1.",
    detailedAnswer:
      "Day 1 spoken practice develops spontaneous conversational instincts, while advancing through A2 and B1 gives you command over professional communication and abstract discussions.",
  },
  {
    id: "levels-for-job-indian-german-companies",
    category: "Courses",
    question:
      "How many levels a candidate should have in order to secure a job with Indian and German companies?",
    directAnswer:
      "A Candidate should have somewhere between B1- C1 level of proficiency.",
    detailedAnswer:
      "Technical and software roles often accept B1, while client-facing, healthcare, legal, and managerial roles generally require strong B2 or C1 proficiency.",
  },
  {
    id: "levels-proficiency-studying-germany",
    category: "Courses",
    question:
      "How many levels of language proficiency an aspiring student requires for studying in Germany?",
    directAnswer:
      "A student should have somewhere between A2-B1 level of proficiency in order to manage his daily life with ease.",
    detailedAnswer:
      "For English-taught Master’s degrees, A2-B1 is recommended for visa interviews, student housing, and part-time jobs. For German-taught degrees, C1 is mandatory.",
  },
  {
    id: "what-is-a1",
    category: "Courses",
    question: "What is A1 German?",
    directAnswer:
      "A1 German is the official beginner level of the Common European Framework of Reference for Languages (CEFR). It enables you to understand and speak familiar everyday expressions, introduce yourself, ask and answer basic personal questions, and conduct simple conversations in daily life.",
    detailedAnswer:
      "At German With Gaurav, our A1 course covers over 100+ hours of live instruction using the licensed Netzwerk curriculum. By the end of A1, you have a solid foundation and complete readiness for the official Goethe-Zertifikat A1 Start Deutsch exam.",
  },
  {
    id: "what-is-a2",
    category: "Courses",
    question: "What is A2 German?",
    directAnswer:
      "A2 German is the elementary CEFR level where you move beyond survival phrases to understand frequently used sentences related to immediate personal relevance, such as employment, local geography, shopping, and family life.",
    detailedAnswer:
      "Our A2 course introduces past tenses (Perfekt and Präteritum), the Dative case, two-way prepositions, reflexive verbs, and adjective declensions.",
  },
  {
    id: "what-is-b1",
    category: "Courses",
    question: "What is B1 German?",
    directAnswer:
      "B1 German is the intermediate CEFR milestone representing independent language proficiency. At B1, you can comfortably understand standard German on work, school, and leisure matters, manage travel situations across Germany, and express thoughts on abstract and professional topics.",
    detailedAnswer:
      "B1 is the benchmark certificate required for German universities (Studienkolleg), vocational training (Ausbildung), Opportunity Cards (Chancenkarte), German Blue Cards, and permanent settlement.",
  },
  {
    id: "how-do-payments-and-fees-work",
    category: "Payments",
    question: "How do course fees and payments work?",
    directAnswer:
      "Course fees are transparent and paid via secure UPI, Net Banking, credit/debit cards, or bank transfer. Installment options are available upon request.",
    detailedAnswer:
      "You can attend a free 1-on-1 demo consultation before making any payment commitment. We do not have hidden charges; the fee covers all live classes, study materials, class recordings, and Goethe exam mock evaluations.",
  },
];
