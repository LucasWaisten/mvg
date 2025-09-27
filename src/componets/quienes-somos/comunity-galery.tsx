"use client";

import { useState, useEffect } from "react";

const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
    "/images/image7.webp",
    "/images/image8.webp",
    "/images/image9.webp",
    "/images/image10.webp",
    "/images/image11.webp",
];

export default function ComunidadGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    const getImageIndex = (position: 'left' | 'center' | 'right') => {
        const totalImages = images.length;
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

    return (
        <div className="flex justify-center items-center w-full py-8">
            <div className="relative flex items-center justify-center space-x-4">
                {/* Imagen izquierda */}
                <div className="w-48 h-64 sm:w-96 sm:h-120 opacity-60 transform scale-75 transition-all duration-500 ease-in-out">
                    <img
                        src={images[getImageIndex('left')]}
                        alt={`Foto comunidad ${getImageIndex('left') + 1}`}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Imagen central (más grande) */}
                <div className="w-64 h-80 sm:w-96 sm:h-120 transform scale-100 transition-all duration-500 ease-in-out relative z-10">
                    <img
                        src={images[getImageIndex('center')]}
                        alt={`Foto comunidad ${getImageIndex('center') + 1}`}
                        className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-[#ffde59]/30"
                    />
                    {/* Overlay sutil en la imagen central */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>

                {/* Imagen derecha */}
                <div className="w-48 h-64 sm:w-96 sm:h-120 opacity-60 transform scale-75 transition-all duration-500 ease-in-out">
                    <img
                        src={images[getImageIndex('right')]}
                        alt={`Foto comunidad ${getImageIndex('right') + 1}`}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}