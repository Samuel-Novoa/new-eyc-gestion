import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Main({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Main;
