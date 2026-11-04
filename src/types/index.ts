export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  badge?: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  isShort?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClinicContactInfo {
  name: string;
  cro: string;
  focus: string;
  state: string;
  whatsappNumber: string;
  address: string;
  fullLocation: string;
  phoneDisplay: string;
  city: string;
  instagramHandle: string;
  googleMapsReviewUrl: string;
}