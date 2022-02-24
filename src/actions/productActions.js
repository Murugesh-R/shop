import { ADD_PRODUCT_REVIEW_FAILURE, ADD_PRODUCT_REVIEW_REQUEST, ADD_PRODUCT_REVIEW_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import axios from 'axios'

const baseUrl = "http://localhost:8082"

export const getAllProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST })
		const {data} = await axios.get(baseUrl+"/product/all")

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data
		})
	} catch (err) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: err.response.data
		})
	}
}

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST })
		const {data} = await axios.get(baseUrl+`/product/${id}`)
		
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data
		})
	} catch (err) {
		dispatch({
			type: PRODUCT_DETAILS_FAILURE,
			payload: err.response.data
		})
	}
}

export const addProductReview = (review) => async (dispatch, getState) => {
	try {
		console.log("action " + JSON.stringify(review))
		dispatch({ type: ADD_PRODUCT_REVIEW_REQUEST })
		const { userLogin: { userInfo } } = getState()
		
		Object.assign(review, {name: userInfo.name})
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.access_token}`,
				'Content-Type': 'application/json',
			}
		}
		console.log(config)
		const {data} = await axios.post(baseUrl+"/product/addReview", review, config)

		dispatch({ type: ADD_PRODUCT_REVIEW_SUCCESS })
	} catch (err) {
		dispatch({ type: ADD_PRODUCT_REVIEW_FAILURE, payload: err.data })
	}
}
