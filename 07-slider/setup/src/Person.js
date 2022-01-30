import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function Person({person, index, qtt}) {
  const {id, image, name, title, quote, i} = person;

  let position = '';
  if (i === index) {
    position = 'activeSlide';
  } else if (i === (index + 1) % qtt) {
    position = 'nextSlide';
  } else {
    position = 'lastSlide';
  }

  return (
    <article className={position} key={id} >
      <img src={image} alt={name} className='person-img'/>
      <h4>{name} </h4>
      <p className="title">{title} </p>
      <p className="text">{quote} </p>
      <FaQuoteRight className='icon' />
    </article>
  );
}

export default Person;
