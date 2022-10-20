import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { EventHandler } from "react";

interface Props {
  visible: boolean;
  onClose: EventHandler<any>;
  handleTrivia: EventHandler<any>;
}

const NavbarCollapse: React.FC<Props> = ({ visible, onClose, handleTrivia }) => {
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
          className={visible ? "flex md:hidden fixed bg-light dark:bg-dark w-screen h-screen z-20 flex-col justify-center items-center" : "hidden"}
        >
          <a href="#landing" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Home</span>
            </div>
          </a>
          <a href="#skills" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Skills</span>
            </div>
          </a>
          <a href="#projects" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Projects</span>
            </div>
          </a>
          <a href="#contact" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Contact</span>
            </div>
          </a>
          <button className="nav-item" onClick={handleTrivia}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Trivia</span>
            </div>
          </button>
          <div id="close-nav-collapse" className="mt-20 hover:bg-primary/20 rounded-full p-3 transition cursor-pointer" onClick={onClose}>
            <Icon icon="akar-icons:cross" style={{ color: "var(--color-primary)" }} width="24" height="24"></Icon>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarCollapse;
