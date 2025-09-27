import { formasDonacion } from "@/data/donations";

export default function DonationMethodsSection() {
    return (
        <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2c1810] text-center mb-12">
                Formas de donar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-3/4 mx-auto gap-8">
                {formasDonacion.map((forma, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-center mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-r ${forma.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                <span className="text-white text-2xl">{forma.icono}</span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-[#2c1810] mb-3">
                                {forma.titulo}
                            </h3>
                            <p className="text-[#8b7355] text-balance leading-relaxed mb-4">
                                {forma.descripcion}
                            </p>
                        </div>
                        <div className="space-y-2">
                            {forma.datos.map((dato, datoIndex) => (
                                <p key={datoIndex} className="text-sm text-[#2c1810] font-medium">
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