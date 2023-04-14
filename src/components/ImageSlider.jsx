import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
		autoplaySpeed: 50000,
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<section className="container mx-auto">
			<Slider {...settings}>
				<div className="slide-wrapper  border-2   border-black">
					<div className="grid grid-cols-2">
						<div className="slide-title flex header__text flex-col w-fit mx-auto  justify-center  gap-4">
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
							{/* <img src={image.url} alt={image.title} /> */}
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
							{/* <img src={image.url} alt={image.title} /> */}
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
							{/* <img src={image.url} alt={image.title} /> */}
						</div>
					</div>
				</div>
			</Slider>
		</section>
	);
};
export default ImageSlider;
