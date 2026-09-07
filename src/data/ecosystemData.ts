import { TeamMember, OfficialLink, PedagogicalAxis, QuizQuestion, ChecklistItem, RubricAlignment } from '../types';

export const INSTITUTIONAL_DATA = {
  institution: 'Universidad Estatal de Milagro (UNEMI) - Posgrados',
  program: 'Maestría en Educación Inicial, Mención en Innovación en el Desarrollo Infantil',
  modulePhase: 'B. Fase 2: Implementación del ecosistema de aprendizaje e integración de recursos (T1, T2 y T3 + música)',
  group: 'Grupo 11',
  unit: 'El juego y su aporte al desarrollo integral en Educación Inicial',
  professor: 'Felipe Emiliano Arévalo Cordovilla',
  academicYear: '2025 - 2026',
  slogan: 'La mejor versión de ti'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Lescano Reino Ivette Alexandra',
    role: 'Maestrante - Investigadora Pedagógica',
    avatar: '👩‍🏫'
  },
  {
    name: 'Londoño Urrego Marly Julieth',
    role: 'Maestrante - Coordinadora de Recursos Didácticos',
    avatar: '👩‍🎓'
  },
  {
    name: 'Lucero Morales Nely Margoth',
    role: 'Maestrante - Especialista en Inclusión y Diversidad',
    avatar: '👩‍🏫'
  },
  {
    name: 'Macas Hidalgo Bertha Susana',
    role: 'Maestrante - Diseñadora de Experiencias Lúdicas',
    avatar: '👩‍🎓'
  }
];

export const OFFICIAL_LINKS: OfficialLink[] = [
  {
    id: 'fase1-musica',
    name: 'Pieza Musical Infantil en Suno AI',
    task: 'Fase 1: Activación Sonora',
    platform: 'Suno AI Music',
    url: 'https://suno.com/s/YzwmERjxkOTtLkJC',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Activación motriz, predisposición afectiva y estimulación auditiva previa a la clase.',
    iconName: 'Music'
  },
  {
    id: 't1-infografia',
    name: 'Infografía Síntesis del Juego',
    task: 'Tarea 1: Síntesis Visual',
    platform: 'Google Drive / Repositorio UNEMI',
    url: 'https://drive.google.com/file/d/1gQvT1_infografia_juego_unemi/view?usp=sharing',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Anclaje visual y activación de saberes previos sobre las 4 dimensiones del juego.',
    iconName: 'Image'
  },
  {
    id: 't2-canva',
    name: 'Presentación Interactiva en Canva',
    task: 'Tarea 2: Construcción Conceptual',
    platform: 'Canva Presentations',
    url: 'https://canva.link/mlo6gw9lf2nk2fi',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Exposición visual interactiva de los 4 ejes teóricos y metodologías activas.',
    iconName: 'Presentation'
  },
  {
    id: 't2-compendio',
    name: 'Compendio Académico Completo (PDF)',
    task: 'Tarea 2: Documento Científico',
    platform: 'Google Drive / Repositorio UNEMI',
    url: 'https://drive.google.com/file/d/1_compendio_academico_tarea2_unemi/view?usp=sharing',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Fundamentación pedagógica rigurosa con citas IEEE, investigación de aula y anexos.',
    iconName: 'FileText'
  },
  {
    id: 't3-elevenlabs',
    name: 'Tutor Conversacional Inteligente',
    task: 'Tarea 3: Interacción Guiada',
    platform: 'ElevenLabs Conversational AI',
    url: 'https://elevenlabs.io/app/talk-to?agent_id=agent_5101m1derdrkfrat3tasd64gymcd&branch_id=agtbrch_7401m1derfvveh2aq9h2vg2ar51a',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Andamiaje dialógico en tiempo real para docentes y familias sobre estrategias de juego.',
    iconName: 'Bot'
  },
  {
    id: 't3-heygen',
    name: 'Microclase con Avatar Inteligente',
    task: 'Tarea 3: Modelado Audiovisual',
    platform: 'HeyGen Interactive Video',
    url: 'https://app.heygen.com/videos/v-deo-de-avatar-905680d2ef264886942d59a93cbc87dc',
    status: 'Acceso Público Verificado',
    protocol: 'HTTPS',
    pedagogicalRole: 'Transposición didáctica y modelado audiovisual guiado para la implementación en el aula.',
    iconName: 'Video'
  }
];

