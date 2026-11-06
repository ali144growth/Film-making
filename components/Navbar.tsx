'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from '@/components/LocaleContext';
import { portfolioData } from '@/data/portfolio-data';
import { ArrowUpRight, Globe } from 'lucide-react';

export function Navbar() {
  const { locale, isRTL, toggleLocale, t } = useLocale();
  const { student } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-40 px-4 sm:px-6 max-w-5xl mx-auto pointer-events-none">
      <nav
        id="main-nav"
        className="pointer-events-auto glass-cream rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#0D0D0D]/10 transition-all duration-300"
      >
        {/* Student Logo / Identity */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex items-center gap-2.5 text-left rtl:text-right"
          id="nav-brand-link"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
            <Image
              src={student.logoUrl || '/logo.png'}
              alt={isRTL ? `${student.nameAr[0]} ${student.nameAr[1]}` : `${student.nameEn[0]} ${student.nameEn[1]}`}
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-tight text-[#0D0D0D]">
              {isRTL
                ? `${student.nameAr[0]} ${student.nameAr[1]}`
                : `${student.nameEn[0]} ${student.nameEn[1]}`}
            </span>
            <span className="text-[10px] text-[#0D0D0D]/60 hidden sm:inline-block leading-none">
              {isRTL ? 'طالب سينما' : 'Filmmaking Student'}
            </span>
          </div>
        </a>

        {/* Section Jump Links & Locale Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            id="nav-link-work"
            onClick={() => scrollToSection('work')}
            className="text-xs sm:text-sm font-medium text-[#0D0D0D]/80 hover:text-[#0D0D0D] px-2.5 py-1 rounded-full hover:bg-[#0D0D0D]/5 transition-colors"
          >
            {t.navWork}
          </button>
          
          <button
            id="nav-link-contact"
            onClick={() => scrollToSection('contact')}
            className="text-xs sm:text-sm font-medium text-[#0D0D0D]/80 hover:text-[#0D0D0D] px-2.5 py-1 rounded-full hover:bg-[#0D0D0D]/5 transition-colors"
          >
            {t.navContact}
          </button>

          {/* Locale Toggle */}
          <button
            id="nav-locale-toggle"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0D0D0D] bg-white/60 hover:bg-white/90 border border-[#0D0D0D]/10 px-2.5 py-1 rounded-full transition-all shadow-xs"
            aria-label="Toggle language between English and Arabic"
          >
            <Globe className="w-3.5 h-3.5 text-[#0D0D0D]/70" />
            <span>{locale === 'en' ? 'عربي' : 'EN'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
