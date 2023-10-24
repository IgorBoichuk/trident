import React from "react";

export const FilterButton = ({ name, bg }) => {
	return (
		<button
			className={
				bg
					? "border-l border-t border-b border-r-8 px-3 py-2 border-orangeBg bg-orangeBg"
					: "border-l border-t border-b border-r-8 px-3 py-2 border-orangeBg"
			}
		>
			{name}
		</button>
	);
};
