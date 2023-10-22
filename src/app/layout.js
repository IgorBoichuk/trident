import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata = {
	title: "Trident",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="uk">
			<body className="px-5 ">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}