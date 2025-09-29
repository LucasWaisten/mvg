import { formasDonacion } from "@/data/donations";

export default function DonationMethodsSection() {
    return (
        <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#2c1810] text-center mb-8 sm:mb-12">
                Formas de donar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full sm:w-5/6 lg:w-3/4 mx-auto gap-6 sm:gap-8">
                {formasDonacion.map((forma, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-6 sm:p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-center mb-4 sm:mb-6">
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${forma.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                                <span className="text-white text-lg sm:text-2xl">{forma.icono}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-[#2c1810] mb-2 sm:mb-3">
                                {forma.titulo}
                            </h3>
                            <p className="text-[#8b7355] text-balance leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg">
                                {forma.descripcion}
                            </p>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            {forma.datos.map((dato, datoIndex) => (
                                <p key={datoIndex} className="text-sm sm:text-base text-[#2c1810] font-medium">
                                    {dato}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 