'use client';

import React from 'react';
import { useLocale } from '@/components/LocaleContext';
import { portfolioData } from '@/data/portfolio-data';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  const { isRTL, t } = useLocale();
  const { contact } = portfolioData;

  return (
    <div
      id="floating-whatsapp-container"
      className={`fixed bottom-5 sm:bottom-7 z-40 ${
        isRTL ? 'left-5 sm:left-7' : 'right-5 sm:right-7'
      } transition-all duration-300 pointer-events-auto`}
    >
      <div className="relative flex items-center group">
        
        {/* Tooltip on hover */}
        <div
          className={`absolute hidden md:flex items-center whitespace-nowrap py-1.5 px-3 rounded-full text-xs font-medium glass-dark text-[#F5F2EA] shadow-lg pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            isRTL
              ? 'left-full ml-3'
              : 'right-full mr-3'
          }`}
        >
          {t.whatsappFloat}
        </div>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#D9A441]/40 animate-ping duration-1000 pointer-events-none" />

        {/* Glass ring wrapper */}
        <div className="p-1 rounded-full glass-cream border border-[#0D0D0D]/10 shadow-[0_8px_25px_rgba(217,164,65,0.35)]">
          <motion.a
            id="floating-whatsapp-btn"
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#D9A441] text-[#0D0D0D] flex items-center justify-center shadow-md cursor-pointer transition-colors"
            aria-label={t.whatsappFloat}
            title={t.whatsappFloat}
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] fill-current/10" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
