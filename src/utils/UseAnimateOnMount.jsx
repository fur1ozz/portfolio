import { useState, useEffect } from 'react';
import '../SliderStyles/Contact.css'

const useAnimateOnMount = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return animate;
};

export default useAnimateOnMount;
