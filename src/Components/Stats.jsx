import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
    return (
        <section
            id="stats"
            className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-purple-600 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-indigo-600 filter blur-3xl"></div>
            </div>

            {/* Content container */}
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200 mb-4">
                        Development Metrics
                    </h2>
                    <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">
                        My GitHub activity, contributions, and technology stack
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* GitHub Stats */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold text-purple-100 mb-4">Activity Overview</h3>
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=Codewithimaad&show_icons=true&theme=radical"
                                alt="GitHub Stats"
                                className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Top Languages */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-purple-100 mb-4">Technology Stack</h3>
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Codewithimaad&layout=compact&theme=radical"
                                alt="Top Languages"
                                className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Streak stats */}
                <motion.div
                    className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-xl font-semibold text-purple-100 mb-4">Contribution Streak</h3>
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=Codewithimaad&theme=radical"
                            alt="GitHub Streak"
                            className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;