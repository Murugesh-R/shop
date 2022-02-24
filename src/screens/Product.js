import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Star} from 'react-bootstrap-icons'
import { getProductDetails, addProductReview } from '../actions/productActions'
import Reviews from '../components/Reviews'

const Product = ({history, match}) => {

	const [qty, setQty] = useState(0)
	const productId = match.params.id	

	const dispatch = useDispatch()
	const productDetails = useSelector(state => state.productDetails)
	const {loading, error, product } = productDetails

	useEffect(() => {
		dispatch(getProductDetails(productId))
		console.log(product)
	}, [dispatch, match])

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}
	
	return (
		<div className="px-32">
			<Link to={"/"}>
				<button className="my-2">Go Back</button>
			</Link>
			<div id="main">
				<div class="flex ">
					<img className="w-4/5" src={product.image} alt="" srcset="" />
					<div className="m-8">
						<p className="text-3xl">{product.name}</p>
						<div className="my-4 border-b-2"></div>
						<div className="mx-3 flex">
							<div class="flex">
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
							</div>
							<p class="ml-2">{product.review} Reviews</p>
						</div>
						<div className="my-4 border-b-2"></div>
						<div>
							<p className="ml-4 text-lg">Price: ${product.price}</p>
						</div>
						<div className="my-4 border-b-2"></div>
						<div>
							<p className="px-4"> Description: {product.description}</p>
						</div>
					</div>
					<div className="w-2/5 h-64 border-2">		
						<div className="p-3 flex justify-between border-b-2">
							<p class="text-gray-800">Price: </p>
							<p class="text-gray-800">${product.price}</p>
						</div>
						<div className="p-3 flex justify-between border-b-2">
							<p class="text-gray-800">status:</p>
							<p class="text-gray-800">In stock</p>
						</div>
						<div className="p-6 flex justify-between border-b-2">
							<p class="text-gray-800">Quantity : </p>
							<select value={qty} onChange={(e) => setQty(e.target.value)}>
								{[...Array(product.countInStock).keys()].map(
									(i) => (<option key={i+1} value={i+1}>{i+1}</option>) 
								)}
							</select>
						</div>
						<div className="p-2 ml-2">
							<button class="px-10 py-5 bg-black text-white" onClick={addToCartHandler}>ADD TO CART</button>
						</div>
					</div>
					
				</div>
				<Reviews productId={productId} reviews={product.reviews}/>
			</div>
		</div>
	)
}

export default Product
