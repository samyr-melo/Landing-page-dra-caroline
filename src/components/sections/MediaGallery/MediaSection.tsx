'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramEmbed } from '@/components/ui/InstagramEmbed';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface InstagramPostItem {
  id: string;
  url: string;
  title?: string;
  category: string;
}

const instagramPosts: InstagramPostItem[] = [
  {
    id: '1',
    url: 'https://www.instagram.com/reel/DerUQTmhNMn/',
    category: 'Sedação Consciente',
  },
  {
    id: '2',
    url: 'https://www.instagram.com/p/DR7UMjzjb1j/',
    category: 'Sedação Consciente',
  },
  {
    id: '3',
    url: 'https://www.instagram.com/reel/De634glh4tT/',
    category: 'Sedação Consciente',
  },
  {
    id: '4',
    url: 'https://www.instagram.com/p/DS5uNj0ET-U/',
    category: 'Sedação Consciente',
  },
  {
    id: '5',
    url: 'https://www.instagram.com/p/DS5uNj0ET-U/',
    category: 'Sedação Consciente',
  },
  {
    id: '6',
    url: 'https://www.instagram.com/p/DS5uNj0ET-U/',
    category: 'Sedação Consciente',
  },
];

const MAX_POSTS = 10;

export function MediaSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const posts = instagramPosts.slice(0, MAX_POSTS);

  const scrollToPost = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const carousel = carouselRef.current;
    const items = carousel?.querySelectorAll<HTMLElement>('.media-carousel-item');
    const item = items?.[index];

    if (carousel && item) {
      carousel.scrollTo({
        left:
          item.offsetLeft -
          (carousel.clientWidth - item.clientWidth) / 2,
        behavior,
      });
      setActiveIndex(index);
    }
  };

  const scrollByPost = (direction: -1 | 1) => {
    const nextIndex = (activeIndex + direction + posts.length) % posts.length;
    scrollToPost(nextIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateActiveIndex = () => {
      const items = Array.from(
        carousel.querySelectorAll<HTMLElement>('.media-carousel-item'),
      );
      const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
      const nearestIndex = items.reduce(
        (nearest, item, index) =>
          Math.abs(item.offsetLeft + item.clientWidth / 2 - carouselCenter) <
          Math.abs(
            items[nearest].offsetLeft +
              items[nearest].clientWidth / 2 -
              carouselCenter,
          )
            ? index
            : nearest,
        0,
      );
      setActiveIndex(nearestIndex);
    };

    carousel.addEventListener('scroll', updateActiveIndex, { passive: true });
    return () => carousel.removeEventListener('scroll', updateActiveIndex);
  }, []);

  useEffect(() => {
    if (isPaused || posts.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % posts.length;
        const carousel = carouselRef.current;
        const items = carousel?.querySelectorAll<HTMLElement>(
          '.media-carousel-item',
        );
        const item = items?.[nextIndex];

        if (carousel && item) {
          carousel.scrollTo({
            left:
              item.offsetLeft -
              (carousel.clientWidth - item.clientWidth) / 2,
            behavior: 'smooth',
          });
        }

        return nextIndex;
      });
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, posts.length]);

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

        <div
          className="mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            ref={carouselRef}
            role="region"
            aria-label="Vídeos do Instagram"
            className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post, index) => (
              <ScrollReveal
                key={post.id}
                direction="up"
                delay={Math.min(index, 2) * 120}
                className="media-carousel-item w-full shrink-0 snap-center sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <article
                  className="h-full rounded-3xl border border-pink-100 bg-white shadow-xs"
                >
                  <div className="p-4 pb-3">
                    {post.title && (
                      <h3 className="text-sm font-bold text-slate-900">
                        {post.title}
                      </h3>
                    )}
                    <p className="mt-1 text-xs font-medium text-pink-600">
                      {post.category}
                    </p>
                  </div>
                  <InstagramEmbed postUrl={post.url} />
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 pb-4 pt-3 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                  >
                    Assistir no Instagram
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Vídeo anterior"
              onClick={() => scrollByPost(-1)}
              className="rounded-full border border-pink-200 p-2 text-pink-600 transition-colors hover:bg-pink-50"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <div
              role="group"
              aria-label="Selecionar vídeo"
              className="flex items-center gap-2"
            >
              {posts.map((post, index) => (
                <button
                  key={post.id}
                  type="button"
                  aria-label={`Ir para o vídeo ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => scrollToPost(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-6 bg-pink-500'
                      : 'w-2.5 bg-pink-200 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Próximo vídeo"
              onClick={() => scrollByPost(1)}
              className="rounded-full border border-pink-200 p-2 text-pink-600 transition-colors hover:bg-pink-50"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}