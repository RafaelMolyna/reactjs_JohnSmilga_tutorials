import React, { useState } from 'react';
import data from './data';


function App() {
  const [count, set_count] = useState(0);
  const [text, set_text] = useState(0);

  const handleSubmit = function(e) {
    e.preventDefault();
    let hipsterParag = parseInt(count);
    if (hipsterParag < 0) {
      hipsterParag = 1;
    } 
    set_text(hipsterParag);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit} >
          <label htmlFor="amount">
            hipster paragraphs:
          </label>
          <input type="number"
                name='amount'
                id='amount'
                value={count}
                onChange={(e) => {set_count(e.target.value)}} />
        <button type='submit' className='btn' >
          generate it:
        </button>
      </form>
      {data.slice(0, text).map((paragraph, i) => {
        return (
          <p key={i} >{paragraph} </p>
        );
      })}
    </section>
    )
}

export default App;
