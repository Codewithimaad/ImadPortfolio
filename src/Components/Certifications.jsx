import React, { useState, useEffect } from "react";

// Unicode icons since react-icons isn't available
const ExternalLinkIcon = () => <span className="text-sm">↗</span>;

const FloatingCertCard = ({ cert, index, mousePosition }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const floatAnimation = () => {
            const time = Date.now() * 0.001;
            const newX = Math.sin(time + index * 1.5) * 20;
            const newY = Math.cos(time * 0.9 + index * 0.8) * 15;
            const newRotation = Math.sin(time * 0.3 + index) * 2;

            setPosition({ x: newX, y: newY });
            setRotation(newRotation);
        };

        const interval = setInterval(floatAnimation, 60);
        return () => clearInterval(interval);
    }, [index]);

    const calculateParallax = () => {
        if (!mousePosition) return { x: 0, y: 0 };
        const parallaxStrength = 0.012;
        return {
            x: (mousePosition.x - window.innerWidth / 2) * parallaxStrength,
            y: (mousePosition.y - window.innerHeight / 2) * parallaxStrength
        };
    };

    const parallax = calculateParallax();

    return (
        <div
            className="relative group cursor-pointer h-full"
            style={{
                transform: `translate(${position.x + parallax.x}px, ${position.y + parallax.y}px) rotate(${rotation}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing aura */}
            <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 scale-110`} />

            {/* Main card */}
            <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-full bg-gray-900/70 backdrop-blur-2xl border border-gray-700/40 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 hover:scale-105"
            >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header with icon and badge */}
                    <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-xl group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110`}>
                            <span className="text-2xl">🏆</span>
                        </div>
                        <div className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-xs text-emerald-400 font-bold">VERIFIED</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                        {cert.title}
                    </h3>

                    {/* Issuer with enhanced styling */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 via-emerald-400 to-blue-500 rounded-full" />
                            <div>
                                <p className="text-gray-300 font-medium text-sm leading-tight">{cert.issuer}</p>
                                <p className="text-xs text-gray-500">Issuing Organization</p>
                            </div>
                        </div>
                    </div>

                    {/* Date with timeline */}
                    <div className="flex items-center gap-3 mb-6 mt-auto">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full shadow-lg shadow-purple-500/50" />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent" />
                        <span className="text-xs text-gray-400 font-medium bg-gray-800/50 px-3 py-1 rounded-full">
                            {cert.date}
                        </span>
                    </div>

                    {/* View credential button */}
                    <div className={`flex items-center justify-between p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 group-hover:bg-purple-500/10 group-hover:border-purple-400/50 transition-all duration-300 ${isHovered ? 'transform translate-y-0' : 'transform translate-y-2 opacity-80'}`}>
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                            View Credential
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                            <ExternalLinkIcon />
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 rounded-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            </a>
        </div>
    );
};

const ModernFloatingCertifications = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const certifications = [
          {
            title: "Full Stack Web Development Experience",
            issuer: "Eccentric Technologies",
            date: "Dec 2023 - Present",
            link: "https://drive.google.com/file/d/1zX1vCF283l7bMmrzbo1FYj-6w3M02lID/view?usp=drive_link",
            gradient: "from-purple-500 to-yellow-600"
        },
        {
            title: "Full Stack Web Development Experience",
            issuer: "GEER Information & Communication Technology",
            date: "Aug 2022 - Nov 2023",
            link: "#",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            title: "Full Stack Web Development Experience",
            issuer: "Mazhar Enterprises Pvt Ltd",
            date: "Feb 2020 - Jun 2022",
            link: "https://drive.google.com/file/d/1UxUU4T7c3L4lwQq3KCTiIj1xDY0WDv6D/view?usp=drive_link",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            title: "Full Stack Web Development Experience",
            issuer: "E-Digital Pakistan Pvt (Remote)",
            date: "Jun 2025",
            link: "https://drive.google.com/file/d/1a8w3vnoyCXfKKyzkZSkaeuA-jeYwfEej/view?usp=drive_link",
            gradient: "from-purple-500 to-red-600"
        },
        {
            title: "Full Stack Web Development Bootcamp",
            issuer: "Udemy",
            date: "Feb 2022",
            link: "https://drive.google.com/file/d/1zgmwvxVtHANW_B3fz2PZIacnZnA0_C30/view?usp=drive_link",
            gradient: "from-blue-500 to-cyan-600"
        },
        {
            title: "Certificate of Appreciation",
            issuer: "Abdul Wali Khan University",
            date: "December 2022",
            link: "https://drive.google.com/file/d/1GZNFq7O6LjxW38yxsKDPmW1XKffrTaJD/view?usp=drive_link",
            gradient: "from-orange-500 to-red-600"
        },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden  py-20">
            {/* Animated background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-8 py-3 mb-8">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">Professional Credentials</span>
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-emerald-300">
                            Verified
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-500 to-cyan-500">
                            Certifications
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Professional credentials demonstrating expertise and continuous learning in cutting-edge technologies
                    </p>
                </div>

                {/* Floating certifications grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {certifications.map((cert, index) => (
                        <FloatingCertCard
                            key={index}
                            cert={cert}
                            index={index}
                            mousePosition={mousePosition}
                        />
                    ))}
                </div>




            </div>
        </section>
    );
};

export default ModernFloatingCertifications;