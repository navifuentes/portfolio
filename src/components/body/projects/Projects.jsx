import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Projects" className="my-8 flex gap-x-8 gap-y-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default Projects;