export const FORMATIVE_ROUTE_STEPS = [
  {
    step: 1,
    title: 'Exploración Conceptual',
    subtitle: 'Infografía de Síntesis',
    description: 'El Viaje de la IA: Transformando la Educación del Siglo XXI y sus pilares inclusivos.',
    targetId: 'modulo-infografia',
    color: 'from-sky-100 to-sky-200 border-sky-300 text-sky-900',
    icon: 'FileImage'
  },
  {
    step: 2,
    title: 'Construcción Teórica',
    subtitle: 'Compendio Académico & Canva',
    description: 'Análisis de los 4 ejes pedagógicos, inclusión, neurodiversidad y metodologías activas.',
    targetId: 'modulo-compendio',
    color: 'from-emerald-100 to-emerald-200 border-emerald-300 text-emerald-900',
    icon: 'BookOpen'
  },
  {
    step: 3,
    title: 'Práctica y Modelado',
    subtitle: 'Tutor IA & Microclase',
    description: 'Interacción dialógica con ElevenLabs y avatar docente guiado en HeyGen.',
    targetId: 'modulo-practica',
    color: 'from-indigo-100 to-indigo-200 border-indigo-300 text-indigo-900',
    icon: 'Sparkles'
  },
  {
    step: 4,
    title: 'Evaluación Formativa',
    subtitle: 'Quiz Lúdico Interactivo',
    description: '10 preguntas pedagógicas con retroalimentación inmediata y resultado motivador.',
    targetId: 'modulo-quiz',
    color: 'from-rose-100 to-rose-200 border-rose-300 text-rose-900',
    icon: 'Award'
  },
  {
    step: 5,
    title: 'Pieza Musical',
    subtitle: 'Activación Sonora y Motriz',
    description: 'Sintonización auditiva, movimiento corporal guiado y predisposición lúdica.',
    targetId: 'modulo-musica',
    color: 'from-amber-100 to-amber-200 border-amber-300 text-amber-900',
    icon: 'Music'
  }
];

