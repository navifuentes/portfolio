import React from "react";
import IconPill from "../IconPill";
import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedInIcon from "../icons/LinkedIn";
import WhatsAppIcon from "../icons/WhatsApp";

const Footer = () => {
  return (
    <div className="text-center text-white h-2/5 flex justify-between mx-10 py-10">
      <div>© 2024 Ivan Fuentes </div>
      <div>
        <IconPill uri={"https://github.com/navifuentes"}>
          <GithubIcon />
        </IconPill>
        <IconPill uri={"https://www.instagram.com/navi.fuentes/"}>
          <InstagramIcon />
        </IconPill>
        <IconPill uri={"https://www.linkedin.com/in/navi-fuentes/"}>
          <LinkedInIcon />
        </IconPill>
        <IconPill>
          <WhatsAppIcon />
        </IconPill>
      </div>
    </div>
  );
};

export default Footer;
