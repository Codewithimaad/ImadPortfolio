import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -50 },
        show: {
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
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const hoverEffect = {
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    return (
        <section
            id="stats"
            className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-purple-600 filter blur-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-indigo-600 filter blur-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    viewport={{ once: true }}
                />
            </div>

            {/* Content container */}
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    variants={item}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Development Metrics
                    </motion.h2>
                    <motion.p
                        className="text-lg text-purple-100/80 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        My GitHub activity, contributions, and technology stack
                    </motion.p>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                    initial="hidden"
                    whileInView="show"
                    variants={container}
                    viewport={{ once: true }}
                >
                    {/* GitHub Stats */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                        variants={slideInFromLeft}
                        whileHover={hoverEffect}
                    >
                        <motion.h3
                            className="text-xl font-semibold text-purple-100 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Activity Overview
                        </motion.h3>
                        <div className="overflow-hidden rounded-lg">
                            <motion.img
                                src="https://github-readme-stats.vercel.app/api?username=Codewithimaad&show_icons=true&theme=radical"
                                alt="GitHub Stats"
                                className="w-full h-auto"
                                loading="lazy"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            />
                        </div>
                    </motion.div>

                    {/* Top Languages */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                        variants={slideInFromRight}
                        whileHover={hoverEffect}
                    >
                        <motion.h3
                            className="text-xl font-semibold text-purple-100 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Technology Stack
                        </motion.h3>
                        <div className="overflow-hidden rounded-lg">
                            <motion.img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Codewithimaad&layout=compact&theme=radical"
                                alt="Top Languages"
                                className="w-full h-auto"
                                loading="lazy"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Streak stats */}
                <motion.div
                    className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    variants={item}
                    whileHover={hoverEffect}
                >
                    <motion.h3
                        className="text-xl font-semibold text-purple-100 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Contribution Streak
                    </motion.h3>
                    <div className="overflow-hidden rounded-lg">
                        <motion.img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=Codewithimaad&theme=radical"
                            alt="GitHub Streak"
                            className="w-full h-auto"
                            loading="lazy"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;