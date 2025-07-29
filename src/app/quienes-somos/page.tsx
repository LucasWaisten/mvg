import ComunidadGallery from "@/componets/quienes-somos/comunity-galery";
import { Subtitle, Subtitle2, Title } from "@/componets/common/title";
import MiniCard from "@/componets/quienes-somos/mini-card";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4 py-16 space-y-24">
                {/* Título principal */}
                <section className="text-center max-w-4xl mx-auto">
                    <Title title={"¿Quiénes somos?"} />
                    <div className="mt-8 text-center">
                        <span className="text-[#d4af37] text-6xl">❦</span>
                    </div>
                </section>

                {/* Sección principal */}
                <section className="my-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <ComunidadGallery />
                                <div className="space-y-8">
                                    <div className="text-center mb-12">
                                        <Subtitle subtitle="Identidad y misión" />
                                    </div>
                                    <div className="space-y-6 text-lg leading-relaxed text-[#2c1810]">
                                        <p className="text-xl leading-relaxed">
                                            El <strong className="font-display text-[#d4af37]">Movimiento de Vida en Gracia</strong> es una comunidad de jóvenes laicos católicos que, animados por el carisma dominicano, busca vivir y anunciar el amor de Dios. Somos parte de la Iglesia y estamos acompañados espiritualmente por los frailes del <strong>Convento Santo Domingo</strong>.
                                        </p>
                                        <div className="relative py-6">
                                            <div className="absolute left-0 top-0 w-12 h-1 bg-[#d4af37]"></div>
                                            <p className="text-xl italic text-[#8b7355] font-light pl-6">
                                                &quot;Creemos en el amor de Dios, y nuestra vida quiere ser respuesta a ese don recibido.&quot;
                                            </p>
                                            <div className="absolute right-0 bottom-0 w-12 h-1 bg-[#b8860b]"></div>
                                        </div>
                                        <p className="text-xl leading-relaxed">
                                            El Movimiento nace del deseo de compartir con otros jóvenes la experiencia viva del encuentro con Cristo. Nuestra misión es <strong className="text-[#d4af37]">evangelizar desde la gracia</strong>, animando a cada persona a vivir una conversión auténtica, una vida nueva en el Espíritu y una Fe en comunidad.
                                        </p>
                                        <p className="text-xl leading-relaxed">
                                            Buscamos que muchos puedan descubrir que <strong className="text-[#d4af37]">Dios los ama</strong>, que está vivo y actúa hoy, en medio del mundo.
                                        </p>
                                        <p className="text-xl leading-relaxed">
                                            La vida espiritual es el centro de nuestro camino. Buscamos vivir en oración, en comunidad y en servicio, sostenidos por la gracia y la Palabra de Dios. Nuestra espiritualidad está profundamente marcada por el carisma de la Orden de Predicadores: <em className="text-[#8b7355]">&quot;contemplar y predicar desde lo contemplado&quot;</em>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección: Cómo nos organizamos */}
                <section className="my-24 px-4">
                    <div className="text-center mb-16">
                        <Subtitle subtitle="Cómo nos organizamos" />
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-2xl blur-sm opacity-30"></div>
                                    <img
                                        src="/images/secretaria.webp"
                                        alt="Secretaría del Movimiento"
                                        className="relative rounded-2xl shadow-xl w-full"
                                    />
                                    <p className="text-lg leading-relaxed text-[#8b7355] italic mt-4 text-center">
                                        Miembros de la secretaría 2025 del Movimiento de Vida en Gracia.
                                    </p>
                                </div>
                                <div className="space-y-6 text-lg leading-relaxed text-[#2c1810]">
                                    <p className="text-xl leading-relaxed">
                                        El <strong className="font-display text-[#d4af37]">Movimiento de Vida en Gracia</strong> se organiza en <strong>comunidades locales</strong>, y cada comunidad se estructura en torno a dos grandes pilares: la <strong>Secretaría Local</strong> y las <strong>Comisiones</strong>.
                                    </p>
                                    <p className="text-xl leading-relaxed">
                                        La <strong className="text-[#d4af37]">Secretaría</strong> es el equipo que anima, acompaña y coordina la vida de la comunidad. Está compuesta por jóvenes con distintas responsabilidades de servicio: presidencia, secretaría, tesorería, animación espiritual, entre otros.
                                    </p>
                                    <p className="text-xl leading-relaxed">
                                        Las <strong className="text-[#d4af37]">Comisiones</strong> son los espacios donde cada miembro puede vivir su vocación al apostolado. Cada comisión es más que una función organizativa: es una forma concreta de evangelizar. Son el corazón misionero de la comunidad.
                                    </p>
                                    <p className="text-xl leading-relaxed">
                                        Cada Comisión lleva adelante un aspecto del carisma: la formación, la liturgia, el servicio a los más pobres, la comunicación, la música, entre otros. Así, la comunidad entera se construye y crece como un cuerpo vivo, donde cada parte aporta con su don.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección: Jornadas */}
                <section className="my-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-16 text-center">
                            <Subtitle subtitle="Jornadas: el corazón del Movimiento" />

                            <div className="flex justify-center mb-8">
                                <div className="w-24 h-24 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white text-4xl">✝</span>
                                </div>
                            </div>

                            <div className="space-y-8 text-lg leading-relaxed text-[#2c1810] max-w-4xl mx-auto">
                                <p className="text-xl leading-relaxed">
                                    Las Jornadas son un retiro para jóvenes de <strong className="text-[#d4af37]">18 a 35 años</strong>, donde se vive un triple encuentro: <strong>con Dios, con uno mismo y con los demás</strong>. Son el corazón de nuestra comunidad, porque allí muchos descubren el amor de Dios de una manera personal y transformadora.
                                </p>

                                <div className="relative py-8">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                                    <p className="text-2xl italic text-[#8b7355] font-light">
                                        &quot;No podemos callar lo que hemos visto y oído&quot; 
                                        <span className="block text-lg text-[#d4af37] mt-2">— Hechos 4, 20</span>
                                    </p>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
                                </div>

                                <p className="text-xl leading-relaxed">
                                    Las Jornadas están animadas por jóvenes del Movimiento y acompañadas por frailes dominicos. A través de ellas, se inicia un camino comunitario que se prolonga en la vida de fe cotidiana, las comisiones y el servicio.
                                </p>

                                <p className="text-xl text-[#2c1810]">
                                    Si tenés entre 18 y 35 años y querés vivir una experiencia distinta, profunda y llena de gracia... ¡te invitamos!
                                </p>

                                <div className="mt-12">
                                    <a
                                        href="contacto"
                                        className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-display font-semibold py-4 px-8 rounded-lg text-xl hover:from-[#b8860b] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Quiero saber más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
