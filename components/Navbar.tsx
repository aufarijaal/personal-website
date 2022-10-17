/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="fixed w-max sm:w-full rounded-full sm:rounded-none sm:top-0 sm:left-0 bottom-10 right-10 border-2 border-primary sm:border-none z-10 h-max sm:py-0 sm:h-16 flex md:justify-between justify-center items-center px-0 sm:px-8 shadow-md shadow-primary/10 backdrop-blur bg-light/50">
        <div className="nav-logo cursor-pointer select-none text-secondary hidden md:block font-bold" style={{ fontFamily: "Berkshire Swash", fontSize: "28px" }}>
          <a>a.</a>
        </div>
        <div className="nav-items hidden gap-2 items-center font-bold sm:flex">
          <a className="nav-item" href="#landing">
            <div className="text-sm font-mono">~/Landing</div>
            <kbd className="kbc-button kbc-button-xxs">l</kbd>
          </a>
          <a className="nav-item" href="#about">
            <div className="text-sm font-mono">~/About</div>
            <kbd className="kbc-button kbc-button-xxs">a</kbd>
          </a>
          <a className="nav-item" href="#skills">
            <div className="text-sm font-mono">~/Skills</div>
            <kbd className="kbc-button kbc-button-xxs">s</kbd>
          </a>
          <a className="nav-item" href="#projects">
            <div className="text-sm font-mono">~/Projects</div>
            <kbd className="kbc-button kbc-button-xxs">p</kbd>
          </a>
          <a className="nav-item" href="#contact">
            <div className="text-sm font-mono">~/Contact</div>
            <kbd className="kbc-button kbc-button-xxs">c</kbd>
          </a>
        </div>
        <div
          className="nav-hamburger flex gap-2 sm:hidden items-center cursor-pointer hover:bg-primary/20 rounded-full p-3 transition text-secondary font-semibold"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <Icon icon="akar-icons:three-line-horizontal" width="24" height="24" style={{ color: "#14372F" }} />
          Menu
        </div>
      </nav>
      <NavbarCollapse onClose={() => setShowNav(false)} visible={showNav} />
    </>
  );
};

export default Navbar;
