import Image from "next/image";

type SubjectsProps = {
  subjects: {
    title: string;
    icon: string;
  }[];
};
const Subjects = ({ subjects }: SubjectsProps) => {
  const backgroundColors: { [key: string]: string } = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  return (
    <>
      {subjects.map((subject) => (
        <button key={subject.title} className="flex items-center gap-x-4 bg-[#fff] dark:bg-slate py-3 px-4 rounded-xl shadow-lg ring-1 hover:ring-purple transition-all">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: backgroundColors[subject.title] }}
          >
            <Image
              src={subject.icon}
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
          <p className="dark:text-white text-xl">{subject.title}</p>
        </button>
      ))}
    </>
  );
};

export default Subjects;
