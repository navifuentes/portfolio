import React from "react";

const Badge = ({ children, uri }) => {
  return (
    <div className="relative ">
      <span className="absolute left-10 lg:left-52 -bottom-2 inline-flex overflow-hidden rounded-tr-full rounded-tl-full rounded-br-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        <a
          href={uri}
          className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"
        >
          {children}
        </a>
      </span>
    </div>
  );
};

export default Badge;
