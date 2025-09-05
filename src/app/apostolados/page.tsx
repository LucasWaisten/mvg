import { Title, Subtitle, Subtitle2 } from "@/componets/common/title";
import ImageCarousel from "@/componets/common/image-carousel";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page(){
    const apostoladosDetallados = [
        {
            id: "noche-de-caridad",
            titulo: "Noche de Caridad",
            descripcion: "Salimos a las calles para compartir el amor de Dios con los más necesitados. Oración, escucha y caridad concreta.",
            horario: "Miércoles 16:00hs - 22:00hs",
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
            descripcion: "Salidas misioneras a barrios y comunidades para anunciar el Evangelio. Vivimos el mandato misionero de Cristo.",
            horario: "Primeros meses del año",
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
            id: "coro",
            titulo: "Coro",
            descripcion: "Alabamos a Dios a través de la música. Participamos en misas y eventos del Movimiento con cantos litúrgicos.",
            horario: "Sábados 16:00hs - 18:00hs",
            icono: "🎵",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            id: "ultreya",
            titulo: "Ultreya",
            descripcion: "Encuentros mensuales para jóvenes que vivieron las Jornadas. Compartimos fe, oramos juntos y fortalecemos la comunidad.",
            horario: "Primer viernes del mes 19:00hs",
            icono: "🔥",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/ultreya/20250801_211623.jpg",
                "/images/ultreya/IMG_20250509_212321942.jpg",
                "/images/ultreya/IMG-20241219-WA0010.jpg"
            ]
        },
        {
            id: "peregrinacion-lujan",
            titulo: "Peregrinación Luján",
            descripcion: "Peregrinación anual a la Basílica de Luján. Experiencia de fe y devoción mariana en comunidad.",
            horario: "Anual (Octubre)",
            icono: "⛪",
            color: "from-[#d4af37] to-[#b8860b]"
        },
        {
            id: "cartas-de-lecturas",
            titulo: "Cartas de Lecturas",
            descripcion: "Grupos de estudio bíblico y formación en la fe. Profundizamos en la Palabra de Dios y la doctrina católica.",
            horario: "Sábados 18:00hs - 20:00hs",
            icono: "📖",
            color: "from-[#8b7355] to-[#cd7f32]"
        }
    ];

    return (
        <PageTransition variant="default">
            <div  className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f5f2ed]">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Título principal */}
                        <div className="text-center mb-12">
                            <Title title="Nuestros Apostolados" />
                        </div>

                        {/* Introducción */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 mb-12">
                            <div className="text-center max-w-4xl mx-auto">
                                <Subtitle subtitle="Servir desde el carisma dominicano" />
                                <p className="sm:text-lg text-base text-justify leading-relaxed tracking-tight text-[#2c1810] mb-6">
                                    Nuestra misión está ligada a nuestra identidad. Queremos vivir lo que anunciamos y anunciar lo que vivimos.
                                    Como jóvenes bautizados, estamos llamados a ser testigos del amor del Padre y a compartir la Buena Noticia de Cristo.
                                    El corazón de nuestra misión son las Jornadas, espacios donde experimentamos la obra de la gracia de Cristo.
                                </p>
                                <p className="sm:text-base text-sm text-[#8b7355] italic">
                                    &quot;Cada uno según el don que ha recibido, póngalo al servicio de los demás&quot; 
                                    <span className="block text-[#d4af37] mt-2">— 1 Pedro 4, 10</span>
                                </p>
                            </div>
                        </div>

                        {/* Apostolados detallados */}
                        <div className="mb-16">
                            <Subtitle subtitle="Actividades y Servicios" />
                            <div className="space-y-8">
                                {apostoladosDetallados.map((apostolado, index) => (
                                    <div id={apostolado.id} key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#d4af37]/20 p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                            <div className="text-center lg:text-left">
                                                <Subtitle2 subtitle={apostolado.titulo} />
                                                <div className="bg-[#f5f2ed] rounded-lg p-3 inline-block mb-4">
                                                    <p className="text-[#8b7355] font-semibold text-sm">
                                                        ⏰ {apostolado.horario}
                                                    </p>
                                                </div>
                                                <p className="sm:text-base text-base text-justify leading-relaxed tracking-tight text-[#2c1810] mb-4">
                                                    {apostolado.descripcion}
                                                </p>
                                            </div>
                                            {apostolado.imagenes && (
                                                <div className="mt-6 lg:mt-0">
                                                    <div className="flex justify-center lg:justify-end">
                                                        <div className="w-full lg:w-[350px] h-[350px]">
                                                            <ImageCarousel 
                                                                images={apostolado.imagenes}
                                                                interval={4000}
                                                                className="w-full h-full"
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