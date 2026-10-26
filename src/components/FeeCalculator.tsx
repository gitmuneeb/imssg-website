import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  Printer, 
  HelpCircle, 
  ShieldCheck, 
  Bus, 
  BookOpen, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { CLASS_TIERS, TRANSPORT_ROUTES, SCHOOL_INFO } from '../data/schoolData';
import type { TabType } from '../types';

interface FeeCalculatorProps {
  setCurrentTab: (tab: TabType) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ setCurrentTab }) => {
  const [selectedClassIndex, setSelectedClassIndex] = useState(1); // Default Primary
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(1); // Default Garoora internal
  const [discountType, setDiscountType] = useState<'none' | 'sibling' | 'merit'>('none');

  const selectedClass = CLASS_TIERS[selectedClassIndex];
  const selectedRoute = TRANSPORT_ROUTES[selectedRouteIndex];

  // Calculation Logic
  let tuition = selectedClass.tuitionFee;
  let discountAmount = 0;

  if (discountType === 'sibling') {
    discountAmount = Math.round(tuition * 0.15); // 15% Sibling Discount
  } else if (discountType === 'merit') {
    discountAmount = Math.round(tuition * 0.30); // 30% Concession
  }

  const effectiveTuition = tuition - discountAmount;
  const transportFee = selectedRoute.fee;
  const totalMonthly = effectiveTuition + transportFee;

  const annualDevelopment = selectedClass.annualFee;
  const labExamFee = selectedClass.labExamFee;
  const totalAnnualOneTime = annualDevelopment + labExamFee;

  // 12 Months estimation
  const estimatedYearlyTotal = (totalMonthly * 12) + totalAnnualOneTime;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Approved as per J&K FFRC Norms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Interactive Fee Calculator & Guidelines
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Transparent, regulated, and affordable education. Estimate your child’s monthly and annual schooling investment in real-time.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <Calculator className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-950" />
                Customize Schooling Package
              </h2>
              <p className="text-xs text-slate-500">
                Adjust the options below to immediately calculate your fee breakdown.
              </p>
            </div>

            {/* Step 1: Select Grade */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Select Academic Class Wing
              </label>
              <div className="space-y-2">
                {CLASS_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedClassIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedClassIndex === idx
                        ? 'bg-blue-50 border-blue-900 ring-2 ring-blue-900/30'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{tier.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{tier.description}</p>
                    </div>
                    <span className="font-bold text-sm text-blue-950 shrink-0 ml-2">
                      ₹{tier.tuitionFee}/mo
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Select Transport */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5 text-blue-900" />
                2. School Bus Transport Route
              </label>
              <select
                value={selectedRouteIndex}
                onChange={(e) => setSelectedRouteIndex(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
              >
                {TRANSPORT_ROUTES.map((route, idx) => (
                  <option key={idx} value={idx}>
                    {route.route} — {route.fee === 0 ? 'No Fee (Walker)' : `₹${route.fee} / month`}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Concessions */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Concession / Sibling Discount Eligibility
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setDiscountType('none')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                    discountType === 'none'
                      ? 'bg-blue-950 text-white border-blue-950'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setDiscountType('sibling')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                    discountType === 'sibling'
                      ? 'bg-blue-950 text-white border-blue-950'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Sibling (15% Off)
                </button>
                <button
                  type="button"
                  onClick={() => setDiscountType('merit')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                    discountType === 'merit'
                      ? 'bg-blue-950 text-white border-blue-950'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Merit / Orphan (30%)
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="border-b border-blue-900 pb-4">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Fee Estimate Slip
              </span>
              <h3 className="text-xl font-black mt-1 text-white">Estimated Fee Breakdown</h3>
              <p className="text-xs text-slate-400 mt-1">
                {selectedClass.name} | {selectedRoute.route.split('(')[0]}
              </p>
            </div>

            {/* Monthly Dues */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Monthly Tuition Fee:</span>
                <span className="font-semibold text-white">₹{selectedClass.tuitionFee}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-400 font-semibold">
                  <span>Concession / Discount:</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-300">
                <span>Bus Transport Fee:</span>
                <span className="font-semibold text-white">₹{transportFee}</span>
              </div>

              <div className="pt-2 border-t border-blue-900 flex justify-between items-center text-base font-bold text-amber-400">
                <span>Total Monthly Payable:</span>
                <span className="text-lg">₹{totalMonthly} / month</span>
              </div>
            </div>

            {/* Annual / One-Time Charges */}
            <div className="p-4 bg-blue-900/40 rounded-xl border border-blue-800 space-y-2 text-xs">
              <span className="font-bold text-slate-200 uppercase tracking-wider block text-[10px]">
                Annual One-Time Charges (Per Session)
              </span>
              <div className="flex justify-between text-slate-300">
                <span>Annual Maintenance & Library:</span>
                <span className="font-semibold text-white">₹{annualDevelopment}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Examination, Science Lab & ICT:</span>
                <span className="font-semibold text-white">₹{labExamFee}</span>
              </div>
              <div className="pt-2 border-t border-blue-800 flex justify-between font-bold text-white">
                <span>Total Annual Charges:</span>
                <span>₹{totalAnnualOneTime}</span>
              </div>
            </div>

            {/* Net Estimated Annual Total */}
            <div className="p-4 bg-amber-500 text-slate-950 rounded-xl text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider block">
                Estimated Full Academic Year Investment
              </span>
              <span className="text-2xl sm:text-3xl font-black block">
                ₹{estimatedYearlyTotal.toLocaleString()}
              </span>
              <span className="text-[11px] font-medium block opacity-90">
                (Includes 12 months tuition + transport + annual dues)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Quote</span>
              </button>
              <button
                onClick={() => setCurrentTab('admissions')}
                className="py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-black shadow transition-all flex items-center justify-center gap-1.5"
              >
                <span>Proceed to Apply</span>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & FFRC Policy Statement */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Strict Adherence to J&K Fee Regulatory Norms</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All fees and charges at SMS Islamia Model Secondary School Garoora are determined strictly in conformity with the directives of the **Committee for Fixation and Regulation of Fee of Private Schools, UT of Jammu & Kashmir (FFRC)**. No unapproved admission capitation fee is levied. Fee receipts are digitally documented and parents receive official receipts for every transaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="block text-slate-800">No Hidden Charges</strong>
              <span className="text-slate-500">Every itemized charge is notified well in advance.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="block text-slate-800">Orphan & Merit Aid</strong>
              <span className="text-slate-500">Dedicated trust fund for deserving and orphan students.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="block text-slate-800">Multiple Payment Modes</strong>
              <span className="text-slate-500">UPI, Bank transfer, and School Fee counter.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
