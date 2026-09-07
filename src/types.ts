export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface OfficialLink {
  id: string;
  name: string;
  task: string;
  platform: string;
  url: string;
  status: 'Acceso Público Verificado';
  protocol: 'HTTPS';
  pedagogicalRole: string;
  iconName: string;
}

export interface PedagogicalAxis {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tag: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  concepts: string;
  implications: string;
  exampleApplied: string;
  recommendations: string[];
  citations: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    letter: 'A' | 'B' | 'C';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C';
  justification: string;
}

export interface ChecklistItem {
  id: number;
  criterion: string;
  status: 'logrado' | 'en_proceso' | 'requiere_apoyo' | null;
}

export interface RubricAlignment {
  criterion: string;
  description: string;
  evidence: string;
  moduleRef: string;
}
