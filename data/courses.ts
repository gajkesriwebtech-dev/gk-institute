import { Program, UnifiedCourse } from "@/types";
import { cld } from "@/lib/cloudinary";

/**
 * @deprecated Use UnifiedCourse instead from '@/types'
 */
export interface Course extends UnifiedCourse { }

export const FULL_PROGRAM_CATALOG: Program[] = [
    {
        id: "mern-stack-mastery",
        slug: "mern-stack-mastery",
        programType: 'master',
        title: "MERN Stack Mastery",
        category: "Technology & Development",
        description: "An intensive immersion into full stack engineering. Master MongoDB, Express, React, and Node with advanced architecture and deployment.",
        duration: "6 Months",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        price: 45000,
        originalPrice: 65000,
        highlights: [
            "Advanced Full Stack Integration",
            "REST API Architecture",
            "Authentication & Security",
            "Cloud Deployment (AWS/Vercel)",
            "Industry standard workflows"
        ],
        modules: [
            { title: "Module 1: Web & JavaScript Fundamentals", topics: ["ES6+ concepts", "Asynchronous JavaScript", "DOM manipulation", "Web architecture"] },
            { title: "Module 2: React Frontend Development", topics: ["Hooks & State", "Routing & Context", "Component patterns", "Performance optimization"] },
            { title: "Module 3: Node & Express Backend Development", topics: ["Middleware design", "API routing", "Error handling", "Authentication strategies"] },
            { title: "Module 4: MongoDB & Database Design", topics: ["Schema modeling", "Indexing & performance", "Aggregation framework", "Data integrity"] },
            { title: "Module 5: Full Stack Integration & Authentication", topics: ["JWT & Passport", "Frontend-Backend connection", "State management", "Secure sessions"] },
            { title: "Module 6: Deployment & Industry Workflow", topics: ["Git/GitHub", "Docker basics", "CI/CD pipelines", "AWS/Heroku hosting"] }
        ],
        jobRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Application Developer"],
        outcomes: [
            { id: 1, title: "Full Stack Engineering", description: "Develop and deploy complete end-to-end applications independently." },
            { id: 2, title: "API Architect", description: "Design robust RESTful services with professional-grade security." },
            { id: 3, title: "State Management", description: "Coordinate complex data flows using React Context or Redux." },
            { id: 4, title: "Database Architect", description: "Model scalable NoSQL databases for high-performance apps." },
            { id: 5, title: "DevOps Basics", description: "Manage deployment pipelines and maintain cloud infrastructure." },
            { id: 6, title: "React Mastery", description: "Build fluid, high-performance UIs with modern React patterns." }
        ],
        keyFeatures: ["Mastery Projects", "Code Reviews", "Advanced Stack"]
    },
    {
        id: "ui-ux-designing-pro",
        slug: "ui-and-ux-designing",
        programType: 'pro',
        title: "UI & UX Designing",
        category: "Creative & Design",
        description: "Transform ideas into stunning digital experiences. Master user research, wireframing, and interactive prototyping.",
        duration: "3 Months",
        thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a16ed321?auto=format&fit=crop&q=80&w=600",
        price: 35000,
        originalPrice: 50000,
        highlights: [
            "Figma & Adobe XD Mastery",
            "UX Research & Strategy",
            "Advanced Prototyping",
            "Responsive UI Systems",
            "Professional Portfolio"
        ],
        modules: [
            { title: "Module 1: UI/UX Foundations & Design Thinking", topics: ["Design principles", "Problem statement", "Ideation phase", "Sketching basics"] },
            { title: "Module 2: User Research & Information Architecture", topics: ["User personas", "User journey", "Site maps", "Navigation flow"] },
            { title: "Module 3: Wireframing & Prototyping Tools", topics: ["Low-fi wireframes", "High-fi mocks", "Interactive prototypes", "User testing"] },
            { title: "Module 4: Responsive & Mobile Design", topics: ["Mobile-first approach", "Grid systems", "Breakpoints", "Adaptive layouts"] },
            { title: "Module 5: Accessibility & Design Systems", topics: ["WCAG standards", "Component libraries", "Style guides", "Design Handoff"] },
            { title: "Module 6: Portfolio & Career Development", topics: ["Case study writing", "Portfolio building", "Interview prep", "Client freelancing"] }
        ],
        jobRoles: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer"],
        outcomes: [
            { id: 1, title: "Wireframing", description: "Create high-precision skeletal frameworks for diverse web apps." },
            { id: 2, title: "Figma Expert", description: "Utilize advanced Figma features for collaborative design." },
            { id: 3, title: "User Researcher", description: "Conduct data-driven studies to understand user behavior." },
            { id: 4, title: "Responsive UI", description: "Design interfaces that scale seamlessly across devices." },
            { id: 5, title: "Accessibility Lead", description: "Build inclusive designs that follow global WCAG standards." },
            { id: 6, title: "Design Strategist", description: "Bridge the gap between business goals and user needs." }
        ],
        keyFeatures: ["Figma Mastery", "Portfolio Labs", "User Studies"]
    },
    {
        id: "wordpress-mastery-pro",
        slug: "wordpress-development",
        programType: 'pro',
        title: "WordPress Development",
        category: "Technology & Development",
        description: "Beyond simple sites. Master custom themes, plugin development, and high-security WordPress architectures.",
        duration: "4 Months",
        thumbnail: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600",
        price: 20000,
        originalPrice: 30000,
        highlights: [
            "Custom Theme Editing",
            "Plugin Integration & Logic",
            "Advanced Security Protocols",
            "High-Performance Hosting",
            "E-commerce setup"
        ],
        modules: [
            { title: "Module 1: WordPress Setup & CMS Basics", topics: ["Local vs Live setup", "Database config", "General settings", "Admin interface"] },
            { title: "Module 2: Pages & Content Management", topics: ["Gutenberg mastery", "Custom post types", "Taxonomies", "Media handling"] },
            { title: "Module 3: Themes & Plugin Customization", topics: ["Theme selection", "Astra/Elementor hacks", "Essential plugins", "Widget areas"] },
            { title: "Module 4: Forms & Integrations", topics: ["WPForms/Contact Form 7", "API connections", "Newsletter setup", "Payment gateways"] },
            { title: "Module 5: Security & Backup", topics: ["Hardening WP", "SSL config", "Backup scheduling", "Safe updates"] },
            { title: "Module 6: Deployment & Hosting", topics: ["Migration steps", "Domain mapping", "Performance optimization", "PHP basics"] }
        ],
        jobRoles: ["WordPress Developer", "Website Administrator", "Freelance Web Developer"],
        outcomes: [
            { id: 1, title: "CMS Management", description: "Control complex data hierarchies within the WordPress engine." },
            { id: 2, title: "Theme Expert", description: "Modify and customize professional themes for unique brand looks." },
            { id: 3, title: "Security Pro", description: "Lockdown WordPress sites against common web vulnerabilities." },
            { id: 4, title: "Speed Optimizer", description: "Deliver 90+ lighthouse scores on WordPress frameworks." },
            { id: 5, title: "Client Delivery", description: "Manage full-scale web projects from brief to live servers." },
            { id: 6, title: "E-com Solutions", description: "Implement robust WooCommerce engines for global shops." }
        ],
        keyFeatures: ["Live Hosting", "Security Audits", "Custom Hooks"]
    },
    {
        id: "java-programming-pro",
        slug: "java-programming",
        programType: 'pro',
        title: "Java Programming",
        category: "Technology & Development",
        description: "Master the language of enterprise. Build high-performance, object-oriented software with advanced Java techniques.",
        duration: "3 Months",
        thumbnail: cld("courses/java-programming", 600),
        price: 30000,
        originalPrice: 45000,
        highlights: [
            "OOP Excellence",
            "Exception Handling Patterns",
            "Data Structures & Collections",
            "Enterprise Dev Environments",
            "Industrial Java Projects"
        ],
        modules: [
            { title: "Module 1: Programming Fundamentals", topics: ["Logic building", "Algorithm design", "Flowcharts", "Memory management"] },
            { title: "Module 2: Java Syntax & Data Types", topics: ["JVM/JRE architecture", "Primitive types", "Operators", "Strings/Arrays"] },
            { title: "Module 3: OOP Concepts", topics: ["Class/Object", "Inheritance", "Polymorphism", "Abstraction/Encapsulation"] },
            { title: "Module 4: Exception Handling", topics: ["Try-catch-finally", "Custom exceptions", "Error propagation", "Logging foundations"] },
            { title: "Module 5: Development Environments", topics: ["IntelliJ/Eclipse setup", "Maven/Gradle basics", "Unit testing intro", "Debugger usage"] },
            { title: "Module 6: Practice Projects", topics: ["Bank management system", "Inventory tool", "UI basics with Swing", "Final Java app"] }
        ],
        jobRoles: ["Java Developer", "Software Developer", "Backend Developer"],
        outcomes: [
            { id: 1, title: "OOP Mastery", description: "Architect reusable, scalable systems using core design patterns." },
            { id: 2, title: "Industrial Code", description: "Write clean, enterprise-standard Java following SOLID principles." },
            { id: 3, title: "Error Resiliency", description: "Build fault-tolerant applications with advanced exception logic." },
            { id: 4, title: "Safe Dev", description: "Perform secure data operations and memory-safe programming." },
            { id: 5, title: "Problem Solver", description: "Apply Data Structures to solve complex algorithmic challenges." },
            { id: 6, title: "Backend Logic", description: "Develop server-side components for high-traffic environments." }
        ],
        keyFeatures: ["IDE Labs", "Clean Code Focus", "Interview Prep"]
    },
    {
        id: "ocp-specialist",
        slug: "oracle-certified-professional",
        programType: 'pro',
        title: "Oracle Certified Professional",
        category: "Technology & Development",
        description: "Elite database administration training. Prepare for OCP certification with hands-on labs in architecture and tuning.",
        duration: "3.5 Months",
        thumbnail: cld("courses/oracle-certified-professional-ocp", 600),
        price: 40000,
        originalPrice: 55000,
        highlights: [
            "SQL Advanced Querying",
            "OCP Architecture Prep",
            "Performance Tuning Mastery",
            "RMAN Backup & Recovery",
            "DB Admin Workshops"
        ],
        modules: [
            { title: "Module 1: SQL Fundamentals", topics: ["Advanced joins", "Subqueries", "Analytic functions", "Transactional SQL"] },
            { title: "Module 2: Database Architecture", topics: ["Oracle instance levels", "Memory SGA/PGA", "Physical structures", "Multitenant CDB/PDB"] },
            { title: "Module 3: Administration Workshop I", topics: ["User management", "Storage config", "Network config", "Monitoring basics"] },
            { title: "Module 4: Administration Workshop II", topics: ["Database patching", "Upgrades", "Resource Manager", "Scheduler config"] },
            { title: "Module 5: Backup & Recovery", topics: ["RMAN configuration", "Disaster recovery", "Media failure hacks", "Data masking"] },
            { title: "Module 6: Performance Tuning", topics: ["Execution plans", "Index tuning", "Wait events", "SQL tuning advisor"] }
        ],
        jobRoles: ["Database Administrator", "Oracle Specialist", "SQL Developer"],
        outcomes: [
            { id: 1, title: "Oracle Master", description: "Lead the administration of mission-critical enterprise databases." },
            { id: 2, title: "Tuning Expert", description: "Optimize SQL performance for massive data throughput." },
            { id: 3, title: "Security Admin", description: "Enforce enterprise encryption and data protection policies." },
            { id: 4, title: "RMAN Pro", description: "Architect zero-data-loss backup and recovery solutions." },
            { id: 5, title: "OCP Ready", description: "Gain the skills to clear global OCP certification exams." },
            { id: 6, title: "Data Migration", description: "Safely migrate and upgrade databases across environments." }
        ],
        keyFeatures: ["Certification Prep", "Oracle Cloud Labs", "Admin Tools"]
    },
    {
        id: "n8n-smart-automation",
        slug: "n8n-smart-automation",
        programType: 'foundation',
        title: "n8n Smart Automation",
        category: "AI & Automation",
        description: "Unleash the power of n8n. Build automated business workflows that connect 100+ apps without writing complex code.",
        duration: "2 Months",
        thumbnail: cld("courses/n8n-automation", 600),
        price: 22000,
        originalPrice: 32000,
        highlights: [
            "API & Webhook Mastery",
            "Workflow Logic Design",
            "VPS & Docker Deployment",
            "Scalable Business Flows",
            "Capstone Lab Projects"
        ],
        modules: [
            { title: "Module 1: Automation Fundamentals", topics: ["Triggers & Actions", "Node-based design", "Execution flow", "Data mapping"] },
            { title: "Module 2: API & App Integrations", topics: ["OAuth2/API Keys", "HTTP Request node", "Third-party SDKs", "JSON handling"] },
            { title: "Module 3: Logic & Conditions", topics: ["IF/Switch logic", "Loops in n8n", "Error handling", "Function nodes"] },
            { title: "Module 4: Business Workflow Automation", topics: ["Lead generation", "Auto-reporting", "Marketing funnels", "CRM sync"] },
            { title: "Module 5: Deployment & Hosting", topics: ["Self-hosting VPS", "Docker basics", "Database connection", "Security"] },
            { title: "Module 6: Capstone Automation Project", topics: ["Full business engine", "Scaling workflows", "Final presentation"] }
        ],
        jobRoles: ["Automation Engineer", "Workflow Specialist", "No-Code Developer"],
        outcomes: [
            { id: 1, title: "Workflow Logic", description: "Design complex conditional flows for enterprise efficiency." },
            { id: 2, title: "API Integrator", description: "Connect disparate SaaS tools via secure authentication." },
            { id: 3, title: "No-Code Apps", description: "Build industrial software bridges with 0 line of traditional code." },
            { id: 4, title: "Automator ROI", description: "Saves thousands of manual work hours via robotic processing." },
            { id: 5, title: "Error Resiliency", description: "Build workflows that self-heal and alert on data failure." },
            { id: 6, title: "VPS Hosting", description: "Manage professional-grade automation servers independently." }
        ],
        keyFeatures: ["Node Libraries", "API Sandboxes", "Process Maps"]
    },
    {
        id: "prompt-engineering-expert",
        slug: "prompt-engineering",
        programType: 'foundation',
        title: "Prompt Engineering",
        category: "AI & Automation",
        description: "Master the art of communicating with AI. Craft elite prompts for business, coding, and content at scale.",
        duration: "2 Months",
        thumbnail: cld("courses/prompt-engineering", 600),
        price: 18000,
        originalPrice: 25000,
        highlights: [
            "Advanced Prompt Optics",
            "AI Workflow Integration",
            "Hallucination Control",
            "AI Agent Delegation",
            "Ethical AI Frameworks"
        ],
        modules: [
            { title: "Module 1: AI Foundations", topics: ["LLM mechanics", "Token limits", "Transformer basics", "AI variants"] },
            { title: "Module 2: Prompt Structures", topics: ["Role-playing", "Contextual constraints", "Output formatting", "One-shot/Few-shot"] },
            { title: "Module 3: Advanced Prompt Optimization", topics: ["Chain of Thought", "Iterative refinement", "Reducing bias", "Temperature settings"] },
            { title: "Module 4: AI for Business & Content", topics: ["Copywriting prompts", "Marketing strategy", "Email automation", "Image generation"] },
            { title: "Module 5: Automation with AI", topics: ["Tool calling", "Autonomous agents", "Prompt injection defense", "API keys"] },
            { title: "Module 6: Capstone AI Project", topics: ["Custom AI assistant", "Prompt library", "Performance audit"] }
        ],
        jobRoles: ["AI Prompt Engineer", "AI Content Strategist", "Automation Specialist"],
        outcomes: [
            { id: 1, title: "Prompt Crafting", description: "Engineer high-precision prompts for consistent AI responses." },
            { id: 2, title: "AI Optimization", description: "Minimize hallucinations and maximize model accuracy." },
            { id: 3, title: "Automation lead", description: "Integrate LLMs into professional business workflows." },
            { id: 4, title: "Safe AI", description: "Enforce security and privacy standards in AI interactions." },
            { id: 5, title: "Creative Scale", description: "Generate monthly content in hours using structured AI frameworks." },
            { id: 6, title: "Technical Prompt", description: "Debug and generate production-ready code via prompt logic." }
        ],
        keyFeatures: ["Prompt Hub", "AI Tool Access", "Logic Templates"]
    },
    {
        id: "youtube-script-writing-base",
        slug: "youtube-script-writing",
        programType: 'foundation',
        title: "YouTube Script Writing",
        category: "Creative & Design",
        description: "Write high-retention scripts that hook viewers. Master the psychology of viral content and SEO for creators.",
        duration: "2 Months",
        thumbnail: cld("courses/youtube-script-writing", 600),
        price: 12000,
        originalPrice: 18000,
        highlights: [
            "Hook & Intro Mastery",
            "Retention Psychology",
            "SEO Keyword Scripting",
            "Algorithm Centric Writing",
            "Professional Content Calendars"
        ],
        modules: [
            { title: "Module 1: YouTube Algorithm Basics", topics: ["CTR & Retention", "Viewer journey", "Algorithm signals", "Analytics intro"] },
            { title: "Module 2: Script Structure & Hooks", topics: ["The Rule of 30", "Opening hooks", "Pacing & rhythm", "The 3-act structure"] },
            { title: "Module 3: Storytelling & Retention", topics: ["Narrative arcs", "Visual scripting", "Engagement triggers", "Scripting for B-roll"] },
            { title: "Module 4: SEO Optimization", topics: ["Long-tail keywords", "Title/Thumbnail unity", "Metadata in scripts", "Search intent"] },
            { title: "Module 5: Monetization Strategy", topics: ["Sponsor integration", "Affiliate CTAs", "Membership hooks", "Brand deal scripts"] },
            { title: "Module 6: Capstone Script Project", topics: ["Niche script draft", "Retention audit", "Industry feedback"] }
        ],
        jobRoles: ["YouTube Script Writer", "Content Strategist", "Video Script Creator"],
        outcomes: [
            { id: 1, title: "Script Writing", description: "Execute professional scripts with perfect pacing and retention beats." },
            { id: 2, title: "Retention Lead", description: "Maintain 50%+ viewer retention through psychological scripting." },
            { id: 3, title: "SEO Scripting", description: "Write metadata-optimized scripts that rank in search results." },
            { id: 4, title: "Visual Narrative", description: "Draft visual cues for editors to improve video production value." },
            { id: 5, title: "Brand Voice", description: "Synthesize unique creator voices across multiple YouTube niches." },
            { id: 6, title: "Growth Engine", description: "Scale channel growth through consistent high-value script output." }
        ],
        keyFeatures: ["Script Audits", "Viral Checklists", "AI Writing Hub"]
    },
    {
        id: "photography-skills-pro",
        slug: "photography-skills",
        programType: 'pro',
        title: "Photography Skills",
        category: "Creative & Design",
        description: "Master the lens. From technical camera settings to advanced lighting and professional post-production.",
        duration: "3 Months",
        thumbnail: cld("courses/photography", 600),
        price: 15000,
        originalPrice: 22000,
        highlights: [
            "Professional Lighting",
            "Composition Science",
            "Advanced Lightroom Editing",
            "Outdoor & Event Shoots",
            "Portfolio Development"
        ],
        modules: [
            { title: "Module 1: Photography Fundamentals", topics: ["History of cameras", "Sensor types", "File formats (RAW)", "Lens selection"] },
            { title: "Module 2: Camera Settings & Composition", topics: ["Manual mode", "Aperture/ISO/Shutter", "Rule of Thirds", "Perspective"] },
            { title: "Module 3: Lighting Techniques", topics: ["Three-point lighting", "Flash vs Natural", "Modifiers", "Shadow sculpting"] },
            { title: "Module 4: Editing & Post Production", topics: ["Lightroom workflow", "Color grading", "Retouching", "Preset creation"] },
            { title: "Module 5: Outdoor & Event Photography", topics: ["Landscape basics", "Low light events", "Street photography", "Client handling"] },
            { title: "Module 6: Portfolio Development", topics: ["Curation", "Printing basics", "Digital gallery", "Business setup"] }
        ],
        jobRoles: ["Professional Photographer", "Event Photographer", "Freelance Photographer", "Content Creator"],
        outcomes: [
            { id: 1, title: "Camera Handling", description: "Master full manual control of professional DSLR/Mirrorless systems." },
            { id: 2, title: "Lighting Setup", description: "Design complex studio lighting for portraits and products." },
            { id: 3, title: "Visual Storytelling", description: "Frame shots that convey deep emotional and commercial value." },
            { id: 4, title: "Editing Mastery", description: "Deliver pixel-perfect, color-graded professional digital images." },
            { id: 5, title: "Event Specialist", description: "Coordinate and lead photography for high-profile live events." },
            { id: 6, title: "Business Owner", description: "Launch and market a professional freelance photography studio." }
        ],
        keyFeatures: ["Studio Labs", "Editing Hub", "Field Trips"]
    },
    {
        id: "code-to-play-game-app",
        slug: "code-to-play-game-and-app-development",
        programType: 'master',
        title: "Code to Play (Game & App Development)",
        category: "Technology & Development",
        description: "The ultimate cross-platform mastery. Build immersive 3D games and high-utility mobile apps for iOS and Android.",
        duration: "6 Months",
        thumbnail: cld("courses/game-app-development", 600),
        price: 45000,
        originalPrice: 65000,
        highlights: [
            "Unity & Unreal Engine",
            "3D Physics & Mobile Logic",
            "Cross-Platform UI/UX",
            "App Publishing (Store)",
            "Game Monetization Theory"
        ],
        modules: [
            { title: "Module 1: Programming Fundamentals", topics: ["C# basics", "Logical flow", "OOP in Unity", "Data persistence"] },
            { title: "Module 2: Mobile App Development Basics", topics: ["Flutter/React Native intro", "Material UI", "Routing", "State"] },
            { title: "Module 3: Game Design Principles", topics: ["Level design", "Game mechanics", "User engagement", "Economy systems"] },
            { title: "Module 4: Unity & Unreal Engine", topics: ["Scene building", "3D assets", "Scripting gravity", "Prefabs"] },
            { title: "Module 5: Publishing & Monetization", topics: ["AdMob integration", "App Store/Play Store rules", "In-app purchases", "Marketing"] },
            { title: "Module 6: Capstone Game/App Project", topics: ["End-to-end game code", "Full utility app", "Pitch to mentors"] }
        ],
        jobRoles: ["Game Developer", "Mobile App Developer", "Unity Developer", "Software Developer"],
        outcomes: [
            { id: 1, title: "App Developer", description: "Build and deploy scalable mobile apps across multiple platforms." },
            { id: 2, title: "Game Architect", description: "Execute immersive 2D/3D games with complex physics and logic." },
            { id: 3, title: "Unity Master", description: "Professional-grade proficiency in the world's leading game engine." },
            { id: 4, title: "UI Design", description: "Design intuitive interfaces optimized for touch and controller interaction." },
            { id: 5, title: "Publishing Lead", description: "Navigate global app store policies and successful launches." },
            { id: 6, title: "Monetization Pro", description: "Implement revenue streams that scale with user growth." }
        ],
        keyFeatures: ["VR Support", "Unity Labs", "Mobile SDKs"]
    },
    {
        id: "ai-office-productivity",
        slug: "ai-tools-for-office-and-business",
        programType: 'foundation',
        title: "AI Tools for Office & Business",
        category: "AI & Automation",
        description: "Boost your productivity by 10x. Master AI tools for reports, professional emails, and daily office automation.",
        duration: "2 Months",
        thumbnail: cld("courses/ai-tools-business-office", 600),
        price: 8000,
        originalPrice: 12000,
        highlights: [
            "AI for Documentation",
            "Smart Email Automation",
            "AI Data Analysis (Excel)",
            "Marketing Content AI",
            "Workflow Integration"
        ],
        modules: [
            { title: "Module 1: Introduction to AI Tools", topics: ["ChatGPT vs Claude", "AI extensions", "Safety/Privacy", "Prompt basics"] },
            { title: "Module 2: AI for Productivity & Office Work", topics: ["Auto-summarization", "AI emails", "Meeting minutes", "Scheduling"] },
            { title: "Module 3: AI for Marketing & Sales", topics: ["Social captions", "Sales scripts", "Pitch decks", "Client research"] },
            { title: "Module 4: Automation with AI", topics: ["Zapier/Make basics", "Connecting AI to GSheets", "Automated replies", "Slack/Teams bots"] },
            { title: "Module 5: Business Workflow Integration", topics: ["Process audits", "AI role delegation", "Implementation roadmap", "ROI tracking"] },
            { title: "Module 6: Practical AI Projects", topics: ["Auto-reporting toolkit", "AI Customer Desk", "Final office demo"] }
        ],
        jobRoles: ["AI Productivity Specialist", "Business Automation Consultant", "AI Office Assistant"],
        outcomes: [
            { id: 1, title: "Productivity Tools", description: "Master 10+ AI suites that eliminate repetitive administrative tasks." },
            { id: 2, title: "Content Automation", description: "Scale professional documentation and marketing copy instantly." },
            { id: 3, title: "Smart Marketing", description: "Deploy AI-driven campaigns for higher engagement and sales." },
            { id: 4, title: "Workflow Architect", description: "Redesign legacy office processes for machine-speed efficiency." },
            { id: 5, title: "Data Analyst", description: "Use AI to synthesize massive spreadsheets into actionable insights." },
            { id: 6, title: "Ethics Lead", description: "Safely navigate data privacy and AI usage in corporate settings." }
        ],
        keyFeatures: ["Tool Sandbox", "Workflow Audits", "Smart Kits"]
    },
    {
        id: "dropshipping-foundation",
        slug: "smart-dropshipping-mastery",
        programType: 'foundation',
        title: "Smart Dropshipping Mastery",
        category: "Digital Marketing & Online Business",
        description: "Your shortcut to global e-commerce. Launch a high-converting dropshipping store and scale from zero to profit.",
        duration: "2 Months",
        thumbnail: cld("courses/ecommerce-dropshipping", 600),
        price: 15000,
        originalPrice: 22000,
        highlights: [
            "Product Research Lab",
            "Shopify Optimization",
            "Viral Ad Frameworks",
            "Global Supplier Deals",
            "Automated Fulfillment"
        ],
        modules: [
            { title: "Module 1: E-Commerce Fundamentals", topics: ["Business models", "Market mindset", "Budgeting", "Legal/Tax intro"] },
            { title: "Module 2: Product Research & Market Analysis", topics: ["Winning metrics", "Spy tools", "Competitor analysis", "Trend spotting"] },
            { title: "Module 3: Shopify Store Setup", topics: ["Theme design", "Copywriting", "App installs", "Cart logic"] },
            { title: "Module 4: Payment Gateway & Logistics", topics: ["Stripe/PayPal setup", "Overseas shipping", "3PL basics", "Tracking tools"] },
            { title: "Module 5: Marketing & Ads Strategy", topics: ["TikTok/Meta Ads", "Scaling funnels", "Retargeting", "Creative hooks"] },
            { title: "Module 6: Scaling & Automation", topics: ["Sourcing agents", "Custom branding", "Outsourcing support", "Portfolio launch"] }
        ],
        jobRoles: ["E-Commerce Entrepreneur", "Dropshipping Specialist", "Online Store Manager"],
        outcomes: [
            { id: 1, title: "Product Scout", description: "Pinpoint viral products with proven high-margin potential." },
            { id: 2, title: "Shopify Expert", description: "Build pixel-perfect stores that convert traffic into loyal shoppers." },
            { id: 3, title: "Media Buyer", description: "Execute high-ROI ad campaigns across major social platforms." },
            { id: 4, title: "Auto-Commerce", description: "Setup systems that handle orders and tracking without manual effort." },
            { id: 5, title: "Logistics Pro", description: "Manage global supply chains with reliable manufacturing partners." },
            { id: 6, title: "Profit Architect", description: "Scale e-commerce brands from launch to sustainable profitability." }
        ],
        keyFeatures: ["Ad Blueprints", "Supplier Lists", "Niche Hunts"]
    },
    {
        id: "drone-pilot-training-base",
        slug: "drone-pilot-training",
        programType: 'foundation',
        title: "Drone Pilot Training",
        category: "Media & Production",
        description: "Take to the skies. Comprehensive training in drone flight, aerial safety, and high-end cinematography.",
        duration: "2 Months",
        thumbnail: cld("courses/drone-pilot", 600),
        price: 15000,
        originalPrice: 22000,
        highlights: [
            "Field Flight Practice",
            "Aerial Cinematography",
            "Safety & Regulations",
            "Maintenance Workshop",
            "Pilot Certification"
        ],
        modules: [
            { title: "Module 1: Drone Fundamentals & Safety", topics: ["UAV mechanics", "Battery safety", "Emergency protocols", "Weather checks"] },
            { title: "Module 2: Flight Controls & Practice", topics: ["GPS/Manual modes", "Takeoff/Landing", "Hovering drills", "Navigation"] },
            { title: "Module 3: Aerial Photography & Videography", topics: ["Camera angles", "Gimbal control", "Parallax shots", "Night flight"] },
            { title: "Module 4: Government Regulations", topics: ["No-fly zones", "Commercial laws", "Insurance", "Reporting basics"] },
            { title: "Module 5: Maintenance & Repair", topics: ["Propeller swaps", "Firmware updates", "Field repairs", "Parts sourcing"] },
            { title: "Module 6: Practical Field Training", topics: ["Industrial survey", "Event coverage", "Final flight audit"] }
        ],
        jobRoles: ["Certified Drone Pilot", "Aerial Videographer", "Drone Survey Operator"],
        outcomes: [
            { id: 1, title: "Drone Navigation", description: "Master precision flight in diverse environments and conditions." },
            { id: 2, title: "Aerial Shooting", description: "Capture cinematic, high-resolution footage from the sky." },
            { id: 3, title: "Safety Expert", description: "Execute flights following strict global aviation safety standards." },
            { id: 4, title: "Equipment Mastery", description: "Manage and maintain high-end drone hardware and software." },
            { id: 5, title: "Survey Operator", description: "Map and survey land for industrial and construction projects." },
            { id: 6, title: "Cinematographer", description: "Expertise in aerial lighting and motion for professional film." }
        ],
        keyFeatures: ["Field Practice", "Pilot Logbooks", "DP Kits"]
    },
    {
        id: "youtube-video-creation-base",
        slug: "youtube-video-creation",
        programType: 'foundation',
        title: "YouTube Video Creation",
        category: "Creative & Design",
        description: "The complete guide to becoming a YouTube creator. Master shooting, editing, and channel growth from scratch.",
        duration: "1 Month",
        thumbnail: cld("courses/youtube-video-creation", 600),
        price: 12000,
        originalPrice: 18000,
        highlights: [
            "Shooting & Lighting",
            "Editing Foundations",
            "SEO & Analytics",
            "Monetization Guide",
            "Channel Branding"
        ],
        modules: [
            { title: "Module 1: YouTube Channel Setup", topics: ["Niche branding", "Settings/SEO", "Banner/Logo", "About section"] },
            { title: "Module 2: Video Shooting Techniques", topics: ["Phone vs Camera", "Lighting setup", "Audio recording", "Hosting skills"] },
            { title: "Module 3: Editing Basics", topics: ["Cuts/Transitions", "Music/Audio", "Text overlays", "Exporting settings"] },
            { title: "Module 4: Thumbnail & SEO Optimization", topics: ["Clickable design", "Keywords/Tags", "Descriptions", "A/B testing"] },
            { title: "Module 5: Monetization Basics", topics: ["AdSense rules", "Sponsors", "Merch intro", "Brand deals"] },
            { title: "Module 6: Growth Strategy", topics: ["Audience engagement", "Shorts strategy", "Collaboration", "Consistency"] }
        ],
        jobRoles: ["YouTube Creator", "Video Editor", "Content Producer"],
        outcomes: [
            { id: 1, title: "Video Production", description: "Shoot professional-quality videos using accessible hardware." },
            { id: 2, title: "Editing Mastery", description: "Assemble high-engagement videos with clean cuts and audio." },
            { id: 3, title: "Thumbnail Expert", description: "Design eye-catching thumbnails that drive high click-through rates." },
            { id: 4, title: "SEO Strategist", description: "Rank videos in search results through metadata optimization." },
            { id: 5, title: "Growth Manager", description: "Build and scale a loyal audience on the YouTube platform." },
            { id: 6, title: "Content Engine", description: "Execute end-to-end content production workflows efficiently." }
        ],
        keyFeatures: ["Channel Audits", "Viral Blueprints", "Creator Hub"]
    },
    {
        id: "graphic-design-pro",
        slug: "graphic-design",
        programType: 'pro',
        title: "Graphic Design",
        category: "Creative & Design",
        description: "Master the visual language of business. Deep dive into Photoshop and Illustrator to create world-class brand IDs.",
        duration: "3 Months",
        thumbnail: cld("courses/drawing", 600),
        price: 20000,
        originalPrice: 30000,
        highlights: [
            "Adobe Master Tools",
            "Branding & Logo Science",
            "Social Media Design",
            "Print & Web Graphics",
            "Portfolio Showcase"
        ],
        modules: [
            { title: "Module 1: Design Fundamentals", topics: ["Color/Typography", "Grid systems", "Visual weight", "Psychology"] },
            { title: "Module 2: Adobe Photoshop", topics: ["Retouching", "Compositing", "Filters", "Web exports"] },
            { title: "Module 3: Adobe Illustrator", topics: ["Vector graphics", "Logo design", "Iconography", "Packaging"] },
            { title: "Module 4: Branding & Logo Design", topics: ["Mind mapping", "Visual ID", "Brand guides", "Mockups"] },
            { title: "Module 5: Social Media Creatives", topics: ["Ad layouts", "IG/FB trends", "Animation basics", "Carousel design"] },
            { title: "Module 6: Portfolio Building", topics: ["Behance/Dribbble", "Self-branding", "Final capstone", "Clients"] }
        ],
        jobRoles: ["Graphic Designer", "Branding Designer", "Social Media Designer"],
        outcomes: [
            { id: 1, title: "Design Principles", description: "Apply advanced visual theory to professional business problems." },
            { id: 2, title: "Adobe Expert", description: "Master Photoshop and Illustrator for high-end digital creation." },
            { id: 3, title: "Branding Lead", description: "Architect complete visual identities and brand style guides." },
            { id: 4, title: "Creative Flow", description: "Develop unique, clickable social media and marketing assets." },
            { id: 5, title: "Portfolio Ready", description: "Build a stunning industrial portfolio that wins top agency roles." },
            { id: 6, title: "Print Specialist", description: "Master layouts and technical specs for professional physical media." }
        ],
        keyFeatures: ["Adobe Licences", "Live Mentorship", "Design Briefs"]
    },
    {
        id: "video-editing-advanced-pro",
        slug: "video-editing-advanced",
        programType: 'pro',
        title: "Video Editing (Advanced)",
        category: "Creative & Design",
        description: "Master the silver screen edits. From professional Premiere Pro workflows to cinematic After Effects motion graphics.",
        duration: "3 Months",
        thumbnail: cld("courses/video-editing", 600),
        price: 25000,
        originalPrice: 35000,
        highlights: [
            "Premiere Pro Mastery",
            "Motion Graphics (AE)",
            "Cinematic Color Grading",
            "Professional Audio Mixing",
            "Industrial Portfolio"
        ],
        modules: [
            { title: "Module 1: Video Editing Fundamentals", topics: ["Storytelling/Pacing", "File management", "Codecs/Specs", "Hardware config"] },
            { title: "Module 2: Adobe Premiere Pro", topics: ["Dynamic cutting", "Multi-cam", "Proxy workflow", "Advanced effects"] },
            { title: "Module 3: After Effects Basics", topics: ["Keyframes", "Motion paths", "Visual FX", "Text animation"] },
            { title: "Module 4: Color Grading", topics: ["Lumetri tools", "LUTs", "Atmosphere/Tone", "Color correction"] },
            { title: "Module 5: Audio Editing", topics: ["Noise removal", "Sound design", "EQ/Compression", "Mixing"] },
            { title: "Module 6: Portfolio Projects", topics: ["Short film edit", "YouTube intro", "Commercial spot", "Final reel"] }
        ],
        jobRoles: ["Video Editor", "Motion Graphics Designer", "Content Editor"],
        outcomes: [
            { id: 1, title: "Video Editing", description: "Assemble high-engagement, cinematic narratives for any platform." },
            { id: 2, title: "Motion Graphics", description: "Design professional-grade intros and transitions in After Effects." },
            { id: 3, title: "Color Specialist", description: "Enhance visual atmosphere through industrial color grading." },
            { id: 4, title: "Audio Expert", description: "Deliver studio-quality sound mixes with professional depth." },
            { id: 5, title: "Industrial Pro", description: "Master high-speed editing workflows for agencies and brands." },
            { id: 6, title: "Reel Builder", description: "Launch a professional showreel that secures high-ticket work." }
        ],
        keyFeatures: ["Editing Bay", "Assets Library", "Project Files"]
    },
    {
        id: "data-science-pro",
        slug: "data-science",
        programType: 'pro',
        title: "Data Science",
        category: "Technology & Development",
        description: "Uncover insights from data. Master Python, statistical modeling, and machine learning to drive data-driven decision making.",
        duration: "4 Months",
        thumbnail: cld("courses/data-science", 600),
        price: 40000,
        originalPrice: 60000,
        highlights: [
            "Python for Data Science",
            "Advanced Visualization",
            "ML Model Deployment",
            "Statistical Analysis",
            "Case Study Portfolio"
        ],
        modules: [
            { title: "Module 1: Python Programming for Data", topics: ["NumPy & Pandas", "Data cleaning", "Functional programming"] },
            { title: "Module 2: Data Analysis & Visualization", topics: ["Matplotlib/Seaborn", "Exploratory Data Analysis", "Storytelling with Data"] },
            { title: "Module 3: Statistics & Probability", topics: ["Hypothesis testing", "Distributions", "Regressions"] },
            { title: "Module 4: Machine Learning Basics", topics: ["Supervised learning", "Unsupervised learning", "Model evaluation"] },
            { title: "Module 5: Data Projects & Case Studies", topics: ["Retail analysis", "Churn prediction", "Sentiment analysis"] },
            { title: "Module 6: Deployment & Reporting", topics: ["Streamlit apps", "Dashboarding", "Final presentation"] }
        ],
        jobRoles: ["Data Analyst", "Junior Data Scientist", "Business Intelligence Analyst"],
        outcomes: [
            { id: 1, title: "Data Analysis", description: "Transform raw data into meaningful business insights." },
            { id: 2, title: "Predictive Modeler", description: "Build and evaluate robust machine learning models." },
            { id: 3, title: "Python Expert", description: "Utilize Python's data stack for complex technical tasks." },
            { id: 4, title: "Visual Storyteller", description: "Communicate findings via interactive and static visualizations." },
            { id: 5, title: "Statistical Auditor", description: "Apply rigorous statistical methods to validate data results." },
            { id: 6, title: "Data Deployment", description: "Deploy basic data products and dashboards for stakeholders." }
        ],
        keyFeatures: ["Kaggle Projects", "Dataset Hubs", "ML Frameworks"]
    },
    {
        id: "digital-marketing-mastery",
        slug: "digital-marketing-techniques",
        programType: 'master',
        title: "Digital Marketing Techniques",
        category: "Digital Marketing & Online Business",
        description: "Master the full spectrum of online growth. From SEO and Google Ads to social media strategy and data-driven performance marketing.",
        duration: "6 Months",
        thumbnail: cld("courses/digital-marketing", 600),
        price: 45000,
        originalPrice: 65000,
        highlights: [
            "Full Spectrum SEO",
            "Google Ads (PPC) Mastery",
            "Social Media Strategy",
            "Performance Analytics",
            "Live Industrial Internship"
        ],
        modules: [
            { title: "Module 1: Digital Marketing Fundamentals", topics: ["Buyer personas", "Marketing funnels", "Brand positioning"] },
            { title: "Module 2: SEO & Website Optimization", topics: ["On-page/Off-page", "Technical SEO", "Backlink strategy"] },
            { title: "Module 3: Social Media Marketing", topics: ["Content calendars", "IG/FB Ads", "Community management"] },
            { title: "Module 4: Google Ads & PPC", topics: ["Search/Display ads", "Bidding strategies", "Remarketing"] },
            { title: "Module 5: Analytics & Performance Tracking", topics: ["GA4 mastery", "GTM basics", "ROI calculation"] },
            { title: "Module 6: Internship & Live Projects", topics: ["Client handling", "Campaign audit", "Final report"] }
        ],
        jobRoles: ["Digital Marketing Executive", "SEO Specialist", "Social Media Manager"],
        outcomes: [
            { id: 1, title: "SEO Strategist", description: "Rank websites on page one of search engines via technical SEO." },
            { id: 2, title: "Ad Campaigner", description: "Manage high-budget PPC campaigns with optimized ROI." },
            { id: 3, title: "Social Architect", description: "Build and scale brand presence across major social networks." },
            { id: 4, title: "Growth Analyst", description: "Use data analytics to refine marketing spend and performance." },
            { id: 5, title: "Content Planner", description: "Execute high-engagement content strategies for digital brands." },
            { id: 6, title: "Agency Ready", description: "Lead end-to-end digital projects for diverse global clients." }
        ],
        keyFeatures: ["Live Budget", "Agency Tools", "Real Projects"]
    },
    {
        id: "software-testing-specialist",
        slug: "software-testing-manual-and-basic-automation",
        programType: 'pro',
        title: "Software Testing (Manual + Basic Automation)",
        category: "Technology & Development",
        description: "Master the art of bug hunting. Learn rigorous manual testing and jumpstart your automation career with Selenium.",
        duration: "3 Months",
        thumbnail: cld("courses/software-testing", 600),
        price: 25000,
        originalPrice: 35000,
        highlights: [
            "SDLC/STLC Mastery",
            "Selenium Core Basics",
            "API Testing (Postman)",
            "Agile QA Workflows",
            "Bug Tracking Lab"
        ],
        modules: [
            { title: "Module 1: Testing Fundamentals", topics: ["Quality assurance", "Bug lifecycle", "Verification/Validation"] },
            { title: "Module 2: Manual Testing Techniques", topics: ["Black box/White box", "Regression testing", "Boundary value analysis"] },
            { title: "Module 3: Test Case Writing", topics: ["Scenarios to cases", "Negative testing", "Requirement mapping"] },
            { title: "Module 4: Selenium Basics", topics: ["Locators", "WebDriver config", "Simple script execution"] },
            { title: "Module 5: API Testing", topics: ["HTTP methods", "Postman flows", "Authentication testing"] },
            { title: "Module 6: Agile Testing Workflow", topics: ["Sprints/Standups", "Jira for QA", "Final testing project"] }
        ],
        jobRoles: ["QA Engineer", "Software Tester", "Automation Associate"],
        outcomes: [
            { id: 1, title: "QA Engineer", description: "Design and execute comprehensive test plans for web apps." },
            { id: 2, title: "Bug Hunter", description: "Identify and document complex software defects professionally." },
            { id: 3, title: "API Validator", description: "Perform rigorous quality checks on backend services/APIs." },
            { id: 4, title: "Agile Tester", description: "Integrate seamlessly into modern high-speed dev teams." },
            { id: 5, title: "Auto-Base", description: "Build and run basic browser-based automation scripts." },
            { id: 6, title: "Quality Audit", description: "Enforce high standards of software reliable and performance." }
        ],
        keyFeatures: ["Jira Lab", "Selenium Kits", "Project Testing"]
    },
    {
        id: "business-analytics-foundation",
        slug: "business-analytics",
        programType: 'foundation',
        title: "Business Analytics",
        category: "Data & Analytics",
        description: "Bridge the gap between business and technology. Master requirement gathering, SDLC, and professional documentation.",
        duration: "2 Months",
        thumbnail: cld("courses/business-analytics", 600),
        price: 20000,
        originalPrice: 30000,
        highlights: [
            "Requirement Gathering",
            "SDLC/Documentation",
            "UML Diagramming",
            "Agile Methodologies",
            "Business Case Lab"
        ],
        modules: [
            { title: "Module 1: Business Analysis Fundamentals", topics: ["Role of a BA", "Industry domains", "Communication skills"] },
            { title: "Module 2: Requirement Gathering", topics: ["Elicitation techniques", "BRD/FRD writing", "User stories"] },
            { title: "Module 3: SDLC & Documentation", topics: ["Waterfall vs Agile", "Requirement traceability", "Versioning"] },
            { title: "Module 4: UML & Case Studies", topics: ["Use cases", "Flowcharts", "Activity diagrams"] },
            { title: "Module 5: Agile & Testing Overview", topics: ["Backlog management", "UAT basics", "Sprint ceremonies"] },
            { title: "Module 6: Capstone Business Case", topics: ["Real-world solution design", "Final documentation package"] }
        ],
        jobRoles: ["Business Analyst", "Requirement Analyst", "Functional Consultant"],
        outcomes: [
            { id: 1, title: "Business Analyst", description: "Translate complex business needs into technical specifications." },
            { id: 2, title: "Requirement Pro", description: "Manage professional BRDs and functional requirement docs." },
            { id: 3, title: "UML Designer", description: "Visualize system processes via standardized UML diagrams." },
            { id: 4, title: "Agile Lead", description: "Facilitate smooth project flow in modern Scrum environments." },
            { id: 5, title: "Stakeholder Map", description: "Manage communication between clients and development teams." },
            { id: 6, title: "Solution Architect", description: "Design data-driven solutions for organizational challenges." }
        ],
        keyFeatures: ["BRD Templates", "Agile Sim", "Logic Mapping"]
    },
    {
        id: "stock-market-trading-base",
        slug: "stock-market-and-financial-trading",
        programType: 'foundation',
        title: "Stock Market & Financial Trading",
        category: "Finance & Banking",
        description: "Master the markets. Learn technical and fundamental analysis to trade equities with confidence and discipline.",
        duration: "2 Months",
        thumbnail: cld("courses/stock-market-financial-trading", 600),
        price: 15000,
        originalPrice: 22000,
        highlights: [
            "Technical Charting",
            "Fundamental Analysis",
            "Risk Management Rules",
            "Strategic Trading",
            "Live Market Sim"
        ],
        modules: [
            { title: "Module 1: Basics of Stock Market", topics: ["NSE/BSE intro", "Trading account setup", "Market terminologies"] },
            { title: "Module 2: Technical Analysis", topics: ["Price action", "Candlestick patterns", "Indicators (RSI/MACD)"] },
            { title: "Module 3: Fundamental Analysis", topics: ["Balance sheet", "P&L/Ratios", "Economic indicators"] },
            { title: "Module 4: Trading Strategies", topics: ["Intraday vs Delivery", "Swing trading", "Scalping basics"] },
            { title: "Module 5: Risk Management", topics: ["Stop loss", "Position sizing", "Trading psychology"] },
            { title: "Module 6: Live Trading Simulation", topics: ["Paper trading", "Order execution", "Performance audit"] }
        ],
        jobRoles: ["Equity Trader", "Financial Analyst", "Market Research Analyst"],
        outcomes: [
            { id: 1, title: "Equity Trader", description: "Execute profitable trades using technical price action strategies." },
            { id: 2, title: "Technical Analyst", description: "Identify market trends and entry/exit points via charts." },
            { id: 3, title: "Value Investor", description: "Perform fundamental audits to find undervalued companies." },
            { id: 4, title: "Risk Manager", description: "Protect capital through rigorous stop-loss and sizing rules." },
            { id: 5, title: "Market Mindset", description: "Master the emotional discipline required for consistent trading." },
            { id: 6, title: "Portfolio Lead", description: "Build and manage a diversified equity portfolio independently." }
        ],
        keyFeatures: ["Live Terminals", "Pattern Hub", "Psychology Kit"]
    },
    {
        id: "affiliate-marketing-base",
        slug: "affiliate-marketing",
        programType: 'foundation',
        title: "Affiliate Marketing",
        category: "Digital Marketing & Online Business",
        description: "Build a scalable online income empire. Master niche research, automated funnels, and high-ROI traffic generation.",
        duration: "2 Months",
        thumbnail: cld("courses/affiliate-marketing", 600),
        price: 10000,
        originalPrice: 15000,
        highlights: [
            "Profitable Niche Hunts",
            "Automated Funnel Labs",
            "High-ROI Traffic Ads",
            "Conversion Hacking",
            "Income Scaling Plans"
        ],
        modules: [
            { title: "Module 1: Affiliate Marketing Basics", topics: ["Affiliate networks", "Commission models", "Mindset for success"] },
            { title: "Module 2: Niche Research", topics: ["Keyword research", "Competitor analysis", "Market demand"] },
            { title: "Module 3: Website & Funnel Creation", topics: ["Landing pages", "Lead magnets", "Email automation"] },
            { title: "Module 4: Traffic Generation", topics: ["SEO for affiliate", "Paid ads basics", "Social media traffic"] },
            { title: "Module 5: Conversion Optimization", topics: ["Copywriting", "A/B testing", "Trust elements"] },
            { title: "Module 6: Scaling Strategies", topics: ["Outsourcing", "Proprietary offers", "Exit strategies"] }
        ],
        jobRoles: ["Affiliate Marketer", "Online Entrepreneur", "Digital Sales Specialist"],
        outcomes: [
            { id: 1, title: "Niche Strategist", description: "Identify high-profit, low-competition affiliate markets." },
            { id: 2, title: "Funnel Builder", description: "Design automated systems that generate sales on autopilot." },
            { id: 3, title: "Traffic Specialist", description: "Drive massive targeted visitors to offers via paid and organic." },
            { id: 4, title: "Copywriting Pro", description: "Write persuasive content that hooks and converts cold traffic." },
            { id: 5, title: "Campaign Auditor", description: "Optimize per-click costs for maximum net profitability." },
            { id: 6, title: "Income Architect", description: "Scale affiliate campaigns into a full-time online business." }
        ],
        keyFeatures: ["Niche Checklists", "Funnel Builder", "Ad Templates"]
    },
    {
        id: "tally-gst-specialist",
        slug: "tally-with-gst",
        programType: 'pro',
        title: "Tally with GST",
        category: "Finance & Banking",
        description: "Professional accounting mastery. Master Tally Prime, GST compliance, and industrial payroll management.",
        duration: "3 Months",
        thumbnail: cld("courses/tally-with-gst", 600),
        price: 12000,
        originalPrice: 18000,
        highlights: [
            "Tally Prime Mastery",
            "GST Returns Filing",
            "Inventory & Payroll",
            "Accounting Standards",
            "Practical Company Projects"
        ],
        modules: [
            { title: "Module 1: Accounting Fundamentals", topics: ["Golden rules", "Journal entries", "Trial balance"] },
            { title: "Module 2: Tally ERP Setup", topics: ["Company creation", "Ledger management", "Voucher entry"] },
            { title: "Module 3: GST Compliance", topics: ["CGST/SGST/IGST", "Invoice design", "Returns (GSTR1/3B)"] },
            { title: "Module 4: Inventory Management", topics: ["Stock groups", "Units of measure", "Godown management"] },
            { title: "Module 5: Payroll Management", topics: ["Employee masters", "Pay heads", "Salary processing"] },
            { title: "Module 6: Practical Accounting Projects", topics: ["Manufacturing account", "Service sector case", "Final audit"] }
        ],
        jobRoles: ["Accountant", "GST Executive", "Accounts Assistant"],
        outcomes: [
            { id: 1, title: "Acct Specialist", description: "Manage full-cycle accounting for diverse business sectors." },
            { id: 2, title: "Tally Expert", description: "Operate Tally Prime at a professional, high-speed level." },
            { id: 3, title: "GST Professional", description: "Handle complex GST computations and digital return filings." },
            { id: 4, title: "Inventory Lead", description: "Track and manage large-scale stock movements and audits." },
            { id: 5, title: "Payroll Admin", description: "Process employee salaries following latest tax and labor laws." },
            { id: 6, title: "Office Ready", description: "Execute professional bookkeeping that meets audit standards." }
        ],
        keyFeatures: ["Tally License", "GST Portals", "Real Ledgers"]
    },
    {
        id: "personality-dev-interview-base",
        slug: "personality-development-and-interview-skills",
        programType: 'foundation',
        title: "Personality Development & Interview Skills",
        category: "Foundational & Career Skills",
        description: "Unlock your professional potential. Master the art of communication, confidence, and elite interview performance.",
        duration: "2 Months",
        thumbnail: cld("courses/personality-development", 600),
        price: 8000,
        originalPrice: 12000,
        highlights: [
            "Confidence Engineering",
            "Resume Architecture",
            "Corporate Etiquette",
            "Public Speaking Lab",
            "Mock Interview Cycles"
        ],
        modules: [
            { title: "Module 1: Communication Skills", topics: ["Active listening", "Verbal clarity", "Feedback loops"] },
            { title: "Module 2: Body Language & Confidence", topics: ["Posture/Eye contact", "Vocal tonality", "Stage fear removal"] },
            { title: "Module 3: Resume Building", topics: ["ATS optimization", "Cover letters", "LinkedIn profiles"] },
            { title: "Module 4: Interview Preparation", topics: ["Common questions", "STAR method", "Technical prep basics"] },
            { title: "Module 5: Public Speaking", topics: ["Presentation design", "Audience engagement", "Speech delivery"] },
            { title: "Module 6: Mock Interviews", topics: ["HR simulation", "Video interview prep", "Final assessment"] }
        ],
        jobRoles: ["Corporate Professional", "Customer Service Executive", "Sales Representative"],
        outcomes: [
            { id: 1, title: "Communication", description: "Convey ideas with absolute professional clarity and impact." },
            { id: 2, title: "Confidence Lead", description: "Navigate high-pressure social and professional environments." },
            { id: 3, title: "Resume Architect", description: "Build high-conversion resumes that bypass automated filters." },
            { id: 4, title: "Interview Ready", description: "Master the psychology of winning top-tier job offers." },
            { id: 5, title: "Public Speaker", description: "Deliver compelling presentations to any size audience." },
            { id: 6, title: "Leadership Base", description: "Project the professional presence required for career growth." }
        ],
        keyFeatures: ["Mock Labs", "Resume Hub", "Etiquette Kit"]
    },
    {
        id: "english-for-banking-base",
        slug: "english-for-banking",
        programType: 'foundation',
        title: "English",
        category: "Foundational & Career Skills",
        description: "Communication excellence for the financial sector. Master banking terminology, professional email writing, and client interaction.",
        duration: "2 Months",
        thumbnail: cld("courses/english-for-banking", 600),
        price: 10000,
        originalPrice: 15000,
        highlights: [
            "Financial Vocabulary",
            "Business Email Mastery",
            "Client Pitching Skills",
            "Banking Case Practice",
            "Professional Etiquette"
        ],
        modules: [
            { title: "Module 1: Banking Vocabulary", topics: ["Financial terms", "Product definitions", "Operational jargon"] },
            { title: "Module 2: Business Communication", topics: ["Formal vs Informal", "Clarity in speech", "Active listening"] },
            { title: "Module 3: Email Writing", topics: ["Subject lines", "Tone management", "Reporting formats"] },
            { title: "Module 4: Presentation Skills", topics: ["Data walkthroughs", "Engaging stakeholders", "Visual aids"] },
            { title: "Module 5: Spoken English Practice", topics: ["Telephone etiquette", "Counter interaction", "Conflict resolution"] },
            { title: "Module 6: Banking Case Scenarios", topics: ["Loan discussions", "Complaint handling", "Final roleplay"] }
        ],
        jobRoles: ["Banking Executive", "Relationship Officer", "Customer Service Associate"],
        outcomes: [
            { id: 1, title: "Fin-Comm Pro", description: "Communicate complex financial concepts with absolute professional clarity." },
            { id: 2, title: "Email Expert", description: "Draft high-impact business emails that drive professional results." },
            { id: 3, title: "Client Lead", description: "Manage high-stakes client interactions with confidence and poise." },
            { id: 4, title: "English Fluency", description: "Achieve native-level fluency in banking and corporate environments." },
            { id: 5, title: "Presentation", description: "Deliver compelling financial presentations to diverse stakeholders." },
            { id: 6, title: "Career Growth", description: "Unlock promotion opportunities through superior communication skills." }
        ],
        keyFeatures: ["Email Bank", "Roleplay Labs", "Term Glossaries"]
    },
    {
        id: "comprehensive-banking-pro",
        slug: "comprehensive-banking-course",
        programType: 'pro',
        title: "Comprehensive Banking Course",
        category: "Finance & Banking",
        description: "The complete roadmap to a banking career. Master core operations, financial products, and risk compliance.",
        duration: "3 Months",
        thumbnail: cld("courses/complete-banking-course", 600),
        price: 25000,
        originalPrice: 35000,
        highlights: [
            "Core Banking Ops",
            "Financial Products",
            "Risk & Compliance",
            "Loan Processing Lab",
            "Internship Preparation"
        ],
        modules: [
            { title: "Module 1: Banking Fundamentals", topics: ["History of banking", "Structure of banks", "RBI regulations"] },
            { title: "Module 2: Financial Products", topics: ["CASA/FDR", "Insurance/Mutual Funds", "Credit/Debit cards"] },
            { title: "Module 3: Risk & Compliance", topics: ["KYC/AML rules", "Operational risk", "Audit basics"] },
            { title: "Module 4: Customer Relationship Management", topics: ["Cross-selling", "Retention strategy", "Digital banking"] },
            { title: "Module 5: Loan Processing", topics: ["Retail vs Corporate", "Credit appraisal", "Disbursement cycle"] },
            { title: "Module 6: Banking Internship Prep", topics: ["Mock bank setup", "Software training", "Final assessment"] }
        ],
        jobRoles: ["Banking Officer", "Loan Processing Executive", "Relationship Manager"],
        outcomes: [
            { id: 1, title: "Banking Pro", description: "Master end-to-end operations of modern retail and corporate banks." },
            { id: 2, title: "Loan Specialist", description: "Execute professional credit appraisals and loan processing cycles." },
            { id: 3, title: "Compliance Lead", description: "Ensure strict adherence to KYC, AML, and banking regulations." },
            { id: 4, title: "Product Expert", description: "Drive revenue through deep knowledge of diverse financial products." },
            { id: 5, title: "CRM Master", description: "Build and maintain profitable, long-term customer relationships." },
            { id: 6, title: "Industrial Ready", description: "Seamlessly transition into high-growth roles in the banking sector." }
        ],
        keyFeatures: ["Mock Bank", "Finacle Basics", "Case Studies"]
    },
    {
        id: "ar-vr-development-mastery",
        slug: "ar-and-vr-development",
        programType: 'master',
        title: "AR & VR Development",
        category: "Technology & Development",
        description: "Build the future of reality. Master 3D modeling, Unity, and Unreal Engine to create immersive VR and AR experiences.",
        duration: "6 Months",
        thumbnail: cld("courses/ar-vr-development", 600),
        price: 50000,
        originalPrice: 75000,
        highlights: [
            "Unity & Unreal Engine",
            "3D Modeling (Blender)",
            "AR Core/Kit Apps",
            "VR Interaction Design",
            "Immersive Portfolio"
        ],
        modules: [
            { title: "Module 1: AR/VR Fundamentals", topics: ["Spatial computing", "Hardware specs", "UX for XR"] },
            { title: "Module 2: 3D Modeling Basics", topics: ["Blender workflow", "Low-poly design", "Texturing"] },
            { title: "Module 3: Unity Development", topics: ["C# for XR", "Physics in VR", "Prefab systems"] },
            { title: "Module 4: Unreal Engine Basics", topics: ["Blueprints", "Nanite/Lumen", "VR template"] },
            { title: "Module 5: AR App Development", topics: ["Markerless AR", "Face tracking", "Instantiating objects"] },
            { title: "Module 6: VR Experience Design", topics: ["Locomotion", "Hand tracking", "Final VR project"] }
        ],
        jobRoles: ["AR Developer", "VR Developer", "Unity Developer"],
        outcomes: [
            { id: 1, title: "XR Developer", description: "Build and deploy scalable AR/VR apps for mobile and headsets." },
            { id: 2, title: "Unity Master", description: "Professional-grade proficiency in engine-based immersive dev." },
            { id: 3, title: "3D Modeler", description: "Design optimized 3D assets for real-time XR environments." },
            { id: 4, title: "UX Architect", description: "Design intuitive interactions for 3-dimensional digital spaces." },
            { id: 5, title: "AR Creator", description: "Deploy high-impact AR filters and business applications." },
            { id: 6, title: "Innovation Lead", description: "Drive R&D in emerging spatial computing technologies." }
        ],
        keyFeatures: ["VR Headsets", "Blender Labs", "Unity Projects"]
    },
    {
        id: "ai-cyber-safety-pro",
        slug: "ai-for-cyber-safety-and-digital-investigation",
        programType: 'pro',
        title: "AI for Cyber Safety & Digital Investigation",
        category: "AI & Automation",
        description: "Shield the digital world. Combine cyber security fundamentals with AI-driven threat analysis and digital forensics.",
        duration: "4 Months",
        thumbnail: cld("courses/ai-cyber-safety", 600),
        price: 35000,
        originalPrice: 50000,
        highlights: [
            "AI-Driven Defense",
            "Digital Forensics",
            "Threat Analysis Lab",
            "Ethical Hacking Core",
            "Security Capstone"
        ],
        modules: [
            { title: "Module 1: Cyber Security Fundamentals", topics: ["Network security", "Cryptography", "OS hardening"] },
            { title: "Module 2: Digital Forensics", topics: ["Evidence recovery", "Chain of custody", "Investigation tools"] },
            { title: "Module 3: AI in Cyber Defense", topics: ["Anomaly detection", "Automated patching", "AI firewalls"] },
            { title: "Module 4: Threat Analysis", topics: ["Malware analysis", "Phishing detection", "Risk scoring"] },
            { title: "Module 5: Ethical Hacking Basics", topics: ["Pentesting intro", "OWASP Top 10", "Scanning/Recon"] },
            { title: "Module 6: Capstone Security Project", topics: ["Live breach simulation", "AI defense build", "Final report"] }
        ],
        jobRoles: ["Cyber Security Analyst", "Digital Forensics Investigator", "Security Consultant"],
        outcomes: [
            { id: 1, title: "Security Pro", description: "Protect organizational networks from sophisticated cyber attacks." },
            { id: 2, title: "AI Guardian", description: "Deploy machine learning models to detect threats in real-time." },
            { id: 3, title: "Investigator", description: "Perform professional digital forensic audits and recovery." },
            { id: 4, title: "Risk Analyst", description: "Score and mitigate security risks across enterprise systems." },
            { id: 5, title: "Ethics Lead", description: "Navigate the complex ethical landscape of cyber defense." },
            { id: 6, title: "Consultant", description: "Architect secure infrastructures for global business clients." }
        ],
        keyFeatures: ["Breach Sims", "Forensic Tools", "Security Labs"]
    },
    {
        id: "content-creation-foundation",
        slug: "content-creation-mastery",
        programType: 'foundation',
        title: "Content Creation Mastery",
        category: "Digital Marketing & Online Business",
        description: "Become a modern storyteller. Master the strategies, scripts, and editing secrets of top-tier professional creators.",
        duration: "2 Months",
        thumbnail: cld("courses/content-creation", 600),
        price: 12000,
        originalPrice: 18000,
        highlights: [
            "Content Strategy Lab",
            "Viral Script Writing",
            "Multi-Platform Brand",
            "Monetization Secrets",
            "Portfolio Growth"
        ],
        modules: [
            { title: "Module 1: Content Strategy", topics: ["Niche selection", "Brand pillars", "Viewer psychology"] },
            { title: "Module 2: Script Writing", topics: ["Hook/Body/CTA", "Storytelling arcs", "SEO scripting"] },
            { title: "Module 3: Editing & Branding", topics: ["Visual style", "Tone consistency", "Asset creation"] },
            { title: "Module 4: Platform Algorithms", topics: ["IG vs YT vs TT", "Retention signals", "Distribution"] },
            { title: "Module 5: Monetization & Growth", topics: ["Sponsors", "Digital products", "Community building"] },
            { title: "Module 6: Capstone Project", topics: ["Full channel audit", "Viral video plan", "Final pitch"] }
        ],
        jobRoles: ["Content Creator", "Social Media Strategist", "Brand Consultant"],
        outcomes: [
            { id: 1, title: "Content Leader", description: "Architect and execute multi-platform content ecosystems." },
            { id: 2, title: "Storyteller", description: "Write scripts that hook attention and drive viral retention." },
            { id: 3, title: "Branding Pro", description: "Build a unique, recognizable professional brand identity." },
            { id: 4, title: "Growth Engine", description: "Scale audience following through data-driven algorithm tactics." },
            { id: 5, title: "Product Lead", description: "Launch and monetize unique digital products and services." },
            { id: 6, title: "Consultant", description: "Design winning content strategies for personal and corporate brands." }
        ],
        keyFeatures: ["Viral Hub", "Script Audits", "Growth Kits"]
    },
    {
        id: "mobile-photography-base",
        slug: "mobile-photography",
        programType: 'foundation',
        title: "Mobile Photography",
        category: "Creative & Design",
        description: "Professional shots from your pocket. Master the art of composition, lighting, and cinematic mobile editing.",
        duration: "1 Month",
        thumbnail: cld("courses/mobile-photography", 600),
        price: 5000,
        originalPrice: 8000,
        highlights: [
            "Pro Camera Apps",
            "Composition Science",
            "Mobile Lighting",
            "Lightroom Mobile",
            "Social Media Ready"
        ],
        modules: [
            { title: "Module 1: Smartphone Camera Basics", topics: ["Sensor limits", "Exposure/Focus", "Third-party apps"] },
            { title: "Module 2: Composition & Framing", topics: ["Rule of thirds", "Leading lines", "Perspective"] },
            { title: "Module 3: Lighting Techniques", topics: ["Natural light", "DIY modifiers", "Portrait lighting"] },
            { title: "Module 4: Editing Apps", topics: ["Lightroom mobile", "Snapseed", "Retouching"] },
            { title: "Module 5: Social Media Optimization", topics: ["Grid aesthetics", "Story formats", "Metadata/SEO"] },
            { title: "Module 6: Portfolio Creation", topics: ["Project choice", "Digital showcase", "Final critique"] }
        ],
        jobRoles: ["Mobile Photographer", "Content Creator", "Social Media Manager"],
        outcomes: [
            { id: 1, title: "Photographer", description: "Capture professional-grade images using only a smartphone." },
            { id: 2, title: "Editor", description: "Master industrial-standard mobile post-production workflows." },
            { id: 3, title: "Visual Artist", description: "Cultivate a unique, recognizable photographic style." },
            { id: 4, title: "Social Pro", description: "Drive high engagement via stunning professional visual content." },
            { id: 5, title: "Event Specialist", description: "Document events with high-speed, high-quality mobile output." },
            { id: 6, title: "Branding Lead", description: "Manage brand visual IDs through mobile photography assets." }
        ],
        keyFeatures: ["Editing Lab", "App Sandbox", "Field Tasks"]
    },
    {
        id: "drawing-sketching-base",
        slug: "drawing-and-sketching",
        programType: 'foundation',
        title: "Drawing & Sketching",
        category: "Creative & Design",
        description: "Master the foundation of all visual art. From basic lines and shading to complex perspective and character design.",
        duration: "2 Months",
        thumbnail: cld("courses/drawing-sketching", 600),
        price: 8000,
        originalPrice: 12000,
        highlights: [
            "Pencil Control",
            "Anatomy & Figure",
            "Perspective Science",
            "Texture & Shading",
            "Portfolio Gallery"
        ],
        modules: [
            { title: "Module 1: Sketching Fundamentals", topics: ["Lines/Circles", "Gesture drawing", "Grid method"] },
            { title: "Module 2: Perspective Drawing", topics: ["1/2/3 point", "Horizon lines", "Vanishing points"] },
            { title: "Module 3: Shading Techniques", topics: ["Cross hatching", "Blending", "Light/Shadow logic"] },
            { title: "Module 4: Character Design", topics: ["Proportions", "Expressions", "Thumbnailing"] },
            { title: "Module 5: Illustration Basics", topics: ["Storyboarding", "Composition", "Contrast"] },
            { title: "Module 6: Portfolio Development", topics: ["Curation", "Presentation", "Final capstone"] }
        ],
        jobRoles: ["Illustrator", "Sketch Artist", "Concept Designer"],
        outcomes: [
            { id: 1, title: "Artist", description: "Execute high-fidelity sketches with perfect form and perspective." },
            { id: 2, title: "Concept Lead", description: "Visualize and design unique characters and environments." },
            { id: 3, title: "Illustrator", description: "Produce professional-grade illustrations for books and digital media." },
            { id: 4, title: "Anatomy Pro", description: "Master human and animal figure drawing from any angle." },
            { id: 5, title: "Visual Thinker", description: "Communicate complex ideas quickly through professional sketching." },
            { id: 6, title: "Portfolio Ready", description: "Build a stunning traditional art portfolio for top design colleges." }
        ],
        keyFeatures: ["Art Studio", "Live Demos", "Feedback Cycles"]
    },
    {
        id: "jewellery-design-foundation",
        slug: "jewellery-design",
        programType: 'foundation',
        title: "Jewellery Design",
        category: "Creative & Design",
        description: "Master the art of adornment. From hand-sketching gemstones to professional CAD design and manufacturing techniques.",
        duration: "2 Months",
        thumbnail: cld("courses/jewellery-design", 600),
        price: 20000,
        originalPrice: 30000,
        highlights: [
            "Gemstone Rendering",
            "Jewelry Sketching",
            "CAD for Jewelry",
            "Production Ethics",
            "Industrial Portfolio"
        ],
        modules: [
            { title: "Module 1: Design Fundamentals", topics: ["History of jewelry", "Metal types", "Market trends"] },
            { title: "Module 2: Gemstone Knowledge", topics: ["4Cs of diamonds", "Coloured stones", "Setting types"] },
            { title: "Module 3: Jewelry Sketching", topics: ["Orthographic views", "Technical drawing", "Shading metals"] },
            { title: "Module 4: CAD Basics", topics: ["Rhino/Matrix intro", "3D ring design", "Rendering"] },
            { title: "Module 5: Production Techniques", topics: ["Casting process", "Polishing/Finishing", "Quality control"] },
            { title: "Module 6: Portfolio Development", topics: ["Curation", "Brand identity", "Final collection"] }
        ],
        jobRoles: ["Jewelry Designer", "CAD Designer", "Artisan Designer"],
        outcomes: [
            { id: 1, title: "Jewelry Artist", description: "Design complex, high-end jewelry pieces with technical precision." },
            { id: 2, title: "CAD Expert", description: "Utilize 3D modeling tools to create production-ready jewelry files." },
            { id: 3, title: "Gemologist Base", description: "Identify and grade gemstones for professional design use." },
            { id: 4, title: "Production Lead", description: "Manage the end-to-end manufacturing cycle of jewelry pieces." },
            { id: 5, title: "Brand Architect", description: "Launch and market a unique professional jewelry collection." },
            { id: 6, title: "Industrial Pro", description: "Work with top global jewelry houses and design studios." }
        ],
        keyFeatures: ["CAD Access", "Gem Kits", "Studio Hours"]
    },
    {
        id: "podcast-mastery-base",
        slug: "podcast-mastery",
        programType: 'foundation',
        title: "Podcast Mastery",
        category: "Media & Production",
        description: "Voice your vision. Master the planning, recording, and growth strategies to launch a top-ranking global podcast.",
        duration: "2 Months",
        thumbnail: cld("courses/podcasting-mastery", 600),
        price: 10000,
        originalPrice: 15000,
        highlights: [
            "Podcast Architecture",
            "Pro Audio Setup",
            "Interview Psychology",
            "Platform Distribution",
            "Monetization Plans"
        ],
        modules: [
            { title: "Module 1: Podcast Planning", topics: ["Niche/Format", "Avatar research", "Naming/Branding"] },
            { title: "Module 2: Audio Recording Setup", topics: ["Mic selection", "Acoustics", "Remote recording"] },
            { title: "Module 3: Editing & Mixing", topics: ["Audacity/Adobe Audition", "Leveling", "Intro/Outro"] },
            { title: "Module 4: Publishing Platforms", topics: ["Spotify/Apple setup", "Hosting providers", "RSS feeds"] },
            { title: "Module 5: Branding & Growth", topics: ["SEO for podcast", "Social cross-promo", "Listener loops"] },
            { title: "Module 6: Monetization", topics: ["Sponsors", "Memberships", "Brand integration"] }
        ],
        jobRoles: ["Podcast Host", "Audio Producer", "Content Creator"],
        outcomes: [
            { id: 1, title: "Podcast Host", description: "Master professional on-air hosting and interview techniques." },
            { id: 2, title: "Audio Engineer", description: "Produce studio-quality audio with professional depth and clarity." },
            { id: 3, title: "Content Strategist", description: "Design a long-term content engine that builds a loyal audience." },
            { id: 4, title: "Distribution Lead", description: "Navigate global podcast directories for maximum reach." },
            { id: 5, title: "Growth Manager", description: "Utilize data and social tactics to scale podcast subscribers." },
            { id: 6, title: "Monetization Pro", description: "Scale your voice into a sustainable business and brand." }
        ],
        keyFeatures: ["Voice Labs", "Distribution", "Ad Blueprints"]
    },
    {
        id: "basic-computer-pro",
        slug: "basic-computer-skills",
        programType: 'pro',
        title: "Basic Computer Skills",
        category: "Foundational & Career Skills",
        description: "The essential digital toolkit. Master MS Office, internet security, and professional office workflows.",
        duration: "3 Months",
        thumbnail: cld("courses/basic-computer", 600),
        price: 5000,
        originalPrice: 8000,
        highlights: [
            "MS Office Mastery",
            "Digital Security",
            "Fast Typing Skills",
            "Email & Cloud Tools",
            "Office Workflow Sim"
        ],
        modules: [
            { title: "Module 1: Computer Fundamentals", topics: ["Hardware/OS", "File management", "Security basics"] },
            { title: "Module 2: MS Word & Formatting", topics: ["Doc design", "Mail merge", "Review tools"] },
            { title: "Module 3: MS Excel Basics", topics: ["Sheets/Rows/Cols", "Basic formulas", "Data entry"] },
            { title: "Module 4: MS PowerPoint", topics: ["Slide design", "Transitions", "Pitch decks"] },
            { title: "Module 5: Internet & Email Usage", topics: ["Search hacks", "Outlook/Gmail", "Cloud storage"] },
            { title: "Module 6: Practical Office Tasks", topics: ["Billing/Invoicing", "Scheduling", "Final office sim"] }
        ],
        jobRoles: ["Office Executive", "Data Entry Operator", "Computer Operator"],
        outcomes: [
            { id: 1, title: "Office Pro", description: "Operate modern computer systems with absolute speed and efficiency." },
            { id: 2, title: "Doc Specialist", description: "Create professional business documents and correspondence." },
            { id: 3, title: "Data Operator", description: "Execute high-speed data entry and management tasks." },
            { id: 4, title: "Presenter", description: "Design and deliver clear, professional business presentations." },
            { id: 5, title: "Internet Lead", description: "Safely navigate and utilize global digital resources for work." },
            { id: 6, title: "Career Ready", description: "Master the foundational tech required for any corporate role." }
        ],
        keyFeatures: ["Typing Lab", "Office Suite", "Cloud Access"]
    },
    {
        id: "microsoft-excel-foundation",
        slug: "proficiency-in-microsoft-excel",
        programType: 'foundation',
        title: "Proficiency in Microsoft Excel",
        category: "Foundational & Career Skills",
        description: "Master the language of data. From complex formulas and pivot tables to professional business dashboards.",
        duration: "2 Months",
        thumbnail: cld("courses/microsoft-excel", 600),
        price: 8000,
        originalPrice: 12000,
        highlights: [
            "Advanced Formulas",
            "Pivot Table Logic",
            "Dynamic Dashboards",
            "Data Visualization",
            "Business Templates"
        ],
        modules: [
            { title: "Module 1: Excel Interface & Formulas", topics: ["Shortcuts", "VLOOKUP/HLOOKUP", "Logic IFs"] },
            { title: "Module 2: Data Cleaning & Formatting", topics: ["Text to columns", "Conditional formatting", "Validation"] },
            { title: "Module 3: Pivot Tables", topics: ["Grouping", "Slicers", "Calculated fields"] },
            { title: "Module 4: Charts & Dashboards", topics: ["Dynamic charts", "Slicer connections", "UI for data"] },
            { title: "Module 5: Advanced Functions", topics: ["Array formulas", "INDEX-MATCH", "Error handling"] },
            { title: "Module 6: Real Business Reports", topics: ["Sales dashboard", "Inventory tracker", "Final audit"] }
        ],
        jobRoles: ["MIS Executive", "Data Analyst (Excel)", "Reporting Executive"],
        outcomes: [
            { id: 1, title: "Excel Master", description: "Process massive datasets with extreme speed and surgical precision." },
            { id: 2, title: "MIS Expert", description: "Build automated reporting systems for corporate stakeholders." },
            { id: 3, title: "Data Analyst", description: "Synthesize raw numbers into actionable business insights." },
            { id: 4, title: "Dashboarder", description: "Design visual, interactive spreadsheets that wow clients." },
            { id: 5, title: "Logic Builder", description: "Engineer complex conditional logic to solve business problems." },
            { id: 6, title: "Speed Lead", description: "Master the shortcuts that triple your spreadsheet productivity." }
        ],
        keyFeatures: ["Cheat Sheets", "Data Samples", "Live Audits"]
    },
    {
        id: "ecommerce-dropshipping-base",
        slug: "e-commerce-and-dropshipping",
        programType: 'foundation',
        title: "E-Commerce",
        category: "Digital Marketing & Online Business",
        description: "Launch your global storefront. Master the end-to-end e-commerce model, from product research to automated scaling.",
        duration: "2 Months",
        thumbnail: cld("courses/e-commerce-dropshipping", 600),
        price: 15000,
        originalPrice: 22000,
        highlights: [
            "E-Com Model Lab",
            "Winning Product Research",
            "Payment / Logistics",
            "Digital Ad Engines",
            "Scaling Frameworks"
        ],
        modules: [
            { title: "Module 1: E-Commerce Business Model", topics: ["Fulfillment types", "Budgeting", "Legal/Tax"] },
            { title: "Module 2: Product Research", topics: ["Tool usage", "Competitor spy", "Margins"] },
            { title: "Module 3: Store Setup", topics: ["Shopify/WooCommerce", "Cart optimization", "Trust factors"] },
            { title: "Module 4: Payment & Logistics", topics: ["Gateways", "Shipping setup", "Returns management"] },
            { title: "Module 5: Marketing & Ads", topics: ["TikTok/Facebook", "Influencers", "Email retargeting"] },
            { title: "Module 6: Scaling Strategies", topics: ["Agent sourcing", "Private labeling", "Automation"] }
        ],
        jobRoles: ["E-Commerce Entrepreneur", "Online Store Manager", "Dropshipping Specialist"],
        outcomes: [
            { id: 1, title: "E-Com Owner", description: "Launch and manage a fully-functional global online store." },
            { id: 2, title: "Ad Specialist", description: "Drive high-conversion traffic via social media ad engines." },
            { id: 3, title: "Logistics Pro", description: "Manage global shipping and supply chains with high reliability." },
            { id: 4, title: "Conversion Expert", description: "Optimize storefronts for maximum visitor-to-sale ratios." },
            { id: 5, title: "Scaling Lead", description: "Multiply revenue through proven automation and growth tactics." },
            { id: 6, title: "Market Scout", description: "Pinpoint trending products before they hit the massive mainstream." }
        ],
        keyFeatures: ["Store Audits", "Ad Templates", "Supplier Kits"]
    },
    {
        id: "video-editing-basic-base",
        slug: "video-editing-short-term-basic",
        programType: 'foundation',
        title: "Video Editing (Short-Term Basic)",
        category: "Media & Production",
        description: "The fast track to video editing. Master the fundamentals of cutting, audio sync, and professional exports in record time.",
        duration: "1 Month",
        thumbnail: cld("courses/video-editing", 600),
        price: 8000,
        originalPrice: 12000,
        highlights: [
            "Timeline Mastery",
            "Audio Sync Basics",
            "Visual FX Core",
            "Speed Workflows",
            "Mini Portfolio"
        ],
        modules: [
            { title: "Module 1: Editing Fundamentals", topics: ["Interface/Tools", "Importing", "Organizing"] },
            { title: "Module 2: Timeline & Cuts", topics: ["Rough cut", "Pacing", "Transitions"] },
            { title: "Module 3: Basic Effects", topics: ["Color fix", "Text/Titles", "Stability"] },
            { title: "Module 4: Audio Syncing", topics: ["Music/Voice", "Sound effects", "Balance"] },
            { title: "Module 5: Exporting Videos", topics: ["Social presets", "Resolution", "Bitrates"] },
            { title: "Module 6: Practical Mini Projects", topics: ["Vlog edit", "Short promo", "Final assess"] }
        ],
        jobRoles: ["Junior Video Editor", "Content Assistant", "Video Content Creator"],
        outcomes: [
            { id: 1, title: "Video Editor", description: "Assemble clean, professional videos with perfect pacing." },
            { id: 2, title: "Timeline Lead", description: "Manage complex video projects with surgical organization." },
            { id: 3, title: "Audio Mixer", description: "Sync and balance sound for high-impact viewing experiences." },
            { id: 4, title: "Export Specialist", description: "Deliver pixel-perfect videos optimized for any social platform." },
            { id: 5, title: "Content Pro", description: "Produce high-volume video content with professional consistency." },
            { id: 6, title: "Quick Editor", description: "Master the hotkeys that triple your basic editing speed." }
        ],
        keyFeatures: ["Ready Assets", "Hotkey Sheets", "Asset Library"]
    },
];

