import React, { useState } from 'react';
import { 
  BookOpen, 
  Baby, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Clock, 
  FileCheck,
  BrainCircuit,
  Languages
} from 'lucide-react';
import type { TabType } from '../types';

interface AcademicsProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Academics: React.FC<AcademicsProps> = ({ setCurrentTab }) => {
  const [activeWing, setActiveWing] = useState<'pre-primary' | 'primary' | 'middle' | 'secondary'>('secondary');

  const wingDetails = {
    'pre-primary': {
      title: 'Kindergarten & Pre-Primary Wing',
      subtitle: 'Nursery, LKG, and UKG',
      age: '3 to 5 Years',
      icon: Baby,
      badge: 'Play-way & Montessori Methodology',
      image: '/images/photos/714715828_1329040428556782_4345582124694578900_n.jpg',
      description: 'Our Kindergarten wing provides a nurturing, cheerful, and secure atmosphere where young learners take their first joyful steps into formal education through sensory exploration, language immersion, and social play.',
      keyPillars: [
        'Phonics-based English reading and foundational vocabulary',
        'Numeracy through tangible counting toys, blocks, and shapes',
        'Urdu alphabet recognition, rhymes, and oral expression',
        'Fine motor development via clay modeling, coloring, and paper crafting',
        'Moral tales, classroom courtesy, and basic Islamic manners (Bismillah, Salam, Sharing)'
      ],
      subjects: ['English Language & Phonics', 'Foundational Mathematics', 'Urdu Haroof-e-Tahajji', 'General Awareness / Nature Study', 'Art & Craft', 'Rhymes & Storytelling'],
      evaluation: 'Zero formal examinations. Continuous informal observation of motor, cognitive, and social development with comprehensive parent feedback cards.'
    },
    'primary': {
      title: 'Primary Wing',
      subtitle: 'Classes 1st to 5th',
      age: '6 to 10 Years',
      icon: BookOpen,
      badge: 'Foundational Competence & Literacy',
      image: '/images/photos/718189757_1482628500011439_8373460093371938421_n.jpg',
      description: 'The Primary Wing transitions students into disciplined academic inquiry. It strengthens foundational reading comprehension, computational math, environmental consciousness, and dual-language fluency.',
      keyPillars: [
        'Interactive numeracy, mental math, and conceptual problem-solving',
        'Bilingual communication fluency in English and Urdu',
        'Environmental Studies (EVS) connecting classroom learning to nature and Wular lake ecosystem',
        'Early introduction to computer fundamentals and digital typing',
        'Moral science emphasizing integrity, truthfulness, and civic sense'
      ],
      subjects: ['English Literature & Grammar', 'Mathematics', 'Environmental Science (EVS)', 'Urdu Literature', 'Kashmiri Language', 'Computer Studies', 'Moral Education & Deeniyat', 'Art & Physical Education'],
      evaluation: 'Continuous Comprehensive Evaluation (CCE) consisting of periodic unit evaluations, oral assessments, project work, and two Term-End Summative Exams.'
    },
    'middle': {
      title: 'Middle School Wing',
      subtitle: 'Classes 6th to 8th',
      age: '11 to 13 Years',
      icon: BrainCircuit,
      badge: 'Experiential Science & Analytical Thinking',
      image: '/images/gallery/imss-7.jpg',
      description: 'Middle school marks the bridge between foundational schooling and higher secondary rigor. Students delve into specialized sciences, social sciences, computer coding, and co-curricular leadership.',
      keyPillars: [
        'Distinct focus on Physics, Chemistry, and Biology practical demonstrations',
        'Structured Social Science curriculum covering Indian History, Geography, and Civics',
        'Hands-on Computer Education: HTML basics, office productivity, and internet safety',
        'Active participation in debate societies, Naat competitions, and sports tournaments',
        'Personal development counseling and disciplined study routines'
      ],
      subjects: ['English Prose & Composition', 'Mathematics (Algebra, Geometry, Arithmetic)', 'General Science (Phy, Chem, Bio)', 'Social Science (History, Civics, Geography)', 'Urdu Advanced', 'Kashmiri', 'Information Technology (IT)', 'Moral Values & Seerat Studies'],
      evaluation: 'Mid-term and Term-end examinations following J&K State Council of Educational Research and Training (SCERT) examination pattern.'
    },
    'secondary': {
      title: 'Secondary Wing (JKBOSE)',
      subtitle: 'Classes 9th and 10th',
      age: '14 to 16 Years',
      icon: GraduationCap,
      badge: 'Board Excellence & Competitive Readiness',
      image: '/images/hero-slide3.jpg',
      description: 'Our Secondary Wing is celebrated for its historic 100% pass record in the Jammu & Kashmir Board of School Education (JKBOSE) Class 10th examinations. We provide rigorous academic mentoring, intensive test series, and board preparation.',
      keyPillars: [
        'Intensive coverage of JKBOSE board syllabus with past-10-year question solving',
        'Full laboratory practicals in Physics, Chemistry, and Biology',
        'Personalized remedial coaching for students needing extra subject attention',
        'Regular mock board examinations and time-management workshops',
        'Career counseling guidance for post-10th stream selection (Medical, Non-Med, Arts, Commerce)'
      ],
      subjects: ['General English (JKBOSE)', 'Mathematics', 'Science (Theory + Practical Labs)', 'Social Science (History, D.P, Geography, Economics)', 'Urdu / Hindi', 'Computer Applications (Addl.)', 'Work Experience & Environmental Studies'],
      evaluation: 'Regular Unit Tests, Pre-Board Examinations, Practical Lab Assessments, followed by the Official JKBOSE Class 10th Board Annual Regular Examination.'
    }
  };

  const current = wingDetails[activeWing];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              JKBOSE Curricular Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Academic Structure & Wings
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              A carefully sequenced educational journey from Kindergarten to Class 10th designed to foster intellectual sharpness, moral fortitude, and independent thinking.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <BookOpen className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Wing Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {(['pre-primary', 'primary', 'middle', 'secondary'] as const).map((wing) => {
            const info = wingDetails[wing];
            const Icon = info.icon;
            const isSelected = activeWing === wing;
            return (
              <button
                key={wing}
                onClick={() => setActiveWing(wing)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-950 text-white border-blue-950 shadow-md ring-2 ring-amber-400/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-amber-400' : 'text-blue-900'}`} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {info.age}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base leading-tight">{info.title}</h3>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {info.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Wing Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          {/* Header of Wing with Contextual Visual Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-200 pb-8">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {current.title}
              </h2>
              <p className="text-amber-700 font-bold text-sm">
                {current.subtitle} • Target Age: {current.age}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 h-64 bg-slate-100 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Grid of Key Features & Subjects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Pillars */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Curricular Objectives & Highlights
              </h3>
              <ul className="space-y-2.5">
                {current.keyPillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-2 shrink-0"></span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects Taught */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-900" />
                Subjects & Learning Modules
              </h3>
              <div className="flex flex-wrap gap-2">
                {current.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Assessment Scheme */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Assessment & Evaluation System
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.evaluation}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Standard Class Duration: 40 Minutes | 8 Periods per day</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentTab('downloads')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 transition-colors"
              >
                Download Syllabus PDF
              </button>
              <button
                onClick={() => setCurrentTab('admissions')}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Apply for {current.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
