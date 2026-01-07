import axios from 'axios'

const API_CART = 'https://691226ca52a60f10c820ce49.mockapi.io/cartData'

export const fetchCart = async (dispatch) => {
  try {
    const responce = await axios.get(API_CART)
    dispatch({ type: 'FETCH_CART', payload: responce.data })
  } catch (error) {
    console.log(error)
  }
}

export const addToCart = async (dispatch, product) => {
  try {
    const responce = await axios.post(API_CART, {
      title: product.title,
      price: product.price,
      image: product.image,
    })
    dispatch({ type: 'ADD_TO_CART', payload: responce.data })
  } catch (error) {
    console.log(error)
  }
  console.log('ADD TO CART', product)
}

export const removeFromCart = async (dispatch, id) => {
  try {
    await axios.delete(`${API_CART}/${id}`)
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  } catch (error) {
    console.log(error)
  }
}
