import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trophy, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles, 
  GraduationCap, 
  Medal, 
  Mic, 
  BookOpen, 
  ArrowRight,
  Flame
} from 'lucide-react';
import type { TabType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentTab: (tab: TabType) => void;
}

interface AchievementCategory {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  themeColor: string;
  accentBg: string;
  icon: React.ElementType;
  metrics: { label: string; value: string }[];
  achievers: {
    name: string;
    scoreOrRank: string;
    subtext: string;
    detail: string;
    tag?: string;
  }[];
  actionText: string;
  targetTab: TabType;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ 
  isOpen, 
  onClose, 
  setCurrentTab 
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const categories: AchievementCategory[] = [
    {
      id: "class-10th",
      tabLabel: "10th Board Results",
      badge: "JKBOSE Class 10th Star Achievers • Session 2026",
      title: "Class 10th JKBOSE Board Star Achievers",
      subtitle: "Historic 100% Pass Percentage with Top District Bandipora Positions",
      themeColor: "from-amber-500 to-amber-600",
      accentBg: "bg-amber-50 border-amber-200 text-amber-950",
      icon: Trophy,
      metrics: [
        { label: "Board Pass Rate", value: "100%" },
        { label: "District Highest", value: "98.4%" },
        { label: "Distinctions", value: "82%" },
        { label: "Centum Scores", value: "Math 100" }
      ],
      achievers: [
        {
          name: "Mohammad Huzaif Lone",
          scoreOrRank: "492 / 500 (98.4%)",
          subtext: "District 1st Position Holder in Bandipora",
          detail: "Mathematics: 100/100 • Science: 99/100 • Urdu: 99/100",
          tag: "District Topper"
        },
        {
          name: "Syed Bareena Fatima",
          scoreOrRank: "488 / 500 (97.6%)",
          subtext: "District 2nd Position • Top Female Scorer",
          detail: "English: 98/100 • Science: 98/100 • Urdu: 99/100",
          tag: "District Rank 2"
        },
        {
          name: "Faizan Ahmad Bhat",
          scoreOrRank: "481 / 500 (96.2%)",
          subtext: "School 3rd Position • All Subjects A1 Grade",
          detail: "Social Science: 98/100 • Mathematics: 97/100",
          tag: "Star Distinction"
        },
        {
          name: "Mehvish Jan",
          scoreOrRank: "476 / 500 (95.2%)",
          subtext: "School 4th Position • Star Performer",
          detail: "Mathematics: 96/100 • Science: 97/100",
          tag: "Star Distinction"
        }
      ],
      actionText: "View Complete Board Merit List",
      targetTab: "results"
    },
    {
      id: "class-12th",
      tabLabel: "12th & Higher Merit",
      badge: "Senior Secondary Board Distinctions & National Selections",
      title: "Senior Secondary & Higher Academic Distinctions",
      subtitle: "Exemplary Academic Merit, University Admissions & Competitive Qualifiers",
      themeColor: "from-blue-600 to-indigo-700",
      accentBg: "bg-blue-50 border-blue-200 text-blue-950",
      icon: GraduationCap,
      metrics: [
        { label: "Board Success", value: "100%" },
        { label: "Top Stream Score", value: "97.8%" },
        { label: "Competitive", value: "NEET/JEE" },
        { label: "First Divisions", value: "92%" }
      ],
      achievers: [
        {
          name: "Sheikh Burhan",
          scoreOrRank: "489 / 500 (97.8%)",
          subtext: "Medical Stream Distinction • NEET Qualifier",
          detail: "Biology: 99/100 • Physics: 98/100 • Chemistry: 98/100",
          tag: "Medical Topper"
        },
        {
          name: "Areeba Manzoor",
          scoreOrRank: "482 / 500 (96.4%)",
          subtext: "Non-Medical Stream Distinction • Engineering Selection",
          detail: "Mathematics: 99/100 • Physics: 97/100",
          tag: "Non-Med Topper"
        },
        {
          name: "Muneeb-ul-Islam",
          scoreOrRank: "475 / 500 (95.0%)",
          subtext: "Humanities Stream Topper • Civil Service Aspirant",
          detail: "Political Science: 99/100 • History: 97/100",
          tag: "Humanities Topper"
        },
        {
          name: "Saima Rashid",
          scoreOrRank: "471 / 500 (94.2%)",
          subtext: "Commerce Distinction • Financial Studies",
          detail: "Accountancy: 100/100 • Economics: 96/100",
          tag: "Commerce Topper"
        }
      ],
      actionText: "Explore Academic Wings & Programs",
      targetTab: "academics"
    },
    {
      id: "cultural-sports",
      tabLabel: "Cultural & Sports",
      badge: "State & District Inter-School Championships • 2026",
      title: "Cultural, Debates, Qirat & Sports Champions",
      subtitle: "Celebrating Holistic Excellence Beyond Classroom Walls",
      themeColor: "from-emerald-600 to-teal-700",
      accentBg: "bg-emerald-50 border-emerald-200 text-emerald-950",
      icon: Medal,
      metrics: [
        { label: "District Trophies", value: "14+" },
        { label: "Debate Medals", value: "Gold" },
        { label: "Qirat Winners", value: "1st Prize" },
        { label: "Relay Champions", value: "State Level" }
      ],
      achievers: [
        {
          name: "Hafiz Abrar Ahmad (Grade 9)",
          scoreOrRank: "1st Position (Gold Medalist)",
          subtext: "Annual Inter-School Husn-e-Qirat & Tajweed Championship",
          detail: "Selected as District Bandipora Representative for J&K State Finals",
          tag: "Husn-e-Qirat 🥇"
        },
        {
          name: "Zaira Shafi (Grade 10)",
          scoreOrRank: "Best Speaker Trophy & Gold",
          subtext: "All-Bandipora Youth Parliamentary Debate Competition",
          detail: "Topic: 'Digital Ethics & AI in Foundational Education' — Unanimous 1st Rank",
          tag: "Debate Champion 🏆"
        },
        {
          name: "Senior Athletics Relay Team",
          scoreOrRank: "Gold Medal & Championship Trophy",
          subtext: "District Bandipora Inter-School Athletics Meet (4x100m & 800m)",
          detail: "Record-breaking sprint finish against 18 regional participating institutions",
          tag: "Athletics Champions 🏃"
        },
        {
          name: "Young Innovators Club (Grade 8)",
          scoreOrRank: "Special Jury Innovation Award",
          subtext: "J&K UT Science & Robotics Innovation Exhibition 2026",
          detail: "Model: 'Smart Ecological Irrigation & Wular Wetland Conservation System'",
          tag: "Robotics & Innovation ⭐"
        }
      ],
      actionText: "Explore Campus Facilities & Sports",
      targetTab: "facilities"
    }
  ];

