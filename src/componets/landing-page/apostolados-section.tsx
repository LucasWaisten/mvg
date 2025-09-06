"use client";

import {Subtitle, Subtitle2} from "@/componets/common/title";
import { usePageTransition } from "@/hooks/usePageTransition";

type Apostolado = {
    nombre: string;
    descripcion: string;
    horarios: string;
    imagen: string;
    url: string;
};

const apostolados: Apostolado[] = [
    {
        nombre: "Noche de Caridad",
        descripcion: "Salimos a acompañar a personas en situación de calle.",
        horarios: "Miércoles 16:00hs - 22:00hs",
        imagen: "/images/nc/IMG-20240717-WA0020.jpg",
        url: "/apostolados/#noche-de-caridad"
    },
    {
        nombre: "Misión",
        descripcion: "Evangelización en comunidades durante el verano.",
        horarios: "Primeros meses del año",
        imagen: "/images/mision/mision7.jpg",
        url: "/apostolados/#mision"
    },
    {
        nombre: "Coro",
        descripcion: "Alabamos a Dios a través de la música litúrgica.",
        horarios: "Sábados 16:00hs - 18:00hs",
        imagen: "/images/foto-coro.jpeg",
        url: "/apostolados/#coro"
    },
    {
        nombre: "Ultreya",
        descripcion: "Encuentro mensual de oración y formación.",
        horarios: "Primer viernes del mes 19:00hs",
        imagen: "/images/ultreya/IMG-20241219-WA0010.jpg",
        url: "/apostolados/#ultreya"
    },
    {
        nombre: "Peregrinación Luján",
        descripcion: "Experiencia de fe y devoción mariana en comunidad.",
        horarios: "Anual (Octubre)",
        imagen: "/images/foto-lujan2.jpeg",
        url: "/apostolados/#peregrinacion-lujan"
    },
    {
        nombre: "Grupos de Lectura",
        descripcion: "Estudio bíblico y formación en la fe católica.",
        horarios: "Sábados 18:00hs - 20:00hs",
        imagen: "/images/foto-lectura.jpeg",
        url: "/apostolados/#cartas-de-lecturas"
    }
];

const colorShadows: { [key: string]: string } = {
    "Noche de Caridad": "hover:shadow-amber-400/50",
    "Misión": "hover:shadow-teal-400/50",
    "Coro": "hover:shadow-indigo-400/50",
    "Ultreya": "hover:shadow-rose-400/50",
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
        <section id="apostolados" className="w-full py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className={"text-center mb-8"}>
                    <Subtitle subtitle={"Nuestros Apostolados"}/>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">
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
                                <img src={a.imagen} alt={a.nombre} className="w-full  sm:h-[450px] object-contain sm:object-cover" />
                                <div className="p-4">
                                    <h3 className="text-base sm:text-lg text-subtitle-bold text-red-dark mb-2">{a.nombre}</h3>
                                    <p className="text-sm text-body text-gray-600 mb-2">{a.descripcion}</p>
                                    <p className="text-xs text-body text-gray-800">{a.horarios}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}