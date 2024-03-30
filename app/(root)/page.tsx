import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-between gap-10">
        <h1 className="text-6xl font-normal text-dark-blue dark:text-white">
          Welcome to the <span className="font-bold">Frontend Quizz!</span>
        </h1>
        <p className="text-gray-navy italic dark:text-light-blue">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        {/* TODO: Add subjects here */}
      </div>
    </MaxWidthWrapper>
  );
}
