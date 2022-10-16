import { Icon } from "@iconify/react";
import React, { EventHandler } from "react";
import ActiveLink from "./ActiveLink";

interface Props {
  visible: boolean;
  onClose: EventHandler<any>;
}

const NavbarCollapse: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <div id="nav-collapse" className={visible ? "flex absolute top-0 left-0 bg-light w-full h-screen z-20 flex-col justify-center items-center gap-5" : "hidden"}>
      <ActiveLink href="#home">
        <a className="nav-item" onClick={onClose}>
          Home
        </a>
      </ActiveLink>
      <ActiveLink href="#about">
        <a className="nav-item" onClick={onClose}>
          About
        </a>
      </ActiveLink>
      <ActiveLink href="#skills">
        <a className="nav-item" onClick={onClose}>
          Skills
        </a>
      </ActiveLink>
      <ActiveLink href="#projects">
        <a className="nav-item" onClick={onClose}>
          Projects
        </a>
      </ActiveLink>
      <ActiveLink href="#contact">
        <a className="nav-item" onClick={onClose}>
          Contact
        </a>
      </ActiveLink>
      <div id="close-nav-collapse" className="mt-20 hover:bg-primary/20 rounded-full p-3 transition cursor-pointer" onClick={onClose}>
        <Icon icon="akar-icons:cross" style={{ color: "#14372F" }} width="24" height="24"></Icon>
      </div>
    </div>
  );
};

export default NavbarCollapse;
