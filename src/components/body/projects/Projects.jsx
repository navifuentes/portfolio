import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../../../assets/project1.png";
import img2 from "../../../assets/project2.png";
import img3 from "../../../assets/project3.png";

const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="text-center sm:text-6xl text-xl">Projects</h2>
      <div className="my-8 grid sm:grid-cols-2 grid-cols-1">
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
        <ProjectCard
          uri={"https://e-commerce-backend-dark-wildflower-5471.fly.dev/"}
          img={img3}
          title={"A generic e-commerce project"}
        >
          A MERN e-commerce project to show both back and front end development
          and deployment of website
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
