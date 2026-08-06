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
    subtitle: 'com Enfermeira Gerontóloga',
    description:
      'Avaliação completa e planejamento personalizado de cuidados por profissional com pós-graduação em Gerontologia.',
    items: ['Avaliação geriátrica', 'Plano de cuidados', 'Orientação familiar', 'Acompanhamento contínuo'],
  },
  {
    title: 'Acompanhamento Integral',
    shortDescription: 'Hospitalar, domiciliar ou casas de repouso',
    icon: 'home-heart',
    featuredOnHome: true,
    subtitle: 'Hospitalar, Domiciliar ou Casas de Repouso',
    description: 'Cuidado integral no conforto do lar, hospital ou casa de repouso.',
    items: ['Cuidado 24h disponível', 'Assistência personalizada', 'Monitoramento constante', 'Suporte familiar'],
  },
  {
    title: 'Procedimentos de Enfermagem',
    shortDescription: 'Profissionais qualificados',
    icon: 'heart',
    featuredOnHome: true,
    subtitle: 'Profissionais Qualificados',
    description: 'Realizados por enfermeiros e técnicos certificados e experientes.',
    items: ['Administração de medicamentos', 'Curativos especializados', 'Sondagem', 'Coleta de exames'],
  },
  {
    title: 'Suporte em Eventos e Viagens',
    shortDescription:
      'Acompanhamento para que a pessoa cuidada participe de momentos especiais.',
    icon: 'calendar',
    featuredOnHome: false,
    subtitle: 'Conforto em Qualquer Lugar',
    description: 'Acompanhamento profissional garantindo segurança e tranquilidade fora de casa.',
    items: ['Viagens nacionais', 'Eventos familiares', 'Planejamento antecipado', 'Medicação controlada'],
  },
  {
    title: 'Planos Flexíveis',
    shortDescription: 'Mensais, semanais ou temporários',
    icon: 'sparkles',
    featuredOnHome: true,
    subtitle: 'Sob Medida para Você',
    description: 'Mensais, semanais, finais de semana ou temporários conforme sua necessidade.',
    items: ['Contratos flexíveis', 'Sem burocracia', 'Adaptável à rotina', 'Cancelamento facilitado'],
  },
  {
    title: 'Horários Adaptáveis',
    shortDescription:
      'Atendimento planejado de acordo com a rotina e a necessidade da família.',
    icon: 'clock',
    featuredOnHome: false,
    subtitle: '6h, 8h, 12h ou 24h',
    description: 'Escalas de trabalho ajustadas conforme a necessidade de cuidado.',
    items: ['Turnos personalizados', 'Revezamento organizado', 'Cobertura completa', 'Plantões especiais'],
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

export const testimonials: Testimonial[] = [
  {
    name: 'Maria Santos',
    relationship: 'Filha de paciente',
    neighborhood: 'Jardins, São Paulo - SP',
    quote: 'A Sênior Plus mudou nossa vida! A Annie e toda equipe cuidam da minha mãe com tanto carinho e profissionalismo. Fico muito mais tranquila sabendo que ela está em boas mãos. O grupo de WhatsApp facilita muito a comunicação.',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    relationship: 'Filho de paciente',
    neighborhood: 'Moema, São Paulo - SP',
    quote: 'Excelente serviço! Os cuidadores são muito atenciosos e a enfermeira Annie acompanha tudo de perto. Meu pai está muito mais feliz e bem cuidado. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'Ana Paula Lima',
    relationship: 'Neta de paciente',
    neighborhood: 'Vila Mariana, São Paulo - SP',
    quote: 'Profissionais incríveis! A equipe é pontual, carinhosa e muito competente. Minha avó adora a cuidadora e notamos uma melhora significativa na qualidade de vida dela. Gratidão à toda equipe!',
    rating: 5,
  },
  {
    name: 'Roberto Ferreira',
    relationship: 'Marido de paciente',
    neighborhood: 'Pinheiros, São Paulo - SP',
    quote: 'Contratar a Sênior Plus foi a melhor decisão. A comunicação é transparente, os profissionais são bem treinados e o atendimento é humanizado. Minha esposa recebe os melhores cuidados possíveis.',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    relationship: 'Filha de paciente',
    neighborhood: 'Perdizes, São Paulo - SP',
    quote: 'Que alívio encontrar uma empresa tão séria e dedicada! A Annie é extremamente competente e atenciosa. Os cuidadores são selecionados com muito critério. Meu pai está muito bem assistido. Super recomendo!',
    rating: 5,
  },
  {
    name: 'Fernando Alves',
    relationship: 'Filho de paciente',
    neighborhood: 'Itaim Bibi, São Paulo - SP',
    quote: 'Serviço de primeira qualidade! A flexibilidade nos horários e a atenção personalizada fazem toda diferença. A equipe se tornou parte da família. Obrigado Sênior Plus por cuidarem tão bem da minha mãe!',
    rating: 5,
  },
  {
    name: 'Patricia Rodrigues',
    relationship: 'Filha de paciente',
    neighborhood: 'Vila Olímpia, São Paulo - SP',
    quote: 'Profissionais excepcionais! A dedicação e o carinho com que tratam os idosos é admirável. A comunicação pelo WhatsApp nos mantém sempre informados. Sentimos que nosso pai está em uma segunda família.',
    rating: 5,
  },
  {
    name: 'Eduardo Mendes',
    relationship: 'Filho de paciente',
    neighborhood: 'Higienópolis, São Paulo - SP',
    quote: 'Impossível não recomendar! A Sênior Plus superou todas as expectativas. Desde a consultoria inicial até o cuidado diário, tudo é feito com muita competência e humanização. Parabéns à toda equipe!',
    rating: 5,
  },
];

export const pageMetadata = {
  about: {
    title: 'Sobre a Sênior Plus | História, missão e valores',
    description: 'Conheça a história, a missão, os valores e os diferenciais da Sênior Plus no cuidado humanizado a idosos em São Paulo.',
  },
  services: {
    title: 'Serviços de cuidados para idosos | Sênior Plus São Paulo',
    description: 'Conheça os serviços, planos flexíveis e processo de seleção da Sênior Plus para cuidados humanizados em São Paulo.',
  },
  team: {
    title: 'Nossa Equipe | Enfermeiros, técnicos e cuidadores | Sênior Plus',
    description: 'Conheça a equipe multidisciplinar da Sênior Plus e a supervisão de Annie Uno no atendimento a idosos em São Paulo.',
  },
  reviews: {
    title: 'Avaliações e depoimentos | Sênior Plus São Paulo',
    description: 'Leia oito depoimentos reais de famílias atendidas pela Sênior Plus e conheça nossos indicadores confirmados.',
  },
  contact: {
    title: 'Contato | WhatsApp e telefone | Sênior Plus São Paulo',
    description: 'Fale com Annie Uno ou Fabiano sobre cuidados para idosos em São Paulo. Atendimento 24 horas, todos os dias.',
  },
  careers: {
    title: 'Trabalhe Conosco | Sênior Plus São Paulo',
    description: 'Conheça oportunidades para enfermeiros, técnicos de enfermagem e cuidadores de idosos na Sênior Plus.',
  },
} as const;

export const homeMetadata = {
  title: 'Sênior Plus | Cuidados com idosos em São Paulo',
  description:
    'Cuidado humanizado para idosos em São Paulo, com supervisão de enfermagem, atendimento 24 horas e planos adaptados à sua família.',
  socialImage: '/images/og-senior-plus.jpg',
} as const;
