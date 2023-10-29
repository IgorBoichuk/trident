"use client";
import React from "react";
import { designess } from "../../assets/mocdata/mocForSlider";
import { CustomSlider } from "@/app/shared/CustomSlider/CustomSlider";
import { SwiperSlider } from "@/app/shared/Swiper/Swiper";

export const SliderSection = () => {
	return (
		<section className=" ">
			<div className=" flex justify-center outline ">
				{/* <CustomSlider data={designess} /> */}
				<SwiperSlider data={designess} />
			</div>
		</section>
	);
};
