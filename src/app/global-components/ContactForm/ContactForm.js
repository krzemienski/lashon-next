"use client";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { trackEvent } from "@/utils/analytics";

export default function ContactForm() {
	const formHandler = (event) => {
		event.preventDefault();
		
		// Get form data
		const name = event.target.name.value;
		const email = event.target.email.value;
		const message = event.target.message.value;
		
		// Track form submission in Google Analytics
		trackEvent("contact_form_submit", {
			form_name: "contact_page",
			form_length: message.length
		});
		
		// Process the form submission (this would send data to your backend)
		console.log("Form submitted with data:", { name, email, message });
		
		// Reset form
		event.target.reset();
		
		// You could add form submission logic here (e.g., API call)
		alert("Thanks for your message! We'll get back to you soon.");
	};

	return (
		<form className="mt-6 w-full max-w-[35rem] xl:max-w-xl" onSubmit={formHandler}>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">
						Your Name
					</label>
					<input 
					  className="block w-full bg-transparent rounded-md border-[1px] shadow-none p-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs" 
					  type="text" 
					  name="name" 
					  id="name" 
					  required 
					  onChange={() => trackEvent("contact_form_interaction", { field: "name" })}
					/>
				</div>
				<div className="flex flex-col">
					<label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
						Your Email
					</label>
					<input 
					  className="block w-full bg-transparent rounded-md border-[1px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs" 
					  type="email" 
					  name="email" 
					  id="email" 
					  required 
					  onChange={() => trackEvent("contact_form_interaction", { field: "email" })}
					/>
				</div>
			</div>
			<div>
				<label className="lock text-sm font-medium leading-6 text-gray-900" htmlFor="message">
					Your message
				</label>
				<textarea 
				  className="block w-full bg-transparent rounded-md border-[1px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs resize-none" 
				  id="message" 
				  name="message"
				  rows="8" 
				  required
				  onChange={() => trackEvent("contact_form_interaction", { field: "message" })}
				></textarea>
			</div>
			<div className="flex mt-3 lg:justify-end">
				<ButtonPrimary>Send it</ButtonPrimary>
			</div>
		</form>
	);
}
