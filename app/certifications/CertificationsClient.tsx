"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '@/components/Layouts';
import { SectionHeading, SectionSubheading, Button, Icons, Card, Badge } from '@/components/ui';
import { certificationLogos, toolsLogos, partnerLogos } from '@/data/logos';
import Logo from '@/components/ui/Logo';
import { cld } from '@/lib/cloudinary';
import { getBasePrice } from '@/lib/coursePricing';
import MediaImage from '@/components/ui/MediaImage';
import { GKCertificate } from '@/components/GKCertificate';

const PORTFOLIO_PROJECTS = [
    {
        title: "Full-Stack SaaS Platform",
        category: "Web Development & DevOps",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        student: "Utkarsh Sharma",
        driveLink: "https://drive.google.com/drive/folders/your-link-here-1"
    },
    {
        title: "Automated Enterprise Workflows",
        category: "AI & Automation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        student: "Neha Gupta",
        driveLink: "https://drive.google.com/drive/folders/your-link-here-2"
    },
    {
        title: "Global E-commerce Campaign",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        student: "Vikram Singh",
        driveLink: "https://drive.google.com/drive/folders/your-link-here-3"
    },
    {
        title: "Brand Identity Discovery",
        category: "Graphic Design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a16ed321?auto=format&fit=crop&q=80&w=800",
        student: "Rohan Mehra",
        driveLink: "https://drive.google.com/drive/folders/your-link-here-4"
    },
    {
        title: "Cinematic Product Ad",
        category: "Video Editing",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        student: "Simran Kaur",
        driveLink: "https://drive.google.com/drive/folders/your-link-here-5"
    }
];

