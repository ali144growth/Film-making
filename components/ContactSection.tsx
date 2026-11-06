'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from '@/components/LocaleContext';
import { portfolioData } from '@/data/portfolio-data';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Youtube,
  Video,
  Film,
  ArrowUpRight,
  GraduationCap,
} from 'lucide-react';

export function ContactSection() {
  const { isRTL, t } = useLocale();
  const { contact, socials, student } = portfolioData;

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      default:
        return <Film className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Header text for Contact section */}
      <div className="mb-8 text-left rtl:text-right">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0D0D0D] leading-none">
          {isRTL ? 'التواصل والتعاون' : 'Get In Touch'}
        </h2>
        <p className="text-sm sm:text-base text-[#0D0D0D]/65 mt-2 max-w-xl">
          {isRTL ? contact.availabilityAr : contact.availabilityEn}
        </p>
      </div>

      {/* Main Single Glass Panel - Icons over labels, minimal text, display-only, no form */}
      <div
        id="contact-glass-panel"
        className="glass-cream rounded-3xl p-5 sm:p-10 border border-[#0D0D0D]/10 shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:rtl:divide-x-reverse divide-[#0D0D0D]/10">
          
          {/* Item 1: Phone Number (tap-to-call) */}
          <a
            id="contact-phone-link"
            href={`tel:${contact.phone}`}
            className="group flex flex-col items-start pt-4 sm:pt-0 sm:ltr:pr-4 sm:rtl:pl-4 transition-transform hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D0D0D]/5 group-hover:bg-[#D9A441] group-hover:text-[#0D0D0D] text-[#0D0D0D] flex items-center justify-center transition-colors mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/50 mb-1">
              {t.phoneLabel}
            </span>
            <span
              dir="ltr"
              className="text-sm sm:text-base font-bold text-[#0D0D0D] tracking-tight group-hover:underline inline-block font-mono"
            >
              {contact.phoneFormatted}
            </span>
            <span className="text-[11px] text-[#0D0D0D]/60 mt-1 flex items-center gap-1">
              <span>{t.callNow}</span>
              <ArrowUpRight className="w-3 h-3 text-[#D9A441] rtl:scale-x-[-1]" />
            </span>
          </a>

          {/* Item 2: WhatsApp (direct link) */}
          <a
            id="contact-whatsapp-link"
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start pt-4 sm:pt-0 sm:px-4 transition-transform hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D0D0D]/5 group-hover:bg-[#D9A441] group-hover:text-[#0D0D0D] text-[#0D0D0D] flex items-center justify-center transition-colors mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/50 mb-1">
              {t.whatsappLabel}
            </span>
            <span
              dir="ltr"
              className="text-sm sm:text-base font-bold text-[#0D0D0D] tracking-tight group-hover:underline inline-block font-mono"
            >
              {contact.phoneFormatted}
            </span>
            <span className="text-[11px] text-[#0D0D0D]/60 mt-1 flex items-center gap-1">
              <span>{t.chatNow}</span>
              <ArrowUpRight className="w-3 h-3 text-[#D9A441] rtl:scale-x-[-1]" />
            </span>
          </a>

          {/* Item 3: Email */}
          <a
            id="contact-email-link"
            href={`mailto:${contact.email}`}
            className="group flex flex-col items-start pt-4 sm:pt-0 sm:px-4 transition-transform hover:-translate-y-0.5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D0D0D]/5 group-hover:bg-[#D9A441] group-hover:text-[#0D0D0D] text-[#0D0D0D] flex items-center justify-center transition-colors mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/50 mb-1">
              {t.emailLabel}
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0D0D0D] tracking-tight break-all group-hover:underline">
              {contact.email}
            </span>
            <span className="text-[11px] text-[#0D0D0D]/60 mt-1 flex items-center gap-1">
              <span>{t.sendEmail}</span>
              <ArrowUpRight className="w-3 h-3 text-[#D9A441] rtl:scale-x-[-1]" />
            </span>
          </a>

          {/* Item 4: Location */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:ltr:pl-4 sm:rtl:pr-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D0D0D]/5 text-[#0D0D0D] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/50 mb-1">
              {t.locationLabel}
            </span>
            <span className="text-sm sm:text-base font-bold text-[#0D0D0D] tracking-tight">
              {isRTL ? contact.locationAr : contact.locationEn}
            </span>
            <span className="text-[11px] text-[#0D0D0D]/60 mt-1">
              {isRTL ? 'الجامعة الأمريكية في الكويت' : 'American University of Kuwait'}
            </span>
          </div>

        </div>

        {/* Hairline Divider & Social Links Strip Inside the Glass Panel */}
        <div className="mt-8 pt-6 border-t border-[#0D0D0D]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-2 text-xs text-[#0D0D0D]/60 font-medium shrink-0">
            <GraduationCap className="w-4 h-4 text-[#0D0D0D]/70 shrink-0" />
            <span className="leading-tight">{isRTL ? student.universityAr : student.universityEn}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto" id="contact-social-links">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${s.name}: ${s.username}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill hover:bg-white text-[#0D0D0D]/80 hover:text-[#0D0D0D] text-xs font-semibold border border-[#0D0D0D]/10 transition-all hover:scale-105 shrink-0"
              >
                {getSocialIcon(s.icon)}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Minimal Academic Footer (not a fourth section, just copyright & disclaimer) */}
      <footer className="mt-12 text-center text-xs text-[#0D0D0D]/50 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#0D0D0D]/5 pt-6">
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
            <Image
              src={student.logoUrl || '/logo.png'}
              alt="Logo"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p>
            © 2026 {isRTL ? `${student.nameAr[0]} ${student.nameAr[1]}` : `${student.nameEn[0]} ${student.nameEn[1]}`}. {t.allRightsReserved}
          </p>
        </div>
        <p className="font-mono text-[10px]">
          {t.academicStatus}
        </p>
      </footer>
    </section>
  );
}
