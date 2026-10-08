export interface ServiceItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'General' | 'Restorative' | 'Cosmetic' | 'Preventive';
  shortDesc: string;
  overview: string;
  commonReasons: string[];
  clinicalNote: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  feedbackTheme: string;
  comment: string;
  source: 'Google Review';
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Dental Care' | 'Treatment' | 'Interior';
  description: string;
  badge: string;
}

export interface DoctorPlaceholder {
  id: string;
  role: string;
  department: string;
  placeholderName: string;
  placeholderQualifications: string;
  placeholderSpecialization: string;
  placeholderExperience: string;
  bioNote: string;
}

export interface AppointmentFormState {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  additionalNotes: string;
}
