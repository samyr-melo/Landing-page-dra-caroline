'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqCategories, faqList } from '@/data/faqs';
import { clinicData } from '@/data/clinicInfo';

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [expandedId, setExpandedId] = useState<string | null>('1');

  const filteredFaqs =
    activeCategory === 'todos'
      ? faqList
      : faqList.filter((faq) => faq.category === activeCategory);

  return (
    <section className="bg-gradient-to-b from-pink-50/60 via-white to-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-700">
            Estamos aqui para auxiliar você e sua família
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Perguntas frequentes
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Encontre respostas sobre os atendimentos, a sedação consciente e a
            primeira consulta.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
          <aside className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
            <h2 className="mb-3 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Filtrar por assunto
            </h2>
            <nav aria-label="Categorias de perguntas frequentes" className="space-y-1.5">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full rounded-2xl px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
                    activeCategory === category.id
                      ? 'bg-pink-500 text-white'
                      : 'text-slate-600 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              const answerId = `faq-answer-${faq.id}`;

              return (
                <article
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition-colors hover:border-pink-200"
                >
                  <h2>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={answerId}
                      onClick={() =>
                        setExpandedId((current) =>
                          current === faq.id ? null : faq.id,
                        )
                      }
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 transition-colors hover:text-pink-600 sm:p-6"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-pink-500 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h2>
                  {isExpanded && (
                    <div
                      id={answerId}
                      className="border-t border-pink-50 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6"
                    >
                      {faq.answer}
                    </div>
                  )}
                </article>
              );
            })}

            <div className="mt-8 rounded-3xl border border-pink-100 bg-pink-50/60 p-6 text-center sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Ainda tem alguma dúvida?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                Fale com a equipe para receber orientações sobre o atendimento
                da sua criança.
              </p>
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent('Olá! Estava na página de dúvidas do site e gostaria de esclarecer uma pergunta sobre atendimento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-600"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
