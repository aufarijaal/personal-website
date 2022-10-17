import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  project: IProject;
  show: boolean;
  onClose: any;
}

const ProjectDrawer: React.FC<Props> = ({ project, show, onClose }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 1000,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 1000,
          }}
          transition={{
            duration: 0.5,
          }}
          className="project-detail-drawer-backdrop fixed bottom-0 left-0 custom-animate-slide-up bg-black/10 w-full h-screen outline-none overflow-hidden z-50 flex justify-center items-center"
        >
          <motion.div className="bg-light sm:w-[98%] sm:h-[96%] w-full h-full sm:rounded-xl grid grid-rows-[60%_40%]">
            <div className="rounded-t-xl relative">
              <Image src={project.images[0]} className="sm:rounded-t-xl brightness-[30%]" alt="project image" layout="fill" objectFit="cover" />
              <div className="absolute z-10 w-full h-full flex flex-col justify-between">
                <div className="flex pt-5 px-4 justify-between">
                  <div id="project-detail-title" className="text-light w-3/4 sm:w-1/2 font-extrabold text-xl">
                    {project.title}
                  </div>
                  <div className="bg-primary w-max h-max rounded-full cursor-pointer" onClick={onClose}>
                    <Icon icon="bi:x" width="28" height="28" color="white" />
                  </div>
                </div>
                <div className="flex justify-center gap-5 pb-5 sm:pl-5 sm:justify-start">
                  <a className={project.demoLink ? "btn-repo-demo-link" : "hidden"} title="Demo Link" href={project.demoLink} target="_blank" rel="noreferrer">
                    <Icon icon="eva:globe-2-outline" width="24" height="24" />
                    <div className="hidden sm:block text-light">Demo Link</div>
                  </a>
                  <a className={project.repoLink ? "btn-repo-demo-link" : "hidden"} title="Repo Link" href={project.repoLink} target="_blank" rel="noreferrer">
                    <Icon icon="icomoon-free:git" width="24" height="24" />
                    <div className="hidden sm:block text-light">Repo Link</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-b-xl bg-light grid grid-rows-[1fr_1fr] overflow-y-auto sm:overflow-hidden sm:grid-rows-1 sm:grid-cols-[auto_200px]">
              <p id="project-detail-description" className="text-sm p-3  text-justify border-b border-r-0 border-gray-500 sm:border-b-0 sm:border-r sm:overflow-y-auto">
                {project.description}
              </p>
              <div id="project-detail-techs" className="text-sm p-3 sm:overflow-y-auto">
                <div className="font-bold text-center mb-4 text-primary">TECHNOLOGIES</div>
                <div className="flex flex-col gap-3 items-center">
                  {project.techs.map((each, index) => {
                    return <div key={index}>{each}</div>;
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
