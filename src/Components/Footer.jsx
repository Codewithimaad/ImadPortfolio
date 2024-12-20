import React from "react";

const Footer = () => {
    return (
        <footer className=" text-gray-300 py-8">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Brand Information */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-green-400">Imad Hussain Khan</h1>
                        <p className="mt-2 text-base">
                            Building intuitive and scalable web solutions with precision and creativity.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Codewithimaad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transition duration-300"
                        >
                            <i className="fab fa-github text-3xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/imad-hussain/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transition duration-300"
                        >
                            <i className="fab fa-linkedin text-3xl"></i>
                        </a>
                        <a
                            href="mailto:kimad1728@gmail.com"
                            className="text-gray-400 hover:text-green-400 transition duration-300"
                        >
                            <i className="fas fa-envelope text-3xl"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-6 mb-4"></div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-center text-sm">
                    <p className="mb-2 lg:mb-0">
                        © {new Date().getFullYear()} Imad Hussain Khan. All rights reserved.
                    </p>
                    <p className="flex items-center space-x-1">
                        <span>Designed with</span>
                        <span className="text-red-500 text-lg">♥</span>
                        <span>by Imad Hussain Khan.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
