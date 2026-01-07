const initialState = {
  items: [],
}

const cartReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_CART') {
    return {
      ...state,
      items: action.payload,
    }
  }
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      items: [...state.items, action.payload],
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      items: state.items.filter((el) => el.id !== action.payload),
    }
  }
  return state
}

export default cartReducer
