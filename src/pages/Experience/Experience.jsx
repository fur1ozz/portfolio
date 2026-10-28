import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { BriefcaseIcon, CalendarIcon, CheckIcon, TrendingUpIcon } from "lucide-react";
import FadeIn from "../../components/FadeIn";

const experiences = [
    {
        title: "Software Engineer",
        company: "DeskTime",
        start: "2025-06",
        end: null,
        summary: "Full-stack developer and secondary frontend lead, shipping enterprise-level features end to end.",
        highlights: [
            "Primary developer on customer support rotations",
            "Debug and resolve critical, user-reported issues",
            "Maintain databases, the Admin panel and public pages",
        ],
        tech: ['React', 'TypeScript', 'SCSS', 'PHP', 'Laravel', 'Inertia.js', 'MySQL'],
        milestones: [
            { title: "Coupon Flow rework shipped", date: "Nov 2025" },
            { title: "IP location detection shipped", date: "Mar 2026" },
            { title: "DeskTime Chrome extension built", note: "WXT · for internal use", date: "Aug 2026" },
            { title: "Updated reports", date: "Shipping soon", ongoing: true },
            { title: "Application facelift", date: "In progress", ongoing: true },
            { title: "New pricing plan", date: "In progress", ongoing: true },
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "DeskTime",
        start: "2024-11",
        end: "2025-05",
        summary: "Learned the DeskTime ecosystem through an internal project, then moved onto the main platform.",
        highlights: [
            "UI bug fixes, growing into larger tasks",
            "Helped senior devs investigate user-reported bugs",
        ],
        tech: ['React', 'JavaScript', 'Blade', 'Bootstrap', 'PHP', 'Laravel'],
        milestones: [
            { title: "Joined DeskTime", date: "Nov 2024" },
            { title: "Moved from side project to the core platform", note: "Laravel, React, MySQL", date: "Jan 2025" },
        ],
    },
];

const toDate = (ym) => {
    const [year, month] = ym.split('-').map(Number);
    return new Date(year, month - 1);
};

const formatMonth = (ym) => toDate(ym).toLocaleString('en-US', { month: 'short', year: 'numeric' });

const formatDuration = (start, end) => {
    const from = toDate(start);
    const to = end ? toDate(end) : new Date();
    const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
    const years = Math.floor(months / 12);
    const rest = months % 12;

    return [
        years > 0 && `${years} yr${years > 1 ? 's' : ''}`,
        rest > 0 && `${rest} mo${rest > 1 ? 's' : ''}`,
    ].filter(Boolean).join(' ');
};

const MilestoneIcon = ({ ongoing }) => {
    if (ongoing) {
        return (
            <span className="relative flex w-5 h-5 items-center justify-center flex-shrink-0">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-40 animate-ping"></span>
                <span className="relative w-2.5 h-2.5 rounded-full bg-accent"></span>
            </span>
        );
    }

    return (
        <span className="flex w-5 h-5 items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
            <CheckIcon size={12} strokeWidth={3} />
        </span>
    );
};

const Milestones = ({ milestones, alignRight }) => (
    <div className={`mt-6 md:mt-0 ${alignRight ? 'md:text-right' : ''}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-theme-muted mb-4">Milestones</p>

        <div className="space-y-4">
            {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={0.1 * index} direction={alignRight ? 'right' : 'left'}>
                    <div className={`flex items-start gap-3 ${alignRight ? 'md:flex-row-reverse' : ''}`}>
                        <MilestoneIcon ongoing={milestone.ongoing} />
                        <div>
                            <p className="text-sm font-semibold text-theme-text leading-5">{milestone.title}</p>
                            <p className="text-xs text-theme-muted mt-0.5">
                                {milestone.note ? `${milestone.note} · ` : ''}
                                <span className={milestone.ongoing ? 'text-accent font-semibold' : ''}>{milestone.date}</span>
                            </p>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    </div>
);

const ExperienceCard = ({ title, company, start, end, summary, highlights, tech, milestones, reverse }) => {
    const isCurrent = !end;

    return (
        <div className="relative pl-8 md:pl-0 mb-16">
            <div className={`md:flex items-center justify-between w-full ${reverse ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-accent border-4 border-theme-bg -translate-x-1/2 flex items-center justify-center z-10 top-0 shadow-lg shadow-accent/30">
                    <BriefcaseIcon size={14} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="md:w-5/12 w-full">
                    <div className="bg-theme-card p-6 md:p-8 rounded-[24px] border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300">

                        <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
                                <CalendarIcon size={14} />
                                <span>{formatMonth(start)} – {isCurrent ? 'Present' : formatMonth(end)}</span>
                            </div>

                            {isCurrent && (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider">
                                    <span className="relative flex w-1.5 h-1.5">
                                        <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping"></span>
                                        <span className="relative w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    </span>
                                    Current
                                </span>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-theme-text">{title}</h3>
                        <p className="text-sm font-medium text-theme-muted mt-1 mb-5">
                            {company} · {formatDuration(start, end)}
                        </p>

                        <p className="text-theme-text opacity-80 text-sm mb-5 leading-relaxed">
                            {summary}
                        </p>

                        <div className="mb-6 space-y-2">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                                    <p className="text-sm text-theme-text opacity-80">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                            {tech.map((t, index) => (
                                <span key={index} className="inline-flex items-center px-2 py-1 bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-lg text-[11px] font-bold uppercase tracking-wider text-theme-muted hover:text-theme-text hover:border-accent/40 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Milestones: opposite side on desktop, below the card on mobile */}
                <div className="md:w-5/12 w-full">
                    <Milestones milestones={milestones} alignRight={reverse} />
                </div>
            </div>
        </div>
    );
};

const PromotionMarker = ({ label, date }) => (
    <FadeIn delay={0.1} direction="none" className="relative h-10 mb-16">
        <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-1/2 top-0 z-10 inline-flex items-center gap-2 pr-4 rounded-full bg-theme-card border border-gray-200 dark:border-white/10 shadow-lg shadow-black/5 whitespace-nowrap">
            <span className="flex w-8 h-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <TrendingUpIcon size={14} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-text">{label}</span>
            <span className="text-xs text-theme-muted">{date}</span>
        </div>
    </FadeIn>
);

const Experience = () => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });
    const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    return (
        <div className="bg-theme-bg min-h-screen font-topper text-theme-text transition-colors duration-300">
            <Header />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                <FadeIn delay={0.1} direction="up" className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6">
                        Work <span className="text-theme-muted opacity-40">Experience</span>
                    </h1>
                    <p className="text-theme-muted text-lg max-w-2xl mx-auto">
                        My professional journey building robust, user-centric software solutions at scale.
                    </p>
                </FadeIn>

                <div ref={timelineRef} className="relative mt-20">
                    {/* Timeline line, fills with accent as you scroll */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -translate-x-1/2"></div>
                    <motion.div
                        style={{ scaleY: lineProgress }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2 origin-top"
                    ></motion.div>

                    {experiences.map((experience, index) => (
                        <React.Fragment key={experience.title}>
                            {index > 0 && (
                                <PromotionMarker label="Hired full-time" date={formatMonth(experiences[index - 1].start)} />
                            )}
                            <FadeIn delay={0.2} direction="up">
                                <ExperienceCard {...experience} reverse={index % 2 === 1} />
                            </FadeIn>
                        </React.Fragment>
                    ))}

                    {/* Visual anchor point at the bottom */}
                    <div className="relative h-4">
                        <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-white/10 -translate-x-1/2"></div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Experience;
