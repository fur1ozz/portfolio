import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { Code, Palette, Server } from "lucide-react";

const GiraV2 = () => {
    return (
        <ProjectLayout
            title="Gira V2"
            concept={
                <p>
                    Experience our Jira-inspired project, built with React and Laravel. Featuring a robust user registration and login system, users can add, view, and manage work tasks with ease. Each task includes a title, description, and due date, and can be marked as complete or incomplete, or deleted. The project also includes a work planning calendar to view all task deadlines and a search function for quickly finding specific tasks, streamlining your workflow management.
                </p>
            }
            notes="This project was my first attempt at using both the Laravel framework and Tailwind CSS. Through this project, I developed a strong appreciation for both Laravel and Tailwind."
            stack={[
                { name: "React", icon: Code, colorClass: "bg-[#61DAFB]/20 border border-[#61DAFB]/30", textClass: "text-[#2090b3] dark:text-[#61DAFB]" },
                { name: "Tailwind", icon: Palette, colorClass: "bg-[#38BDF8]/20 border border-[#38BDF8]/30", textClass: "text-[#1c8ec2] dark:text-[#38BDF8]" },
                { name: "Laravel", icon: Server, colorClass: "bg-[#FF2D20]/20 border border-[#FF2D20]/30", textClass: "text-[#cc241a] dark:text-[#FF2D20]" }
            ]}
            team={[
                { name: "Mārcis Jansons" },
                { name: "Alekss Velvelis" }
            ]}
            media={{ type: 'youtube', src: "https://www.youtube.com/embed/qS-SQHVpd4s?autoplay=1&mute=1" }}
        />
    );
};

export default GiraV2;
