import React from "react";
import Link from "next/link";
import Image from "next/image.js";
import { destinations } from "./data.js";
// import { destinations as originalDestinations } from "./data.js";

// /* Randomize array */
// const shuffleArray = (array) => {
//   let currentIndex = array.length, randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }
export const metadata = {
	title:
		"Destinations | Ports Travel - Best Travel Agency in Portsmouth and Beyond",
	description:
		"The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
};

export default function Destinations() {
	// const destinations = React.useMemo(() => shuffleArray([...originalDestinations]), []);

	return (
		<section>
			<h1 className="text-3xl font-semibold m-2 text-center">Destinations</h1>
			<div className="border-b-4 border-[#01afd1] w-1/3 mx-auto mb-12" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{destinations.map(({ name, banner, slug }) => (
					<div key={slug} className="group">
						<Link href={`/destinations/${slug}`} className="block relative">
							<Image
								src={banner}
								alt={name}
								title={name}
								width={640}
								height={400}
								className="h-[400px] rounded-xl object-cover"
							/>
							<span className="absolute bottom-0 left-0 bg-black rounded-bl-xl rounded-tr-xl font-bold bg-opacity-50 text-white p-4">
								{name}
							</span>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
