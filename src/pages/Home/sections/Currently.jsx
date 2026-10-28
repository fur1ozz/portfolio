import React from 'react';
import { FlagIcon, ArrowUpRightIcon, CheckIcon, TrophyIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import FadeIn from "../../../components/FadeIn";

const YOUTUBE_URL = "https://www.youtube.com/@veeveriss";

const Widget = ({ label, children }) => (
    <div className="bg-theme-card p-6 rounded-[24px] border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 h-full flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300">
        <p className="text-xs font-semibold uppercase tracking-widest text-theme-muted">{label}</p>
        {children}
    </div>
);

const Equalizer = () => (
    <div className="flex items-end gap-[3px] h-4">
        {[0.6, 1, 0.4, 0.8].map((height, index) => (
            <motion.span
                key={index}
                className="w-[3px] rounded-full bg-accent"
                animate={{ height: ['30%', `${height * 100}%`, '50%', '100%', '30%'] }}
                transition={{ duration: 1.2 + index * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
        ))}
    </div>
);

const NowPlaying = () => (
    <Widget label="Now playing">
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent via-[#FF885B] to-[#F7BE38] flex-shrink-0 shadow-lg shadow-accent/20" />
            <div className="min-w-0 flex-1">
                <p className="text-xl font-extrabold tracking-tight truncate">Don Toliver</p>
                <p className="text-sm text-theme-muted">Every album, on repeat</p>
            </div>
            <Equalizer />
        </div>
        <div>
            <div className="h-1 rounded-full bg-theme-text/10 overflow-hidden">
                <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        </div>
        <p className="text-xs text-theme-muted mt-auto">
            <span className="font-semibold uppercase tracking-wider">Up next:</span> Travis Scott, Yeat &amp; more
        </p>
    </Widget>
);

const buildLog = [
    { part: 'Bilstein B6 suspension', done: true },
    { part: 'Ferodo brakes', done: true },
    { part: 'E46 steering rack', done: true },
    { part: 'ZF gearbox', done: true },
    { part: 'M54B30 swap', done: false },
    { part: 'Roll cage', done: false },
];

const BuildLog = () => (
    <Widget label="E36 320i build log">
        <ul className="flex flex-col gap-2.5">
            {buildLog.map(({ part, done }) => (
                <li key={part} className="flex items-center gap-3 text-sm">
                    {done ? (
                        <span className="flex w-5 h-5 items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
                            <CheckIcon size={12} strokeWidth={3} />
                        </span>
                    ) : (
                        <span className="w-5 h-5 rounded-full border-2 border-dashed border-theme-muted/40 flex-shrink-0" />
                    )}
                    <span className={done ? 'font-semibold' : 'text-theme-muted'}>{part}</span>
                    {!done && <span className="ml-auto text-[11px] font-bold uppercase tracking-wider text-theme-muted/60">Next</span>}
                </li>
            ))}
        </ul>
    </Widget>
);

const learning = [
    { skill: 'TypeScript', progress: 100, status: 'Certified' },
    { skill: 'SQL', progress: 35, status: 'Learning' },
    { skill: 'Python', progress: 0, status: 'Up next' },
    { skill: 'Docker', progress: 0, status: 'Up next' },
    { skill: 'Git', progress: 0, status: 'Up next' },
];

const Learning = () => (
    <Widget label="Learning">
        <div className="flex flex-col gap-3.5">
            {learning.map(({ skill, progress, status }, index) => (
                <div key={skill} className="grid grid-cols-[80px_1fr_72px] items-center gap-3 text-sm">
                    <span className="font-semibold">{skill}</span>
                    <div className="h-2 rounded-full bg-theme-text/10 overflow-hidden">
                        <motion.div
                            className="h-full rounded-full bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                        />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider text-right ${progress === 100 ? 'text-accent' : 'text-theme-muted'}`}>{status}</span>
                </div>
            ))}
        </div>
        <p className="text-xs text-theme-muted mt-auto">TypeScript certificate from Boot.dev</p>
    </Widget>
);

const podium = [
    { place: 2, height: 'h-12' },
    { place: 1, height: 'h-20' },
    { place: 3, height: 'h-8' },
];

const SimRacing = () => (
    <Widget label="Sim racing">
        <div className="flex items-end justify-center gap-2 flex-1 pt-4">
            {podium.map(({ place, height }) => (
                <div key={place} className="flex flex-col items-center gap-2 w-16">
                    {place === 1 && <TrophyIcon size={28} className="text-accent" />}
                    <motion.div
                        className={`w-full ${height} rounded-t-lg flex items-start justify-center pt-1.5 text-xs font-extrabold ${place === 1 ? 'bg-accent text-white' : 'bg-theme-text/10 text-theme-muted'}`}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        style={{ originY: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + place * 0.1, ease: 'easeOut' }}
                    >
                        P{place}
                    </motion.div>
                </div>
            ))}
        </div>
        <div>
            <p className="text-xl font-extrabold tracking-tight">Trophies from sim events</p>
            <p className="text-sm text-theme-muted">Online racing keeps me sharp between real rallies.</p>
        </div>
    </Widget>
);

const roadmap = [
    { title: 'Minirally 2WD Rookie', note: 'This season', status: 'now' },
    { title: 'Rally-spec E36', note: 'Offseason build', status: 'next' },
    { title: 'Big rally', note: 'The goal', status: 'next' },
];

const Currently = () => {
    return (
        <div className="w-full">

            {/* Rally */}
            <FadeIn delay={0.1} direction="up">
                <div className="p-8 rounded-[32px] flex flex-col gap-6 h-full bg-accent text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">Racing</p>
                            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">
                                Rally driver<br/>with big dreams
                            </h3>
                        </div>
                        <div className="bg-black/10 dark:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm flex-shrink-0">
                            <FlagIcon size={22} className="opacity-80" />
                        </div>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed max-w-xl">
                        First full season in the Minirally 2WD Rookie class. I'm spending the offseason building the E36 to full rally regulations so I can move up to the big rally.
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
                    <a
                        href={YOUTUBE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-accent text-sm font-bold transition-all hover:shadow-lg"
                    >
                        <FaYoutube size={18} />
                        Watch my onboards
                        <ArrowUpRightIcon size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[NowPlaying, BuildLog, Learning, SimRacing].map((Item, index) => (
                    <FadeIn key={index} delay={0.1 + index * 0.05} direction="up" className="h-full">
                        <Item />
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default Currently;
