import React, {useEffect, useRef, useState} from 'react';
import Header from "./Header";
import { Link } from "react-router-dom";
import '../SliderStyles/Project.css';
import useAnimateOnMount from "../utils/UseAnimateOnMount";

const child = (name) => {
    return (
        <div className="w-full min-h-[60px] uppercase font-extrabold font-topper text-white p-3 flex text-2xl bg-black absolute bottom-[-100px] group-hover:bottom-0 left-0 transition-all duration-300 ease-in-out">
            {name}
        </div>
    );
}

const Projects = () => {
    const animate = useAnimateOnMount();
    const [showExplore, setShowExplore] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolling...');
            setFadeOut(true);
            setTimeout(() => setShowExplore(false), 200);
        };

        window.addEventListener('scroll', handleScroll, { once: true });

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll, { once: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleExploreClick = () => {
        setFadeOut(true);
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollWidth,
                behavior: 'smooth'
            });
        }
        setTimeout(() => setShowExplore(false), 200);
    };

    const links = [
        { to: "cosmo-run", name: "Cosmo Run", bgClass: "bg-rocket" },
        { to: "memory-game", name: "Flip Meha", bgClass: "bg-memory" },
        { to: "coffee-shop", name: "Coffee Time", bgClass: "bg-coffee" },
        { to: "tick-get", name: "TickGet", bgClass: "bg-tickets" },
        { to: "drogas-v2", name: "DrogasV2", bgClass: "bg-drogas" },
        { to: "gira-v2", name: "GiraV2", bgClass: "bg-gira" },
        { to: "finance-budgeting", name: "Finance and Budgeting", bgClass: "bg-finance" },
        { to: "", name: "Lifting", bgClass: "bg-lifting" },
    ];

    return (
        <div>
            <Header />
            <div ref={containerRef} className="h-screen overflow-x-auto overflow-y-hidden bg-black">
                <div className="absolute h-screen w-screen top-0 left-0">
                    {showExplore && (
                        <div className={`flex absolute z-10 bottom-0 right-0 mb-16 mr-20 transition-all duration-200 ${fadeOut ? 'opacity-0' : ''} `}>
                            <button
                                className="flex items-center px-3 py-0.5 hover:scale-110 opacity-90 hover:opacity-100 transition ease-in-out bg-[#D3EEDD] rounded-md justify-center text-lg text-[#7d9182] font-semibold shadow-[0_0_25px_0_rgba(0,0,0,0.3)] shadow-white"
                                onClick={handleExploreClick}
                            >
                                Explore ->
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex h-full">
                    {links.map((link, index) => (
                        <Link
                            to={link.to}
                            className={`border-4 border-black relative group filter grayscale-[90%] hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden link-container ${animate ? 'slide-down' : ''}`}
                            style={{ '--animation-delay': `${index * 0.05}s` }}
                            key={index}
                        >
                            <div className={`w-full h-full bg-cover ${link.bgClass} bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out`}></div>
                            {child(link.name)}
                        </Link>
                    ))}
                    <div className="border-4 border-black relative group filter grayscale cursor-not-allowed w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-nextProjects2 bg-center"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;
