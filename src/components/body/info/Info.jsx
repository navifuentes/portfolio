import React from "react";
import { TypeAnimation } from "react-type-animation";
import Badge from "../../Badge";
import IconPill from "../../IconPill";

import LinkedInIcon from "../../icons/LinkedIn";
import GitHubIcon from "../../icons/Github";
import MailIcon from "../../icons/Mail";

const Info = () => {
  return (
    <section id="Info" className="flex flex-row my-44">
      <div className="mx-4 mb-4">
        <div className="flex flex-col items-center m-4">
          <Badge uri="https://www.linkedin.com/in/navi-fuentes/">
            Open to work
          </Badge>
          <div className="text-4xl my-2">
            Hey!, I'm <span className="text-snow/50">Ivan Fuentes</span>
          </div>
          <div className="text-3xl my-2 text-snow/90">
            I'm{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Developer ",
                1000,
                "Front End Developer ",
                1000,
                "Back End Developer ",
                1000,
                "Software Developer ",
                1000,
                "MERN Developer ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "text-3xl", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <hr className="sm:bg-black bg-black w-1/2" />
        </div>
        <div className="p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          laboriosam alias nisi repudiandae doloribus quaerat placeat quas
          laudantium quos, minima fugit ipsa ex iure reiciendis qui distinctio
          aut molestiae aspernatur incidunt perferendis accusantium nemo aperiam
          odio. Nisi nam praesentium ipsa?
        </div>
        <nav className="flex gap-x-4">
          <IconPill uri={"https://github.com/navifuentes"} text={"GitHub"}>
            <GitHubIcon />
          </IconPill>
          <IconPill
            uri={"https://www.linkedin.com/in/navi-fuentes/"}
            text={"LinkedIn"}
          >
            <LinkedInIcon />
          </IconPill>
          <IconPill uri={"mailto:iv.ifa94@gmail.com"} text={"Contact me"}>
            <MailIcon />
          </IconPill>
        </nav>
      </div>

      <div className="mx-4 my-14">
        <img src="https://placehold.co/1000" alt="" />
      </div>
    </section>
  );
};

export default Info;
