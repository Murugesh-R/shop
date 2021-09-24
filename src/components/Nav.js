import React from 'react'

const Nav = () => {
	return (
		<div className="px-full nav-bg">
			<div id="main" className="flex py-10">
				<h1>SHOP</h1>
				<div id="search" className="flex">
					<input type="text" className="p-2 border-none" placeholder="search products"/>
					<button className="p-3 m-1 border-2 border-green-700 text-green-500">search</button>
				</div>
			</div>
		</div>
	)
}

export default Nav
