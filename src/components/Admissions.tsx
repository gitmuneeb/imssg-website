import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle, 
  FileCheck, 
  Calendar, 
  Download, 
  Printer, 
  AlertCircle, 
  User, 
  Phone, 
  Home, 
  Bus,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO, TRANSPORT_ROUTES } from '../data/schoolData';
import type { TabType } from '../types';

interface AdmissionsProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ setCurrentTab }) => {
  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    bloodGroup: 'Unknown',
    gradeApplying: 'Nursery',
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    address: 'Garoora, Bandipora',
    previousSchool: '',
    previousPercentage: '',
    needsTransport: 'Yes',
    transportRoute: 'Garoora Internal / Village Link Roads',
    declaration: false
  });

  const [submittedSlip, setSubmittedSlip] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.dob || !formData.fatherName || !formData.mobileNumber) {
      setErrorMessage('Please fill in all mandatory fields (Student Name, DOB, Father Name, and Contact Number).');
      return;
    }
    if (!formData.declaration) {
      setErrorMessage('Please acknowledge the declaration before submitting.');
      return;
    }

    setErrorMessage('');
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const slipId = `IMSS-2026-${randomNum}`;
    const submissionDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    setSubmittedSlip({
      applicationId: slipId,
      submissionDate,
      ...formData
    });

    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Academic Session 2026 – 2027
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Admissions & Online Enrollment
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Welcome prospective parents! Begin your child’s educational journey at SMS Islamia Model Secondary School, Garoora. Follow our streamlined admission process below.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <GraduationCap className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Step-by-Step Roadmap */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Four Steps to Admission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative">
              <span className="w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center mb-3">
                1
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Submit Application</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the online registration form below or collect a physical form from the school office in Garoora.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative">
              <span className="w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center mb-3">
                2
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Document Submission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bring copies of Birth Certificate, Aadhaar cards, 4 passport photos, and previous School Leaving Certificate.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative">
              <span className="w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center mb-3">
                3
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Parent & Child Interaction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A friendly, informal conversation for Kindergarten or a basic proficiency test for primary and secondary classes.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                4
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Enrollment & Uniform</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Payment of official admission dues, collection of curriculum syllabus, booklist, and transport card.
              </p>
            </div>
          </div>
        </section>

        {/* Age Criteria & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Age Eligibility Table */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-blue-950 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-900" />
              Age Eligibility Norms (As of March 31, 2026)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="py-2.5 px-3">Class Level</th>
                    <th className="py-2.5 px-3">Minimum Age</th>
                    <th className="py-2.5 px-3">Recommended Age</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">Nursery</td>
                    <td className="py-2 px-3">3 Years+</td>
                    <td className="py-2 px-3">3 to 4 Years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">L.K.G (Lower Kindergarten)</td>
                    <td className="py-2 px-3">4 Years+</td>
                    <td className="py-2 px-3">4 to 5 Years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">U.K.G (Upper Kindergarten)</td>
                    <td className="py-2 px-3">5 Years+</td>
                    <td className="py-2 px-3">5 to 6 Years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">Class 1st</td>
                    <td className="py-2 px-3">6 Years+</td>
                    <td className="py-2 px-3">6 to 7 Years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-800">Class 2nd to 9th</td>
                    <td className="py-2 px-3" colSpan={2}>Subject to Transfer Certificate (SLC) & Vacancy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents Checklist */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-blue-950 mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              Required Checklist for Verification
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Original & Attested copy of Date of Birth Certificate (Municipal Council / Village Panchayat / Hospital).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>4 recent passport-size photographs of the student in clear background.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Self-attested photocopies of Aadhaar Cards of Student, Father, and Mother.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Original Transfer Certificate (SLC) and previous Marksheet (for Classes 1st and above).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Student Blood Group certificate issued by an authorized pathology laboratory.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Admission Acknowledgement Slip (Rendered when form is submitted) */}
        {submittedSlip && (
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-emerald-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-emerald-950">Application Submitted Successfully!</h3>
                  <p className="text-xs text-emerald-700">Please print or save this official registration slip.</p>
                </div>
              </div>

              <button
                onClick={handlePrintSlip}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 shadow transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Application Slip</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-emerald-300 space-y-4">
              <div className="text-center border-b border-slate-200 pb-3">
                <h4 className="font-black text-blue-950 text-base sm:text-lg uppercase">
                  {SCHOOL_INFO.formalName}
                </h4>
                <p className="text-xs text-slate-500">Garoora, Bandipora, J&K – 193502 | UDISE: {SCHOOL_INFO.udiseCode}</p>
                <div className="mt-2 inline-block bg-blue-900 text-white font-mono font-bold text-sm px-4 py-1 rounded">
                  Application ID: {submittedSlip.applicationId}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="block text-slate-400 text-xs">Student Full Name</span>
                  <span className="font-bold text-slate-900">{submittedSlip.studentName}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Date of Birth</span>
                  <span className="font-bold text-slate-900">{submittedSlip.dob}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Class Applying For</span>
                  <span className="font-bold text-blue-900">{submittedSlip.gradeApplying}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Father's Name</span>
                  <span className="font-bold text-slate-900">{submittedSlip.fatherName}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Mother's Name</span>
                  <span className="font-bold text-slate-900">{submittedSlip.motherName || 'N/A'}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Contact Mobile</span>
                  <span className="font-bold text-slate-900">{submittedSlip.mobileNumber}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Residential Address</span>
                  <span className="font-bold text-slate-900">{submittedSlip.address}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">School Bus Transport</span>
                  <span className="font-bold text-slate-900">{submittedSlip.needsTransport} ({submittedSlip.transportRoute})</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs">Date of Registration</span>
                  <span className="font-bold text-slate-900">{submittedSlip.submissionDate}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                <strong>Next Step:</strong> Kindly visit the administrative office at SMS Islamia Model Secondary School, Garoora campus within 5 working days between 10:00 AM and 2:00 PM along with your student photographs and documentary proofs.
              </div>
            </div>
          </div>
        )}

        {/* Working Online Admission Application Form */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-blue-50/70 p-6 rounded-2xl border border-blue-100">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Session 2026-27 Enrollment
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Begin Your Child's Journey at IMS Garoora
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Admissions are open for Kindergarten (Nursery, LKG, UKG) and limited lateral seats across Primary and Middle classes. Experience value-based modern schooling in a caring environment.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="h-40 rounded-xl overflow-hidden shadow border border-slate-200">
                <img
                  src="/images/photos/695004580_1980855626129725_5040692545407297150_n.jpg"
                  alt="Students at IMS Garoora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xl font-extrabold text-slate-900">
              Online Admission Registration Form
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Please provide authentic details. Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Student Particulars */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 text-blue-950">
                <User className="w-4 h-4 text-blue-900" />
                1. Student Particulars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    placeholder="e.g. Aayan Ahmad"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Class Seeking Admission <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gradeApplying"
                    value={formData.gradeApplying}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-semibold text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  >
                    <option value="Nursery">Nursery</option>
                    <option value="L.K.G">L.K.G</option>
                    <option value="U.K.G">U.K.G</option>
                    <option value="Class 1st">Class 1st</option>
                    <option value="Class 2nd">Class 2nd</option>
                    <option value="Class 3rd">Class 3rd</option>
                    <option value="Class 4th">Class 4th</option>
                    <option value="Class 5th">Class 5th</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                    <option value="Class 9th">Class 9th</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Parent & Contact Information */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 text-blue-950">
                <Phone className="w-4 h-4 text-blue-900" />
                2. Parents & Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Father's / Guardian's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    placeholder="Father's Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mother's Name</label>
                  <input
                    type="text"
                    name="motherName"
                    placeholder="Mother's Name"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Father's Occupation</label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    placeholder="e.g. Business / Govt Employee / Agriculture"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Contact Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    placeholder="+91 94190 XXXXX"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    placeholder="+91 94190 XXXXX"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* 3. Address & Transport Preference */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 text-blue-950">
                <Home className="w-4 h-4 text-blue-900" />
                3. Address & Transport Facility
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Residential Address (Village / Mohalla, Bandipora)
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="e.g. Garoora Main Market, Bandipora"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Opt for School Bus Transport?
                  </label>
                  <select
                    name="transportRoute"
                    value={formData.transportRoute}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white"
                  >
                    {TRANSPORT_ROUTES.map((r, i) => (
                      <option key={i} value={r.route}>
                        {r.route} {r.fee > 0 ? `(₹${r.fee}/mo)` : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Declaration */}
            <div className="pt-4 border-t border-slate-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-950 rounded border-slate-300 focus:ring-blue-900"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I hereby declare that all information furnished above is authentic and accurate to the best of my knowledge. I promise to abide by all the rules, regulations, uniform codes, and fee structures of SMS Islamia Model Secondary School, Garoora.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-slate-400">
                Helpline for queries: <strong className="text-slate-700">{SCHOOL_INFO.contact.helpline}</strong>
              </div>

              <button
                type="submit"
                className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span>Submit Registration Form</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
