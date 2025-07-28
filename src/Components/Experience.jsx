import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, ChevronRight } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Web Developer",
        company: "Mazhar Enterprises Pvt Ltd",
        duration: "Jan 2022 – Feb 2025",
        location: "Peshawar, Pakistan",
        points: [
            "Built responsive web apps using React and Next.js, increasing user engagement by 30%",
            "Developed RESTful APIs with Node.js, Express.js, and MongoDB",
            "Optimized components to reduce page load time by 30%",
            "Designed accessible UI with Tailwind CSS ensuring cross-browser compatibility",
            "Collaborated with teams in Agile environment to build scalable solutions"
        ],
    },
    {
        role: "Full Stack Web Developer (Remote)",
        company: "E-Digital Pakistan Pvt Ltd",
        duration: "Jan 2025 – Jun 2025",
        location: "Peshawar, Pakistan",
        points: [
            "Developed Food App and E-Tutor Web App using React & Node.js",
            "Enhanced UI/UX with Tailwind CSS, improving experience by 30%",
            "Built backend APIs with Express and MongoDB for efficient data handling",
            "Delivered scalable, cross-platform solutions through Agile practices"
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl animate-float-delay"></div>
            </div>

            {/* Section header */}
            <div className="text-center mb-20">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My career journey and professional achievements
                </motion.p>
            </div>

            {/* Experience timeline */}
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-emerald-500/30 md:left-1/2 md:transform md:-translate-x-1/2"></div>

                {/* Experience items */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-10 md:pl-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute top-6 left-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 md:left-1/2 md:transform md:-translate-x-1/2"></div>

                            {/* Card */}
                            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-emerald-400/30 transition-all duration-300 md:max-w-xl md:mx-auto md:pl-12">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center text-purple-300 mt-1">
                                            <Briefcase size={16} className="mr-2 text-purple-400" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400">
                                        <CalendarDays size={16} className="mr-2 text-gray-500" />
                                        {exp.duration}
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center text-sm text-gray-400 mb-5">
                                    <MapPin size={16} className="mr-2 text-gray-500" />
                                    {exp.location}
                                </div>

                                {/* Bullet Points */}
                                <ul className="space-y-3">
                                    {exp.points.map((point, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start text-gray-300 text-sm leading-relaxed"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                                            viewport={{ once: true }}
                                        >
                                            <ChevronRight size={16} className="flex-shrink-0 mt-1 mr-2 text-emerald-400" />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;