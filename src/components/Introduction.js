import React from "react";
import Saturn from "./Saturn";
import IntroMessage from "./IntroMessage";

export default function Introduction() {
  return (
    <section className="intro__container">
      <IntroMessage />
      <Saturn />
    </section>
  )
}
