import React from "react";
import { presentationData } from "../../assets/mocdata/mocPresentation";
import { Container } from "@/app/shared/Container";
import eye from "../../assets/galary/presentation/eye.svg";
import Image from "next/image";

export const Presentation = () => {
	return (
		<section className="py-[50px]">
			<Container>
				<h3 className="font-Lato text-mainBg text-[28px]">
					Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
					temporary as well as permanent residence.
				</h3>
				<ul className="flex flex-col gap-[32px]">
					{presentationData.map(item => (
						<li key={item.id}>
							<div className="flex items-end gap-[10px]">
								<Image src={eye} alt="eye" />
								<p className="font-Lato text-mainBg uppercase text-xs font-bold mb-3">{item.title}</p>
							</div>
							<p className="font-Lato text-mainBg text-sm font-light w-[210px] h-[90px] ml-12">{item.description}</p>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};
