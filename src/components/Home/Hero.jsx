import React from "react";
import heromob from "../../assets/galary/heromob.png";
import herodectop from "../../assets/galary/herodectop.png";
import Image from "next/image";
import { Container } from "@/app/shared/Container";
import Link from "next/link";

export const Hero = () => {
	return (
		<section>
			<Container>
				<Image src={herodectop} alt="prety house" placeholder="blur" className="w-full" />
				<Link href="/" className="bg-mainBg text-white flex gap-2 items-center py-6 px-3 lg:w-max lg:py-3">
					<p className="block lg:hidden">
						A place that is more than an office – a place where you can create work-life balance
					</p>
					<p className="hidden lg:block">Read more</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-8 h-8 "
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</Link>
			</Container>
		</section>
	);
};
