import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000 group">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt="src"
        />
      </div>
      <div className="mt-5 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg h-10 w-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <BsGithub></BsGithub>
            </span>
            <span className="text-lg h-10 w-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaGlobe></FaGlobe>
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
