import React from "react";
import { FaReact, FaHtml5, FaNodeJs, FaCss3, FaSass } from "react-icons/fa";
import {
  SiCloudera,
  SiTailwindcss,
  SiFigma,
  SiLinux,
  SiGimp,
} from "react-icons/si";
import { CardTec } from "./Button";

export default function About() {
  return (
    <section className="w-screen bg-zinc-900 flex flex-col gap-10 items-center p-10 ">
      <h2 className="text-2xl">Tecnlogia</h2>
      <p className="text-center">
        web developer, studied in 42 São Paulo, Brazil, constant learning and
        I'm always looking for new challenges 🚀.
      </p>
      <ul className="flex flex-wrap justify-center gap-2 md:w-6/12">
        <CardTec name="Node.js" bg="bg-green-600" img={FaNodeJs} />
        <CardTec name="Html" bg="bg-red-600" img={FaHtml5} />
        <CardTec name="C" bg="bg-indigo-600" img={SiCloudera} />
        <CardTec name="React.js" bg="bg-cyan-600" img={FaReact} />
        <CardTec name="Tailwind" bg="bg-blue-600" img={SiTailwindcss} />
        <CardTec name="Figma" bg="bg-rose-600" img={SiFigma} />
        <CardTec name="Linux" bg="bg-orange-600" img={SiLinux} />
        <CardTec name="Css" bg="bg-yellow-600" img={FaCss3} />
        <CardTec name="Sass" bg="bg-purple-600" img={FaSass} />
        <CardTec name="Gimp" bg="bg-stone-600" img={SiGimp} />
      </ul>
    </section>
  );
}
