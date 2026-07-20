import React from 'react';
import { MonitorSmartphone, Database, Layout, Terminal } from "lucide-react";

const SkillCard = ({ title, skills, icon: Icon, colorClass }) => (
    <div className={`p-8 rounded-[32px] flex flex-col justify-between min-h-[240px] ${colorClass} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
        <div className="bg-black/10 dark:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-sm backdrop-blur-sm">
            <Icon size={28} className="opacity-80" />
        </div>
        <div>
            <h3 className="text-2xl font-extrabold uppercase mb-2 tracking-tight leading-tight">{title}</h3>
            <p className="font-medium text-black/70 dark:text-white/80 text-sm uppercase tracking-wider">{skills.join(', ')}</p>
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <SkillCard 
                title="Frontend & UI" 
                skills={['React', 'Next.js', 'Tailwind', 'JavaScript', 'TypeScript']} 
                icon={Layout} 
                colorClass="bg-[#C4FF48] text-black" // Lime green from reference
            />
            <SkillCard 
                title="Backend & DB" 
                skills={['PHP', 'Laravel', 'SQL', 'REST API']} 
                icon={Database} 
                colorClass="bg-[#FF885B] text-black" // Orange from reference
            />
            <SkillCard 
                title="Tools" 
                skills={['Git', 'Figma', 'NPM', 'Vite']} 
                icon={Terminal} 
                colorClass="bg-gray-100 dark:bg-[#252525] text-gray-900 dark:text-white border border-gray-200 dark:border-white/5" // Neutral
            />
            <SkillCard 
                title="Other Exp" 
                skills={['C#', 'Game Dev', 'Responsive Design']} 
                icon={MonitorSmartphone} 
                colorClass="bg-[#F7BE38] text-black" // Primary yellow
            />
        </div>
    );
};

export default Skills;
