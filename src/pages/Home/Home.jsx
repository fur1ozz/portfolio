import React from 'react';
import Header from "../../layouts/Header";
import Skills from "./sections/Skills";
import WorkFeatures from "./sections/WorkFeatures";
import Contact from "../Contact/Contact";
import Footer from "../../layouts/Footer";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-theme-bg min-h-screen font-topper text-theme-text transition-colors duration-300">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Sticky Sidebar */}
                    <div className="lg:w-[30%] max-w-[380px] mx-auto lg:mx-0 relative z-10">
                        <div className="lg:sticky lg:top-8 bg-theme-text text-theme-bg rounded-[32px] p-8 shadow-xl flex flex-col items-center text-center transition-colors duration-300">
                            
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/5] mb-6 z-0">
                                
                                <div className="w-full h-full bg-theme-card rounded-[24px] overflow-hidden relative z-10">
                                    <img 
                                        src="/images/tomass-veveris.jpg"
                                        alt="Tomass Vēveris" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            <h2 className="text-3xl font-bold mb-2">Tomass Vēveris</h2>
                            
                            <p className="opacity-80 text-sm mb-8 px-2 font-medium mt-4">
                                A Software Engineer specializing in end-to-end web development, currently building impactful features at DeskTime.
                            </p>
                            
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/tomass-v%C4%93veris-74bb73363/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-theme-bg/20 flex items-center justify-center text-accent hover:bg-accent hover:border-accent hover:text-white transition-all shadow-sm">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href="https://instagram.com/veeveriss" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-theme-bg/20 flex items-center justify-center text-accent hover:bg-accent hover:border-accent hover:text-white transition-all shadow-sm">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="https://github.com/fur1ozz" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-theme-bg/20 flex items-center justify-center text-accent hover:bg-accent hover:border-accent hover:text-white transition-all shadow-sm">
                                    <FaGithub size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Scrollable Content */}
                    <div className="lg:flex-1 flex flex-col gap-24 relative z-0 pt-0 lg:pt-12">
                        
                        {/* Hero Info */}
                        <div className="mt-4 lg:mt-8">
                            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold uppercase leading-[0.9] tracking-tight">
                                Software <br />
                                <span className="text-theme-muted opacity-40">Engineer</span>
                            </h1>
                            <p className="text-theme-muted text-lg mt-8 max-w-xl leading-relaxed">
                                I bridge the gap between robust backend architecture and engaging frontend interfaces. Currently acting as a core developer at DeskTime, I've shipped major platform features like complex billing reworks and IP detection systems, while maintaining databases and leading UI initiatives.
                            </p>
                            
                            {/* Stats */}
                            <div className="flex gap-12 mt-12">
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">2</h3>
                                    <p className="text-xs text-theme-muted uppercase tracking-widest text-left font-semibold">Years of<br/>Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">10+</h3>
                                    <p className="text-xs text-theme-muted uppercase tracking-widest text-left font-semibold">Projects<br/>Completed</p>
                                </div>
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">2+</h3>
                                    <p className="text-xs text-theme-muted uppercase tracking-widest text-left font-semibold">Major Enterprise<br/>Features</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div id="skills-section" className="scroll-mt-32">
                            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.9] mb-12">
                                My <span className="text-theme-muted opacity-40">Skills</span>
                            </h2>
                            <Skills />
                        </div>
                        
                        {/* Work Features Section */}
                        <div id="features-section" className="scroll-mt-32">
                            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
                                Features I've built<br/>
                                <span className="text-theme-muted opacity-40">For DeskTime</span>
                            </h2>
                            <WorkFeatures />
                        </div>
                        
                        {/* Contact Section */}
                        <div id="contact-section" className="scroll-mt-32">
                            <Contact isEmbedded={true} />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Home;
