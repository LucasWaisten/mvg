import ComunidadGallery from "@/componets/quienes-somos/comunity-galery";
import { Subtitle } from "@/componets/common/title";

export default function IdentitySection() {
    return (
        <section className="my-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Community Gallery - Centered at top */}
                <div className="mb-16">
                    <ComunidadGallery />
                </div>

                {/* Two sections side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Identity Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8">
                        <div className="text-center mb-8">
                            <Subtitle subtitle="Identidad" />
                        </div>
                        <div className="space-y-6 text-sm leading-relaxed text-[#2c1810]">
                            <p className="text-base leading-relaxed">
                                Nuestra identidad se funda en el ser y la misión de la Iglesia. Como <strong className="text-[#ffde59]">jóvenes laicos bautizados</strong>, nos comprometemos a vivir nuestra fe de manera auténtica, anunciando con alegría lo que hemos experimentado y siendo testigos de la presencia de la gracia de Dios en nuestras vidas.
                            </p>
                            <p className="text-base leading-relaxed">
                                Vivir en gracia no es solo un estado espiritual, sino una forma de relacionarnos con Dios que nos invita a estar en armonía con Él, participando del <strong className="text-[#ffde59]">amor gratuito, misericordioso y constante</strong> que Él derrama sobre cada uno de nosotros.
                            </p>
                            <div className="relative py-6">
                                <div className="absolute left-0 top-0 w-12 h-1 bg-[#ffde59]"></div>
                                <p className=" italic text-[#8b7355] font-light pl-6">
                                    &quot;No podemos callar lo que hemos visto y oído&quot;
                                </p>
                                <div className="absolute right-0 bottom-0 w-12 h-1 bg-[#ffde59]"></div>
                            </div>
                            <p className="text-base leading-relaxed">
                                Nuestra comunidad tiene una vinculación especial con la <strong className="text-[#ffde59]">Orden de Predicadores (dominicos)</strong>, y por ello, su espiritualidad atraviesa de manera profunda nuestra vida y misión. Los pilares de esta espiritualidad, que son fundamentales para nuestro Movimiento, nos orientan y nos ayudan a encauzar nuestra misión de manera coherente. Estos pilares son: <em className="text-[#8b7355]">oración, formación, comunidad/fraternidad y apostolado</em>.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8">
                        <div className="text-center mb-8">
                            <Subtitle subtitle="Misión" />
                        </div>
                        <div className="space-y-6 text-sm leading-relaxed text-[#2c1810]">
                            <p className="text-base leading-relaxed">
                                Nuestra misión está estrechamente unida a nuestra identidad. Queremos vivir lo que anunciamos y anunciar lo que vivimos, y nuestra razón de ser como comunidad se sintetiza en el lema: <strong className="text-[#ffde59]">&quot;Jóvenes Evangelizando Jóvenes&quot;</strong>.
                            </p>
                            <p className="text-base leading-relaxed">
                                Como jóvenes bautizados, estamos llamados a ser <strong className="text-[#ffde59]">testigos del amor del Padre</strong> y a compartir la Buena Nueva de Cristo, reconociendo que este apostolado es una respuesta humilde al don gratuito de su gracia.
                            </p>
                            <p className="text-base leading-relaxed">
                                El núcleo de nuestra misión está constituido por las <strong className="text-[#ffde59]">Jornadas</strong>, un espacio en el que hemos desarrollado un carisma propio a lo largo de los años. En ellas, hemos experimentado la obra de la gracia de Cristo en nuestras vidas y, a partir de esa experiencia, queremos poner al servicio de toda la Iglesia el don que hemos recibido.
                            </p>
                            <p className="text-base leading-relaxed">
                                Las Jornadas, como punto de encuentro y formación, se convierten en un lugar de <strong className="text-[#ffde59]">profunda renovación espiritual</strong> y un motor de nuestra misión evangelizadora.
                            </p>
                            <p className="text-base leading-relaxed">
                                Sin embargo, nuestra misión no se agota ni se ve cumplida en las Jornadas. Éstas, más que un fin, son un <em className="text-[#8b7355]">punto de partida</em> que abre un abanico de caminos y oportunidades para los jornadistas, con el fin de seguir alimentando y viviendo el amor del Padre en Comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 