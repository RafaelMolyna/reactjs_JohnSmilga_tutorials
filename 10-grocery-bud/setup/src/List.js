import React from 'react';
import ListItem from './ListItem'

const List = function(props) {
  const {itemsArr, editItem, removeItem} = props;
  
  return (
    <div className="grocery-list">
      {itemsArr.map((item) => {
        const {id, title} = item;
        return <ListItem key={id} {...{title}} 
          removeItem={() => removeItem(id)} 
          editItem={() => editItem(id)} />
      })}
    </div>
  )
}

export default List