export const PEDAGOGICAL_AXES: PedagogicalAxis[] = [
  {
    id: 'eje-1',
    number: 'EJE 1',
    title: 'El Juego como Recurso Pedagógico Central',
    shortTitle: 'Recurso Pedagógico & Metodologías Activas',
    tag: 'Metodologías Activas & Rol Docente',
    color: 'sky',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-300',
    accentText: 'text-sky-800',
    concepts: 'El juego transforma la arquitectura del aprendizaje: el niño deja de ser un receptor pasivo y se convierte en agente activo constructor de su propio conocimiento. Su valor pedagógico no depende de la sofisticación técnica, sino de la intencionalidad docente, la organización del espacio, el tiempo suficiente y la mediación sensible.',
    implications: 'En la transición hacia la educación básica, se debe evitar la fragmentación de la jornada escolar en sesiones rígidas de corta duración que cortan el flujo de descubrimiento infantil. La organización del aula por rincones temáticos permite dar continuidad a proyectos durante varios días consecutivos.',
    exampleApplied: 'Organización del rincón temático "La Comunidad": Los niños manipulan elementos cotidianos, asumen roles sociales y resuelven desafíos surgidos espontáneamente. La docente no impone un libreto o guion cerrado, sino que formula preguntas abiertas y estimula la verbalización reflexiva.',
    recommendations: [
      'Mantener los rincones temáticos disponibles durante varios días para permitir proyectos profundos.',
      'Actuar como guía y mediador, registrando estrategias infantiles sin sustituir su iniciativa.',
      'Garantizar materiales abiertos, accesibles y organizados al alcance visual de niñas y niños.'
    ],
    citations: ['Caicedo-Briseño et al., 2025 [7]', 'Collantes et al., 2025 [2]']
  },
  {
    id: 'eje-2',
    number: 'EJE 2',
    title: 'Juego Simbólico y Desarrollo de Habilidades Cognitivas',
    shortTitle: 'Juego Simbólico & Hipótesis Infantiles',
    tag: 'Flexibilidad Cognitiva & Representación',
    color: 'amber',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-300',
    accentText: 'text-amber-800',
    concepts: 'El juego simbólico opera como una secuencia ininterrumpida de ensayos intelectuales: la niña o niño formula hipótesis, prueba posibilidades ("¿qué pasa si...?"), evalúa consecuencias y adapta su pensamiento a realidades nuevas. Moviliza la imaginación, la anticipación y la flexibilidad mental constructivista.',
    implications: 'Preservar los espacios de representación simbólica incluso cuando aumentan las exigencias de instrucción formal en niveles superiores. El juego simbólico afianza la capacidad abstracta y la autorregulación cognitiva indispensable para el aprendizaje de la lectoescritura.',
    exampleApplied: 'Si un niño decide usar una caja de cartón como nave espacial o teléfono y otro propone que sea un horno de pan, la docente media preguntando: "¿Cómo podríamos hacer para que sirva para ambos viajes?", invitando a probar hipótesis y negociar creativamente la regla.',
    recommendations: [
      'Incorporar materiales no estructurados (cajas, telas, tubos, conos) que maximicen la representación.',
      'Formular preguntas de andamiaje: "¿Qué crees que pasará si cambiamos de rol?"',
      'Observar y documentar las hipótesis que surgen de manera espontánea en el juego.'
    ],
    citations: ['Caicedo-Briseño et al., 2025 [7]', 'Ríos Lasso et al., 2025 [1]']
  },
  {
    id: 'eje-3',
    number: 'EJE 3',
    title: 'Juego Cooperativo e Inclusión Educativa',
    shortTitle: 'Juego Cooperativo, Inclusión & TEA',
    tag: 'Andamiaje Social & Neurodiversidad',
    color: 'emerald',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-300',
    accentText: 'text-emerald-800',
    concepts: 'El juego cooperativo se fundamenta en metas compartidas, negociación de roles, escucha activa y complementariedad. Constituye la vía pedagógica privilegiada para derribar barreras actitudinales y materializar la inclusión plena de niñas y niños con discapacidades o con Trastornos del Espectro Autista (TEA).',
    implications: 'Evitar reducir el juego en equipo a una simple distribución mecánica de tareas. El docente debe implementar "andamiaje social": estructurar roles grupales flexibles adaptados a las fortalezas de cada niño y apoyados con anticipación visual (pictogramas y rutinas claras).',
    exampleApplied: 'En el desafío de construir un puente o circuito de bloques, se asignan roles flexibles: seleccionador de materiales, ensamblador, verificador de estabilidad y comunicador del orden. Para niños con dificultades de lenguaje o TEA, se utilizan tarjetas visuales que guían su participación segura y respetada.',
    recommendations: [
      'Priorizar siempre metas lúdicas compartidas sobre competencias eliminatorias o premios al primero.',
      'Usar apoyos visuales y modelado previo para anticipar transiciones y evitar la sobrecarga sensorial.',
      'Cerrar con asambleas reflexivas breves donde el grupo verbalice cómo se apoyaron mutuamente.'
    ],
    citations: ['Rodríguez Mendoza & Sánchez Cruz, 2025 [5]', 'Ríos Lasso et al., 2025 [1]', 'Ruiz Piza et al., 2025 [8]']
  },
  {
    id: 'eje-4',
    number: 'EJE 4',
    title: 'Juegos Didácticos para el Lenguaje y Juegos Motores',
    shortTitle: 'Lenguaje Oral, Conciencia Fonológica & Psicomotricidad',
    tag: 'Andamiaje Digital Crítico & Circuitos Sensoriales',
    color: 'purple',
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-300',
    accentText: 'text-purple-800',
    concepts: 'Subtema 1 (Lenguaje): Experiencias estructuradas de rimas, secuencias narrativas y alfabetización emergente; la tecnología digital actúa como andamiaje complementario sin sustituir la mediación docente viva. Subtema 2 (Motores): Desplazamientos, estimulación sensorial, autorregulación y coordinación psicomotriz mediante circuitos sensoriales internos adaptables a espacios reducidos.',
    implications: 'Frente a las brechas digitales y de infraestructura, la intencionalidad pedagógica prevalece. Los circuitos sensoriales internos con puntos de referencia visibles y pictogramas brindan previsibilidad, reducen la ansiedad en niños con TEA y potencian la psicomotricidad en cualquier contexto.',
    exampleApplied: 'Circuito sensorial de 4 estaciones: Estación 1: Texturas y rompecabezas táctil; Estación 2: Huellas de pies y equilibrio motriz; Estación 3: Transporte seguro de objetos; Estación 4: Pausa de respiración ("oler la flor y soplar la vela") antes de reorganizarse.',
    recommendations: [
      'Combinar tarjetas narrativas con registros orales mediante tablets sin desplazar la dramatización.',
      'Diseñar circuitos con instrucciones gráficas visibles, estaciones seguras y tiempos elásticos.',
      'Integrar pausas conscientes de autorregulación motriz y respiratoria en cada sesión.'
    ],
    citations: ['Erminia, Chisag & Peña, 2024 [10]', 'Ilbay, 2025 [11]', 'Alvear-Diaz et al., 2025 [6]', 'Zambrano et al., 2024 [12]']
  }
];

