import React from "react";

const ProjectCard = ({ uri, img }) => {
  return (
    <div className="m-2 overflow-hidden flex flex-col items-center border-white border-2 rounded-xl shadow shadow-snow hover:shadow-lg hover:shadow-stone-300 transition ease-in-out delay-250 hover:scale-105 ">
      <div className="w-full">
        <div className="z-0 text-center bg-teal-700">Title</div>
        <img src="http://placehold.co/600x200" alt="" />
      </div>

      <div className="my-2 mx-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est
        placeat accusamus fugit quibusdam praesentium?
      </div>
    </div>
  );
};

export default ProjectCard;
