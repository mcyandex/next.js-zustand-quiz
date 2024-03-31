import MaxWidthWrapper from "@/components/max-width-wrapper";
import Subjects from "@/components/subjects";
import { getSubjects } from "@/lib/actions/getSubjects";

export default async function Home() {
  const subjects = await getSubjects();
  return (
    <MaxWidthWrapper className="grid px-10 grid-cols-1 md:grid-cols-2 gap-10 lg:px-0 relative z-50">
      <div className="flex flex-col xs:gap-4 md:gap-10">
        <h1 className="xs:text-3xl md:text-5xl font-normal text-dark-blue dark:text-white">
          Welcome to the <span className="font-bold">Frontend Quizz!</span>
        </h1>
        <p className="text-gray-navy italic dark:text-light-blue">
          Pick a subject to get started.
        </p>
      </div>
      <div className="flex flex-col gap-y-4 justify-center w-full">
        <Subjects subjects={subjects} />
      </div>
    </MaxWidthWrapper>
  );
}
