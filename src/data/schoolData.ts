import type { NoticeItem, StudentResult, GalleryPhoto, DocumentItem, JobOpening } from '../types';

export const SCHOOL_INFO = {
  name: "SMS Islamia Model Secondary School",
  shortName: "IMS Garoora",
  formalName: "S.M.S. Islamia Model Secondary School, Garoora",
  trust: "Islamia Educational & Welfare Society, Garoora",
  establishedYear: 1982,
  udiseCode: "01160100803",
  boardAffiliation: "JKBOSE (Jammu & Kashmir Board of School Education)",
  medium: "English Medium",
  type: "Co-Educational Day School (Primary to Secondary)",
  tagline: "Excellence in Academics • Grounded in Moral Values",
  motto: "مِنَ الظُّلُمَاتِ إِلَى النُّورِ (From Darkness into Light)",
  logo: "/images/logo.jpg",
  address: {
    street: "Bandipora-Srinagar National Highway",
    locality: "Garoora",
    tehsil: "Bandipora",
    district: "Bandipora",
    state: "Jammu & Kashmir",
    pincode: "193502",
    landmarks: "Near Garoora Main Market, Bandipora"
  },
  contact: {
    helpline: "+91 94190 28415",
    officePhone: "+91 1957 225310",
    whatsapp: "+91 94190 28415",
    email: "imssgaroora@gmail.com",
    principalEmail: "principal.imssgaroora@gmail.com",
    workingHours: "Monday – Saturday: 9:00 AM – 4:00 PM (Winter: 10:00 AM – 3:30 PM)"
  },
  social: {
    instagram: "https://www.instagram.com/imssgarooraofficial/",
    facebook: "https://www.facebook.com/people/Sms-Islamia-Model-Secondary-School-Garoora-Bandipora/61563896326799/",
    facebookCommunity: "https://www.facebook.com/p/SMS-Islamia-model-sec-school-Garoora-Bandipora-Students-100063791144017/"
  },
  stats: [
    { label: "Years of Educational Legacy", value: "43+", suffix: "" },
    { label: "Enrolled Students", value: "1,150", suffix: "+" },
    { label: "JKBOSE Board Pass Rate", value: "100", suffix: "%" },
    { label: "Qualified & Trained Faculty", value: "48", suffix: "+" },
    { label: "Student-Teacher Ratio", value: "22:1", suffix: "" }
  ]
};

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: "not-2026-01",
    title: "Admissions Open for Academic Session 2026-27 (Nursery to 9th Class)",
    date: "October 24, 2026",
    category: "Admissions",
    isNew: true,
    isUrgent: true,
    content: "Registrations are now open for Nursery, LKG, UKG, and limited vacant seats from 1st to 9th Class. Parents can fill the online admission inquiry or visit the administrative block between 10:00 AM and 2:00 PM with required documents (Birth certificate, Aadhaar, previous school discharge certificate).",
    attachmentName: "Admission_Brochure_2026-27.pdf",
    fileSize: "1.8 MB"
  },
  {
    id: "not-2026-02",
    title: "JKBOSE Class 10th Annual Regular Examination Form Submission",
    date: "October 18, 2026",
    category: "Examinations",
    isNew: true,
    content: "All eligible students of Class 10th are instructed to verify their subject combinations and submit the examination enrollment clearance forms along with 4 passport-size photographs before November 5, 2026.",
    attachmentName: "Class_10th_Exam_Circular.pdf",
    fileSize: "420 KB"
  },
  {
    id: "not-2026-03",
    title: "Annual Seerat-un-Nabi (PBUH) & Husn-e-Qirat Inter-House Conference",
    date: "October 12, 2026",
    category: "Events",
    content: "The Annual Moral & Seerat Conference will be hosted at the school auditorium. Students participating in Naat, Qirat, and Speech contests are advised to submit their speech scripts to the Department of Islamic & Moral Studies.",
    attachmentName: "Seerat_Conference_Rules.pdf",
    fileSize: "650 KB"
  },
  {
    id: "not-2026-04",
    title: "Revised School Timings for Approaching Winter Season",
    date: "October 05, 2026",
    category: "Circulars",
    content: "In compliance with the Directorate of School Education Kashmir (DSEK) guidelines, the school timing for all wings (Kindergarten to 10th) will be from 10:00 AM to 3:30 PM effective immediately. School bus routes will operate accordingly.",
    attachmentName: "Winter_Timings_Notification.pdf",
    fileSize: "280 KB"
  },
  {
    id: "not-2026-05",
    title: "Term-End Science & Robotic Exhibition 2026",
    date: "September 28, 2026",
    category: "Events",
    content: "Students from 6th to 10th grades will present working models on Hydro-power, Wular Lake ecosystem conservation, renewable solar energy, and AI in Agriculture. Parents and guardians are cordially invited.",
    attachmentName: "Science_Exhibition_Brochure.pdf",
    fileSize: "1.2 MB"
  },
  {
    id: "not-2026-06",
    title: "Distribution of Uniform & Winter Woolens Guidelines",
    date: "September 20, 2026",
    category: "Circulars",
    content: "Parents are requested to ensure students adhere strictly to the prescribed winter navy-blue blazer and sweater uniform code. Authorized vendor details are listed in the circular.",
    attachmentName: "Uniform_Code_Circular.pdf",
    fileSize: "310 KB"
  }
];

