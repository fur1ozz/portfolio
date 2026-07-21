import React from 'react';
import { Quote } from "lucide-react";
import FadeIn from "../../../components/FadeIn";

const Testimonials = () => {
    // Fake testimonial data - easy to replace later
    const testimonials = [
        {
            quote: "Tomass is an incredibly fast learner and a highly capable full-stack developer. He successfully architects large-scale features and consistently delivers robust code under pressure.",
            author: "Senior Developer",
            company: "DeskTime",
            role: "Colleague",
        }
    ];

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-6 w-full">
                {testimonials.map((testimonial, index) => (
                    <FadeIn key={index} delay={0.1 * (index + 1)} direction="up">
                        <div className="bg-theme-card p-8 md:p-10 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 relative overflow-hidden group">
                            
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110"></div>
                            
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                {/* Icon */}
                                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-full text-accent flex-shrink-0">
                                    <Quote size={32} className="fill-accent/20" />
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1">
                                    <p className="text-theme-text opacity-90 text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
                                        "{testimonial.quote}"
                                    </p>
                                    
                                    <div>
                                        <h4 className="text-xl font-bold text-theme-text mb-1 tracking-tight">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-theme-muted text-sm font-semibold uppercase tracking-wider">
                                            {testimonial.role} <span className="text-accent">•</span> {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;