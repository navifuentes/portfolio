import React from "react";
import StudiesPill from "./StudiesPill";

const Timeline = () => {
  const coderHouseStudies = [
    {
      key: 1,
      uri: "https://www.coderhouse.com/es/certificados/62f29d68771bf60019110e0a?lang=es",
      tag: "Html & Css",
    },
    {
      key: 2,
      uri: "https://www.coderhouse.com/es/certificados/6378ecb939938b000e9d579c?lang=es",
      tag: "Javascript",
    },
    {
      key: 3,
      uri: "https://www.coderhouse.com/es/certificados/64faa8c5ff180cbf89e3897c?lang=es",
      tag: "Back End",
    },
  ];
  const fullstackOpenStudies = [
    {
      key: 4,
      uri: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/3d63cbd2fe0e2a13a8c0d89950184ef7",
      tag: "Full Stack",
    },
    {
      key: 5,
      uri: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/f3b0c56a1529074da18029129e62f229",
      tag: "GraphQL",
    },
  ];

  return (
    <div>
      <span className="py-4 border-l-4 ml-2.5 pl-16 text-xs tracking-widest">
        2022-2023
      </span>
      <div className="animate-ping absolute bg-cyan rounded-full h-6 w-6"></div>
      <div className="absolute bg-cyan rounded-full h-6 w-6"></div>
      <p className="border-l-4 pb-4 ml-2.5 pl-20 sm:text-3xl text-xs">Coderhouse</p>
      <ul className="border-l-4 ml-2.5 border-stone-300 ">
        {coderHouseStudies.map((s) => (
          <StudiesPill key={s.key} uri={s.uri} tag={s.tag} />
        ))}
      </ul>
      <span className="py-4 border-l-4 ml-2.5 pl-16 text-xs tracking-widest">
        2024
      </span>
      <div className="animate-ping absolute bg-cyan rounded-full h-6 w-6"></div>
      <div className="absolute bg-cyan rounded-full h-6 w-6"></div>
      <p className="border-l-4 pb-4 ml-2.5 pl-20 sm:text-3xl text-xs">FullStacOpen</p>
      <ul className="border-l-4 ml-2.5 border-stone-300">
        {fullstackOpenStudies.map((s) => (
          <StudiesPill key={s.key} uri={s.uri} tag={s.tag} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
