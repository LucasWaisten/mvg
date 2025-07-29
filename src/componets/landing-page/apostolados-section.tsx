"use client";

import {Subtitle2} from "@/componets/common/title";

type Apostolado = {
    nombre: string;
    descripcion: string;
    horarios: string;
    imagen: string;
};

const apostolados: Apostolado[] = [
    {
        nombre: "Noche de Caridad",
        descripcion: "Salimos a acompañar a personas en situación de calle.",
        horarios: "Todos los miércoles de 16 a 22 hs",
        imagen: "/images/image1.webp",
    },
    {
        nombre: "Misión",
        descripcion: "Evangelización en comunidades durante el verano.",
        horarios: "Verano - fechas y horarios a definir",
        imagen: "/images/image2.webp",
    },
    {
        nombre: "Grupos de lectura",
        descripcion: "Lectura y reflexión de cartas apostólicas.",
        horarios: "Ver sección de eventos",
        imagen: "/images/image3.webp",
    },
    {
        nombre: "Ultreya",
        descripcion: "Encuentro mensual de oración, alabanza y formación.",
        horarios: "Primeros viernes de mes de 19 hs a 00 hs",
        imagen: "/images/image4.webp",
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
        <section className="w-full py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className={"text-center"}>
                    <Subtitle2 subtitle={"Nuestros Apostolados"}/>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {apostolados.map((a) => (
                        <div
                            key={a.nombre}
                            className={cn(
                                "bg-white rounded-2xl overflow-hidden transition-shadow duration-500 shadow-md hover:shadow-xl",
                                colorShadows[a.nombre] || ""
                            )}
                        >
                            <img src={a.imagen} alt={a.nombre} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1">{a.nombre}</h3>
                                <p className="text-sm text-gray-600 mb-2">{a.descripcion}</p>
                                <p className="text-sm text-gray-800 font-medium">{a.horarios}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}