import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Calendar, 
  BookOpen, 
  CreditCard, 
  Bus, 
  CheckCircle, 
  Download, 
  Lock, 
  LogOut,
  AlertCircle
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [admissionNo, setAdmissionNo] = useState('IMSS/2026/104');
  const [parentMobile, setParentMobile] = useState('9419012345');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'fees' | 'homework'>('overview');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admissionNo.trim() || !parentMobile.trim()) {
      setErrorMsg('Please enter Admission Number and Registered Mobile.');
      return;
    }
    setErrorMsg('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-5 bg-blue-950 text-white flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base">Student & Parent Portal</h3>
              <p className="text-[11px] text-slate-300">SMS Islamia Model Secondary School, Garoora</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="max-w-md mx-auto space-y-6 py-4">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Parent / Student Authentication</h4>
                <p className="text-xs text-slate-500">
                  Access your child's attendance, assignments, and term marks.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Admission / Registration Number
                  </label>
                  <input
                    type="text"
                    required
                    value={admissionNo}
                    onChange={(e) => setAdmissionNo(e.target.value)}
                    placeholder="e.g. IMSS/2026/104"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                  <span className="text-[10px] text-slate-400">Sample pre-filled for instant demo</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Registered Parent Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentMobile}
                    onChange={(e) => setParentMobile(e.target.value)}
                    placeholder="e.g. 9419012345"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Secure Sign In</span>
                  </button>
                </div>
              </form>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 text-center">
                Need credentials or facing login issues? Call school office at <strong>{SCHOOL_INFO.contact.helpline}</strong>.
              </div>
            </div>
          ) : (
            /* Logged In Dashboard */
            <div className="space-y-6">
              {/* Student Header Strip */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-300 font-bold flex items-center justify-center text-sm shadow">
                    AH
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Ayaan Hilal Mir</h4>
                    <p className="text-xs text-slate-500">
                      Class: <strong>8th Green</strong> | Roll: <strong>24</strong> | Adm No: <strong>{admissionNo}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors self-start sm:self-center"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>

              {/* Sub-tabs */}
              <div className="flex border-b border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'overview' ? 'border-blue-950 text-blue-950' : 'border-transparent text-slate-500'
                  }`}
                >
                  Overview & Stats
                </button>
                <button
                  onClick={() => setActiveTab('attendance')}
                  className={`pb-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'attendance' ? 'border-blue-950 text-blue-950' : 'border-transparent text-slate-500'
                  }`}
                >
                  Attendance (94.2%)
                </button>
                <button
                  onClick={() => setActiveTab('homework')}
                  className={`pb-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'homework' ? 'border-blue-950 text-blue-950' : 'border-transparent text-slate-500'
                  }`}
                >
                  Homework & Diary
                </button>
                <button
                  onClick={() => setActiveTab('fees')}
                  className={`pb-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'fees' ? 'border-blue-950 text-blue-950' : 'border-transparent text-slate-500'
                  }`}
                >
                  Fee Receipts
                </button>
              </div>

              {/* Tab Views */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
                      <span className="text-xl font-bold text-blue-950">94.2%</span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">Overall Attendance</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                      <span className="text-xl font-bold text-emerald-800">A1</span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">Term 1 Grade</span>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-center">
                      <span className="text-xl font-bold text-amber-900">Cleared</span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">Fee Status (Oct)</span>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-center">
                      <span className="text-xl font-bold text-purple-900">Bus #04</span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">Transport Stop</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-xs text-slate-800 mb-2">Teacher's Note for Parents:</h5>
                    <p className="text-xs text-slate-600 italic">
                      "Aayan is performing brilliantly in Mathematics and Science practical demonstrations. Active participation in the Seerat Conference elocution contest was commendable."
                    </p>
                    <div className="text-[10px] text-slate-400 mt-2">— Class Teacher, 8th Grade</div>
                  </div>
                </div>
              )}

              {activeTab === 'attendance' && (
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 font-semibold">
                    <span>Present: 178 Days</span>
                    <span>Absent: 11 Days</span>
                    <span>Total Working Days: 189</span>
                  </div>
                  <p className="text-slate-500 text-xs">Student meets minimum 75% attendance criteria required for Term Board Examinations.</p>
                </div>
              )}

              {activeTab === 'homework' && (
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="block text-slate-900">Science: Chapter 8 - Reproduction in Animals</strong>
                      <span className="text-slate-500 text-[11px]">Complete notebook diagram 8.3 & answer questions 1 to 5.</span>
                    </div>
                    <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Due Tomorrow</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="block text-slate-900">Mathematics: Exercise 9.2 (Algebraic Expressions)</strong>
                      <span className="text-slate-500 text-[11px]">Solve word problems on homework register.</span>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">Checked</span>
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="block text-slate-900">October 2026 - Monthly Tuition & Bus</strong>
                      <span className="text-slate-400 text-[11px]">Receipt #REC-2026-8812 • Paid via UPI</span>
                    </div>
                    <span className="text-emerald-700 font-bold">₹2,300 (PAID)</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="block text-slate-900">September 2026 - Monthly Tuition & Bus</strong>
                      <span className="text-slate-400 text-[11px]">Receipt #REC-2026-7940 • Paid Cash</span>
                    </div>
                    <span className="text-emerald-700 font-bold">₹2,300 (PAID)</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
