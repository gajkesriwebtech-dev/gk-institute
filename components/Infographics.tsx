
import React, { useEffect, useState } from 'react';
import { Badge, Icons } from './ui';

// --- How It Works Infographic ---
export const ProcessFlow: React.FC<{ steps: { step: string; title: string; desc: string }[] }> = ({ steps }) => {
   return (
      <div className="relative py-12">
         {/* Connecting Line (Desktop) */}
         <div className="hidden md:block absolute top-[6.5rem] left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>

         <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
               <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Step Circle */}
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-200 dark:border-brand-800 flex items-center justify-center mb-6 shadow-premium group-hover:border-brand-500 group-hover:scale-110 transition-all duration-300 relative z-10">
                     <span className="text-2xl font-black text-slate-300 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {item.step}
                     </span>

                     {/* Pulsing Ring on Hover */}
                     <div className="absolute inset-0 rounded-full border-2 border-brand-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                     {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-2">
                     {item.desc}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

// --- Career Growth Chart Infographic ---
export const GrowthChart: React.FC = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="relative w-full aspect-[16/10] md:aspect-[2/1] bg-slate-900 rounded-3xl p-6 md:p-10 overflow-hidden border border-slate-800 shadow-2xl group ring-1 ring-white/10">

         {/* Background Grid */}
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
               <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-600" />
                  </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>

         {/* Ambient Glows */}
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]"></div>
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

         <div className="relative h-full flex flex-col justify-end pb-8 pl-8 border-l border-b border-slate-700/50">

            {/* Axis Labels */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 font-bold uppercase tracking-widest -rotate-90">Career Value / Salary</div>
            <div className="absolute right-0 -bottom-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Time (Months)</div>

            {/* SVG Chart Area */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none overflow-visible" viewBox="0 0 1000 400" preserveAspectRatio="none">
               <defs>
                  <linearGradient id="gkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal-400 */}
                     <stop offset="50%" stopColor="#0d9488" /> {/* Teal-600 */}
                     <stop offset="100%" stopColor="#f59e0b" /> {/* Amber-500 */}
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                     <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                  </linearGradient>
                  <filter id="lineGlow">
                     <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                     <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                     </feMerge>
                  </filter>
               </defs>

               {/* Line 1: Traditional (Flat/Linear) */}
               <path
                  d="M 0 350 L 1000 250"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  className="opacity-50"
               />
               <text x="850" y="240" fill="#64748b" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Traditional Path</text>

               {/* Line 2: GK Institute (Exponential) */}
               {/* Area under curve */}
               <path
                  d="M 0 350 C 300 350, 500 300, 1000 50 L 1000 400 L 0 400 Z"
                  fill="url(#areaGradient)"
                  className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
               />

               {/* The Curve */}
               <path
                  d="M 0 350 C 300 350, 500 300, 1000 50"
                  fill="none"
                  stroke="url(#gkGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#lineGlow)"
                  strokeDasharray="1100"
                  strokeDashoffset={isVisible ? "0" : "1100"}
                  className="transition-[stroke-dashoffset] duration-[2000ms] ease-out"
               />
            </svg>

            {/* Interactive Data Points */}
            <div className={`absolute inset-0 transition-opacity duration-1000 delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

               {/* Point 1: Foundations */}
               <div className="absolute left-[30%] top-[80%] group/point">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-2 border-brand-400 rounded-full cursor-pointer hover:scale-150 transition-transform z-20"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-slate-800 border border-slate-700 p-2 rounded-lg shadow-xl text-center opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none z-30">
                     <div className="text-[10px] text-brand-400 font-bold uppercase mb-1">Month 2</div>
                     <div className="text-xs text-white font-bold">Project Fundamentals</div>
                  </div>
               </div>

               {/* Point 2: First Live Project */}
               <div className="absolute left-[60%] top-[55%] group/point">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-brand-500 border-4 border-slate-900 rounded-full cursor-pointer hover:scale-125 transition-transform shadow-[0_0_15px_rgba(20,184,166,0.5)] z-20"></div>
                  {/* Vertical Drop Line */}
                  <div className="absolute top-0 bottom-[-180px] w-px bg-brand-500/20 left-0 -translate-x-1/2 border-dashed border-l border-brand-500/30"></div>

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-slate-800 border border-slate-700 p-3 rounded-lg shadow-xl text-center z-30">
                     <div className="text-[10px] text-brand-400 font-bold uppercase mb-1">Month 4</div>
                     <div className="text-xs text-white font-bold">First Real Client Project</div>
                     <div className="text-[10px] text-slate-400 mt-1">Value exceeds traditional grad</div>
                  </div>
               </div>

               {/* Point 3: Job Ready */}
               <div className="absolute right-[2%] top-[12%] group/point">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amber-500 border-4 border-slate-900 rounded-full cursor-pointer animate-pulse z-20 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                     <div className="w-full h-full flex items-center justify-center text-slate-900 text-[10px]">🚀</div>
                  </div>
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-30">
                     <div className="text-xs font-black uppercase tracking-wide">Hired Senior Role</div>
                     <div className="text-[10px] font-medium opacity-80">Salary: Top 10%</div>
                  </div>
               </div>

            </div>

         </div>

         <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 pointer-events-none">
            <Badge color="green" className="mb-2 backdrop-blur-md bg-brand-900/50 border-brand-500/30 text-brand-300">Outcomes Data</Badge>
            <h3 className="text-white font-bold text-lg md:text-2xl leading-tight">The "Experience" Gap</h3>
            <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-xs">Traditional degrees offer linear growth. <br />Real-world projects offer exponential value.</p>
         </div>
      </div>
   );
}

// --- Success Pathway Hexagonal Infographic ---
export const SuccessPathway: React.FC = () => {
   const cards = [
      {
         title: "Career Counseling",
         desc: "Our expert counselors guide you to choose the right career path based on your skills and interests.",
         icon: <Icons.User className="w-6 h-6" />,
         color: "border-red-500",
         bg: "bg-red-50 dark:bg-red-900/20",
         iconBg: "bg-red-500",
         position: "left-top"
      },
      {
         title: "Portfolio Building",
         desc: "Develop a professional portfolio that reflects your talent. Present your best projects to impress recruiters.",
         icon: <Icons.Code className="w-6 h-6" />,
         color: "border-red-500",
         bg: "bg-red-50 dark:bg-red-900/20",
         iconBg: "bg-red-500",
         position: "right-top"
      },
      {
         title: "Expert Support",
         desc: "Get continuous guidance from experienced mentors who help you at every step of your learning journey.",
         icon: <Icons.HelpCircle className="w-6 h-6" />,
         color: "border-teal-500",
         bg: "bg-teal-50 dark:bg-teal-900/20",
         iconBg: "bg-teal-500",
         position: "left-mid"
      },
      {
         title: "Interview Sessions",
         desc: "Prepare for success with our practical interview sessions. Improve your communication and boost your confidence.",
         icon: <Icons.MessageCircle className="w-6 h-6" />,
         color: "border-teal-500",
         bg: "bg-teal-50 dark:bg-teal-900/20",
         iconBg: "bg-teal-500",
         position: "right-mid"
      },
      {
         title: "Doubt Session",
         desc: "Attend dedicated doubt-clearing sessions with our expert trainers. Get personalized explanations.",
         icon: <Icons.HelpCircle className="w-6 h-6" />,
         color: "border-amber-500",
         bg: "bg-amber-50 dark:bg-amber-900/20",
         iconBg: "bg-amber-500",
         position: "left-bot"
      },
      {
         title: "Get Job",
         desc: "Turn your skills into success with our 100% placement support. Connect with top companies.",
         icon: <Icons.Star className="w-6 h-6" />,
         color: "border-amber-500",
         bg: "bg-amber-50 dark:bg-amber-900/20",
         iconBg: "bg-amber-500",
         position: "right-bot"
      },
   ];

   return (
      <div className="relative w-full max-w-6xl mx-auto py-12 px-4">
         {/* Central Connector Lines (Desktop Only) */}
         <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
               {/* Center X: 500, Center Y: 300 */}
               {/* Top Left */}
               <path d="M 280 120 L 420 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
               {/* Top Right */}
               <path d="M 720 120 L 580 220" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
               {/* Mid Left */}
               <path d="M 280 300 L 420 300" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
               {/* Mid Right */}
               <path d="M 720 300 L 580 300" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
               {/* Bot Left */}
               <path d="M 280 480 L 420 380" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
               {/* Bot Right */}
               <path d="M 720 480 L 580 380" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,6" className="opacity-30" />
            </svg>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">

            {/* Left Column */}
            <div className="space-y-8 flex flex-col justify-center">
               <PathwayCard data={cards[0]} align="left" />
               <PathwayCard data={cards[2]} align="left" />
               <PathwayCard data={cards[4]} align="left" />
            </div>

            {/* Center Column: The Hexagon */}
            <div className="flex justify-center py-12 lg:py-0">
               <div className="relative w-64 h-64 md:w-72 md:h-72">
                  {/* Hexagon Shape CSS */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 clip-hexagon shadow-2xl border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center z-20">
                     <div className="text-center p-6">
                        <span className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 block mb-1">The</span>
                        <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none font-sans">Success</span>
                        <span className="text-lg text-slate-600 dark:text-slate-300 uppercase tracking-widest font-medium mt-1 block">Pathway</span>
                        <div className="w-16 h-1 bg-gradient-to-r from-red-500 via-teal-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
                     </div>
                  </div>

                  {/* Outer Dashed Hexagon */}
                  <div className="absolute -inset-4 border-2 border-dashed border-slate-300 dark:border-slate-700 clip-hexagon z-10 animate-spin-slow"></div>
               </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 flex flex-col justify-center">
               <PathwayCard data={cards[1]} align="right" />
               <PathwayCard data={cards[3]} align="right" />
               <PathwayCard data={cards[5]} align="right" />
            </div>

         </div>
      </div>
   );
};

// Internal Helper for Cards
const PathwayCard = ({ data, align }: { data: any, align: 'left' | 'right' }) => (
   <div className={`relative flex items-center group ${align === 'right' ? 'flex-row-reverse lg:flex-row' : ''}`}>
      <div className={`
         flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-premium border-2 border-brand-100 dark:border-brand-900/50 border-l-4 
         ${data.color} ${align === 'left' ? 'lg:mr-8' : 'lg:ml-8'}
         transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden
      `}>
         {/* Background tint */}
         <div className={`absolute inset-0 opacity-30 ${data.bg} transition-opacity group-hover:opacity-50`}></div>

         <div className="relative z-10 flex items-start gap-4">
            {align === 'left' ? (
               <>
                  <div className="flex-1 text-right">
                     <h4 className={`font-bold text-slate-900 dark:text-white mb-2 text-lg`}>{data.title}</h4>
                     <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{data.desc}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shrink-0 ${data.iconBg} transform group-hover:scale-110 transition-transform`}>
                     {data.icon}
                  </div>
               </>
            ) : (
               <>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shrink-0 ${data.iconBg} transform group-hover:scale-110 transition-transform`}>
                     {data.icon}
                  </div>
                  <div className="flex-1 text-left">
                     <h4 className={`font-bold text-slate-900 dark:text-white mb-2 text-lg`}>{data.title}</h4>
                     <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{data.desc}</p>
                  </div>
               </>
            )}
         </div>
      </div>

      {/* Mobile Connector Dot (Hidden on Desktop because we use SVG) */}
      <div className="lg:hidden absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-300 rounded-full -z-10 left-1/2 -translate-x-1/2"></div>
   </div>
);
