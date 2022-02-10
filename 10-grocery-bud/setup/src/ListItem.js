import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ListItem(props) {
  const {title, removeItem, editItem} = props;

  return (
    <article className='grocery-item' >
      <p className="title">{title} </p>
      <div className="btn-container">
        <button className="edit-btn" type='button' onClick={editItem}>
          <FaEdit />
        </button>
        <button className="delete-btn" type='button' onClick={removeItem}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

export default ListItem;
