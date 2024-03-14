import React from "react";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="py-1 z-10 sticky top-0 text-center font-orbitron text-blue">
      <Navbar />
      <div className="sm:hidden">
        <div>logo</div>
        <div>&#9776;</div>
      </div>
    </div>
  );
};

export default Header;
