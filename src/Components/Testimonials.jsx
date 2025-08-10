import React from "react";
import AnimatedTestimonials from "./AnimatedTestimonial";
import Manager from '../assets/Images/Imad.png'

const TestimonialsSection = () => {


    return (
        <section className="py-20">
            <div className="max-w-8xl mx-auto px-0 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Client Testimonials
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    Hear from organizations we've partnered with.
                </p>

                <AnimatedTestimonials autoplay={true} />
            </div>
        </section>
    );
};

export default TestimonialsSection;

