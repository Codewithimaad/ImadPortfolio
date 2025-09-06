import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ChevronRight } from "lucide-react";
import schoolImage from "../assets/School.png";
import foodPriceImage from '../assets/FoodPrice.png';
import EcommerceImage from '../assets/Images/EcommerceImage.png';
import HerbieImage from '../assets/Herbie.png';
import CompanyProfile from '../assets/Company.png';
import BRBImage from '../assets/BRB.png';

const Projects = () => {
    const projectData = [
        {
            title: "School Management System",
            description: "Full-stack school management system with student enrollment, attendance tracking, and role-based authorization.",
            image: schoolImage,
            githubLink: "https://github.com/Codewithimaad/School-management-system",
            liveLink: "https://luminous-international-school.onrender.com",
            tags: ["MERN", "Fullstack"]
        },
        {
            title: "Food Price App",
            description: "Daily food pricing application that calculates and tracks food prices across KPK for the KP Government.",
            image: foodPriceImage,
            githubLink: "https://github.com/Codewithimaad/FoodPriceApp",
            liveLink: "https://foodpriceapp.onrender.com/",
            tags: ["Node.js", "MySQL"]
        },
        {
            title: "E-Commerce Shop",
            description: "Fully functional e-commerce website with product listings, user auth, and shopping experience.",
            image: EcommerceImage,
            githubLink: "https://github.com/Codewithimaad/AHMED-SHOP",
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
        },
        {
            title: "Eccentric Technologies",
            description: "Official corporate website showcasing Eccentric Technologies' services, expertise, and portfolio, with a modern design and responsive user experience.",
            image: CompanyProfile,
            githubLink: "https://github.com/Codewithimaad/Eccentric-Technologies",
            liveLink: "https://eccentric-technologies.vercel.app/",
            tags: ["MERN", "Corporate Website", "Company Project"]
        },
      {
    title: "Business Registration Portal",
    description: "A modern, responsive corporate portal with a dashboard, showcasing Business Registr’s services and portfolio, tailored for Saudi Arabia’s dynamic business landscape.",
    image: BRBImage,
    githubLink: "https://github.com/Codewithimaad/BRB",
    liveLink: "https://business-portal-mauve.vercel.app/",
    tags: ["MERN", "Corporate Website", "Company Project"]
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

    // New animation for the image reveal
    const imageReveal = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    // Special animation for Project 4 (Eccentric Technologies)
    const eccentricImageAnimation = {
        hidden: {
            opacity: 0,
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
        },
        visible: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
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
                            {/* Project image - Special animation for Project 4 */}
                            {index === 4 ? (
                                <motion.div
                                    className="relative h-48 overflow-hidden"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={eccentricImageAnimation}
                                    whileHover="hover"
                                    viewport={{ once: true }}
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
                            ) : (
                                <motion.div
                                    className="relative h-48 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={imageReveal}
                                    viewport={{ once: true }}
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
                            )}

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