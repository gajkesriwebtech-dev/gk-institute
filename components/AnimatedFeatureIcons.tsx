import React from 'react';

// Animated Icon Components with refined CSS animations

export const AnimatedPlacementIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes wave-hand {
                0%, 100% { transform: rotate(-5deg); }
                50% { transform: rotate(15deg); }
            }
            @keyframes float-gentle {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
            }
            .hand-wave { animation: wave-hand 1.5s ease-in-out infinite; transform-origin: bottom center; }
            .person-float { animation: float-gentle 3s ease-in-out infinite; }
        `}</style>
        <g className="person-float">
            <circle cx="32" cy="20" r="8" fill="#FDB827" />
            <path d="M32 28 L32 45 M32 32 L24 40 M32 32 L40 40" stroke="#FDB827" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className="hand-wave" style={{ transformOrigin: '32px 40px' }}>
            <path d="M28 50 Q32 48 36 50" stroke="#4F46E5" strokeWidth="2" fill="none" />
        </g>
    </svg>
);

export const AnimatedLaptopIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes laptop-lid {
                0%, 100% { transform: perspective(200px) rotateX(0deg); }
                50% { transform: perspective(200px) rotateX(-20deg); }
            }
            @keyframes screen-pulse {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 1; }
            }
            .laptop-top { animation: laptop-lid 3s ease-in-out infinite; transform-origin: bottom center; }
            .screen-glow { animation: screen-pulse 2s ease-in-out infinite; }
        `}</style>
        <rect x="10" y="40" width="44" height="4" rx="2" fill="#64748B" />
        <g className="laptop-top">
            <rect x="14" y="20" width="36" height="24" rx="2" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
            <rect className="screen-glow" x="18" y="24" width="28" height="16" fill="#FDB827" opacity="0.4" />
        </g>
    </svg>
);

export const AnimatedTeacherIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes point-move {
                0%, 100% { transform: translateX(0px); }
                50% { transform: translateX(5px); }
            }
            @keyframes board-highlight {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
            .pointer-arm { animation: point-move 2s ease-in-out infinite; }
            .board-content { animation: board-highlight 3s ease-in-out infinite; }
        `}</style>
        <rect x="35" y="15" width="20" height="15" rx="2" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
        <g className="board-content">
            <line x1="38" y1="20" x2="52" y2="20" stroke="#FDB827" strokeWidth="1.5" />
            <line x1="38" y1="24" x2="50" y2="24" stroke="#FDB827" strokeWidth="1.5" />
        </g>
        <g className="pointer-arm">
            <circle cx="20" cy="25" r="6" fill="#FDB827" />
            <path d="M20 31 L20 45 M20 35 L14 42 M20 35 L26 42" stroke="#FDB827" strokeWidth="2.5" strokeLinecap="round" />
        </g>
    </svg>
);

export const AnimatedCertificateIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes shine-sweep {
                0% { transform: translateX(-150%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(150%); opacity: 0; }
            }
            @keyframes ribbon-sway {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-2px) rotate(2deg); }
            }
            .shine-effect { animation: shine-sweep 3s ease-in-out infinite; }
            .ribbon-move { animation: ribbon-sway 2s ease-in-out infinite; transform-origin: top center; }
        `}</style>
        <rect x="15" y="18" width="34" height="28" rx="2" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
        <circle cx="32" cy="32" r="8" fill="#FDB827" opacity="0.3" />
        <path className="ribbon-move" d="M32 38 L28 50 L32 46 L36 50 Z" fill="#FDB827" />
        <rect className="shine-effect" x="15" y="18" width="8" height="28" fill="url(#shine-grad)" />
        <defs>
            <linearGradient id="shine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(253,184,39,0.6)" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
        </defs>
    </svg>
);

