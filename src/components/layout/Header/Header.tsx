'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    //{ href: '/#servicos', label: 'Especialidades' },
    { href: '/#sedacao', label: 'Sedação Consciente' },
    { href: '/#sobre', label: 'Sobre a Dra.' },
    //{ href: '/#galeria', label: 'Vídeos' },
    { href: '/#contato', label: 'Localização' },
    { href: '/faq', label: 'Dúvidas' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-pink-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight text-pink-600">
            {clinicData.name}
          </span>
          <p className="text-xs text-slate-500 font-medium">
            Cirurgiã Dentista • {clinicData.cro}
          </p>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pink-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão Desktop */}
        <div className="hidden md:block">
          <a
            href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
              'Olá Dra. Caroline! Estou vindo pelo site. Gostaria de mais informações sobre o atendimento.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 transition-colors"
          >
            Falar com a equipe
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-pink-600 focus:outline-none transition-transform duration-200 active:scale-90"
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Gaveta Mobile com Transição e Delay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-pink-100 bg-white ${
          mobileMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 font-semibold text-sm text-slate-700">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${(idx + 1) * 60}ms` : '0ms',
                }}
                className={`py-1 transition-all duration-300 hover:text-pink-600 transform ${
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            style={{
              transitionDelay: mobileMenuOpen ? `${(navLinks.length + 1) * 60}ms` : '0ms',
            }}
            className={`pt-2 transition-all duration-300 transform ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <a
              href={`https://wa.me/${clinicData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}