import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Manifest: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="min-h-screen w-full flex flex-col md:flex-row border-t border-white/10 relative z-10 bg-mav-black">
            {/* Left Side: Empty / Line */}
            <div className="hidden md:block w-1/3 lg:w-1/2 relative border-r border-white/10">
               {/* Decorative subtle element */}
               <div className="absolute top-10 left-10 text-xs text-white/30 font-mono">
                   01 — MANIFESTO
               </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-2/3 lg:w-1/2 p-8 md:p-24 flex flex-col justify-center overflow-hidden">
                <motion.div style={{ y: yText }}>
                    <h2 
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 text-mav-white"
                        data-hover="true"
                    >
                        KEINE<br />
                        <span className="text-white/20">DEKO.</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-lg">
                        Wir bauen keine Möbel für den Moment. Wir fertigen Objekte für die Dauer. 
                        Jedes Stück ein Monolith aus Stahl und Wille. 
                        Kompromisslos in der Form, ewig in der Funktion.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};