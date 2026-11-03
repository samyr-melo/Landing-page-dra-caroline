'use client';

import { clinicReels } from '@/data/mediaGallery';
import { CleanVideoCard } from '@/components/ui/CleanVideoCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface InstagramPostItem {
  id: string;
  url: string;
  title: string;
  category: string;
}


// Substitua pelas URLs completas dos Reels e Posts da Dra. Caroline
const instagramPosts: InstagramPostItem[] = [
  {
    id: '1',
    // Cole aqui o link do Reel da Dra. Caroline:
    url: 'https://www.instagram.com/reel/De634glh4tT/',
    title: 'Transformando medo em sorrisos: como funciona o atendimento lúdico',
    category: 'Sedação Consciente',
  },
  {
    id: '2',
    // Cole aqui o link do Reel da Dra. Caroline:
    url: 'https://www.instagram.com/reel/DerUQTmhNMn/',
    title: 'Transformando medo em sorrisos: como funciona o atendimento lúdico',
    category: 'Sedação Consciente',
  },
  {
    id: '3',
    url: 'https://www.instagram.com/reel/De634glh4tT/', // Substitua pelos outros posts
    title: 'Acolhimento para crianças no espectro autista (TEA)',
    category: 'TEA / PCD',
  },
  {
    id: '4',
    url: 'https://www.instagram.com/reel/De634glh4tT/', // Substitua pelos outros posts
    title: 'Primeiros dentinhos e consulta preventiva',
    category: 'Odontopediatria',
  },
];

export function MediaSection() {
  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-pink-600 bg-pink-100 px-3.5 py-1.5 rounded-full">
            Vídeos & Bastidores
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-3">
            O dia a dia do nosso consultório
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Conheça na prática como acolhemos com leveza, sem traumas e com recursos adaptados para cada criança.
          </p>
        </ScrollReveal>

        {/* Grade de Vídeos Clean */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {clinicReels.map((reel, index) => (
            <ScrollReveal
              key={reel.id}
              direction="up"
              delay={index * 120}
              className="w-full flex justify-center"
            >
              <CleanVideoCard video={reel} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}