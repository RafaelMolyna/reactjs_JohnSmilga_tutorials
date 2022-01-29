import React from 'react';

const ListItem = function(person) {
  const {name, image, age, func, id} = person;
  const setPeople = () => func(id);
  
  return (
    <article className='person' >
      <img src={image} alt={name} />
      <div>
          <h4>{name}</h4>
          <p>{age} years</p>
      </div>
      <button onClick={setPeople}>clear-me</button>
    </article>
  );
};

export default ListItem;
