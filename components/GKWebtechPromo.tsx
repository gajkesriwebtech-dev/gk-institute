
import React from 'react';
import { cld, FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';

export const GKWebtechPromo: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-100 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300 dark:border-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              Official Growth Partner
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary-500 dark:text-secondary-500 tracking-tight leading-[1.15]">
              GKWebTech,<span className="text-black dark:text-white">Digital Marketing Agency With Global Presence.</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We are an experienced Digital Marketing Agency helping brands scale with data-driven strategies, SEO, and creative campaigns.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2">
              <a
                href="https://gkwebtech.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 dark:focus:ring-offset-slate-900"
                aria-label="Visit GKWebtech Website"
              >
                <span>Visit GKWebtech</span>
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">👉</span>
                Explore services & portfolio
              </span>
            </div>

            {/* Quick Services List */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Full-Stack Dev</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Digital Marketing</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Cloud Solutions</span>
            </div>
          </div>

          {/* Right Column: Visual & Mascot */}
          <div className="order-1 lg:order-2 relative mx-auto lg:mx-0 w-full max-w-lg">
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 group">
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay z-10"></div>
              <img
                src="/images/gkwebtech_agency_team.png"
                alt="GKWebtech Professional Team"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Floating "Robot/Tech" Mascot Card */}
              <div className="absolute -bottom-6 -left-6 z-20 animate-float">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-premium border-2 border-brand-200 dark:border-brand-900/50 flex items-center gap-4 pr-8">
                  <div className="w-12 h-12 bg-gradient-to-tr from-brand-500 to-secondary-500 rounded-lg flex items-center justify-center text-2xl shadow-lg">
                    🤖
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-0.5">Automated</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">Growth Engine</div>
                  </div>
                </div>
              </div>

              {/* Decorative Stats Card */}
              <div className="absolute top-6 right-6 z-20 animate-float-delayed">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-premium border-2 border-brand-200 dark:border-slate-700">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">300%</span>
                  <span className="text-xs text-slate-500 block">ROI Increase</span>
                </div>
              </div>
            </div>

            {/* Background Blob behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100 to-secondary-100 dark:from-brand-900/40 dark:to-secondary-900/40 rounded-full blur-3xl opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
