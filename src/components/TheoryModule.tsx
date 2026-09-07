import React, { useState } from 'react';
import { 
  PEDAGOGICAL_AXES, 
  SUGGESTED_ACTIVITIES, 
  COMPENDIO_FULL_TEXT 
} from '../data/ecosystemData';
import { 
  BookOpen, 
  Presentation, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Quote, 
  Layers, 
  Download, 
  FileText,
  BookmarkCheck,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

export const TheoryModule: React.FC = () => {
  const [activeAxisId, setActiveAxisId] = useState<string>('eje-1');
  const [showCompendioModal, setShowCompendioModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'axes' | 'activities' | 'compendio'>('axes');

  const canvaUrl = "https://canva.link/mlo6gw9lf2nk2fi";
  const compendioDriveUrl = "https://drive.google.com/file/d/1tLATSIPBFyBaCqSOhGiZAwEmc2GFjsWy/view?usp=sharing";
  const currentAxis = PEDAGOGICAL_AXES.find(a => a.id === activeAxisId) || PEDAGOGICAL_AXES[0];

  return (
    <section id="modulo-compendio" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Module Header with Explicit Pedagogical Purpose & Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#34D399]/20 text-emerald-900 border border-emerald-300 shadow-2xs">
              <BookOpen className="w-4 h-4 text-[#34D399]" />
              Tarea 2: Compendio Académico
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Compendio Académico & Presentación Canva
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Construcción y Teoría — <span className="text-[#34D399]">Los 4 Ejes Pedagógicos</span>
          </h2>

          {/* Explicit Pedagogical Purpose Box */}
          <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-black text-emerald-950 uppercase tracking-widest">
                Propósito Didáctico Explícito
              </p>
              <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                Apropiación conceptual de los 4 ejes pedagógicos del juego en Educación Inicial. 
                Fundamenta la transición desde actividades pasivas hacia metodologías activas constructivistas, 
                garantizando la inclusión de la neurodiversidad (TEA) y el uso crítico del andamiaje digital.
              </p>
            </div>
          </div>
        </div>

        {/* Action Containers: Canva & Compendio PDF Prominent Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Canva Presentation Card */}
          <div className="bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-4 hover:border-sky-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
                  <Presentation className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-200">
                  Diapositivas Oficiales T2
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900">
                Presentación Interactiva en Canva
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Diapositivas diseñadas con apoyo de Manus AI y Gamma, pulidas exhaustivamente en Canva para la exposición magistral del compendio (citas IEEE, mapas conceptuales y síntesis de tres ideas fuerza).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-5 rounded-2xl bg-[#38BDF8] hover:bg-sky-500 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-sky-200 transition-all hover:scale-[1.01] uppercase tracking-wider"
              >
                <Presentation className="w-4 h-4" />
                <span>Abrir Presentación Interactiva (Canva)</span>
                <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-[11px] text-center text-slate-400 truncate font-mono">
                {canvaUrl}
              </p>
            </div>
          </div>

          {/* Compendio Académico PDF Card */}
          <div className="bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Google Drive (PDF 25 Págs)
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900">
                Compendio Académico Completo (PDF)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Investigación rigurosa del Grupo 11: Resumen ejecutivo, introducción, desarrollo de 4 subtemas, 2 actividades didácticas aplicadas, lista de cotejo breve de observación y 12 referencias indexadas IEEE.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={compendioDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-5 rounded-2xl bg-[#34D399] hover:bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-200 transition-all hover:scale-[1.01] uppercase tracking-wider"
              >
                <BookOpen className="w-4 h-4" />
                <span>Leer Compendio Académico en Pantalla</span>
                <ExternalLink className="w-4 h-4 text-slate-900/80 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-[11px] text-center text-slate-400 truncate font-mono">
                {compendioDriveUrl}
              </p>
              <button
                type="button"
                onClick={() => setShowCompendioModal(true)}
                className="w-full py-1.5 px-3 text-xs font-bold text-slate-500 hover:text-emerald-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>O abrir visor de lectura integrado en pantalla</span>
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Theory Tabs: The 4 Axes, Applied Activities, Full Text */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Top Sub-Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900">
                Desarrollo Curricular del Compendio
              </h3>
            </div>

            {/* Tab Pills */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl text-xs font-black uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveTab('axes')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === 'axes'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Los 4 Ejes Pedagógicos
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('activities')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === 'activities'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Actividades Sugeridas
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('compendio')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === 'compendio'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Referencias IEEE
              </button>
            </div>
          </div>

          {/* TAB 1: THE 4 PEDAGOGICAL AXES */}
          {activeTab === 'axes' && (
            <div className="space-y-6">
              {/* Axis Selector Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {PEDAGOGICAL_AXES.map((axis) => {
                  const isSelected = axis.id === activeAxisId;
                  return (
                    <button
                      key={axis.id}
                      type="button"
                      onClick={() => setActiveAxisId(axis.id)}
                      className={`p-4 text-left rounded-[24px] border-2 transition-all ${
                        isSelected
                          ? `${axis.accentBg} ${axis.accentBorder} ring-2 ring-emerald-300/40 shadow-sm`
                          : 'bg-slate-50/70 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {axis.number}
                        </span>
                        {isSelected && <BookmarkCheck className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <h4 className="text-xs font-black text-slate-900 line-clamp-1">
                        {axis.shortTitle}
                      </h4>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Axis Panel */}
              <div className="p-6 sm:p-8 rounded-[32px] bg-slate-50 border border-slate-200/80 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-black text-emerald-800 uppercase tracking-widest">
                      {currentAxis.number} • {currentAxis.tag}
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 mt-1">
                      {currentAxis.title}
                    </h4>
                  </div>
                  
                  {/* Citations Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {currentAxis.citations.map((c, i) => (
                      <span key={i} className="text-[11px] font-mono font-bold bg-white border border-slate-300 text-slate-700 px-3 py-1 rounded-lg shadow-2xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Concepts & Implications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Fundamentos Conceptuales */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                      Conceptos y Fundamentos
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {currentAxis.concepts}
                    </p>
                  </div>

                  {/* Implicaciones para Educación Básica */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                      Implicaciones para Educación Básica
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {currentAxis.implications}
                    </p>
                  </div>
                </div>

                {/* Ejemplo Aplicado en el Aula */}
                <div className="bg-amber-50/70 p-6 rounded-[24px] border border-amber-200 shadow-2xs space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Ejemplo Aplicado en el Aula de Educación Inicial
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {currentAxis.exampleApplied}
                  </p>
                </div>

                {/* Recomendaciones Didácticas */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Recomendaciones Didácticas Específicas
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentAxis.recommendations.map((rec, rIdx) => (
                      <div key={rIdx} className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start gap-2.5 shadow-2xs">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-normal font-normal">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SUGGESTED APPLIED ACTIVITIES */}
          {activeTab === 'activities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUGGESTED_ACTIVITIES.map((act, index) => (
                <div key={index} className="p-6 sm:p-7 rounded-[32px] bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-sky-900 bg-sky-100 px-3 py-1 rounded-full">
                        Estrategia de Aula {index + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-slate-900">
                      {act.title}
                    </h4>

                    {/* Propósito */}
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700">
                      <span className="font-black text-slate-900 block mb-1">Propósito Formativo:</span>
                      {act.purpose}
                    </div>

                    {/* Desarrollo */}
                    <div className="space-y-1">
                      <span className="text-xs font-black text-slate-800 block">Secuencia Didáctica:</span>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {act.development}
                      </p>
                    </div>
                  </div>

                  {/* Evidencias esperadas */}
                  <div className="pt-3 border-t border-slate-200 text-xs text-emerald-950 bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200">
                    <span className="font-black block mb-0.5 text-emerald-900">Evidencias Observables:</span>
                    {act.evidences}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: IEEE REFERENCES */}
          {activeTab === 'compendio' && (
            <div className="p-6 sm:p-8 rounded-[32px] bg-slate-50 border border-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    Fuentes Bibliográficas Indexadas (Formato IEEE)
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Sustento científico del compendio de la Tarea 2 • Grupo 11 UNEMI
                  </p>
                </div>
                <span className="text-xs font-mono font-black bg-white px-3 py-1 rounded-xl border border-slate-300">
                  12 Referencias 2024-2026
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {COMPENDIO_FULL_TEXT.references.map((ref) => (
                  <div key={ref.num} className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 flex items-start gap-3 shadow-2xs">
                    <span className="font-mono font-black text-emerald-700 shrink-0 mt-0.5">
                      {ref.num}
                    </span>
                    <p className="leading-relaxed font-normal">
                      {ref.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal: Full Compendio Reader */}
        {showCompendioModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-200 p-6 sm:p-10 relative">
              <button
                type="button"
                onClick={() => setShowCompendioModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Universidad Estatal de Milagro • Posgrados
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {COMPENDIO_FULL_TEXT.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {COMPENDIO_FULL_TEXT.subtitle} • Maestrantes Grupo 11
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Resumen Ejecutivo
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    {COMPENDIO_FULL_TEXT.executiveSummary}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Introducción & Justificación Pedagógica
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {COMPENDIO_FULL_TEXT.introduction}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-900 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Imprimir / Guardar como PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCompendioModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cerrar Lector
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
