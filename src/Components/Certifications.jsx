import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certifications = [
    {
        title: "Full Stack Web Development Experience",
        issuer: "Mazhar Enterprises Pvt Ltd",
        date: "Mar 2025",
        link: "https://drive.google.com/file/d/1UxUU4T7c3L4lwQq3KCTiIj1xDY0WDv6D/view?usp=drive_link",
    },
    {
        title: "Full Stack Web Development Bootcamp",
        issuer: "Udemy",
        date: "Feb 2022",
        link: "https://drive.google.com/file/d/1zgmwvxVtHANW_B3fz2PZIacnZnA0_C30/view?usp=drive_link",
    },
    {
        title: "Full Stack Web Development Experience",
        issuer: "E-Digital Pakistan",
        date: "Jun 2025",
        link: "https://drive.google.com/file/d/1a8w3vnoyCXfKKyzkZSkaeuA-jeYwfEej/view?usp=drive_link",
    },
    {
        title: "Certificate of Appreciation",
        issuer: "Abdul Wali Khan University",
        date: "December 2022",
        link: "https://drive.google.com/file/d/1GZNFq7O6LjxW38yxsKDPmW1XKffrTaJD/view?usp=drive_link",
    },
];

const Certifications = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl animate-float-delay"></div>
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
                    Professional Certifications
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Verified credentials demonstrating my expertise and learning journey
                </motion.p>
            </div>

            {/* Certifications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map(({ title, issuer, date, link }, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: idx * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="h-full"
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-full flex flex-col p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Card content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 mb-5 rounded-lg bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center text-white text-2xl shadow-lg">
                                    🎓
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                    {title}
                                </h3>

                                {/* Issuer */}
                                <p className="text-sm text-gray-300 mb-3">{issuer}</p>

                                {/* Date */}
                                <p className="text-xs text-gray-400 mt-auto mb-3">{date}</p>

                                {/* View link */}
                                <div className="flex items-center text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>View credential</span>
                                    <FiExternalLink className="ml-2" />
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Certifications;