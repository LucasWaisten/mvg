import ComunidadGallery from "@/componets/quienes-somos/comunity-galery";

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Quiénes somos?</h1>
            </section>

            {/* Sección 1: Presentación general */}
            <section className="my-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
                    {/* Galería de imágenes */}
                    <ComunidadGallery/>

                    {/* Texto de presentación */}
                    <div>
                        <p className="text-3xl text-gray-700 leading-relaxed">
                            El <b className="font-shantell">Movimiento de Vida en Gracia</b> es una comunidad de jóvenes católicos que busca vivir y anunciar
                            el evangelio desde la gracia de Dios, fortaleciendo la vida espiritual de sus miembros y
                            promoviendo un camino de conversión profunda y comunitaria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección 3: Estructura organizativa */}
            <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Organización del Movimiento</h2>
                <p className="text-gray-700 mb-4">
                    El Movimiento cuenta con una estructura que permite el acompañamiento pastoral, el trabajo en equipo y la
                    continuidad de sus apostolados. Esta organización incluye la Secretaría del Movimiento, coordinadores generales y equipos de servicio.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Secretaría del Movimiento:</strong> núcleo organizativo y de comunicación.</li>
                    <li><strong>Coordinadores/as Generales:</strong> responsables de la visión pastoral y dirección del movimiento.</li>
                    <li><strong>Equipos de apostolado:</strong> desarrollan las acciones en comunidades, retiros y servicios.</li>
                </ul>
            </section>

            {/* Sección 4: Secretaría del Movimiento */}
            <section className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
                <div className="md:w-1/2">
                    <img src="/images/secretaria.webp" alt="Secretaría del Movimiento" className="rounded-xl shadow-md" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Secretaría del Movimiento</h2>
                    <p className="text-gray-700 mb-2">
                        La secretaría es el centro operativo y de comunicación del Movimiento. Atiende consultas, organiza los encuentros,
                        y mantiene la coordinación entre las distintas comunidades y servicios.
                    </p>
                    <p className="text-gray-700">
                        📍 Sede: [Ciudad o localidad]<br />
                        ✉️ Contacto: <a href="mailto:secretaria@mvg.com.ar" className="text-indigo-600 underline">secretaria@mvg.com.ar</a>
                    </p>
                </div>
            </section>
        </div>
    );
}