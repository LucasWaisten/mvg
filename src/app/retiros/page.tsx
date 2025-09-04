import { Title, Subtitle } from "@/componets/common/title";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page() {
    const retiros = [
        {
            titulo: "Jornada",
            descripcion: "Retiro intensivo de 3 días para jóvenes de 18 a 35 años. Triple encuentro: con Dios, con uno mismo y con los demás.",
            duracion: "3 días",
            frecuencia: "Semestral",
            icono: "✝",
            destacado: true,
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Mini Veritas",
            descripcion: "Retiro de 3 dias para profundizar en la verdad del Evangelio. Formación intensiva en la fe católica.",
            duracion: "3 días",
            frecuencia: "Anual",
            icono: "📚",
            destacado: false,
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Triduo Pascual",
            descripcion: "Celebración de los tres días santos: Jueves Santo, Viernes Santo y Sábado Santo. Experiencia profunda de la Pasión.",
            duracion: "3 días",
            frecuencia: "Anual (Semana Santa)",
            icono: "🕊️",
            destacado: false,
            color: "from-[#8b7355] to-[#cd7f32]"
        }
    ];

    return (
        <PageTransition variant="slide">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Título principal */}
                        <div className="text-center mb-12">
                            <Title title="Retiros y Jornadas" />
                        </div>

                        {/* Introducción */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 mb-12">
                            <div className="text-center max-w-4xl mx-auto">
                                <Subtitle subtitle="Encuentros que transforman vidas" />
                                <p className="text-lg text-balance  leading-relaxed text-[#2c1810] mb-6">
                                    Momentos especiales donde experimentás el amor de Dios de manera personal y transformadora. 
                                    Espacios de gracia para fortalecer la fe y construir comunidad.
                                </p>
                                <div className="relative py-6">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                                    <p className="text-xl italic text-balance text-[#8b7355] font-light">
                                        &quot;Venid a mí todos los que estáis cansados y agobiados, y yo os daré descanso&quot;
                                        <span className="block text-base text-[#d4af37] mt-2">— Mateo 11, 28</span>
                                    </p>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Retiro destacado - Jornada */}
                        <div className="mb-12">
                            <div className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-2xl shadow-2xl p-8 text-white">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-4xl">✝</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold mb-3">
                                        Jornada
                                    </h3>
                                    <p className="text-lg opacity-90">
                                        El corazón del Movimiento
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-base leading-relaxed mb-4">
                                            Retiro intensivo para jóvenes de <strong>18 a 35 años</strong>. Triple encuentro: 
                                            <strong>con Dios, con uno mismo y con los demás</strong>. El corazón de nuestra comunidad.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <span>⏰</span>
                                                <span>3 días intensivos</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span>📅</span>
                                                <span>Semestral</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span>👥</span>
                                                <span>Frailes dominicos</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-white/20 rounded-2xl p-6">
                                            <h4 className="text-xl font-display font-bold mb-3">¿Qué vivirás?</h4>
                                            <ul className="text-left space-y-2 text-sm">
                                                <li className="flex items-start space-x-2">
                                                    <span className="text-[#d4af37] text-lg">•</span>
                                                    <span>Encuentro personal con Cristo</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <span className="text-[#d4af37] text-lg">•</span>
                                                    <span>Oración y adoración</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <span className="text-[#d4af37] text-lg">•</span>
                                                    <span>Formación en la fe</span>
                                                </li>
                                                <li className="flex items-start space-x-2">
                                                    <span className="text-[#d4af37] text-lg">•</span>
                                                    <span>Comunidad y amistad</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Otros retiros */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {retiros.filter(retiro => !retiro.destacado).map((retiro, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-6">
                                    <div className="text-center mb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${retiro.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                            <span className="text-white text-2xl">{retiro.icono}</span>
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-[#2c1810] mb-2">
                                            {retiro.titulo}
                                        </h3>
                                    </div>
                                    <p className="text-[#8b7355] leading-relaxed mb-4 text-sm">
                                        {retiro.descripcion}
                                    </p>
                                    <div className="space-y-1 text-xs text-[#8b7355]">
                                        <div className="flex items-center space-x-2">
                                            <span>⏰</span>
                                            <span>{retiro.duracion}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>📅</span>
                                            <span>{retiro.frecuencia}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Información de contacto */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-6">
                                <h4 className="text-xl font-display font-bold text-[#2c1810] mb-3">
                                    ¿Te interesa participar?
                                </h4>
                                <p className="text-[#8b7355] leading-relaxed mb-4 text-sm">
                                    Viví una experiencia profunda de fe y encuentro con Dios. 
                                    ¡Oportunidad única para crecer espiritualmente!
                                </p>
                                <div className="space-y-1 text-[#8b7355] text-sm">
                                    <p>📧 difusion.mvg@gmail.com</p>
                                    <p>📱 @difusion.mvg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}