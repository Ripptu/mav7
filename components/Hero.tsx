import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  // SVG Path animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2.5, 
        ease: "easeInOut",
        opacity: { duration: 0.5 }
      }
    }
  };

  const fillVariants = {
    hidden: { fillOpacity: 0 },
    visible: { 
      fillOpacity: 1, 
      transition: { delay: 2.5, duration: 1 } 
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="z-10 relative">
            {/* Simulated MAV7 Logo SVG */}
            <motion.svg
                width="400"
                height="120"
                viewBox="0 0 400 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                className="w-[80vw] md:w-[600px] h-auto"
            >
                {/* M */}
                <motion.path
                    d="M10 110V10L50 80L90 10V110"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    variants={pathVariants}
                />
                <motion.path
                    d="M10 110V10L50 80L90 10V110"
                    fill="#F0F0F0"
                    variants={fillVariants}
                />
                
                {/* A */}
                <motion.path
                    d="M110 110L150 10L190 110M125 75H175"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    variants={pathVariants}
                />
                <motion.path
                    d="M110 110L150 10L190 110M125 75H175"
                    fill="#F0F0F0" // Note: Fill on open path A works but usually we separate the crossbar
                    fillOpacity="0" // Keeping outline style mostly for A for style or fix fill logic
                    variants={fillVariants}
                />

                {/* V */}
                <motion.path
                    d="M210 10L250 110L290 10"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    variants={pathVariants}
                />
                <motion.path
                    d="M210 10L250 110L290 10"
                    fill="#F0F0F0"
                    variants={fillVariants}
                />

                {/* 7 */}
                <motion.path
                    d="M310 10H390L340 110"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    variants={pathVariants}
                />
                 <motion.path
                    d="M310 10H390L340 110L335 110L310 10" // Closed loop for fill
                    fill="#F0F0F0"
                    variants={fillVariants}
                    className="opacity-0" // Hide default fill shape if needed, using simple fill for demo
                />
            </motion.svg>
        </div>

        <motion.div 
            className="absolute bottom-12 text-mav-white/50 text-xs tracking-[0.2em] flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
        >
            <span>EST. 2026 — GERMANY</span>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <ArrowDown size={16} />
            </motion.div>
        </motion.div>
    </section>
  );
};