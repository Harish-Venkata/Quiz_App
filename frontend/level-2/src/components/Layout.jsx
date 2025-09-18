import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Layout;
