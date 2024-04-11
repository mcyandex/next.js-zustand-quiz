import { cn } from "@/lib/utils";
import Image from "next/image";

type AnswerProps = {
  answer: string;
  selectedAns: string;
  isCorrectUserAnswer: boolean;
  handleSelectAnswer: (answer: string) => void;
  index: number;
  answerLabels: string[];
};
const Answer = ({
  answer,
  selectedAns,
  isCorrectUserAnswer,
  handleSelectAnswer,
  index,
  answerLabels,
}: AnswerProps) => {
  return (
    <li>
      <button
        onClick={() => handleSelectAnswer(answer)}
        className={cn(
          selectedAns === answer && "ring-purple ring-1",
          isCorrectUserAnswer && selectedAns === answer && "ring-green",

          "w-full flex items-center gap-x-4 group bg-[#fff] dark:bg-slate py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white text-center",
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
        <span className="xl:text-lg">{answer}</span>
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
  );
};

export default Answer;
