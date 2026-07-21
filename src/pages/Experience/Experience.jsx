import React from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Briefcase, Calendar } from "lucide-react";
import FadeIn from "../../components/FadeIn";

const ExperienceCard = ({ title, company, period, description, highlights, tech, isInternship }) => {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Timeline Line & Dot (Desktop) */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -translate-x-1/2"></div>
            
            <div className={`md:flex items-center justify-between w-full ${isInternship ? 'md:flex-row-reverse' : ''} mb-16`}>
                
                {/* Timeline Dot (Mobile & Desktop) */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-accent border-4 border-theme-bg -translate-x-1/2 flex items-center justify-center z-10 top-0 shadow-lg shadow-accent/30">
                    <Briefcase size={14} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="md:w-5/12 w-full">
                    <div className="bg-theme-card p-8 rounded-[24px] border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300">
                        
                        <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
                            <Calendar size={16} />
                            <span>{period}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-theme-text mb-1">{title}</h3>
                        <h4 className="text-lg font-medium text-theme-muted mb-6">{company}</h4>
                        
                        <p className="text-theme-text opacity-80 text-sm mb-6 leading-relaxed">
                            {description}
                        </p>

                        <div className="mb-6 space-y-2">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                                    <p className="text-sm text-theme-text opacity-80">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                            {tech.map((t, index) => (
                                <span key={index} className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-full text-xs font-semibold text-theme-text shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Empty div for spacing on desktop */}
                <div className="hidden md:block md:w-5/12"></div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="bg-theme-bg min-h-screen font-topper text-theme-text transition-colors duration-300">
            <Header />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
                
                <FadeIn delay={0.1} direction="up" className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6">
                        Work <span className="text-theme-muted opacity-40">Experience</span>
                    </h1>
                    <p className="text-theme-muted text-lg max-w-2xl mx-auto">
                        My professional journey building robust, user-centric software solutions at scale.
                    </p>
                </FadeIn>

                <div className="relative mt-20">
                    <FadeIn delay={0.2} direction="up">
                        <ExperienceCard 
                            title="Software Engineer"
                            company="DeskTime"
                            period="June 2025 - Present"
                            description="Currently working as a full-stack developer and the secondary lead frontend developer. I am responsible for architecting and deploying massive enterprise-level features while maintaining full-stack operations."
                            highlights={[
                                "Architected and developed a complex Coupon Flow rework for the billing system.",
                                "Engineered a brand-new IP location detection feature to enhance platform security and tracking accuracy.",
                                "Serve as the primary developer during customer support rotations, resolving critical issues, debugging systems, and directly addressing user feedback.",
                                "Maintain databases and regularly orchestrate Admin panel and public page upgrades."
                            ]}
                            tech={['React', 'TypeScript', 'SCSS', 'PHP', 'Laravel', 'Inertia.js', 'MySQL']}
                            isInternship={false}
                        />
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <ExperienceCard 
                            title="Software Engineering Intern"
                            company="DeskTime"
                            period="November 2024 - May 2025"
                            description="Started my journey by developing an internal side project to learn the DeskTime ecosystem, eventually transitioning to real-world tasks on the main platform."
                            highlights={[
                                "Built an internal side project to master the primary technology stack (Laravel, React, MySQL).",
                                "Transitioned to the core application, handling UI bug fixes and progressively taking on larger development tasks.",
                                "Assisted senior developers with investigating and resolving user-reported bugs."
                            ]}
                            tech={['React', 'JavaScript', 'Blade', 'Bootstrap', 'PHP', 'Laravel']}
                            isInternship={true}
                        />
                    </FadeIn>
                </div>
                
                {/* Visual anchor point at the bottom */}
                <FadeIn delay={0.2} direction="none" className="hidden md:flex justify-center -mt-8">
                    <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-white/10"></div>
                </FadeIn>

            </div>
            
            <Footer />
        </div>
    );
};

export default Experience;
