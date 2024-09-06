import React from 'react';
import Header from "../Header";
import videoCoffee from "../../assets/coffeeShop.mp4"
import useAnimateOnMount from "../../utils/UseAnimateOnMount";
const CoffeeShop = () => {
    const animate = useAnimateOnMount();

    return (
        <>
            <Header />
            <div className="min-h-screen overflow-hidden bg-pj-400 flex flex-wrap flex-col lg:flex-row">
                <div className="lg:w-1/2 flex sm:p-10 pt-10 p-2 flex-col justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className={`flex text-5xl font-bold text-pj-100 mt-10 ${animate ? 'animate-slide-from-left' : ''}`}>Coffee Time</h1>
                        <p className={`text-pj-300 text-lg text-justify mx-5 mt-14  ${animate ? 'animate-slide-from-left' : ''}`}>
                            <span className="text-pj-200 font-semibold capitalize">Project Concept: </span>
                            Explore our coffee shop advertisement crafted with pure HTML and CSS. Featuring multiple SVG vectors and a fully responsive design, this project beautifully showcases our offerings on any device. Discover the perfect brew with elegance and simplicity.                        </p>
                        <div className={`flex flex-col mt-16 ${animate ? 'animate-slide-from-left' : ''}`}>
                            <h2 className="flex text-4xl text-pj-200 font-semibold justify-center">Stack</h2>
                            <div className="flex mt-2">
                                <svg viewBox="0 0 128 128" className="sm:w-[100px] w-[60px] mx-2">
                                    <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                                </svg>
                                <svg viewBox="0 0 128 128" className="sm:w-[100px] w-[60px] mx-2">
                                    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-16 mx-5 ${animate ? 'animate-slide-from-left' : ''}`}>
                        <p className="text-pj-200 font-medium text-lg">Notes:</p>
                        <ul className="ml-6 mt-2 text-pj-300">
                            <p>This project focused primarily on design, allowing me to take a break from back-end development and refresh my pure HTML and CSS skills.</p>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 flex sm:p-10 p-2 lg:h-screen">
                    <div className={`w-full justify-center items-center flex h-full ${animate ? 'animate-slide-from-right' : ''}`}>
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/Vwxm_RqWjVs?autoplay=1&mute=1"
                            title="coffeeShop"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="aspect-video rounded-[10px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoffeeShop;