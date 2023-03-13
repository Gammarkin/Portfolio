import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [devName, setDevName] = useState("Marcos Roberto");
  return (
    <header className="header__container">
      <section className="header__developer">
      <a
      onMouseOver={() => { setDevName('🪐 gammarkin 🪐') }}
      onMouseLeave={() => { setDevName('Marcos Roberto') }}
      className="header__developer_name"
      href="https://github.com/gammarkin"
      target="_blank"
      rel="noreferrer"
      >
        {devName}
      </a>
      <p className="header__developer_position">Full-Stack Developer</p>
      </section>

      <ul className="header__link_container">
        <li className="header__link">
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li className="header__link">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="header__link">
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </header>
  );
}
