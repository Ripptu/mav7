import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
    { id: 1, name: "TABLE 01", type: "STEEL / RAW", img: "https://picsum.photos/id/1/600/800" },
    { id: 2, name: "CHAIR X", type: "BRUSHED ALUMINUM", img: "https://picsum.photos/id/24/600/800" },
    { id: 3, name: "LAMP Z", type: "BLACK OXIDE", img: "https://picsum.photos/id/30/600/800" },
    { id: 4, name: "SHELF V", type: "INDUSTRIAL", img: "https://picsum.photos/id/42/600/800" },
];

export const HorizontalGallery: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-mav-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                
                {/* Giant Background Typography */}
                <motion.div 
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none z-0"
                    style={{ x: textParallax }}
                >
                    <h1 className="text-[20vw] whitespace-nowrap font-bold text-white/[0.03] leading-none tracking-tighter pl-[10vw]">
                        COLLECTION 2026
                    </h1>
                </motion.div>

                {/* Horizontal Track */}
                <motion.div style={{ x }} className="flex gap-12 pl-[10vw] z-10 relative">
                    
                    {/* Introduction Card */}
                    <div className="w-[30vw] md:w-[400px] flex flex-col justify-end pb-20 shrink-0">
                        <h3 className="text-3xl font-light mb-6">Objekte</h3>
                        <p className="text-white/60 mb-8 max-w-xs">
                            Entdecken Sie unsere kuratierte Auswahl an monolithischen Möbelstücken. 
                            Jedes Stück ein Unikat der Schwerindustrie.
                        </p>
                        <div className="flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/20 pb-2 w-max">
                            Scroll to explore <ArrowRight size={14} />
                        </div>
                    </div>

                    {/* Product Cards */}
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="group relative h-[60vh] w-[80vw] md:w-[35vw] bg-neutral-900 shrink-0 overflow-hidden"
                            data-hover="true"
                        >
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-4xl font-bold mb-1">{product.name}</h4>
                                <span className="text-xs tracking-[0.2em] text-white/70">{product.type}</span>
                            </div>

                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span className="text-xs border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">VIEW</span>
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[20vw] shrink-0" />
                </motion.div>
            </div>
        </section>
    );
};