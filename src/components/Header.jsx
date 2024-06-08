import React from 'react';
import {Link, useLocation} from "react-router-dom";

const linkButton = (name, locationName) => {
    const path = `/${name}`;

    return (
        <Link to={path} className={`flex items-center px-3 py-[2px] ${locationName === '/'+name ? 'bg-low-200 underline decoration-white' : 'bg-low-100'} hover:bg-low-200 rounded justify-center mx-2 transition-all duration-100 ease-in`}>
            <span className="text-sm uppercase font-normal whitespace-nowrap text-white">{name}</span>
        </Link>
    );
}
const Header = () => {
    const location = useLocation();

    return (
        <div className="absolute w-full z-10">
            <nav className="p-6">
                <div className="flex justify-between items-center mx-auto">
                    <a className="flex items-center px-3 bg-primary-500 rounded justify-center">
                        <span className="text-lg uppercase font-extrabold whitespace-nowrap text-white">fur1ozz</span>
                    </a>
                    <div className="flex">
                        {linkButton("about", location.pathname)}
                        {linkButton("projects", location.pathname)}
                        {linkButton("contact", location.pathname)}
                        {linkButton("about", location.pathname)}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;