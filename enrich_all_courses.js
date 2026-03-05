const fs = require('fs');
const path = require('path');

try {
    const filePath = 'data/courses.data.ts';
    console.log('Reading file:', filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    console.log('File read successfully. Total lines:', lines.length);

    const coursesToEnrich = {
        "mern-stack-development": [
            { id: 1, title: "Web Architecture", description: "Master request-response cycles, DNS, and industrial hosting workflows." },
            { id: 2, title: "Modern Design", description: "Build pixel-perfect responsive UIs using advanced CSS and Tailwind." },
            { id: 3, title: "JavaScript Pro", description: "Expertise in ES6+, asynchronous patterns, and functional programming." },
            { id: 4, title: "React Ecosystem", description: "Manage complex state with Redux/Context and build custom React hooks." },
            { id: 5, title: "API Development", description: "Architect secure, scalable RESTful services using Node.js and Express." },
            { id: 6, title: "NoSQL Database", description: "Design efficient data models and manage schemas in MongoDB." },
            { id: 7, title: "Full Stack Apps", description: "Develop and deploy end-to-end applications with real-time features." },
            { id: 8, title: "DevOps Basics", description: "Implement CI/CD pipelines, Docker, and cloud deployments on AWS/Vercel." }
        ],
        "wordpress-development": [
            { id: 1, title: "E-com Architecture", description: "Architect full-scale WooCommerce stores with global payment gateways." },
            { id: 2, title: "Speed Optimization", description: "Achieve 90+ PageSpeed scores via advanced caching and image compression." },
            { id: 3, title: "SEO Strategy", description: "Implement On-page / Technical SEO to rank sites in competitive niches." },
            { id: 4, title: "Security Protocols", description: "Hardening WordPress sites against SQL injection and brute-force attacks." },
            { id: 5, title: "Theme Customization", description: "Modify child themes using PHP and CSS for unique brand identities." },
            { id: 6, title: "Freelance Mastery", description: "Manage client projects, from contract drafting to successful delivery." },
            { id: 7, title: "Site Migration", description: "Safely migrate massive databases between servers with zero downtime." },
            { id: 8, title: "Analytics Lead", description: "Setup GTM and GA4 to track conversions and user behavior flow." }
        ],
        "n8n-automation": [
            { id: 1, title: "Logic Architecture", description: "Design complex conditional branching and nested loop logic flows." },
            { id: 2, title: "Rest API Expert", description: "Seamlessly connect any SaaS tool via authentication and webhooks." },
            { id: 3, title: "AI Integration", description: "Incorporate LLMs and Vector DBs into automated business pipelines." },
            { id: 4, title: "Data Transformation", description: "Master JSON manipulation and JavaScript snippets within n8n nodes." },
            { id: 5, title: "Error Handling", description: "Build resilient workflows with retry logic and notification alerts." },
            { id: 6, title: "Enterprise Scaling", description: "Optimize workflows for high-volume data and concurrent executions." },
            { id: 7, title: "Security/Privacy", description: "Implement secure credential management and data encryption standards." },
            { id: 8, title: "Business ROI", description: "Automate lead funnels and reporting to drive measurable revenue growth." }
        ],
        "prompt-engineering": [
            { id: 1, title: "LLM Fundamentals", description: "Deep understanding of tokenization, context windows, and model behavior." },
            { id: 2, title: "Creative Writing", description: "Craft role-based prompts for marketing, storytelling, and scripts." },
            { id: 3, title: "Code Assistance", description: "Generate, debug, and refactor code using highly specific AI prompts." },
            { id: 4, title: "Framework Design", description: "Build chain-of-thought and few-shot templates for business scale." },
            { id: 5, title: "Bias Mitigation", description: "Identify and resolve hallucinations and biases in AI-generated outputs." },
            { id: 6, title: "AI Agent Setup", description: "Configure autonomous agents for task delegation and complex research." },
            { id: 7, title: "Prompt Security", description: "Defend against prompt injection and master data privacy techniques." },
            { id: 8, title: "Industry Application", description: "Deploy AI solutions for HR, sales, and operations in real companies." }
        ],
        "java-programming": [
            { id: 1, title: "OOP Architecture", description: "Design robust systems using Polymorphism, Inheritance, and Encapsulation." },
            { id: 2, title: "Multi-threading", description: "Handle concurrent operations and improve application performance." },
            { id: 3, title: "Network Logic", description: "Implement socket programming and client-server communication basics." },
            { id: 4, title: "Database Mastery", description: "Expertise in JDBC, SQL queries, and transactional data integrity." },
            { id: 5, title: "Exception Handling", description: "Write clean, fault-tolerant code with advanced error-handling patterns." },
            { id: 6, title: "DS & Algorithms", description: "Master Collections, sorting, and searching for technical interviews." },
            { id: 7, title: "GUI Development", description: "Create desktop applications with Swing/JavaFX for enterprise use." },
            { id: 8, title: "Industrial Clean Code", description: "Apply SOLID principles and Design Patterns for reusable software." }
        ],
        "digital-marketing": [
            { id: 1, title: "SEO Analytics", description: "Rank content on Page 1 via keyword research and technical audits." },
            { id: 2, title: "Meta Ads Pro", description: "Launch and scale high-ROI campaigns using Meta Business Suite." },
            { id: 3, title: "SEM Mastery", description: "Expertise in Google Ads (Search, Display, Shopping) for lead gen." },
            { id: 4, title: "Content Mastery", description: "Develop and execute multi-channel social media growth strategies." },
            { id: 5, title: "Email Automation", description: "Setup drip campaigns and lead nurturing flows using CRM tools." },
            { id: 6, title: "Influencer Marketing", description: "Manage brand partnerships and campaign outreach for ROI." },
            { id: 7, title: "Conversion Optimization", description: "Apply A/B testing on landing pages to double conversion rates." },
            { id: 8, title: "Data Reporting", description: "Build automated client reports using Looker Studio and GA4 insights." }
        ],
        "photography": [
            { id: 1, title: "Camera Mechanics", description: "Master manual mode on high-end DSLR and Mirrorless systems." },
            { id: 2, title: "Lighting Expert", description: "Sculpt light using studio strobes, reflectors, and ambient sources." },
            { id: 3, title: "Visual Narrative", description: "Apply rules of thirds and color theory to tell compelling stories." },
            { id: 4, title: "Editing Mastery", description: "Professional retouching and RAW processing using Adobe Lightroom." },
            { id: 5, title: "Product Specialist", description: "Capture high-end e-commerce products for global brands." },
            { id: 6, title: "Event Precision", description: "Master fast-paced event and wedding photography workflows." },
            { id: 7, title: "Business Branding", description: "Setup a photography studio and manage client-facing contracts." },
            { id: 8, title: "Public Portfolio", description: "Launch a digital portfolio that attracts high-paying creative work." }
        ],
        "youtube-script-writing": [
            { id: 1, title: "Storytelling Arc", description: "Craft narrative structures that keep viewers hooked till the end." },
            { id: 2, title: "Retention Hacking", description: "Write intro hooks that maximize the crucial first 30 seconds." },
            { id: 3, title: "Algorithm SEO", description: "Master title/thumbnail psychology and keyword-rich scripting." },
            { id: 4, title: "AI Content Lead", description: "Scale script production using advanced AI-prompting frameworks." },
            { id: 5, title: "Monetization Script", description: "Strategically place sponsor segments and affiliate CTAs." },
            { id: 6, title: "Niche Authority", description: "Create a unique brand voice across diverse YouTube niches." },
            { id: 7, title: "Production Ready", description: "Develop scripts with clear visual and audio cues for editors." },
            { id: 8, title: "Creator Business", description: "Manage content calendars and scale a professional script-writing team." }
        ],
        "ar-vr-development": [
            { id: 1, title: "Unity Mastery", description: "Professional environment building and physics setup in Unity 3D." },
            { id: 2, title: "AR Interaction", description: "Develop surface detection and marker-based AR apps for mobile." },
            { id: 3, title: "VR Mechanics", description: "Master spatial movement, grabbing, and VR-ready user interfaces." },
            { id: 4, title: "C# Scripting", description: "Write optimized C# code for real-time immersive XR experiences." },
            { id: 5, title: "3D Graphics", description: "Optimize materials, textures, and lighting for mobile-VR performance." },
            { id: 6, title: "Spatial Audio", description: "Implement immersive 3D audio cues that guide user attention." },
            { id: 7, title: "Industrial Pro", description: "Deploy AR solutions for training, architecture, and medical use." },
            { id: 8, title: "XR Prototype", description: "Build a polished end-to-end XR game or utility for a professional portfolio." }
        ],
        "oracle-sql-database-management": [
            { id: 1, title: "Query Expert", description: "Write complex subqueries, joins, and analytic functions on massive data." },
            { id: 2, title: "Schema Design", description: "Architect normalized relational databases for enterprise applications." },
            { id: 3, title: "PL/SQL Mastery", description: "Develop secure stored procedures, functions, and triggers." },
            { id: 4, title: "DBA Fundamentals", description: "Manage user roles, permissions, and database storage structures." },
            { id: 5, title: "Performance Tuning", description: "Optimize SQL execution plans to maximize system throughput." },
            { id: 6, title: "Data Integrity", description: "Enforce strict constraints and transactional safety for enterprise data." },
            { id: 7, title: "Backup & Recovery", description: "Implement disaster recovery plans and automated database backups." },
            { id: 8, title: "Migration Lead", description: "Safely migrate and upgrade enterprise Oracle databases." }
        ],
        "data-science": [
            { id: 1, title: "Python for Data", description: "Master NumPy and Pandas for high-speed data manipulation." },
            { id: 2, title: "Stats & Probability", description: "Apply hypothesis testing and inferential stats to real datasets." },
            { id: 3, title: "ML Implementation", description: "Build and evaluate predictive models using Scikit-learn." },
            { id: 4, title: "Data Visualization", description: "Create stunning business insights with Seaborn and Matplotlib." },
            { id: 5, title: "Feature Engineering", description: "Transform raw data into meaningful features for model accuracy." },
            { id: 6, title: "Big Data Insights", description: "Process and analyze large-scale datasets for business intelligence." },
            { id: 7, title: "EDA Specialist", description: "Perform deep Exploratory Data Analysis to uncover hidden patterns." },
            { id: 8, title: "Capstone Ready", description: "Deliver an industrial data project that solves a real business problem." }
        ],
        "basic-computer": [
            { id: 1, title: "OS Mastery", description: "Expertise in Windows environment and advanced file management." },
            { id: 2, title: "Document Pro", description: "Create professional reports and layouts in Microsoft Word." },
            { id: 3, title: "Spreadsheet Basics", description: "Build automated trackers and basic formulas in MS Excel." },
            { id: 4, title: "Visual Presenter", description: "Develop high-impact slide decks in Microsoft PowerPoint." },
            { id: 5, title: "Digital Literacy", description: "Navigate professional email, cloud storage, and online tools." },
            { id: 6, title: "Cyber Hygiene", description: "Safe browsing habits and protection against common online threats." },
            { id: 7, title: "Office IT Expert", description: "Troubleshoot basic PC issues and setup office peripherals." },
            { id: 8, title: "Workplace Ready", description: "Industrial typing speed and professional digital communication." }
        ],
        "microsoft-excel": [
            { id: 1, title: "Formula Expert", description: "Master VLOOKUP, XLOOKUP, Index-Match, and nested IF logic." },
            { id: 2, title: "Pivot Analytics", description: "Summarize massive datasets using advanced Pivot Tables and Charts." },
            { id: 3, title: "Dashboard Architect", description: "Build interactive executive dashboards with Slicers and Timelines." },
            { id: 4, title: "MIS Reporting", description: "Generate industrial-grade automated management reports." },
            { id: 5, title: "Data Cleanup Pro", description: "Utilize Power Query for cleaning and transforming messy raw data." },
            { id: 6, title: "Financial Modeling", description: "Build projections, scenarios, and ROI trackers for businesses." },
            { id: 7, title: "VBA Foundations", description: "Introduction to macros and basic automation for repetitive tasks." },
            { id: 8, title: "Productivity Hacks", description: "Master shortcuts and workflows used by elite data analysts." }
        ],
        "game-app-development": [
            { id: 1, title: "Logic Builder", description: "Architect reusable algorithms and core programming patterns." },
            { id: 2, title: "2D Game Engine", description: "Build physics-based games with sprite and collision mechanics." },
            { id: 3, title: "UI/UX for Apps", description: "Design mobile-first interfaces using layout and styling best practices." },
            { id: 4, title: "App Prototype", description: "Develop and test interactive utility app prototypes for mobile." },
            { id: 5, title: "Mobile Frameworks", description: "Expertise in cross-platform development for Android and iOS." },
            { id: 6, title: "API Connectivity", description: "Fetch and display dynamic data in apps from external web services." },
            { id: 7, title: "Debugging Lead", description: "Identify and resolve performance bottlenecks in games and apps." },
            { id: 8, title: "Project Launch", description: "Deploy a polished game and a utility app to a professional portfolio." }
        ],
        "interior-design": [
            { id: 1, title: "Space Strategist", description: "Plan functional residential and commercial layouts with ergonomics." },
            { id: 2, title: "AutoCAD Pro", description: "Create precise 2D technical floor plans and detailed elevations." },
            { id: 3, title: "3D Visualization", description: "Develop realistic 3D renders with textures and lighting effects." },
            { id: 4, title: "Material Expert", description: "Select and specify finishes, woods, and fabrics for luxury projects." },
            { id: 5, title: "Color Psychology", description: "Apply advanced color theory to evoke specific brand or home moods." },
            { id: 6, title: "Lighting Design", description: "Engineer layered lighting plans for aesthetics and task efficiency." },
            { id: 7, title: "Budget Manager", description: "Develop accurate project estimates and manage vendor timelines." },
            { id: 8, title: "Client Pitch", description: "Present immersive design boards that win high-value contracts." }
        ],
        "tally-with-gst": [
            { id: 1, title: "Accounting Expert", description: "Manage full-cycle double-entry bookkeeping for enterprises." },
            { id: 2, title: "GST Compliance", description: "Master GSTR-1, GSTR-3B, and Input Tax Credit (ITC) handling." },
            { id: 3, title: "Inventory Lead", description: "Setup advanced multi-warehouse inventory tracking and alerts." },
            { id: 4, title: "TallyPrime Pro", description: "Expertise in the latest Tally software for business management." },
            { id: 5, title: "Payroll Architect", description: "Setup ESI, PF, and professional payroll structures in Tally." },
            { id: 6, title: "Reconciliation", description: "Perfectly align bank and ledger statements with automated BRS." },
            { id: 7, title: "Audit Ready", description: "Generate professional balance sheets and audit-compliant reports." },
            { id: 8, title: "Financial Analyst", description: "Analyze business health through cash flow and profitability ratios." }
        ],
        "personality-development": [
            { id: 1, title: "Confidence Pro", description: "Remove stage fear and project authority in any social or business setting." },
            { id: 2, title: "Comm Lead", description: "Master verbal and non-verbal communication for maximum impact." },
            { id: 3, title: "Interview Ace", description: "Axe mock-drills and develop high-converting professional resumes." },
            { id: 4, title: "Soft Skills Guru", description: "Apply leadership, teamwork, and emotional intelligence in workplace." },
            { id: 5, title: "Body Language", description: "Harness non-verbal cues and professional posture to build trust." },
            { id: 6, title: "Time Management", description: "Execute high-productivity workflows and stress-mitigation habits." },
            { id: 7, title: "Corporate Grooming", description: "Master professional etiquette, attire, and dining standards." },
            { id: 8, title: "Leader Mindset", description: "Develop decision-making skills and a high-performance growth mindset." }
        ],
        "english-for-banking": [
            { id: 1, title: "Banking Fluency", description: "Speak confidently with clients using industry-standard banking terms." },
            { id: 2, title: "Email Drafting", description: "Write professional, error-free corporate emails and financial reports." },
            { id: 3, title: "Query Resolution", description: "Handle complex customer service dialogue with diplomacy and speed." },
            { id: 4, title: "Interview Ready", description: "Clear GD and PI rounds for public and private sector bank exams." },
            { id: 5, title: "Grammar Mastery", description: "Apply perfect tenses and professional voice in business settings." },
            { id: 6, title: "Financial Jargon", description: "Decode and use complex banking and investment terminology." },
            { id: 7, title: "Active Listening", description: "Understand diverse accents and client requirements in banking hubs." },
            { id: 8, title: "Public Interaction", description: "Deliver clear group presentations on financial services and products." }
        ],
        "ui-ux-design": [
            { id: 1, title: "UX Strategist", description: "Execute user research, empathy mapping, and data-backed strategy." },
            { id: 2, title: "Wireframe Pro", description: "Design low to high fidelity structural layouts for apps and web." },
            { id: 3, title: "Figma Master", description: "Utilize Auto-Layout, Components, and advanced Prototyping in Figma." },
            { id: 4, title: "Visual Designer", description: "Apply typography, grid systems, and color theory for premium UI." },
            { id: 5, title: "Design Systems", description: "Architect scalable libraries for consistent across multi-page apps." },
            { id: 6, title: "User Testing", description: "Verify designs through usability testing and iterative feedback loops." },
            { id: 7, title: "Portfolio Ready", description: "Build 3+ end-to-end UX case studies for global design roles." },
            { id: 8, title: "Handover Expert", description: "Prepare dev-ready files with documentation and asset exports." }
        ],
        "ecommerce-dropshipping": [
            { id: 1, title: "Niche Researcher", description: "Identify winning products with high profit potential using research tools." },
            { id: 2, title: "Store Builder", description: "Launch full Shopify or WooCommerce stores with professional branding." },
            { id: 3, title: "Meta Ads Scale", description: "Run and scale profitable ad campaigns to a global audience." },
            { id: 4, title: "Supplier Mastery", description: "Setup automated fulfillment with reliable global and local suppliers." },
            { id: 5, title: "Copywriting Pro", description: "Write high-converting product pages and email follow-up flows." },
            { id: 6, title: "ROI Optimizer", description: "Manage P&L, reduce ad spend, and maximize net profit margins." },
            { id: 7, title: "Brand Architect", description: "Develop unique private-label identities for long-term growth." },
            { id: 8, title: "Automation Hub", description: "Integrate ERP/CRM tools for passive, hands-off store management." }
        ],
        "business-analytics": [
            { id: 1, title: "Data Strategist", description: "Map business goals to measurable KPIs and data collection plans." },
            { id: 2, title: "SQL for Analyst", description: "Fetch and join complex business data for actionable reporting." },
            { id: 3, title: "Visualization Lead", description: "Build high-impact dashboards using Power BI and Tableau." },
            { id: 4, title: "Trend Forecaster", description: "Apply predictive modeling to anticipate market and sales trends." },
            { id: 5, title: "Case Study Expert", description: "Solve real-world industrial business problems using data logic." },
            { id: 6, title: "Decision Support", description: "Present technical insights clearly to non-technical executives." },
            { id: 7, title: "Big Data Flow", description: "Manage industrial data pipelines for continuous business monitoring." },
            { id: 8, title: "Analyst Portfolio", description: "Deliver a professional portfolio of business recommendation projects." }
        ],
        "stock-market-financial-trading": [
            { id: 1, title: "Price Action Pro", description: "Identify high-probability setups using pure chart patterns and volume." },
            { id: 2, title: "Fundamental Analyst", description: "Evaluate company health via balance sheets and economic ratios." },
            { id: 3, title: "Trading Psychology", description: "Master emotional discipline and risk management for long-term profit." },
            { id: 4, title: "Derivatives Expert", description: "Integrate Futures and Options for hedging and speculative growth." },
            { id: 5, title: "Portfolio Logic", description: "Build and diversify long-term investment portfolios for wealth." },
            { id: 6, title: "Technical Indicators", description: "Master RSI, MACD, and EMA for confirmation on trade entries." },
            { id: 7, title: "Risk Mitigation", description: "Apply strict per-trade risk rules and capital allocation strategies." },
            { id: 8, title: "Trading System", description: "Develop and backtest a personal rule-based trading strategy." }
        ],
        "ai-tools-business-office": [
            { id: 1, title: "AI Workflow Architect", description: "Integrate AI tools into daily office routines for 10x productivity." },
            { id: 2, title: "Advanced Prompting", description: "Master complex logic and task automation via LLM engineering." },
            { id: 3, title: "Content Automator", description: "Scale professional documentation and marketing copy using AI agents." },
            { id: 4, title: "Smart Reporting", description: "Generate automated business reports and AI-assisted spreadsheets." },
            { id: 5, title: "Zapier Integration", description: "Connect business tools to automate repetitive data entry tasks." },
            { id: 6, title: "AI Marketing Hub", description: "Launch AI-driven social media and email campaigns in minutes." },
            { id: 7, title: "Security/Ethics", description: "Implement safe AI usage protocols for enterprise data privacy." },
            { id: 8, title: "Office Simulation", description: "Deploy AI solutions in real-world department-based case studies." }
        ],
        "software-testing": [
            { id: 1, title: "SDLC Specialist", description: "Master technical testing phases within Agile and Waterfall models." },
            { id: 2, title: "Manual Testing Pro", description: "Design rigorous test cases and execute diverse functional tests." },
            { id: 3, title: "Bug Lifecycle", description: "Identify, report, and track defects using industrial QA software." },
            { id: 4, title: "Auto-Testing Core", description: "Build browser-based automation scripts using Selenium and Java." },
            { id: 5, title: "API QA Expert", description: "Execute functional and security tests on backend APIs via Postman." },
            { id: 6, title: "Regression Lead", description: "Ensure software stability through systematic regression methodologies." },
            { id: 7, title: "Performance QA", description: "Simulate high user loads to test application speed and stability." },
            { id: 8, title: "Internship Project", description: "Manage the end-to-end QA flow of a live industrial application." }
        ],
        "ai-cyber-safety": [
            { id: 1, title: "AI Threat Hunter", description: "Identify digital vulnerabilities using AI-powered monitoring." },
            { id: 2, title: "Digital Forensics", description: "Extract and preserve evidence for basic online risk investigations." },
            { id: 3, title: "Fraud Detection", description: "Recognize and mitigate UPI, phishing, and deepfake threats." },
            { id: 4, title: "Cyber Law Expert", description: "Enforce safety frameworks based on Indian data privacy laws." },
            { id: 5, title: "Risk Manager", description: "Develop incident response plans for organizational digital safety." },
            { id: 6, title: "Ethical Auditor", description: "Audit AI systems for bias and non-compliance with security norms." },
            { id: 7, title: "Safe Dev Logic", description: "Apply defensive security practices to modern digital workflows." },
            { id: 8, title: "Cyber Safety Lead", description: "Lead end-to-end digital safety awareness projects for businesses." }
        ],
        "affiliate-marketing": [
            { id: 1, title: "Niche Strategist", description: "Identify high-profit markets with low competition using data tools." },
            { id: 2, title: "Funnel Architect", description: "Build automated pages that convert visitors into commissions." },
            { id: 3, title: "Platform Expert", description: "Navigate and scale on Amazon, ClickBank, and local networks." },
            { id: 4, title: "Traffic Generation", description: "Drive targeted visitors via SEO, YouTube, and performance ads." },
            { id: 5, title: "Email List Growth", description: "Build and nurture large email lists for long-term passive income." },
            { id: 6, title: "Conversion Lead", description: "A/B test landing pages and creative copy for maximum ROI." },
            { id: 7, title: "Revenue Scaling", description: "Scale winning affiliate offers to predictable monthly payouts." },
            { id: 8, title: "Project Mastery", description: "Launch a live affiliate business and track first measurable ROI." }
        ],
        "complete-banking-course": [
            { id: 1, title: "Banking Knowledge", description: "Understand complete banking workflow and industry ethics." },
            { id: 2, title: "Credit Specialist", description: "Master loan appraisal and credit risk management." },
            { id: 3, title: "Digital Banking", description: "Navigate UPI, NEFT, and modern fintech platforms." },
            { id: 4, title: "Compliance Lead", description: "Implement strict KYC and RBI-standard security norms." },
            { id: 5, title: "Documentation Pro", description: "Handle real-world banking forms and legal paperwork." },
            { id: 6, title: "Lending Ethics", description: "Understand EMI structures and NPA management." },
            { id: 7, title: "Client Relations", description: "Resolve complex customer queries with professional diplomacy." },
            { id: 8, title: "Career Mastery", description: "Prepare for competitive bank placements and interviews." }
        ]
    };

    const newLines = [];
    let currentCourseId = null;
    let insideOutcomes = false;
    let updatedCount = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for course ID
        const idMatch = line.match(/id:\s*"([^"]+)"/);
        if (idMatch) {
            currentCourseId = idMatch[1];
        }

        // Check for outcomes start
        if (currentCourseId && line.includes('outcomes: [')) {
            insideOutcomes = true;
            newLines.push(line);

            // Skip existing outcomes until we find the closing bracket
            while (i < lines.length && !lines[i].includes('],')) {
                i++;
            }

            // Add our new outcomes
            const outcomes = coursesToEnrich[currentCourseId];
            if (outcomes) {
                outcomes.forEach((o, idx) => {
                    const isLast = idx === outcomes.length - 1;
                    newLines.push(`            { id: ${o.id}, title: "${o.title}", description: "${o.description}" }${isLast ? '' : ','}`);
                });
                updatedCount++;
            }

            if (i < lines.length && lines[i].includes('],')) {
                newLines.push(lines[i]);
            }

            insideOutcomes = false;
            continue;
        }

        if (!insideOutcomes) {
            newLines.push(line);
        }
    }

    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log(`Enriched ${updatedCount} courses.`);
} catch (err) {
    console.error('Runtime error:', err);
    process.exit(1);
}
