import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ModernTestimonials = () => {
    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    // Sample testimonials data
    const testimonials = [
        {
            author: "Haroon Alam",
            role: "Digital Entrepreneur",
            company: "Rebel Media.",
            quote: "I hired Imad to build my landing page and backend for a digital course, and he nailed it. Clean design, smooth database setup, and flawless integrations, Google Analytics, Google Ads, Facebook Ads, email automation, and WhatsApp API. Everything works perfectly, and the process was fast, professional, and stress-free. Highly recommend Imad for a custom built website.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c937?w=400&h=400&fit=crop&crop=face"
        },

    ];

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 6000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    return (
        <div className="min-h-screen py-20 px-2 md:px-4">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what industry leaders have to say about our experience.
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content Side */}
                            <div className="order-2 lg:order-1">
                                <div className="mb-8">
                                    <Quote className="w-12 h-12 text-blue-400 mb-6" />
                                    <p className="text-lg md:text-xl font-light text-white leading-relaxed mb-8">
                                        "{testimonials[active].quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <img
                                        src={testimonials[active].image}
                                        alt={testimonials[active].author}
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-400/30"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {testimonials[active].author}
                                        </h3>
                                        <p className="text-slate-400">
                                            {testimonials[active].role}
                                        </p>
                                        <p className="text-blue-400 text-sm font-medium">
                                            {testimonials[active].company}
                                        </p>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 hover:scale-105"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:scale-105"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>

                                    {/* Autoplay Toggle */}
                                    <button
                                        onClick={() => setAutoplay(!autoplay)}
                                        className="ml-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all duration-200"
                                    >
                                        {autoplay ? 'Pause' : 'Play'}
                                    </button>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    <div className="aspect-square max-w-md mx-auto relative overflow-hidden rounded-2xl">
                                        <img
                                            key={active}
                                            src={testimonials[active].image}
                                            alt={testimonials[active].author}
                                            className="w-full h-full object-cover transition-all duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center mt-8 gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${active === index
                                    ? 'bg-blue-400 w-8'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">20+</div>
                        <div className="text-slate-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">98%</div>
                        <div className="text-slate-400">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-slate-400">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernTestimonials;