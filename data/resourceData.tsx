
import React from 'react';
import { cld } from '@/lib/cloudinary';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
  readTime: string;
  image: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
}

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  description: string;
  pages: number;
  cover: string;
  audience: string;
  sampleChapter: React.ReactNode;
  toc: string[];
  link: string;
}

export interface MicroLesson {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  explanation: React.ReactNode;
  takeaways: string[];
  actionStep: string;
}

// --- BLOG POSTS ---
export const BLOGS: BlogPost[] = [
  {
    id: '1',
    slug: 'tutorial-hell-career-guide',
    title: "Why 'Tutorial Hell' is Killing Your Career",
    excerpt: "Feeling stuck in 'tutorial hell'? Discover why endless tutorials hinder your coding career and how project-based learning at GK Institute is the ultimate escape. Learn to build, not just copy.",
    category: "Career Advice",
    readTime: "5 min read",
    image: "/images/blog-tutorial-hell.png",
    date: "Oct 12, 2023",
    author: "Sarah Chen",
    authorRole: "Senior Engineer, Netflix",
    authorImage: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          You've been there: hours spent watching coding tutorials, diligently following along, feeling a surge of accomplishment. But then, faced with a blank editor, your mind goes blank. This is the infamous "tutorial hell," and it's a silent killer of aspiring developers' careers.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Illusion of Competence: Why Tutorials Fall Short</h3>
        <p className="mb-4">
          Tutorials offer a curated, sanitized learning experience. The instructor has already navigated the pitfalls, debugged the errors, and perfected the architecture. When you mimic their steps, you're not truly learning to <strong>solve problems</strong>; you're merely learning to <strong>replicate syntax</strong>. Real-world software development is messy, unpredictable, and demands critical thinking—skills rarely honed in a guided tutorial.
        </p>
        <p className="mb-6">
          True engineering involves wrestling with cryptic error messages, deciphering dense documentation, and realizing that your initial architectural choices were flawed. These are the moments where genuine learning happens, forging resilience and problem-solving prowess.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Escaping the Cycle: Strategies for Real Learning</h3>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>The "Feature Extension" Rule:</strong> After completing any tutorial, challenge yourself to add a new feature or functionality that wasn't covered. This forces you to apply concepts independently and troubleshoot unforeseen issues.
          </li>
          <li>
            <strong>Embrace "Ugly" Projects:</strong> Don't get bogged down by perfect aesthetics initially. Focus on building logic-heavy applications that solve a real problem, even if the UI is basic. Functionality over superficiality is key for skill development.
          </li>
          <li>
            <strong>Dive into Source Code:</strong> Explore open-source projects on GitHub. Read the raw code of libraries you use. While intimidating at first, this practice rapidly accelerates your understanding of design patterns, best practices, and complex implementations.
          </li>
          <li>
            <strong>Collaborate and Contribute:</strong> Join coding communities, participate in hackathons, or contribute to open-source projects. Working with others exposes you to diverse perspectives and collaborative problem-solving.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The GK Institute Advantage: Project-Based Mastery</h3>
        <p className="mb-4">
          At GK Institute, we understand that true mastery comes from doing. Our curriculum is 100% project-based, mirroring the demands of the professional world. We provide you with real-world briefs, challenging deadlines, and dedicated mentorship. Your journey involves independent problem-solving, iterative development, and building a portfolio that speaks volumes.
        </p>
        <p className="mb-8">
          Break free from tutorial hell. Join GK Institute and transform into a confident, job-ready developer who can tackle any challenge.
        </p>
      </>
    )
  },
  {
    id: '2',
    slug: 'figma-auto-layout-guide',
    title: "The Ultimate Guide to Figma Auto-Layout",
    excerpt: "Master Figma's Auto-Layout, the powerful feature that mirrors CSS Flexbox for designers. Learn to build responsive components efficiently and avoid common design pitfalls.",
    category: "Design",
    readTime: "8 min read",
    image: "/images/blog-figma.png",
    date: "Oct 08, 2023",
    author: "Priya Patel",
    authorRole: "Product Design Lead",
    authorImage: "https://ui-avatars.com/api/?name=Priya+Patel&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          If you're still manually resizing elements in Figma in 2024, you're missing out on a fundamental shift in design efficiency. Figma's Auto-Layout is more than just a feature; it's a paradigm that brings the power of CSS Flexbox directly into your design workflow, enabling you to build responsive, scalable components with unprecedented speed and precision.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Understanding the Box Model: A Designer's Perspective</h3>
        <p className="mb-4">
          Auto-Layout forces you to think like a frontend developer, viewing every element as a box within a box. This mental model is crucial for creating designs that translate seamlessly into code. It's about understanding how elements interact and adapt to different content lengths and screen sizes, ensuring your designs are robust and future-proof.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Concepts for Auto-Layout Mastery</h3>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Hug Contents:</strong> This setting allows a container to shrink or expand dynamically to perfectly fit its child elements. It's ideal for components like buttons, where the padding around the text should remain consistent regardless of the label's length.
          </li>
          <li>
            <strong>Fill Container:</strong> Conversely, "Fill Container" enables a child element to stretch and occupy all available space within its parent. This is invaluable for creating responsive cards, content blocks, or any element that needs to adapt to its parent's dimensions.
          </li>
          <li>
            <strong>Space Between:</strong> Essential for navigation bars and distributed content, "Space Between" pushes elements to the edges of their container, distributing the remaining space evenly between them.
          </li>
          <li>
            <strong>Fixed Width/Height:</strong> For elements that need to maintain a specific size, "Fixed" dimensions provide precise control, preventing them from resizing unexpectedly.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Common Mistakes and How to Avoid Them</h3>
        <p className="mb-4">
          One frequent pitfall is over-nesting Auto-Layout frames. While powerful, an overly complex hierarchy can make your designs difficult to manage and understand, especially for developers. Strive for a flatter hierarchy where possible, and only nest when absolutely necessary. Another mistake is not utilizing constraints effectively within Auto-Layout frames, leading to unexpected resizing behaviors.
        </p>
        <p className="mb-8">
          Mastering Figma's Auto-Layout will not only accelerate your design process but also foster a deeper understanding of responsive design principles, making you a more effective and valuable designer in any team.
        </p>
      </>
    )
  },
  {
    id: '3',
    slug: 'react-server-components-intro',
    title: "React Server Components: A Practical Intro",
    excerpt: "Dive into React Server Components (RSCs) with a practical, jargon-free introduction. Understand how RSCs in Next.js 14 revolutionize data fetching and component rendering for modern web applications.",
    category: "Engineering",
    readTime: "12 min read",
    image: "/images/blog-react.png",
    date: "Sep 28, 2023",
    author: "David Miller",
    authorRole: "Staff Engineer, Google",
    authorImage: "https://ui-avatars.com/api/?name=David+Miller&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          React Server Components (RSCs) represent a significant evolution in the React ecosystem, fundamentally changing how we think about data fetching and component rendering. Introduced to enhance performance and developer experience, RSCs allow developers to build components that render exclusively on the server, sending only the necessary HTML and CSS to the client, with minimal JavaScript.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Client-Server Divide: A New Perspective</h3>
        <p className="mb-4">
          Traditionally, React applications were predominantly client-side rendered, meaning all components and their logic were shipped to the browser, which then hydrated the UI. While effective, this approach could lead to larger bundle sizes and slower initial page loads. RSCs offer a powerful alternative by enabling components to execute entirely on the server, closer to your data sources.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">When to Use Server Components vs. Client Components</h3>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-6">
          <code className="text-sm font-mono text-pink-600 dark:text-pink-400">
            // Use Server Components for:<br />
            - Data fetching: Directly access databases or APIs without client-side bundles.<br />
            - Sensitive logic: Keep API keys and business logic securely on the server.<br />
            - Large dependencies: Reduce client-side JavaScript by rendering heavy libraries on the server.<br />
            - SEO & Performance: Faster initial page loads and better crawlability.<br />
            <br />
            // Use Client Components ('use client') for:<br />
            - Interactivity: Components requiring `useState`, `useEffect`, or event listeners.<br />
            - Browser-specific APIs: Accessing `localStorage`, `window`, or other browser APIs.<br />
            - User feedback: Forms, animations, and real-time updates.
          </code>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Mental Model: Orchestrating Your Application</h3>
        <p className="mb-4">
          Think of Server Components as the "orchestrators" of your application. They fetch data, compose the initial UI, and then hand off interactive parts to Client Components. This hybrid approach allows you to leverage the best of both worlds: the performance and security of server-side rendering with the rich interactivity of client-side applications.
        </p>
        <p className="mb-8">
          Embracing React Server Components requires a shift in thinking, but the benefits in terms of performance, maintainability, and developer experience are substantial. It's a crucial step towards building more efficient and scalable web applications.
        </p>
      </>
    )
  },
  {
    id: '4',
    slug: 'digital-marketing-basics-4cs',
    title: "The 4 Ps are Dead. Long Live the 4 Cs.",
    excerpt: "Discover why the traditional 4 Ps of marketing are outdated in the digital age. Learn about the modern 4 Cs (Consumer, Cost, Convenience, Communication) and how to apply them for effective digital strategies.",
    category: "Marketing",
    readTime: "6 min read",
    image: "/images/blog-marketing.png",
    date: "Aug 15, 2023",
    author: "Mike Ross",
    authorRole: "CMO, GK Agency",
    authorImage: "https://ui-avatars.com/api/?name=Mike+Ross&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          For decades, the 4 Ps of marketing—Product, Price, Place, and Promotion—formed the bedrock of strategic planning. However, in an increasingly digital, consumer-centric world, this traditional framework often falls short. The internet has empowered consumers like never before, shifting the focus from what companies push to what customers truly need and desire. It's time to embrace the 4 Cs: Consumer, Cost, Convenience, and Communication.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">From Product to Consumer: Understanding Needs First</h3>
        <p className="mb-4">
          The "Product" in the 4 Ps emphasizes features and benefits from the company's perspective. The "Consumer" in the 4 Cs flips this, starting with understanding the customer's problems, desires, and pain points. Modern marketing begins with deep empathy and research into what the target audience truly values, allowing businesses to create solutions that genuinely resonate.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">From Price to Cost: Beyond the Monetary Value</h3>
        <p className="mb-6">
          "Price" is a narrow view, focusing solely on the monetary exchange. "Cost" encompasses a broader spectrum, including the financial outlay, but also the time, effort, psychological burden, and opportunity cost for the consumer. In the digital realm, this means considering the friction in the buying process, the mental energy required to make a decision, and the perceived value against alternatives.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">From Place to Convenience: Accessibility in a Digital World</h3>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Digital Accessibility:</strong> "Place" traditionally referred to physical distribution channels. "Convenience" in the digital age is about making your product or service easily accessible wherever the customer is. This includes intuitive websites, seamless mobile experiences, and presence on relevant online platforms.
          </li>
          <li>
            <strong>Effortless Experience:</strong> How easy is it for a customer to find information, make a purchase, or get support? Reducing friction at every touchpoint is paramount for modern consumers.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">From Promotion to Communication: Engaging in Dialogue</h3>
        <p className="mb-4">
          "Promotion" is often a one-way broadcast of messages. "Communication" is a two-way dialogue. Social media, interactive content, and personalized email campaigns allow brands to engage with consumers, listen to their feedback, and build communities. This fosters trust and loyalty, turning customers into advocates.
        </p>
        <p className="mb-8">
          By shifting your marketing mindset from the outdated 4 Ps to the dynamic 4 Cs, you can develop more effective, customer-centric strategies that thrive in today's digital landscape.
        </p>
      </>
    )
  },
  {
    id: '5',
    slug: 'seo-backlinks-2024',
    title: "Why Backlinks Still Matter in 2024",
    excerpt: "In the age of AI-generated content, discover why high-quality backlinks remain a critical ranking factor for Google. Learn strategies for building authority and trust in 2024 and beyond.",
    category: "SEO",
    readTime: "7 min read",
    image: "/images/blog-seo.png",
    date: "Jul 22, 2023",
    author: "Sarah Chen",
    authorRole: "Senior Engineer",
    authorImage: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          With the proliferation of AI content generators, the internet is awash with easily produced articles. In this landscape, "quality content" alone is no longer a sufficient differentiator. Google's algorithms, particularly its core PageRank principles, are increasingly relying on signals of authority and trust to determine search rankings. And when it comes to authority, backlinks remain king.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Enduring Power of the Trust Signal</h3>
        <p className="mb-4">
          Think of a backlink as a vote of confidence from one website to another. When a reputable, authoritative site links to your content, it signals to Google that your page is a valuable and trustworthy resource. This "trust signal" is incredibly difficult for AI to fake. While AI can generate text, it cannot inherently generate the genuine endorsements that come from established, human-curated websites.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Digital PR: The Evolution of Link Building</h3>
        <p className="mb-6">
          Gone are the days of spammy link schemes. In 2024, effective link building has evolved into "Digital PR." This strategy focuses on creating truly valuable, shareable assets that naturally attract links from high-authority sources. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Original Research & Data Studies:</strong> Conduct unique research or analyze existing data to uncover novel insights. Journalists and industry publications are always looking for fresh, data-backed stories.
          </li>
          <li>
            <strong>Interactive Tools & Resources:</strong> Develop free tools, calculators, or interactive guides that solve a problem for your audience. These are highly linkable assets.
          </li>
          <li>
            <strong>High-Quality Infographics & Visualizations:</strong> Complex information presented in an easily digestible visual format is often shared and linked to.
          </li>
          <li>
            <strong>Expert Commentary & Thought Leadership:</strong> Position yourself or your brand as an industry expert, offering commentary on breaking news or contributing to expert roundups.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quality Over Quantity: The Modern Mantra</h3>
        <p className="mb-4">
          It's not about the sheer number of backlinks; it's about their quality and relevance. A single link from a highly authoritative domain can be more valuable than dozens of links from low-quality, irrelevant sites. Google's algorithms are sophisticated enough to detect and penalize manipulative link-building tactics.
        </p>
        <p className="mb-8">
          In a world saturated with content, backlinks serve as a crucial differentiator, helping Google identify truly authoritative and trustworthy sources. By focusing on ethical, value-driven link building through Digital PR, you can significantly enhance your SEO performance and build lasting online authority.
        </p>
      </>
    )
  },
  {
    id: '6',
    slug: 'agency-automation-zapier',
    title: "How We Saved 40 Hours/Week with Zapier",
    excerpt: "Discover how our agency automated client onboarding, reporting, and lead management using Zapier, saving over 40 hours weekly and significantly boosting efficiency and client satisfaction.",
    category: "Automation",
    readTime: "9 min read",
    image: "/images/blog-automation.png",
    date: "Jun 10, 2023",
    author: "James Wilson",
    authorRole: "Ops Manager",
    authorImage: `https://ui-avatars.com/api/?name=${encodeURIComponent("James Wilson")}&background=random`,
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          In the fast-paced world of agency operations, time is money. Manual, repetitive tasks like client onboarding, data entry, and report generation can quickly consume valuable hours, diverting resources from strategic work. At GK Agency, we faced this challenge head-on and transformed our workflows using Zapier, an automation platform that connects thousands of apps. The result? A staggering saving of over 40 hours per week and a significant boost in overall efficiency.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Problem: Manual Overload and Inefficiency</h3>
        <p className="mb-4">
          Before automation, our process for handling new leads and clients was cumbersome. Leads from Facebook Ads were manually copied into Google Sheets, then individually emailed. Client reports were generated by hand, and follow-up tasks were often missed. This not only led to delays and errors but also frustrated our team and impacted client satisfaction.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution: Streamlining with Zapier</h3>
        <p className="mb-6">
          We identified key areas ripe for automation and designed multi-step Zaps (automated workflows) to handle them. Here’s a breakdown of one of our most impactful automations:
        </p>
        <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Automated Lead Management Workflow:</h4>
        <ol className="list-decimal pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Trigger: Facebook Lead Form Submission:</strong> When a potential client fills out our Facebook Lead Ad form, this acts as the trigger for the entire automation.
          </li>
          <li>
            <strong>Action 1: Add to CRM (HubSpot/Pipedrive):</strong> The lead's details are instantly added to our CRM system, creating a new contact and deal record. This ensures no lead falls through the cracks.
          </li>
          <li>
            <strong>Action 2: Populate Google Sheet:</strong> Simultaneously, the lead data is appended to a "Master Leads" Google Sheet for centralized tracking and analysis.
          </li>
          <li>
            <strong>Action 3: Internal Notification (Slack/Teams):</strong> A notification is sent to our sales team's Slack channel, alerting them to the new lead and providing key details for immediate follow-up.
          </li>
          <li>
            <strong>Action 4: Automated Welcome Email (Mailchimp/ActiveCampaign):</strong> The lead is automatically added to our email marketing platform and enrolled in a personalized welcome sequence, providing immediate value and nurturing.
          </li>
          <li>
            <strong>Action 5: Task Creation (Asana/Trello):</strong> A follow-up task is created in our project management tool for the assigned sales representative, ensuring timely engagement.
          </li>
        </ol>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Impact: Tangible Results and Growth</h3>
        <p className="mb-4">
          The results were immediate and profound:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Reduced Lead Response Time:</strong> From an average of 4 hours to under 5 minutes, drastically improving conversion rates.
          </li>
          <li>
            <strong>Eliminated Manual Errors:</strong> Automated data transfer ensures accuracy and consistency across all platforms.
          </li>
          <li>
            <strong>Increased Team Productivity:</strong> Our team was freed from mundane tasks, allowing them to focus on high-value activities like client strategy and creative development.
          </li>
          <li>
            <strong>Enhanced Client Experience:</strong> Faster responses and streamlined processes led to happier clients and stronger relationships.
          </li>
        </ul>
        <p className="mb-8">
          By strategically implementing Zapier, we not only saved countless hours but also built a more robust, scalable, and client-centric operation. Automation isn't just about saving time; it's about empowering your team and elevating your business.
        </p>
      </>
    )
  },
  {
    id: '7',
    slug: 'the-future-of-web-development',
    title: "The Future of Web Development: AI, Web3, and Beyond",
    excerpt: "Explore the cutting-edge trends shaping web development, from AI-powered tools and Web3 decentralization to low-code platforms and the rise of Rust. Stay ahead of the curve.",
    category: "Engineering",
    readTime: "10 min read",
    image: "/images/blog-future.png",
    date: "Nov 01, 2023",
    author: "Alex Johnson",
    authorRole: "Lead Developer Advocate",
    authorImage: "https://ui-avatars.com/api/?name=Alex+Johnson&background=random",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          The web development landscape is in a constant state of flux, with new technologies and paradigms emerging at a dizzying pace. Staying ahead requires not just adapting to change, but anticipating it. This article delves into the most impactful trends that are poised to redefine how we build for the web.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Artificial Intelligence: The Co-Pilot for Developers</h3>
        <p className="mb-4">
          AI is no longer a futuristic concept; it's rapidly becoming an indispensable tool for developers. From AI-powered code completion and debugging assistants to automated testing and deployment, AI is streamlining workflows and boosting productivity. Tools like GitHub Copilot are just the beginning, promising a future where AI acts as an intelligent co-pilot, freeing developers to focus on higher-level problem-solving and innovation.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Web3 and Decentralization: A New Internet Frontier</h3>
        <p className="mb-6">
          The promise of Web3—a decentralized internet built on blockchain technology—is gaining momentum. This shift aims to give users more control over their data and digital identities, moving away from centralized platforms. Developers are exploring new architectures, smart contracts, and decentralized applications (dApps) that leverage the power of blockchain, NFTs, and cryptocurrencies. Understanding these foundational concepts will be crucial for building the next generation of web experiences.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Beyond the Hype: Other Transformative Trends</h3>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Low-Code/No-Code Platforms:</strong> These platforms are democratizing development, allowing non-technical users to build applications with minimal to no coding. While not replacing traditional development, they enable rapid prototyping and empower smaller teams to launch products faster.
          </li>
          <li>
            <strong>Edge Computing:</strong> Moving computation closer to the data source reduces latency and improves performance. Edge computing is becoming increasingly relevant for real-time applications, IoT devices, and immersive web experiences.
          </li>
          <li>
            <strong>The Rise of Rust:</strong> Known for its performance, memory safety, and concurrency, Rust is gaining traction as a preferred language for systems programming, WebAssembly, and even backend web services, offering a robust alternative to traditional choices.
          </li>
          <li>
            <strong>Green Software Development:</strong> As environmental concerns grow, developers are increasingly focusing on building energy-efficient applications and infrastructure, minimizing the carbon footprint of digital services.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Preparing for the Future at GK Institute</h3>
        <p className="mb-4">
          At GK Institute, our curriculum is continuously updated to reflect these emerging trends. We equip our students with the skills and foresight needed to thrive in this evolving landscape, ensuring they are not just current but future-ready.
        </p>
        <p className="mb-8">
          The future of web development is exciting and complex. By embracing continuous learning and staying informed about these transformative trends, you can position yourself at the forefront of innovation.
        </p>
      </>
    )
  }
];

