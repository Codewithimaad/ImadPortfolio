import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-20 text-white rounded-lg"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-900 opacity-20"></div>

            {/* Section Heading */}
            <motion.h2
                className="mb-12 text-5xl font-bold text-center text-purple-300 tracking-wide relative z-10"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>

            {/* Content Container */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                {/* Image Section */}
                <motion.div
                    className="lg:w-1/2 w-full flex justify-center"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="relative">
                        <motion.img
                            src="https://via.placeholder.com/400"
                            alt="Imad Hussain"
                            className="rounded-full w-60 h-60 lg:w-80 lg:h-80 object-cover shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-full blur-xl"></div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="lg:w-1/2 w-full p-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {/* Introduction */}
                    <motion.p
                        className="text-xl text-gray-300 mb-6 leading-relaxed"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Hello! I’m <span className="text-green-400 font-semibold">Imad Hussain</span>, a
                        full-stack web developer with over 1 year of experience. I’m passionate about
                        crafting responsive, user-friendly, and scalable web applications that bring ideas to
                        life.
                    </motion.p>

                    {/* Skills */}
                    <motion.p
                        className="text-xl text-gray-300 mb-6 leading-relaxed"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        My technical expertise includes <span className="text-cyan-400">React</span>,
                        <span className="text-green-400"> Node.js</span>, <span className="text-yellow-400">JavaScript</span>, and
                        <span className="text-purple-400"> MongoDB</span>. I’ve developed projects like a weather app, a school
                        management system, and a personal portfolio to demonstrate my skills and solve
                        real-world problems.
                    </motion.p>

                    {/* Hobbies */}
                    <motion.p
                        className="text-xl text-gray-300 mb-8 leading-relaxed"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        Outside of development, I enjoy exploring cutting-edge technologies, solving puzzles,
                        and enhancing my knowledge. You might also find me diving into books on science, playing
                        strategy games, or capturing moments through photography.
                    </motion.p>

                    {/* Resume Button */}
                    <motion.div
                        className="flex justify-center lg:justify-start"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 1.1 }}
                    >
                        <a
                            href="https://drive.google.com/file/d/your-resume-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full py-3 px-10 text-lg shadow-lg transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-purple-900 hover:shadow-purple-500/50"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
