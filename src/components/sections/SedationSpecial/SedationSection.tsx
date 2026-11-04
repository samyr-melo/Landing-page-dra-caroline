import Image from 'next/image';
import { ShieldCheck, Heart, Activity } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function SedationSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Segurança e Consciência',
      desc: 'A criança não dorme profundamente; permanece calma, acordada e apta a responder a estímulos verbais simples.',
    },
    {
      icon: Activity,
      title: 'Monitorização Rigorosa',
      desc: 'Sinais vitais e oxigenação acompanhados continuamente durante todo o procedimento.',
    },
    {
      icon: Heart,
      title: 'Sem Medo e Sem Traumas',
      desc: 'Evita contenção física e constrói uma relação leve e segura com o consultório.',
    },
  ];

  return (
    <section id="sedacao" className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto à esquerda */}
          <ScrollReveal direction="left" className="space-y-6">
            <span className="text-xs font-bold tracking-wider uppercase text-pink-600 bg-pink-100 px-3.5 py-1.5 rounded-full">
              Procedimento Humanizado
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Como funciona a Sedação Consciente na prática?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Muitos pais têm receio ao ouvir falar de sedação. No nosso consultório em Manaus, a técnica é administrada de forma leve e segura, permitindo que a criança relaxe sem perder a consciência.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="rounded-xl bg-pink-100 p-2.5 text-pink-600 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{pt.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre a sedação consciente para o meu filho.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 transition-colors"
              >
                Falar com a Especialista sobre Sedação
              </a>
            </div>
          </ScrollReveal>

          {/* Galeria contínua para imagens dos procedimentos */}
          <ScrollReveal direction="right" delay={150}>
            <div
              role="region"
              aria-label="Imagens dos procedimentos disponíveis"
              className="@container/procedures aspect-square overflow-hidden rounded-3xl border border-pink-100 bg-pink-50/50"
            >
              <div className="procedure-image-marquee-track flex h-full w-max">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    aria-hidden={group === 1}
                    className="flex h-full shrink-0 items-center gap-4 pr-4"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <div
                        key={`${group}-${index}`}
                        className="relative h-full w-[100cqw] shrink-0 overflow-hidden"
                      >
                        <Image
                          src="/assets/images/Foto%2023-01-2026,%2015%2031%2048.jpg"
                          alt={
                            group === 0
                              ? `Imagem ${index + 1} da clínica e dos procedimentos`
                              : ''
                          }
                          fill
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}