export const RESULTS_DATA: StudentResult[] = [
  {
    rollNo: "26101",
    name: "Mohammad Huzaif Lone",
    parentage: "Ghulam Mohammad Lone",
    session: "Annual Regular 2025-26",
    class: "Class 10th (JKBOSE)",
    marksObtained: 492,
    totalMarks: 500,
    percentage: 98.4,
    grade: "A1",
    status: "Qualified with Distinction",
    rank: "District Top Ranker - 1st Position in Bandipora",
    subjects: [
      { subject: "General English", maxMarks: 100, obtainedMarks: 97, grade: "A1" },
      { subject: "Mathematics", maxMarks: 100, obtainedMarks: 100, grade: "A1" },
      { subject: "Science (Phy/Chem/Bio)", maxMarks: 100, obtainedMarks: 99, grade: "A1" },
      { subject: "Social Science", maxMarks: 100, obtainedMarks: 98, grade: "A1" },
      { subject: "Urdu", maxMarks: 100, obtainedMarks: 98, grade: "A1" }
    ]
  },
  {
    rollNo: "26102",
    name: "Zehra Fatima",
    parentage: "Mushtaq Ahmad Reshi",
    session: "Annual Regular 2025-26",
    class: "Class 10th (JKBOSE)",
    marksObtained: 488,
    totalMarks: 500,
    percentage: 97.6,
    grade: "A1",
    status: "Qualified with Distinction",
    rank: "Top Distinction Holder",
    subjects: [
      { subject: "General English", maxMarks: 100, obtainedMarks: 98, grade: "A1" },
      { subject: "Mathematics", maxMarks: 100, obtainedMarks: 98, grade: "A1" },
      { subject: "Science (Phy/Chem/Bio)", maxMarks: 100, obtainedMarks: 97, grade: "A1" },
      { subject: "Social Science", maxMarks: 100, obtainedMarks: 96, grade: "A1" },
      { subject: "Urdu", maxMarks: 100, obtainedMarks: 99, grade: "A1" }
    ]
  },
  {
    rollNo: "26103",
    name: "Owais Farooq Bhat",
    parentage: "Farooq Ahmad Bhat",
    session: "Annual Regular 2025-26",
    class: "Class 10th (JKBOSE)",
    marksObtained: 479,
    totalMarks: 500,
    percentage: 95.8,
    grade: "A1",
    status: "Qualified with Distinction",
    rank: "High Distinction",
    subjects: [
      { subject: "General English", maxMarks: 100, obtainedMarks: 94, grade: "A1" },
      { subject: "Mathematics", maxMarks: 100, obtainedMarks: 97, grade: "A1" },
      { subject: "Science (Phy/Chem/Bio)", maxMarks: 100, obtainedMarks: 96, grade: "A1" },
      { subject: "Social Science", maxMarks: 100, obtainedMarks: 95, grade: "A1" },
      { subject: "Urdu", maxMarks: 100, obtainedMarks: 97, grade: "A1" }
    ]
  },
  {
    rollNo: "26104",
    name: "Sobia Jan",
    parentage: "Abdul Rashid Mir",
    session: "Annual Regular 2025-26",
    class: "Class 10th (JKBOSE)",
    marksObtained: 471,
    totalMarks: 500,
    percentage: 94.2,
    grade: "A1",
    status: "Qualified with Distinction",
    subjects: [
      { subject: "General English", maxMarks: 100, obtainedMarks: 92, grade: "A1" },
      { subject: "Mathematics", maxMarks: 100, obtainedMarks: 95, grade: "A1" },
      { subject: "Science (Phy/Chem/Bio)", maxMarks: 100, obtainedMarks: 94, grade: "A1" },
      { subject: "Social Science", maxMarks: 100, obtainedMarks: 94, grade: "A1" },
      { subject: "Urdu", maxMarks: 100, obtainedMarks: 96, grade: "A1" }
    ]
  },
  {
    rollNo: "26105",
    name: "Danish Ahmad Sheikh",
    parentage: "Bashir Ahmad Sheikh",
    session: "Annual Regular 2025-26",
    class: "Class 10th (JKBOSE)",
    marksObtained: 462,
    totalMarks: 500,
    percentage: 92.4,
    grade: "A1",
    status: "Qualified with Distinction",
    subjects: [
      { subject: "General English", maxMarks: 100, obtainedMarks: 90, grade: "A1" },
      { subject: "Mathematics", maxMarks: 100, obtainedMarks: 93, grade: "A1" },
      { subject: "Science (Phy/Chem/Bio)", maxMarks: 100, obtainedMarks: 92, grade: "A1" },
      { subject: "Social Science", maxMarks: 100, obtainedMarks: 93, grade: "A1" },
      { subject: "Urdu", maxMarks: 100, obtainedMarks: 94, grade: "A1" }
    ]
  }
];

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: "gal-main-campus",
    title: "IMS Garoora Main Campus & Academic Block",
    category: "Campus",
    imageUrl: "/images/hero-main.jpg",
    caption: "The scenic main campus of SMS Islamia Model Secondary School in Garoora, Bandipora set against the majestic Himalayan backdrop.",
    date: "2026"
  },
  {
    id: "gal-campus-community",
    title: "Morning Courtyard & Student Gathering",
    category: "Campus",
    imageUrl: "/images/hero-slide2.jpg",
    caption: "Students and faculty gathered in the school courtyard during daily assembly and morning moral reflections.",
    date: "2026"
  },
  {
    id: "gal-academics-senior",
    title: "Secondary Wing Academic Excellence (JKBOSE)",
    category: "Academics",
    imageUrl: "/images/hero-slide3.jpg",
    caption: "Secondary students preparing diligently with dedicated faculty for board merit and competitive milestones.",
    date: "2026"
  },
  {
    id: "gal-sports-day",
    title: "Annual Sports Meet & Inter-House Athletics",
    category: "Sports",
    imageUrl: "/images/sports-day.webp",
    caption: "Students actively participating in track events, outdoor athletics, and team sports fostering health and resilience.",
    date: "2026"
  },
  {
    id: "gal-cultural-seerat",
    title: "Seerat-un-Nabi & Husn-e-Qirat Conference",
    category: "Cultural",
    imageUrl: "/images/cultural-event.jpg",
    caption: "Annual spiritual gathering and Quranic recitation competition celebrating divine guidance, moral ethics, and Adab.",
    date: "2026"
  },
  {
    id: "gal-annual-felicitation",
    title: "Annual Day & Merit Awards Distribution",
    category: "Events",
    imageUrl: "/images/annual-event.jpg",
    caption: "Felicitating Class 10th JKBOSE Star Achievers, board distinction holders, and co-curricular champions with trophies and certificates.",
    date: "2026"
  },
  {
    id: "gal-science-exhibition",
    title: "Science Experiments & Working Robotics Models",
    category: "Academics",
    imageUrl: "/images/gallery/imss-7.jpg",
    caption: "Hands-on student demonstrations and science exhibition projects in biology, physics, and environmental conservation.",
    date: "2026"
  },
  {
    id: "gal-kindergarten-learning",
    title: "Kindergarten Play-Way & Foundational Activities",
    category: "Academics",
    imageUrl: "/images/gallery/imss-8.jpg",
    caption: "Joyful foundational learning activities nurturing young minds in a caring, loving, and supportive atmosphere.",
    date: "2026"
  },
  {
    id: "gal-assembly-discipline",
    title: "School Morning Assembly & Moral Discipline",
    category: "Campus",
    imageUrl: "/images/gallery/imss-4.jpg",
    caption: "Daily morning assembly at Garoora campus featuring spiritual recitations, moral pledge, and student reflections.",
    date: "2026"
  },
  {
    id: "gal-outdoor-games",
    title: "Outdoor Games & Team Sports Activities",
    category: "Sports",
    imageUrl: "/images/gallery/imss-11.jpg",
    caption: "Students participating in outdoor recreational games fostering teamwork, discipline, and leadership.",
    date: "2026"
  },
  {
    id: "gal-moral-circle",
    title: "Moral Education & Islamic Studies Circle",
    category: "Cultural",
    imageUrl: "/images/gallery/imss-12.jpg",
    caption: "Values-based guidance focusing on Adab, social responsibility, integrity, and community welfare.",
    date: "2026"
  },
  {
    id: "gal-student-recognition",
    title: "Academic Recognition & Star Performers",
    category: "Events",
    imageUrl: "/images/gallery/imss-14.jpg",
    caption: "Celebrating distinguished student achievements with certificates, medals, and academic awards.",
    date: "2026"
  },
  {
    id: "gal-classroom-pedagogy",
    title: "Interactive Classroom Learning & Discussion",
    category: "Academics",
    imageUrl: "/images/gallery/imss-2.jpg",
    caption: "Students engaged in interactive conceptual learning with dedicated subject teachers.",
    date: "2026"
  },
  {
    id: "gal-community-milestones",
    title: "Campus Events & Community Celebrations",
    category: "Events",
    imageUrl: "/images/gallery/imss-10.jpg",
    caption: "Co-curricular presentations, cultural programs, and community milestones at IMS Garoora.",
    date: "2026"
  },
  {
    id: "gal-art-craft",
    title: "Art, Creativity & Student Craft Exhibition",
    category: "Cultural",
    imageUrl: "/images/gallery/imss-13.jpg",
    caption: "Display of student artwork, calligraphy, and creative crafts nurtured by our art faculty.",
    date: "2026"
  },
  {
    id: "gal-sports-spirit",
    title: "Inter-House Athletic Spirit & Teamwork",
    category: "Sports",
    imageUrl: "/images/gallery/imss-3.jpg",
    caption: "Inter-house athletic events promoting physical fitness, stamina, and camaraderie.",
    date: "2026"
  }
];

