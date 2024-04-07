type AnswersProps = {
  data: string[];
  handleAnswer: (questionId: number, answer: string) => void;
  questionId: number;
};
const Answers = ({ data, handleAnswer, questionId }: AnswersProps) => {
  const answerLabels = ["A", "B", "C", "D"];
  return (
    <ul className="flex flex-col gap-y-4 justify-center w-full">
      {data.map((answer, index) => (
        <li key={answer}>
          <button
            onClick={() => handleAnswer(questionId, answer)}
            className="w-full flex items-center gap-x-4 group bg-[#fff] dark:bg-slate py-4 px-5 rounded-xl shadow-lg  ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white text-center"
          >
            <span className="text-lg bg-white rounded-lg py-2 px-4 group-hover:text-purple group-hover:bg-[#F6E7FF] transition-all dark:text-dark-blue">
              {answerLabels[index]}
            </span>
            <span>{answer}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Answers;
