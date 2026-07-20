import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Folder, Briefcase, Mail, Moon, Sun, Star } from "lucide-react";
import { useDarkMode } from "../utils/HeaderUtils";

const NavItem = ({ to, icon: Icon, label, currentPath, onClick }) => {
    // If it's a hash link (#features-section), it's active if the current hash matches OR if we clicked it
    const isActive = to.startsWith('#') 
        ? window.location.hash === to
        : currentPath === to;

    const Element = to.startsWith('#') ? 'button' : Link;
    
    return (
        <div className="group relative flex items-center justify-center">
            <Element
                to={to.startsWith('#') ? undefined : to}
                onClick={onClick}
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                    isActive
                        ? 'bg-accent text-white shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </Element>
            
            {/* Tooltip */}
            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                <div className="bg-[#1a1a1a] text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg border border-white/10">
                    {label}
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToFeatures = () => {
        if (location.pathname !== '/about') {
            navigate('/about#features-section');
        }
        
        // Wait for potential navigation, then scroll
        setTimeout(() => {
            const element = document.getElementById('features-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Manually update URL hash without causing a jump
                window.history.pushState(null, '', '#features-section');
            }
        }, 100);
    };

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60]">
            <nav className="bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 flex items-center gap-1 shadow-2xl">
                <NavItem to="/about" icon={Home} label="Home" currentPath={location.pathname} />
                <NavItem to="#features-section" icon={Star} label="DeskTime Features" currentPath={location.pathname} onClick={scrollToFeatures} />
                <NavItem to="/projects" icon={Folder} label="Personal Projects" currentPath={location.pathname} />
                <NavItem to="/experience" icon={Briefcase} label="Experience" currentPath={location.pathname} />
                
                <div className="w-[1px] h-8 bg-white/10 mx-1"></div>
                
                <button
                    onClick={toggleDarkMode}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                    title="Toggle Dark Mode"
                >
                    {isDarkMode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>
        </div>
    );
};

export default Header;
