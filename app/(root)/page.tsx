"use client";
import Game from "@/components/molecules/game";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";
import Score from "@/components/atoms/score";
import Subjects from "@/components/atoms/subjects";
import { useQuestionStore } from "@/store/quiz-store";
import { useEffect } from "react";

export default function Home() {
  const { fetchQuizzes, quizzes, selectedQuizz, hasCompleteAll, reset } =
    useQuestionStore();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <MaxWidthWrapper className="grid px-6 grid-cols-1 md:grid-cols-2 gap-10 lg:px-0 relative z-50 h-full">
      {!selectedQuizz && (
        <>
          <div className="flex flex-col xs:gap-4 md:gap-10 lg:mt-28">
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
      {selectedQuizz && hasCompleteAll === false && <Game />}
      {hasCompleteAll && (
        <>
          <div className="flex flex-col xs:gap-3 md:gap-6 h-full lg:mt-20">
            <h1 className="xs:text-4xl md:text-5xl font-normal text-dark-blue dark:text-white">
              Quizz Completed!
            </h1>
            <p className="xs:text-4xl md:text-5xl font-bold text-dark-blue dark:text-white">
              You scored...
            </p>
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            <Score />
            <button
              className="w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-white font-semibold text-lg text-center"
              onClick={reset}
            >
              Play Again
            </button>
          </div>
        </>
      )}
    </MaxWidthWrapper>
  );
}
