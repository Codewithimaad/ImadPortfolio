import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-4 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 animate-bounce-once"
            >
                <FaArrowUp size={22} />
            </button>

        )
    );
};

export default ScrollToTopButton;
