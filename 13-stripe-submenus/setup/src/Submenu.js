import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  const { isSubmenuOpen, location, page:{page, links} } = useGlobalContext();
  
  const container =  useRef(null);

  const [columns, set_columns] = useState('col-2');
  
  useEffect(() => {
    set_columns('col-2');
    if (links.length === 3) set_columns('col-3');
    else if (links.length > 3) set_columns('col-4');
    console.log(page)
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location, links]);

  return (
    <aside ref={container} className={`submenu ${isSubmenuOpen ? 'show' : ''}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, i) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={i} >
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
