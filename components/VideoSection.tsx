import React from 'react';
import { motion } from 'framer-motion';

export const VideoSection: React.FC = () => {
    return (
        <section className="w-full py-0 overflow-hidden bg-mav-black relative z-10 group cursor-none">
            <div 
                className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-neutral-900"
                data-hover="true"
            >
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 transition-transform duration-700 group-hover:scale-105">
                    <span className="text-neutral-600 tracking-widest text-sm font-mono border border-neutral-600 px-4 py-2">
                        VIDEO PLACEHOLDER (AUTOPLAY LOOP)
                    </span>
                    {/* Simulated video noise or texture could go here */}
                    <div className="absolute inset-0 bg-noise opacity-20"></div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 flex flex-col items-center justify-center">
                    <motion.h2 
                        className="text-4xl md:text-7xl font-bold text-center tracking-tighter text-transparent stroke-text group-hover:text-white transition-all duration-500 ease-out"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
                    >
                        PRÄZISION. HANDWERK.<br />
                        CHARAKTER.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};