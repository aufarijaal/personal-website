import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  icon: string;
  iconColor: string;
  iconSize: string;
}

const TriviaItem: React.FC<Props> = ({ icon, iconColor, iconSize }) => {
  return (
    <div className="flex gap-3">
      <Icon icon={icon} width={iconSize} height={iconSize} color={iconColor} />
      <div className="text-gray-500">I&apos;m a stricted person about Software Licenses.</div>
    </div>
  );
};

export default TriviaItem;
