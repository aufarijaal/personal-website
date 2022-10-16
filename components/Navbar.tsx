/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import NavbarCollapse from "./NavbarCollapse";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-10 h-16 flex justify-between items-center px-8 shadow-md shadow-primary/10 backdrop-blur bg-light/50">
        <div className="nav-logo cursor-pointer select-none text-secondary" style={{ fontFamily: "Berkshire Swash", fontSize: "28px" }}>
          <a>a.</a>
        </div>
        <div className="nav-items hidden gap-5 items-center font-bold sm:flex">
          <a className="nav-item" href="#landing">
            Home
          </a>
          <a className="nav-item" href="#about">
            About
          </a>
          <a className="nav-item" href="#skills">
            Skills
          </a>
          <a className="nav-item" href="#projects">
            Projects
          </a>
          <a className="nav-item" href="#contact">
            Contact
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
