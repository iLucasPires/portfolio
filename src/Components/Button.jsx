import React from "react";

export function BtnNet(props) {
  return (
    <a
      className="bg-blue-600 rounded p-full flex items-center justify-center gap-2 h-10 px-5 text-white"
      href={props.href}
    >
      <props.img />
      <span className=" font-bold uppercase ">{props.name}</span>
    </a>
  );
}

export function CardTec(props) {
  return (
    <li className={`h-7 px-5 rounded flex items-center justify-center gap-1 ${props.bg}`}>
      <props.img />
      <span>{props.name}</span>
    </li>
  );
}
