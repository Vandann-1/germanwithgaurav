export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const statisticsData: StatItem[] = [
  {
    id: "experience",
    value: "19+",
    label: "Years Experience",
    description: "Dedicated to helping students conquer German since 2005",
  },
  {
    id: "learners",
    value: "1499+",
    label: "Enrolled Learners",
    description: "Students, doctors, engineers, and aspirants trained worldwide",
  },
  {
    id: "sessions",
    value: "1,926+",
    label: "Finished Sessions",
    description: "Live interactive small-group and intensive coaching classes",
  },
  {
    id: "levels",
    value: "A1–B1",
    label: "German Courses",
    description: "Complete CEFR beginner to independent speaker pathways",
  },
  {
    id: "instructors",
    value: "5",
    label: "Online Instructors",
    description: "Certified trainers and native German educator guidance",
  },
  {
    id: "satisfaction",
    value: "100%",
    label: "Satisfaction Rate",
    description: "Backed by 158+ verified 5-star Google student reviews",
  },
];
