import { useState, useEffect } from 'react';
import '../SliderStyles/Contact.css'

const useAnimateOnMount = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            setAnimate(true);
        }
    }, []);

    return animate;
};

export default useAnimateOnMount;
