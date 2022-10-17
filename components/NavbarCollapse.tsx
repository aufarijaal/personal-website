import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { EventHandler } from "react";
import ActiveLink from "./ActiveLink";

interface Props {
  visible: boolean;
  onClose: EventHandler<any>;
}

const NavbarCollapse: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: -600,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: -600,
          }}
          transition={{
            duration: 0.5,
          }}
          id="nav-collapse"
          className={visible ? "flex fixed bg-light w-screen h-screen z-20 flex-col justify-center items-center gap-5" : "hidden"}
        >
          <ActiveLink href="#landing">
            <a className="nav-item" onClick={onClose}>
              <div className="font-bold font-mono">
                ~/<span className="text-primary">Home</span>
              </div>
            </a>
          </ActiveLink>
          <ActiveLink href="#about">
            <a className="nav-item" onClick={onClose}>
              <div className="font-bold font-mono">
                ~/<span className="text-primary">About</span>
              </div>
            </a>
          </ActiveLink>
          <ActiveLink href="#skills">
            <a className="nav-item" onClick={onClose}>
              <div className="font-bold font-mono">
                ~/<span className="text-primary">Skills</span>
              </div>
            </a>
          </ActiveLink>
          <ActiveLink href="#projects">
            <a className="nav-item" onClick={onClose}>
              <div className="font-bold font-mono">
                ~/<span className="text-primary">Projects</span>
              </div>
            </a>
          </ActiveLink>
          <ActiveLink href="#contact">
            <a className="nav-item" onClick={onClose}>
              <div className="font-bold font-mono">
                ~/<span className="text-primary">Contact</span>
              </div>
            </a>
          </ActiveLink>
          <div id="close-nav-collapse" className="mt-20 hover:bg-primary/20 rounded-full p-3 transition cursor-pointer" onClick={onClose}>
            <Icon icon="akar-icons:cross" style={{ color: "#14372F" }} width="24" height="24"></Icon>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarCollapse;
