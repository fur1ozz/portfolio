import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '', ...props }) => {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
