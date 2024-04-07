"use client";
import SwitchTheme from "./switch-theme";
import { useQuestionStore } from "@/store/quiz-store";
import { backgroundColors, cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const selectedQuizz = useQuestionStore((state) => state.selectedQuizz);
  return (
    <div
      className={cn(
        selectedQuizz ? "flex justify-between w-full items-center" : "",
        "relative z-10"
      )}
    >
      {selectedQuizz && (
        <div className="flex gap-x-4 items-center px-6 py-4">
          {" "}
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: backgroundColors[selectedQuizz.title] }}
          >
            <Image
              src={selectedQuizz.icon}
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
          <p className="text-dark-blue dark:text-light-blue font-bold text-xl">
            {selectedQuizz.title}
          </p>
        </div>
      )}
      <SwitchTheme />
    </div>
  );
};

export default Header;