export const SUGGESTED_ACTIVITIES = [
  {
    title: 'Actividad 1: "Rincón de Historias Compartidas"',
    purpose: 'Fortalecer el juego simbólico, el lenguaje oral enriquecido, la escucha activa y la cooperación.',
    development: 'La docente organiza un rincón temático con imágenes de secuencias, títeres y materiales cotidianos. Los niños exploran recursos y eligen roles. Construyen una historia colectiva ordenando tarjetas visuales y representando escenas dramáticas. Se admiten múltiples formas de comunicación (oral, gestual, pictogramas PECS).',
    evidences: 'Participación activa en la representación, formulación espontánea de ideas, respeto de turnos de conversación, estructuración de secuencias temporales y acogida de las propuestas de pares.'
  },
  {
    title: 'Actividad 2: "Circuito Cooperativo de Exploración"',
    purpose: 'Desarrollar habilidades físicas, coordinación visomotriz, orientación espacial, autorregulación y ayuda mutua.',
    development: 'Circuito interno en el aula con 4 estaciones sensoriales señalizadas. Grupos pequeños asumen roles rotativos (encargado de piezas, verificador de turno, comunicador). Se incluye anticipación visual, modelado previo y pausas de respiración para acompañar a niños con TEA o hipersensibilidad.',
    evidences: 'Coordinación postural, respeto de acuerdos grupales, ayuda solidaria ante dificultades motrices y uso autónomo de estrategias de autorregulación emocional.'
  }
];

