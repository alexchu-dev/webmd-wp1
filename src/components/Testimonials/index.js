/*
Author: Alex Chu up2244885
University of Portsmouth
*/
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image.js";
import { testimonials } from "./data.js";

export default function Testimonials() {
	const [current, setCurrent] = useState(0);
	const length = testimonials.length;

	const nextTestimonial = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevTestimonial = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	useEffect(() => {
		const interval = setInterval(nextTestimonial, 3000);

		return () => clearInterval(interval);
	}, [current, length]);

	if (!Array.isArray(testimonials) || testimonials.length <= 0) {
		return null;
	}

	return (
		<section
			id="testimonials"
			className="border rounded-xl p-4 py-8 my-12 min-h-[300px] text-white"
		>
			<h2 className="text-2xl font-bold mb-2 text-center">
				What Our Customers Say
			</h2>
			<div className="testimonial-carousel">
				{testimonials.map((testimonial, index) => (
					<div
						key={testimonial.id}
						className={index === current ? "slide active" : "slide"}
					>
						{index === current && (
							<div className="testimonial-content">
								<p className="feedback px-4">
									&ldquo;{testimonial.feedback}&rdquo;
								</p>

								<div className="h-[120px] items-center justify-center">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										title={testimonial.name}
										width={120}
										height={120}
										className="object-cover rounded-2xl mx-auto"
										style={{ objectPosition: "center" }}
									/>
								</div>
								<h3 className="name">
									- {testimonial.name}, {testimonial.location}
								</h3>
							</div>
						)}
					</div>
				))}
				<button className="prev" onClick={prevTestimonial}>
					&#10094;
				</button>
				<button className="next" onClick={nextTestimonial}>
					&#10095;
				</button>
			</div>
			<style jsx>{`
				#testimonials {
					background: rgb(2, 87, 177);
					background: linear-gradient(
						128deg,
						rgba(2, 87, 177, 1) 0%,
						rgba(1, 175, 209, 1) 100%
					);
				}

				.testimonial-carousel {
					position: relative;
					margin: auto;
					overflow: hidden;
				}

				.slide {
					display: none;
				}

				.active {
					display: block;
				}

				.prev,
				.next {
					cursor: pointer;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					padding: 16px;
					color: black;
					font-weight: bold;
					font-size: 18px;
					border-radius: 0 3px 3px 0;
					user-select: none;
				}

				.next {
					right: 0;
					border-radius: 3px 0 0 3px;
				}

				.testimonial-content {
					text-align: center;
				}

				.feedback {
					font-size: 1rem;
					line-height: 1.3;
					margin-bottom: 1rem;
				}

				.name {
					padding: 0.5rem;
					font-size: 0.8rem;
					font-weight: bold;
				}
			`}</style>
		</section>
	);
}
