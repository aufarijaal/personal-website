import React from "react";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Props {
  src: string;
  alt: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
  width?: number | undefined;
  height?: number | undefined;
  name: string;
  viewType: "grid" | "list";
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Professional" | "Master";
  icon: string;
}

const SkillsItem: React.FC<Props> = ({ src, alt, layout, width, height, name, viewType, skillLevel, icon }) => {
  {
    return viewType === "grid" ? (
      <Tippy content={name}>
        <div className="skills-item bg-light h-24 w-24 rounded-lg flex justify-center items-center shadow-black/10 shadow-md hover:scale-110 active:scale-100 select-none hover:shadow-xl transition cursor-pointer">
          <div className="h-10 w-10 relative flex items-center justify-center">
            <Image src={src} alt={alt} layout={layout} width={width} height={height} />
          </div>
        </div>
      </Tippy>
    ) : (
      <div className="flex gap-3 items-center">
        <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center p-2">
          <Icon icon={icon} color="#F4F4F4" width={24} height={24} />
        </div>
        <span className="font-bold text-primary">{name}</span>
        <span className="text-xs px-2 py-0.5 text-light bg-primary ">{skillLevel}</span>
      </div>
    );
  }
};

export default SkillsItem;
