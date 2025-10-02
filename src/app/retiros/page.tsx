"use client";

import { useState, useEffect } from "react";
import { Title, Subtitle } from "@/componets/common/title";
import { PageTransition } from "@/componets/common/PageTransition";
import Image from "next/image";

// Imágenes de equipos organizadores
const equiposImages = [
    "/images/jornadas/equipo1.jpeg",
    "/images/jornadas/equipo2.jpeg",
    "/images/jornadas/equipo3.jpeg",
    "/images/jornadas/equipo4.jpeg",
];

export default function Page() {
    const [currentEquipoIndex, setCurrentEquipoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEquipoIndex((prevIndex) => (prevIndex + 1) % equiposImages.length);
        }, 4000); // Cambia cada 4 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <PageTransition variant="slide">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto sm:px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section - Jornada como corazón del movimiento */}
                        <div className="text-center mb-20">
                            <div className="relative">
                                <div className="relative z-10">
                                    <Title title="Las Jornadas" />
                                    <p className="text-2xl font-display text-brown-dark mt-4 ">
                                        El corazón del Movimiento
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card dorada principal - Jornada destacada */}
                        <div className="mb-20">
                            <div className="bg-gradient-to-br from-[#ffde59] to-[#e3bd25] rounded-3xl shadow-2xl p-4 sm:p-12 text-black relative overflow-hidden">
                                {/* Efectos decorativos de fondo */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                                
                                <div className="relative z-10">
                                    <div className="text-center mb-8">
                                        <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 ">
                                            <span className="text-white text-5xl">
                                                <Image src="/cruz-dominica.svg" alt="Jornada" width={200} height={200} />
                                            </span>
                                        </div>
                                        <h2 className="text-4xl font-display font-bold mb-4">
                                            La Jornada
                                        </h2>
                                        <p className="text-xl opacity-90">
                                            Triple Encuentro que transforma vidas
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        {/* Información principal */}
                                        <div className="space-y-6">
                                            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                                                <h3 className="text-xl font-display font-bold mb-4 text-center">
                                                    ¿Por qué &quot;Jornada&quot; y no &quot;Retiro&quot;?
                                                </h3>
                                                <p className="text-base leading-relaxed">
                                                    Porque tanto el equipo como los jornadistas deben ser <strong>protagonistas</strong> del Triple Encuentro. No somos solo oyentes, sino que ponemos nuestra <strong>escucha activa</strong> y disponemos proactivamente la apertura del corazón a recibir para Jesús.
                                                </p>
                                            </div>

                                            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                                                <h3 className="text-xl font-display font-bold mb-4 text-center">
                                                    El Triple Encuentro
                                                </h3>
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-2xl">🙏</span>
                                                        <span><strong>Con Dios:</strong> Oración y adoración</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-2xl">👤</span>
                                                        <span><strong>Con uno mismo:</strong> Revisión de vida</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-2xl">👥</span>
                                                        <span><strong>Con los demás:</strong> Comunidad y fraternidad</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Carrusel de equipos integrado */}
                                        <div className="text-center  ">
                                            <h3 className="text-2xl font-display font-bold mb-6">
                                                Equipos
                                            </h3>
                                            <div className="relative sm:w-120 sm:h-96  h-96  mx-auto">
                                                <Image
                                                    src={equiposImages[currentEquipoIndex]}
                                                    alt={`Equipo organizador ${currentEquipoIndex + 1}`}
                                                    width={420}
                                                    height={420}
                                                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/30 transition-all duration-500 ease-in-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <p className="text-white text-sm font-semibold bg-black/50 rounded-lg px-3 py-2">
                                                        Los equipos son el corazón de cada Jornada
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sección de objetivo */}
                        <div className="mb-16">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8">
                                <div className="text-center mb-8">
                                    <Subtitle subtitle="El Objetivo de la Jornada" />
                                </div>
                                <div className="max-w-4xl mx-auto">
                                    <p className="text-lg leading-relaxed text-[#2c1810] mb-6">
                                        El objetivo principal es que los jornadistas vivan el <strong className="text-[#ffde59]">Triple Encuentro</strong> y que esta experiencia dé lugar a una revisión de vida, dirigiendo su obrar diario en conformidad con el Evangelio.
                                    </p>
                                    <p className="text-lg leading-relaxed text-[#2c1810]">
                                        La Jornada apunta a formar jóvenes que sean <strong className="text-[#ffde59]">testimonio de la vida en gracia</strong>, contagiando a los demás la Fe, Esperanza y Caridad.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Información de contacto mejorada */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#ffde59]/30 p-8 relative overflow-hidden">
                                {/* Efectos decorativos */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffde59]/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffde59]/10 rounded-full translate-y-12 -translate-x-12"></div>
                                
                                <div className="relative z-10">
                                    <h4 className="text-2xl sm:text-3xl font-display font-bold text-[#2c1810] mb-4">
                                        ¿Te interesa vivir una Jornada?
                                    </h4>
                                    <p className="text-[#8b7355] leading-relaxed mb-6 text-base sm:text-lg">
                                        Viví una experiencia profunda de fe y encuentro con Dios. 
                                        ¡Oportunidad única para crecer espiritualmente!
                                    </p>
                                    <div className="space-y-3 text-[#8b7355] text-lg">
                                        <p className="flex items-center justify-center space-x-2">
                                            <span>📧</span>
                                            <span>difusion.mvg@gmail.com</span>
                                        </p>
                                        <p className="flex items-center justify-center space-x-2">
                                            <span>📱</span>
                                            <span>@difusion.mvg</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}