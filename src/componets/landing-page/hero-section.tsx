'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import {TitlePage} from "@/componets/common/title";

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        debugger;
        videoRef.current?.play().catch(() => {});
    }, []);

    return (
        <section id="inicio" className="relative h-[100vh] w-full overflow-hidden">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/video-fondo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onError={(e) => console.error('Error loading video:', e)}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

            <div className="absolute top-8 left-8 text-[#d4af37] text-4xl z-10 opacity-60">❦</div>
            <div className="absolute top-8 right-8 text-[#d4af37] text-4xl z-10 opacity-60">❦</div>
            <div className="absolute bottom-8 left-8 text-[#d4af37] text-4xl z-10 opacity-60">❦</div>
            <div className="absolute bottom-8 right-8 text-[#d4af37] text-4xl z-10 opacity-60">❦</div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <div className="mb-8">
                    <TitlePage />
                </div>
                
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37] rounded-full blur-sm opacity-30"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border-2 border-[#d4af37] shadow-2xl">
                        <Image
                            src="/mvg-white.svg"
                            alt="Logo MVG"
                            width={400}
                            height={400}
                            className="h-32 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="space-y-6 max-w-4xl">
                    <h2 className="text-5xl md:text-6xl text-[#faf9f7] font-display font-bold tracking-wide leading-tight">
                        Jóvenes evangelizando jóvenes
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                        <p className="text-2xl md:text-3xl italic text-[#e8e0d5] font-light max-w-3xl mx-auto leading-relaxed">
                            &quot;De su plenitud todos hemos recibido gracia sobre gracia&quot; 
                            <span className="block text-xl text-[#d4af37] mt-2">— Juan 1,16</span>
                        </p>
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                    </div>
                </div>

                {/*
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <a
                        href="contacto"
                        className="group relative bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-display font-semibold px-8 py-4 rounded-lg text-xl hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <span className="relative z-10">Quiero participar</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    
                    <a
                        href="quienes-somos"
                        className="group relative bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-display font-semibold px-8 py-4 rounded-lg text-xl hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Conocé más
                    </a>
                </div>
                */}
            </div>
        </section>
    );
}