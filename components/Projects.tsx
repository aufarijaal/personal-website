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
        <div className="projects-gallery flex flex-col gap-5">
          {myprojects.map((project, index) => {
            return (
              <div key={index} className="project-item bg-primary/10 dark:bg-primary/5 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-max rounded-lg hover:-translate-y-2 transition">
                <div className="grid grid-rows-[150px_auto] sm:grid-rows-none sm:grid-cols-[150px_auto]">
                  <div className="flex justify-center items-center">
                    <Image src={project.images[0]} alt="project-preview" width={100} height={100} className="rounded-lg object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="text-lg font-bold mb-3 text-left text-primary">{project.title}</div>
                    <p className="text-sm text-dark dark:text-light text-justify text-ellipsis break-all overflow-hidden max-h-20">{project.description}</p>
                    <button
                      onClick={() => {
                        setProjectToShow(project);
                        setShowProjectDrawer(true);
                      }}
                      className="text-primary text-sm"
                    >
                      more..
                    </button>
                  </div>
                </div>
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
