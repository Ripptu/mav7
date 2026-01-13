import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Download, Grid, Layers, Box, Maximize2, Ruler, Cpu, Monitor, Type, ArrowRight } from 'lucide-react';

// --- SHARED COMPONENTS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-12 border-l-2 border-brand-white pl-6">
    <h2 className="text-sm font-mono tracking-[0.3em] text-brand-white/50 mb-2 uppercase">{subtitle}</h2>
    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-white">{title}</h3>
  </div>
);

// --- LOGO COMPONENT ---
// Uses the provided PNG. Accepts a theme prop to adjust color.
interface MAV7LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

const MAV7Logo: React.FC<MAV7LogoProps> = ({ className, theme = 'dark' }) => {
  // Source image is black. 
  // theme='dark' implies dark background -> white logo (invert).
  // theme='light' implies light background -> black logo (no invert).
  const isDarkTheme = theme === 'dark';

  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://i.postimg.cc/1RbQC5D5/mav.png" 
        alt="MAV7" 
        className="w-full h-auto object-contain transition-all duration-500"
        style={{ 
            filter: isDarkTheme ? 'invert(1) brightness(100)' : 'none'
        }}
      />
    </div>
  );
};

// --- SECTIONS ---

const IntroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative border-b border-brand-grid/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      
      <div className="w-full max-w-4xl px-8 z-10 flex flex-col items-center">
        {/* Main Logo Reveal */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-2xl"
        >
            <MAV7Logo theme="dark" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-brand-white/20 px-4 py-2 bg-brand-black/50 backdrop-blur-sm">
             <p className="font-mono text-sm tracking-[0.3em] text-brand-white/80">
               PROJECT: MAV7 — FINAL IDENTITY
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  const cards = [
    {
      title: "KONSTRUKTION",
      icon: <Box className="w-6 h-6 text-brand-white/60" />,
      text: "Keine Schrift, sondern Architektur. Die Buchstaben wirken wie aus Metallblöcken gefräst. Stabil und wuchtig."
    },
    {
      title: "DER RHYTHMUS",
      icon: <Layers className="w-6 h-6 text-brand-white/60" />,
      text: "Das Zusammenspiel von A, V und 7. Die Winkel greifen parallel ineinander wie präzise Bauteile."
    },
    {
      title: "PRODUKTION",
      icon: <Grid className="w-6 h-6 text-brand-white/60" />,
      text: "Optimiert für Laser und Prägung. Keine feinen Linien, die verschwinden. Funktioniert in Stahl, Holz und Leder."
    },
    {
      title: "WIRKUNG",
      icon: <Maximize2 className="w-6 h-6 text-brand-white/60" />,
      text: "Zeitlose Dominanz. Modern, aber nicht modisch. Ein visuelles Fundament für die nächsten Jahrzehnte."
    }
  ];

  return (
    <section className="min-h-screen w-full py-32 px-8 md:px-24 bg-brand-black relative">
       {/* Background Grid Lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-10">
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="WARUM DIESES DESIGN?" subtitle="PHILOSOPHIE" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group border border-brand-white/10 p-8 hover:bg-brand-white/5 transition-colors duration-500 overflow-visible"
            >
              <div className="relative w-fit mb-4 group/icon">
                  {card.icon}
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/icon:translate-y-0 pointer-events-none z-20">
                      <div className="relative bg-brand-white text-brand-black text-[10px] font-mono uppercase tracking-widest py-1 px-2 whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {card.title}
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-white" />
                      </div>
                  </div>
              </div>
              
              <h4 className="text-xl font-bold mb-4 tracking-tight">{card.title}</h4>
              <p className="text-brand-white/60 leading-relaxed text-sm">{card.text}</p>
              
              <div className="w-full h-px bg-brand-white/10 mt-8 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const images = [
        {
          src: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F418409f3-6ca0-4035-9ad6-2b06234ecc2d.png&w=1080&q=75",
          title: "OBSIDIAN FLOW",
          id: "01"
        },
        {
          src: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F1e7d4a4d-cbba-454c-9a85-3c6e4e1a1e5b.png&w=1080&q=75",
          title: "CHROME NEBULA",
          id: "02"
        },
        {
          src: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F63c2cd23-25cb-470f-8a4a-8b393e39cd2f.png&w=1080&q=75",
          title: "DARK MATTER",
          id: "03"
        },
        {
          src: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fb4c47847-b7e8-4bff-9fa4-efb1409a9c18.png&w=1080&q=75",
          title: "VOID STRUCTURE",
          id: "04"
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-brand-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-12 left-8 md:left-24 z-20 pointer-events-none mix-blend-difference">
                    <SectionTitle title="VISUAL STUDIES" subtitle="RENDERINGS" />
                </div>
                
                <motion.div style={{ x }} className="flex gap-12 pl-[10vw] md:pl-[30vw] items-center">
                    {images.map((img, index) => (
                        <div key={index} className="relative w-[80vw] md:w-[45vw] h-[60vh] shrink-0 group">
                            <div className="absolute -top-12 left-0 text-xs font-mono text-brand-white/40 tracking-widest">
                                IMG_{img.id} // RAW_RENDER
                            </div>
                            <div className="w-full h-full overflow-hidden border border-brand-white/10 bg-[#111]">
                                <img 
                                    src={img.src} 
                                    alt={img.title} 
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                                />
                            </div>
                            
                            {/* Hover Overlay Title */}
                            <div className="absolute bottom-0 left-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                 <h3 className="text-3xl md:text-5xl font-bold text-brand-white uppercase tracking-tighter shadow-black drop-shadow-lg">
                                    {img.title}
                                 </h3>
                            </div>
                        </div>
                    ))}
                    {/* Spacer */}
                    <div className="w-[10vw] shrink-0"></div>
                </motion.div>
                
                <div className="absolute bottom-12 right-12 z-20 flex items-center gap-4 text-brand-white/30 animate-pulse">
                    <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </section>
    );
};

