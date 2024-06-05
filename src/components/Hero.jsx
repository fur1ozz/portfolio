import React, { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const firstImage = document.getElementById('first-image');
            const thirdImage = document.getElementById('third-image');
            const scrollY = window.scrollY;
            const firstContainerHeight = window.innerHeight * 3; // Adjust this value according to the container's height

            // Calculate translateY for the first and third images
            const translateY = Math.min(scrollY, firstContainerHeight - window.innerHeight);

            // Apply translateY to the first and third images
            firstImage.style.transform = `translateY(${translateY}px)`;
            thirdImage.style.transform = `translateY(${translateY}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="bg-black h-[300vh] overflow-hidden">
                <div className="w-full relative h-screen">
                    <img id="first-image" src="/images/hero/audi_background.jpeg" alt="" className="absolute w-full h-auto top-0 left-0 z-[1]"/>
                    <img id="second-image" src="/images/hero/audi_object.png" alt="" className="fixed w-full h-auto top-[200px] left-[300px] z-[2]"/>
                    <img id="third-image" src="/images/hero/audi_bridge_trees.png" alt="" className="absolute w-full h-auto top-0 left-0 z-[3]"/>
                </div>
            </div>
            <div className="bg-amber-600 h-[100vh]">

            </div>
        </div>
    );
};

export default Hero;
