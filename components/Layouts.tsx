"use client";

import React, { useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GKCertificate } from './GKCertificate';
import { Button, Icons, BrandLogo, Badge } from './ui';
import { NavItem } from '../types';
import AnnouncementBar from './AnnouncementBar';
import { EduBot } from './EduBot';
import ScrollToTopButton from './ScrollToTopButton';
import { NAVBAR_LINKS, MOCK_BLOGS } from '../constants';
import { COURSES } from '../data/courses';
import { SITE_CONFIG } from '../data/site';
import type { Course } from '../data/courses';
import { FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';

import { useTheme } from '../context/ThemeContext';

// --- Theme Toggle Button ---
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
    </button>
  );
};


// --- Generic Mega Menu Container ---
const MegaMenuContainer: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div
        className="absolute top-full left-0 right-0 z-50 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-2xl animate-fade-in origin-top overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 transition-all"
          >
            <Icons.X />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

// --- Courses Mega Menu Content ---
const CoursesMegaMenuContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter()

  const handleNavigate = (path: string) => {
    onClose()
    router.push(path)
  }

  // Popular Courses (Manual selection)
  const popularCourses = COURSES.filter(c => [
    "mern-stack-mastery", "digital-marketing-techniques", "graphic-design",
    "basic-computer-skills", "video-editing-advanced", "photography-skills",
    "n8n-smart-automation", "ui-and-ux-designing"
  ].includes(c.slug))

  // Grouping categories
  const categories = [
    { title: "Tech & Development", icon: "💻", courses: COURSES.filter(c => c.category === "Technology & Development").slice(0, 3), catId: "technology-development" },
    { title: "AI & Automation", icon: "🤖", courses: COURSES.filter(c => c.category === "AI & Automation").slice(0, 3), catId: "ai-automation" },
    { title: "Marketing & Business", icon: "🚀", courses: COURSES.filter(c => c.category === "Digital Marketing & Online Business").slice(0, 3), catId: "digital-marketing" },
    { title: "Finance & Banking", icon: "💰", courses: COURSES.filter(c => c.category === "Finance & Banking").slice(0, 3), catId: "finance-banking" },
    { title: "Creative & Design", icon: "🎨", courses: COURSES.filter(c => c.category === "Creative & Design").slice(0, 3), catId: "creative-design" },
    { title: "Foundational Skills", icon: "🎯", courses: COURSES.filter(c => c.category === "Foundational & Career Skills").slice(0, 3), catId: "foundational-skills" }
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-12">
        {/* Popular Courses Column */}
        <div className="md:border-r border-slate-100 dark:border-slate-800 md:pr-12">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-xl">🔥</span>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">
              Popular Courses
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            {popularCourses.map(course => (
              <button
                key={course.id}
                onClick={() => handleNavigate(`/courses/${course.slug}`)}
                className="group flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1F4037] dark:hover:text-white transition-all text-left font-bold"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-[#FDB827] transition-colors"></div>
                {course.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Columns */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">
                    {cat.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-y-3 flex-1">
                  {cat.courses.map(course => (
                    <button
                      key={course.id}
                      onClick={() => handleNavigate(`/courses/${course.slug}`)}
                      className="group flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1F4037] dark:hover:text-white transition-all text-left font-bold"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-[#FDB827] transition-colors"></div>
                      {course.title}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleNavigate(`/courses#${cat.catId}`)}
                  className="text-[10px] font-black text-[#1F4037] dark:text-emerald-500 uppercase tracking-widest mt-4 hover:underline text-left flex items-center gap-1 group"
                >
                  View More <Icons.ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Button variant="marigold" size="lg" className="px-16 font-black shadow-2xl" onClick={() => handleNavigate('/courses')}>
          View All 30+ Courses <Icons.ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

// --- Resources Mega Menu Content ---
const ResourcesMegaMenuContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  const resourceLinks = [
    {
      label: 'Agency Blog',
      href: '/blog',
      description: 'Stay ahead with industry insights, tutorials, and career advice.',
      icon: <Icons.BookOpen className="w-5 h-5" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      label: 'Micro-Lessons',
      href: '/micro-lessons',
      description: 'Bite-sized technical workshops and rapid skill-building gems.',
      icon: <Icons.PlayCircle className="w-5 h-5" />,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      isNew: true
    },
    {
      label: 'Free Ebooks',
      href: '/ebooks',
      description: 'Deep-dive guides and playbooks to accelerate your journey.',
      icon: <Icons.FileText className="w-5 h-5" />,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resourceLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavigate(link.href)}
            className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-xl group relative overflow-hidden text-left"
          >
            {/* Animated background decoration */}
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 ${link.bgColor} scale-0 group-hover:scale-150`}></div>

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${link.bgColor} ${link.color}`}>
              {link.icon}
            </div>

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest group-hover:text-[#1F4037] dark:group-hover:text-emerald-400 transition-colors">
                  {link.label}
                </span>
                {link.isNew && (
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter animate-pulse">
                    New
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                {link.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                Explore <Icons.ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};



// --- REDESIGNED FOOTER ---
const Footer: React.FC = () => {
  const router = useRouter();
  const navigate = (path: string) => router.push(path);

  // Group courses by category for the footer
  const coursesByCategory = COURSES.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  const categories = Object.keys(coursesByCategory);

  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-200 z-10 relative dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* BRAND & CONTACT COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            <div className="cursor-pointer" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <BrandLogo className="scale-125 origin-left" />
            </div>
            <p className="text-base leading-relaxed max-w-sm">
              We bridge the gap between traditional education and industry requirements.
              A hybrid digital agency and training institute building the future workforce through project-based learning.
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 pt-4">
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-4 text-sm group cursor-pointer" onClick={() => window.open(`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`)}>
                  <span className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#1F4037] dark:text-emerald-500 group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <Icons.Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Call Us</p>
                    <span className="font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#1F4037] dark:group-hover:text-emerald-400 transition-colors">{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm group cursor-pointer" onClick={() => window.open(`mailto:${SITE_CONFIG.contact.email}`)}>
                  <span className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#1F4037] dark:text-emerald-500 group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <Icons.Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Email Us</p>
                    <span className="font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#1F4037] dark:group-hover:text-emerald-400 transition-colors uppercase">{SITE_CONFIG.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm group">
                  <span className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#1F4037] dark:text-emerald-500 group-hover:bg-[#1F4037] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <Icons.MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Visit Us</p>
                    <span className="font-bold text-slate-900 dark:text-slate-200 block max-w-[250px]">{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with better styling */}
            <div className="flex gap-3 pt-6">
              {[
                { icon: Icons.Twitter, color: '#1DA1F2', label: 'Twitter', href: SITE_CONFIG.social.twitter },
                { icon: Icons.LinkedIn, color: '#0077B5', label: 'LinkedIn', href: SITE_CONFIG.social.linkedin },
                { icon: Icons.Instagram, color: '#E4405F', label: 'Instagram', href: SITE_CONFIG.social.instagram },
                { icon: Icons.YouTube, color: '#FF0000', label: 'YouTube', href: SITE_CONFIG.social.youtube }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:scale-110 hover:bg-[#1F4037] transition-all duration-300 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* QUICK LINKS SECTION (Moved here for space) */}
            <div className="pt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Institute</h4>
                <ul className="space-y-3 text-sm font-bold">
                  <li><button onClick={() => navigate('/about')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={() => navigate('/partners')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Partners</button></li>
                  <li><button onClick={() => navigate('/contact')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Contact</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
                <ul className="space-y-3 text-sm font-bold">
                  <li><button onClick={() => navigate('/privacy-policy')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Privacy Policy</button></li>
                  <li><button onClick={() => navigate('/terms')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Terms of Service</button></li>
                  <li><button onClick={() => navigate('/policies')} className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Institute Policies</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* DYNAMIC COURSE DIRECTORY (MEGA FOOTER) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] text-xs">Course Directory</h4>
              <Badge color="green" className="animate-pulse">Live Enrollment Open</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {categories.map(cat => (
                <div key={cat} className="space-y-4">
                  <h5 className="text-[11px] font-black text-[#1F4037] dark:text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F4037] dark:bg-emerald-500"></span>
                    {cat}
                  </h5>
                  <ul className="space-y-2.5">
                    {coursesByCategory[cat].map(course => (
                      <li key={course.id}>
                        <button
                          onClick={() => navigate(`/courses/${course.slug}`)}
                          className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-[#1F4037] dark:hover:text-white transition-all text-left flex items-start group"
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 mt-2 mr-2 group-hover:bg-[#1F4037] dark:group-hover:bg-emerald-500 transition-colors"></span>
                          <span className="flex-1">{course.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-xs font-bold text-slate-400">
            <span className="text-slate-500">© 2026 GK Institute. Built for the future.</span>
            <button onClick={() => navigate('/policies')} className="hover:text-[#1F4037] dark:hover:text-white transition-colors">Institute Policies</button>
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-[#1F4037] dark:hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-[#1F4037] dark:hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => navigate('/sitemap')} className="hover:text-[#1F4037] dark:hover:text-white transition-colors">Sitemap</button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">LMS Online & Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Public Layout ---
export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'courses' | 'resources' | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const router = useRouter();
  const navigate = (path: string) => router.push(path);
  const pathname = usePathname();

  const handleNavClick = (label: string, href?: string) => {
    if (label === 'Courses' || label === 'Resources') {
      const menu = label.toLowerCase() as 'courses' | 'resources';
      setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
      return;
    }

    if (!href || href === '#') return;
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Helper for grouping categories (consistent with Mega Menu)
  const groupedCategories = [
    { title: "Tech & Development", icon: "💻", courses: COURSES.filter(c => c.category === "Technology & Development").slice(0, 3), catId: "technology-development" },
    { title: "AI & Automation", icon: "🤖", courses: COURSES.filter(c => c.category === "AI & Automation").slice(0, 3), catId: "ai-automation" },
    { title: "Marketing & Business", icon: "🚀", courses: COURSES.filter(c => c.category === "Digital Marketing & Online Business").slice(0, 3), catId: "digital-marketing" },
    { title: "Finance & Banking", icon: "💰", courses: COURSES.filter(c => c.category === "Finance & Banking").slice(0, 3), catId: "finance-banking" },
    { title: "Creative & Design", icon: "🎨", courses: COURSES.filter(c => c.category === "Creative & Design").slice(0, 3), catId: "creative-design" },
    { title: "Foundational Skills", icon: "🎯", courses: COURSES.filter(c => c.category === "Foundational & Career Skills").slice(0, 3), catId: "foundational-skills" }
  ];

  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">

      {/* Global Announcement Strip */}
      <AnnouncementBar />

      {/* Global AI Chat Assistant */}
      <EduBot />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Top Bar - Simplified logic */}


      {/* Contact Information Bar */}
      <div className="bg-brand-900 dark:bg-black border-b border-slate-800 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-4">
            {/* Mobile Number */}
            <div className="flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg">
              <Icons.Phone className="w-4 h-4 text-secondary-400" />
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}
                className="text-sm hover:text-white transition-colors font-medium"
              >
                {SITE_CONFIG.contact.phone}
              </a>
            </div>

            <div className="bg-brand-900 dark:bg-black text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center relative z-50">
              <div className="max-w-7xl mx-auto flex justify-center items-center space-x-2 sm:space-x-4">
                <span className="opacity-90">🚀 New Certification Batches are now open for registration.</span>
                <button onClick={() => navigate('/courses')} className="text-secondary-400 hover:text-secondary-800 font-bold underline transition-colors">
                  View Catalog
                </button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`${SITE_CONFIG.contact.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20courses`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">Chat on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <BrandLogo />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8 items-center h-full">
              {NAVBAR_LINKS.map((link) => {
                const isMegaMenuTrigger = link.label === 'Courses' || link.label === 'Resources';
                const isActive = pathname === link.href || (isMegaMenuTrigger && activeMegaMenu === link.label.toLowerCase());

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.label, link.href)}
                    className={`text-slate-600 dark:text-slate-300 hover:text-[#1F4037] dark:hover:text-white font-black px-1 py-2 text-sm transition-all relative group bg-transparent border-none cursor-pointer h-full flex items-center ${isActive ? 'text-[#1F4037] dark:text-white' : ''}`}
                  >
                    {link.label}
                    {isMegaMenuTrigger && (
                      <span className={`ml-1 text-xs opacity-70 transition-transform ${activeMegaMenu === link.label.toLowerCase() ? 'rotate-180' : ''}`}>
                        <Icons.ChevronDown />
                      </span>
                    )}
                    <span className={`absolute bottom-5 left-0 h-0.5 bg-[#FDB827] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                )
              })}
            </nav>

            {/* Right Actions - REMOVED AUTH LINKS */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="marigold" size="sm" onClick={() => navigate('/courses')}>Explore Courses</Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-2">
                {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menus */}
        <MegaMenuContainer
          isOpen={activeMegaMenu !== null}
          onClose={() => setActiveMegaMenu(null)}
        >
          {activeMegaMenu === 'courses' && <CoursesMegaMenuContent onClose={() => setActiveMegaMenu(null)} />}
          {activeMegaMenu === 'resources' && <ResourcesMegaMenuContent onClose={() => setActiveMegaMenu(null)} />}
        </MegaMenuContainer>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 space-y-4 shadow-lg absolute top-full left-0 w-full z-50 max-h-[80vh] overflow-y-auto">
            {NAVBAR_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => setExpandedMobileCategory(expandedMobileCategory === link.label.toLowerCase() ? null : link.label.toLowerCase())}
                      className="flex justify-between items-center w-full px-2 py-1"
                    >
                      <div className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">{link.label}</div>
                      <Icons.ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileCategory === link.label.toLowerCase() ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedMobileCategory === link.label.toLowerCase() && (
                      <div className="pl-4 space-y-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 py-2">
                        {link.label === 'Courses' ? (
                          <div className="space-y-6">
                            {groupedCategories.map((cat) => (
                              <div key={cat.title} className="space-y-3">
                                <div className="flex items-center gap-2 text-[10px] font-black text-[#1F4037] dark:text-emerald-500 uppercase tracking-widest">
                                  <span>{cat.icon}</span> {cat.title}
                                </div>
                                <div className="grid grid-cols-1 gap-y-2">
                                  {cat.courses.map(course => (
                                    <button
                                      key={course.id}
                                      onClick={() => handleNavClick('Course', `/courses/${course.slug}`)}
                                      className="text-sm font-bold text-slate-600 dark:text-slate-400 text-left"
                                    >
                                      {course.title}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-y-3">
                            {link.children.map((child: any) => (
                              <button
                                key={child.label}
                                onClick={() => handleNavClick(child.label, child.href)}
                                className="text-sm font-bold text-slate-600 dark:text-slate-400 text-left"
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <button onClick={() => handleNavClick(link.label, link.href)} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-black py-1 px-2 text-sm uppercase tracking-wider">
                    {link.label}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button variant="marigold" className="w-full justify-center font-black uppercase tracking-widest text-xs py-4" onClick={() => navigate('/courses')}>
                Explore All Courses
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


