import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllProducts } from '../actions/productActions'
import { Star } from 'react-bootstrap-icons'

const Home = () => {
	const dispatch = useDispatch()
	
	const productList = useSelector(state => state.productList)
	const {loading, error, products} = productList
	
	useEffect(() => {
		dispatch(getAllProducts())
		console.log(products)
	}, [dispatch])
	console.log(products)
	return (
		<div className="px-48">
			<div className="">
				<p class="text-2xl py-2">LATEST PRODUCTS</p>
				<div id="products" className="grid grid-cols-4 gap-4">
					{products.map((product) => (
					<Link to={`/product/${product.id}`}>
						<div id="product" className="product border-2">
							<div className="p-2">
								<img src={product.image}/>
							</div>
							<div className="p-2">
								<p className="text-sm text-gray-700">{product.name}</p>
								<p className="text-2xl">{product.price}</p>
							</div>
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
						</div>
					</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
