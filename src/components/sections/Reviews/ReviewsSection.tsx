'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquarePlus, X } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { PlaceReviewItem } from '@/app/api/reviews/route';

interface ReviewsResponse {
  rating: number;
  userRatingCount: number;
  reviews: PlaceReviewItem[];
  error?: string;
}

function GoogleIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function ReviewsSection() {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [selectedReview, setSelectedReview] = useState<PlaceReviewItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch('/api/reviews', {
          signal: controller.signal,
        });
        const result: ReviewsResponse = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Não foi possível carregar as avaliações.');
        }

        setReviewsData(result);
        setActiveReviewIndex(0);
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ left: 0 });
        }
        setError(null);
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : 'Não foi possível carregar as avaliações do Google Maps.'
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadReviews();
    const refreshInterval = window.setInterval(() => {
      void loadReviews();
    }, 21 * 24 * 60 * 60 * 1000);

    return () => {
      controller.abort();
      window.clearInterval(refreshInterval);
    };
  }, []);

  useEffect(() => {
    const reviewCount = reviewsData?.reviews.length ?? 0;
    if (
      reviewCount < 2 ||
      isCarouselPaused ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const carouselInterval = window.setInterval(() => {
      const carousel = carouselRef.current;
      const firstCard = carousel?.firstElementChild;
      if (!carousel || !(firstCard instanceof HTMLElement)) {
        return;
      }

      const atEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
      carousel.scrollTo({
        left: atEnd ? 0 : carousel.scrollLeft + firstCard.offsetWidth + 16,
        behavior: 'smooth',
      });
    }, 7000);

    return () => window.clearInterval(carouselInterval);
  }, [isCarouselPaused, reviewsData?.reviews.length]);

  const reviews = reviewsData?.reviews ?? [];

  function scrollCarousel(direction: -1 | 1) {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !(firstCard instanceof HTMLElement)) {
      return;
    }

    const atEnd =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
    const atStart = carousel.scrollLeft <= 8;
    const step = firstCard.offsetWidth + 16;
    const left =
      direction === 1
        ? atEnd
          ? 0
          : carousel.scrollLeft + step
        : atStart
          ? carousel.scrollWidth
          : carousel.scrollLeft - step;
    carousel.scrollTo({ left, behavior: 'smooth' });
  }

  function scrollToReview(index: number) {
    const carousel = carouselRef.current;
    const card = carousel?.children.item(index);
    if (carousel && card instanceof HTMLElement) {
      carousel.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }
  }

  return (
    <section id="avaliacoes" className="py-20 bg-pink-50/30 border-y border-pink-100/60 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs border border-pink-100 mb-3">
            <GoogleIcon className="h-4 w-4" />
            <span>Perfil Oficial no Google Maps</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Avaliações das famílias no Google
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-4">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    reviewsData && i < Math.round(reviewsData.rating)
                      ? 'fill-current'
                      : ''
                  }`}
                />
              ))}
            </div>
            <span className="text-base font-bold text-slate-900">
              {reviewsData
                ? `${reviewsData.rating.toFixed(1)} de 5.0 estrelas`
                : isLoading
                  ? 'Carregando nota...'
                  : 'Nota indisponível'}
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">
              {reviewsData
                ? `${reviewsData.userRatingCount} avaliações no Google Maps`
                : 'Avaliações reais via Google Maps'}
            </span>
          </div>
        </ScrollReveal>

        {error && !reviewsData ? (
          <p role="alert" className="text-center text-sm text-slate-600">
            {error}
          </p>
        ) : isLoading ? (
          <p role="status" className="text-center text-sm text-slate-600">
            Carregando avaliações do Google Maps...
          </p>
        ) : reviews.length ? (
          <>
            <ScrollReveal direction="up" className="mx-auto max-w-7xl">
              <div
                role="region"
                aria-label="Comentários do Google Maps"
                aria-roledescription="carrossel"
                className="relative"
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <div
                  ref={carouselRef}
                  onScroll={(event) => {
                    const carousel = event.currentTarget;
                    const firstCard = carousel.firstElementChild;
                    if (firstCard instanceof HTMLElement) {
                      setActiveReviewIndex(
                        Math.min(
                          Math.round(carousel.scrollLeft / (firstCard.offsetWidth + 16)),
                          reviews.length - 1
                        )
                      );
                    }
                  }}
                  className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3"
                >
                  {reviews.map((review) => (
                    <article
                      key={review.id}
                      role="group"
                      aria-roledescription="slide"
                      className="flex h-[360px] w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-pink-100 bg-white p-6 shadow-xs transition-shadow hover:shadow-md sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
                    >
                      <div className="flex min-h-0 flex-1 flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div
                            className="flex text-amber-400"
                            aria-label={`${review.rating} de 5 estrelas`}
                          >
                            {Array.from({ length: review.rating }, (_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <GoogleIcon className="h-4 w-4 opacity-75" />
                        </div>

                        <p className="line-clamp-6 overflow-hidden text-sm leading-relaxed text-slate-600 italic">
                          “{review.text}”
                        </p>
                        {review.text.length > 220 && (
                          <button
                            type="button"
                            onClick={() => setSelectedReview(review)}
                            className="mt-2 self-start text-xs font-semibold text-pink-600 hover:text-pink-700"
                          >
                            Ver mais
                          </button>
                        )}
                      </div>

                      <div className="mt-4 flex shrink-0 flex-col gap-1 border-t border-pink-50 pt-4">
                        <h4 className="text-sm font-bold text-slate-900">
                          {review.authorUri ? (
                            <a
                              href={review.authorUri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-pink-600"
                            >
                              {review.authorName}
                            </a>
                          ) : (
                            review.authorName
                          )}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {review.relativePublishTimeDescription}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>

                {reviews.length > 1 && (
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => scrollCarousel(-1)}
                      aria-label="Mostrar comentário anterior"
                      className="rounded-full border border-pink-100 p-2 text-pink-600 transition-colors hover:bg-pink-50"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      {reviews.map((review, index) => (
                        <button
                          key={review.id}
                          type="button"
                          onClick={() => scrollToReview(index)}
                          aria-label={`Mostrar comentário ${index + 1}`}
                          aria-current={index === activeReviewIndex ? 'true' : undefined}
                          className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            index === activeReviewIndex ? 'bg-pink-600' : 'bg-pink-200'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => scrollCarousel(1)}
                      aria-label="Mostrar próximo comentário"
                      className="rounded-full border border-pink-100 p-2 text-pink-600 transition-colors hover:bg-pink-50"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
            <p className="mt-5 text-center text-xs text-slate-500">
              Exibindo {reviews.length} comentários fornecidos pelo Google Maps, em ordem de publicação.
              Atualização a cada 3 semanas.
            </p>
            {selectedReview && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                onClick={() => setSelectedReview(null)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setSelectedReview(null);
                  }
                }}
              >
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="selected-review-author"
                  className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedReview(null)}
                    aria-label="Fechar comentário"
                    className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="mb-4 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: selectedReview.rating }, (_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                    <GoogleIcon className="ml-auto h-4 w-4" />
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                    {selectedReview.text}
                  </p>
                  <div className="mt-6 border-t border-pink-50 pt-4">
                    <h3 id="selected-review-author" className="text-sm font-bold text-slate-900">
                      {selectedReview.authorName}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {selectedReview.relativePublishTimeDescription}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-sm text-slate-600">
            Não há comentários disponíveis para exibição no momento.
          </p>
        )}

        {/* Botão que direciona o usuário para abrir o Google Maps e avaliar */}
        <ScrollReveal direction="up" delay={200} className="mt-12 text-center">
          <a
            href={clinicData.googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white border border-pink-200 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-pink-50 hover:text-pink-600 transition-all active:scale-95"
          >
            <MessageSquarePlus className="h-4 w-4 text-pink-500" />
            <span>Ver no Google Maps ou deixar um depoimento</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}