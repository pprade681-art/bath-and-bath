export type OfferingCategory = 'all' | 'services' | 'products' | 'guidance';

export interface Offering {
  id: string;
  title: string;
  category: 'services' | 'products' | 'guidance';
  categoryLabel: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  idealFor: string;
  placeholderNote: string;
  formatOrDuration: string;
}

export interface WhyChoosePoint {
  id: string;
  number: string;
  title: string;
  description: string;
  benefit: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorRole: string;
  locationArea: string;
  babyAgeStage: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'safety' | 'services' | 'booking' | 'location';
}

export interface InquiryFormData {
  parentName: string;
  phone: string;
  email: string;
  babyAge: string;
  serviceInterest: string;
  preferredDate: string;
  preferredTimeSlot: string;
  areaInBengaluru: string;
  notes: string;
}