// --- EBOOKS ---
export const EBOOKS: Ebook[] = [
  {
    id: '1',
    slug: 'junior-dev-survival-guide',
    title: "The Junior Dev Survival Guide",
    description: "Everything they don't teach you in bootcamps about surviving your first job.",
    pages: 45,
    cover: "/images/ebook-junior-dev.png",
    audience: "Entry-level Developers",
    toc: ["Imposter Syndrome", "Git for Teams", "Asking Good Questions", "Code Review Etiquette"],
    sampleChapter: (
      <>
        <h3>Chapter 1: You Are Not Expected to Know Everything</h3>
        <p>
          The biggest fear juniors have is that they will be "found out". That one day, the senior dev will look at their screen and say, "Wait, you're Googling how to center a div? You're fired."
        </p>
        <p>
          Let me let you in on a secret: Seniors Google things too. The difference is, they know <strong>what</strong> to Google.
        </p>
        <p>
          Your job as a junior is not to write perfect code immediately. It is to learn the codebase, ask questions that show you tried, and communicate when you are stuck.
        </p>
        <h4>The 15-Minute Rule</h4>
        <p>
          When you get stuck, try to solve it for 15 minutes. Really try. Read the error, check StackOverflow, console.log everything. If you haven't solved it in 15 minutes, ask for help.
        </p>
        <p>
          If you ask sooner, you aren't trying. If you ask later, you're wasting budget.
        </p>
      </>
    ),
    link: "https://www.freecodecamp.org/news/junior-developer-survival-guide/"
  },
  {
    id: '2',
    slug: 'remote-work-os',
    title: "The Remote Work OS Guide",
    description: "A comprehensive framework for staying productive and visible while working from anywhere.",
    pages: 28,
    cover: "/images/ebook-remote-os.png",
    audience: "Remote Professionals",
    toc: ["Communication Protocols", "Deep Work Rituals", "Digital Visibility", "Ergonomic Setup"],
    sampleChapter: (
      <>
        <h3>The Visibility Gap</h3>
        <p>
          In a physical office, visibility is passive. You are seen at your desk, in meetings, and at the coffee machine. In a remote world, visibility must be <strong>intentional</strong>.
        </p>
        <p>
          The Remote Work OS is about building systems that ensure your impact is recognized without you needing to be "always on."
        </p>
      </>
    ),
    link: "https://www.remote.com/blog/remote-work-guide"
  },
  {
    id: '3',
    slug: 'seo-playbook-2024',
    title: "The Modern SEO Playbook",
    description: "A strategic guide to ranking in the era of AI and SGE (Search Generative Experience).",
    pages: 60,
    cover: "/images/ebook-seo-playbook.png",
    audience: "Marketers & Content Creators",
    toc: ["Keyword Research 2.0", "E-E-A-T Principles", "Technical SEO Audits", "AI Content Workflows"],
    sampleChapter: (
      <>
        <h3>E-E-A-T: The Holy Grail</h3>
        <p>
          Experience, Expertise, Authoritativeness, and Trustworthiness. Google isn't just looking for keywords anymore; it's looking for <strong>proof</strong> that you know what you're talking about.
        </p>
        <h4>Demonstrating Experience</h4>
        <p>
          Don't just write "The best hiking boots". Write "I hiked 500 miles on the Appalachian Trail in these boots, and here is where the sole wore out." First-hand experience is the one thing AI cannot hallucinate convincingly.
        </p>
      </>
    ),
    link: "https://backlinko.com/hub/seo/seo-best-practices"
  },
  {
    id: '4',
    slug: 'conversion-handbook',
    title: "Website Conversion Handbook",
    description: "Turn traffic into revenue. A guide to CRO (Conversion Rate Optimization) psychology.",
    pages: 35,
    cover: "/images/ebook-conversion.png",
    audience: "Designers & Founders",
    toc: ["Above the Fold Mastery", "Social Proof Psychology", "Form Optimization", "The Call to Action"],
    sampleChapter: (
      <>
        <h3>The 5-Second Test</h3>
        <p>
          A user lands on your site. Within 5 seconds, can they answer these three questions?
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>What do you sell?</li>
          <li>Who is it for?</li>
          <li>What do I get out of it?</li>
        </ol>
        <p>
          If your hero section is a vague stock photo with the headline "Empowering Solutions for Tomorrow", you have failed. Be clear over clever. "We sell accounting software for dentists."
        </p>
      </>
    ),
    link: "https://vwo.com/blog/conversion-rate-optimization-guide/"
  }
];

