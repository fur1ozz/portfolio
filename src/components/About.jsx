import React from 'react';
import Header from "./Header";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#fff] dark:bg-pj-400 min-h-screen font-topper text-pj-100">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* Left Sticky Sidebar */}
                    <div className="lg:w-1/3 relative z-10">
                        <div className="lg:sticky lg:top-32 bg-white dark:bg-[#151515] rounded-[32px] p-8 shadow-xl border border-gray-100 dark:border-white/5 flex flex-col items-center text-center">
                            
                            <div className="w-full aspect-[4/5] bg-[#F7BE38]/20 rounded-2xl mb-6 overflow-hidden relative">
                                {/* Dotted lines overlay like in the reference image (optional aesthetic) */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-dashed border-[#F7BE38] rounded-tl-full opacity-50 z-0"></div>
                                <img 
                                    src="/images/rally-hats.jpeg" 
                                    alt="Tomass Vēveris" 
                                    className="w-full h-full object-cover relative z-10 scale-105 hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            
                            <h2 className="text-3xl font-bold mb-1">Tomass Vēveris</h2>
                            
                            <div className="w-10 h-10 bg-[#F7BE38] text-white rounded-full flex items-center justify-center my-4 shadow-lg shadow-[#F7BE38]/30">
                                <span className="text-xl leading-none">🔥</span>
                            </div>
                            
                            <p className="text-pj-300 text-sm mb-8 px-2 font-medium">
                                A Software Engineer specializing in end-to-end web development, currently building impactful features at DeskTime.
                            </p>
                            
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/tomass-v%C4%93veris-74bb73363/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#F7BE38] hover:bg-[#F7BE38] hover:text-white transition-colors">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href="https://instagram.com/veeveriss" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#F7BE38] hover:bg-[#F7BE38] hover:text-white transition-colors">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="https://github.com/fur1ozz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#F7BE38] hover:bg-[#F7BE38] hover:text-white transition-colors">
                                    <FaGithub size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Scrollable Content */}
                    <div className="lg:w-2/3 flex flex-col gap-24 relative z-0">
                        
                        {/* Hero Info */}
                        <div className="mt-4 lg:mt-8">
                            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold uppercase leading-[0.9] tracking-tight">
                                Software <br />
                                <span className="text-gray-300 dark:text-[#222222]">Engineer</span>
                            </h1>
                            <p className="text-pj-300 text-lg mt-8 max-w-xl leading-relaxed">
                                I bridge the gap between robust backend architecture and engaging frontend interfaces. Currently acting as a core developer at DeskTime, I've shipped major platform features like complex billing reworks and IP detection systems, while maintaining databases and leading UI initiatives.
                            </p>
                            
                            {/* Stats */}
                            <div className="flex gap-12 mt-12">
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">2</h3>
                                    <p className="text-xs text-pj-300 uppercase tracking-widest text-left font-semibold">Years of<br/>Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">+12</h3>
                                    <p className="text-xs text-pj-300 uppercase tracking-widest text-left font-semibold">Projects<br/>Completed</p>
                                </div>
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 tracking-tighter">+2</h3>
                                    <p className="text-xs text-pj-300 uppercase tracking-widest text-left font-semibold">Major Enterprise<br/>Features</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div id="skills-section">
                            <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">My Expertise</h2>
                            <Skills />
                        </div>
                        
                        {/* Contact Section */}
                        <div id="contact-section">
                            <Contact isEmbedded={true} />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default About;
