import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import "keyboard-css/dist/css/main.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState, useCallback, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const handleUserKeyPress = useCallback((event: { key: string }) => {
    const { key } = event;

    if (key === "l") {
      window.location.href = "#landing";
    } else if (key === "a") {
      window.location.href = "#about";
    } else if (key === "s") {
      window.location.href = "#skills";
    } else if (key === "p") {
      window.location.href = "#projects";
    } else if (key === "c") {
      window.location.href = "#contact";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
