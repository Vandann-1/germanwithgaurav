export interface PersonProfile {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  fullBio: string[];
  highlights: string[];
  image: string;
  email?: string;
  linkedIn?: string;
  videoUrl?: string;
}

export const peopleData: PersonProfile[] = [
  {
    id: "gaurav-raghuvanshi",
    name: "Gaurav Raghuvanshi",
    role: "Founder & Lead German Language Instructor",
    badge: "19+ Years Teaching Experience",
    bio: "Pioneer in German language education based in Pune, India. Gaurav has guided over 1499+ learners from beginner A1 to fluent B1 speakers through his conversational and practical teaching framework.",
    fullBio: [
      "Gaurav Raghuvanshi began teaching German over 19 years ago with a single conviction: learning a foreign language shouldn't feel like robotic rote memorisation of grammar tables. It should empower learners to express themselves with pride and ease.",
      "Having mentored thousands of engineers, doctors, students, and working professionals across India and abroad, Gaurav created the signature 'GWG Method' (Understand → Practice → Speak → Review → Improve). This framework eliminates language anxiety and ensures learners actively speak German from their very first week.",
      "Under his leadership, German With Gaurav maintains an unmatched 100% student satisfaction record with over 158 verified five-star Google reviews and an extraordinary first-attempt Goethe exam pass rate.",
    ],
    highlights: [
      "19+ Years of dedicated German instructional experience",
      "Over 1499+ students and corporate professionals mentored",
      "Specialist in Goethe-Zertifikat A1, A2, and B1 examination mastery",
      "Small-batch advocate (5–7 students per batch) for personal attention",
      "Pioneer of interactive spoken German methodology in Pune, India",
    ],
    image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
    email: "contact@germanwithgaurav.com",
    linkedIn: "https://www.linkedin.com/company/german-with-gaurav/",
  },
  {
    id: "frau-caprice",
    name: "Frau Caprice",
    role: "German Native Educator & Academic Advisor",
    badge: "Educator Insights & Cultural Immersion",
    bio: "Native German educator with extensive experience working alongside the Indian education ecosystem, offering vital insights into German university admissions, workplace culture, and career migration.",
    fullBio: [
      "Frau Caprice is an esteemed German educational consultant and native speaker who has worked closely with international students and Indian educational institutions for over 2 years.",
      "She regularly provides cultural briefings and educator insights to GWG students, addressing key structural differences between Indian and German academic environments, healthcare systems, and professional expectations.",
      "Her guidance helps GWG students bridge the gap between classroom language learning and confident real-world integration into German society.",
    ],
    highlights: [
      "Native German speaker and DACH educational advisor",
      "Specialist on German university cost structures and admission prerequisites",
      "Advisor on German corporate etiquette and workplace communication",
      "Guest mentor for GWG B1 students preparing for real-world interviews in Germany",
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=hugcHFlyBis",
  },
];
