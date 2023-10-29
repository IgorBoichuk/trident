import React from "react";
import Link from "next/link";

export const NavMenu = ({ vertical, gap }) => {
	// const column = vertical ? "flex-col" : null;

	return (
		<ul className={`lg:text-base font-sans text-xl lg:flex gap-4 ${vertical} ${gap}`}>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/AboutUs">About us</Link>
			</li>
			<li>
				<Link href="/Gallery">Gallery</Link>
			</li>
			<li>
				<Link href="/Styles">Styles</Link>
			</li>
			<li>
				<Link href="/Interior">Interior</Link>
			</li>
			<li>
				<Link href="/Contact">Contact</Link>
			</li>
		</ul>
	);
};
