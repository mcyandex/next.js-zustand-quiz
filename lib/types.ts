export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Quizz {
  title: string;
  icon: string;
  questions: Question[];
}
