import React from "react";
import Tippy from "@tippyjs/react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
  width?: number | undefined;
  height?: number | undefined;
  name: string;
}

const SkillsItem: React.FC<Props> = ({ src, alt, layout, width, height, name }) => {
  return (
    <>
      <Tippy content={name}>
        <div className="skills-item bg-light h-24 w-24 rounded-lg flex justify-center items-center shadow-black/10 shadow-sm hover:scale-110 active:scale-100 select-none hover:shadow-xl transition cursor-pointer">
          <div className="h-10 w-10 relative flex items-center justify-center">
            <Image src={src} alt={alt} layout={layout} width={width} height={height} />
          </div>
        </div>
      </Tippy>
    </>
  );
};

export default SkillsItem;
