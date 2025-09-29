'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import {TitlePage} from "@/componets/common/title";

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
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

            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-[#ffde59] text-2xl sm:text-4xl z-10 opacity-60">❦</div>
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-[#ffde59] text-2xl sm:text-4xl z-10 opacity-60">❦</div>
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-[#ffde59] text-2xl sm:text-4xl z-10 opacity-60">❦</div>
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-[#ffde59] text-2xl sm:text-4xl z-10 opacity-60">❦</div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
                <div className="mb-4 sm:mb-8">
                    <TitlePage />
                </div>
                
                <div className="relative mb-6 sm:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffde59] via-[#ffde59] to-[#ffde59] rounded-full blur-sm opacity-30"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-4 border-2 border-[#ffde59] shadow-2xl">
                        <Image
                            src="/mvg-white.svg"
                            alt="Logo MVG"
                            width={400}
                            height={400}
                            className="h-20 sm:h-32 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl text-[#faf9f7] font-display font-bold tracking-wide leading-tight">
                        Jóvenes evangelizando jóvenes
                    </h2>
                </div>
            </div>
        </section>
    );
}