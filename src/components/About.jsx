import React, { useRef } from 'react';
import Header from "./Header";

const Item = ({ name, proc}) => {

    return (
        <div className="md:mx-5">
            <div className="flex justify-start font-semibold text-xl relative">
                <span className="text-pj-100">{name}</span>
                <span className="absolute text-pj-100" style={{ marginLeft: `${proc-5}%` }}>{proc}%</span>
            </div>
            <div className="my-2 rounded-[10px] h-[20px] w-full bg-low-200 overflow-hidden">
                <div className="bg-primary-500 h-full rounded-[10px]" style={{ width: `${proc}%` }}></div>
            </div>
        </div>
    );
}
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
            <div className="flex min-h-screen bg-[#f4f3f3] dark:bg-pj-400 flex-col lg:flex-row">
                <div className="lg:w-1/2 flex sm:p-10 p-2 pt-10 flex-col justify-center">
                    <div className="flex flex-col sm:mx-5 mt-8">
                        <h1 className="flex text-5xl font-bold text-pj-100 ">Hi, I`m Tomass. I am currently studying at  VTDT</h1>
                        <p className="text-pj-300 text-lg text-justify mt-14">
                            My name is Tomass Vēveris, and I am currently studying programming. Our curriculum encompasses both front-end and back-end web development, enabling us to create comprehensive websites. Additionally, I have expanded my skills by developing a simple game in C#.
                        </p>
                        <button onClick={scrollToSecondDiv} type="button" className="w-[100px] mt-10 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center justify-center">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex sm:p-10 p-2 h-screen justify-center items-center">
                    <img src="/images/T-Heisenberg.jpeg" alt="" className="h-[80%] rounded-3xl shadow-lg shadow-gray-900 dark:shadow-low-100"/>
                </div>
            </div>
            <div className="flex min-h-screen flex-col sm:p-10 p-2" ref={secondDivRef}>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-4xl font-semibold text-pj-100">My skills</h1>
                        <p className="text-pj-300 text-lg my-8 md:mx-32 text-center">These are the programming languages and libraries with which I have experience, along with my proficiency level indicated as a percentage</p>
                    </div>
                    <div className="sm:mx-20 mx-5 mt-10">
                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <Item name="HTML" proc={99} />
                            <Item name="CSS" proc={99} />
                            <Item name="React" proc={90} />
                            <Item name="Tailwind" proc={90} />
                            <Item name="Next.js" proc={45} />
                            <Item name="PHP" proc={85} />
                            <Item name="Laravel" proc={75} />
                            <Item name="Typescript" proc={65} />
                            <Item name="Sql" proc={85} />
                            <Item name="C#" proc={35} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
