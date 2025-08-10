import React from 'react';
import { motion } from 'framer-motion';

const MyServices = () => {
    const servicesData = [
        {
            title: "Custom Web Applications",
            description: "Designing and developing fully tailored, high-performance web applications to meet specific business goals.",
            icon: "⚡",
            color: "from-indigo-500/10 to-indigo-600/20"
        },
        {
            title: "Frontend Development",
            description: "Creating responsive, pixel-perfect interfaces using modern frameworks like React, Next.js, and Vue.js.",
            icon: "🎨",
            color: "from-purple-500/10 to-purple-600/20"
        },
        {
            title: "Backend Development",
            description: "Building scalable, secure, and efficient backend systems with Node.js, Express, and robust databases.",
            icon: "🛠️",
            color: "from-emerald-500/10 to-emerald-600/20"
        },
        {
            title: "Full-Stack Solutions",
            description: "Delivering seamless end-to-end development, integrating frontend, backend, and databases into a unified system.",
            icon: "💻",
            color: "from-blue-500/10 to-blue-600/20"
        },
        {
            title: "API Development & Integration",
            description: "Designing RESTful and GraphQL APIs, integrating third-party services, and ensuring smooth system communication.",
            icon: "🔗",
            color: "from-amber-500/10 to-amber-600/20"
        },
        {
            title: "E-Commerce Development",
            description: "Building secure, scalable, and conversion-optimized online stores with payment gateway integrations.",
            icon: "🛒",
            color: "from-pink-500/10 to-pink-600/20"
        },
        {
            title: "Cloud Deployment & DevOps",
            description: "Deploying applications on AWS, Vercel, or DigitalOcean with CI/CD pipelines for faster, reliable updates.",
            icon: "☁️",
            color: "from-cyan-500/10 to-cyan-600/20"
        },
        {
            title: "Maintenance & Optimization",
            description: "Providing ongoing support, performance optimization, and security updates to keep your app running flawlessly.",
            icon: "🛡️",
            color: "from-red-500/10 to-red-600/20"
        }

    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const hoverEffect = {
        scale: 1.03,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    const tapEffect = {
        scale: 0.98
    };

    return (
        <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-0 right-1/4 w-64 h-64 rounded-full md:bg-purple-500/20 blur-3xl"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full md:bg-emerald-500/20 blur-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    viewport={{ once: true }}
                />
            </div>

            {/* Section header */}
            <div className="text-center mb-16">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    My Services
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Comprehensive solutions tailored to your digital needs
                </motion.p>
            </div>

            {/* Services grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true, margin: "-100px" }}
            >
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        variants={item}
                        whileHover={hoverEffect}
                        whileTap={tapEffect}
                    >
                        <div className={`h-full flex flex-col items-center bg-gradient-to-br ${service.color} backdrop-blur-lg rounded-xl border border-white/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                            {/* Icon */}
                            <motion.div
                                className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/10 to-white/20 text-white rounded-full text-4xl mb-6 backdrop-blur-sm"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-xl font-semibold text-white mb-4 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {service.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-300 text-center leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {service.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default MyServices;