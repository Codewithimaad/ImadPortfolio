import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

// Unicode icons since react-icons isn't available
const ChevronDown = ({ isRotated }) => (
    <span
        className={`inline-block transition-transform duration-300 text-lg ${isRotated ? 'rotate-180' : ''}`}
    >
        ▼
    </span>
);
const MenuIcon = () => <span className="text-2xl">☰</span>;
const CloseIcon = () => <span className="text-2xl">✕</span>;

// Modern Mobile Menu Component
const ModernMobileMenu = ({
    isOpen,
    setIsOpen,
    navItems,
    openSubmenu,
    setOpenSubmenu,
    toggleSubmenu,
    handleScroll
}) => {
    return (
        <>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 rounded-2xl  backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-900/80 transition-all duration-300 hover:scale-110"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Floating Mobile Menu */}
                    <div className="fixed top-20 right-4 w-80 max-w-[calc(100vw-2rem)] bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl shadow-black/50 z-50 lg:hidden overflow-hidden animate-slide-in">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-sm">I</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">
                                            I<span className="text-green-400">MAD</span>
                                        </div>
                                        <div className="text-xs text-gray-400">Portfolio</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="p-4 max-h-96 overflow-y-auto">
                            {navItems.map((item, index) => (
                                <div key={index} className="mb-2">
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubmenu(index)}
                                                className="w-full flex justify-between items-center p-4 rounded-2xl text-left font-bold text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown isRotated={openSubmenu === index} />
                                            </button>

                                            {openSubmenu === index && (
                                                <div className="mt-2 ml-4 space-y-1 animate-slide-down">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <button
                                                            key={subIndex}
                                                            onClick={() => handleScroll(subItem.id)}
                                                            className="block w-full text-left p-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-200 border-l-2 border-gray-700 hover:border-green-400"
                                                        >
                                                            {subItem.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleScroll(item.id)}
                                            className="block w-full text-left p-4 rounded-2xl font-bold text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            {item.name}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div id='contact' className="p-6 border-t border-gray-700/50">
                            <a
                                href="https://wa.me/966536317098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full p-4 bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-center"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const ModernNavbarTop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: "HOME", id: "home" },
        { name: "SERVICES", id: "services" },
        { name: "EXPERIENCE", id: "experience" },
        { name: "CLIENTS", id: "testimonials" },
        { name: "PROJECTS", id: "projects" },
        { name: "TECHNOLOGIES", id: "technologies" },
        { name: "ABOUT", id: "about" },
        { name: "CONTACT", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (id) => {
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
        <>
            <nav
                className={`fixed mb-20 w-full z-50 transition-all duration-700 ease-out ${scrolled
                    ? 'top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl'
                    : 'top-0 left-0 right-0'
                    }`}
            >
                <div
                    className={`mx-auto transition-all duration-700 ease-out ${scrolled
                        ? 'max-w-6x1 backdrop-blur-2xl border border-gray-700/50 rounded-3xl shadow-2xl shadow-purple-500/10'
                        : 'max-w-none  backdrop-blur-xl border-b border-gray-700/30'
                        }`}
                >
                    <div className="flex items-center justify-between lg:justify-center px-6 lg:px-8 h-16 md:h-20">

                        {/* Logo / IMAD name - Enhanced */}
                        <div className="flex flex-shrink-0 items-center lg:hidden group">
                            <a href="/" aria-label="Home" className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                                    <span className="text-white font-bold text-lg">I</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-black">
                                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">I</span>
                                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">MAD</span>
                                    <span className="text-green-400 text-xl">.</span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation - Enhanced */}
                        <div className="hidden lg:flex items-center">
                            {/* Desktop Logo */}
                            <div className="flex items-center space-x-3 mr-12 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                                    <span className="text-white font-bold text-xl">I</span>
                                </div>
                                <div>
                                    <div className="text-3xl font-black">
                                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">I</span>
                                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">MAD</span>
                                        <span className="text-green-400">.</span>
                                    </div>
                                    <div className="text-xs text-green-400 font-medium tracking-widest -mt-1">
                                        PORTFOLIO
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex items-center space-x-1">
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        {item.submenu ? (
                                            <div className="relative group">
                                                <button
                                                    onClick={() => toggleSubmenu(index)}
                                                    className="flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-800/40 transition-all duration-300 group"
                                                >
                                                    <span className="tracking-wide">{item.name}</span>
                                                    <ChevronDown isRotated={openSubmenu === index} />
                                                </button>

                                                {/* Enhanced Dropdown */}
                                                {openSubmenu === index && (
                                                    <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-dropdown">
                                                        <div className="p-2">
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <button
                                                                    key={subIndex}
                                                                    onClick={() => handleScrollToSection(subItem.id)}
                                                                    className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                                        <span>{subItem.name}</span>
                                                                    </div>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleScrollToSection(item.id)}
                                                className="px-5 py-3 rounded-2xl text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-800/40 transition-all duration-300 tracking-wide relative group"
                                            >
                                                {item.name}
                                                <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-purple-400 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                            </button>
                                        )}
                                    </div>
                                ))}

                                {/* CTA Button */}
                                <div className="ml-6 pl-6 border-l border-gray-700/50">
                                    <a
                                        href="https://wa.me/966536317098"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                                    >
                                        Let's Talk
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Component */}
                        <ModernMobileMenu
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            navItems={navItems}
                            openSubmenu={openSubmenu}
                            setOpenSubmenu={setOpenSubmenu}
                            toggleSubmenu={toggleSubmenu}
                            handleScroll={handleScrollToSection}
                        />
                    </div>
                </div>
            </nav>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes dropdownSlide {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        max-height: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        max-height: 400px;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }

                .animate-slide-in {
                    animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-dropdown {
                    animation: dropdownSlide 0.3s ease-out forwards;
                }

                .animate-slide-down {
                    animation: slideDown 0.3s ease-out forwards;
                }

                /* Custom scrollbar for mobile menu */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 4px;
                }

                .overflow-y-auto::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: rgba(16, 185, 129, 0.5);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: rgba(16, 185, 129, 0.8);
                }
            `}</style>
        </>
    );
};

export default ModernNavbarTop;