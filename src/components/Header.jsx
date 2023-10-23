import React from "react";
import { NavMenu } from "@/app/shared/NavMenu";
import Image from "next/image";
import logo from "../assets/galary/logo.png";
import openBurger from "../assets/svg/burgermenu.svg";
import closeBurger from "../assets/svg/closeburgermenu.svg";
import { Container } from "@/app/shared/Container";

export const Header = () => {
	return (
		<header className=" relative px-2 py-3">
			<Container>
				<div className="flex justify-between  pb-5 ">
					<Image src={logo} alt="" className=" w-28 " />
					<div className="hidden lg:block">
						<NavMenu />
					</div>
					<button className="relative w-6 h-4 lg:hidden">
						<Image alt="myImg" src={openBurger} className="absolute top-0 " />
						<Image alt="myImg" src={closeBurger} className="absolute top-0 left-0.5 " />
					</button>
					<div className="absolute w-full right-0 top-full -translate-y-full text-xs uppercase flex justify-center items-center gap-2 lg:flex-col lg:text-start py-1 bg-amber-400 lg:relative lg:w-32 lg:h-32 lg:right-28 lg:top-0 lg:translate-y-0">
						<span className=" lg:font-bold">Order</span>
						<span className="lg:hidden">trident</span>
						<span className="">Catalogue</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 lg:hidden"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
						</svg>
					</div>
				</div>
			</Container>
		</header>
	);
};
