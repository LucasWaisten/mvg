import { Title, Subtitle } from "@/componets/common/title";
import ImageCarousel from "@/componets/common/image-carousel";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page(){
    const apostoladosDetallados = [
        {
            id: "noche-de-caridad",
            titulo: "Noche de Caridad",
            descripcion: "Una experiencia semanal donde los jóvenes del Movimiento salen a las calles para compartir el amor de Dios con los más necesitados. A través de la oración, la escucha y la caridad concreta, llevamos la esperanza del Evangelio a quienes más lo necesitan.",

            horario: "Todos los miercoles desde las 16:00hs hasta las 22:00hs",
            icono: "🕯️",
            color: "from-[#d4af37] to-[#b8860b]",
            imagenes:[
                "/images/nc/IMG-20240717-WA0020.jpg",
                "/images/nc/IMG-20241107-WA0010.jpg",
                "/images/nc/IMG-20241207-WA0040.jpg",
                "/images/nc/IMG-20250403-WA0004.jpg",
                "/images/nc/IMG-20250611-WA0027~2.jpg",
                "/images/nc/IMG-20250612-WA0005.jpg",
            ]
        },
        {
            id: "mision",
            titulo: "Misión",
            descripcion: "Salidas misioneras a diferentes barrios y comunidades para anunciar el Evangelio y compartir la experiencia de fe. Es una oportunidad para vivir el mandato misionero de Cristo y llevar su mensaje de amor y salvación.",

            horario: "Se organiza los primeros meses de cada año",
            icono: "🌍",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/mision/IMG_6984.jpg",
                "/images/mision/IMG_20250109_104033523.jpg",
                "/images/mision/IMG-20250112-WA0050.jpg",
                "/images/mision/IMG-20250111-WA0020.jpg",
                "/images/mision/IMG-20250111-WA0009.jpg",
                "/images/mision/20250106_174247.jpg",
                "/images/mision/20250105_190150.jpg",
                "/images/mision/20250105_182122.jpg"
            ]
        },
        {
            id: "grupos-de-lectura",
            titulo: "Grupos de Lectura",
            descripcion: "Espacios de formación donde los jóvenes profundizan en la Palabra de Dios, la doctrina católica y la espiritualidad dominicana. A través del estudio y la reflexión comunitaria, crecemos en la fe y el conocimiento.",   
            horario: "Sabado de 18:00hs hasta las 20:00hs",
            icono: "📖",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            id: "ultreya",
            titulo: "Ultreya",
            descripcion: "Encuentros donde los jóvenes que han vivido las Jornadas se reúnen para compartir su experiencia de fe, orar juntos y apoyarse mutuamente en el camino de conversión. Es el espacio donde se fortalece la comunidad y se sostiene la vida espiritual.",
            horario: "Cada primer viernes de cada mes a las 19:00hs",
            icono: "🔥",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/ultreya/20250801_211623.jpg",
                "/images/ultreya/IMG_20250509_212321942.jpg",
                "/images/ultreya/IMG-20241219-WA0010.jpg"
            ]
        }
    ];

    return (
        <PageTransition variant="default">
            <div  className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
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
                                <p className="text-xl text-justify leading-relaxed tracking-tight text-[#2c1810] mb-6">
                                    Los apostolados son el corazón misionero de nuestra comunidad. Cada comisión es más que una función organizativa: 
                                    es una forma concreta de evangelizar y vivir el carisma dominicano de &quot;contemplar y predicar desde lo contemplado&quot;.
                                </p>
                                <p className="text-lg text-[#8b7355] italic">
                                    &quot;Cada uno según el don que ha recibido, póngalo al servicio de los demás&quot; 
                                    <span className="block text-[#d4af37] mt-2">— 1 Pedro 4, 10</span>
                                </p>
                            </div>
                        </div>

                        {/* Apostolados detallados */}
                        <div className="mb-20">
                            <div className="space-y-12">
                                {apostoladosDetallados.map((apostolado, index) => (
                                    <div id={apostolado.id} key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
                                            <div className="text-center lg:text-left">
                                                
                                                <h3 className="text-3xl font-display font-bold text-[#2c1810] mb-4">
                                                    {apostolado.titulo}
                                                </h3>
                                                <div className="bg-[#f5f2ed] rounded-lg p-4 inline-block">
                                                    <p className="text-[#8b7355] font-semibold">
                                                        ⏰ {apostolado.horario}
                                                    </p>
                                                </div>
                                                <p className="text-lg text-justify leading-relaxed tracking-tight text-[#2c1810] mb-6">
                                                    {apostolado.descripcion}
                                                </p>
                                            </div>
                                                {apostolado.imagenes && (
                                                    <div className="mt-8 sm:mt-0">

                                                        <div className="flex justify-center md:justify-end ">
                                                            <div className="w-full md:w-[400px] h-[400px]">
                                                                <ImageCarousel 
                                                                    images={apostolado.imagenes}
                                                                    interval={4000}
                                                                    className=" w-full h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}                                        
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PageTransition>
    );
}