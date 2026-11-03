'use client';

import { useState, useEffect } from 'react';
import { HelpCircle, X, ChevronDown, MessageCircle } from 'lucide-react';
import { faqCategories, faqList } from '@/data/faqs';
import { clinicData } from '@/data/clinicInfo';

interface FaqSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FaqSidebar({ isOpen, onClose }: FaqSidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [expandedId, setExpandedId] = useState<string | null>('1');

  // Bloqueia o scroll da página enquanto o sidebar estiver visível
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Permite fechar pressionando a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredFaqs =
    activeCategory === 'todos'
      ? faqList
      : faqList.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Fundo escuro com desfoque */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Painel lateral que desliza da direita */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out border-l border-pink-100 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Topo do painel */}
        <div className="flex items-center justify-between p-6 border-b border-pink-100 bg-pink-50/50">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-pink-100 p-2 text-pink-600">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Perguntas Frequentes</h3>
              <p className="text-xs text-slate-500">Dúvidas comuns sobre os atendimentos</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-pink-100 hover:text-pink-600 transition-colors"
            aria-label="Fechar painel de dúvidas"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filtros em carrossel horizontal */}
        <div className="p-4 border-b border-slate-100 bg-white">
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-pink-500 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista com o efeito acordeão */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-pink-100 bg-white shadow-2xs transition-all duration-200 hover:border-pink-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-pink-600 transition-colors gap-2"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`rounded-full p-1 transition-transform duration-300 shrink-0 ${
                      isExpanded
                        ? 'bg-pink-100 text-pink-600 rotate-180'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-pink-50 pt-2.5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé com ação direta */}
        <div className="p-5 border-t border-pink-100 bg-pink-50/40">
          <p className="text-xs text-slate-500 mb-3 text-center">
            Precisa de orientações personalizadas para o seu filho?
          </p>
          <a
            href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
              'Olá Dra. Caroline! Gostaria de tirar algumas dúvidas pontuais sobre o atendimento.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-pink-500 py-3 px-4 text-xs font-semibold text-white shadow-xs hover:bg-pink-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar com a Dra. Caroline</span>
          </a>
        </div>
      </aside>
    </>
  );
}