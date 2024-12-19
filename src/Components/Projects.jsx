import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import weatherImage from "../assets/Images/Weather.jpg";
import currencyImage from "../assets/Images/Currency.jpg";
import schoolImage from "../assets/Images/Luminous.jpg";
import portfolioImage from "../assets/Images/PortfolioPink.jpg";

const Projects = () => {
    const projectData = [
        {
            title: "Weather App",
            description: "A weather app built with React that provides real-time weather information.",
            image: weatherImage,
            githubLink: "https://github.com/Imad/weather-app",
            liveLink: "https://codewithimaad.github.io/weather-check/",
        },
        {
            title: "Currency Converter",
            description: "A currency converter app using React and an external API to fetch live exchange rates.",
            image: currencyImage,
            githubLink: "https://github.com/Imad/currency-converter",
            liveLink: "https://imad-currency-converter.com",
        },
        {
            title: "School Management System",
            description: "A full-stack school management system with features like student enrollment, Attendance, Fee Entry, and Role-Based Authorization etc.",
            image: schoolImage,
            githubLink: "https://github.com/Imad/school-management-system",
            liveLink: "https://luminous-international-school.onrender.com",
        },
        {
            title: "Imad Portfolio",
            description: "A personal portfolio showcasing my projects, skills, and experience as a full-stack web developer.",
            image: portfolioImage,
            githubLink: "https://github.com/Imad/portfolio",
            liveLink: "https://codewithimaad.github.io/personalportfolio/",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto text-center">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-10 text-4xl font-bold text-purple-300 text-center"
                >
                    My Projects
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="w-full sm:w-1/2 md:w-2/3 xl:w-1/4 p-4"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1.5 }} // Trigger animation every time the element comes into view
                        >
                            <motion.div
                                className="relative bg-purple-800 rounded-xl shadow-lg p-6 transform backdrop-blur-lg bg-opacity-30"
                                style={{ height: "420px" }} // Fixed height for all cards
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -100 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="h-32 w-full flex items-center justify-center bg-gray-600 rounded-t-lg mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-base mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full py-2 px-4 text-sm shadow-md transition-all duration-300 ease-in-out hover:from-green-500 hover:to-green-700 hover:shadow-green-500/50"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full py-2 px-4 text-sm shadow-md transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-blue-700 hover:shadow-blue-500/50"
                                    >
                                        Live Preview
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;