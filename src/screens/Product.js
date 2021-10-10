import React from 'react'
import {Star} from 'react-bootstrap-icons'

const Product = () => {
	return (
		<div className="px-48">
			<button className="my-2">Go Back</button>
			<div id="main">
				<div class="flex ">
					<img src="/images/phone.jpg" alt="" srcset="" />
					<div className="m-8">
						<p className="text-3xl">IPHONE 11 PRO 256GB MEMORY</p>
						<div className="my-4 border-b-2"></div>
						<div className="mx-3 flex">
							<div class="flex">
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
								<Star size={20} color="yellow"/>
							</div>
							<p class="ml-2">0 Reviews</p>
						</div>
						<div className="my-4 border-b-2"></div>
						<div>
							<p className="ml-4 text-lg">Price: $599</p>
						</div>
						<div className="my-4 border-b-2"></div>
						<div>
							<p className="px-4 w-72"> Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque amet quidem maiores alias impedit?</p>
						</div>
					</div>
					<div className="w-72 h-64 border-2">
						<div className="p-3 flex justify-between border-b-2">
							<p class="text-gray-800">Price: </p>
							<p class="text-gray-800">$599</p>
						</div>
						<div className="p-3 flex justify-between border-b-2">
							<p class="text-gray-800">status:</p>
							<p class="text-gray-800">In stock</p>
						</div>
						<div className="p-6 flex justify-between border-b-2">
							<p class="text-gray-800">Quantity</p>
							<select>
								<option value="1">1</option>
								<option value="1">2</option>
								<option value="1">3</option>
								<option value="1">4</option>
							</select>
						</div>
						<div className="p-1.5 ml-3">
							<button class="px-10 py-5 bg-black text-white">ADD TO CART</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
