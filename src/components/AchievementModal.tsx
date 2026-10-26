import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Award, 
  Medal, 
  Sparkles, 
  GraduationCap
} from 'lucide-react';
import type { TabType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentTab: (tab: TabType) => void;
}

interface Achiever {
  name: string;
  badge: string;
  scoreOrAward: string;
  achievement: string;
  gender: 'boy' | 'girl';
}

interface SlideData {
  id: string;
  eventName: string;
  congratsTop: string;
  congratsBottom: string;
  primaryAwardIcon: React.ElementType;
  achievers: Achiever[];
  summaryTally: string;
  targetTab: TabType;
  actionText: string;
}

// Boy Student Avatar Icon (Indicates No Image Available)
const BoyAvatar: React.FC = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-[#132238] to-[#0c1829] p-1.5 select-none overflow-hidden">
    {/* Boy Silhouette with Uniform */}
    <svg viewBox="0 0 80 90" fill="none" className="w-16 h-18 sm:w-18 sm:h-20 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
      {/* Boy Hair & Head */}
      <path d="M26 30C26 18 33 10 40 10C47 10 54 18 54 30C54 38 48 45 40 45C32 45 26 38 26 30Z" fill="#fcd34d" fillOpacity="0.9" />
      <path d="M25 25C26 16 33 9 40 9C47 9 54 16 55 25C51 21 44 20 40 21C35 20 28 21 25 25Z" fill="#b45309" />
      {/* Neck */}
      <rect x="36" y="44" width="8" height="9" fill="#fde68a" />
      {/* School Uniform Shoulders */}
      <path d="M12 85C12 66 22 53 40 53C58 53 68 66 68 85H12Z" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="1.5" />
      {/* Shirt Collar & Tie */}
      <polygon points="34,53 40,65 46,53" fill="#ffffff" />
      <polygon points="40,58 37,76 40,84 43,76" fill="#dc2626" />
    </svg>
    {/* "No Image" Label Pill */}
    <span className="absolute bottom-1 bg-black/85 text-amber-300 text-[8px] sm:text-[8.5px] font-black px-1.5 py-0.5 rounded border border-amber-400/50 tracking-wider uppercase shadow-sm">
      No Image
    </span>
  </div>
);

// Girl Student Avatar Icon (Indicates No Image Available)
const GirlAvatar: React.FC = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-[#2d1124] to-[#1a0815] p-1.5 select-none overflow-hidden">
    {/* Girl Silhouette with School Scarf / Hijab */}
    <svg viewBox="0 0 80 90" fill="none" className="w-16 h-18 sm:w-18 sm:h-20 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
      {/* Head Scarf Draping */}
      <path d="M22 36C22 18 30 8 40 8C50 8 58 18 58 36C58 48 54 58 40 58C26 58 22 48 22 36Z" fill="#047857" stroke="#fbbf24" strokeWidth="1.5" />
      {/* Inner Face Oval */}
      <ellipse cx="40" cy="33" rx="11" ry="14" fill="#fde68a" />
      {/* Scarf chin wrap */}
      <path d="M28 38C32 44 48 44 52 38C52 46 47 52 40 52C33 52 28 46 28 38Z" fill="#065f46" />
      {/* School Uniform Shoulders with Draped Scarf */}
      <path d="M12 85C12 65 24 55 40 55C56 55 68 65 68 85H12Z" fill="#064e3b" stroke="#fbbf24" strokeWidth="1.5" />
      {/* Brooch & Scarf fold */}
      <circle cx="40" cy="57" r="2.5" fill="#f59e0b" />
      <polygon points="38,59 40,75 42,59" fill="#10b981" />
    </svg>
    {/* "No Image" Label Pill */}
    <span className="absolute bottom-1 bg-black/85 text-amber-300 text-[8px] sm:text-[8.5px] font-black px-1.5 py-0.5 rounded border border-amber-400/50 tracking-wider uppercase shadow-sm">
      No Image
    </span>
  </div>
);

