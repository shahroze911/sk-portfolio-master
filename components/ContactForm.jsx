"use client";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import emailjs from "emailjs-com";

const ContactForm = ({ isDialogOpen, onClose }) => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_mkyverp",
				"template_9wkoino",
				formData,
				"062QrqU8Enk1it5Q6"
			)
			.then(
				(response) => {
					toast.success("Message sent successfully!");
				},
				(error) => {
					toast.error("Failed to send message. Please try again later.");
				}
			);
	};

	return (
		<div className="container mx-auto">
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					className: "",
					duration: 5000,
					style: {
						background: "#363636",
						color: "#fff",
					},
				}}
			/>
			<div className="flex flex-col xl:flex-row gap-[30px]">
				<div className="xl:w-[100%] order-2 xl:order-none">
					<form
						className="flex flex-col gap-2 p-10 bg-slate-800 rounded-xl"
						onSubmit={handleSubmit}
					>
						{isDialogOpen && (
							<div className="flex justify-end mb-4">
								<button
									type="button"
									className="text-2xl font-semibold flex items-center text-white/60 hover:text-accent "
									onClick={onClose}
								>
									X
								</button>
							</div>
						)}

						<h3 className="text-4xl text-accent">Let&apos;s work together</h3>
						<p className="text-white/60">
							Have a project in mind that needs a skilled and passionate
							developer? I&apos;m eager to collaborate and bring your ideas to
							life! With a strong foundation in various technologies and a
							dedication to user-centric solutions, I&apos;m confident we can
							create something truly impactful. Feel free to reach out and
							let&apos;s discuss how I can help make your vision a reality.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Input
								type="text"
								name="firstname"
								placeholder="Firstname"
								value={formData.firstname}
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								name="lastname"
								placeholder="Lastname"
								value={formData.lastname}
								onChange={handleInputChange}
							/>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								name="phone"
								placeholder="Phone number"
								value={formData.phone}
								onChange={handleInputChange}
							/>
						</div>
						<Select
							onValueChange={(value) =>
								setFormData({ ...formData, service: value })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select a service" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Select a service</SelectLabel>
									<SelectItem value="Web Development">
										Web Development
									</SelectItem>
									<SelectItem value="Mobile Development">
										Mobile Development
									</SelectItem>
									<SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
									<SelectItem value="Data Analysis & Visualization">
										Data Analysis & Visualization
									</SelectItem>
									<SelectItem value="Software Documentation & Technical Writing">
										Software Documentation & Technical Writing
									</SelectItem>
									<SelectItem value="Gen AI Development">
										Gen AI Development
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Textarea
							className="h-[200px]"
							name="message"
							placeholder="Type your message here."
							value={formData.message}
							onChange={handleInputChange}
						/>
						<Button className="max-w-40">Send message</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
