'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    return (
        <section className="relative h-[100vh] w-full overflow-hidden">
            {/* Video de fondo */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/videos/vida-en-gracia.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay de color para mayor contraste */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[--color-neutral-soft] drop-shadow-lg">
                    Movimiento de Vida en Gracia
                </h1>
                <Image
                    src="/mvg-removebg.webp"
                    alt="Logo MVG"
                    width={500}
                    height={500}
                    className="h-100 w-auto object-contain"
                />
                <p className="mt-4 text-5xl text-[--color-neutral-soft] font-medium tracking-wide">
                    Jóvenes evangelizando jóvenes
                </p>
                <p className="mt-2 text-4xl italic text-[--color-neutral-soft] max-w-xl">
                    De su plenitud todos hemos recibido gracia sobre gracia – Jn 1,16
                </p>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                        href="contacto"
                        className="bg-[--color-accent] text-2xl text-white font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
                    >
                        Quiero participar
                    </a>
                    <a
                            href="quienes-somos"
                        className="bg-transparent border border-[--color-accent] text-2xl text-[--color-accent] font-semibold px-6 py-3 rounded-full hover:bg-[--color-accent]/10 transition"
                    >
                        Conocé más
                    </a>
                </div>
            </div>
        </section>
    );
}