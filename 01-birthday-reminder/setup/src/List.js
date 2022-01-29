import React from 'react';
import ListItem from './ListItem';

const List = function({people, func}) {
  return (
    <>
      {people.map(person => 
        <ListItem key={person.id} func={func} {...person}/>)}
    </>
  );
};

export default List;
