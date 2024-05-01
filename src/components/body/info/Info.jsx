import React from "react";
import { TypeAnimation } from "react-type-animation";
import Badge from "../../Badge";
import IconPill from "../../IconPill";

import LinkedInIcon from "../../icons/LinkedIn";
import GitHubIcon from "../../icons/Github";
import MailIcon from "../../icons/Mail";
import profilePic from "../../../assets/minProf.png";

const Info = () => {
  return (
    <section id="Info" className="flex sm:flex-row sm:my-20 flex-col-reverse items-center">
      <div className="mx-4 mb-4">
        <div className="flex flex-col items-center m-4">
          <Badge uri="https://www.linkedin.com/in/navi-fuentes/">
            Open to work
          </Badge>
          <div className="sm:text-4xl text-base my-2">
            Hey!, I'm <span className="text-snow/50">Ivan Fuentes</span>
          </div>
          <div className="sm:text-3xl text-base my-2 text-snow/90">
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
        <div className="p-4 sm:w-[60vw]">
          <p className="pb-4 sm:text-xl text-xs">
            Welcome to my portfolio! 😊 I'm a Full Stack Web Developer who's
            passionate about learning and overcoming challenges. Whether it's
            coding up slick interfaces with HTML, CSS, and JavaScript or diving
            into the backend with Node.js, I'm always up for it.
          </p>
          <p className="pb-4 sm:text-xl text-xs">
            I'm all about staying on top of the latest trends and tech. From
            checking out the newest JavaScript frameworks to tinkering with
            cloud computing, I'm constantly expanding my toolkit.
          </p>
          <p className="pb-4 sm:text-xl text-xs">
            Let's team up and build something awesome together!
          </p>
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

      <div className="mx-4 my-14 flex justify-center">
        <img
          className="rounded-full max-h-52"
          src={profilePic}
          alt=""
        />
      </div>
    </section>
  );
};

export default Info;
