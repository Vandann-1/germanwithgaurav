export interface CurriculumModule {
  number: string;
  title: string;
  summary: string;
  grammar: string[];
  vocabulary: string[];
  speaking: string[];
  listening: string[];
  reading: string[];
  writing: string[];
  practice: string[];
}

export interface CourseDetail {
  slug: string;
  level: "A1" | "A2" | "B1";
  badge: string;
  title: string;
  subheading: string;
  shortDescription: string;
  fullOverview: string;
  targetAudience: string[];
  learningOutcomes: string[];
  duration: string;
  classesPerWeek: string;
  sessionDuration: string;
  batchSize: string;
  studyMaterial: string;
  recordedSessions: string;
  examPreparation: string;
  curriculum: CurriculumModule[];
  faqs: { question: string; answer: string }[];
  nextCourseSlug?: string;
  nextCourseName?: string;
}

export const coursesData: CourseDetail[] = [
  {
    slug: "a1-german",
    level: "A1",
    badge: "Beginner Level (CEFR)",
    title: "A1 German Language Course",
    subheading: "Start Speaking German from Day One with Real-World Practical Fluency",
    shortDescription:
      "A complete foundation course in German language fundamentals, clear grammar explanations, everyday conversational dialogues, and Goethe-Zertifikat A1 exam preparation.",
    fullOverview:
      "The A1 German Course at German With Gaurav is meticulously designed for absolute beginners. Over 100+ hours of live, interactive instruction, we cover the complete Netzwerk course book and workbook, ensuring you master everyday phrases, self-introductions, restaurant and shopping conversations, and essential sentence structures without getting lost in grammar confusion.",
    targetAudience: [
      "Absolute beginners with zero prior knowledge of the German language",
      "Students planning higher education or master's degrees in Germany",
      "Working professionals seeking employment or relocation to Germany, Austria, or Switzerland",
      "Spouses and family members preparing for family reunion visa requirements",
      "Language enthusiasts seeking a structured, fun, and conversational learning system",
    ],
    learningOutcomes: [
      "Introduce yourself, your family, your hobbies, and your profession in fluent German",
      "Confidently navigate real-life situations: ordering food, grocery shopping, asking for directions, and making appointments",
      "Understand and apply core German grammar rules including verb conjugations, article declensions (der/die/das), and accusative cases",
      "Formulate questions, imperative requests, and negative statements accurately",
      "Prepare thoroughly for all four modules (Hören, Lesen, Schreiben, Sprechen) of the Goethe-Zertifikat A1 exam",
    ],
    duration: "100+ Hours (8–10 Weeks)",
    classesPerWeek: "4 to 5 Live Sessions per week",
    sessionDuration: "60 to 90 Minutes per session",
    batchSize: "5 to 7 Students Maximum for personalised attention",
    studyMaterial: "Licensed Netzwerk A1 Coursebook & Workbook PDFs + Exclusive Colourful Practice Sheets",
    recordedSessions: "High-definition recorded video sessions accessible for revision if you miss a class",
    examPreparation: "Direct mock drills for Goethe-Zertifikat A1 Start Deutsch 1 (Listening, Reading, Writing, Speaking)",
    curriculum: [
      {
        number: "01",
        title: "Guten Tag! (Introductions & Alphabet)",
        summary: "Phonetics, the German alphabet, basic greetings, and introducing yourself and others.",
        grammar: ["Alphabet & umlauts pronunciation", "Personal pronouns (ich, du, er, sie, es)", "Regular verb conjugation in present tense", "W-Questions (Wie, Wer, Woher, Was)"],
        vocabulary: ["Greetings & farewells", "Countries and nationalities", "Numbers 0–20", "Basic classroom German"],
        speaking: ["Introducing yourself confidently", "Asking someone where they come from", "Spelling your name and email address"],
        listening: ["Short introductory dialogues at international meetups", "Spelling names and phone numbers"],
        reading: ["Simple profile cards", "Business cards and contact forms"],
        writing: ["Filling in basic registration forms", "Writing a short 3-sentence self-introduction"],
        practice: ["Pair introductions in breakout rooms", "Pronunciation audio drill"],
      },
      {
        number: "02",
        title: "Freunde, Kollegen und ich (Daily Routines & Numbers)",
        summary: "Talking about hobbies, professions, languages, and numbers up to 1,000,000.",
        grammar: ["Irregular verbs (haben, sein, sprechen)", "Definite and indefinite articles (der, die, das / ein, eine)", "Negation with 'nicht' and 'kein'"],
        vocabulary: ["Professions and workplaces", "Languages and continents", "Hobbies and leisure activities", "Numbers 21 to 1,000,000"],
        speaking: ["Talking about what you do for a living", "Discussing what you like doing on weekends"],
        listening: ["Phone calls confirming contact details", "Conversations about weekend plans"],
        reading: ["Short job advertisements", "Personal profiles on professional networks"],
        writing: ["Describing your daily routine and hobbies in 5-6 sentences"],
        practice: ["Flashcard vocabulary drill for articles", "Mock conversation with a colleague"],
      },
      {
        number: "03",
        title: "In der Stadt & Einkaufen (Places, Shopping & Accusative Case)",
        summary: "Mastering food, prices, grocery shopping, directions, and the crucial Accusative case.",
        grammar: ["The Accusative Case (den, die, das / einen, eine, ein)", "Plural forms of nouns", "Possessive pronouns (mein/dein in nominative and accusative)", "Modal verbs: möchten"],
        vocabulary: ["Food and groceries", "Supermarket and market vocabulary", "Weights and measures (Kilo, Gramm, Liter)", "City buildings and landmarks"],
        speaking: ["Ordering at a bakery or butcher", "Asking for prices and quantities", "Asking for and giving directions in a city"],
        listening: ["Supermarket announcements", "Direction instructions on the street"],
        reading: ["Grocery receipts, menus, and shopping lists", "Simple street maps"],
        writing: ["Composing a shopping list", "Writing a short message asking for directions"],
        practice: ["Roleplay: Market stall transaction", "Accusative case exercise sheets"],
      },
      {
        number: "04",
        title: "Wohnen & Freizeit (Housing, Furniture & Time)",
        summary: "Describing apartments, furniture, telling the official and colloquial time, and daily schedules.",
        grammar: ["Separable verbs (aufstehen, anrufen, fernsehen)", "Prepositions of time (am, um, von... bis)", "Adjectives and comparisons basics"],
        vocabulary: ["Rooms in a house and furniture", "Clock times and days of the week", "Months and seasons"],
        speaking: ["Describing your apartment or dream home", "Arranging a meeting time with a friend"],
        listening: ["Answering machine messages confirming appointments", "Radio schedule broadcasts"],
        reading: ["Rental property listings", "Appointment calendar entries"],
        writing: ["Writing an email declining or confirming an appointment", "Short description of your room"],
        practice: ["Appointment scheduling dialogue", "Interactive floor plan description"],
      },
      {
        number: "05",
        title: "Gesundheit, Kleidung & Goethe A1 Exam Preparation",
        summary: "Doctor visits, body parts, clothing, weather, and comprehensive Goethe A1 exam simulation.",
        grammar: ["Modal verbs (können, müssen, dürfen, sollen)", "Imperative sentences (Sie, du, ihr)", "Prepositions with Dative basics (mit, bei, nach)"],
        vocabulary: ["Body parts and common illnesses", "Clothing styles and colours", "Weather descriptions"],
        speaking: ["Explaining symptoms to a doctor", "Giving recommendations and instructions", "Goethe A1 Speaking Part 1, 2, and 3 drills"],
        listening: ["Doctor-patient consultations", "Goethe A1 Hören sample tests with audio analysis"],
        reading: ["Notices at medical clinics and public signs", "Goethe A1 Lesen sample papers"],
        writing: ["Goethe A1 official Schreiben tasks (filling forms + writing formal emails)"],
        practice: ["Full timed Goethe-Zertifikat A1 mock exam with Gaurav's personalised feedback"],
      },
    ],
    faqs: [
      {
        question: "Do I need any prior knowledge of German before starting A1?",
        answer:
          "No prior knowledge is needed. The A1 course starts from the absolute foundation—the German alphabet, pronunciation, and basic phonetics—building steadily into sentence formation and real-world conversation.",
      },
      {
        question: "How long does it take to complete the A1 German course?",
        answer:
          "Our A1 course takes approximately 8 to 10 weeks across 100+ hours of live instruction. We focus on active dialogue repetition so that grammar and vocabulary stick permanently rather than being forgotten after class.",
      },
      {
        question: "Does this course prepare me for the official Goethe-Zertifikat A1 exam?",
        answer:
          "Yes. The course covers all four examination modules (Listening, Reading, Writing, Speaking) and includes dedicated Goethe Start Deutsch mock exams with detailed correction and speaking drills.",
      },
      {
        question: "What happens if I miss a live class?",
        answer:
          "Every session is recorded and shared with enrolled students for a dedicated access period. You can watch the recording and ask Gaurav any questions before the next class.",
      },
    ],
    nextCourseSlug: "a2-german",
    nextCourseName: "A2 German Course",
  },
  {
    slug: "a2-german",
    level: "A2",
    badge: "Elementary Level (CEFR)",
    title: "A2 German Language Course",
    subheading: "Transition from Basic Phrases to Fluid Daily and Workplace Communication",
    shortDescription:
      "Deepen your command of German with the Dative case, past tense (Perfekt and Präteritum), reflexive verbs, subordinate clauses, and professional conversational skills.",
    fullOverview:
      "The A2 German course bridges the gap between basic survival phrases and fluent everyday communication. In this course, you transition into expressing past experiences, future plans, opinions, feelings, and professional workplace interactions. We focus intensively on the German cases (Nominative, Accusative, and Dative) and sentence structure, giving you the confidence to communicate with native speakers without second-guessing your words.",
    targetAudience: [
      "Learners who have completed A1 German or have equivalent foundational knowledge",
      "Professionals preparing for work environments or job interviews in Germany",
      "Students preparing for German university admissions requiring A2/B1 proficiency",
      "Anyone who understands basic German but hesitates when speaking or constructing complex sentences",
    ],
    learningOutcomes: [
      "Speak comfortably about past events, memories, and travel experiences using Perfekt and Präteritum",
      "Master the Dative case, two-way prepositions (Wechselpräpositionen), and adjective endings",
      "Express opinions, preferences, justifications, and counter-arguments using conjunctions (weil, dass, wenn, deshalb)",
      "Compose formal and informal business emails, requests, and letters with correct etiquette",
      "Achieve full readiness for the Goethe-Zertifikat A2 examination",
    ],
    duration: "100+ Hours (8–10 Weeks)",
    classesPerWeek: "4 to 5 Live Sessions per week",
    sessionDuration: "60 to 90 Minutes per session",
    batchSize: "5 to 7 Students Maximum for high student talk-time",
    studyMaterial: "Licensed Netzwerk A2 Coursebook & Workbook PDFs + Comprehensive Grammar Reference Manuals",
    recordedSessions: "Complete video recordings provided for revision and flexible catch-up",
    examPreparation: "Targeted Goethe-Zertifikat A2 mock exams with individual speaking assessment",
    curriculum: [
      {
        number: "01",
        title: "Alltag & Beruf (Workplace Life & Past Tense Perfekt)",
        summary: "Navigating workplace situations, speaking about your career trajectory, and mastering the Perfekt tense.",
        grammar: ["The Perfekt tense with 'haben' and 'sein'", "Irregular and regular past participles (Partizip II)", "Temporal adverbs (zuerst, dann, danach)"],
        vocabulary: ["Office environment and job duties", "Technical and everyday workplace terms", "Past events and milestones"],
        speaking: ["Recounting your last weekend or vacation", "Describing your career path and education"],
        listening: ["Colleague discussions regarding shift schedules", "Voicemails from clients and managers"],
        reading: ["Workplace memos and project updates", "Curriculum Vitae (Lebenslauf) examples"],
        writing: ["Drafting an email to a supervisor explaining an absence", "Writing a summary of a completed project"],
        practice: ["Interview roleplay about past work experiences", "Perfekt verb transformation drills"],
      },
      {
        number: "02",
        title: "Unterwegs & Orientierung (Dative Case & Two-Way Prepositions)",
        summary: "Mastering the Dative case, giving precise spatial directions, and Wechselpräpositionen.",
        grammar: ["The Dative Case with articles and pronouns", "Two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen)", "Direction vs. Location (Wohin + Akk vs. Wo + Dat)"],
        vocabulary: ["Urban infrastructure and public transport", "Travel, ticketing, and railway stations", "Furniture positioning"],
        speaking: ["Giving intricate directions in a German city", "Describing where items are situated in an office"],
        listening: ["Train platform announcements (Deutsche Bahn)", "GPS navigational directions"],
        reading: ["Transit maps and travel itineraries", "Rental agreements and apartment floor plans"],
        writing: ["Writing an inquiry for a lost property item on a train", "Describing a journey route"],
        practice: ["Interactive city map navigation exercise", "Dative vs. Accusative situational drills"],
      },
      {
        number: "03",
        title: "Gesundheit & Körper (Reflexive Verbs & Subordinate Clauses)",
        summary: "Detailed health consultations, wellbeing, expressing causality, and subordinate clauses.",
        grammar: ["Reflexive verbs with Accusative and Dative (sich freuen, sich fühlen)", "Subordinate clauses with 'weil', 'dass', 'ob'", "Indirect questions"],
        vocabulary: ["Medical terminology and pharmacy items", "Feelings, moods, and mental health", "Physical fitness and wellness routines"],
        speaking: ["Consulting a doctor about recurring symptoms", "Expressing opinions on healthy lifestyle habits"],
        listening: ["Consultation dialogues at a specialist clinic", "Radio interviews on wellness and nutrition"],
        reading: ["Medication instruction leaflets (Packungsbeilage)", "Wellness magazine articles"],
        writing: ["Formal letter requesting a medical appointment", "Informal email advising a friend on recovery"],
        practice: ["Doctor-patient emergency simulation", "Connecting sentences using 'weil' and 'dass'"],
      },
      {
        number: "04",
        title: "Konsum, Mode & Adjektivdeklination (Adjective Endings)",
        summary: "Cracking the code to German adjective endings in Nominative, Accusative, and Dative cases.",
        grammar: ["Adjective endings with definite articles", "Adjective endings with indefinite articles and possessives", "Adjective endings with zero articles"],
        vocabulary: ["Apparel, materials, and colours", "Online shopping, returns, and customer service", "Consumer electronics and product reviews"],
        speaking: ["Comparing products and discussing specifications", "Filing a customer service complaint on the phone"],
        listening: ["Customer service hotline interactions", "Product review podcasts"],
        reading: ["Product comparison charts and warranty guidelines", "Customer feedback and reviews"],
        writing: ["Composing a formal refund request email", "Describing your favourite outfits in detail"],
        practice: ["Adjective ending matrix mastery drills", "Negotiation and shopping dialogue"],
      },
      {
        number: "05",
        title: "Medien, Kultur & Goethe A2 Exam Simulation",
        summary: "German media, newspapers, cultural life in DACH countries, and complete Goethe A2 exam mastery.",
        grammar: ["Comparative and superlative forms of adjectives", "Conjunctions (denn, deshalb, trotzdem)", "Prepositions with Genitive overview (während, wegen)"],
        vocabulary: ["News media, internet culture, and books", "Festivals and cultural traditions in Germany", "Future intentions"],
        speaking: ["Debating the impact of social media", "Goethe A2 Speaking modules (Part 1, 2, and 3 drills)"],
        listening: ["News bulletins and radio reports", "Goethe A2 Hören model papers"],
        reading: ["Newspaper snippets and event brochures", "Goethe A2 Lesen model papers"],
        writing: ["Formal letters and emails adhering to Goethe A2 grading criteria"],
        practice: ["Full timed Goethe-Zertifikat A2 mock examination with Gaurav"],
      },
    ],
    faqs: [
      {
        question: "Can I join the A2 German course directly without taking A1 with GWG?",
        answer:
          "Yes, if you have already completed A1 elsewhere or have equivalent knowledge. We can conduct a quick 10-minute assessment to verify your level before enrollment to ensure you feel confident in class.",
      },
      {
        question: "How difficult is A2 grammar compared to A1?",
        answer:
          "A2 introduces fundamental concepts like the Dative case, past tenses, and adjective endings. Gaurav breaks these down into straightforward, logical patterns with colourful visual memory aids so you never feel overwhelmed.",
      },
      {
        question: "Will I get speaking practice in every A2 class?",
        answer:
          "Absolutely. With our strict limit of 5 to 7 students per batch, every learner participates in active dialogues, debates, and roleplays during every single session.",
      },
    ],
    nextCourseSlug: "b1-german",
    nextCourseName: "B1 German Course",
  },
  {
    slug: "b1-german",
    level: "B1",
    badge: "Intermediate Level (CEFR)",
    title: "B1 German Language Course",
    subheading: "The Gateway to Higher Studies, Permanent Jobs, and Naturalization in Germany",
    shortDescription:
      "Master intermediate German fluency: complex sentence structures, Passive voice, Konjunktiv II (hypotheticals/politeness), Genitive case, professional debates, and Goethe B1 exam success.",
    fullOverview:
      "B1 is the definitive milestone level for anyone serious about moving to Germany. Recognized by German universities for Studienkolleg / degree programs and by German immigration authorities for Blue Cards, Opportunity Cards (Chancenkarte), and citizenship applications. At German With Gaurav, our B1 course equips you with the vocabulary and grammatical agility to express opinions, discuss abstract topics, participate in professional meetings, and excel in the Goethe-Zertifikat B1 exam.",
    targetAudience: [
      "Learners who have completed A2 German and want to reach genuine independent fluency",
      "University aspirants needing B1 certification for visa approval or admission",
      "Engineers, IT professionals, doctors, and nurses preparing for employment in Germany",
      "Individuals seeking German permanent residency (Niederlassungserlaubnis) or citizenship",
    ],
    learningOutcomes: [
      "Understand the main points of clear standard German on familiar matters in work, school, and leisure",
      "Deal with most situations likely to arise whilst travelling or living in a German-speaking country",
      "Express wishes, hypothetical scenarios, and polite suggestions using Konjunktiv II",
      "Accurately use the Passive Voice (Passiv Präsens and Passiv Präteritum) in formal and technical contexts",
      "Confidently pass all four independent modules of the Goethe-Zertifikat B1 exam",
    ],
    duration: "100+ Hours (10–12 Weeks)",
    classesPerWeek: "4 to 5 Live Sessions per week",
    sessionDuration: "60 to 90 Minutes per session",
    batchSize: "5 to 7 Students Maximum for in-depth individual correction",
    studyMaterial: "Licensed Netzwerk B1 Coursebook & Workbook PDFs + Intensive Goethe B1 Test Collections",
    recordedSessions: "Complete video library for in-depth review and examination revision",
    examPreparation: "Extensive module-by-module simulation of the Goethe/ÖSD B1 examination",
    curriculum: [
      {
        number: "01",
        title: "Beziehungen & Gesellschaft (Relationships & Konjunktiv II)",
        summary: "Interpersonal communication, conflict resolution, hypothetical scenarios, and polite requests.",
        grammar: ["Konjunktiv II for polite requests and wishes (hätte, wäre, würde)", "Relative clauses with Nominative and Accusative", "Two-part connectors (sowohl... als auch, weder... noch)"],
        vocabulary: ["Friendship, partnership, and family dynamics", "Personality traits and behavioral descriptions", "Social etiquette and customs in DACH countries"],
        speaking: ["Formulating diplomatic advice and polite requests", "Debating modern relationship and lifestyle models"],
        listening: ["Conversations discussing personal life choices", "Psychological advice radio snippets"],
        reading: ["Feature articles from German magazines (Der Spiegel, Die Zeit)", "Sociological survey summaries"],
        writing: ["Expressing opinions on social forums", "Composing a letter giving empathetic advice"],
        practice: ["Debate on societal questions in German", "Konjunktiv II transformation workshops"],
      },
      {
        number: "02",
        title: "Berufswelt & Karriere (The Passive Voice & Business German)",
        summary: "Navigating professional environments, job interviews, processes, and the Passive Voice.",
        grammar: ["Passiv Präsens and Passiv Präteritum with 'werden' and 'wurden'", "Passiv with modal verbs", "Prepositional verbs (warten auf, sich interessieren für)"],
        vocabulary: ["Job application terminology and interview etiquette", "Manufacturing, logistics, and workflow terminology", "Contract terms and employment conditions"],
        speaking: ["Simulated German job interviews", "Presenting a technical or business workflow"],
        listening: ["Business presentations and project kickoff meetings", "Telephone inquiries regarding job openings"],
        reading: ["German employment contracts and legal agreements", "In-depth corporate press releases"],
        writing: ["Writing an impressive cover letter (Anschreiben) for a German company", "Professional follow-up emails"],
        practice: ["Full mock interview in German with Gaurav", "Passive voice engineering and business drills"],
      },
      {
        number: "03",
        title: "Umwelt, Technologie & Zukunft (Future Tense & Complex Connectors)",
        summary: "Science, environmental sustainability, artificial intelligence, and the Futur I tense.",
        grammar: ["Futur I with 'werden' for predictions and plans", "Genitive case and Genitive prepositions (trotz, wegen, während, statt)", "Complex subclauses with 'obwohl', 'indem', 'sodass'"],
        vocabulary: ["Climate change, renewable energy, and recycling (Mülltrennung)", "Digitalization, robotics, and technology trends", "Scientific vocabulary"],
        speaking: ["Presenting a 3-minute monologue on an environmental topic", "Proposing solutions to urban mobility problems"],
        listening: ["Documentary audio excerpts on environmental initiatives in Germany", "Tech podcasts discussing AI in Europe"],
        reading: ["Scientific reports and sustainability whitepapers", "Statistical infographics and analysis"],
        writing: ["Writing structured analytical essays presenting pros and cons (Erörterung)"],
        practice: ["Timed 3-minute oral presentation followed by Q&A", "Connector synthesis exercises"],
      },
      {
        number: "04",
        title: "Kultur, Geschichte & Reisen (Präteritum & Indirect Speech)",
        summary: "German historical milestones, cultural identity, travel narratives, and formal storytelling.",
        grammar: ["Präteritum of regular and irregular verbs in written German", "Infinitive clauses with 'zu' (um... zu, ohne... zu, anstatt... zu)", "Relative clauses with Dative and prepositions"],
        vocabulary: ["Major historical events in Germany (The Berlin Wall, Reunification)", "Art, theatre, classical music, and architecture", "Travel experiences and outdoor adventures"],
        speaking: ["Narrating a historical event or memorable journey", "Recommending cultural sights in Munich, Berlin, and Vienna"],
        listening: ["Museum audio guides and historical interviews", "Broadcast reviews of exhibitions and literature"],
        reading: ["Excerpts from contemporary German short stories", "Historical chronologies and biographies"],
        writing: ["Writing a detailed travelogue or personal narrative", "Reviewing a cultural book or film in German"],
        practice: ["Storytelling circle in Präteritum", "Infinitive clause construction masterclass"],
      },
      {
        number: "05",
        title: "Goethe-Zertifikat B1 Intensive Exam Bootcamp",
        summary: "Rigorous simulation of all four independent modules: Hören, Lesen, Schreiben, and Sprechen.",
        grammar: ["Comprehensive review of all B1 syntax and error hotspots", "Transition words for elevated essay cohesion", "Fixed phrases for the oral examination"],
        vocabulary: ["Key synonyms, antonyms, and paraphrasing strategies", "High-frequency Goethe B1 examination vocabulary"],
        speaking: ["Partner dialogue simulations: joint planning (Gemeinsam etwas planen) and presentations"],
        listening: ["Goethe B1 official practice tests 1–4 with speed variations"],
        reading: ["Goethe B1 reading tasks (matching, skimming, multiple choice, formal guidelines)"],
        writing: ["Writing Tasks 1, 2, and 3 with line-by-line correction against official Goethe rubric"],
        practice: ["Full 4-module simulated Goethe B1 exam under real timed conditions"],
      },
    ],
    faqs: [
      {
        question: "Is B1 German sufficient for studying in Germany?",
        answer:
          "Many English-taught Master's programs require A2 or B1 German for everyday living, visa clearance, and part-time jobs. For German-taught degrees, B1 is typically the requirement to enter a Studienkolleg (preparatory college) before taking the TestDaF or DSH for C1.",
      },
      {
        question: "What German level is needed for the Opportunity Card (Chancenkarte)?",
        answer:
          "The Chancenkarte (Opportunity Card) grants points for language skills. A1 is the minimum requirement for point eligibility, but holding a verified B1 or B2 certificate gives you significantly higher points and makes job interviews in Germany far more successful.",
      },
      {
        question: "Can the Goethe B1 exam be written module by module?",
        answer:
          "Yes! Unlike A1 and A2, the Goethe-Zertifikat B1 consists of four separate modules (Listening, Reading, Writing, Speaking) which can be taken and passed individually or together. Our training prepares you thoroughly for all four.",
      },
    ],
  },
];
