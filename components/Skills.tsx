import React, { useEffect, useRef, useState } from "react";
import SkillsItem from "./SkillsItem";
import { Icon } from "@iconify/react";
import Typed from "typed.js";

const Skills = () => {
  const [viewType, setViewType] = useState<"list" | "grid">("list");
  const typedNoob = useRef<any>("");

  useEffect(() => {
    const typed = new Typed(typedNoob.current, {
      strings: ["Express JS", "Svelte", "Docker", "ASP .NET"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="skills" className="h-max py-20 bg-light dark:bg-dark flex flex-col gap-10">
      <div className="text-center font-bold text-2xl text-primary flex flex-col justify-center items-center gap-3">
        <div className="text-center font-bold text-2xl text-primary">SKILLS</div>
        <div className="flex bg-primary p-1 gap-2 w-max">
          <div onClick={() => setViewType("grid")} className={viewType === "grid" ? "cursor-pointer flex justify-center items-center w-7 h-7 bg-light" : "cursor-pointer flex justify-center items-center w-7 h-7"}>
            <Icon icon="clarity:grid-view-line" color={viewType === "grid" ? "#318470" : "#F4F4F4"} />
          </div>
          <div onClick={() => setViewType("list")} className={viewType === "list" ? "cursor-pointer flex justify-center items-center w-7 h-7 bg-light" : "cursor-pointer flex justify-center items-center w-7 h-7"}>
            <Icon icon="clarity:view-list-line" color={viewType === "list" ? "#318470" : "#F4F4F4"} />
          </div>
        </div>
      </div>
      <div className={viewType === "grid" ? "skills-container flex flex-wrap gap-5 items-center justify-center" : "skills-container grid grid-rows-5 sm:grid-cols-2 gap-5 justify-items-center"}>
        <SkillsItem icon="fa-brands:vuejs" skillLevel="Intermediate" viewType={viewType} name="Vue JS" width={108} height={94} src="/vue-108x94.png" alt="vue logo" />
        <SkillsItem icon="fa-brands:react" skillLevel="Intermediate" viewType={viewType} name="React JS" width={126} height={126} src="/react-126x126.png" alt="react logo" />
        <SkillsItem icon="fa-brands:laravel" skillLevel="Intermediate" viewType={viewType} name="Laravel" width={112} height={116} src="/laravel-112x116.png" alt="laravel logo" />
        <SkillsItem icon="akar-icons:typescript-fill" skillLevel="Intermediate" viewType={viewType} name="Typescript" width={128} height={128} src="/ts-128.png" alt="typescript logo" />
        <SkillsItem icon="bxl:tailwind-css" skillLevel="Intermediate" viewType={viewType} name="Tailwind CSS" width={128} height={128} src="/tailwind-128x128.png" alt="tailwind logo" />
        <SkillsItem icon="mdi:debian" skillLevel="Intermediate" viewType={viewType} name="Debian based linux" width={126} height={126} src="/debian-126x126.png" alt="debian logo" />
        <SkillsItem icon="akar-icons:github-fill" skillLevel="Intermediate" viewType={viewType} name="Github" width={130} height={130} src="/github-130x130.png" alt="github logo" />
        <SkillsItem icon="fa-brands:sass" skillLevel="Intermediate" viewType={viewType} name="Sass" width={136} height={104} src="/sass-136x104.png" alt="sass logo" />
        <SkillsItem icon="fa-brands:node-js" skillLevel="Intermediate" viewType={viewType} name="Node JS" width={266} height={300} src="/nodejs-266x300.png" alt="node logo" />
        <SkillsItem icon="cib:dot-net" skillLevel="Intermediate" viewType={viewType} name=".NET" width={126} height={126} src="/net-126x126.png" alt="net logo" />
        <SkillsItem icon="file-icons:c" skillLevel="Intermediate" viewType={viewType} name="C#" width={130} height={156} src="/csharp-130x156.png" alt="csharp logo" />
        <SkillsItem icon="bxl:firebase" skillLevel="Intermediate" viewType={viewType} name="Firebase" width={156} height={156} src="/firebase-156x156.png" alt="firebase logo" />
        <SkillsItem icon="cib:next-js" skillLevel="Intermediate" viewType={viewType} name="Next JS" width={146} height={86} src="/next-146x86.png" alt="next logo" />
      </div>
      <div className="text-center text-sm text-gray-500">
        Why <span ref={typedNoob} className="bg-primary text-light px-2 py-1"></span> doesn&apos;t exist? because I&apos;m still noob with that
      </div>
    </section>
  );
};

export default Skills;
