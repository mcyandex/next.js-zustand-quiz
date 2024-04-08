export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  isCorrectUserAnswer?: boolean | null;
  userSelectedAnswer?: string | null;
}

export interface Quizz {
  title: string;
  icon: string;
  questions: Question[];
}
