import type { NextPage } from "next";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <Head>
        <title>Aufa Rijal</title>
      </Head>
      <Landing />
      <Projects />
      <Skills />
      <Contact />
      <a id="back-to-top" className="bg-primary w-full h-12 flex justify-center items-center gap-3" href="#landing">
        <motion.svg
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="stroke-light"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path fill="currentColor" fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56L2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
        </motion.svg>
        <span className="text-light">Back to top</span>
        <motion.svg
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="stroke-light"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path fill="currentColor" fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56L2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
        </motion.svg>
      </a>
    </>
  );
};

export default Home;
