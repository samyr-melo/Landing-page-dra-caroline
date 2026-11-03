import { clinicData } from '@/data/clinicInfo';
import { Heart, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/70 via-purple-50/30 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto à esquerda: desliza da esquerda para a direita */}
          <ScrollReveal direction="left" className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-700">
              <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
              <span>Odontologia Humanizada em Manaus</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
              Transformando medo em sorrisos com segurança e acolhimento.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Atendimento odontológico acolhedor para crianças, bebês e pacientes neurodivergentes (TEA e PCD) com técnicas avançadas e sedação consciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-pink-600 transition-all"
              >
                Agendar Avaliação
              </a>
              <a
                href="#servicos"
                className="inline-flex justify-center items-center rounded-xl border border-pink-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-pink-50/60 transition-all"
              >
                Conhecer os Procedimentos
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-medium text-slate-600">
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

          {/* Imagem à direita: desliza da direita para a esquerda */}
          <ScrollReveal direction="right" delay={150}>
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl bg-pink-50/80 border border-pink-100 flex items-center justify-center p-8 shadow-inner">
              <p className="text-sm text-center text-slate-500 font-medium">
                [Foto da Dra. Caroline e espaço lúdico da clínica]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}