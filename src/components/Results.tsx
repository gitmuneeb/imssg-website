import React from 'react';
import { 
  Award, 
  Trophy, 
  Star, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  ExternalLink,
  ShieldCheck,
  FileText,
  Building
} from 'lucide-react';
import { RESULTS_DATA, SCHOOL_INFO } from '../data/schoolData';
import type { TabType } from '../types';

interface ResultsProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Results: React.FC<ResultsProps> = ({ setCurrentTab }) => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Board of School Education (JKBOSE)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Academic Results & Wall of Honor
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Celebrating four decades of academic excellence. Explore our Class 10th JKBOSE board toppers, distinction statistics, and institutional honors.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <Trophy className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Distinction Summary Cards */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-blue-950">100%</span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">Class 10th Pass Rate</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-amber-500">98.4%</span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">District Highest Score</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600">82%</span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">Distinction Holders (A1/A2)</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-purple-600">40+</span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">Years of Academic Merit</span>
          </div>
        </section>

        {/* Felicitation Ceremony Spotlight */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Annual Merit Convocation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Honoring Academic Excellence & Board Distinction
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every academic year, SMS Islamia Model Secondary School celebrates the dedication, discipline, and remarkable achievements of its Class 10th JKBOSE board distinction holders with trophies, merit certificates, and community recognition before parents and faculty.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 h-64 bg-slate-100 group">
              <img
                src="/images/hero-slide3.jpg"
                alt="Secondary Wing Academic Achievers at IMS Garoora"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Board Toppers Wall of Fame */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-2">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                JKBOSE Class 10th - Star Achievers
              </h2>
              <p className="text-xs text-slate-500">Academic Session 2025–2026 Merit List</p>
            </div>
            <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
              100% Distinction & First Division
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RESULTS_DATA.map((student) => (
              <div
                key={student.rollNo}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all text-center relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-blue-950 text-amber-400 font-extrabold flex items-center justify-center mx-auto text-base shadow-md mb-3 border-2 border-amber-400">
                    {student.percentage}%
                  </div>

                  <h3 className="font-bold text-sm text-slate-900">{student.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{student.parentage}</p>
                  
                  <div className="mt-2 text-xs font-semibold text-blue-900">
                    {student.marksObtained} / {student.totalMarks} Marks
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 space-y-1">
                  <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Grade {student.grade}
                  </span>
                  {student.rank && (
                    <p className="text-[10px] text-amber-800 font-semibold mt-1">
                      ★ {student.rank}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subject-Wise Performance Benchmarks */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Academic Excellence
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-2">
              Class 10th Subject-Wise Highest Scores
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Top subject marks achieved by students in the JKBOSE Secondary School Examination
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Mathematics</span>
              <span className="text-2xl font-black text-blue-950 mt-1 block">100 / 100</span>
              <span className="text-[11px] text-emerald-600 font-bold">Perfect Century</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Science</span>
              <span className="text-2xl font-black text-blue-950 mt-1 block">99 / 100</span>
              <span className="text-[11px] text-emerald-600 font-bold">Theory + Practical</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Urdu</span>
              <span className="text-2xl font-black text-blue-950 mt-1 block">99 / 100</span>
              <span className="text-[11px] text-emerald-600 font-bold">Distinction A1</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block">General English</span>
              <span className="text-2xl font-black text-blue-950 mt-1 block">98 / 100</span>
              <span className="text-[11px] text-emerald-600 font-bold">Distinction A1</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Social Science</span>
              <span className="text-2xl font-black text-blue-950 mt-1 block">98 / 100</span>
              <span className="text-[11px] text-emerald-600 font-bold">Distinction A1</span>
            </div>
          </div>
        </section>

        {/* Official Board Disclosures & Collection Notice */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                  Official Transcripts & Certificates
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Collection of Official Board Marksheets & Diplomas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Official printed marksheets, provisional certificates, and character diplomas issued by the **Jammu & Kashmir Board of School Education (JKBOSE)** are distributed directly through the administrative counter at the Garoora campus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://jkbose.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <span>JKBOSE Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setCurrentTab('contact')}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
              >
                Contact School Office
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
