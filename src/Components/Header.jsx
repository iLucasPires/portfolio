import React from "react";
import MenuHambuger from "./MenuHambuger";
import Menu from "./Menu";
import { FaCode } from "react-icons/fa";
export default function () {
  return (
    <header className="relative flex items-center justify-between h-20 px-5 bg-zinc-900 border-b-[1px] border-zinc-600">
      <a
        href="#"
        className="text-white font-bold text-2xl flex items-center gap-2"
      >
        <FaCode /> <span>Lucas</span>
      </a>
      <nav className="relative" id="menu" aria-label="primary">
        <Menu />
        <MenuHambuger />
      </nav>
    </header>
  );
}