export const AchievementModal: React.FC<AchievementModalProps> = ({
  isOpen,
  onClose,
  setCurrentTab
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 'class-10th',
      eventName: 'JKBOSE CLASS 10TH ANNUAL BOARD EXAMINATION — 2026',
      congratsTop: 'THE MANAGEMENT, PRINCIPAL & FACULTY OF S.M.S. ISLAMIA MODEL SECONDARY SCHOOL, GAROORA',
      congratsBottom: 'HEARTILY CONGRATULATE OUR CLASS 10TH MERITORIOUS STUDENTS FOR BRINGING LAURELS TO BANDIPORA.',
      primaryAwardIcon: Trophy,
      achievers: [
        {
          name: 'MOHAMMAD HUZAIF LONE',
          badge: 'DISTRICT 1ST RANK 🥇',
          scoreOrAward: '492 / 500 (98.4%)',
          achievement: 'Bandipora District Topper • Mathematics 100/100',
          gender: 'boy'
        },
        {
          name: 'SYED BAREENA FATIMA',
          badge: 'DISTRICT 2ND RANK ⭐',
          scoreOrAward: '488 / 500 (97.6%)',
          achievement: 'Girls Wing Topper • Science 100 • Urdu 99',
          gender: 'girl'
        },
        {
          name: 'FAIZAN AHMAD BHAT',
          badge: 'SCHOOL 3RD RANK 🏆',
          scoreOrAward: '481 / 500 (96.2%)',
          achievement: 'Star Distinction • All Subjects A1 Grade',
          gender: 'boy'
        },
        {
          name: 'MEHVISH JAN',
          badge: 'STAR DISTINCTION 🌟',
          scoreOrAward: '476 / 500 (95.2%)',
          achievement: 'Social Science 98/100 • Urdu Subject Topper',
          gender: 'girl'
        },
        {
          name: 'OWAIS AHMAD DAR',
          badge: 'STAR DISTINCTION 🎖️',
          scoreOrAward: '472 / 500 (94.4%)',
          achievement: 'Mathematics 97/100 • Star First Division',
          gender: 'boy'
        }
      ],
      summaryTally: 'Total Appeared : 58  |  Distinctions : 48  |  1st Division : 10  |  Pass Rate : 100%',
      targetTab: 'results',
      actionText: 'View Complete JKBOSE Board Merit List'
    },
    {
      id: 'class-12th',
      eventName: 'SENIOR SECONDARY MERIT & COMPETITIVE ENTRANCES (NEET / JEE) — 2026',
      congratsTop: 'COMMENDING OUR MERITORIOUS SENIOR SECONDARY SCHOLARS & DISTINGUISHED ALUMNI',
      congratsBottom: 'FOR EXCEPTIONAL SUCCESS IN BOARD DISTINCTIONS, NATIONAL ENTRANCES AND PROFESSIONAL SELECTIONS.',
      primaryAwardIcon: GraduationCap,
      achievers: [
        {
          name: 'SHEIKH BURHAN',
          badge: 'NEET QUALIFIER 🩺',
          scoreOrAward: '489 / 500 (97.8%)',
          achievement: 'Medical Stream Topper • Biology 99/100',
          gender: 'boy'
        },
        {
          name: 'AREEBA MANZOOR',
          badge: 'JEE SELECTED 📐',
          scoreOrAward: '482 / 500 (96.4%)',
          achievement: 'Non-Medical Stream Topper • Math 99/100',
          gender: 'girl'
        },
        {
          name: 'MUNEEB-UL-ISLAM',
          badge: 'STREAM TOPPER 📚',
          scoreOrAward: '475 / 500 (95.0%)',
          achievement: 'Humanities Stream Topper • Pol. Science 99',
          gender: 'boy'
        },
        {
          name: 'SAIMA RASHID',
          badge: 'COMMERCE TOPPER 📈',
          scoreOrAward: '471 / 500 (94.2%)',
          achievement: 'Accountancy 100/100 • Economics 96/100',
          gender: 'girl'
        },
        {
          name: 'DANISH FAROOQ',
          badge: 'STAR DISTINCTION 🔬',
          scoreOrAward: '468 / 500 (93.6%)',
          achievement: 'Physics Distinction 98/100 • Science Merit',
          gender: 'boy'
        }
      ],
      summaryTally: 'Medical / NEET : 14  |  Engineering / JEE : 12  |  Distinctions : 92%  |  Placements : 100%',
      targetTab: 'academics',
      actionText: 'Explore Academic Wings & Senior Programs'
    },
    {
      id: 'co-curricular',
      eventName: 'KASHMIR VALLEY & DISTRICT CO-CURRICULAR & SPORTS CHAMPIONSHIP — 2026',
      congratsTop: 'SALUTING OUR ILLUSTRIOUS STUDENT CHAMPIONS FOR BRINGING PRESTIGIOUS GLORY',
      congratsBottom: 'IN KASHMIR VALLEY HUSN-E-QIRAT, YOUTH PARLIAMENTARY DEBATES, ATHLETICS & INNOVATIONS.',
      primaryAwardIcon: Medal,
      achievers: [
        {
          name: 'HAFIZ ABRAR AHMAD',
          badge: '1ST POSITION GOLD 🥇',
          scoreOrAward: 'CHAMPIONS CUP',
          achievement: 'Kashmir Valley Inter-School Husn-e-Qirat Championship',
          gender: 'boy'
        },
        {
          name: 'ZAIRA SHAFI & TEAM',
          badge: 'BEST SPEAKER & GOLD 🏆',
          scoreOrAward: 'DISTRICT TROPHY',
          achievement: 'Bandipora District Youth Parliamentary Debate',
          gender: 'girl'
        },
        {
          name: 'SENIOR ATHLETICS RELAY',
          badge: '1ST POSITION GOLD 🏃',
          scoreOrAward: 'GOLD MEDAL & CUP',
          achievement: 'District Bandipora Inter-School 4x100m Track Meet',
          gender: 'boy'
        },
        {
          name: 'HAMZA MALIK',
          badge: 'STATE INNOVATION AWARD 🔬',
          scoreOrAward: '1ST PRIZE & CUP',
          achievement: 'J&K UT Science & Robotics Innovation Expo 2026',
          gender: 'boy'
        },
        {
          name: 'NOOR-UL-HUDA',
          badge: 'GOLD MEDALIST 🌟',
          scoreOrAward: '1ST PRIZE',
          achievement: 'Kashmir Valley Inter-School Naat Khuwani Championship',
          gender: 'girl'
        }
      ],
      summaryTally: 'Gold Medals : 28  |  District Championship Cups : 16  |  Valley Trophies : 6  |  State Finalists : 8',
      targetTab: 'facilities',
      actionText: 'Explore Sports Facilities & Cultural Life'
    }
  ];

  const current = slides[activeSlide];
  const AwardIcon = current.primaryAwardIcon;

  // Keyboard navigation & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleAction = (tab: TabType) => {
    onClose();
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-sm select-none animate-fade-in no-print overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Outer Card Wrapper */}
      <div className="relative w-full max-w-5xl my-auto">
        {/* Prominent Circular Close Button ("X") at Top-Right */}
        <button
          onClick={onClose}
          className="absolute -top-3.5 -right-2 sm:-top-4 sm:-right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full flex items-center justify-center shadow-2xl border-2 border-white cursor-pointer transition-transform hover:scale-110 active:scale-95"
          aria-label="Close Announcement"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Left Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full shadow-xl border-2 border-white cursor-pointer transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Previous Event"
          title="Previous Event (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full shadow-xl border-2 border-white cursor-pointer transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Next Event"
          title="Next Event (Right Arrow)"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* MAIN STAGE CARD WITH CEREMONIAL MAROON VELVET CURTAINS & GOLDEN AWARDS */}
        <div
          className="relative rounded-2xl sm:rounded-3xl border-4 border-amber-400/90 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden text-white"
          style={{
            background: 'radial-gradient(ellipse at top, #7b0d1e 0%, #4a030d 50%, #2b0106 100%)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Ceremonial Maroon Curtain Valance with Golden Fringe */}
          <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#3a0107] to-[#590612] border-b-2 border-amber-400/60 pb-3 sm:pb-4 pt-4 sm:pt-5 px-4 sm:px-6">
            {/* Velvet Drapery Texture / Pleats */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.4) 20px, rgba(0,0,0,0.4) 40px)'
              }}
            />

            {/* Golden Fringe / Tassel Line on Bottom of Valance */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            />

            {/* School Header: Clean Official Logo + School Title + Location */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
              {/* Clean Official School Logo (No sunburst border) */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-2 border-amber-400 shrink-0 shadow-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logo.jpg"
                  alt="SMS Islamia Model Secondary School Garoora Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Institution Title */}
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/40 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-300 mb-0.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Celebrating Educational Excellence Since 1980</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </div>

                <h1
                  className="text-base sm:text-xl md:text-2xl font-black text-amber-300 tracking-wider uppercase font-serif drop-shadow-md leading-tight"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  S.M.S. ISLAMIA MODEL SECONDARY SCHOOL
                </h1>

                <p className="text-[11px] sm:text-xs text-amber-100 font-semibold tracking-wide">
                  Garoora, Bandipora, Jammu & Kashmir • Affiliated to JKBOSE • UDISE Code: {SCHOOL_INFO.udiseCode}
                </p>
              </div>
            </div>
          </div>

          {/* Ceremonial Congratulations Message & CLEAR EVENT NAME BANNER */}
          <div className="text-center px-4 sm:px-8 pt-3 sm:pt-4 pb-1">
            {/* Elegant Golden Divider */}
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-amber-400 inline-block"></span>
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-amber-400 inline-block"></span>
            </div>

            <div
              className="font-serif font-black text-amber-200 text-[10px] sm:text-[11.5px] md:text-xs leading-relaxed max-w-3xl mx-auto tracking-wide uppercase"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              <p className="text-amber-300 font-extrabold">{current.congratsTop}</p>
              <p className="text-amber-100/90 mt-0.5">{current.congratsBottom}</p>
            </div>

            {/* HIGHLY VISIBLE EVENT NAME BANNER WITH GOLDEN AWARDS */}
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mt-3 px-5 sm:px-8 py-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 rounded-2xl shadow-xl border-2 border-white">
              <AwardIcon className="w-5 h-5 text-slate-950 shrink-0" />
              <h2
                className="text-xs sm:text-base md:text-lg font-black tracking-wider uppercase font-serif"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {current.eventName}
              </h2>
              <AwardIcon className="w-5 h-5 text-slate-950 shrink-0" />
            </div>
          </div>

          {/* Student Showcase: EXACTLY 5 STUDENTS WITH BOY / GIRL "NO IMAGE" AVATARS */}
          <div className="px-3 sm:px-6 py-4 sm:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {current.achievers.map((achiever, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center group bg-black/35 hover:bg-black/55 p-3 rounded-2xl border border-amber-400/40 hover:border-amber-400 shadow-md transition-all duration-300"
                >
                  {/* Clear Golden Achievement Tag at top of card */}
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md border border-white whitespace-nowrap mb-2 leading-tight">
                    {achiever.badge}
                  </div>

                  {/* Boy / Girl Avatar Frame Indicating No Photo */}
                  <div className="bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 p-1 rounded-xl shadow-xl w-24 sm:w-28 aspect-[3/4]">
                    <div className="w-full h-full rounded-lg overflow-hidden border border-white/60">
                      {achiever.gender === 'boy' ? (
                        <BoyAvatar />
                      ) : (
                        <GirlAvatar />
                      )}
                    </div>
                  </div>

                  {/* Student Name */}
                  <span
                    className="font-serif font-black text-amber-200 text-xs sm:text-sm uppercase tracking-tight mt-2.5 leading-tight block"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {achiever.name}
                  </span>

                  {/* Score / Award Title */}
                  <span
                    className="font-serif font-black text-amber-400 text-xs sm:text-sm leading-snug mt-1 block"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {achiever.scoreOrAward}
                  </span>

                  {/* Clearly Visible Achievement Description */}
                  <span className="text-[10px] sm:text-[11px] text-amber-100 font-semibold leading-tight block mt-1.5 px-1">
                    {achiever.achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bar: Golden Tally & Navigation Controls */}
          <div className="bg-gradient-to-r from-[#2b0106] via-[#4a030d] to-[#2b0106] p-3 sm:p-4 border-t-2 border-amber-400/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Summary Tally */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <p
                className="font-serif font-bold text-amber-200 text-xs sm:text-sm tracking-wide"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {current.summaryTally}
              </p>
            </div>

            {/* Slide Dots & Action CTA Button */}
            <div className="flex items-center gap-3">
              {/* Event Slide Indicator & Dots */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-amber-300 font-semibold hidden sm:inline">
                  Event {activeSlide + 1} of {slides.length}
                </span>
                <div className="flex items-center space-x-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide ? 'w-6 bg-amber-400' : 'w-2 bg-amber-400/40 hover:bg-amber-400/70'
                      }`}
                      aria-label={`Go to event ${idx + 1}`}
                      title={`Go to event ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleAction(current.targetTab)}
                className="px-3.5 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{current.actionText}</span>
              </button>

              <button
                onClick={onClose}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-amber-200 font-bold text-xs rounded-xl border border-amber-400/40 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
