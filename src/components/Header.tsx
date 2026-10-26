import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronDown, 
  UserCheck, 
  Calculator, 
  FileText,
  Award
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import type { TabType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
  openPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, openPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleNav = (tab: TabType) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 flex-wrap gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              UDISE: {SCHOOL_INFO.udiseCode}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Garoora, Bandipora (J&K) - 193502
            </span>
            <a 
              href={`tel:${SCHOOL_INFO.contact.helpline}`} 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SCHOOL_INFO.contact.helpline}</span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden md:inline text-slate-400">Follow Official:</span>
            <a 
              href={SCHOOL_INFO.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-400 p-1 transition-colors"
              title="Instagram: @imssgarooraofficial"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href={SCHOOL_INFO.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 p-1 transition-colors"
              title="Official Facebook Page"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={openPortal}
              className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded transition-colors text-xs"
            >
              <UserCheck className="w-3 h-3" />
              Student / Parent Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* School Logo & Title */}
        <div 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-900 via-indigo-900 to-amber-600 p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center text-blue-950 border-2 border-amber-400 text-center p-1">
              <GraduationCap className="w-6 h-6 text-blue-900 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black tracking-tighter text-blue-950 leading-none">IMSS</span>
              <span className="text-[7px] text-amber-700 font-bold leading-none">1982</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-extrabold text-blue-950 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                SMS Islamia Model Secondary School
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="text-amber-800 font-semibold">Garoora, Bandipora</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 hidden sm:inline">Estd. 1982</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-emerald-700 font-semibold hidden md:inline">Recognized by JKBOSE & DSEK</span>
            </div>
          </div>
        </div>

        {/* Action Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => handleNav('admissions')}
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow hover:shadow-md transition-all flex items-center gap-2 border border-blue-950"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            Admissions 2026-27
          </button>
          <button 
            onClick={() => handleNav('calculator')}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-3.5 py-2 rounded-lg text-sm border border-slate-300 transition-colors flex items-center gap-1.5"
            title="Fee Calculator"
          >
            <Calculator className="w-4 h-4 text-slate-600" />
            Fee Calculator
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Main Navigation Menu */}
      <nav className="hidden lg:block bg-blue-950 text-white font-medium border-t border-blue-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => handleNav('home')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'about' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              About School
            </button>
            <button
              onClick={() => handleNav('academics')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'academics' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Academics
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'admissions' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Admissions
            </button>
            <button
              onClick={() => handleNav('notices')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t relative ${
                currentTab === 'notices' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Notice Board
              <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </button>
            <button
              onClick={() => handleNav('results')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'results' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Results & Merit
            </button>
            <button
              onClick={() => handleNav('facilities')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'facilities' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Facilities & Labs
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'gallery' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNav('calculator')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'calculator' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Fee Calculator
            </button>
            <button
              onClick={() => handleNav('downloads')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'downloads' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Downloads
            </button>
            <button
              onClick={() => handleNav('careers')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'careers' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`whitespace-nowrap shrink-0 px-3 py-2.5 text-xs xl:text-sm transition-colors rounded-t ${
                currentTab === 'contact' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-blue-900 text-slate-100'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-2 shrink-0 pl-2">
            <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider bg-blue-900/80 px-2 py-0.5 rounded whitespace-nowrap border border-blue-800">
              JKBOSE Affiliated
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white px-4 pt-2 pb-6 space-y-2 border-t border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            <button 
              onClick={() => handleNav('admissions')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 px-3 rounded text-center text-xs"
            >
              Admissions 2026
            </button>
            <button 
              onClick={() => handleNav('calculator')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2 px-3 rounded text-center text-xs"
            >
              Fee Calculator
            </button>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-medium">
            <button 
              onClick={() => handleNav('home')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('about')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'about' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              About School
            </button>
            <button 
              onClick={() => handleNav('academics')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'academics' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Academics & Wings
            </button>
            <button 
              onClick={() => handleNav('admissions')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'admissions' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Admissions 2026-27
            </button>
            <button 
              onClick={() => handleNav('notices')} 
              className={`text-left px-3 py-2 rounded flex items-center justify-between ${currentTab === 'notices' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              <span>Notice Board & Circulars</span>
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">New</span>
            </button>
            <button 
              onClick={() => handleNav('results')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'results' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Results & Merit List
            </button>
            <button 
              onClick={() => handleNav('facilities')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'facilities' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Campus Facilities & Labs
            </button>
            <button 
              onClick={() => handleNav('gallery')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'gallery' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Photo & Video Gallery
            </button>
            <button 
              onClick={() => handleNav('downloads')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'downloads' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Downloads & Forms
            </button>
            <button 
              onClick={() => handleNav('careers')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'careers' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Careers / Vacancies
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className={`text-left px-3 py-2 rounded ${currentTab === 'contact' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:bg-slate-800'}`}
            >
              Contact & Map
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); openPortal(); }} 
              className="text-left px-3 py-2 rounded bg-blue-800 text-amber-300 font-semibold hover:bg-blue-700"
            >
              Open Student/Parent Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
