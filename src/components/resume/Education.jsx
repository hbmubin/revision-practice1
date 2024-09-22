import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex lg:flex-row flex-col lg:gap-20 justify-between"
    >
      <div className="w-full">
        <div className="py-12">
          <p className="text-sm text-designColor tracking-tight">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          ></ResumeCard>
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          ></ResumeCard>
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          ></ResumeCard>
        </div>
      </div>
      <div className="w-full">
        <div className="py-12">
          <p className="text-sm text-designColor tracking-tight">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          ></ResumeCard>
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          ></ResumeCard>
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          ></ResumeCard>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
