import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { smoothScrollTo } from '../utils/smoothScroll';

// Modern Unicode icons with enhanced styling
const ChevronDown = ({ isRotated }) => (
    <span
        className={`inline-block transition-all duration-500 text-sm ${
            isRotated ? 'rotate-180 text-green-400' : 'text-slate-400'
        }`}
    >
        ▼
    </span>
);

const MenuIcon = () => (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center">
        <span className="block w-6 h-0.5 bg-white mb-1 rounded-full"></span>
        <span className="block w-4 h-0.5 bg-green-400 mb-1 rounded-full"></span>
        <span className="block w-6 h-0.5 bg-white rounded-full"></span>
    </div>
);

const CloseIcon = () => (
    <div className="relative w-6 h-6 flex items-center justify-center">
        <span className="absolute w-6 h-0.5 bg-white rounded-full transform rotate-45"></span>
        <span className="absolute w-6 h-0.5 bg-white rounded-full transform -rotate-45"></span>
    </div>
);

// Ultra-Modern Mobile Menu Component
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
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative p-4 rounded-2xl md:bg-slate-900/80 md:backdrop-blur-xl md:border md:border-slate-700/50 text-white hover:bg-slate-800/80 transition-all duration-300 md:hover:scale-105"
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <>
                    {/* Enhanced Backdrop */}
                    <div
                        className="fixed inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-green-950/50 backdrop-blur-2xl z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Floating Mobile Menu */}
                    <div className="fixed top-24 right-6 left-6 md:left-auto md:w-96 bg-slate-900/95 backdrop-blur-3xl border border-slate-700/30 rounded-3xl shadow-2xl shadow-green-500/10 z-50 lg:hidden overflow-hidden animate-slide-in">
                        
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/10 rounded-3xl"></div>
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>

                        {/* Header */}
                        <div className="relative p-8 border-b border-slate-800/50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Enhanced Logo */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                                        <div className="relative w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                                            <span className="text-white font-black text-xl">I</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black">
                                            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">I</span>
                                            <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">MAD</span>
                                            <span className="text-green-400">.</span>
                                        </div>
                                        <div className="text-xs text-green-400/80 font-bold tracking-[0.2em] -mt-1">
                                            PORTFOLIO
                                        </div>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="relative p-6 max-h-96 overflow-y-auto">
                            <div className="space-y-2">
                                {navItems.map((item, index) => (
                                    <div key={index} className="group">
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleSubmenu(index)}
                                                    className="w-full flex justify-between items-center p-4 rounded-2xl text-left font-bold bg-slate-800/30 hover:bg-slate-800/60 text-slate-200 hover:text-white border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 group"
                                                >
                                                    <span className="tracking-wide">{item.name}</span>
                                                    <ChevronDown isRotated={openSubmenu === index} />
                                                </button>

                                                {openSubmenu === index && (
                                                    <div className="mt-3 ml-4 space-y-2 animate-slide-down">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() => handleScroll(subItem.id)}
                                                                className="flex items-center w-full text-left p-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition-all duration-300 border-l-2 border-slate-700 hover:border-green-400 group"
                                                            >
                                                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                {subItem.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleScroll(item.id)}
                                                className="block w-full text-left p-4 rounded-2xl font-bold bg-slate-800/30 hover:bg-slate-800/60 text-slate-200 hover:text-white border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 tracking-wide relative group overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-green-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                                <span className="relative">{item.name}</span>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="relative p-6 border-t border-slate-800/50">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                                <a
                                    href="https://wa.me/966536317098"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block w-full p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black rounded-2xl shadow-xl text-center transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="relative z-10">Let's Connect</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Border */}
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
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
        smoothScrollTo(id, { offset: 100 });
        setIsOpen(false);
        setOpenSubmenu(null);
    };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-700 ease-out ${
                    scrolled
                        ? 'top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl'
                        : 'top-0 left-0 right-0'
                }`}
            >
                {/* Background Glow Effect */}
                {scrolled && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400/10 via-green-500/5 to-green-400/10 rounded-3xl blur-2xl"></div>
                )}

                <div
                    className={`relative mx-auto transition-all duration-700 ease-out ${
                        scrolled
                            ? 'bg-slate-950/80 backdrop-blur-3xl border border-slate-800/30 rounded-3xl shadow-2xl shadow-green-500/5'
                            : 'bg-slate-950/60 backdrop-blur-2xl border-b border-slate-800/20'
                    }`}
                >
                    {/* Top Border Gradient */}
                    {scrolled && (
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent rounded-t-3xl"></div>
                    )}

                    <div className="flex items-center justify-between lg:justify-center px-6 lg:px-8 h-18 md:h-22">

                        {/* Mobile Logo */}
                        <div className="flex flex-shrink-0 items-center lg:hidden group">
                            <a href="/" aria-label="Home" className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-black text-xl">I</span>
                                    </div>
                                </div>
                                <div className="text-3xl md:text-4xl font-black">
                                    <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">I</span>
                                    <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">MAD</span>
                                    <span className="text-green-400">.</span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center">
                            {/* Desktop Logo */}
                            <div className="flex items-center space-x-4 mr-16 group">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                                        <span className="text-white font-black text-2xl">I</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black">
                                        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">I</span>
                                        <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">MAD</span>
                                        <span className="text-green-400">.</span>
                                    </div>
                                    <div className="text-xs text-green-400/90 font-black tracking-[0.3em] -mt-2">
                                        PORTFOLIO
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex items-center space-x-2">
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        {item.submenu ? (
                                            <div className="relative group">
                                                <button
                                                    onClick={() => toggleSubmenu(index)}
                                                    className="flex items-center space-x-2 px-6 py-4 rounded-2xl text-sm font-bold text-slate-300 hover:text-white hover:bg-slate-800/40 transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-green-500/20"
                                                >
                                                    <span className="tracking-wider">{item.name}</span>
                                                    <ChevronDown isRotated={openSubmenu === index} />
                                                </button>

                                                {/* Enhanced Dropdown */}
                                                {openSubmenu === index && (
                                                    <div className="absolute top-full left-0 mt-3 w-72 bg-slate-950/95 backdrop-blur-3xl border border-slate-800/30 rounded-2xl shadow-2xl shadow-green-500/10 overflow-hidden animate-dropdown z-50">
                                                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                                                        
                                                        <div className="p-3">
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <button
                                                                    key={subIndex}
                                                                    onClick={() => handleScrollToSection(subItem.id)}
                                                                    className="flex items-center w-full text-left px-4 py-4 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300 group relative overflow-hidden"
                                                                >
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-green-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                    <span className="relative">{subItem.name}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                        
                                                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleScrollToSection(item.id)}
                                                className="px-6 py-4 rounded-2xl text-sm font-bold text-slate-300 hover:text-white hover:bg-slate-800/40 transition-all duration-300 tracking-wider relative group overflow-hidden backdrop-blur-sm border border-transparent hover:border-green-500/20"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-green-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                                <span className="relative">{item.name}</span>
                                                <div className="absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-green-400 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                            </button>
                                        )}
                                    </div>
                                ))}

                                {/* CTA Button */}
                                <div className="ml-8 pl-8 border-l border-slate-700/50">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                                        <a
                                            href="https://wa.me/966536317098"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                                        >
                                            <span className="relative z-10">Let's Talk</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                                        </a>
                                    </div>
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

                    {/* Bottom Border */}
                    {scrolled && (
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent rounded-b-3xl"></div>
                    )}
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
                        transform: translateX(100%) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes dropdownSlide {
                    from {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.9);
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
                    animation: fadeIn 0.4s ease-out forwards;
                }

                .animate-slide-in {
                    animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-dropdown {
                    animation: dropdownSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-slide-down {
                    animation: slideDown 0.4s ease-out forwards;
                }

                /* Enhanced scrollbar */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }

                .overflow-y-auto::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.3);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #22c55e, #16a34a);
                    border-radius: 10px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #16a34a, #15803d);
                }
            `}</style>
        </>
    );
};

export default ModernNavbarTop;