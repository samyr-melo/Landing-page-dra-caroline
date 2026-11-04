'use client';

import { Star, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { clinicReviews } from '@/data/reviews';
import { clinicData } from '@/data/clinicInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
  return (
    <section id="avaliacoes" className="py-20 bg-pink-50/30 border-y border-pink-100/60 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs border border-pink-100 mb-3">
            <GoogleIcon className="h-4 w-4" />
            <span>Perfil Oficial no Google Maps</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Aprovado com nota máxima pelas famílias
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-base font-bold text-slate-900">5.0 de 5.0 estrelas</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">
              Avaliações reais em Manaus
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {clinicReviews.map((review, idx) => (
            <ScrollReveal
              key={review.id}
              direction="up"
              delay={idx * 120}
              className="flex flex-col justify-between rounded-3xl border border-pink-100 bg-white p-7 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <GoogleIcon className="h-4 w-4 opacity-75" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-pink-50 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {review.authorName}
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                  </h4>
                  <span className="text-xs text-pink-600 font-medium block">
                    {review.authorRole}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">{review.date}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

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