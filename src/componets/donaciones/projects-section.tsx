import { proyectos } from "@/data/donations";

export default function ProjectsSection() {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2c1810] text-center mb-8">
                Proyectos que sustentamos
            </h2>
            <div className="space-y-4">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className={`bg-[#bc8a3c] backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-6 ${proyecto.destacado ? 'ring-2 ring-[#d4af37]/30' : ''}`}>
                        <div className="flex items-center space-x-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${proyecto.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                                <span className="text-white text-2xl">{proyecto.icono}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-display font-bold text-secondary mb-1">
                                    {proyecto.titulo}
                                </h3>
                                {proyecto.destacado && (
                                    <span className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Proyecto Principal
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 