export const DOCUMENTS_DATA: DocumentItem[] = [
  {
    id: "doc-01",
    title: "Official Student Admission Application Form (2026-27)",
    category: "Admission",
    fileFormat: "PDF",
    size: "1.4 MB",
    lastUpdated: "October 2026",
    description: "Standard application form for new registrations from Nursery to Class 9th, including medical history and transport undertaking."
  },
  {
    id: "doc-02",
    title: "Annual Fee Structure & Regulation Guidelines (FFRC Approved)",
    category: "Regulatory",
    fileFormat: "PDF",
    size: "620 KB",
    lastUpdated: "October 2026",
    description: "Transparent breakdown of monthly tuition fees, annual charges, lab maintenance, and optional bus conveyance."
  },
  {
    id: "doc-03",
    title: "Comprehensive Curriculum & Syllabus Guide (Pre-Primary to 10th)",
    category: "Academic",
    fileFormat: "PDF",
    size: "3.2 MB",
    lastUpdated: "October 2026",
    description: "JKBOSE prescribed syllabus, prescribed textbooks, unit-wise weightage, and internal assessment criteria."
  },
  {
    id: "doc-04",
    title: "School Uniform Code & Dressing Manual (Summer & Winter)",
    category: "Admission",
    fileFormat: "PDF",
    size: "450 KB",
    lastUpdated: "September 2026",
    description: "Illustrated guide specifying colors, crest placement, blazer, necktie, shoes, and sports dress specifications."
  },
  {
    id: "doc-05",
    title: "School Bus Transport Routes & Pickup Point Timings",
    category: "Transport",
    fileFormat: "PDF",
    size: "540 KB",
    lastUpdated: "October 2026",
    description: "Complete bus timetable covering Garoora, Aragam, Nadihal, Ajar, Bandipora Town, and surrounding village stops."
  },
  {
    id: "doc-06",
    title: "Mandatory Public Disclosures (UDISE 01160100803 & Govt Approvals)",
    category: "Regulatory",
    fileFormat: "PDF",
    size: "1.1 MB",
    lastUpdated: "October 2026",
    description: "Statutory documentation including DSEK recognition letter, building safety certificate, and fire safety norms."
  }
];

