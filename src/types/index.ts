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
  phone: string;
  whatsappNumber: string;
  address: string;
  city: string;
  instagramHandle: string;
}