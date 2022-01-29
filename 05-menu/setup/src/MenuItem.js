import React from "react";

const MenuItem = function(menuInfo) {
const {title, img, desc, price} = menuInfo;
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='photo' />
      <div className="item-info">
        <header>
          <h4>{title} </h4>
          <h4 >{price} </h4>
        </header>
        <p className='item-text' >{desc} </p>
      </div>
    </article>
  );
}

export default MenuItem;
