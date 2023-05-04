import Image from "next/image";
import React from "react";

function HomeGrid() {
	return (
		<div className="grid__image container mx-auto h-[30rem] my-10">
			<div className="grid__image-1 bg-blue-400"></div>
			<div className="grid__image-2 bg-green-400"> </div>
			<div className="grid__image-3 bg-red-400"> </div>
			<div className="grid__image-4 bg-gray-400 relative w-full ml-auto  ">
				<Image
					fill
					cover="true"
					className="border-2 border-black"
					alt="arsenal"
					src="https://images.unsplash.com/photo-1551854304-9235bf86ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></Image>{" "}
				<div className="absolute inset-0 bg-black/50 p-20  text-white">
					<p className="text-xl font-semibold">APPAREL</p>
					<button className="mt-6 px-6 py-2 w-fit">SHOP NOW</button>
				</div>
			</div>
		</div>
	);
}

export default HomeGrid;
