import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import { SCHOOL_INFO } from '../data/schoolData';
import type { TabType } from '../types';

interface FooterProps {
  setCurrentTab: (tab: TabType) => void;
  openPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openPortal }) => {
  const handleNav = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Legacy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-0.5 border-2 border-emerald-600 shrink-0 overflow-hidden shadow">
                <img 
                  src="/images/logo.jpg" 
                  alt="Islamia Model Secondary School Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base leading-tight">
                  {SCHOOL_INFO.name}
                </h3>
                <span className="text-amber-400 font-semibold text-xs">Garoora, Bandipora (J&K)</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Established in 1982 by the Islamia Educational & Welfare Society, providing four decades of academic distinction, moral development, and foundational leadership in Bandipora.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[11px] text-amber-300 font-mono">
                UDISE: {SCHOOL_INFO.udiseCode}
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[11px] text-emerald-400 font-medium">
                JKBOSE Affiliated
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-slate-400 text-xs">Follow Us:</span>
              <a
                href={SCHOOL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram @imssgarooraofficial"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Facebook Official"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  About School & Legacy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Academics (Nursery to 10th)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Admissions 2026-27
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('notices')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Notice Board & Circulars
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('results')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  JKBOSE Results & Toppers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Fee Calculator (FFRC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('downloads')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Download Forms & Syllabus
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Community (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Community & Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={openPortal} className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5">
                  <span>Student/Parent Portal (Coming Soon)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors">
                  Laboratories & ICT
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors">
                  Teacher Vacancies
                </button>
              </li>
              <li>
                <a 
                  href={SCHOOL_INFO.social.facebookCommunity} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1"
                >
                  <span>Student Forum (FB)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Campus
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bandipora-Srinagar Road, Garoora, Bandipora, J&K – 193502</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.contact.helpline}`} className="hover:text-white">
                  {SCHOOL_INFO.contact.helpline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="hover:text-white">
                  {SCHOOL_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-lg transition-colors text-center"
                >
                  View Directions & Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 pb-24 sm:pb-16 lg:pb-8 lg:pr-72">
          <p>© {new Date().getFullYear()} SMS Islamia Model Secondary School, Garoora. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 shadow-md">
            <span>UDISE: {SCHOOL_INFO.udiseCode}</span>
            <span>•</span>
            <span>Affiliated with JKBOSE / DSEK</span>
            <span>•</span>
            <span className="text-slate-300">
              Designed by{' '}
              <a
                href="https://ilmorasoftlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 decoration-amber-500/70 transition-colors hover:text-white"
              >
                ilmora SoftLabs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
