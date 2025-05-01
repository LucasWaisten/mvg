import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-background py-36 mb-32">
            {/* Franja con fondo secundario */}
            <div className="relative bg-secondary rounded-xl shadow-lg w-full flex flex-col lg:flex-row items-center lg:items-stretch px-6 lg:px-16 py-12">

                {/* Imagen overlapping centrada verticalmente */}
                <div className="absolute top-1/2 -translate-y-1/2 left-8 w-[320px] max-w-full z-20">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                        <Image
                            src="/images/domingo.webp"
                            alt="Domingo en comunidad"
                            width={320}
                            height={444}
                            className="object-cover w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Espacio reservado en mobile */}
                <div className="h-[444px] w-full lg:hidden"></div>

                {/* Texto */}
                <div className="w-full lg:pl-[360px] z-10">
                    <h2 className="text-4xl font-bold text-[--color-text] mb-6">
                        Sobre Nosotros
                    </h2>
                    <p className="text-lg text-[--color-text] leading-relaxed mb-4">
                        Somos una comunidad de jóvenes que <i>hemos conocido el amor que Dios nos tiene y hemos creído en él</i> (1 Jn 4, 16), y desde ahí queremos vivir y anunciar lo vivido.
                    </p>
                    <p className="text-lg text-[--color-text] leading-relaxed mb-4">
                        Nuestra misión nace de lo que hemos contemplado y experimentado: que el encuentro con Cristo transforma la vida. Participamos del carisma de la Orden de Predicadores, que nos impulsa a <i>contemplar y dar de lo contemplado</i>.
                    </p>
                    <p className="text-lg text-[--color-text] leading-relaxed mb-4">
                        Por eso, a través de retiros, apostolados y el testimonio cotidiano, queremos llevar este anuncio a otros jóvenes.
                    </p>
                    <p className="text-lg text-[--color-text] leading-relaxed">
                        <strong>Jóvenes evangelizando jóvenes.</strong> Esa es nuestra vocación y nuestro camino.
                    </p>
                </div>
            </div>
        </section>
    );
}