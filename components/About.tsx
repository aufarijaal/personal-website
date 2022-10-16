import React from "react";

const About = () => {
  return (
    <section id="about" className="h-max py-20 bg-primary flex flex-col gap-10">
      <div className="text-center font-bold text-2xl text-light">About</div>
      <div className="about-container flex">
        <div className="text-sm font-normal text-light tracking-wide mt-5 px-5 lg:px-36 text-center">
          I&apos;m a front-end web developer specializing in building user interfaces using popular frameworks like <span className="font-bold">React</span> and <span className="font-bold">Vue</span> and occasionally designing with figma. Currently, I&apos;m focused on building responsive front-end web applications while <span className="font-bold">learning back-end technologies.</span>
        </div>
      </div>
    </section>
  );
};

export default About;
