import type { Metadata } from 'next';
import './globals.css';
import { clinicData } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: `${clinicData.name} | Cirurgiã Dentista e Sedação Consciente em Manaus`,
  description:
    'Atendimento odontológico humanizado para crianças, bebés e pacientes com necessidades especiais (TEA e PCD) em Manaus. Sedação consciente com conforto e segurança.',
  keywords: [
    'cirurgiã dentista em Manaus',
    'sedação consciente infantil Manaus',
    'dentista autismo Manaus',
    'dentista TEA Manaus',
    'odontologia PCD',
    'Dra Caroline Pamela',
  ],
  openGraph: {
    title: `${clinicData.name} | Cirurgiã Dentista em Manaus`,
    description: 'Transformando medo em sorrisos com segurança, acolhimento e sedação consciente.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}