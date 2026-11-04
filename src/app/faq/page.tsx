import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { WhatsAppFloat } from '@/components/layout/FloatingButtons/WhatsAppFloat';
import { FaqSection } from '@/components/sections/Faq/FaqSection';
import { clinicData } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: `Perguntas Frequentes | ${clinicData.name}`,
  description:
    'Respostas sobre sedação consciente, TEA e PCD e primeira consulta em Manaus.',
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
