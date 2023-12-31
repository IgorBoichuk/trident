import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const CustomSlider = ({ data }) => {
	const [step, setStep] = useState(0);
	const [length, setLength] = useState();
	const [currentItem, setCurrentItem] = useState(data.slice(step, length));

	// const mobile = windowSize < 768;
	// const tablet = windowSize < 1024;
	// const descktop = windowSize < 1366;

	let sliderLength;

	const windowSize = window.screen.width;
	useEffect(() => {
		switch (windowSize) {
			case 768:
				// sliderLength = 1;
				// setLength(sliderLength);
				setLength(1);

				break;

			case 1024:
				// sliderLength = 2;
				// setLength(sliderLength);
				setLength(2);
				break;

			case 1366:
				// sliderLength = 3;
				// setLength(sliderLength);
				setLength(3);
				break;

			default:
				// sliderLength = 1;
				setLength(5);
				break;
		}
		console.log(sliderLength);
	}, []);

	console.log(length);

	const next = () => {
		step <= data.length - 3
			? (setStep(step + 1), setLength(length + 1), setCurrentItem(data.slice(step, length)))
			: (setStep(0), setLength(3));
	};

	const prev = () => {
		step < 3
			? (setStep(data.length - 3), setLength(data.length))
			: (setStep(step - 1), setLength(length - 1), setCurrentItem(data.slice(step, length)));
	};

	return (
		<div className="relative">
			<ul className="flex gap-[22px] w-max mx-auto">
				{currentItem.map(item => (
					<li key={item.id} className="w-[100%] max-w-[640px] max-h-[360px]">
						<Image src={item.picture} alt={"picture"} className="object-contain" />
					</li>
				))}
			</ul>
			<div className="absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] mx-auto flex justify-between">
				<button className="bg-orangeBg p-2" onClick={prev}>
					<ChevronLeft />
				</button>
				<button className="bg-orangeBg p-2" onClick={next}>
					<ChevronRight />
				</button>
			</div>
		</div>
	);
};
