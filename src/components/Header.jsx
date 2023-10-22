import { NavMenu } from "@/app/shared/NavMenu";
import Image from "next/image";
import logo from "../assets/galary/logo.png";
import React from "react";

export const Header = () => {
	return (
		<header className="flex justify-between items-center py-5">
			<Image src={logo} alt="" />
			<NavMenu />
		</header>
	);
};
