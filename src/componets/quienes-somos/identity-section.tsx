import ComunidadGallery from "@/componets/quienes-somos/comunity-galery";
import { Subtitle } from "@/componets/common/title";

export default function IdentitySection() {
    return (
        <section className="my-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ComunidadGallery />
                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <Subtitle subtitle="Identidad y misión" />
                            </div>
                            <div className="space-y-6 sm:text-lg text-sm leading-relaxed text-[#2c1810]">
                                <p className="text-base sm:text-lg leading-relaxed">
                                    El <strong className="font-display text-[#d4af37]">Movimiento de Vida en Gracia</strong> es una comunidad de jóvenes laicos católicos que, animados por el carisma dominicano, busca vivir y anunciar el amor de Dios. Somos parte de la Iglesia y estamos acompañados espiritualmente por los frailes del <strong>Convento Santo Domingo</strong>.
                                </p>
                                <div className="relative py-6">
                                    <div className="absolute left-0 top-0 w-12 h-1 bg-[#d4af37]"></div>
                                    <p className=" italic text-[#8b7355] font-light pl-6">
                                        &quot;Creemos en el amor de Dios, y nuestra vida quiere ser respuesta a ese don recibido.&quot;
                                    </p>
                                    <div className="absolute right-0 bottom-0 w-12 h-1 bg-[#b8860b]"></div>
                                </div>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    El Movimiento nace del deseo de compartir con otros jóvenes la experiencia viva del encuentro con Cristo. Nuestra misión es <strong className="text-[#d4af37]">evangelizar desde la gracia</strong>, animando a cada persona a vivir una conversión auténtica, una vida nueva en el Espíritu y una Fe en comunidad.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    Buscamos que muchos puedan descubrir que <strong className="text-[#d4af37]">Dios los ama</strong>, que está vivo y actúa hoy, en medio del mundo.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    La vida espiritual es el centro de nuestro camino. Buscamos vivir en oración, en comunidad y en servicio, sostenidos por la gracia y la Palabra de Dios. Nuestra espiritualidad está profundamente marcada por el carisma de la Orden de Predicadores: <em className="text-[#8b7355]">&quot;contemplar y predicar desde lo contemplado&quot;</em>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 