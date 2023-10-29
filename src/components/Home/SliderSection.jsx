"use client";
import React from "react";
import { designess } from "../../assets/mocdata/mocForSlider";
import { CustomSlider } from "@/app/shared/CustomSlider/CustomSlider";
import { Container } from "@/app/shared/Container";

export const SliderSection = () => {
	return (
		<div className="overflow-hidden px-[10px] w-[100vw]">
			<CustomSlider data={designess} />
		</div>
	);
};
