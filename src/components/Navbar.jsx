import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
	const [Open, setOpen] = useState(false);
	const toggleNavbar = () => {
		setOpen(!Open);
	};
	return (
		<section className="bg-gray-100 hover:bg-white duration-500 h-16 border-b border-gray-200 px-4 ">
			<main className="flex items-center container mx-auto justify-between h-full">
				<div className=" text-3xl font-semibold md:text-4xl logo">Sporty</div>
				<div className="md:inline-block hidden">
					<ul className="flex text-lg gap-6 text-gray-500 font-semibold leading-tight ">
						<li className=" nav__text">
							<Link href="/">HOME</Link>
						</li>
						<li className=" nav__text">
							<Link href="/">JERSEY</Link>
						</li>
						<li className=" nav__text">
							<Link href="/">BOOTS</Link>
						</li>
						<li className=" nav__text">
							<Link href="/">BEST SELLERS</Link>
						</li>
						<li className=" nav__text">
							<Link href="/">ACCESSORIES</Link>
						</li>
					</ul>
				</div>

				<>
					<div
						className={`navbar-toggle lg:hidden ${Open ? "active" : ""}`}
						onClick={toggleNavbar}
						id="navbar-toggle">
						<span className="navbar-toggle-icon"></span>
					</div>
					<div className="lg:block hidden">Cart</div>
				</>
			</main>
			<aside>
				<div
					className={` duration-500 md:hidden ${
						Open
							? "bg-black/40 absolute !top-16 inset-0 opacity-100"
							: "opacity-0"
					}`}></div>
				<div className="md:hidden ">
					<div
						className={`z-10 duration-1000 p-10  absolute top-16 left-0 right-1/3 bottom-0 ${
							Open ? "bg-white " : " bg-white -translate-x-full "
						}`}>
						<div>
							<ul className="flex flex-col text-lg gap-6 text-gray-500 font-semibold leading-tight ">
								<li className=" nav__text">
									<Link href="/">HOME</Link>
								</li>
								<li className=" nav__text">
									<Link href="/">JERSEY</Link>
								</li>
								<li className=" nav__text">
									<Link href="/">BOOTS</Link>
								</li>
								<li className=" nav__text">
									<Link href="/">BEST SELLERS</Link>
								</li>
								<li className=" nav__text">
									<Link href="/">ACCESSORIES</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>{" "}
			</aside>
		</section>
	);
}

export default Navbar;
