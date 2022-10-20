import React, { useState } from "react";
import Image from "next/image";
import ProjectDrawer from "./ProjectDrawer";
import myprojects from "./myprojects";
const Projects = () => {
  const [showProjectDrawer, setShowProjectDrawer] = useState(false);
  const [projectToShow, setProjectToShow] = useState<IProject>({
    title: "",
    description: "",
    techs: [""],
    images: [""],
    videoPreview: "",
    demoLink: "",
    repoLink: "",
  });
  return (
    <section id="projects" className="h-max py-10 bg-light dark:bg-dark flex flex-col gap-10">
      <div className="text-center font-bold text-2xl text-primary self-center">PROJECTS</div>
      <div className="projects-container flex gap-10 justify-center">
        <div className="projects-gallery flex lg:flex-row flex-col gap-10 justify-start lg:p-5 items-center lg:h-72 h-max overflow-x-auto lg:w-3/4 w-[95%]">
          {myprojects.map((project, index) => {
            return (
              <div key={index} className="lg:h-full h-[400px] min-w-[300px] rounded-lg relative group">
                <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 hidden group-hover:flex flex-col gap-3 justify-center items-center">
                  <div className="text-light font-extrabold text-lg text-center">{project.title}</div>
                  <button
                    onClick={() => {
                      setProjectToShow(project);
                      setShowProjectDrawer(true);
                    }}
                    className="bg-primary text-light w-max h-10 px-5 rounded-full"
                  >
                    Detail
                  </button>
                </div>
                <Image layout="fill" objectFit="cover" src={project.images[0]} alt="project" className="group-hover:brightness-[.3] transition cursor-pointer rounded-lg" />
              </div>
            );
          })}
          <ProjectDrawer project={projectToShow} show={showProjectDrawer} onClose={() => setShowProjectDrawer(false)} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
