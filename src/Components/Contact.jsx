import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_hqhocvq",
                "template_rf8whe6",
                e.target,
                "8l-yV8LEbjunC2bCg"
            )
            .then(
                (result) => {
                    setStatus("Message sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                    setTimeout(() => setStatus(""), 5000);
                    setIsSubmitting(false);
                },
                (error) => {
                    setStatus("Error sending message. Please try again later.");
                    console.log(error.text);
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section id="contact" className="relative py-20 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Drop me a message and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                            Let's build something amazing together
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-purple-900/50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-purple-300">Email</h4>
                                    <a href="mailto:kimad1728@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">kimad1728@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-purple-900/50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-purple-300">Phone</h4>
                                    <a href="tel:+923149958670" className="text-gray-300 hover:text-green-400 transition-colors">+92 3149958670</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-purple-900/50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-purple-300">Location</h4>
                                    <p className="text-gray-300">Shahzadi Payeen, Dir Lower, KPK</p>
                                </div>
                            </div>
                        </div>


                        <div className="pt-6">
                            <h4 className="text-lg font-semibold text-purple-300 mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                {/* React Portfolio/Project Link */}
                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-purple-900/50 transition-colors"
                                >
                                    <FaReact className="w-5 h-5 text-gray-300" />
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/Codewithimaad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-purple-900/50 transition-colors"
                                >
                                    <FaGithub className="w-5 h-5 text-gray-300" />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/imad-hussain-khan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-purple-900/50 transition-colors"
                                >
                                    <FaLinkedin className="w-5 h-5 text-gray-300" />
                                </a>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center ${isSubmitting ? 'opacity-80' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>

                            {status && (
                                <div className={`mt-4 p-3 rounded-lg text-center ${status.includes("success") ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                                    {status}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;