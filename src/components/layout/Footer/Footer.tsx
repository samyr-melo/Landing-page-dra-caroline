import Link from 'next/link';
import { clinicData } from '@/data/clinicInfo';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-pink-50/30 py-12 text-xs text-slate-600">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-pink-100">
          <div>
            <span className="text-base font-bold text-slate-900">
              {clinicData.name}
            </span>
            <p className="mt-1">
              Cirurgiã Dentista Integrativa • Sedação Consciente • Atendimento PCD e TEA
            </p>
            <p className="mt-0.5 text-slate-400">
              Registo Profissional: {clinicData.cro}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 font-medium text-slate-700">
            {/* <Link href="/#servicos" className="hover:text-pink-600 transition-colors">
              Especialidades
            </Link> */}
            <Link href="/#sedacao" className="hover:text-pink-600 transition-colors">
              Sedação Consciente
            </Link>
            <Link href="/#sobre" className="hover:text-pink-600 transition-colors">
              Sobre a Dra.
            </Link>
            <Link href="/faq" className="hover:text-pink-600 transition-colors">
              Dúvidas
            </Link>
            {/* <Link href="#galeria" className="hover:text-pink-600 transition-colors">
              Vídeos
            </Link> */}
            <Link href="/#contato" className="hover:text-pink-600 transition-colors">
              Localização
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[11px]">
          <p>© 2026 {clinicData.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Feito com</span>
            <Heart className="h-3.5 w-3.5 fill-pink-500 text-pink-500" />
            <span>para sorrisos especiais em Manaus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}