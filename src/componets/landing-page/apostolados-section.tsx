"use client";

import {Subtitle2} from "@/componets/common/title";
import Link from "next/link";

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
        horarios: "Todos los miércoles de 16 a 22 hs",
        imagen: "/images/image1.webp",
        url: "/apostolados/#noche-de-caridad"
    },
    {
        nombre: "Misión",
        descripcion: "Evangelización en comunidades durante el verano.",
        horarios: "Verano - fechas y horarios a definir",
        imagen: "/images/mision/IMG_6984.jpg",
        url: "/apostolados/#mision"
    },
    {
        nombre: "Grupos de lectura",
        descripcion: "Lectura y reflexión de cartas apostólicas.",
        horarios: "Ver sección de eventos",
        imagen: "/images/IMG_5436.jpg",
        url: "/apostolados/#grupos-de-lectura"
    },
    {
        nombre: "Ultreya",
        descripcion: "Encuentro mensual de oración, alabanza y formación.",
        horarios: "Primeros viernes de mes de 19 hs a 00 hs",
        imagen: "/images/image4.webp",
        url: "/apostolados/#ultreya"
    },
];

const colorShadows: { [key: string]: string } = {
    "Noche de Caridad": "hover:shadow-amber-400/50",
    "Misión": "hover:shadow-teal-400/50",
    "Grupos de lectura": "hover:shadow-indigo-400/50",
    "Ultreya": "hover:shadow-rose-400/50",
};

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function ApostoladosSection() {
    return (
        <section id="apostolados" className="w-full py-16 bg-gray-100">
            <div 
            className="container mx-auto px-4">
                <div className={"text-center"}>
                    <Subtitle2 subtitle={"Nuestros Apostolados"}/>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {apostolados.map((a) => (
                        <Link href={a.url} key={a.nombre}>
                        <div
                            key={a.nombre}
                            className={cn(
                                "bg-white rounded-2xl overflow-hidden transition-shadow duration-500 shadow-md hover:shadow-xl",
                                colorShadows[a.nombre] || ""
                            )}
                        >
                            <img src={a.imagen} alt={a.nombre} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl text-subtitle-bold text-red-dark mb-1">{a.nombre}</h3>
                                <p className="text-sm text-body text-gray-600 mb-2">{a.descripcion}</p>
                                <p className="text-sm text-body text-gray-800 ">{a.horarios}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}