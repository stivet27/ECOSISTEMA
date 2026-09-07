import React from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { InfographicModule } from './components/InfographicModule';
import { TheoryModule } from './components/TheoryModule';
import { PracticeModule } from './components/PracticeModule';
import { QuizModule } from './components/QuizModule';
import { MusicModule } from './components/MusicModule';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Fixed / Sticky Navigation Header */}
      <HeaderNav />

      {/* Main Container */}
      <main className="flex-1">
        {/* PORTADA Y BIENVENIDA INSTITUCIONAL + RUTA FORMATIVA */}
        <HeroSection />

        {/* 1. EXPLORACIÓN CONCEPTUAL — INFOGRAFÍA */}
        <InfographicModule />

        {/* 2. CONSTRUCCIÓN Y TEORÍA — COMPENDIO ACADÉMICO Y CANVA */}
        <TheoryModule />

        {/* 3. PRÁCTICA INTERACTIVA Y MODELADO — TUTOR IA & MICROCLASE */}
        <PracticeModule />

        {/* 4. EVALUACIÓN FORMATIVA — QUIZ LÚDICO INTERACTIVO */}
        <QuizModule />

        {/* 5. PIEZA MUSICAL — AL FINAL DE LA RUTA FORMATIVA */}
        <MusicModule />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
