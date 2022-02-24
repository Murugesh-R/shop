import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {CartFill, PersonFill, BoxArrowInRight} from 'react-bootstrap-icons'
import { logout } from '../actions/userActions'

const Nav = () => {

	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
  	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<div className="h-20 w-full nav-bg flex items-center justify-around">
			<div id="main" className="flex items-center">
				<Link to={'/'}>
					<h1 className="text-white text-xl mr-5">SHOP</h1>
				</Link>
				<div id="search" className="flex ml-5">
					<input type="text" className="h-12 p-2 border-none" placeholder="Search Products..."/>
					<button className="p-2 ml-3 border-2 border-green-700 text-green-500">SEARCH</button>
				</div>
			</div>
			<div className="flex">
				<div className="flex">
					<CartFill color="white"/>
					<Link to={'/cart'}>
						<p className="text-sm ml-1 text-white">CART</p>
					</Link>
				</div>
				{userInfo ? (
					<div className="flex mx-4">
						<PersonFill color="white"/>
						<p className="text-sm ml-1 text-white">{(userInfo.name).toUpperCase()}</p>
						<BoxArrowInRight color="white" class="ml-4 mb-1"/>
						<p className="text-sm ml-1  text-white" onClick={logoutHandler}>LOGOUT</p>
					</div>
				) : (
					<Link to={"/login"}>
						<div className="flex mx-4">
							<PersonFill color="white"/>
							<p className="text-sm ml-1 text-white">SIGN IN</p>
						</div>
					</Link>
				)}
			</div>
		</div>
	)
}

export default Nav
