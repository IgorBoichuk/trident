import React from "react";
import { NavMenu } from "@/app/shared/NavMenu";
import Image from "next/image";
import logo from "../assets/galary/logo.png";
import openBurger from "../assets/svg/burgermenu.svg";
import closeBurger from "../assets/svg/closeburgermenu.svg";

export const Header = () => {
	return (
		<header className="flex justify-between items-center py-5">
			<Image src={logo} alt="" />
			{/* <div className="hidden lg:block"> */}
			<NavMenu />
			{/* </div> */}

			<button className="relative w-10 lg:hidden">
				<Image alt="myImg" src={openBurger} className="absolute top-0" />
				<Image alt="myImg" src={closeBurger} className="absolute top-0 left-0.5" />
			</button>
		</header>
	);
};
