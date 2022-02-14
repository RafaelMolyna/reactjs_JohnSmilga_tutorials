import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'
import Links from './Links'
import Social from './Social'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="coding addict " className='logo' />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <Links {...{links}}/>
        <Social {...{social}}/>
      </aside>
    </>
  )
}

export default Sidebar
