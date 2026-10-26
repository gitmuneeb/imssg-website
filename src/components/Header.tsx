import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  GraduationCap, 
  UserCheck, 
  Calculator, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
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

  const handleNav = (tab: TabType) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: TabType; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'notices', label: 'Notice Board', badge: 'Live' },
    { id: 'results', label: 'Results & Merit' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'calculator', label: 'Fee Calculator' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
      {/* Top Utility Bar (SRM Welkin Style) */}
      <div className="bg-[#0c2340] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-[#133054]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left Contacts & Location */}
          <div className="flex items-center space-x-4 flex-wrap gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              UDISE: {SCHOOL_INFO.udiseCode}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Bandipora-Srinagar Highway, Garoora (193502)
            </span>
            <a 
              href={`tel:${SCHOOL_INFO.contact.helpline}`} 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Helpline: {SCHOOL_INFO.contact.helpline}</span>
            </a>
          </div>

          {/* Right Social & Portal */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <a 
                href={SCHOOL_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram: @imssgarooraofficial"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SCHOOL_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Official Facebook Page"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-slate-600">|</span>

            <button 
              onClick={openPortal}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full transition-all text-xs shadow-sm hover:shadow"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Student / Parent Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-slate-100">
        {/* School Logo & Title */}
        <div 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          {/* Institutional Crest */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0c2340] via-slate-900 to-[#1e3a5f] p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center text-[#0c2340] border border-amber-400/40 p-1 text-center">
              <GraduationCap className="w-6 h-6 text-[#0c2340] group-hover:text-amber-600 transition-colors" />
              <span className="text-[9px] font-black tracking-tight text-[#0c2340] leading-none mt-0.5">IMSS</span>
              <span className="text-[7px] text-amber-600 font-bold leading-none">1982</span>
            </div>
          </div>

          {/* School Name & Sub-details */}
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl font-black text-[#0c2340] tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
              SMS Islamia Model Secondary School
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              <span className="text-amber-700 font-bold">Garoora, Bandipora</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">Established 1982</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-emerald-700 font-bold hidden sm:inline">JKBOSE & DSEK Recognized</span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Actions (SRM Welkin Style) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button 
            onClick={() => handleNav('admissions')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-slate-950" />
            <span>Admissions Open 2026</span>
          </button>

          <button 
            onClick={() => handleNav('calculator')}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 transition-all flex items-center gap-1.5"
            title="Fee Calculator"
          >
            <Calculator className="w-4 h-4 text-slate-600" />
            <span>Fee Calculator</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-[#0c2340]" />}
        </button>
      </div>

      {/* Main Desktop Navigation Menu */}
      <nav className="hidden lg:block bg-[#0c2340] text-white font-medium border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-0.5 xl:space-x-1 overflow-x-auto no-scrollbar py-0.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`whitespace-nowrap shrink-0 px-3 xl:px-3.5 py-3 text-xs xl:text-sm font-semibold transition-all relative ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-inner' 
                      : 'text-slate-100 hover:bg-[#133054] hover:text-amber-300'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2 shrink-0 pl-2">
            <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider bg-slate-900/60 px-2.5 py-1 rounded-md border border-amber-400/30">
              JKBOSE Affiliated
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 text-white px-4 pt-3 pb-6 space-y-3 border-t border-slate-800 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          {/* Quick Action Buttons on Mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-slate-800">
            <button 
              onClick={() => handleNav('admissions')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 px-3 rounded-xl text-center text-xs shadow"
            >
              Admissions 2026-27
            </button>
            <button 
              onClick={() => handleNav('calculator')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 px-3 rounded-xl text-center text-xs border border-slate-700"
            >
              Fee Calculator
            </button>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-medium">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNav(item.id)} 
                className={`text-left px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                  currentTab === item.id 
                    ? 'bg-amber-500 text-slate-950 font-bold' 
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 opacity-40" />
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800">
              <button 
                onClick={() => { setMobileMenuOpen(false); openPortal(); }} 
                className="w-full text-center py-2.5 px-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-amber-300 font-bold text-xs"
              >
                Open Student/Parent Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
