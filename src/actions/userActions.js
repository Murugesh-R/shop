import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants"
import axios from 'axios'

const baseUrl = "http://localhost:8082"

export const login = (username, password) => async (dispatch, getState) => {
	const loginFormData = new FormData()
	loginFormData.append("username", username)
	loginFormData.append("password", password)

	try {
		dispatch({type: USER_LOGIN_REQUEST})
		let config = {
			headers: { "Content-Type": "multipart/form-data" },
			Accept: "application/json",
		} 
		const {data} = await axios.post(baseUrl+'/login',loginFormData, config); 

		config = {
			headers: {
				Authorization: `Bearer ${data.access_token}`
			}
		}
		const res = await axios.get(baseUrl+"/user/info", config)
		data["name"] = res.data
		localStorage.setItem("userInfo", JSON.stringify(data))
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})
	} catch (err) {
		console.log(err)
		dispatch({
			type: USER_LOGIN_FAILURE,
			payload: err.response.data.message
		})
	}
}

export const signup = (name, email, password) => async(dispatch) => {

	try {
		dispatch({ type: USER_SIGNUP_REQUEST})
		const config = {
			headers: { "Content-Type": "application/json" }
		}
		const data = await axios.post(baseUrl+'/user/signup', {name, email, password},config, )

		dispatch({
			type: USER_SIGNUP_SUCCESS,
			payload: data
		})
	} catch (err) {
		dispatch({
			type: USER_SIGNUP_FAILURE,
			payload: err.response.data.message
		})
	}
}

export const logout = () => (dispatch) => {
	localStorage.removeItem("userInfo")
	dispatch({ type: USER_LOGOUT })
}
