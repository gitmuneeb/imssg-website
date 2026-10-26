import React, { useState } from 'react';
import type { TabType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { Admissions } from './components/Admissions';
import { NoticeBoard } from './components/NoticeBoard';
import { Results } from './components/Results';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { FeeCalculator } from './components/FeeCalculator';
import { Downloads } from './components/Downloads';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortalModal } from './components/PortalModal';
import { FloatingActions } from './components/FloatingActions';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  Bell, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { SCHOOL_INFO, NOTICES_DATA, RESULTS_DATA } from './data/schoolData';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);

  const openNoticeFromHero = (id: string) => {
    setSelectedNoticeId(id);
    setCurrentTab('notices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        openPortal={() => setIsPortalOpen(true)} 
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div className="space-y-0">
            {/* 1. Hero Section with Carousel & Marquee */}
            <Hero 
              setCurrentTab={setCurrentTab} 
              openNoticeModal={openNoticeFromHero} 
            />

            {/* 2. Welcome & Legacy Brief Section */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Welcome to IMS Garoora</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                      A Tradition of Academic Brilliance & Moral Rectitude Since 1982
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Nestled along the picturesque Bandipora-Srinagar Highway in Garoora, **SMS Islamia Model Secondary School** has spent over 43 years building the intellectual, cultural, and spiritual bedrock of North Kashmir's youth.
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      Affiliated with the **Jammu & Kashmir Board of School Education (JKBOSE)**, our institution blends high modern standards of English-medium education with profound character building (Tarbiya), scientific experimentation, and individual care.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block text-2xl font-black text-blue-950">100%</span>
                        <span className="text-xs text-slate-500 font-semibold">Board Pass Track Record</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block text-2xl font-black text-amber-600">4,500+</span>
                        <span className="text-xs text-slate-500 font-semibold">Alumni Excelling Globally</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block text-2xl font-black text-emerald-600">22:1</span>
                        <span className="text-xs text-slate-500 font-semibold">Student-Teacher Ratio</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setCurrentTab('about')}
                        className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <span>Read Our Story & History</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80" 
                        alt="School Building" 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-4 bg-blue-950 text-white p-4 rounded-xl shadow-xl max-w-xs border border-blue-900 hidden sm:block">
                      <span className="text-amber-400 font-black text-xs uppercase block">UDISE 01160100803</span>
                      <p className="text-xs text-slate-300 mt-1">Recognized by Directorate of School Education Kashmir (DSEK)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Latest Announcements & Circulars Preview */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 gap-3">
                  <div>
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                      Information Hub
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      Recent Circulars & Announcements
                    </h2>
                  </div>
                  <button
                    onClick={() => setCurrentTab('notices')}
                    className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                  >
                    <span>View All Notices</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {NOTICES_DATA.slice(0, 3).map((notice) => (
                    <div
                      key={notice.id}
                      onClick={() => openNoticeFromHero(notice.id)}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-100">
                            {notice.category}
                          </span>
                          <span className="text-xs text-slate-400">{notice.date}</span>
                        </div>

                        <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                          {notice.title}
                        </h3>

                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {notice.content}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-950 group-hover:text-blue-900">
                        <span>Read Circular</span>
                        <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Academic Wings Section */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                    Four-Tier Learning Journey
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Academic Wings at IMS Garoora
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Structured stages tailored for developmental and board milestones
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div 
                    onClick={() => setCurrentTab('academics')}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-900 transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">Age 3–5</span>
                    <h3 className="font-extrabold text-lg text-slate-900 mt-3 group-hover:text-blue-900 transition-colors">
                      Pre-Primary / KG
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Nursery, LKG & UKG</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      Montessori-inspired play-way learning, phonics, number games, and foundational manners.
                    </p>
                  </div>

                  <div 
                    onClick={() => setCurrentTab('academics')}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-900 transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">Age 6–10</span>
                    <h3 className="font-extrabold text-lg text-slate-900 mt-3 group-hover:text-blue-900 transition-colors">
                      Primary Wing
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Classes 1st to 5th</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      Strong computational math, English & Urdu fluency, environmental study, and digital typing.
                    </p>
                  </div>

                  <div 
                    onClick={() => setCurrentTab('academics')}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-900 transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">Age 11–13</span>
                    <h3 className="font-extrabold text-lg text-slate-900 mt-3 group-hover:text-blue-900 transition-colors">
                      Middle Wing
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Classes 6th to 8th</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      General science experiments, computer programming, social science, and debates.
                    </p>
                  </div>

                  <div 
                    onClick={() => setCurrentTab('academics')}
                    className="p-6 bg-blue-950 text-white rounded-2xl border border-blue-900 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full">Age 14–16</span>
                    <h3 className="font-extrabold text-lg text-white mt-3 group-hover:text-amber-300 transition-colors">
                      Secondary Wing
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">Classes 9th & 10th (JKBOSE)</p>
                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      Board exam coaching, science practicals, remedial tutoring, and career mentoring.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Board Toppers & Academic Distinctions Teaser */}
            <section className="py-16 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 gap-3">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
                      Hall of Fame
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                      Celebrating Our Top Board Achievers
                    </h2>
                  </div>
                  <button
                    onClick={() => setCurrentTab('results')}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-colors self-start sm:self-auto flex items-center gap-1.5"
                  >
                    <span>Explore All Achievers</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {RESULTS_DATA.slice(0, 3).map((student) => (
                    <div
                      key={student.rollNo}
                      onClick={() => setCurrentTab('results')}
                      className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-400 transition-all cursor-pointer space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-amber-400">{student.percentage}%</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {student.grade}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-white">{student.name}</h4>
                      <p className="text-xs text-slate-400">{student.parentage}</p>
                      <div className="text-xs text-slate-300 font-mono">
                        Marks: {student.marksObtained} / {student.totalMarks}
                      </div>
                      {student.rank && (
                        <p className="text-xs text-amber-300 font-medium pt-1 border-t border-slate-700">
                          ★ {student.rank}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Admissions Call to Action Banner */}
            <section className="py-16 bg-amber-500 text-slate-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-300 px-3 py-1 rounded">
                    Session 2026 – 2027
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950">
                    Admissions Now Open for Nursery to 9th Class
                  </h2>
                  <p className="text-sm font-semibold text-slate-900 max-w-xl">
                    Secure your child's seat in Bandipora's premier secondary school. Register online in less than 3 minutes.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setCurrentTab('admissions')}
                    className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Online Application
                  </button>
                  <button
                    onClick={() => setCurrentTab('calculator')}
                    className="px-5 py-3.5 bg-white/40 hover:bg-white/60 text-slate-950 font-bold text-sm rounded-xl border border-slate-950/20 transition-all"
                  >
                    Fee Calculator
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'about' && <About setCurrentTab={setCurrentTab} />}
        {currentTab === 'academics' && <Academics setCurrentTab={setCurrentTab} />}
        {currentTab === 'admissions' && <Admissions setCurrentTab={setCurrentTab} />}
        {currentTab === 'notices' && (
          <NoticeBoard 
            selectedNoticeId={selectedNoticeId} 
            onCloseModal={() => setSelectedNoticeId(null)} 
          />
        )}
        {currentTab === 'results' && <Results setCurrentTab={setCurrentTab} />}
        {currentTab === 'facilities' && <Facilities setCurrentTab={setCurrentTab} />}
        {currentTab === 'gallery' && <Gallery setCurrentTab={setCurrentTab} />}
        {currentTab === 'calculator' && <FeeCalculator setCurrentTab={setCurrentTab} />}
        {currentTab === 'downloads' && <Downloads setCurrentTab={setCurrentTab} />}
        {currentTab === 'careers' && <Careers setCurrentTab={setCurrentTab} />}
        {currentTab === 'contact' && <Contact setCurrentTab={setCurrentTab} />}
      </main>

      {/* Student / Parent Portal Modal */}
      <PortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />

      {/* Floating Action Buttons (WhatsApp, Helpline, Back to Top) */}
      <FloatingActions />

      {/* Comprehensive Institutional Footer */}
      <Footer 
        setCurrentTab={setCurrentTab} 
        openPortal={() => setIsPortalOpen(true)} 
      />
    </div>
  );
}

export default App;
