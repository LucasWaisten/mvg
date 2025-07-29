import { Title, Subtitle } from "@/componets/common/title";

export default function Page() {
    const retiros = [
        {
            titulo: "Jornadas de Vida en Gracia",
            descripcion: "Retiros para jóvenes de 18 a 35 años donde se vive un triple encuentro: con Dios, con uno mismo y con los demás.",
            duracion: "3 días",
            frecuencia: "Trimestral",
            icono: "✝",
            destacado: true
        },
        {
            titulo: "Retiros de Formación",
            descripcion: "Espacios de profundización en la fe, la espiritualidad dominicana y el carisma del Movimiento.",
            duracion: "2 días",
            frecuencia: "Bimestral",
            icono: "📚",
            destacado: false
        },
        {
            titulo: "Retiros de Oración",
            descripcion: "Momentos de silencio y contemplación para fortalecer la vida espiritual y la relación con Dios.",
            duracion: "1 día",
            frecuencia: "Mensual",
            icono: "🙏",
            destacado: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Título principal */}
                    <div className="text-center mb-16">
                        <Title title="Retiros y Jornadas" />
                        <div className="mt-8 text-center">
                            <span className="text-[#d4af37] text-6xl">❦</span>
                        </div>
                    </div>

                    {/* Introducción */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12 mb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <Subtitle subtitle="Encuentros que transforman vidas" />
                            <p className="text-xl leading-relaxed text-[#2c1810] mb-6">
                                Los retiros y jornadas son momentos especiales donde los jóvenes pueden experimentar 
                                el amor de Dios de manera personal y transformadora. Son espacios de gracia donde 
                                se fortalece la fe y se construye comunidad.
                            </p>
                            <div className="relative py-8">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                                <p className="text-2xl italic text-[#8b7355] font-light">
                                    &quot;Venid a mí todos los que estáis cansados y agobiados, y yo os daré descanso&quot;
                                    <span className="block text-lg text-[#d4af37] mt-2">— Mateo 11, 28</span>
                                </p>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Retiro destacado */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-2xl shadow-2xl p-12 text-white">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white text-5xl">✝</span>
                                </div>
                                <h3 className="text-4xl font-display font-bold mb-4">
                                    Jornadas de Vida en Gracia
                                </h3>
                                <p className="text-xl opacity-90">
                                    El corazón del Movimiento
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-lg leading-relaxed mb-6">
                                        Las Jornadas son un retiro para jóvenes de <strong>18 a 35 años</strong>, donde se vive un triple encuentro: 
                                        <strong> con Dios, con uno mismo y con los demás</strong>. Son el corazón de nuestra comunidad, 
                                        porque allí muchos descubren el amor de Dios de una manera personal y transformadora.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">⏰</span>
                                            <span>Duración: 3 días intensivos</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">📅</span>
                                            <span>Frecuencia: Trimestral</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">👥</span>
                                            <span>Acompañamiento: Frailes dominicos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-2xl p-8">
                                        <h4 className="text-2xl font-display font-bold mb-4">¿Qué vivirás?</h4>
                                        <ul className="text-left space-y-3 text-lg">
                                            <li className="flex items-start space-x-3">
                                                <span className="text-[#d4af37] text-xl">•</span>
                                                <span>Encuentro personal con Cristo</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="text-[#d4af37] text-xl">•</span>
                                                <span>Oración y adoración</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="text-[#d4af37] text-xl">•</span>
                                                <span>Formación en la fe</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="text-[#d4af37] text-xl">•</span>
                                                <span>Comunidad y amistad</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="text-[#d4af37] text-xl">•</span>
                                                <span>Discernimiento vocacional</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Otros retiros */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {retiros.slice(1).map((retiro, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#8b7355] to-[#cd7f32] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">{retiro.icono}</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-2">
                                        {retiro.titulo}
                                    </h3>
                                    <div className="flex justify-center space-x-4 text-sm text-[#8b7355]">
                                        <span>⏰ {retiro.duracion}</span>
                                        <span>📅 {retiro.frecuencia}</span>
                                    </div>
                                </div>
                                <p className="text-[#8b7355] leading-relaxed text-center">
                                    {retiro.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-16 text-center">
                        <h3 className="text-3xl font-display font-bold text-[#2c1810] mb-6">
                            ¿Te animás a vivir esta experiencia?
                        </h3>
                        <p className="text-xl leading-relaxed text-[#2c1810] mb-8 max-w-3xl mx-auto">
                            Si tenés entre 18 y 35 años y querés vivir una experiencia distinta, profunda y llena de gracia... ¡te invitamos!
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
    );
}