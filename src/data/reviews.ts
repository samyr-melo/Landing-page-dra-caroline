export interface GoogleReview {
  id: string;
  authorName: string;
  authorRole: string; // Ex: 'Avaliação via Google Maps' ou 'Mãe de paciente'
  rating: number; // 5
  date: string;
  comment: string;
}

export const clinicReviews: GoogleReview[] = [
  {
    id: '1',
    authorName: 'Paciente / Família Verificada',
    authorRole: 'Atendimento Odontológico Humanizado',
    rating: 5,
    date: 'Recente',
    comment:
      'Excelente profissional! Conduziu o atendimento com muita delicadeza, paciência e empatia. O consultório é super acolhedor e a experiência foi sem traumas para o meu filho.',
  },
  {
    id: '2',
    authorName: 'Família de Paciente Neurodivergente',
    authorRole: 'Sedação Consciente & Acolhimento TEA',
    rating: 5,
    date: 'Recente',
    comment:
      'A Dra. Caroline é referência no acolhimento de crianças com necessidades especiais em Manaus. A sedação consciente deu total segurança e permitiu realizar os procedimentos com muita tranquilidade.',
  },
  {
    id: '3',
    authorName: 'Mãe de Paciente Pediátrico',
    authorRole: 'Consulta de Adaptação Lúdica',
    rating: 5,
    date: 'Recente',
    comment:
      'Dra. Caroline tem um dom raro para lidar com o medo infantil. Explica cada passo, conquista a confiança da criança e deixa os pais extremamente seguros.',
  },
];