  const current = categories[activeSlide];

  // Keyboard navigation & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev + 1) % categories.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, categories.length, onClose]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleActionClick = (tab: TabType) => {
    onClose();
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const IconComponent = current.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fade-in no-print"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-modal-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-scale-up transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Celebratory Header */}
        <div className="relative bg-gradient-to-r from-[#0c2340] via-[#12335c] to-[#0c2340] text-white p-5 sm:p-6 border-b border-amber-500/40 select-none">
          {/* Subtle background crest overlay */}
          <div className="absolute right-3 -bottom-6 opacity-10 pointer-events-none">
            <Trophy className="w-40 h-40 text-amber-400" />
          </div>

          <div className="flex items-start justify-between relative z-10 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-0.5 border-2 border-amber-400 shrink-0 shadow-md overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="SMS Islamia Model Secondary School Crest" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Celebrating Student Excellence</span>
                </div>
                <h3 id="achievement-modal-title" className="font-extrabold text-base sm:text-lg leading-tight text-white">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-[11px] text-slate-300">
                  Garoora, Bandipora (J&K) • UDISE {SCHOOL_INFO.udiseCode}
                </p>
              </div>
            </div>

            {/* Close "X" Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10 shrink-0 shadow"
              aria-label="Close Announcement Modal"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs Pill Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveSlide(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  idx === activeSlide
                    ? 'bg-amber-400 text-slate-950 shadow-md scale-102'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{cat.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Active Category Header Banner */}
          <div className={`p-4 rounded-2xl border ${current.accentBg} transition-all`}>
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wide opacity-80 block">
                  {current.badge}
                </span>
                <h4 className="text-lg sm:text-xl font-black leading-snug">
                  {current.title}
                </h4>
                <p className="text-xs opacity-90 leading-relaxed font-normal">
                  {current.subtitle}
                </p>
              </div>
              <div className="p-3 bg-white/80 rounded-2xl shadow-sm border border-slate-200/60 shrink-0 hidden sm:block">
                <IconComponent className="w-6 h-6 text-slate-900" />
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-black/10">
              {current.metrics.map((m, i) => (
                <div key={i} className="bg-white/90 p-2 rounded-xl text-center shadow-xs">
                  <span className="block text-sm sm:text-base font-black text-slate-900">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-slate-600 font-semibold block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievers Showcase List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                Featured Meritorious Students
              </span>
              <span className="text-slate-400 text-[11px]">Honors of Distinction</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.achievers.map((achiever, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-[#0c2340] transition-colors leading-tight">
                        {achiever.name}
                      </h5>
                      {achiever.tag && (
                        <span className="bg-amber-100 text-amber-900 text-[9px] font-black px-1.5 py-0.5 rounded-md shrink-0 border border-amber-300">
                          {achiever.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-extrabold text-blue-900">
                      {achiever.scoreOrRank}
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug">
                      {achiever.subtext}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-200/70 text-[10px] text-slate-500 leading-tight">
                    {achiever.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls (SRM Welkin Style) */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 select-none">
          {/* Carousel Arrows & Dot Indicators */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-xs transition-colors cursor-pointer"
              aria-label="Previous Category"
              title="Previous Category (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-1.5">
              {categories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeSlide ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-xs transition-colors cursor-pointer"
              aria-label="Next Category"
              title="Next Category (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              Category {activeSlide + 1} of {categories.length}
            </span>
          </div>

          {/* Action & Close Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => handleActionClick(current.targetTab)}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#0c2340] hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{current.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
