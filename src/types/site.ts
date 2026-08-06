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
  subtitle?: string;
  description?: string;
  items?: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface Testimonial {
  name: string;
  relationship: string;
  neighborhood: string;
  quote: string;
  rating: 5;
}

export type IconName =
  | 'arrow-right'
  | 'award'
  | 'badge-check'
  | 'briefcase'
  | 'clipboard-check'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'heart'
  | 'hand-heart'
  | 'handshake'
  | 'home-heart'
  | 'globe'
  | 'instagram'
  | 'mail'
  | 'map-pin'
  | 'message-circle'
  | 'menu'
  | 'moon'
  | 'phone'
  | 'plane'
  | 'quote'
  | 'search'
  | 'send'
  | 'shield-check'
  | 'shield'
  | 'smile'
  | 'sparkles'
  | 'star'
  | 'stethoscope'
  | 'sun'
  | 'target'
  | 'thumbs-up'
  | 'trending-up'
  | 'trophy'
  | 'user-check'
  | 'users'
  | 'lightbulb'
  | 'x';
