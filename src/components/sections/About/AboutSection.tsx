import { Award, GraduationCap, HeartHandshake, Stethoscope } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Especialista Dedicada',
      desc: 'Formação em XXXXXXX e atendimento infantil preventivo.',
    },
    {
      icon: Stethoscope,
      title: 'Sedação Consciente',
      desc: 'Capacitada em técnicas seguras para consultas tranquilas e sem medo.',
    },
    {
      icon: HeartHandshake,
      title: 'TEA e Necessidades Especiais',
      desc: 'Acolhimento com previsibilidade sensorial para pacientes neurodivergentes.',
    },
    {
      icon: Award,
      title: 'Registro e Compromisso',
      desc: `Inscrita no Conselho Regional de Odontologia sob o número ${clinicData.cro}.`,
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-purple-50/40 border-y border-purple-100/60 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Foto à esquerda: entra da esquerda */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-3xl bg-pink-100/70 border border-pink-200 flex items-center justify-center p-8 text-center shadow-xs">
              <span className="text-sm font-medium text-slate-500">
                [Espaço para fotografia profissional da Dra. Caroline no consultório]
              </span>
            </div>
          </ScrollReveal>

          {/* Textos à direita: entram da direita */}
          <ScrollReveal direction="right" delay={150} className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold tracking-wider uppercase text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full">
              Sobre a Profissional
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Cuidado humanizado que acolhe toda a família
            </h2>
            <p className="text-base text-slate-600 leading-relaxed text-justify">
              A missão da Dra. Caroline Pamela é proporcionar um ambiente acolhedor em seu consultório, auxiliando os pacientes a superarem possíveis traumas por meio de um atendimento diferenciado, leve e humanizado. Especialista em Odontologia para Pacientes com Necessidades Especiais (OPNE), seu trabalho é guiado por sensibilidade, respeito e constante adaptação às necessidades de cada pessoa, sempre promovendo segurança, confiança e bem-estar.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="rounded-2xl bg-white p-4 border border-purple-100/70 shadow-xs">
                    <div className="rounded-xl bg-pink-50 p-2 w-fit text-pink-600 mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}