import React from 'react';
import { FlagIcon, WrenchIcon, TrophyIcon, GraduationCapIcon, HeadphonesIcon, CheckIcon } from "lucide-react";
import FadeIn from "../../../components/FadeIn";

const CardIcon = ({ icon: Icon }) => (
    <div className="bg-black/10 dark:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm flex-shrink-0">
        <Icon size={22} className="opacity-80" />
    </div>
);

const Label = ({ children }) => (
    <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">{children}</p>
);

const Chip = ({ children, variant = 'done' }) => (
    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${variant === 'done' ? 'bg-black/10 dark:bg-white/10' : 'border border-dashed border-current opacity-70'}`}>
        {children}
    </span>
);

const cardBase = "p-8 rounded-[32px] flex flex-col gap-6 h-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]";
const neutralCard = "bg-gray-100 dark:bg-[#252525] border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white";

const roadmap = [
    { title: 'Minirally 2WD', note: 'Rookie season', status: 'now' },
    { title: 'Offseason build', note: 'Rally-spec E36', status: 'next' },
    { title: 'Big rally', note: 'The goal', status: 'next' },
];

const Currently = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* Rally */}
            <FadeIn delay={0.1} direction="up" className="md:col-span-2 h-full">
                <div className={`${cardBase} bg-accent text-white`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Label>Racing</Label>
                            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">
                                Rally driver<br/>with big dreams
                            </h3>
                        </div>
                        <CardIcon icon={FlagIcon} />
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed max-w-xl">
                        First full season in the Minirally 2WD rookie class. The offseason goes into building the E36 to full rally regulations, then it's on to the big rally.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {roadmap.map((step) => (
                            <div key={step.title} className="flex flex-col gap-2">
                                <div className={`h-1.5 rounded-full ${step.status === 'now' ? 'bg-white' : 'bg-white/25'}`} />
                                <p className="text-sm font-bold leading-tight">{step.title}</p>
                                <p className="text-xs opacity-70 uppercase tracking-wider">{step.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* E36 build */}
            <FadeIn delay={0.15} direction="up" className="h-full">
                <div className={`${cardBase} bg-theme-text text-theme-bg`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Label>Building</Label>
                            <h3 className="text-2xl font-extrabold uppercase tracking-tight leading-tight">BMW E36 320i</h3>
                        </div>
                        <CardIcon icon={WrenchIcon} />
                    </div>
                    <div className="flex flex-col gap-4 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            <Chip>Bilstein B6</Chip>
                            <Chip>Ferodo brakes</Chip>
                            <Chip>E46 yellow-tag rack</Chip>
                            <Chip>ZF gearbox</Chip>
                            <Chip>Reinforced subframe</Chip>
                        </div>
                        <div>
                            <Label>Next up</Label>
                            <div className="flex flex-wrap gap-2">
                                <Chip variant="next">M54B30 swap</Chip>
                                <Chip variant="next">Roll cage</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Learning */}
            <FadeIn delay={0.2} direction="up" className="h-full">
                <div className={`${cardBase} bg-[#F7BE38] text-black`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Label>Learning</Label>
                            <h3 className="text-2xl font-extrabold uppercase tracking-tight leading-tight">Always leveling up</h3>
                        </div>
                        <CardIcon icon={GraduationCapIcon} />
                    </div>
                    <div className="flex flex-col gap-4 mt-auto">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <CheckIcon size={16} strokeWidth={3} />
                            TypeScript on Boot.dev, certified
                        </div>
                        <div>
                            <Label>Next up</Label>
                            <div className="flex flex-wrap gap-2">
                                <Chip variant="next">SQL</Chip>
                                <Chip variant="next">Python</Chip>
                                <Chip variant="next">Docker</Chip>
                                <Chip variant="next">Git</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Sim racing */}
            <FadeIn delay={0.25} direction="up" className="h-full">
                <div className={`${cardBase} ${neutralCard}`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Label>Sim racing</Label>
                            <h3 className="text-2xl font-extrabold uppercase tracking-tight leading-tight">Trophies &amp; onboards</h3>
                        </div>
                        <CardIcon icon={TrophyIcon} />
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed mt-auto">
                        I compete in sim racing events and have a few trophies from them. I also film onboards for YouTube to grow an audience and attract sponsors.
                    </p>
                </div>
            </FadeIn>

            {/* Music */}
            <FadeIn delay={0.3} direction="up" className="h-full">
                <div className={`${cardBase} bg-[#C4FF48] text-black`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <Label>On repeat</Label>
                            <h3 className="text-2xl font-extrabold uppercase tracking-tight leading-tight">Don Toliver</h3>
                        </div>
                        <CardIcon icon={HeadphonesIcon} />
                    </div>
                    <div className="mt-auto">
                        <Label>Also in rotation</Label>
                        <div className="flex flex-wrap gap-2">
                            <Chip>Travis Scott</Chip>
                            <Chip>Yeat</Chip>
                            <Chip variant="next">&amp; more</Chip>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default Currently;
