"use client";

import { useState, useEffect } from "react";
import { Subtitle } from "@/componets/common/title";
import { usePageTransition } from "@/hooks/usePageTransition";

// Imágenes relacionadas con retiros y jornadas
const retirosImages = [
    "/images/jornadas/jornada1.png",
    "/images/jornadas/jornada2.png",
    "/images/jornadas/jornada3.png",
    "/images/jornadas/jornada4.png",
    "/images/jornadas/jornada6.png",
    "/images/jornadas/jornada7.png",
];

export default function RetirosPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { navigateWithLoading } = usePageTransition();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % retirosImages.length);
        }, 3500); // Cambia cada 3.5 segundos

        return () => clearInterval(interval);
    }, []);

    const getImageIndex = (position: 'left' | 'center' | 'right') => {
        const totalImages = retirosImages.length;
        switch (position) {
            case 'left':
                return (currentIndex - 1 + totalImages) % totalImages;
            case 'center':
                return currentIndex;
            case 'right':
                return (currentIndex + 1) % totalImages;
            default:
                return currentIndex;
        }
    };

    const handleButtonClick = () => {
        navigateWithLoading("/retiros", true);
    };

    return (
        <section id="retiros" className="w-full py-16 bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Subtitle subtitle="Jornadas" />
                </div>
                
                {/* Carrusel de imágenes */}
                <div className="flex justify-center items-center w-full py-8 mb-12">
                    <div className="relative flex items-center justify-center space-x-4">
                        {/* Imagen izquierda */}
                        <div className="w-48 h-64 sm:w-100 sm:h-120 opacity-60 transform scale-75 transition-all duration-500 ease-in-out">
                            <img
                                src={retirosImages[getImageIndex('left')]}
                                alt={`Retiro ${getImageIndex('left') + 1}`}
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Imagen central (más grande) */}
                        <div className="w-64 h-80 sm:w-110 sm:h-120 transform scale-100 transition-all duration-500 ease-in-out relative z-10">
                            <img
                                src={retirosImages[getImageIndex('center')]}
                                alt={`Retiro ${getImageIndex('center') + 1}`}
                                className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-[#ffde59]/30"
                            />
                            {/* Overlay sutil en la imagen central */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        </div>

                        {/* Imagen derecha */}
                        <div className="w-48 h-64 sm:w-100 sm:h-120 opacity-60 transform scale-75 transition-all duration-500 ease-in-out">
                            <img
                                src={retirosImages[getImageIndex('right')]}
                                alt={`Retiro ${getImageIndex('right') + 1}`}
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Botón de acción */}
                <div className="text-center">
                    <button
                        onClick={handleButtonClick}
                        className="bg-gradient-to-r from-[#ffde59] to-[#ffde59] text-white font-display font-semibold px-8 py-3 rounded-lg text-lg hover:from-[#ffde59] hover:to-[#ffde59] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        ¿Qué son las Jornadas?
                    </button>
                </div>
            </div>
        </section>
    );
}

