import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const qtt = people.length;

  const prevPerson = function() {
    setIndex(index => {
      return (index - 1 + qtt) % qtt;
    });
  }
  const nextPerson = function() {
    setIndex(index => {
      return (index + 1) % qtt;
    });
  }
  const randomPerson = function() {
    setIndex(index => {
      let newIndex = Math.floor(Math.random() * qtt);
      while (newIndex === index && qtt > 1) {
        newIndex = Math.floor(Math.random() * qtt)
      }
      return newIndex;
    });
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon' >
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name} </h4>
      <p className="job"> {job} </p>
      <p className="info"> {text} </p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
