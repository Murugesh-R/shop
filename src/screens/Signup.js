import React from 'react'

const Signup = () => {
	return (
		<div class="flex px-72 items-center">
			<div className="px-48 py-8 w-full">
				<h1 className="text-4xl mb-6">SIGN IN</h1>
				<div id="form" className="">
					<p className="my-1">Name</p>
					<input type="text" className="w-5/6 h-10 px-2 bg-gray-100"/>
					<p className="my-1">Email Address</p>
					<input type="email" className="w-5/6 h-10 px-2 bg-gray-100"/>
					<p className="my-1">Password</p>
					<input type="password" className="w-5/6 h-10 px-2 bg-gray-100"/>
				</div>
				<button className="p-3 mt-3 text-sm bg-black text-white ">SIGN IN</button>
				<div className="flex mt-2 ">
					<p className="text-gray-700 mr-2">Already have an account? </p>
					<a href="/login" className="text-gray-800">Login</a>
				</div>
			</div>
		</div>
	)
}

export default Signup
