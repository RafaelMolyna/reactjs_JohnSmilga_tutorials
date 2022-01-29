import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  return (
    <main>
      <div className='container'>
        <h2>questions and answers about login</h2>
        <section className="info">
          {data.map(question => {
            return <Question key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
