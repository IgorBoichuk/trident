import { FilterButton } from "@/app/shared/FilterButton";
import { SingleCard } from "@/app/shared/SingleCard";
import React from "react";

export const OurDesigns = () => {
	const bg = false;
	return (
		<div>
			<h2>Our house designs</h2>
			<div className="flex gap-2 lg:gap-3">
				<FilterButton name="Garden rooms" bg={bg} />
				<FilterButton name="Мodular houses" bg={bg} />
			</div>
			<SingleCard />
		</div>
	);
};
