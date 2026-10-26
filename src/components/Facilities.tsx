import React, { useState } from 'react';
import { 
  FlaskConical, 
  Monitor, 
  BookOpen, 
  Trophy, 
  HeartHandshake, 
  Bus, 
  ShieldCheck, 
  Zap, 
  Droplet,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import type { TabType } from '../types';

interface FacilitiesProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ setCurrentTab }) => {
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const facilities = [
    {
      icon: FlaskConical,
      title: "Composite Science Laboratories",
      subtitle: "Physics, Chemistry & Biology Practical Hub",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
      description: "Our high-standard science laboratories are designed to turn textbook theories into tangible discovery. Equipped with modern microscopes, chemical apparatus, electrical circuitry, and botanical specimens in compliance with JKBOSE practical standards.",
      highlights: [
        "Individual experimental workstations with safety hoods and eyewash stations",
        "Full syllabus coverage for Class 9th & 10th science practicals",
        "Dedicated lab assistant ensuring supervision and adherence to safety",
        "Regular hands-on demonstration classes for middle school students"
      ]
    },
    {
      icon: Monitor,
      title: "ICT & Digital Computer Center",
      subtitle: "Modern Computing & Digital Fluency",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      description: "Digital literacy is an essential life skill. Our computer lab provides dedicated individual computer terminals loaded with modern educational software, programming environments, and high-speed internet connectivity.",
      highlights: [
        "1:1 Student-to-computer ratio during practical periods",
        "Curriculum covering Python basics, HTML/web fundamentals, and office suites",
        "Monitored, safe internet browsing under strict firewall filters",
        "Smart Interactive displays for multimedia demonstrations"
      ]
    },
    {
      icon: BookOpen,
      title: "Rich Reference Library & Reading Room",
      subtitle: "Over 4,500 Books, Periodicals & Journals",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      description: "A serene reading sanctuary housing thousands of curated titles including NCERT references, regional Urdu literature, Islamic historical volumes, scientific encyclopedias, and regional newspapers.",
      highlights: [
        "Dedicated quiet study zones and comfortable reading furniture",
        "Rich collection of moral philosophy, Seerat, and Kashmiri history",
        "Weekly library period integrated into academic timetable",
        "Lending service allowing students to borrow books for home study"
      ]
    },
    {
      icon: Trophy,
      title: "Sports Grounds & Physical Fitness",
      subtitle: "Cricket, Volleyball, Athletics & Martial Arts",
      image: "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1200&q=80",
      description: "Physical vitality and sportsmanship are integral to character building. We provide outdoor fields and indoor game equipment enabling healthy competition and team spirit.",
      highlights: [
        "Spacious outdoor playground overlooking the foothills of Garoora",
        "Inter-house cricket, volleyball, badminton, and kho-kho championships",
        "Self-defense and martial arts workshops for female students",
        "Regular participation in Bandipora district inter-school tournaments"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Islamic Studies & Moral Development",
      subtitle: "Nurturing Character (Tarbiya) & Values",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
      description: "Living up to the name 'Islamia Model School', we cultivate moral purity, empathy, truthfulness, and reverence for divine teachings alongside contemporary academics.",
      highlights: [
        "Tajweed and Nazra Quran guidance with expert instructors",
        "Annual Seerat-un-Nabi (PBUH) conferences and Husn-e-Qirat competitions",
        "Daily morning assembly featuring inspirational moral reflections and Duas",
        "Anti-bullying, community cleanliness, and environmental care initiatives"
      ]
    },
    {
      icon: Bus,
      title: "Safe & Dependable Bus Transport",
      subtitle: "Covering Garoora & Wider Bandipora Environs",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      description: "A well-maintained fleet of school buses with experienced, verified drivers and vigilant attendants ensuring punctual, safe transit for students residing across various localities.",
      highlights: [
        "Strict adherence to speed limits and school bus safety protocols",
        "Designated pickup and drop-off points with timetable schedules",
        "Emergency first aid kits on every vehicle",
        "Covering Garoora, Aragam, Nadihal, Papchan, and Bandipora Town"
      ]
    }
  ];

  const current = facilities[activeFacility];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Campus Infrastructure
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Facilities & Learning Environment
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              A vibrant, safe, and technologically enriched campus situated in Garoora, Bandipora, purposefully designed for total student development.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <FlaskConical className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Navigation Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            const isSelected = activeFacility === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveFacility(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-950 text-white border-blue-950 shadow-md ring-2 ring-amber-400/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-amber-400' : 'text-blue-900'}`} />
                <span className="font-bold text-xs line-clamp-1">{fac.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img 
                src={current.image} 
                alt={current.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                  {current.title}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                  Campus Feature
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {current.title}
                </h2>
                <p className="text-amber-700 font-semibold text-sm mt-0.5">
                  {current.subtitle}
                </p>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Specifications & Infrastructure:
                </h3>
                <div className="space-y-2">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <button
                  onClick={() => setCurrentTab('gallery')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 transition-colors"
                >
                  View in Gallery
                </button>
                <button
                  onClick={() => setCurrentTab('admissions')}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
                >
                  Apply for Admission
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Amenities Grid */}
        <section className="bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900">Campus Hygiene, Health & Safety</h3>
            <p className="text-xs text-slate-500 mt-1">Ensuring a secure, healthy, and comfortable atmosphere everyday</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Droplet className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
              <div>
                <strong className="block text-slate-900 text-sm">RO Filtered Water</strong>
                <span className="text-slate-500">Multi-stage reverse osmosis water purifiers installed across all floors.</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Zap className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <strong className="block text-slate-900 text-sm">Power Backup</strong>
                <span className="text-slate-500">Dedicated heavy-duty generator and solar backup for uninterrupted classes.</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <strong className="block text-slate-900 text-sm">CCTV & Gate Security</strong>
                <span className="text-slate-500">Round-the-clock security personnel and perimeter surveillance.</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <strong className="block text-slate-900 text-sm">Sanitary Hygiene</strong>
                <span className="text-slate-500">Completely segregated, sanitized washroom complexes for boys and girls.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
