import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  Download, 
  Printer, 
  X, 
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { NOTICES_DATA, SCHOOL_INFO } from '../data/schoolData';
import type { NoticeItem } from '../types';

interface NoticeBoardProps {
  selectedNoticeId?: string | null;
  onCloseModal?: () => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ selectedNoticeId, onCloseModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalNotice, setActiveModalNotice] = useState<NoticeItem | null>(null);

  // Handle external modal trigger from Hero ticker
  React.useEffect(() => {
    if (selectedNoticeId) {
      const found = NOTICES_DATA.find(n => n.id === selectedNoticeId);
      if (found) setActiveModalNotice(found);
    }
  }, [selectedNoticeId]);

  const categories = ['All', 'Admissions', 'Examinations', 'Circulars', 'Events'];

  const filteredNotices = NOTICES_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePrintNotice = () => {
    window.print();
  };

  const handleDownloadNotice = (notice: NoticeItem) => {
    // Generate text/pdf simulation download
    const element = document.createElement("a");
    const file = new Blob([
      `============================================================\n` +
      `${SCHOOL_INFO.name.toUpperCase()}\n` +
      `Garoora, Bandipora, Jammu & Kashmir - 193502\n` +
      `UDISE: ${SCHOOL_INFO.udiseCode} | Estd: ${SCHOOL_INFO.establishedYear}\n` +
      `============================================================\n\n` +
      `OFFICIAL CIRCULAR / NOTIFICATION\n` +
      `Date: ${notice.date}\n` +
      `Category: ${notice.category}\n` +
      `Subject: ${notice.title}\n\n` +
      `Order & Details:\n${notice.content}\n\n` +
      `Issued By Order of:\n` +
      `Office of the Principal / Administration\n` +
      `SMS Islamia Model Secondary School, Garoora\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${notice.id}_${notice.title.substring(0, 25).replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Official Communication Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Notice Board & Circulars
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Stay informed with real-time official notifications, admission circulars, examination schedules, and institutional announcements.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <Bell className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-950 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-900">
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-600 animate-pulse">
                        NEW
                      </span>
                    )}
                    {notice.isUrgent && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        URGENT
                      </span>
                    )}
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {notice.date}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveModalNotice(notice)}
                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 cursor-pointer transition-colors"
                  >
                    {notice.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-2">
                    {notice.content}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <button
                    onClick={() => setActiveModalNotice(notice)}
                    className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDownloadNotice(notice)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
                    title="Download Circular"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-12 text-center rounded-xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700">No circulars found</h4>
              <p className="text-xs text-slate-400 mt-1">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Official Notice Modal */}
      {activeModalNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm tracking-wide">Official School Circular</span>
              </div>
              <button 
                onClick={() => {
                  setActiveModalNotice(null);
                  if (onCloseModal) onCloseModal();
                }}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Letterhead Representation */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="text-center border-b-2 border-blue-950 pb-5">
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 uppercase tracking-tight">
                  {SCHOOL_INFO.formalName}
                </h2>
                <p className="text-xs text-slate-600 font-semibold mt-1">
                  Garoora, Bandipora, Jammu & Kashmir – 193502
                </p>
                <p className="text-[11px] text-slate-500">
                  UDISE: {SCHOOL_INFO.udiseCode} | Recognized by Directorate of School Education Kashmir
                </p>
              </div>

              {/* Notice Metadata */}
              <div className="flex justify-between items-center text-xs font-semibold text-slate-600 border-b border-slate-200 pb-3">
                <span>Ref: IMSS/GAR/NOT/{activeModalNotice.id.toUpperCase()}</span>
                <span>Date: {activeModalNotice.date}</span>
              </div>

              {/* Title & Body */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  Subject: {activeModalNotice.title}
                </h3>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {activeModalNotice.content}
                </div>
              </div>

              {/* Signatory */}
              <div className="pt-6 flex justify-between items-end border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  <p>Copy forwarded to:</p>
                  <p>1. Notice Board / School Website</p>
                  <p>2. Staff Room & Wing Incharges</p>
                  <p>3. Office Record File</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-950">Principal / Secretary</div>
                  <div className="text-xs text-slate-500">SMS Islamia Model Sec. School</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Digitally Signed & Certified</div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end gap-3 rounded-b-2xl">
              <button
                onClick={handlePrintNotice}
                className="px-4 py-2 bg-white hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs sm:text-sm border border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Circular</span>
              </button>
              <button
                onClick={() => handleDownloadNotice(activeModalNotice)}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
