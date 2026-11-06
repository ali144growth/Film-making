'use client';

import React from 'react';
import { LocaleProvider } from '@/components/LocaleContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { HeroToWorkTransition } from '@/components/HeroToWorkTransition';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-[#F5F2EA] text-[#0D0D0D] selection:bg-[#D9A441] selection:text-[#0D0D0D] relative">
        {/* Fixed Frosted Glass Top Navigation */}
        <Navbar />

        {/* Section 1: Hero */}
        <HeroSection />

        {/* Hero-to-Work Transition Band (Visual transition with repeated-word band & sunburst portrait) */}
        <HeroToWorkTransition />

        {/* Section 2: Work (Projects Index List) */}
        <WorkSection />

        {/* Section 3: Contact (Display-Only Single Glass Panel, No Form) */}
        <ContactSection />

        {/* Persistent Floating WhatsApp Button (Corner-aware by locale) */}
        <FloatingWhatsApp />
      </div>
    </LocaleProvider>
  );
}
