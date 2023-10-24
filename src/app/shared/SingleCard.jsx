import Image from "next/image";
import React from "react";
import pic from "../../assets/galary/houses/1.png";

export const SingleCard = ({ picture }) => {
	return (
		<div>
			<Image src={pic} alt="module house picture" placeholder="blur" className=" mb-2" />
			<h3 className=" text-xl mb-2 lg:text-3xl">Garden Room</h3>
			<p className=" text-sm lg:text-base">A room where you can work, study, and design</p>
		</div>
	);
};
