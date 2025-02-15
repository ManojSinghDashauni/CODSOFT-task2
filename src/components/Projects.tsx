import ProjectCard from "./subComponents/ProjectCard";
import {projectsData} from "../data/Data"

const Projects = () => {
  return (
    <div id="projects" className="relative grid grid-cols-12 gap-5 px-20 place-content-center bg-neutral-950 p-8">
      <div className="col-start-4 col-end-8">
        <p className="text-left text-6xl font-black text-neutral-50">
          Work
        </p>
        {/* <p className="text-left text-2xl mx-auto pl-2 mt-4 text-neutral-400">
          New projects coming soon.. 🤠
        </p> */}
      </div>
      <div className="col-start-4 col-end-10 text-center">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 mt-5">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
