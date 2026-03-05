import { cld } from "@/lib/cloudinary";

export interface Testimonial {
  id: string;
  studentName: string;
  studentRole: string;
  company?: string;
  quote: string;
  rating: number;
  source: "platform" | "linkedin" | "google";
  courseId?: string;
  avatarUrl: string;
  publishedAt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ts_001",
    studentName: "Nikhil Arora",
    studentRole: "Frontend Developer",
    company: "Zeta",
    quote: "The capstone workflow felt close to real client delivery, and that made interviews much easier.",
    rating: 5,
    source: "platform",
    courseId: "mern-stack-development",
    avatarUrl: cld("testimonials/student1", 200),
    publishedAt: "2025-10-18"
  },
  {
    id: "ts_002",
    studentName: "Priyanka Sethi",
    studentRole: "Performance Marketer",
    company: "GrowthDeck",
    quote: "I moved from theory-heavy learning to practical campaign execution in under eight weeks.",
    rating: 5,
    source: "google",
    courseId: "digital-marketing",
    avatarUrl: cld("testimonials/student2", 200),
    publishedAt: "2025-09-05"
  },
  {
    id: "ts_003",
    studentName: "Vivek Rao",
    studentRole: "Automation Specialist",
    quote: "The n8n modules were structured for actual business use-cases, not toy automations.",
    rating: 4,
    source: "linkedin",
    courseId: "n8n-automation",
    avatarUrl: cld("testimonials/student3", 200),
    publishedAt: "2025-11-22"
  }
];
