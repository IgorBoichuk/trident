import React from "react";
import { presentationData } from "../../assets/mocdata/mocPresentation";
import { Container } from "@/app/shared/Container";

export const Presentation = () => {
	return (
		<section className="py-[50px]">
			<Container>
				<h3 className=" text-[28px]">
					Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
					temporary as well as permanent residence.
				</h3>
				<ul>
					{presentationData.map(item => (
						<li>
							<p3>{item.title}</p3>
							<p>{item.description}</p>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};
