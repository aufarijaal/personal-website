import React from "react";
import Image from "next/image";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <section id="skills" className="h-max py-20 bg-primary flex flex-col gap-10">
      <div className="text-center font-bold text-2xl text-light">SKILLS</div>
      <div className="skills-container flex flex-wrap gap-5 items-center justify-center">
        <SkillsItem name="Vue JS" width={108} height={94} src="/vue-108x94.png" alt="vue logo" />
        <SkillsItem name="React JS" width={126} height={126} src="/react-126x126.png" alt="react logo" />
        <SkillsItem name="Laravel" width={112} height={116} src="/laravel-112x116.png" alt="laravel logo" />
        <SkillsItem name="Typescript" width={128} height={128} src="/ts-128.png" alt="typescript logo" />
        <SkillsItem name="Tailwind CSS" width={128} height={128} src="/tailwind-128x128.png" alt="tailwind logo" />
        <SkillsItem name="Pug JS" width={156} height={164} src="/pug-156x164.png" alt="pug logo" />
        <SkillsItem name="Debian based linux" width={126} height={126} src="/debian-126x126.png" alt="debian logo" />
        <SkillsItem name="Github" width={130} height={130} src="/github-130x130.png" alt="github logo" />
        <SkillsItem name="Sass" width={136} height={104} src="/sass-136x104.png" alt="sass logo" />
        <SkillsItem name="Node JS" width={266} height={300} src="/nodejs-266x300.png" alt="node logo" />
        <SkillsItem name=".NET" width={126} height={126} src="/net-126x126.png" alt="net logo" />
        <SkillsItem name="C#" width={130} height={156} src="/csharp-130x156.png" alt="csharp logo" />
        <SkillsItem name="Firebase" width={156} height={156} src="/firebase-156x156.png" alt="firebase logo" />
        <SkillsItem name="Next JS" width={146} height={86} src="/next-146x86.png" alt="next logo" />
      </div>
    </section>
  );
};

export default Skills;
