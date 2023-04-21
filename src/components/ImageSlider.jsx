import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImage from "../components/SlideData";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";

// import "./ImageSlider.css";
import Image from "next/image";
const ImageSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<section className="container mx-auto mt-10 ">
			<Slider
				className=""
				{...settings}>
				{SlideImage.map((item) => (
					<div
						key={item._id}
						className="slide-wrapper md:px-40 mx-auto   ">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="slide-image flex justify-center mt-6 rounded-lg ">
								<Image
									className="rounded-lg"
									width={400}
									height={500}
									src={require(`../assets/image-${item._id}.jpg`)}
									alt={item.title}></Image>
							</div>
							<div className="slide-title flex header__text flex-col w-fit mx-auto  justify-center  gap-6">
								<h1 className="md:inline-block hidden">NEW DROPS</h1>
								<p className=" sm:text-xl mt-4 md:mt-0 text-center  md:text-left md:text-3xl lg:max-w-[70%]    ">
									{item.title}
								</p>
								<button className="border mx-auto text-sm md:text-base md:mx-0  border-black px-6 w-fit py-1 ">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>
				))}

				{/* <div className="slide-wrapper  border-2   border-black">
					<div className="grid grid-cols-2">
						<div className="slide-title flex header__text flex-col w-fit mx-auto justify-center  gap-4">
							<h1 className="gallery__child__text">NEW DROPS</h1>
							<p className="text-6xl  gallery__child__text  ">
								Evergreen <br /> Series
							</p>
							<button className="border gallery__child__text border-black px-6 w-fit py-1 ">
								SHOP NOW
							</button>
						</div>
						<div className="slide-image">
							<Image
								width={500}
								height={500}
								src="https://cdn.shopify.com/s/files/1/0590/3646/7399/products/2_1_07558cbe-c6b6-44a3-b1f6-a6026e141fc4.jpg?v=1676198431&width=1200"
								alt="Tsts"></Image>
						</div>
					</div>
				</div>
				<div className="slide-wrapper  border-2   border-black">
					<div className="grid grid-cols-2">
						<div className="slide-title flex header__text flex-col w-fit mx-auto justify-center  gap-4">
							<h1 className="gallery__child__text">NEW DROPS</h1>
							<p className="text-6xl  gallery__child__text  ">
								Evergreen <br /> Series
							</p>
							<button className="border gallery__child__text border-black px-6 w-fit py-1 ">
								SHOP NOW
							</button>
						</div>
						<div className="slide-image">
							<Image
								width={500}
								height={500}
								src="https://cdn.shopify.com/s/files/1/0590/3646/7399/products/2_1_07558cbe-c6b6-44a3-b1f6-a6026e141fc4.jpg?v=1676198431&width=1200"
								alt="Tsts"></Image>
						</div>
					</div>
				</div> */}
			</Slider>
		</section>
	);
};
export default ImageSlider;
