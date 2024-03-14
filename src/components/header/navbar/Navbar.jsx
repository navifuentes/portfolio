import React from "react";

const Navbar = () => {
  return (
    <div className="hidden sm:flex sm:flex-row items-center justify-center  ">
      <a
        className="hover:bg-sky-300 rounded-xl px-1 mx-4   target:bg-black active:ring active:ring-sky-200"
        href="#Info"
      >
        Info
      </a>
      <a
        className="hover:bg-sky-300 rounded-xl px-1 mx-4 target:bg-black active:ring active:ring-sky-200"
        href="#Projects"
      >
        Projects
      </a>
      <a
        className="hover:bg-sky-300 rounded-xl px-1 mx-4   target:bg-black active:ring active:ring-sky-200"
        href="#Techs"
      >
        Techs
      </a>
      <a
        className="hover:bg-sky-300 rounded-xl px-1 mx-4   target:bg-black active:ring active:ring-sky-200"
        href="#Studies"
      >
        Studies
      </a>
      <a
        className="hover:bg-sky-300 rounded-xl px-1 mx-4   target:bg-black active:ring active:ring-sky-200"
        href="#Contact"
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;
