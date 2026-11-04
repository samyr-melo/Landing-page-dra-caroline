import { MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { clinicData } from '@/data/clinicInfo';

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-pink-600 bg-pink-100 px-3.5 py-1.5 rounded-full">
            Atendimento e Localização
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-3">
            Venha conhecer o nosso consultório
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Ambiente acolhedor, pensado e adaptado para receber crianças e famílias em Manaus.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 rounded-3xl border border-pink-100 bg-pink-50/40 p-8">
            <h3 className="text-xl font-bold text-slate-900">Informações do Consultório</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-pink-100 p-2 text-pink-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Localização</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {clinicData.fullLocation}
                  </p>
                  <a
                    href={clinicData.googleMapsLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-pink-100 p-2 text-pink-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horários de Atendimento</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Segunda a Sexta: 09h00 às 21h00 | Consultas previamente agendadas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-pink-100 p-2 text-pink-600 shrink-0">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Instagram</h4>
                  <a
                    href={`https://instagram.com/${clinicData.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-600 hover:underline mt-0.5 inline-block font-semibold"
                  >
                    @{clinicData.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-pink-100">
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent('Olá! Estou vindo pelo site. Gostaria de agendar uma consulta para o meu filho.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-pink-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Agendar Horário no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="h-80 lg:h-full min-h-[320px] w-full rounded-3xl overflow-hidden border border-pink-100 bg-slate-100 flex items-center justify-center relative shadow-xs">
            <iframe
              title="Localização do Consultório"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://maps.google.com/maps?q=-3.1062953%2C-60.0209953&z=17&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}