import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, TriangleAlert, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectSkillCard = ({ title, icon: Icon, colorClass, textClass }) => (
    <div className={`px-4 py-2 rounded-2xl flex items-center gap-3 ${colorClass} ${textClass} shadow-sm`}>
        <div className="bg-black/10 dark:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
            {Icon && <Icon size={16} />}
        </div>
        <h3 className="text-sm font-bold uppercase tracking-tight">{title}</h3>
    </div>
);

const ProjectLayout = ({ 
    title, 
    concept, 
    notes, 
    stack = [], 
    team = [], 
    links = {}, 
    media = {} 
}) => {
    const hasMeta = team.length > 0 || links.liveDemo || links.sourceCode;

    return (
        <div className="bg-theme-bg min-h-screen font-topper text-theme-text transition-colors duration-300">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <Link to="/projects" className="inline-flex items-center gap-2 text-theme-muted hover:text-accent font-bold uppercase tracking-wider mb-8 transition-colors self-start">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Scrollable Content */}
                    <div className="lg:w-[55%] flex flex-col gap-12 relative z-0 pt-0 lg:pt-8">
                        
                        <FadeIn delay={0.1} direction="up">
                            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase leading-[0.9] tracking-tight">
                                {title.split(' ')[0]} <br />
                                <span className="text-theme-muted opacity-40">{title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                        </FadeIn>

                        {/* Meta Block (Inverted Theme) */}
                        {hasMeta && (
                            <FadeIn delay={0.15} direction="up" className="bg-theme-text text-theme-bg rounded-[24px] p-6 shadow-xl flex flex-col sm:flex-row gap-8 justify-between transition-colors duration-300">
                                
                                {team.length > 0 && (
                                    <div className="flex-1">
                                        <h3 className="flex items-center gap-2 font-bold uppercase mb-3 opacity-70 tracking-widest text-xs">
                                            <Users size={14} /> Team
                                        </h3>
                                        <ul className="flex flex-col gap-1.5 text-sm font-medium">
                                            {team.map((member, idx) => (
                                                <li key={idx}>
                                                    {member.link ? (
                                                        <a href={member.link} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                                                            {member.name}
                                                        </a>
                                                    ) : (
                                                        <span>{member.name}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {(links.liveDemo || links.sourceCode) && (
                                    <div className="flex flex-col gap-3 justify-center sm:min-w-[200px]">
                                        {links.liveDemo && (
                                            <a href={links.liveDemo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-accent text-white text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-md">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        )}
                                        {links.sourceCode && (
                                            <a href={links.sourceCode} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border-2 border-theme-bg/20 text-sm font-bold uppercase tracking-wider hover:bg-theme-bg/10 transition-colors">
                                                <FaGithub size={16} /> Source Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </FadeIn>
                        )}

                        {/* Tech Stack */}
                        {stack.length > 0 && (
                            <FadeIn delay={0.2} direction="up">
                                <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">
                                    Tech <span className="text-theme-muted opacity-40">Stack</span>
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {stack.map((item, index) => (
                                        <ProjectSkillCard 
                                            key={index}
                                            title={item.name} 
                                            icon={item.icon} 
                                            colorClass={item.colorClass} 
                                            textClass={item.textClass} 
                                        />
                                    ))}
                                </div>
                            </FadeIn>
                        )}

                        {/* Concept */}
                        <FadeIn delay={0.3} direction="up">
                            <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-6">
                                Project <span className="text-theme-muted opacity-40">Concept</span>
                            </h2>
                            <div className="text-theme-muted text-lg leading-relaxed flex flex-col gap-6">
                                {concept}
                            </div>
                            
                            {notes && (
                                <div className="mt-8 p-6 bg-theme-card rounded-2xl border-l-4 border-accent">
                                    <p className="text-theme-muted text-lg leading-relaxed">
                                        <strong className="text-theme-text">Notes:</strong> {notes}
                                    </p>
                                </div>
                            )}
                        </FadeIn>

                    </div>

                    {/* Right Column (Media Only - Sticky) */}
                    <div className="lg:w-[45%] flex flex-col relative">
                        <div className="lg:sticky lg:top-32 w-full">
                            <FadeIn delay={0.2} direction="up" className="rounded-[32px] overflow-hidden shadow-2xl bg-black border-4 border-theme-card aspect-[9/16] sm:aspect-auto sm:h-[600px] flex justify-center items-center relative w-full">
                                {media.type === 'video' ? (
                                    <video src={media.src} autoPlay loop muted className="w-full h-full object-contain" />
                                ) : media.type === 'youtube' ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={media.src}
                                        title={title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-theme-muted">
                                        <TriangleAlert size={48} className="opacity-50" />
                                        <p className="font-bold uppercase tracking-widest opacity-50 text-center px-4">Media Not Available</p>
                                    </div>
                                )}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ProjectLayout;
