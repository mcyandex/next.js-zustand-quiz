"use client";
import { backgroundColors } from "@/lib/utils";
import { useQuestionStore } from "@/store/quiz-store";
import Image from "next/image";

const Score = () => {
  const { selectedQuizz, score } = useQuestionStore();
  if (!selectedQuizz) return null;
  return (
    <div className="flex flex-col gap-4 bg-[#fff] dark:bg-slate p-10 rounded-xl">
      <div className="flex gap-x-2 items-center justify-center">
        <div
          className="xs:p-1 p-2 rounded-lg"
          style={{ backgroundColor: backgroundColors[selectedQuizz.title] }}
        >
          <Image src={selectedQuizz.icon} alt="arrow" width={30} height={30} />
        </div>
        <p className="text-dark-blue dark:text-white font-bold xs:text-xl md:text-2xl">
          {selectedQuizz.title}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-dark-blue dark:text-white font-bold xs:text-5xl sm:text-5xl lg:text-9xl">
          {score}
        </p>
        <span className="text-dark-blue dark:text-white text-sm font-thin">
          Out of {selectedQuizz.questions.length}
        </span>
      </div>
    </div>
  );
};

export default Score;
