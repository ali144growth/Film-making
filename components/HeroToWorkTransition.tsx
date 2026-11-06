'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from '@/components/LocaleContext';

export function HeroToWorkTransition() {
  const { isRTL } = useLocale();

  // 16 fanned radiating petals/rays for the sunburst motif
  const rays = Array.from({ length: 16 });

  return (
    <div
      id="hero-work-transition"
      className="relative w-full bg-[#0D0D0D] py-16 sm:py-24 md:py-28 overflow-hidden select-none my-8 sm:my-12 border-y border-[#F5F2EA]/10"
      aria-hidden="true"
    >
      {/* Giant repeated-word background band - scaled responsively so no horizontal scroll */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-25 z-0 overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-10 md:gap-14 whitespace-nowrap text-outline-cream font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-wider uppercase">
          {isRTL ? (
            <>
              <span>عمل</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>إخراج</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>سينما</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>توثيق</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>عمل</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>إخراج</span>
            </>
          ) : (
            <>
              <span>WORK</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>WORK</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>WORK</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>WORK</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>WORK</span>
              <span className="text-[#D9A441]/40">·</span>
              <span>WORK</span>
            </>
          )}
        </div>
      </div>

      {/* Centered Sunburst + Black & White Portrait Treatment */}
      <div className="relative z-10 flex items-center justify-center max-w-xl mx-auto px-4">
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
          
          {/* Radiating sunburst of soft rounded shapes fanning out behind the portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full h-full animate-[spin_120s_linear_infinite]"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="sunburst-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5F2EA" stopOpacity="0.22" />
                  <stop offset="60%" stopColor="#F5F2EA" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#F5F2EA" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {rays.map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <g key={i} transform={`rotate(${angle} 160 160)`}>
                    {/* Rounded ray fanning outward */}
                    <rect
                      x="152"
                      y="14"
                      width="16"
                      height="120"
                      rx="8"
                      fill="url(#sunburst-grad)"
                    />
                    <circle
                      cx="160"
                      cy="18"
                      r="4"
                      fill="#D9A441"
                      fillOpacity="0.3"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Soft inner glow ring */}
          <div className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#F5F2EA]/5 blur-xl pointer-events-none" />

          {/* Centered Black-and-White Portrait */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1.5 glass-dark border border-[#F5F2EA]/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0D0D0D]">
              <Image
                src="/portrait.jpg"
                alt="Student Filmmaker Sultan Al-Failakawi"
                fill
                className="object-cover grayscale contrast-125 hover:contrast-100 transition-all duration-700"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
              />
              <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
            </div>
            
            {/* Minimal hairline film aperture ring around portrait */}
            <div className="absolute inset-0 rounded-full border border-[#D9A441]/30 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  );
}
