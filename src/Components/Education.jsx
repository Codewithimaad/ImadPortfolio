import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    const educationData = [
        {
            degree: "Matric",
            institution: "Air Foundation School System",
            year: "2015 - 2017",
            description:
                "Focused on foundational pre-engineering subjects, including physics, and computer science. Gained essential problem-solving skills and a deep understanding of theoretical concepts crucial for technical fields.",
        },
        {
            degree: "FSC",
            institution: "Air Foundation School System & College System",
            year: "2017 - 2019",
            description:
                "Enhanced knowledge in physics, and computer science. Developed analytical thinking and technical problem-solving skills, preparing for a career in technology-based disciplines.",
        },
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Abdul Wali Khan University",
            year: "2019 - 2023",
            description:
                "Studied web development, software engineering, and database systems. Created projects like a full-stack School Management System, Currency Converter, and E-Votting App, showcasing expertise in modern web technologies.",
        },
        {
            degree: "Diploma in Category B Pharmacy",
            institution: "Alfarabi Health Education System Timergara",
            year: "2022 - 2024",
            description:
                "Gained expertise in pharmaceutical sciences, drug dispensing, and patient care. One year of practical experience in medical settings, ensuring proper medication management and enhancing patient health outcomes.",
        }

    ];


    return (
        <section id="education" className="py-20 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-purple-300 text-center mb-10"
                >
                    Education
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-green-400 mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-lg text-purple-300">
                                {edu.institution}
                            </p>
                            <p className="text-gray-400 text-sm mb-4">{edu.year}</p>
                            <p className="text-gray-300">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
