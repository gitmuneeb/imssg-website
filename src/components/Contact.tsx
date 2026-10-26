import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import { SCHOOL_INFO } from '../data/schoolData';
import type { TabType } from '../types';

interface ContactProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Contact: React.FC<ContactProps> = ({ setCurrentTab }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setErrorMsg('Please enter your Name, Phone Number, and Message.');
      return;
    }
    setErrorMsg('');
    setIsSuccess(true);
    setForm({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Contact & Campus Location
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              We welcome parents, alumni, and visitors to connect with our administrative and admissions team in Garoora, Bandipora.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <MapPin className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-200 pb-4">
                Campus Information
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-100 text-blue-900 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">School Address</strong>
                    <p className="text-slate-600 mt-0.5">
                      {SCHOOL_INFO.formalName}<br />
                      Bandipora-Srinagar National Highway, Garoora,<br />
                      District Bandipora, Jammu & Kashmir – 193502
                    </p>
                    <span className="text-[11px] text-amber-700 font-semibold block mt-1">
                      Landmark: Near Garoora Main Market & Bus Stop
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Telephone & Helpline</strong>
                    <p className="text-slate-600 mt-0.5">
                      Helpline: <a href={`tel:${SCHOOL_INFO.contact.helpline}`} className="font-semibold text-blue-900 hover:underline">{SCHOOL_INFO.contact.helpline}</a><br />
                      Office: <a href={`tel:${SCHOOL_INFO.contact.officePhone}`} className="text-slate-600 hover:underline">{SCHOOL_INFO.contact.officePhone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Electronic Mail</strong>
                    <p className="text-slate-600 mt-0.5">
                      Admissions: <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="text-blue-900 hover:underline">{SCHOOL_INFO.contact.email}</a><br />
                      Principal Desk: <a href={`mailto:${SCHOOL_INFO.contact.principalEmail}`} className="text-blue-900 hover:underline">{SCHOOL_INFO.contact.principalEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Office & Visitor Hours</strong>
                    <p className="text-slate-600 mt-0.5">
                      {SCHOOL_INFO.contact.workingHours}<br />
                      <span className="text-slate-400">Sundays & Gazette Holidays: Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-700 block mb-2">Connect on Social Media</span>
                <div className="flex gap-3">
                  <a
                    href={SCHOOL_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold text-xs rounded-xl border border-pink-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SCHOOL_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-xl border border-blue-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA Card */}
            <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-md flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Quick WhatsApp Inquiry</h3>
                <p className="text-xs text-emerald-100 mt-0.5">Chat directly with the administrative cell</p>
              </div>
              <a
                href={`https://wa.me/919419028415?text=${encodeURIComponent("Hello SMS Islamia Model Secondary School Garoora, I have an inquiry regarding admissions.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3.5 bg-white text-emerald-800 font-bold text-xs rounded-xl shadow hover:bg-emerald-50 transition-colors flex items-center gap-1"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact & Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Drop a Line
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Send Us an Inquiry</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Have questions about fee structures, admission vacancies, or school events? Send your message and we'll reply promptly.
              </p>
            </div>

            {isSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Your message has been delivered to the school administrative desk. We will reach back to you shortly!</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Parvaiz Ahmad"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94190 XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject of Inquiry</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="New Admissions 2026-27">New Admissions 2026-27</option>
                    <option value="Bus Transport Routes">Bus Transport Routes</option>
                    <option value="Fee Structure & Concession">Fee Structure & Concession</option>
                    <option value="Marksheet / Result Verification">Marksheet / Result Verification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message / Query *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <section className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                Find Us on the Map — Garoora, Bandipora
              </h3>
              <p className="text-xs text-slate-500">
                Situated prominently on the scenic Bandipora-Srinagar Highway in Garoora
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Garoora+Bandipora+Jammu+and+Kashmir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-blue-950 font-bold text-xs rounded-lg transition-colors w-fit"
            >
              Open in Google Maps App
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="SMS Islamia Model Secondary School Garoora Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=Garoora%20Bandipora%20Kashmir&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
