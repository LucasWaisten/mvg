import HeroSection from "@/componets/quienes-somos/hero-section";
import IdentitySection from "@/componets/quienes-somos/identity-section";
import OrganizationSection from "@/componets/quienes-somos/organization-section";
import { PageTransition } from "@/componets/common/PageTransition";
import { Subtitle, Subtitle2 } from "@/componets/common/title";

export default function Page() {
    const comisiones = [
        {
            titulo: "Comisión de Formación",
            descripcion: "Organiza retiros, charlas y espacios de crecimiento espiritual. Coordina la formación de los jóvenes del Movimiento.",
            icono: "📚",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Comisión de Eventos",
            descripcion: "Planifica y coordina actividades, encuentros y celebraciones del Movimiento. Asegura que cada evento sea una experiencia significativa.",
            icono: "🎉",
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Comisión de Comunicación",
            descripcion: "Gestiona la difusión del Movimiento en redes sociales y medios. Comparte testimonios y noticias de la comunidad.",
            icono: "📱",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Comisión de Caridad",
            descripcion: "Coordina las actividades de servicio y ayuda a los más necesitados. Organiza la Noche de Caridad y otras iniciativas solidarias.",
            icono: "❤️",
            color: "from-[#8b7355] to-[#cd7f32]"
        }
    ];

    return (
        <PageTransition variant="fade">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16 space-y-24">
                    <HeroSection />
                    <IdentitySection />
                    <OrganizationSection />
                    
                    {/* Sección de Comisiones */}
                    <div id="comisiones" className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <Subtitle subtitle="Comisiones del Movimiento" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {comisiones.map((comision, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${comision.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className="text-white text-3xl">{comision.icono}</span>
                                        </div>
                                        <Subtitle2 subtitle={comision.titulo} />
                                    </div>
                                    <p className="text-[#8b7355] leading-relaxed text-base text-center">
                                        {comision.descripcion}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
