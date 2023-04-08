import React from 'react';

export default function Projects({ img, description, link, title, planet: Planet }) {
  return (
    <a
      title={title}
      href={link}
      rel='noreferrer'
      target='_blank'
      className="project__link">
      <Planet />

      <section className='planet__container'>
        <span className='planet__name'>Planeta {title}</span>
        <span className='planet__desc'> - {description} - </span>
      </section>
    </a>
  )
};
