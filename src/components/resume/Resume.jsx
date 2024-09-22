import { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [resumeData, setResumeData] = useState("education");
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center text-center">
        <Title
          id="resume"
          title="7+ YEARS OF EXPERIENCE"
          des="My Resume"
        ></Title>
      </div>
      <div>
        <ul className="w-ful grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          <li
            onClick={() => setResumeData("education")}
            className={`${
              resumeData == "education"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setResumeData("skills")}
            className={`${
              resumeData == "skills"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setResumeData("experience")}
            className={`${
              resumeData == "experience"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => setResumeData("achievement")}
            className={`${
              resumeData == "achievement"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {resumeData == "education" && <Education></Education>}
      {resumeData == "skills" && <Skills></Skills>}
      {resumeData == "experience" && <h2>experience</h2>}
      {resumeData == "achievement" && <h2>achievement</h2>}
    </section>
  );
};

export default Resume;
