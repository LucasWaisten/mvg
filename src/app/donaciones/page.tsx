import { Title, Subtitle } from "@/componets/common/title";

export default function DonacionesPage() {
    const proyectos = [
        {
            titulo: "Jornadas de Vida en Gracia",
            descripcion: "Ayudanos a sostener los retiros que transforman la vida de cientos de jóvenes cada año. Tu donación cubre gastos de alojamiento, alimentación, materiales y logística.",
            monto: "$50.000",
            icono: "✝",
            color: "from-[#d4af37] to-[#b8860b]",
            destacado: true
        },
        {
            titulo: "La Noche de Caridad",
            descripcion: "Contribuí a que podamos llevar alimentos, abrigo y esperanza a las personas en situación de calle cada sábado.",
            monto: "$15.000",
            icono: "🕯️",
            color: "from-[#8b7355] to-[#cd7f32]",
            destacado: false
        },
        {
            titulo: "Misiones",
            descripcion: "Apoyá nuestras salidas misioneras a diferentes barrios para llevar el Evangelio y la caridad a más familias.",
            monto: "$25.000",
            icono: "🌍",
            color: "from-[#d4af37] to-[#b8860b]",
            destacado: false
        },
        {
            titulo: "Formación y Materiales",
            descripcion: "Contribuí a la compra de libros, materiales de estudio y recursos para la formación espiritual de los jóvenes.",
            monto: "$20.000",
            icono: "📚",
            color: "from-[#8b7355] to-[#cd7f32]",
            destacado: false
        }
    ];

    const formasDonacion = [
        {
            titulo: "Transferencia Bancaria",
            descripcion: "Realizá una transferencia directa a nuestra cuenta bancaria",
            datos: [
                "Banco: [Nombre del Banco]",
                "Tipo de cuenta: Cuenta Corriente",
                "Número: [Número de cuenta]",
                "CBU: [CBU]",
                "Titular: Movimiento de Vida en Gracia"
            ],
            icono: "🏦",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            titulo: "Mercado Pago",
            descripcion: "Doná de forma segura y rápida a través de Mercado Pago",
            datos: [
                "Escaneá el código QR",
                "O ingresá a nuestro link de pago",
                "Podés donar cualquier monto",
                "Recibirás confirmación inmediata"
            ],
            icono: "📱",
            color: "from-[#8b7355] to-[#cd7f32]"
        },
        {
            titulo: "Efectivo",
            descripcion: "Acercate personalmente al Convento Santo Domingo",
            datos: [
                "Dirección: [Dirección del convento]",
                "Horarios: [Horarios de atención]",
                "Contacto: [Teléfono]",
                "Te entregaremos un recibo"
            ],
            icono: "💵",
            color: "from-[#d4af37] to-[#b8860b]"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Título principal */}
                    <div className="text-center mb-16">
                        <Title title="Donaciones" />
                        <div className="mt-8 text-center">
                            <span className="text-[#d4af37] text-6xl">❦</span>
                        </div>
                    </div>

                    {/* Introducción */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-12 mb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <Subtitle subtitle="Sustentá nuestra misión evangelizadora" />
                            <p className="text-xl leading-relaxed text-[#2c1810] mb-6">
                                Tu donación nos permite continuar con nuestra misión de evangelizar jóvenes y llevar el amor de Dios a más personas. 
                                Cada aporte, por pequeño que sea, hace posible que las Jornadas, los apostolados y todas nuestras actividades sigan transformando vidas.
                            </p>
                            <div className="relative py-8">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                                <p className="text-2xl italic text-[#8b7355] font-light">
                                    &quot;Cada uno dé según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría&quot;
                                    <span className="block text-lg text-[#d4af37] mt-2">— Lucas 6, 38</span>
                                </p>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Proyectos que sustentamos */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-display font-bold text-[#2c1810] text-center mb-12">
                            Proyectos que sustentamos
                        </h2>
                        <div className="space-y-8">
                            {proyectos.map((proyecto, index) => (
                                <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 ${proyecto.destacado ? 'ring-2 ring-[#d4af37]/30' : ''}`}>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                        <div className="text-center lg:text-left">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${proyecto.color} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg`}>
                                                <span className="text-white text-3xl">{proyecto.icono}</span>
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-2">
                                                {proyecto.titulo}
                                            </h3>
                                            {proyecto.destacado && (
                                                <span className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                                    Proyecto Principal
                                                </span>
                                            )}
                                            <div className="bg-[#f5f2ed] rounded-lg p-4 inline-block">
                                                <p className="text-[#8b7355] font-semibold">
                                                    💰 Meta: {proyecto.monto}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2">
                                            <p className="text-lg leading-relaxed text-[#2c1810]">
                                                {proyecto.descripcion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formas de donación */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-display font-bold text-[#2c1810] text-center mb-12">
                            Formas de donar
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {formasDonacion.map((forma, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${forma.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                            <span className="text-white text-2xl">{forma.icono}</span>
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-[#2c1810] mb-3">
                                            {forma.titulo}
                                        </h3>
                                        <p className="text-[#8b7355] leading-relaxed mb-4">
                                            {forma.descripcion}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        {forma.datos.map((dato, datoIndex) => (
                                            <p key={datoIndex} className="text-sm text-[#2c1810] font-medium">
                                                {dato}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="bg-gradient-to-br from-[#faf9f7] to-[#e8e0d5] rounded-2xl shadow-2xl border border-[#d4af37]/30 p-12 mb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <h3 className="text-2xl font-display font-bold text-[#2c1810] mb-6">
                                Transparencia y rendición de cuentas
                            </h3>
                            <p className="text-lg leading-relaxed text-[#2c1810] mb-8">
                                Nos comprometemos a utilizar cada donación de manera responsable y transparente. 
                                Todos los fondos se destinan exclusivamente a las actividades del Movimiento y 
                                podés solicitar información sobre el uso de tu donación en cualquier momento.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-xl">✓</span>
                                    </div>
                                    <p className="text-[#2c1810] font-semibold">100% Transparente</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-xl">✓</span>
                                    </div>
                                    <p className="text-[#2c1810] font-semibold">Uso Responsable</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-xl">✓</span>
                                    </div>
                                    <p className="text-[#2c1810] font-semibold">Recibo Oficial</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-2xl shadow-2xl p-16 text-white text-center">
                        <h3 className="text-3xl font-display font-bold mb-6">
                            ¿Te animás a ser parte de esta misión?
                        </h3>
                        <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
                            Tu donación, por pequeña que sea, hace posible que más jóvenes descubran el amor de Dios 
                            y que podamos llevar esperanza a quienes más lo necesitan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="contacto"
                                className="inline-block bg-white text-[#d4af37] font-display font-semibold py-4 px-8 rounded-lg text-xl hover:bg-[#f5f2ed] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Quiero donar
                            </a>
                            <a
                                href="quienes-somos"
                                className="inline-block bg-transparent border-2 border-white text-white font-display font-semibold py-4 px-8 rounded-lg text-xl hover:bg-white hover:text-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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