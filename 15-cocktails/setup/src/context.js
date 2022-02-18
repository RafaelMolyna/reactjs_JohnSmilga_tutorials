import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

function AppProvider({ children }) {
  const [loading, set_loading] = useState(true);
  const [searchTerm, set_searchTerm] = useState('');
  const [cocktails, set_cocktails] = useState([]);

  const fetchDrinks = useCallback(async function(url) {
    set_loading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const filteredDrinks = drinks.map((item) => { 
          const {
            idDrink: id, 
            strDrink: name, 
            strDrinkThumb: image, 
            strAlcoholic: info, 
            strGlass: glass,
          } = item;
          return {id, name, image, info, glass};
        })
        set_cocktails(filteredDrinks)
      } else {
        set_cocktails([])
      }
    } catch (error) {
      console.log(error.message, ' sorry something went wrong...')
    }
    set_loading(false);
  }, [searchTerm])
  
  useEffect(() => {
    fetchDrinks(url);
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider 
      value={{
        loading,
        cocktails,
        set_searchTerm,
      }}>
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
