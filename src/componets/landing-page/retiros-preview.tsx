"use client";

import { Subtitle, Subtitle2 } from "@/componets/common/title";
import { usePageTransition } from "@/hooks/usePageTransition";

type Retiro = {
    nombre: string;
    descripcion: string;
    duracion: string;
    frecuencia: string;
    icono: string;
    destacado: boolean;
    color: string;
};

const retiros: Retiro[] = [
    {
        nombre: "Jornada",
        descripcion: "Retiro intensivo de 3 días para jóvenes de 18 a 35 años. Triple encuentro: con Dios, con uno mismo y con los demás.",
        duracion: "3 días",
        frecuencia: "Semestral",
        icono: "✝",
        destacado: true,
        color: "from-[#d4af37] to-[#b8860b]"
    },
    {
        nombre: "Triduo Pascual",
        descripcion: "Celebración de los tres días santos: Jueves Santo, Viernes Santo y Sábado Santo. Experiencia profunda de la Pasión.",
        duracion: "3 días",
        frecuencia: "Anual (Semana Santa)",
        icono: "🕊️",
        destacado: false,
        color: "from-[#8b7355] to-[#cd7f32]"
    }
];

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function RetirosPreview() {
    const { navigateWithLoading } = usePageTransition();

    const handleCardClick = () => {
        navigateWithLoading("/retiros", true);
    };

    return (
        <section id="retiros" className="w-full py-16 bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <Subtitle subtitle="Retiros y Jornadas" />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 w-3/4 mx-auto mb-8">
                    {retiros.map((retiro, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-6 transition-transform duration-300 hover:scale-105",
                                retiro.destacado && "ring-2 ring-[#d4af37] ring-opacity-50"
                            )}
                        >
                            <div className="text-center mb-4">
                                <div className={`w-16 h-16 bg-gradient-to-br ${retiro.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                    <span className="text-white text-2xl">{retiro.icono}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-[#2c1810] mb-2">
                                    {retiro.nombre}
                                </h3>
                            </div>
                            <p className="text-[#8b7355] leading-relaxed mb-4 text-sm text-center">
                                {retiro.descripcion}
                            </p>
                            <div className="space-y-2 text-xs text-[#8b7355] text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <span>⏰</span>
                                    <span>{retiro.duracion}</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <span>📅</span>
                                    <span>{retiro.frecuencia}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={handleCardClick}
                        className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-display font-semibold px-8 py-3 rounded-lg text-lg hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Ver todos los retiros
                    </button>
                </div>
            </div>
        </section>
    );
}

