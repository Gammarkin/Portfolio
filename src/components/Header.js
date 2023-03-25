import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="header__container">
      <section className="header__developer">
        <a
          className="header__developer_name"
          href="https://github.com/gammarkin"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Roberto
        </a>
        <p className="header__developer_position">Full-Stack Developer</p>
      </section>

      <ul className="header__link_container">
        <li className="header__link">
          <HashLink to="/#about">Sobre</HashLink>
        </li>
        <HashLink className="header__link link__contact">
          <li to="/#contact">Contato</li>
        </HashLink>
      </ul>
    </header>
  );
}
