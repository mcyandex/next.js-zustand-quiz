"use client";
import { cn } from "@/lib/utils";
import { useQuestionStore } from "@/store/quiz-store";
import Image from "next/image";
import { useState } from "react";

type AnswersProps = {
  data: string[];
  handleAnswer: (questionId: number, answer: string) => void;
  questionId: number;
  goNextQuestion: () => void;
};

const Answers = ({
  data,
  handleAnswer,
  questionId,
  goNextQuestion,
}: AnswersProps) => {
  const [selectedAns, setSelectedAns] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { questions } = useQuestionStore();
  const isCorrectUserAnswer = questions.find(
    (q) => q.id === questionId
  )?.isCorrectUserAnswer;

  const answerLabels = ["A", "B", "C", "D"];
  console.log(!isCorrectUserAnswer);

  const handleSubmitAns = () => {
    handleAnswer(questionId, selectedAns);
    setSubmitted(true);
  };
  const handleSelectAnswer = (answer: string) => {
    if (submitted) return;
    if (selectedAns === answer) {
      setSelectedAns("");
      return;
    }
    setSelectedAns(answer);
  };
  const handleGoNextQuestion = () => {
    goNextQuestion();
    setSelectedAns("");
    setSubmitted(false);
  };
  return (
    <>
      <ul className="flex flex-col gap-y-4 justify-center w-full">
        {data.map((answer, index) => (
          <li key={answer}>
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={cn(
                selectedAns === answer && "ring-purple ring-1",
                isCorrectUserAnswer && selectedAns === answer && "ring-green",

                "w-full flex items-center gap-x-4 group bg-[#fff] dark:bg-slate py-4 px-5 rounded-xl shadow-lg hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white text-center",
                isCorrectUserAnswer === false && selectedAns === answer && "ring-red"
              )}
            >
              <span
                className={cn(
                  selectedAns === answer
                    ? "bg-purple text-white"
                    : "bg-white dark:text-dark-blue group-hover:text-purple group-hover:bg-[#F6E7FF] transition-all",
                  "text-lg rounded-lg py-2 px-4  ",
                  isCorrectUserAnswer === false && selectedAns === answer && "bg-red",
                  isCorrectUserAnswer && selectedAns === answer && "bg-green"
                )}
              >
                {answerLabels[index]}
              </span>
              <span>{answer}</span>
              {isCorrectUserAnswer && selectedAns === answer && (
                <span className="text-green-500 ml-auto">
                  <Image
                    src="/assets/images/icon-correct.svg"
                    alt="check"
                    width={30}
                    height={30}
                  />
                </span>
              )}
              {isCorrectUserAnswer === false && selectedAns === answer && (
                <span className="text-red-500 ml-auto">
                  <Image
                    src="/assets/images/icon-error.svg"
                    alt="cross"
                    width={30}
                    height={30}
                  />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      {!submitted && (
        <button
          onClick={handleSubmitAns}
          className="w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-white font-semibold text-lg text-center"
        >
          Submit Answer
        </button>
      )}
      {submitted && (
        <button
          onClick={handleGoNextQuestion}
          className="w-full bg-purple py-4 px-5 rounded-xl shadow-lg text-white font-semibold text-lg text-center"
        >
          Next Question
        </button>
      )}
    </>
  );
};

export default Answers;
