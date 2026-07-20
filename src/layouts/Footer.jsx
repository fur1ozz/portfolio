import React from 'react';

const Footer = () => {
    return (
        <div className="max-w-[1024px] w-full border-t border-gray-200 dark:border-white/10 py-8 flex justify-center mx-auto transition-colors duration-300">
            <a href="https://fur1ozz-portfolio.vercel.app/about" target="_blank" rel="noreferrer" className="text-theme-muted hover:text-theme-text transition-colors">
                Made with ❤️ by
                <span className="font-semibold text-accent ml-1">fur1ozz</span>
            </a>
        </div>
    );
};

export default Footer;