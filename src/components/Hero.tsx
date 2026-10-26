import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Bell, 
  ArrowRight, 
  BookOpen, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Calculator,
  Calendar,
  Sparkles
} from 'lucide-react';
import type { TabType } from '../types';
import { SCHOOL_INFO, NOTICES_DATA } from '../data/schoolData';

interface HeroProps {
  setCurrentTab: (tab: TabType) => void;
  openNoticeModal: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentTab, openNoticeModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero-main.jpg",
      badge: "Legacy of Excellence Since 1982 • Garoora Campus",
      title: "Nurturing Intellectual Brilliance & Moral Character",
      subtitle: "Over four decades of dedicated service providing premier English-medium education grounded in divine values, ethics, and academic rigor in Bandipora.",
      primaryBtn: { text: "Online Admissions 2026-27", tab: "admissions" as TabType },
      secondaryBtn: { text: "Explore Campus Facilities", tab: "facilities" as TabType }
    },
    {
      image: "/images/hero-slide2.jpg",
      badge: "Vibrant Campus Life & Holistic Student Mentoring",
      title: "State-of-the-Art Learning & Co-Curricular Excellence",
      subtitle: "Hands-on scientific inquiry, sports training, and disciplined moral environment preparing students for tomorrow's regional and national benchmarks.",
      primaryBtn: { text: "View Academic Programs", tab: "academics" as TabType },
      secondaryBtn: { text: "Fee Calculator (FFRC)", tab: "calculator" as TabType }
    },
    {
      image: "/images/hero-slide3.jpg",
      badge: "100% JKBOSE Class 10th Board Pass Record",
      title: "Consistent Academic Distinctions & District Toppers",
      subtitle: "Disciplined academic coaching, personalized faculty mentorship, and regular test series yielding top regional board ranks every session.",
      primaryBtn: { text: "View Board Results", tab: "results" as TabType },
      secondaryBtn: { text: "Download Prospectus", tab: "downloads" as TabType }
    },
    {
      image: "/images/annual-event.jpg",
      badge: "Annual Honors, Seerat & Youth Leadership",
      title: "Celebrating Student Achievement & Ethical Values",
      subtitle: "Honoring academic high-scorers, Quranic recitation winners, and athletic champions with certificates, medals, and community recognition.",
      primaryBtn: { text: "Explore Photo Gallery", tab: "gallery" as TabType },
      secondaryBtn: { text: "Notice Board & Circulars", tab: "notices" as TabType }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-[#0c2340] text-white overflow-hidden">
      {/* Live Notice Marquee Ticker (SRM Welkin Style) */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-semibold text-xs sm:text-sm h-10 sm:h-11 px-3 sm:px-6 flex items-center border-b border-amber-600 shadow-sm overflow-hidden select-none">
        <div className="flex items-center gap-1.5 bg-slate-950 text-amber-300 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0 shadow z-10">
          <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce shrink-0" />
          <span className="whitespace-nowrap">Latest Updates</span>
        </div>

        <div className="marquee-container overflow-hidden relative w-full h-full flex items-center mx-3 cursor-pointer">
          <div className="marquee-track flex flex-nowrap items-center gap-8 whitespace-nowrap">
            {[...NOTICES_DATA, ...NOTICES_DATA].map((notice, index) => (
              <span 
                key={`${notice.id}-${index}`} 
                onClick={() => openNoticeModal(notice.id)}
                className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap hover:underline cursor-pointer transition-colors text-xs sm:text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
                <span className="font-extrabold text-[#0c2340]">[{notice.category}]</span> 
                <span className="font-semibold text-slate-900">{notice.title}</span> 
                <span className="text-slate-800 text-[11px] font-medium">({notice.date})</span>
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setCurrentTab('notices')}
          className="hidden md:inline-flex items-center gap-1 bg-slate-950 hover:bg-slate-900 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shrink-0 transition-colors z-10 shadow"
        >
          <span>View All</span>
          <ChevronRight className="w-3 h-3 text-amber-400" />
        </button>
      </div>

      {/* Main Hero Slider */}
      <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Vignette */}
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/95 via-slate-950/80 to-[#0c2340]/60" />
            
            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 h-full flex flex-col justify-center">
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{slide.badge}</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h2>

                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentTab(slide.primaryBtn.tab)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>{slide.primaryBtn.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCurrentTab(slide.secondaryBtn.tab)}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                  >
                    <span>{slide.secondaryBtn.text}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all hidden sm:block border border-white/10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all hidden sm:block border border-white/10"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Cards (SRM Welkin Signature Layout) */}
      <div className="relative z-30 bg-[#0c2340] pb-12 pt-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Admissions */}
            <div 
              onClick={() => setCurrentTab('admissions')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex items-start space-x-3.5 transform hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-xl group-hover:scale-110 transition-transform shrink-0 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-blue-900 transition-colors">
                  Admissions 2026-27
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Online registration, eligibility criteria & document checklists.
                </p>
                <span className="text-[11px] font-bold text-amber-700 mt-2 inline-flex items-center gap-1 group-hover:underline">
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Card 2: Notice Board */}
            <div 
              onClick={() => setCurrentTab('notices')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex items-start space-x-3.5 transform hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl group-hover:scale-110 transition-transform shrink-0 shadow-md">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                  Notice Board
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Daily circulars, examination date sheets, and administrative orders.
                </p>
                <span className="text-[11px] font-bold text-emerald-700 mt-2 inline-flex items-center gap-1 group-hover:underline">
                  Check Updates <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Card 3: Results & Merit */}
            <div 
              onClick={() => setCurrentTab('results')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex items-start space-x-3.5 transform hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl group-hover:scale-110 transition-transform shrink-0 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                  Results & Merit
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  JKBOSE Class 10th distinction holders & star achiever profiles.
                </p>
                <span className="text-[11px] font-bold text-purple-700 mt-2 inline-flex items-center gap-1 group-hover:underline">
                  View Achievers <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Card 4: Fee Calculator */}
            <div 
              onClick={() => setCurrentTab('calculator')}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex items-start space-x-3.5 transform hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl group-hover:scale-110 transition-transform shrink-0 shadow-md">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-sky-700 transition-colors">
                  Fee Calculator
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Transparent calculation of tuition, transport & term fees.
                </p>
                <span className="text-[11px] font-bold text-sky-700 mt-2 inline-flex items-center gap-1 group-hover:underline">
                  Estimate Dues <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="bg-slate-950 py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {SCHOOL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 bg-slate-900/40 rounded-2xl border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black text-amber-400">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
