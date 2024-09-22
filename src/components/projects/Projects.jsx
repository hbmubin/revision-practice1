import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import project1 from "./../../assets/images/images/projects/projectOne.jpg";
import project2 from "./../../assets/images/images/projects/projectTwo.jpg";
import project3 from "./../../assets/images/images/projects/projectThree.jpeg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center text-center">
        <Title
          id="projects"
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        ></Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project1}
        ></ProjectCard>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project2}
        ></ProjectCard>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project3}
        ></ProjectCard>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project1}
        ></ProjectCard>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project2}
        ></ProjectCard>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project3}
        ></ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
