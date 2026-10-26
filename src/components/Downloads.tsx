import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  ShieldCheck, 
  Calendar, 
  FileCheck, 
  X, 
  Printer,
  Sparkles
} from 'lucide-react';
import { DOCUMENTS_DATA, SCHOOL_INFO } from '../data/schoolData';
import type { DocumentItem, TabType } from '../types';

interface DownloadsProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Downloads: React.FC<DownloadsProps> = ({ setCurrentTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewDoc, setPreviewDoc] = useState<DocumentItem | null>(null);

  const categories = ['All', 'Admission', 'Academic', 'Regulatory', 'Transport'];

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    return activeCategory === 'All' || doc.category === activeCategory;
  });

  const handleDownload = (doc: DocumentItem) => {
    const textContent = 
      `============================================================\n` +
      `${SCHOOL_INFO.name.toUpperCase()}\n` +
      `Garoora, Bandipora, Jammu & Kashmir - 193502\n` +
      `UDISE: ${SCHOOL_INFO.udiseCode} | Estd: ${SCHOOL_INFO.establishedYear}\n` +
      `============================================================\n\n` +
      `DOCUMENT TITLE: ${doc.title}\n` +
      `CATEGORY: ${doc.category}\n` +
      `LAST UPDATED: ${doc.lastUpdated}\n` +
      `FILE FORMAT: ${doc.fileFormat} (${doc.size})\n\n` +
      `DESCRIPTION & DETAILS:\n${doc.description}\n\n` +
      `OFFICIAL POLICY:\n` +
      `This document is published by authority of SMS Islamia Model Secondary School,\n` +
      `Garoora, Bandipora in compliance with Jammu & Kashmir Directorate of School Education\n` +
      `and Fee Fixation & Regulation Committee (FFRC) statutory norms.\n\n` +
      `Signed & Certified,\n` +
      `Administrative Officer / Principal,\n` +
      `SMS Islamia Model Secondary School, Garoora.\n`;

    const element = document.createElement("a");
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Official Document Repository
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Download Center & Disclosures
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Access official school documents, syllabus books, admission forms, transport timetables, and statutory regulatory filings.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <FileText className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Documents Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {doc.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                    {doc.fileFormat} • {doc.size}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Updated: {doc.lastUpdated}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewDoc(doc)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                    title="Quick Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDownload(doc)}
                    className="px-3.5 py-1.5 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Public Disclosures Section (SRM Welkin inspired compliance) */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Mandatory Public Disclosure & Compliance</h3>
              <p className="text-xs text-slate-500">
                Statutory regulatory compliances mandated by DSEK, SCERT & JKBOSE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">UDISE Code</span>
              <strong className="text-slate-900 text-sm font-mono">{SCHOOL_INFO.udiseCode}</strong>
              <p className="text-slate-500 text-[11px] mt-1">Verified Day Co-Ed Secondary School</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Managing Trust / Society</span>
              <strong className="text-slate-900 text-sm">{SCHOOL_INFO.trust}</strong>
              <p className="text-slate-500 text-[11px] mt-1">Registered under J&K Societies Act</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">School Recognition Status</span>
              <strong className="text-emerald-700 text-sm">Recognized & Renewed</strong>
              <p className="text-slate-500 text-[11px] mt-1">Directorate of School Education Kashmir</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Building & Fire Safety</span>
              <strong className="text-slate-900 text-sm">Certified Safe & Clear</strong>
              <p className="text-slate-500 text-[11px] mt-1">Inspected by District Fire & PWD Authorities</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Drinking Water & Sanitation</span>
              <strong className="text-slate-900 text-sm">Health Certified</strong>
              <p className="text-slate-500 text-[11px] mt-1">PHE Bandipora Quality Verified</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Fee Regulation Compliance</span>
              <strong className="text-slate-900 text-sm">FFRC Compliant</strong>
              <p className="text-slate-500 text-[11px] mt-1">Order approved by Fee Regulatory Committee</p>
            </div>
          </div>
        </section>
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm">Document Overview</span>
              </div>
              <button 
                onClick={() => setPreviewDoc(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                  {previewDoc.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{previewDoc.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Format: {previewDoc.fileFormat} | Estimated Size: {previewDoc.size} | Updated: {previewDoc.lastUpdated}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong className="block mb-1 text-slate-900">Summary:</strong>
                {previewDoc.description}
                <div className="mt-3 text-[11px] text-slate-500">
                  Published by: Office of Administration, SMS Islamia Model Secondary School, Garoora, Bandipora.
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 bg-white text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(previewDoc);
                  setPreviewDoc(null);
                }}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
