import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {login} from '../actions/userActions'

const Login = ({history}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	useEffect(() => {
		if (userInfo) {
			console.log("userinfo in login " + userInfo)
			history.push("/")
		}
	}, [userInfo])	

	const submitInfo = () => {
		console.log("login clicked")
		dispatch(login(username, password))
	} 

	return (
		<div class="flex px-72 items-center">
			<div className="px-48 py-8 w-full">
				<h1 className="text-4xl mb-6">LOGIN</h1>
				<div id="form" className="">
					<p className="my-1">Email Address</p>
					<input type="email" className="w-5/6 h-10 px-2 bg-gray-100" value={username} onChange={(e) => setUsername(e.target.value)}/>
					<p className="my-1">Password</p>
					<input type="password" className="w-5/6 h-10 px-2 bg-gray-100" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className="p-3 mt-3 text-sm bg-black text-white" onClick={submitInfo}>LOGIN</button>
				<div className="flex mt-2 ">
					<p className="text-gray-700 mr-2">New Customer? </p>
					<Link to={"/signup"}>
						<p className="text-gray-800 hover:underline">Register</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
