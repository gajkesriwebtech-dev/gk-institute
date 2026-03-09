import React from 'react';

interface SkillBadgeProps {
    skill: string;
    className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className = "" }) => {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-100 dark:border-brand-800 shadow-sm transition-all hover:scale-105 ${className}`}>
            {skill}
        </span>
    );
};
