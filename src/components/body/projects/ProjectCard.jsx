import React from "react";

const ProjectCard = ({ children: text, uri, img, title }) => {
  return (
    <div className="mx-4 my-10 overflow-hidden flex flex-col items-center border-white border-2 rounded-xl shadow shadow-snow hover:shadow-lg hover:shadow-stone-300 transition ease-in-out delay-250 hover:scale-105 ">
      <div className="w-full">
        <div className="z-0 text-center bg-teal-700">{title}</div>
        <a href={uri}>
          <img src={img} alt="" />
        </a>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ProjectCard;
