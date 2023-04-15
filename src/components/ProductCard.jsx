import React from "react";

function ProductCard() {
	return (
		<div className="text-center h-80 w-full relative productitem__container">
			<div className=" top-image   duration-500 absolute inset-0 bg-blue-500"></div>
			<div className=" h-80 w-full  bg-green-500"></div>
			<p>Lorem ipsum dolor sit amet.</p>
			<p> ₦15,000</p>
		</div>
	);
}

export default ProductCard;

{
	/* <div className="text-center relative productitem__container">
			<div className="relative h-80 w-full ">
				<div className="  hover:hidden duration-500 absolute inset-0 bg-blue-500"></div>
				<div className=" h-full w-full  bg-green-500"></div>
			</div>
			<p>Lorem ipsum dolor sit amet.</p>
			<p> ₦15,000</p>
		</div> */
}
