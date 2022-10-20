import React from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import colors from "tailwindcss/colors";

interface Props {
  show: boolean;
  onClose: any;
}

const Trivia: React.FC<Props> = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 1000,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 1000,
            scale: 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="project-detail-drawer-backdrop fixed bottom-0 left-0 custom-animate-slide-up bg-black/50 w-full h-screen outline-none overflow-hidden z-50 flex justify-center items-center"
        >
          <motion.div className="bg-light dark:bg-dark sm:w-[98%] sm:h-[96%] w-full h-full sm:rounded-xl grid grid-rows-[70px_auto] dark:sm:border-primary dark:sm:border-2 border-0">
            <div className="pt-5 px-6 flex justify-between border-b border-zinc-700">
              <div className="dark:text-light text-xl font-extrabold">Trivia</div>
              <div className="bg-primary w-max h-max rounded-full cursor-pointer" onClick={onClose}>
                <Icon icon="bi:x" width="28" height="28" color="white" />
              </div>
            </div>
            <div className="flex p-8 justify-center overflow-y-auto">
              <div className="w-max flex flex-col gap-8 h-max">
                <div className="trivia-item">
                  <Icon icon="mdi:license" width="24" height="24" color={colors.yellow["500"]} />
                  <div className="text-gray-500">I&apos;m a stricted person about Software Licenses.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="game-icons:cracked-shield" width="24" height="24" color={colors.blue["400"]} />
                  <div className="text-gray-500">I avoid cracking softwares.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="ri:open-source-line" width="24" height="24" color={colors.red["400"]} />
                  <div className="text-gray-500">I use Free softwares instead. If I don&apos;t have money.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="bx:paint" width="24" height="24" color={colors.slate["400"]} />
                  <div className="text-gray-500">In painting / drawing / design, I don&apos;t draw full body feature of a living creature.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="mdi:linux" width="24" height="24" color={colors.yellow["400"]} />
                  <div className="text-gray-500">I&apos;m a Linux enthusiast.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="codicon:debug-step-over" width="24" height="24" color={colors.green["400"]} />
                  <div className="text-gray-500">I&apos;m a Linux distro hopper.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="cib:arch-linux" width="24" height="24" color={colors.sky["400"]} />
                  <div className="text-gray-500">I&apos;m not an Arch user.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="fluent-mdl2:five-tile-grid" width="24" height="24" color={colors.blue["600"]} />
                  <div className="text-gray-500">I like tiling WM, but I like floating WM more.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="fluent-emoji-high-contrast:japanese-castle" width="24" height="24" color={colors.fuchsia["300"]} />
                  <div className="text-gray-500">I&apos;m learning Japanese language.</div>
                </div>
                <div className="trivia-item">
                  <Icon icon="carbon:fruit-bowl" width="24" height="24" color={colors.lime["700"]} />
                  <div className="text-gray-500">
                    I love{" "}
                    <a href="https://en.wikipedia.org/wiki/Durian" className="text-primary">
                      Durian{" "}
                    </a>
                    so much.
                  </div>
                </div>
                <div className="trivia-item">
                  <Icon icon="arcticons:grasshopper" width="24" height="24" color={colors.yellow["900"]} />
                  <div className="text-gray-500">
                    I don&apos;t eat{" "}
                    <a href="https://javaprivatetour.com/tour/fried-grasshopper.html" className="text-primary">
                      Fried Grasshopper
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Trivia;
