"use client";

import React from "react";
import { FaAngleUp } from "react-icons/fa";

//scroll function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) return setVisible(true);
    if (scrolled <= 900) return setVisible(false);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }
  return (
    <>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="fixed top-[80%] left-[85%] z-99999999999 w-[50px] h-[50px] p-1 text-xl border-0 opacity-30 transition-all delay-300 ease-in rounded-[50%] outline-0 cursor-pointer flex justify-center items-center md:leff-[90%] md:text-2xl ld:w-[95%] 2xl:left-[90%] 2xl:w-[60px] 2xl:height-[60px] 2xl:text-3xl hover:opacity-4 hover:transition-all hover:delay-300 hover:ease-in-out"
        aria-label="scroll-up"
      >
        <FaAngleUp />
      </button>
    </>
  );
};
