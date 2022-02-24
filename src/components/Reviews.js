import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Star } from 'react-bootstrap-icons'
import {addProductReview} from '../actions/productActions'

const Reviews = ({productId, reviews}) => {

	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState('')

	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
  	const { userInfo } = userLogin

	const submitHandler = (e) => {
		e.preventDefault()
		const review = { productId, rating, comment }
		dispatch(addProductReview(review))
		setRating(0)
		setComment('')
	}

	return (
		<div className="py-4">
			<div id="reviews">
				<p className="text-2xl pb-2">REVIEWS</p>
				{reviews.length !== 0
				?
				<div id="reviews" className="px-5">
					{reviews.map((review) => (
						<div id="review" className="w-2/5">
							<p id="name py-1">{review.name}</p>
							<div class="flex py-1">
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
							</div>
							<p className="py-2">{review.comment}</p>
							<div className="my-4 border-b-2"></div>	
						</div>
					))}
				</div>  
				:
				<div class="h-10 w-2/5 bg-blue-300">
					<p className="py-2 px-4 text-blue-900">No Reviews</p>
				</div>
				}

				<div id="write" className="px-8">
					<div className="">
						<p className="text-2xl py-5">WRITE A CUSTOMER REVIEW</p>
					</div>
					{userInfo  
					?
					<div id="form">
						<form action="">
							<p className="py-2 text-lg">Rating:</p>
							<select className="w-2/5 h-10" value={rating} onChange={(e) => setRating(e.target.value)}>
								<option value="">select...</option>
								<option value='1'>1 - Poor</option>
								<option value='2'>2 - Fair</option>
								<option value='3'>3 - Good</option>
								<option value='4'>4 - Very Good</option>
								<option value='5'>5 - Excellent</option>
							</select>
							<p className="py-2 text-lg">Comment:</p>
							<textarea cols="30" rows="10" className="bg-gray-200 w-2/5 text-black" placeholder=" write a comment..." value={comment} onChange={(e) => setComment(e.target.value)}>
							</textarea>
						</form>
						<button className=" my-2 h-10 w-32 bg-black text-white" onClick={submitHandler}>SUBMIT</button>
					</div>
					:
					<div class="h-10 w-2/5 bg-blue-300">
						<p className="py-2 px-4 text-blue-900">
							Please <Link to={"/login"} className="text-black">sign in</Link> to write a review
						</p>
					</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Reviews
