import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Sparkles, 
  GraduationCap, 
  Flame,
  Crown
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
  scoreOrAward: string;
  subtitle: string;
  image: string;
  tag?: string;
}

interface SlideData {
  id: string;
  tabLabel: string;
  categoryTitle: string;
  eventBadge: string;
  congratsTop: string;
  congratsBottom: string;
  primaryAwardIcon: React.ElementType;
  keyHighlights: { icon: string; text: string }[];
  topAchievers: Achiever[];
  bottomAchievers: Achiever[];
  summaryTally: string;
  targetTab: TabType;
  actionText: string;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({
  isOpen,
  onClose,
  setCurrentTab
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 'class-10th',
      tabLabel: '10th Board Star Achievers',
      categoryTitle: 'JKBOSE CLASS 10TH BOARD STAR ACHIEVERS — 2025–26',
      eventBadge: 'OFFICIAL JKBOSE BOARD RESULTS • 100% PASS RATE • DISTRICT BANDIPORA RANKS',
      congratsTop: 'THE MANAGEMENT, PRINCIPAL & FACULTY OF S.M.S. ISLAMIA MODEL SECONDARY SCHOOL, GAROORA',
      congratsBottom: 'HEARTILY CONGRATULATE OUR MERITORIOUS STUDENTS FOR STELLAR ACADEMIC EXCELLENCE & TOP DISTRICT HONORS.',
      primaryAwardIcon: Trophy,
      keyHighlights: [
        { icon: '🏆', text: '100% Board Pass Percentage' },
        { icon: '🥇', text: 'District Bandipora 1st Position' },
        { icon: '🎖️', text: '48 Distinctions (Above 80%)' },
        { icon: '✨', text: 'Centum: Math 100/100, Sci 99/100' }
      ],
      topAchievers: [
        {
          name: 'MOHAMMAD HUZAIF LONE',
          scoreOrAward: '492 / 500 (98.4%)',
          subtitle: 'Bandipora District 1st Rank • Math 100/100',
          image: '/images/achievers/imss_students/imss_student_1.jpg',
          tag: 'District Topper 🥇'
        },
        {
          name: 'SYED BAREENA FATIMA',
          scoreOrAward: '488 / 500 (97.6%)',
          subtitle: 'Girls Wing Topper • Science 100 • Urdu 99',
          image: '/images/achievers/imss_students/imss_student_2.jpg',
          tag: 'District Rank 2 ⭐'
        },
        {
          name: 'FAIZAN AHMAD BHAT',
          scoreOrAward: '481 / 500 (96.2%)',
          subtitle: 'School 3rd Position • All Subjects A1 Grade',
          image: '/images/achievers/imss_students/imss_student_3.jpg',
          tag: 'Star Distinction 🏆'
        }
      ],
      bottomAchievers: [
        {
          name: 'MEHVISH JAN',
          scoreOrAward: '476 (95.2%)',
          subtitle: 'Social Science Topper',
          image: '/images/achievers/imss_students/imss_student_4.jpg'
        },
        {
          name: 'OWAIS AHMAD DAR',
          scoreOrAward: '472 (94.4%)',
          subtitle: 'Distinction in Science',
          image: '/images/achievers/imss_students/imss_student_5.jpg'
        },
        {
          name: 'SOLIHA MUSHTAQ',
          scoreOrAward: '470 (94.0%)',
          subtitle: 'English 98/100',
          image: '/images/achievers/imss_students/imss_student_6.jpg'
        },
        {
          name: 'SHAHID BASHIR',
          scoreOrAward: '468 (93.6%)',
          subtitle: 'Mathematics 97/100',
          image: '/images/achievers/imss_students/imss_student_7.jpg'
        },
        {
          name: 'INSHA REHMAN',
          scoreOrAward: '465 (93.0%)',
          subtitle: 'Star First Division',
          image: '/images/achievers/imss_students/imss_student_8.jpg'
        },
        {
          name: 'DANISH BILAL',
          scoreOrAward: '462 (92.4%)',
          subtitle: 'Urdu Subject Topper',
          image: '/images/achievers/imss_students/imss_student_9.jpg'
        },
        {
          name: 'MUNAZAH TARIQ',
          scoreOrAward: '460 (92.0%)',
          subtitle: 'All Subjects A Grade',
          image: '/images/achievers/imss_students/imss_student_10.jpg'
        },
        {
          name: 'TABASUM ARA',
          scoreOrAward: '458 (91.6%)',
          subtitle: 'Science Distinction',
          image: '/images/achievers/imss_students/imss_student_11.jpg'
        }
      ],
      summaryTally: 'Total Appeared : 58  |  Distinctions : 48  |  1st Division : 10  |  Pass Rate : 100%',
      targetTab: 'results',
      actionText: 'View Complete JKBOSE Board Merit List'
    },
    {
      id: 'class-12th',
      tabLabel: '12th & Higher Academic Merit',
      categoryTitle: 'SENIOR SECONDARY & HIGHER ACADEMIC DISTINCTIONS — 2025–26',
      eventBadge: 'SENIOR SECONDARY EXCELLENCE • NEET / JEE QUALIFIERS • UNIVERSITY ADMISSIONS',
      congratsTop: 'COMMENDING OUR MERITORIOUS SENIOR SECONDARY SCHOLARS & DISTINGUISHED ALUMNI',
      congratsBottom: 'FOR EXCEPTIONAL SUCCESS IN BOARD DISTINCTIONS, NATIONAL ENTRANCES AND PROFESSIONAL SELECTIONS.',
      primaryAwardIcon: GraduationCap,
      keyHighlights: [
        { icon: '🎓', text: '100% University Placement' },
        { icon: '🩺', text: '14 NEET Medical Qualifiers' },
        { icon: '📐', text: '12 JEE & Engineering Selections' },
        { icon: '🌟', text: 'Stream Top Score: 97.8%' }
      ],
      topAchievers: [
        {
          name: 'SHEIKH BURHAN',
          scoreOrAward: '489 / 500 (97.8%)',
          subtitle: 'Medical Stream Topper • NEET Qualifier • Bio 99',
          image: '/images/achievers/imss_students/imss_student_12.jpg',
          tag: 'Medical Topper 🩺'
        },
        {
          name: 'AREEBA MANZOOR',
          scoreOrAward: '482 / 500 (96.4%)',
          subtitle: 'Non-Medical Topper • Engineering Aspirant • Math 99',
          image: '/images/achievers/imss_students/imss_student_13.jpg',
          tag: 'Non-Med Topper 📐'
        },
        {
          name: 'MUNEEB-UL-ISLAM',
          scoreOrAward: '475 / 500 (95.0%)',
          subtitle: 'Humanities Wing Topper • Pol. Science 99',
          image: '/images/achievers/imss_students/imss_student_14.jpg',
          tag: 'Humanities Star 📚'
        }
      ],
      bottomAchievers: [
        {
          name: 'SAIMA RASHID',
          scoreOrAward: '471 (94.2%)',
          subtitle: 'Commerce Stream Topper',
          image: '/images/achievers/imss_students/imss_student_15.jpg'
        },
        {
          name: 'DANISH FAROOQ',
          scoreOrAward: '468 (93.6%)',
          subtitle: 'Physics 98/100',
          image: '/images/achievers/imss_students/imss_student_16.jpg'
        },
        {
          name: 'UZMA JAN',
          scoreOrAward: '465 (93.0%)',
          subtitle: 'Chemistry 97/100',
          image: '/images/achievers/imss_students/imss_student_17.jpg'
        },
        {
          name: 'SAHIL BASHIR',
          scoreOrAward: '462 (92.4%)',
          subtitle: 'Engineering Aspirant',
          image: '/images/achievers/imss_students/imss_student_18.jpg'
        },
        {
          name: 'IFRA SHABIR',
          scoreOrAward: '460 (92.0%)',
          subtitle: 'History Distinction',
          image: '/images/achievers/imss_students/imss_student_19.jpg'
        },
        {
          name: 'YASIR AHMAD',
          scoreOrAward: '458 (91.6%)',
          subtitle: 'Biology 96/100',
          image: '/images/achievers/imss_students/imss_student_20.jpg'
        },
        {
          name: 'BISMA REHMAN',
          scoreOrAward: '455 (91.0%)',
          subtitle: 'Economics 97/100',
          image: '/images/achievers/imss_students/imss_student_21.jpg'
        },
        {
          name: 'FAZIL NAZIR',
          scoreOrAward: '452 (90.4%)',
          subtitle: 'Political Science 96',
          image: '/images/achievers/imss_students/imss_student_22.jpg'
        }
      ],
      summaryTally: 'Medical Wings : 14  |  Engineering Wings : 12  |  Distinctions : 92%  |  Alumni Placed : 100%',
      targetTab: 'academics',
      actionText: 'Explore Academic Wings & Senior Programs'
    },
    {
      id: 'co-curricular',
      tabLabel: 'Cultural, Qirat & Sports',
      categoryTitle: 'CULTURAL, HUSN-E-QIRAT, DEBATES & SPORTS CHAMPIONS — 2025–26',
      eventBadge: 'VALLEY-WIDE COMPETITIONS • DISTRICT INTER-SCHOOL CUPS • STATE HONORS',
      congratsTop: 'SALUTING OUR ILLUSTRIOUS STUDENT CHAMPIONS FOR BRINGING PRESTIGIOUS GLORY',
      congratsBottom: 'IN KASHMIR VALLEY HUSN-E-QIRAT, YOUTH PARLIAMENTARY DEBATES, ATHLETICS & INNOVATIONS.',
      primaryAwardIcon: Medal,
      keyHighlights: [
        { icon: '🥇', text: '1st Prize Kashmir Valley Husn-e-Qirat' },
        { icon: '🏆', text: '16 District Championship Trophies' },
        { icon: '🏃', text: 'Athletics Relay Gold Medals' },
        { icon: '🔬', text: 'State Science & Robotics Innovation Award' }
      ],
      topAchievers: [
        {
          name: 'HAFIZ ABRAR AHMAD',
          scoreOrAward: '1ST POSITION (GOLD)',
          subtitle: 'Kashmir Valley Inter-School Husn-e-Qirat Championship',
          image: '/images/achievers/imss_students/imss_student_23.jpg',
          tag: 'Valley Champion 🥇'
        },
        {
          name: 'ZAIRA SHAFI & TEAM',
          scoreOrAward: 'CHAMPIONS TROPHY & GOLD',
          subtitle: 'Bandipora District Youth Parliamentary Debate',
          image: '/images/achievers/imss_students/imss_student_24.jpg',
          tag: 'Debate Champion 🏆'
        },
        {
          name: 'SENIOR ATHLETICS RELAY',
          scoreOrAward: 'GOLD MEDAL & CUP',
          subtitle: 'District Interschool 4x100m Track & Field Meet',
          image: '/images/achievers/imss_students/imss_student_25.jpg',
          tag: 'Track Champions 🏃'
        }
      ],
      bottomAchievers: [
        {
          name: 'HAMZA MALIK',
          scoreOrAward: 'STATE EXPO 1ST',
          subtitle: 'J&K UT Robotics & Science',
          image: '/images/achievers/imss_students/imss_student_26.jpg'
        },
        {
          name: 'NOOR-UL-HUDA',
          scoreOrAward: 'NAAT GOLD',
          subtitle: 'Inter-School Naat Khuwani',
          image: '/images/achievers/imss_students/imss_student_27.jpg'
        },
        {
          name: 'SUHAIL DAR',
          scoreOrAward: 'CHESS TROPHY',
          subtitle: 'District Interschool Chess',
          image: '/images/achievers/imss_students/imss_student_28.jpg'
        },
        {
          name: 'MEHAK BANO',
          scoreOrAward: 'CALLIGRAPHY 1ST',
          subtitle: 'Valley Islamic Art Meet',
          image: '/images/achievers/imss_students/imss_student_29.jpg'
        },
        {
          name: 'ADEEL RATHER',
          scoreOrAward: 'BADMINTON CUP',
          subtitle: 'District Singles Champion',
          image: '/images/achievers/imss_students/imss_student_30.jpg'
        },
        {
          name: 'SEHRISH JAN',
          scoreOrAward: 'ESSAY 1ST RANK',
          subtitle: 'State Ethics & Environment',
          image: '/images/achievers/imss_students/imss_student_31.jpg'
        },
        {
          name: 'FAHAD NAZIR',
          scoreOrAward: 'QUIZ CHAMPION',
          subtitle: 'District Knowledge Bowl',
          image: '/images/achievers/imss_students/imss_student_32.jpg'
        },
        {
          name: 'AROOJ FATIMA',
          scoreOrAward: 'SPEECH PRIZE',
          subtitle: 'Urdu Eloquence Contest',
          image: '/images/achievers/imss_students/imss_student_33.jpg'
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
          aria-label="Previous Slide"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full shadow-xl border-2 border-white cursor-pointer transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Next Slide"
          title="Next Slide (Right Arrow)"
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
          {/* Top Ceremonial Scalloped Maroon Curtain Valance with Golden Fringe */}
          <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#3a0107] to-[#590612] border-b-2 border-amber-400/60 pb-3 sm:pb-4 pt-3 sm:pt-4 px-4 sm:px-6">
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

            {/* Category Navigation Pills at top of Curtain */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 mb-3 overflow-x-auto no-scrollbar">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                    idx === activeSlide
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 border-white shadow-lg scale-105'
                      : 'bg-black/40 text-amber-200/90 hover:bg-black/60 border-amber-400/30'
                  }`}
                >
                  <Trophy className="w-3 h-3 text-amber-500 shrink-0" />
                  <span>{s.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* School Header: Logo, Official Title, Location & Registration */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
              {/* Official Sunburst School Crest */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center drop-shadow-[0_4px_12px_rgba(245,158,11,0.6)]">
                <img
                  src="/images/achievers/school_sunburst.png"
                  alt="SMS Islamia Model Secondary School Garoora Crest"
                  className="w-full h-full object-contain"
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

          {/* Golden Award Highlights Banner on Maroon Curtain */}
          <div className="relative bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border-y border-amber-400/40 py-2 px-3 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-center text-[10px] sm:text-xs font-black tracking-wide text-amber-200">
              {current.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-amber-400/30">
                  <span className="text-sm">{hl.icon}</span>
                  <span className="text-amber-100">{hl.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ceremonial Congratulations Message */}
          <div className="text-center px-4 sm:px-8 pt-3 sm:pt-4 pb-2">
            {/* Elegant Golden Award Ribbon */}
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

            {/* Event Title Banner with Golden Wreath Icon */}
            <div className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 rounded-xl shadow-lg border border-white">
              <AwardIcon className="w-4 h-4 text-slate-950 shrink-0" />
              <h2
                className="text-xs sm:text-sm md:text-base font-black tracking-wider uppercase font-serif"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {current.categoryTitle}
              </h2>
              <AwardIcon className="w-4 h-4 text-slate-950 shrink-0" />
            </div>
          </div>

          {/* Student Showcase: Top 3 Star Toppers */}
          <div className="px-3 sm:px-6 py-2 sm:py-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-300 mb-2">
              <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="uppercase tracking-widest text-[11px] font-black">Merit Star Champions</span>
              <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>

            <div className="flex items-end justify-center gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {current.topAchievers.map((achiever, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center text-center group transition-transform hover:scale-105 duration-200 ${
                    idx === 0 ? 'order-1 sm:order-2 scale-105' : idx === 1 ? 'order-2 sm:order-1' : 'order-3'
                  }`}
                >
                  {/* Photo Frame with Gold Ribbon / Border */}
                  <div className="relative">
                    {/* Golden Crown / Badge above 1st Rank */}
                    {achiever.tag && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-md border border-white whitespace-nowrap">
                        {achiever.tag}
                      </div>
                    )}

                    <div className="bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 p-1 rounded-xl shadow-xl">
                      <div className="w-20 sm:w-24 md:w-28 aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden border border-white/60">
                        <img
                          src={achiever.image}
                          alt={achiever.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Student Name */}
                  <span
                    className="font-serif font-black text-amber-200 text-[10px] sm:text-xs md:text-sm uppercase tracking-tight mt-2 leading-tight block max-w-[130px]"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {achiever.name}
                  </span>

                  {/* Marks / Rank */}
                  <span
                    className="font-serif font-black text-amber-400 text-[11px] sm:text-xs md:text-sm leading-none mt-1 block"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {achiever.scoreOrAward}
                  </span>

                  {/* Subtitle */}
                  <span className="text-[9px] sm:text-[10px] text-amber-100/80 leading-tight block max-w-[130px] mt-0.5 font-medium">
                    {achiever.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Showcase: Bottom 8 Meritorious Achievers */}
          <div className="px-3 sm:px-6 py-2 bg-black/30 border-t border-amber-400/30">
            <div className="flex items-center justify-between text-[11px] font-bold text-amber-200 px-2 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Meritorious Distinctions & Stream Toppers</span>
              </span>
              <span className="text-amber-300/80 hidden sm:inline">SMS Islamia Model Secondary School</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5">
              {current.bottomAchievers.map((student, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="bg-gradient-to-b from-amber-400/80 to-amber-600/80 p-0.5 rounded-lg shadow-sm">
                    <div className="w-12 sm:w-14 md:w-16 aspect-[1/1] sm:aspect-[3/4] bg-slate-900 rounded-md overflow-hidden border border-white/50">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <span
                    className="font-serif font-bold text-amber-100 text-[8px] sm:text-[9.5px] uppercase tracking-tight mt-1 leading-tight block line-clamp-2"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {student.name}
                  </span>

                  <span
                    className="font-serif font-black text-amber-400 text-[8.5px] sm:text-[10px] leading-tight block mt-0.5"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {student.scoreOrAward}
                  </span>

                  <span className="text-[7.5px] sm:text-[8.5px] text-amber-200/70 leading-none block line-clamp-1">
                    {student.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bar: Golden Tally & Action Buttons */}
          <div className="bg-gradient-to-r from-[#2b0106] via-[#4a030d] to-[#2b0106] p-3 sm:p-4 border-t-2 border-amber-400/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Summary Tally */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <p
                className="font-serif font-bold text-amber-200 text-[11px] sm:text-xs md:text-sm tracking-wide"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {current.summaryTally}
              </p>
            </div>

            {/* Slide Dots & Action CTA Button */}
            <div className="flex items-center gap-3">
              {/* Dots */}
              <div className="flex items-center space-x-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeSlide ? 'w-6 bg-amber-400' : 'w-2 bg-amber-400/40 hover:bg-amber-400/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
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
