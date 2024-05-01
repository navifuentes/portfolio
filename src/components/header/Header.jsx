import React from "react";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className=" hidden py-1 z-10 sticky top-0 text-center font-orbitron text-blue backdrop-blur-sm border-b border-slate-900/10">
      <Navbar />
      <div className="sm:hidden">
        <div>logo</div>
        <div>&#9776;</div>
      </div>
    </div>
  );
};

export default Header;
