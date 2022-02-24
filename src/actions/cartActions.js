import axios from "axios"
import { ADD_CART_ITEMS, REMOVE_CART_ITEMS } from "../constants/cartConstants"

const baseUrl = 'http://localhost:8082'

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(baseUrl+`/product/${id}`)


	dispatch({
		type: ADD_CART_ITEMS,
		payload: {
			id: data.id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
	})
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeCartItem = (id) => async (dispatch, getState) => {
	console.log("fired")
	dispatch({
		type: REMOVE_CART_ITEMS,
		payload: id
	})
	
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}