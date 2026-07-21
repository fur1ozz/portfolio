import React from 'react';
import ProjectLayout from "../../../layouts/ProjectLayout";
import { Code, Palette } from "lucide-react";

const CoffeeShop = () => {
    return (
        <ProjectLayout
            title="Coffee Time"
            concept={
                <>
                    <p>
                        Explore our coffee shop advertisement crafted with pure HTML and CSS. Featuring multiple SVG vectors and a fully responsive design, this project beautifully showcases our offerings on any device.
                    </p>
                    <p>
                        Discover the perfect brew with elegance and simplicity.
                    </p>
                </>
            }
            notes="This project focused primarily on design, allowing me to take a break from back-end development and refresh my pure HTML and CSS skills."
            stack={[
                { name: "HTML5", icon: Code, colorClass: "bg-[#E34F26]/20 border border-[#E34F26]/30", textClass: "text-[#d34720] dark:text-[#E34F26]" },
                { name: "CSS3", icon: Palette, colorClass: "bg-[#1572B6]/20 border border-[#1572B6]/30", textClass: "text-[#1264a1] dark:text-[#1572B6]" }
            ]}
            links={{
                sourceCode: "https://github.com/fur1ozz" // replace with actual link if available
            }}
            media={{ type: 'youtube', src: "https://www.youtube.com/embed/Vwxm_RqWjVs?autoplay=1&mute=1" }}
        />
    );
};

export default CoffeeShop;