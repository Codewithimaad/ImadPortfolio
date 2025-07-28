import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ChevronRight } from "lucide-react";
import weatherImage from "../assets/Images/Weather.jpg";
import currencyImage from "../assets/Images/Currency.jpg";
import schoolImage from "../assets/Images/School.png";
import portfolioImage from "../assets/Images/PortfolioPink.jpg";
import countryImage from '../assets/Images/Country.png';
import foodPriceImage from '../assets/Images/FoodPrice.png';
import EcommerceImage from '../assets/Images/EcommerceImage.png';
import HerbieImage from '../assets/Images/Herbie.jpg';

const Projects = () => {
    const projectData = [
        {
            title: "Weather App",
            description: "A weather app built with React that provides real-time weather information.",
            image: weatherImage,
            githubLink: "https://github.com/Codewithimaad/weather-check",
            liveLink: "https://codewithimaad.github.io/weather-check/",
            tags: ["React", "API"]
        },
        {
            title: "Currency Converter",
            description: "A currency converter app using React and an external API to fetch live exchange rates.",
            image: currencyImage,
            githubLink: "https://github.com/Codewithimaad/Currency-Converter",
            liveLink: "https://codewithimaad.github.io/Currency-Converter/",
            tags: ["React", "API"]
        },
        {
            title: "School Management System",
            description: "Full-stack school management system with student enrollment, attendance tracking, and role-based authorization.",
            image: schoolImage,
            githubLink: "#",
            liveLink: "https://luminous-international-school.onrender.com",
            tags: ["MERN", "Fullstack"]
        },
        {
            title: "Imad Portfolio",
            description: "Personal portfolio showcasing projects, skills, and experience as a full-stack developer.",
            image: portfolioImage,
            githubLink: "https://github.com/Codewithimaad/perosnalportfolio",
            liveLink: "https://codewithimaad.github.io/perosnalportfolio/",
            tags: ["React", "Portfolio"]
        },
        {
            title: "Country Guide",
            description: "Interactive app showcasing country details including area, population, currency, and flag.",
            image: countryImage,
            githubLink: "https://github.com/Codewithimaad/Country-Details",
            liveLink: "https://codewithimaad.github.io/Country-Details/",
            tags: ["React", "API"]
        },
        {
            title: "Food Price App",
            description: "Daily food pricing application that calculates and tracks food prices across KPK for the KP Government.",
            image: foodPriceImage,
            githubLink: "#",
            liveLink: "https://foodpriceapp.onrender.com/",
            tags: ["Node.js", "MySQL"]
        },
        {
            title: "E-Commerce Shop",
            description: "Fully functional e-commerce website with product listings, user auth, and shopping experience.",
            image: EcommerceImage,
            githubLink: "#",
            liveLink: "https://ahmedshop.vercel.app/",
            tags: ["MERN", "E-commerce"]
        },
        {
            title: "Herbie E-Commerce",
            description: "E-commerce website featuring product listings, user authentication, and seamless shopping.",
            image: HerbieImage,
            githubLink: "https://github.com/Codewithimaad/Herbie",
            liveLink: "https://herbie-rust.vercel.app/",
            tags: ["MERN", "E-commerce"]
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

    const cardItem = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const hoverEffect = {
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    const tapEffect = {
        scale: 0.98
    };

    return (
        <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
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
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUp}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUp}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A collection of my most recent and notable work
                </motion.p>
            </div>

            {/* Projects grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true, margin: "-100px" }}
            >
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        variants={cardItem}
                        whileHover={hoverEffect}
                        whileTap={tapEffect}
                    >
                        <div className="h-full flex flex-col bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
                            {/* Project image */}
                            <motion.div
                                className="relative h-48 overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Project content */}
                            <div className="flex-1 p-6 flex flex-col">
                                <motion.h3
                                    className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 text-sm mb-4 flex-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {project.description}
                                </motion.p>

                                {/* Links */}
                                <motion.div
                                    className="flex justify-between items-center mt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex items-center space-x-2">
                                        {project.githubLink !== "#" && (
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label="GitHub repository"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FiGithub size={20} />
                                            </motion.a>
                                        )}
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                            aria-label="Live preview"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiExternalLink size={20} />
                                        </motion.a>
                                    </div>
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 text-white rounded-lg hover:from-purple-500/30 hover:to-emerald-500/30 transition-all duration-300 flex items-center"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Project
                                        <ChevronRight size={16} className="ml-1" />
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;