export interface Testimonial {
  id: string;
  name: string;
  role: string;
  courseTaken: string;
  date: string;
  rating: number;
  reviewText: string;
  source: "Google" | "Trustindex";
  highlight?: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "swapnil-bankar",
    name: "Swapnil Bankar",
    role: "Working Professional",
    courseTaken: "German A1 Course",
    date: "25 May 2024",
    rating: 5,
    highlight: "Structured lessons that made steady progress enjoyable and confidence-boosting.",
    reviewText:
      "Gaurav was exceptionally knowledgeable and made online learning engaging. The small batch format was interactive with group discussions and speaking drills that boosted my confidence in speaking German right from month one.",
    source: "Google",
    verified: true,
  },
  {
    id: "heema-savsani",
    name: "Heema Savsani",
    role: "University Student",
    courseTaken: "German A1 Course",
    date: "5 June 2024",
    rating: 5,
    highlight: "Personal attention to every learner in the batch.",
    reviewText:
      "Had a great experience learning German with Gaurav Sir. He emphasizes speaking in every class and ensures personal attention for every single student in the batch.",
    source: "Google",
    verified: true,
  },
  {
    id: "durgesh-singh-rajput",
    name: "Durgesh Singh Rajput",
    role: "Engineering Aspirant",
    courseTaken: "German A1–A2 Course",
    date: "19 April 2024",
    rating: 5,
    highlight: "Emphasises the most important part: daily speaking and conversation skills.",
    reviewText:
      "The best teacher for learning Deutsch. Gaurav Sir puts speaking practice at the center of every session, correcting mistakes on the spot and preparing you thoroughly for real conversations and Goethe certification.",
    source: "Google",
    verified: true,
  },
];
