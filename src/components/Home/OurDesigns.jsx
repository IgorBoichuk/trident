import React from "react";
import { Container } from "@/app/shared/Container";
import { FilterButton } from "@/app/shared/FilterButton";
import { SingleCard } from "@/app/shared/SingleCard";
import { designess } from "../../assets/mocdata/mocToDesignes";

import pic from "../../assets/galary/houses/1.png";

export const OurDesigns = () => {
	const bg = false;
	return (
		<div className="py-5">
			<Container>
				<h2 className=" text-2xl mb-2">Our house designs</h2>
				<div className=" mb-10 flex gap-2 lg:gap-3">
					<FilterButton name="Garden rooms" bg={bg} />
					<FilterButton name="Мodular houses" bg={bg} />
				</div>
				{designess.map(item => (
					<SingleCard picture={item.picture} title={item.title} description={item.description} />
				))}
			</Container>
		</div>
	);
};
