import { Question } from "@/lib/types";

type QuestionsProps = {
  data: Question;
};
const CurrentQuestion = ({data}: QuestionsProps) => {

  return (
    <div>
      <h2 className="text-dark-blue dark:text-white text-[36px] font-bold">
        {data.question}
      </h2>
    </div>
  )
}

export default CurrentQuestion