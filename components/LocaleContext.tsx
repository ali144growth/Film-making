'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { Locale } from '@/data/portfolio-data';

interface LocaleContextType {
  locale: Locale;
  isRTL: boolean;
  toggleLocale: () => void;
  setLocale: (l: Locale) => void;
  t: {
    navWork: string;
    navContact: string;
    watch: string;
    watchProject: string;
    close: string;
    studentDirector: string;
    category: string;
    duration: string;
    academicContext: string;
    synopsis: string;
    screeningNote: string;
    backToProjects: string;
    whatsappFloat: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    locationLabel: string;
    socialsLabel: string;
    callNow: string;
    chatNow: string;
    sendEmail: string;
    viewProfile: string;
    academicStatus: string;
    allRightsReserved: string;
    jumpToWork: string;
  };
}

const translations = {
  en: {
    navWork: 'Work',
    navContact: 'Contact',
    watch: 'Watch',
    watchProject: 'Watch Project',
    close: 'Close Preview',
    studentDirector: 'Student Director & Cut',
    category: 'Format & Genre',
    duration: 'Runtime',
    academicContext: 'Context / Assignment',
    synopsis: 'Short Synopsis',
    screeningNote: 'Festival & Campus Screening',
    backToProjects: 'Back to projects index',
    whatsappFloat: 'Message Sultan on WhatsApp',
    phoneLabel: 'Direct Phone',
    whatsappLabel: 'WhatsApp Chat',
    emailLabel: 'Student Email',
    locationLabel: 'Base Location',
    socialsLabel: 'Social & Film Profiles',
    callNow: 'Tap to call',
    chatNow: 'Open WhatsApp',
    sendEmail: 'Send message',
    viewProfile: 'View profile',
    academicStatus: 'Filmmaking Student Portfolio · AUK Department of Communication & Media',
    allRightsReserved: 'All coursework footage & student rights reserved.',
    jumpToWork: 'Explore Selected Work',
  },
  ar: {
    navWork: 'الأعمال',
    navContact: 'التواصل',
    watch: 'مشاهدة',
    watchProject: 'مشاهدة المشروع',
    close: 'إغلاق المعاينة',
    studentDirector: 'إخراج ومونتاج الطالب',
    category: 'النوع والصيغة',
    duration: 'المدة الزمنية',
    academicContext: 'السياق الأكاديمي / المهمة',
    synopsis: 'ملخص موجز',
    screeningNote: 'العروض الجامعية ومهرجانات الطلاب',
    backToProjects: 'العودة لقائمة الأعمال',
    whatsappFloat: 'محادثة مباشرة عبر واتساب',
    phoneLabel: 'الاتصال المباشر',
    whatsappLabel: 'واتساب',
    emailLabel: 'الايميل',
    locationLabel: 'المقر والمدينة',
    socialsLabel: 'حسابات التواصل والمنصات السينمائية',
    callNow: 'اضغط للاتصال',
    chatNow: 'بدء محادثة واتساب',
    sendEmail: 'ارسال ايميل',
    viewProfile: 'زيارة الملف',
    academicStatus: 'ملف أعمال طالب صناعة أفلام · قسم الإعلام والاتصال بالجامعة الأمريكية',
    allRightsReserved: 'جميع حقوق المواد المصورة والأفلام الطلابية محفوظة.',
    jumpToWork: 'استعراض الأعمال المختارة',
  },
};

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('portfolio_locale_change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('portfolio_locale_change', callback);
  };
}

function getSnapshot(): Locale {
  try {
    const saved = localStorage.getItem('portfolio_locale');
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
  } catch {
    // Fallback if localStorage is inaccessible
  }
  return 'en';
}

function getServerSnapshot(): Locale {
  return 'en';
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    try {
      localStorage.setItem('portfolio_locale', l);
      window.dispatchEvent(new Event('portfolio_locale_change'));
    } catch {
      // Fallback if localStorage is inaccessible
    }
  };

  const toggleLocale = () => {
    const next: Locale = locale === 'en' ? 'ar' : 'en';
    setLocale(next);
  };

  const isRTL = locale === 'ar';
  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, isRTL, toggleLocale, setLocale, t }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-sans-ar' : 'font-sans'}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
