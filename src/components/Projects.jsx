import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { Link } from "react-router-dom";
import '../SliderStyles/Project.css';
import useAnimateOnMount from "../utils/UseAnimateOnMount"; // Assuming your CSS file is named Projects.css

const child = (name) => {
    return (
        <div className="w-full min-h-[60px] uppercase font-extrabold font-topper text-white p-3 flex text-2xl bg-black absolute bottom-[-100px] group-hover:bottom-0 left-0 transition-all duration-300 ease-in-out">
            {name}
        </div>
    );
}

const Projects = () => {
    const animate = useAnimateOnMount();

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
            <div className="h-screen overflow-x-auto overflow-y-hidden bg-black">
                <div className="flex h-full">
                    {links.map((link, index) => (
                        <Link
                            to={link.to}
                            className={`border-4 border-black relative group filter grayscale-[90%] hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden link-container ${animate ? 'slide-down visible' : 'invisible'}`}
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
