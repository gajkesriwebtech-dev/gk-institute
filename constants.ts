
import { Course, Task, Roadmap, Program } from './types';
import { BLOGS, LESSONS, EBOOKS, MicroLesson, Ebook, BlogPost } from './data/resourceData';
import { FULL_PROGRAM_CATALOG } from './data/courses';


export const NAVBAR_LINKS = [
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'Digital Marketing', href: '/courses/digital-marketing', group: 'Marketing' },
      { label: 'MERN Stack', href: '/courses/mern-stack-development', group: 'Development' },
      { label: 'Data Science', href: '/courses/data-science', group: 'Technology' },
      { label: 'UI/UX Design', href: '/courses/ui-ux-design', group: 'Design' },
      { label: 'Banking Course', href: '/courses/complete-banking-course', group: 'Business' },
      { label: 'AI for Office', href: '/courses/ai-tools-business-office', group: 'Business' }
    ]
  },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Partners', href: '/partners' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Agency Blog', href: '/blog', description: 'Stay ahead with industry insights, tutorials, and career advice.' },
      { label: 'Student Portfolios', href: '/portfolio', description: 'Explore project showcases and professional profiles of our graduates.' },
      { label: 'Micro-Lessons', href: '/micro-lessons', description: 'Bite-sized technical workshops and rapid skill-building gems.' },
      { label: 'Free Ebooks', href: '/ebooks', description: 'Deep-dive guides and playbooks to accelerate your professional journey.' }
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export const HOMEPAGE_STATS = [
  { value: '50+', label: 'Live Projects', sub: 'Students work on real agency client projects, not just hypothetical case studies.' },
  { value: '1:1', label: 'Mentorship Ratio', sub: 'Direct access to senior developers, marketers, and designers for personalized code reviews and strategy feedback.' },
  { value: 'Fully', label: 'Portfolio Based', sub: 'Graduate with a deployment-ready portfolio that proves your skills to future employers.' },
];

// --- PARTNERS & ALLIANCES ---

export const UNIVERSITY_PARTNERS = [
  'TechCorp Solutions', 'Creative Agency X', 'DevHouse Inc', 'Marketing Pro', 'Global Systems', 'StartUp A'
];

export const CORPORATE_PARTNERS = [
  'Google', 'Amazon', 'Microsoft', 'IBM', 'Meta', 'Zoho', 'TCS', 'Infosys'
];

// --- RESOURCES DATA (Exported from data/resourceData.tsx) ---
export const MOCK_BLOGS = BLOGS;
export const MOCK_LESSONS = LESSONS;
export const MOCK_EBOOKS = EBOOKS;
export { FULL_PROGRAM_CATALOG };


export const MOCK_WEBINARS = [
  {
    id: 1,
    title: "Breaking into Tech in 2024",
    date: "Nov 15, 2023",
    time: "6:00 PM EST",
    speaker: "Sarah Chen, Netflix",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Agency Operations Masterclass",
    date: "Nov 22, 2023",
    time: "1:00 PM EST",
    speaker: "Mike Ross, GK Agency",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "System Design for Juniors",
    date: "Oct 10, 2023",
    time: "Recorded",
    speaker: "David Miller, Google",
    status: "Past"
  }
];

