import { NavMenu } from "@/app/shared/NavMenu";
import React from "react";

export const NavModal = () => {
	return (
		<div className="absolute right-0 w-[70%] h-[100%] bg-white px-[40px] py-[24px] sm:w-[50%] lg:hidden">
			<NavMenu vertical={"flex-col"} gap={"gap-6"} />
		</div>
	);
};
