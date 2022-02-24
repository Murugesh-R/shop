import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userLoginReducer, userSignupReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";


const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	userLogin: userLoginReducer,
	userSignup: userSignupReducer,
	cart: cartReducer
})

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []

const initialState = {
	userLogin: { userInfo: userInfoFromLocalStorage }
}

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store