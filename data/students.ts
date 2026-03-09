import { cld } from "@/lib/cloudinary";
export interface Project {
    title: string;
    description: string;
    tech: string[];
    live?: string;
    repo?: string;
    thumbnail?: string;
}

export interface Student {
    slug: string;
    name: string;
    course: string;
    headline: string;
    photo: string;
    about: string;
    skills: string[];
    github?: string;
    linkedin?: string;
    behance?: string;
    resume?: string;
    projects: Project[];
    automations?: {
        title: string;
        description: string;
        link: string;
        type: 'automation' | 'marketing' | 'design';
    }[];
}

export const students: Student[] = [
    {
        slug: "utkarsh-sharma",
        name: "Utkarsh Sharma",
        course: "MERN Stack Development",
        headline: "DevOps focused Full-Stack & Automation Engineer",
        photo: cld("Utkarsh1_yiat7m", 400),
        about: "Passionate Full Stack Developer with a focus on building scalable web applications and efficient automation workflows. I love solving complex problems and creating seamless user experiences.",
        skills: ["React", "Next.js", "Node.js", "MongoDB", "n8n", "TailwindCSS", "TypeScript"],
        github: "https://github.com/Utkarsh9571",
        linkedin: "https://www.linkedin.com/in/utkarsh-sharma-2b9110362",
        resume: "https://drive.google.com/file/d/1a1UW_nBHqGKqP4rjdnDhdl-d5Gtgb65s/view?usp=sharing",
        projects: [
            {
                title: "GK Webtech Website",
                description: "A high-performance marketing website for a Digital Marketing Agency, built with MERN stack and SEO optimized.",
                tech: ["MERN","Tailwind", "MongoDB", "Framer Motion"],
                live: "https://gkwebtech.cloud",
                repo: "https://github.com/gajkesriwebtech-dev/gkwebtech"
            },
            {
                title: "GK Institute Website",
                description: "A high-performance marketing website for a training institute, built with MERN + Next.js 15 and SEO optimized.",
                tech: ["Next.js", "MERN", "Tailwind", "MongoDB", "Framer Motion"],
                live: "https://institute.gkwebtech.cloud",
                repo: "https://github.com/gajkesriwebtech-dev/gk-institute"
            }
        ],
        automations: [
            {
                title: "Automation Workflows for LinkedIn & Youtube",
                description: "Automated content generation and posting on LinkedIn and youtube.",
                link: "https://n8n.gkwebtech.cloud",
                type: "automation"
            }
        ]
    },
    {
        slug: "ananya-verma",
        name: "Ananya Verma",
        course: "UI/UX Designing",
        headline: "Creative UI/UX Designer",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        about: "Human-centric designer dedicated to crafting beautiful and functional digital interfaces. I believe in data-driven design and user empathy.",
        skills: ["Figma", "Adobe XD", "Canva", "Prototyping", "Design Systems", "User Research"],
        behance: "https://behance.net/ananya-verma",
        linkedin: "https://linkedin.com/in/ananya-verma",
        resume: "https://drive.google.com/file/d/example-resume-id-2/view",
        projects: [
            {
                title: "FinTech Mobile App",
                description: "A comprehensive design for a modern banking app focusing on accessibility and clear information hierarchy.",
                tech: ["Figma", "User Research", "Wireframing"],
                live: "https://www.behance.net/gallery/example-project"
            }
        ]
    }
];
