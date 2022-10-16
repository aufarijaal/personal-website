/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-10 h-16 flex md:justify-between justify-center items-center px-8 shadow-md shadow-primary/10 backdrop-blur bg-light/50">
        <div className="nav-logo cursor-pointer select-none text-secondary hidden md:block font-bold" style={{ fontFamily: "Berkshire Swash", fontSize: "28px" }}>
          <a>a.</a>
        </div>
        <div className="nav-items hidden gap-2 items-center font-bold sm:flex">
          <a className="nav-item" href="#landing">
            <div>Home</div>
            <kbd className="kbc-button kbc-button-xxs">h</kbd>
          </a>
          <a className="nav-item" href="#about">
            <div>About</div>
            <kbd className="kbc-button kbc-button-xxs">a</kbd>
          </a>
          <a className="nav-item" href="#skills">
            <div>Skills</div>
            <kbd className="kbc-button kbc-button-xxs">s</kbd>
          </a>
          <a className="nav-item" href="#projects">
            <div>Projects</div>
            <kbd className="kbc-button kbc-button-xxs">p</kbd>
          </a>
          <a className="nav-item" href="#contact">
            <div>Contact</div>
            <kbd className="kbc-button kbc-button-xxs">c</kbd>
          </a>
        </div>
        <div
          className="nav-hamburger flex sm:hidden items-center cursor-pointer hover:bg-primary/20 rounded-full p-2 transition"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <Icon icon="akar-icons:three-line-horizontal" width="24" height="24" style={{ color: "#14372F" }}></Icon>
        </div>
        <NavbarCollapse onClose={() => setShowNav(false)} visible={showNav} />
      </nav>
    </>
  );
};

export default Navbar;
