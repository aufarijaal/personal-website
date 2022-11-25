import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
  showTrivia: boolean;
  closeTrivia: CallableFunction;
};

const Layout: React.FC<Props> = ({ children, showTrivia, closeTrivia }) => {
  return (
    <>
      <Navbar showTrivia={showTrivia} closeTrivia={closeTrivia} />
      <main className="bg-light dark:bg-dark">{children}</main>
    </>
  );
};

export default Layout;
