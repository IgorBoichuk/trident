import React from "react";
import logofooter from "../../assets/galary/logofooter.png";
import logoheader from "../../assets/galary/logoheader.png";
import Image from "next/image";

export const Logo = ({ header, footer }) => {
	return (
		<div>
			{footer && <Image src={logofooter} alt="" className="" />}
			{header && <Image src={logoheader} alt="" className="" />}
		</div>
	);
};
