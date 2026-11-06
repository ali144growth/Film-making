'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from '@/components/LocaleContext';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowDownLeft,
  Instagram,
  Youtube,
  Video,
  Film,
  Clapperboard,
  Clock,
  GraduationCap,
} from 'lucide-react';

export function HeroSection() {
  const { isRTL, t } = useLocale();
  const { student, stats, socials } = portfolioData;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Instagram':
        return <Instagram className="w-3.5 h-3.5" />;
      case 'Youtube':
        return <Youtube className="w-3.5 h-3.5" />;
      case 'Video':
        return <Video className="w-3.5 h-3.5" />;
      case 'Film':
        return <Film className="w-3.5 h-3.5" />;
      default:
        return <Film className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-center max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left/Main Column: Stacked Display Headline & Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right">
          
          {/* Subtle University badge pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] sm:text-xs font-medium text-[#0D0D0D]/75 mb-4 border border-[#0D0D0D]/10">
            <GraduationCap className="w-3.5 h-3.5 text-[#0D0D0D]/80 shrink-0" />
            <span>{isRTL ? student.universityAr : student.universityEn}</span>
          </div>

          {/* Oversized Two-Line Stacked Headline */}
          <h1
            id="hero-name-headline"
            className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] leading-[1.12] sm:leading-[1.05] md:leading-[1.02] uppercase text-[#0D0D0D] tracking-tight select-none ${
              isRTL ? 'mb-8 sm:mb-10' : 'mb-4'
            }`}
          >
            <span className="block mb-1 sm:mb-1.5">{isRTL ? student.nameAr[0] : student.nameEn[0]}</span>
            <span className="block text-[#0D0D0D]">{isRTL ? student.nameAr[1] : student.nameEn[1]}</span>
          </h1>

          {/* Status Line Beneath */}
          <p
            id="hero-status-line"
            className={`text-base sm:text-lg font-medium text-[#0D0D0D]/85 tracking-normal ${
              isRTL ? 'mt-2 mb-4' : 'mb-3'
            }`}
          >
            {isRTL ? student.roleAr : student.roleEn}
          </p>

          {/* One short bio line max */}
          <p
            id="hero-bio-line"
            className="text-sm sm:text-base text-[#0D0D0D]/70 max-w-lg mb-6 leading-relaxed font-serif-italic text-lg sm:text-xl"
          >
            &ldquo;{isRTL ? student.bioAr : student.bioEn}&rdquo;
          </p>

          {/* Two Small Stat Chips (Glass Pills) - Side by side on mobile and desktop */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full sm:w-auto max-w-md sm:max-w-lg mb-6" id="hero-stat-chips">
            {/* Stat 1: Projects */}
            <div className="glass-pill px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex items-center gap-2.5 sm:gap-3 border border-[#0D0D0D]/10 shadow-xs min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0D0D0D]/5 flex items-center justify-center text-[#0D0D0D] shrink-0">
                <Clapperboard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D0D0D]" />
              </div>
              <div className="flex flex-col text-left rtl:text-right min-w-0">
                <span className="text-sm sm:text-base font-bold text-[#0D0D0D] leading-tight">
                  {stats.projectsCount}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#0D0D0D]/65 font-medium leading-tight truncate sm:whitespace-normal">
                  {isRTL ? stats.projectsLabelAr : stats.projectsLabelEn}
                </span>
              </div>
            </div>

            {/* Stat 2: Hours Edited */}
            <div className="glass-pill px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl flex items-center gap-2.5 sm:gap-3 border border-[#0D0D0D]/10 shadow-xs min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0D0D0D]/5 flex items-center justify-center text-[#0D0D0D] shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D0D0D]" />
              </div>
              <div className="flex flex-col text-left rtl:text-right min-w-0">
                <span className="text-sm sm:text-base font-bold text-[#0D0D0D] leading-tight">
                  {stats.hoursEdited}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#0D0D0D]/65 font-medium leading-tight truncate sm:whitespace-normal">
                  {isRTL ? stats.hoursLabelAr : stats.hoursLabelEn}
                </span>
              </div>
            </div>
          </div>

          {/* Small Monochrome Social Icon Chips Row */}
          <div className="flex flex-wrap items-center gap-2" id="hero-social-chips">
            <span className="text-xs text-[#0D0D0D]/50 font-medium ltr:mr-1 rtl:ml-1">
              {isRTL ? 'المنصات:' : 'Links:'}
            </span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${s.name} (${s.username})`}
                className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-[#0D0D0D]/75 hover:text-[#0D0D0D] hover:bg-white/80 transition-all border border-[#0D0D0D]/10 hover:scale-105"
                aria-label={s.name}
              >
                {getSocialIcon(s.icon)}
              </a>
            ))}
          </div>

        </div>

        {/* Right Column: Personal Image with Circular Arrow Badge CTA */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-visible p-2 glass-cream border border-[#0D0D0D]/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            
            {/* Film frame aesthetic details */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0D0D0D]">
              <Image
                src="/portrait.jpg"
                alt="Sultan Al-Failakawi - Filmmaking Student"
                fill
                priority
                className="object-cover grayscale contrast-110 hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 450px"
              />

              {/* Subtle film grain & corner camera info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Subtle student camera corner marks */}
              <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[9px] tracking-widest text-[#F5F2EA]/70 uppercase font-mono select-none pointer-events-none">
                <span>FPS: 24.00</span>
                <span>REC · RAW 4K</span>
              </div>
              
              <div className="absolute bottom-3 inset-x-3 flex justify-start items-end text-[10px] text-[#F5F2EA]/85 select-none pointer-events-none">
                <div>
                  <p className="font-semibold text-xs tracking-tight text-[#F5F2EA]">
                    {isRTL ? 'سلطان الفيلكاوي' : 'Sultan Al-Failakawi'}
                  </p>
                  <p className="text-[10px] text-[#F5F2EA]/60">
                    {isRTL ? 'إخراج ومونتاج' : 'Directing & Editing'}
                  </p>
                </div>
              </div>
            </div>

            {/* Circular Arrow-CTA Badge (recurring accent/emphasis element) */}
            {/* Positioned overlapping the edge of the personal image */}
            {/* Mirrors corner and flips arrow icon in RTL */}
            <motion.button
              id="hero-cta-arrow-badge"
              onClick={scrollToWork}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute -bottom-5 ${
                isRTL ? '-left-5' : '-right-5'
              } z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#D9A441] text-[#0D0D0D] flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(217,164,65,0.4)] border-2 border-[#F5F2EA] cursor-pointer group`}
              aria-label={t.jumpToWork}
              title={t.jumpToWork}
            >
              <div className="flex items-center justify-center">
                {isRTL ? (
                  <ArrowDownLeft className="w-7 h-7 stroke-[2.5] group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-transform" />
                ) : (
                  <ArrowDownRight className="w-7 h-7 stroke-[2.5] group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                )}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#0D0D0D] leading-none mt-0.5">
                {t.navWork}
              </span>
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
}
