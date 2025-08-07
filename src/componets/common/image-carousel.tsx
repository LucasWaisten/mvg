'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
    interval?: number; // Intervalo en milisegundos
    className?: string;
}

export default function ImageCarousel({ 
    images, 
    interval = 3000, // 3 segundos por defecto
    className = "" 
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 300px) 100vw, 300px"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 