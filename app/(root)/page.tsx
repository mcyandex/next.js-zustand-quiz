"use client";
import Game from "@/components/game";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Subjects from "@/components/subjects";
import { useQuestionStore } from "@/store/quiz-store";
import { useEffect } from "react";

export default function Home() {
  const fetchQuizzes = useQuestionStore((state) => state.fetchQuizzes);
  const quizzes = useQuestionStore((state) => state.quizzes);
  const selectedQuizz = useQuestionStore((state) => state.selectedQuizz);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <MaxWidthWrapper className="grid px-6 grid-cols-1 md:grid-cols-2 gap-10 lg:px-0 relative z-50 h-full">
      {!selectedQuizz && (
        <>
          <div className="flex flex-col xs:gap-4 md:gap-10">
            <h1 className="xs:text-4xl md:text-5xl font-normal text-dark-blue dark:text-white">
              Welcome to the <span className="font-bold">Frontend Quizz!</span>
            </h1>
            <p className="text-gray-navy italic dark:text-light-blue xs:text-sm">
              Pick a subject to get started.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 justify-center w-full">
            <Subjects data={quizzes} />
          </div>
        </>
      )}
      {selectedQuizz && <Game />}
    </MaxWidthWrapper>
  );
}
