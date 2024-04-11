"use client";
import { useQuestionStore } from "@/store/quiz-store";
import CurrentQuestion from "../atoms/current-question";
import Answers from "./answers";
import Progress from "../atoms/progress";
import { MotionDiv } from "../animated/motion-div";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Game = () => {
  const { questions, currentQuestion, selectAnswer, goNextQuestion } =
    useQuestionStore();
  const question = questions[currentQuestion];

  const [shouldAnimateQuestion, setShouldAnimateQuestion] = useState(false);
  const [shouldAnimateAnswers, setShouldAnimateAnswers] = useState(false);

  useEffect(() => {
    // Activar la animación cuando cambie la pregunta
    setShouldAnimateQuestion(true);
    setShouldAnimateAnswers(true); // Reiniciar la animación de las respuestas
  }, [currentQuestion]);

  return (
    <>
      <div className="flex flex-col xl:justify-center xl:items-center gap-2 lg:px-6 w-full max-h-96 lg:mt-16 xl:mt-0 xl:max-h-full">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => setShouldAnimateQuestion(true)}
        >
          {shouldAnimateQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={currentQuestion}
              className="flex flex-col gap-4"
            >
              <p className="italic xs:text-sm md:text-md text-gray-navy dark:text-light-blue xl:text-xl" >
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <CurrentQuestion data={question} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => setShouldAnimateQuestion(true)}
        >
          {shouldAnimateQuestion && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xs:mt-2 lg:mt-auto xl:mt-20 w-full "
              key={currentQuestion} // Asegúrate de proporcionar una clave única para que React maneje las animaciones correctamente
            >
              <Progress
                total={questions.length}
                currentIndex={currentQuestion + 1}
              />
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => setShouldAnimateAnswers(true)}
      >
        {shouldAnimateAnswers && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-y-4 justify-center w-full"
            key={currentQuestion} // Asegúrate de proporcionar una clave única para que React maneje las animaciones correctamente
          >
            <Answers
              data={question.options}
              questionId={question.id}
              handleAnswer={selectAnswer}
              goNextQuestion={goNextQuestion}
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Game;
