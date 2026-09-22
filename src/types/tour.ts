export type TourCategory = 'spiritual' | 'eco' | 'holiday';

export interface ItineraryDay {
  day: number;
  date?: string;
  title: string;
  description: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  meals?: string;
  hotel?: string;
  transport?: string;
  sightseeing?: string[];
  notes?: string[];
}

export interface Tour {
  id: string;
  slug: string;
  titleEn: string;
  titleMr: string;
  descriptionEn?: string;
  descriptionMr?: string;
  category: TourCategory;
  price: number;
  currency: 'INR';
  duration: string; // e.g. "5D / 4N"
  startDate?: string;
  endDate?: string;
  departureDates: string; // e.g. "Nov 2026 Departures"
  features: string[]; // e.g. ["2x2 AC Bus", "Satvik Food"]
  inclusions?: string[];
  exclusions?: string[];
  highlights?: string[];
  itinerary?: ItineraryDay[];
  images: string[];
  featured: boolean;
  status: 'draft' | 'published';
}

