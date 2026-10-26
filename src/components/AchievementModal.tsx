import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { TabType } from '../types';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentTab: (tab: TabType) => void;
}

interface Achiever {
  name: string;
  score: string;
  image: string;
  tag?: string;
}

interface SlideData {
  id: string;
  categoryTitle: string;
  congratsTop: string;
  congratsBottom: string;
  topAchievers: Achiever[];
  bottomAchievers: Achiever[];
  summaryTally: string;
  targetTab: TabType;
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
      categoryTitle: 'CLASS 10TH BOARD TOPPERS 2025',
      congratsTop: 'THE IMSS FAMILY CONGRATULATES OUR STUDENTS OF CLASS 10TH ON THEIR REMARKABLE ACCOMPLISHMENT.',
      congratsBottom: 'THE SCHOOL ADMINISTRATION, TEACHERS, PARENTS, AND FELLOW STUDENTS ACKNOWLEDGE YOUR OUTSTANDING PERFORMANCE.',
      topAchievers: [
        {
          name: 'SYED TAQWA QADRI',
          score: '498',
          image: '/images/achievers/topper_1.jpg'
        },
        {
          name: 'HARMAN KOUR BALI',
          score: '498',
          image: '/images/achievers/topper_2.jpg'
        },
        {
          name: 'TOIBA MUSHTAQ BACHA',
          score: '497',
          image: '/images/achievers/topper_3.jpg'
        }
      ],
      bottomAchievers: [
        { name: 'PRABLEEN KOUR', score: '495', image: '/images/achievers/student_1.jpg' },
        { name: 'DUHA AJAZ', score: '495', image: '/images/achievers/student_2.jpg' },
        { name: 'AVLEEN KOUR', score: '495', image: '/images/achievers/student_3.jpg' },
        { name: 'KANNANJIT KOUR', score: '492', image: '/images/achievers/student_4.jpg' },
        { name: 'SADIA BHAT', score: '492', image: '/images/achievers/student_5.jpg' },
        { name: 'GAGANJOT KOUR', score: '492', image: '/images/achievers/student_6.jpg' },
        { name: 'JANNAT ALTAF WANI', score: '491', image: '/images/achievers/student_7.jpg' },
        { name: 'ZAINAB FIRDOUS', score: '490', image: '/images/achievers/student_8.jpg' }
      ],
      summaryTally: 'Dist : 85,  Ist Div: 2,  IInd Div: 1',
      targetTab: 'results'
    },
    {
      id: 'class-12th',
      categoryTitle: 'CLASS 12TH BOARD TOPPERS 2025',
      congratsTop: 'THE IMSS FAMILY CONGRATULATES OUR HIGHER SECONDARY STUDENTS ON THEIR EXCEPTIONAL MERIT.',
      congratsBottom: 'THE SCHOOL ADMINISTRATION, TEACHERS, PARENTS, AND FELLOW STUDENTS ACKNOWLEDGE YOUR OUTSTANDING PERFORMANCE.',
      topAchievers: [
        {
          name: 'SHEIKH BURHAN',
          score: '496',
          image: '/images/achievers/topper_c12_1.jpg'
        },
        {
          name: 'AREEBA MANZOOR',
          score: '494',
          image: '/images/achievers/topper_c12_2.jpg'
        },
        {
          name: 'MUNEEB-UL-ISLAM',
          score: '491',
          image: '/images/achievers/topper_c12_3.jpg'
        }
      ],
      bottomAchievers: [
        { name: 'SAIMA RASHID', score: '489', image: '/images/achievers/student_c12_1.jpg' },
        { name: 'DANISH FAROOQ', score: '488', image: '/images/achievers/student_c12_2.jpg' },
        { name: 'UZMA JAN', score: '486', image: '/images/achievers/student_c12_3.jpg' },
        { name: 'SAHIL BASHIR', score: '485', image: '/images/achievers/student_c12_4.jpg' },
        { name: 'IFRA SHABIR', score: '484', image: '/images/achievers/student_c12_5.jpg' },
        { name: 'YASIR AHMAD', score: '482', image: '/images/achievers/student_c12_6.jpg' },
        { name: 'BISMA REHMAN', score: '480', image: '/images/achievers/student_c12_7.jpg' },
        { name: 'FAZIL NAZIR', score: '478', image: '/images/achievers/student_c12_8.jpg' }
      ],
      summaryTally: 'Dist : 92,  Ist Div: 4,  IInd Div: 0',
      targetTab: 'academics'
    },
    {
      id: 'co-curricular',
      categoryTitle: 'CULTURAL & CO-CURRICULAR CHAMPIONS 2025',
      congratsTop: 'CELEBRATING OUR DISTINGUISHED CHAMPIONS IN STATE & REGIONAL INTER-SCHOOL COMPETITIONS.',
      congratsBottom: 'HONORING OUTSTANDING EXCELLENCE IN QIRAT, PARLIAMENTARY DEBATE, ATHLETICS & INNOVATIONS.',
      topAchievers: [
        {
          name: 'HAFIZ ABRAR AHMAD',
          score: '1ST POS (QIRAT)',
          image: '/images/achievers/topper_1.jpg'
        },
        {
          name: 'ZAIRA SHAFI & TEAM',
          score: 'GOLD (DEBATE)',
          image: '/images/achievers/topper_2.jpg'
        },
        {
          name: 'ATHLETICS SQUAD',
          score: 'CHAMPIONS CUP',
          image: '/images/achievers/topper_3.jpg'
        }
      ],
      bottomAchievers: [
        { name: 'HAMZA MALIK', score: 'SCIENCE EXPO', image: '/images/achievers/student_1.jpg' },
        { name: 'NOOR-UL-HUDA', score: 'NAAT KHUWANI', image: '/images/achievers/student_2.jpg' },
        { name: 'SUHAIL DAR', score: 'CHESS TROPHY', image: '/images/achievers/student_3.jpg' },
        { name: 'MEHAK BANO', score: 'CALLIGRAPHY', image: '/images/achievers/student_4.jpg' },
        { name: 'ADEEL RATHER', score: 'BADMINTON', image: '/images/achievers/student_5.jpg' },
        { name: 'SEHRISH JAN', score: 'ESSAY COMP', image: '/images/achievers/student_6.jpg' },
        { name: 'FAHAD NAZIR', score: 'QUIZ CHAMP', image: '/images/achievers/student_7.jpg' },
        { name: 'AROOJ FATIMA', score: 'SPEECH PRIZE', image: '/images/achievers/student_8.jpg' }
      ],
      summaryTally: 'Trophies : 16,  Gold Medals : 28,  UT Selections : 8',
      targetTab: 'facilities'
    }
  ];

  const current = slides[activeSlide];

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs select-none animate-fade-in no-print overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl my-auto">
        {/* Prominent Blue Circular Close Button ("X") positioned at top right */}
        <button
          onClick={onClose}
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-40 w-10 h-10 sm:w-11 sm:h-11 bg-[#4361ee] hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white cursor-pointer transition-transform hover:scale-110 active:scale-95"
          aria-label="Close Announcement"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Carousel Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 text-white/75 hover:text-white transition-opacity cursor-pointer drop-shadow-md group"
          aria-label="Previous Slide"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2] group-hover:scale-110 transition-transform" />
        </button>

        {/* Carousel Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 text-white/75 hover:text-white transition-opacity cursor-pointer drop-shadow-md group"
          aria-label="Next Slide"
          title="Next (Right Arrow)"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2] group-hover:scale-110 transition-transform" />
        </button>

        {/* Ceremonial Golden Yellow Card matching user reference */}
        <div
          className="relative bg-[#f1d16f] border-[3px] border-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-7 text-slate-950 overflow-hidden"
          style={{ backgroundColor: '#f1d16f' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section: Sunburst Crest + School Title + Congratulations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left mb-3 sm:mb-4 px-2">
            {/* Radiant Sunburst School Crest */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 mx-auto sm:mx-0 flex items-center justify-center">
              <img
                src="/images/achievers/school_sunburst.png"
                alt="SMS Islamia Model Secondary School Crest"
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* School Name & Congratulations */}
            <div className="flex-1 text-center">
              <h2
                className="text-base sm:text-lg md:text-xl font-black text-slate-950 tracking-wider uppercase font-serif leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                SMS ISLAMIA MODEL SECONDARY SCHOOL, GAROORA
              </h2>

              {/* Decorative Divider 1 */}
              <div className="flex items-center justify-center my-1 select-none opacity-70">
                <span className="h-[1px] w-12 sm:w-24 bg-slate-900 inline-block"></span>
                <span className="mx-2 text-slate-900 text-xs">❖</span>
                <span className="h-[1px] w-12 sm:w-24 bg-slate-900 inline-block"></span>
              </div>

              {/* Congratulations Red Subtext */}
              <div
                className="text-[#8b0000] font-bold text-[9px] sm:text-[10px] md:text-[11.5px] leading-tight sm:leading-snug tracking-wide font-serif max-w-2xl mx-auto"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                <p className="uppercase">{current.congratsTop}</p>
                <p className="uppercase mt-0.5">{current.congratsBottom}</p>
              </div>

              {/* Decorative Divider 2 */}
              <div className="flex items-center justify-center my-1 select-none opacity-70">
                <span className="h-[1px] w-16 sm:w-32 bg-slate-900 inline-block"></span>
                <span className="mx-2 text-slate-900 text-xs">❖</span>
                <span className="h-[1px] w-16 sm:w-32 bg-slate-900 inline-block"></span>
              </div>
            </div>
          </div>

          {/* Achievement Category Title */}
          <div className="text-center my-2 sm:my-3">
            <h3
              className="text-base sm:text-xl md:text-2xl font-black text-slate-950 tracking-wider uppercase font-serif"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              {current.categoryTitle}
            </h3>
          </div>

          {/* Top Row: 3 Star Achievers */}
          <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-12 my-2 sm:my-3 px-4">
            {current.topAchievers.map((achiever, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="bg-white p-0.5 border-2 border-white shadow-md rounded-xs overflow-hidden w-16 sm:w-20 md:w-24 aspect-[3/4] flex items-center justify-center">
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="font-serif font-black text-slate-950 text-[9px] sm:text-xs md:text-sm uppercase tracking-tight mt-1.5 leading-tight block max-w-[110px]"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {achiever.name}
                </span>
                <span
                  className="font-serif font-black text-slate-950 text-[10px] sm:text-xs md:text-sm leading-none mt-0.5 block"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {achiever.score}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row: 8 Meritorious Students */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5 md:gap-3 my-2 sm:my-3 px-2 sm:px-6">
            {current.bottomAchievers.map((student, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="bg-white p-0.5 border border-white shadow-xs rounded-xs overflow-hidden w-12 sm:w-14 md:w-16 aspect-[1/1] sm:aspect-[3/4] flex items-center justify-center">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="font-serif font-bold text-slate-950 text-[7.5px] sm:text-[9px] md:text-[10px] uppercase tracking-tight mt-1 leading-tight block line-clamp-2"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {student.name}
                </span>
                <span
                  className="font-serif font-extrabold text-slate-950 text-[8px] sm:text-[9.5px] md:text-[10.5px] leading-tight block"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {student.score}
                </span>
              </div>
            ))}
          </div>

          {/* Summary Tally Bar */}
          <div className="text-center pt-2 sm:pt-3 border-t border-slate-900/15 mt-2">
            <p
              className="font-serif font-black text-slate-950 text-xs sm:text-sm md:text-base tracking-wider"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              {current.summaryTally}
            </p>
          </div>

          {/* Slide dots indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeSlide ? 'w-5 bg-slate-950' : 'w-1.5 bg-slate-950/30 hover:bg-slate-950/60'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
