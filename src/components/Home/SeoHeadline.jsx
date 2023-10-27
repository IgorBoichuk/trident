import { Container } from "@/app/shared/Container";
import React from "react";

export const SeoHeadline = () => {
	return (
		<div className="font-Lato text-mainBg border-b-[2px] border-dashed border-mainBg">
			<Container>
				<p className="text-[36px] font-thin">Seo headline</p>
				<p className="text-[30px] mb-6">Seo headline</p>
				<p className="text-[14px] font-thin leading-6 mb-6">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
				<span className=" font-medium">Read more</span>
			</Container>
		</div>
	);
};
