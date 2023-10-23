import React from "react";
import Link from "next/link";

export const NavMenu = () => {
	return (
		<ul className="lg:text-base font-sans text-xl lg:flex gap-4 ">
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
