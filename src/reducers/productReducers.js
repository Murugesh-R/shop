import { ADD_PRODUCT_REVIEW_FAILURE, ADD_PRODUCT_REVIEW_REQUEST, ADD_PRODUCT_REVIEW_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {products: []}, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload }
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productDetailsReducer = (state = {product: { reviews: [] }}, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true }
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAILURE:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const addProductReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_PRODUCT_REVIEW_REQUEST:
			return { ...state, loading: true }
		case ADD_PRODUCT_REVIEW_SUCCESS:
			return { loading: false, success: true }
		case ADD_PRODUCT_REVIEW_FAILURE:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}