"use client";

import { useState } from 'react';

import "../globals.css";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed rounded-xl z-10 top-4 left-4 w-[80px] h-12 flex flex-col justify-between items-center cursor-pointer overflow-hidden ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`w-full h-[5px] rounded-full transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-6 bg-white' : 'bg-gray-800'}`}></div>
        <div className={`w-full h-[5px] rounded transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'bg-gray-800'}`}></div>
        <div className={`w-full h-[5px] rounded transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-6  bg-white' : 'bg-gray-800'}`}></div>
      </div>
      {isOpen && (
        <div className="fixed z-5 inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center">
          <ul className="text-white text-2xl">
            <li className="menu-option" onClick={toggleMenu}>Menu Item 1</li>
            <li className="menu-option" onClick={toggleMenu}>Menu Item 2</li>
            <li className="menu-option" onClick={toggleMenu}>Menu Item 3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerButton;