import React from "react";
import { MenuContext } from "../Context/HandleMenu";

export default function Menu() {
  const [menu, setMenu] = React.useContext(MenuContext);
  const listMenu = ["Home", "About", "Contact"];

  return (
    <ul
      className={`
        absolute
        z-10
        w-72
        bg-zinc-900 
        inset-y-0 
        duration-1000 ${menu ? "right-0 " : "-right-72 invisible "}`}
    >
      {listMenu.map((item, index) => (
        <li
          key={index}
          className={`
            hover:border-inherit 
            w-full 
            p-5 
            border-l-8 
            border-transparent 
            odd:bg-zinc-800`}
        >
          <a className="text-white text-bold m-auto" href={item}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