export const SONG_LYRICS = {
  title: 'El Juego es Mágico para Crecer',
  style: 'Canción lúdica infantil, rítmica, alegre y estimulante (Pop Infantil / Ronda)',
  pedagogicalObjective: 'Activación motriz, predisposición afectiva y estimulación auditiva previa a la clase.',
  stepsGuide: {
    before: {
      title: '1. Antes (Escucha atenta y predisposición)',
      description: 'Sentados en asamblea o ronda en el suelo, la docente invita a cerrar los ojos y escuchar los primeros acordes. Pregunta orientadora: "¿Qué instrumentos escuchan? ¿Cómo se mueve nuestro corazón con este ritmo?".'
    },
    during: {
      title: '2. Durante (Imitación corporal y movimiento guiado)',
      description: 'Los niños siguen las consignas motrices de la letra: palmas arriba, giros suaves, saltos con pies juntos y respiración profunda. El docente modela los movimientos respetando el ritmo y posibilidades de cada niño.'
    },
    after: {
      title: '3. Después (Reflexión afectiva en asamblea)',
      description: 'Pausa de respiración consciente. Los niños expresan cómo se sintieron: "¡Sentí energía!", "¡Sentí cosquillas de alegría!". Se enlaza la emoción positiva con la actividad conceptual que sigue.'
    }
  },
  verses: [
    {
      verseNumber: 'Estrofa 1 (Despertar del cuerpo)',
      lyrics: [
        '¡Un paso adelante, un salto hacia el sol!',
        'Mis manos saludan con ritmo y color.',
        'Muevo mi cabeza, miro alrededor,',
        '¡hoy vamos a jugar con todo el corazón!'
      ],
      movementAction: 'Movimiento cefalocaudal: cabeceo suave, balanceo de hombros y estiramiento hacia arriba con ambas manos.'
    },
    {
      verseNumber: 'Coro (Energía y cooperación)',
      lyrics: [
        'El juego es un puente, es imaginación,',
        'yo pienso, yo siento, ¡crezco con amor!',
        'Dame tú la mano, ven a compartir,',
        'juntos aprendemos para ser feliz.'
      ],
      movementAction: 'Desplazamiento circular suave, tomarse de las manos o hacer contacto visual y aplaudir al compás.'
    },
    {
      verseNumber: 'Estrofa 2 (Juego simbólico y roles)',
      lyrics: [
        'Hoy soy un doctor, un ave que vuela,',
        'un gran arquitecto que cuida su escuela.',
        'Construyo caminos de magia y verdad,',
        '¡mi mente inventa con libertad!'
      ],
      movementAction: 'Postura corporal de vuelo (brazos abiertos), luego imitación de colocar bloques firmes en el suelo.'
    },
    {
      verseNumber: 'Puente & Calma (Autorregulación)',
      lyrics: [
        'Respiro la flor... (inhala suave),',
        'soplo la vela... (exhala lento).',
        'Mi cuerpo está listo, sereno y contento.',
        '¡A explorar!'
      ],
      movementAction: 'Pausa de respiración diafragmática: manos sobre el vientre, inhalación nasal profunda y soplo suave prolongado.'
    }
  ]
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuál es el rol pedagógico principal de la mediación docente en el juego simbólico?',
    options: [
      {
        letter: 'A',
        text: 'Imponer un guion rígido y reglas inflexibles.'
      },
      {
        letter: 'B',
        text: 'Diseñar ambientes seguros, formular preguntas abiertas y respetar la iniciativa infantil.'
      },
      {
        letter: 'C',
        text: 'Eliminar los rincones temáticos para evitar distracciones.'
      }
    ],
    correctAnswer: 'B',
    justification: 'El docente acompaña sin sustituir el descubrimiento ni la formulación de hipótesis del niño. Su función es crear ambientes enriquecidos y andamiar con preguntas reflexivas.'
  },
  {
    id: 2,
    question: 'Para atender la neurodiversidad (ej. niños con TEA) en el juego cooperativo, la mejor estrategia es:',
    options: [
      {
        letter: 'A',
        text: 'Fomentar la competencia rápida premiando al primer lugar.'
      },
      {
        letter: 'B',
        text: 'Implementar andamiaje social mediante roles flexibles adaptados a fortalezas y apoyos visuales.'
      },
      {
        letter: 'C',
        text: 'Excluirlos de las actividades grupales hasta que dominen las reglas formales.'
      }
    ],
    correctAnswer: 'B',
    justification: 'Facilita la participación equitativa y reduce barreras comunicativas y sensoriales mediante anticipación y complementariedad solidaria.'
  },
  {
    id: 3,
    question: '¿Cómo deben concebirse los recursos tecnológicos y digitales en la Educación Inicial?',
    options: [
      {
        letter: 'A',
        text: 'Como sustitutos totales de la interacción cara a cara y el juego corporal.'
      },
      {
        letter: 'B',
        text: 'Como andamiaje digital complementario con intencionalidad pedagógica clara.'
      },
      {
        letter: 'C',
        text: 'Como herramientas reservadas exclusivamente para pruebas de opción múltiple.'
      }
    ],
    correctAnswer: 'B',
    justification: 'La tecnología potencia el lenguaje, la motivación y la conciencia fonológica cuando responde a un propósito claro, pero nunca reemplaza la mediación docente ni la corporalidad.'
  },
  {
    id: 4,
    question: '¿Qué beneficio aportan los circuitos sensoriales internos estructurados en el aula?',
    options: [
      {
        letter: 'A',
        text: 'Favorecen la coordinación motriz y la autorregulación mediante estaciones visibles, adaptándose a espacios reducidos.'
      },
      {
        letter: 'B',
        text: 'Exigen que todos los niños realicen los desplazamientos al mismo tiempo y sin pausas.'
      },
      {
        letter: 'C',
        text: 'Reemplazan la necesidad de materiales concretos por pantallas.'
      }
    ],
    correctAnswer: 'A',
    justification: 'Permiten trabajar la psicomotricidad respetando ritmos individuales y brindando puntos claros de referencia que disminuyen la sobrecarga sensorial.'
  },
  {
    id: 5,
    question: 'Desde una perspectiva constructivista, ¿cómo se comprende el juego simbólico en el desarrollo infantil?',
    options: [
      {
        letter: 'A',
        text: 'Como una simple copia pasiva de conductas adultas sin reflexión.'
      },
      {
        letter: 'B',
        text: 'Como una secuencia de ensayos intelectuales continuos donde el niño formula posibilidades, observa resultados y construye nuevas interpretaciones.'
      },
      {
        letter: 'C',
        text: 'Como una pérdida de tiempo pedagógico que debe reemplazarse por fichas de trabajo.'
      }
    ],
    correctAnswer: 'B',
    justification: 'El compendio establece que en el juego simbólico el niño ensaya soluciones y adapta su pensamiento a realidades nuevas, movilizando la imaginación, la anticipación y la flexibilidad cognitiva.'
  },
  {
    id: 6,
    question: '¿Qué dificultad metodológica mitiga la organización del aula por "rincones temáticos"?',
    options: [
      {
        letter: 'A',
        text: 'Evita la fragmentación de la experiencia infantil causada por sesiones rígidas de corta duración que cortan el flujo de descubrimiento.'
      },
      {
        letter: 'B',
        text: 'Elimina la necesidad de que el docente interactúe con los estudiantes.'
      },
      {
        letter: 'C',
        text: 'Impide que los estudiantes utilicen materiales cotidianos o reciclados.'
      }
    ],
    correctAnswer: 'A',
    justification: 'Los rincones temáticos permiten mantener disponibles los materiales y dar continuidad a los proyectos durante varios días consecutivos, respetando los procesos de indagación profunda.'
  },
  {
    id: 7,
    question: 'En el juego cooperativo, ¿qué objetivo persigue el "andamiaje social" propuesto por el compendio?',
    options: [
      {
        letter: 'A',
        text: 'Obligar a los estudiantes a competir entre sí para obtener incentivos externos.'
      },
      {
        letter: 'B',
        text: 'Asignar roles grupales comprensibles y valiosos ajustados a las fortalezas de cada niño para que el grupo aprenda a complementarse.'
      },
      {
        letter: 'C',
        text: 'Seleccionar únicamente a un líder que tome todas las decisiones del equipo.'
      }
    ],
    correctAnswer: 'B',
    justification: 'El andamiaje social permite que la diversidad en el aula no sea una barrera, sino una oportunidad pedagógica para aprender a cooperar, negociar y valorar las contribuciones de todos.'
  },
  {
    id: 8,
    question: 'En contextos con recursos o conectividad limitada, ¿cuál es la orientación pedagógica para los juegos de lenguaje?',
    options: [
      {
        letter: 'A',
        text: 'Suspender las actividades de lenguaje hasta contar con software y tabletas de última generación.'
      },
      {
        letter: 'B',
        text: 'Aprovechar juegos orales, dramatizaciones, secuencias de imágenes impresas y objetos del entorno con igual valor mediador.'
      },
      {
        letter: 'C',
        text: 'Limitarse a la repetición memorística de fonemas aislados.'
      }
    ],
    correctAnswer: 'B',
    justification: 'El objetivo formativo es desarrollar la intención comunicativa y el vocabulario auténtico. La mediación y los materiales concretos cumplen una función equivalente y esencial.'
  },
  {
    id: 9,
    question: '¿Por qué la continuidad pedagógica exige que el movimiento corporal no sea tratado como una interrupción del aprendizaje?',
    options: [
      {
        letter: 'A',
        text: 'Porque el movimiento apoya la orientación espacial, la coordinación, la autonomía y el equilibrio emocional mediante la autorregulación.'
      },
      {
        letter: 'B',
        text: 'Porque los niños solo prestan atención cuando están completamente inmóviles en sus pupitres.'
      },
      {
        letter: 'C',
        text: 'Porque la actividad física reemplaza la necesidad de desarrollar el lenguaje o el pensamiento.'
      }
    ],
    correctAnswer: 'A',
    justification: 'Las experiencias psicomotrices sostienen la disposición afectiva y cerebral para aprender; en niños con TEA, las rutinas motrices estructuradas reducen la ansiedad y aportan previsibilidad.'
  },
  {
    id: 10,
    question: 'Según las conclusiones y criterios de evaluación del compendio, ¿cómo debe ser concebida la evaluación en el juego?',
    options: [
      {
        letter: 'A',
        text: 'Como una prueba cuantitativa eliminatoria que clasifica a los niños de mejor a peor.'
      },
      {
        letter: 'B',
        text: 'Como una evaluación formativa y situada que observa procesos, avances y decide qué apoyos y ajustes requiere cada niño.'
      },
      {
        letter: 'C',
        text: 'Como un trámite administrativo que solo se realiza al finalizar el ciclo lectivo.'
      }
    ],
    correctAnswer: 'B',
    justification: 'No se trata de calificar el desempeño motor o lingüístico de forma aislada, sino de documentar el progreso en ambientes seguros mediante listas de cotejo, registros y observación continua.'
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: 1,
    criterion: 'Participa en el juego con iniciativa y comprende el propósito de la actividad.',
    status: null
  },
  {
    id: 2,
    criterion: 'Representa situaciones, propone alternativas o modifica sus acciones durante el juego simbólico.',
    status: null
  },
  {
    id: 3,
    criterion: 'Escucha, respeta turnos y coopera con al menos un compañero.',
    status: null
  },
  {
    id: 4,
    criterion: 'Utiliza palabras, gestos, imágenes u otro recurso para comunicar una idea o necesidad.',
    status: null
  },
  {
    id: 5,
    criterion: 'Sigue secuencias, consignas o referencias visuales con apoyos ajustados a su necesidad.',
    status: null
  },
  {
    id: 6,
    criterion: 'Coordina desplazamientos y manipula materiales de manera segura.',
    status: null
  },
  {
    id: 7,
    criterion: 'Identifica o utiliza una estrategia de autorregulación ante dificultades (ej. pausas, respiración).',
    status: null
  },
  {
    id: 8,
    criterion: 'Participa respetando la diversidad de ritmos y formas de comunicación del grupo.',
    status: null
  }
];

