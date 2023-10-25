import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Container } from "@/app/shared/Container";
import catalogue from "../../assets/galary/catalogue/catalogue.png";
import pdf from "../../assets/galary/catalogue/pdf.svg";

export const Catalogue = () => {
	return (
		<section>
			<Container>
				<div className=" border-[1px] border-[#F5F5F5] rounded-[5px] pt-[23px] pb-[68px] shadow-md shadow-grey">
					<p className=" font-Lato font-light text-[26px] text-center">Order our catalogue for free</p>
					<p className="font-Lato text-center px-[21px] mb-[24px]">
						Lorem ipsim dolor set amet lorem ipsim dolor set amet lorem ipsim dolor set amet{" "}
					</p>
					<div className=" relative w-max">
						<Image src={catalogue} alt="" placeholder="blur" />
						<Image src={pdf} alt="" className="absolute top-[50%] left-[50%] -translate-y-[50%]" />
					</div>
					<button className=" bg-mainBg flex gap-4 text-white p-5 font-medium m-auto">
						Order now
						<MoveRight />
					</button>
				</div>
			</Container>
		</section>
	);
};
