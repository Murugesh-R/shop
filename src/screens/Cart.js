import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TrashFill } from 'react-bootstrap-icons'
import { addToCart, removeCartItem } from '../actions/cartActions'

const Cart = ({match, location, history}) => {
	const productId = match.params.id
	const qty = location.search ? Number(location.search.split('=')[1]) : 1

	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, [dispatch, productId, qty])

	return (
		<div className="px-64 py-5">
			<div className="flex justify-between">
				<div id="cart" className="w-4/5">
					<p className="text-3xl">SHOPPING CART</p>
					<div id="items">
						{cartItems.map((item) => (
						<div className="h-24 w-4/5 border-b-2 border-b-gray-300 flex">
							<div className="rounded-lg">
								<img src={item.image} className="p-2 w-24"/>
							</div>
							<p class=" py-3 px-2 w-56 text-lg">{item.name}</p>
							<p class="py-8 px-2">${item.price}</p>
							<div class="px-4 py-6">
								<select className="h-10 p-2" value={item.qty} onChange={(e) => dispatch(addToCart(item.id, Number(e.target.value)))}>
									{[...Array(item.countInStock).keys()].map(
										(i) => (<option key={i+1} value={i+1}>{i+1}</option>) 
									)}
								</select>
							</div>
							<div className="p-10">
								<div onClick={() => dispatch(removeCartItem(item.id))}>
									<TrashFill />
								</div>
							</div>
						</div>
						))}
					</div>
				</div>	
				<div id="total" className="h-64">
					<div className=" border-2 h-40 w-64">
						<p className="text-2xl p-1">SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) ITEMS</p>
						<p class="text-base text-gray-800 px-2">$ {cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</p>
						<div class="h-12 w-56 bg-black p-3 m-4">
							<p className="text-white px-1">PROCEED TO CHECKOUT</p> 
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Cart