function hashSig(str: string): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % 1000;
}

function getStockImage(program: Program): string {
    const t = (program.title || "").toLowerCase();
    const s = (program.slug || program.id || "").toLowerCase();
    const c = (program.category || "").toLowerCase();
    const lvl = program.programType;
    const sig = hashSig(s + lvl);
    const base = "https://source.unsplash.com/featured/800x450";
    if (s.includes("mern") || t.includes("full stack") || t.includes("web")) return `${base}?coding,programming,laptop&sig=${sig}`;
    if (s.includes("ui") || s.includes("ux") || t.includes("ui") || t.includes("ux")) return `${base}?ui,wireframe,design&sig=${sig}`;
    if (s.includes("wordpress")) return `${base}?wordpress,website,cms&sig=${sig}`;
    if (s.includes("java")) return `${base}?java,code,backend&sig=${sig}`;
    if (s.includes("oracle")) return `${base}?database,server,oracle&sig=${sig}`;
    if (s.includes("n8n") || t.includes("automation")) return `${base}?automation,workflow,robotics&sig=${sig}`;
    if (s.includes("prompt")) return `${base}?ai,prompt,neural&sig=${sig}`;
    if (s.includes("youtube") && t.includes("script")) return `${base}?writing,creator,youtube&sig=${sig}`;
    if (s.includes("photography") || t.includes("photography")) return `${base}?camera,photography,studio&sig=${sig}`;
    if (s.includes("game") || s.includes("app")) return `${base}?game,unity,code&sig=${sig}`;
    if (s.includes("ai-tools") || c.includes("ai & automation")) return `${base}?ai,automation,office&sig=${sig}`;
    if (s.includes("dropshipping") || s.includes("e-commerce")) return `${base}?ecommerce,shop,store&sig=${sig}`;
    if (s === "drone-pilot-training" && lvl === "foundation") return `${base}?drone,flight,training&sig=${sig}`;
    if (s === "drone-pilot-training" && lvl === "pro") return `${base}?drone,aerial,cinematography&sig=${sig}`;
    if (s.includes("youtube-video-creation")) return `${base}?youtube,editing,studio&sig=${sig}`;
    if (s.includes("graphic-design") || t.includes("graphic")) return `${base}?design,adobe,workspace&sig=${sig}`;
    if (s.includes("video-editing-advanced") || (t.includes("video editing") && lvl === "pro")) return `${base}?video,editing,timeline&sig=${sig}`;
    if (s.includes("video-editing-short-term") || (t.includes("video editing") && lvl === "foundation")) return `${base}?video,editing,beginner&sig=${sig}`;
    if (s.includes("data-science") || t.includes("data")) return `${base}?data,analytics,dashboard&sig=${sig}`;
    if (s.includes("digital-marketing") || c.includes("digital marketing")) return `${base}?marketing,analytics,seoj&sig=${sig}`;
    if (s.includes("software-testing")) return `${base}?testing,qa,automation&sig=${sig}`;
    if (s.includes("business-analytics")) return `${base}?business,analytics,charts&sig=${sig}`;
    if (s.includes("stock-market")) return `${base}?stock,market,trading&sig=${sig}`;
    if (s.includes("affiliate-marketing")) return `${base}?affiliate,marketing,ads&sig=${sig}`;
    if (s.includes("tally")) return `${base}?accounting,finance,ledger&sig=${sig}`;
    if (s.includes("personality") || t.includes("interview")) return `${base}?interview,professional,career&sig=${sig}`;
    if (s.includes("english")) return `${base}?english,book,learning&sig=${sig}`;
    if (s.includes("comprehensive-banking") || s.includes("complete-banking")) return `${base}?banking,finance,branch&sig=${sig}`;
    if (s.includes("ar-vr")) return `${base}?vr,ar,headset&sig=${sig}`;
    if (s.includes("cyber") || t.includes("cyber")) return `${base}?cybersecurity,code,hacker&sig=${sig}`;
    if (s.includes("content-creation")) return `${base}?content,creator,studio&sig=${sig}`;
    if (s.includes("instagram")) return `${base}?instagram,reels,phone&sig=${sig}`;
    if (s.includes("mobile-photography")) return `${base}?mobile,photography,phone&sig=${sig}`;
    if (s.includes("drawing") || s.includes("sketching")) return `${base}?drawing,sketch,art&sig=${sig}`;
    if (s.includes("basic-computer")) return `${base}?computer,office,workspace&sig=${sig}`;
    if (s.includes("microsoft-excel") || s.includes("excel")) return `${base}?excel,spreadsheet,charts&sig=${sig}`;
    if (s.includes("career-launch")) return `${base}?career,launch,mentor&sig=${sig}`;
    if (s.includes("podcast")) return `${base}?podcast,microphone,studio&sig=${sig}`;
    if (s.includes("jewellery-designing")) return `${base}?jewellery,design,cad&sig=${sig}`;
    if (s.includes("jewellery-design")) return `${base}?jewelry,artisan,workbench&sig=${sig}`;
    return `${base}?coding,workspace&sig=${sig}`;
}

