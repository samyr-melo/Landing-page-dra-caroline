'use client';

import { useState } from 'react';
import { servicesList, ServiceDetail } from '@/data/services';
import { Modal } from '@/components/ui/Modal';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="servicos" className="py-20 bg-pink-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-pink-600 bg-pink-100 px-3.5 py-1.5 rounded-full">
            Especialidades Clínicas
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-3">
            Cuidados pensados para cada fase e necessidade
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Cada criança é única. Desenvolvemos estratégias lúdicas e acolhedoras para transformar a ida ao dentista numa experiência positiva e tranquila.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-between rounded-3xl border border-pink-100 bg-white p-7 shadow-xs hover:shadow-md hover:border-pink-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  {service.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      <Sparkles className="h-3 w-3" />
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                >
                  Ver mais detalhes
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <a
                  href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(`Olá! Estou vindo pelo site. Gostaria de informações sobre ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-pink-50 px-3.5 py-1.5 text-xs font-medium text-pink-700 hover:bg-pink-100 transition-colors"
                >
                  Agendar este serviço
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">{selectedService.fullDescription}</p>

            <div className="rounded-2xl bg-pink-50/60 p-4 border border-pink-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-700 mb-3">
                Destaques do Procedimento:
              </h4>
              <ul className="space-y-2">
                {selectedService.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(`Olá! Estou vindo pelo site. Gostaria de agendar uma consulta para ${selectedService.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-pink-600 transition-all"
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}