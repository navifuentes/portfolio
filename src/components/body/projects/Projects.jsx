import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../../../assets/project1.png";
import img2 from "../../../assets/project2.png";

const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="text-center text-6xl">Projects</h2>
      <div className="my-8 flex sm:flex-row flex-col  gap-x-8 gap-y-4">
        <ProjectCard
          uri={"https://lovecraftapirest.fly.dev/"}
          img={img1}
          title={"Lovecraftian Api"}
        >
          A Lovecraftian universe beasts API with description, images, author
          and more.
        </ProjectCard>
        <ProjectCard
          uri={"https://lovecraftbestiary.fly.dev/"}
          img={img2}
          title={"Lovecraftian Bestiary"}
        >
          A website made to display the beasts images from the the Lovecraftian
          API and miscellaneous.
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