const CURATED_IMAGES: Record<string, string> = {
    "mern-stack-mastery": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "ui-and-ux-designing": "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    "wordpress-development": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "java-programming": "https://images.unsplash.com/photo-1488590528505-98f1a5e5f4cd?auto=format&fit=crop&w=1200&q=80",
    "oracle-certified-professional": "https://logo.clearbit.com/oracle.com",
    "n8n-smart-automation": "https://logo.clearbit.com/n8n.io",
    "prompt-engineering": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    "youtube-script-writing": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "photography-skills": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    "code-to-play-game-and-app-development": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "ai-tools-for-office-and-business": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80&v=office",
    "smart-dropshipping-mastery": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "drone-pilot-training": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    "youtube-video-creation": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80&v=yt",
    "graphic-design": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80&v=gd",
    "video-editing-advanced": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80&v=ve-adv",
    "data-science": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80&v=ds",
    "digital-marketing-techniques": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "software-testing-manual-and-basic-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80&v=qa",
    "business-analytics": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    "stock-market-and-financial-trading": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    "affiliate-marketing": "/logos/amazon.svg?v=aff",
    "tally-with-gst": "https://images.unsplash.com/photo-1554224155-8d1d963aa417?auto=format&fit=crop&w=1200&q=80",
    "personality-development-and-interview-skills": "https://images.unsplash.com/photo-1527198511255-7cbd6f0f2bb0?auto=format&fit=crop&w=1200&q=80",
    "english-for-banking": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    "comprehensive-banking-course": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
    "ar-and-vr-development": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    "ai-for-cyber-safety-and-digital-investigation": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    "content-creation-mastery": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80&v=content",
    "instagram-reel-creation": "/logos/meta.svg?v=insta",
    "mobile-photography": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&v=mobile",
    "drawing-and-sketching": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80&v=sketch",
    "basic-computer-skills": "/logos/microsoft.svg?v=basic",
    "proficiency-in-microsoft-excel": "/logos/microsoft.svg?v=excel",
    "e-commerce-and-dropshipping": "/logos/shopify.svg?v=commerce",
    "video-editing-short-term-basic": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80&v=ve-basic",
    "comprehensive-digital-career-launch-program": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80&v=career",
    "podcast-mastery": "https://images.unsplash.com/photo-1541639938591-31026514c3d0?auto=format&fit=crop&w=1200&q=80",
    "jewellery-design": "https://images.unsplash.com/photo-1516632664305-eda5d4fdbb57?auto=format&fit=crop&w=1200&q=80",
    "jewellery-designing": "https://images.unsplash.com/photo-1516632664305-eda5d4fdbb57?auto=format&fit=crop&w=1200&q=80&v=pro",
};
export const COURSES: UnifiedCourse[] = FULL_PROGRAM_CATALOG.map(program => {
    const curated = CURATED_IMAGES[program.slug || program.id] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&v=default";
    const image = curated;
    return {
        ...program,
        slug: program.slug ?? program.id,
        overview: program.description,
        modules: program.modules ?? [],
        brochurePdf: (program as any).brochurePdf ?? "",
        image,
        thumbnail: curated,
    };
});
