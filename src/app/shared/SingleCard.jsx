import Image from "next/image";
import React from "react";

export const SingleCard = ({ picture, title, description }) => {
	return (
		<div>
			<Image src={picture} alt="module house picture" placeholder="blur" className=" mb-2" />
			<h3 className=" text-xl mb-2 lg:text-3xl">{title}</h3>
			<p className=" text-sm lg:text-base">{description}</p>
		</div>
	);
};
