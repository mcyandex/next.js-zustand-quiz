"use client";
import { Quizz } from "@/lib/types";
import { useQuestionStore } from "@/store/quiz-store";
import Image from "next/image";

type SubjectsProps = {
  data: Quizz[];
};
const Subjects = ({ data }: SubjectsProps) => {
  const subjects = data.map((q) => ({ title: q.title, icon: q.icon }));

  const selectQuizz = useQuestionStore((state) => state.selectQuizz);
  const backgroundColors: { [key: string]: string } = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  return (
    <>
      {subjects.map((subject) => (
        <button
          key={subject.title}
          onClick={() => {
            selectQuizz(data.find((q) => q.title === subject.title)!);
          }}
          className="flex items-center gap-x-4 bg-[#fff] dark:bg-slate py-3 px-4 xl:py-5 rounded-2xl shadow-lg ring-1 hover:ring-purple transition-all"
        >
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: backgroundColors[subject.title] }}
          >
            <Image src={subject.icon} alt="arrow" width={30} height={30} />
          </div>
          <p className="dark:text-white text-xl font-semibold">{subject.title}</p>
        </button>
      ))}
    </>
  );
};

export default Subjects;
