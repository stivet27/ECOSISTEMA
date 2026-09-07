import React, { useState, useRef } from 'react';
import { SONG_LYRICS } from '../data/ecosystemData';
import { 
  Music, 
  Play, 
  Pause, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Activity, 
  Headphones, 
  HeartHandshake, 
  Volume2
} from 'lucide-react';

export const MusicModule: React.FC = () => {
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const [lyricsOpen, setLyricsOpen] = useState(true);
  const [guideStep, setGuideStep] = useState<'before' | 'during' | 'after'>('during');
  
  // Web Audio synth ref for gentle nursery melody preview
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const startGentleSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      // Tender pentatonic nursery melody notes (C4, D4, E4, G4, A4, C5)
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63, 261.63, 329.63, 392.00, 440.00, 523.25];
      let noteIdx = 0;

      setIsPlayingSynth(true);

      const playNext = () => {
        if (!audioContextRef.current) return;
        const now = audioContextRef.current.currentTime;
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();

        // Warm chime tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(notes[noteIdx % notes.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.15, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);

        osc.start(now);
        osc.stop(now + 0.48);

        noteIdx++;
        timerRef.current = window.setTimeout(playNext, 480);
      };

      playNext();
    } catch {
      setIsPlayingSynth(false);
    }
  };

  const stopGentleSynth = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setIsPlayingSynth(false);
  };

  const toggleSynth = () => {
    if (isPlayingSynth) {
      stopGentleSynth();
    } else {
      startGentleSynth();
    }
  };

  return (
    <section id="modulo-musica" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Module Header with Explicit Pedagogical Purpose & Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300 shadow-2xs">
              <Music className="w-4 h-4 text-amber-700" />
              Pieza Musical
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              Recurso Sonoro Generativo (Suno AI)
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Pieza Musical — <span className="text-[#FBBF24]">El Juego es Mágico para Crecer</span>
          </h2>

          {/* Explicit Pedagogical Purpose Box */}
          <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-xs font-black text-amber-950 uppercase tracking-widest">
                Propósito Didáctico Explícito
              </p>
              <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                Activación lúdica, predisposición afectiva y estimulación auditiva previa a la clase. 
                Prepara la arquitectura cerebral infantil conectando el ritmo corporal con la imaginación, 
                la motivación intrínseca y la cohesión del grupo en asamblea.
              </p>
            </div>
          </div>
        </div>

        {/* Player & Action Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Player Card */}
          <div className="lg:col-span-7 bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-inner shrink-0">
                    <Music className="w-7 h-7 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {SONG_LYRICS.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      {SONG_LYRICS.style}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Enlace Verificado
                </span>
              </div>

              {/* Animated Waveform Simulator */}
              <div className="my-6 p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-amber-900">
                    <Headphones className="w-3.5 h-3.5 text-amber-600" />
                    Banda Sonora: Suno AI Producción Oficial
                  </span>
                  <span>Audio Estéreo 48kHz</span>
                </div>

                {/* Simulated Equalizer Bars */}
                <div className="h-16 flex items-end justify-center gap-1.5 px-2">
                  {[40, 65, 85, 45, 95, 75, 60, 90, 100, 50, 70, 85, 60, 40, 80, 95, 65, 50, 75, 90, 60, 40].map((h, i) => (
                    <div
                      key={i}
                      className={`w-2.5 rounded-t-full transition-all duration-300 ${
                        isPlayingSynth 
                          ? 'bg-[#FBBF24] animate-pulse' 
                          : 'bg-[#38BDF8]/50'
                      }`}
                      style={{ 
                        height: isPlayingSynth ? `${Math.min(100, Math.max(15, h * (0.6 + Math.random() * 0.7)))}%` : `${h * 0.45}%` 
                      }}
                    />
                  ))}
                </div>

                {/* In-app sound chime preview button */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-xs">
                  <button
                    type="button"
                    onClick={toggleSynth}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-black text-xs uppercase tracking-wider transition-colors"
                  >
                    {isPlayingSynth ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-amber-700" />
                        <span>Pausar Simulación Sonora</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                        <span>Probar Tono Rítmico de Aula</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-slate-400 font-medium italic">
                    {isPlayingSynth ? 'Reproduciendo compás rítmico...' : 'Pulsa para vista sonora'}
                  </span>
                </div>
              </div>
            </div>

            {/* Prominent Suno Button as requested with Bold Typography */}
            <div className="space-y-3 pt-2">
              <a
                href="https://suno.com/s/YzwmERjxkOTtLkJC"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-6 rounded-2xl bg-[#FBBF24] hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-amber-200/80 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] border-2 border-amber-400 uppercase tracking-wide"
              >
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-xs">
                  <Play className="w-4 h-4 text-amber-700 fill-amber-700 ml-0.5" />
                </div>
                <span>Escuchar Pieza Musical en Suno AI</span>
                <ExternalLink className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-xs text-slate-500 font-medium">
                URL Verificada: <code className="text-[11px] font-bold text-amber-950 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">https://suno.com/s/YzwmERjxkOTtLkJC</code>
              </p>
            </div>
          </div>

          {/* Guía Didáctica Docente de 3 Pasos */}
          <div className="lg:col-span-5 bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-[#38BDF8]/10 text-[#0284c7] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Guía Didáctica Docente de Uso
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Orientaciones pedagógicas estructuradas en 3 momentos
                </p>
              </div>
            </div>

            {/* Step Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setGuideStep('before')}
                className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                  guideStep === 'before'
                    ? 'bg-white text-sky-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Antes
              </button>
              <button
                type="button"
                onClick={() => setGuideStep('during')}
                className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                  guideStep === 'during'
                    ? 'bg-white text-amber-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Durante
              </button>
              <button
                type="button"
                onClick={() => setGuideStep('after')}
                className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                  guideStep === 'after'
                    ? 'bg-white text-emerald-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3. Después
              </button>
            </div>

            {/* Dynamic Step Content */}
            <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/80 min-h-[160px] flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                <h4 className="text-sm font-black text-slate-900">
                  {SONG_LYRICS.stepsGuide[guideStep].title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {SONG_LYRICS.stepsGuide[guideStep].description}
              </p>
            </div>

            {/* Inclusion note for TEA */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <span className="font-black flex items-center gap-1.5 text-emerald-950 uppercase tracking-wider text-[11px]">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                Adecuación Inclusiva (TEA / Hipersensibilidad):
              </span>
              <p className="text-xs text-emerald-900/90 leading-relaxed font-normal">
                Modular el volumen a niveles medios-bajos. Permitir el uso de auriculares canceladores si el niño lo requiere y anticipar visualmente los cambios de ritmo con tarjetas ilustradas.
              </p>
            </div>
          </div>
        </div>

        {/* Sección Colapsable/Acordeón: Letra de la Canción y Guía de Expresión Corporal */}
        <div className="bg-white rounded-[36px] border border-slate-100 shadow-xl overflow-hidden">
          <button
            type="button"
            onClick={() => setLyricsOpen(!lyricsOpen)}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#0284c7] flex items-center justify-center shrink-0">
                <Volume2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Letra de la Canción y Guía de Expresión Corporal
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Estructura rítmica, consignas motrices y pausas de autorregulación
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-700">
              {lyricsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {lyricsOpen && (
            <div className="px-6 pb-8 sm:px-8 border-t border-slate-100 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SONG_LYRICS.verses.map((verse) => (
                  <div 
                    key={verse.verseNumber}
                    className="p-5 rounded-[28px] bg-slate-50/80 border border-slate-200/80 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] bg-[#38BDF8]/15 px-3 py-0.5 rounded-full border border-sky-200">
                        {verse.verseNumber}
                      </span>
                    </div>

                    {/* Lyrics lines */}
                    <div className="space-y-1 font-semibold text-slate-800 text-xs sm:text-sm italic pl-3 border-l-3 border-[#FBBF24]">
                      {verse.lyrics.map((line, lIdx) => (
                        <p key={lIdx}>{line}</p>
                      ))}
                    </div>

                    {/* Psychomotor Movement action */}
                    <div className="pt-2.5 border-t border-slate-200 text-xs text-slate-600">
                      <span className="font-black text-slate-900 uppercase tracking-wider text-[10px]">Acción Corporal: </span>
                      <span>{verse.movementAction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
