import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);
  const setFiltered = function(id) {
    setPeople(oldPeople => {
        let newPeople = oldPeople.filter(person => person.id !== id)
        return newPeople;
    })
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} func={setFiltered} />
        <button onClick={() => setPeople([])} >
          clear all
        </button>
        <button onClick={() => setPeople(data )} >
          remember all
        </button>
      </section>
    </main>
  );
}

export default App;
