import React, { /*useState,*/ useContext, useReducer, useEffect } from 'react'
// import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: [],
  totalValue: 0,
  numItems: 0,
}




const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => dispatch({type: 'CLEAR_CART'});
  const removeItem = (id) => dispatch({type: 'REMOVE_ITEM', payload: id});
  const increaseItem = (id) => dispatch({type: 'INCREASE_ITEM', payload: id});
  const decreaseItem = (id) => dispatch({type: 'DECREASE_ITEM', payload: id});
  
  // const getItems = () => {
  //   dispatch({type: 'LOADING'});
  //   let data = fetch(url)
  //     .then(resp => {
  //       return resp.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       dispatch({type: 'GET_ITEMS', payload: data});
  //       return data;
  //     })
  //     .catch(err => {
  //       console.log('fetch trying went wrong :('))
  //     });
  // }
  const getItems = async function() {
    try {
      dispatch({type: 'LOADING'});
      let resp = await fetch(url)
      let data = await resp.json();
      dispatch({type: 'GET_ITEMS', payload: data});
    } catch (error) {
      console.log('fetch trying went wrong :(');
  }

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    dispatch({type:'UPDATE_TOTALS'});
  },[state.cart]);

  return (
    <AppContext.Provider
      value={{
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