export const JOBS_DATA: JobOpening[] = [
  {
    id: "job-01",
    title: "Trained Graduate Teacher (TGT) - Science (Physics / Chemistry)",
    department: "Secondary Wing (Classes 8th to 10th)",
    qualification: "B.Sc / M.Sc in Physics or Chemistry with B.Ed",
    experience: "Minimum 2 years teaching experience in recognized English medium school",
    type: "Full-Time Permanent",
    deadline: "November 15, 2026",
    responsibilities: [
      "Teach secondary level Physics/Chemistry in accordance with JKBOSE guidelines",
      "Conduct regular laboratory sessions and supervise student science practicals",
      "Prepare remedial support for board-bound Class 10th students"
    ]
  },
  {
    id: "job-02",
    title: "TGT - English & Communicative Skills",
    department: "Middle & Secondary Wing",
    qualification: "B.A / M.A in English Literature with B.Ed",
    experience: "1-3 years relevant teaching experience",
    type: "Full-Time",
    deadline: "November 15, 2026",
    responsibilities: [
      "Focus on phonetic pronunciation, creative writing, and grammar fundamentals",
      "Organize inter-house debates, speech competitions, and elocution contests"
    ]
  },
  {
    id: "job-03",
    title: "Computer Teacher & ICT Instructor",
    department: "ICT Wing",
    qualification: "BCA / B.Sc IT / MCA or equivalent",
    experience: "1+ year with hands-on lab maintenance and teaching skills",
    type: "Full-Time",
    deadline: "November 20, 2026",
    responsibilities: [
      "Deliver computer science curriculum (Basic programming, MS Office, Internet safety)",
      "Maintain computer lab hardware, network infrastructure, and multimedia systems"
    ]
  },
  {
    id: "job-04",
    title: "Mother Teacher / Kindergarten Facilitator",
    department: "Pre-Primary Wing (Nursery & KG)",
    qualification: "Graduate with NTT / Early Childhood Care & Education (ECCE)",
    experience: "Freshers with pleasant communication & patience or experienced teachers",
    type: "Full-Time",
    deadline: "November 20, 2026",
    responsibilities: [
      "Design fun, play-way foundational activities for early literacy and numeracy",
      "Foster social, emotional, and motor skill growth in young learners"
    ]
  }
];

