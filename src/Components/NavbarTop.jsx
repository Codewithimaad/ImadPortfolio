import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import MobileMenu from "./MobileMenu";  // Import MobileMenu

const NavbarTop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const navItems = [
        { name: "HOME", id: "home" },
        { name: "SERVICES", id: "services" },
        { name: "EXPERIENCE", id: "experience" },
        { name: "CLIENTS", id: "testimonials" },
        { name: "PROJECTS", id: "projects" },
        { name: "TECHNOLOGIES", id: "technologies" },
        { name: "GITHUB STATS", id: "stats" },
        { name: "ABOUT", id: "about" },
        { name: "CONTACT", id: "contact" },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
            setOpenSubmenu(null);
        }
    };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <motion.nav
            className="w-full z-50"  // removed fixed so navbar scrolls normally
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="mx-auto px-10 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between lg:justify-center lg:backdrop-blur-md h-16 md:h-20">

                    {/* Logo / IMAD name */}
                    <div className='flex flex-shrink-0 items-center lg:hidden'>
                        <a href="/" aria-label='Home' className='text-2x1 font-bold md:text-3xl lg:text-5xl'>
                            I <span className='text-2xl md:text-3xl lg:text-5xl text-green-500'>MAD.</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group inline-block">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className="relative text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-lg py-2 px-4 rounded-md select-none"
                                        >
                                            {item.name}
                                            <motion.span
                                                animate={{ rotate: openSubmenu === index ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-2"
                                            >
                                                <FiChevronDown size={20} />
                                            </motion.span>
                                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all group-hover:w-full" />
                                        </button>

                                        <AnimatePresence>
                                            {openSubmenu === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute left-0 mt-3 w-56 rounded-lg shadow-lg bg-black/70 backdrop-blur-xl border border-white/10"
                                                >
                                                    <div className="py-2">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() => handleScroll(subItem.id)}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                                                            >
                                                                {subItem.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleScroll(item.id)}
                                        className="relative text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all group-hover:w-full" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu (Button + Drawer) */}
                    <MobileMenu
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        navItems={navItems}
                        openSubmenu={openSubmenu}
                        setOpenSubmenu={setOpenSubmenu}
                        toggleSubmenu={toggleSubmenu}
                        handleScroll={handleScroll}
                    />
                </div>
            </div>
        </motion.nav>
    );
};

export default NavbarTop;
