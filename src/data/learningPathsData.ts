export interface LearningPath {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  targetLevel: string;
  duration: string;
  image: string;
  imageAlt: string;
  targetAudience: string[];
  keyOutcomes: string[];
  recommendedCourses: {
    slug: string;
    level: string;
    title: string;
    description: string;
  }[];
  curriculumHighlights: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const learningPathsData: LearningPath[] = [
  {
    slug: "everyday-german",
    title: "Everyday German",
    badge: "Social & Daily Life",
    subtitle: "Navigate German-speaking societies with natural conversational ease and zero anxiety.",
    targetLevel: "A1 to A2 Foundations",
    duration: "4–5 Months (200+ Live Hours)",
    image: "/images/students-german-flag.webp",
    imageAlt: "German language students studying together with German flag",
    targetAudience: [
      "Spouses and family members preparing for family reunion visas (Ehegattennachzug)",
      "Expatriates relocating to Germany, Austria, or Switzerland who want to make friends and handle errands",
      "Language enthusiasts seeking practical, authentic conversational capability rather than textbook theory",
      "Anyone who wants to navigate supermarkets, train stations, Bürgeramt appointments, and doctors without hesitation",
    ],
    keyOutcomes: [
      "Order food, inquire about groceries, and shop effortlessly in bakeries, markets, and supermarkets",
      "Handle real-world bureaucratic appointments at the Bürgeramt, Ausländerbehörde, and bank",
      "Describe your symptoms accurately during medical consultations and doctor appointments",
      "Engage in casual conversations with neighbors, colleagues, and friends about hobbies, weekends, and holidays",
      "Understand standard announcements at train stations (Deutsche Bahn), airports, and public transport",
    ],
    recommendedCourses: [
      {
        slug: "a1",
        level: "A1",
        title: "A1 German Foundation Course",
        description: "100+ Hours of pronunciation, basic sentence structures, everyday vocabulary, and Goethe A1 prep.",
      },
      {
        slug: "a2",
        level: "A2",
        title: "A2 German Elementary Course",
        description: "100+ Hours mastering the Dative case, conversational past tense (Perfekt), and complex daily dialogues.",
      },
    ],
    curriculumHighlights: [
      {
        title: "Survival & Etiquette Essentials",
        description: "Greetings, formal vs. informal address (Sie vs. du), introductions, numbers, dates, and basic social etiquette.",
      },
      {
        title: "City Navigation & Public Transport",
        description: "Buying train tickets, asking for directions, understanding Deutsche Bahn timetables, and transit announcements.",
      },
      {
        title: "Housing, Banking & Healthcare",
        description: "Apartment search terminology, lease agreements, opening a bank account, and communicating with pharmacists and doctors.",
      },
      {
        title: "Spontaneous Social Interactions",
        description: "Making plans with friends, expressing likes and dislikes, giving small gifts, and participating in DACH traditions.",
      },
    ],
    faqs: [
      {
        question: "Is Everyday German enough for a spouse visa?",
        answer:
          "Yes. Our A1 course included in this pathway specifically prepares you for the Goethe-Zertifikat A1 Start Deutsch exam, which satisfies the legal requirement for German spouse and family reunion visas.",
      },
      {
        question: "How quickly can I start speaking in daily life?",
        answer:
          "With Gaurav's small-batch methodology (5–7 students), you practice speaking in German from your very first session. Within 4 weeks, you will comfortably handle simple restaurant and shopping interactions.",
      },
    ],
  },
  {
    slug: "professional-german",
    title: "Professional German",
    badge: "Career & Workplace",
    subtitle: "Accelerate your corporate career in Europe's leading industrial powerhouse.",
    targetLevel: "A2 to B1 Professional Independence",
    duration: "5–6 Months (200+ Live Hours)",
    image: "/images/germany-career-professional.jpg",
    imageAlt: "Indian software engineer and German colleague collaborating in modern Frankfurt tech office",
    targetAudience: [
      "Software engineers and IT professionals working in or targeting roles in Germany",
      "Mechanical, automotive, and electrical engineers aiming for positions at Siemens, BMW, Bosch, or Mittelstand firms",
      "Healthcare professionals, doctors, and nurses preparing for medical registration (Approbation) and clinical communication",
      "Opportunity Card (Chancenkarte) and EU Blue Card holders seeking faster permanent residency eligibility",
    ],
    keyOutcomes: [
      "Compose polished professional emails, meeting requests, and formal German workplace correspondence",
      "Participate actively in standups, technical design discussions, and sprint retrospectives in German",
      "Navigate job interviews in German with persuasive self-introductions and answers to behavioral questions",
      "Build rapport with German colleagues during coffee breaks (Kaffeepause) and workplace social events",
      "Fast-track EU Blue Card permanent residency eligibility from 27/33 months down to 21 months with certified B1",
    ],
    recommendedCourses: [
      {
        slug: "a2",
        level: "A2",
        title: "A2 German Elementary Course",
        description: "Master connected daily sentences, workplace interactions, and past tense reporting.",
      },
      {
        slug: "b1",
        level: "B1",
        title: "B1 German Intermediate Course",
        description: "Reach professional independence: Passive voice, Konjunktiv II diplomacy, and Goethe B1 credential.",
      },
    ],
    curriculumHighlights: [
      {
        title: "Corporate Correspondence",
        description: "Email etiquette, polite formulas (Sehr geehrte Damen und Herren, Mit freundlichen Grüßen), and formal requests.",
      },
      {
        title: "Meetings, Agreements & Standups",
        description: "Expressing agreement and disagreement diplomatically, proposing alternatives, and summarizing action points.",
      },
      {
        title: "Technical Vocabulary by Industry",
        description: "Industry-specific modules for Software/IT, Mechanical Engineering, and Healthcare communication.",
      },
      {
        title: "German Business Culture & Etiquette",
        description: "Directness vs. rudeness, punctuality (Pünktlichkeit), Feierabend culture, and hierarchical workplace expectations.",
      },
    ],
    faqs: [
      {
        question: "Can I work in Germany with only English?",
        answer:
          "While international tech startups hire in English, over 85% of German companies require at least B1 proficiency for long-term career growth, internal promotions, and social integration. German opens up the entire Mittelstand and engineering sector.",
      },
      {
        question: "How does German help with permanent residency (PR)?",
        answer:
          "Under German immigration law, EU Blue Card holders with verified B1 German can apply for permanent residency (Niederlassungserlaubnis) in just 21 months, compared to 27 or 33 months without language certification.",
      },
    ],
  },
  {
    slug: "study-in-germany",
    title: "Study in Germany",
    badge: "University & Academia",
    subtitle: "Unlock tuition-free degrees at world-class German public universities and thrive in academic life.",
    targetLevel: "A1 to B1 Academic Preparation",
    duration: "6–8 Months (300+ Live Hours)",
    image: "/images/study-in-germany-campus.jpg",
    imageAlt: "Indian student and international classmates walking through historic German university campus",
    targetAudience: [
      "High school graduates preparing for Studienkolleg entrance examinations (Aufnahmetest)",
      "Bachelor's degree graduates planning to pursue Master's programs across German public universities",
      "Students seeking part-time working student (Werkstudent) jobs to cover their living costs in Germany",
      "Scholars and researchers aiming for DAAD scholarships and academic fellowships in DACH nations",
    ],
    keyOutcomes: [
      "Satisfy prerequisite German language requirements for university admission and German student visa clearance",
      "Confidently pass Studienkolleg German entrance examinations (Aufnahmetest)",
      "Secure competitive on-campus or corporate working student (Werkstudent) positions to fund living expenses",
      "Navigate university administration (Immatrikulation, Prüfungsamt) and interact comfortably with professors",
      "Build a seamless academic foundation for advancing toward C1 TestDaF or DSH certifications",
    ],
    recommendedCourses: [
      {
        slug: "a1",
        level: "A1",
        title: "A1 German Foundation Course",
        description: "Absolute beginner groundwork covering phonetics, sentence mechanics, and visa foundation.",
      },
      {
        slug: "a2",
        level: "A2",
        title: "A2 German Elementary Course",
        description: "Connected conversations, past tenses, and everyday student life in Germany.",
      },
      {
        slug: "b1",
        level: "B1",
        title: "B1 German Intermediate Course",
        description: "Independent academic fluency, abstract discourse, argumentative essays, and Goethe B1 credentials.",
      },
    ],
    curriculumHighlights: [
      {
        title: "University Life & Administration",
        description: "Academic vocabulary: Vorlesung, Seminar, Klausur, Immatrikulation, Mensa, and student housing (Studentenwohnheim).",
      },
      {
        title: "Academic Reading & Essay Structure",
        description: "Skimming scientific texts, summarizing research abstracts, and writing argumentative pros-and-cons essays (Erörterung).",
      },
      {
        title: "Student Job Interview Prep",
        description: "Applying for Werkstudent positions, understanding mini-job regulations, and interviewing with student employers.",
      },
      {
        title: "Oral Presentations & Seminar Q&A",
        description: "Structuring 5-minute academic presentations, citing sources, and answering questions from peers and lecturers.",
      },
    ],
    faqs: [
      {
        question: "Can I study an English-taught Master's degree without German?",
        answer:
          "Yes, universities accept IELTS/TOEFL for English programs. However, German student visa officers often ask for A1/A2 German certification, and landing a part-time student job (Werkstudent) in Germany is virtually impossible without basic spoken German.",
      },
      {
        question: "What level is required for Studienkolleg?",
        answer:
          "Most public Studienkollegs require a verified B1 or B2 Goethe/telc certificate to sit for the entrance examination (Aufnahmetest). Our B1 course is specifically aligned with these examination standards.",
      },
    ],
  },
  {
    slug: "goethe-exam-preparation",
    title: "Goethe Exam Preparation",
    badge: "Official Certification",
    subtitle: "Module-by-module simulation and strategy drills for 100% first-attempt examination success.",
    targetLevel: "Goethe-Zertifikat A1, A2 & B1",
    duration: "Integrated into Courses + Intensive Bootcamp Drills",
    image: "/images/german-students-classroom.jpg",
    imageAlt: "Small batch German class studying Netzwerk coursebooks and grammar",
    targetAudience: [
      "Candidates who need an official Goethe-Zertifikat (A1, A2, or B1) for visa stamping or university admissions",
      "Learners who understand German grammar but struggle with time management or exam format nuances",
      "Repeat candidates who missed a specific module (e.g., Hören or Schreiben) and need targeted correction",
      "Professionals applying for the German Opportunity Card (Chancenkarte) seeking verified language points",
    ],
    keyOutcomes: [
      "Master the timing, question patterns, and scoring rubrics across all four exam modules (Hören, Lesen, Schreiben, Sprechen)",
      "Learn formulaic letter and email templates guaranteed to score high marks in the Schreiben module",
      "Overcome listening comprehension panic through audio training with speed variations and ambient noise drills",
      "Ace the oral examination with structured partner dialogue strategies and spontaneous presentation skills",
      "Simulate the actual test experience through full timed mock examinations evaluated by Gaurav",
    ],
    recommendedCourses: [
      {
        slug: "a1",
        level: "A1",
        title: "A1 Goethe Start Deutsch 1 Prep",
        description: "Form-filling, 30-word emails, flashcard oral questions, and audio train announcements.",
      },
      {
        slug: "a2",
        level: "A2",
        title: "A2 Goethe-Zertifikat Prep",
        description: "Multi-paragraph emails, newspaper comprehension, partner negotiations, and daily life oral drills.",
      },
      {
        slug: "b1",
        level: "B1",
        title: "B1 Goethe-Zertifikat Prep",
        description: "4-module independent certification training: essay writing, presentations, and debates.",
      },
    ],
    curriculumHighlights: [
      {
        title: "Hören (Listening) Strategy",
        description: "Identifying trap options, note-taking shorthand, and handling fast-paced speaker dialogues.",
      },
      {
        title: "Lesen (Reading) Rapid Skimming",
        description: "Matching classified ads, headline mapping, and True/False/Not Given comprehension tactics.",
      },
      {
        title: "Schreiben (Writing) Scoring Rubric",
        description: "Sentence variety, connectors, polite modal framing, and avoiding high-penalty syntax mistakes.",
      },
      {
        title: "Sprechen (Speaking) Partner Dialogue",
        description: "Paired planning exercises (Gemeinsam etwas planen), formal presentations, and answering examiner questions.",
      },
    ],
    faqs: [
      {
        question: "What is the passing score for the Goethe-Zertifikat?",
        answer:
          "For Goethe A1 and A2, you need an aggregate of at least 60% (60/100 points) with at least 45% in the written portion and 45% in speaking. For Goethe B1, each of the four modules is independent and requires at least 60% (60/100) per module to pass.",
      },
      {
        question: "Can I take the Goethe B1 exam module by module?",
        answer:
          "Yes! Goethe B1 allows you to write all four modules together or take them individually across different test dates. Our training prepares you thoroughly for all four simultaneously.",
      },
    ],
  },
];
