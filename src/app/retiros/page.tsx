import { Title, Subtitle } from "@/componets/common/title";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page() {
    const retiros = [
        {
            titulo: "Jornadas de Vida en Gracia",
            descripcion: "Retiros para jóvenes de 18 a 35 años donde se vive un triple encuentro: con Dios, con uno mismo y con los demás.",
            duracion: "3 días",
            frecuencia: "Semestral",
            icono: "✝",
            destacado: true
        },
        {
            titulo: "Retiros de Oración",
            descripcion: "Momentos de silencio y contemplación para fortalecer la vida espiritual y la relación con Dios.",
            duracion: "3 día",
            frecuencia: "Fechas importantes del año",
            icono: "🙏",
            destacado: false
        }
    ];

    return (
        <PageTransition variant="slide">
            <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Título principal */}
                        <div className="text-center mb-16">
                            <Title title="Retiros y Jornadas" />
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
                                                <span>Frecuencia: Semestral</span>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {retiros.filter(retiro => !retiro.destacado).map((retiro, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl">{retiro.icono}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-2">
                                            {retiro.titulo}
                                        </h3>
                                    </div>
                                    <p className="text-[#8b7355] leading-relaxed mb-6">
                                        {retiro.descripcion}
                                    </p>
                                    <div className="space-y-2 text-sm text-[#8b7355]">
                                        <div className="flex items-center space-x-2">
                                            <span>⏰</span>
                                            <span>Duración: {retiro.duracion}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>📅</span>
                                            <span>Frecuencia: {retiro.frecuencia}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Información de contacto */}
                        <div className="mt-16 text-center">
                            <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-8">
                                <h4 className="text-2xl font-display font-bold text-[#2c1810] mb-4">
                                    ¿Te interesa participar?
                                </h4>
                                <p className="text-[#8b7355] leading-relaxed mb-6">
                                    Si querés vivir una experiencia profunda de fe y encuentro con Dios, 
                                    te invitamos a participar de nuestros retiros. ¡Es una oportunidad única 
                                    para crecer espiritualmente!
                                </p>
                                <div className="space-y-2 text-[#8b7355]">
                                    <p>📧 Contacto: difusion.mvg@gmail.com</p>
                                    <p>📱 Instagram: @difusion.mvg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}