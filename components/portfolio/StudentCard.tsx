import { Student } from '@/data/students';
import Image from 'next/image';
import Link from 'next/link';
import { SkillBadge } from '@/components/portfolio/SkillBadge';
import { Card } from '@/components/ui';

interface StudentCardProps {
    student: Student;
}

const ChevronRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
    return (
        <Link href={`/students/${student.slug}`} className="block group">
            <Card className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 group-hover:border-[#1F4037] dark:group-hover:border-emerald-600 transition-all duration-300 shadow-sm group-hover:shadow-2xl rounded-3xl">
                {/* Circular Photo */}
                <div className="relative w-28 h-28 mb-5 flex-shrink-0">
                    <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-[#FDB827] transition-all duration-300 shadow-lg">
                        <Image
                            src={student.photo}
                            alt={student.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Online dot */}
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#1F4037] dark:group-hover:text-emerald-400 transition-colors">
                    {student.name}
                </h3>

                {/* Course */}
                <p className="text-sm font-bold text-[#1F4037] dark:text-emerald-500 mt-1 mb-4">
                    {student.course}
                </p>

                {/* Top Skills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                    {student.skills.slice(0, 4).map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} className="bg-slate-50 dark:bg-slate-800 text-[10px]" />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2 flex items-center justify-center gap-2 text-sm font-black text-slate-400 group-hover:text-[#1F4037] dark:group-hover:text-emerald-400 transition-colors uppercase tracking-widest">
                    View Portfolio <ChevronRightIcon />
                </div>
            </Card>
        </Link>
    );
};
