import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-label='Home' className='text-2xl md:text-3xl lg:text-5xl'>
                    I <span className='text-2xl md:text-3xl lg:text-5xl text-green-500' width={50} height={33} >MAD.</span>
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a
                    href="https://www.linkedin.com/in/imad-hussain-khan-76388b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Linkedin'
                    className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600'>
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Codewithimaad"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                    className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-white'>
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/imadhussainkhan/profilecard/?igsh=ZmV3Y2lzOTZsbnVl"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'
                    className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-pink-600'>
                    <FaInstagram />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100005439558295&mibextid=ZbWKwL"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Facebook'
                    className='transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600'>
                    <FaFacebook />
                </a>
            </div>

        </nav>
    )
}

export default Navbar
