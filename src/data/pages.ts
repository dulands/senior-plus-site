import type { IconName } from '../types/site';

interface CardItem {
  title: string;
  description: string;
  icon: IconName;
}

export const aboutValues: CardItem[] = [
  { title: 'Humanização', description: 'Cuidado centrado na pessoa, com empatia e respeito', icon: 'heart' },
  { title: 'Empatia', description: 'Compreender e compartilhar os sentimentos de cada um', icon: 'smile' },
  { title: 'Respeito à Individualidade', description: 'Cada pessoa é única e merece atenção personalizada', icon: 'users' },
  { title: 'Compromisso', description: 'Dedicação total à qualidade e segurança do cuidado', icon: 'shield' },
  { title: 'Qualidade', description: 'Excelência em todos os serviços prestados', icon: 'trending-up' },
  { title: 'Transparência', description: 'Comunicação clara e honesta com familiares', icon: 'handshake' },
  { title: 'Responsabilidade Social', description: 'Compromisso com o bem-estar da comunidade', icon: 'globe' },
];

export const aboutDifferentials: CardItem[] = [
  { title: 'Processo Seletivo Rigoroso', description: '6 etapas de seleção para garantir os melhores profissionais', icon: 'lightbulb' },
  { title: 'Comunicação Integrada', description: 'Grupos de WhatsApp com família e equipe para transparência total', icon: 'users' },
  { title: 'Especialização em Gerontologia', description: 'Conhecimento profundo sobre o cuidado especializado ao idoso', icon: 'award' },
];

export const selectionSteps = [
  { title: 'Análise de Currículos', description: 'Triagem detalhada de qualificações' },
  { title: 'Entrevistas', description: 'Avaliações realizadas de forma prática e análise comportamental' },
  { title: 'Verificação de Referências', description: 'Contato com empregadores anteriores' },
  { title: 'Avaliação de Competências', description: 'Testes práticos e teóricos' },
  { title: 'Análise de Antecedentes', description: 'Checagem de histórico legal' },
  { title: 'Treinamento Contínuo', description: 'Capacitação regular e atualização' },
] as const;

export const integratedCommunication = [
  'Transparência total no cuidado diário',
  'Troca rápida de informações importantes',
  'Coordenação eficiente entre equipe e família',
  'Atualizações em tempo real sobre o paciente',
  'Suporte imediato quando necessário',
] as const;

export const teamRoles = [
  {
    title: 'Enfermeiros',
    description: 'Profissionais graduados especializados em cuidados médicos complexos',
    image: 'nurses',
    responsibilities: ['Avaliação geriátrica completa', 'Planejamento de cuidados', 'Administração de medicamentos complexos', 'Procedimentos de enfermagem avançados', 'Coordenação da equipe de cuidadores'],
  },
  {
    title: 'Técnicos de Enfermagem',
    description: 'Assistência qualificada em procedimentos médicos do dia a dia',
    image: 'technicians',
    responsibilities: ['Sinais vitais e monitoramento', 'Curativos e trocas de dispositivos', 'Administração de medicamentos', 'Auxílio em procedimentos', 'Registro detalhado de cuidados'],
  },
  {
    title: 'Cuidadores',
    description: 'Profissionais dedicados à assistência no cuidado diário com carinho',
    image: 'caregivers',
    responsibilities: ['Higiene pessoal e conforto', 'Alimentação e hidratação', 'Mobilização e exercícios', 'Companhia e atividades', 'Suporte emocional'],
  },
] as const;

export const teamDifferentials: CardItem[] = [
  { title: 'Disponibilidade 24/7', description: 'Equipe pronta para atender a qualquer hora, todos os dias', icon: 'clock' },
  { title: 'Profissionais Certificados', description: 'Todos com formação reconhecida e experiência comprovada', icon: 'shield' },
  { title: 'Supervisão Contínua', description: 'Coordenação por enfermeira experiente', icon: 'users' },
];

export const supervisionBenefits = [
  'Avaliação contínua da qualidade do cuidado',
  'Treinamentos regulares da equipe',
  'Suporte técnico imediato quando necessário',
  'Comunicação direta com as famílias',
] as const;

export const careersBenefits: CardItem[] = [
  { title: 'Ambiente Acolhedor', description: 'Trabalhe em uma equipe que valoriza o cuidado humanizado', icon: 'heart' },
  { title: 'Crescimento Profissional', description: 'Oportunidades de desenvolvimento e progressão na carreira', icon: 'trophy' },
  { title: 'Treinamento Contínuo', description: 'Capacitação regular com cursos e workshops', icon: 'briefcase' },
  { title: 'Equipe Unida', description: 'Faça parte de um time comprometido e colaborativo', icon: 'users' },
  { title: 'Reconhecimento', description: 'Valorizamos e reconhecemos seu trabalho excepcional', icon: 'award' },
  { title: 'Flexibilidade', description: 'Escalas de trabalho adaptáveis às suas necessidades', icon: 'calendar' },
];

export const careerRoles = [
  { title: 'Enfermeiros', requirements: ['COREN ativo', 'Experiência em gerontologia (diferencial)', 'Capacidade de liderança', 'Excelente comunicação'] },
  { title: 'Técnicos de Enfermagem', requirements: ['COREN ativo', 'Experiência com procedimentos', 'Paciência e empatia', 'Trabalho em equipe'] },
  { title: 'Cuidadores de Idosos', requirements: ['Curso de cuidador (obrigatório)', 'Experiência com idosos', 'Paciência e empatia', 'Disponibilidade de horários'] },
] as const;

export const careerProcess = [
  'Envio do currículo pelo formulário',
  'Análise do perfil profissional',
  'Entrevista',
  'Verificação de referências',
  'Avaliação prática de competências',
  'Análise de antecedentes',
  'Integração e treinamento inicial',
] as const;

export const careersFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdIY4sNIqYNk1vYfYvgUYLPv6Vo3QoYbpCyY4WSuqs2yj_a_w/viewform';