export const RUBRIC_ALIGNMENTS: RubricAlignment[] = [
  {
    criterion: '1. Fundamentación Teórica & Rigor Científico',
    description: 'Articulación explícita de los 4 ejes pedagógicos con sustento en fuentes indexadas contemporáneas (2024-2026).',
    evidence: 'Módulo 3 con citas IEEE completas ([1] a [12]), Banco de Evidencias y anexos metodológicos verificables.',
    moduleRef: 'Módulo 3: Teoría y Compendio'
  },
  {
    criterion: '2. Enfoque Inclusivo & Atención a la Neurodiversidad',
    description: 'Estrategias concretas para niños con TEA y barreras comunicativas mediante andamiaje social y apoyos visuales.',
    evidence: 'Propuesta explícita de roles flexibles, pictogramas en circuitos sensoriales y justificación en Eje 3.',
    moduleRef: 'Módulo 3 & Módulo 6'
  },
  {
    criterion: '3. Integración Tecnológica & Andamiaje Digital',
    description: 'Uso pedagógico crítico de recursos multimedia (música, tutor IA, avatar y diapositivas interactivas).',
    evidence: 'Recursos en Suno AI, Canva, ElevenLabs y HeyGen con objetivos de transposición didáctica documentados.',
    moduleRef: 'Módulo 1, Módulo 2 y Módulo 4'
  },
  {
    criterion: '4. Evaluación Formativa & Retroalimentación',
    description: 'Instrumentos aplicables para verificar la apropiación cognitiva y registrar procesos infantiles en el aula.',
    evidence: 'Quiz interactivo con justificación pedagógica inmediata y Lista de Cotejo de 8 criterios observables.',
    moduleRef: 'Módulo 5 & Módulo 6'
  },
  {
    criterion: '5. Calidad del Diseño UX/UI & Navegabilidad',
    description: 'Estructura estética, tierno y profesional con paleta pastel, responsive design y auditoría técnica inmediata.',
    evidence: 'Menú fijo superior, mapa de ruta formativa de 6 etapas, tabla de URLs verificadas con enlace HTTPS.',
    moduleRef: 'Módulo 0 y Navegación Global'
  }
];

