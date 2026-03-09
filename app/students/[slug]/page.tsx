import Image from 'next/image';
import { notFound } from 'next/navigation';
import { students } from '@/data/students';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { SkillBadge } from '@/components/portfolio/SkillBadge';
import { SocialLinks } from '@/components/portfolio/SocialLinks';
import { Card } from '@/components/ui';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Local icons to avoid build-time undefined issues from ui.tsx in Server Components
const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const DownloadIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

const CodeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const ServerIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const student = students.find((s) => s.slug === slug);
    if (!student) return { title: 'Student Not Found' };

    return {
        title: `${student.name} | Student Portfolio | GK Institute`,
        description: student.headline,
    };
}

export default async function StudentProfilePage({ params }: PageProps) {
    const { slug } = await params;
    const student = students.find((s) => s.slug === slug);

    if (!student) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-24">
            {/* Profile Header Section */}
            <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                        <div className="relative w-48 h-48 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shrink-0">
                            <Image
                                src={student.photo}
                                alt={student.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                        {student.name}
                                    </h1>
                                    <p className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-1">
                                        {student.course}
                                    </p>
                                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                                        {student.headline}
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                                    {student.github && (
                                        <a
                                            href={student.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-xl hover:opacity-80 transition-all shadow-lg active:scale-95"
                                        >
                                            <GithubIcon />
                                            View GitHub
                                        </a>
                                    )}
                                    {student.resume && (
                                        <a
                                            href={student.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg active:scale-95"
                                        >
                                            <DownloadIcon />
                                            Download Resume
                                        </a>
                                    )}
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 border-2 border-slate-100 dark:bg-slate-800 dark:text-white dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm active:scale-95"
                                    >
                                        <MailIcon />
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {student.skills.map((skill, idx) => (
                                    <SkillBadge key={idx} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                                    <UserIcon />
                                </span>
                                About Me
                            </h2>
                            <Card className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {student.about}
                            </Card>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                                    <GlobeIcon />
                                </span>
                                Find Me On
                            </h2>
                            <Card className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                                <SocialLinks
                                    github={student.github}
                                    linkedin={student.linkedin}
                                    behance={student.behance}
                                    className="justify-around"
                                />
                            </Card>
                        </section>
                    </div>

                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                                    <CodeIcon />
                                </span>
                                Featured Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {student.projects.map((project, idx) => (
                                    <ProjectCard key={idx} project={project} />
                                ))}
                            </div>
                        </section>

                        {student.automations && student.automations.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                                        <ServerIcon />
                                    </span>
                                    Work Samples & Automations
                                </h2>
                                <div className="space-y-4">
                                    {student.automations.map((item, idx) => (
                                        <Card
                                            key={idx}
                                            className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all flex flex-col md:flex-row justify-between items-center group relative overflow-hidden"
                                        >
                                            <div className="text-center md:text-left mb-4 md:mb-0 relative z-10">
                                                <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                                                    <span className="px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-900 text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                                                        {item.type}
                                                    </span>
                                                    <h3 className="font-bold text-slate-900 dark:text-white">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all shadow-sm active:scale-95 flex items-center gap-2 relative z-10"
                                            >
                                                View Sample
                                                <ExternalLinkIcon />
                                            </a>
                                            <div className="absolute inset-0 bg-brand-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
