import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header>
      <p>Marcos Roberto</p>
      <p>Full-Stack Developer</p>

      <ul>
        <li>
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </header>
  );
}
