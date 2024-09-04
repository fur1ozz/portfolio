import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";

const LinkButton = ({ name, currentPath }) => {
    const path = `/${name}`;
    const isActive = currentPath === path;

    return (
        <Link
            to={path}
            className={`flex items-center px-3 py-[2px] ${isActive ? 'bg-low-200 underline decoration-white' : 'bg-low-100'} hover:bg-low-200 rounded justify-center mx-2 transition-all duration-100 ease-in`}
        >
            <span className="text-sm uppercase font-normal whitespace-nowrap text-white">{name}</span>
        </Link>
    );
};
const LinkButtonPhone = ({ name, currentPath, svgIcon}) => {
    const path = `/${name}`;
    const isActive = currentPath === path;

    return (
        <Link
            to={path}
            className={`flex ${isActive ? 'text-black dark:text-white bg-[#e8e8e8] dark:bg-[#2a2a2a]' : ''} mt-2 hover:bg-low-200 py-2 px-4 transition-all duration-100 ease-in w-full border-dashed border-b-[1px] border-black dark:border-[#646464]`}
        >
            {svgIcon}
            <span className="text-lg uppercase font-medium whitespace-nowrap ml-2">{name}</span>
        </Link>
    );
};

const Header = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="absolute w-full z-20">
            <nav className="p-6">
                <div className="flex justify-between items-center mx-auto">
                    <a href="/" className="flex items-center px-3 bg-primary-500 rounded justify-center">
                        <span className="text-lg uppercase font-extrabold whitespace-nowrap text-white">fur1ozz</span>
                    </a>
                    <button
                        onClick={handleMobileMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="sm:flex hidden">
                        <button
                            className="flex transition-all duration-100 ease-in text-primary-500 mx-2"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>
                        <LinkButton name="about" currentPath={location.pathname} />
                        <LinkButton name="projects" currentPath={location.pathname} />
                        <LinkButton name="contact" currentPath={location.pathname} />
                    </div>
                    <div className={`sm:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-[200px]"} w-[200px] h-screen bg-[#f0f0f0] dark:bg-[#1a1a1a] fixed top-0 right-0 transition-all duration-200 ease-in-out flex flex-col text-[#F7BE38]`}>
                        <button
                            onClick={handleMobileMenuToggle}
                            className="pt-4 py-2 px-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <LinkButtonPhone name="about" currentPath={location.pathname} svgIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        } />
                        <LinkButtonPhone name="projects" currentPath={location.pathname} svgIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        }/>
                        <LinkButtonPhone name="contact" currentPath={location.pathname} svgIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                            </svg>
                        }/>

                        <button
                            className="flex transition-all duration-100 ease-in pt-4 py-2 px-4"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
