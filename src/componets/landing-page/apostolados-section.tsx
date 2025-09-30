"use client";

import {Subtitle, Subtitle2} from "@/componets/common/title";
import { usePageTransition } from "@/hooks/usePageTransition";

type Apostolado = {
    nombre: string;
    imagen: string;
    url: string;
};

const apostolados: Apostolado[] = [
    {
        nombre: "Noche de Caridad",
        imagen: "/images/nc/IMG-20240717-WA0020.jpg",
        url: "/apostolados/#noche-de-caridad"
    },
    {
        nombre: "Misión",
        imagen: "/images/mision/mision7.jpg",
        url: "/apostolados/#mision"
    },
    {
        nombre: "Coro y Liturgia",
        imagen: "/images/foto-coro.jpeg",
        url: "/apostolados/#coro"
    },
    {
        nombre: "Eventos",
        imagen: "/images/evento1.jpeg",
        url: "/apostolados/#eventos"
    },
    {
        nombre: "Difusion",
        imagen: "/images/difusion4.jpeg",
        url: "/apostolados/#difusion"
    },
    {
        nombre: "Peregrinación Luján",
        imagen: "/images/foto-lujan2.jpeg",
        url: "/apostolados/#peregrinacion-lujan"
    },
    {
        nombre: "Grupos de Lectura",
        imagen: "/images/foto-lectura.jpeg",
        url: "/apostolados/#cartas-de-lecturas"
    }
];

const colorShadows: { [key: string]: string } = {
    "Noche de Caridad": "hover:shadow-amber-400/50",
    "Misión": "hover:shadow-teal-400/50",
    "Coro": "hover:shadow-indigo-400/50",
    "Eventos": "hover:shadow-rose-400/50",
    "Difusion": "hover:shadow-purple-400/50",
    "Peregrinación Luján": "hover:shadow-purple-400/50",
    "Cartas de Lecturas": "hover:shadow-green-400/50",
};

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function ApostoladosSection() {
    const { navigateWithLoading } = usePageTransition();

    const handleCardClick = (url: string) => {
        navigateWithLoading(url, true);
    };

    return (
        <section id="apostolados" className="w-full py-12 sm:py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className={"text-center mb-6 sm:mb-8"}>
                    <Subtitle subtitle={"Nuestros Apostolados"}/>
                </div>
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-5/6 lg:w-3/4 mx-auto">
                    {apostolados.map((a) => (
                        <button
                            key={a.nombre}
                            onClick={() => handleCardClick(a.url)}
                            className="w-full text-left"
                        >
                            <div
                                className={cn(
                                    "bg-white rounded-2xl overflow-hidden transition-shadow duration-500 shadow-md hover:shadow-xl cursor-pointer",
                                    colorShadows[a.nombre] || ""
                                )}
                            >
                                <img src={a.imagen} alt={a.nombre} className="w-full h-48 sm:h-64 lg:h-[450px] object-cover" />
                                <div className="p-3 sm:p-4">
                                    <h3 className="text-base sm:text-lg text-subtitle-bold text-red-dark mb-2">{a.nombre}</h3>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}