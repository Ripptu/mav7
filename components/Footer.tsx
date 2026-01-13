import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full h-[50vh] bg-mav-black flex flex-col justify-between p-8 md:p-12 border-t border-white/10 mt-20" data-hover="true">
            <div className="flex justify-between items-start">
                <div className="text-xs tracking-[0.2em] text-white/40">
                    BERLIN — MUNICH — WORLDWIDE
                </div>
                <div className="flex flex-col gap-2 text-right text-sm md:text-base text-white/70 font-light">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Legal</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <h1 className="text-[25vw] leading-[0.8] font-bold tracking-tighter text-mav-white select-none">
                    MAV7
                </h1>
            </div>
        </footer>
    );
};