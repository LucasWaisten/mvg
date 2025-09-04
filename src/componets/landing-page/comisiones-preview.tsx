"use client";

import { Subtitle2 } from "@/componets/common/title";
import { usePageTransition } from "@/hooks/usePageTransition";

type Comision = {
    titulo: string;
    descripcion: string;
    icono: string;
    color: string;
};

const comisiones: Comision[] = [
    {
        titulo: "Formación",
        descripcion: "Organiza retiros, charlas y espacios de crecimiento espiritual.",
        icono: "📚",
        color: "from-[#d4af37] to-[#b8860b]"
    },
    {
        titulo: "Eventos",
        descripcion: "Planifica y coordina actividades, encuentros y celebraciones.",
        icono: "🎉",
        color: "from-[#8b7355] to-[#cd7f32]"
    },
    {
        titulo: "Comunicación",
        descripcion: "Gestiona la difusión del Movimiento en redes sociales.",
        icono: "📱",
        color: "from-[#d4af37] to-[#b8860b]"
    },
    {
        titulo: "Caridad",
        descripcion: "Coordina actividades de servicio y ayuda a los necesitados.",
        icono: "❤️",
        color: "from-[#8b7355] to-[#cd7f32]"
    }
];

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function ComisionesPreview() {
    const { navigateWithLoading } = usePageTransition();

    const handleCardClick = () => {
        navigateWithLoading("/apostolados", true);
    };

    return (
        <section id="comisiones" className="w-full py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <Subtitle2 subtitle="Comisiones del Movimiento" />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {comisiones.map((comision, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-6 transition-transform duration-300 hover:scale-105 text-center"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${comision.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <span className="text-white text-2xl">{comision.icono}</span>
                            </div>
                            <h3 className="text-lg font-display font-bold text-[#2c1810] mb-3">
                                {comision.titulo}
                            </h3>
                            <p className="text-[#8b7355] leading-relaxed text-sm">
                                {comision.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={handleCardClick}
                        className="bg-gradient-to-r from-[#8b7355] to-[#cd7f32] text-white font-display font-semibold px-8 py-3 rounded-lg text-lg hover:from-[#cd7f32] hover:to-[#8b7355] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Conocer más sobre el MVG
                    </button>
                </div>
            </div>
        </section>
    );
}

