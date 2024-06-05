import React from 'react';

const child = (name) => {
    return (
        <div className="w-full h-[60px] uppercase font-extrabold font-topper text-white p-3 flex text-2xl bg-black absolute bottom-[-60px] group-hover:bottom-0 left-0 transition-all duration-300 ease-in-out">
            {name}
        </div>
    );
}
const Projects = () => {
    return (
        <div className="h-screen grid grid-cols-5 overflow-hidden">
            <div className="border-2 border-black  relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-cover bg-test1 bg-center hover:-translate-y-1 transition-all duration-300 ease-in-out"></div>
                {child('project 1')}
            </div>
            <div className="border-2 border-black  relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-cover bg-test2 bg-center hover:-translate-y-1 transition-all duration-300 ease-in-out"></div>
                {child('project 2')}
            </div>
            <div className="border-2 border-black  relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-cover bg-test3 bg-center hover:-translate-y-1 transition-all duration-300 ease-in-out"></div>
                {child('project 3')}
            </div>
            <div className="border-2 border-black  relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-cover bg-test4 bg-center hover:-translate-y-1 transition-all duration-300 ease-in-out"></div>
                {child('project 4')}
            </div>
            <div className="border-2 border-black  relative group filter grayscale hover:filter-none transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
                <div className="w-full h-full bg-cover bg-test5 bg-center hover:-translate-y-1 transition-all duration-300 ease-in-out"></div>
                {child('project 5')}
            </div>
        </div>
    );
};

export default Projects;