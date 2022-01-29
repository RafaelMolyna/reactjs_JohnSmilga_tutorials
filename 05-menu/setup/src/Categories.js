import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button className='filter-btn'
                  key={i}
                  onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
