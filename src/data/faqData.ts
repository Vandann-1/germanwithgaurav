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
    question: "How many hours of instruction are included in each course?",
    directAnswer:
      "Over 100+ hours of detailed live instruction covering the complete Netzwerk course book, workbook exercises, and dedicated grammar and conversation sheets.",
    detailedAnswer:
      "Our curriculum ensures deep classroom engagement, active speaking drills, and comprehensive coverage of vocabulary and grammar to build permanent fluency.",
  },
  {
    id: "why-german-a1-takes-3-months",
    category: "Duration",
    question: "Why does the German A1 course take 2.5 to 3 months to complete?",
    directAnswer:
      "Our A1 course takes approximately 8 to 10 weeks (100+ hours) because we prioritize in-class conversational repetition and active dialogue drills over rushing through grammar rules.",
    detailedAnswer:
      "Rushing beginner German in 3 to 4 weeks leads to weak grammar retention and speaking hesitation. Our structured 100+ hour curriculum ensures you thoroughly master verb conjugations, article declensions (der/die/das), and everyday spoken German in small interactive batches of 5–7 students.",
  },
  {
    id: "what-if-miss-class",
    category: "Classes",
    question: "What happens if I miss a live class?",
    directAnswer:
      "Every live session is recorded in HD and shared with you for dedicated revision access.",
    detailedAnswer:
      "If workplace obligations, university exams, or travel cause you to miss a class, you can watch the recording and ask Gaurav any clarifying questions before the next session.",
  },
  {
    id: "books-or-study-material",
    category: "Study Material",
    question: "Will I receive textbooks and study material?",
    directAnswer:
      "Yes. You receive digital licensed PDFs of the complete Netzwerk coursebook and workbook, plus exclusive color-coded practice sheets created by Gaurav.",
    detailedAnswer:
      "All necessary study guides, vocabulary sheets, audio tracks, and Goethe exam preparation drill sheets are provided digitally at no extra cost.",
  },
  {
    id: "how-many-classes-in-week",
    category: "Classes",
    question: "How many classes are held each week?",
    directAnswer:
      "Each batch meets 4 to 5 times per week for 60 to 90 minutes per session.",
    detailedAnswer:
      "Regular class frequency ensures continuous momentum, preventing the decay of language concepts between sessions.",
  },
  {
    id: "students-in-a-batch",
    category: "Batch Size",
    question: "How many students are in each batch?",
    directAnswer:
      "Batch strength is strictly limited to 5 to 7 students per batch to guarantee high individual speaking time.",
    detailedAnswer:
      "Small batches allow Gaurav to listen to every individual student speak, pinpoint pronunciation nuances, and provide immediate personalized correction.",
  },
  {
    id: "certificate-after-course",
    category: "Certificates",
    question: "Will I receive an official certificate after completing the course?",
    directAnswer:
      "German With Gaurav provides an academy Course Completion Certificate verifying hours and CEFR coverage. International official certificates are awarded by the Goethe-Institut upon passing their examinations.",
    detailedAnswer:
      "We prepare you comprehensively for the Goethe-Zertifikat (A1, A2, B1) so you can register with the Goethe-Institut / Max Mueller Bhavan and clear all four exam modules with complete confidence.",
  },
  {
    id: "prepared-for-a1-goethe-start-exam",
    category: "Exams",
    question: "Will I be prepared for the official Goethe-Zertifikat exams?",
    directAnswer:
      "Yes. Official Goethe examination preparation is embedded directly into the weekly curriculum across all four skills: Hören, Lesen, Schreiben, and Sprechen.",
    detailedAnswer:
      "Mock tests, past examination papers, letter-writing rubrics, and simulated group speaking modules are practiced under timed conditions.",
  },
  {
    id: "can-i-give-a2-directly",
    category: "Exams",
    question: "Can I join an A2 course directly without taking A1 at GWG?",
    directAnswer:
      "Yes, if you already have foundational A1 knowledge and grammar understanding.",
    detailedAnswer:
      "Gaurav conducts a complimentary 10-minute diagnostic consultation to assess your present knowledge and ensure you are placed in the ideal batch.",
  },
  {
    id: "how-many-levels-fluent",
    category: "Courses",
    question: "How many levels does it take to become conversationally fluent?",
    directAnswer:
      "You will speak German from your very first week with German With Gaurav. Independent conversational fluency for workplace and daily life is achieved at B1.",
    detailedAnswer:
      "A1 gives you essential survival capability, A2 enables connected everyday conversations, and B1 gives you command over abstract discussions, career interviews, and workplace correspondence.",
  },
  {
    id: "levels-for-job-indian-german-companies",
    category: "Courses",
    question:
      "What German proficiency level is required to secure a job in Germany?",
    directAnswer:
      "Most professional roles require between B1 and B2 proficiency, depending on the industry.",
    detailedAnswer:
      "IT and software engineers can often begin with A2/B1 in international companies, while mechanical engineers, healthcare practitioners, and business consultants generally require strong B2 or C1 certification.",
  },
  {
    id: "levels-proficiency-studying-germany",
    category: "Courses",
    question:
      "What German level is required for studying at a German university?",
    directAnswer:
      "English-taught degree programs typically recommend A2 to B1 for daily life and student jobs. German-taught degrees require C1.",
    detailedAnswer:
      "Even for English degrees, university career centers emphasize that B1 German is crucial for securing competitive working student (Werkstudent) jobs and internships to fund your living expenses in Germany.",
  },
  {
    id: "what-is-a1",
    category: "Courses",
    question: "What is the CEFR A1 German level?",
    directAnswer:
      "A1 is the official beginner level of the Common European Framework of Reference for Languages (CEFR). It covers greetings, personal introductions, simple transactions, and essential sentence structures.",
    detailedAnswer:
      "At German With Gaurav, our 100+ hour A1 curriculum uses the licensed Netzwerk coursebook, giving you complete preparation for the Goethe-Zertifikat A1 Start Deutsch exam.",
  },
  {
    id: "what-is-a2",
    category: "Courses",
    question: "What is the CEFR A2 German level?",
    directAnswer:
      "A2 is the elementary CEFR level where you transition from basic survival phrases into connected daily conversations, past tenses, and workplace interactions.",
    detailedAnswer:
      "Our A2 course introduces the Dative case, two-way prepositions (Wechselpräpositionen), conversational past tense (Perfekt and Präteritum), and subordinate clauses (weil, dass).",
  },
  {
    id: "what-is-b1",
    category: "Courses",
    question: "What is the CEFR B1 German level?",
    directAnswer:
      "B1 is the pivotal intermediate milestone representing independent language proficiency for university entrance, Opportunity Cards (Chancenkarte), and corporate jobs.",
    detailedAnswer:
      "At B1, you master the Passive Voice, Konjunktiv II for hypothetical polite discourse, complex connectors, and the full 4-module Goethe-Zertifikat B1 examination format.",
  },
  {
    id: "how-do-payments-and-fees-work",
    category: "Payments",
    question: "How do course fees and payments work?",
    directAnswer:
      "Course fees are transparent and paid via secure UPI, Net Banking, credit/debit cards, or bank transfer with flexible installment options upon request.",
    detailedAnswer:
      "You can attend a free 1-on-1 demo consultation before making any financial commitment. There are zero hidden fees; the course fee covers all live sessions, licensed PDF books, HD recordings, and Goethe mock exams.",
  },
];
