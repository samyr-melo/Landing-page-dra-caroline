'use client';

import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';
import { SpecialtyService } from '@/data/servicesData';

interface SpecialtyCardProps {
  service: SpecialtyService;
  onOpenDetails: (service: SpecialtyService) => void;
}

export function SpecialtyCard({ service, onOpenDetails }: SpecialtyCardProps) {
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de agendar uma avaliação para o serviço de ${service.title} com a Dra. Caroline Pamela.`
  )}`;

  return (
    <div className="relative mx-auto flex w-full max-w-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] border-[2px] border-pink-300 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:max-w-[350px]">
        <span className="inline-flex pl-10 items-center gap-1 rounded-full bg-[#f3e8ff] px-2.5 py-1 text-[11px] font-bold text-[#9333ea] shrink-0">
              <Sparkles className="h-3 w-3 fill-[#9333ea]" />
              {service.badge}
            </span>
      {/* Imagem do Procedimento no Topo */}
      <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-slate-100">
        <Image
          src={service.imageSrc}
          alt={service.title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Bloco Branco Sobreposto de Conteúdo */}
      <div className="relative -mt-10 mx-3 rounded-[1.75rem] bg-white p-5 shadow-md flex-1 flex flex-col justify-between">
        <div>
          {/* Cabeçalho do Card */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight line-clamp-2 min-h-[3.5rem]">
            {service.title}
            </h3>
            
          </div>

          {/* Descrição */}
          <p className="mt-3 text-xs leading-relaxed text-slate-600 font-medium line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Rodapé com as Duas Ações */}
      <div className="flex items-center justify-between px-4 py-4 pt-3">
        {/* Link Ver mais detalhes */}
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-600 hover:text-pink-700 transition-colors cursor-pointer"
        >
          <span>Ver mais detalhes</span>
          <ArrowRight className="h-3 w-3 stroke-[2.5]" />
        </button>

        {/* Botão Agendar este serviço */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#fdf2f8] px-3.5 py-1.5 text-[11px] font-bold text-[#db2777] shadow-2xs hover:bg-pink-100/80 transition-colors"
        >
          Agendar este serviço
        </a>
      </div>
    </div>
  );
}