export const AnimatedSearchIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes search-move {
                0%, 100% { transform: translate(0, 0) rotate(-45deg); }
                50% { transform: translate(3px, 3px) rotate(-45deg); }
            }
            @keyframes ripple-expand {
                0% { r: 12; opacity: 0.5; }
                100% { r: 18; opacity: 0; }
            }
            .magnifier-handle { animation: search-move 2s ease-in-out infinite; transform-origin: center; }
        `}</style>
        <circle cx="28" cy="28" r="12" fill="none" stroke="#FDB827" strokeWidth="3" />
        <circle cx="28" cy="28" r="12" fill="none" stroke="#FDB827" strokeWidth="2" opacity="0.5">
            <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <g className="magnifier-handle">
            <line x1="37" y1="37" x2="45" y2="45" stroke="#FDB827" strokeWidth="3" strokeLinecap="round" />
        </g>
    </svg>
);

export const AnimatedBackupIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes cloud-float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-4px); }
            }
            @keyframes arrow-upload {
                0%, 100% { transform: translateY(0px); opacity: 1; }
                50% { transform: translateY(-6px); opacity: 0.5; }
            }
            .cloud-body { animation: cloud-float 3s ease-in-out infinite; }
            .upload-arrow { animation: arrow-upload 1.5s ease-in-out infinite; }
        `}</style>
        <g className="cloud-body">
            <path d="M32 25 Q28 20 24 22 Q20 24 22 28 Q18 28 18 32 Q18 36 22 36 L42 36 Q46 36 46 32 Q46 28 42 28 Q44 24 40 22 Q36 20 32 25 Z" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
        </g>
        <g className="upload-arrow">
            <path d="M32 42 L32 48 M28 44 L32 42 L36 44" stroke="#FDB827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);

export const AnimatedTeamIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes person-bounce-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
            @keyframes person-bounce-2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
            @keyframes person-bounce-3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2px); } }
            .person-1 { animation: person-bounce-1 2s ease-in-out infinite; }
            .person-2 { animation: person-bounce-2 2.2s ease-in-out infinite 0.2s; }
            .person-3 { animation: person-bounce-3 1.8s ease-in-out infinite 0.4s; }
        `}</style>
        <g className="person-1">
            <circle cx="22" cy="26" r="5" fill="#FDB827" />
            <path d="M22 31 L22 40 M22 34 L18 38 M22 34 L26 38" stroke="#FDB827" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="person-2">
            <circle cx="32" cy="24" r="6" fill="#FDB827" />
            <path d="M32 30 L32 42 M32 34 L27 40 M32 34 L37 40" stroke="#FDB827" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g className="person-3">
            <circle cx="42" cy="26" r="5" fill="#FDB827" />
            <path d="M42 31 L42 40 M42 34 L38 38 M42 34 L46 38" stroke="#FDB827" strokeWidth="2" strokeLinecap="round" />
        </g>
    </svg>
);

export const AnimatedProjectIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes bar-grow-1 { 0%, 100% { transform: scaleY(0.7); } 50% { transform: scaleY(1); } }
            @keyframes bar-grow-2 { 0%, 100% { transform: scaleY(0.8); } 50% { transform: scaleY(1); } }
            @keyframes bar-grow-3 { 0%, 100% { transform: scaleY(0.6); } 50% { transform: scaleY(1); } }
            @keyframes folder-slide {
                0%, 100% { transform: translateX(0px); }
                50% { transform: translateX(2px); }
            }
            .progress-bar-1 { animation: bar-grow-1 2s ease-in-out infinite; transform-origin: bottom; }
            .progress-bar-2 { animation: bar-grow-2 2s ease-in-out 0.3s infinite; transform-origin: bottom; }
            .progress-bar-3 { animation: bar-grow-3 2s ease-in-out 0.6s infinite; transform-origin: bottom; }
            .folder-container { animation: folder-slide 3s ease-in-out infinite; }
        `}</style>
        <g className="folder-container">
            <path d="M15 25 L15 45 L49 45 L49 25 L35 25 L32 22 L15 22 Z" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
        </g>
        <rect className="progress-bar-1" x="22" y="30" width="4" height="15" fill="#FDB827" />
        <rect className="progress-bar-2" x="30" y="28" width="4" height="17" fill="#FDB827" />
        <rect className="progress-bar-3" x="38" y="26" width="4" height="19" fill="#FDB827" />
    </svg>
);

