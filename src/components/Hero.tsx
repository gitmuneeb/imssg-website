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
  Calendar
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
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=85",
      badge: "Legacy of Educational Excellence Since 1982",
      title: "Nurturing Minds, Building Character in Bandipora",
      subtitle: "Over four decades of dedicated service providing quality modern English-medium education deeply rooted in moral and ethical values.",
      primaryBtn: { text: "Online Admissions 2026-27", tab: "admissions" as TabType },
      secondaryBtn: { text: "Explore Campus Facilities", tab: "facilities" as TabType }
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=85",
      badge: "State-of-the-Art Practical Learning",
      title: "Modern Science & Computer Laboratories",
      subtitle: "Hands-on scientific inquiry, ICT skills, and robotics training designed to prepare students for national competitive standards.",
      primaryBtn: { text: "View Academic Programs", tab: "academics" as TabType },
      secondaryBtn: { text: "Fee Structure", tab: "calculator" as TabType }
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
      badge: "100% JKBOSE Class 10th Result Track Record",
      title: "Consistent Academic Distinctions & Board Toppers",
      subtitle: "Dedicated mentorship, personalized remedial coaching, and disciplined academic rigor yielding top regional ranks every session.",
      primaryBtn: { text: "View Board Results", tab: "results" as TabType },
      secondaryBtn: { text: "Download Prospectus", tab: "downloads" as TabType }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden">
      {/* Live Notice Marquee Ticker */}
      <div className="bg-amber-500 text-slate-950 font-semibold text-xs sm:text-sm h-10 sm:h-11 px-3 sm:px-6 flex items-center border-b border-amber-600 shadow-inner overflow-hidden select-none">
        <div className="flex items-center gap-1.5 bg-slate-950 text-amber-300 px-2.5 sm:px-3 py-1 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0 shadow z-10">
          <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce shrink-0" />
          <span className="whitespace-nowrap">Latest Updates</span>
        </div>

        <div className="marquee-container overflow-hidden relative w-full h-full flex items-center mx-3 cursor-pointer">
          <div className="marquee-track flex flex-nowrap items-center gap-8 whitespace-nowrap">
            {/* Duplicated list for continuous, seamless infinite scrolling */}
            {[...NOTICES_DATA, ...NOTICES_DATA].map((notice, index) => (
              <span 
                key={`${notice.id}-${index}`} 
                onClick={() => openNoticeModal(notice.id)}
                className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap hover:underline cursor-pointer transition-colors text-xs sm:text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
                <span className="font-bold">[{notice.category}]</span> 
                <span>{notice.title}</span> 
                <span className="text-slate-800 text-[11px] sm:text-xs font-medium">({notice.date})</span>
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setCurrentTab('notices')}
          className="hidden md:inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-slate-950 text-[11px] font-bold px-2 py-1 rounded shrink-0 transition-colors z-10"
        >
          <span>View All</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Hero Slider */}
      <div className="relative min-h-[520px] sm:min-h-[600px] flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-slate-900/80 to-blue-950/60" />
            
            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 h-full flex flex-col justify-center">
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentTab(slide.primaryBtn.tab)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>{slide.primaryBtn.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCurrentTab(slide.secondaryBtn.tab)}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                  >
                    <span>{slide.secondaryBtn.text}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all hidden sm:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all hidden sm:block"
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
              className={`h-2.5 rounded-full transition-all ${
                i === currentSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Action Navigation Grid (Welkin Style Cards) */}
      <div className="relative z-30 bg-blue-950 border-t border-blue-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              onClick={() => setCurrentTab('admissions')}
              className="bg-blue-900/60 hover:bg-blue-800/80 p-4 rounded-xl border border-blue-800 transition-all cursor-pointer group flex items-start space-x-3"
            >
              <div className="p-3 bg-amber-500 text-slate-950 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-amber-300 transition-colors">
                  Admissions 2026
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Online inquiry, age criteria, and registration steps.
                </p>
              </div>
            </div>

            <div 
              onClick={() => setCurrentTab('notices')}
              className="bg-blue-900/60 hover:bg-blue-800/80 p-4 rounded-xl border border-blue-800 transition-all cursor-pointer group flex items-start space-x-3"
            >
              <div className="p-3 bg-emerald-500 text-slate-950 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                  Notice Board
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Daily circulars, examination date sheets, and orders.
                </p>
              </div>
            </div>

            <div 
              onClick={() => setCurrentTab('results')}
              className="bg-blue-900/60 hover:bg-blue-800/80 p-4 rounded-xl border border-blue-800 transition-all cursor-pointer group flex items-start space-x-3"
            >
              <div className="p-3 bg-purple-500 text-white rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                  Results & Merit
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  JKBOSE Class 10th distinction holders & board merit list.
                </p>
              </div>
            </div>

            <div 
              onClick={() => setCurrentTab('calculator')}
              className="bg-blue-900/60 hover:bg-blue-800/80 p-4 rounded-xl border border-blue-800 transition-all cursor-pointer group flex items-start space-x-3"
            >
              <div className="p-3 bg-sky-500 text-slate-950 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-sky-300 transition-colors">
                  Fee Calculator
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Instant estimate of tuition, transport, and term fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="bg-slate-950 py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {SCHOOL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3">
                <div className="text-2xl sm:text-4xl font-extrabold text-amber-400">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
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