const CertificationsClient = () => {
    const router = useRouter();

    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-6 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 font-black tracking-widest px-6 py-2 uppercase text-[10px]">
                        Global Certification Hub
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8 uppercase">
                        Triple <span className="text-[#1F4037] dark:text-emerald-500 underline underline-offset-8">Certification</span> <br />Standard
                    </h1>

                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                        Every professional track at GK Institute comes with three distinct layers of validation to ensure your skills are recognized globally.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="marigold" size="lg" className="px-12 py-4 font-black shadow-2xl" onClick={() => document.getElementById('gki-cert')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explore GK Institute Standards
                        </Button>
                    </div>
                </div>
            </section>

            {/* Tools & Technologies Ticker */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-y border-slate-100 dark:border-slate-800 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <p className="text-center text-slate-400 dark:text-slate-500 mb-8 font-medium text-[10px] tracking-[0.3em] uppercase">Tools & Technologies We Master</p>

                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll">
                            {toolsLogos.map((logo) => (
                                <li key={logo.id} className="transition-all cursor-default flex flex-col items-center gap-2 group">
                                    <Logo
                                        src={logo.image}
                                        name={logo.name}
                                        width={120}
                                        height={48}
                                        className="h-14 md:h-16 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                    />
                                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {toolsLogos.map((logo) => (
                                <li key={`${logo.id}-duplicate`} className="transition-all cursor-default flex flex-col items-center gap-2 group">
                                    <Logo
                                        src={logo.image}
                                        name={logo.name}
                                        width={120}
                                        height={48}
                                        className="h-14 md:h-16 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                    />
                                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 1: GKWebTech Certification */}
            <section id="gki-cert" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-[#1F4037] text-white text-[10px] font-black uppercase tracking-widest">
                                Tier 1: Core Competency
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                                GKWebTech Professional <br /><span className="text-[#1F4037] dark:text-emerald-500">Certificate</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Our primary certification validates your hands-on proficiency in the GK Agency Workspace. It proves you can deliver client-ready work under industry pressure.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Project-based assessment model",
                                    "Validated by senior agency leads",
                                    "Unique verifiable ID for employers",
                                    "QR-code enabled for instant verification"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-[#1F4037] text-white flex items-center justify-center flex-shrink-0"><Icons.Check className="w-4 h-4" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative group">
                            <GKCertificate
                                imageUrl={cld("certificate_pxtref", 800, 566)}
                                className="transform hover:-rotate-1 transition-transform"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Online Platform Certification */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                            Tier 2: Platform Credentials
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase mb-6">
                            Online Platform <span className="text-blue-600">Partnerships</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            We integrate with leading learning platforms like Udemy and Coursera to provide additional credentials that bolster your LinkedIn profile.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { platform: "Udemy Professional", title: "Web Development Bootcamp", logo: certificationLogos.find(l => l.name === "Udemy")?.image || "" },
                            { platform: "Coursera Guided", title: "Google Analytics Specialization", logo: certificationLogos.find(l => l.name === "Coursera")?.image || "" },
                            { platform: "HubSpot Academy", title: "Content Marketing Mastery", logo: certificationLogos.find(l => l.name === "HubSpot")?.image || "" }
                        ].map((item, i) => (
                            <Card key={i} className="p-8 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group bg-slate-50 dark:bg-slate-900/50">
                                <Logo src={item.logo} name={item.platform} width={120} height={48} className="h-10 mb-6 transition-all transform group-hover:scale-110" />
                                <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{item.platform}</h4>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-4">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Standard platform-issued completion badge included in our curriculum bundle.</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Optional External Certification */}
            <section className="py-24 bg-[#1F4037] text-white transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { name: "Google Ads", logo: certificationLogos.find(l => l.name === "Google")?.image || "" },
                                    { name: "Meta", logo: certificationLogos.find(l => l.name === "Meta")?.image || "" },
                                    { name: "HubSpot", logo: certificationLogos.find(l => l.name === "HubSpot")?.image || "" },
                                    { name: "Harvard CS50", logo: certificationLogos.find(l => l.name === "Harvard CS50")?.image || "" }
                                ].map((brand, i) => (
                                    <div key={i} className="bg-white backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-all cursor-pointer">
                                        <Logo src={brand.logo} name={brand.name} width={80} height={32} className="h-8 mb-4 transition-transform group-hover:scale-110" />
                                        <span className="text-[10px] text-black font-black uppercase tracking-widest group-hover:text-[#1F4037]">{brand.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-[#FDB827] text-[#1F4037] text-[10px] font-black uppercase tracking-widest">
                                Tier 3: Industry Authorities
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase">
                                External Global <br /><span className="text-[#FDB827]">Endorsements</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed">
                                Our curriculum is aligned with global certification exams from Google, Meta, and top-tier universities. We provide the prep materials needed to clear these high-stakes exams.
                            </p>
                            <Button variant="marigold" size="lg" className="px-12 py-4">
                                View Exam Prep Tracks
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Portfolio Showcase */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-16">
                        <Badge variant="default" className="mb-4">Student Work</Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            Portfolio <span className="text-[#1F4037] dark:text-emerald-500">Showcase</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
                            Real projects built by our students during their Agency Workspace internship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PORTFOLIO_PROJECTS.map((project, idx) => (
                            <a
                                key={idx}
                                href={project.driveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 aspect-[4/5] cursor-pointer block"
                            >
                                <MediaImage
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* View Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                        <Icons.ExternalLink className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 mb-3 text-[8px] px-2 py-0">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-lg font-black text-white mb-2 leading-tight">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-300 font-bold uppercase tracking-widest text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span>By {project.student}</span>
                                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                                        <span className="text-emerald-400">View Project →</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="py-24 bg-[#1F4037] transition-colors duration-300 z-20 relative border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge variant="default" className="bg-[#FDB827] text-[#1F4037] font-black border-none px-6 py-2 uppercase tracking-widest text-[10px]">Contact Us</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
                                Questions About <br /><span className="text-[#FDB827]">Our Standards?</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                                Our academic advisors can explain how our triple-certification model works and which track is best for your career goals.
                            </p>
                            <div className="pt-6 flex flex-wrap gap-4">
                                <Button
                                    variant="marigold"
                                    size="lg"
                                    className="px-12 py-4"
                                    onClick={() => router.push('/contact')}
                                >
                                    Talk to an Advisor
                                </Button>
                            </div>
                        </div>
                        <div className="relative group block">
                            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl"></div>
                            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                <MediaImage
                                    src="/images/about_us_hero.png"
                                    alt="Contact GK Institute"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CertificationsClient;
