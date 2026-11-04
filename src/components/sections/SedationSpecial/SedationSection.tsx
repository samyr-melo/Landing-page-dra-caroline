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
            <span className="text-xs font-bold tracking-wider uppercase text-pink-600 bg-pink-100 px-4.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
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
                href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent('Olá! Dra. Caroline! Gostaria de tirar dúvidas sobre a sedação consciente para o meu filho.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 transition-colors"
              >
                Falar com a Especialista sobre Sedação
              </a>
            </div>
          </ScrollReveal>

          {/* Card à direita */}
          <ScrollReveal direction="right" delay={150}>
            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xs flex items-center justify-center text-purple-600 mb-4">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Indicações Principais</h3>
              <p className="text-xs text-slate-600 mt-2 max-w-sm leading-relaxed text-justify">
                Indicada para crianças com fobia de dentista, reflexo de vômito acentuado, pacientes não colaborativos ou com espectro autista e síndromes que necessitam de acolhimento sensorial.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}