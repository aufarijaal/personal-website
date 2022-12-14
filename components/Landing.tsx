import { Icon } from "@iconify/react";
import React from "react";
const Landing = () => {
  return (
    <>
      <section id="landing" className="h-max md:py-32 py-24 flex flex-col lg:gap-20 gap-10 dark:bg-dark bg-light items-center">
        <div id="hero" className="md:text-5xl sm:text-4xl text-3xl font-extrabold flex flex-col items-center gap-2 text-center max-w-[1200px]">
          <div className="text-secondary dark:text-light">
            Hi, I&apos;m <span className="text-primary">Aufa</span>
          </div>
          <div className="text-secondary dark:text-light">A Front-End Web Developer</div>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-200 tracking-wide px-5 lg:px-36 mt-5 leading-7">
            I&apos;m a front-end web developer specializing in building user interfaces using popular frameworks like <span className="font-bold">React</span> and <span className="font-bold">Vue</span> and occasionally designing with figma. Currently, I&apos;m focused on building responsive front-end web applications while <span className="font-bold">learning back-end technologies.</span>
          </div>
        </div>
        <div id="socials" className="flex gap-7 justify-center flex-col items-center flex-wrap px-5">
          <div className="flex gap-5 justify-center flex-wrap">
            <a href="https://www.linkedin.com/in/muhammad-aufa-rijal-b34009169/" className="social-links cursor-pointer w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary/10 shadow-lg">
              <Icon icon="akar-icons:linkedin-box-fill" color="white" width="24" height="24" />
            </a>
            <a href="https://www.github.com/aufarijaal/" className="social-links cursor-pointer w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary/10 shadow-lg">
              <Icon icon="akar-icons:github-fill" color="white" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/aufarijaal/" className="social-links cursor-pointer w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary/10 shadow-lg">
              <Icon icon="akar-icons:instagram-fill" color="white" width="24" height="24" />
            </a>
            <a href="mailto:rijalaufa0@gmail.com" className="social-links cursor-pointer w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-primary/10 shadow-lg">
              <Icon icon="akar-icons:envelope" color="white" width="24" height="24" />
            </a>
          </div>
          <div>
            <a href="/cv/Muhammad Aufa Rijal CV.pdf" target="_blank" className="social-links cursor-pointer w-max h-max py-2 px-4 gap-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-primary/60 hover:shadow-primary/30 transition-shadow shadow-lg">
              <Icon icon="akar-icons:download" color="white" width="24" height="24" />
              <div className="text-light">My Resume</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
