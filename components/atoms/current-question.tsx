import { Question } from "@/lib/types";

type QuestionsProps = {
  data: Question;
};
const CurrentQuestion = ({data}: QuestionsProps) => {

  return (
    <div>
      <h2 className="text-dark-blue dark:text-white xs:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        {data.question}
      </h2>
    </div>
  )
}

export default CurrentQuestion