import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const MyServices = () => {
    const servicesData = [
        {
            title: "Web Development",
            description: "Developing modern, responsive, and scalable web applications tailored to your unique needs.",
            icon: "🌐",
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive and visually appealing interfaces that enhance user satisfaction and engagement.",
            icon: "🎨",
        },
        {
            title: "Full-Stack Development",
            description: "Providing comprehensive solutions, from frontend development to backend systems, ensuring seamless integration.",
            icon: "💻",
        },
        {
            title: "API Integration",
            description: "Implementing and integrating third-party APIs to expand functionality and streamline operations.",
            icon: "🔗",
        },
    ];

    return (
        <section id="services" className="py-20 text-white">
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-purple-300 text-center mb-12"
                >
                    My Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: index * 0.2 }} // Add staggered animation
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-16 h-16 bg-purple-800 text-white rounded-full text-4xl mb-6 shadow-md">
                                {service.icon}
                            </div>
                            {/* Title */}
                            <motion.h3
                                className="text-xl font-semibold text-purple-300 mb-4"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                {service.title}
                            </motion.h3>
                            {/* Description */}
                            <motion.p
                                className="text-gray-400 text-center leading-relaxed"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {service.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MyServices;