export const TRANSPORT_ROUTES = [
  { route: "Self Transport / Walker (Local Garoora)", fee: 0 },
  { route: "Garoora Internal / Village Link Roads", fee: 650 },
  { route: "Aragam & Chittibandi Belt", fee: 950 },
  { route: "Nadihal & Papchan Zone", fee: 1100 },
  { route: "Bandipora Town & Plan / Nowpora", fee: 1250 },
  { route: "Ajar, Nusoo & Dachigam Route", fee: 1350 },
  { route: "Aloosa & Outer Bandipora Link", fee: 1500 }
];

export const CLASS_TIERS = [
  {
    name: "Pre-Primary (Nursery, LKG, UKG)",
    tuitionFee: 1100,
    annualFee: 2400,
    labExamFee: 600,
    description: "Activity-based, stress-free foundational learning focusing on language immersion and motor skills."
  },
  {
    name: "Primary Wing (Classes 1st to 5th)",
    tuitionFee: 1350,
    annualFee: 2800,
    labExamFee: 800,
    description: "Foundational mathematics, English grammar, Environmental Science, Urdu, and ICT fundamentals."
  },
  {
    name: "Middle Wing (Classes 6th to 8th)",
    tuitionFee: 1650,
    annualFee: 3200,
    labExamFee: 1100,
    description: "Integrated general science labs, social sciences, computer coding, and moral education."
  },
  {
    name: "Secondary Wing (Classes 9th & 10th - JKBOSE)",
    tuitionFee: 1950,
    annualFee: 3600,
    labExamFee: 1400,
    description: "Rigorous academic coaching for Board Examinations, specialized physics, chemistry, biology labs."
  }
];