export const COMPENDIO_FULL_TEXT = {
  title: 'UNIDAD 1: EL JUEGO Y SU APORTE AL DESARROLLO INTEGRAL EN EDUCACIÓN INICIAL',
  subtitle: 'Compendio Académico Oficial - Maestría en Educación Inicial UNEMI',
  executiveSummary: 'El juego constituye un recurso pedagógico central para promover el desarrollo integral en Educación Inicial, pues articula dimensiones cognitivas, sociales, comunicativas, físicas y emocionales. Su valor educativo depende de una intencionalidad clara, de la mediación docente y de la creación de ambientes que permitan explorar, representar, cooperar y moverse con seguridad. El juego simbólico favorece la elaboración de hipótesis y la adaptación del pensamiento; el cooperativo fortalece la interacción y la inclusión; los juegos didácticos apoyan el lenguaje y la alfabetización emergente; y los juegos motores contribuyen a la autonomía, la autorregulación y la psicomotricidad. La propuesta sostiene que las metodologías lúdicas deben responder a la diversidad del aula, incluida la neurodiversidad, sin reducirse a la incorporación de tecnología.',
  introduction: 'El propósito de este documento es analizar el juego como recurso pedagógico y presentar estrategias lúdicas orientadas al desarrollo integral de niñas y niños en Educación Inicial. El análisis se organiza en torno a cuatro subtemas: juego simbólico, juego cooperativo, juegos didácticos para el lenguaje y juegos motores para las habilidades físicas y psicomotrices. La pertinencia del tema se explica porque el juego no debe considerarse una actividad periférica o meramente recreativa, sino una vía para que el niño pase de la curiosidad a formas progresivas de pensamiento reflexivo mediante la exploración activa [7].',
  references: [
    {
      num: '[1]',
      text: 'R. Ríos Lasso, J. Moreira Benavides, E. A. Noboa Fray, y M. I. Betancourth Unuzungo, «Estrategias psicopedagógicas inclusivas para la atención a niños con discapacidades sensoriales en la educación inicial», Bastcorp International Journal, vol. 4, n.o 1, pp. 452-472, jun. 2025.'
    },
    {
      num: '[2]',
      text: 'M. Collantes, M. Morán, V. Lino, y I. Orta, «La percepción docente sobre la enseñanza tradicional frente a la integración de herramientas tecnológicas en educación inicial», InnovaSciT, vol. 3, n.o 2, nov. 2025.'
    },
    {
      num: '[3]',
      text: 'M. Alexandra et al., «Digital technology and the development of early childhood skills in early education», vol. 1, n.o 1, pp. 162-178, 2026.'
    },
    {
      num: '[4]',
      text: 'Sanipatin Potosi Blanca Yolanda, «EL MODELO STEAM COMO ENFOQUE PEDAGÓGICO INNOVADOR EN LA EDUCACIÓN INICIAL DE ECUADOR», CHAKIÑAN, n.o 26, pp. 256-272, ene. 2025.'
    },
    {
      num: '[5]',
      text: 'M. K. Rodríguez Mendoza y L. Sánchez Cruz, «Estrategias metodológicas para la inclusión educativa de los niños con trastornos del espectro autista en educación inicial, Portoviejo, Ecuador», Uniandes Episteme, vol. 12, n.o 2, pp. 173-182, abr. 2025.'
    },
    {
      num: '[6]',
      text: 'O. L. Alvear-Diaz, S. D. Caicedo-Villamarin et al., «Tecnologías digitales en la educación inicial: Percepciones docentes y su aplicación en el aprendizaje de lectoescritura», Ciencia y Método, vol. 3, n.o 3, pp. 309-321, ago. 2025.'
    },
    {
      num: '[7]',
      text: 'S. S. Caicedo-Briseño, M. C. Chimbo-Tapuy, X. L. Ramírez-Huanca, M. J. Veloz-Cevallos, y A. F. Núñez-Naranjo, «El aprendizaje a través de la exploración: metodologías activas en educación inicial», Retos de la Ciencia, vol. 1, n.o 5, pp. 1-13, mar. 2025.'
    },
    {
      num: '[8]',
      text: 'A. L. Ruiz Piza, J. A. Coello Zambrano et al., «La inteligencia emocional como eje pedagógico en niños de educación inicial», Rev. Ecuatoriana de Psicología, vol. 8, n.o 22, pp. 382-397, nov. 2025.'
    },
    {
      num: '[9]',
      text: 'A. C. Quesada Monge, «Innovación educativa desde la perspectiva sociocultural: componentes contextuales y teóricos en una Carrera de Educación Inicial», Rev. Educación, pp. 1-22, ene. 2025.'
    },
    {
      num: '[10]',
      text: 'M. Erminia, R. Chisag, y P. M. Peña, «Estrategia didáctica para el desarrollo del lenguaje oral en educación inicial», 2024.'
    },
    {
      num: '[11]',
      text: 'E. L. Ilbay, «Estrategias lúdicas guiadas para fortalecer el desarrollo verbal infantil en docentes de educación inicial», Ethos Scientific Journal, vol. 3, n.o 1, pp. 75-88, may 2025.'
    },
    {
      num: '[12]',
      text: 'B. J. Zambrano Vergara et al., «Estrategias de Gestión de Aula para Fomentar el Aprendizaje Autónomo en la Educación Inicial», Ciencia Latina, vol. 8, n.o 3, pp. 5379-5406, jul. 2024.'
    }
  ]
};
