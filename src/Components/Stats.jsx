import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
    return (
        <section id="stats" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
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
                    Development Metrics
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My GitHub activity, contributions, and technology stack
                </motion.p>
            </div>

            {/* Timeline layout */}
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-emerald-500/30 transform -translate-x-1/2"></div>

                {/* Stats items */}
                <div className="space-y-12">
                    {/* GitHub Stats */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 right-0 translate-x-1/2"></div>

                        {/* Card */}
                        <div className="mr-auto pr-8 pl-12 max-w-xl bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-emerald-400/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-emerald-400">
                                    📊
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        Activity Overview
                                    </h3>
                                    <div className="mt-4 overflow-hidden rounded-lg">
                                        <motion.img
                                            src="https://github-readme-stats.vercel.app/api?username=Codewithimaad&show_icons=true&theme=radical"
                                            alt="GitHub Stats"
                                            className="w-full h-auto"
                                            loading="lazy"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Top Languages */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 left-0 -translate-x-1/2"></div>

                        {/* Card */}
                        <div className="ml-auto pl-8 pr-12 max-w-xl bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-emerald-400/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-emerald-400">
                                    💻
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        Technology Stack
                                    </h3>
                                    <div className="mt-4 overflow-hidden rounded-lg">
                                        <motion.img
                                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Codewithimaad&layout=compact&theme=radical"
                                            alt="Top Languages"
                                            className="w-full h-auto"
                                            loading="lazy"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Streak Stats */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.45,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 right-0 translate-x-1/2"></div>

                        {/* Card */}
                        <div className="mr-auto pr-8 pl-12 max-w-xl bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-emerald-400/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-emerald-400">
                                    🔥
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        Contribution Streak
                                    </h3>
                                    <div className="mt-4 overflow-hidden rounded-lg">
                                        <motion.img
                                            src="https://github-readme-streak-stats.herokuapp.com/?user=Codewithimaad&theme=radical"
                                            alt="GitHub Streak"
                                            className="w-full h-auto"
                                            loading="lazy"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;