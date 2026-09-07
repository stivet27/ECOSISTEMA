import React, { useState } from 'react';
import { 
  Bot, 
  Video, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  Volume2, 
  Play, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  UserCheck
} from 'lucide-react';

export const PracticeModule: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(
    '¿Cómo puedo mediar en el rincón de juego simbólico sin imponer un guion ni cortar la iniciativa de los niños?'
  );

  const elevenLabsUrl = "https://elevenlabs.io/app/talk-to?agent_id=agent_5101m1derdrkfrat3tasd64gymcd&branch_id=agtbrch_7401m1derfvveh2aq9h2vg2ar51a";
  const heyGenUrl = "https://app.heygen.com/videos/v-deo-de-avatar-905680d2ef264886942d59a93cbc87dc";

  const samplePrompts = [
    {
      label: 'Mediación Simbólica',
      text: '¿Cómo puedo mediar en el rincón de juego simbólico sin imponer un guion ni cortar la iniciativa de los niños?'
    },
    {
      label: 'Inclusión TEA',
      text: '¿Qué apoyos visuales y andamiaje social sugieres para incluir a un niño con TEA en un circuito sensorial cooperativo?'
    },
    {
      label: 'Andamiaje Digital',
      text: '¿Cómo integrar las aplicaciones digitales para favorecer el lenguaje sin desplazar la dramatización y la expresión corporal?'
    }
  ];

  return (
    <section id="modulo-practica" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Module Header with Explicit Pedagogical Purpose & Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/15 text-indigo-900 border border-indigo-300 shadow-2xs">
              <Bot className="w-4 h-4 text-indigo-600" />
              Tarea 3: Tutor IA & Microclase
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
              Inteligencia Artificial Generativa & Modelado Audiovisual
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Práctica Interactiva y Modelado — <span className="text-indigo-600">Tutor IA y Microclase</span>
          </h2>

          {/* Explicit Pedagogical Purpose Box */}
          <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs font-black text-indigo-950 uppercase tracking-widest">
                Propósito Didáctico Explícito
              </p>
              <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                Interacción guiada y modelamiento audiovisual para la transposición didáctica. Facilita la apropiación 
                práctica de los contenidos del compendio mediante un agente conversacional por voz entrenado para docentes 
                y una microclase con avatar sintético que modela la aplicación en el aula de Educación Inicial.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Blocks Grid: Bloque A (ElevenLabs) & Bloque B (HeyGen) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* BLOQUE A: TUTOR CONVERSACIONAL POR VOZ/TEXTO (ELEVENLABS) */}
          {/* ============================================================ */}
          <div className="bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow-md shadow-indigo-200">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Tutor Conversacional IA
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Agente de Voz & Texto en ElevenLabs
                    </p>
                  </div>
                </div>

                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Agente Activo
                </span>
              </div>

              {/* Explicación Pedagógica del Agente */}
              <div className="p-5 rounded-[24px] bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <span className="font-black text-indigo-950 uppercase text-xs block tracking-wide">
                  Rol Formativo del Agente Inteligente:
                </span>
                <p>
                  Diseñado como un <strong>andamiaje cognitivo continuo</strong> para docentes y familias. Permite consultar estrategias en tiempo real, resolver dudas sobre adaptación curricular ante casos de TEA, formular preguntas abiertas para rincones y recibir orientaciones lúdicas sustentadas en el compendio de la Tarea 2.
                </p>
              </div>

              {/* Interactive Prompt Tester for Dialogue */}
              <div className="space-y-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  Preguntas Pedagógicas Recomendadas para Dialogar:
                </span>
                <div className="space-y-2">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPrompt(p.text)}
                      className={`w-full text-left p-3.5 rounded-2xl text-xs transition-all border-2 ${
                        selectedPrompt === p.text
                          ? 'bg-indigo-50/90 border-indigo-400 text-indigo-950 font-bold ring-2 ring-indigo-200'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-black text-indigo-700 mr-1.5">[{p.label}]:</span>
                      {p.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active prompt display */}
              <div className="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-200 text-xs text-indigo-950 flex items-center justify-between gap-3">
                <span className="truncate italic font-medium">
                  "{selectedPrompt}"
                </span>
                <span className="shrink-0 text-[10px] bg-indigo-200 text-indigo-900 px-2.5 py-1 rounded-lg font-black uppercase tracking-wider">
                  Listo para consultar
                </span>
              </div>
            </div>

            {/* Prominent ElevenLabs Button as requested */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={elevenLabsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-indigo-200 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] uppercase tracking-wider"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-white" />
                </div>
                <span>Interactuar con el Tutor IA en ElevenLabs</span>
                <ExternalLink className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-[11px] text-slate-400 truncate font-mono">
                Agent ID: agent_5101m1derdrkfrat3tasd64gymcd
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BLOQUE B: MICROCLASE CON AVATAR INTELIGENTE (HEYGEN) */}
          {/* ============================================================ */}
          <div className="bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-rose-200">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Microclase con Avatar Inteligente
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Video Interactivo Multimedia en HeyGen
                    </p>
                  </div>
                </div>

                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Video HD Verificado
                </span>
              </div>

              {/* Presentación del Recurso Audiovisual */}
              <div className="p-5 rounded-[24px] bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <span className="font-black text-rose-950 uppercase text-xs block tracking-wide">
                  Objetivos de Aprendizaje del Recurso:
                </span>
                <p>
                  Ofrecer un <strong>modelado docente audiovisual</strong> de alta fidelidad. A través de un avatar sintético pedagógicamente estructurado, se explica la transposición didáctica del juego simbólico y los circuitos sensoriales en el aula de Educación Inicial, articulando teoría, consignas visuales y evaluación formativa.
                </p>
              </div>

              {/* Ficha Técnica de la Microclase */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs">
                  <div className="flex items-center gap-1.5 font-black text-rose-950 mb-1 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    <span>Formato Breve</span>
                  </div>
                  <span className="text-slate-600 text-[11px] font-medium">Microlearning audiovisual condensado</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs">
                  <div className="flex items-center gap-1.5 font-black text-amber-950 mb-1 uppercase tracking-wider">
                    <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Modelado Docente</span>
                  </div>
                  <span className="text-slate-600 text-[11px] font-medium">Avatar interactivo con dicción pedagógica</span>
                </div>
              </div>

              {/* Preview banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-100/60 to-amber-100/60 border border-rose-200/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-rose-600 shrink-0">
                  <Play className="w-5 h-5 fill-rose-600 ml-0.5" />
                </div>
                <div className="text-xs">
                  <span className="font-black text-slate-900 block">
                    Sesión Práctica de Aula Guiada
                  </span>
                  <span className="text-slate-600 font-medium">
                    Estrategias de mediación docente frente al juego en acción
                  </span>
                </div>
              </div>
            </div>

            {/* Prominent HeyGen Button as requested */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={heyGenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-6 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-rose-200 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] uppercase tracking-wider"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <span>Ver Microclase Multimedia en HeyGen</span>
                <ExternalLink className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-[11px] text-slate-400 truncate font-mono">
                Video ID: v-deo-de-avatar-905680d2ef264886942d59a93cbc87dc
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
