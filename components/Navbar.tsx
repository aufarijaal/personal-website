/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const [showSelectLang, setshowSelectLang] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [theme, setTheme]);

  return (
    <>
      <nav className="fixed w-max sm:w-full rounded-full sm:rounded-none sm:top-0 sm:left-0 bottom-10 right-10 sm:border-none z-10 h-max sm:py-0 sm:h-16 flex md:justify-between justify-center items-center px-0 sm:px-8 backdrop-blur bg-light/50 dark:bg-dark/50">
        <div className="nav-logo cursor-pointer select-none text-secondary dark:text-primary hidden md:block font-bold" style={{ fontFamily: "Berkshire Swash", fontSize: "28px" }}>
          <a>a.</a>
        </div>
        <div className="nav-items hidden gap-2 items-center font-bold sm:flex">
          <a className="nav-item" href="#landing">
            <div className="text-sm font-mono">~/Landing</div>
            <kbd className="kbc-button kbc-button-xxs">l</kbd>
          </a>
          <a className="nav-item" href="#projects">
            <div className="text-sm font-mono">~/Projects</div>
            <kbd className="kbc-button kbc-button-xxs">p</kbd>
          </a>
          <a className="nav-item" href="#skills">
            <div className="text-sm font-mono">~/Skills</div>
            <kbd className="kbc-button kbc-button-xxs">s</kbd>
          </a>
          <a className="nav-item" href="#contact">
            <div className="text-sm font-mono">~/Contact</div>
            <kbd className="kbc-button kbc-button-xxs">c</kbd>
          </a>
          <div id="divider" className="w-px bg-primary h-8"></div>
          {/* <div className="relative rounded p-0.5 hover:bg-primary/20 cursor-pointer" onClick={() => setshowSelectLang(!showSelectLang)}>
            <Icon icon="prime:language" width="24" height="24" color="var(--color-primary)" />
            {showSelectLang && (
              <AnimatePresence>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  id="select-theme"
                  className="flex absolute shadow-md w-max py-1 rounded-md right-0 flex-col gap-2 top-12 backdrop-blur z-20 bg-light/50 dark:bg-dark/50"
                >
                  <button className="flex gap-4 px-7 hover:bg-black/10 py-2">
                    <Icon icon="emojione:flag-for-indonesia" width="24" height="24" color="#318470" />
                    <div className="text-primary dark:text-light font-normal">Indonesia</div>
                  </button>
                  <button className="flex gap-4 px-7 hover:bg-black/10 py-2">
                    <Icon icon="emojione:flag-for-us-outlying-islands" width="24" height="24" color="#318470" />
                    <div className="text-primary dark:text-light font-normal">English</div>
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </div> */}
          <div className="relative cursor-pointer rounded p-0.5 hover:bg-primary/20" onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}>
            {theme === "dark" ? <Icon icon="clarity:moon-solid" width="24" height="24" color="var(--color-primary)" /> : <Icon icon="clarity:sun-solid" width="24" height="24" color="var(--color-primary)" />}
          </div>
        </div>
        <div
          className="nav-hamburger flex gap-2 sm:hidden items-center cursor-pointer hover:bg-primary/20 rounded-full p-3 transition text-primary font-semibold"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <Icon icon="akar-icons:three-line-horizontal" width="24" height="24" style={{ color: "var(--color-primary)" }} />
          Menu
        </div>
      </nav>
      <NavbarCollapse onClose={() => setShowNav(false)} visible={showNav} />
    </>
  );
};

export default Navbar;
