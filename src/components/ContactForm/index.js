"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

export default function ContactForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const recaptchaRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const sendMessage = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
				{
					method: "POST",
					body: JSON.stringify({ name, email, message }),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(sendMessage);
			if (sendMessage.ok) {
				Swal.fire({
					title: "Success",
					text: "Your message have been sent. Please check  your email for confirmation.",
					icon: "success",
					confirmButtonText: "Cool",
				});
				setName("");
				setEmail("");
				setMessage("");
			} else {
				Swal.fire({
					title: "Error",
					text: "Something went wrong with the mail system. Please try again later.",
					icon: "error",
					confirmButtonText: "Ok",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Error",
				text: "Something went wrong with the mail system. Please try again later.",
				icon: "error",
				confirmButtonText: "Ok",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const onChange = (value) => {
		console.log("Captcha value:", value);
	};
	const asyncScriptOnLoad = () => {
		console.log("Google recaptcha loaded.");
	};

	return (
		<form
			id={`${props.page ? "contact-form" : ""}`}
			onSubmit={handleSubmit}
			className="w-full space-y-4"
		>
			<div className="mb-4">
				<label htmlFor="name" className="block">
					Name:
				</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="mt-1 p-2 w-full border rounded-md"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="block">
					Email:
				</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="mt-1 p-2 w-full border rounded-md"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="message" className="block">
					Message:
				</label>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					className="mt-1 p-2 w-full border rounded-md"
				></textarea>
			</div>
			<ReCAPTCHA
				ref={recaptchaRef}
				size="normal"
				sitekey="6Lf_xsYpAAAAANW62tysGqGwA_bS4ZsS3_WG_0oR"
				onChange={onChange}
				asyncScriptOnLoad={asyncScriptOnLoad}
			/>
			<button
				type="submit"
				className={`${
					isSubmitting
						? "bg-gray-300 cursor-wait"
						: "bg-blue-500 hover:bg-blue-700"
				} text-white py-2 px-4 rounded`}
				disabled={isSubmitting}
			>
				{isSubmitting ? "Submitting..." : "Send"}
			</button>
		</form>
	);
}
