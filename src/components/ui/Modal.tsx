'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h3 className="text-xl font-bold text-brand-textDark">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-brand-textMuted hover:bg-slate-100 hover:text-brand-textDark transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 text-sm text-brand-textMuted leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}