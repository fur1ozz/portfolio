import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { SiReact, SiCss, SiPhp } from "react-icons/si";

const FinanceBudgeting = () => {
    return (
        <ProjectLayout
            title="Finance & Budgeting"
            concept={
                <p>
                    Discover our React-based finance and budgeting website. Registered users can create personalized plans by entering monthly expenses like electricity and water. At month's end, generate a detailed report of your costs. Track investments by logging deposits and withdrawals, and set savings goals to achieve your financial aspirations with ease.
                </p>
            }
            notes="This project was one of my first endeavors using the React framework; in fact, it was the second project I created with React."
            stack={[
                { name: "React", icon: SiReact, colorClass: "bg-[#61DAFB]/20 border border-[#61DAFB]/30", textClass: "text-[#2090b3] dark:text-[#61DAFB]" },
                { name: "CSS3", icon: SiCss, colorClass: "bg-[#1572B6]/20 border border-[#1572B6]/30", textClass: "text-[#1264a1] dark:text-[#1572B6]" },
                { name: "PHP", icon: SiPhp, colorClass: "bg-[#777BB4]/20 border border-[#777BB4]/30", textClass: "text-[#5e618e] dark:text-[#777BB4]" }
            ]}
        />
    );
};

export default FinanceBudgeting;
