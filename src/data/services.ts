export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  badge?: string;
  fullDescription: string;
  highlights: string[];
}

export const servicesList: ServiceDetail[] = [
  {
    id: 'sedacao-consciente',
    title: 'Sedação Consciente',
    badge: 'Destaque',
    shortDescription: 'Procedimento seguro para crianças com fobia, medo extremo ou que necessitam de intervenções longas sem traumas.',
    fullDescription: 'A sedação consciente com óxido nitroso ou medicamentosa permite que a criança permaneça relaxada e responsiva durante todo o tratamento, eliminando a sensação de dor e reduzindo drasticamente o stress e a ansiedade.',
    highlights: [
      'Monitorização contínua de sinais vitais',
      'Recuperação rápida após a consulta',
      'Ideal para procedimentos complexos ou pacientes com fobia'
    ]
  },
  {
    id: 'tea-pcd',
    title: 'Atendimento TEA e PCD',
    badge: 'Acolhimento',
    shortDescription: 'Consultas adaptadas para o ritmo e perfil sensorial de pacientes com deficiência ou no espectro autista.',
    fullDescription: 'Abordagem estruturada com previsibilidade comportamental, comunicação visual adaptada e ambientação com estímulos sensoriais controlados (luzes suaves, som acolhedor), respeitando os limites da criança.',
    highlights: [
      'Dessensibilização gradual dos estímulos do consultório',
      'Atendimento lúdico com apoio de materiais visuais',
      'Envolvimento e orientação detalhada aos pais/cuidadores'
    ]
  },
  {
    id: 'primeira-infancia',
    title: 'Odontologia para Bebés',
    shortDescription: 'Avaliação precoce dos primeiros dentinhos, sucção, higienização e prevenção de lesões cariosas precoces.',
    fullDescription: 'Acompanhamento preventivo desde os primeiros meses de vida, orientando as famílias quanto ao nascimento dos dentes decíduos, hábitos de sucção (chupetas, mamadeiras) e alimentação protetora.',
    highlights: [
      'Avaliação das estruturas orais e mucosa do bebé',
      'Instruções práticas de higienização bucal infantil',
      'Prevenção de cáries da primeira infância'
    ]
  },
  {
    id: 'oclusao-ortopedia',
    title: 'Prevenção de Oclusão e Respiração',
    shortDescription: 'Identificação precoce de mordidas cruzadas, hábitos parafuncionais e problemas de respiração bucal.',
    fullDescription: 'Diagnóstico precoce de alterações ósseas e musculares na face infantil, corrigindo mordidas abertas e orientando sobre as vias respiratórias para promover um crescimento equilibrado.',
    highlights: [
      'Prevenção de tratamentos ortodônticos invasivos no futuro',
      'Estudo do posicionamento da língua e deglutição',
      'Acompanhamento do desenvolvimento dos maxilares'
    ]
  }
];