export interface FaqQuestion {
  id: string;
  category: 'sedacao' | 'tea' | 'primeira-vez' | 'geral';
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: 'todos', label: 'Todas as Dúvidas' },
  { id: 'sedacao', label: 'Sedação Consciente' },
  { id: 'tea', label: 'TEA e PCD' },
  { id: 'primeira-vez', label: 'Primeira Consulta' },
];

export const faqList: FaqQuestion[] = [
  {
    id: '1',
    category: 'sedacao',
    question: 'A sedação consciente faz a criança dormir profundamente?',
    answer: 'Não. Na sedação consciente (por óxido nitroso ou medicação leve), a criança permanece acordada, tranquila e apta a responder a comandos simples da dentista, eliminando apenas o medo, a ansiedade e a dor.',
  },
  {
    id: '2',
    category: 'sedacao',
    question: 'Quais os cuidados necessários antes da sedação?',
    answer: 'É realizada uma triagem completa de saúde prévia e orientado um período de jejum leve conforme a idade da criança. Durante todo o procedimento, os sinais vitais e a oxigenação são monitorizados continuamente.',
  },
  {
    id: '3',
    category: 'tea',
    question: 'Como funciona a preparação para crianças no espectro autista (TEA)?',
    answer: 'Trabalhamos com previsibilidade comportamental, comunicação visual adaptada e estímulos sensoriais controlados (luz dimerizada e redução de ruídos), respeitando sempre o tempo e as particularidades de cada paciente.',
  },
  {
    id: '4',
    category: 'primeira-vez',
    question: 'A partir de que idade o bebé deve ir ao dentista pela primeira vez?',
    answer: 'O momento ideal é com o nascimento dos primeiros dentinhos (geralmente por volta dos 6 meses). A consulta preventiva evita cáries precoces da infância e instrui os pais sobre a higienização correta.',
  },
  {
    id: '5',
    category: 'geral',
    question: 'O consultório aceita convénios ou emite nota para reembolso?',
    answer: 'Os atendimentos são particulares para garantir consultas sem pressa e altamente individualizadas. Disponibilizamos recibo e relatório detalhado para que a família possa pedir reembolso integral ou parcial junto à sua operadora de saúde.',
  },
];