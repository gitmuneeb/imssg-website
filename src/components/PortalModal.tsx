import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Lock, 
  AlertCircle,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [admissionNo, setAdmissionNo] = useState('');
  const [parentMobile, setParentMobile] = useState('');
  const [promptMessage, setPromptMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = "This feature will be added in future. The Student & Parent ERP Portal is currently under development.";
    setPromptMessage(msg);
    // Display a direct browser alert prompt
    window.alert("This feature will be added in future. The Student & Parent Portal is currently under development.");
  };

  const handleClose = () => {
    setPromptMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in no-print">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col transform transition-all">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0c2340] text-white flex items-center justify-between border-b border-blue-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base leading-tight">Student & Parent Portal</h3>
                <span className="bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                  Coming Soon
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">{SCHOOL_INFO.formalName}</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Portal Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Coming Soon Notice Card */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto border-2 border-amber-200 shadow-sm">
              <Clock className="w-7 h-7 animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Digital Portal — Under Active Development</span>
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">
              Parent & Student Authentication
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              Our digital portal for live student attendance, daily homework diaries, term marks, and online fee clearance is coming soon.
            </p>
          </div>

          {/* Prompt Message Banner (Rendered when Log In is clicked) */}
          {promptMessage && (
            <div className="p-4 bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 border-2 border-amber-400 rounded-2xl text-amber-950 shadow-md space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 font-black text-sm text-amber-950">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Notice: Feature Coming Soon</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
                This feature will be added in future.
              </p>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                The school administration is integrating the student ERP database for Academic Session 2026–27. For official student records, report cards, or fee verification, please contact the campus office directly.
              </p>
              <div className="pt-2 border-t border-amber-300/60 flex items-center gap-2 text-xs font-bold text-amber-950">
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>School Office Helpline: </span>
                <a href={`tel:${SCHOOL_INFO.contact.helpline}`} className="underline hover:text-black">
                  {SCHOOL_INFO.contact.helpline}
                </a>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Student Admission / Registration Number
              </label>
              <input
                type="text"
                value={admissionNo}
                onChange={(e) => setAdmissionNo(e.target.value)}
                placeholder="e.g. IMSS/2026/104"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white text-slate-800 text-xs sm:text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Registered Parent Mobile Number
              </label>
              <input
                type="tel"
                value={parentMobile}
                onChange={(e) => setParentMobile(e.target.value)}
                placeholder="e.g. 94190 XXXXX"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white text-slate-800 text-xs sm:text-sm transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#0c2340] hover:bg-slate-900 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer transform hover:-translate-y-0.5"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Log In</span>
              </button>
            </div>
          </form>

          {/* Planned Features List Preview */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
              Upcoming Portal Modules:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Live Attendance Tracker</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Digital Fee Receipts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Homework & Diary</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>JKBOSE Exam Marks</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-[11px] text-slate-400">
            For urgent administrative inquiries or admission verification, contact{' '}
            <strong className="text-slate-700">{SCHOOL_INFO.contact.helpline}</strong>.
          </div>
        </div>
      </div>
    </div>
  );
};