// --- ROADMAPS ---
export const MOCK_ROADMAPS: Roadmap[] = [
  {
    id: 'frontend-developer',
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Master modern frontend engineering. From HTML/CSS to React ecosystem and Performance optimization.',
    category: 'Technology',
    lastUpdated: 'Oct 2024',
    relatedCourseIds: ['mern-stack-development'],
    stages: [
      {
        id: 'fe-fund',
        label: 'Web Fundamentals',
        description: 'The building blocks of the internet.',
        topics: [
          { id: 'web-basics', title: 'Internet Basics', description: 'DNS, HTTP/S, Browsers.', type: 'core' },
          { id: 'html', title: 'HTML5 & Semantic Web', description: 'Accessibility, SEO-friendly markup.', type: 'core' },
          { id: 'css', title: 'CSS3 & Responsive Design', description: 'Flexbox, Grid, Media Queries.', type: 'core' },
        ]
      },
      {
        id: 'fe-js',
        label: 'JavaScript Mastery',
        description: 'Programming logic and DOM manipulation.',
        topics: [
          { id: 'es6', title: 'ES6+ Syntax', description: 'Arrow functions, Destructuring, Modules.', type: 'core' },
          { id: 'async', title: 'Async Programming', description: 'Promises, Async/Await, Fetch API.', type: 'core' },
          { id: 'ts', title: 'TypeScript', description: 'Static typing for scalable apps.', type: 'advanced' },
        ]
      },
      {
        id: 'fe-react',
        label: 'React Ecosystem',
        description: 'Building component-based UIs.',
        topics: [
          { id: 'react-core', title: 'React Hooks', description: 'useState, useEffect, Custom Hooks.', type: 'core' },
          { id: 'state', title: 'State Management', description: 'Redux Toolkit, Context API.', type: 'core' },
          { id: 'next', title: 'Next.js', description: 'SSR, SSG, Routing.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'full-stack-engineer',
    slug: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    description: 'Become a complete developer capable of handling Frontend, Backend, Database, and DevOps.',
    category: 'Technology',
    lastUpdated: 'Nov 2024',
    relatedCourseIds: ['mern-stack-development', 'mern-stack-development'],
    stages: [
      {
        id: 'fs-back',
        label: 'Backend Logic',
        description: 'Server-side programming and API design.',
        topics: [
          { id: 'node', title: 'Node.js Runtime', description: 'Event loop, File System, Streams.', type: 'core' },
          { id: 'api', title: 'RESTful APIs', description: 'Endpoints, Methods, Status Codes.', type: 'core' },
          { id: 'auth', title: 'Authentication', description: 'JWT, OAuth, Session management.', type: 'core' },
        ]
      },
      {
        id: 'fs-db',
        label: 'Database Management',
        description: 'Storing and retrieving data efficiently.',
        topics: [
          { id: 'sql', title: 'SQL (Relational)', description: 'Tables, Joins, Normalization.', type: 'core' },
          { id: 'nosql', title: 'MongoDB (NoSQL)', description: 'Documents, Aggregation.', type: 'core' },
          { id: 'orm', title: 'Object Data Modeling (ODM)', description: 'Mongoose for MongoDB.', type: 'optional' },
        ]
      },
      {
        id: 'fs-ops',
        label: 'Deployment & DevOps',
        description: 'Taking applications to production.',
        topics: [
          { id: 'git', title: 'Version Control', description: 'Git workflows, PRs, Branching.', type: 'core' },
          { id: 'cloud', title: 'Cloud Basics', description: 'AWS EC2, S3, Vercel.', type: 'advanced' },
          { id: 'ci-cd', title: 'CI/CD Pipelines', description: 'Automated testing and deployment.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'data-scientist',
    slug: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze data, build predictive models, and drive business decisions with Python and ML.',
    category: 'Technology',
    lastUpdated: 'Nov 2024',
    relatedCourseIds: ['data-science', 'complete-banking-course', 'ai-tools-business-office'],
    stages: [
      {
        id: 'ds-math',
        label: 'Mathematical Foundations',
        description: 'The language of data.',
        topics: [
          { id: 'stats', title: 'Statistics & Probability', description: 'Distributions, Hypothesis Testing.', type: 'core' },
          { id: 'excel', title: 'Advanced Excel', description: 'Pivot Tables, Lookups, Power Query.', type: 'core' },
        ]
      },
      {
        id: 'ds-py',
        label: 'Python for Data',
        description: 'Coding for analysis.',
        topics: [
          { id: 'pandas', title: 'Pandas & NumPy', description: 'Data manipulation and cleaning.', type: 'core' },
          { id: 'viz', title: 'Visualization', description: 'Matplotlib, Seaborn, Tableau.', type: 'core' },
          { id: 'sql-ds', title: 'SQL for Analysis', description: 'Querying large datasets.', type: 'core' },
        ]
      },
      {
        id: 'ds-ml',
        label: 'Machine Learning',
        description: 'Building intelligent models.',
        topics: [
          { id: 'sl', title: 'Supervised Learning', description: 'Regression, Classification.', type: 'core' },
          { id: 'ul', title: 'Unsupervised Learning', description: 'Clustering, PCA.', type: 'advanced' },
          { id: 'deploy', title: 'Model Deployment', description: 'Flask/FastAPI, Streamlit.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'digital-marketer',
    slug: 'digital-marketer',
    title: 'Digital Marketing Strategist',
    description: 'Master the complete marketing funnel from awareness to conversion using SEO, Ads, and Content.',
    category: 'Marketing',
    lastUpdated: 'Nov 2024',
    relatedCourseIds: ['digital-marketing', 'digital-marketing', 'digital-marketing'],
    stages: [
      {
        id: 'dm-organic',
        label: 'Organic Growth',
        description: 'Driving traffic without ad spend.',
        topics: [
          { id: 'seo', title: 'SEO Mastery', description: 'On-page, Technical, Backlinks.', type: 'core' },
          { id: 'content', title: 'Content Strategy', description: 'Blogging, Video, Storytelling.', type: 'core' },
          { id: 'social', title: 'Social Media', description: 'Instagram, LinkedIn growth.', type: 'core' },
        ]
      },
      {
        id: 'dm-paid',
        label: 'Performance Marketing',
        description: 'Paid acquisition channels.',
        topics: [
          { id: 'google-ads', title: 'Google Ads', description: 'Search, Display, Shopping.', type: 'core' },
          { id: 'meta-ads', title: 'Meta Ads', description: 'Facebook/Instagram targeting.', type: 'core' },
          { id: 'analytics', title: 'Data Analytics', description: 'GA4, ROI tracking, Attribution.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    slug: 'ui-ux-designer',
    title: 'Product Designer (UI/UX)',
    description: 'Design intuitive digital products. From user research to high-fidelity prototyping.',
    category: 'Design',
    lastUpdated: 'Dec 2024',
    relatedCourseIds: ['ui-ux-design', 'ui-ux-design'],
    stages: [
      {
        id: 'ux-res',
        label: 'UX Research',
        description: 'Understanding the user.',
        topics: [
          { id: 'empathy', title: 'User Empathy', description: 'Personas, User Journeys.', type: 'core' },
          { id: 'ia', title: 'Information Architecture', description: 'Sitemaps, User Flows.', type: 'core' },
          { id: 'wire', title: 'Wireframing', description: 'Low-fidelity sketching.', type: 'core' },
        ]
      },
      {
        id: 'ui-vis',
        label: 'Visual Design',
        description: 'Crafting beautiful interfaces.',
        topics: [
          { id: 'figma', title: 'Figma Mastery', description: 'Auto-layout, Components, Variants.', type: 'core' },
          { id: 'principles', title: 'Design Principles', description: 'Typography, Color, Spacing.', type: 'core' },
          { id: 'systems', title: 'Design Systems', description: 'Scalable UI libraries.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'ai-automation-expert',
    slug: 'ai-automation-expert',
    title: 'AI & Automation Expert',
    description: 'Future-proof your career by mastering AI tools, prompt engineering, and workflow automation.',
    category: 'Business',
    lastUpdated: 'Jan 2025',
    relatedCourseIds: ['ai-tools-business-office', 'ai-tools-business-office', 'ai-tools-business-office'],
    stages: [
      {
        id: 'ai-fund',
        label: 'Generative AI',
        description: 'Leveraging LLMs for productivity.',
        topics: [
          { id: 'prompt', title: 'Prompt Engineering', description: 'Zero-shot, Chain-of-thought.', type: 'core' },
          { id: 'tools', title: 'AI Tools', description: 'ChatGPT, Midjourney, Claude.', type: 'core' },
        ]
      },
      {
        id: 'auto-flow',
        label: 'Workflow Automation',
        description: 'Building autonomous systems.',
        topics: [
          { id: 'n8n', title: 'n8n / Zapier', description: 'Connecting APIs without code.', type: 'core' },
          { id: 'integrations', title: 'API Integrations', description: 'Webhooks, JSON data.', type: 'advanced' },
          { id: 'agents', title: 'AI Agents', description: 'Autonomous task execution.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'banking-finance',
    slug: 'banking-finance',
    title: 'Banking & Finance Professional',
    description: 'Comprehensive path for banking operations, financial accounting, and market trading.',
    category: 'Business',
    lastUpdated: 'Nov 2024',
    relatedCourseIds: ['complete-banking-course', 'complete-banking-course', 'complete-banking-course'],
    stages: [
      {
        id: 'bf-ops',
        label: 'Banking Operations',
        description: 'Core banking systems.',
        topics: [
          { id: 'retail', title: 'Retail Banking', description: 'Accounts, KYC, Compliance.', type: 'core' },
          { id: 'comm', title: 'Business Communication', description: 'Professional English for Banking.', type: 'core' },
        ]
      },
      {
        id: 'bf-acc',
        label: 'Accounting & Finance',
        description: 'Managing financial records.',
        topics: [
          { id: 'tally', title: 'Tally Prime', description: 'Vouchers, Inventory, Reports.', type: 'core' },
          { id: 'gst', title: 'GST Compliance', description: 'Filing, Returns, Calculations.', type: 'core' },
          { id: 'markets', title: 'Stock Markets', description: 'Equity, Derivatives, Technical Analysis.', type: 'milestone' },
        ]
      }
    ]
  },
  {
    id: 'game-developer',
    slug: 'game-developer',
    title: 'Game & AR/VR Developer',
    description: 'Create immersive experiences. From mobile games to Virtual Reality simulations.',
    category: 'Technology',
    lastUpdated: 'Dec 2024',
    relatedCourseIds: ['dev-09', 'tech-10'],
    stages: [
      {
        id: 'gd-fund',
        label: 'Game Foundations',
        description: 'Logic and design.',
        topics: [
          { id: 'c-sharp', title: 'C# Programming', description: 'Scripting for Unity.', type: 'core' },
          { id: 'unity', title: 'Unity Engine', description: 'Physics, Scenes, Prefabs.', type: 'core' },
        ]
      },
      {
        id: 'gd-adv',
        label: 'Advanced XR',
        description: 'Extended Reality development.',
        topics: [
          { id: '3d', title: '3D Assets', description: 'Importing models, Textures.', type: 'optional' },
          { id: 'ar-vr', title: 'AR/VR SDKs', description: 'XR Interaction Toolkit.', type: 'advanced' },
          { id: 'pub', title: 'Publishing', description: 'App Store, Play Store optimization.', type: 'milestone' },
        ]
      }
    ]
  }
];

export const MOCK_TASKS: Task[] = [
  { id: 't1', title: 'Client API Integration', courseId: 'mern-stack-development', courseName: 'MERN Stack', dueDate: '2023-11-15', status: 'pending', type: 'project' },
  { id: 't2', title: 'Campaign ROI Analysis', courseId: 'digital-marketing', courseName: 'Digital Marketing', dueDate: '2023-10-20', status: 'submitted', type: 'quiz' },
];

export const HOW_IT_WORKS_STEPS = [
  { step: "01", title: "Select Your Track", desc: "Choose a specialized career path in Tech, Marketing, or Design." },
  { step: "02", title: "Join the Workspace", desc: "Enter our digital office environment. Attend standups and use industry tools." },
  { step: "03", title: "Deliver Real Work", desc: "Work on live client briefs under the guidance of agency mentors." },
  { step: "04", title: "Career Launch", desc: "Leverage your portfolio and our agency network to secure your role." }
];

