import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/ecosystemData';
import { ConfettiEffect } from './ConfettiEffect';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy, 
  ChevronRight,
  Heart,
  Music,
  Flame,
  Check
} from 'lucide-react';

export const QuizModule: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [triggerConfetti, setTriggerConfetti] = useState<boolean>(false);

  const pointsPerQuestion = 10 / QUIZ_QUESTIONS.length;

  const handleSelectOption = (questionId: number, letter: 'A' | 'B' | 'C') => {
    if (showFeedback[questionId]) return;

    const updatedAnswers = { ...userAnswers, [questionId]: letter };
    const updatedFeedback = { ...showFeedback, [questionId]: true };

    setUserAnswers(updatedAnswers);
    setShowFeedback(updatedFeedback);

    // Check if all questions are answered
    if (Object.keys(updatedAnswers).length === QUIZ_QUESTIONS.length) {
      setIsCompleted(true);
      setTriggerConfetti(true);
      setTimeout(() => setTriggerConfetti(false), 4000);
    }
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += pointsPerQuestion;
      }
    });
    return score;
  };

  const getCorrectCount = () => {
    return QUIZ_QUESTIONS.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowFeedback({});
    setIsCompleted(false);
    setTriggerConfetti(false);
  };

  const currentScore = calculateScore();
  const correctCount = getCorrectCount();
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <section id="modulo-quiz" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <ConfettiEffect trigger={triggerConfetti} />

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Module Header with Bold Typography */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-900 border border-rose-300 shadow-2xs">
              <Award className="w-4 h-4 text-rose-600" />
              Evaluación Formativa
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                Puntaje Total: <strong className="text-rose-600 font-black">10.0 Puntos</strong>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Evaluación Formativa — <span className="text-rose-600">Quiz Lúdico Interactivo</span>
          </h2>

          {/* Explicit Pedagogical Purpose Box */}
          <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <p className="text-xs font-black text-rose-950 uppercase tracking-widest">
                Propósito Didáctico Formativo
              </p>
              <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                Comprueba y afianza tu apropiación pedagógica sobre el juego, la inclusión de neurodiversidad (TEA), 
                la mediación docente y el andamiaje tecnológico sustentado en el Compendio Académico de la Tarea 2. 
                Recibe retroalimentación inmediata, justificación teórica y un diagnóstico final motivador.
              </p>
            </div>
          </div>
        </div>

        {/* Live Score & Progress Tracker Bar */}
        <div className="bg-white rounded-[32px] border border-slate-100 p-5 sm:p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black shadow-2xs">
              <Trophy className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Progreso del Cuestionario</span>
              <p className="text-sm sm:text-base font-black text-slate-900">
                {answeredCount} de {QUIZ_QUESTIONS.length} preguntas respondidas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Aciertos:</span>
              <p className="text-sm font-black text-emerald-600">
                {correctCount} correctas
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Puntaje Acumulado:</span>
              <div className="text-2xl sm:text-3xl font-black text-rose-600">
                {currentScore.toFixed(1)} <span className="text-xs text-slate-400 font-bold">/ 10.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, index) => {
            const isAnswered = showFeedback[q.id];
            const chosen = userAnswers[q.id];
            const isCorrect = chosen === q.correctAnswer;

            return (
              <div 
                key={q.id}
                className="bg-white rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-xl space-y-5 transition-all"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-sky-100 text-[#0284c7] text-xs font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      Pregunta #{index + 1} de {QUIZ_QUESTIONS.length} • Valor: {pointsPerQuestion.toFixed(1)} pt
                    </span>
                  </div>

                  {isAnswered && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      isCorrect 
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                        : 'bg-rose-100 text-rose-900 border border-rose-300'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          +{pointsPerQuestion.toFixed(1)} Pts (Correcto)
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          0.0 Pts (Revisar)
                        </>
                      )}
                    </span>
                  )}
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
                  {q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2.5 pt-1">
                  {q.options.map((opt) => {
                    const isOptionChosen = chosen === opt.letter;
                    const isOptionCorrect = opt.letter === q.correctAnswer;

                    let btnStyles = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-300";
                    if (isAnswered) {
                      if (isOptionCorrect) {
                        btnStyles = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300/60";
                      } else if (isOptionChosen && !isOptionCorrect) {
                        btnStyles = "bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-200";
                      } else {
                        btnStyles = "bg-slate-50/50 border-slate-200 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={opt.letter}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q.id, opt.letter)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${btnStyles}`}
                      >
                        <span className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswered && isOptionCorrect
                            ? 'bg-emerald-500 text-white'
                            : isAnswered && isOptionChosen
                            ? 'bg-rose-500 text-white'
                            : 'bg-white border border-slate-300 text-slate-700'
                        }`}>
                          {opt.letter}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed flex-1 font-medium">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Pedagogical Feedback with Justification */}
                {isAnswered && (
                  <div className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm space-y-1.5 animate-fadeIn ${
                    isCorrect
                      ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                      : 'bg-amber-50/90 border-amber-200 text-amber-950'
                  }`}>
                    <div className="flex items-center gap-2 font-black uppercase tracking-wider text-xs">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Justificación Pedagógica Teórica:</span>
                    </div>
                    <p className="leading-relaxed pl-6 font-normal">
                      {q.justification}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOTIVATIONAL FINAL RESULT DASHBOARD */}
        {isCompleted && (
          <div className="bg-gradient-to-br from-amber-100/90 via-white to-sky-100/90 p-8 sm:p-12 rounded-[44px] border-2 border-amber-300 shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Header / Trophy */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-amber-400 text-white mx-auto flex items-center justify-center shadow-lg shadow-amber-200 animate-bounce">
                <Trophy className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black text-amber-900 uppercase tracking-widest bg-amber-200/80 px-4 py-1.5 rounded-full inline-block shadow-2xs">
                  🎉 ¡Evaluación Completada con Éxito!
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Calificación Final: <span className="text-rose-600">{currentScore.toFixed(1)}</span> / 10.0 Pts
                </h3>
              </div>
            </div>

            {/* Score Badges Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 text-center shadow-2xs">
                <span className="text-xs font-bold uppercase text-slate-500 block">Aciertos Totales</span>
                <span className="text-2xl font-black text-emerald-600">{correctCount} de {QUIZ_QUESTIONS.length}</span>
              </div>
              <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 text-center shadow-2xs">
                <span className="text-xs font-bold uppercase text-slate-500 block">Efectividad</span>
                <span className="text-2xl font-black text-sky-600">{((correctCount / QUIZ_QUESTIONS.length) * 100).toFixed(0)}%</span>
              </div>
              <div className="bg-white/90 p-4 rounded-2xl border border-amber-200 text-center shadow-2xs">
                <span className="text-xs font-bold uppercase text-slate-500 block">Nivel de Apropiación</span>
                <span className="text-base font-black text-amber-700">
                  {currentScore >= 9.0 ? 'Sobresaliente' : currentScore >= 7.0 ? 'Avanzado' : 'En Desarrollo'}
                </span>
              </div>
            </div>

            {/* Inspiring & Motivating Message Box */}
            <div className="p-6 sm:p-8 rounded-[32px] bg-white border-2 border-amber-300/80 shadow-md space-y-4 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4 text-rose-500" />
                Mensaje de Motivación Pedagógica
              </div>

              <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                {currentScore >= 9.0
                  ? '🌟 ¡Brillante maestría pedagógica! Has demostrado una comprensión sobresaliente del juego, la mediación docente y la neurodiversidad. Tu vocación y rigor académico son el motor que transforma la infancia. ¡Adelante con tu práctica en el aula!'
                  : currentScore >= 7.0
                  ? '👏 ¡Excelente desempeño y compromiso formativo! Posees bases teóricas sólidas para diseñar experiencias lúdicas inclusivas y significativas. ¡Sigue adelante, cada día estás más cerca de la excelencia docente!'
                  : '💪 ¡Gran esfuerzo y dedicación! El aprendizaje pedagógico es un camino continuo de exploración, ensayo y descubrimiento. Tienes todo el potencial para enriquecer la educación de los niños. ¡Confiamos plenamente en ti, sigue adelante con entusiasmo!'}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                “El juego no es un descanso del aprendizaje: es el aprendizaje en su forma más elevada, alegre e inclusiva.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-black uppercase tracking-wider border border-slate-300 shadow-sm transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4 text-slate-600" />
                <span>Intentar de Nuevo</span>
              </button>

              <a
                href="#modulo-musica"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-200 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Music className="w-4 h-4" />
                <span>Finalizar con la Pieza Musical</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
