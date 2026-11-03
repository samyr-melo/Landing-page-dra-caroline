'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, HelpCircle, Sparkles, HeartHandshake, Baby, Info } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';

interface FaqSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: { id: string; label: string }[];
}

export function FaqSidebar({
  selectedCategory,
  onSelectCategory,
  categories,
}: FaqSidebarProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sedacao':
        return Sparkles;
      case 'tea':
        return HeartHandshake;
      case 'primeira-vez':
        return Baby;
      case 'geral':
        return Info;
      default:
        return HelpCircle;
    }
  };

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Botão Voltar para a Landing Page */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 hover:text-pink-700 bg-white border border-pink-100 rounded-full px-4 py-2 shadow-xs transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao Início</span>
        </Link>

        {/* Bloco de Categorias na Sidebar */}
        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3 px-2">
            Tópicos de Dúvidas
          </span>
          <nav className="space-y-1.5">
            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-pink-500 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-pink-50/60 hover:text-pink-600'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-pink-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Card de Apoio Rápido / WhatsApp */}
        <div className="rounded-3xl border border-pink-100 bg-pink-50/60 p-6 text-center">
          <div className="w-10 h-10 rounded-2xl bg-white text-pink-600 flex items-center justify-center mx-auto shadow-xs mb-3">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Ainda com dúvidas?</h4>
          <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed">
            Nossa equipe em Manaus está pronta para esclarecer qualquer particularidade do seu filho.
          </p>
          <a
            href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent('Olá! Estava na página de dúvidas do site e gostaria de esclarecer uma pergunta sobre atendimento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-1.5 rounded-xl bg-pink-500 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-pink-600 transition-colors"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}