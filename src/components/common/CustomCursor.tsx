import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [hidden, setHidden] = useState(true);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (hidden) setHidden(false);
        };

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') || 
                target.closest('button') ||
                target.classList.contains('cursor-pointer')) {
                setIsHovering(true);
            }
        };

        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseover', handleHoverStart);
        window.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', handleHoverEnd);
        };
    }, [cursorX, cursorY, hidden]);

    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null; // Disable custom cursor on mobile touch devices
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] flex items-center justify-center border border-[#CF2030]/60 shadow-[0_0_18px_rgba(207,32,48,0.18)]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                scale: isHovering ? 1.7 : 1,
                opacity: hidden ? 0 : 1,
                backgroundColor: isHovering ? 'rgba(207, 32, 48, 0.08)' : 'rgba(255, 255, 255, 0.65)',
                borderColor: isHovering ? 'rgba(207, 32, 48, 0.9)' : 'rgba(207, 32, 48, 0.6)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.div 
                className="w-1.5 h-1.5 bg-[#CF2030] rounded-full"
                animate={{ opacity: isHovering ? 0.65 : 1, scale: isHovering ? 0.75 : 1 }}
            />
        </motion.div>
    );
};

export default CustomCursor;
