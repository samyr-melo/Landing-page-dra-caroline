'use client';

import { MessageCircle } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre as consultas com a Dra. Caroline Pamela.'
  );
  const href = `https://wa.me/${clinicData.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white font-medium shadow-xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Agendar Consulta</span>
    </a>
  );
}