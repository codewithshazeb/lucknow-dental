export type GlassCategory = 
  | 'Basic & Architectural'
  | 'Safety & Security'
  | 'Decorative & Textured'
  | 'Acoustic & Energy-Efficient'
  | 'Mirrors & Coloured';

export interface GlassProduct {
  id: string;
  name: string;
  category: GlassCategory;
  shortDesc: string;
  detailedDesc: string;
  commonApplications: string[];
  keyBenefits: string[];
  safetyGrade?: string;
  typicalThicknessRange: string;
  imageUrl: string;
  isConfirmed: boolean;
}

export interface GlassService {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  typicalApplications: string[];
  technicalConsiderations: string;
  imageUrl: string;
  isConfirmed: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'Residential Interiors'
    | 'Commercial Spaces'
    | 'Glass Doors'
    | 'Office Partitions'
    | 'Mirrors and Decorative Glass'
    | 'Windows and Facades';
  description: string;
  suitableGlass: string;
  imageUrl: string;
  note: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Products' | 'Installation' | 'Quotations' | 'Maintenance';
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  whatsAppNumber: string;
  email: string;
  address: string;
  landmark: string;
  operatingHours: string;
  serviceAreas: string[];
  defaultWhatsAppMessage: string;
  // State tracking for owner confirmation
  ownerConfirmedFields: {
    phone: boolean;
    whatsApp: boolean;
    email: boolean;
    address: boolean;
    operatingHours: boolean;
  };
}

export interface QuotationDraft {
  serviceOrProduct: string;
  projectType: 'Residential' | 'Commercial' | 'Retail / Showroom' | 'Builder / Project';
  dimensionsApprox: string;
  localityLucknow: string;
  scope: 'Supply & Installation' | 'Supply Only' | 'Measurement & Consultation';
  notes: string;
}
