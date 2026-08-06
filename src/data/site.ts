import type {
  Benefit,
  Contact,
  NavigationItem,
  Service,
  Testimonial,
} from '../types/site';

export const brand = {
  name: 'Sênior Plus',
  compactName: 'Sênior+',
  slogan: 'Cuidados com amor',
  headline: 'Saúde de quem você mais ama em boas mãos',
  footerSlogan: 'Saúde de quem você mais ama em boas mãos',
  location: 'São Paulo - SP',
  serviceArea: 'São Paulo, capital',
  availability:
    'Atendimento 24 horas por dia, 7 dias por semana, incluindo feriados.',
  instagramHandle: '@seniorplus.sp',
  instagramUrl: 'https://www.instagram.com/seniorplus.sp/',
  siteUrl: '',
} as const;

export const contacts = {
  annie: {
    key: 'annie',
    name: 'Annie Uno',
    label: 'Annie Uno',
    phoneDisplay: '(11) 98899-0401',
    phoneInternational: '+5511988990401',
    whatsappNumber: '5511988990401',
  },
  fabiano: {
    key: 'fabiano',
    name: 'Fabiano',
    label: 'Sênior Plus',
    phoneDisplay: '(11) 96285-0737',
    phoneInternational: '+5511962850737',
    whatsappNumber: '5511962850737',
  },
} as const satisfies Record<string, Contact>;

export const navigation: NavigationItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre/' },
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Nossa Equipe', href: '/equipe/' },
  { label: 'Avaliações', href: '/avaliacoes/' },
  { label: 'Contato', href: '/contato/' },
  { label: 'Carreiras', href: '/carreiras/' },
];

export const whatsappMessages = {
  general:
    'Olá! Gostaria de saber mais sobre os serviços da Sênior Plus em São Paulo.',
  evaluation:
    'Olá, Annie! Gostaria de solicitar uma avaliação e entender qual cuidado é mais adequado para minha família.',
  services:
    'Olá! Tenho interesse nos serviços da Sênior Plus e gostaria de receber mais informações.',
  annie:
    'Olá, Annie! Conheci a Sênior Plus pelo site e gostaria de conversar sobre atendimento.',
  fabiano:
    'Olá, Fabiano! Conheci a Sênior Plus pelo site e gostaria de mais informações.',
} as const;

export const founder = {
  name: 'Annie Uno',
  roleLabel: 'Fundadora',
  homeTitle: 'Annie Uno: Experiência e Amor no Cuidado',
  homeDescription:
    'Com 15 anos de experiência em enfermagem, 6 anos como enfermeira, com pós-graduação em Gerontologia e Terapias Integrativas, e MBA em Gestão Hospitalar, Annie lidera a Sênior Plus com dedicação e expertise.',
  credentials: [
    'Pós-graduação em Gerontologia',
    'MBA em Gestão Hospitalar',
    'Terapias Integrativas',
    '15 anos de experiência',
  ],
  supervisionText:
    'Toda nossa equipe trabalha sob a supervisão direta de Annie Uno, enfermeira com 15 anos de experiência, com pós-graduação em Gerontologia e Terapias Integrativas, além de MBA em Gestão Hospitalar. Esta coordenação garante que todos os cuidadores sigam os mais altos padrões de qualidade e humanização no atendimento aos nossos clientes em São Paulo - SP.',
} as const;

export const services: Service[] = [
  {
    title: 'Consultoria Especializada',
    shortDescription: 'Com enfermeira gerontóloga experiente',
    icon: 'stethoscope',
    featuredOnHome: true,
  },
  {
    title: 'Acompanhamento Integral',
    shortDescription: 'Hospitalar, domiciliar ou casas de repouso',
    icon: 'home-heart',
    featuredOnHome: true,
  },
  {
    title: 'Procedimentos de Enfermagem',
    shortDescription: 'Profissionais qualificados',
    icon: 'heart',
    featuredOnHome: true,
  },
  {
    title: 'Suporte em Eventos e Viagens',
    shortDescription:
      'Acompanhamento para que a pessoa cuidada participe de momentos especiais.',
    icon: 'calendar',
    featuredOnHome: false,
  },
  {
    title: 'Planos Flexíveis',
    shortDescription: 'Mensais, semanais ou temporários',
    icon: 'sparkles',
    featuredOnHome: true,
  },
  {
    title: 'Horários Adaptáveis',
    shortDescription:
      'Atendimento planejado de acordo com a rotina e a necessidade da família.',
    icon: 'clock',
    featuredOnHome: false,
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Cuidado Humanizado',
    description: 'Atendimento com amor e respeito',
    icon: 'heart',
  },
  {
    title: 'Profissionais Qualificados',
    description: 'Equipe treinada e certificada',
    icon: 'users',
  },
  {
    title: 'Disponível 24/7',
    description: 'Suporte quando você precisar',
    icon: 'clock',
  },
  {
    title: 'Apoio à Família',
    description: 'Reduzindo desgaste e preocupação',
    icon: 'users',
  },
  {
    title: 'Prevenção de Acidentes',
    description: 'Ambiente seguro e cuidado',
    icon: 'shield-check',
  },
  {
    title: 'Qualidade de Vida',
    description: 'Bem-estar e independência',
    icon: 'sparkles',
  },
];

export const metrics = [
  { value: '150+', label: 'Famílias Atendidas' },
  { value: '98%', label: 'Satisfação' },
  { value: '5.0', label: 'Avaliação Média' },
] as const;

/** Confirmados; serão usados na página Avaliações em uma etapa posterior. */
export const testimonials: Testimonial[] = [];

export const homeMetadata = {
  title: 'Sênior Plus | Cuidados com idosos em São Paulo',
  description:
    'Cuidado humanizado para idosos em São Paulo, com supervisão de enfermagem, atendimento 24 horas e planos adaptados à sua família.',
  socialImage: '/images/og-senior-plus.jpg',
} as const;
