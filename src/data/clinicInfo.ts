import { ClinicContactInfo, ServiceItem } from '@/types';

export const clinicData: ClinicContactInfo = {
  name: 'Dra. Caroline Pamela',
  cro: 'CRO/AM 8928',
  phone: '(92) 9XXXX-XXXX',
  whatsappNumber: '5592982375384',
  address: 'Manaus - AM',
  city: 'Manaus',
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