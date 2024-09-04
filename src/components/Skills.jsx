import React, { useEffect, useRef, useState } from 'react';
import "../SliderStyles/Skills.css";

const Item = ({ name, proc, animate }) => {
    return (
        <div className="md:mx-5">
            <div className="flex justify-start text-xl relative">
                <span className="text-pj-100">{name}</span>
                <span className="absolute text-pj-100" style={{ marginLeft: `${proc-5}%` }}>{proc}%</span>
            </div>
            <div className="my-2 rounded-[10px] h-[20px] w-full bg-low-200 dark:bg-[#2a2a2a] overflow-hidden">
                <div
                    className={`bg-gradient-to-r from-primary-500 to-[#F7BE38] h-full rounded-[10px] ${animate ? 'animate-slide-from-left-skill' : ''}`}
                    style={{ width: `${proc}%` }}
                ></div>
            </div>
        </div>
    );
}

const Skills = () => {
    const [animate, setAnimate] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.unobserve(skillsRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className="sm:mx-20 mx-5">
            <div>
                <div className="text-2xl text-pj-100 font-semibold mb-4 mt-10">Languages</div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <Item name="HTML" proc={99} animate={animate} />
                    <Item name="CSS" proc={99} animate={animate} />
                    <Item name="Javascript" proc={85} animate={animate} />
                    <Item name="PHP" proc={85} animate={animate} />
                    <Item name="Sql" proc={90} animate={animate} />
                    <Item name="C#" proc={35} animate={animate} />
                </div>
            </div>
            <div>
                <div className="text-2xl text-pj-100 font-semibold mb-4 mt-10">Frameworks, Libraries and Supersets</div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <Item name="React" proc={90} animate={animate} />
                    <Item name="Tailwind" proc={90} animate={animate} />
                    <Item name="Next.js" proc={45} animate={animate} />
                    <Item name="Laravel" proc={75} animate={animate} />
                    <Item name="Typescript" proc={65} animate={animate} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
