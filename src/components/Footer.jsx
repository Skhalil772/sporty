import React from "react";

function Footer() {
	return (
		<section className="bg-black text-gray-400 font-medium px-6 py-12 text-sm sm:text-base">
			<div className="mx-auto container grid md:grid-cols-3 gap-10 text-center sm:text-left grid-cols-1 items-start place-items-center">
				<div>
					<h3 className="font-medium text-xl py-4 text-white ">Company</h3>
					<ul className="flex flex-col gap-6">
						<li>About</li>
						<li>Size Chart</li>
						<li>Our Journals</li>
						<li>Login/Sign Up</li>
					</ul>
				</div>
				<div>
					<h3 className="font-medium text-xl py-4 text-white">Product</h3>
					<ul className="flex flex-col gap-6">
						<li>Shop</li>
						<li>Create Notepad </li>
						<li>Jersey </li>

						<li> Accessories</li>
						<li>Boots</li>
					</ul>
				</div>
				<div>
					<h3 className="font-medium text-xl py-4 text-white">Contact</h3>
					<ul className="flex flex-col gap-6">
						<li>Get in Touch</li>
						<li>Instagram </li>
						<li> Twitter</li>
						<li>Facebook</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Footer;
