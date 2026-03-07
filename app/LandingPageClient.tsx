"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../components/Layouts';
import { Button, SectionHeading, SectionSubheading, Card, Icons, Badge, GridPattern } from '../components/ui';
import { ProcessFlow, GrowthChart } from '../components/Infographics';
import { GKWebtechPromo } from '../components/GKWebtechPromo';
import { HOMEPAGE_STATS, HOW_IT_WORKS_STEPS } from '../constants';
import { COURSES } from '../data/courses';
import { cld } from '@/lib/cloudinary';
import { partnerLogos } from '@/data/logos';
import { SITE_CONFIG } from '@/data/site';
import Logo from '@/components/ui/Logo';
import MediaImage from '@/components/ui/MediaImage';
import { GKCertificate } from '../components/GKCertificate';
import AnnouncementCarousel from '../components/AnnouncementCarousel';
import AnimatedFeatureIcons from '../components/AnimatedFeatureIcons';
import CourseCard from '../components/CourseCard';

const DOMAIN_CARDS = [
    {
        title: "Technology & Development",
        description: "Build powerful software, web apps, and emerging tech skills.",
        bullets: ["Full-stack development", "Real-world projects", "Industry-ready skills"],
        icon: "💻",
        link: "/courses#technology-development",
        buttonText: "Explore Tech Courses",
        color: "blue"
    },
    {
        title: "AI & Automation",
        description: "Master generative AI, LLMs, and workflow automation.",
        bullets: ["Prompt Engineering", "n8n Automation", "AI Business Solutions"],
        icon: "🤖",
        link: "/courses#ai-automation",
        buttonText: "Explore AI Courses",
        color: "purple"
    },
    {
        title: "Data & Analytics",
        description: "Transform data into insights with science and analytics.",
        bullets: ["Data Science with Python", "SQL & DB Management", "Business Analytics"],
        icon: "📊",
        link: "/courses#data-analytics",
        buttonText: "Explore Data Courses",
        color: "emerald"
    },
    {
        title: "Digital Marketing & Online Business",
        description: "Scale brands and businesses in the digital landscape.",
        bullets: ["Performance Marketing", "E-commerce & Dropshipping", "SEO & Content Strategy"],
        icon: "🚀",
        link: "/courses#digital-marketing",
        buttonText: "Explore Marketing Courses",
        color: "orange"
    },
    {
        title: "Finance & Banking",
        description: "Master financial accounting, banking, and stock markets.",
        bullets: ["Tally with GST", "Investment Banking", "Stock Market Trading"],
        icon: "💰",
        link: "/courses#finance-banking",
        buttonText: "Explore Finance Courses",
        color: "amber"
    },
    {
        title: "Creative & Design",
        description: "Design stunning visuals, interiors, and user experiences.",
        bullets: ["UI/UX Design", "Interior Design", "Professional Photography"],
        icon: "🎨",
        link: "/courses#creative-design",
        buttonText: "Explore Creative Courses",
        color: "pink"
    },
    {
        title: "Foundational & Career Skills",
        description: "Essential skills for professional growth and communication.",
        bullets: ["Personality Development", "Basic Computer Skills", "Professional English"],
        icon: "🎯",
        link: "/courses#foundational-skills",
        buttonText: "Explore Skills Courses",
        color: "slate"
    }
];

const PORTFOLIO_PROJECTS = [
    {
        title: "E-Commerce Re-Design",
        category: "UI/UX & Frontend",
        image: "/images/blog-figma.png",
        student: "Ayush Sharma"
    },
    {
        title: "Automated Lead Gen Bot",
        category: "AI & Automation",
        image: "/images/blog-automation.png",
        student: "Neha Gupta"
    },
    {
        title: "SaaS Marketing Campaign",
        category: "Digital Marketing",
        image: "/images/blog-marketing.png",
        student: "Vikram Singh"
    },
    {
        title: "Real Estate Dashboard",
        category: "Full Stack Dev",
        image: "/images/blog-react.png",
        student: "Rohan Mehra"
    }
];

