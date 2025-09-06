import React from "react";
import { motion, stagger } from "framer-motion";
import profilePic from '../assets/Images/IMAD.jpg'

const containerVariants = {
    hidden: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Imad Khan"
                            className="border border-stone-900 rounded-md"
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 ">
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                            Imad Hussain <br />
                            <span className="text-green-500">Khan</span>
                        </motion.h2>

                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to stone-600 bg-clip-text text-3xl tracking-tighter text-transparent">
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 sm:text-base lg:text-xl leading-relaxed tracking-tighter">
                            As a passionate Full Stack Web Developer with 5 years of experience, I specialize in crafting responsive and scalable web applications using the MERN stack, Next.js, and Tailwind CSS. In addition to development, I possess hands-on knowledge in IT support, including hardware/software troubleshooting, basic networking, and user assistance. I thrive in fast-paced, collaborative environments delivering user-focused solutions in both development and technical support domains.
                        </motion.p>

                        <motion.a
                            variants={childVariants}
                            href="#contact" // Assuming this is the correct section or link
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full py-2 md:py-3 lg:py-3 sm:px-8 px-10 text-lg shadow-lg transition-all duration-300 ease-in-out hover:from-green-500 hover:to-green-800 hover:shadow-green-500/50">
                            Connect With Me
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Hero;
