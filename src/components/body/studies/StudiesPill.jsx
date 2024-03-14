import React, { useState } from "react";
import ForwardIcon from "../../icons/Forward";

const StudiesPill = ({ tag, uri }) => {
  const [visible, setVisible] = useState(null);
  const [transition, setTransition] = useState(null);

  const show = visible ? "absolute fadePillIn" : " absolute invisible";
  const move = transition
    ? "translate-x-2/3 ease-in transition delay-300 flex"
    : "transition ease-out flex";
  const icon = transition ? "fadeIconOut" : "eager";

  const handleHover = (bool) => {
    setTransition(bool);
    setVisible(bool);
  };
  return (
    <li
      onMouseOver={() => handleHover(true)}
      onMouseOut={() => handleHover(null)}
    >
      <a className={show} href={uri}>
        Diploma
      </a>
      <p className={move}>
        {tag}

        <i className={icon}>
          <ForwardIcon />
        </i>
      </p>
    </li>
  );
};

export default StudiesPill;
