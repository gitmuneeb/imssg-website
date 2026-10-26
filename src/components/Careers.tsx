import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  X, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { JOBS_DATA, SCHOOL_INFO } from '../data/schoolData';
import type { JobOpening, TabType } from '../types';

interface CareersProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Careers: React.FC<CareersProps> = ({ setCurrentTab }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    highestQualification: '',
    yearsExperience: '',
    currentLocation: 'Bandipora',
    coverNote: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setErrorMsg('');
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.fullName || !appForm.phone || !appForm.highestQualification) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Join Our Academic Community
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Careers & Faculty Recruitment
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Shape young minds in the picturesque valley of Garoora, Bandipora. We invite passionate, qualified, and ethical educators to join our team.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <Briefcase className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Open Positions List */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Current Teaching & Administrative Vacancies</h2>
              <p className="text-xs text-slate-500">Applications accepted for upcoming academic terms</p>
            </div>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full w-fit">
              {JOBS_DATA.length} Active Openings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOBS_DATA.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      Apply by: {job.deadline}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 mt-1">{job.title}</h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <p><strong>Qualification:</strong> {job.qualification}</p>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Employment Type:</strong> {job.type}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <strong className="block text-xs text-slate-700 mb-1">Key Responsibilities:</strong>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-900 mt-1.5 shrink-0"></span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Culture & Perks */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-900 text-center">Why Teach at SMS Islamia Model Secondary School?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 text-center">
            <div className="p-4 bg-slate-50 rounded-xl">
              <GraduationCap className="w-7 h-7 text-blue-900 mx-auto mb-2" />
              <strong className="block text-slate-900 text-sm mb-1">Professional Development</strong>
              Regular workshops with SCERT master trainers and pedagogical skill enhancement.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <strong className="block text-slate-900 text-sm mb-1">Respect & Value</strong>
              A respectful, collaborative faculty culture grounded in moral warmth and mutual support.
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <Briefcase className="w-7 h-7 text-amber-500 mx-auto mb-2" />
              <strong className="block text-slate-900 text-sm mb-1">Modern Teaching Aids</strong>
              Access to equipped laboratories, multimedia projectors, and high-speed internet.
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm">Faculty Job Application</span>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Application Submitted!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you, <strong>{appForm.fullName}</strong>. Your application for <strong>{selectedJob.title}</strong> has been recorded. Our recruitment cell will review your credentials and contact shortlisted candidates for the interview round.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="mt-4 px-5 py-2 bg-blue-950 text-white font-bold text-xs rounded-lg"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs sm:text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <span className="text-[11px] text-blue-800 font-semibold block">Applying for:</span>
                    <strong className="text-blue-950 text-sm">{selectedJob.title}</strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{selectedJob.department}</span>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 bg-red-50 text-red-600 rounded-lg text-xs flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={appForm.fullName}
                      onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94190 XXXXX"
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="teacher@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Highest Qualification *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. M.Sc, B.Ed"
                        value={appForm.highestQualification}
                        onChange={(e) => setAppForm({ ...appForm, highestQualification: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Teaching Experience</label>
                      <input
                        type="text"
                        placeholder="e.g. 2 Years"
                        value={appForm.yearsExperience}
                        onChange={(e) => setAppForm({ ...appForm, yearsExperience: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Cover Note</label>
                    <textarea
                      rows={2}
                      placeholder="Why do you wish to join IMS Garoora?"
                      value={appForm.coverNote}
                      onChange={(e) => setAppForm({ ...appForm, coverNote: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
