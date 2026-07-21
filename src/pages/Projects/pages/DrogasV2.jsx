import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { SiReact, SiTailwindcss, SiPhp } from "react-icons/si";

const DrogasV2 = () => {
    return (
        <ProjectLayout
            title="Drogas V2"
            concept={
                <p>
                    Introducing our React-based warehouse management system. Admins can oversee worker data, while workers manage orders and warehouse shelves. With secure login, only authorized users can access and print detailed reports on orders and shelf data for each store and warehouse, ensuring efficient and organized operations.
                </p>
            }
            notes="This project was one of the last ones where I used pure PHP. From this point onward, I transitioned to using Laravel."
            stack={[
                { name: "React", icon: SiReact, colorClass: "bg-[#61DAFB]/20 border border-[#61DAFB]/30", textClass: "text-[#2090b3] dark:text-[#61DAFB]" },
                { name: "Tailwind", icon: SiTailwindcss, colorClass: "bg-[#38BDF8]/20 border border-[#38BDF8]/30", textClass: "text-[#1c8ec2] dark:text-[#38BDF8]" },
                { name: "PHP", icon: SiPhp, colorClass: "bg-[#777BB4]/20 border border-[#777BB4]/30", textClass: "text-[#5e618e] dark:text-[#777BB4]" }
            ]}
        />
    );
};

export default DrogasV2;
