'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/data/portfolio-data';
import { useLocale } from '@/components/LocaleContext';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Clock,
  Film,
  Award,
  BookOpen,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { isRTL, t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24); // Simulated progress %

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  // Simulate video playback timer
  useEffect(() => {
    if (!project || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 400);
    return () => clearInterval(interval);
  }, [project, isPlaying]);

  if (!project) return null;

  const titleFirst = isRTL ? project.titleAr[0] : project.titleEn[0];
  const titleSecond = isRTL ? project.titleAr[1] : project.titleEn[1];

  return (
    <div
      id="project-watch-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0D0D0D] text-[#F5F2EA] rounded-3xl overflow-hidden border border-[#F5F2EA]/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col max-h-[92vh]">
        
        {/* Top bar with project index, title, and close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F5F2EA]/10 bg-[#161616]/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#D9A441] border border-[#D9A441]/30 px-2 py-0.5 rounded">
              {project.number}
            </span>
            <span className="text-sm font-semibold text-[#F5F2EA] tracking-wide">
              {titleFirst} {titleSecond}
            </span>
          </div>

          <button
            id="modal-close-button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#F5F2EA]/80 hover:text-white transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Preview Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated Film Preview Frame */}
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-90 transition-transform duration-1000 scale-102"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />

          {/* Cinematic Letterbox effect */}
          <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-black pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-4 sm:h-6 bg-black pointer-events-none" />

          {/* Film Grain & Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />

          {/* Timecode & Camera Stats overlay */}
          <div className="absolute top-7 inset-x-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#F5F2EA]/75 select-none pointer-events-none">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`} />
              {isPlaying ? 'PLAY' : 'PAUSED'} · TC: 00:0{Math.floor(progress / 10)}:{Math.floor((progress % 10) * 6)}:12
            </span>
            <span>PRORES 422 HQ · 24.00 FPS</span>
          </div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D9A441] text-[#0D0D0D] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ltr:translate-x-0.5 rtl:-translate-x-0.5" />
            )}
          </button>

          {/* Bottom Custom Playback Bar */}
          <div className="absolute bottom-6 inset-x-6 z-20 flex flex-col gap-2 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
            {/* Scrubber track */}
            <div
              className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                setProgress(newProgress);
              }}
            >
              <div
                className="h-full bg-[#D9A441] rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs text-[#F5F2EA]/80 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <span className="font-mono text-[10px]">
                  0{Math.floor((progress * 14) / 100)}:
                  {String(Math.floor(((progress * 14) % 1) * 60)).padStart(2, '0')} / {project.videoDuration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#D9A441] font-mono uppercase">
                  {isRTL ? project.categoryAr : project.categoryEn}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Footer in Modal */}
        <div className="p-6 sm:p-8 bg-[#111111] overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F5F2EA]/10 pb-4">
            <div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-serif-italic font-bold text-[#F5F2EA] leading-tight"
              >
                {titleFirst} {titleSecond}
              </h2>
              <p className="text-xs text-[#F5F2EA]/70 mt-1">
                {isRTL ? project.contextAr : project.contextEn}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-[#D9A441] bg-[#D9A441]/10 px-2.5 py-1 rounded-full border border-[#D9A441]/20">
                {project.year} · {project.duration}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F5F2EA]/80 pt-1">
            <div className="glass-dark p-3.5 rounded-xl border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-[#D9A441] font-semibold">
                <Film className="w-3.5 h-3.5" />
                <span>{t.studentDirector}</span>
              </div>
              <p>{isRTL ? project.roleAr : project.roleEn}</p>
            </div>

            {project.screeningEn && (
              <div className="glass-dark p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#D9A441] font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.screeningNote}</span>
                </div>
                <p>{isRTL ? project.screeningAr : project.screeningEn}</p>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#F5F2EA]/70 leading-relaxed pt-2">
            {isRTL ? project.synopsisAr : project.synopsisEn}
          </p>
        </div>

      </div>
    </div>
  );
}
