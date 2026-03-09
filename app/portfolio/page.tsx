import { students } from '@/data/students';
import { StudentCard } from '@/components/portfolio/StudentCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Portfolio Directory | GK Institute',
    description: 'Explore the amazing work and professional profiles of our talented students specializing in Web Tech, AI, and Digital Marketing.',
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F4037] dark:text-white mb-6 tracking-tight">
                        Student Portfolio Directory
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto">
                        Explore the diverse range of projects and professional profiles from our talented graduates. Our students work on real-world briefs in an agency-simulated environment.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {students.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {students.map((student) => (
                                <StudentCard key={student.slug} student={student} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="text-4xl mb-4 block">👋</span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Portfolios Found</h3>
                            <p className="text-slate-600 dark:text-slate-400">Our students are busy building amazing things. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-brand-600 dark:bg-brand-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Are you an Employer?</h2>
                        <p className="text-white/80 mb-8 text-lg">
                            Our students are trained in an agency workspace model, making them job-ready from day one. Contact us to hire our top talent.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Partner with Us
                        </a>
                    </div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
                </div>
            </section>
        </main>
    );
}
