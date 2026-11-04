import Image from 'next/image';
import { clinicData } from '@/data/clinicInfo';
import { Heart, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      {/* Estampa de fundo cobrindo toda a seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.20]"
        style={{
          backgroundImage:
            'url("/assets/images/Foto%2023-01-2026,%2015%2031%2048%20(3)%20(1).png")',
        }}
      />

      {/* Degradê sutil de contraste */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60"
      />

      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Lado Esquerdo: Conteúdo (ocupa 100% no mobile e 5 colunas a partir do breakpoint lg) */}
          <ScrollReveal direction="left" className="space-y-6 text-left w-full lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3.5 py-1.5 text-xs font-semibold text-pink-700">
              <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500" />
              <span>Odontologia Humanizada em Manaus</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] xl:text-[3.2rem] leading-[1.15]">
              Transformando medo em sorrisos com segurança e acolhimento.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg text-justify">
              Atendimento odontológico acolhedor para crianças, bebês e pacientes neurodivergentes (TEA e PCD) com técnicas avançadas e sedação consciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-pink-600 transition-all active:scale-95"
              >
                Agendar Avaliação
              </a>
              <a
                href="#servicos"
                className="inline-flex justify-center items-center rounded-xl border border-pink-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-pink-50/60 transition-all active:scale-95"
              >
                Conhecer os Procedimentos
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-pink-500" />
                <span>Protocolos Seguros</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-purple-500" />
                <span>Ambiente Sensorial Adaptado</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Lado Direito: Oculto no mobile/tablet (hidden) e visível apenas em telas grandes (lg:flex) */}
          <ScrollReveal
            direction="right"
            delay={150}
            className="hidden lg:flex items-center justify-end lg:col-span-7"
          >
            <div className="relative aspect-square w-full max-w-[560px] xl:max-w-[640px] 2xl:max-w-[700px] flex items-center justify-center">
              <Image
                src="/assets/images/Foto%2023-01-2026,%2015%2031%2048.png"
                alt="Dra. Caroline Pamela - Odontologia Especial"
                width={720}
                height={720}
                priority
                className="w-full h-auto object-contain drop-shadow-sm select-none"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}