// --- MICRO LESSONS ---
export const LESSONS: MicroLesson[] = [
  {
    id: '1',
    slug: 'deploying-to-vercel',
    title: "Deploying to Vercel",
    category: "DevOps",
    duration: "4:30",
    thumbnail: "https://img.youtube.com/vi/gbpY2f2pF94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/gbpY2f2pF94",
    explanation: <p>Learn how to connect your GitHub repository to Vercel for continuous deployment. We cover environment variables, build settings, and custom domains.</p>,
    takeaways: ["Git Integration", "Env Variables", "Automatic SSL"],
    actionStep: "Connect your first repo and trigger a deploy."
  },
  {
    id: '2',
    slug: 'writing-first-hook',
    title: "Writing Your First Custom Hook",
    category: "React",
    duration: "6:15",
    thumbnail: "https://img.youtube.com/vi/TNhaISOUy6Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
    explanation: <p>Extract logic from your components into reusable functions. We build a `useWindowSize` hook from scratch.</p>,
    takeaways: ["DRY Principle", "useEffect Cleanup", "Returning Values"],
    actionStep: "Refactor a component to use a custom hook."
  },
  {
    id: '3',
    slug: 'seo-basics-5mins',
    title: "SEO Basics in 5 Mins",
    category: "Marketing",
    duration: "5:00",
    thumbnail: "https://img.youtube.com/vi/DvwS7cV9GmQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/DvwS7cV9GmQ",
    explanation: <p>Understand the three pillars of SEO: Technical, On-Page, and Off-Page. A high-level overview for beginners.</p>,
    takeaways: ["Crawling vs Indexing", "Title Tags", "Backlink Importance"],
    actionStep: "Check if your site is indexed using `site:yourdomain.com`."
  },
  {
    id: '4',
    slug: 'keyword-research-101',
    title: "Keyword Research 101",
    category: "Marketing",
    duration: "3:45",
    thumbnail: "https://img.youtube.com/vi/gbpY2f2pF94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/gbpY2f2pF94",
    explanation: <p>How to find what your customers are actually searching for using free tools like Google Trends and Autosuggest.</p>,
    takeaways: ["Search Volume", "Search Intent", "Long-tail Keywords"],
    actionStep: "List 10 keywords relevant to your niche."
  },
  {
    id: '5',
    slug: 'landing-page-anatomy',
    title: "Anatomy of a Landing Page",
    category: "Design",
    duration: "4:20",
    thumbnail: "https://img.youtube.com/vi/TNhaISOUy6Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
    explanation: <p>Break down the essential elements of a high-converting landing page: Hero, Benefits, Social Proof, and CTA.</p>,
    takeaways: ["Headline clarity", "Trust signals", "Single goal"],
    actionStep: "Sketch a wireframe for a product landing page."
  },
  {
    id: '6',
    slug: 'social-media-hooks',
    title: "Writing Viral Social Hooks",
    category: "Content",
    duration: "2:50",
    thumbnail: "https://img.youtube.com/vi/DvwS7cV9GmQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/DvwS7cV9GmQ",
    explanation: <p>Stop the scroll. Learn the psychology behind headlines that force people to read the next line.</p>,
    takeaways: ["Curiosity gaps", "Negative framing", "Specific numbers"],
    actionStep: "Write 3 hooks for your next LinkedIn post."
  },
  {
    id: '7',
    slug: 'cro-color-psychology',
    title: "CRO & Color Psychology",
    category: "Design",
    duration: "3:30",
    thumbnail: "https://img.youtube.com/vi/gbpY2f2pF94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/gbpY2f2pF94",
    explanation: <p>Does the color of the button matter? Yes, but contrast matters more. Learn accessible color theory.</p>,
    takeaways: ["Contrast ratios", "Brand consistency", "Action colors"],
    actionStep: "Audit your CTA button contrast."
  },
  {
    id: '8',
    slug: 'ga4-setup',
    title: "Setting up GA4",
    category: "Analytics",
    duration: "5:15",
    thumbnail: "https://img.youtube.com/vi/TNhaISOUy6Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
    explanation: <p>Transitioning from Universal Analytics to GA4. Setting up your data stream and events.</p>,
    takeaways: ["Events vs Sessions", "Data Streams", "Privacy"],
    actionStep: "Create a GA4 property for your portfolio site."
  },
  {
    id: '9',
    slug: 'email-funnels',
    title: "Email Funnel Basics",
    category: "Marketing",
    duration: "4:00",
    thumbnail: "https://img.youtube.com/vi/DvwS7cV9GmQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/DvwS7cV9GmQ",
    explanation: <p>The journey from subscriber to customer. Welcome sequence structure.</p>,
    takeaways: ["Lead Magnets", "Nurture sequence", "Sales emails"],
    actionStep: "Draft a 3-email welcome sequence."
  },
  {
    id: '10',
    slug: 'ai-content-marketing',
    title: "AI in Content Marketing",
    category: "AI",
    duration: "3:10",
    thumbnail: "https://img.youtube.com/vi/gbpY2f2pF94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/gbpY2f2pF94",
    explanation: <p>Using LLMs to brainstorm, outline, and repurpose content without losing the human touch.</p>,
    takeaways: ["Prompt engineering", "Editing AI", "Repurposing"],
    actionStep: "Generate 10 blog ideas using ChatGPT."
  }
];

