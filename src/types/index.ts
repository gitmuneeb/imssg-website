export type TabType = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'admissions' 
  | 'notices' 
  | 'results' 
  | 'facilities' 
  | 'gallery' 
  | 'calculator' 
  | 'downloads' 
  | 'careers' 
  | 'contact';

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Examinations' | 'Circulars' | 'Events' | 'Holiday';
  isNew?: boolean;
  isUrgent?: boolean;
  content: string;
  attachmentName?: string;
  fileSize?: string;
}

export interface StudentResult {
  rollNo: string;
  name: string;
  parentage: string;
  session: string;
  class: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  status: 'Qualified with Distinction' | 'Qualified' | 'Passed';
  subjects: {
    subject: string;
    maxMarks: number;
    obtainedMarks: number;
    grade: string;
  }[];
  rank?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Sports' | 'Cultural' | 'Events';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: 'Academic' | 'Admission' | 'Regulatory' | 'Transport';
  fileFormat: string;
  size: string;
  lastUpdated: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  qualification: string;
  experience: string;
  type: string;
  deadline: string;
  responsibilities: string[];
}
