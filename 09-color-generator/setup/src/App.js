import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js';

function App() {
  const [color, set_color] = useState('');
  const [error, set_error] = useState(false);
  const [list, set_list] = useState(new Values('#19a').all(5));


  const handleSubmit = function(e) {
    e.preventDefault();
    console.log(color, typeof color)
    try {
      let colors = new Values(color).all(5);
      set_list(colors);
      set_error(false);
    } catch (error) {
      set_error(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className='container' >
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} >
          <input type="text"
                 value={color} 
                 onChange={(e) => set_color(e.target.value)}
                 placeholder='#f1e2d3'
                 className={`${error ? 'error' : null}`} />
          <button className="btn" type='submit' >
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, i) => {
          const hex = color.hex;
          return <SingleColor key={i} {...color} index={i} hexColor={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
