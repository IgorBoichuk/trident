import { Container } from "@/app/shared/Container";
import { Logo } from "@/app/shared/Logo";
import React from "react";

export const Footer = () => {
	return (
		<div className="bg-mainBg text-white">
			<Logo footer />
			<Container>
				<p>111A T. Shevchenko</p>
				<p>0054-6272444</p>
				<p>Info@mail.com</p>
				<div>
					<span>© Trident 2023</span>
					<span>Privacy Policy</span>
				</div>
			</Container>
		</div>
	);
};
