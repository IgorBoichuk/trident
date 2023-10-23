import { Hero } from "@/components/Home/Hero";
import { OurDesigns } from "@/components/Home/OurDesigns";
import { Interiors } from "@/components/Home/Interiors";
import { Presentation } from "@/components/Home/Presentation";
import { Catalogue } from "@/components/Home/Catalogue";
import { SliderSection } from "@/components/Home/SliderSection";
import { SeoHeadline } from "@/components/Home/SeoHeadline";

const Home = () => {
	return (
		<>
			<Hero />
			<OurDesigns />
			<Interiors />
			<Presentation />
			<Catalogue />
			<SliderSection />
			<SeoHeadline />
		</>
	);
};

export default Home;
