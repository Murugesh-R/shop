import { ADD_CART_ITEMS, REMOVE_CART_ITEMS } from "../constants/cartConstants";

export const cartReducer = (
	state = { cartItems: [], shippingAddress: {} },
	action
) => {
	switch (action.type) {
		case ADD_CART_ITEMS:
			const item = action.payload
			const existItem = state.cartItems.find((x) => x.id === item.id)

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => 
						x.id === existItem.id ? item : x
					),
				}
			} else {
				return {
					...state, 
					cartItems: [...state.cartItems, item]
				}
			}
		
		case REMOVE_CART_ITEMS:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.id !== action.payload)
			}
		
		default:
			return state
	}
}