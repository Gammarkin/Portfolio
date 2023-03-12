import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header>
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
