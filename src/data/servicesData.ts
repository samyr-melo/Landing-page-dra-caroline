export interface SpecialtyService {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageSrc: string;
  fullDetails: string;
}

export const clinicSpecialties: SpecialtyService[] = [
  {
    id: 'sedacao',
    title: 'Sedação Consciente',
    badge: 'Destaque',
    description:
      'Procedimento seguro para crianças com fobia, medo extremo ou que necessitam de intervenções longas sem traumas.',
    imageSrc: '/assets/images/sedacao/Bianca.jpg', // Substitua pela foto com a máscara
    fullDetails:
      'A sedação consciente com óxido nitroso relaxa o paciente, mantendo todos os reflexos vitais ativos e permitindo um tratamento totalmente indolor e tranquilo.',
  },
  {
    id: 'tea-pcd',
    title: 'Acolhimento TEA & PCD',
    badge: 'Especializada',
    description:
      'Atendimento humanizado com adaptação sensorial e respeito ao ritmo de crianças e pacientes neurodivergentes.',
    imageSrc: '/assets/images/acolhimento/IMG-20251020-WA0148.jpg', // Substitua pela foto com a máscara
    fullDetails:
      'Abordagem personalizada sem contenção forçada, ambiente preparado com iluminação suave, dessensibilização lúdica e acolhimento contínuo da família.',
  },
//   {
//     id: 'odontopediatria',
//     title: 'Odontopediatria Integrativa',
//     badge: 'Preventivo',
//     description:
//       'Cuidado completo desde o nascimento e primeira dentição, com foco em prevenção e condicionamento lúdico.',
//     imageSrc: '/assets/images/Foto%2023-01-2026,%2015%2031%2048.png',
//     fullDetails:
//       'Acompanhamento do crescimento facial, profilaxia, aplicação de flúor e educação com foco na criação de hábitos saudáveis e sorrisos sem medo.',
//   },
  {
    id: 'cirurgia-reabilitacao',
    title: 'Reabilitação & Cirurgia',
    badge: 'Procedimentos',
    description:
      'Restaurações estéticas, frenectomia lingual em bebês e tratamentos cirúrgicos com recuperação suave.',
    imageSrc: '/assets/images/cirurgias/IMG-20251106-WA0050.jpg',
    fullDetails:
      'Técnicas minimamente invasivas de frenectomia para facilitar a amamentação e restaurações infantis rápidas que preservam a anatomia dental.',
  },
];