const BlueprintSection = () => {
  return (
    <section className="min-h-[80vh] w-full py-24 bg-[#0a0a0a] border-y border-brand-grid/50 flex flex-col items-center justify-center overflow-hidden relative">
       {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="max-w-5xl w-full px-8 relative z-10">
         <div className="flex items-center gap-4 mb-12 opacity-70">
            <Ruler className="w-5 h-5" />
            <h2 className="text-xl font-bold tracking-widest">TECHNICAL PRECISION</h2>
         </div>

         <div className="relative p-8 md:p-12 border border-brand-white/10 bg-brand-black/80 backdrop-blur group">
             {/* Crosshairs */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-white/50 -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-white/50 translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-white/50 -translate-x-1/2 translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-white/50 translate-x-1/2 translate-y-1/2" />
             
             {/* Measurement lines */}
             <div className="absolute top-8 left-0 right-0 h-px bg-brand-white/20 mx-8"></div>
             <div className="absolute bottom-8 left-0 right-0 h-px bg-brand-white/20 mx-8"></div>
             <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-white/20 my-8"></div>
             <div className="absolute right-8 top-0 bottom-0 w-px bg-brand-white/20 my-8"></div>

             {/* Replaced Logo with Technical Blueprint Image */}
             <img 
               src="https://i.postimg.cc/PxRPFsMx/e46f1a78-13be-472c-8cef-0c2456a49814.png"
               alt="Technical Blueprint"
               className="w-full h-auto object-contain max-h-[60vh] opacity-90 transition-opacity duration-700 hover:opacity-100"
             />
             
             <div className="absolute bottom-4 right-8 font-mono text-xs text-brand-white/30">REF: VECTOR_001</div>
         </div>

         <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-center font-mono text-brand-white/40 text-sm"
         >
             Form follows Function. Jeder Winkel ist berechnet.
         </motion.p>
      </div>
    </section>
  );
};

const SystemSpecsSection = () => {
    return (
      <section className="w-full py-32 border-y border-white/10 bg-brand-black relative overflow-hidden">
          {/* Decorative Radial Grid */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
  
          <div className="max-w-7xl mx-auto px-8 relative z-10">
              <SectionTitle title="SYSTEM PARAMETERS" subtitle="TYPOGRAPHY" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  
                  {/* Left Column: Wordmark Spec */}
                  <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-between">
                       <div className="absolute top-0 right-0 p-4 opacity-20">
                           <Type size={48} strokeWidth={1} />
                       </div>
                       
                       <div className="mb-8">
                          <span className="font-mono text-xs tracking-widest text-brand-white/50 block mb-2">01. WORTMARKE</span>
                          <h4 className="text-2xl font-bold text-brand-white">MAV7 CUSTOM TYPE</h4>
                       </div>
                       
                       <div className="mb-8 bg-brand-black/50 p-8 border border-white/5 flex items-center justify-center">
                            <MAV7Logo theme="dark" className="w-48" />
                       </div>

                       <p className="text-brand-white/60 font-mono text-sm leading-relaxed border-t border-white/10 pt-6">
                           Exklusiv entwickelte Wortmarke. Basierend auf geometrischen Grundformen mit 45°-Winkeln und massivem Strichstärken-Kontrast.
                       </p>
                  </div>
  
                  {/* Right Column: Subline Spec */}
                  <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-between">
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                           <Monitor size={48} strokeWidth={1} />
                       </div>

                       <div className="mb-8">
                          <span className="font-mono text-xs tracking-widest text-brand-white/50 block mb-2">02. SUBLINE</span>
                          <h4 className="text-2xl font-bold text-brand-white">MONTSERRAT</h4>
                       </div>

                       <div className="mb-8 bg-brand-black/50 p-12 border border-white/5 flex items-center justify-center">
                            <span className="font-subline font-semibold text-brand-white text-2xl tracking-[0.2em] uppercase">
                                INTERIOR DESIGN
                            </span>
                       </div>

                       <div className="space-y-4 border-t border-white/10 pt-6">
                           <div className="flex justify-between items-center border-b border-white/5 pb-2">
                               <span className="text-brand-white/40 text-xs font-mono">WEIGHT</span>
                               <span className="text-brand-white text-sm font-mono">SEMIBOLD / MEDIUM</span>
                           </div>
                           <div className="flex justify-between items-center border-b border-white/5 pb-2">
                               <span className="text-brand-white/40 text-xs font-mono">CASE</span>
                               <span className="text-brand-white text-sm font-mono">ALL-CAPS</span>
                           </div>
                           <div className="flex justify-between items-center">
                               <span className="text-brand-white/40 text-xs font-mono">TRACKING</span>
                               <span className="text-brand-white text-sm font-mono">+200</span>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }

const Footer = () => {
    return (
        <footer className="py-32 w-full flex flex-col items-center justify-center bg-brand-black border-t border-brand-white/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center text-brand-white">
                READY FOR DEPLOYMENT.
            </h2>
            
            <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 px-10 py-6 border border-brand-white text-brand-white uppercase tracking-widest hover:border-white transition-colors"
            >
                <Download size={20} />
                Download Brand Assets
            </motion.button>

            <div className="mt-20 text-brand-white/20 text-xs font-mono">
                © 2026 MAV7 IDENTITY SYSTEM — V1.0
            </div>
        </footer>
    );
};

// --- APP COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen w-full font-sans text-brand-white selection:bg-white/20">
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none mix-blend-difference">
          <span className="font-bold tracking-tighter text-white pointer-events-auto">MAV7.SYS</span>
          <span className="font-mono text-xs opacity-50 text-white">LOCKED</span>
      </nav>

      <main>
        <IntroSection />
        <PhilosophySection />
        <GallerySection />
        <BlueprintSection />
        <SystemSpecsSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;