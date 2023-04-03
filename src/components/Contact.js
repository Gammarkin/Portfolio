import React from 'react';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github-sign.png';

export default function Contact() {
  return (
    <section className="contact__container" id="contact">
      <span className="contact__msg">Interessado(a) em embarcar nessa jornada?</span>

      <span className="contact__msg">
        me mande uma mensagem {' '}
        <a className="contact__email" href="mailto:marcosrbnsf@gmail.com">
          marcosrbnsf@gmail.com
        </a>
      </span>

      <div className="contact__links">
        <a
          href="https://www.linkedin.com/in/mknmarcosfilho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__icon" src={linkedinIcon} alt="linkedin" />
        </a>

        <a
          href="https://github.com/gammarkin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__icon" src={githubIcon} alt="github" />
        </a>
      </div>
    </section>
  );
}
