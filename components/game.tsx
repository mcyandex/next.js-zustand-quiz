"use client"
import { useQuestionStore } from '@/store/quiz-store';
import CurrentQuestion from './current-question';
import Answers from './answers';

const Game = () => {
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const question = questions[currentQuestion];
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);
  return (
    <>
    <div className="flex flex-col gap-2 lg:px-6">
      <p className="italic text-md text-gray-navy dark:text-light-blue">
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <CurrentQuestion data={question} />
    </div>
    <div className="flex flex-col gap-y-4 justify-center w-full">
      <Answers data={question.options} questionId={question.id} handleAnswer={selectAnswer} />
    </div>
  </>
  )
}

export default Game