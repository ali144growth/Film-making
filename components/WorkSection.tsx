'use client';

import React, { useState } from 'react';
import { useLocale } from '@/components/LocaleContext';
import { portfolioData, Project } from '@/data/portfolio-data';
import { ProjectModal } from '@/components/ProjectModal';
import { Play } from 'lucide-react';

export function WorkSection() {
  const { isRTL, t } = useLocale();
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24"
    >
      {/* Index List Container */}
      <div className="flex flex-col divide-y divide-[#0D0D0D]/10 border-t border-b border-[#0D0D0D]/10">
        {projects.map((project, index) => {
          const titleLine1 = isRTL ? project.titleAr[0] : project.titleEn[0];
          const titleLine2 = isRTL ? project.titleAr[1] : project.titleEn[1];
          const contextLine = isRTL ? project.contextAr : project.contextEn;

          return (
            <article
              key={project.id}
              id={`work-item-${project.id}`}
              className="group py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 hover:bg-[#0D0D0D]/[0.015] px-2 sm:px-4 rounded-xl"
            >
              {/* Left Group: Index Number & Oversized Italic Bold Two-Line Title */}
              <div className="flex items-start gap-4 sm:gap-8 lg:gap-12 flex-1">
                {/* Numbered Index (01, 02, 03...) */}
                <span
                  className="font-mono text-sm sm:text-base font-semibold text-[#0D0D0D]/40 pt-2 shrink-0 select-none group-hover:text-[#D9A441] transition-colors"
                  aria-label={`Project number ${project.number}`}
                >
                  {project.number}
                </span>

                {/* Oversized Italic Bold Two-Line Title & Context Line */}
                <div className="flex flex-col text-left rtl:text-right">
                  <h2 className="font-serif-italic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] text-[#0D0D0D] tracking-tight group-hover:text-[#0D0D0D] transition-colors">
                    <span className="block">{titleLine1}</span>
                    <span className="block">{titleLine2}</span>
                  </h2>

                  {/* One short context line */}
                  <p className="text-xs sm:text-sm text-[#0D0D0D]/60 mt-3 font-medium tracking-normal">
                    {contextLine}
                  </p>
                </div>
              </div>

              {/* Right Group: Tag Pill & Small Glass "Watch" Pill Button */}
              <div className="flex items-center gap-3 self-start md:self-center ltr:ml-10 rtl:mr-10 md:ml-0 md:mr-0 shrink-0">
                {/* Small category tag pill */}
                <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/60 border border-[#0D0D0D]/10 px-2.5 py-1 rounded-full">
                  {project.duration}
                </span>

                {/* Small Glass "Watch" Pill Button with underline-draw on hover */}
                <button
                  id={`watch-btn-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="glass-pill group/btn relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#0D0D0D] border border-[#0D0D0D]/15 hover:border-[#0D0D0D]/30 transition-all shadow-xs hover:bg-white/80 cursor-pointer"
                  aria-label={`${t.watch} ${titleLine1} ${titleLine2}`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#0D0D0D] text-[#F5F2EA] flex items-center justify-center shrink-0 group-hover/btn:bg-[#D9A441] group-hover/btn:text-[#0D0D0D] transition-colors">
                    <Play className="w-2.5 h-2.5 fill-current ltr:translate-x-[0.5px] rtl:-translate-x-[0.5px]" />
                  </div>
                  
                  {/* Underline-draw micro-interaction */}
                  <span className="relative">
                    {t.watch}
                    <span className="watch-underline absolute bottom-0 inset-x-0 h-[1.5px] bg-[#0D0D0D] w-0 transition-all duration-200 group-hover/btn:w-full" />
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Project Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
