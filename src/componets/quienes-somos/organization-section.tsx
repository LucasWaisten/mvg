import { Subtitle } from "@/componets/common/title";

export default function OrganizationSection() {
    return (
        <section className="my-16 sm:my-20 lg:my-24 px-4">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <Subtitle subtitle="Cómo nos organizamos" />
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffde59] to-[#ffde59] rounded-2xl blur-sm opacity-30"></div>
                            <img
                                src="/images/secretaria.webp"
                                alt="Secretaría del Movimiento"
                                className="relative rounded-2xl shadow-xl w-full"
                            />
                            <p className="text-base sm:text-lg leading-relaxed text-[#8b7355] italic mt-3 sm:mt-4 text-center">
                                Miembros de la secretaría 2025 del Movimiento de Vida en Gracia.
                            </p>
                        </div>
                        <div className="space-y-4 sm:space-y-6 text-sm leading-relaxed text-[#2c1810]">
                            <p className="text-base sm:text-lg leading-relaxed">
                                <strong className="text-[#ffde59]">Secretaría:</strong> son los encargados de animar, acompañar y coordinar la vida de la comunidad.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                <strong className="text-[#ffde59]">Equipos:</strong> son los espacios donde miembros de la comunidad organizan y preparan las jornadas.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                <strong className="text-[#ffde59]">Comisiones:</strong> son los espacios donde cada miembro puede vivir su vocación al apostolado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 