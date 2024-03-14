import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="text-center text-6xl">Projects</h2>
      <div className="my-8 flex gap-x-8 gap-y-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
