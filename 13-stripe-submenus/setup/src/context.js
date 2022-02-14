import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = function({children}) {
  const [isSidebarOpen, set_isSidebarOpen] = useState(false);
  const [isSubmenuOpen, set_isSubmenuOpen] = useState(false);
  const [location, set_location] = useState({});
  const [page, set_page] = useState({page: '',links: []});

  const openSidebar = () => {set_isSidebarOpen(true);};
  const closeSidebar = () => {set_isSidebarOpen(false);};
  const closeSubmenu = () => {set_isSubmenuOpen(false);};
  
  const openSubmenu = (text, position) => {
    const page = sublinks.find(link => link.page === text);
    set_page(page);
    set_location(position);
    set_isSubmenuOpen(true);
  };

  return (
    <AppContext.Provider value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSidebar,
      closeSidebar,
      openSubmenu,
      closeSubmenu,
      location,
      page,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext);
