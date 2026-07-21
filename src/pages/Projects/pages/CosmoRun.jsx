import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import videoCosmo from '../../../assets/cosmoRun.mp4';
import { SiReact, SiTailwindcss, SiLaravel } from "react-icons/si";

const CosmoRun = () => {
    return (
        <ProjectLayout
            title="Cosmo Run"
            concept={
                <>
                    <p>
                        Blast through space in this React Native game reminiscent of Subway Surfers, but with a cosmic twist. Maneuver your 2D ship to dodge planets and collect Cosmo Coins for upgrades.
                    </p>
                    <p>
                        Compete on the leaderboard, and with easy login, embark on your journey to interstellar triumph!
                    </p>
                </>
            }
            stack={[
                { name: "React Native", icon: SiReact, colorClass: "bg-[#61DAFB]/20 border border-[#61DAFB]/30", textClass: "text-[#3b8dbd] dark:text-[#61DAFB]" },
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
            media={{ type: 'video', src: videoCosmo }}
        />
    );
};

export default CosmoRun;
