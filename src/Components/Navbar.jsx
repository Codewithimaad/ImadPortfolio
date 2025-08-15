import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navbar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Smooth scroll handler
    const handleScroll = (id) => {
        smoothScrollTo(id, { offset: 100 }); // 100px offset for navbar
        setIsOpen(false);  // Close mobile menu on link click
        setOpenSubmenu(null);
    };

    return (
        <nav className='flex items-center justify-center lg:justify-between py-6 mt-14 md:mt-20'>
            <div className='flex-shrink-0 items-center hidden lg:flex'>
                <a href="/" aria-label='Home' className='text-2xl font-bold md:text-3xl lg:text-5xl'>
                    I <span className='text-2xl md:text-3xl lg:text-5xl text-green-500'>MAD.</span>
                </a>
            </div>

            <div className='m-8 flex items-center justify-center gap-12 lg:gap-4 text-2xl'>
                <a href="https://wa.me/966536317098" target='_blank' rel='noopener noreferrer' aria-label='Whatsapp' className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-green-600'>
                    <FaWhatsapp />
                </a>
                <a href="https://www.linkedin.com/in/imad-hussain-khan-76388b305" target='_blank' rel='noopener noreferrer' aria-label='Linkedin' className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Codewithimaad" target='_blank' rel='noopener noreferrer' aria-label='Github' className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-white'>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/imadhussainkhan/profilecard" target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-pink-600'>
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100005439558295" target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600'>
                    <FaFacebook />
                </a>



            </div>
        </nav>
    );
};

export default Navbar;
