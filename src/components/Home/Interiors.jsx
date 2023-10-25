import React from "react";
import bgimg from "../../assets/galary/interiors/bgimg.png";
import contentimg from "../../assets/galary/interiors/contentimg.png";
import Image from "next/image";
import { Container } from "@/app/shared/Container";

export const Interiors = () => {
	return (
		<section>
			<Container>
				<div>
					<div className="relative ">
						<Image src={bgimg} alt="background image" placeholder="blur" />
						<Image
							src={contentimg}
							alt="some snterior"
							placeholder="blur"
							className="absolute z-[3] top-5 left-[28px]"
						/>
					</div>
					<div className="relative bg-mainBg py-[100px] px-[28px]">
						<p className=" text-white">Trident – we love inviting interiors too!</p>
						<p className=" text-white">
							Our architects have prepared some stunning ready-made interior designs...check them out...
						</p>
						<button className="absolute left-0 bottom-0 bg-orangeBg flex gap-3 items-end px-6 py-3">
							Read more
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
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};
