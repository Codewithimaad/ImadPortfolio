import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNodejs } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { motion } from 'framer-motion';

// Variants for bouncing icon animation
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
});

const Technologies = () => {
    return (
        <div className='pb-10'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-4xl font-bold text-purple-300 text-center"
            >
                Technologies
            </motion.h2>

            <motion.div className='flex flex-wrap items-center justify-center gap-6'>
                {[
                    { icon: <RiReactjsLine />, color: 'text-cyan-400' },
                    { icon: <TbBrandNodejs />, color: 'text-green-600' },
                    { icon: <SiMongodb />, color: 'text-green-600' },
                    { icon: <IoLogoJavascript />, color: 'text-yellow-600' },
                    { icon: <SiExpress />, color: 'text-yellow-600' },
                    { icon: <RiTailwindCssFill />, color: 'text-cyan-500' },
                    { icon: <FaBootstrap />, color: 'text-purple-500' }
                ].map((tech, index) => (
                    <motion.div
                        key={index}
                        className='p-4'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation
                    >
                        <motion.div
                            className={`text-7xl ${tech.color} transition-transform duration-300 ease-in-out hover:scale-110`}
                            variants={iconVariants(2)} // Use the iconVariants for animation
                            initial="initial"
                            animate="animate"
                        >
                            {tech.icon}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
