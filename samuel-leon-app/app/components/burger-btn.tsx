"use client";

import { useState } from "react";
import DropdownMenu from "./dropdown-menu";

import "../globals.css";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed rounded-xl z-10 top-4 right-4 w-[60px] h-12 flex flex-col justify-between items-center cursor-pointer overflow-hidden ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`w-full h-[5px] rounded-full transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-6 bg-white" : "bg-gray-800"
          }`}
        ></div>
        <div
          className={`w-full h-[5px] rounded transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "bg-gray-800"
          }`}
        ></div>
        <div
          className={`w-full h-[5px] rounded transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-6  bg-white" : "bg-gray-800"
          }`}
        ></div>
      </div>
      {isOpen && <DropdownMenu toggleMenu={toggleMenu} />}
    </>
  );
};

export default BurgerButton;
