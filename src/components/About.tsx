import React from 'react';
import { 
  History, 
  Target, 
  Compass, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { TabType } from '../types';

interface AboutProps {
  setCurrentTab: (tab: TabType) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentTab }) => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Page Title & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Established in 1982 • UDISE: {SCHOOL_INFO.udiseCode}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight">
              About S.M.S Islamia Model Secondary School
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded over four decades ago in Garoora, Bandipora, we are committed to holistic modern schooling blending rigorous scientific inquiry with timeless moral values.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
            <GraduationCap className="w-96 h-96" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* History & Genesis */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm bg-blue-100 px-3 py-1 rounded-md">
              <History className="w-4 h-4 text-blue-900" />
              <span>Our 43+ Year Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Pioneering Quality Education in Garoora & Greater Bandipora
            </h2>
            <p className="text-slate-600 leading-relaxed">
              In 1982, visionaries and community elders of Garoora, Bandipora came together with a clear goal: to establish an institution that could provide high-standard English-medium education accessible to every household in the region, without sacrificing cultural and moral identity.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Starting from humble beginnings as a primary learning center, **SMS Islamia Model Secondary School (IMS Garoora)** has steadily grown into a recognized secondary institution under the **Jammu & Kashmir Board of School Education (JKBOSE)** and the **Directorate of School Education Kashmir (DSEK)**.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="block text-2xl font-black text-blue-950">1982</span>
                <span className="text-xs text-slate-500 font-medium">Foundation Year in Garoora</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="block text-2xl font-black text-amber-600">100%</span>
                <span className="text-xs text-slate-500 font-medium">JKBOSE 10th Passing Track</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img 
                src="/images/hero-slide2.jpg" 
                alt="SMS Islamia Model Secondary School Campus & Community" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-950 text-white p-5 rounded-xl shadow-xl max-w-xs border border-blue-900 hidden sm:block">
              <Sparkles className="w-6 h-6 text-amber-400 mb-2" />
              <p className="text-xs text-slate-300">
                "Education is not merely the transmission of facts, but the ignition of intellect, empathy, and integrity."
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be an exemplary center of academic and moral excellence in Jammu & Kashmir, empowering every child with critical thinking, ethical conduct, scientific inquisitiveness, and leadership qualities to serve humanity with distinction.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Inculcate deep intellectual curiosity and academic discipline
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Foster universal brotherhood, compassion, and moral integrity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Equip students with 21st-century technological fluency
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-12 h-12 bg-amber-100 text-amber-900 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-amber-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide child-centric, value-oriented, and comprehensive education from Kindergarten to Secondary grade, fostering an atmosphere where modern scientific pedagogy harmonizes with rich spiritual traditions and character building.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                Affordable, accessible quality education for all backgrounds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                Robust co-curriculars: sports, debates, Seerat, and robotics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                Safe, disciplined, and nurturing environment for boys and girls
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership Desk (Chairman & Principal Messages) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Leadership Messages
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Words from Our Mentors</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chairman's Message */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-amber-500 opacity-60" />
                <h3 className="text-lg font-bold text-blue-950">Message from the Chairman's Desk</h3>
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "At SMS Islamia Model Secondary School, we believe that education is the greatest equalizer and the cornerstone of an enlightened society. Over the past four decades, our pursuit has remained constant: to shape youngsters who are not only academically accomplished, but who carry moral rectitude, empathy for their community, and reverence for divine ethics. We welcome each child into an environment where dreams are nurtured with love and discipline."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-sm">
                  IEWS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Chairman / President</h4>
                  <p className="text-xs text-slate-500">Islamia Educational & Welfare Society, Garoora</p>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-blue-600 opacity-60" />
                <h3 className="text-lg font-bold text-blue-950">From the Desk of the Principal</h3>
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "Dear Parents and Students, our dedicated faculty is committed to unlocking the latent brilliance of every child. Through a balanced blend of the JKBOSE curriculum, interactive science practicals, sports, and value education, we ensure our students stand confident before the world. I invite you to join our growing family in Garoora, Bandipora, and witness the transformative journey of your child."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                  PR
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">The Principal</h4>
                  <p className="text-xs text-slate-500">S.M.S Islamia Model Secondary School, Garoora</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Atmosphere & Visual Heritage */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Campus Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Life, Discipline & Values at Garoora
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/photos/713685137_2207841683323724_8590933976855099110_n.jpg"
                  alt="Morning Assembly & Discipline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-sm">Morning Assembly & Daily Adab</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Every school day begins with Quranic recitation, the national anthem, moral pledges, and student presentations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/cultural-event.jpg"
                  alt="Husn-e-Qirat & Seerat Conferences"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-sm">Spiritual & Moral Foundation</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Regular Seerat conferences, Husn-e-Qirat competitions, and Islamic ethics shaping balanced personalities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/hero-main.jpg"
                  alt="Scenic Garoora Bandipora Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-sm">Scenic Garoora Campus</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Located along the Bandipora-Srinagar corridor with well-ventilated classrooms, playfields, and mountain vistas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Pillars */}
        <section className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Parents Choose IMS Garoora</h2>
            <p className="text-slate-300 text-sm mt-2">
              A trusted beacon of knowledge in Bandipora district for more than 43 years
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-blue-900/60 rounded-xl border border-blue-800">
              <ShieldCheck className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Moral Integrity (Adab)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emphasis on ethical character, manners, respect for elders, and spiritual enlightenment.
              </p>
            </div>

            <div className="p-5 bg-blue-900/60 rounded-xl border border-blue-800">
              <Award className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Board Merit History</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consistent 100% pass percentages in Class 10th JKBOSE examinations with top district positions.
              </p>
            </div>

            <div className="p-5 bg-blue-900/60 rounded-xl border border-blue-800">
              <GraduationCap className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Dedicated Faculty</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                48+ trained, qualified, and affectionate educators devoted to individualized learning.
              </p>
            </div>

            <div className="p-5 bg-blue-900/60 rounded-xl border border-blue-800">
              <CheckCircle2 className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Accessible Transport</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated school bus network covering Garoora, Aragam, Nadihal, Ajar, and Bandipora town.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentTab('admissions')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm shadow transition-all"
            >
              Enroll for Session 2026-27
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
