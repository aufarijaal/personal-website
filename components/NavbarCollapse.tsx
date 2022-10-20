import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { EventHandler } from "react";
import Link from "next/link";

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
          className={visible ? "flex fixed bg-light dark:bg-dark w-screen h-screen z-20 flex-col justify-center items-center gap-5" : "hidden"}
        >
          <Link href="#landing" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Home</span>
            </div>
          </Link>
          <Link href="#skills" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Skills</span>
            </div>
          </Link>
          <Link href="#projects" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Projects</span>
            </div>
          </Link>
          <Link href="#contact" className="nav-item" onClick={onClose}>
            <div className="font-bold font-mono dark:text-primary">
              ~/<span className="text-primary dark:text-light">Contact</span>
            </div>
          </Link>
          <div id="close-nav-collapse" className="mt-20 hover:bg-primary/20 rounded-full p-3 transition cursor-pointer" onClick={onClose}>
            <Icon icon="akar-icons:cross" style={{ color: "var(--color-primary)" }} width="24" height="24"></Icon>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarCollapse;
