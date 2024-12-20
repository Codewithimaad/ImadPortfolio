import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // to show success or error message
    const form = useRef(); // Create a reference to the form

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Define EmailJS service details
        const serviceID = "service_hqhocvq"; // Replace with your service ID
        const templateID = "template_rf8whe6"; // Replace with your template ID
        const userID = "8l-yV8LEbjunC2bCg"; // Replace with your user ID

        // Send form data using EmailJS
        emailjs
            .sendForm(serviceID, templateID, e.target, userID)
            .then(
                (result) => {
                    setStatus("Message sent successfully!");
                    console.log(result.text);
                },
                (error) => {
                    setStatus("Error sending message. Please try again later.");
                    console.log(error.text);
                }
            );
    };


    return (
        <section id="contact" className="relative py-20 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="text-4xl font-bold text-purple-300 text-center mb-10 mt-10"
                >
                    Get in Touch
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section: Contact Info */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-5xl font-bold text-start mb-10 bg-gradient-to-r from-purple-500 via-green-500 to-green-500 bg-clip-text text-transparent">
                            Let's talk.
                        </h2>

                        <p className="text-lg text-gray-300">
                            We’d love to hear from you! Whether you have a question, a project idea,
                            or just want to say hello, feel free to get in touch.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-purple-300">Email:</h3>
                                <p className="text-gray-400">kimad1728@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-purple-300">Phone:</h3>
                                <p className="text-gray-400">+92 3149958670</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-purple-300">Location:</h3>
                                <p className="text-gray-400">Shahzadi Payeen District Dir Lower, KPK</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section: Contact Form */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="sm:p-0 md:p-6 lg:p-8  rounded-lg shadow-xl"
                    >
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-xl font-semibold text-gray-200 mb-3"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-purple-900 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-xl font-semibold text-gray-200 mb-3"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-purple-900 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-xl font-semibold text-gray-200 mb-3"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-purple-900 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                    placeholder="Write your message"
                                    rows="6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full py-2 md:py-4 lg:py-4  bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full px-10 text-lg shadow-lg transition-all duration-300 ease-in-out hover:from-green-500 hover:to-green-800 hover:shadow-green-500/50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Status Message */}
                        {status && (
                            <div
                                className={`mt-4 text-center text-xl ${status.includes("success") ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {status}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
