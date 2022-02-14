import React, { useState, useContext } from 'react'

const AppContext = React.createContext();


const AppProvider = function({children}) {
  const [isSidebarOpen, set_isSidebarOpen] = useState(false);
  const [isModalOpen, set_isModalOpen] = useState(false);

  const openSidebar = () => {
    set_isSidebarOpen(true);
  }
  const closeSidebar = () => {
    set_isSidebarOpen(false);
  }
  
  const openModal = () => {
    set_isModalOpen(true);
  }
  const closeModal = () => {
    set_isModalOpen(false);
  }

  return (
    <AppContext.Provider value={{
      isSidebarOpen,
      isModalOpen,
      openModal,
      closeModal,
      openSidebar,
      closeSidebar,
    }}>
      {children}
    </AppContext.Provider>
  )
}



// custom hook:
// MUST HAVE "use" KEYWORD BEFORE FUNCTION NAME (context functions in react)

const useGlobalContext = function() {
  return useContext(AppContext);
}
 
export { AppContext, AppProvider, useGlobalContext }
