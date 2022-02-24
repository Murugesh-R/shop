import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signup } from '../actions/userActions'

const Signup = ({history}) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const userSignup = useSelector((state) => state.userSignup)
	const { loading, error, info } = userSignup

	useEffect(() => {
		if (info) {
			history.push("/login")
		}
	}, [history, info])

	const submitInfo = () => {
		dispatch(signup(name, email, password))
	} 
	return (
		<div class="flex px-72 items-center">
			<div className="px-48 py-8 w-full">
				<h1 className="text-4xl mb-6">SIGN UP</h1>
				<div id="form" className="">
					<p className="my-1">Name</p>
					<input type="text" className="w-5/6 h-10 px-2 bg-gray-100" value={name} onChange={(e) => setName(e.target.value)}/>
					<p className="my-1">Email Address</p>
					<input type="email" className="w-5/6 h-10 px-2 bg-gray-100" value={email}  onChange={(e) => setEmail(e.target.value)}/>
					<p className="my-1">Password</p>
					<input type="password" className="w-5/6 h-10 px-2 bg-gray-100" value={password}  onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className="p-3 mt-3 text-sm bg-black text-white " onClick={submitInfo}>SIGN IN</button>
				<div className="flex mt-2 ">
					<p className="text-gray-700 mr-2">Already have an account? </p>
					<Link to={"/login"}>
						<p className="text-gray-800 hover:underline">Login</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Signup
