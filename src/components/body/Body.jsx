import React from "react";
import Info from "./info/Info";
import Projects from "./projects/Projects";
import Techs from "./techs/Techs";
import Studies from "./studies/Studies";

const Body = () => {
  return (
    <div className="text-snow flex flex-col justify-center sm:items-center px-20 font-orbitron  min-w-full">
      <Info />
      <hr className="my-16 mx-auto w-1/2" />
      <Projects />
      <hr className="my-16 mx-auto w-1/2" />
      <Techs />
      <hr className="my-16 mx-auto w-1/2" />
      <Studies />
    </div>
  );
};

export default Body;
