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

    const apostoladosDetallados = [
        {
            titulo: "La Noche de Caridad",
            descripcion: "Una experiencia semanal donde los jóvenes del Movimiento salen a las calles para compartir el amor de Dios con los más necesitados. A través de la oración, la escucha y la caridad concreta, llevamos la esperanza del Evangelio a quienes más lo necesitan.",
            actividades: [
                "Visita a personas en situación de calle",
                "Oración y acompañamiento espiritual",
                "Distribución de alimentos y abrigo",
                "Escucha y diálogo fraterno"
            ],
            horario: "Todos los sábados a las 20:00hs",
            icono: "🕯️",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Misión",
            descripcion: "Salidas misioneras a diferentes barrios y comunidades para anunciar el Evangelio y compartir la experiencia de fe. Es una oportunidad para vivir el mandato misionero de Cristo y llevar su mensaje de amor y salvación.",
            actividades: [
                "Evangelización puerta a puerta",
                "Celebraciones en espacios públicos",
                "Testimonios y charlas sobre la fe",
                "Oración por las familias"
            ],
            horario: "Un sábado por mes",
            icono: "🌍",
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Grupos de Lectura",
            descripcion: "Espacios de formación donde los jóvenes profundizan en la Palabra de Dios, la doctrina católica y la espiritualidad dominicana. A través del estudio y la reflexión comunitaria, crecemos en la fe y el conocimiento.",
            actividades: [
                "Lectura y estudio de la Biblia",
                "Reflexión sobre documentos de la Iglesia",
                "Estudio de la espiritualidad dominicana",
                "Discernimiento vocacional"
            ],
            horario: "Semanal, en diferentes horarios",
            icono: "📖",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Ultreya",
            descripcion: "Encuentros semanales donde los jóvenes que han vivido las Jornadas se reúnen para compartir su experiencia de fe, orar juntos y apoyarse mutuamente en el camino de conversión. Es el espacio donde se fortalece la comunidad y se sostiene la vida espiritual.",
            actividades: [
                "Oración comunitaria",
                "Compartir de experiencias de fe",
                "Formación continua",
                "Acompañamiento espiritual"
            ],
            horario: "Todos los miércoles a las 20:30hs",
            icono: "🔥",
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
                    </div>

                    {/* Introducción */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12 mb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <Subtitle subtitle="Servir desde el carisma dominicano" />
                            <p className="text-xl leading-relaxed text-[#2c1810] mb-6">
                                Los apostolados son el corazón misionero de nuestra comunidad. Cada comisión es más que una función organizativa: 
                                es una forma concreta de evangelizar y vivir el carisma dominicano de "contemplar y predicar desde lo contemplado".
                            </p>
                            <p className="text-lg text-[#8b7355] italic">
                                "Cada uno según el don que ha recibido, póngalo al servicio de los demás" 
                                <span className="block text-[#d4af37] mt-2">— 1 Pedro 4, 10</span>
                            </p>
                        </div>
                    </div>

                    {/* Apostolados detallados */}
                    <div className="mb-20">
                        <div className="space-y-12">
                            {apostoladosDetallados.map((apostolado, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                        <div className="text-center lg:text-left">
                                            <div className={`w-24 h-24 bg-gradient-to-r ${apostolado.color} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg`}>
                                                <span className="text-white text-4xl">{apostolado.icono}</span>
                                            </div>
                                            <h3 className="text-3xl font-display font-bold text-[#2c1810] mb-4">
                                                {apostolado.titulo}
                                            </h3>
                                            <div className="bg-[#f5f2ed] rounded-lg p-4 inline-block">
                                                <p className="text-[#8b7355] font-semibold">
                                                    ⏰ {apostolado.horario}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2">
                                            <p className="text-lg leading-relaxed text-[#2c1810] mb-6">
                                                {apostolado.descripcion}
                                            </p>
                                            <div>
                                                <h4 className="text-xl font-display font-semibold text-[#d4af37] mb-4">
                                                    Actividades principales:
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {apostolado.actividades.map((actividad, actIndex) => (
                                                        <li key={actIndex} className="flex items-start space-x-3">
                                                            <span className="text-[#d4af37] text-xl mt-1">•</span>
                                                            <span className="text-[#8b7355] leading-relaxed">{actividad}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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