export const AnimatedChartIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes chart-grow {
                0% { transform: scaleY(0.3); opacity: 0.5; }
                50% { transform: scaleY(1); opacity: 1; }
                100% { transform: scaleY(0.3); opacity: 0.5; }
            }
            @keyframes trend-pulse {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-3px) scale(1.1); }
            }
            .chart-bar { animation: chart-grow 2.5s ease-in-out infinite; transform-origin: bottom; }
            .trend-arrow { animation: trend-pulse 1.5s ease-in-out infinite; }
        `}</style>
        <line x1="15" y1="45" x2="50" y2="45" stroke="#64748B" strokeWidth="2" />
        <line x1="15" y1="15" x2="15" y2="45" stroke="#64748B" strokeWidth="2" />
        <rect className="chart-bar" x="20" y="35" width="6" height="10" fill="#FDB827" style={{ animationDelay: '0s' }} />
        <rect className="chart-bar" x="30" y="30" width="6" height="15" fill="#FDB827" style={{ animationDelay: '0.4s' }} />
        <rect className="chart-bar" x="40" y="25" width="6" height="20" fill="#FDB827" style={{ animationDelay: '0.8s' }} />
        <g className="trend-arrow">
            <path d="M48 20 L52 20 L50 18" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);

export const AnimatedBuildingIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes window-glow {
                0%, 100% { fill: #FDB827; opacity: 0.2; }
                50% { fill: #FDB827; opacity: 1; }
            }
            .window-light { animation: window-glow 2.5s ease-in-out infinite; }
        `}</style>
        <rect x="20" y="15" width="24" height="35" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
        <rect className="window-light" x="24" y="20" width="4" height="4" style={{ animationDelay: '0s' }} />
        <rect className="window-light" x="36" y="20" width="4" height="4" style={{ animationDelay: '0.4s' }} />
        <rect className="window-light" x="24" y="28" width="4" height="4" style={{ animationDelay: '0.8s' }} />
        <rect className="window-light" x="36" y="28" width="4" height="4" style={{ animationDelay: '1.2s' }} />
        <rect className="window-light" x="24" y="36" width="4" height="4" style={{ animationDelay: '1.6s' }} />
        <rect className="window-light" x="36" y="36" width="4" height="4" style={{ animationDelay: '2.0s' }} />
    </svg>
);

export const AnimatedSupportIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes headset-ring {
                0%, 100% { transform: rotate(0deg); }
                5%, 15% { transform: rotate(-10deg); }
                10%, 20% { transform: rotate(10deg); }
            }
            @keyframes signal-pulse {
                0% { r: 8; opacity: 0.6; }
                100% { r: 16; opacity: 0; }
            }
            .headset-body { animation: headset-ring 4s ease-in-out infinite; transform-origin: center; }
        `}</style>
        <g className="headset-body">
            <path d="M20 28 Q20 18 32 18 Q44 18 44 28" stroke="#FDB827" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="18" y="26" width="6" height="10" rx="2" fill="#FDB827" />
            <rect x="40" y="26" width="6" height="10" rx="2" fill="#FDB827" />
            <path d="M24 32 L28 32 Q30 32 30 34 L30 38" stroke="#FDB827" strokeWidth="2" fill="none" />
        </g>
        <circle cx="32" cy="28" r="8" fill="none" stroke="#FDB827" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
    </svg>
);

export const AnimatedCertificatesIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animated-icon">
        <style>{`
            @keyframes stack-shift {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(-1px, -1px); }
            }
            @keyframes star-spin {
                0%, 100% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.15) rotate(180deg); }
            }
            .cert-layer-1 { animation: stack-shift 2.5s ease-in-out infinite; }
            .cert-layer-2 { animation: stack-shift 2.5s ease-in-out 0.3s infinite; }
            .star-badge { animation: star-spin 3s ease-in-out infinite; }
        `}</style>
        <g className="cert-layer-2">
            <rect x="22" y="22" width="24" height="18" rx="2" fill="#1E293B" stroke="#FDB827" strokeWidth="2" opacity="0.5" />
        </g>
        <g className="cert-layer-1">
            <rect x="18" y="24" width="24" height="18" rx="2" fill="#1E293B" stroke="#FDB827" strokeWidth="2" />
            <circle className="star-badge" cx="30" cy="33" r="4" fill="#FDB827" />
        </g>
    </svg>
);

const AnimatedFeatureIcons = {
    Placement: AnimatedPlacementIcon,
    Laptop: AnimatedLaptopIcon,
    Teacher: AnimatedTeacherIcon,
    Certificate: AnimatedCertificateIcon,
    Search: AnimatedSearchIcon,
    Backup: AnimatedBackupIcon,
    Team: AnimatedTeamIcon,
    Project: AnimatedProjectIcon,
    Chart: AnimatedChartIcon,
    Building: AnimatedBuildingIcon,
    Support: AnimatedSupportIcon,
    Certificates: AnimatedCertificatesIcon,
};

export default AnimatedFeatureIcons;
