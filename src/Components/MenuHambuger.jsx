import React from "react";
import { MenuContext } from "../Context/HandleMenu";
export default function MenuHambuger() {

    const [menu, setMenu, handleMenu] = React.useContext(MenuContext);
 
  return (
    <button
      className={`lex pace-y-2 s pointer z-20 flex flex-col justify-between h-5 duration-1000 ${menu && "rotate-180"}`}
      onClick={handleMenu}
    >
      <span
        className={`block w-8 h-0.5 bg-white duration-500 origin-left rounded ${
          menu && "rotate-45"
        }`}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-white duration-500 origin-left rounded ${
          menu && "hidden"
        }`}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-white duration-500 origin-left rounded ${
          menu && "-rotate-45"
        }`}
      ></span>
    </button>
  );
}
