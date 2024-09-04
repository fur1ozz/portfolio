import React, { useRef } from 'react';
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";
const About = () => {
    const secondDivRef = useRef(null);

    const scrollToSecondDiv = () => {
        if (secondDivRef.current) {
            secondDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Header />
            <div className="flex lg:min-h-screen bg-[#fff] dark:bg-pj-400 flex-col lg:flex-row">
                <div className="lg:w-1/2 flex sm:p-10 p-2 pt-10 flex-col justify-center">
                    <div className="flex flex-col sm:mx-5 lg:mt-8 mt-20 mx-5">
                        <h1 className="flex text-5xl font-bold text-pj-100 ">Hi, I`m Tomass. I am currently studying at  VTDT</h1>
                        <p className="text-pj-300 text-lg text-justify mt-14 indent-8">
                            My name is Tomass Vēveris, and I am currently studying programming. Our curriculum encompasses both front-end and back-end web development, enabling us to create comprehensive websites. Additionally, I have expanded my skills by developing a simple game in C#.
                        </p>
                        <button onClick={scrollToSecondDiv} type="button" className="w-[100px] mt-10 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center justify-center">
                            Skills ↓
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:p-10 p-2 h-screen justify-center items-center hidden lg:flex">
                    <img src="/images/rally-hats.jpeg" alt="" className="h-[80%] rounded-3xl shadow-lg shadow-gray-900 dark:shadow-low-100 object-cover"/>
                </div>
            </div>
            <div className="flex flex-col sm:p-10 p-2 bg-[#fff] dark:bg-pj-400 mb-10" ref={secondDivRef}>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col sm:mx-20 mx-5">
                        <h1 className="text-4xl font-semibold text-pj-100">My skills</h1>
                        <p className="text-pj-300 text-lg my-8 w-2/3 md:mx-5">These are the programming languages and libraries with which I have experience, along with my proficiency level indicated as a percentage</p>
                    </div>
                    <Skills />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
