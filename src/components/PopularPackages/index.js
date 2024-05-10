/*
Author: Alex Chu up2244885
University of Portsmouth
*/
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { popularPackagesData } from "./data.js";

export default function PopularPackages() {
	return (
		<section
			id="popular-packages"
			className="border rounded-xl p-4 my-12 bg-white"
		>
			<h2 className="text-xl font-bold mb-2">POPULAR PACKAGES</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{popularPackagesData.map((pkg) => (
					<div
						key={pkg.id}
						className="package-card rounded-lg overflow-hidden bg-white shadow-lg"
					>
						<div className="relative w-full h-[300px]">
							<Link href={pkg.link}>
								<Image
									src={pkg.image}
									alt={pkg.alt}
									title={pkg.alt}
									fill
									className="object-cover"
									style={{ objectPosition: "center" }}
								/>
							</Link>
						</div>
						<div className="p-6">
							<h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
							<p className="mb-4">{pkg.desc}</p>
							<p className="font-bold">£{pkg.price}</p>
							<Link
								href={pkg.link}
								className="mt-4 font-semibold color3 hover:text-blue-700"
							>
								Learn More
							</Link>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.package-card {
					transition: transform 0.2s;
				}

				.package-card:hover {
					transform: translateY(-5px);
				}
			`}</style>
		</section>
	);
}
