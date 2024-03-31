import { Quizz } from "../types";

export const getSubjects = async () => {
  try {
    const API_URL =
      process.env.NODE_ENV === "production"
        ? "production url here"
        : "http://localhost:3000/";
    const response = await fetch(`${API_URL}/data.json`);
    const data = await response.json();
    const subjects = data.quizzes.map((quizz: Quizz) => (
      { title: quizz.title, icon: quizz.icon}
    ));  
    return subjects;
  } catch (error) {
    console.log(error);
    return [];	
  }
};
