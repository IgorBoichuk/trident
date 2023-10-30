import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";

export const SwiperSlider = ({ data }) => {
	return (
		<Swiper
			modules={[Navigation, A11y, Autoplay]}
			spaceBetween={5}
			slidesPerView={3}
			autoplay={{
				delay: 3000,
			}}
			navigation
		>
			{data.map(item => (
				<SwiperSlide>
					<Image src={item.picture} alt={"picture"} className=" w-full h-full" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
