import { Title, Subtitle } from "@/componets/common/title";

export default function Page(){
    const apostolados = [
        {
            titulo: "Formación",
            descripcion: "Espacios de estudio y reflexión sobre la fe, la espiritualidad dominicana y la doctrina católica.",
            icono: "📚",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Liturgia",
            descripcion: "Animación de celebraciones litúrgicas, música sacra y preparación de momentos de oración comunitaria.",
            icono: "✝",
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Servicio Social",
            descripcion: "Acompañamiento a los más necesitados, obras de caridad y compromiso con la justicia social.",
            icono: "🤝",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Comunicación",
            descripcion: "Difusión del mensaje del Movimiento, redes sociales y comunicación interna de la comunidad.",
            icono: "📢",
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Música",
            descripcion: "Animación musical de las celebraciones, coro y ministerio de música para la liturgia.",
            icono: "🎵",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Jóvenes",
            descripcion: "Acompañamiento específico a adolescentes y jóvenes, retiros y actividades formativas.",
            icono: "🌟",
            color: "from-[#8b7355] to-[#cd7f32]"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Título principal */}
                    <div className="text-center mb-16">
                        <Title title="Nuestros Apostolados" />
                        <div className="mt-8 text-center">
                            <span className="text-[#d4af37] text-6xl">❦</span>
                        </div>
                    </div>

                    {/* Introducción */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12 mb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <Subtitle subtitle="Servir desde el carisma dominicano" />
                            <p className="text-xl leading-relaxed text-[#2c1810] mb-6">
                                Los apostolados son el corazón misionero de nuestra comunidad. Cada comisión es más que una función organizativa: 
                                es una forma concreta de evangelizar y vivir el carisma dominicano de &quot;contemplar y predicar desde lo contemplado&quot;.
                            </p>
                            <p className="text-lg text-[#8b7355] italic">
                                &quot;Cada uno según el don que ha recibido, póngalo al servicio de los demás&quot; 
                                <span className="block text-[#d4af37] mt-2">— 1 Pedro 4, 10</span>
                            </p>
                        </div>
                    </div>

                    {/* Grid de apostolados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {apostolados.map((apostolado, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 h-full hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className={`w-20 h-20 bg-gradient-to-r ${apostolado.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-white text-3xl">{apostolado.icono}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-3">
                                            {apostolado.titulo}
                                        </h3>
                                    </div>
                                    <p className="text-[#8b7355] leading-relaxed text-center">
                                        {apostolado.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sección de participación */}
                    <div className="mt-20">
                        <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-16 text-center">
                            <h3 className="text-3xl font-display font-bold text-[#2c1810] mb-6">
                                ¿Te interesa participar?
                            </h3>
                            <p className="text-xl leading-relaxed text-[#2c1810] mb-8 max-w-3xl mx-auto">
                                Cada apostolado es una oportunidad para vivir tu vocación al servicio. 
                                No importa cuáles sean tus dones o talentos, hay un lugar para ti en nuestra comunidad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="contacto"
                                    className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-display font-semibold py-4 px-8 rounded-lg text-xl hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Quiero participar
                                </a>
                                <a
                                    href="quienes-somos"
                                    className="inline-block bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-display font-semibold py-4 px-8 rounded-lg text-xl hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Conocer más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}