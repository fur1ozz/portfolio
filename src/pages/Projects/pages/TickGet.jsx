import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiLaravel } from "react-icons/si";

const TickGet = () => {
    return (
        <ProjectLayout
            title="TickGet"
            concept={
                <p>
                    Discover our Next.js-powered ticket sales website, where admins can create events and manage ticket types effortlessly. Users can filter and view only upcoming events, purchase tickets upon registration, and track their purchase history seamlessly. Experience efficient and user-friendly ticketing for all your event needs.
                </p>
            }
            notes="This was my first project created with Next.js. The project includes several features and functionalities. While it has some drawbacks, overall, it is a great initial project with Next.js."
            stack={[
                { name: "Next.js", icon: SiNextdotjs, colorClass: "bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20", textClass: "text-black dark:text-white" },
                { name: "Tailwind", icon: SiTailwindcss, colorClass: "bg-[#38BDF8]/20 border border-[#38BDF8]/30", textClass: "text-[#1c8ec2] dark:text-[#38BDF8]" },
                { name: "TypeScript", icon: SiTypescript, colorClass: "bg-[#3178C6]/20 border border-[#3178C6]/30", textClass: "text-[#235a97] dark:text-[#3178C6]" },
                { name: "Laravel", icon: SiLaravel, colorClass: "bg-[#FF2D20]/20 border border-[#FF2D20]/30", textClass: "text-[#cc241a] dark:text-[#FF2D20]" }
            ]}
            media={{ type: 'youtube', src: "https://www.youtube.com/embed/0nrzx3chc8c?autoplay=1&mute=1" }}
        />
    );
};

export default TickGet;
