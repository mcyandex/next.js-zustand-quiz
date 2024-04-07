import { Question } from "@/lib/types";

type QuestionsProps = {
  data: Question[];
};
const Questions = ({data}: QuestionsProps) => {
  return (
    <div>Questions</div>
  )
}

export default Questions