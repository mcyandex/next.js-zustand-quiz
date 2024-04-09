"use client";
import { useQuestionStore } from "@/store/quiz-store";
import CurrentQuestion from "../atoms/current-question";
import Answers from "./answers";
import Progress from "../atoms/progress";

const Game = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } =
    useQuestionStore();
  const question = questions[currentQuestion];

  

  return (
    <>
      <div className="flex flex-col gap-2 lg:px-6 w-full max-h-96 lg:mt-16">
        <div className="flex flex-col gap-4">
          <p className="italic xs:text-sm md:text-md text-gray-navy dark:text-light-blue">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <CurrentQuestion data={question} />
        </div>
        <div className="xs:mt-2 lg:mt-auto">
          <Progress
            total={questions.length}
            currentIndex={currentQuestion + 1}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 justify-center w-full">
        <Answers
          data={question.options}
          questionId={question.id}
          handleAnswer={selectAnswer}
          goNextQuestion={goNextQuestion}
        />
      </div>
    </>
  );
};

export default Game;
