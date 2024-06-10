import React from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";

const child = (name) => {
    return (
        <div className="w-full min-h-[60px] uppercase font-extrabold font-topper text-white p-3 flex text-2xl bg-black absolute bottom-[-100px] group-hover:bottom-0 left-0 transition-all duration-300 ease-in-out">
            {name}
        </div>
    );
}

const Projects = () => {
    return (
        <div>
            <Header />
            <div className="h-screen overflow-x-auto overflow-y-hidden bg-black">
                <div className="flex h-full">
                    <Link to="cosmo-run" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-rocket bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('Cosmo Run')}
                    </Link>
                    <Link to="memory-game" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-memory bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('Flip Meha')}
                    </Link>
                    <Link to="coffee-shop" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-coffee bg-center group-hover:-translate-y-1 transition-all duration-5s00 ease-in-out"></div>
                        {child('Coffee Time')}
                    </Link>
                    <Link to="" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-tickets bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('TickGet')}
                    </Link>
                    <Link to="" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-drogas bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('DrogasV2')}
                    </Link>
                    <Link to="" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-gira bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('GiraV2')}
                    </Link>
                    <Link to="" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-finance bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('Finance and Budgeting')}
                    </Link>
                    <Link to="" className="border-4 border-black relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-lifting bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out"></div>
                        {child('Lifting')}
                    </Link>
                    <div className="border-4 border-black relative group filter grayscale cursor-not-allowed w-[300px] h-full flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-nextProjects2 bg-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
