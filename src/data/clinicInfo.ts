import { ClinicContactInfo, ServiceItem } from '@/types';

export const clinicData: ClinicContactInfo = {
  name: 'Dra. Caroline Pamela',
  cro: 'CRO/AM 8928',
  focus: 'Atendimento Humanizado, Bebês, Crianças com TEA e PCD',
  city: 'Manaus',
  state: 'AM',
  address: 'Rua Rio Purús, 460 - Flores',
  fullLocation: 'Rua Rio Purús, 460 - Flores, Manaus - AM, 69053-050',
  phoneDisplay: '(92) 98141-0707',
  whatsappNumber: '5592981410707',
  // Cole aqui o link de compartilhar ou avaliar que copiou do Google Maps:
  googleMapsReviewUrl: 'https://maps.app.goo.gl/1W9LRVovR2wupqoN6',
  instagramHandle: 'dracarolinepamela',
};

export const initialServices: ServiceItem[] = [
  {
    id: 'sedacao-consciente',
    title: 'Sedação Consciente',
    shortDescription: 'Procedimento seguro e tranquilo para controle de ansiedade e conforto completo da criança durante o atendimento.',
    iconName: 'Smile',
    badge: 'Destaque',
  },
  {
    id: 'tea-pcd',
    title: 'Odontologia TEA e PCD',
    shortDescription: 'Abordagem humanizada, com previsibilidade sensorial e acolhimento individualizado para pacientes neurodivergentes.',
    iconName: 'HeartHandshake',
    badge: 'Especialidade',
  },
  {
    id: 'prevencao-infantil',
    title: 'Odontopediatria Preventiva',
    shortDescription: 'Acompanhamento do desenvolvimento dos primeiros dentes, higiene lúdica e prevenção de cáries.',
    iconName: 'Sparkles',
  },
];