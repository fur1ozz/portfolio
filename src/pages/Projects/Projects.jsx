import React, {useEffect, useRef, useState} from 'react';
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";
import '../../SliderStyles/Project.css';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const child = (name) => {
    return (
        <div className="w-full min-h-[60px] uppercase font-extrabold font-topper text-white p-3 flex text-2xl bg-black absolute bottom-[-100px] group-hover:bottom-0 left-0 transition-all duration-300 ease-in-out">
            {name}
        </div>
    );
}

const Projects = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const containerRef = useRef(null);

    const links = [
        { to: "cosmo-run", name: "Cosmo Run", bgClass: "bg-rocket", imageUrl: "/images/projects/rocket.webp" },
        { to: "memory-game", name: "Flip Meha", bgClass: "bg-memory", imageUrl: "/images/projects/memory.webp" },
        { to: "coffee-shop", name: "Coffee Time", bgClass: "bg-coffee", imageUrl: "/images/projects/coffee.webp" },
        { to: "tick-get", name: "TickGet", bgClass: "bg-tickets", imageUrl: "/images/projects/tickets.webp" },
        { to: "drogas-v2", name: "DrogasV2", bgClass: "bg-drogas", imageUrl: "/images/projects/drogas.webp" },
        { to: "gira-v2", name: "GiraV2", bgClass: "bg-gira", imageUrl: "/images/projects/gira.webp" },
        { to: "finance-budgeting", name: "Finance and Budgeting", bgClass: "bg-finance", imageUrl: "/images/projects/finance.webp" },
        { to: "", name: "Lifting", bgClass: "bg-lifting", imageUrl: "/images/projects/lifting.webp" },
        { isPlaceholder: true, imageUrl: "/images/projects/nextProjects2.webp" }
    ];

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = links.map((link) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = link.imageUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setTimeout(() => {
                   setImagesLoaded(true);
                }, 500)
            } catch (error) {
                console.error("Failed to load images", error);
                setImagesLoaded(true);
            }
        };

        loadImages();
    }, []);

    const updateArrows = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowLeftArrow(scrollLeft > 10);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const handleWheel = (e) => {
            if (containerRef.current) {
                if (e.deltaY !== 0) {
                    containerRef.current.scrollLeft += e.deltaY;
                }
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', updateArrows);
            containerRef.current.addEventListener('wheel', handleWheel);
            // Initial check
            updateArrows();
        }

        window.addEventListener('resize', updateArrows);

        return () => {
            window.removeEventListener('resize', updateArrows);
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', updateArrows);
                containerRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, [imagesLoaded]);

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 700 : 350; // Scroll roughly two items on desktop, one on mobile
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative">
            <Header />
            <AnimatePresence>
                {!imagesLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
                            />
                            <p className="text-white font-topper tracking-widest uppercase">Loading Projects</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={() => scroll('left')}
                className={`fixed left-4 top-[50vh] -translate-y-1/2 z-20 bg-black/40 text-accent hover:text-white hover:bg-accent p-3 rounded-full backdrop-blur-sm transition-all duration-200 shadow-[0_0_15px_rgba(255,47,67,0.3)] hover:shadow-[0_0_25px_rgba(255,47,67,0.6)] border border-primary-500/20 ${imagesLoaded && showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={() => scroll('right')}
                className={`fixed right-4 top-[50vh] -translate-y-1/2 z-20 bg-black/40 text-accent hover:text-white hover:bg-accent p-3 rounded-full backdrop-blur-sm transition-all duration-200 shadow-[0_0_15px_rgba(255,47,67,0.3)] hover:shadow-[0_0_25px_rgba(255,47,67,0.6)] border border-primary-500/20 ${imagesLoaded && showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <ChevronRight size={32} />
            </button>

            <div ref={containerRef} className="h-screen overflow-x-auto overflow-y-hidden bg-black flex no-scrollbar relative">
                <div className="flex h-full min-w-max">
                    {imagesLoaded && links.map((link, index) => {
                        if (link.isPlaceholder) {
                            return (
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    key={`placeholder-${index}`}
                                    className="border-4 border-black relative group filter grayscale cursor-not-allowed w-[300px] md:w-[350px] h-full flex-shrink-0 overflow-hidden"
                                >
                                    <div className="w-full h-full bg-cover bg-nextProjects2 bg-center"></div>
                                </motion.div>
                            )
                        }

                        return (
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={index}
                                className="h-full flex-shrink-0"
                            >
                                <Link
                                    to={link.to}
                                    className={`border-4 border-black relative group filter grayscale-[90%] hover:filter-none transition-all duration-300 ease-in-out cursor-pointer w-[300px] md:w-[350px] h-full block overflow-hidden link-container`}
                                >
                                    <div className={`w-full h-full bg-cover ${link.bgClass} bg-center group-hover:-translate-y-1 transition-all duration-500 ease-in-out`}></div>
                                    {child(link.name)}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Projects;
