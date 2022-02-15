
const reducer = function(state, action) {

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: []};
  } else if (action.type === 'REMOVE_ITEM') {
    const id = action.payload;
    const newCart = state.cart.filter(item => item.id !== id)
    return { ...state, cart: newCart};

  } else if (action.type === 'INCREASE_ITEM') {
    const id = action.payload;
    // Deep copy:
    const newCart = state.cart.map(item => {return {...item};});
    const item = newCart.find(item => item.id === id)
    item.amount += 1;
    return { ...state, cart: newCart};

  } else if (action.type === 'DECREASE_ITEM') {
    const id = action.payload;
    // Deep copy:
    const newCart = state.cart.map(item => {return {...item};});
    const item = newCart.find(item => item.id === id)
    if (item.amount > 1) {
      item.amount -= 1;
    }
    return { ...state, cart: newCart};

  } else if (action.type === 'UPDATE_TOTALS') {
    const {totalValue, numItems} = state.cart.reduce((acc, curr) => {
      const {price, amount} = curr;
      const totalValue = acc.totalValue + price * amount;
      const numItems = acc.numItems + amount;
      return {totalValue, numItems};
    },{
      totalValue: 0,
      numItems: 0
    })
    return { ...state, totalValue, numItems}

  } else if (action.type === 'LOADING') {
    return { ...state, loading: true };

  } else if (action.type === 'GET_ITEMS') {


    return { ...state, loading: false, cart: action.payload};

  } else if (action.type === '') {
  } else {
    throw new Error('OPSSS :P ........');
  }
  
  
}

export default reducer
