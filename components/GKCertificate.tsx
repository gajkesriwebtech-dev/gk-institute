"use client";

import React from 'react';
import { cld } from '@/lib/cloudinary';
import { Icons } from './ui';

interface GKCertificateProps {
    imageUrl?: string;
    alt?: string;
    className?: string;
}

export const GKCertificate: React.FC<GKCertificateProps> = ({
    imageUrl,
    alt = "GK WebTech Certificate",
    className = ""
}) => {
    // If imageUrl is provided, use it. If it doesn't look like a full URL, 
    // treat it as a Cloudinary public ID.
    const finalSrc = imageUrl
        ? (imageUrl.startsWith('http') || imageUrl.startsWith('/') ? imageUrl : cld(imageUrl, 800, 566))
        : "/images/certificate.jpg";

    return (
        <div className={`relative w-full max-w-[600px] aspect-[1.414/1] bg-slate-50 dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group hover:shadow-emerald-500/20 transition-all duration-300 ${className}`}>
            {/* Real Certificate Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                <img
                    src={finalSrc}
                    alt={alt}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                />
            </div>

            {/* Subtle Overlay (much thinner or moved to edges) */}
            <div className="absolute inset-0 border-[2px] border-white/20 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none"></div>

            {/* Animated Glow on Hover */}
            <div className="absolute -inset-full h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[30deg] group-hover:animate-shine pointer-events-none"></div>

            {/* Interactive Corner Badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FDB827] to-amber-600 rounded-full shadow-lg flex items-center justify-center p-2 border-2 border-white/50 animate-pulse">
                    <Icons.Award className="text-white w-full h-full" />
                </div>
            </div>

            {/* Verification Tag */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                <Icons.CheckCircle className="w-3 h-3 text-emerald-400" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">Verifiable Proof</span>
            </div>
        </div>
    );
};
