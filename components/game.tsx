"use client";
import { useQuestionStore } from "@/store/quiz-store";
import CurrentQuestion from "./current-question";
import Answers from "./answers";

const Game = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } =
    useQuestionStore();
  const question = questions[currentQuestion];
  return (
    <>
      <div className="flex flex-col gap-2 lg:px-6">
        <p className="italic text-md text-gray-navy dark:text-light-blue">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <CurrentQuestion data={question} />
      </div>
      <div className="flex flex-col gap-y-4 justify-center w-full">
        <Answers
          data={question.options}
          questionId={question.id}
          handleAnswer={selectAnswer}
        />
        <button
          onClick={goNextQuestion}
          className="w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-white font-semibold text-lg text-center"
        >
          Submit Answer
        </button>
      </div>
    </>
  );
};

export default Game;
