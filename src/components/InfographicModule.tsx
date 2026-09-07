import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  Sparkles,
  ZoomIn
} from 'lucide-react';

export const InfographicModule: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="modulo-infografia" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Module Header with Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#38BDF8]/15 text-[#0284c7] border border-sky-300 shadow-2xs">
              <ImageIcon className="w-4 h-4 text-[#38BDF8]" />
              Infografía de Síntesis
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-sky-900 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              Recurso Gráfico Oficial
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            El Viaje de la IA: <span className="text-[#38BDF8]">Transformando la Educación del Siglo XXI</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-4xl">
            Síntesis visual y conceptual sobre la evolución de la inteligencia artificial, los motores de aprendizaje automático y su impacto directo en la inclusión educativa, personalización y el acompañamiento como mentor digital.
          </p>
        </div>

        {/* Infographic Main Display Container */}
        <div className="bg-white rounded-[36px] border border-slate-100 p-4 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-black uppercase tracking-wider text-slate-800">
                Visualizador de Infografía
              </span>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-wider border border-sky-200 active:scale-95"
            >
              <ZoomIn className="w-4 h-4 text-sky-600" />
              <span>Ampliar en Pantalla Completa</span>
            </button>
          </div>

          {/* Infographic Image Frame */}
          <div 
            onClick={() => setModalOpen(true)}
            className="group cursor-pointer relative rounded-[28px] overflow-hidden border-2 border-slate-200/80 bg-slate-50 shadow-inner hover:shadow-2xl transition-all duration-300"
          >
            <img 
              src="/infografia_educacion_ia.svg" 
              alt="Infografía: El Viaje de la IA: Transformando la Educación del Siglo XXI" 
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-5 py-2.5 rounded-full bg-slate-900/85 text-white text-xs font-black uppercase tracking-wider backdrop-blur-xs flex items-center gap-2 shadow-lg">
                <Maximize2 className="w-4 h-4 text-sky-400" />
                Haz clic para ver con máxima resolución
              </span>
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Ecosistema Didáctico • Maestría en Educación Inicial UNEMI • Grupo 11
            </p>
          </div>
        </div>

        {/* Modal for full screen high-resolution view */}
        {modalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn"
            onClick={() => setModalOpen(false)}
          >
            <div 
              className="bg-white rounded-[32px] max-w-6xl w-full max-h-[96vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      El Viaje de la IA: Transformando la Educación del Siglo XXI
                    </h3>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Infografía Oficial UNEMI
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-2.5 rounded-2xl bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors shadow-2xs"
                  title="Cerrar visor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable Image */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
                <img 
                  src="/infografia_educacion_ia.svg" 
                  alt="Infografía: El Viaje de la IA: Transformando la Educación del Siglo XXI" 
                  className="w-full h-auto max-w-5xl rounded-2xl shadow-lg object-contain bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500 shrink-0">
                <span className="font-bold">
                  Universidad Estatal de Milagro (UNEMI) • Innovación en el Desarrollo Infantil
                </span>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-black uppercase tracking-wider hover:bg-slate-800 transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
