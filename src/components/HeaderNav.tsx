import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Music, 
  Image as ImageIcon, 
  BookOpen, 
  Bot, 
  Award, 
  GraduationCap
} from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Portada', href: '#modulo-0', icon: GraduationCap },
    { label: 'Infografía', href: '#modulo-infografia', icon: ImageIcon },
    { label: 'Compendio T2', href: '#modulo-compendio', icon: BookOpen },
    { label: 'Tutor & Avatar T3', href: '#modulo-practica', icon: Bot },
    { label: 'Quiz', href: '#modulo-quiz', icon: Award },
    { label: 'Pieza Musical', href: '#modulo-musica', icon: Music, highlight: true }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-xs transition-all">
      {/* Top micro-banner */}
      <div className="bg-gradient-to-r from-[#0e2b4c] via-[#16426f] to-[#0e2b4c] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide text-amber-300">UNEMI POSGRADOS</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-200">Maestría en Educación Inicial • Grupo 11</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-amber-200/90 font-medium">
            <span>Docente: Felipe Emiliano Arévalo Cordovilla</span>
            <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2 py-0.5 rounded-full">
              Fase 2 Verificada
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name with Bold Typography */}
          <a href="#modulo-0" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-sky-200 group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl">
                  Ecosistema <span className="text-[#38BDF8]">Lúdico</span>
                </span>
                <span className="bg-[#38BDF8]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-sky-200">
                  Grupo 11
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider line-clamp-1">
                UNEMI • El juego en el desarrollo integral
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-slate-600">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                    item.highlight
                      ? 'bg-[#FBBF24]/20 text-amber-950 border-2 border-[#FBBF24] font-extrabold hover:bg-[#FBBF24]/30 shadow-xs'
                      : 'hover:text-[#38BDF8] hover:bg-sky-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.highlight ? 'text-amber-700' : 'text-[#38BDF8]'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Direct Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#modulo-quiz"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold rounded-2xl bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-200 transition-all active:scale-95 tracking-wide"
            >
              <Award className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Realizar Quiz</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-slate-700 hover:bg-sky-50 hover:text-[#38BDF8] transition-colors border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-sky-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                  item.highlight
                    ? 'bg-amber-50 text-amber-900 border border-amber-200 font-semibold'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.highlight ? 'text-amber-600' : 'text-sky-500'}`} />
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
