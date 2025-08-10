import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu, FiChevronDown } from "react-icons/fi";

const MobileMenu = ({
    isOpen,
    setIsOpen,
    navItems,
    openSubmenu,
    setOpenSubmenu,
    handleScroll,
    toggleSubmenu,
}) => {
    return (
        <>
            {/* Mobile Menu Button (Fixed Position) */}
            <div className="lg:hidden fixed right-8 z-50">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md text-gray-300 hover:text-white"
                    whileTap={{ scale: 0.9 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={35} />}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setIsOpen(false);
                                setOpenSubmenu(null);
                            }}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 h-screen w-full max-w-md bg-purple-500/20 backdrop-blur-3xl z-50 shadow-3xl border-l border-gray-800 overflow-y-auto"
                        >
                            {/* Gradient Background Elements */}
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                            </div>

                            {/* Close Button */}
                            <div className="flex justify-end p-4 relative z-10">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOpenSubmenu(null);
                                    }}
                                    className="p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
                                    aria-label="Close menu"
                                >
                                    <FiX size={35} className="text-gray-400 hover:text-white" />
                                </button>
                            </div>

                            <div className="px-6 pb-8 space-y-1 relative z-10">
                                {navItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-800/50 last:border-0">
                                        {item.submenu ? (
                                            <>
                                                <motion.button
                                                    onClick={() => toggleSubmenu(index)}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full flex justify-between items-center text-left py-4 rounded-lg px-3 text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800/30 transition-colors duration-200"
                                                >
                                                    <span>{item.name}</span>
                                                    <motion.span
                                                        animate={{ rotate: openSubmenu === index ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="text-gray-400"
                                                    >
                                                        <FiChevronDown size={18} />
                                                    </motion.span>
                                                </motion.button>

                                                <AnimatePresence>
                                                    {openSubmenu === index && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{
                                                                height: "auto",
                                                                opacity: 1,
                                                                transition: {
                                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                                    opacity: { duration: 0.2, delay: 0.1 },
                                                                },
                                                            }}
                                                            exit={{
                                                                height: 0,
                                                                opacity: 0,
                                                                transition: {
                                                                    height: { duration: 0.2 },
                                                                    opacity: { duration: 0.1 },
                                                                },
                                                            }}
                                                            className="overflow-hidden pl-4"
                                                        >
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <button
                                                                    key={subIndex}
                                                                    onClick={() => handleScroll(subItem.id)}
                                                                    className="block w-full text-left py-3 px-6 rounded-lg text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800/20 transition-colors duration-150 ml-2 border-l border-gray-800/50"
                                                                >
                                                                    {subItem.name}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => handleScroll(item.id)}
                                                whileTap={{ scale: 0.98 }}
                                                className="block w-full text-left py-4 px-3 rounded-lg text-lg font-medium text-gray-200 hover:text-white hover:bg-gray-800/30 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileMenu;
