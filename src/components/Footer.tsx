import React from 'react';
import { INSTITUTIONAL_DATA, TEAM_MEMBERS } from '../data/ecosystemData';
import { ArrowUp, Sparkles, GraduationCap, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2b4c] text-white border-t-4 border-amber-400 mt-20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Institutional Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-[#0e2b4c] flex items-center justify-center font-black text-lg shadow-md shrink-0">
                UNEMI
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight uppercase text-white">
                  {INSTITUTIONAL_DATA.institution}
                </h4>
                <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                  {INSTITUTIONAL_DATA.program}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md font-normal">
              Ecosistema didáctico multimedia para la Unidad Curricular: 
              <strong className="text-white block mt-1 font-bold">"{INSTITUTIONAL_DATA.unit}"</strong>
              Desarrollado en la Fase 2 para promover el aprendizaje activo, la inclusión de la neurodiversidad y el andamiaje digital en la primera infancia.
            </p>

            <div className="flex items-center gap-2.5 pt-1 text-xs text-amber-300 font-black uppercase tracking-wider">
              <span>{INSTITUTIONAL_DATA.slogan}</span>
              <span>•</span>
              <span className="text-slate-300 font-bold">{INSTITUTIONAL_DATA.group}</span>
              <span>•</span>
              <span className="text-slate-300 font-bold">{INSTITUTIONAL_DATA.academicYear}</span>
            </div>
          </div>

          {/* Col 2: Maestrantes Authorship */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Equipo de Investigación • Grupo 11
            </h5>

            <ul className="space-y-2 text-xs text-slate-200">
              {TEAM_MEMBERS.map((m) => (
                <li key={m.name} className="flex items-center gap-2.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">Docente Evaluador:</span>
              <span className="text-xs font-black text-amber-300">
                {INSTITUTIONAL_DATA.professor}
              </span>
            </div>
          </div>

          {/* Col 3: Back to top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end space-y-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-2 text-xs font-black uppercase tracking-wider border border-white/10 active:scale-95"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-slate-400 text-left md:text-right font-medium">
              <span className="font-bold text-slate-300">Fase 2 de Implementación</span>
              <span className="block text-[10px] text-slate-500 mt-0.5 font-mono">Firebase Hosting Ready</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-normal">
            © {INSTITUTIONAL_DATA.academicYear} Universidad Estatal de Milagro (UNEMI) - Maestría en Educación Inicial.
          </p>
          <p className="flex items-center gap-1.5 font-normal">
            Diseñado con enfoque lúdico y pedagógico <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> para niñas y niños.
          </p>
        </div>
      </div>
    </footer>
  );
};
