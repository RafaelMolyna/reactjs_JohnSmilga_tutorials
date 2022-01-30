import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Person from './Person';
import Title from './Title';
import data from './data';

function App() {
  const [people, set_people] = useState(data);
  const [index, set_index] = useState(0);
  const qtt = people.length;

  const nextSlide = function() {
    set_index(i => (i + 1) % qtt);
  }
  const prevSlide = function() {
    set_index(i => (i - 1 + qtt) % qtt);
  }

  useEffect(() => {
    let slider = setTimeout(() => {
      nextSlide();
    }, 3*1000);
    return () => {
      clearTimeout(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <Title />

      <div className="section-center">
        {people.map((person, i) => {
          person.i = i;
          return <Person person={person}  index={index} qtt={qtt}/>
        })}

        <button className='prev' onClick={prevSlide} >
          <FiChevronLeft />
        </button>

        <button className='next' onClick={nextSlide} >
          <FiChevronRight />
        </button>

      </div>
    </section>
  );
}

export default App;
