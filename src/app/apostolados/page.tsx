import { Title, Subtitle, Subtitle2 } from "@/componets/common/title";
import ImageCarousel from "@/componets/common/image-carousel";
import { PageTransition } from "@/componets/common/PageTransition";

export default function Page(){
    const apostoladosDetallados = [
        {
            id: "noche-de-caridad",
            titulo: "Noche de Caridad",
            descripcion: "En esta comisión salimos al encuentro de las personas en situación de calle para compartir un plato de comida, la Palabra de Dios y momentos de escucha fraterna. En este apostolado semanal buscamos evangelizarnos mutuamente, transmitiendo el mensaje de Cristo con alegría y amor; y, a través de la oración, la cercanía y la caridad concreta, llevamos la esperanza del Evangelio a quienes más lo necesitan.",
            horario: "Miércoles 16:00hs - 22:00hs",
            icono: "🕯️",
            color: "from-[#ffde59] to-[#ffde59]",
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
            descripcion: "En esta comisión reúne a jóvenes comprometidos con la evangelización en distintos contextos y realidades. A lo largo del año, los miembros se preparan mediante el estudio y la oración para anunciar el Evangelio. Realizan salidas misioneras a barrios y comunidades, promoviendo la participación de otros miembros de la comunidad y compartiendo la alegría del Evangelio a través de su testimonio y acciones concretas.\nEl MVG organiza, al menos, una misión anual durante el verano u otra época del año. Este apostolado permite vivir el mandato misionero de Cristo, fortalecer la fe de los participantes y fomentar el compromiso con la comunidad, llevando esperanza y acompañamiento a quienes más lo necesitan.",
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
            titulo: "Coro y Liturgia",
            descripcion: "En esta comisión se encarga de preparar la música y los cantos para las misas, Ultreyas, adoraciones y cualquier otra actividad del Movimiento que requiera acompañamiento musical. Su labor no solo contribuye a crear un ambiente de oración y alabanza, sino que también fortalece la participación litúrgica de toda la comunidad.",
            horario: "Sábados 16:00hs - 18:00hs",
            icono: "🎵",
            color: "from-[#ffde59] to-[#ffde59]",
            imagenes: [
                "/images/coro/coro.jpeg",
                "/images/coro/coro2.jpeg",
            ]
        },
        {
            id: "peregrinacion-lujan",
            titulo: "Peregrinación Luján",
            descripcion: "En esta comisión se organiza la participación del MVG en la peregrinación anual de jóvenes al santuario de la Virgen de Luján, promoviendo la devoción mariana y un apostolado de fe profundo y comunitario. Su labor combina la organización de la peregrinación con el crecimiento espiritual en María y el servicio a los demás, haciendo de la preparación un camino de fe que fortalece a cada miembro y a toda la comunidad.",
            horario: "Anual (Octubre)",
            icono: "⛪",
            color: "from-[#ffde59] to-[#ffde59]",
            imagenes: [
                "/images/foto-lujan2.jpeg",
                "/images/foto-lujan.jpeg",
            ]
        },
        {
            id: "eventos",
            titulo: "Eventos",
            descripcion: "La Comisión de Eventos organiza y coordina todas las actividades y encuentros comunitarios del MVG a lo largo del año. Su misión es garantizar que cada evento, se desarrolle de manera ordenada, fraterna y al servicio de la comunidad.Trabaja con compromiso y dedicación, cuidando tanto los detalles logísticos como los espirituales: desde la ambientación y la comida hasta la gestión de materiales y espacios, asegurando que cada momento vivido en comunidad sea una verdadera experiencia de encuentro con Dios y con los hermanos.",
            //horario: "Eventualmente",
            icono: "🎉",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/evento1.jpeg",
                "/images/evento2.jpeg",
            ]
        },
        {
            id: "difusión",
            titulo: "Difusión",
            descripcion: "La Comisión de Difusión es el equipo encargado de comunicar y visibilizar las actividades, eventos y la vida comunitaria del MVG, tanto en redes sociales como en los canales internos. Su misión es evangelizar a través de los medios digitales, compartiendo contenido de forma dinámica, creativa y cercana. Además, mantiene informada a la comunidad, genera cercanía y apoya la misión del Movimiento.",
            //horario: "Eventualmente",
            icono: "📱",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/difusion2.jpeg",
                "/images/difusion1.jpeg",
                "/images/difusion3.jpeg",
            ]
        },
        {
            id: "cartas-de-lecturas",
            titulo: "Grupos de Lecturas",
            descripcion: "Espacios de formación donde los jóvenes profundizan en la Palabra de Dios, la doctrina católica y la espiritualidad dominicana. A través del estudio y la reflexión comunitaria, crecemos en la fe y el conocimiento. Se reúnen cada 15 días durante todo el año, fortaleciendo su vida espiritual, su conocimiento y su compromiso cristiano.",
            horario: "Sábados 18:00hs - 20:00hs",
            icono: "📖",
            color: "from-[#8b7355] to-[#cd7f32]",
            imagenes: [
                "/images/foto-lectura.jpeg",
            ]
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
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-8 mb-12">
                            <div className="text-center max-w-4xl mx-auto">
                                <Subtitle subtitle="Servir desde el carisma dominicano" />
                                <p className="sm:text-lg text-base text-justify leading-relaxed tracking-tight text-[#2c1810] mb-6">
                                    Nuestra misión está ligada a nuestra identidad. Queremos vivir lo que anunciamos y anunciar lo que vivimos.
                                    Como jóvenes bautizados, estamos llamados a ser testigos del amor del Padre y a compartir la Buena Noticia de Cristo.
                                    El corazón de nuestra misión son las Jornadas, espacios donde experimentamos la obra de la gracia de Cristo.
                                </p>
                                <p className="sm:text-base text-sm text-[#8b7355] italic">
                                    &quot;Cada uno según el don que ha recibido, póngalo al servicio de los demás&quot; 
                                    <span className="block text-[#ffde59] mt-2">— 1 Pedro 4, 10</span>
                                </p>
                            </div>
                        </div>

                        {/* Apostolados detallados */}
                        <div className="mb-16">
                            <Subtitle subtitle="Comisiones" />
                            <div className="space-y-8">
                                {apostoladosDetallados.map((apostolado, index) => (
                                    <div id={apostolado.id} key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ffde59]/20 p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                            <div className="text-center lg:text-left">
                                                <Subtitle2 subtitle={apostolado.titulo} />
                                                <div className="bg-[#f5f2ed] rounded-lg p-3 inline-block mb-4">
                                                    <p className="text-[#8b7355] font-semibold text-sm">
                                                        {apostolado?.horario }
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