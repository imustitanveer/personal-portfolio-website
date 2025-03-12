import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children, direction = "left", delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.2, // Trigger when 20% is visible
    });

    // Define animations for different directions
    const variants = {
        left: { x: -50, opacity: 0 },
        right: { x: 50, opacity: 0 },
        up: { y: -50, opacity: 0 },
        down: { y: 50, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial={variants[direction]}
            animate={inView ? variants.visible : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;