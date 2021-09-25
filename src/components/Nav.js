import React from 'react'
import {CartFill, PersonFill} from 'react-bootstrap-icons'

const Nav = () => {
	return (
		<div className="h-20 w-full nav-bg flex items-center justify-around">
			<div id="main" className="flex items-center">
				<h1 className="text-white text-xl mr-5">SHOP</h1>
				<div id="search" className="flex ml-5">
					<input type="text" className="h-12 p-2 border-none" placeholder="Search Products..."/>
					<button className="p-2 ml-3 border-2 border-green-700 text-green-500">SEARCH</button>
				</div>
			</div>
			<div className="flex">
				<div className="flex">
					<CartFill color="white"/>
					<p className="text-sm ml-1 text-white">CART</p>
				</div>
				<div className="flex mx-4">
					<PersonFill color="white"/>
					<p className="text-sm ml-1 text-white">SIGN IN</p>
				</div>
			</div>
		</div>
	)
}

export default Nav
