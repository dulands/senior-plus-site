export type ContactKey = 'annie' | 'fabiano';

export interface Contact {
  key: ContactKey;
  name: string;
  label: string;
  phoneDisplay: string;
  phoneInternational: string;
  whatsappNumber: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  shortDescription: string;
  icon: IconName;
  featuredOnHome: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface Testimonial {
  name: string;
  neighborhood: string;
  quote: string;
  rating: 5;
}

export type IconName =
  | 'arrow-right'
  | 'award'
  | 'badge-check'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'heart'
  | 'home-heart'
  | 'instagram'
  | 'map-pin'
  | 'menu'
  | 'moon'
  | 'phone'
  | 'shield-check'
  | 'sparkles'
  | 'star'
  | 'stethoscope'
  | 'sun'
  | 'user-check'
  | 'users'
  | 'x';
