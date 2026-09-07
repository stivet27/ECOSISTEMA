import React from 'react';
import { 
  INSTITUTIONAL_DATA, 
  TEAM_MEMBERS, 
  FORMATIVE_ROUTE_STEPS 
} from '../data/ecosystemData';
import { 
  Sparkles, 
  ArrowDown, 
  Users, 
  CheckCircle, 
  ExternalLink,
  BookOpen,
  Music,
  FileImage,
  Bot,
  Award,
  ShieldCheck
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Music': return Music;
      case 'FileImage': return FileImage;
      case 'BookOpen': return BookOpen;
      case 'Sparkles': return Bot;
      case 'Award': return Award;
      default: return CheckCircle;
    }
  };

  return (
    <section id="modulo-0" className="pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Institutional Banner Card with Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden relative">
          {/* Top Decorative UNEMI Stripe */}
          <div className="h-3 bg-gradient-to-r from-[#0e2b4c] via-[#f59e0b] to-[#38bdf8]" />

          <div className="p-6 sm:p-10 lg:p-12 relative z-10">
            {/* Header with Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
              <div className="flex items-center gap-3.5">
                {/* UNEMI Crest Badge */}
                <div className="w-16 h-16 rounded-3xl bg-[#0e2b4c] text-white flex flex-col items-center justify-center font-black tracking-tighter shadow-lg shadow-slate-900/10 shrink-0">
                  <span className="text-base text-amber-400 font-black">UNEMI</span>
                  <span className="text-[10px] font-black tracking-widest text-slate-200 uppercase">Posgrados</span>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-[#0e2b4c] uppercase tracking-wider">
                    {INSTITUTIONAL_DATA.institution}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold">
                    {INSTITUTIONAL_DATA.program}
                  </p>
                </div>
              </div>

              {/* Group & Evaluation Pill */}
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300 shadow-xs">
                  <Users className="w-3.5 h-3.5 text-amber-700" />
                  {INSTITUTIONAL_DATA.group}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-[#34D399] text-white shadow-md shadow-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Fase 2 Verificada
                </span>
              </div>
            </div>

            {/* Main Title & Pedagogical Thesis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/10 text-[#0284c7] text-xs font-black uppercase tracking-wider border border-sky-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Unidad Curricular Oficial</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  El Juego y su Aporte al <span className="text-[#38BDF8]">Desarrollo Integral</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
                  Bienvenido al ecosistema didáctico integral desarrollado por el <strong className="text-slate-900 font-black">Grupo 11</strong>. 
                  Una arquitectura pedagógica activa que articula 6 recursos multisensoriales: desde la activación musical rítmica y la síntesis conceptual, 
                  hasta la transposición guiada mediante tutoría conversacional por voz y microclases con inteligencia artificial generativa.
                </p>

                {/* Docente Evaluador Card */}
                <div className="pt-2">
                  <div className="inline-flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700 shadow-2xs">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Docente Evaluador</p>
                      <p className="text-sm font-black text-slate-900 mt-0.5">{INSTITUTIONAL_DATA.professor}</p>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="text-slate-500 font-medium italic">"La mejor versión de ti"</span>
                  </div>
                </div>
              </div>

              {/* Maestrantes Authorship High-Contrast Dark Card */}
              <div className="lg:col-span-4 bg-slate-900 p-6 rounded-[32px] text-white shadow-xl space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/15 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 relative z-10">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#38BDF8]" />
                    Maestrantes Investigadoras
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider text-white bg-[#38BDF8] px-2.5 py-0.5 rounded-full shadow-sm">
                    G11
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div 
                      key={member.name}
                      className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-[#38BDF8] hover:bg-slate-800 transition-colors shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-xl bg-slate-700/80 flex items-center justify-center text-sm shrink-0 border border-slate-600/50">
                        {member.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black text-slate-100 truncate">
                          {idx + 1}. {member.name}
                        </p>
                        <p className="text-[10px] font-bold text-[#38BDF8] truncate uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Audit Bar with Bold Typography */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-black text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-[#34D399]" />
                  5 ETAPAS FORMATIVAS INTEGRADAS
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="hidden sm:inline font-bold text-sky-800 uppercase tracking-wider">
                  100% Alineado al Compendio Académico UNEMI
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#modulo-infografia"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#38BDF8] hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-200 transition-all hover:scale-[1.02]"
                >
                  <span>Iniciar Ruta Didáctica</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAPA DE LA RUTA FORMATIVA (SECUENCIA DIDÁCTICA COHERENTE) */}
        {/* ============================================================ */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider border border-amber-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Secuencia Didáctica Coherente</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Mapa de la <span className="text-[#38BDF8]">Ruta Formativa</span> del Estudiante
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed">
              La experiencia se articula en una progresión pedagógica lógica de 5 etapas interconectadas. 
              Explora cada fase para interactuar con los recursos multisensoriales y las evidencias verificables:
            </p>
          </div>

          {/* Stepper Grid with Bold Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FORMATIVE_ROUTE_STEPS.map((step) => {
              const StepIcon = getIcon(step.icon);
              return (
                <a
                  key={step.step}
                  href={`#${step.targetId}`}
                  className="group block p-6 rounded-[32px] bg-slate-50/80 border-2 border-transparent hover:border-[#38BDF8] hover:bg-white hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-black text-slate-800 shadow-sm group-hover:scale-105 group-hover:bg-[#38BDF8] group-hover:text-white group-hover:border-[#38BDF8] transition-all shrink-0">
                      <span className="text-base font-black">{step.step}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-black tracking-wider uppercase text-[#0284c7]">
                          {step.subtitle}
                        </span>
                        <StepIcon className="w-4 h-4 text-slate-400 group-hover:text-[#38BDF8] transition-colors" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1 group-hover:text-[#0e2b4c] transition-colors leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Micro action prompt on hover */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0284c7] font-black uppercase tracking-wider transition-colors">
                    <span>Acceder al módulo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
