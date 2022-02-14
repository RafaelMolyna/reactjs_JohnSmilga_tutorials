import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import SideBar from './SideBar'
import Social from './Social'

const Navbar = function() {
  const [showLinks, set_showLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linkHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={() => set_showLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <SideBar array={links}/>
            </ul>
          </div>
          <Social array={social} />
        </div>
      </nav> 
    </>
  )
}

export default Navbar
