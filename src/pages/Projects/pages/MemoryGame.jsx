import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { SiTailwindcss, SiLaravel, SiReact } from "react-icons/si";

const MemoryGame = () => {
    return (
        <ProjectLayout
            title="Flip Meha"
            subtitle="Web Game"
            concept={
                <>
                    <p>
                        Dive into the world of memory mastery with this React-powered flip game. Match car logos in a race against time to test your recall skills.
                    </p>
                    <p>
                        With seamless login and registration features, enjoy personalized gameplay. Experience the thrill of unlocking new levels and features as you sharpen your memory and become the ultimate car logo connoisseur!
                    </p>
                </>
            }
            notes="This project remains unfinished, currently about halfway complete. Time flew by, and I have not yet had the opportunity to complete it."
            stack={[
                { name: "React", icon: SiReact, colorClass: "bg-[#61DAFB]/20 border border-[#61DAFB]/30", textClass: "text-[#3b8dbd] dark:text-[#61DAFB]" },
                { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "bg-[#38bdf8]/20 border border-[#38bdf8]/30", textClass: "text-[#1e8abf] dark:text-[#38bdf8]" },
                { name: "Laravel", icon: SiLaravel, colorClass: "bg-[#FF2D20]/20 border border-[#FF2D20]/30", textClass: "text-[#cc241a] dark:text-[#FF2D20]" }
            ]}
            team={[
                { name: "Regnārs Kļaviņš", link: "https://www.instagram.com/regnars.klavins/" },
                { name: "Jevgēnijs Šuvalovs", link: "https://www.instagram.com/wherewasjeff/" }
            ]}
            links={{
                sourceCode: "https://github.com/fur1ozz" // replace with actual link if available
            }}
            media={{ type: 'none' }}
        />
    );
};

export default MemoryGame;