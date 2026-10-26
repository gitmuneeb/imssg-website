import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SMS Islamia Model Secondary School Garoora, Bandipora. I would like to inquire about school admissions and facilities.`
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3 no-print">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg backdrop-blur-sm transition-all transform hover:scale-105"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call */}
      <a
        href={`tel:${SCHOOL_INFO.contact.helpline}`}
        className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-full shadow-xl transition-all transform hover:scale-105 border border-blue-800"
        title="Direct Helpline Call"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span>Call: {SCHOOL_INFO.contact.helpline}</span>
      </a>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/919419028415?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-2xl transition-all transform hover:scale-105"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span>WhatsApp Inquiry</span>
      </a>
    </div>
  );
};
