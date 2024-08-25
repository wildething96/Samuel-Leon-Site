import React from "react";

type DropdownMenuProps = {
  toggleMenu: () => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ toggleMenu }) => {
  return (
    <div className="fixed z-5 inset-2 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-start pt-20">
      <ul className="text-white text-5xl flex flex-col space-y-20">
        <li className="menu-option" onClick={() => toggleMenu()}>
          Menu Item 1
        </li>
        <li className="menu-option" onClick={() => toggleMenu()}>
          Menu Item 2
        </li>
        <li className="menu-option" onClick={() => toggleMenu()}>
          Menu Item 3
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