const LandingPageClient = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Technology & Development');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    // Mapping tabs to catalog categories
    const tabs = [
        { label: 'Technology & Development', value: 'Technology & Development' },
        { label: 'AI & Automation', value: 'AI & Automation' },
        { label: 'Data & Analytics', value: 'Data & Analytics' },
        { label: 'Digital Marketing & Business', value: 'Digital Marketing & Online Business' },
        { label: 'Finance & Banking', value: 'Finance & Banking' },
        { label: 'Creative & Design', value: 'Creative & Design' },
        { label: 'Foundational Skills', value: 'Foundational & Career Skills' }
    ];

    // Filter courses based on active tab using useMemo for performance
    const displayedCourses = useMemo(() => {
        return COURSES.filter(course => course.category === activeTab);
    }, [activeTab]);

    const faqs = [
        { q: "Do I need prior coding experience?", a: "No, our beginner tracks start from ground zero. However, having basic computer literacy is recommended." },
        { q: "Is the certificate recognized?", a: "Yes, our certificates are recognized by our network of hiring partners. More importantly, your portfolio will speak for itself." },
        { q: "How does the mentorship work?", a: "You are assigned a senior mentor from the industry who reviews your code, helps you with architecture, and provides career guidance." },
        { q: "What is the refund policy?", a: "We offer a 14-day no-questions-asked money-back guarantee if you are not satisfied with the program." },
        { q: "Can I switch tracks later?", a: "Yes, if you find that a track isn't for you within the first month, you can switch to another track of equal value." },
        { q: "How do I access the course material?", a: "Once you enroll, you'll receive login credentials for our learning management system (LMS)." },
        { q: "Are there any group discounts?", a: "Yes, we offer discounts for groups of 3 or more. Contact our admissions team for more details." },
        { q: "Can I learn at my own pace?", a: "Most of our tracks are self-paced with weekly live sessions for doubt clearing." },
        { q: "Is there any age limit to join?", a: "No, we have students ranging from high schoolers to working professionals with 20+ years of experience." }
    ];

    return (
        <PublicLayout>
            {/* SECTION 1: Interactive Hero Section */}
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero"
                data-top="18%"
                data-right="5%"
                data-scale="1.0"
            />

            <section
                className="relative pt-2 pb-32 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300 perspective-1000 z-10"
            >
                <GridPattern className="opacity-40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">

                        {/* Left Content (Text) */}
                        <div className="space-y-6 animate-fade-in-up md:pr-8">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 shadow-sm">
                                <span className="flex h-2 w-2 relative mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.2em] text-blue-700 dark:text-blue-300 uppercase">Learn AI</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                Learn <br /> <span className="text-[#1F4037] dark:text-emerald-500">Computers</span>, <br />
                                <span className="text-[#1F4037] dark:text-emerald-500 text-4xl md:text-5xl lg:text-6xl">Digital Marketing</span> <br />
                                <span className="text-slate-400 dark:text-slate-500">& Many More...</span>
                            </h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300">
                                        <Icons.Award className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Get ready for job | Guaranteed internship</span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300">
                                        <Icons.Clipboard className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Get a portfolio | 100% placement assistance</span>
                                </div>
                                <div className="flex items-center gap-3 group sm:col-span-2">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300">
                                        <Icons.CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Triple certifications | Real skills | Project-based learning</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6">
                                <Button
                                    variant="marigold"
                                    size="lg"
                                    className="px-12 shadow-2xl"
                                    onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Explore All Courses
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="px-8 border-slate-400 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-secondary-500 dark:hover:bg-slate-800 hover:text-slate-700"
                                    onClick={() => router.push('/contact')}
                                >
                                    Contact Us
                                </Button>
                            </div>

                            <div className="flex flex-col gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quick Contact</p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#1F4037] dark:hover:text-white transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-[#FDB827] transition-colors">
                                            <Icons.Phone className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-sm">{SITE_CONFIG.contact.phone}</span>
                                    </a>
                                    <a
                                        href={SITE_CONFIG.contact.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-green-600 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <Icons.MessageCircle className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-sm">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Content (Carousel) */}
                        <div className="relative">
                            <AnnouncementCarousel />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Partners Ticker */}
            <div className="relative">
                <div className="robot-anchor absolute top-1/2 left-0 w-full h-10 pointer-events-none"
                    data-section="partners"
                    data-top="40%"
                    data-right="-60px"
                    data-scale="0.45"
                    data-rotate="-5"
                />
                <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-y border-slate-100 dark:border-slate-800 z-10 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                        <p className="text-center text-slate-400 dark:text-slate-500 mb-8 font-medium text-sm tracking-widest uppercase">Trusted by Industry Leaders</p>

                        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll">
                                {partnerLogos.map((logo) => (
                                    <li key={logo.id} className="transition-all cursor-default flex flex-col items-center gap-1 group">
                                        <Logo
                                            src={logo.image}
                                            name={logo.name}
                                            width={140}
                                            height={56}
                                            className="h-20 md:h-26 transition-all duration-300"
                                        />
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
                                {partnerLogos.map((logo) => (
                                    <li key={`${logo.id}-duplicate`} className="transition-all cursor-default flex flex-col items-center gap-1 group">
                                        <Logo
                                            src={logo.image}
                                            name={logo.name}
                                            width={140}
                                            height={56}
                                            className="h-16 md:h-26 transition-all duration-300"
                                        />
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* SECTION 3: Stats - Percentage Based */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 z-20 relative border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            How can a GK Institute certificate help your career?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center border-slate-200 dark:border-slate-800 hover:border-[#1F4037] dark:hover:border-slate-600 relative overflow-hidden group z-30 transition-all duration-300 shadow-premium bg-white dark:bg-slate-900">
                            <div className="text-6xl font-extrabold text-[#1F4037] dark:text-emerald-500 mb-4 transition-colors group-hover:text-emerald-600">91%</div>
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Career Advancement</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">of students reported career advancement including promotion or new job</p>
                        </Card>

                        <Card className="p-8 text-center border-slate-200 dark:border-slate-800 hover:border-[#1F4037] dark:hover:border-slate-600 relative overflow-hidden group z-30 transition-all duration-300 shadow-premium bg-white dark:bg-slate-900">
                            <div className="text-6xl font-extrabold text-[#1F4037] dark:text-emerald-500 mb-4 transition-colors group-hover:text-emerald-600">87%</div>
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Salary Increase</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">of students saw a positive career outcome within 6 months</p>
                        </Card>

                        <Card className="p-8 text-center border-slate-200 dark:border-slate-800 hover:border-[#1F4037] dark:hover:border-slate-600 relative overflow-hidden group z-30 transition-all duration-300 shadow-premium bg-white dark:bg-slate-900">
                            <div className="text-6xl font-extrabold text-[#1F4037] dark:text-emerald-500 mb-4 transition-colors group-hover:text-emerald-600">44%</div>
                            <div className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Career Switchers</div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">started a new career after completing a professional certificate</p>
                        </Card>
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="marigold" className="px-12" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Certificate Showcase */}
            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge variant="default" className="mb-4">Industry Recognized</Badge>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                                Explore our <span className="text-[#1F4037] dark:text-emerald-500">Certification Courses</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                                Earn professional certificates recognized by industry leaders. Build your portfolio with real-world projects and get hired faster.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icons.Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">Industry-recognized professional certificates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icons.Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">Hands-on projects from real companies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icons.Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">Expert mentorship and career guidance</span>
                                </li>
                            </ul>
                            <Button variant="secondary" size="lg" className="border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400" onClick={() => router.push('/certifications')}>
                                View All Certifications <Icons.ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        <div className="relative flex justify-center">
                            <GKCertificate imageUrl={cld("certificate_pxtref", 800, 566)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Social Proof - Updated */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">
                            <span className="text-[#1F4037] dark:text-emerald-500">Courses</span> For Transforming Your Career
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-5xl mx-auto leading-relaxed mt-4">
                            Do you lack the skills you need to move ahead? Now, you can become a digital marketing specialist without leaving your job. Boost your career with the GKWebTech Institute. A place to learn digital marketing from Executive Level to Manager Level in all practical ways. The high demand for a digital marketing course is best suited for working professionals, job seekers, freelancers, students, and entrepreneurs.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
                        {/* Row 1 */}
                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Placement />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">100% Placement Assistance</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Laptop />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Focus On Practical Learning</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Teacher />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Experienced Trainers</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Certificate />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">High Quality Training</h4>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Search />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Free Doubt Clearing Session</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Backup />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Free Backup Session</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Team />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">650+ Placement Partners</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Project />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Freelance & Live Projects</h4>
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Chart />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Proven Track Record</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                            <div className="relative w-full mb-4">
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium uppercase tracking-wider">Placement Partners</p>
                                <div className="flex gap-4 items-center justify-center flex-wrap">
                                    {partnerLogos.slice(0, 5).map((logo) => (
                                        <div key={logo.id} className="group flex flex-col items-center gap-1">
                                            <Logo
                                                src={logo.image}
                                                name={logo.name}
                                                width={40}
                                                height={16}
                                                className="h-5 md:h-12 transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">Internship Offers In Top Companies</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Support />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">24x7 Customer Support</h4>
                        </div>

                        <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                            <div className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDB827] group-hover:shadow-xl group-hover:shadow-[#FDB827]/20">
                                <div className="transform transition-transform duration-500 group-hover:rotate-12">
                                    <AnimatedFeatureIcons.Certificates />
                                </div>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#FDB827]">30+ Certifications</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Choose Courses by Skill Domain */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            Choose Courses by <span className="text-[#1F4037] dark:text-emerald-500">Skill Domain</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                            Whether you're looking to master emerging technologies or build foundational career skills, we have the perfect specialized track for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DOMAIN_CARDS.map((domain, idx) => (
                            <Card
                                key={idx}
                                className="p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-[#1F4037] dark:hover:border-slate-600 transition-all duration-300 group relative overflow-hidden bg-white dark:bg-slate-900 shadow-premium hover:shadow-2xl cursor-pointer"
                                onClick={() => router.push(domain.link)}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                                        {domain.icon}
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-[#1F4037] transition-colors">{domain.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm h-10 line-clamp-2">
                                        {domain.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {domain.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Icons.Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-slate-700 dark:text-slate-300 font-bold">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant="marigold"
                                        className="w-full"
                                        onClick={(e) => { e.stopPropagation(); router.push(domain.link); }}
                                    >
                                        {domain.buttonText}
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Courses Showcase */}
            <div className="relative">
                <div className="robot-anchor absolute top-20 left-0 w-full h-10 pointer-events-none"
                    data-section="courses"
                    data-top="150px"
                    data-right="-20px"
                    data-scale="0.6"
                    data-rotate="-10"
                />
                <section id="courses" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative z-10">
                    <GridPattern className="opacity-30" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Skills Courses</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">Choose from our specialized learning tracks designed to make you job-ready.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {tabs.map((tab, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 z-30 relative ${activeTab === tab.value
                                        ? 'bg-[#FDB827] text-slate-900 shadow-lg transform scale-105'
                                        : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:text-white'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 animate-fade-in relative z-30">
                            {displayedCourses.map((course, idx) => (
                                <CourseCard key={course.id} course={course} index={idx} />
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Button variant="secondary" className="px-8 py-3 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700" onClick={() => router.push('/courses')}>View All 30+ Courses</Button>
                        </div>
                    </div>
                </section>
            </div>

            {/* SECTION 8: How It Works */}
            <div className="relative">
                <div className="robot-anchor absolute top-1/2 left-0 w-full h-10 pointer-events-none"
                    data-section="process"
                    data-top="30%"
                    data-right="-40px"
                    data-scale="0.55"
                />
                <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                        <SectionHeading align="center">How GK Institute Works</SectionHeading>
                        <SectionSubheading align="center">A unique methodology designed to take you from beginner to professional through immersive simulation.</SectionSubheading>

                        <div className="mt-16 relative z-30">
                            <ProcessFlow steps={HOW_IT_WORKS_STEPS} />
                        </div>
                    </div>
                </section>
            </div>

            {/* SECTION 9: Career Growth */}
            <div className="relative">
                <div className="robot-anchor absolute top-1/2 left-0 w-full h-10 pointer-events-none"
                    data-section="growth"
                    data-top="60%"
                    data-right="20px"
                    data-scale="0.5"
                    data-rotate="0"
                />
                <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 z-10 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <Badge variant="ai" className="mb-4">Outcomes</Badge>
                                <SectionHeading>Compounding Career Growth</SectionHeading>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                                    Traditional education gives you theory. We give you a production-grade portfolio.
                                    See how our project-based methodology accelerates your career trajectory compared to standard learning paths.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center text-xl shadow-sm">🚀</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Faster to Market</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Launch your first live project in weeks, not years.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center text-xl shadow-sm">💼</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Higher Starting Salary</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Graduates with portfolios negotiate 20-30% higher offers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full relative z-30">
                                <GrowthChart />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <GKWebtechPromo />



            {/* SECTION 11: FAQ */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-20 relative">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <SectionHeading align="center">Frequently Asked Questions</SectionHeading>
                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-2 border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-premium z-30 relative transition-all duration-300 hover:border-[#1F4037]">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className={`w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors group ${activeFaq === i ? 'bg-[#FDB827] text-[#1F4037]' : 'hover:bg-[#1F4037]'}`}
                                >
                                    <span className={`font-bold transition-colors text-lg ${activeFaq === i ? 'text-[#1F4037]' : 'text-slate-900 dark:text-white group-hover:text-[#FDB827]'}`}>{faq.q}</span>
                                    <span className={`transform transition-transform duration-200 ${activeFaq === i ? 'rotate-180 text-[#1F4037]' : 'text-slate-400 group-hover:text-[#FDB827]'}`}><Icons.ChevronDown /></span>
                                </button>
                                {activeFaq === i && (
                                    <div className="p-6 pt-0 text-[#1F4037] bg-[#FDB827] leading-relaxed border-t border-[#1F4037]/10 font-medium">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: About Us */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group block">
                            <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-800 rounded-3xl blur-2xl transition-all duration-700"></div>
                            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-2xl">
                                <img
                                    src="/images/practical_learning_mentor.png"
                                    alt="About GK Institute"
                                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Badge variant="default" className="bg-[#1F4037] text-white font-black border-none px-6 py-2 uppercase tracking-widest text-[10px]">About Us</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                                More Than Just an <br /><span className="text-[#1F4037] dark:text-emerald-500">Education Platform</span>.
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                                GK Institute is a hybrid Digital Agency + Training Institute. We bridge the gap between traditional education and industry requirements by providing a simulated workspace environment where students work on live projects.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-premium group hover:border-[#1F4037] transition-all">
                                    <h4 className="text-4xl font-black text-[#1F4037] dark:text-emerald-500 mb-1">10k+</h4>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Students Trained</p>
                                </div>
                                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-premium group hover:border-[#1F4037] transition-all">
                                    <h4 className="text-4xl font-black text-[#1F4037] dark:text-emerald-500 mb-1">500+</h4>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hiring Partners</p>
                                </div>
                            </div>
                            <div className="pt-6 flex flex-wrap gap-4">
                                <Button
                                    variant="marigold"
                                    size="lg"
                                    className="px-12 py-4 text-white font-black shadow-xl"
                                    onClick={() => router.push('/courses')}
                                >
                                    Browse Courses
                                </Button>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="px-10 py-4 bg-[#1F4037] hover:bg-[#163029] text-white font-black shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-none"
                                    onClick={() => router.push('/contact')}
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </PublicLayout>
    );
};

export default LandingPageClient;
