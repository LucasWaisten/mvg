import ComunidadGallery from "@/componets/quienes-somos/comunity-galery";
import { Subtitle, Title } from "@/componets/common/title";
import MiniCard from "@/componets/quienes-somos/mini-card";

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-20">
            {/* Título principal */}
            <section className="text-center max-w-3xl mx-auto">
                <Title title={"¿Quiénes somos?"} />
            </section>

            <section className="my-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-25 items-center">
                    <ComunidadGallery />
                    <div className="space-y-6">
                        <div className="text-center mb-10">
                            <Subtitle subtitle="Identidad y misión" />
                        </div>
                        <p className="text-2xl leading-tight text-gray-700">
                            El <strong className="font-shantell">Movimiento de Vida en Gracia</strong> es una comunidad de jóvenes laicos católicos que, animados por el carisma dominicano, busca vivir y anunciar el amor de Dios. Somos parte de la Iglesia y estamos acompañados espiritualmente por los frailes del Convento San Pedro Telmo.
                        </p>
                        <p className="text-2xl italic text-text-main">
                            Creemos en el amor de Dios, y nuestra vida quiere ser respuesta a ese don recibido.
                        </p>
                        <p className="text-2xl leading-tight text-gray-700">
                            El Movimiento nace del deseo de compartir con otros jóvenes la experiencia viva del encuentro con Cristo. Nuestra misión es <strong>evangelizar desde la gracia</strong>, animando a cada persona a vivir una conversión auténtica, una vida nueva en el Espíritu y una Fe en comunidad.
                        </p>
                        <p className="text-2xl leading-tight text-gray-700">
                            Buscamos que muchos puedan descubrir que <strong>Dios los ama</strong>, que está vivo y actúa hoy, en medio del mundo.
                        </p>
                        <p className="text-2xl leading-tight text-gray-700">
                            La vida espiritual es el centro de nuestro camino. Buscamos vivir en oración, en comunidad y en servicio, sostenidos por la gracia y la Palabra de Dios. Nuestra espiritualidad está profundamente marcada por el carisma de la Orden de Predicadores: <em>contemplar y predicar desde lo contemplado</em>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección: Cómo nos organizamos */}
            <section className="my-20 px-4">
                <div className="text-center mb-10">
                    <Subtitle subtitle="Cómo nos organizamos" />
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="w-full">
                        <img
                            src="/images/secretaria.webp"
                            alt="Secretaría del Movimiento"
                            className="rounded-xl shadow-md w-full"
                        />
                        <p className="text-xl leading-tight text-gray-700 italic">
                            Miembros de la secretaría 2025 del Movimiento de Vida en Gracia.
                        </p>
                    </div>
                    <div className="text-gray-700 space-y-4 text-2xl leading-tight">
                        <p>
                            El <strong>Movimiento de Vida en Gracia</strong> se organiza en <strong>comunidades locales</strong>, y cada comunidad se estructura en torno a dos grandes pilares: la <strong>Secretaría Local</strong> y las <strong>Comisiones</strong>.
                        </p>
                        <p>
                            La <b>Secretaría</b> es el equipo que anima, acompaña y coordina la vida de la comunidad. Está compuesta por jóvenes con distintas responsabilidades de servicio: presidencia, secretaría, tesorería, animación espiritual, entre otros.
                        </p>
                        <p>
                            Las <b>Comisiones</b> son los espacios donde cada miembro puede vivir su vocación al apostolado. Cada comisión es más que una función organizativa: es una forma concreta de evangelizar. Son el corazón misionero de la comunidad.
                        </p>
                        <p>
                            Cada Comisión lleva adelante un aspecto del carisma: la formación, la liturgia, el servicio a los más pobres, la comunicación, la música, entre otros. Así, la comunidad entera se construye y crece como un cuerpo vivo, donde cada parte aporta con su don.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-24 px-4">
                <div className="max-w-6xl mx-auto text-center space-y-8">
                    <Subtitle subtitle="Jornadas: el corazón del Movimiento" />

                    {/*<div className="flex justify-center">
                        <img
                            src="/images/image1.webp"
                            alt="Símbolo de la Jornada"
                            className="w-32 md:w-40 rounded-full shadow-md"
                        />
                    </div>*/}

                    <p className="text-2xl leading-tight text-gray-700">
                        Las Jornadas son un retiro para jóvenes de <strong>18 a 35 años</strong>, donde se vive un triple encuentro: <strong>con Dios, con uno mismo y con los demás</strong>. Son el corazón de nuestra comunidad, porque allí muchos descubren el amor de Dios de una manera personal y transformadora.
                    </p>

                    <p className="text-xl italic text-indigo-700 font-semibold">
                        “No podemos callar lo que hemos visto y oído” (Hech 4, 20)
                    </p>

                    <p className="text-2xl leading-tight  text-gray-700">
                        Las Jornadas están animadas por jóvenes del Movimiento y acompañadas por frailes dominicos. A través de ellas, se inicia un camino comunitario que se prolonga en la vida de fe cotidiana, las comisiones y el servicio.
                    </p>

                    <p className="text-xl text-gray-700">
                        Si tenés entre 18 y 35 años y querés vivir una experiencia distinta, profunda y llena de gracia... ¡te invitamos!
                    </p>

                    <a
                        href="mailto:secretaria@mvg.com.ar"
                        className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-xl shadow hover:bg-indigo-700 transition"
                    >
                        Quiero saber más
                    </a>
                </div>
            </section>
        </div>
    );
}
