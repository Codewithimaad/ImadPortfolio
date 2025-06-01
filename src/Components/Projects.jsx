import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import weatherImage from "../assets/Images/Weather.jpg";
import currencyImage from "../assets/Images/Currency.jpg";
import schoolImage from "../assets/Images/School.png";
import portfolioImage from "../assets/Images/PortfolioPink.jpg";
import countryImage from '../assets/Images/Country.png'
import foodPriceImage from '../assets/Images/FoodPrice.png'
import EcommerceImage from '../assets/Images/EcommerceImage.png'
import HerbieImage from '../assets/Images/Herbie.jpg'

const Projects = () => {
    const projectData = [
        {
            title: "Weather App",
            description: "A weather app built with React that provides real-time weather information.",
            image: weatherImage,
            githubLink: "https://github.com/Codewithimaad/weather-check",
            liveLink: "https://codewithimaad.github.io/weather-check/",
        },
        {
            title: "Currency Converter",
            description: "A currency converter app using React and an external API to fetch live exchange rates.",
            image: currencyImage,
            githubLink: "https://github.com/Codewithimaad/Currency-Converter",
            liveLink: "https://codewithimaad.github.io/Currency-Converter/",
        },
        {
            title: "School Management System",
            description: "A full-stack school management system with features like student enrollment, Attendance, Fee Entry, and Role-Based Authorization etc.",
            image: schoolImage,
            githubLink: "#",
            liveLink: "https://luminous-international-school.onrender.com",
        },
        {
            title: "Imad Portfolio",
            description: "A personal portfolio showcasing my projects, skills, and experience as a full-stack web developer.",
            image: portfolioImage,
            githubLink: "https://github.com/Codewithimaad/perosnalportfolio",
            liveLink: "https://codewithimaad.github.io/perosnalportfolio/",
        },
        {
            title: "Country Guide",
            description: "An interactive app showcasing country details, including area, population, currency, and flag. Built with React for dynamic and responsive data presentation.",
            image: countryImage,
            githubLink: "https://github.com/Codewithimaad/Country-Details",
            liveLink: "https://codewithimaad.github.io/Country-Details/",
        },
        {
            "title": "Food Price App",
            "description": "A daily food pricing application that calculates and tracks food prices across KPK for the KP Government. Built using Node.js, MySQL, and EJS for the frontend.",
            "image": foodPriceImage,
            "githubLink": "#",
            "liveLink": "https://foodpriceapp.onrender.com/"
        },
        {
            "title": "E-Commerce Shop Website",
            "description": "A fully functional e-commerce website for online shopping, featuring product listings, user authentication, and a seamless shopping experience. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
            "image": EcommerceImage,
            "githubLink": "#",
            "liveLink": "https://ahmedshop.vercel.app/"
        },
        {
            "title": "E-Commerce Herbie Website",
            "description": "A fully functional e-commerce website for online shopping, featuring product listings, user authentication, and a seamless shopping experience. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
            "image": HerbieImage,
            "githubLink": "https://github.com/Codewithimaad/Herbie",
            "liveLink": "https://herbie-rust.vercel.app/"
        }


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
                                className="relative bg-purple-800 rounded-xl shadow-lg p-6 transform backdrop-blur-lg bg-opacity-30 lg:w-80"
                                style={{ height: "470px" }} // Fixed height for all cards
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
