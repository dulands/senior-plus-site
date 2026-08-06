export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  author: string;
  audience?: string;
  benefits: string[];
  chapters: string[];
  price: string | null;
  checkoutUrl: string | null;
  socialImage?: string;
  faq?: Array<{ question: string; answer: string }>;
  published: boolean;
  featured: boolean;
}
