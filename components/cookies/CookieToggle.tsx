"use client";

import React from 'react';

interface CookieToggleProps {
    id: string;
    label: string;
    description: string;
    enabled: boolean;
    disabled?: boolean;
    onChange?: (enabled: boolean) => void;
}

export const CookieToggle: React.FC<CookieToggleProps> = ({
    id,
    label,
    description,
    enabled,
    disabled = false,
    onChange,
}) => {
    return (
        <div className="flex items-start justify-between gap-4 py-4 border-b border-slate-100 dark:border-slate-800 last:border-0">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <label
                        htmlFor={id}
                        className={`text-sm font-bold ${disabled ? 'text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'} cursor-pointer`}
                    >
                        {label}
                    </label>
                    {disabled && (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#1F4037]/10 text-[#1F4037] dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                            Always On
                        </span>
                    )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
            </div>

            {/* Toggle Switch */}
            <button
                id={id}
                role="switch"
                aria-checked={enabled}
                aria-label={`Toggle ${label}`}
                disabled={disabled}
                onClick={() => !disabled && onChange?.(!enabled)}
                className={`
                    relative flex-shrink-0 w-11 h-6 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F4037] dark:focus:ring-emerald-500
                    ${disabled
                        ? 'bg-[#1F4037]/40 cursor-not-allowed'
                        : enabled
                            ? 'bg-[#1F4037] dark:bg-emerald-600 cursor-pointer'
                            : 'bg-slate-200 dark:bg-slate-700 cursor-pointer'
                    }
                `}
            >
                <span
                    className={`
                        absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200
                        ${enabled ? 'translate-x-5' : 'translate-x-0'}
                    `}
                />
            </button>
        </div>
    );
};
