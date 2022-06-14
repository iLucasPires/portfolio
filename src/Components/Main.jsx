import React from "react";
import axios from "axios";
import { BtnNet } from "./Button";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Main() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://api.github.com/users/ilucaspires")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <main className="py-10 px-1 flex flex-col items-center">
      <div className="flex flex-col items-center w-full gap-2">
        <img
          className="block h-32 w-32 rounded-full"
          src={user?.avatar_url}
          alt="photo"
        />
        <div className="text-center">
          <h2 className="text-4xl">{user?.login}</h2>
        </div>
        <p className="text-center w-64">
          web developer, studied in 42 São Paulo, Brazil, constant learning and
          I'm always looking for new challenges 🚀.
        </p>
      </div>

      <ul className="md:w-6/12 flex flex-wrap justify-center gap-5 m-5">
        <li>
          <BtnNet
            href="https://www.linkedin.com/in/lucas-pires-nogueira-0239b8192/"
            img={FaLinkedinIn}
            name="Linkind"
          />
        </li>
        <li>
          <BtnNet
            href="https://github.com/IlucasPires"
            img={FaGithub}
            name="gitHub"
          />
        </li>
        <li>
          <BtnNet
            href="https://twitter.com/IlucasPires"
            img={FaTwitter}
            name="Twitter"
          />
        </li>
        <li>
          <BtnNet
            href="https://www.instagram.com/ilucaspires/"
            img={FaInstagram}
            name="Instagram"
          />
        </li>
      </ul>
    </main>
  );
}
