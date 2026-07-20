import React from 'react';
import { MonitorSmartphone, Database, Layout, Terminal, Code2, Plug } from "lucide-react";

const SkillCard = ({ title, skills, icon: Icon, colorClass, textClass }) => (
    <div className={`p-8 rounded-[32px] flex flex-col justify-between min-h-[220px] ${colorClass} ${textClass} transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]`}>
        <div className="bg-black/10 dark:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-sm backdrop-blur-sm">
            <Icon size={28} className="opacity-80" />
        </div>
        <div>
            <h3 className="text-2xl font-extrabold uppercase mb-2 tracking-tight leading-tight">{title}</h3>
            <p className="font-medium opacity-80 text-sm uppercase tracking-wider leading-relaxed">{skills.join(', ')}</p>
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <SkillCard 
                title="Frontend" 
                skills={['React', 'Next.js', 'Tailwind', 'TypeScript', 'Redux']} 
                icon={Layout} 
                colorClass="bg-[#C4FF48]" 
                textClass="text-black"
            />
            <SkillCard 
                title="Backend" 
                skills={['PHP', 'Laravel', 'MySQL', 'REST APIs']} 
                icon={Database} 
                colorClass="bg-[#FF885B]" 
                textClass="text-black"
            />
            <SkillCard 
                title="Ecosystem" 
                skills={['Inertia.js', 'Filament', 'Alpine.js', 'Blade']} 
                icon={Code2} 
                colorClass="bg-[#F7BE38]" 
                textClass="text-black"
            />
            <SkillCard 
                title="Integrations" 
                skills={['Stripe', 'Postmark', 'Webhooks']} 
                icon={Plug} 
                colorClass="bg-theme-text" 
                textClass="text-theme-bg"
            />
            <SkillCard 
                title="DevOps" 
                skills={['Docker', 'GitLab', 'GitHub', 'Vite']} 
                icon={Terminal} 
                colorClass="bg-gray-100 dark:bg-[#252525] border border-gray-200 dark:border-white/5" 
                textClass="text-gray-900 dark:text-white"
            />
            <SkillCard 
                title="Other Exp" 
                skills={['System Arch', 'C#', 'Game Dev', 'Figma']} 
                icon={MonitorSmartphone} 
                colorClass="bg-accent" 
                textClass="text-white"
            />
        </div>
    );
};

export default Skills;
