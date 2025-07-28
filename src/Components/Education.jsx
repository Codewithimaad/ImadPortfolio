import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        degree: "Matric",
        institution: "Air Foundation School System",
        year: "2015 - 2017",
        description: "Focused on pre-engineering subjects including physics and computer science. Built strong theoretical and problem-solving foundations.",
    },
    {
        degree: "FSC",
        institution: "Air Foundation School & College",
        year: "2017 - 2019",
        description: "Deepened knowledge in computer science and physics. Sharpened analytical and technical thinking for future tech education.",
    },
    {
        degree: "BS Computer Science",
        institution: "Abdul Wali Khan University",
        year: "2019 - 2023",
        description: "Studied web development, databases, and software engineering. Built projects like School Management System, E-Tutor, and E-Commerce Stores.",
    },
];

const Education = () => {
    return (
        <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl animate-float-delay"></div>
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
                    Academic Journey
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My formal education and foundational learning experiences
                </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-emerald-500/30 transform -translate-x-1/2"></div>

                {/* Education items */}
                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative"
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
                            <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-500 to-purple-600 right-0 translate-x-1/2' : 'from-emerald-500 to-emerald-600 left-0 -translate-x-1/2'}`}></div>

                            {/* Card */}
                            <div className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-emerald-400/30 transition-all duration-300 ${index % 2 === 0 ? 'mr-auto pr-8 pl-12 max-w-xl' : 'ml-auto pl-8 pr-12 max-w-xl'}`}>
                                <div className="flex items-start gap-4">
                                    {/* Degree icon */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-emerald-400">
                                        {index === educationData.length - 1 ? "🎓" : "📚"}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-purple-300 text-sm mt-1">{edu.institution}</p>
                                        <p className="text-gray-400 text-xs mt-2 mb-3">{edu.year}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;