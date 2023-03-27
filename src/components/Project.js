import React from 'react';

export default function Projects({ img, description, link }) {
  return (
    <a href={link} rel='noreferrer' target='_blank' className="project__link">
      <img src={img} alt={description} className="project__image" />
    </a>
  )
};
