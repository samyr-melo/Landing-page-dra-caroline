import Image from 'next/image';
import { ShieldCheck, Heart, Activity } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const procedureImages = [
  {
    src: '/assets/images/sedação/Foto%20-%20Luciley%20.jpg',
    alt: 'Atendimento odontológico infantil com sedação consciente',
  },
  {
    src: '/assets/images/sedação/Sedação%20theo(1).jpg',
    alt: 'Dentista acompanha criança durante atendimento com sedação consciente',
  },
  {
    src: '/assets/images/sedação/Bianca.jpg',
    alt: 'Criança recebendo atendimento odontológico com sedação consciente',
  },
  {
    src: '/assets/images/sedação/E%20heitor%20pediu%20para%20dormir%20durante%20o%20procedimento%20.jpg',
    alt: 'Atendimento odontológico infantil durante procedimento',
  },
  {
    src: '/assets/images/sedação/Foto%20dente%2064%20restaurado.png',
    alt: 'Resultado de tratamento odontológico infantil',
  },
  {
    src: '/assets/images/sedação/IMG-20251027-WA0079.jpg',
    alt: 'Equipe odontológica realizando atendimento infantil',
  },
  {
    src: '/assets/images/sedação/Pac%20Valentina..jpg',
    alt: 'Criança sendo acompanhada durante atendimento odontológico',
  },
  {
    src: '/assets/images/sedação/Sedac%CC%A7a%CC%83o%20para%20canal%20endodo%CC%82ntico.jpg',
    alt: 'Procedimento odontológico acompanhado pela equipe clínica',
  },
];

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

          {/* Galeria contínua para imagens dos procedimentos */}
          <ScrollReveal direction="right" delay={150}>
            <div
              role="region"
              aria-label="Imagens dos procedimentos disponíveis"
              className="@container/procedures mx-auto aspect-[9/16] max-h-[70svh] w-full max-w-[340px] overflow-hidden rounded-3xl border border-pink-100 bg-slate-100"
            >
              <div className="procedure-image-marquee-track flex h-full w-max">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    aria-hidden={group === 1}
                    className="flex h-full shrink-0 items-center gap-4 pr-4"
                  >
                    {procedureImages.map((image) => (
                      <div
                        key={`${group}-${image.src}`}
                        className="relative h-full w-[100cqw] shrink-0 overflow-hidden"
                      >
                        <Image
                          src={image.src}
                          alt={group === 0 ? image.alt : ''}
                          fill
                          sizes="(max-width: 1023px) min(100vw, 70svh), min(50vw, 70svh)"
                          className="object-contain"
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