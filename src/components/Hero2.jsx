import React, { useEffect } from 'react';

const Hero2 = () => {

    return (
        <div>
            <div className="bg-black h-[300vh] overflow-hidden">
                <div className="w-full relative h-screen">
                    <div className="h-full bg-cover bg-parallax1 bg-fixed z-[1]"></div>
                    <div className="h-full bg-cover bg-parallax2 bg-fixed z-[2]"></div>
                    <div className="h-full bg-cover bg-parallax3 bg-fixed z-[3]"></div>
                    {/*<img src="/images/hero/audi_background.jpeg" alt="" className="absolute w-full h-auto top-0 left-0 z-[1]"/>*/}
                    {/*<img src="/images/hero/audi_object.png" alt="" className="fixed w-full h-auto top-[200px] left-[300px] z-[2]"/>*/}
                    {/*<img src="/images/hero/audi_bridge_trees.png" alt="" className="absolute w-full h-auto top-0 left-0 z-[3]"/>*/}
                </div>
            </div>
            <div className="bg-amber-600 h-[100vh]">

            </div>
        </div>
    );
};

export default Hero2;
